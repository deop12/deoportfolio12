import { motion } from 'framer-motion';
import { ArrowDown, Code2, Database, LineChart, BrainCircuit, Rocket, Layout, Server, Linkedin, Mail, GraduationCap } from 'lucide-react';
import './index.css';

const SECTIONS = [
  {
    id: "about",
    title: "About Me",
    hasImage: true,
    image: "/profile.jpg",
    description: "A dual-expertise professional specializing in both Data Management and Software Development. I am currently focused on enhancing data-driven career assessment platforms, bridging the gap between technical web architecture and deep analytical insights from Thrissur to Mangaluru.",
  },
  {
    id: "education",
    title: "Education",
    hasImage: true,
    image: "/college.jpg",
    description: "Completed my B.Sc. in Artificial Intelligence and Machine Learning at Sree Saraswathi Thyagaraja College (affiliated with Bharathiar University), building a strong academic foundation in data analytics, database logic, and advanced computing paradigms.",
  },
  {
    id: "experience",
    title: "Experience",
    hasImage: false,
    items: [
      {
        role: "Data Manager and Developer",
        company: "Draw My Career",
        period: "Jan 2026 – Present",
        location: "Mangaluru, Karnataka",
        details: "Managing vast arrays of student assessment data while actively developing integrated technical features for specialized career counseling pathways."
      },
      {
        role: "Data Science Intern",
        company: "Luminar Technolab",
        period: "Completed",
        location: "Kochi, Kerala",
        details: "Gained hands-on experience in machine learning pipelines, exploratory data analysis, predictive modeling, and model evaluation techniques."
      }
    ]
  },
  {
    id: "skills",
    title: "Skills",
    hasImage: false,
    description: "Proficient across Data Management (database design, data storytelling, specific analytical processing) and Development (full-stack web integration, React/Vite ecosystems, Python, SQL, and robust business intelligence environments).",
  },
  {
    id: "projects",
    title: "Projects",
    hasImage: false,
    description: "Spearheaded the technical ecosystem for Draw My Career—an expansive digital platform explicitly dedicated to career assessment, psychometric mapping, and intensive student counseling infrastructure.",
  },
  {
    id: "contact",
    title: "Contact",
    hasImage: false,
    description: "Always open to conversations regarding innovative data platforms and dual-stack development roles. Reach me through my official professional channels below.",
  }
];

const SkillsIcons = () => (
  <div className="skills-grid">
    <div className="skill-item"><Rocket size={34} /><span>Antigravity</span></div>
    <div className="skill-item"><Layout size={34} /><span>WordPress</span></div>
    <div className="skill-item"><Database size={34} /><span>Data Science</span></div>
    <div className="skill-item"><BrainCircuit size={34} /><span>Machine Learning</span></div>
    <div className="skill-item"><Code2 size={34} /><span>Frontend</span></div>
    <div className="skill-item"><Server size={34} /><span>Backend</span></div>
  </div>
);

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-overlay" />

      {/* Abstract decorative shapes to elegantly fill white space */}
      <div className="abstract-shape shape-1"></div>
      <div className="abstract-shape shape-2"></div>
      
      <motion.div 
        className="hero-content"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <p className="hero-greeting">Hi, it's me</p>
        <h1 className="hero-name">Deo Paulson</h1>
        <h3 className="hero-job">AND, I'M A DATA MANAGER AND DEVELOPER</h3>
      </motion.div>
    </section>
  );
};

const Section = ({ data }) => {
  return (
    <motion.div 
      id={data.id}
      className={`section-container ${data.hasImage ? '' : 'no-image'}`}
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
    >
      {data.hasImage && (
        <div className="section-image-placeholder">
          {data.image ? (
            <img src={data.image} alt={data.title} className="profile-photo" />
          ) : (
            <GraduationCap size={44} className="placeholder-icon-svg" />
          )}
        </div>
      )}
      <div className="section-text">
        <h2>{data.title}</h2>
        {data.description && <p>{data.description}</p>}
        
        {data.items && (
          <div className="items-list">
            {data.items.map((item, idx) => (
              <div key={idx} className="info-item">
                <div className="info-item-header">
                  <span className="item-title">{item.role}</span>
                  {item.period && <span className="item-period">{item.period}</span>}
                </div>
                <div className="info-item-sub">
                  <span className="item-org">{item.company}</span>
                  {item.location && <span className="item-loc"> • {item.location}</span>}
                </div>
                {item.details && <p className="item-details">{item.details}</p>}
              </div>
            ))}
          </div>
        )}
        
        {data.id === 'skills' && <SkillsIcons />}
        
        {data.id === 'contact' && (
          <div className="contact-links">
            <a href="mailto:#" className="contact-btn"><Mail size={18} /> Email Me</a>
            <a href="https://www.linkedin.com/in/deo-paulson-728091362" target="_blank" rel="noopener noreferrer" className="contact-btn"><Linkedin size={18} /> LinkedIn</a>
          </div>
        )}
      </div>
    </motion.div>
  );
};

const Navigation = () => {
  return (
    <div className="nav-menu">
      <a href="#home">HOME</a>
      <a href="#about">WORK</a>
      <a href="#contact">CONTACT</a>
    </div>
  );
};

function App() {
  return (
    <div className="app-wrapper">
      <div className="film-grain" />
      
      <Hero />

      <div className="content-wrapper">
        {SECTIONS.map((section) => (
          <Section key={section.id} data={section} />
        ))}
      </div>

      <Navigation />
    </div>
  );
}

export default App;
