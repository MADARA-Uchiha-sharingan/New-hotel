import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Wifi, Car, Coffee, Clock, MapPin, Phone } from 'lucide-react';

const features = [
  { icon: Wifi, title: 'Free Wi-Fi', description: 'High-speed internet throughout the property' },
  { icon: Car, title: 'Free Parking', description: 'Secure parking for all guests' },
  { icon: Coffee, title: 'Unlimited Food', description: 'All-day dining with local specialties' },
  { icon: Clock, title: '24/7 Service', description: 'Round-the-clock guest support' },
  { icon: MapPin, title: 'Prime Location', description: 'Near major attractions' },
  { icon: Phone, title: 'Tour Assistance', description: 'Expert travel planning service' },
];

const About = () => {
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
    <section id="about" className="py-24 bg-gray-50 dark:bg-gray-800">
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
            Welcome to Hotel Pathannapurna
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            Nestled in the heart of the Annapurna region, our hotel combines traditional Nepali hospitality 
            with modern comfort. Experience the magic of the mountains while enjoying our premium amenities 
            and services.
          </motion.p>
        </motion.div>

        <motion.div 
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-emerald-100 dark:bg-emerald-800 rounded-full mb-4 mx-auto">
                <feature.icon className="w-6 h-6 text-emerald-600 dark:text-emerald-300" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 text-center">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-center">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;