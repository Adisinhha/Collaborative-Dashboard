import { Sidebar } from "./_components/sidebar";
import { OrgSidebar } from "./_components/sidebar/org-sidebar";

interface DashboardLayoutProps{
  children: React.ReactNode;
};

 const DashboardLayout = ({
  children,
 }: DashboardLayoutProps) =>{
  return(
    <main className="h-fixed">
      <Sidebar />
      <div className="pl-[80px h-full]">
        <div className="flex gap-x-3 h-full">
          <OrgSidebar />
          <div className="h-full flex-1">
      {children}
      </div>
      </div>
      </div>
    </main>
  )
 }
  export default DashboardLayout;