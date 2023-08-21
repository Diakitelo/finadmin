import Link from 'next/link';
import prisma from '@/lib/prisma';
import TableHeader from '@/components/table-header';

export const revalidate = 0;

export default async function Customer() {
  const customers = await prisma.customer.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });
  return (
    <div className="space-y-5">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-semibold text-black">Clients</h2>

        <Link
          href="customers/new"
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
          <span>Ajouter un client</span>
        </Link>
      </div>

      <div className="w-full bg-white rounded-lg p-5">
        <div className="overflow-hidden">
          <table className="min-w-full text-black">
            <TableHeader data={CustomerTableHeader} />
            <tbody>
              {customers.map((customer) => (
                <tr key={customer.id}>
                  <td className="text-left py-3 px-5">{customer.lastName}</td>
                  <td className="text-left py-3 px-5">{customer.firstName}</td>
                  <td className="text-left py-3 px-5">{customer.email}</td>
                  <td className="text-left py-3 px-5">{customer.phone}</td>
                  <td className="text-left py-3 px-5">{customer.city}</td>
                  <td className="text-left py-3 px-5 flex gap-1.5">
                    <Link
                      href={`customers/${customer.id}/edit`}
                      className="text-blue-500 hover:bg-gray-50 p-2 rounded-full"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                        />
                      </svg>
                    </Link>
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

const CustomerTableHeader = [
  'Nom',
  'Prénom',
  'Email',
  'Téléphone',
  'Ville',
  'Actions',
];
