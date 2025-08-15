import React, { useState, useEffect } from 'react';
import { 
  User, 
  GraduationCap, 
  Code, 
  FolderOpen, 
  Users, 
  Award, 
  FileText,
  Download,
  Menu,
  X,
  ChevronUp,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  ExternalLink,
  Calendar
} from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('about');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
      
      // Update active section based on scroll position
      const sections = ['about', 'education', 'skills', 'projects', 'experience', 'achievements', 'certifications'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const menuItems = [
    { id: 'about', label: 'About Me', icon: User },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'skills', label: 'Skills', icon: Code },
    { id: 'projects', label: 'Projects', icon: FolderOpen },
    { id: 'experience', label: 'Experience', icon: Users },
    { id: 'achievements', label: 'Achievements', icon: Award },
    { id: 'certifications', label: 'Certifications', icon: FileText },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md border-b border-gray-200 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Paritala Laxmi Yashaswi
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-8">
              {menuItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300 ${
                      activeSection === item.id
                        ? 'bg-blue-100 text-blue-700'
                        : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                    }`}
                  >
                    <Icon size={18} />
                    <span className="text-sm font-medium">{item.label}</span>
                  </button>
                );
              })}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="lg:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
              {menuItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full flex items-center space-x-2 px-3 py-3 rounded-lg transition-all duration-300 ${
                      activeSection === item.id
                        ? 'bg-blue-100 text-blue-700'
                        : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                    }`}
                  >
                    <Icon size={18} />
                    <span className="font-medium">{item.label}</span>
                  </button>
                );
              })}
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto text-center">
          <div className="relative inline-block mb-8">
            <div className="w-48 h-48 mx-auto rounded-full p-1 bg-gradient-to-br from-blue-500 to-purple-600 shadow-2xl hover:scale-105 transform transition-all duration-300">
  <img
    src="/Profile.jpg" // Replace with your image path
    alt="Profile"
    className="w-full h-full rounded-full object-cover"
  />
</div>

          </div>
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            PARITALA LAXMI YASHASWI
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
             Computer Science Engineering | Full-Stack Developer | Tech Enthusiast
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <div className="flex items-center gap-2 text-gray-600">
              <Mail size={16} />
              <span>yashaswiparitala219@gamil.com</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Phone size={16} />
              <span>+91-6303921761</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <MapPin size={16} />
              <span>hyderabad, Telangana</span>
            </div>
          </div>
          <div className="flex gap-4 justify-center mb-8">
                       <a 
            href="https://github.com/YashaswiParitala"
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-colors"
          >
            <Github size={20} />
          </a>

          <a 
            href="https://www.linkedin.com/in/laxmi-yashaswi-paritala-9a721a293/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
          >
            <Linkedin size={20} />
          </a>

          </div>
         <a
            href="/yashaswi_resume.pdf"
            download
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            <Download size={20} />
            Download Resume
          </a>
        </div>
      </section>

      {/* About Me */}
      <section id="about" className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              I'm a passionate B.Tech Computer Science Engineering student with a strong foundation in software development 
              and a keen interest in emerging technologies. Currently in my final year, I have hands-on experience in 
              full-stack development and artificial intelligence.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              My journey in technology started with curiosity about how software works, and has evolved into a passion 
              for creating innovative solutions that make a real impact. I enjoy working on challenging projects that 
              push me to learn new technologies and improve my problem-solving skills.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              When I'm not coding, you can find participating in hackathons,or exploring the latest trends in technology. 
              I'm always excited to collaborate on interesting projects and learn from fellow developers.
            </p>
          </div>
        </div>
      </section>

    
      {/* Education */}
      <section id="education" className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12">Education</h2>
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-3 rounded-lg">
                <GraduationCap className="text-blue-600" size={24} />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  Bachelor of Technology in Computer Science Engineering
                </h3>
                <p className="text-lg text-blue-600 font-semibold mb-2"> GEETHANJALI COLLEGE OF ENGINEERING AND TECHNOLOGY</p>
                <div className="flex items-center gap-4 text-gray-600 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar size={16} />
                    <span>2022 2026</span>
                  </div>
                  <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    CGPA: 8.69/10
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Relevant Coursework: Data Structures & Algorithms, Database Management Systems, 
                  Software Engineering, Computer Networks, Operating Systems, Machine Learning, 
                  Web Development, cloud Computing .
                </p>
              </div>
            </div>
          </div>
          <br />
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-3 rounded-lg">
                <GraduationCap className="text-blue-600" size={24} />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  Intermediate Education
                </h3>
                <p className="text-lg text-blue-600 font-semibold mb-2"> NARAYANA JUNIOR COLLEGE</p>
                <div className="flex items-center gap-4 text-gray-600 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar size={16} />
                    <span>2020 2022</span>
                  </div>
                  <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    Percentage: 95.5%
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Relevant Coursework: Physics, Chemistry, Mathematics .
                </p>
              </div>
            </div>
          </div>
          <br />
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-3 rounded-lg">
                <GraduationCap className="text-blue-600" size={24} />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  Secondary Education
                </h3>
                <p className="text-lg text-blue-600 font-semibold mb-2"> SRI CHAITANYA SCHOOL</p>
                <div className="flex items-center gap-4 text-gray-600 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar size={16} />
                    <span>2019 2020</span>
                  </div>
                  <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    CGPA: 10/10
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Relevant Coursework: Mathematics, Science,Biology , Social Studies, English, Hindi,Telugu.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Skills */}
      <section id="skills" className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12">Technical Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                category: 'Programming Languages',
                skills: ['Java', 'Python', 'C++', 'JavaScript',  'C'],
                color: 'blue'
              },
              {
                category: 'Web Technologies',
                skills: ['HTML5', 'CSS3', 'React.js', 'Node.js'],
                color: 'blue'
              },
              {
                category: 'Database',
                skills: ['MySQL', 'MongoDB'],
                color: 'blue'
              },
              {
                category: 'Tools & Technologies',
                skills: ['Git', 'AWS','chatgpt', 'VS Code'],
                color: 'blue'
              },
              {
                category: 'Data Science & AI',
                skills: ['TensorFlow', 'Pandas', 'NumPy', 'Scikit-learn', 'Matplotlib'],
                color: 'blue'
              }

            ].map((skillGroup, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <h3 className={`text-xl font-bold mb-4 text-${skillGroup.color}-600`}>
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className={`bg-${skillGroup.color}-100 text-${skillGroup.color}-800 px-3 py-1 rounded-full text-sm font-medium hover:bg-${skillGroup.color}-200 transition-colors cursor-default`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'NexaShield Scanner – Web Vulnerability Detection Tool',
                description: 'URL-Based Scanning,Real-Time Detection and Reporting,User-Friendly Interface .',
                technologies: ['HTML5', 'css3', 'MongoDB', 'Fast API', 'Python', 'JavaScript'],
                year: '2025',
                color: 'blue'
              },
              {
                title: 'Portfolio Website',
                description: 'Personal portfolio website showcasing projects, skills, and achievements with responsive design.',
                technologies: ['HTML5', 'CSS3', 'JavaScript', 'Tailwind CSS','React.js'],
                year: '2025',
                color: 'blue'
              },
              {
                title: 'Heart Disease Prediction System',
                description: 'Machine learning model to predict heart disease risk using patient data with algorithm optimization.',
                technologies: ['Python', 'Scikit-learn', 'Pandas', 'NumPy'],
                year: '2024',
                color: 'blue'
              },
              {
                title: 'Medicine recommendation System',
                description: 'AI-powered system to recommend medicines based on symptoms and medical history with user-friendly interface.',
                technologies: ['Python', 'machine learning', 'HTML5', 'CSS3', 'JavaScript'],
                year: '2023',
                color: 'blue'
              }

            ].map((project, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <div className={`bg-${project.color}-100 text-${project.color}-800 px-3 py-1 rounded-full text-sm font-medium inline-block mb-4`}>
                  {project.year}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <button className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold transition-colors">
                  <ExternalLink size={16} />
                  View Project
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12">Role & Responsibilities</h2>
          <div className="space-y-8">
            {[
              {
                title: 'Web and social media coordinator',
                company: 'College coding Club',
                period: 'september 2024 - Present',
                responsibilities: [
                  'maintain and update club website with latest events and resources',
                  'manage social media accounts to promote club activities and engage members',
                  'create and schedule content for social media platforms',
                  'collaborate with club members to gather content and feedback',
                  'analyze social media metrics to improve engagement and reach'
                ]
              },
               {
                title: 'IEEE Student Member',
                company: 'College IEEE Club',
                period: 'November 2024 - Present',
                responsibilities: [
                  'Participate in IEEE events and workshops to enhance technical knowledge',
                  'Collaborate with peers on projects and initiatives related to electrical and electronics engineering',
                  'Contribute to the organization of technical seminars and guest lectures',
                  'Engage in networking opportunities with industry professionals and fellow students'
                ]
              }

            ].map((experience, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Users className="text-blue-600" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{experience.title}</h3>
                    <p className="text-lg text-blue-600 font-semibold mb-2">{experience.company}</p>
                    <p className="text-gray-600 mb-4">{experience.period}</p>
                    <ul className="space-y-2">
                      {experience.responsibilities.map((responsibility, respIndex) => (
                        <li key={respIndex} className="flex items-start gap-2 text-gray-700">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section id="achievements" className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12">Achievements</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
               {
                title: '1287 Place - iternational Level Programming Contest 2024',
                description: 'Secured 1287 position among 19,000+ participants in algorithmic programming competition',
                icon: '🏅',
                color: 'blue'
              },
              {
                title: 'top 15 performer - Smart Interviews 2024-2025 batch',
                description: 'Recognized as one of the top 15 performers in Smart Interviews batch for exceptional coding skills',
                icon: '💻',
                color: 'blue'
              },
              {
                title: ' Academic Excellence',
                description: 'Consistently maintained  academic performance with 8.69 CGPA',
                icon: '🎓',
                color: 'blue'
              },
               {
                title: 'Participant -  Geenovate College Hackathon 2025',
                description: 'Participated in college hackathon, developed innovative solution for disabled individuals',
                icon: '🏆',
                color: 'blue'
              }

            ].map((achievement, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                <div className="text-4xl mb-4">{achievement.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{achievement.title}</h3>
                <p className="text-gray-600 leading-relaxed">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section id="certifications" className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12">Certifications</h2>
          <div className="space-y-6">
            {[
              {
                title: 'certificate of completion - Data Structures and Algorithms',
                issuer: 'Smart Interviews',
                year: '2025',
                color: 'blue'
              },
              {
                title: 'certificate of participation - IEEEXtreme 2024',
                issuer: 'IEEE',
                year: '2024',
                color: 'blue'
              },
              {
                title: 'Certificate of proternship - AIML',
                issuer: 'Cantiliver',
                year: '2023',
                color: 'blue'
              },
              {
                title: 'Certifcate of participation - Geeovate College Hackathon 2025',
                issuer: 'Geethanjali College of Engineering and Technology',
                year: '2025',
                color: 'green'
              }

            ].map((cert, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start gap-4">
                  <div className={`bg-${cert.color}-100 p-3 rounded-lg`}>
                    <FileText className={`text-${cert.color}-600`} size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{cert.title}</h3>
                    <p className="text-lg text-blue-600 font-semibold mb-1">{cert.issuer}</p>
                    <p className="text-gray-600 mb-2">Issued: {cert.year}</p>
                  </div>
                  <button className="text-blue-600 hover:text-blue-800 transition-colors">
                    <ExternalLink size={20} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h3 className="text-2xl font-bold mb-4">Let's Connect!</h3>
          <p className="text-gray-300 mb-8">
            I'm always interested in new opportunities and collaborations. 
            Feel free to reach out if you'd like to discuss projects, share ideas, or just connect!
          </p>
          <div className="flex justify-center gap-6 mb-8">
            <button className="p-3 bg-gray-700 rounded-full hover:bg-gray-600 transition-colors">
              <Mail size={20} />
            </button>
            <button className="p-3 bg-gray-700 rounded-full hover:bg-gray-600 transition-colors">
              <Phone size={20} />
            </button>
            <button className="p-3 bg-gray-700 rounded-full hover:bg-gray-600 transition-colors">
              <Github size={20} />
            </button>
            <button className="p-3 bg-gray-700 rounded-full hover:bg-gray-600 transition-colors">
              <Linkedin size={20} />
            </button>
          </div>
           <a
            href="/yashaswi_resume.pdf"
            download
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            <Download size={20} />
            Download Resume
          </a>
          <p className="text-gray-400 text-sm">
            © 2025 laxmi yashaswi. Made with ❤️ using React & Tailwind CSS
          </p>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transform hover:scale-110 transition-all duration-300 z-40"
        >
          <ChevronUp size={20} />
        </button>
      )}
    </div>
  );
}

export default App;