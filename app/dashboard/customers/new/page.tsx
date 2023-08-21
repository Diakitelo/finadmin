import prisma from '@/lib/prisma';
import TextField from '@/components/ui/text-field';
import Link from 'next/link';
import { z } from 'zod';
import { redirect } from 'next/navigation';

import SubmitButton from '@/components/submit-button';

const addCustomerSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  email: z.string(),
  phone: z.string(),
  city: z.string(),
});

async function handleAddCustomer(formData: FormData) {
  'use server';

  const form = Object.fromEntries(formData);

  const data = addCustomerSchema.parse(form);

  await prisma.customer.create({
    data,
  });

  redirect('/dashboard/customers');
}

export default function AddCustomer() {
  return (
    <div className="space-y-5">
      <h2 className="text-3xl text-black font-semibold">Ajouter un client</h2>
      <form
        className="bg-white rounded-lg p-8 space-y-6"
        action={handleAddCustomer}
      >
        <div className="flex gap-6">
          <div className="basis-1/2">
            <TextField
              label="Nom"
              id="firstName"
              name="firstName"
              autoComplete="firstName"
              placeholder="Nom"
              className=""
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
              className=""
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
          className=""
          required
        />

        <div className="flex gap-5 justify-end text-black items-center">
          <Link href="/dashboard/customers">Annuler</Link>
          <SubmitButton title="Ajouter" />
        </div>
      </form>{' '}
    </div>
  );
}
