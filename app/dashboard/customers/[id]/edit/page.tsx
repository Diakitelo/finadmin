import prisma from '@/lib/prisma';
import Link from 'next/link';
import { z } from 'zod';
import { redirect } from 'next/navigation';

import TextField from '@/components/ui/text-field';
import SubmitButton from '@/components/submit-button';

const editCustomerSchema = z.object({
  id: z.coerce.number(),
  firstName: z.string(),
  lastName: z.string(),
  email: z.string(),
  phone: z.string(),
  city: z.string(),
});

async function handleEditCustomer(formData: FormData) {
  'use server';

  const form = Object.fromEntries(formData);

  const data = editCustomerSchema.parse(form);

  await prisma.customer.update({
    where: {
      id: data.id,
    },
    data,
  });

  redirect('/dashboard/customers');
}

export default async function EditCustomer({
  params,
}: {
  params: { id: string };
}) {
  const customer = await prisma.customer.findUnique({
    where: {
      id: Number(params.id),
    },
  });

  return (
    <div className="space-y-5">
      <h2 className="text-3xl font-semibold text-black">Modifier le client</h2>
      <form
        className="bg-white rounded-lg p-8 space-y-6"
        action={handleEditCustomer}
      >
        <div className="flex gap-6">
          <div className="basis-1/2">
            <TextField
              label="Nom"
              id="firstName"
              name="firstName"
              autoComplete="firstName"
              placeholder="Nom"
              defaultValue={customer?.firstName}
              required
            />
          </div>

          <div className="basis-1/2">
            <TextField
              label="Prénom"
              id="lastName"
              name="lastName"
              autoComplete="lastName"
              placeholder="Prénom"
              defaultValue={customer?.lastName}
              required
            />
          </div>
        </div>

        <div className="flex gap-6">
          <div className="basis-1/2">
            <TextField
              label="Email"
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="Email"
              defaultValue={customer?.email}
              required
            />
          </div>

          <div className="basis-1/2">
            <TextField
              label="Téléphone"
              id="phone"
              name="phone"
              autoComplete="phone"
              placeholder="Téléphone"
              defaultValue={customer?.phone ? customer?.phone : ''}
              required
            />
          </div>
        </div>

        <TextField
          label="Ville"
          id="city"
          name="city"
          autoComplete="city"
          placeholder="Ville"
          defaultValue={customer?.city ? customer?.city : ''}
          required
        />

        <input type="hidden" name="id" defaultValue={String(customer?.id)} />

        <div className="flex gap-5 justify-end text-black items-center">
          <Link href="/dashboard/customers">Annuler</Link>
          <SubmitButton title="Modifier" />
        </div>
      </form>{' '}
    </div>
  );
}
