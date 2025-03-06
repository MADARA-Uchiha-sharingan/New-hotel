import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Users, User, Users2, Phone, MapIcon as WhatsappIcon, Mail } from 'lucide-react';

const rooms = [
  {
    type: 'Single Room',
    price: '800',
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    icon: User,
    features: ['Mountain View', 'Free Wi-Fi', 'Room Service', 'Hot Water'],
  },
  {
    type: 'Double Room',
    price: '1200',
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    icon: Users,
    features: ['Balcony', 'Free Wi-Fi', 'Room Service', 'Hot Water'],
  },
  {
    type: 'Family Suite',
    price: '2000',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    icon: Users2,
    features: ['Living Room', 'Mountain View', 'Free Wi-Fi', 'Room Service'],
  },
];

const Rooms = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="rooms" className="py-24 bg-white dark:bg-gray-900">
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
            Our Rooms
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-lg text-gray-600 dark:text-gray-300"
          >
            Choose from our selection of comfortable accommodations
          </motion.p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {rooms.map((room, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative h-64">
                <img 
                  src={room.image} 
                  alt={room.type}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-emerald-500 text-white px-4 py-2 rounded-full">
                  NPR {room.price}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <room.icon className="w-6 h-6 text-emerald-500 mr-2" />
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {room.type}
                  </h3>
                </div>
                <ul className="mb-6 space-y-2">
                  {room.features.map((feature, idx) => (
                    <li key={idx} className="text-gray-600 dark:text-gray-300 flex items-center">
                      <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col space-y-2">
                  <button className="flex items-center justify-center px-4 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors">
                    <Phone className="w-4 h-4 mr-2" />
                    Call to Book: 985-6045417
                  </button>
                  <button className="flex items-center justify-center px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors">
                    <WhatsappIcon className="w-4 h-4 mr-2" />
                    WhatsApp Booking
                  </button>
                  <button className="flex items-center justify-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                    <Mail className="w-4 h-4 mr-2" />
                    Email Inquiry
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Rooms;