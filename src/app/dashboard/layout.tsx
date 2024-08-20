import Sidebar from "@/components/sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid md:grid-cols-4 lg:grid-cols-5 min-h-[100dvh]">
      <Sidebar className="" />
      <div className="bg-lime-500 md:col-span-3 lg:col-span-4 flex flex-col h-full flex-grow">
        {children}
      </div>
    </div>
  );
}
