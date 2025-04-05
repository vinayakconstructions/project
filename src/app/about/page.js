import Image from 'next/image';
import Link from 'next/link';
import { FaBuilding, FaTools, FaClock, FaUsers, FaCheckCircle, FaGlobe, FaHandshake } from "react-icons/fa";

export default function About() {
  const teamMembers = [
    { name: "Vaibhav Saxena", role: "CIVIL ENGINEER",exp:"30+ Exp", image: "https://img.freepik.com/free-vector/elegant-businessman-office-scene_24877-57719.jpg" },
    { name: "Ikramuddin Khan", role: "B.COM",exp:"30+ Exp", image: "https://img.freepik.com/free-vector/elegant-businessman-office-scene_24877-57719.jpg" },
    { name: "Neeraj Khandelwal", role: "MECHANICAL ENGINEER",exp:"30+ Exp", image: "https://img.freepik.com/free-vector/elegant-businessman-office-scene_24877-57719.jpg" },
    { name: "Ghanshyam Khandelwal", role: "B.COM",exp:"30+ Exp", image: "https://img.freepik.com/free-vector/elegant-businessman-office-scene_24877-57719.jpg" },
  ];
  
  return (
    <div className=''>
    <div className="min-h-screen bg-gray-100 text-gray-900 mt-20">
      <div className="max-w-6xl mx-auto p-6 text-center">
        {/* <h1 className="text-4xl font-bold mb-4">About Us</h1> */}
        {/* <p className="text-lg mb-6">
          Welcome to our travel platform, where adventure meets convenience.
          Discover unforgettable destinations and seamless experiences.
        </p> */}
        <div className="relative w-full h-64 mb-10">
          <Image
            src="/assets/about.jpg"
            alt="Travel Banner"
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-lg"
          />
        </div>
        <section className="bg-gray-100 py-12 px-6 md:px-20">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Building Excellence, Delivering Trust
            </h2>
            <p className="text-lg text-gray-600 mb-10 justify-center">
            Vinayak Constructions Company is a renowned name in the construction industry, specializing in residential, commercial, PEB (Pre-Engineered Buildings), warehouse, interior fit-out,  and infrastructure development projects across India. With a strong presence in multiple regions, we have established ourselves as a trusted partner in delivering top-notch construction solutions with innovation, efficiency, and integrity.
            </p>
            <p className="text-lg text-gray-600 mb-10">
            <strong>Vinayak Constructions Company</strong> is a leading construction firm specializing in <strong>residential</strong>, commercial, PEB, warehouse, and infrastructure development<strong> projects</strong> across India. With <strong>decades of experience</strong>, we are committed to delivering <strong>high-quality, innovative, and sustainable</strong> construction solutions tailored to client needs. Our expertise spans <strong>construction management, renovation, interior design, and large-scale infrastructure projects</strong> such as roads and bridges.  
            We emphasize <strong>customer satisfaction, quality compliance, and timely project completion</strong>, ensuring excellence in every endeavor. Utilizing <strong>cutting-edge technology, skilled professionals, and modern construction practices</strong>, we bring visions to life. At <strong>Vinayak Constructions</strong>, we don’t just build structures—we build <strong>trust, relationships, and a better future</strong>.Let’s build together!
            </p>
            <p className="text-lg text-gray-600 mb-10">
            With over <strong> 30+ years of experience in the industry, </strong> we have built a strong legacy of success, driven by our unwavering commitment to quality, innovation, and client satisfaction. Our journey has been marked by landmark projects, long-standing client relationships, and a reputation for excellence that continues to grow.
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
            <div className="bg-white p-6 rounded-2xl shadow-md">
              {/* <FaBuilding className="text-blue-600 text-16xl mr-4" /> */}
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">Who We Are</h3>
                <p className="text-gray-600">
                  With decades of experience, Vinayak Constructions Company has successfully completed a wide range of projects, from luxurious homes and modern office spaces to large-scale industrial and infrastructure developments.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md">
              {/* <FaTools className="text-blue-600 text-9xl mr-4" /> */}
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-2 ">Our Services</h3>
                <ul className="list-none list-inside text-gray-600 text-left">
                  <li>🏗 Construction & Project Management</li>
                  <li>🏢 PEB & Warehouse Construction</li>
                  <li>🏡 Renovation & Interior Design</li>
                  <li>🚧 Infrastructure Development</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 mt-10">
            <div className="bg-white p-6 rounded-2xl shadow-md">
              {/* <FaCheckCircle className="text-blue-600 text-3xl mr-4" /> */}
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">Why Choose Us?</h3>
                <ul className="list-none list-inside text-gray-600  text-left">
                  <li>Expertise & Experience</li>
                  <li>Customer-Centric Approach</li>
                  <li>Quality & Compliance</li>
                  <li>Timely Project Delivery</li>
                  <li>Cutting-Edge Technology</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-md flex items-start">
              {/* <FaGlobe className="text-blue-600 text-3xl mr-4" /> */}
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">Our Vision & Mission</h3>
                <p className="text-gray-600">
                  Our vision is to be a leading name in the construction industry, recognized for delivering world-class projects that redefine infrastructure and real estate development in India.
                </p>
              </div>
            </div>
          </div>
            <h3 className="text-2xl font-semibold text-gray-800 mt-16 mb-6">Our Directors</h3>
            <div className="block sm:flex sm:flex-wrap sm:justify-center sm:gap-4 sm:p-2 p-0">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 border border-gray-300 rounded-lg shadow-lg bg-white text-center w-full sm:w-[2%]"
                >
                  <div className="relative w-full h-40">
                    <img
                      src={member.image}
                      alt={member.name}
                      // layout="fill"
                      // objectFit="cover"
                      className="rounded-t-lg"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold mt-6">{member.name}</h3>
                    <p className="text-gray-500">{member.role}</p>
                    <p className="text-gray-500 font-semibold">{member.exp}</p>
                  </div>
                </div>
              ))}
            </div>
          <div className="text-center mt-12">
            <FaHandshake className="text-blue-600 text-4xl mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Join Hands with Us!</h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">
              At Vinayak Constructions, we don’t just build structures; we create landmarks, shape skylines, and build the future.
            </p>
            <Link href="/contact">
              <button
                className="w-[200] m-[8] bg-gradient-to-r from-customBrown to-customBrown hover:from-purple-700 hover:to-blue-700 text-white px-6 py-3 rounded-full items-center gap-2 shadow-xl transition-all transform hover:scale-110 active:scale-95 border border-white/30 mt-4"
              >
                                Contact Us Today
              </button>
                </Link>
          </div>
        </section>
      </div>
    </div>
    </div>
  );
}
