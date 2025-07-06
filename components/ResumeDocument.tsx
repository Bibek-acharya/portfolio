'use client';

import { portfolioData } from '@/lib/portfolio-data';
import { 
  Mail, 
  Phone, 
  Github, 
  Linkedin, 
  MapPin,
  Calendar,
  ExternalLink,
  Award,
  Code,
  Briefcase,
  GraduationCap,
  Languages,
  Globe
} from 'lucide-react';

export default function ResumeDocument() {
  return (
    <div className="resume-document bg-white text-gray-900 max-w-4xl mx-auto p-8 font-sans leading-relaxed">
      {/* Header */}
      <header className="text-center mb-8 pb-6 border-b-2 border-gray-200">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">{portfolioData.name}</h1>
        <h2 className="text-xl text-blue-600 font-semibold mb-4">{portfolioData.title}</h2>
        
        <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <Mail className="h-4 w-4" />
            <span>{portfolioData.contact.email}</span>
          </div>
          <div className="flex items-center gap-1">
            <Phone className="h-4 w-4" />
            <span>{portfolioData.contact.phone}</span>
          </div>
          <div className="flex items-center gap-1">
            <Github className="h-4 w-4" />
            <span>GitHub Profile</span>
          </div>
          <div className="flex items-center gap-1">
            <Linkedin className="h-4 w-4" />
            <span>LinkedIn Profile</span>
          </div>
        </div>
      </header>

      {/* Professional Summary */}
      <section className="mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <Award className="h-6 w-6 text-blue-600" />
          Professional Summary
        </h3>
        <p className="text-gray-700 leading-relaxed text-justify">
          {portfolioData.summary}
        </p>
      </section>

      {/* Skills */}
      <section className="mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <Code className="h-6 w-6 text-blue-600" />
          Technical Skills
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Frontend Development</h4>
            <div className="flex flex-wrap gap-2 mb-4">
              {portfolioData.skills.frontend.map((skill, index) => (
                <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>

            <h4 className="font-semibold text-gray-900 mb-2">Backend Development</h4>
            <div className="flex flex-wrap gap-2 mb-4">
              {portfolioData.skills.backend.map((skill, index) => (
                <span key={index} className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Programming Languages</h4>
            <div className="flex flex-wrap gap-2 mb-4">
              {portfolioData.skills.languages.map((skill, index) => (
                <span key={index} className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>

            <h4 className="font-semibold text-gray-900 mb-2">Databases & Tools</h4>
            <div className="flex flex-wrap gap-2 mb-4">
              {[...portfolioData.skills.databases, ...portfolioData.skills.tools].map((skill, index) => (
                <span key={index} className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <Briefcase className="h-6 w-6 text-blue-600" />
          Professional Experience
        </h3>
        
        <div className="space-y-6">
          {portfolioData.experience.map((exp, index) => (
            <div key={index} className="border-l-4 border-blue-600 pl-6">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="text-xl font-semibold text-gray-900">{exp.position}</h4>
                  <p className="text-blue-600 font-medium">{exp.company}</p>
                </div>
                <span className="text-gray-600 font-medium">{exp.year}</span>
              </div>
              <ul className="space-y-2 text-gray-700">
                {exp.responsibilities.map((responsibility, respIndex) => (
                  <li key={respIndex} className="flex items-start gap-2">
                    <span className="text-blue-600 mt-2">•</span>
                    <span>{responsibility}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <Globe className="h-6 w-6 text-blue-600" />
          Key Projects
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {portfolioData.projects.filter(p => p.featured).map((project, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-semibold text-gray-900">{project.name}</h4>
                {project.url && (
                  <ExternalLink className="h-4 w-4 text-gray-500" />
                )}
              </div>
              <p className="text-blue-600 text-sm font-medium mb-2">{project.client}</p>
              <p className="text-gray-700 text-sm mb-3">{project.description}</p>
              <div className="flex flex-wrap gap-1">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                    {tech}
                  </span>
                ))}
              </div>
              {project.url && (
                <p className="text-xs text-gray-500 mt-2">{project.url}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <GraduationCap className="h-6 w-6 text-blue-600" />
          Education
        </h3>
        
        <div className="space-y-4">
          {portfolioData.education.map((edu, index) => (
            <div key={index} className="border-l-4 border-green-600 pl-6">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">{edu.degree}</h4>
                  <p className="text-green-600 font-medium">{edu.institution}</p>
                  <p className="text-gray-600 text-sm flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    {edu.location}
                  </p>
                </div>
                <span className="text-gray-600 font-medium flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {edu.years}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Languages */}
      <section className="mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <Languages className="h-6 w-6 text-blue-600" />
          Languages
        </h3>
        
        <div className="grid grid-cols-2 gap-4">
          {portfolioData.languages.map((lang, index) => (
            <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <span className="font-medium text-gray-900">{lang.language}</span>
              <span className="text-gray-600">{lang.proficiency}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center pt-6 border-t border-gray-200 text-sm text-gray-600">
        <p>This resume was generated on {new Date().toLocaleDateString()}</p>
      </footer>
    </div>
  );
}