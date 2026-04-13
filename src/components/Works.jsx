import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({ index, name, description, tags, image, slug }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (slug) navigate(`/project/${slug}`);
  };

  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.1, 0.75)}
      onClick={handleClick}
      className="w-full xs:w-[360px]"
    >
      <Tilt
        options={{
          max: 15,
          scale: 1,
          speed: 450,
          glare: false,
          "max-glare": 0,
        }}
        className="bg-tertiary p-5 rounded-2xl w-full cursor-pointer group"
      >
        {/* Image */}
        <div className="relative w-full h-[230px] overflow-hidden rounded-2xl">
          <img
            src={image}
            alt={name}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500"
          />

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300-2xl flex items-center justify-center">
            <span
              className="text-white font-semibold text-[14px] tracking-wide
                             border border-white/40 px-4 py-2 rounded-full
                             backdrop-blur-sm"
            >
              View Details →
            </span>
          </div>
        </div>

        {/* Info */}
        <div className="mt-5">
          <h3
            className="text-white font-bold text-[24px] group-hover:text-[#ff9100]
                         transition-colors duration-300"
          >
            {name}
          </h3>
          <p className="mt-2 text-secondary text-[14px] leading-relaxed line-clamp-3">
            {description}
          </p>
        </div>

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>

        {/* Click hint */}
        <div
          className="mt-4 flex items-center gap-1 text-[#ff9100]/60
                        text-[12px] group-hover:text-[#ff9100]
                        transition-colors duration-300"
        >
          <span>View project details</span>
          <span className="group-hover:translate-x-1 transition-transform duration-300">
            →
          </span>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => (
  <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>My Personal Projects</p>
      <h2 className={styles.sectionHeadText}>Projects</h2>
    </motion.div>

    <div className="w-full flex">
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Most of these projects were written in Java, Python, HTML, PHP, SQL. My
        endeavour in these projects were inclusive of interests in game and web
        development, work projects and learning process. I have also explored in
        the cybersecurity industry to gain further knowledge as an addition to
        my university courses during my diploma in Network Security.
      </motion.p>
    </div>

    <div className="mt-20 flex flex-wrap justify-center gap-7">
      {projects.map((project, index) => (
        <ProjectCard key={`project-${index}`} index={index} {...project} />
      ))}
    </div>
  </>
);

// Bottom of Works.jsx
export default SectionWrapper(Works, "projects");
