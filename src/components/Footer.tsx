import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Github } from 'lucide-react';
export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-white p-1">
                <img
                  src="/assignment_(Logo).png"
                  alt="Logo"
                  className="w-full h-full object-contain" />

              </div>
              <span className="text-xl font-bold text-white">
                Assignment Assistant
              </span>
            </div>
            <p className="text-slate-400 max-w-sm">
              Your trusted partner for academic excellence and cutting-edge
              technology solutions. Serving clients globally with quality and
              precision.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Web, Mobile app, Software development
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                 UI/UX Engineering
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Research Supporting
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Academic Writing
                </a>
              </li>
               <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Creative Presentation
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/AssignmentAssistant" className="hover:text-blue-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://github.com/assignmentassistant23" className="hover:text-blue-400 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
            <div className="mt-4">
              <p className="text-sm">WhatsApp: 075 093 7116</p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} Assignment Assistant. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>);

}