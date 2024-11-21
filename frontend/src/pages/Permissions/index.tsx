import SidebarComp from "@/components/Sidebar";
import Header from "@/components/Sidebar/Header";

type Permission = {
  type: string;
  provider: string;
  status: "Active" | "Expired" | "Pending";
  action: "Revoke" | "Grant" | "Approve";
};

const permissionsData: Permission[] = [
  {
    type: "View Health Records",
    provider: "Dr. Lee",
    status: "Active",
    action: "Revoke",
  },
  {
    type: "Edit Health Records",
    provider: "Dr. Smith",
    status: "Expired",
    action: "Grant",
  },
  {
    type: "Share Token",
    provider: "Dr. Jane",
    status: "Active",
    action: "Revoke",
  },
  {
    type: "View Lab Results",
    provider: "Dr. Jane",
    status: "Pending",
    action: "Approve",
  },
];

const statusStyles: Record<string, string> = {
  Active: "bg-green-500 text-black",
  Expired: "bg-red-500 text-white",
  Pending: "bg-yellow-500 text-black",
};

const actionStyles: Record<string, string> = {
  Revoke: "bg-orange-500 text-black hover:bg-orange-600",
  Grant: "bg-teal-500 text-black hover:bg-teal-600",
  Approve: "bg-green-500 text-black hover:bg-green-600",
};

const PermissionsPage = () => {
  // const handleActionClick = (id: string, action: string) => {
  //   console.log(`Action "${action}" triggered for permission ID: ${id}`);
  // };

  return (
    <div className="flex bg-[#0F121E] text-white min-h-svh">
      <SidebarComp />

      <main className="flex-1 p-3 sm:p-6 overflow-x-hidden">
        <Header />

        <div className="permissions-table bg-gray-900 p-3 sm:p-6 rounded-lg">
          <h2 className="text-white text-lg font-semibold mb-4">Permissions</h2>
          <div className="bg-black text-white rounded-md p-3 sm:p-6 overflow-x-auto">
            <table className="table-auto w-full text-left border-separate border-spacing-0">
              <thead>
                <tr>
                  <th className="py-2 px-4">Permission Type</th>
                  <th className="py-2 px-4">Provider</th>
                  <th className="py-2 px-4 text-center">Status</th>
                  <th className="py-2 px-4 text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {permissionsData.map((permission, index) => (
                  <tr key={index} className="border-b border-gray-700">
                    <td className="py-2 px-4">{permission.type}</td>
                    <td className="py-2 px-4">{permission.provider}</td>
                    <td className="py-2 px-4 text-center">
                      <button
                        className={`px-4 py-1 w-24 text-center rounded-full text-sm font-semibold ${
                          statusStyles[permission.status]
                        }`}
                      >
                        {permission.status}
                      </button>
                    </td>
                    <td className="py-2 px-4 text-center">
                      <button
                        className={`px-4 py-1 w-24 text-center rounded-md text-sm font-semibold ${
                          actionStyles[permission.action]
                        }`}
                      >
                        {permission.action}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PermissionsPage;
