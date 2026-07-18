import Sidebar from "@/components/layout/Sidebar";
import Topbar from "@/components/layout/Topbar";
import PageContainer from "@/components/layout/PageContainer";
import Footer from "@/components/layout/Footer";

interface AppShellProps {
  children: React.ReactNode;
}

export default function AppShell({ children }: AppShellProps) {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />

      <div className="flex flex-1 flex-col">
        <Topbar />

        <main className="flex-1">
          <PageContainer>{children}</PageContainer>
        </main>

        <Footer />
      </div>
    </div>
  );
}
