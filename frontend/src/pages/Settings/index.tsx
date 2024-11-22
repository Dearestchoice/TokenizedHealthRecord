import SidebarComp from "@/components/Sidebar";
import Header from "@/components/Sidebar/Header";

const SettingsPage: React.FC = () => {
  return (
    <div className="flex bg-[#0F121E] text-white min-h-svh">
      <SidebarComp />

      <main className="flex-1 p-3 sm:p-6 overflow-x-hidden">
        <Header />

        <div className="">
          Settings
        </div>
      </main>
    </div>
  );
};

export default SettingsPage;
