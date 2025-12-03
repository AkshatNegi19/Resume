import { Github, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import "./index.css";
import { useState, useEffect } from "react";

// ✅ Project Images
import churnImg from "../Projects Img/Churn Analysis.png";
import klimateImg from "../Projects Img/Klimate.png";
import mernImg from "../Projects Img/Mern Auth .png";

export default function Portfolio() {
  const skillData = [
    { name: "Python", category: "Programming", percent: "85%" },
    { name: "JavaScript", category: "Programming", percent: "80%" },
    { name: "TypeScript", category: "Programming", percent: "70%" },
    { name: "SQL", category: "Databases", percent: "75%" },
    { name: "MongoDB", category: "Databases", percent: "70%" },
    { name: "Power BI", category: "Visualization", percent: "80%" },
    { name: "Tableau", category: "Visualization", percent: "70%" },
    { name: "React.js", category: "Web", percent: "85%" },
    { name: "Node.js", category: "Web", percent: "80%" },
    { name: "Express.js", category: "Web", percent: "75%" },
    { name: "Tailwind CSS", category: "Styling", percent: "90%" },
    { name: "HTML", category: "Styling", percent: "95%" },
    { name: "CSS", category: "Styling", percent: "90%" },
  ];

  const [activeSection, setActiveSection] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false); // mobile menu

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { root: null, rootMargin: "0px", threshold: 0.6 } // 60% visible
    );

    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  // Scroll to section smoothly
  const scrollToSection = (id: any) => {
    const target = document.getElementById(id);
    if (!target) return;
    const start = window.pageYOffset;
    const end = target.offsetTop;
    const duration = 700;
    let startTime: any = null;

    const animateScroll = (currentTime: any) => {
      if (!startTime) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      window.scrollTo(0, start + (end - start) * progress);
      if (progress < 1) requestAnimationFrame(animateScroll);
    };

    requestAnimationFrame(animateScroll);
  };

  function SkillsSection() {
    const [activeTab, setActiveTab] = useState("All");
    const [prevTab, setPrevTab] = useState("All");
    const [skipInitial, setSkipInitial] = useState(true); // skip animation for initial load
    const tabs = ["All", "Programming", "Databases", "Visualization", "Web", "Styling"];
    const filteredSkills =
      activeTab === "All"
        ? skillData
        : skillData.filter((skill) => skill.category === activeTab);

    // Detect first time Skills section comes into view
    useEffect(() => {
      const section = document.getElementById("skills");
      if (!section) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setSkipInitial(false); // after first scroll into view
            }
          });
        },
        { threshold: 0.2 }
      );

      observer.observe(section);
      return () => observer.disconnect();
    }, []);

    return (
      <div className="w-full max-w-6xl px-3 sm:px-4">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12">
          My <span className="text-purple-400">Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setPrevTab(activeTab);
                setActiveTab(tab);
              }}
              className={`px-4 py-2 rounded-full border border-white/20 backdrop-blur-md transition text-sm sm:text-base ${
                activeTab === tab
                  ? "bg-purple-600/40 text-white scale-105"
                  : "hover:bg-white/10 text-gray-300"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          <AnimatePresence mode="wait">
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={
                  !skipInitial && prevTab !== activeTab
                    ? { opacity: 0, y: 25, scale: 0.9 }
                    : false
                }
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -25, scale: 0.9 }}
                transition={{
                  duration: 0.35,
                  delay: !skipInitial && prevTab !== activeTab ? index * 0.05 : 0,
                }}
                className="bg-white/5 p-5 sm:p-6 rounded-xl border border-white/10 shadow-xl"
              >
                <h3 className="text-lg mb-3">{skill.name}</h3>
                <div className="w-full bg-white/10 rounded-full h-2 mb-2">
                  <motion.div
                    initial={!skipInitial && prevTab !== activeTab ? { width: 0 } : false}
                    animate={{ width: skill.percent }}
                    transition={{ duration: 0.7 }}
                    className="bg-purple-500 h-2 rounded-full"
                  ></motion.div>
                </div>
                <p className="text-sm text-right text-gray-400">{skill.percent}</p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#0a0a0f] text-white font-sans scroll-smooth">
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full bg-black/40 backdrop-blur-lg z-50 px-4 sm:px-6 py-3 flex justify-between items-center">
        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-purple-600 flex items-center justify-center text-xl sm:text-2xl font-bold">
          A
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6 lg:space-x-8 text-base lg:text-lg">
          {[
            { id: "hero", label: "Home" },
            { id: "skills", label: "Skills" },
            { id: "projects", label: "Projects" },
            { id: "experience", label: "Experience" },
            { id: "contact", label: "Contact" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`transition-colors hover:text-purple-400 ${
                activeSection === item.id ? "text-purple-400" : "text-white"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-2xl sm:text-3xl p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        {/* Mobile menu overlay */}
        {menuOpen && (
          <div className="absolute top-full left-0 w-full bg-black/95 backdrop-blur-md z-40 flex flex-col items-center py-6 space-y-4 md:hidden">
            {[
              { id: "hero", label: "Home" },
              { id: "skills", label: "Skills" },
              { id: "projects", label: "Projects" },
              { id: "experience", label: "Experience" },
              { id: "contact", label: "Contact" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  scrollToSection(item.id);
                  setMenuOpen(false);
                }}
                className="text-lg text-white hover:text-purple-400"
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* HERO */}
      <section id="hero" className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-10 text-center pt-20 sm:pt-24">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4"
        >
          Hi, I'm <span className="text-purple-400">Akshat Negi</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25 }}
          className="text-base sm:text-lg md:text-xl max-w-2xl text-gray-300 px-2"
        >
          I enjoy working with data, discovering patterns, building meaningful visualizations, and creating interactive applications.
        </motion.p>

        <div className="flex flex-wrap justify-center gap-6 text-2xl sm:text-3xl mt-8 sm:mt-10">
          <a href="https://www.linkedin.com/in/akshat-negi-2104442a1/" className="hover:text-purple-400"><Linkedin /></a>
          <a href="https://github.com/AkshatNegi19" className="hover:text-purple-400"><Github /></a>
          <a href="mailto:negiakt05@gmail.com" className="hover:text-purple-400"><Mail /></a>
          <a href="tel:+918448452123" className="hover:text-purple-400"><Phone /></a>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="min-h-screen flex justify-center items-center px-4 sm:px-6 md:px-10 py-16 sm:py-20">
        <SkillsSection />
      </section>

      {/* PROJECTS */}
      <section id="projects" className="min-h-screen px-4 sm:px-6 md:px-10 py-16 sm:py-20">
  <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12">
    My <span className="text-purple-500">Projects</span>
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">

    {/* MERN AUTH */}
    <motion.div 
      whileHover={{ y: -8 }} 
      className="bg-white/5 rounded-xl border border-white/10 overflow-hidden shadow-lg"
    >
      <img 
        src={mernImg} 
        alt="MERN Auth" 
        className="h-48 sm:h-56 w-full object-cover"
      />

      <div className="p-5 sm:p-6">
        <h3 className="text-2xl mb-2">MERN Authentication System</h3>
        <p className="text-gray-400 text-sm mb-3">
          Secure authentication system with JWT, Email Verification and Password Reset.
        </p>

        <div className="text-sm text-gray-300 mb-5 space-y-1">
          <p><span className="text-purple-400 font-semibold">Frontend:</span> React, Vite, TailwindCSS, Axios</p>
          <p><span className="text-purple-400 font-semibold">Backend:</span> Node.js, Express.js, Nodemailer</p>
          <p><span className="text-purple-400 font-semibold">Database:</span> MongoDB, Mongoose</p>
          <p><span className="text-purple-400 font-semibold">Security:</span> bcryptjs, JWT (HTTP-only cookies)</p>
        </div>

        <a
          href="https://github.com/AkshatNegi19/Mern-Auth"
          target="_blank"
          rel="noreferrer"
          className="block text-center w-full py-2 bg-purple-600 rounded-lg hover:bg-purple-700"
        >
          View Project
        </a>
      </div>
    </motion.div>

    {/* KLIMATE */}
    <motion.div 
      whileHover={{ y: -8 }} 
      className="bg-white/5 rounded-xl border border-white/10 overflow-hidden shadow-lg"
    >
      <img 
        src={klimateImg} 
        alt="Klimate" 
        className="h-48 sm:h-56 w-full object-cover"
      />

      <div className="p-5 sm:p-6">
        <h3 className="text-2xl mb-2">Klimate Weather App</h3>
        <p className="text-gray-400 text-sm mb-3">
          Real-time weather application using OpenWeatherMap API.
        </p>

        <div className="text-sm text-gray-300 mb-5 space-y-1">
          <p><span className="text-purple-400 font-semibold">Frontend:</span> React (Hooks), ShadCN</p>
          <p><span className="text-purple-400 font-semibold">API:</span> OpenWeatherMap API</p>
          <p><span className="text-purple-400 font-semibold">Styling:</span> CSS, TailwindCSS</p>
          <p><span className="text-purple-400 font-semibold">State:</span> TanStack Query</p>
        </div>

        <a
          href="https://github.com/AkshatNegi19/Klimate"
          target="_blank"
          rel="noreferrer"
          className="block text-center w-full py-2 bg-purple-600 rounded-lg hover:bg-purple-700"
        >
          View Project
        </a>
      </div>
    </motion.div>

    {/* CHURN ANALYSIS */}
    <motion.div 
      whileHover={{ y: -8 }} 
      className="bg-white/5 rounded-xl border border-white/10 overflow-hidden shadow-lg"
    >
      <img 
        src={churnImg} 
        alt="Customer Churn Analysis" 
        className="h-48 sm:h-56 w-full object-cover"
      />

      <div className="p-5 sm:p-6">
        <h3 className="text-2xl mb-2">Customer Churn Analysis</h3>
        <p className="text-gray-400 text-sm mb-3">
          In-depth analysis & visualization of customer churn patterns.
        </p>

        <div className="text-sm text-gray-300 mb-5 space-y-1">
          <p><span className="text-purple-400 font-semibold">Database:</span> Microsoft SQL Server</p>
          <p><span className="text-purple-400 font-semibold">Query Language:</span> T-SQL</p>
          <p><span className="text-purple-400 font-semibold">Visualization:</span> Power BI</p>
        </div>

        <a
          href="https://github.com/AkshatNegi19/Churn-Analysis"
          target="_blank"
          rel="noreferrer"
          className="block text-center w-full py-2 bg-purple-600 rounded-lg hover:bg-purple-700"
        >
          View Project
        </a>
      </div>
    </motion.div>

  </div>
</section>

      {/* EXPERIENCE */}
      <section id="experience" className="min-h-screen px-4 sm:px-6 md:px-10 py-16 sm:py-20 flex flex-col justify-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-center">Experience</h2>
        <div className="relative bg-[#060a14] border border-[#1f2937] p-6 sm:p-8 md:p-10 rounded-2xl max-w-5xl mx-auto">
          {/* LINK ICON */}
          <a
            href="https://www.linkedin.com/posts/akshat-negi-2104442a1_dataanalytics-internship-careergrowth-activity-7232607766257786880-z95G?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEjboCwBvb0FUyQkVoI42hApNiwvmmnM2Kc"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-4 sm:top-6 right-4 sm:right-6"
          >
            <svg
              className="w-6 h-6 text-indigo-500 hover:scale-110 transition-transform"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14V3z" />
              <path d="M5 5h5V3H3v7h2V5zm0 14v-5H3v7h7v-2H5z" />
            </svg>
          </a>

          <h3 className="text-xl sm:text-2xl font-semibold mb-2">Data Analyst Intern | IBM with CSRBOX, Delhi</h3>
          <p className="text-gray-400 mb-6">Jun 24 - Aug 24</p>

          <ul className="list-disc pl-5 sm:pl-6 space-y-2 sm:space-y-3 text-gray-300 text-sm sm:text-base">
            <li>Completed a structured internship focused on data analytics, visualization, and machine learning basics.</li>
            <li>Performed data cleaning, wrangling, and exploratory analysis using Python and IBM tools.</li>
            <li>Worked on real-world social impact datasets, including sanitation analysis in urban areas, contributing to better data-driven decision-making.</li>
            <li>Built dashboards using Power BI and Tableau, showcasing insights through KPIs, trends, and charts.</li>
            <li>Strengthened skills in EDA, reporting, Excel analytics, and SQL-based transformations.</li>
          </ul>

          <p className="mt-6 sm:mt-8 text-indigo-400 font-medium text-sm sm:text-lg">
            Tools: Python, MySQL, Power BI, Tableau, Advanced Excel, EDA, ML basics
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-10 py-16 sm:py-20 bg-[#050508]">
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {/* LEFT - INFO */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Get In <span className="text-purple-500">Touch</span></h2>
            <p className="text-gray-400 mb-8 sm:mb-10 max-w-md">
              Have a project in mind or want to collaborate? Feel free to reach out. I'm always open to new opportunities.
            </p>

            <div className="space-y-6 sm:space-y-8">
              <div className="flex items-center gap-4">
                <Mail className="text-purple-500"/>
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <p className="font-semibold">negiakt05@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="text-purple-500"/>
                <div>
                  <p className="text-gray-400 text-sm">Phone</p>
                  <p className="font-semibold">+91 8448452123</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="text-purple-500"/>
                <div>
                  <p className="text-gray-400 text-sm">Location</p>
                  <p className="font-semibold">Delhi, India</p>
                </div>
              </div>
            </div>

            <div className="flex gap-6 text-2xl mt-8">
              <a href="https://www.linkedin.com/in/akshat-negi-2104442a1/" className="hover:text-purple-400"><Linkedin /></a>
              <a href="https://github.com/AkshatNegi19" className="hover:text-purple-400"><Github /></a>
            </div>
          </div>

          {/* RIGHT - DOWNLOAD RESUME */}
          <div className="bg-[#0a0a0f] p-6 sm:p-10 md:p-12 rounded-2xl border border-white/10 shadow-xl flex flex-col items-center justify-center text-center">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-white">Download My Resume</h3>
            <p className="text-gray-400 mb-6 sm:mb-10 text-sm sm:text-lg max-w-md">
              Explore my latest resume to see my skills, projects, and professional experience. Download it to keep a copy or share with anyone you like.
            </p>

            <a
              href="/Resume/AKSHAT_RESUME.pdf"
              download="Akshat_Negi_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{ zIndex: 999, position: "relative", pointerEvents: "auto" }}
              className="flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-purple-600 rounded-full text-white font-semibold text-base sm:text-lg hover:bg-purple-700 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 sm:w-6 sm:h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 4v12m0 0l-4-4m4 4l4-4M4 20h16"
                />
              </svg>

              Download Resume
            </a>
          </div>
        </div>
      </section>

      <footer className="py-6 text-center text-white">© 2025 Akshat Negi</footer>
    </div>
  );
}
