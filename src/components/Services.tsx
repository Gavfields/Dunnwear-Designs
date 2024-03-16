import React from "react";
import { Hammer, Brush, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { Element } from "react-scroll";

const services = [
  {
    icon: <Hammer className="text-4xl mb-4" />,
    title: "Custom Carpentry",
    description:
      "Bespoke carpentry solutions tailored to your specifications and needs.",
  },
  {
    icon: <Brush className="text-4xl mb-4" />,
    title: "Painting & Finishing",
    description:
      "High-end finishing and painting services to perfect and protect your projects.",
  },
  {
    icon: <Clock className="text-4xl mb-4" />,
    title: "Restoration Services",
    description:
      "Expert restoration services to bring timeless pieces back to their former glory.",
  },
];

export default function ServicesSection() {
  return (
    <Element name="services">
      <div className="py-20 cursor-default">
        <div className="container mx-auto px-10 sm:px-24 md:px-48 lg:px-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
              Our Services
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mt-4">
              Craftsmanship with precision and care.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white border-solid border-2 dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-110 hover:shadow-2xl transition duration-300"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * (index + 1), duration: 0.25 }}
                viewport={{ once: true }}
              >
                <div className="text-center text-[#875034]">{service.icon}</div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mt-4 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Element>
  );
}
