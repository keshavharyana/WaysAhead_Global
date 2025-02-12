import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Map, Store, Truck, Video, Notebook as Robot, ArrowRight } from 'lucide-react';

function Services() {
  const services = [
    {
      icon: <ShoppingBag className="h-12 w-12 text-blue-600" />,
      title: 'AI Shop Assist',
      description: 'Intelligent shopping assistance powered by AI to enhance customer experience and boost sales.',
      features: [
        'Smart product recommendations',
        'Virtual shopping assistant',
        'Personalized shopping experience',
        'Real-time inventory management'
      ]
    },
    {
      icon: <Map className="h-12 w-12 text-blue-600" />,
      title: 'Geo-Spatial Analytics',
      description: 'Advanced location-based analytics for better business decisions and market understanding.',
      features: [
        'Location intelligence',
        'Market penetration analysis',
        'Territory optimization',
        'Customer movement patterns'
      ]
    },
    {
      icon: <Store className="h-12 w-12 text-blue-600" />,
      title: 'In-Store Analytics',
      description: 'Comprehensive analytics solution for brick-and-mortar retail optimization.',
      features: [
        'Customer flow analysis',
        'Heat mapping',
        'Conversion tracking',
        'Staff optimization'
      ]
    },
    {
      icon: <Truck className="h-12 w-12 text-blue-600" />,
      title: 'SCM Analytics',
      description: 'Supply chain management analytics for improved efficiency and cost reduction.',
      features: [
        'Demand forecasting',
        'Inventory optimization',
        'Route optimization',
        'Supplier performance analysis'
      ]
    },
    {
      icon: <Video className="h-12 w-12 text-blue-600" />,
      title: 'Video Analytics',
      description: 'Advanced video analysis for security and business intelligence.',
      features: [
        'Object detection',
        'Behavior analysis',
        'Security monitoring',
        'Traffic analysis'
      ]
    },
    {
      icon: <Robot className="h-12 w-12 text-blue-600" />,
      title: 'Robotics Solutions',
      description: 'Cutting-edge robotics solutions for automation and efficiency.',
      features: [
        'Industrial automation',
        'Warehouse robotics',
        'Quality control',
        'Assembly line optimization'
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
          Our AI-Powered Services
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-gray-600"
        >
          Transforming businesses with cutting-edge AI solutions and advanced analytics
        </motion.p>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="p-8">
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-700">
                      <ArrowRight className="h-4 w-4 text-blue-600 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="px-8 pb-8">
                <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors">
                  Learn More
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8">
            Let's discuss how our AI solutions can help you achieve your business goals.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
            Contact Us Today
          </button>
        </div>
      </section>
    </div>
  );
}

export default Services;