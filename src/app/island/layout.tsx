import IslandSidebar from '@/components/IslandSidebar';

export default function IslandLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex gap-8">
      <IslandSidebar />
      <div className="flex-1 min-w-0">
        {children}
      </div>
    </div>
  );
}
