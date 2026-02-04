import React from 'react';
import { motion } from 'framer-motion';
import {
  Code,
  Smartphone,
  FileText,
  Server,
  Palette,
  Presentation } from
'lucide-react';
const services = [
{
  icon: Code,
  title: 'Web, Mobile App & Software Development',
  description:
  'We design and develop secure, scalable, and high-performance web platforms, mobile applications, and custom software solutions tailored to meet business needs, improve user experience, and drive digital growth.',
  color: 'bg-blue-100 text-blue-600'
},
{
  icon: Smartphone,
  title: 'UI/UX Engineering',
  description:
  'We create intuitive, user-centered interface and experience designs that enhance usability, accessibility, and engagement through research-driven design and modern prototyping techniques.',
  color: 'bg-indigo-100 text-indigo-600'
},
{
  icon: FileText,
  title: 'Research Supporting',
  description:
  'We provide end-to-end research assistance, including topic selection, literature review, methodology development, data collection guidance, and report structuring to support academic and professional research projects.',
  color: 'bg-green-100 text-green-600'
},
{
  icon: Server,
  title: 'Academic Writing',
  description:
  'We deliver high-quality academic writing services across all disciplines, including computing, business, science, engineering, nursing, and related fields, ensuring well-researched, properly structured, and plagiarism-free content aligned with institutional standards.',
  color: 'bg-orange-100 text-orange-600'
},
{
  icon: Palette,
  title: 'Creative Presentation',
  description:
  'We design visually engaging and professional presentations that communicate ideas clearly through impactful layouts, infographics, and storytelling for academic, corporate, and project-based needs.',
  color: 'bg-purple-100 text-purple-600'
},
{
  icon: Presentation,
  title: 'Advanced Data Analysis',
  description:
  'We perform in-depth data analysis using statistical and analytical tools to uncover insights, visualize trends, and support informed decision-making for academic, business, and research purposes.',
  color: 'bg-pink-100 text-pink-600'
}];

export function Services() {
  return (
    <section className="py-24 bg-white" id="services">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-4">
            Our Professional Services
          </h2>
          <p className="text-lg text-slate-600">
            Comprehensive digital and academic solutions designed to help you
            succeed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) =>
          <motion.div
            key={service.title}
            initial={{
              opacity: 0,
              y: 20
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.5,
              delay: index * 0.1
            }}
            whileHover={{
              y: -5
            }}
            className="group relative p-8 bg-white rounded-2xl border border-slate-100 shadow-lg hover:shadow-xl transition-all duration-300">

              <div
              className={`inline-flex items-center justify-center p-3 rounded-xl mb-6 ${service.color} group-hover:scale-110 transition-transform duration-300`}>

                <service.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}