import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Coffee, Utensils } from 'lucide-react';

const menuCategories = [
  {
    name: 'Local Specialties',
    items: [
      { name: 'Dal Bhat Tarkari', price: '250', description: 'Traditional Nepali meal with lentils, rice, and vegetables' },
      { name: 'Newari Khaja Set', price: '350', description: 'Authentic Newari platter with various items' },
      { name: 'Masu Bhat Set', price: '400', description: 'Rice with your choice of meat curry' },
    ],
  },
  {
    name: 'Fast Food',
    items: [
      { name: 'Chicken Momo', price: '150', description: 'Steamed dumplings with chicken filling' },
      { name: 'Chowmein', price: '120', description: 'Stir-fried noodles with vegetables' },
      { name: 'Thukpa', price: '180', description: 'Tibetan noodle soup' },
    ],
  },
  {
    name: 'Snacks',
    items: [
      { name: 'Pani Puri', price: '80', description: 'Crispy hollow puri filled with spicy water' },
      { name: 'Chatpat', price: '70', description: 'Spicy mix of puffed rice and seasonings' },
      { name: 'French Fries', price: '100', description: 'Crispy potato fries with sauce' },
    ],
  },
];

const Menu = () => {
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
    <section id="menu" className="py-24 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants} className="flex items-center justify-center mb-4">
            <Utensils className="w-8 h-8 text-emerald-500 mr-2" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              Our Menu
            </h2>
          </motion.div>
          <motion.p 
            variants={itemVariants}
            className="text-lg text-gray-600 dark:text-gray-300"
          >
            Discover our delicious selection of local and international cuisine
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {menuCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={itemVariants}
              className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
                {category.name}
              </h3>
              <div className="space-y-4">
                {category.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="border-b border-gray-200 dark:border-gray-600 last:border-0 pb-4 last:pb-0"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-lg font-medium text-gray-900 dark:text-white">
                        {item.name}
                      </h4>
                      <span className="text-emerald-500 font-semibold">
                        NPR {item.price}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-16 text-center"
        >
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center justify-center p-4 bg-emerald-100 dark:bg-emerald-800 rounded-lg"
          >
            <Coffee className="w-6 h-6 text-emerald-500 mr-2" />
            <span className="text-emerald-700 dark:text-emerald-300 font-medium">
              Complimentary tea and coffee available 24/7
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Menu;