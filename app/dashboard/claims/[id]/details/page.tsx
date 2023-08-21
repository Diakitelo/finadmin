import prisma from '@/lib/prisma';
import { formatDate } from '@/utils/formatDate';
import { formatCurrency } from '@/utils/formatNumber';

export default async function ClaimDetails({
  params,
}: {
  params: { id: string };
}) {
  const claim = await prisma.claim.findUnique({
    where: {
      id: Number(params.id),
    },
    select: {
      id: true,
      createdAt: true,
      amount: true,
      reason: true,
      status: true,
      operation: {
        select: {
          id: true,
          createdAt: true,
          amount: true,
          customer: {
            select: {
              firstName: true,
              lastName: true,
            },
          },
        },
      },
    },
  });

  if (!claim) {
    return <div className="space-y-5">Reclamation introuvable</div>;
  }

  const formattedClaim = {
    Client:
      claim.operation.customer.firstName +
      ' ' +
      claim.operation.customer.lastName,
    "Id de l'opération": claim.operation.id,
    "Date de l'opération": formatDate(claim.operation.createdAt),
    "Montant de l'opération": formatCurrency(claim.operation.amount),
    'Date de la réclamation': formatDate(claim.createdAt),
    'Montant de la réclamation': formatCurrency(claim.amount),
    Raison: claim.reason,
    Statut: claim.status,
  };

  return (
    <div className="space-y-5">
      <h2 className="text-3xl font-semibold text-black">
        Détails de la réclamation
      </h2>

      <div className="bg-white rounded-lg p-8 space-y-6">
        {Object.entries(formattedClaim).map(([key, value]) => (
          <div className="flex gap-6" key={key}>
            <div className="basis-1/2">
              <label className="text-sm font-medium text-gray-500">{key}</label>

              <p className="text-sm text-black">{value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
