import SidebarComp from "@/components/Sidebar";
import Header from "@/components/Sidebar/Header";

const Records: React.FC = () => {
  const records = [
    {
      id: "#001",
      date: "09.07.2024",
      type: "MRI Scan",
      provider: "Dr. Lee",
      notes: "Medication for hypertension",
    },
  ];

  return (
    <div className="flex bg-[#0F121E] text-white min-h-svh">
      <SidebarComp />

      <main className="flex-1 p-3 sm:p-6 overflow-x-hidden">
        <Header />

        <section className="mt-6">
          <h2 className="text-2xl font-bold mb-4">Health Management Record</h2>

          <div className="bg-[#15192B] p-3 sm:p-6 rounded-lg overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="text-gray-400">
                  <th className="py-2 px-4">ID</th>
                  <th className="py-2 px-4">Date</th>
                  <th className="py-2 px-4">Record Type</th>
                  <th className="py-2 px-4">Provider</th>
                  <th className="py-2 px-4">Notes</th>
                </tr>
              </thead>
              <tbody>
                {records.map((record, index) => (
                  <tr
                    key={index}
                    className={`hover:bg-[#1C2234] ${
                      index % 2 === 0 ? "bg-[#131722]" : "bg-[#15192B]"
                    }`}
                  >
                    <td className="py-2 px-4">{record.id}</td>
                    <td className="py-2 px-4">{record.date}</td>
                    <td className="py-2 px-4">{record.type}</td>
                    <td className="py-2 px-4">{record.provider}</td>
                    <td className="py-2 px-4">{record.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Records;
