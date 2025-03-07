import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Car, Map, Shirt, Clock, Mountain, Phone } from 'lucide-react';

const services = [
  {
    title: 'Travel Services',
    icon: Car,
    items: [
      'Jeep & vehicle bookings',
      'Permit assistance',
      'Guided tours',
      'Airport transfers',
    ],
  },
  {
    title: 'Guest Services',
    icon: Clock,
    items: [
      '24/7 room service',
      'Laundry service',
      'Hot water available',
      'Secure parking',
    ],
  },
  {
    title: 'Tourist Support',
    icon: Map,
    items: [
      'Permit applications',
      'Travel planning',
      'Local guide arrangement',
      'Currency exchange',
    ],
  },
];

const attractions = [
  {
    name: 'Dudhpokhari',
    distance: '2 hours',
    image: 'https://images.unsplash.com/photo-1501555088652-021faa106b9b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
  },
  {
    name: 'Peace Hill',
    distance: '30 minutes',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
  },
  {
    name: 'Ghale Gaun',
    distance: '3 hours',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
  },
  {
    name: 'Bhujung',
    distance: '2.5 hours',
    image: 'https://images.unsplash.com/photo-1738459591584-b2f0fdbd7824?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <section id="services" className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Our Services
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-lg text-gray-600 dark:text-gray-300"
          >
            Making your stay comfortable and memorable
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-lg"
            >
              <div className="flex items-center mb-4">
                <service.icon className="w-6 h-6 text-emerald-500 mr-2" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {service.title}
                </h3>
              </div>
              <ul className="space-y-2">
                {service.items.map((item, idx) => (
                  <li key={idx} className="flex items-center text-gray-600 dark:text-gray-300">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-16"
        >
          <motion.h3 
            variants={itemVariants}
            className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center"
          >
            Nearby Attractions
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {attractions.map((attraction, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative overflow-hidden rounded-xl shadow-lg group"
              >
                <img
                  src={attraction.image}
                  alt={attraction.name}
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                  <h4 className="text-xl font-semibold text-white mb-2">
                    {attraction.name}
                  </h4>
                  <p className="text-white/80 flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    {attraction.distance} away
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
