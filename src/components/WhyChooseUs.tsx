import React from 'react';
import { motion } from 'framer-motion';
import {
  Clock,
  Award,
  Target,
  Shield,
  DollarSign,
  Video,
  CheckCircle } from
'lucide-react';
const features = [
{
  icon: Clock,
  title: '24/7 Support',
  description: 'Round-the-clock assistance for all your urgent needs.'
},
{
  icon: Award,
  title: 'Expert Writers',
  description: 'Qualified professionals delivering top-tier content.'
},
{
  icon: Target,
  title: 'High Accuracy',
  description: 'Precision and clarity in every project we deliver.'
},
{
  icon: Shield,
  title: 'Turnitin-Free',
  description: '100% original content with plagiarism reports.'
},
{
  icon: DollarSign,
  title: 'Affordable Pricing',
  description: 'Competitive rates without compromising quality.'
},
{
  icon: Video,
  title: 'Free Consultations',
  description: 'Complimentary Zoom calls to discuss requirements.'
},
{
  icon: CheckCircle,
  title: 'Guaranteed Results',
  description: 'Commitment to your satisfaction and success.'
}];

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-4">
            Why Choose Assignment Assistant?
          </h2>
          <p className="text-lg text-slate-600">
            We combine expertise, reliability, and value to deliver exceptional
            results.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) =>
          <motion.div
            key={feature.title}
            initial={{
              opacity: 0,
              scale: 0.95
            }}
            whileInView={{
              opacity: 1,
              scale: 1
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.4,
              delay: index * 0.05
            }}
            className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm border border-slate-100 hover:border-blue-200 hover:shadow-md transition-all">

              <div className="p-3 bg-blue-50 text-blue-600 rounded-full mb-4">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-slate-600">{feature.description}</p>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}