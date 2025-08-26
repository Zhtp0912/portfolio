"use client"
import Image from "next/image";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Home() {
  const skillsData: Record<string, string[]> = {
    Frontend: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind", "FlutterFlow"],
    Backend: ["PHP", "Node.js", "MySQL", "Python", "Java", "C++","Flutter"],
    Microsoft: ["Access", "Excel", "Powerpoint", "Word"],
    Tools: ["Figma", "Canva", "GitHub", "Bitbucket", "Jira"],
  };
  
  const [openCategory, setOpenCategory] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  const toggleCategory = (category: string) => {
    setOpenCategory(openCategory === category ? null : category);
  };
  
  const projects = [
    { img: "/php.png", title: "E-learning Platform", desc: "PHP/HTML/CSS/Javascript/MySQL" },
    { img: "/java.png", title: "Simple Booking System", desc: "Java/Apache NetBeans" },
    { img: "/botpress.png", title: "Pangolin Care Center", desc: "Botpress" },
    { img: "/flutter.png", title: "Medical Application", desc: "Flutter/FlutterFlow" },
    { img: "/python.png", title: "Tower Defense Game", desc: "Python" },
    { img: "/nextjs.png", title: "Allowance Counter", desc: "Next Js" },
  ]; 

  return (
    <main className="font-sans bg-white text-gray-800">
      {/* Hero Section */}
      <section id="about" className="py-20 px-6 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 relative overflow-hidden">
        {/* Background gradient elements */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200 rounded-full opacity-30 blur-xl"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-200 rounded-full opacity-30 blur-xl"></div>
          <div className="absolute top-40 right-10 w-24 h-24 bg-pink-200 rounded-full opacity-30 blur-xl"></div>
        </div>

        {/* Text on the left */}
        <div className="flex-1 text-left relative z-10">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold mb-4 text-blue-600">Hey There!</h2> 
            <h1 className="text-4xl sm:text-6xl font-bold mb-4 text-gray-900">I'm Zhan Heng</h1> 
            <p className="text-lg sm:text-xl mb-6 text-purple-600 font-medium">A passionate Developer building modern IT applications</p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Motivated and dedicated programmer with an eagerness 
              to learn and grow in the IT field. Actively seeking 
              opportunities for hands-on experience and deepen 
              grasp of real-world industry practices.
            </p>

            <a href="#skills" 
            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg shadow-lg hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105" > 
              See More
            </a>
          </div>
          <div className="mt-16 grid grid-cols-3 gap-4 text-center">
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-3xl font-semibold text-blue-600">01</p>
              <p className="text-sm text-gray-600">Years<br />experience</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <p className="text-3xl font-semibold text-purple-600">10+</p>
              <p className="text-sm text-gray-600">Completed<br />project</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <p className="text-3xl font-semibold text-green-600">02</p>
              <p className="text-sm text-gray-600">Companies<br />worked</p>
            </div>
          </div>
        </div>
        
        {/* Image and Social Icons on the right */}
        <div className="flex-1 flex justify-center items-center relative z-10">
          <div className="flex items-center gap-8">
            {/* Social Icons - Vertical Layout */}
            <div className="flex flex-col gap-4">
              {/* WhatsApp */}
              <a href="https://wa.me/60186605356" target="_blank" rel="noopener noreferrer" 
                 className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg hover:shadow-xl">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.89 3.486"/>
                </svg>
              </a>

              {/* LinkedIn */}
              <a href="https://www.linkedin.com/in/zhan-heng-cho-6902b1238/" target="_blank" rel="noopener noreferrer" 
                 className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg hover:shadow-xl">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>

              {/* Email */}
              <a href="mailto:tp068635@mail.apu.edu.my" 
                 className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg hover:shadow-xl">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h3.819l6.545 4.91 6.545-4.91h3.819A1.636 1.636 0 0 1 24 5.457z"/>
                </svg>
              </a>
            </div>

            {/* Profile Image with Gradient Background */}
            <div className="relative">
              {/* Gradient background circle */}
              <div className="absolute -inset-4 bg-gradient-to-br from-pink-400 via-purple-500 to-blue-500 rounded-full opacity-80"></div>
              {/* Inner white circle */}
              <div className="absolute -inset-2 bg-white rounded-full"></div>
              {/* Profile image */}
              <div className="relative w-80 h-80 rounded-full overflow-hidden">
                <Image
                  src="/profile.png"
                  alt="Zhan Heng"
                  width={320}
                  height={320}
                  className="object-cover w-full h-full"
                />
              </div>
              {/* Decorative dots */}
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-400 rounded-full"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-pink-400 rounded-full"></div>
              <div className="absolute top-1/2 -right-6 w-3 h-3 bg-blue-400 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-20 px-6 max-w-6xl mx-auto">
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 shadow-xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Skills & Technologies
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries(skillsData).map(([category, skills]) => {
              const categoryColors = {
                Frontend: { bg: 'bg-blue-500', light: 'bg-blue-50', text: 'text-blue-600', border: 'border-blue-200', hover: 'hover:bg-blue-100' },
                Backend: { bg: 'bg-purple-500', light: 'bg-purple-50', text: 'text-purple-600', border: 'border-purple-200', hover: 'hover:bg-purple-100' },
                Microsoft: { bg: 'bg-green-500', light: 'bg-green-50', text: 'text-green-600', border: 'border-green-200', hover: 'hover:bg-green-100' },
                Tools: { bg: 'bg-orange-500', light: 'bg-orange-50', text: 'text-orange-600', border: 'border-orange-200', hover: 'hover:bg-orange-100' }
              };
              
              const colors = categoryColors[category as keyof typeof categoryColors];
              const isOpen = openCategory === category;
              
              return (
                <div
                  key={category}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden"
                >
                  {/* Category Header - Clickable */}
                  <button
                    onClick={() => toggleCategory(category)}
                    className={`w-full flex items-center justify-between p-6 ${colors.hover} transition-colors duration-200 focus:outline-none`}
                  >
                    <div className="flex items-center">
                      <div className={`w-12 h-12 ${colors.bg} rounded-xl flex items-center justify-center mr-4 shadow-lg`}>
                        <span className="text-white font-bold text-lg">
                          {category === 'Frontend' ? '🎨' : 
                           category === 'Backend' ? '⚙️' : 
                           category === 'Microsoft' ? '🪟' : '🔧'}
                        </span>
                      </div>
                      <div className="text-left">
                        <h3 className={`text-xl font-bold ${colors.text}`}>
                          {category}
                        </h3>
                        <p className="text-sm text-gray-500 mt-1">
                          {skills.length} technologies
                        </p>
                      </div>
                    </div>
                    
                    {/* Dropdown Arrow */}
                    <div className={`transform transition-transform duration-300 ${colors.text} ${
                      isOpen ? "rotate-180" : ""
                    }`}>
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>

                  {/* Skills Dropdown Content */}
                  <div className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}>
                    <div className={`p-6 pt-0 ${colors.light}`}>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        {skills.map((skill, index) => (
                          <div
                            key={skill}
                            className="bg-white rounded-lg p-3 text-center text-gray-700 font-medium shadow-sm hover:shadow-md transition-all duration-200 hover:scale-105 border border-gray-200"
                            style={{
                              animationDelay: `${index * 50}ms`
                            }}
                          >
                            {skill}
                          </div>
                        ))}
                      </div>
                      
                      {/* Progress Bar */}
                      <div className="mt-4">
                        <div className={`w-full ${colors.light} rounded-full h-2`}>
                          <div 
                            className={`${colors.bg} h-2 rounded-full transition-all duration-1000 ease-out ${
                              isOpen ? 'w-full' : 'w-0'
                            }`}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Additional Stats */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="text-2xl font-bold text-blue-600 mb-2">20+</div>
              <div className="text-sm text-gray-600">Technologies</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="text-2xl font-bold text-purple-600 mb-2">4</div>
              <div className="text-sm text-gray-600">Categories</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="text-2xl font-bold text-green-600 mb-2">3+</div>
              <div className="text-sm text-gray-600">Years Learning</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="text-2xl font-bold text-orange-600 mb-2">10+</div>
              <div className="text-sm text-gray-600">Projects Built</div>
            </div>
          </div>
        </div>
      </section>

      {/* Qualifications */}
      <section id="qualification" className="py-20 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-10 text-gray-900">Qualifications</h2>
        <ul className="space-y-6">
          <li className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-500 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold text-gray-900">IGCSE</h3>
            <p className="text-gray-600">
              Poi Lam High School(SUWA) — 2015–2019
            </p>
            <p className="text-blue-600 font-medium">
              7A
            </p>
          </li>
          <li className="bg-white p-6 rounded-xl shadow-md border-l-4 border-yellow-500 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold text-gray-900">Microsoft Office Speacialist</h3>
            <p className="text-gray-600">2019-2020</p>
            <p className="text-yellow-600 font-medium">Microsoft Access (Office 2016)</p>
            <p className="text-yellow-600 font-medium">Microsoft Excel Expert (Office 2016)</p>
            <p className="text-yellow-600 font-medium">Microsoft  PowerPoint (Office 2016)</p>
            <p className="text-yellow-600 font-medium">Microsoft Word Expert (Office 2016)</p>
          </li>
          <li className="bg-white p-6 rounded-xl shadow-md border-l-4 border-purple-500 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold text-gray-900">Diploma in Information & Communication Technology with a specialism in Software Engineering</h3>
            <p className="text-gray-600">Asia Pacific University (APU) — 2022–2024</p>
            <p className="text-purple-600 font-medium">
              CGPA: 3.4
            </p>
          </li>
          <li className="bg-white p-6 rounded-xl shadow-md border-l-4 border-green-500 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold text-gray-900">Full Stack Programmer (Internship)</h3>
            <p className="text-green-600">IPS Software — 2024 May - 2024 July</p>
          </li>
          <li className="bg-white p-6 rounded-xl shadow-md border-l-4 border-orange-500 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold text-gray-900">Bachelor of Computer Science (Hons) (Artificial Intelligence)</h3>
            <p className="text-gray-600">Asia Pacific University (APU) — 2024–Present</p>
            <p className="text-orange-600 font-medium">
              CGPA: 3.35
            </p>
          </li>
        </ul>
      </section>

      {/* Services */}
      <section id="services" className="py-20 px-6 bg-gradient-to-br from-purple-50 to-blue-50">
        <h2 className="text-3xl font-semibold text-center mb-10 text-gray-900">Services</h2>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-2 max-w-5xl mx-auto">
          {[
            { title: "Web Development", desc: "Building responsive and modern websites", color: "blue" },
            { title: "UI/UX Design", desc: "Designing user-friendly interfaces", color: "purple" },
          ].map((service, index) => (
            <div
              key={service.title}
              className={`p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all transform hover:scale-105 border-t-4 ${
                service.color === "blue" ? "border-blue-500" : "border-purple-500"
              }`}
            >
              <div className={`w-12 h-12 rounded-lg mb-4 flex items-center justify-center ${
                service.color === "blue" ? "bg-blue-100" : "bg-purple-100"
              }`}>
                <span className={`text-2xl ${
                  service.color === "blue" ? "text-blue-600" : "text-purple-600"
                }`}>
                  {service.color === "blue" ? "🌐" : "🎨"}
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">{service.title}</h3>
              <p className="text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-10 text-gray-900">Portfolio</h2>

        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation
          className="portfolio-swiper"
        >
          {projects.map((proj, index) => (
            <SwiperSlide key={index}>
              <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all transform hover:scale-105 border border-gray-100">
                <div
                  onClick={() => setSelectedImage(proj.img)}
                  className="relative overflow-hidden rounded-lg mb-4 h-64 cursor-pointer"
                >
                  <Image
                    src={proj.img}
                    alt={proj.title}
                    width={400}
                    height={250}
                    className="object-contain w-full h-64 bg-gray-100"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{proj.title}</h3>
                <p className="text-gray-600 text-sm">{proj.desc}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Expanded Image */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl w-full p-4">
              <Image
                src={selectedImage}
                alt="Expanded"
                width={800}
                height={1200}
                className="object-contain max-h-screen max-w-full"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-2 right-2 text-white bg-black/50 hover:bg-black p-2 rounded-full text-2xl"
              >
                &times;
              </button>
            </div>
          </div>
        )}
      </section>

      {/* Contact Me */}
      <section
        id="contact"
        className="py-20 px-6 bg-gradient-to-br from-blue-50 to-purple-50 text-center"
      >
        <h2 className="text-3xl font-semibold mb-6 text-gray-900">Contact Me</h2>
        <p className="mb-6 text-gray-600">
          Feel free to reach out for collaborations or just a friendly chat.
        </p>

        <form
          action="https://formsubmit.co/tp068635@mail.apu.edu.my"
          method="POST"
          className="max-w-xl mx-auto bg-white p-8 rounded-xl shadow-lg text-left space-y-6 border border-gray-100"
        >
          {/* Hidden inputs to configure FormSubmit */}
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_subject" value="New Contact Message!" />
          <input type="hidden" name="_next" value="https://yourdomain.com/thank-you" />

          {/* Name */}
          <div>
            <label className="block mb-2 font-medium text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-2 font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
            />
          </div>

          {/* Contact Number */}
          <div>
            <label className="block mb-2 font-medium text-gray-700">Contact Number</label>
            <input
              type="tel"
              name="contact"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block mb-2 font-medium text-gray-700">Message</label>
            <textarea
              name="message"
              rows={5}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
            ></textarea>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg shadow-lg hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold">Zhan Heng</h3>
            <p className="text-sm text-white/80">AI Engineer | Software Engineer</p>
          </div>

          {/* Navigation Links */}
          <ul className="flex gap-6 mb-6 md:mb-0 text-sm font-medium">
            <li><a href="#services" className="hover:text-blue-200 transition-colors">Services</a></li>
            <li><a href="#portfolio" className="hover:text-blue-200 transition-colors">Portfolio</a></li>
            <li><a href="#contact" className="hover:text-blue-200 transition-colors">Contact</a></li>
          </ul>

          {/* Social Icons */}
          <div className="flex gap-4">
            {/* LinkedIn */}
            <a 
              href="https://www.linkedin.com/in/zhan-heng-cho-6902b1238" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all duration-300 backdrop-blur-sm border border-white/20"
              title="LinkedIn"
            >
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>

            {/* Email */}
            <a 
              href="mailto:tp068635@mail.apu.edu.my" 
              className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all duration-300 backdrop-blur-sm border border-white/20"
              title="Email"
            >
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>

            {/* WhatsApp */}
            <a 
              href="https://wa.me/60186605356" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all duration-300 backdrop-blur-sm border border-white/20"
              title="WhatsApp"
            >
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.89 3.486"/>
              </svg>
            </a>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/20 text-center">
          <p className="text-sm text-white/70">
            © 2025 CHO ZHAN HENG | All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}