import { ChevronsUp, CodeXml, Handshake, Palette } from "lucide-react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import resume from '/src/assets/resume.png';
const About = () => {
  return (
    <div id="about" className="w-full p-4 lg:mt-20 ">
      <div className="flex flex-col gap-4 justify-center items-center ">
        <h1 className=" text-4xl text-blue-600 font-bold ">
          <motion.div
            initial={{ opacity: 0 }}
            transition={{ duration: 3 }}
            whileInView={{ opacity: 1 }}
            animate={{ textShadow: ["0 0 5px blue"] }}
          >
            About Me
          </motion.div>
        </h1>
        <p className="animate__animated animate__fadeInUp animate__fadeInUpBig">
          I'm a dedicated developer with a passion for creating innovative
          solutions. With years of experience in both frontend and backend
          development, I bring ideas to life through code.
        </p>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 p-4 grid-cols-1 gap-5 mt-5 md:mt-20">
        <div>
          <h1 className="mb-5">
            <motion.ul
              transition={{ duration: 4, repeat: Infinity }}
              whileInView={{ rotateX: 360 }}
            >
              <CodeXml
                size={60}
                className=" bg-gray-400 rounded-4xl text-black p-2"
              />
            </motion.ul>
          </h1>
          <h1 className="text-2xl text-blue-400 font-semibold">Clean Code</h1>
          <p className="text-gray-400">
            Writing maintainable, scalable, and well-documented code.
          </p>
        </div>
        <div>
          <h1 className="mb-5">
            <motion.ul
              transition={{ duration: 4, repeat: Infinity }}
              whileInView={{ rotateX: 360 }}
            >
              <ChevronsUp
                size={60}
                className=" bg-gray-400 rounded-4xl text-black p-2"
              />
            </motion.ul>
          </h1>
          <h1 className="text-2xl text-blue-400 font-semibold">
            High Performance
          </h1>
          <p className="text-gray-400">
            Optimizing for speed and efficiency across all devices.
          </p>
        </div>
        <div>
          <h1 className="mb-5">
            <motion.ul
              transition={{ duration: 4, repeat: Infinity }}
              whileInView={{ rotateX: 360 }}
            >
              <Palette
                size={60}
                className=" bg-gray-400 rounded-4xl text-black p-2"
              />
            </motion.ul>
          </h1>
          <h1 className="text-2xl text-blue-400 font-semibold">
            Modern Design
          </h1>
          <p className="text-gray-400">
            Creating beautiful and intuitive user interfaces.
          </p>
        </div>
        <div>
          <h1 className="mb-5">
            <motion.ul
              transition={{ duration: 4, repeat: Infinity }}
              whileInView={{ rotateX: 360 }}
            >
              <Handshake
                size={60}
                className=" bg-gray-400 rounded-4xl text-black p-2"
              />
            </motion.ul>
          </h1>
          <h1 className="text-2xl text-blue-400 font-semibold">
            Collaboration
          </h1>
          <p className="text-gray-400">
            Working effectively with teams and stakeholders.
          </p>
        </div>
      </div>
      <div className="p-4 flex flex-col gap-4 justify-center items-center">
        <h1 className="text-2xl text-blue-700 font-semibold">Resume</h1>
        <img src={resume} />
      </div>
    </div>
  );
};

export default About;
