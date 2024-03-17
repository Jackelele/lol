import React from "react";
import Navbar from "../../components/NavBar";
import Footer from "../../components/Footer";

export default function About() {
  return (
    <>
      <Navbar />
      <section className="flex justify-center items-center h-auto max-w-[1240px] mx-auto px-4 mt-20 sm:mt-20">
        <div className="text-white w-full sm:w-11/12 md:w-full lg:w-full xl:w-full mt-10 sm:mt-20 md:mt-10 lg:mt-5 xl:mt-5 text-left leading-10 tracking-tight m-5">
          <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-balance">
            About Us
          </p>
          <p className="text-lg sm:text-xl font-light sm:mt-2 text-gray-400">
            A little about why we do Elele.lol and how it started.
          </p>
          <p className="text-xl mt-10 sm:text-2xl font-bold">
            What is Elele.LOL?
          </p>
          <p className="text-base font-light w-full sm:w-11/12 md:w-4/5 lg:w-3/4 xl:w-3/4 text-gray-400 text-balance">
            Elele.lol was the website used below lol.elele.dev - however, we decided to move it over to our elele.dev domain due to we didn't see the need for a new domain just for the site. We started elele.lol primarily as a Discord Channel on our Discord Server, then we decided due to us having a lot of images sent by multiple people, we wanted to create a collection of all our best clown moments on a website.
          </p>
          <p className="text-xl mt-10 sm:text-2xl font-bold">
            Who is the Elele Team?
          </p>
          <p className="text-base font-light w-full sm:w-11/12 md:w-4/5 lg:w-3/4 xl:w-3/4 text-gray-400 text-balance">
            A really good question. We have a website here: <a href="https://elele.team" target="_blank" className="underline text-[#00cddf] hover:font-bold">elele.team</a>. You should be able to find information here if our website is live.
          </p>
          <p className="text-xl mt-10 sm:text-2xl font-bold">
            I have a clown moment, where can I send it?
          </p>
          <p className="text-base font-light w-full sm:w-11/12 md:w-4/5 lg:w-3/4 xl:w-3/4 text-gray-400 text-balance">
            Another solid question; but we are trying to keep all of these moments and clips to be something that has been witnessed, recorded or screenshotted by a member of the team. You may find yourself on there.
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
}
