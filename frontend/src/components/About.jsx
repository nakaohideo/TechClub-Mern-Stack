import { useState } from "react";

function About() {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };
  return (
    <div className=" mb-20 lg:w-6/12 m-auto">
      <div className="flex flex-col font-poppins justify-center items-center p-5 ">
        <h1 className="font-bold text-5xl">Who We Are?</h1>
        <p className="text-gray-800 font-semibold text-2xl mt-5 capitalize">
          Embark on a journey through the digital realms with CTC
        </p>
        <p className="text-gray-600 overflow-hidden capitalize mt-5 whitespace-pre-wrap">
          the heart of innovation at Madda Walabu University. Established in
          2006 EC by a group of visionary students, the Computer Technology Club
          is not just an organization; it's a thriving community fueled by a
          shared passion for technology.
        </p>
        <p className="text-gray-600 overflow-hidden capitalize mt-5 whitespace-pre-wrap">
          Picture this: a group of students, driven by the belief that
          collaboration is key, coming together to explore the uncharted
          territories of the tech universe. For those who revel in the adventure
          of technology, CTC is the haven where dreams take shape in lines of
          code and creativity knows no bounds.
        </p>{" "}
        <p className="text-gray-600 overflow-hidden capitalize mt-5 whitespace-pre-wrap">
          {" "}
          Since its inception, the club has consistently dazzled the entire
          campus with its breathtaking exhibits. Imagine walking into an
          exhibition where students showcase their talents by crafting
          mesmerizing websites, developing cutting-edge mobile apps, unleashing
          captivating games, and putting on tech shows that leave everyone in
          awe.
        </p>
        <p
          className={`text-gray-600 overflow-hidden ${
            showFullDescription ? "h-auto" : "h-0"
          } capitalize mt-5 whitespace-pre-wrap transition-all duration-500`}
        >
          What sets CTC apart is not just the remarkable work it produces but
          the enduring spirit that keeps it alive and thriving. Over the years,
          the club has become a testament to the power of determination and the
          magic that unfolds when like-minded individuals come together. The
          legacy lives on, and CTC continues to be a beacon for those who seek
          to push the boundaries of what's possible. <br /> <br /> In the
          ever-evolving landscape of technology, CTC stands as a timeless
          testament to innovation, collaboration, and the unwavering spirit of
          its members. Join us as we celebrate not just a club, but a journey
          that has stood the test of time, inspiring generation after generation
          to dream big, create boldly, and embrace the limitless possibilities
          of the tech world.
        </p>
        <button
          className="bg-blue-800 p-5 text-white font-bold rounded-xl hover:bg-blue-900 mt-5 mb-5"
          onClick={toggleDescription}
        >
          {showFullDescription ? "Read Less" : "Read More"}
        </button>
      </div>
    </div>
  );
}

export default About;
