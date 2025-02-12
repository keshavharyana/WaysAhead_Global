import React from 'react';
import { motion } from 'framer-motion';
import {
  Building2,
  ShoppingBag,
  Utensils,
  Car,
  Tv,
  ChevronRight
} from 'lucide-react';

function UseCases() {
  const industries = [
    {
      icon: <Building2 className="h-12 w-12 text-blue-600" />,
      title: 'Fintech',
      description: 'Revolutionizing financial services with AI-powered solutions.',
      cases: [
        {
          title: 'Fraud Detection System',
          description: 'AI-powered system that reduced fraud by 87% for a major bank.',
          metrics: ['87% fraud reduction', '99.9% accuracy', '$2M saved annually']
        },
        {
          title: 'Customer Risk Assessment',
          description: 'Machine learning model for real-time credit risk evaluation.',
          metrics: ['60% faster processing', '45% better accuracy', '30% cost reduction']
        }
      ]
    },
    {
      icon: <ShoppingBag className="h-12 w-12 text-blue-600" />,
      title: 'Retail',
      description: 'Transforming shopping experiences with smart analytics.',
      cases: [
        {
          title: 'Smart Inventory Management',
          description: 'AI-driven system for optimal stock levels and reordering.',
          metrics: ['30% less stockouts', '25% inventory reduction', '40% time saved']
        },
        {
          title: 'Customer Behavior Analysis',
          description: 'Deep learning system for understanding shopping patterns.',
          metrics: ['35% sales increase', '45% better targeting', '28% higher retention']
        }
      ]
    },
    {
      icon: <Utensils className="h-12 w-12 text-blue-600" />,
      title: 'F&B',
      description: 'Optimizing food service operations with intelligent solutions.',
      cases: [
        {
          title: 'Demand Forecasting',
          description: 'AI system for predicting food demand and reducing waste.',
          metrics: ['40% less food waste', '25% cost savings', '95% forecast accuracy']
        },
        {
          title: 'Quality Control',
          description: 'Computer vision system for food quality inspection.',
          metrics: ['99.9% defect detection', '75% faster inspection', '50% labor savings']
        }
      ]
    },
    {
      icon: <Car className="h-12 w-12 text-blue-600" />,
      title: 'Mobility',
      description: 'Advancing transportation with AI and analytics.',
      cases: [
        {
          title: 'Route Optimization',
          description: 'AI algorithm for optimal route planning and execution.',
          metrics: ['30% fuel savings', '25% faster deliveries', '40% efficiency gain']
        },
        {
          title: 'Fleet Management',
          description: 'Predictive maintenance system for vehicle fleets.',
          metrics: ['50% less downtime', '35% maintenance savings', '90% fault prediction']
        }
      ]
    },
    {
      icon: <Tv className="h-12 w-12 text-blue-600" />,
      title: 'Entertainment',
      description: 'Enhancing media experiences with smart technology.',
      cases: [
        {
          title: 'Content Recommendation',
          description: 'AI-powered system for personalized content suggestions.',
          metrics: ['45% higher engagement', '30% longer sessions', '25% better retention']
        },
        {
          title: 'Audience Analytics',
          description: 'Deep learning for understanding viewer behavior.',
          metrics: ['40% better targeting', '35% ad revenue increase', '50% insights gain']
        }
      ]
    }
  ];

  return (
    <div className="py-12 space-y-20">
      {/* Hero Section */}
      <section className="text-center max-w-4xl mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
        >
          Industry Use Cases
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-gray-600"
        >
          Discover how our AI solutions are transforming different industries
        </motion.p>
      </section>

      {/* Industries Section */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="p-8">
                <div className="mb-6">{industry.icon}</div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{industry.title}</h2>
                <p className="text-gray-600 mb-6">{industry.description}</p>
                
                {industry.cases.map((case_, i) => (
                  <div key={i} className="mb-6 last:mb-0">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                      <ChevronRight className="h-5 w-5 text-blue-600 mr-2" />
                      {case_.title}
                    </h3>
                    <p className="text-gray-600 mb-3">{case_.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {case_.metrics.map((metric, j) => (
                        <span
                          key={j}
                          className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm"
                        >
                          {metric}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Industry?
          </h2>
          <p className="text-xl mb-8">
            Let's discuss how our AI solutions can revolutionize your business operations.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
            Schedule a Consultation
          </button>
        </div>
      </section>
    </div>
  );
}

export default UseCases;