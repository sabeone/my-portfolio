import React from "react";
import video from "../assets/home-video-bg.mp4";

function Home() {
  return (
    <main className="bg-rich-black">
      <video
        autoPlay
        loop
        muted
        src={video}
        alt="video of stars in space"
        className="absolute object-cover w-full h-full"
      />
      <section className="relative flex-col justify-center items-center min-h-screen pt-12 lg:pt-64 px-8">
        <h1 className="text-center text-6xl text-green-400 font-bold leading-none lg:leading-snug home-name">
          Sabrina Wilson
        </h1>
        <p className="text-base text-justify mx-16 my-12 text-gray-200">
          I'm a recent Georgia Tech grad with a background in interactive design
          and experimental media. I have worked on a variety of projects
          including video games, interactive stories, virtual/mixed reality
          experiences, and UI/UX prototypes. I am currently working on a virtual
          reality movie and making social media content for Tiny Kingdoms, an
          RTS game being developed by MultiPath LLLP.
        </p>
      </section>
    </main>
  );
}

export default Home;
