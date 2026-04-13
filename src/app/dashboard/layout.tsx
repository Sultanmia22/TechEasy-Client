

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-gray-300 w-full  min-h-screen">
      {children}
    </div>
  );
}