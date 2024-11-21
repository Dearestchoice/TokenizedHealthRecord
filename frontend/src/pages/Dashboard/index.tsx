import Header from "@/components/Sidebar/Header";
import SidebarComp from "@/components/Sidebar";

function DashboardPage() {
  return (
    <div className="flex bg-[#0F121E] text-white min-h-svh">
      <SidebarComp />

      <main className="flex-1 p-3 sm:p-6 overflow-x-hidden">
        <Header />

        <section className="mt-6">
          <h2 className="text-xl font-semibold mb-2 font-sora">Health Hub</h2>
          <p className="mb-6 font-medium">
            Manage records, permissions, and sharing securely—all in one place.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 mt-4 bg-[#15192B] p-4 rounded-lg">
            <HealthHubStat
              title="24"
              subtitle="Health Records"
              description="Last Updated: 2 days ago"
            />
            <HealthHubStat
              title="3"
              subtitle="Active Accesses"
              description="Last Granted: Dr. Smith"
            />
            <HealthHubStat
              title="15"
              subtitle="Total Consultations"
              description="Upcoming Appointments: 2"
            />
            <HealthHubStat
              title="15"
              subtitle="Total Consultations"
              description="Upcoming Appointments: 2"
            />
          </div>
        </section>

        <section className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <ActivitySection />
          <NotificationSection />
        </section>
      </main>
    </div>
  );
}

export default DashboardPage;

interface HealthHubStatProps {
  title: string;
  subtitle: string;
  description: string;
}

const HealthHubStat: React.FC<HealthHubStatProps> = ({
  title,
  subtitle,
  description,
}) => (
  <div className="bg-[#1C2234] p-4 rounded-lg flex flex-col items-start">
    <h3 className="text-3xl font-bold">{title}</h3>
    <p className="text-gray-400">{subtitle}</p>
    <p className="text-xs text-gray-600 mt-1">{description}</p>
  </div>
);

const ActivitySection: React.FC = () => (
  <div className="bg-[#15192B] p-4 rounded-lg">
    <h3 className="text-xl font-semibold mb-4">Recent Activity</h3>
    {[
      "MRI Scan Viewed by Dr. Lee",
      "Token Shared for Test Results",
      "MRI Scan Viewed by Dr. Jane",
      "Token Shared for Test Results",
    ].map((activity, index) => (
      <ActivityItem
        key={index}
        activity={activity}
        date={`${index + 1 * 2} Days Ago`}
      />
    ))}
  </div>
);

interface ActivityItemProps {
  activity: string;
  date: string;
}

const ActivityItem: React.FC<ActivityItemProps> = ({ activity, date }) => (
  <div className="flex gap-2 justify-between items-center bg-[#1C2234] p-3 rounded-lg mb-2">
    <div>
      <p>{activity}</p>
      <p className="text-xs text-gray-400">{date}</p>
    </div>
    <button className="bg-[#3EE0AC] py-1 px-3 rounded-lg text-sm">View</button>
  </div>
);

const NotificationSection: React.FC = () => (
  <div className="bg-[#15192B] p-4 rounded-lg">
    <h3 className="text-xl font-semibold mb-4">Notifications</h3>
    {[
      "New token generated for Lab Results",
      "Token shared for Prescription Renewal",
      "Token shared for Medical History",
      "New access request from Dr. Jane",
    ].map((notification, index) => (
      <NotificationItem
        key={index}
        notification={notification}
        date={`${index + 1 * 2} Days Ago`}
      />
    ))}
  </div>
);

interface NotificationItemProps {
  notification: string;
  date: string;
}

const NotificationItem: React.FC<NotificationItemProps> = ({
  notification,
  date,
}) => (
  <div className="bg-[#1C2234] p-3 rounded-lg mb-2">
    <p>{notification}</p>
    <p className="text-xs text-gray-400">{date}</p>
  </div>
);
