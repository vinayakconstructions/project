"use client";

import AddUserForm from "@/components/AddUserForm";
import Gallery from "@/components/Gallery";
import axios from "axios";
import { useEffect, useState } from "react";


export default function VideoSection() {
  const [videoError, setVideoError] = useState(false);
  // const [projects, setProjects] = useState([]);
  // useEffect(()=>{
  //   fetchData()
  // },[])
  // async function fetchData () {
  //   let response = await axios.get('/api/getProjects')
  //   setProjects(response.data.projects)
  // }

  const projects = [
    {
        "id": 0,
        "created_at": "2025-03-25T18:10:06.801701+00:00",
        "url": "https://gxjxmcdjbqqrdppnhvli.supabase.co/storage/v1/object/public/vinayakconstructions/uploads/1742926204665-gallery12.jpg",
        "heading": "CHARBHUJA MARBLE STONEX",
        "address":"KISHANGARH, AJMER",
          description: `
          <div class="Vinayak-description">
            <p>
              <strong>At Vinayak Constructions</strong>, we specialize in comprehensive building construction services, delivering projects with a strong emphasis on quality, safety, and on-time completion. From ground-level works to the final aesthetic touches, our team oversees every stage with utmost professionalism and technical precision.
            </p>

            <h3>Core Services:</h3>
            <ul>
              <li>
                <strong>Excavation Works –</strong> Precise site preparation and earthmoving using modern equipment for a stable foundation.
              </li>
              <li>
                <strong>RCC Work –</strong> Reinforced cement concrete construction built with superior materials for unmatched durability.
              </li>
              <li>
                <strong>Structural & External Finishing –</strong> Complete structural solutions including masonry, plastering, waterproofing, and exterior enhancements.
              </li>
              <li>
                <strong>Interior Fit-Out –</strong> Tailored interiors with detailed craftsmanship in flooring, ceilings, painting, partitions, and carpentry.
              </li>
            </ul>
          </div>
        `,
        'images': ['/projects/four/1.jpg','/projects/four/2.jpg','/projects/four/3.jpg','/projects/four/4.jpg','/projects/four/5.jpg','/projects/four/6.jpg']
    },
    {
        "id": 1,
        "created_at": "2025-03-25T18:10:40.465154+00:00",
        "url": "https://gxjxmcdjbqqrdppnhvli.supabase.co/storage/v1/object/public/vinayakconstructions/uploads/1742926239828-WhatsApp%20Image%202025-03-13%20at%2017.57.49_33283f30.jpg",
        "heading": "INDIAN FARMERS FERTILISER COOPERATIVE (IFFCO)",
        "address":"KOTA",
        description: `
        <div class="Vinayak-description">
      <p>
        <strong>At Vinayak Constructions</strong>, we specialize in comprehensive building construction services, delivering projects with a strong emphasis on quality, safety, and on-time completion. From ground-level works to the final aesthetic touches, our team oversees every stage with utmost professionalism and technical precision.
      </p>

      <h3>Core Services:</h3>
      <ul>
        <li>
          <strong>Excavation Works –</strong> Precise site preparation and earthmoving using modern equipment for a stable foundation.
        </li>
        <li>
          <strong>RCC Work –</strong> Reinforced cement concrete construction built with superior materials for unmatched durability.
        </li>
        <li>
          <strong>Structural & External Finishing –</strong> Complete structural solutions including masonry, plastering, waterproofing, and exterior enhancements.
        </li>
        <li>
          <strong>Interior Fit-Out –</strong> Tailored interiors with detailed craftsmanship in flooring, ceilings, painting, partitions, and carpentry.
        </li>
      </ul>
    </div>
      `,
      'images': ['/photos/iifco.jpeg','/projects/two/2.jpg','/projects/two/3.jpg','/projects/two/4.jpg','/projects/two/5.jpg','/projects/two/6.jpg']
    },
    {
        "id": 2,
        "created_at": "2025-03-25T18:10:40.465154+00:00",
        "url": "https://gxjxmcdjbqqrdppnhvli.supabase.co/storage/v1/object/public/vinayakconstructions/uploads/1742926239828-WhatsApp%20Image%202025-03-13%20at%2017.57.49_33283f30.jpg",
        "heading": "CHAWLA INDUSTRIES WAREHOUSE",
        "address":"KOTA",
        description: `
        <div class="Vinayak-description">
          <p>
            <strong>At Vinayak Constructions</strong>, we specialize in comprehensive building construction services, delivering projects with a strong emphasis on quality, safety, and on-time completion. From ground-level works to the final aesthetic touches, our team oversees every stage with utmost professionalism and technical precision.
          </p>

          <h3>Core Services:</h3>
          <ul>
            <li>
              <strong>Excavation Works –</strong> Precise site preparation and earthmoving using modern equipment for a stable foundation.
            </li>
            <li>
              <strong>RCC Work –</strong> Reinforced cement concrete construction built with superior materials for unmatched durability.
            </li>
            <li>
              <strong>Structural & External Finishing –</strong> Complete structural solutions including masonry, plastering, waterproofing, and exterior enhancements.
            </li>
            <li>
              <strong>Interior Fit-Out –</strong> Tailored interiors with detailed craftsmanship in flooring, ceilings, painting, partitions, and carpentry.
            </li>
          </ul>
        </div>
      `,
      'images': ['/projects/three/1.jpg','/projects/three/2.jpg','/projects/three/3.jpg','/projects/three/4.jpg','/projects/three/5.jpg','/projects/three/6.jpg']
    },
    {
        "id": 3,
        "created_at": "2025-03-25T18:11:04.376336+00:00",
        "url": "https://gxjxmcdjbqqrdppnhvli.supabase.co/storage/v1/object/public/vinayakconstructions/uploads/1742926263361-gallery4.jpg",
        "heading": "HOSTELS",
        "address":"KOTA",
        description: `
        <div class="Vinayak-description">
      <p>
        <strong>At Vinayak Constructions</strong>, we specialize in comprehensive building construction services, delivering projects with a strong emphasis on quality, safety, and on-time completion. From ground-level works to the final aesthetic touches, our team oversees every stage with utmost professionalism and technical precision.
      </p>

      <h3>Core Services:</h3>
      <ul>
        <li>
          <strong>Excavation Works –</strong> Precise site preparation and earthmoving using modern equipment for a stable foundation.
        </li>
        <li>
          <strong>RCC Work –</strong> Reinforced cement concrete construction built with superior materials for unmatched durability.
        </li>
        <li>
          <strong>Structural & External Finishing –</strong> Complete structural solutions including masonry, plastering, waterproofing, and exterior enhancements.
        </li>
        <li>
          <strong>Interior Fit-Out –</strong> Tailored interiors with detailed craftsmanship in flooring, ceilings, painting, partitions, and carpentry.
        </li>
      </ul>
    </div>
      `,
      'images': ['/projects/one/1.jpg','/projects/one/2.jpg','/projects/one/3.jpg','/projects/one/4.jpg','/projects/one/5.jpg','/projects/one/6.jpg']
    },
]
  return (
    <div className="relative bg-gray-100 text-gray-900 mt-24">
      <div className="max-w-6xl mx-auto p-6 text-center relative">
        {/* Background Image - Always Visible */}

        {/* Video - Plays on Top */}
        <video
          crossOrigin="anonymous"
          className="w-full h-full object-cover z-10 relative"
          onError={() => setVideoError(true)}
          muted
          autoPlay
          loop
          playsInline
          style={{
            backgroundImage: "url('/photos/design1.jpeg')",
            filter: "brightness(0.5)",
          }}
        >
          <source 
            src="/projects/video.mp4"
            type="video/mp4"
          />
        </video>


        {/* Text Content */}
        <h1 className="relative z-20 text-black text-3xl font-bold p-6">
          Innovative projects transforming ideas globally.
        </h1>
        {/* <AddUserForm /> */}
        <section className="px-4 sm:px-6 lg:px-12">
      {/* Responsive Grid Layout */}
      <div className="max-w-6xl mx-auto">
      <div className="max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`grid md:grid-cols-2 gap-6 items-center ${
                index % 2 === 0 ? "" : "md:flex-row-reverse"
              }`}
            >
              {/* Image - Always in the Left Column */}
              <div className={`flex justify-center ${index % 2 === 0 ? "order-1" : "order-2"}`}>
                <div className="destination">
                          <div className="destination_box">
                          <div className="collage">
                            {project?.images?.map((project, index) => (
                              <img key={index} src={project} alt="Project 1"/>
                            ))}
                          </div>
                          </div>
                        </div>
                {/* <img src={project.url} alt={project.heading} className="w-[500px] h-[500px] object-cover rounded-lg" /> */}
              </div>
              
              {/* Text - Always in the Right Column */}
              <div className={`items-center justify-center text-center p-6 ${index % 2 === 0 ? "order-2" : "order-1"}`}>
                <h1 className="text-lg font-semibold text-gray-800">{project.heading}</h1>
                <div className="flex items-center justify-center my-6">
                  {/* Left Line */}
                  <div className="h-[2px] w-1/3 bg-gray-400"></div>

                  {/* Center Dot */}
                  <div className="w-4 h-4 bg-gray-600 rounded-full mx-2"></div>

                  {/* Right Line */}
                  <div className="h-[2px] w-1/3 bg-gray-400"></div>
                </div>
                  <div dangerouslySetInnerHTML={{ __html: project.description }}></div>
                {/* <p className="text-lg font-thin text-gray-600" ></p> */}
              </div>
        </div>
      ))}
    </div>
        </div>
    </section>
      </div>
    </div>
  );
}
