import { Mail, MapPin, Phone } from "lucide-react";
import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div id="contact">
      <div className="flex flex-col justify-center items-center gap-4 mt-10 p-4">
        <h1 className="text-4xl text-blue-600 font-bold animate__animated animate__fadeInUp animate__fadeInUpBig">
          <motion.div
            initial={{ opacity: 0 }}
            transition={{ duration: 3 }}
            whileInView={{ opacity: 1 }}
            animate={{ textShadow: ["0 0 5px blue"] }}
          >
            Contacts
          </motion.div>
        </h1>
        <div className="card flex flex-row gap-5 bg-gray-100 text-gray-700 p-4 md:w-100 w-full">
          <motion.div
            animate={{
              boxShadow: [
                "0 0 0px rgba(0,0,0,0)",
                "0 0 12px rgba(99,102,241,0.8)",
                "0 0 0px rgba(0,0,0,0)",
              ],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="p-3 bg-white rounded-xl"
          >
            <Mail size={30} className="text-indigo-600" />
          </motion.div>
          <div>
            <p>Email</p>
            <h1 className="font-bold">joesheha8757@gmail.com</h1>
          </div>
        </div>
        <div className="card flex flex-row gap-5 bg-gray-100 text-gray-700 p-4 md:w-100 w-full">
          <motion.div
            animate={{
              boxShadow: [
                "0 0 0px rgba(0,0,0,0)",
                "0 0 12px rgba(99,102,241,0.8)",
                "0 0 0px rgba(0,0,0,0)",
              ],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="p-3 bg-white rounded-xl"
          >
            <Phone size={30} className="text-indigo-600" />
          </motion.div>
          <div>
            <p>Phone</p>
            <h1 className="font-bold">+201092632833</h1>
          </div>
        </div>
        <div className="card flex flex-row gap-5 bg-gray-100 text-gray-700 p-4 md:w-100 w-full">
          <motion.div
            animate={{
              boxShadow: [
                "0 0 0px rgba(0,0,0,0)",
                "0 0 12px rgba(99,102,241,0.8)",
                "0 0 0px rgba(0,0,0,0)",
              ],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="p-3 bg-white rounded-xl"
          >
            <MapPin size={30} className="text-indigo-600" />
          </motion.div>
          <div>
            <p>Location</p>
            <h1 className="font-bold">Menoufia , Egypt</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
