import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  FaStar,
  FaBirthdayCake,
  FaHeart,
} from "react-icons/fa";
import "../styles/AgeCountdown.css";

function AgeCountdown({ friendName = "Birthday Star" }) {
  const [age, setAge] = useState(0);

  const sectionRef = useRef(null);

  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.2,
  });

  /* =====================================
     AGE COUNTER
  ===================================== */

  useEffect(() => {
    if (!isInView) return;

    const targetAge = 22;
    const duration = 1800;

    const startTime = performance.now();

    let animationFrame;

    const updateAge = (currentTime) => {
      const elapsed = currentTime - startTime;

      const progress = Math.min(elapsed / duration, 1);

      // Smooth easing
      const easedProgress =
        1 - Math.pow(1 - progress, 3);

      const currentAge = Math.floor(
        easedProgress * targetAge
      );

      setAge(currentAge);

      if (progress < 1) {
        animationFrame =
          requestAnimationFrame(updateAge);
      } else {
        setAge(targetAge);
      }
    };

    animationFrame =
      requestAnimationFrame(updateAge);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [isInView]);

  /* =====================================
     FLOATING STARS
  ===================================== */

  const stars = Array.from({ length: 16 });

  return (
    <section
      ref={sectionRef}
      id="age-section"
      className="age-section"
    >
      {/* Background Glows */}

      <div className="age-glow age-glow-one" />
      <div className="age-glow age-glow-two" />
      <div className="age-glow age-glow-three" />

      {/* Floating Stars */}

      <div
        className="age-floating-stars"
        aria-hidden="true"
      >
        {stars.map((_, index) => (
          <motion.span
            key={index}
            className={`age-star age-star-${index + 1}`}
            animate={{
              y: [0, -12, 0],
              rotate: [0, 180, 360],
              opacity: [0.3, 1, 0.3],
              scale: [0.8, 1.1, 0.8],
            }}
            transition={{
              duration: 3 + (index % 4),
              repeat: Infinity,
              delay: index * 0.15,
              ease: "easeInOut",
            }}
          >
            ✦
          </motion.span>
        ))}
      </div>

      {/* Main Card */}

      <motion.div
        className="age-card"
        initial={{
          opacity: 0,
          y: 70,
          scale: 0.92,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        viewport={{
          once: true,
          amount: 0.2,
        }}
        transition={{
          duration: 0.9,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {/* Card Shine */}

        <motion.div
          className="card-shine"
          animate={{
            x: ["-120%", "120%"],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatDelay: 3,
            ease: "easeInOut",
          }}
        />

        {/* Birthday Icon */}

        <motion.div
          className="age-icon"
          animate={{
            y: [0, -7, 0],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <FaBirthdayCake />
        </motion.div>

        {/* Badges */}

        <motion.div
          className="age-badges"
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.3,
            duration: 0.6,
          }}
        >
          <span>
            <FaStar />
            Birthday Star
          </span>

          <span>
            <FaHeart />
            {friendName}
          </span>
        </motion.div>

        {/* Heading */}

        <motion.h2
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.4,
            duration: 0.7,
          }}
        >
          Another Year Older,
          <span>
            Another Year More Awesome! ✨
          </span>
        </motion.h2>

        {/* Description */}

        <motion.p
          className="age-description"
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.5,
            duration: 0.7,
          }}
        >
          Another beautiful chapter begins today.
          More memories, more laughter, more adventures,
          and countless reasons to smile. 💕
        </motion.p>

        {/* =====================================
            AGE COUNTER
        ===================================== */}

        <motion.div
          className="age-counter-container"
          initial={{
            opacity: 0,
            scale: 0.5,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            delay: 0.55,
            type: "spring",
            stiffness: 150,
            damping: 14,
          }}
        >
          {/* Outer Ring */}

          <motion.div
            className="counter-ring ring-outer"
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 14,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <span className="ring-star">
              ✦
            </span>
          </motion.div>

          {/* Inner Ring */}

          <motion.div
            className="counter-ring ring-inner"
            animate={{
              rotate: -360,
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <span className="ring-star">
              ✦
            </span>
          </motion.div>

          {/* NUMBER */}

          <motion.div
            className="age-number"
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {age}
          </motion.div>

          {/* Label */}

          <div className="age-label">
            <span>YEARS</span>
            <strong>OF MAGIC</strong>
          </div>
        </motion.div>

        {/* Bottom Message */}

        <motion.div
          className="age-message"
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.9,
            duration: 0.7,
          }}
        >
          <span>🎉</span>

          Keep shining, keep smiling,
          and keep being amazing!

          <span>✨</span>
        </motion.div>

        {/* Bottom Decoration */}

        <div className="card-decoration">
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
      </motion.div>
    </section>
  );
}

export default AgeCountdown;