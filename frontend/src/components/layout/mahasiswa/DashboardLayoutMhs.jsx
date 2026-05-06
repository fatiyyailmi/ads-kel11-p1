import SidebarMhs from "./SidebarMhs";

const DashboardLayoutMhs = ({ children }) => {
    return (
    <div className="flex bg-gray-100">

      {/* SIDEBAR */}
      <SidebarMhs />

      {/* RIGHT SIDE */}
      <div className="flex-1 flex flex-col">

        {/* CONTENT */}
        <main className="p-8">
          {children}
        </main>

      </div>
    </div>
  );
};

export default DashboardLayoutMhs;