import { motion } from "framer-motion";
import { Element } from "react-scroll";

const image =
  "https://images.unsplash.com/photo-1568259701122-d82953b2b538?q=80&w=1742&auto=format&fit=crop";

const AboutSection = () => {
  return (
    <Element name="about">
      <div className="flex flex-col pt-24 px-10 md:px-10 md:flex-row items-center justify-center gap-16 overflow-hidden">
        <motion.img
          src={image}
          alt="Our Story"
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.8 }}
          className="w-full rounded-lg md:w-1/2 lg:max-w-lg"
          viewport={{ once: true }}
        />
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center md:text-left max-w-md"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl xs:text-xl sm:text-2xl font-bold mb-4">
            The Makers Story
          </h2>
          <p className="text-md sm:text-md md:text-md lg:text-lg">
            At Dunnwear Enterprises, our art is a testament to craftsmanship,
            where precision and passion merge. Each creation is a carefully
            curated piece, reflecting a dedication to quality and the timeless
            beauty of artisanal skill.
          </p>
        </motion.div>
      </div>
    </Element>
  );
};

export default AboutSection;
