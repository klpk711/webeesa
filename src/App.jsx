import React, { useState, useEffect, useRef } from 'react';
import eesaLogo from './assets/eesa_logo.png';
import inaugurationVideo from './assets/inauguration_video.mp4';
import * as THREE from 'three'; // <-- ADD THIS AT THE TOP

// Import Lucide React icons for a clean, modern look.
import { BookMarked, Users, Mic, Building, Lightbulb, Compass, Volume2, VolumeX, CheckSquare, Layers, Handshake, TrendingUp, Cpu, Network, ChevronUp, Mail, ExternalLink, Github, Instagram, Facebook } from 'lucide-react';

// This CSS is embedded in the component for single-file deployment.
const css = `
.liquid-ether-container {
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 100%;
    touch-action: none;
}
`;

// This is the main component of our application
export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark', !isDarkMode);
  };

  // The main layout with dark mode class applied
  return (
    <div className={`min-h-screen font-sans ${isDarkMode ? 'dark bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <style>{css}</style>
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
      <HeroSection isDarkMode={isDarkMode} />
      <OurVisionSection />
      <OurMissionSection />
      <WhatWeOfferSection />
      <FinalConnectionSection />
      <JoinUsSection />
      <MentorsSection />
      <ContactSection />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

// Navbar Component
const Navbar = ({ isMenuOpen, setIsMenuOpen, toggleDarkMode, isDarkMode }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 p-4 transition-colors duration-300 backdrop-filter backdrop-blur-lg bg-white/30 dark:bg-gray-800/30">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo and site name */}
        <div className="text-2xl font-bold">
          <span className="text-orange-500">EESA</span>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-6 lg:space-x-8 text-sm lg:text-base font-semibold">
          <a href="#home" className="hover:text-orange-500 transition-colors duration-200">Home</a>
          <a href="#about-us" className="hover:text-orange-500 transition-colors duration-200">About Us</a>
          <a href="#join-us" className="hover:text-orange-500 transition-colors duration-200">Join Us</a>
          <a href="#" className="hover:text-orange-500 transition-colors duration-200">Activities</a>
          <a href="#" className="hover:text-orange-500 transition-colors duration-200">Our Team</a>
          <a href="#contact" className="hover:text-orange-500 transition-colors duration-200">Contact</a>
        </div>

        {/* Desktop Auth Buttons & Dark Mode Toggle */}
        <div className="hidden md:flex items-center space-x-4">
          <a href="#" className="text-sm lg:text-base font-semibold px-4 py-2 rounded-lg border-2 border-gray-400 dark:border-gray-500 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300">
            Sign In
          </a>
          <a href="#" className="text-sm lg:text-base font-semibold px-6 py-2 rounded-lg bg-orange-500 text-white hover:bg-orange-600 transition-colors duration-300">
            Sign Up
          </a>
          <button onClick={toggleDarkMode} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200">
            {isDarkMode ? (
              // Moon SVG for dark mode
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-moon">
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>
              </svg>
            ) : (
              // Sun SVG for light mode
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sun">
                <circle cx="12" cy="12" r="4"/>
                <path d="M12 2v2"/>
                <path d="M12 20v2"/>
                <path d="M4.93 4.93l1.41 1.41"/>
                <path d="M17.66 17.66l1.41 1.41"/>
                <path d="M2 12h2"/>
                <path d="M20 12h2"/>
                <path d="M4.93 19.07l1.41-1.41"/>
                <path d="M17.66 6.34l1.41-1.41"/>
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center space-x-2">
          <button onClick={toggleDarkMode} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200">
            {isDarkMode ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-moon">
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sun">
                <circle cx="12" cy="12" r="4"/>
                <path d="M12 2v2"/>
                <path d="M12 20v2"/>
                <path d="M4.93 4.93l1.41 1.41"/>
                <path d="M17.66 17.66l1.41 1.41"/>
                <path d="M2 12h2"/>
                <path d="M20 12h2"/>
                <path d="M4.93 19.07l1.41-1.41"/>
                <path d="M17.66 6.34l1.41-1.41"/>
              </svg>
            )}
          </button>
          {/* FIXED: Added theme-aware text color */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-900 dark:text-white focus:outline-none">
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`md:hidden ${isMenuOpen ? 'flex' : 'hidden'} flex-col items-center mt-4 space-y-4`}>
        <a href="#home" className="py-2 hover:text-orange-500 transition-colors duration-200">Home</a>
        <a href="#about-us" className="py-2 hover:text-orange-500 transition-colors duration-200">About Us</a>
        <a href="#join-us" className="py-2 hover:text-orange-500 transition-colors duration-200">Join Us</a>
        <a href="#" className="py-2 hover:text-orange-500 transition-colors duration-200">Activities</a>
        <a href="#" className="py-2 hover:text-orange-500 transition-colors duration-200">Our Team</a>
        <a href="#contact" className="py-2 hover:text-orange-500 transition-colors duration-200">Contact</a>
        <div className="flex flex-col items-center space-y-2 pt-4 w-full">
          <a href="#" className="w-full text-center py-2 px-4 rounded-lg border-2 border-gray-400 dark:border-gray-500 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300">
            Sign In
          </a>
          <a href="#" className="w-full text-center py-2 px-4 rounded-lg bg-orange-500 text-white hover:bg-orange-600 transition-colors duration-300">
            Sign Up
          </a>
        </div>
      </div>
    </nav>
  );
};

// Hero Section with a Fluid background
const HeroSection = ({ isDarkMode }) => {
  return (
    <div id="home" className="relative flex flex-col items-center justify-center text-center w-full min-h-screen px-4">
      {/* LiquidEther background component */}
      <div className="absolute inset-0 z-0">
        <LiquidEther
          colors={['#5227FF', '#FF9FFC', '#B19EEF']}
          mouseForce={20}
          cursorSize={100}
          isViscous={false}
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo={true}
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
        />
      </div>

      {/* Main content layer */}
      <div className="relative z-10 p-8 rounded-lg">
        <div className="mb-8">
          {/* Use a placeholder for the user's logo until a URL is provided */}
          <img
            src={eesaLogo}
            alt="EESA Logo"
            className="w-48 h-auto mx-auto"
          />
        </div>
        
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight tracking-tight">
          Innovate. Create. Build.
        </h1>
        <p className="mt-4 text-base sm:text-lg lg:text-xl font-light max-w-2xl mx-auto">
          Building the Future, One Innovation at a Time.
        </p>
      </div>
    </div>
  );
};

const OurVisionSection = () => {
    return (
        <section id="about-us" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white mb-6">
                    Our Vision
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                    To foster a community of innovative, skilled, and industry-ready electronics engineers by nurturing technical excellence, leadership qualities, and a spirit of lifelong learning, contributing meaningfully to society and advancing the field of electronics and allied domains.
                </p>
            </div>
        </section>
    );
};

const OurMissionSection = () => {
    return (
        <section id="our-mission" className="py-20 bg-gray-100 dark:bg-gray-800 transition-colors duration-300">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white mb-6">
                    Our Mission
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                    To empower students with the knowledge and practical skills required to excel in the electronics industry. We achieve this by organizing workshops on cutting-edge technologies, fostering collaborative projects, and providing a platform for members to present their work, thereby preparing them for professional challenges and promoting innovation.
                </p>
            </div>
        </section>
    );
};

const WhatWeOfferSection = () => {
    // Icons are now passed as components, not JSX
    const services = [
        {
            icon: BookMarked,
            title: "Practical Learning Beyond Academics",
            description: "We bridge the gap between theory and practice, giving students real-world insights into electronics that go far beyond classroom learning."
        },
        {
            icon: Lightbulb,
            title: "Hands-On Workshops",
            description: "Participate in engaging workshops where you can apply your knowledge, learn industry-standard tools, and build tangible skills for your career."
        },
        {
            icon: Mic,
            title: "Industry Expert Talks",
            description: "Learn from the best in the field. We regularly organize talks by experienced professionals to share their knowledge and industry trends."
        },
        {
            icon: Compass,
            title: "Exclusive Site Visits",
            description: "Get on-ground experience by visiting major electronics manufacturing and R&D sites, seeing engineering in action."
        },
        {
            icon: Building,
            title: "Skill Development & Innovation",
            description: "Our activities are designed to nurture your talent, foster a spirit of innovation, and prepare you for a successful career in electronics."
        },
        {
            icon: Users,
            title: "A Community of Engineers",
            description: "Join a passionate community of fellow electronics engineering students. Share ideas, collaborate on exciting projects, and grow together."
        }
    ];

    return (
        <section id="what-we-offer" className="py-20 bg-gray-100 dark:bg-gray-800 transition-colors duration-300">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white mb-6">
                    What We Offer
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
                    At EESA, we provide a holistic learning experience that extends beyond the curriculum. Our initiatives are designed to help you thrive in the dynamic world of electronics.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => {
                        const Icon = service.icon; // Get the component itself
                        return (
                            <div key={index} className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
                                <div className="flex justify-center mb-4">
                                    <Icon size={48} className="text-orange-500" />
                                </div>
                                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                                <p className="text-gray-600 dark:text-gray-400">{service.description}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

const FinalConnectionSection = () => {
    const [isMuted, setIsMuted] = useState(true);
    const videoRef = useRef(null);

    const toggleMute = () => {
        if (videoRef.current) {
            videoRef.current.muted = !isMuted;
            setIsMuted(!isMuted);
        }
    };

    return (
        <section id="activities" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white mb-6">
                    The Final Connection
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
                    The blueprint is complete, the circuits are live, and the future is now. Our club's inauguration is the final connection in a project built on passion and purpose. Watch the highlights below.
                </p>
                <div className="relative w-full max-w-4xl mx-auto aspect-video rounded-xl overflow-hidden shadow-2xl">
                    <video
                        ref={videoRef}
                        src={inaugurationVideo}
                        className="w-full h-full object-cover"
                        loop
                        autoPlay
                        playsInline
                        muted={isMuted}
                    />
                    <button
                        onClick={toggleMute}
                        className="absolute bottom-4 right-4 p-2 bg-black bg-opacity-50 text-white rounded-full transition-opacity duration-300 hover:opacity-100 opacity-75"
                    >
                        {isMuted ? (
                            <VolumeX size={24} />
                        ) : (
                            <Volume2 size={24} />
                        )}
                    </button>
                </div>
            </div>
        </section>
    );
};

// Join Us Section
const JoinUsSection = () => {
    // FIXED: The icons defined here will now be used in the render logic.
    const benefits = [
        { name: "Project-Based Learning", icon: <Layers size={20} /> },
        { name: "Collaborative Environment", icon: <Handshake size={20} /> },
        { name: "Industry Connections", icon: <TrendingUp size={20} /> },
        { name: "Career Advancement", icon: <TrendingUp size={20} /> },
        { name: "Technical Skill Development", icon: <Cpu size={20} /> },
        { name: "ENTC OFFICIAL CLUB EESA", icon: <Network size={20} /> },
    ];

    return (
        <section id="join-us" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                    {/* Left Column: Title and Benefits */}
                    <div className="text-gray-900 dark:text-white">
                        <h2 className="text-4xl sm:text-5xl font-extrabold mb-8">
                            Why Join EESA?
                        </h2>
                        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                            We are more than just a club; we are a community dedicated to exploring the vast potential of **electronics and telecommunication engineering**. Our goal is to provide a platform for students to innovate, learn practical skills, and connect with the industry.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {benefits.map((benefit, index) => (
                                // FIXED: Now renders the icon from the `benefits` array.
                                <div key={index} className="flex items-center space-x-3 text-gray-800 dark:text-gray-200">
                                    <div className="text-orange-500 flex-shrink-0">{benefit.icon}</div>
                                    <span>{benefit.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Registration Form */}
                    <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-xl shadow-lg">
                        <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
                            Become a Member
                        </h3>
                        <form className="space-y-6">
                            <div>
                                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Full Name</label>
                                <input
                                    type="text"
                                    id="fullName"
                                    placeholder="Enter your full name"
                                    className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm focus:border-orange-500 focus:ring-orange-500"
                                />
                            </div>
                            <div>
                                <label htmlFor="rollNumber" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Roll Number</label>
                                <input
                                    type="text"
                                    id="rollNumber"
                                    placeholder="e.g., B22001"
                                    className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm focus:border-orange-500 focus:ring-orange-500"
                                />
                            </div>
                            <div>
                                <label htmlFor="studentEmail" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Student Email ID</label>
                                <input
                                    type="email"
                                    id="studentEmail"
                                    placeholder="your_id@yourcollege.ac.in"
                                    className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm focus:border-orange-500 focus:ring-orange-500"
                                />
                            </div>
                            <div>
                                <label htmlFor="position" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Position you want to apply for</label>
                                <select
                                    id="position"
                                    className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-400 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                                >
                                    <option>Select your desired position</option>
                                    <option>Core Member</option>
                                    <option>Senior Advisor</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Relevant Skills for ENTC</label>
                                <div className="flex flex-wrap gap-2">
                                    <span className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs px-2.5 py-1 rounded-full font-medium">Circuit Design</span>
                                    <span className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs px-2.5 py-1 rounded-full font-medium">Embedded Systems</span>
                                    <span className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs px-2.5 py-1 rounded-full font-medium">PCB Design</span>
                                    <span className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs px-2.5 py-1 rounded-full font-medium">VHDL/Verilog</span>
                                    <span className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs px-2.5 py-1 rounded-full font-medium">Team Collaboration</span>
                                    <span className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs px-2.5 py-1 rounded-full font-medium">RF & Microwave</span>
                                    <span className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs px-2.5 py-1 rounded-full font-medium">Signal Processing</span>
                                </div>
                            </div>
                            <div>
                                <label htmlFor="whyJoin" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Why do you want to join EESA?</label>
                                <textarea
                                    id="whyJoin"
                                    rows="4"
                                    className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm focus:border-orange-500 focus:ring-orange-500"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                            >
                                Submit Application
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

const MentorsSection = () => {
    // Placeholder data for mentors based on the request
    const mentors = [
        { name: "Dr. S.V. Pattalwar", quote: "Dedicated to shaping the next generation of engineers with a focus on practical application and innovative thinking." },
        { name: "Dr. A.I. Rokade", quote: "A leader in fostering a collaborative environment, driving excellence and pushing the boundaries of technology." },
        { name: "Prof. A.B. Pardikar", quote: "Committed to guiding students through technical challenges, ensuring they build skills for a successful career." }
    ];

    return (
        <section id="our-team" className="py-20 bg-gray-100 dark:bg-gray-800 transition-colors duration-300">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white mb-6">
                    Our Mentors
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
                    Our team is guided by experienced faculty members who provide invaluable knowledge and support to every member.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {mentors.map((mentor, index) => (
                        <div key={index} className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
                            {/* Star ratings */}
                            <div className="flex justify-center text-yellow-500 mb-4">
                                <span className="text-2xl">★★★★★</span>
                            </div>
                            {/* Mentor quote */}
                            <p className="text-gray-600 dark:text-gray-400 italic mb-4">
                                "{mentor.quote}"
                            </p>
                            {/* Mentor name */}
                            <div className="flex flex-col items-center">
                                {/* Placeholder for profile image */}
                                <div className="w-16 h-16 rounded-full bg-gray-300 dark:bg-gray-700 mb-2"></div>
                                <h4 className="font-semibold text-lg">{mentor.name}</h4>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Left Column: Contact Form */}
                <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-xl shadow-lg">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Get in Touch with Us</h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">Have a question or a project idea? We would love to hear from you. Fill out the form below and we will get back to you.</p>
                    <form className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="contact-name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Your Name</label>
                                <input
                                    type="text"
                                    id="contact-name"
                                    placeholder="Enter your name"
                                    className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm focus:border-orange-500 focus:ring-orange-500"
                                />
                            </div>
                            <div>
                                <label htmlFor="contact-email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Your Email</label>
                                <input
                                    type="email"
                                    id="contact-email"
                                    placeholder="Enter your email"
                                    className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm focus:border-orange-500 focus:ring-orange-500"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="contact-message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Your Message</label>
                            <textarea
                                id="contact-message"
                                rows="4"
                                placeholder="Enter your Message"
                                className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm focus:border-orange-500 focus:ring-orange-500"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
                
                {/* Right Column: Newsletter */}
                <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-xl shadow-lg relative">
                    <div className="relative z-10">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Stay Updated with EESA</h2>
                        <p className="text-gray-600 dark:text-gray-400 mb-6">Join our newsletter to get the latest news about our projects, workshops, and events directly in your inbox.</p>
                        <form className="space-y-4">
                            <div>
                                <label htmlFor="newsletter-name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Your Name</label>
                                <input
                                    type="text"
                                    id="newsletter-name"
                                    placeholder="Enter your name"
                                    className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm focus:border-orange-500 focus:ring-orange-500"
                                />
                            </div>
                            <div>
                                <label htmlFor="newsletter-email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Your Email</label>
                                <input
                                    type="email"
                                    id="newsletter-email"
                                    placeholder="Enter your email"
                                    className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm focus:border-orange-500 focus:ring-orange-500"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                            >
                                Subscribe
                            </button>
                        </form>
                        <p className="mt-4 text-xs text-gray-500 dark:text-gray-400">
                            No spam guaranteed. So please don't send any spam mail.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

const Footer = () => {
    return (
        <footer className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 py-12 transition-colors duration-300">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-8">
                    {/* Brand and Socials */}
                    <div className="md:col-span-2 lg:col-span-2">
                        <div className="flex items-center space-x-2 mb-4">
                            <img
                                src={eesaLogo}
                                alt="EESA Logo"
                                className="w-12 h-auto"
                            />
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">EESA</h3>
                        </div>
                        <p className="mb-4">
                            ENTC Official Club EESA. Empowering students through technology, creativity, and collaborative learning.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-orange-500 transition-colors duration-200" aria-label="Facebook">
                                <Facebook size={24} />
                            </a>
                            <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-orange-500 transition-colors duration-200" aria-label="Instagram">
                                <Instagram size={24} />
                            </a>
                            <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-orange-500 transition-colors duration-200" aria-label="GitHub">
                                <Github size={24} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><a href="#about-us" className="hover:text-orange-500 transition-colors duration-200">About</a></li>
                            <li><a href="#" className="hover:text-orange-500 transition-colors duration-200">Projects</a></li>
                            <li><a href="#" className="hover:text-orange-500 transition-colors duration-200">Events</a></li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Resources</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-orange-500 transition-colors duration-200">Wiki</a></li>
                            <li><a href="#" className="hover:text-orange-500 transition-colors duration-200">GitHub</a></li>
                            <li><a href="#" className="hover:text-orange-500 transition-colors duration-200">Tutorials</a></li>
                        </ul>
                    </div>

                    {/* Contact Us */}
                    <div>
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Contact Us</h4>
                        <ul className="space-y-2">
                            <li className="flex items-center space-x-2">
                                <Mail size={16} />
                                <a href="mailto:info@eesa.com" className="hover:text-orange-500 transition-colors duration-200">Email Us</a>
                            </li>
                            <li className="flex items-center space-x-2">
                                {/* Use an external link icon for WhatsApp to indicate it opens a new tab */}
                                <ExternalLink size={16} />
                                <a href="https://wa.me/" className="hover:text-orange-500 transition-colors duration-200">WhatsApp</a>
                            </li>
                            <li className="flex items-center space-x-2">
                                <a href="#contact" className="hover:text-orange-500 transition-colors duration-200">Contact Form</a>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* FIXED: Copyright year is now dynamic */}
                <div className="text-center text-sm mt-12 pt-8 border-t border-gray-300 dark:border-gray-700">
                    © {new Date().getFullYear()} EESA. All rights reserved.
                </div>
            </div>
        </footer>
    );
};


const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when page is scrolled down
    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Set up a scroll event listener
    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);

        // Clean up the event listener on component unmount
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <button
            className={`fixed bottom-8 right-8 p-3 rounded-full bg-orange-500 text-white shadow-lg transition-opacity duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500
                ${isVisible ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
            onClick={scrollToTop}
            aria-label="Scroll to top"
        >
            <ChevronUp size={24} />
        </button>
    );
};

// LiquidEther Component - This entire section handles the fluid simulation
function LiquidEther({
  mouseForce = 20,
  cursorSize = 100,
  isViscous = false,
  viscous = 30,
  iterationsViscous = 32,
  iterationsPoisson = 32,
  dt = 0.014,
  BFECC = true,
  resolution = 0.5,
  isBounce = false,
  colors = ['#5227FF', '#FF9FFC', '#B19EEF'],
  style = {},
  className = '',
  autoDemo = true,
  autoSpeed = 0.5,
  autoIntensity = 2.2,
  takeoverDuration = 0.25,
  autoResumeDelay = 3000,
  autoRampDuration = 0.6
}) {
  const mountRef = useRef(null);
  const webglRef = useRef(null);
  const resizeObserverRef = useRef(null);
  const rafRef = useRef(null);
  const intersectionObserverRef = useRef(null);
  const isVisibleRef = useRef(true);
  const resizeRafRef = useRef(null);

  useEffect(() => {
    if (!mountRef.current) return;

    function makePaletteTexture(stops) {
      let arr;
      if (Array.isArray(stops) && stops.length > 0) {
        if (stops.length === 1) {
          arr = [stops[0], stops[0]];
        } else {
          arr = stops;
        }
      } else {
        arr = ['#ffffff', '#ffffff'];
      }
      const w = arr.length;
      const data = new Uint8Array(w * 4);
      for (let i = 0; i < w; i++) {
        const c = new THREE.Color(arr[i]);
        data[i * 4 + 0] = Math.round(c.r * 255);
        data[i * 4 + 1] = Math.round(c.g * 255);
        data[i * 4 + 2] = Math.round(c.b * 255);
        data[i * 4 + 3] = 255;
      }
      const tex = new THREE.DataTexture(data, w, 1, THREE.RGBAFormat);
      tex.magFilter = THREE.LinearFilter;
      tex.minFilter = THREE.LinearFilter;
      tex.wrapS = THREE.ClampToEdgeWrapping;
      tex.wrapT = THREE.ClampToEdgeWrapping;
      tex.generateMipmaps = false;
      tex.needsUpdate = true;
      return tex;
    }

    const paletteTex = makePaletteTexture(colors);
    const bgVec4 = new THREE.Vector4(0, 0, 0, 0); // always transparent

    class CommonClass {
      constructor() {
        this.width = 0;
        this.height = 0;
        this.aspect = 1;
        this.pixelRatio = 1;
        this.isMobile = false;
        this.breakpoint = 768;
        this.fboWidth = null;
        this.fboHeight = null;
        this.time = 0;
        this.delta = 0;
        this.container = null;
        this.renderer = null;
        this.clock = null;
      }
      init(container) {
        this.container = container;
        this.pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
        this.resize();
        this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        this.renderer.autoClear = false;
        this.renderer.setClearColor(new THREE.Color(0x000000), 0);
        this.renderer.setPixelRatio(this.pixelRatio);
        this.renderer.setSize(this.width, this.height);
        this.renderer.domElement.style.width = '100%';
        this.renderer.domElement.style.height = '100%';
        this.renderer.domElement.style.display = 'block';
        this.clock = new THREE.Clock();
        this.clock.start();
      }
      resize() {
        if (!this.container) return;
        const rect = this.container.getBoundingClientRect();
        this.width = Math.max(1, Math.floor(rect.width));
        this.height = Math.max(1, Math.floor(rect.height));
        this.aspect = this.width / this.height;
        if (this.renderer) this.renderer.setSize(this.width, this.height, false);
      }
      update() {
        this.delta = this.clock.getDelta();
        this.time += this.delta;
      }
    }
    const Common = new CommonClass();

    class MouseClass {
      constructor() {
        this.mouseMoved = false;
        this.coords = new THREE.Vector2();
        this.coords_old = new THREE.Vector2();
        this.diff = new THREE.Vector2();
        this.timer = null;
        this.container = null;
        this._onMouseMove = this.onDocumentMouseMove.bind(this);
        this._onTouchStart = this.onDocumentTouchStart.bind(this);
        this._onTouchMove = this.onDocumentTouchMove.bind(this);
        this._onMouseEnter = this.onMouseEnter.bind(this);
        this._onMouseLeave = this.onMouseLeave.bind(this);
        this._onTouchEnd = this.onTouchEnd.bind(this);
        this.isHoverInside = false;
        this.hasUserControl = false;
        this.isAutoActive = false;
        this.autoIntensity = 2.0;
        this.takeoverActive = false;
        this.takeoverStartTime = 0;
        this.takeoverDuration = 0.25;
        this.takeoverFrom = new THREE.Vector2();
        this.takeoverTo = new THREE.Vector2();
        this.onInteract = null;
      }
      init(container) {
        this.container = container;
        container.addEventListener('mousemove', this._onMouseMove, false);
        container.addEventListener('touchstart', this._onTouchStart, false);
        container.addEventListener('touchmove', this._onTouchMove, false);
        container.addEventListener('mouseenter', this._onMouseEnter, false);
        container.addEventListener('mouseleave', this._onMouseLeave, false);
        container.addEventListener('touchend', this.onTouchEnd.bind(this), false);
      }
      dispose() {
        if (!this.container) return;
        this.container.removeEventListener('mousemove', this._onMouseMove, false);
        this.container.removeEventListener('touchstart', this._onTouchStart, false);
        this.container.removeEventListener('touchmove', this._onTouchMove, false);
        this.container.removeEventListener('mouseenter', this._onMouseEnter, false);
        this.container.removeEventListener('mouseleave', this._onMouseLeave, false);
        this.container.removeEventListener('touchend', this._onTouchEnd, false);
      }
      setCoords(x, y) {
        if (!this.container) return;
        if (this.timer) clearTimeout(this.timer);
        const rect = this.container.getBoundingClientRect();
        const nx = (x - rect.left) / rect.width;
        const ny = (y - rect.top) / rect.height;
        this.coords.set(nx * 2 - 1, -(ny * 2 - 1));
        this.mouseMoved = true;
        this.timer = setTimeout(() => {
          this.mouseMoved = false;
        }, 100);
      }
      setNormalized(nx, ny) {
        this.coords.set(nx, ny);
        this.mouseMoved = true;
      }
      onDocumentMouseMove(event) {
        if (this.onInteract) this.onInteract();
        if (this.isAutoActive && !this.hasUserControl && !this.takeoverActive) {
          const rect = this.container.getBoundingClientRect();
          const nx = (event.clientX - rect.left) / rect.width;
          const ny = (event.clientY - rect.top) / rect.height;
          this.takeoverFrom.copy(this.coords);
          this.takeoverTo.set(nx * 2 - 1, -(ny * 2 - 1));
          this.takeoverStartTime = performance.now();
          this.takeoverActive = true;
          this.hasUserControl = true;
          this.isAutoActive = false;
          return;
        }
        this.setCoords(event.clientX, event.clientY);
        this.hasUserControl = true;
      }
      onDocumentTouchStart(event) {
        if (event.touches.length === 1) {
          const t = event.touches[0];
          if (this.onInteract) this.onInteract();
          this.setCoords(t.pageX, t.pageY);
          this.hasUserControl = true;
        }
      }
      onDocumentTouchMove(event) {
        if (event.touches.length === 1) {
          const t = event.touches[0];
          if (this.onInteract) this.onInteract();
          this.setCoords(t.pageX, t.pageY);
        }
      }
      onTouchEnd() {
        this.isHoverInside = false;
      }
      onMouseEnter() {
        this.isHoverInside = true;
      }
      onMouseLeave() {
        this.isHoverInside = false;
      }
      update() {
        if (this.takeoverActive) {
          const t = (performance.now() - this.takeoverStartTime) / (this.takeoverDuration * 1000);
          if (t >= 1) {
            this.takeoverActive = false;
            this.coords.copy(this.takeoverTo);
            this.coords_old.copy(this.coords);
            this.diff.set(0, 0);
          } else {
            const k = t * t * (3 - 2 * t);
            this.coords.copy(this.takeoverFrom).lerp(this.takeoverTo, k);
          }
        }
        this.diff.subVectors(this.coords, this.coords_old);
        this.coords_old.copy(this.coords);
        if (this.coords_old.x === 0 && this.coords_old.y === 0) this.diff.set(0, 0);
        if (this.isAutoActive && !this.takeoverActive) this.diff.multiplyScalar(this.autoIntensity);
      }
    }
    const Mouse = new MouseClass();

    class AutoDriver {
      constructor(mouse, manager, opts) {
        this.mouse = mouse;
        this.manager = manager;
        this.enabled = opts.enabled;
        this.speed = opts.speed; // normalized units/sec
        this.resumeDelay = opts.resumeDelay || 3000; // ms
        this.rampDurationMs = (opts.rampDuration || 0) * 1000;
        this.active = false;
        this.current = new THREE.Vector2(0, 0);
        this.target = new THREE.Vector2();
        this.lastTime = performance.now();
        this.activationTime = 0;
        this.margin = 0.2;
        this._tmpDir = new THREE.Vector2(); // reuse temp vector to avoid per-frame alloc
        this.pickNewTarget();
      }
      pickNewTarget() {
        const r = Math.random;
        this.target.set((r() * 2 - 1) * (1 - this.margin), (r() * 2 - 1) * (1 - this.margin));
      }
      forceStop() {
        this.active = false;
        this.mouse.isAutoActive = false;
      }
      update() {
        if (!this.enabled) return;
        const now = performance.now();
        const idle = now - this.manager.lastUserInteraction;
        if (idle < this.resumeDelay) {
          if (this.active) this.forceStop();
          return;
        }
        if (this.mouse.isHoverInside) {
          if (this.active) this.forceStop();
          return;
        }
        if (!this.active) {
          this.active = true;
          this.current.copy(this.mouse.coords);
          this.lastTime = now;
          this.activationTime = now;
        }
        if (!this.active) return;
        this.mouse.isAutoActive = true;
        let dtSec = (now - this.lastTime) / 1000;
        this.lastTime = now;
        if (dtSec > 0.2) dtSec = 0.016;
        const dir = this._tmpDir.subVectors(this.target, this.current);
        const dist = dir.length();
        if (dist < 0.01) {
          this.pickNewTarget();
          return;
        }
        dir.normalize();
        let ramp = 1;
        if (this.rampDurationMs > 0) {
          const t = Math.min(1, (now - this.activationTime) / this.rampDurationMs);
          ramp = t * t * (3 - 2 * t);
        }
        const step = this.speed * dtSec * ramp;
        const move = Math.min(step, dist);
        this.current.addScaledVector(dir, move);
        this.mouse.setNormalized(this.current.x, this.current.y);
      }
    }

    const face_vert = `
    attribute vec3 position;
    uniform vec2 px;
    uniform vec2 boundarySpace;
    varying vec2 uv;
    precision highp float;
    void main(){
    vec3 pos = position;
    vec2 scale = 1.0 - boundarySpace * 2.0;
    pos.xy = pos.xy * scale;
    uv = vec2(0.5)+(pos.xy)*0.5;
    gl_Position = vec4(pos, 1.0);
}
`;
    const line_vert = `
    attribute vec3 position;
    uniform vec2 px;
    precision highp float;
    varying vec2 uv;
    void main(){
    vec3 pos = position;
    uv = 0.5 + pos.xy * 0.5;
    vec2 n = sign(pos.xy);
    pos.xy = abs(pos.xy) - px * 1.0;
    pos.xy *= n;
    gl_Position = vec4(pos, 1.0);
}
`;
    const mouse_vert = `
    precision highp float;
    attribute vec3 position;
    attribute vec2 uv;
    uniform vec2 center;
    uniform vec2 scale;
    uniform vec2 px;
    varying vec2 vUv;
    void main(){
    vec2 pos = position.xy * scale * 2.0 * px + center;
    vUv = uv;
    gl_Position = vec4(pos, 0.0, 1.0);
}
`;
    const advection_frag = `
    precision highp float;
    uniform sampler2D velocity;
    uniform float dt;
    uniform bool isBFECC;
    uniform vec2 fboSize;
    uniform vec2 px;
    varying vec2 uv;
    void main(){
    vec2 ratio = max(fboSize.x, fboSize.y) / fboSize;
    if(isBFECC == false){
        vec2 vel = texture2D(velocity, uv).xy;
        vec2 uv2 = uv - vel * dt * ratio;
        vec2 newVel = texture2D(velocity, uv2).xy;
        gl_FragColor = vec4(newVel, 0.0, 0.0);
    } else {
        vec2 spot_new = uv;
        vec2 vel_old = texture2D(velocity, uv).xy;
        vec2 spot_old = spot_new - vel_old * dt * ratio;
        vec2 vel_new1 = texture2D(velocity, spot_old).xy;
        vec2 spot_new2 = spot_old + vel_new1 * dt * ratio;
        vec2 error = spot_new2 - spot_new;
        vec2 spot_new3 = spot_new - error / 2.0;
        vec2 vel_2 = texture2D(velocity, spot_new3).xy;
        vec2 spot_old2 = spot_new3 - vel_2 * dt * ratio;
        vec2 newVel2 = texture2D(velocity, spot_old2).xy;
        gl_FragColor = vec4(newVel2, 0.0, 0.0);
    }
}
`;
    const color_frag = `
    precision highp float;
    uniform sampler2D velocity;
    uniform sampler2D palette;
    uniform vec4 bgColor;
    varying vec2 uv;
    void main(){
    vec2 vel = texture2D(velocity, uv).xy;
    float lenv = clamp(length(vel), 0.0, 1.0);
    vec3 c = texture2D(palette, vec2(lenv, 0.5)).rgb;
    vec3 outRGB = mix(bgColor.rgb, c, lenv);
    float outA = mix(bgColor.a, 1.0, lenv);
    gl_FragColor = vec4(outRGB, outA);
}
`;
    const divergence_frag = `
    precision highp float;
    uniform sampler2D velocity;
    uniform float dt;
    uniform vec2 px;
    varying vec2 uv;
    void main(){
    float x0 = texture2D(velocity, uv-vec2(px.x, 0.0)).x;
    float x1 = texture2D(velocity, uv+vec2(px.x, 0.0)).x;
    float y0 = texture2D(velocity, uv-vec2(0.0, px.y)).y;
    float y1 = texture2D(velocity, uv+vec2(0.0, px.y)).y;
    float divergence = (x1 - x0 + y1 - y0) / 2.0;
    gl_FragColor = vec4(divergence / dt);
}
`;
    const externalForce_frag = `
    precision highp float;
    uniform vec2 force;
    uniform vec2 center;
    uniform vec2 scale;
    uniform vec2 px;
    varying vec2 vUv;
    void main(){
    vec2 circle = (vUv - 0.5) * 2.0;
    float d = 1.0 - min(length(circle), 1.0);
    d *= d;
    gl_FragColor = vec4(force * d, 0.0, 1.0);
}
`;
    const poisson_frag = `
    precision highp float;
    uniform sampler2D pressure;
    uniform sampler2D divergence;
    uniform vec2 px;
    varying vec2 uv;
    void main(){
    float p0 = texture2D(pressure, uv + vec2(px.x * 2.0, 0.0)).r;
    float p1 = texture2D(pressure, uv - vec2(px.x * 2.0, 0.0)).r;
    float p2 = texture2D(pressure, uv + vec2(0.0, px.y * 2.0)).r;
    float p3 = texture2D(pressure, uv - vec2(0.0, px.y * 2.0)).r;
    float div = texture2D(divergence, uv).r;
    float newP = (p0 + p1 + p2 + p3) / 4.0 - div;
    gl_FragColor = vec4(newP);
}
`;
    const pressure_frag = `
    precision highp float;
    uniform sampler2D pressure;
    uniform sampler2D velocity;
    uniform vec2 px;
    uniform float dt;
    varying vec2 uv;
    void main(){
    float step = 1.0;
    float p0 = texture2D(pressure, uv + vec2(px.x * step, 0.0)).r;
    float p1 = texture2D(pressure, uv - vec2(px.x * step, 0.0)).r;
    float p2 = texture2D(pressure, uv + vec2(0.0, px.y * step)).r;
    float p3 = texture2D(pressure, uv - vec2(0.0, px.y * step)).r;
    vec2 v = texture2D(velocity, uv).xy;
    vec2 gradP = vec2(p0 - p1, p2 - p3) * 0.5;
    v = v - gradP * dt;
    gl_FragColor = vec4(v, 0.0, 1.0);
}
`;
    const viscous_frag = `
    precision highp float;
    uniform sampler2D velocity;
    uniform sampler2D velocity_new;
    uniform float v;
    uniform vec2 px;
    uniform float dt;
    varying vec2 uv;
    void main(){
    vec2 old = texture2D(velocity, uv).xy;
    vec2 new0 = texture2D(velocity_new, uv + vec2(px.x * 2.0, 0.0)).xy;
    vec2 new1 = texture2D(velocity_new, uv - vec2(px.x * 2.0, 0.0)).xy;
    vec2 new2 = texture2D(velocity_new, uv + vec2(0.0, px.y * 2.0)).xy;
    vec2 new3 = texture2D(velocity_new, uv - vec2(0.0, px.y * 2.0)).xy;
    vec2 newv = 4.0 * old + v * dt * (new0 + new1 + new2 + new3);
    newv /= 4.0 * (1.0 + v * dt);
    gl_FragColor = vec4(newv, 0.0, 0.0);
}
`;

    class ShaderPass {
      constructor(props) {
        this.props = props || {};
        this.uniforms = this.props.material?.uniforms;
        this.scene = null;
        this.camera = null;
        this.material = null;
        this.geometry = null;
        this.plane = null;
      }
      init() {
        this.scene = new THREE.Scene();
        this.camera = new THREE.Camera();
        if (this.uniforms) {
          this.material = new THREE.RawShaderMaterial(this.props.material);
          this.geometry = new THREE.PlaneGeometry(2.0, 2.0);
          this.plane = new THREE.Mesh(this.geometry, this.material);
          this.scene.add(this.plane);
        }
      }
      update() {
        Common.renderer.setRenderTarget(this.props.output || null);
        Common.renderer.render(this.scene, this.camera);
        Common.renderer.setRenderTarget(null);
      }
    }

    class Advection extends ShaderPass {
      constructor(simProps) {
        super({
          material: {
            vertexShader: face_vert,
            fragmentShader: advection_frag,
            uniforms: {
              boundarySpace: { value: simProps.cellScale },
              px: { value: simProps.cellScale },
              fboSize: { value: simProps.fboSize },
              velocity: { value: simProps.src.texture },
              dt: { value: simProps.dt },
              isBFECC: { value: true }
            }
          },
          output: simProps.dst
        });
        this.uniforms = this.props.material.uniforms;
        this.init();
      }
      init() {
        super.init();
        this.createBoundary();
      }
      createBoundary() {
        const boundaryG = new THREE.BufferGeometry();
        const vertices_boundary = new Float32Array([
          -1, -1, 0, -1, 1, 0, -1, 1, 0, 1, 1, 0, 1, 1, 0, 1, -1, 0, 1, -1, 0, -1, -1, 0
        ]);
        boundaryG.setAttribute('position', new THREE.BufferAttribute(vertices_boundary, 3));
        const boundaryM = new THREE.RawShaderMaterial({
          vertexShader: line_vert,
          fragmentShader: advection_frag,
          uniforms: this.uniforms
        });
        this.line = new THREE.LineSegments(boundaryG, boundaryM);
        this.scene.add(this.line);
      }
      update({ dt, isBounce, BFECC }) {
        this.uniforms.dt.value = dt;
        this.line.visible = isBounce;
        this.uniforms.isBFECC.value = BFECC;
        super.update();
      }
    }

    class ExternalForce extends ShaderPass {
      constructor(simProps) {
        super({ output: simProps.dst });
        this.init(simProps);
      }
      init(simProps) {
        super.init();
        const mouseG = new THREE.PlaneGeometry(1, 1);
        const mouseM = new THREE.RawShaderMaterial({
          vertexShader: mouse_vert,
          fragmentShader: externalForce_frag,
          blending: THREE.AdditiveBlending,
          depthWrite: false,
          uniforms: {
            px: { value: simProps.cellScale },
            force: { value: new THREE.Vector2(0.0, 0.0) },
            center: { value: new THREE.Vector2(0.0, 0.0) },
            scale: { value: new THREE.Vector2(simProps.cursor_size, simProps.cursor_size) }
          }
        });
        this.mouse = new THREE.Mesh(mouseG, mouseM);
        this.scene.add(this.mouse);
      }
      update(props) {
        const forceX = (Mouse.diff.x / 2) * props.mouse_force;
        const forceY = (Mouse.diff.y / 2) * props.mouse_force;
        const cursorSizeX = props.cursor_size * props.cellScale.x;
        const cursorSizeY = props.cursor_size * props.cellScale.y;
        const centerX = Math.min(
          Math.max(Mouse.coords.x, -1 + cursorSizeX + props.cellScale.x * 2),
          1 - cursorSizeX - props.cellScale.x * 2
        );
        const centerY = Math.min(
          Math.max(Mouse.coords.y, -1 + cursorSizeY + props.cellScale.y * 2),
          1 - cursorSizeY - props.cellScale.y * 2
        );
        const uniforms = this.mouse.material.uniforms;
        uniforms.force.value.set(forceX, forceY);
        uniforms.center.value.set(centerX, centerY);
        uniforms.scale.value.set(props.cursor_size, props.cursor_size);
        super.update();
      }
    }

    class Viscous extends ShaderPass {
      constructor(simProps) {
        super({
          material: {
            vertexShader: face_vert,
            fragmentShader: viscous_frag,
            uniforms: {
              boundarySpace: { value: simProps.boundarySpace },
              velocity: { value: simProps.src.texture },
              velocity_new: { value: simProps.dst_.texture },
              v: { value: simProps.viscous },
              px: { value: simProps.cellScale },
              dt: { value: simProps.dt }
            }
          },
          output: simProps.dst,
          output0: simProps.dst_,
          output1: simProps.dst
        });
        this.init();
      }
      update({ viscous, iterations, dt }) {
        let fbo_in, fbo_out;
        this.uniforms.v.value = viscous;
        for (let i = 0; i < iterations; i++) {
          if (i % 2 === 0) {
            fbo_in = this.props.output0;
            fbo_out = this.props.output1;
          } else {
            fbo_in = this.props.output1;
            fbo_out = this.props.output0;
          }
          this.uniforms.velocity_new.value = fbo_in.texture;
          // FIXED: Used fbo_out instead of the undefined p_out
          this.props.output = fbo_out;
          super.update();
        }
        // FIXED: Returned fbo_out instead of the undefined p_out
        return fbo_out;
      }
    }

    class Divergence extends ShaderPass {
      constructor(simProps) {
        super({
          material: {
            vertexShader: face_vert,
            fragmentShader: divergence_frag,
            uniforms: {
              boundarySpace: { value: simProps.boundarySpace },
              velocity: { value: simProps.src.texture },
              px: { value: simProps.cellScale },
              dt: { value: simProps.dt }
            }
          },
          output: simProps.dst
        });
        this.init();
      }
      update({ vel }) {
        this.uniforms.velocity.value = vel.texture;
        super.update();
      }
    }

    class Poisson extends ShaderPass {
      constructor(simProps) {
        super({
          material: {
            vertexShader: face_vert,
            fragmentShader: poisson_frag,
            uniforms: {
              boundarySpace: { value: simProps.boundarySpace },
              pressure: { value: simProps.dst_.texture },
              divergence: { value: simProps.src.texture },
              px: { value: simProps.cellScale }
            }
          },
          output: simProps.dst,
          output0: simProps.dst_,
          output1: simProps.dst
        });
        this.init();
      }
      update({ iterations }) {
        let p_in, p_out;
        for (let i = 0; i < iterations; i++) {
          if (i % 2 === 0) {
            p_in = this.props.output0;
            p_out = this.props.output1;
          } else {
            p_in = this.props.output1;
            p_out = this.props.output0;
          }
          this.uniforms.pressure.value = p_in.texture;
          this.props.output = p_out;
          super.update();
        }
        return p_out;
      }
    }

    class Pressure extends ShaderPass {
      constructor(simProps) {
        super({
          material: {
            vertexShader: face_vert,
            fragmentShader: pressure_frag,
            uniforms: {
              boundarySpace: { value: simProps.boundarySpace },
              pressure: { value: simProps.src_p.texture },
              velocity: { value: simProps.src_v.texture },
              px: { value: simProps.cellScale },
              dt: { value: simProps.dt }
            }
          },
          output: simProps.dst
        });
        this.init();
      }
      update({ vel, pressure }) {
        this.uniforms.velocity.value = vel.texture;
        this.uniforms.pressure.value = pressure.texture;
        super.update();
      }
    }

    class Simulation {
      constructor(options) {
        this.options = {
          iterations_poisson: 32,
          iterations_viscous: 32,
          mouse_force: 20,
          resolution: 0.5,
          cursor_size: 100,
          viscous: 30,
          isBounce: false,
          dt: 0.014,
          isViscous: false,
          BFECC: true,
          ...options
        };
        this.fbos = {
          vel_0: null,
          vel_1: null,
          vel_viscous0: null,
          vel_viscous1: null,
          div: null,
          pressure_0: null,
          pressure_1: null
        };
        this.fboSize = new THREE.Vector2();
        this.cellScale = new THREE.Vector2();
        this.boundarySpace = new THREE.Vector2();
        this.init();
      }
      init() {
        this.calcSize();
        this.createAllFBO();
        this.createShaderPass();
      }
      getFloatType() {
        const isIOS = /(iPad|iPhone|iPod)/i.test(navigator.userAgent);
        return isIOS ? THREE.HalfFloatType : THREE.FloatType;
      }
      createAllFBO() {
        const type = this.getFloatType();
        const opts = {
          type,
          depthBuffer: false,
          stencilBuffer: false,
          minFilter: THREE.LinearFilter,
          magFilter: THREE.LinearFilter,
          wrapS: THREE.ClampToEdgeWrapping,
          wrapT: THREE.ClampToEdgeWrapping
        };
        for (let key in this.fbos) {
          this.fbos[key] = new THREE.WebGLRenderTarget(this.fboSize.x, this.fboSize.y, opts);
        }
      }
      createShaderPass() {
        this.advection = new Advection({
          cellScale: this.cellScale,
          fboSize: this.fboSize,
          dt: this.options.dt,
          src: this.fbos.vel_0,
          dst: this.fbos.vel_1
        });
        this.externalForce = new ExternalForce({
          cellScale: this.cellScale,
          cursor_size: this.options.cursor_size,
          dst: this.fbos.vel_1
        });
        this.viscous = new Viscous({
          cellScale: this.cellScale,
          boundarySpace: this.boundarySpace,
          viscous: this.options.viscous,
          src: this.fbos.vel_1,
          dst: this.fbos.vel_viscous1,
          dst_: this.fbos.vel_viscous0,
          dt: this.options.dt
        });
        this.divergence = new Divergence({
          cellScale: this.cellScale,
          boundarySpace: this.boundarySpace,
          src: this.fbos.vel_viscous0,
          dst: this.fbos.div,
          dt: this.options.dt
        });
        this.poisson = new Poisson({
          cellScale: this.cellScale,
          boundarySpace: this.boundarySpace,
          src: this.fbos.div,
          dst: this.fbos.pressure_1,
          dst_: this.fbos.pressure_0
        });
        this.pressure = new Pressure({
          cellScale: this.cellScale,
          boundarySpace: this.boundarySpace,
          src_p: this.fbos.pressure_0,
          src_v: this.fbos.vel_viscous0,
          dst: this.fbos.vel_0,
          dt: this.options.dt
        });
      }
      calcSize() {
        const width = Math.max(1, Math.round(this.options.resolution * Common.width));
        const height = Math.max(1, Math.round(this.options.resolution * Common.height));
        const px_x = 1.0 / width;
        const px_y = 1.0 / height;
        this.cellScale.set(px_x, px_y);
        this.fboSize.set(width, height);
      }
      resize() {
        this.calcSize();
        for (let key in this.fbos) {
          this.fbos[key].setSize(this.fboSize.x, this.fboSize.y);
        }
      }
      update() {
        if (this.options.isBounce) {
          this.boundarySpace.set(0, 0);
        } else {
          this.boundarySpace.copy(this.cellScale);
        }
        this.advection.update({
          dt: this.options.dt,
          isBounce: this.options.isBounce,
          BFECC: this.options.BFECC
        });
        this.externalForce.update({
          cursor_size: this.options.cursor_size,
          mouse_force: this.options.mouse_force,
          cellScale: this.cellScale
        });
        let vel = this.fbos.vel_1;
        if (this.options.isViscous) {
          vel = this.viscous.update({
            viscous: this.options.viscous,
            iterations: this.options.iterations_viscous,
            dt: this.options.dt
          });
        }
        this.divergence.update({ vel });
        const pressure = this.poisson.update({
          iterations: this.options.iterations_poisson
        });
        this.pressure.update({ vel, pressure });
      }
    }

    class Output {
      constructor() {
        this.init();
      }
      init() {
        this.simulation = new Simulation();
        this.scene = new THREE.Scene();
        this.camera = new THREE.Camera();
        this.output = new THREE.Mesh(
          new THREE.PlaneGeometry(2, 2),
          new THREE.RawShaderMaterial({
            vertexShader: face_vert,
            fragmentShader: color_frag,
            transparent: true,
            depthWrite: false,
            uniforms: {
              velocity: { value: this.simulation.fbos.vel_0.texture },
              boundarySpace: { value: new THREE.Vector2() },
              palette: { value: paletteTex },
              bgColor: { value: bgVec4 }
            }
          })
        );
        this.scene.add(this.output);
      }
      addScene(mesh) {
        this.scene.add(mesh);
      }
      resize() {
        this.simulation.resize();
      }
      render() {
        Common.renderer.setRenderTarget(null);
        Common.renderer.render(this.scene, this.camera);
      }
      update() {
        this.simulation.update();
        this.render();
      }
    }

    class WebGLManager {
      constructor(props) {
        this.props = props;
        this._loop = this.loop.bind(this);
        this._resize = this.resize.bind(this);
        this._onVisibility = () => {
          const hidden = document.hidden;
          if (hidden) {
            this.pause();
          } else if (isVisibleRef.current) {
            this.start();
          }
        };
        
        Common.init(props.$wrapper);
        Mouse.init(props.$wrapper);
        Mouse.autoIntensity = props.autoIntensity;
        Mouse.takeoverDuration = props.takeoverDuration;
        this.lastUserInteraction = performance.now();
        Mouse.onInteract = () => {
          this.lastUserInteraction = performance.now();
          if (this.autoDriver) this.autoDriver.forceStop();
        };
        this.autoDriver = new AutoDriver(Mouse, this, {
          enabled: props.autoDemo,
          speed: props.autoSpeed,
          resumeDelay: props.autoResumeDelay,
          rampDuration: props.autoRampDuration
        });
        this.init();
        window.addEventListener('resize', this._resize);
        document.addEventListener('visibilitychange', this._onVisibility);
        this.running = false;
      }
      init() {
        this.props.$wrapper.prepend(Common.renderer.domElement);
        this.output = new Output();
        const sim = this.output?.simulation;
        if (sim) {
          const prevRes = sim.options.resolution;
          Object.assign(sim.options, {
            mouse_force: this.props.mouseForce,
            cursor_size: this.props.cursorSize,
            isViscous: this.props.isViscous,
            viscous: this.props.viscous,
            iterations_viscous: this.props.iterationsViscous,
            iterations_poisson: this.props.iterationsPoisson,
            dt: this.props.dt,
            BFECC: this.props.BFECC,
            resolution: this.props.resolution,
            isBounce: this.props.isBounce
          });
          if (this.props.resolution !== prevRes) {
            sim.resize();
          }
        }
        this.start();
      }
      resize() {
        Common.resize();
        this.output.resize();
      }
      render() {
        if (this.autoDriver) this.autoDriver.update();
        Mouse.update();
        Common.update();
        this.output.update();
      }
      loop() {
        if (!this.running) return; // safety
        this.render();
        rafRef.current = requestAnimationFrame(this._loop);
      }
      start() {
        if (this.running) return;
        this.running = true;
        this._loop();
      }
      pause() {
        this.running = false;
        if (rafRef.current) {
          cancelAnimationFrame(rafRef.current);
          rafRef.current = null;
        }
      }
      dispose() {
        try {
          window.removeEventListener('resize', this._resize);
          document.removeEventListener('visibilitychange', this._onVisibility);
          Mouse.dispose();
          if (Common.renderer) {
            const canvas = Common.renderer.domElement;
            if (canvas && canvas.parentNode) canvas.parentNode.removeChild(canvas);
            Common.renderer.dispose();
          }
        } catch (e) {
          void 0;
        }
      }
    }

    const container = mountRef.current;
    container.style.position = container.style.position || 'relative';
    container.style.overflow = container.style.overflow || 'hidden';

    const webgl = new WebGLManager({
      $wrapper: container,
      autoDemo,
      autoSpeed,
      autoIntensity,
      takeoverDuration,
      autoResumeDelay,
      autoRampDuration,
      mouseForce,
      cursorSize,
      isViscous,
      viscous,
      iterationsViscous,
      iterationsPoisson,
      dt,
      BFECC,
      resolution,
      isBounce
    });
    webglRef.current = webgl;

    // IntersectionObserver to pause rendering when not visible
    const io = new IntersectionObserver(
      entries => {
        const entry = entries[0];
        const isVisible = entry.isIntersecting && entry.intersectionRatio > 0;
        isVisibleRef.current = isVisible;
        if (!webglRef.current) return;
        if (isVisible && !document.hidden) {
          webglRef.current.start();
        } else {
          webglRef.current.pause();
        }
      },
      { threshold: [0, 0.01, 0.1] }
    );
    io.observe(container);
    intersectionObserverRef.current = io;

    const ro = new ResizeObserver(() => {
      if (!webglRef.current) return;
      if (resizeRafRef.current) cancelAnimationFrame(resizeRafRef.current);
      resizeRafRef.current = requestAnimationFrame(() => {
        if (!webglRef.current) return;
        webglRef.current.resize();
      });
    });
    ro.observe(container);
    resizeObserverRef.current = ro;

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      if (resizeObserverRef.current) {
        try {
          resizeObserverRef.current.disconnect();
        } catch (e) {
          void 0;
        }
      }
      if (intersectionObserverRef.current) {
        try {
          intersectionObserverRef.current.disconnect();
        } catch (e) {
          void 0;
        }
      }
      if (webglRef.current) {
        webglRef.current.dispose();
      }
      webglRef.current = null;
    };
  }, [
    BFECC,
    cursorSize,
    dt,
    isBounce,
    isViscous,
    iterationsPoisson,
    iterationsViscous,
    mouseForce,
    resolution,
    viscous,
    colors,
    autoDemo,
    autoSpeed,
    autoIntensity,
    takeoverDuration,
    autoResumeDelay,
    autoRampDuration
  ]);

  useEffect(() => {
    const webgl = webglRef.current;
    if (!webgl) return;
    const sim = webgl.output?.simulation;
    if (!sim) return;
    const prevRes = sim.options.resolution;
    Object.assign(sim.options, {
      mouse_force: mouseForce,
      cursor_size: cursorSize,
      isViscous,
      viscous,
      iterations_viscous: iterationsViscous,
      iterations_poisson: iterationsPoisson,
      dt,
      BFECC,
      resolution,
      isBounce
    });
    if (webgl.autoDriver) {
      webgl.autoDriver.enabled = autoDemo;
      webgl.autoDriver.speed = autoSpeed;
      webgl.autoDriver.resumeDelay = autoResumeDelay;
      webgl.autoDriver.rampDurationMs = autoRampDuration * 1000;
      if (webgl.autoDriver.mouse) {
        webgl.autoDriver.mouse.autoIntensity = autoIntensity;
        webgl.autoDriver.mouse.takeoverDuration = takeoverDuration;
      }
    }
    if (resolution !== prevRes) {
      sim.resize();
    }
  }, [
    mouseForce,
    cursorSize,
    isViscous,
    viscous,
    iterationsViscous,
    iterationsPoisson,
    dt,
    BFECC,
    resolution,
    isBounce,
    autoDemo,
    autoSpeed,
    autoIntensity,
    takeoverDuration,
    autoResumeDelay,
    autoRampDuration
  ]);

  return <div ref={mountRef} className={`liquid-ether-container ${className || ''}`} style={style} />;
}