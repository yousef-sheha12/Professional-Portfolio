import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import img from "/src/assets/myPhoto.jpg";
const LandingPage = () => {
  const scrollToSection = (id) => {
    const section = document.querySelector(id);
    section?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div id="home" className="w-full p-5 mt-10 h-vh flex">
      <div className="flex">
        <div className=" flex flex-col justify-center items-center lg:items-start my-3 gap-4">
          <motion.div
            initial={{ opacity: 0 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1 }}
            animate={{ scale: 0.9, textShadow: ["0 0 5px"] }}
          >
            <h1 className="text-blue-400">Hi , My Name is </h1>
            <span className="text-white text-3xl font-bold">YOUSEF SHEHA</span>
            <h2 className="text-gray-400 my-5 text-2xl">
              Full Stack .Net Developer
            </h2>
          </motion.div>
          <p className="mt-3 text-[20px] text-gray-300 animate__animated animate__fadeInUp animate__fadeInUpBig">
            I'm a passionate Full Stack .NET Developer, currently pursuing
            Computer Science at El Menoufia University. I believe great software
            should be efficient, scalable, and crafted with clarity and purpose.
          </p>

          <div className="mt-10 flex gap-3  ">
            <motion.button animate={{ boxShadow: ["0 0 10px #00f"] }}>
              <button
                className="btn btn-primary"
                onClick={() => scrollToSection("#projects")}
              >
                View My Work
              </button>
            </motion.button>
            <motion.button
              transition={{ duration: 5 }}
              animate={{ boxShadow: ["0 0 10px #0ff"] }}
            >
              <button
                className="btn btn-accent"
                onClick={() => scrollToSection("#contact")}
              >
                Contact Me
              </button>
            </motion.button>
          </div>
          <div className=" mt-6 flex gap-5  items-start">
            <motion.div
              whileHover={{
                scale: 1.2,
                boxShadow: "0 0 15px #3b82f6",
              }}
              transition={{ type: "spring", stiffness: 200 }}
              className="p-2 rounded-full cursor-pointer"
            >
              <a
                target="_blank"
                href="https://www.linkedin.com/in/yousef-sheha-1a9316375?utm_source=share&amp;utm_campaign=share_via&amp;utm_content=profile&amp;utm_medium=android_app"
              >
                <Linkedin
                  size={30}
                  className="cursor-pointer hover:text-blue-500"
                />
              </a>
            </motion.div>
            <motion.div
              whileHover={{
                scale: 1.2,
                boxShadow: "0 0 15px #3b82f6",
              }}
              transition={{ type: "spring", stiffness: 200 }}
              className="p-2 rounded-full cursor-pointer"
            >
              <a target="_blank" href="mailto:sheha8757@gmail.com">
                <Mail
                  size={30}
                  className="cursor-pointer hover:text-blue-500"
                />
              </a>
            </motion.div>
            <motion.div
              whileHover={{
                scale: 1.2,
                boxShadow: "0 0 15px #3b82f6",
              }}
              transition={{ type: "spring", stiffness: 200 }}
              className="p-2 rounded-full cursor-pointer"
            >
              <a target="_blank" href="https://github.com/yousef-sheha12">
                <Github
                  size={30}
                  className="cursor-pointer hover:text-blue-500"
                />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="hidden lg:flex">
        <img src={img} className="rounded-full " />
      </div>
    </div>
  );
};

export default LandingPage;
