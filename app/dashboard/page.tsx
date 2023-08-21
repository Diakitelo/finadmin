import prisma from '@/lib/prisma';

export const revalidate = 0;

export default async function Page() {
  const [customerCount, operationCount, claimCount] = await Promise.all([
    prisma.customer.count(),
    prisma.operation.count(),
    prisma.claim.count(),
  ]);

  return (
    <div className="space-y-5">
      <h2 className="text-3xl font-semibold text-black">Dashboard</h2>

      <div className="grid grid-cols-3 gap-6">
        <div className="w-full flex justify-between flex-col h-40 bg-white rounded-lg p-5">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8 text-black"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
              />
            </svg>
          </div>

          <div>
            <p className="text-black text-3xl font-bold">{customerCount}</p>
            <h4 className="text-black">Totat client</h4>
          </div>
        </div>
        <div className="w-full flex justify-between flex-col h-40 bg-white rounded-lg p-5">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8 text-black"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 4.5h14.25M3 9h9.75M3 13.5h5.25m5.25-.75L17.25 9m0 0L21 12.75M17.25 9v12"
              />
            </svg>
          </div>

          <div>
            <p className="text-black text-3xl font-bold">{operationCount}</p>
            <h4 className="text-black">Totat Opération</h4>
          </div>
        </div>
        <div className="w-full flex justify-between flex-col h-40 bg-white rounded-lg p-5">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8 text-black"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3"
              />
            </svg>
          </div>

          <div>
            <p className="text-black text-3xl font-bold">{claimCount}</p>
            <h4 className="text-black">Totat Réclamation</h4>
          </div>
        </div>
      </div>

      <div className="w-full h-96 bg-white rounded-lg m-2"></div>
    </div>
  );
}
