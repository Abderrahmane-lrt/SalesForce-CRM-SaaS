import heroImage from "../assets/hero.png";
import aboutImage from "../assets/about.png";
import { SignedOut } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";
import messagesIcon from "../assets/icons/messages.png";
import dashboardIcon from "../assets/icons/dashboard.png";
import tasksIcon from "../assets/icons/tasks.png";
import calendarIcon from "../assets/icons/calendar.png";
import assignIcon from "../assets/icons/assign.png";
import contactsIcon from "../assets/icons/contacts.png";
import previewImage from '../assets/preview.png'
import Navbar from "../components/NavBar";

const HomePage = () => {
  const services = [
    {
      title: "messages",
      description:
        "Track, nurture, and convert leads with seamless messaging and communication.",
      icon: messagesIcon,
    },
    {
      title: "dashboard",
      description:
        "Monitor KPIs and performance metrics in real-time with comprehensive analytics.",
      icon: dashboardIcon,
    },
    {
      title: "tasks & projects",
      description:
        "Organize and manage projects efficiently with task automation and tracking.",
      icon: tasksIcon,
    },
    {
      title: "calendar",
      description:
        "Schedule meetings, sync events, and manage your team's availability effortlessly.",
      icon: calendarIcon,
    },
    {
      title: "assign roles",
      description:
        "Manage team permissions and roles with flexible access control features.",
      icon: assignIcon,
    },
    {
      title: "contacts",
      description:
        "Build and maintain a centralized database of all your business relationships.",
      icon: contactsIcon,
    },
  ];

  return (
    <div className="">
      { /* Navbar  */}
      <Navbar />
      {/* Hero */}
      <section className="flex justify-between pt-10">
        <div className="pt-20">
          <h2
            style={{ lineHeight: 1.4 }}
            className="text-3xl lg:text-4xl font-bold tracking-wide max-w-162"
          >
            Strengthen your Client Relationships with Our{" "}
            <span className="text-orange-400"> CRM Solutions</span>
          </h2>
          <p className="py-3 text-slate-700 max-w-132">
            Well we're setting the record straight, this is not just another
            CRM, Its time re-focus on your contacts{" "}
          </p>
          <SignedOut>
            <TryForFreeButton />
          </SignedOut>
        </div>
        <div>
          <img
            src={heroImage}
            alt="hero image"
            width={400}
            height={260}
            className="hidden lg:block"
          />
        </div>
      </section>
      {/* About */}
      <section
        className="  mt-16 lg:flex flex-column   gap-43"
        id="about"
      >
        <div>
          <img
            src={aboutImage}
            alt="about image"
            width={400}
            height={260}
            className="rounded-2xl"
          />
        </div>
        <div className="pt-8">
          <p className="text-orange-400 font-bold pb-2">ABOUT US</p>
          <hr className="h-2 w-70 pb-2" />
          <h2
            style={{ lineHeight: 1.4 }}
            className="text-2xl max-w-116 font-bold pb-4"
          >
            Do you Keep getting frustrated with managing your client needs and
            employee deadlines?
          </h2>
          <p className="text-slate-700 max-w-132">
            Look no further, with our CRM orem ipsum dolor sit amet consectetur
            adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi
            repudiandae consequuntur voluptatum laborum numquam blanditiis harum
            quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque
            rerum! Provident similique accusantium nemo autem. Veritatis
            obcaecati.
          </p>
          <p className="text-orange-400 py-3 font-semibold my-5 ">
            {" "}
            &nbsp;{" "}
            <span className="bg-orange-400 text-white p-2 px-5 rounded-full">
              Book 30 Minutes Consultation For FREE{" "}
            </span>
          </p>
        </div>
      </section>
      {/* Services */}
      <section className="mt-10">
        <p className="text-slate-700 text-center font-semibold">
          What we offer
        </p>
        <h2 className="text-center text-3xl font-bold">
          Features & <span className="text-orange-400">Services</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 ">
          {services.map((service, index) => (
            <div
              key={index}
              className={`${service.title === 'dashboard' ? 'bg-orange-400' :'bg-white'  }   border-2 border-slate-500 rounded-lg  p-12 shadow-md hover:scale-105 hover:shadow-lg transition-shadow duration-300`}
            >
              <div className="flex justify-center mb-4">
                <img
                  src={service.icon}
                  alt={service.title}
                  width={64}
                  height={64}
                  className="rounded-lg"
                />
              </div>
              <h3  className={`${service.title === 'dashboard' ? 'text-white' :'text-gray-800'  } uppercase text-lg font-bold text-center   mb-3`}>
                {service.title}
              </h3>
              <p className={`${service.title === 'dashboard' ? 'text-white' :'text-gray-800'  }  text-sm   `}>
                {service.description}
              </p>
              <p className={`${service.title === 'dashboard' ? 'text-white' :'text-orange-400'  } text-sm font-bold   mt-3`}>Learn more</p>
            </div>
          ))}
        </div>
      </section>
      {/* Preview Section */}
      <section className=" bg-orange-500 rounded-4xl  ">
        <h2 className=" text-2xl text-white font-extrabold text-center pt-30 pb-5">Easy and convenient</h2>
        <img src={previewImage} alt="preview image"  />
      </section>
      {/* Pricing Plan  */}
      <section className="">
        <h2 className="text-center text-3xl font-bold">Our Pricing Plans</h2>
          
      </section>
    </div>
  );
};

export default HomePage;

function TryForFreeButton() {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate("/sign-in")}
      className="p-3 px-6 font-semibold bg-orange-400 rounded-md mt-4 text-white cursor-pointer"
    >
      Try it For Free
    </button>
  );
}
