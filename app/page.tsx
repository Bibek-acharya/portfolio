'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';
import ResumeDocument from '@/components/ResumeDocument';
import { portfolioData } from '@/lib/portfolio-data';
import { downloadResume, openResumePreview } from '@/lib/resume-utils';
import { 
  Mail, 
  Phone, 
  Github, 
  Linkedin, 
  ExternalLink, 
  Code, 
  Briefcase, 
  GraduationCap, 
  MapPin,
  Calendar,
  Download,
  Eye,
  Users,
  Award,
  Languages,
  ChevronRight,
  Building,
  Globe,
  Star,
  Zap,
  Rocket,
  Monitor,
  Smartphone,
  Database,
  Server,
  ArrowRight,
  Play,
  Image as ImageIcon,
  BookOpen,
  Clock
} from 'lucide-react';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isVisible, setIsVisible] = useState(false);
  const [imageErrors, setImageErrors] = useState<{[key: string]: boolean}>({});

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => {
      const sections = ['hero', 'about', 'work', 'skills', 'education', 'contact'];
      const scrollY = window.scrollY;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollY >= offsetTop - 100 && scrollY < offsetTop + offsetHeight - 100) {
            setActiveSection(section);
            break;
          }
        }
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
  };

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 pb-24">
      {/* Hidden Resume Document for PDF Generation */}
      <div className="hidden">
        <div id="resume-content">
          <ResumeDocument />
        </div>
      </div>

      {/* Navigation Component */}
      <Navigation 
        activeSection={activeSection} 
        onSectionClick={scrollToSection} 
      />

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-gray-950 to-purple-900/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="mb-8">
              <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-8 flex items-center justify-center shadow-2xl overflow-hidden relative">
                {!imageErrors['profile'] ? (
                  <Image 
                    src="/images/profile.jpg" 
                    alt="Bibek Acharya"
                    width={128}
                    height={128}
                    className="w-full h-full object-cover rounded-full"
                    onError={() => {
                      setImageErrors(prev => ({...prev, profile: true}));
                    }}
                  />
                ) : (
                  <span className="text-white font-bold text-4xl">BA</span>
                )}
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                Full Stack Developer
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  & React Trainer
                </span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
                I craft digital experiences that blend beautiful design with powerful functionality. 
                Specializing in React ecosystem and training the next generation of developers.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Button 
                onClick={() => scrollToSection('work')}
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 text-lg"
              >
                <Eye className="mr-2 h-5 w-5" />
                View My Work
              </Button>
              <Button 
                onClick={() => scrollToSection('contact')}
                variant="outline"
                size="lg"
                className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-4 text-lg"
              >
                <Mail className="mr-2 h-5 w-5" />
                Get in Touch
              </Button>
              <Button 
                onClick={openResumePreview}
                variant="outline"
                size="lg"
                className="border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white px-8 py-4 text-lg"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
            </div>

            <div className="flex justify-center space-x-6">
              <a href={`mailto:${portfolioData.contact.email}`} className="text-gray-400 hover:text-blue-400 transition-colors">
                <Mail className="h-6 w-6" />
              </a>
              <a href="https://github.com/bibekacharya-123" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Github className="h-6 w-6" />
              </a>
              <a href="https://www.linkedin.com/in/bibek-acharya-1473a8227/" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-900/50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Crafting Digital Solutions
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                {portfolioData.summary}
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center p-6 bg-gray-800/50 rounded-lg">
                  <div className="text-3xl font-bold text-blue-400 mb-2">10+</div>
                  <div className="text-gray-400">Projects Delivered</div>
                </div>
                <div className="text-center p-6 bg-gray-800/50 rounded-lg">
                  <div className="text-3xl font-bold text-purple-400 mb-2">50+</div>
                  <div className="text-gray-400">Students Trained</div>
                </div>
              </div>

              <Button 
                onClick={() => scrollToSection('work')}
                className="bg-blue-600 hover:bg-blue-700"
              >
                Explore My Work
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 p-6 rounded-lg border border-blue-500/30">
                    <Monitor className="h-8 w-8 text-blue-400 mb-4" />
                    <h3 className="text-white font-semibold mb-2">Web Development</h3>
                    <p className="text-gray-400 text-sm">Modern, responsive websites with cutting-edge technologies</p>
                  </div>
                  <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 p-6 rounded-lg border border-purple-500/30">
                    <Users className="h-8 w-8 text-purple-400 mb-4" />
                    <h3 className="text-white font-semibold mb-2">Training</h3>
                    <p className="text-gray-400 text-sm">Comprehensive React training programs for developers</p>
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="bg-gradient-to-br from-green-500/20 to-green-600/20 p-6 rounded-lg border border-green-500/30">
                    <Smartphone className="h-8 w-8 text-green-400 mb-4" />
                    <h3 className="text-white font-semibold mb-2">Mobile Apps</h3>
                    <p className="text-gray-400 text-sm">Cross-platform mobile applications with React Native</p>
                  </div>
                  <div className="bg-gradient-to-br from-orange-500/20 to-orange-600/20 p-6 rounded-lg border border-orange-500/30">
                    <Server className="h-8 w-8 text-orange-400 mb-4" />
                    <h3 className="text-white font-semibold mb-2">Backend</h3>
                    <p className="text-gray-400 text-sm">Robust server-side solutions and API development</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section id="work" className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Featured Work</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              A showcase of projects that demonstrate my expertise in creating impactful digital solutions
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {portfolioData.projects.filter(p => p.featured).map((project, index) => (
              <Card key={index} className="bg-gray-900 border-gray-800 overflow-hidden group hover:border-gray-700 transition-all duration-300">
                <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 relative overflow-hidden">
                  {project.image && !imageErrors[`project-${index}`] ? (
                    <div className="relative w-full h-full">
                      <Image 
                        src={project.image} 
                        alt={`${project.name} screenshot`}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        onError={() => {
                          setImageErrors(prev => ({...prev, [`project-${index}`]: true}));
                        }}
                      />
                    </div>
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                      <div className="text-center">
                        <ImageIcon className="h-16 w-16 text-gray-600 mx-auto mb-4" />
                        <p className="text-gray-500 text-sm">Project Screenshots</p>
                        <p className="text-gray-600 text-xs mt-2">Add {project.image?.split('/').pop()} to display image</p>
                      </div>
                    </div>
                  )}
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-blue-600 text-white">
                      {project.category}
                    </Badge>
                  </div>
                  {project.url && (
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/10 backdrop-blur-sm p-2 rounded-lg hover:bg-white/20 transition-colors"
                      >
                        <ExternalLink className="h-4 w-4 text-white" />
                      </a>
                    </div>
                  )}
                </div>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">{project.name}</h3>
                      <p className="text-blue-400 font-medium">{project.client}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="border-gray-700 text-gray-400">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  {project.url && (
                    <Button 
                      asChild
                      variant="outline" 
                      className="border-gray-700 text-gray-300 hover:bg-gray-800 w-full"
                    >
                      <a href={project.url} target="_blank" rel="noopener noreferrer">
                        <Play className="h-4 w-4 mr-2" />
                        View Live Project
                      </a>
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-8">More Projects</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {portfolioData.githubProjects.map((project, index) => (
                <Card key={index} className="bg-gray-900 border-gray-800 p-6 hover:border-gray-700 transition-colors">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                      <Github className="h-5 w-5 text-white" />
                    </div>
                    <h4 className="font-semibold text-white text-sm">{project.title}</h4>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-900/50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Skills & Expertise</h2>
            <p className="text-xl text-gray-400">Technologies I work with to bring ideas to life</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-gray-900 border-gray-800 p-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <Monitor className="h-6 w-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-white">Frontend</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {portfolioData.skills.frontend.map((skill, index) => (
                  <Badge key={index} className="bg-blue-900/30 text-blue-300 border-blue-800">
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>

            <Card className="bg-gray-900 border-gray-800 p-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                  <Server className="h-6 w-6 text-green-400" />
                </div>
                <h3 className="text-xl font-bold text-white">Backend</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {portfolioData.skills.backend.map((skill, index) => (
                  <Badge key={index} className="bg-green-900/30 text-green-300 border-green-800">
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>

            <Card className="bg-gray-900 border-gray-800 p-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                  <Code className="h-6 w-6 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold text-white">Languages</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {portfolioData.skills.languages.map((skill, index) => (
                  <Badge key={index} className="bg-purple-900/30 text-purple-300 border-purple-800">
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>

            <Card className="bg-gray-900 border-gray-800 p-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center">
                  <Database className="h-6 w-6 text-orange-400" />
                </div>
                <h3 className="text-xl font-bold text-white">Databases</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {portfolioData.skills.databases.map((skill, index) => (
                  <Badge key={index} className="bg-orange-900/30 text-orange-300 border-orange-800">
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>

            <Card className="bg-gray-900 border-gray-800 p-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-pink-500/20 rounded-lg flex items-center justify-center">
                  <Globe className="h-6 w-6 text-pink-400" />
                </div>
                <h3 className="text-xl font-bold text-white">Marketing</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {portfolioData.skills.digitalMarketing.map((skill, index) => (
                  <Badge key={index} className="bg-pink-900/30 text-pink-300 border-pink-800">
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>

            <Card className="bg-gray-900 border-gray-800 p-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center">
                  <Zap className="h-6 w-6 text-yellow-400" />
                </div>
                <h3 className="text-xl font-bold text-white">Tools</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {portfolioData.skills.tools.map((skill, index) => (
                  <Badge key={index} className="bg-yellow-900/30 text-yellow-300 border-yellow-800">
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Education & Experience</h2>
            <p className="text-xl text-gray-400">My academic journey and professional experience</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Education */}
            <div>
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <GraduationCap className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Education</h3>
              </div>

              <div className="space-y-6">
                {portfolioData.education.map((edu, index) => (
                  <Card key={index} className="bg-gray-900 border-gray-800 p-6 hover:border-gray-700 transition-colors">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <BookOpen className="h-6 w-6 text-blue-400" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-white mb-2">{edu.degree}</h4>
                        <p className="text-blue-400 font-medium mb-2">{edu.institution}</p>
                        <div className="flex items-center space-x-4 text-gray-400 text-sm">
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-4 w-4" />
                            <span>{edu.years}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MapPin className="h-4 w-4" />
                            <span>{edu.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Experience */}
            <div>
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-600 rounded-lg flex items-center justify-center">
                  <Briefcase className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Experience</h3>
              </div>

              <div className="space-y-6">
                {portfolioData.experience.map((exp, index) => (
                  <Card key={index} className="bg-gray-900 border-gray-800 p-6 hover:border-gray-700 transition-colors">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Building className="h-6 w-6 text-green-400" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-white mb-1">{exp.position}</h4>
                        <p className="text-green-400 font-medium mb-2">{exp.company}</p>
                        <div className="flex items-center space-x-1 text-gray-400 text-sm mb-4">
                          <Clock className="h-4 w-4" />
                          <span>{exp.year}</span>
                        </div>
                        <ul className="space-y-2">
                          {exp.responsibilities.slice(0, 3).map((responsibility, respIndex) => (
                            <li key={respIndex} className="text-gray-300 text-sm flex items-start space-x-2">
                              <ChevronRight className="h-4 w-4 text-gray-500 flex-shrink-0 mt-0.5" />
                              <span>{responsibility}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Languages */}
          <div className="mt-16">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                  <Languages className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Languages</h3>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              {portfolioData.languages.map((lang, index) => (
                <Card key={index} className="bg-gray-900 border-gray-800 p-6 text-center hover:border-gray-700 transition-colors">
                  <h4 className="text-lg font-bold text-white mb-2">{lang.language}</h4>
                  <Badge className="bg-purple-900/30 text-purple-300 border-purple-800">
                    {lang.proficiency}
                  </Badge>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900/50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Let&apos;s Work Together</h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Ready to bring your next project to life? I&apos;m available for freelance projects, 
            full-time opportunities, and React training programs.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="bg-gray-900 border-gray-800 p-6">
              <Mail className="h-8 w-8 text-blue-400 mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">Email</h3>
              <a 
                href={`mailto:${portfolioData.contact.email}`}
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                {portfolioData.contact.email}
              </a>
            </Card>

            <Card className="bg-gray-900 border-gray-800 p-6">
              <Phone className="h-8 w-8 text-green-400 mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">Phone</h3>
              <a 
                href={`tel:${portfolioData.contact.phone}`}
                className="text-gray-400 hover:text-green-400 transition-colors"
              >
                {portfolioData.contact.phone}
              </a>
            </Card>

            <Card className="bg-gray-900 border-gray-800 p-6">
              <Linkedin className="h-8 w-8 text-blue-400 mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">LinkedIn</h3>
              <a 
                href="https://www.linkedin.com/in/bibek-acharya-1473a8227/"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                Connect with me
              </a>
            </Card>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4"
            >
              <Mail className="mr-2 h-5 w-5" />
              Start a Project
            </Button>
            <Button 
              onClick={openResumePreview}
              variant="outline"
              size="lg"
              className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-4"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-12">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">BA</span>
              </div>
              <div>
                <div className="font-bold text-white">Bibek Acharya</div>
                <div className="text-gray-400 text-sm">Full Stack Developer</div>
              </div>
            </div>
            <div className="flex space-x-6">
              <a href={`mailto:${portfolioData.contact.email}`} className="text-gray-400 hover:text-blue-400 transition-colors">
                <Mail className="h-5 w-5" />
              </a>
              <a href="https://github.com/bibekacharya-123" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/in/bibek-acharya-1473a8227/" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Bibek Acharya. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}