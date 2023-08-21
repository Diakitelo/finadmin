import Sidebar from './sidebar';
import TopBar from './top-bar';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex min-h-screen">
      <Sidebar />

      <div className="bg-gray-50 w-full">
        <TopBar />

        <div className="px-10 pl-80 pt-24">{children}</div>
      </div>
    </section>
  );
}
