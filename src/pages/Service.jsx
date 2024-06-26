import React from 'react'
import { Link } from 'react-router-dom';
import { ClockIcon, ChartBarIcon, LightBulbIcon ,ArrowsUpDownIcon , TrophyIcon,

 } from "@heroicons/react/24/solid";

 import ServiceHero from "../assets/imgs/serviceHero.svg"






const softwareDevelopment = [
  {
    Icon: <ClockIcon className="w-14 " />,
    Heading: "Increased Efficiency",
    Description:
      " Automate tasks and streamline processes to free up valuable resources.",
  },
  {
    Icon: <ChartBarIcon className="w-14 " />,
    Heading: "Enhanced Productivity",
    Description: "Empower your team with tools that optimize their work.",
  },
  {
    Icon: <LightBulbIcon className="w-14 " />,
    Heading: "Improved Decision-Making",
    Description: "Gain valuable insights from data-driven applications.",
  },
  {
    Icon: <ArrowsUpDownIcon className="w-14 " />,
    Heading: "Scalability and Flexibility",
    Description:
      " Our solutions adapt to your growing needs and evolving business landscape.",
  },
  {
    Icon: <TrophyIcon className="w-14 " />,
    Heading: "Competitive Advantage",
    Description:
      "Gain a technological edge with innovative custom-built software.",
  },
];
const WebDevelopment = [
  {
    Icon: "https://cdn-icons-png.flaticon.com/128/3634/3634313.png",
    Heading: "Enhanced User Experience (UX)",
    Description:
      "Create a website that is easy to navigate and provides a positive user experience.",
  },
  {
    Icon: "https://cdn-icons-png.flaticon.com/128/8272/8272274.png",
    Heading: "Increased Brand Awareness ",
    Description:
      "Showcase your brand identity and reach a wider audience through SEO optimization.",
  },
  {
    Icon: "https://cdn-icons-png.flaticon.com/128/3126/3126647.png",
    Heading: "Lead Generation and Conversions",
    Description:
      "Turn visitors into leads and customers with compelling calls to action.",
  },
  {
    Icon: "https://cdn-icons-png.flaticon.com/128/0/191.png",
    Heading: "Mobile-Responsiveness",
    Description:
      "Ensure your website adapts seamlessly to all devices for optimal reach.",
  },
  {
    Icon: "https://cdn-icons-png.flaticon.com/128/484/484613.png",
    Heading: "Content Management System (CMS)",
    Description:
      "Empower you to easily manage and update your website content.",
  },
];
const CRM = [
  {
    Icon: "https://cdn-icons-png.flaticon.com/128/658/658099.png",
    Heading: "Improved Data Management",
    Description:
      "Centralize customer data for a holistic view of your interactions.",
  },
  {
    Icon: "https://cdn-icons-png.flaticon.com/128/8879/8879568.png",
    Heading: "Enhanced Collaboration",
    Description:
      "Break down silos and enable efficient communication across teams.",
  },
  {
    Icon: " https://cdn-icons-png.flaticon.com/128/527/527995.png",
    Heading: "Automated Workflows",
    Description: "utomate repetitive tasks and save valuable time.",
  },
  {
    Icon: "https://cdn-icons-png.flaticon.com/128/3634/3634313.png",
    Heading: "Increased Customer Satisfaction",
    Description: "Provide more personalized and efficient customer service.",
  },
  {
    Icon: "https://cdn-icons-png.flaticon.com/128/566/566410.png",
    Heading: "Data-Driven Decision Making ",
    Description: "Gain valuable insights from unified customer data.",
  },
];
const GenerativeAI = [
  {
    Icon: "https://cdn-icons-png.flaticon.com/128/1828/1828911.png",
    Heading: "Enhanced Content Creation",
    Description: "Generate original and engaging content at scale.",
  },
  {
    Icon: "https://cdn-icons-png.flaticon.com/128/66/66834.png",
    Heading: "Personalized Customer Experiences ",
    Description:
      "Personalize website content, marketing messages, and product recommendations.",
  },
  {
    Icon: "https://cdn-icons-png.flaticon.com/128/2285/2285551.png",
    Heading: "Faster Design Iteration ",
    Description: "Streamline design processes with AI-powered tools.",
  },
  {
    Icon: "https://cdn-icons-png.flaticon.com/128/566/566410.png",
    Heading: "Uncover New Ideas and Products",
    Description: "Explore innovative possibilities with AI-generated content.",
  },
  {
    Icon: "https://cdn-icons-png.flaticon.com/128/3240/3240587.png",
    Heading: "Increased Efficiency and Productivity",
    Description: "Automate repetitive content creation tasks.",
  },
];
const CustomCRM = [
  {
    Icon: "https://cdn-icons-png.flaticon.com/128/880/880605.png",
    Heading: "Enhanced User Adoption",
    Description:
      "A CRM designed for your workflows will be more intuitive and user-friendly for your team.",
  },
  {
    Icon: "https://cdn-icons-png.flaticon.com/128/1357/1357782.png",
    Heading: "Improved Sales and Customer Service",
    Description:
      "Optimize your sales pipeline and provide exceptional customer service with a custom-built CRM.",
  },
  {
    Icon: "https://cdn-icons-png.flaticon.com/128/1828/1828471.png",
    Heading: "Data Security and Scalability ",
    Description:
      "Enjoy maximum control over your data and ensure your CRM scales with your business growth.",
  },
  {
    Icon: "https://cdn-icons-png.flaticon.com/128/2953/2953362.png",
    Heading: "Increased Efficiency and ROI",
    Description:
      "Streamline workflows and maximize the return on investment in your CRM system.",
  },
  {
    Icon: "https://cdn-icons-png.flaticon.com/128/795/795323.png",
    Heading: "Competitive Advantage",
    Description:
      "Gain a unique edge with a CRM that perfectly supports your business model.",
  },
];
const TTDevelopment = [
  {
    Icon: "https://cdn-icons-png.flaticon.com/128/2691/2691117.png",
    Heading: "Improved Customer Satisfaction",
    Description:
      "Faster resolution times and better communication lead to happier customers.",
  },
  {
    Icon: "https://cdn-icons-png.flaticon.com/128/8879/8879568.png",
    Heading: "Enhanced Team Collaboration",
    Description:
      "Enable efficient collaboration between support agents and internal teams.",
  },
  {
    Icon: "https://cdn-icons-png.flaticon.com/128/3240/3240587.png",
    Heading: "Increased Operational Efficiency ",
    Description: "Streamline support processes and reduce response times.",
  },
  {
    Icon: "https://cdn-icons-png.flaticon.com/128/2285/2285559.png",
    Heading: "Data-Driven Insights ",
    Description:
      "Gain valuable data on customer support trends and improve service quality.",
  },
  {
    Icon: "https://cdn-icons-png.flaticon.com/128/15063/15063171.png",
    Heading: "Scalability and Customization",
    Description:
      "Our ticketing tools adapt to your growing needs and allow for custom configurations.",
  },
];
const DigitalMarketing = [
  {
    Icon: "https://cdn-icons-png.flaticon.com/128/1483/1483255.png",
    Heading: "Increased Brand Awareness",
    Description:
      "Reach a wider audience and establish your brand in the online marketplace.",
  },
  {
    Icon: "https://cdn-icons-png.flaticon.com/128/7457/7457558.png",
    Heading: "Targeted Lead Generation ",
    Description:
      "Attract qualified leads who are genuinely interested in your products or services.",
  },
  {
    Icon: "https://cdn-icons-png.flaticon.com/128/9240/9240837.png",
    Heading: "Improved Conversion Rates",
    Description:
      "Turn website visitors into paying customers with compelling marketing campaigns.",
  },
  {
    Icon: "https://cdn-icons-png.flaticon.com/128/2214/2214523.png",
    Heading: "Measurable Results",
    Description:
      "Track and analyze marketing performance to optimize your strategies for maximum impact.",
  },
  {
    Icon: "https://cdn-icons-png.flaticon.com/128/566/566410.png",
    Heading: "Data-Driven Decision Making ",
    Description:
      "Make informed marketing decisions based on real data and insights.",
  },
];
const WebDesign = [
  {
    Icon: "https://cdn-icons-png.flaticon.com/128/2893/2893811.png",
    Heading: "Enhanced Brand Image ",
    Description:
      "Elevate your brand image with a professional and visually appealing website.",
  },
  {
    Icon: "https://cdn-icons-png.flaticon.com/128/2691/2691117.png",
    Heading: "Improved User Engagement ",
    Description:
      "Keep visitors engaged with a user-friendly and intuitive website design.",
  },
  {
    Icon: "https://cdn-icons-png.flaticon.com/128/5083/5083001.png",
    Heading: "Increased Conversions ",
    Description:
      "Motivate visitors to take action with clear calls to action and a compelling design.",
  },
  {
    Icon: "https://cdn-icons-png.flaticon.com/128/11564/11564234.png",
    Heading: "Memorable First Impression",
    Description: "Make a lasting positive impression on potential customers.",
  },
  {
    Icon: "https://cdn-icons-png.flaticon.com/128/2164/2164820.png",
    Heading: "Competitive Advantage",
    Description:
      "Stand out from the competition with a unique and modern website design.",
  },
];
const UI_UXDesign = [
  {
    Icon: "https://cdn-icons-png.flaticon.com/128/14007/14007621.png",
    Heading: "Enhanced User Engagement",
    Description:
      "Keep users engaged and interacting with your product or website.",
  },
  {
    Icon: "https://cdn-icons-png.flaticon.com/128/8915/8915911.png",
    Heading: "Increased User Satisfaction",
    Description:
      "Create a frustration-free experience that users will appreciate.",
  },
  {
    Icon: "https://cdn-icons-png.flaticon.com/128/11454/11454906.png",
    Heading: "Improved Conversion Rates",
    Description:
      " Lead users towards desired actions with a well-designed UI and UX flow.",
  },
  {
    Icon: "https://cdn-icons-png.flaticon.com/128/7004/7004313.png",
    Heading: "Reduced Support Costs ",
    Description:
      "An intuitive design minimizes user confusion and support requests.",
  },
  {
    Icon: "https://cdn-icons-png.flaticon.com/128/6692/6692271.png",
    Heading: "Brand Differentiation",
    Description:
      "Stand out from the competition with a user interface that reflects your brand identity.",
  },
];




function Service() {
  return (
    <div>
      <section className=" relative bg-black h-full md:h-[100vh] flex flex-col items-center gap-4 text-center pt-10  md:pt-32 text-white">
        {/* <div className="h-[80vh] w-full absolute top-0 bg-black opa city-[.6]"></div> */}
        <div className="w-full  justify-between flex flex-col-reverse md:flex-row py-16 px-5 md:px-10 relative z-20 items-center">
          <div className="md:w-[70%] flex flex-col">
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold">
              Empower Your Business with Cutting-Edge IT Solutions
            </h1>

            <h2 className="text-lg md:w-[70%] md:mx-auto sm:text-2xl md:text-3xl">
              From web development to custom software, we've got you covered.
            </h2>
            <div className="py-8">
              <Link
                to="/contact"
                className="text-lg p-4 e-full md:w-80 bg-blue-400 rounded  text-white hover:bg-blue-600 hover:text-white duration-500 "
              >
                Transform Your Technology.
              </Link>
            </div>
          </div>

          <div className=" md:w-[40%] ">
            <img
              src={ServiceHero}
              alt="Service bg image"
              className="md:w-[90vw] md:h-[60vh] object-contain object-top "
            />
          </div>
        </div>
      </section>
      <section id="section2" className="">
        <div className="py-16 px-5">
          <div className="w-full md:w-[80%] md:mx-auto  p-5">
            <div className="flex flex-col sm:flex-row gap-4 bg-white rounded border border-gray-200 p-5">
              <img
                src="https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010125.jpg?t=st=1718806094~exp=1718809694~hmac=e85c595f67488eaf2350eaf1e4d75bfb336ccb81b562ef8f00761271bd7abc54&w=900"
                alt="Software_Developemnt"
                className="sm:w-[30vw] w-full rounded object-cover"
              />
              <div className="pt-6">
                <h1 className="text-2xl sm:text-4xl  text-blue-500 font-bold">
                  Software Development
                </h1>
                <p className="text-xl sm:text-2xl  font-semibold">
                  Craft Custom Software Solutions That Drive Your Business
                </p>
                <p className="text-base sm:text-lg text-gray-600">
                  Our expert developers build tailored applications to automate
                  tasks, streamline processes, and boost your competitive edge.
                </p>{" "}
                <p className="text-base sm:text-lg text-gray-600">
                  In today's digital landscape, having the right software can be
                  the difference between success and stagnation. Our team of
                  experienced software developers specializes in creating custom
                  solutions designed to meet your unique business needs.
                </p>
              </div>
            </div>

            <div className="flex flex-col itmes-center justify-center">
              <p className="text-center text-lg my-4">Here's what we offer:</p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                {softwareDevelopment.map((item, index) => (
                  <div
                    key={index}
                    className="w-full sm:w-80 h-56 bg-white flex flex-col justify-between items-center py-6 hover:scale-105 hover:shadow-lg duration-500 border border-gray-200   rounded"
                  >
                    <div className="flex items-center  p-3 gap-2">
                      {" "}
                      <p>{item.Icon}</p>
                      <p className="text-base font-bold  ">{item.Heading}</p>
                    </div>
                    <p className="py-1 text-center px-2 text-gray-700">
                      {item.Description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-[80%] md:mx-auto  p-5">
          <div className="flex flex-col sm:flex-row-reverse gap-4 bg-white rounded border border-gray-200 p-5">
            <img
              src="https://img.freepik.com/free-photo/close-up-image-programer-working-his-desk-office_1098-18707.jpg?t=st=1718957169~exp=1718960769~hmac=50dd1b35b03ea80f031d3eec913c7a7f0016027458f9dc143fd5cde6342a38b9&w=900  "
              alt="Software_Developemnt"
              className="sm:w-[30vw] w-full flex rounded object-cover"
            />
            <div className="pt-6">
              <h1 className="text-2xl sm:text-4xl  text-blue-500 font-bold">
                Web Development
              </h1>
              <p className="text-xl sm:text-2xl  font-semibold">
                Build a Powerful and Engaging Website That Converts
              </p>
              <p className="text-base sm:text-lg text-gray-600">
                We create user-friendly and visually stunning websites that not
                only look great but also drive results.
              </p>{" "}
              <p className="text-base sm:text-lg text-gray-600">
                Your website is often the first impression you make on potential
                customers. Our web development team specializes in crafting
                websites that are tailored to your brand, target audience, and
                business goals.
              </p>
            </div>
          </div>
          <div className="flex flex-col itmes-center justify-center">
            <p className="text-center text-lg my-4">Here's what we offer:</p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              {WebDevelopment.map((item, index) => (
                <div
                  key={index}
                  className="w-full sm:w-80 h-56 bg-white  text-black flex flex-col justify-between items-center py-6 hover:scale-105 hover:shadow-lg duration-500 border border-gray-200   rounded"
                >
                  <div className="flex items-center  p-3 gap-2">
                    {" "}
                    <img
                      src={item.Icon}
                      className="w-14"
                      alt="Web Development Image"
                    />
                    <p className="text-base font-bold  ">{item.Heading}</p>
                  </div>
                  <p className="py-1 text-center px-2 text-gray-700">
                    {item.Description}
                  </p>
                </div>
              ))}
            </div>
            <div className="flex justify-center py-8">
              <Link
                to="/contact"
                className="text-center w-72 bg-blue-500 text-white p-4 hover:bg-blue-400 duration-400 rounded"
              >
                Schedule a Consultation
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full md:w-[80%] md:mx-auto  p-5">
          <div className="flex flex-col sm:flex-row gap-4 bg-white rounded border border-gray-200 p-5">
            <img
              src="https://img.freepik.com/free-vector/crm-isometric-flowchart-with-customer-relationship-management-symbols-vector-illustration_98292-9062.jpg?t=st=1718957240~exp=1718960840~hmac=42f2a2ac33663b5f5db3fe1236ff135dc7d5f1fd6373bcfb409ad4c29f1b6261&w=1060"
              alt="Software_Developemnt"
              className="sm:w-[30vw] w-full flex rounded object-cover"
            />
            <div className="pt-6">
              <h1 className="text-2xl sm:text-4xl  text-blue-500 font-bold">
                CRM Integration
              </h1>
              <p className="text-xl sm:text-2xl  font-semibold">
                Unify Your Data and Streamline Customer Relationships
              </p>
              <p className="text-base sm:text-lg text-gray-600">
                We seamlessly integrate your existing CRM system with other
                essential tools, ensuring a centralized and streamlined
                workflow.
              </p>{" "}
              <p className="text-base sm:text-lg text-gray-600">
                Juggling multiple systems can be cumbersome and inefficient. Our
                CRM integration services connect your CRM with other essential
                software like marketing automation tools, email platforms, and
                helpdesk solutions.
              </p>
            </div>
          </div>
          <div className="flex flex-col itmes-center justify-center">
            <p className="text-center text-lg my-4">Here's what we offer:</p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              {CRM.map((item, index) => (
                <div
                  key={index}
                  className="w-full sm:w-80 h-56 bg-white flex flex-col justify-between items-center py-6 hover:scale-105 hover:shadow-lg duration-500 border border-gray-200   rounded"
                >
                  <div className="flex items-center  p-3 gap-2">
                    {" "}
                    <img
                      src={item.Icon}
                      className="w-14"
                      alt="Web Development Image"
                    />
                    <p className="text-base font-bold  ">{item.Heading}</p>
                  </div>
                  <p className="py-1 text-center px-2 text-gray-700">
                    {item.Description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full md:w-[80%] md:mx-auto  p-5">
          <div className="flex flex-col sm:flex-row-reverse gap-4 bg-white rounded border border-gray-200 p-5">
            <img
              src="https://img.freepik.com/free-photo/ai-technology-microchip-background-digital-transformation-concept_53876-124669.jpg?t=st=1718957167~exp=1718960767~hmac=524dbd740c99ea6084fa9891b841b9d865ea7ca1e5d5bfbd94e72cffd7146778&w=900"
              alt="Software_Developemnt"
              className="sm:w-[30vw] w-full flex rounded object-cover"
            />
            <div className="pt-6">
              <h1 className="text-2xl sm:text-4xl  text-blue-500 font-bold">
                Generative AI
              </h1>
              <p className="text-xl sm:text-2xl  font-semibold">
                Unlock the Power of AI for Creative Content and Innovation
              </p>
              <p className="text-base sm:text-lg text-gray-600">
                Harness the cutting-edge potential of Generative AI to create
                innovative content, personalize experiences, and unlock new
                possibilities.
              </p>{" "}
              <p className="text-base sm:text-lg text-gray-600">
                Generative AI is revolutionizing content creation and design.
                Our team can help you leverage this technology to generate
                creative text formats, images, and even code.
              </p>
            </div>
          </div>
          <div className="flex flex-col itmes-center justify-center">
            <p className="text-center text-lg my-4">Here's what we offer:</p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              {GenerativeAI.map((item, index) => (
                <div
                  key={index}
                  className="w-full sm:w-80 h-56 bg-white flex flex-col justify-between items-center py-6 hover:scale-105 hover:shadow-lg duration-500 border border-gray-200   rounded"
                >
                  <div className="flex items-center  p-3 gap-2">
                    {" "}
                    <img
                      src={item.Icon}
                      className="w-14"
                      alt="Web Development Image"
                    />
                    <p className="text-base font-bold  ">{item.Heading}</p>
                  </div>
                  <p className="py-1 text-center px-2 text-gray-700">
                    {item.Description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full md:w-[80%] md:mx-auto  p-5">
          <div className="flex flex-col sm:flex-row gap-4 bg-white rounded border border-gray-200 p-5">
            <img
              src="https://img.freepik.com/free-photo/customer-relationship-management-concept_23-2150038405.jpg?t=st=1718957378~exp=1718960978~hmac=e5d0453ed5e2a7e99b241e0fb1955c71fe761eaef1d7fc571e03347e293a34af&w=900"
              alt="Software_Developemnt"
              className="sm:w-[30vw] w-full flex rounded object-cover"
            />
            <div className="pt-6">
              <h1 className="text-2xl sm:text-4xl  text-blue-500 font-bold">
                Custom CRM Software
              </h1>
              <p className="text-xl sm:text-2xl  font-semibold">
                Don't Settle. Build a CRM Tailored to Your Unique Needs
              </p>
              <p className="text-base sm:text-lg text-gray-600">
                Our developers create custom CRM software that perfectly aligns
                with your specific business processes and workflows.
              </p>{" "}
              <p className="text-base sm:text-lg text-gray-600">
                Off-the-shelf CRM solutions might not always fit your specific
                needs. We develop custom CRM software that caters to your unique
                business requirements, industry, and team structure.
              </p>
            </div>
          </div>

          <div className="flex flex-col itmes-center justify-center">
            <p className="text-center text-lg my-4">Here's what we offer:</p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              {CustomCRM.map((item, index) => (
                <div
                  key={index}
                  className="w-full sm:w-80 h-56 bg-white  flex flex-col justify-between items-center py-6 hover:scale-105 hover:shadow-lg duration-500 border border-gray-200   rounded"
                >
                  <div className="flex items-center  p-3 gap-2">
                    {" "}
                    <img
                      src={item.Icon}
                      className="w-14"
                      alt="Web Development Image"
                    />
                    <p className="text-base font-bold  ">{item.Heading}</p>
                  </div>
                  <p className="py-1 text-center px-2 text-gray-700">
                    {item.Description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full md:w-[80%] md:mx-auto  p-5">
          <div className="flex flex-col sm:flex-row-reverse gap-4 bg-white rounded border border-gray-200 p-5">
            <img
              src="https://img.freepik.com/free-photo/travel-navigation-journey-vacation-trip-laptop-concept_53876-125037.jpg?t=st=1718957451~exp=1718961051~hmac=801dec6a5b155f5654bda8222de1d13a8b9a332ccb359bbd0e8cd09c046d4a5e&w=826"
              alt="Software_Developemnt"
              className="sm:w-[30vw] w-full flex rounded object-cover"
            />
            <div className="pt-6">
              <h1 className="text-2xl sm:text-4xl  text-blue-500 font-bold">
                Ticketing Tool Development
              </h1>
              <p className="text-xl sm:text-2xl  font-semibold">
                Streamline Your Support Operations with a Powerful Ticketing
                Tool
              </p>
              <p className="text-base sm:text-lg text-gray-600">
                We create efficient ticketing tools to manage customer support
                interactions, streamline communication, and improve resolution
                times.
              </p>{" "}
              <p className="text-base sm:text-lg text-gray-600">
                A well-designed ticketing tool is crucial for efficient customer
                support. Our team develops ticketing systems that provide a
                centralized platform for tracking customer inquiries, assigning
                tasks, and resolving issues effectively.
              </p>
            </div>
          </div>
          <div className="flex flex-col itmes-center justify-center">
            <p className="text-center text-lg my-4">Here's what we offer:</p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              {TTDevelopment.map((item, index) => (
                <div
                  key={index}
                  className="w-full sm:w-80 h-56 bg-white  flex flex-col justify-between items-center py-6 hover:scale-105 hover:shadow-lg duration-500 border border-gray-200   rounded"
                >
                  <div className="flex items-center  p-3 gap-2">
                    {" "}
                    <img
                      src={item.Icon}
                      className="w-14"
                      alt="Web Development Image"
                    />
                    <p className="text-base font-bold  ">{item.Heading}</p>
                  </div>
                  <p className="py-1 text-center px-2 text-gray-700">
                    {item.Description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full md:w-[80%] md:mx-auto  p-5">
          <div className="flex flex-col sm:flex-row gap-4 bg-white rounded border border-gray-200 p-5">
            <img
              src="https://img.freepik.com/free-photo/digital-marketing-with-icons-business-people_53876-94833.jpg?t=st=1718955725~exp=1718959325~hmac=ea9ec7d3959fa15e73c4f869126e838dbe40fe4702859034e434e8cb0a0e4a33&w=826"
              alt="Software_Developemnt"
              className="sm:w-[30vw] w-full flex rounded object-cover"
            />
            <div className="pt-6">
              <h1 className="text-2xl sm:text-4xl  text-blue-500 font-bold">
                Digital Marketing
              </h1>
              <p className="text-xl sm:text-2xl  font-semibold">
                Reach Your Target Audience and Drive Results with Data-Driven
                Digital Marketing
              </p>
              <p className="text-base sm:text-lg text-gray-600">
                We craft data-driven digital marketing strategies that get you
                seen, attract qualified leads, and convert them into loyal
                customers.
              </p>{" "}
              <p className="text-base sm:text-lg text-gray-600">
                In today's digital age, a strong online presence is essential.
                Our digital marketing experts create comprehensive strategies
                that leverage various channels like SEO, social media marketing,
                and pay-per-click advertising to reach your target audience and
                achieve your business goals.
              </p>
            </div>
          </div>

          <div className="flex flex-col itmes-center justify-center">
            <p className="text-center text-lg my-4">Here's what we offer:</p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              {DigitalMarketing.map((item, index) => (
                <div
                  key={index}
                  className="w-full sm:w-80 h-56 bg-white  flex flex-col justify-between items-center py-6 hover:scale-105 hover:shadow-lg duration-500 border border-gray-200   rounded"
                >
                  <div className="flex items-center  p-3 gap-2">
                    <img
                      src={item.Icon}
                      className="w-14"
                      alt="Web Development Image"
                    />
                    <p className="text-base font-bold  ">{item.Heading}</p>
                  </div>
                  <p className="py-1 text-center px-2 text-gray-700">
                    {item.Description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full md:w-[80%] md:mx-auto  p-5">
          <div className="flex flex-col sm:flex-row-reverse gap-4 bg-white rounded border border-gray-200 p-5">
            <img
              src="https://img.freepik.com/free-photo/web-design-technology-browsing-programming-concept_53876-163260.jpg?t=st=1718956659~exp=1718960259~hmac=5e963f9ce358eee7c3db881a7e4a4d57a7b73af892d71556c4b125bc34373651&w=740"
              alt="Software_Developemnt"
              className="sm:w-[30vw] w-full flex rounded object-cover"
            />
            <div className="pt-6">
              <h1 className="text-2xl sm:text-4xl  text-blue-500 font-bold">
                Web Design
              </h1>
              <p className="text-xl sm:text-2xl  font-semibold">
                Create a Stunning and User-Friendly Website that Makes a Lasting
                Impression
              </p>
              <p className="text-base sm:text-lg text-gray-600">
                We design visually appealing and user-centric websites that
                provide an exceptional user experience.
              </p>{" "}
              <p className="text-base sm:text-lg text-gray-600">
                Your website is a vital marketing tool and a reflection of your
                brand. Our web design team creates visually stunning and
                user-friendly websites that not only look great but also provide
                a seamless user experience.
              </p>
            </div>
          </div>

          <div className="flex flex-col itmes-center justify-center">
            <p className="text-center text-lg my-4">Here's what we offer:</p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              {WebDesign.map((item, index) => (
                <div
                  key={index}
                  className="w-full sm:w-80 h-56 bg-white flex flex-col justify-between items-center py-6 hover:scale-105 hover:shadow-lg duration-500 border border-gray-200   rounded"
                >
                  <div className="flex items-center  p-3 gap-2">
                    <img
                      src={item.Icon}
                      className="w-14"
                      alt="Web Development Image"
                    />
                    <p className="text-base font-bold  ">{item.Heading}</p>
                  </div>
                  <p className="py-1 text-center px-2 text-gray-700">
                    {item.Description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full md:w-[80%] md:mx-auto  p-5">
          <div className="flex flex-col sm:flex-row gap-4 bg-white rounded border border-gray-200 p-5">
            <img
              src="https://img.freepik.com/free-photo/ui-ux-representations-with-laptop_23-2150201871.jpg?t=st=1718956375~exp=1718959975~hmac=bddb3e5c889138297ec5f770d098236545cfa7ef07b49a8480f6f3b0233ad8f6&w=900"
              alt="Software_Developemnt"
              className="sm:w-[30vw] w-full flex rounded object-cover"
            />
            <div className="pt-6">
              <h1 className="text-2xl sm:text-4xl  text-blue-500 font-bold">
                UI/UX Design
              </h1>
              <p className="text-xl sm:text-2xl  font-semibold">
                Craft Intuitive User Interfaces (UI) and User Experiences (UX)
                for Maximum Impact
              </p>
              <p className="text-base sm:text-lg text-gray-600">
                We specialize in designing interfaces and experiences that are
                not only aesthetically pleasing but also intuitive and
                user-friendly.
              </p>{" "}
              <p className="text-base sm:text-lg text-gray-600">
                In today's digital world, a well-designed user interface (UI)
                and user experience (UX) are crucial for success. Our UI/UX
                design team creates interfaces that are visually appealing, easy
                to navigate, and provide a positive and intuitive user
                experience.
              </p>
            </div>
          </div>

          <div className="flex flex-col itmes-center justify-center">
            <p className="text-center text-lg my-4">Here's what we offer:</p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              {UI_UXDesign.map((item, index) => (
                <div
                  key={index}
                  className="w-full sm:w-80 h-56 bg-white flex flex-col justify-between items-center py-6 hover:scale-105 hover:shadow-lg duration-500 border border-gray-200   rounded"
                >
                  <div className="flex items-center  p-3 gap-2">
                    <img
                      src={item.Icon}
                      className="w-14"
                      alt="Web Development Image"
                    />
                    <p className="text-base font-bold  ">{item.Heading}</p>
                  </div>
                  <p className="py-1 text-center px-2 text-gray-700">
                    {item.Description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Service
