import { LuCamera, LuMapPinned, LuBadgeCheck } from "react-icons/lu";
import FeatureCard from "./FeatureCard";

function FeaturesSection() {
  return (
    <section
      id="features"
      className="py-24 bg-gray-50 scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <span className="text-blue-700 font-semibold uppercase tracking-wider">
            Features
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3">
            Why Choose Civic Issue Reporter?
          </h2>

          <p className="text-gray-600 mt-5 max-w-3xl mx-auto text-lg">
            Our platform empowers citizens to report civic problems quickly,
            monitor their progress, and help local authorities resolve issues
            efficiently.
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-10">

          <FeatureCard
            icon={<LuCamera />}
            title="Easy Issue Reporting"
            description="Upload photos and describe problems like potholes, garbage, broken streetlights, and drainage issues in just a few clicks."
          />

          <FeatureCard
            icon={<LuMapPinned />}
            title="Real-Time Tracking"
            description="Monitor the progress of your complaints from submission to resolution with live status updates."
          />

          <FeatureCard
            icon={<LuBadgeCheck />}
            title="Quick Resolution"
            description="Complaints are routed to the appropriate authorities, ensuring faster response times and better transparency."
          />

        </div>

      </div>
    </section>
  );
}

export default FeaturesSection;