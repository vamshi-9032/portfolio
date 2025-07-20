import React, { useState, useEffect } from "react";
import Chatbot from "./components/Chatbot";
import {
  Menu,
  X,
  Download,
  Mail,
  Phone,
  Github,
  Linkedin,
  ChevronDown,
  Code,
  Database,
  Wrench,
  BookOpen,
  Award,
  Briefcase,
  MapPin,
} from "lucide-react";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "skills",
        "projects",
        "experience",
        "education",
        "certifications",
        "contact",
      ];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "education", label: "Education" },
    { id: "certifications", label: "Certifications" },
    { id: "contact", label: "Contact" },
  ];

  const skills = {
    languages: ["JavaScript", "Java", "Python", "HTML", "CSS"],
    frameworks: ["React", "Angular", "Bootstrap", "Node.js", "Express.js"],
    databases: ["MongoDB", "MySQL", "Git", "GitHub", "AutoCAD"],
  };

  const projects = [
    {
      title: "Ultrasonic Sensor-Based Automatic Braking System",
      description:
        "Led a 4-member team to build a real-time embedded braking system using ultrasonic sensors. Developed safety algorithms and implemented hardware integration for automotive applications.",
      technologies: [
        "Embedded Systems",
        "Ultrasonic Sensors",
        "Real-time Processing",
        "Team Leadership",
      ],
      image:
        "https://kitsguru.com/cdn/shop/products/products-LGEC194-Ultrasonic-sensor-based-smooth-breaking-system.jpg?v=1628432964",
    },
  ];

  const experience = [
    {
      title: "Full Stack Web Development Trainee",
      company: "Naresh IT Solutions",
      duration: "May 2024 – Present",
      description:
        "Participating in real-time projects with expert guidance. Gaining hands-on experience in modern web development technologies and best practices.",
      icon: <Code className="w-6 h-6" />,
    },
    {
      title: "Full Stack Web Development Intern",
      company: "CodSoft",
      duration: "Jul–Aug 2024",
      description:
        "Developed and deployed full stack applications using HTML, CSS, JavaScript, Node.js, React, and Express.js. Collaborated with cross-functional teams to deliver high-quality solutions.",
      icon: <Briefcase className="w-6 h-6" />,
    },
  ];

  const education = [
    {
      degree: "B.Tech in Electrical and Electronics Engineering",
      institution: "Kakatiya University",
      duration: "Expected Jan 2025",
      grade: "75%",
    },
    {
      degree: "Senior Secondary",
      institution: "Alphores Junior College",
      duration: "Completed",
      grade: "82.40%",
    },
    {
      degree: "Secondary Education",
      institution: "Siddartha High School",
      duration: "Completed",
      grade: "92.00%",
    },
  ];

  const certifications = [
    "IBM: Python for Data Science",
    "HP LIFE: AI for Beginners",
    "Web Development – CodSoft",
    "AutoCAD – CITD ESDP, Kakatiya University",
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <h1 className="text-xl font-bold text-gray-900">
                Vamshi Naradasu
              </h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      activeSection === item.id
                        ? "bg-teal-100 text-teal-800"
                        : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100"
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors ${
                    activeSection === item.id
                      ? "bg-teal-100 text-teal-800"
                      : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-gray-50 to-teal-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Hi, I'm <span className="text-teal-600">Vamshi</span>
                </h1>
                <p className="text-xl sm:text-2xl text-gray-600 leading-relaxed">
                  Aspiring Software Engineer passionate about full stack
                  development and embedded systems.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => scrollToSection("projects")}
                  className="px-8 py-4 bg-teal-600 text-white rounded-lg font-medium hover:bg-teal-700 transition-colors shadow-lg hover:shadow-xl"
                >
                  View My Work
                </button>
                <a
                  href="/Vamshi_Naradasu_Resume.pdf"
                  download="Vamshi_Naradasu_Resume.pdf"
                  className="px-8 py-4 border-2 border-teal-600 text-teal-600 rounded-lg font-medium hover:bg-teal-600 hover:text-white transition-colors flex items-center justify-center gap-2"
                >
                  <Download className="w-5 h-5" />
                  Download Resume
                </a>
              </div>
            </div>

            <div className="flex justify-center items-center">
              <div className="relative mt-8">
                <div className="w-80 h-80 bg-gradient-to-r from-teal-400 to-teal-600 rounded-full p-2 flex items-center justify-center">
                  <img
                    src="/pic.png"
                    alt="Vamshi Naradasu"
                    className="w-full h-full object-cover rounded-full border-4 border-white shadow-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-gray-400" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              About Me
            </h2>
            <div className="w-24 h-1 bg-teal-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                I'm a dedicated Electrical and Electronics Engineering student
                with a strong passion for full stack web development and
                embedded systems. My journey combines traditional engineering
                principles with modern software development practices.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                I thrive on building scalable solutions and am eager to join
                innovative tech teams where I can contribute my skills in both
                hardware and software development. My goal is to bridge the gap
                between embedded systems and web technologies.
              </p>

              <div className="flex items-center gap-2 text-teal-600">
                <MapPin className="w-5 h-5" />
                <span className="font-medium">Karimnagar, Telangana</span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  What I Do
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Code className="w-5 h-5 text-teal-600 mt-0.5" />
                    <span className="text-gray-600">
                      Full Stack Web Development
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Wrench className="w-5 h-5 text-teal-600 mt-0.5" />
                    <span className="text-gray-600">
                      Embedded Systems Design
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Database className="w-5 h-5 text-teal-600 mt-0.5" />
                    <span className="text-gray-600">Database Management</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Technical Skills
            </h2>
            <div className="w-24 h-1 bg-teal-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="text-center mb-6">
                <Code className="w-12 h-12 text-teal-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900">
                  Languages
                </h3>
              </div>
              <div className="space-y-3">
                {skills.languages.map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between"
                  >
                    <span className="text-gray-700">{skill}</span>
                    <div className="w-20 h-2 bg-gray-200 rounded-full">
                      <div
                        className="h-full bg-teal-600 rounded-full"
                        style={{ width: `${85 + Math.random() * 15}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="text-center mb-6">
                <Wrench className="w-12 h-12 text-teal-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900">
                  Frameworks & Libraries
                </h3>
              </div>
              <div className="space-y-3">
                {skills.frameworks.map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between"
                  >
                    <span className="text-gray-700">{skill}</span>
                    <div className="w-20 h-2 bg-gray-200 rounded-full">
                      <div
                        className="h-full bg-teal-600 rounded-full"
                        style={{ width: `${80 + Math.random() * 20}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="text-center mb-6">
                <Database className="w-12 h-12 text-teal-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900">
                  Databases & Tools
                </h3>
              </div>
              <div className="space-y-3">
                {skills.databases.map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between"
                  >
                    <span className="text-gray-700">{skill}</span>
                    <div className="w-20 h-2 bg-gray-200 rounded-full">
                      <div
                        className="h-full bg-teal-600 rounded-full"
                        style={{ width: `${75 + Math.random() * 25}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-teal-600 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="aspect-video lg:aspect-square">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">
                        Technologies Used:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-teal-100 text-teal-800 rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Experience
            </h2>
            <div className="w-24 h-1 bg-teal-600 mx-auto"></div>
          </div>

          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center text-teal-600">
                      {exp.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">
                          {exp.title}
                        </h3>
                        <p className="text-teal-600 font-medium">
                          {exp.company}
                        </p>
                      </div>
                      <span className="text-gray-500 text-sm">
                        {exp.duration}
                      </span>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Education
            </h2>
            <div className="w-24 h-1 bg-teal-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <div className="text-center mb-4">
                  <BookOpen className="w-12 h-12 text-teal-600 mx-auto mb-3" />
                  <h3 className="text-lg font-semibold text-gray-900">
                    {edu.degree}
                  </h3>
                </div>
                <div className="space-y-2 text-center">
                  <p className="text-gray-600">{edu.institution}</p>
                  <p className="text-sm text-gray-500">{edu.duration}</p>
                  <p className="text-teal-600 font-medium">
                    Grade: {edu.grade}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Certifications
            </h2>
            <div className="w-24 h-1 bg-teal-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-4">
                  <Award className="w-8 h-8 text-teal-600 flex-shrink-0" />
                  <p className="text-gray-900 font-medium">{cert}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-teal-600 mx-auto"></div>
            <p className="text-gray-600 mt-4">
              Let's discuss opportunities and collaborate on exciting projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <Mail className="w-12 h-12 text-teal-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Email
              </h3>
              <a
                href="mailto:naradasvamshi02@gmail.com"
                className="text-teal-600 hover:text-teal-700"
              >
                naradasvamshi02@gmail.com
              </a>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <Phone className="w-12 h-12 text-teal-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Phone
              </h3>
              <a
                href="tel:+919032892783"
                className="text-teal-600 hover:text-teal-700"
              >
                +91 90328 92783
              </a>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <Github className="w-12 h-12 text-teal-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                GitHub
              </h3>
              <a
                href="https://github.com/vamshi-9032"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 hover:text-teal-700"
              >
                github.com/vamshi-9032
              </a>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <Linkedin className="w-12 h-12 text-teal-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                LinkedIn
              </h3>
              <a
                href="https://linkedin.com/in/chintunaradas"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 hover:text-teal-700"
              >
                linkedin.com/in/chintunaradas
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-xl font-bold mb-4">Vamshi Naradasu</h3>
            <p className="text-gray-400 mb-8">
              Aspiring Software Engineer | Full Stack Developer | Embedded
              Systems Enthusiast
            </p>

            <div className="flex justify-center space-x-6 mb-8">
              <a
                href="mailto:naradasvamshi02@gmail.com"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Mail className="w-6 h-6" />
              </a>
              <a
                href="https://github.com/vamshi-9032"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com/in/chintunaradas"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>

            <div className="border-t border-gray-800 pt-8">
              <p className="text-gray-400 text-sm">
                © 2025 Vamshi Naradasu. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Contact Button */}
      <div className="fixed bottom-6 right-24 z-40">
        <button
          onClick={() => scrollToSection("contact")}
          className="bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white p-4 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 group"
        >
          <Mail className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" />
        </button>
        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-3 py-1 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
          Contact Me
        </div>
      </div>

      {/* AI Chatbot */}
      <Chatbot />
    </div>
  );
}

export default App;
