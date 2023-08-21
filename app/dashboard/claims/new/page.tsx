import prisma from '@/lib/prisma';
import TextField from '@/components/ui/text-field';
import Link from 'next/link';
import { z } from 'zod';
import { redirect } from 'next/navigation';

import SubmitButton from '@/components/submit-button';
import SelectField from '@/components/ui/select-field';
import Label from '@/components/ui/label';

const addOperationSchema = z.object({
  operationId: z.coerce.number(),
  reason: z.string(),
  amount: z.coerce.number(),
});

async function handleAddClaim(formData: FormData) {
  'use server';

  const form = Object.fromEntries(formData);

  const data = addOperationSchema.parse(form);

  await prisma.claim.create({
    data,
  });

  redirect('/dashboard/claims');
}

export default async function AddClaim() {
  const operations = await prisma.operation.findMany();

  return (
    <div className="space-y-5">
      <h2 className="text-3xl text-black font-semibold">
        Ajouter une réclamation
      </h2>
      <form
        className="bg-white rounded-lg p-8 space-y-6"
        action={handleAddClaim}
      >
        <div className="flex gap-6">
          <div className="basis-1/2">
            <SelectField
              className="col-span-full"
              label="Sélectionnez l'opération"
              id="operationId"
              name="operationId"
            >
              {operations.map((operation) => (
                <option key={operation.id} value={operation.id}>
                  Opération No {operation.id}
                </option>
              ))}
            </SelectField>
          </div>

          <div className="basis-1/2">
            <Label id="reason">Saissisez la raison de la réclamation</Label>
            <textarea
              id="reason"
              name="reason"
              placeholder="Saissisez la raison de la réclamation"
              rows={5}
              className="block w-full appearance-none rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-gray-900 focus:border-2 focus:border-[#31B099] focus:bg-white focus:outline-none focus:ring-[#31B099] sm:text-sm"
              required
            />
          </div>
        </div>

        <TextField
          label="Saisissez le montant de la réclamation"
          id="amount"
          name="amount"
          type="number"
          placeholder="Saisissez le montant de la réclamation"
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
