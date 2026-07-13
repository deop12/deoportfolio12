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
    items: [
      {
        role: "B.Sc. Artificial Intelligence and Machine Learning",
        company: "Sree Saraswati Thyagaraja College",
        period: "Completed",
        location: "Pollachi",
        details: "Built an academic foundation deeply rooted in data analytics, database logic, and advanced computing paradigms."
      },
      {
        role: "Data Science Specialization",
        company: "Luminar Technolab",
        location: "Kochi, Kerala",
        details: "Acquired industry-level training in analytics workflows, machine learning models, and Python-driven intelligence pipelines."
      }
    ]
  },
  {
    id: "experience",
    title: "Experience",
    hasImage: false,
    items: [
      {
        role: "Data Science Manager and Developer",
        company: "Draw My Career",
        period: "Feb 2026 – Present",
        location: "Mangaluru, Karnataka",
        details: [
          "Analyzed career guidance and assessment data to identify student interests, skills, and career preferences, supporting data-driven decision making.",
          "Conducted competitor research, data analysis, and report preparation to generate insights for improving career recommendation strategies and platform effectiveness."
        ]
      },
      {
        role: "Data Science Intern",
        company: "Luminar Technolab",
        period: "2024 – 2025",
        location: "Kochi, Kerala",
        details: [
          "NLP Development: Designed and implemented NLP models for text classification and sentiment analysis on real-world datasets.",
          "Data Analysis: Performed exploratory data analysis to uncover patterns within large datasets, helping teams make data driven decisions."
        ]
      }
    ]
  },
  {
    id: "skills",
    title: "Skills",
    hasImage: false,
    description: "Programming Languages & Libraries: Python (Advanced), Scikit-learn, Pandas, Numpy, TensorFlow, Keras. Core Concepts: Machine Learning, Deep Learning (CNN, RNN), Natural Language Processing (NLP), Linear Regression, Generative AI, Power BI.",
  },
  {
    id: "projects",
    title: "Projects",
    hasImage: false,
    items: [
      {
        role: "Career Guidance Analytics Platform",
        company: "Draw My Career",
        details: "Worked on a data-driven career guidance project focused on helping students make informed career decisions. Collected, cleaned, and analyzed career assessment and user engagement data to identify patterns in interests, skills, and career preferences. Conducted competitor research, data visualization, and insights generation to support career recommendation strategies."
      },
      {
        role: "Real-time Object Detection System",
        company: "Personal Project",
        details: "Designed and implemented a real-time object detection system using Convolutional Neural Networks (CNN) to classify 8 distinct categories of objects (buildings, computer, forest, helmet, mouse, smartphone) from a live webcam feed."
      }
    ]
  },
  {
    id: "contact",
    title: "Contact",
    hasImage: false,
    description: "Always open to conversations regarding innovative data platforms and machine learning roles. Reach me through my official professional channels below.",
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
        
        <div className="hero-btn-wrapper">
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="hero-resume-btn">
            View Resume
          </a>
        </div>
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
                {item.details && (
                  Array.isArray(item.details) ? (
                    <ul className="item-details-list">
                      {item.details.map((detail, dIdx) => (
                        <li key={dIdx}>{detail}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="item-details">{item.details}</p>
                  )
                )}
              </div>
            ))}
          </div>
        )}
        
        {data.id === 'experience' && (
          <div className="experience-reference">
            <h4>Reference</h4>
            <div className="reference-card">
              <p className="ref-name">Naveen Paul</p>
              <p className="ref-title">Co-Founder & C.E.O., Draw My Career</p>
            </div>
          </div>
        )}
        
        {data.id === 'skills' && <SkillsIcons />}
        
        {data.id === 'contact' && (
          <div className="contact-links">
            <a href="mailto:deopaulson12@gmail.com" className="contact-btn"><Mail size={18} /> Email Me</a>
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
