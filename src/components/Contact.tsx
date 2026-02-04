import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Phone, Mail, MapPin } from 'lucide-react';
export function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    service: 'Web Development',
    message: ''
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formState);
    alert('Thank you! We will get back to you shortly.');
  };
  return (
    <section className="py-24 bg-white" id="contact">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{
              opacity: 0,
              x: -20
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.6
            }}>

            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-6">
              Let's Start Your Project
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Ready to take your academic or business projects to the next
              level? Contact us today for a free consultation.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 p-3 bg-green-100 text-green-600 rounded-lg">
                  <Phone className="w-6 h-6" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-slate-900">
                    WhatsApp / Phone
                  </h3>
                  <p className="text-slate-600 mt-1">075 093 7116</p>
                  <p className="text-sm text-slate-500 mt-1">
                    Available 24/7 for urgent queries
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 p-3 bg-blue-100 text-blue-600 rounded-lg">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-slate-900">Email</h3>
                  <p className="text-slate-600 mt-1">
                    assignmentassistant23@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 p-3 bg-purple-100 text-purple-600 rounded-lg">
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-slate-900">
                    Location
                  </h3>
                  <p className="text-slate-600 mt-1">
                    Sri Lanka
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{
              opacity: 0,
              x: 20
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.6
            }}
            className="bg-slate-50 p-8 rounded-2xl shadow-lg border border-slate-100">

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-slate-700 mb-1">

                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                  placeholder="John Doe"
                  value={formState.name}
                  onChange={(e) =>
                  setFormState({
                    ...formState,
                    name: e.target.value
                  })
                  } />

              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-slate-700 mb-1">

                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                  placeholder="john@example.com"
                  value={formState.email}
                  onChange={(e) =>
                  setFormState({
                    ...formState,
                    email: e.target.value
                  })
                  } />

              </div>

              <div>
                <label
                  htmlFor="service"
                  className="block text-sm font-medium text-slate-700 mb-1">

                  Service Interested In
                </label>
                <select
                  id="service"
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-white"
                  value={formState.service}
                  onChange={(e) =>
                  setFormState({
                    ...formState,
                    service: e.target.value
                  })
                  }>

                  <option>Web Development</option>
                  <option>Mobile App Development</option>
                  <option>Software Development</option>
                  <option>UI/UX Engineering</option>
                  <option>Research Supporting</option>
                  <option>Academic Writing</option>
                  <option>Creative Presentations</option>
                  <option>Advanced Data Analysis</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-slate-700 mb-1">

                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all resize-none"
                  placeholder="Tell us about your project..."
                  value={formState.message}
                  onChange={(e) =>
                  setFormState({
                    ...formState,
                    message: e.target.value
                  })
                  } />

              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center px-8 py-4 text-base font-semibold text-white transition-all duration-200 bg-blue-600 rounded-lg hover:bg-blue-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">

                Send Message
                <Send className="w-5 h-5 ml-2" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>);

}