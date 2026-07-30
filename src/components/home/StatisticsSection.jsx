import { FaUsers, FaClipboardList, FaCheckCircle, FaStar } from "react-icons/fa";
import StatCard from "./StatCard";

function StatisticsSection() {
    const stats = [
        {
            icon: <FaUsers />,
            number: "10,000+",
            label: "Active Users",
        },
        {
            icon: <FaClipboardList />,
            number: "5,200+",
            label: "Complaints Reported",
        },
        {
            icon: <FaCheckCircle />,
            number: "4,800+",
            label: "Issues Resolved",
        },
        {
            icon: <FaStar />,
            number: "95%",
            label: "Success Rate",
        },
    ];

    return (
        <section className="bg-white py-20">
            <div className="max-w-7xl mx-auto px-6">

                <div className="text-center mb-14">
                    <h2 className="text-4xl font-bold text-gray-800">
                        Our Impact
                    </h2>

                    <p className="text-gray-600 mt-3">
                        Together we are making cities cleaner, safer and smarter.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

                    {stats.map((stat, index) => (
                        <StatCard
                            key={index}
                            icon={stat.icon}
                            number={stat.number}
                            label={stat.label}
                        />
                    ))}

                </div>

            </div>
        </section>
    );
}

export default StatisticsSection;