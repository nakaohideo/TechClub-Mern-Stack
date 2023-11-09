import React, { useState } from "react";
// import style from "./style.css";

const FAQ = () => {
  const faqData = [
    {
      question: "What is the Computer Technology Club (CTC)?",
      answer: (
        <>
          The Computer Technology Club (CTC) is a welcoming community dedicated
          to fostering tech enthusiasm and knowledge. Whether you're a beginner
          or an experienced coder, CTC provides a space for learning, sharing,
          and connecting with fellow tech enthusiasts.
        </>
      ),
    },
    {
      question: "What services does CTC offer?",
      answer: (
        <>
          CTC offers a range of services, including maintenance support, course
          tutorials, IT services, and programming resources. We aim to provide a
          comprehensive set of resources to support students in their tech
          journey.
        </>
      ),
    },
    {
      question: "How can I get involved with CTC?",
      answer: (
        <>
          Getting involved with CTC is easy! Attend our workshops, participate
          in discussions, and explore the diverse opportunities available. Join
          our community, connect with like-minded individuals, and embark on a
          rewarding tech journey with us.
        </>
      ),
    },
    {
      question: "Is CTC only for experienced programmers?",
      answer: (
        <>
          Not at all! CTC is inclusive and welcomes individuals at all skill
          levels. Whether you're a beginner or an advanced programmer, you'll
          find resources, support, and a community that suits your needs.
        </>
      ),
    },
    {
      question: "How can I stay updated on CTC events and activities?",
      answer: (
        <>
          Stay in the loop by following our official communication channels.
          Join our mailing list, follow us on social media, and regularly check
          our website for updates on events, workshops, and other exciting
          activities.
        </>
      ),
    },
    {
      question: "Can I suggest topics for workshops or activities?",
      answer: (
        <>
          Absolutely! We encourage members to suggest topics for workshops or
          activities. Your input is valuable, and it helps us tailor our
          offerings to the interests and needs of the community. Feel free to
          share your ideas with us!
        </>
      ),
    },
    {
      question: "What is the Tech Playground?",
      answer: (
        <>
          The Tech Playground is a virtual space where tech enthusiasts gather
          to explore, share, and learn about all things related to technology.
          It's a community-driven initiative where we embrace curiosity and
          foster a supportive environment for everyone interested in tech.
        </>
      ),
    },
    {
      question: "How can I join the Tech Playground?",
      answer: (
        <>
          Joining the Tech Playground is easy! Simply navigate to our website
          and look for the "Join" or "Sign Up" button. Follow the prompts to
          become a part of our tech-savvy community. We welcome beginners and
          seasoned tech enthusiasts alike!
        </>
      ),
    },
    {
      question: "What kind of activities does the club offer?",
      answer: (
        <>
          The club offers a variety of activities, including coding tutorials,
          tech discussions, workshops, and more. Whether you're into
          programming, web development, or exploring emerging technologies,
          there's something for everyone. Check our events section for upcoming
          activities!
        </>
      ),
    },
    {
      question: "How can I get involved in the community?",
      answer: (
        <>
          Getting involved is easy! Join our online forums, participate in
          discussions, and attend virtual meetups. Don't hesitate to ask
          questions or share your tech journey. The more engaged you are, the
          richer your experience in the community will be.
        </>
      ),
    },
    {
      question: "Is the club only for experienced programmers?",
      answer: (
        <>
          No, not at all! The Tech Playground is for everyone, regardless of
          your level of experience. Whether you're a beginner or an experienced
          programmer, you'll find resources, support, and like-minded
          individuals to connect with.
        </>
      ),
    },
    {
      question: "How can I contribute to the club?",
      answer: (
        <>
          We encourage members to contribute by sharing their knowledge,
          participating in discussions, and even hosting workshops. If you have
          a tech-related topic you're passionate about, let us know, and we can
          work together to bring it to the community.
        </>
      ),
    },
    {
      question: "What makes the Tech Playground unique?",
      answer: (
        <>
          The unique aspect of the Tech Playground lies in its diverse and
          inclusive community. We believe in making tech accessible to everyone,
          fostering a collaborative spirit, and creating a space where
          individuals can learn, grow, and feel at home in the world of
          technology.
        </>
      ),
    },
    // Add more questions and answers here...
  ];

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredFAQ, setFilteredFAQ] = useState(faqData);
  const [expandedQuestionIndex, setExpandedQuestionIndex] = useState(null);
  const [itemFound, setItemFound] = useState(true);

  const handleSearchChange = (e) => {
    const query = e.target.value.toLowerCase();
    const filteredItems = faqData.filter((item) =>
      item.question.toLowerCase().includes(query)
    );

    setSearchQuery(query);
    setFilteredFAQ(filteredItems);
  };

  const toggleAnswer = (index) => {
    if (expandedQuestionIndex === index) {
      // Clicking the same question again, so close it.
      setExpandedQuestionIndex(null);
    } else if (index >= 0 && index < faqData.length) {
      // Clicking a different question, so close the currently open one (if any) and open the new one.
      setExpandedQuestionIndex(index);
    } else {
      // Item not found, update state to indicate that the item is not found
      setItemFound(false);
    }
  };

  return (
    <div className="w-full min-h-[calc(100vh-150px)] overflow-y-auto">
      <div className="w-[80%] lg:w-[50%] md:w-[80%] mx-auto mt-8 p-4 overflow-y-hidden">
        <h1 className="text-3xl font-semibold mb-4 text-[#396E8D]">
          Frequently Asked Questions
        </h1>

        {/* Search input */}
        <input
          type="text"
          className="mb-4 p-2 rounded-lg shadow w-10/12 m-auto flex items-center justify-center"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearchChange}
        />

        <ul>
          {filteredFAQ.length > 0 ? (
            filteredFAQ.map((item, index) => (
              <li key={index} className="mb-4">
                <button
                  className="text-left w-full text-[#396E8D] bg-white hover:bg-gray-100 p-2 rounded-lg shadow transition-colors duration-300 ease-in-out"
                  onClick={() => toggleAnswer(index)}
                >
                  {item.question}
                </button>
                {/* Use conditional rendering to display the answer */}
                {expandedQuestionIndex === index && (
                  <div className="p-2 text-left text-[#396E8D] mt-2 bg-gray-100 rounded-lg transition-opacity duration-300 ease-in-out opacity-100">
                    {item.answer}
                  </div>
                )}
              </li>
            ))
          ) : (
            /* Display the "Item not found" message */
            <li className="mb-4 font-semibold text-2xl text-[#396E8D] flex items-center justify-center opacity-30">
              <div className="flex flex-col justify-center items-center font-normal">
                <p class="text-center text-lg mb-2">
                  Your search -{searchQuery} - did not match any documents.
                </p>
                <div class="text-start mt-5 sm:text-sm lg:text-base md:text-base">
                  <p class="text-center text-lg font-semibold mb-2">
                    Suggestions:
                  </p>
                  <ul class=" text-lg list-disc list-inside">
                    <li class="mb-1">
                      Make sure that all words are spelled correctly.
                    </li>
                    <li class="mb-1">Try different keywords.</li>
                    <li class="mb-1">Try more general keywords.</li>
                  </ul>
                </div>
              </div>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default FAQ;
