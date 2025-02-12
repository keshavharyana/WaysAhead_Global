import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight } from 'lucide-react';

function News() {
  const news = [
    {
      id: 1,
      title: 'WaysAhead Global Launches Revolutionary AI Shop Assistant',
      date: '2024-03-15',
      author: 'Sarah Johnson',
      category: 'Product Launch',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80',
      excerpt: 'Our new AI Shop Assistant is transforming the retail experience with personalized recommendations and real-time inventory management.',
      content: `WaysAhead Global is proud to announce the launch of our revolutionary AI Shop Assistant, 
                a cutting-edge solution that combines advanced machine learning algorithms with intuitive 
                user experience design. This innovative product is set to transform the retail industry 
                by providing personalized shopping experiences and streamlining operations.`
    },
    {
      id: 2,
      title: 'Partnership Announcement: WaysAhead Global Teams Up with Major Retailer',
      date: '2024-03-10',
      author: 'Michael Chen',
      category: 'Partnership',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80',
      excerpt: 'Strategic partnership aims to revolutionize retail analytics and customer experience across 500+ stores.',
      content: `We're excited to announce our strategic partnership with one of the largest retail 
                chains in North America. This collaboration will see our AI solutions deployed across 
                500+ stores, helping to optimize operations and enhance customer experiences.`
    },
    {
      id: 3,
      title: 'WaysAhead Global Recognized as AI Innovation Leader',
      date: '2024-03-05',
      author: 'Emily Rodriguez',
      category: 'Award',
      image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80',
      excerpt: 'Industry recognition for our contributions to AI advancement and practical business applications.',
      content: `WaysAhead Global has been recognized as a leader in AI innovation by the International 
                Technology Council. This prestigious award acknowledges our commitment to advancing AI 
                technology and creating practical solutions for businesses.`
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
          Latest News & Updates
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-gray-600"
        >
          Stay updated with the latest developments at WaysAhead Global
        </motion.p>
      </section>

      {/* Featured News */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {news.slice(0, 2).map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                    {article.category}
                  </span>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {new Date(article.date).toLocaleDateString()}
                  </div>
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-1" />
                    {article.author}
                  </div>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{article.title}</h2>
                <p className="text-gray-600 mb-6">{article.excerpt}</p>
                <button className="text-blue-600 font-semibold flex items-center hover:text-blue-700">
                  Read More <ArrowRight className="h-4 w-4 ml-2" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Recent News */}
      <section className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Recent News</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {news.slice(2).map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                    {article.category}
                  </span>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {new Date(article.date).toLocaleDateString()}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{article.title}</h3>
                <p className="text-gray-600 mb-6">{article.excerpt}</p>
                <button className="text-blue-600 font-semibold flex items-center hover:text-blue-700">
                  Read More <ArrowRight className="h-4 w-4 ml-2" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Stay Updated</h2>
          <p className="text-xl mb-8">
            Subscribe to our newsletter to receive the latest news and updates.
          </p>
          <form className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900"
            />
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default News;