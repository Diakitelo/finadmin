import Link from 'next/link';
import TableHeader from '@/components/table-header';
import prisma from '@/lib/prisma';
import { formatCurrency } from '@/utils/formatNumber';
import { formatDate, formatTime } from '@/utils/formatDate';

export const revalidate = 0;

export default async function Operation() {
  const operations = await prisma.operation.findMany({
    include: {
      customer: true,
    },
  });
  return (
    <div className="space-y-5">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-semibold text-black">Opérations</h2>

        <Link
          href="operations/new"
          className="flex items-center bg-primary rounded-md text-white font-medium gap-1 px-3 py-2.5 text-sm"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v12m6-6H6"
            />
          </svg>
          <span>Ajouter une opération</span>
        </Link>
      </div>

      <div className="w-full bg-white rounded-lg p-5">
        <div className="overflow-hidden">
          <table className="min-w-full text-black">
            <TableHeader data={CustomerTableHeader} />
            <tbody>
              {operations.map((operation) => (
                <tr key={operation.id}>
                  <td className="text-left py-3 px-5">
                    {operation.customer.firstName} {operation.customer.lastName}
                  </td>
                  <td className="text-left py-3 px-5">{operation.type}</td>
                  <td className="text-left py-3 px-5">
                    {formatCurrency(operation.amount)}
                  </td>
                  <td className="text-left py-3 px-5">
                    {formatDate(operation.createdAt)} à{' '}
                    {formatTime(operation.createdAt)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

const CustomerTableHeader = ['Client', 'Type', 'Montant', 'Date'];
