import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <div id="skills" className="w-full p-4 mt-5">
      <div className="flex flex-col justify-center items-center gap-4">
        <h1 className="text-4xl text-blue-600 font-bold">
          <motion.div
            initial={{ opacity: 0 }}
            transition={{ duration: 3 }}
            whileInView={{ opacity: 1 }}
            animate={{ textShadow: ["0 0 5px blue"] }}
          >
            Technologies & Skills
          </motion.div>
        </h1>
        <p className="animate__animated animate__fadeInUp animate__fadeInUpBig">
          A comprehensive overview of my technical skills and proficiency levels
        </p>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 mt-7 grid-cols-1 gap-5">
        <div className="bg-gray-400 shadow rounded-2xl p-4 hover:scale-105 cursor-pointer transition duration-1000">
          <h1 className="text-3xl text-black font-bold">Frontend</h1>
          <div className=" flex flex-col gap-3 p-4 text-gray-700">
            <motion.p
              className="text-gray-600 font-medium"
              animate={{
                color: ["#6b7280", "#4f46e5", "#6b7280"], // رمادي → أزرق → رمادي
                textShadow: ["0 0 0px #4f46e5", "0 0 0px #4f46e5"],
              }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                repeatType: "mirror",
              }}
            >
              <p className="hover:text-blue-700 cursor-pointer">Html</p>
              <p className="hover:text-blue-700 cursor-pointer">Css</p>
              <p className="hover:text-blue-700 cursor-pointer">JvaScript</p>
              <p className="hover:text-blue-700 cursor-pointer">Tailwindcss</p>
              <p className="hover:text-blue-700 cursor-pointer">Bootstrap</p>
              <p className="hover:text-blue-700 cursor-pointer">React</p>
            </motion.p>
          </div>
        </div>
        <div className="bg-gray-400 shadow rounded-2xl p-4 hover:scale-105 cursor-pointer transition duration-1000">
          <h1 className="text-3xl text-black font-bold">Backend</h1>
          <div className=" flex flex-col gap-3 p-4 text-gray-600">
            <motion.p
              className="text-gray-600 font-medium"
              animate={{
                color: ["#6b7280", "#4f46e5", "#6b7280"], // رمادي → أزرق → رمادي
                textShadow: ["0 0 0px #4f46e5", "0 0 0px #4f46e5"],
              }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                repeatType: "mirror",
              }}
            >
              <p className="hover:text-blue-700 cursor-pointer">Mongodb</p>
              <p className="hover:text-blue-700 cursor-pointer">Nodejs</p>
              <p className="hover:text-blue-700 cursor-pointer">JavaScript</p>
              <p className="hover:text-blue-700 cursor-pointer">
                Asp .Net Core
              </p>
              <p className="hover:text-blue-700 cursor-pointer">C#</p>
              <p className="hover:text-blue-700 cursor-pointer">Express</p>
              <p className="hover:text-blue-700 cursor-pointer">
                Entity Framework
              </p>
              <p className="hover:text-blue-700 cursor-pointer">SQl</p>
            </motion.p>
          </div>
        </div>
        <div className="bg-gray-400 shadow rounded-2xl p-4 hover:scale-105 cursor-pointer transition duration-1000">
          <h1 className="text-3xl text-black font-bold">Tools</h1>
          <div className=" flex flex-col gap-3 p-4 text-gray-600">
            <motion.p
              className="text-gray-600 font-medium"
              animate={{
                color: ["#6b7280", "#4f46e5", "#6b7280"], // رمادي → أزرق → رمادي
                textShadow: ["0 0 0px #4f46e5", "0 0 0px #4f46e5"],
              }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                repeatType: "mirror",
              }}
            >
              <p className="hover:text-blue-700 cursor-pointer">Git</p>
              <p className="hover:text-blue-700 cursor-pointer">Figma</p>
              <p className="hover:text-blue-700 cursor-pointer">Postman</p>
            </motion.p>
          </div>
        </div>
        <div className="bg-gray-400 shadow rounded-2xl p-4 hover:scale-105 cursor-pointer transition duration-1000">
          <h1 className="text-3xl text-black font-bold">Problem Solving</h1>
          <div className=" flex flex-col gap-3 p-4 text-gray-600">
            <motion.p
              className="text-gray-600 font-medium"
              animate={{
                color: ["#6b7280", "#4f46e5", "#6b7280"], // رمادي → أزرق → رمادي
                textShadow: ["0 0 0px #4f46e5", "0 0 0px #4f46e5"],
              }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                repeatType: "mirror",
              }}
            >
              <p className="hover:text-blue-700 cursor-pointer">C++</p>
              <p className="hover:text-blue-700 cursor-pointer">OOP</p>
              <p className="hover:text-blue-700 cursor-pointer">Java</p>
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
