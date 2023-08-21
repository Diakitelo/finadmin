import prisma from '@/lib/prisma';
import TextField from '@/components/ui/text-field';
import Link from 'next/link';
import { z } from 'zod';
import { redirect } from 'next/navigation';

import SubmitButton from '@/components/submit-button';
import SelectField from '@/components/ui/select-field';

const addOperationSchema = z.object({
  customerId: z.coerce.number(),
  type: z.string(),
  amount: z.coerce.number(),
});

async function handleAddOperation(formData: FormData) {
  'use server';

  const form = Object.fromEntries(formData);

  const data = addOperationSchema.parse(form);

  await prisma.operation.create({
    data,
  });

  redirect('/dashboard/operations');
}

export default async function AddOperation() {
  const customers = await prisma.customer.findMany();

  return (
    <div className="space-y-5">
      <h2 className="text-3xl text-black font-semibold">
        Ajouter une opération
      </h2>
      <form
        className="bg-white rounded-lg p-8 space-y-6"
        action={handleAddOperation}
      >
        <div className="flex gap-6">
          <div className="basis-1/2">
            <SelectField
              className="col-span-full"
              label="Client"
              id="customerId"
              name="customerId"
            >
              {customers.map((customer) => (
                <option key={customer.id} value={customer.id}>
                  {customer.firstName} {customer.lastName}
                </option>
              ))}
            </SelectField>
          </div>

          <div className="basis-1/2">
            <SelectField
              className="col-span-full"
              label="Type d'opération"
              id="type"
              name="type"
            >
              <option>Transfert</option>
              <option>Retrait</option>
            </SelectField>
          </div>
        </div>

        <TextField
          label="Montant"
          id="amount"
          name="amount"
          type="number"
          placeholder="Montant"
          className=""
          required
        />

        <div className="flex gap-5 justify-end text-black items-center">
          <Link href="/dashboard/operations">Annuler</Link>
          <SubmitButton title="Ajouter" />
        </div>
      </form>{' '}
    </div>
  );
}
