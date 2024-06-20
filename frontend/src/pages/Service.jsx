import React from 'react'
import { Link } from 'react-router-dom';

function Service() {
    return (
      <div>
        <section className="bg-white  flex flex-col items-center gap-4 text-center pt-20">
          <div className="w-full md:w-[80%] md:mx-auto py-16 px-5">
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold">
              Empower Your Business with Cutting-Edge IT Solutions
            </h1>

            <h2 className="text-xl md:w-[70%] md:mx-auto sm:text-2xl md:text-4xl">
              From web development to custom software, we've got you covered.
            </h2>
            <div className='py-8'>
              <Link
                to="/contact"
                className="text-lg p-4  w-80 bg-blue-400 rounded  text-white hover:bg-blue-600 hover:text-white duration-500 "
              >
                Transform Your Technology.
              </Link>
            </div>
          </div>
        </section>
        <section className="pt-20">
          <div className="py-16 px-5 bg-blue-100">
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
                    Our expert developers build tailored applications to
                    automate tasks, streamline processes, and boost your
                    competitive edge.
                  </p>{" "}
                  <p className="text-base sm:text-lg text-gray-600">
                    In today's digital landscape, having the right software can
                    be the difference between success and stagnation. Our team
                    of experienced software developers specializes in creating
                    custom solutions designed to meet your unique business
                    needs.
                  </p>
                </div>
              </div>

              <div className="flex flex-col itmes-center justify-center">
                <p className="text-center text-lg my-4">
                  Here's what we offer:
                </p>
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <div className="w-full sm:w-80 h-56 bg-white hover:bg-gray-900 text-blue-500 hover:text-white  hover:scale-105 hover:shadow-lg duration-500 border border-gray-200   rounded">
                    <div className="flex items-center p-3 gap-2">
                      {" "}
                      <p className="p-5 border rounded">icon</p>
                      <p className="text-base font-bold  ">
                        {" "}
                        Needs Analysis & Consultation
                      </p>
                    </div>
                    <p className="py-1 text-center px-2 text-gray-700">
                      We work closely with you to understand your challenges and
                      goals.
                    </p>
                  </div>
                  <div className="w-full sm:w-80 h-56 bg-white hover:bg-gray-900 text-blue-500 hover:text-white  hover:scale-105 hover:shadow-lg duration-500 border border-gray-200   rounded">
                    <div className="flex items-center  p-3 gap-2">
                      {" "}
                      <p className="p-5 border rounded">icon</p>
                      <p className="text-base font-bold  ">
                        {" "}
                        Agile Development Methodology
                      </p>
                    </div>
                    <p className="py-1 text-center px-2 text-gray-700">
                      We employ agile development practices for efficient
                      project management and continuous improvement.
                    </p>
                  </div>
                  <div className="w-full sm:w-80 h-56 bg-white hover:bg-gray-900 text-blue-500 hover:text-white  hover:scale-105 hover:shadow-lg duration-500 border border-gray-200   rounded">
                    <div className="flex items-center p-3 gap-2">
                      {" "}
                      <p className="p-5 border rounded">icon</p>
                      <p className="text-base font-bold  ">
                        {" "}
                        Custom Programming
                      </p>
                    </div>
                    <p className="py-1 text-center px-2 text-gray-700">
                      Our developers are proficient in various programming
                      languages and frameworks to build powerful and scalable
                      applications.
                    </p>
                  </div>
                  <div className="w-full sm:w-80 h-56 bg-white hover:bg-gray-900 text-blue-500 hover:text-white  hover:scale-105 hover:shadow-lg duration-500 border border-gray-200   rounded">
                    <div className="flex items-center p-3 gap-2">
                      {" "}
                      <p className="p-5 border rounded">icon</p>
                      <p className="text-base font-bold  ">
                        {" "}
                        Deployment & Maintenance
                      </p>
                    </div>
                    <p className="py-1 text-center px-2 text-gray-700">
                      We ensure a smooth deployment process and provide ongoing
                      support to maintain your software.
                    </p>
                  </div>
                  <div className="w-full sm:w-80 h-56 bg-white hover:bg-gray-900 text-blue-500 hover:text-white  hover:scale-105 hover:shadow-lg duration-500 border border-gray-200   rounded">
                    <div className="flex items-center p-3 gap-2">
                      {" "}
                      <p className="p-5 border rounded">icon</p>
                      <p className="text-base font-bold  "> API Integration</p>
                    </div>
                    <p className="py-1 text-center px-2 text-gray-700">
                      We seamlessly integrate your software with existing
                      systems and tools for a centralized workflow.
                    </p>
                  </div>
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
          </div>
          <div>
            <h1>2. Web Development:</h1>
            <p>Headline: Build a Powerful and Engaging Website That Converts</p>
            <p>
              (Subheading): We create user-friendly and visually stunning
              websites that not only look great but also drive results.
            </p>{" "}
            <p>
              (Description): Your website is often the first impression you make
              on potential customers. Our web development team specializes in
              crafting websites that are tailored to your brand, target
              audience, and business goals.
            </p>
            <p>(Benefits):</p>
            <p>
              Enhanced User Experience (UX): Create a website that is easy to
              navigate and provides a positive user experience.
            </p>
            <p>
              Increased Brand Awareness: Showcase your brand identity and reach
              a wider audience through SEO optimization.
            </p>
            <p>
              Lead Generation and Conversions: Turn visitors into leads and
              customers with compelling calls to action.
            </p>
            <p>
              Mobile-Responsiveness: Ensure your website adapts seamlessly to
              all devices for optimal reach.
            </p>
            <p>
              Content Management System (CMS): Empower you to easily manage and
              update your website content.
            </p>
            <button>Schedule a Consultation</button>
          </div>
          <div>
            <h1>3. CRM Integration:</h1>
            <p>
              Headline: Unify Your Data and Streamline Customer Relationships
            </p>
            <p>
              (Subheading): We seamlessly integrate your existing CRM system
              with other essential tools, ensuring a centralized and streamlined
              workflow.
            </p>{" "}
            <p>
              (Description): Juggling multiple systems can be cumbersome and
              inefficient. Our CRM integration services connect your CRM with
              other essential software like marketing automation tools, email
              platforms, and helpdesk solutions.
            </p>
            <p>(Benefits):</p>
            <p>
              Improved Data Management: Centralize customer data for a holistic
              view of your interactions.
            </p>
            <p>
              Enhanced Collaboration: Break down silos and enable efficient
              communication across teams.
            </p>
            <p>
              Automated Workflows: Automate repetitive tasks and save valuable
              time.
            </p>
            <p>
              Increased Customer Satisfaction: Provide more personalized and
              efficient customer service.
            </p>
            <p>
              Data-Driven Decision Making: Gain valuable insights from unified
              customer data.
            </p>
            <button>Schedule a Consultation</button>
          </div>
          <div>
            <h1>Generative AI:</h1>
            <p>
              Headline: Unlock the Power of AI for Creative Content and
              Innovation
            </p>
            <p>
              (Subheading): Harness the cutting-edge potential of Generative AI
              to create innovative content, personalize experiences, and unlock
              new possibilities.
            </p>{" "}
            <p>
              (Description): Generative AI is revolutionizing content creation
              and design. Our team can help you leverage this technology to
              generate creative text formats, images, and even code.
            </p>
            <p>(Benefits):</p>
            <p>
              Enhanced Content Creation: Generate original and engaging content
              at scale. Personalized Customer Experiences: Personalize website
              content, marketing
            </p>
            <p>
              Personalized Customer Experiences: Personalize website content,
              marketing messages, and product recommendations..
            </p>
            <p>
              Faster Design Iteration: Streamline design processes with
              AI-powered tools.
            </p>
            <p>
              Uncover New Ideas and Products: Explore innovative possibilities
              with AI-generated content.
            </p>
            <p>
              Increased Efficiency and Productivity: Automate repetitive content
              creation tasks.
            </p>
            <button>Schedule a Consultation</button>
          </div>
          <div>
            <h1>5. Custom CRM Software:</h1>
            <p>
              Headline: Don't Settle. Build a CRM Tailored to Your Unique Needs
            </p>
            <p>
              (Subheading): Our developers create custom CRM software that
              perfectly aligns with your specific business processes and
              workflows.
            </p>{" "}
            <p>
              (Description): Off-the-shelf CRM solutions might not always fit
              your specific needs. We develop custom CRM software that caters to
              your unique business requirements, industry, and team structure.
            </p>
            <p>(Benefits):</p>
            <p>
              Enhanced User Adoption: A CRM designed for your workflows will be
              more intuitive and user-friendly for your team.
            </p>
            <p>
              Improved Sales and Customer Service: Optimize your sales pipeline
              and provide exceptional customer service with a custom-built CRM.
            </p>
            <p>
              Data Security and Scalability: Enjoy maximum control over your
              data and ensure your CRM scales with your business growth.
            </p>
            <p>
              Increased Efficiency and ROI: Streamline workflows and maximize
              the return on investment in your CRM system.
            </p>
            <p>
              Competitive Advantage: Gain a unique edge with a CRM that
              perfectly supports your business model.
            </p>
            <button>Schedule a Consultation</button>
          </div>
          <div>
            <h1>6. Ticketing Tool Development:</h1>
            <p>
              Headline: Streamline Your Support Operations with a Powerful
              Ticketing Tool
            </p>
            <p>
              (Subheading): We create efficient ticketing tools to manage
              customer support interactions, streamline communication, and
              improve resolution times.
            </p>{" "}
            <p>
              (Description): A well-designed ticketing tool is crucial for
              efficient customer support. Our team develops ticketing systems
              that provide a centralized platform for tracking customer
              inquiries, assigning tasks, and resolving issues effectively.
            </p>
            <p>(Benefits):</p>
            <p>
              Improved Customer Satisfaction: Faster resolution times and better
              communication lead to happier customers.
            </p>
            <p>
              Enhanced Team Collaboration: Enable efficient collaboration
              between support agents and internal teams.
            </p>
            <p>
              Increased Operational Efficiency: Streamline support processes and
              reduce response times.
            </p>
            <p>
              Data-Driven Insights: Gain valuable data on customer support
              trends and improve service quality.
            </p>
            <p>
              Scalability and Customization: Our ticketing tools adapt to your
              growing needs and allow for custom configurations.
            </p>
            <button>Schedule a Consultation</button>
          </div>
          <div>
            <h1>7. Digital Marketing:</h1>
            <p>
              Headline: Reach Your Target Audience and Drive Results with
              Data-Driven Digital Marketing
            </p>
            <p>
              (Subheading): We craft data-driven digital marketing strategies
              that get you seen, attract qualified leads, and convert them into
              loyal customers.
            </p>{" "}
            <p>
              (Description): In today's digital age, a strong online presence is
              essential. Our digital marketing experts create comprehensive
              strategies that leverage various channels like SEO, social media
              marketing, and pay-per-click advertising to reach your target
              audience and achieve your business goals.
            </p>
            <p>(Benefits):</p>
            <p>
              Increased Brand Awareness: Reach a wider audience and establish
              your brand in the online marketplace.
            </p>
            <p>
              Targeted Lead Generation: Attract qualified leads who are
              genuinely interested in your products or services.
            </p>
            <p>
              Improved Conversion Rates: Turn website visitors into paying
              customers with compelling marketing campaigns.
            </p>
            <p>
              Measurable Results: Track and analyze marketing performance to
              optimize your strategies for maximum impact.
            </p>
            <p>
              Data-Driven Decision Making: Make informed marketing decisions
              based on real data and insights.
            </p>
            <button>Schedule a Consultation</button>
          </div>
          <div>
            <h1>8. Web Design:</h1>
            <p>
              Headline: Create a Stunning and User-Friendly Website that Makes a
              Lasting Impression
            </p>
            <p>
              (Subheading) (Optional): We design visually appealing and
              user-centric websites that provide an exceptional user experience.
            </p>{" "}
            <p>
              (Description) (Can be similar to Web Development from Response #2,
              focusing on design): Your website is a vital marketing tool and a
              reflection of your brand. Our web design team creates visually
              stunning and user-friendly websites that not only look great but
              also provide a seamless user experience.
            </p>
            <p>(Benefits):</p>
            <p>
              Enhanced Brand Image: Elevate your brand image with a professional
              and visually appealing website.
            </p>
            <p>
              Improved User Engagement: Keep visitors engaged with a
              user-friendly and intuitive website design.
            </p>
            <p>
              Increased Conversions: Motivate visitors to take action with clear
              calls to action and a compelling design.
            </p>
            <p>
              Memorable First Impression: Make a lasting positive impression on
              potential customers.
            </p>
            <p>
              Competitive Advantage: Stand out from the competition with a
              unique and modern website design.
            </p>
            <button>Schedule a Consultation</button>
          </div>
          <div>
            <h1>9. UI/UX Design</h1>
            <p>
              Headline: Craft Intuitive User Interfaces (UI) and User
              Experiences (UX) for Maximum Impact
            </p>
            <p>
              (Subheading) (Optional): We specialize in designing interfaces and
              experiences that are not only aesthetically pleasing but also
              intuitive and user-friendly.
            </p>{" "}
            <p>
              (Description): In today's digital world, a well-designed user
              interface (UI) and user experience (UX) are crucial for success.
              Our UI/UX design team creates interfaces that are visually
              appealing, easy to navigate, and provide a positive and intuitive
              user experience.
            </p>
            <p>(Benefits):</p>
            <p>
              Enhanced User Engagement: Keep users engaged and interacting with
              your product or website.
            </p>
            <p>
              Increased User Satisfaction: Create a frustration-free experience
              that users will appreciate.
            </p>
            <p>
              Improved Conversion Rates: Lead users towards desired actions with
              a well-designed UI and UX flow.
            </p>
            <p>
              Reduced Support Costs: An intuitive design minimizes user
              confusion and support requests.
            </p>
            <p>
              Brand Differentiation: Stand out from the competition with a user
              interface that reflects your brand identity.
            </p>
            <button>Schedule a Consultation</button>
          </div>
        </section>
      </div>
    );
}

export default Service
