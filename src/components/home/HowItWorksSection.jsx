import {
    LuFilePlus,
    LuClipboardCheck,
    LuBadgeCheck,
  } from "react-icons/lu";
  
  import HowItWorksCard from "./HowItWorksCard";
  
  function HowItWorksSection() {
    return (
      <section id="process" className="scroll-mt-24 py-24 bg-white">
  
        <div className="max-w-7xl mx-auto px-6">
  
          <div className="text-center mb-16">
  
            <span className="text-blue-700 font-semibold uppercase tracking-wider">
              Process
            </span>
  
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3">
              How It Works
            </h2>
  
            <p className="text-gray-600 text-lg mt-5 max-w-3xl mx-auto">
              Reporting civic issues is simple. Follow these three easy steps to
              help improve your community.
            </p>
  
          </div>
  
          <div className="grid md:grid-cols-3 gap-10">
  
            <HowItWorksCard
              step="1"
              icon={<LuFilePlus />}
              title="Report an Issue"
              description="Upload a photo, provide a description, and submit the location of the civic issue."
            />
  
            <HowItWorksCard
              step="2"
              icon={<LuClipboardCheck />}
              title="Authority Reviews"
              description="The complaint is sent to the appropriate department for verification and action."
            />
  
            <HowItWorksCard
              step="3"
              icon={<LuBadgeCheck />}
              title="Issue Resolved"
              description="Track the complaint status and receive updates until the issue is successfully resolved."
            />
  
          </div>
  
        </div>
  
      </section>
    );
  }
  
  export default HowItWorksSection;