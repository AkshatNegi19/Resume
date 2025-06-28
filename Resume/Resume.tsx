"use client"

import { useState, useEffect } from "react"
import {
  Phone,
  MapPin,
  Mail,
  Briefcase,
  Award,
  GraduationCap,
  ExternalLink,
  Linkedin,
  Calendar,
  Code,
  Database,
  BarChart3,
  TrendingUp,
  Star,
  Zap,
  Target,
  Users,
  Brain,
  Sparkles,
  Rocket,
  ChevronRight,
  Activity,
} from "lucide-react"

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("overview")
  const [isLoaded, setIsLoaded] = useState(false)

  const skills = [
    { name: "SQL", icon: Database, level: 90, category: "Database", color: "from-cyan-400 to-blue-500" },
    { name: "Power BI", icon: BarChart3, level: 85, category: "Visualization", color: "from-green-400 to-emerald-500" },
    { name: "Excel", icon: TrendingUp, level: 88, category: "Analysis", color: "from-orange-400 to-red-500" },
    { name: "Python", icon: Code, level: 82, category: "Programming", color: "from-yellow-400 to-orange-500" },
    { name: "Tableau", icon: BarChart3, level: 80, category: "Visualization", color: "from-purple-400 to-pink-500" },
    { name: "HTML", icon: Code, level: 90, category: "Web Dev", color: "from-pink-400 to-rose-500" },
    { name: "CSS", icon: Code, level: 85, category: "Web Dev", color: "from-teal-400 to-cyan-500" },
    { name: "JavaScript", icon: Code, level: 78, category: "Programming", color: "from-amber-400 to-yellow-500" },
    { name: "Tailwind CSS", icon: Code, level: 85, category: "Web Dev", color: "from-emerald-400 to-green-500" },
    { name: "TypeScript", icon: Code, level: 75, category: "Programming", color: "from-violet-400 to-purple-500" },
    { name: "React JS", icon: Code, level: 80, category: "Framework", color: "from-lime-400 to-green-500" },
    { name: "Data Viz", icon: BarChart3, level: 88, category: "Analysis", color: "from-fuchsia-400 to-pink-500" },
  ]

  const tabs = [
    { id: "overview", label: "Overview", icon: Users, color: "from-cyan-400 to-blue-500" },
    { id: "experience", label: "Experience", icon: Briefcase, color: "from-green-400 to-emerald-500" },
    { id: "skills", label: "Skills", icon: Zap, color: "from-purple-400 to-pink-500" },
    { id: "projects", label: "Projects", icon: Rocket, color: "from-orange-400 to-red-500" },
  ]

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const renderOverview = () => (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Profile Card */}
      <div className="lg:col-span-1">
        <div className="bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 p-6 rounded-3xl shadow-2xl border border-purple-300/20">
          <div className="text-center">
            <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-yellow-400 via-orange-400 to-red-500 rounded-full flex items-center justify-center text-white shadow-2xl relative overflow-hidden">
              <span className="text-4xl font-bold relative z-10">AN</span>
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-full animate-pulse"></div>
            </div>
            <h1 className="text-3xl font-bold text-white mb-2">Akshat Negi</h1>
            <p className="text-xl text-purple-100 mb-4 font-semibold">Data Analyst</p>
            <div className="space-y-3">
              <div className="flex items-center justify-center text-purple-100 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Phone className="w-4 h-4 mr-2 text-yellow-300" />
                <span className="text-sm">8448452123</span>
              </div>
              <div className="flex items-center justify-center text-purple-100 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <MapPin className="w-4 h-4 mr-2 text-green-300" />
                <span className="text-sm">Delhi, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="mt-6 grid grid-cols-2 gap-4">
          <div className="bg-gradient-to-br from-cyan-400 to-blue-500 p-4 rounded-2xl text-center">
            <div className="text-2xl font-bold text-white">6+</div>
            <div className="text-xs text-cyan-100">Weeks Experience</div>
          </div>
          <div className="bg-gradient-to-br from-green-400 to-emerald-500 p-4 rounded-2xl text-center">
            <div className="text-2xl font-bold text-white">12+</div>
            <div className="text-xs text-green-100">Skills Mastered</div>
          </div>
          <div className="bg-gradient-to-br from-orange-400 to-red-500 p-4 rounded-2xl text-center">
            <div className="text-2xl font-bold text-white">3+</div>
            <div className="text-xs text-orange-100">Certifications</div>
          </div>
          <div className="bg-gradient-to-br from-purple-400 to-pink-500 p-4 rounded-2xl text-center">
            <div className="text-2xl font-bold text-white">1+</div>
            <div className="text-xs text-purple-100">Major Projects</div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="lg:col-span-2 space-y-6">
        {/* About Section */}
        <div className="bg-gradient-to-br from-emerald-400 via-teal-400 to-cyan-500 p-6 rounded-3xl shadow-2xl">
          <div className="flex items-center mb-4">
            <Brain className="w-8 h-8 text-white mr-3" />
            <h2 className="text-2xl font-bold text-white">About Me</h2>
          </div>
          <p className="text-emerald-50 leading-relaxed mb-4">
            Detail-oriented Data Analyst with a strong foundation in statistical analysis, data visualization, and
            machine learning. Currently pursuing a BSc in Data Analytics with hands-on experience in{" "}
            <span className="font-bold text-white">Python, SQL, Excel, Power BI, and Tableau</span>.
          </p>
          <p className="text-emerald-50 leading-relaxed">
            Also equipped with front-end development skills in{" "}
            <span className="font-bold text-white">HTML, CSS, and JavaScript</span>, enabling seamless integration of
            data insights into web-based platforms.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-yellow-400 via-orange-400 to-red-500 p-6 rounded-3xl shadow-2xl">
            <div className="flex items-center mb-4">
              <Target className="w-6 h-6 text-white mr-3" />
              <h3 className="text-xl font-bold text-white">Mission</h3>
            </div>
            <p className="text-yellow-50 text-sm leading-relaxed">
              Transforming complex datasets into <span className="font-bold text-white">actionable insights</span> that
              support data-driven decisions and business growth.
            </p>
          </div>

          <div className="bg-gradient-to-br from-pink-400 via-purple-400 to-indigo-500 p-6 rounded-3xl shadow-2xl">
            <div className="flex items-center mb-4">
              <Sparkles className="w-6 h-6 text-white mr-3" />
              <h3 className="text-xl font-bold text-white">Expertise</h3>
            </div>
            <p className="text-pink-50 text-sm leading-relaxed">
              Specializing in{" "}
              <span className="font-bold text-white">data storytelling, modeling, and visualization</span> to unlock
              organizational data potential.
            </p>
          </div>
        </div>

        {/* Education & Certifications */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-violet-400 via-purple-500 to-fuchsia-500 p-6 rounded-3xl shadow-2xl">
            <div className="flex items-center mb-4">
              <GraduationCap className="w-6 h-6 text-white mr-3" />
              <h3 className="text-xl font-bold text-white">Education</h3>
            </div>
            <div className="space-y-2">
              <p className="text-violet-100 font-semibold">BSc in Data Analytics</p>
              <p className="text-violet-200 text-sm">Delhi Skill Entrepreneurship University</p>
              <p className="text-violet-300 text-xs">October 2023 - Pursuing</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-lime-400 via-green-400 to-emerald-500 p-6 rounded-3xl shadow-2xl">
            <div className="flex items-center mb-4">
              <Award className="w-6 h-6 text-white mr-3" />
              <h3 className="text-xl font-bold text-white">Certifications</h3>
            </div>
            <div className="space-y-1">
              <button
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/posts/akshat-negi-2104442a1_project-management-fundamentals-was-issued-activity-7217125054180909056-xObB?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEjboCwBvb0FUyQkVoI42hApNiwvmmnM2Kc",
                    "_blank",
                  )
                }
                className="text-lime-100 text-sm hover:text-white hover:underline transition-colors duration-300 cursor-pointer block text-left"
              >
                • Project Management (IBM)
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/posts/akshat-negi-2104442a1_explore-emerging-tech-was-issued-by-ibm-skillsbuild-activity-7217125305830756352-U22B?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEjboCwBvb0FUyQkVoI42hApNiwvmmnM2Kc",
                    "_blank",
                  )
                }
                className="text-lime-100 text-sm hover:text-white hover:underline transition-colors duration-300 cursor-pointer block text-left"
              >
                • Emerging Tech (IBM)
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/posts/akshat-negi-2104442a1_data-fundamentals-was-issued-by-ibm-skillsbuild-activity-7217124364826132481-e5V-?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEjboCwBvb0FUyQkVoI42hApNiwvmmnM2Kc",
                    "_blank",
                  )
                }
                className="text-lime-100 text-sm hover:text-white hover:underline transition-colors duration-300 cursor-pointer block text-left"
              >
                • Data Fundamentals (IBM)
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  const renderExperience = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-br from-orange-400 via-red-400 to-pink-500 p-8 rounded-3xl shadow-2xl">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
          <div>
            <h3 className="text-3xl font-bold text-white mb-2">Data Analyst Intern</h3>
            <p className="text-2xl text-orange-100 font-semibold mb-2">IBM Skills Build Summer Internship</p>
            <p className="text-orange-200 text-lg">with CSRBOX</p>
            <div className="flex items-center mt-2 text-orange-100">
              <MapPin className="w-4 h-4 mr-1" />
              <span className="text-sm">Delhi, India</span>
            </div>
          </div>
          <div className="mt-4 lg:mt-0">
            <div className="flex items-center text-orange-100 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <Calendar className="w-4 h-4 mr-2" />
              <span className="font-medium">6-week Program</span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h4 className="text-xl font-bold text-white flex items-center">
              <Briefcase className="w-5 h-5 mr-2 text-yellow-300" />
              Key Responsibilities
            </h4>
            <div className="space-y-3">
              {[
                "Completed 6-week internship in Data Analytics & Visualization",
                "Gained hands-on experience with Python, IBM tools, and ML",
                "Worked on real-world sanitation analysis projects",
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-2 h-2 bg-yellow-300 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-orange-100 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-xl font-bold text-white flex items-center">
              <Star className="w-5 h-5 mr-2 text-green-300" />
              Achievements
            </h4>
            <div className="space-y-3">
              {[
                "Improved data-driven decision-making processes",
                "Developed expertise in Exploratory Data Analysis",
                "Mastered Power BI, Tableau, and Advanced Excel",
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-2 h-2 bg-green-300 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-orange-100 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 p-6 bg-white/10 backdrop-blur-sm rounded-2xl">
          <h4 className="text-lg font-bold text-white mb-3">Tools & Technologies:</h4>
          <div className="flex flex-wrap gap-2">
            {["Python", "Machine Learning", "EDA", "Tableau", "Power BI", "Advanced Excel", "MySQL"].map((tool) => (
              <span
                key={tool}
                className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-medium hover:bg-white/30 transition-all duration-300 cursor-pointer"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
        <div className="mt-6 text-center">
          <button
            onClick={() =>
              window.open(
                "https://www.linkedin.com/posts/akshat-negi-2104442a1_dataanalytics-internship-careergrowth-activity-7232607766257786880-z95G?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEjboCwBvb0FUyQkVoI42hApNiwvmmnM2Kc",
                "_blank",
              )
            }
            className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm text-white rounded-full hover:bg-white/30 transition-all duration-300 transform hover:scale-105 font-semibold group"
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            View Internship Post
            <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </div>
  )

  const renderSkills = () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {skills.map((skill, index) => {
        const Icon = skill.icon
        return (
          <div
            key={skill.name}
            className={`bg-gradient-to-br ${skill.color} p-6 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 cursor-pointer group`}
            style={{
              animationDelay: `${index * 100}ms`,
              animation: isLoaded ? "fadeInUp 0.6s ease-out forwards" : "none",
            }}
          >
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg group-hover:bg-white/30 transition-all duration-300">
                <Icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-white text-lg mb-1">{skill.name}</h3>
              <p className="text-xs text-white/80 mb-3">{skill.category}</p>

              <div className="relative">
                <div className="w-full bg-white/20 rounded-full h-3 mb-2">
                  <div
                    className="bg-white h-3 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <span className="text-sm font-bold text-white">{skill.level}%</span>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )

  const renderProjects = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-br from-emerald-400 via-teal-400 to-cyan-500 p-8 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 group">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/3">
            <div className="h-48 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="relative z-10 text-center text-white">
                <BarChart3 className="w-16 h-16 mx-auto mb-4 group-hover:animate-bounce" />
                <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">
                  Analytics Dashboard
                </span>
              </div>
              <div className="absolute top-4 right-4 w-3 h-3 bg-yellow-400 rounded-full animate-ping"></div>
            </div>
          </div>

          <div className="lg:w-2/3">
            <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-yellow-100 transition-colors duration-300">
              Churn Analysis Dashboard
            </h3>
            <p className="text-emerald-50 mb-6 leading-relaxed">
              Built an interactive dashboard using SQL and Power BI to analyze customer churn patterns. Extracted and
              transformed data using SQL, and visualized key metrics such as churn rate by demographics, contract type,
              service usage, and geography. Identified high-risk segments and churn drivers.
            </p>

            <div className="flex flex-wrap gap-3 mb-6">
              {["Power BI", "SQL", "Data Analysis", "Visualization"].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-medium hover:bg-white/30 transition-all duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            <button
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/posts/akshat-negi-2104442a1_im-excited-to-share-my-customer-churn-analysis-activity-7324504045899984896-m_kI?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEjboCwBvb0FUyQkVoI42hApNiwvmmnM2Kc",
                  "_blank",
                )
              }
              className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm text-white rounded-full hover:bg-white/30 transition-all duration-300 transform hover:scale-105 font-semibold group"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              View Project
              <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 min-h-screen p-4 lg:p-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <div className="mb-6 lg:mb-0">
              <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                Digital Resume
              </h1>
              <p className="text-xl text-gray-300">Interactive Portfolio Dashboard</p>
            </div>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => window.open("https://www.linkedin.com/in/akshat-negi-2104442a1", "_blank")}
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-400 to-cyan-500 text-white rounded-full hover:shadow-2xl transition-all duration-300 transform hover:scale-105 font-semibold"
              >
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn
              </button>
              <button
                onClick={() => window.open("https://mail.google.com", "_blank")}
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-400 to-pink-500 text-white rounded-full hover:shadow-2xl transition-all duration-300 transform hover:scale-105 font-semibold"
              >
                <Mail className="w-4 h-4 mr-2" />
                Contact
              </button>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-4">
            {tabs.map((tab) => {
              const Icon = tab.icon
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`inline-flex items-center px-6 py-3 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                    activeTab === tab.id
                      ? `bg-gradient-to-r ${tab.color} text-white shadow-2xl`
                      : "bg-gray-800/50 backdrop-blur-sm text-gray-300 hover:bg-gray-700/50"
                  }`}
                >
                  <Icon className="w-5 h-5 mr-2" />
                  {tab.label}
                </button>
              )
            })}
          </div>
        </div>

        {/* Content */}
        <div className="transition-all duration-500">
          {activeTab === "overview" && renderOverview()}
          {activeTab === "experience" && renderExperience()}
          {activeTab === "skills" && renderSkills()}
          {activeTab === "projects" && renderProjects()}
        </div>

        {/* Footer */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm rounded-full">
            <Activity className="w-4 h-4 mr-2 text-green-400" />
            <span className="text-gray-300 text-sm">© 2024 Akshat Negi • Transforming Data into Insights</span>
          </div>
        </div>
      </div>
    </div>
  )
}
