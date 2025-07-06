'use client';

import { useState, useEffect } from 'react';
import { 
  Users,
  Briefcase,
  Code,
  GraduationCap,
  Mail,
  Home
} from 'lucide-react';

interface NavigationProps {
  activeSection: string;
  onSectionClick: (sectionId: string) => void;
}

export default function Navigation({ activeSection, onSectionClick }: NavigationProps) {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const navItems = [
    { id: 'hero', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: Users },
    { id: 'work', label: 'Work', icon: Briefcase },
    { id: 'skills', label: 'Skills', icon: Code },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'contact', label: 'Contact', icon: Mail }
  ];

  return (
    <>
      {/* macOS-style Bottom Taskbar */}
      <nav className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
        <div className="relative">
          {/* Main taskbar container with enhanced glassmorphism */}
          <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-2xl shadow-2xl shadow-black/20 px-3 py-3">
            {/* Gradient overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 rounded-2xl"></div>
            
            <div className="relative flex items-center space-x-2">
              {navItems.map((item, index) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;
                const isHovered = hoveredItem === item.id;
                
                return (
                  <div key={item.id} className="relative">
                    {/* Tooltip */}
                    {isHovered && (
                      <div className="absolute bottom-full mb-3 left-1/2 transform -translate-x-1/2 px-3 py-2 bg-gray-900/95 backdrop-blur-xl text-white text-sm rounded-lg border border-gray-700/50 shadow-xl whitespace-nowrap animate-in fade-in-0 zoom-in-95 duration-200">
                        {item.label}
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900/95"></div>
                      </div>
                    )}
                    
                    <button
                      onClick={() => onSectionClick(item.id)}
                      onMouseEnter={() => setHoveredItem(item.id)}
                      onMouseLeave={() => setHoveredItem(null)}
                      className={`group relative p-3 rounded-xl transition-all duration-300 ease-out ${
                        isActive 
                          ? 'bg-white/20 shadow-lg shadow-blue-500/20 scale-110' 
                          : 'hover:bg-white/10 hover:scale-105'
                      }`}
                    >
                      {/* Active indicator dot */}
                      {isActive && (
                        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-400 rounded-full shadow-lg shadow-blue-400/50 animate-pulse"></div>
                      )}
                      
                      {/* Icon with enhanced effects */}
                      <Icon className={`h-6 w-6 transition-all duration-300 ${
                        isActive 
                          ? 'text-blue-400 drop-shadow-lg' 
                          : 'text-gray-300 group-hover:text-white group-hover:drop-shadow-md'
                      } ${isHovered ? 'scale-110' : ''}`} />
                      
                      {/* Glow effect on hover */}
                      {isHovered && (
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-400/20 to-purple-400/20 blur-lg opacity-50 animate-pulse"></div>
                      )}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* Enhanced shadow and glow effects */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 blur-xl opacity-50 -z-10"></div>
          <div className="absolute inset-0 rounded-2xl bg-black/20 blur-2xl -z-20"></div>
        </div>
      </nav>
    </>
  );
}