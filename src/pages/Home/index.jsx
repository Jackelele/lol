import React, { useState } from "react";
import Navbar from "../../components/NavBar";
import { useEffect } from "react";
import Footer from "../../components/Footer";
import { Routes, Route, Link, useLocation } from "react-router-dom";


const Home = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [setPhotographySubPage] = useState(0);
  const id = useLocation();

  useEffect(() => {
    const location = id.pathname.replace(new RegExp("/", "g"), "").slice(3);
    if (["clowns"].includes(location)) setCurrentPage(1);

    if (["clowns"].includes(location)) setPhotographySubPage(0);
  }, [id]);

  return (
    <>
      <Navbar />
      <section className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 mt-20 mb-60">
        <div className="text-white w-full mt-10 sm:mt-44 text-left columns-1 leading-10 tracking-tight m-5 pt-20">
          <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-balance">
            Welcome to lol.elele.dev{" "}
            <span class="text-xl font-bold">Previously known as elele.lol</span>
          </p>
          <p className="text-lg sm:text-xl font-light sm:mt-2 text-gray-400">
            Top Clown Content 🤡 #FreeTheElele
          </p>
          <p className="text-xl mt-10 sm:text-2xl font-bold">
            What is this page?
          </p>
          <p className="text-base font-light w-[100%] md:w-[80%] text-gray-400 text-balance">
            This website is dedicated to the best clown moments, reactions,
            memes and clips by us or witnessed by elele.team. All of this is for
            banter!
          </p>
          <p className="text-xl mt-10 sm:text-2xl font-bold">
            I've been posted, but I want myself removed?
          </p>
          <p className="text-base font-light w-[100%] md:w-[80%] text-gray-400 text-balance">
            We understand that some people may feel embarassed or angry about
            being posted - this is all for jokes. However, if you wish to be
            removed please contact us on discord;{" "}
            <a
              href="discord:/users/377175513372033024"
              target="_blank"
              className="text-[#00cddf] hover:font-bold underline"
            >
              Jackelele
            </a>{" "}
            or email us{" "}
            <a
              href="mailto:support@elele.zip"
              target="_blank"
              className="underline text-[#00cddf] hover:font-bold"
            >
              support@elele.zip
            </a>{" "}
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;
