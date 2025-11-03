// src/components/Problem.jsx
import { useEffect, useRef, useState } from "react";

const Problem = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // --------------------------------------------------------------
  // IntersectionObserver – runs once when the component mounts
  // --------------------------------------------------------------
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Stop observing after the first reveal (optional)
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,          // viewport
        threshold: 0.2,      // 20% of the element must be visible
        rootMargin: "0px 0px -100px 0px",
      }
    );

    const current = sectionRef.current;
    if (current) observer.observe(current);

    // Cleanup
    return () => {
      if (current) observer.unobserve(current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="problem"
      className={`py-20 bg-white transition-all duration-800 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="max-w-6xl mx-auto px-5">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-10">
          The Problem We're Solving
        </h2>

        <div className="grid md:grid-cols-2 rounded-3xl overflow-hidden shadow-2xl">
          {/* Left column */}
          <div className="bg-slate-800 p-16 text-white flex items-center justify-center">
            <div>
              <h3 className="text-3xl font-bold mb-5">
                Talent is Everywhere. Opportunity Isn't.
              </h3>
              <p className="mb-4">
                In Ghana, many talented young people live on less than $3 per day.
              </p>
              <p>
                At Codetrain, some of our brightest students couldn't afford tuition —
                yet we never turned them away.
              </p>
            </div>
          </div>

          {/* Right column */}
          <div className="bg-gradient-to-br from-yellow-400 to-amber-400 p-16 text-gray-900 flex items-center justify-center">
            <div>
              <h3 className="text-3xl font-bold mb-5">Your Impact</h3>
              <p className="font-bold">
                Today, over GHS 800,000 ($73,000) in student fees remain unpaid.
              </p>
              <p className="mt-5">
                With your help, we can clear these arrears and open the door for 100
                new scholarships in 2026.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;