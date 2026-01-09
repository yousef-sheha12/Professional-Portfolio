import React from "react";
import instapay from "/src/assets/instapay.png";
import crud from "/src/assets/crud.png";
import menu from "/src/assets/menu.png";
import notes from "/src/assets/notes.png";
import todolist from "/src/assets/todolist.png";
import game from "/src/assets/game.png";
import shopwise from "/src/assets/shopwise.png";
import movie from "/src/assets/movie.png";
import weather from "/src/assets/weather.png";
import clothes from "/src/assets/clothes.png";
import phones from "/src/assets/phones.png";
import bank from "/src/assets/bank.png";
import { SquareArrowOutUpLeft } from "lucide-react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div id="projects">
      <div className="flex flex-col justify-center items-center gap-4 mt-7 p-4">
        <h1 className="text-4xl text-blue-600 font-bold">
          <motion.div
            initial={{ opacity: 0 }}
            transition={{ duration: 3 }}
            whileInView={{ opacity: 1 }}
            animate={{ textShadow: ["0 0 5px blue"] }}
          >
            Projects
          </motion.div>
        </h1>
        <p className="animate__animated animate__fadeInUp animate__fadeInUpBig">
          A showcase of my recent work and personal projects
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-4 ">
        <div className="card hover:scale-105 cursor-pointer bg-gray-400 rounded-2xl transition duration-1000">
          <img src={bank} className="w-full h-60" />
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl text-black font-semibold p-2">
                Bankist App
              </h1>
              <p className="text-gray-600 p-2">
                Bankist App with register(modal) and Login Page
              </p>
            </div>
            <div>
              <a target="blank" href="https://bankist-app-azure.vercel.app/">
                <SquareArrowOutUpLeft
                  size={35}
                  className="text-black cursor-pointer hover:text-blue-700 mr-5"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="card hover:scale-105 cursor-pointer bg-gray-400 rounded-2xl transition duration-1000">
          <img src={phones} className="w-full h-60" />
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl text-black font-semibold p-2">
                Phones E-commerce
              </h1>
              <p className="text-gray-600 p-2">
                Phones E-commerce with [React]
              </p>
            </div>
            <div>
              <a
                target="blank"
                href="https://yousef-sheha12.github.io/Phones-Store/"
              >
                <SquareArrowOutUpLeft
                  size={35}
                  className="text-black cursor-pointer hover:text-blue-700 mr-5"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="card hover:scale-105 cursor-pointer bg-gray-400 rounded-2xl transition duration-1000">
          <img src={clothes} className="w-full h-60" />
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl text-black font-semibold p-2">
                Clothes Website
              </h1>
              <p className="text-gray-600 p-2">Clothes Website with React</p>
            </div>
            <div>
              <a
                target="blank"
                href="https://yousef-sheha12.github.io/Clothes-Website/"
              >
                <SquareArrowOutUpLeft
                  size={35}
                  className="text-black cursor-pointer hover:text-blue-700 mr-5"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="card hover:scale-105 cursor-pointer bg-gray-400 rounded-2xl transition duration-1000">
          <img src={instapay} className="w-full h-60" />
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl text-black font-semibold p-2">
                Instapay Project
              </h1>
              <p className="text-gray-600 p-2">
                Instapay with Login Page [React]
              </p>
            </div>
            <div>
              <a target="blank" href="https://instapay-navy.vercel.app/">
                <SquareArrowOutUpLeft
                  size={35}
                  className="text-black cursor-pointer hover:text-blue-700 mr-5"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="card hover:scale-105 cursor-pointer bg-gray-400 rounded-2xl transition duration-1000">
          <img src={movie} className="w-full h-60" />
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl text-black font-semibold p-2">
                Movie App
              </h1>
              <p className="text-gray-600 p-2">
                Movie App To Save Your Films [React]
              </p>
            </div>
            <div>
              <a
                target="blank"
                href="https://movie-app-blue-kappa-28.vercel.app/"
              >
                <SquareArrowOutUpLeft
                  size={35}
                  className="text-black cursor-pointer hover:text-blue-700 mr-5"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="card hover:scale-105 cursor-pointer bg-gray-400 rounded-2xl transition duration-1000">
          <img src={game} className="w-full h-60" />
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl text-black font-semibold p-2">
                Game Project
              </h1>
              <p className="text-gray-600 p-2">
                Game with 2 Players in [React]
              </p>
            </div>
            <div>
              <a target="blank" href="https://game-sandy-mu.vercel.app/">
                <SquareArrowOutUpLeft
                  size={35}
                  className="text-black cursor-pointer hover:text-blue-700 mr-5"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="card hover:scale-105 cursor-pointer bg-gray-400 rounded-2xl transition duration-1000">
          <img src={notes} className="w-full h-60" />
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl text-black font-semibold p-2">
                Notes App
              </h1>
              <p className="text-gray-600 p-2">
                Notes App and Save Your Notes [React]
              </p>
            </div>
            <div>
              <a target="blank" href="https://notes-app-beta-rosy.vercel.app/">
                <SquareArrowOutUpLeft
                  size={35}
                  className="text-black cursor-pointer hover:text-blue-700 mr-5"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="card hover:scale-105 cursor-pointer bg-gray-400 rounded-2xl transition duration-1000">
          <img src={todolist} className="w-full h-60" />
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl text-black font-semibold p-2">
                To-Do-List App
              </h1>
              <p className="text-gray-600 p-2">
                To-Do-List App and Save Your Tasks [React]
              </p>
            </div>
            <div>
              <a
                target="blank"
                href="https://to-do-list-app-red-six.vercel.app/"
              >
                <SquareArrowOutUpLeft
                  size={35}
                  className="text-black cursor-pointer hover:text-blue-700 mr-5"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="card hover:scale-105 cursor-pointer bg-gray-400 rounded-2xl transition duration-1000">
          <img src={weather} className="w-full h-60" />
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl text-black font-semibold p-2">
                Static Weather App
              </h1>
              <p className="text-gray-600 p-2">
                Static Weather App with [React]
              </p>
            </div>
            <div>
              <a
                target="blank"
                href="https://static-weather-app-git-main-yousef-sheha12s-projects.vercel.app/"
              >
                <SquareArrowOutUpLeft
                  size={35}
                  className="text-black cursor-pointer hover:text-blue-700 mr-5"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="card hover:scale-105 cursor-pointer bg-gray-400 rounded-2xl transition duration-1000">
          <img src={shopwise} className="w-full h-60" />
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl text-black font-semibold p-2">
                Shopwise Landing Page
              </h1>
              <p className="text-gray-600 p-2">Landing Page in [React]</p>
            </div>
            <div>
              <a
                target="blank"
                href="https://yousef-sheha12.github.io/shopwise/"
              >
                <SquareArrowOutUpLeft
                  size={35}
                  className="text-black cursor-pointer hover:text-blue-700 mr-5"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="card hover:scale-105 cursor-pointer bg-gray-400 rounded-2xl transition duration-1000">
          <img src={crud} className="w-full h-60" />
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl text-black font-semibold p-2">
                CRUD App
              </h1>
              <p className="text-gray-600 p-2">CRUD App (fully javaScript)</p>
            </div>
            <div>
              <a
                target="blank"
                href="https://yousef-sheha12.github.io/CRUD-App/"
              >
                <SquareArrowOutUpLeft
                  size={35}
                  className="text-black cursor-pointer hover:text-blue-700 mr-5"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="card hover:scale-105 cursor-pointer bg-gray-400 rounded-2xl transition duration-1000">
          <img src={menu} className="w-full h-60" />
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl text-black font-semibold p-2">
                Cafe Menu
              </h1>
              <p className="text-gray-600 p-2">Menu with Html & Css Only</p>
            </div>
            <div>
              <a target="blank" href="https://yousef-sheha12.github.io/MENU/">
                <SquareArrowOutUpLeft
                  size={35}
                  className="text-black cursor-pointer hover:text-blue-700 mr-5"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
