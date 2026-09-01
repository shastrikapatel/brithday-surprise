import { motion } from "framer-motion";
import {
  FaGift,
  FaHeart,
  FaArrowDown,
  FaBirthdayCake,
} from "react-icons/fa";
import "../styles/Hero.css";

function Hero({ friendName = "Bestie" }) {
  const scrollToNext = () => {
    document
      .getElementById("age-section")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.18,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section className="hero-section">

      {/* Animated Background */}
      <div className="hero-gradient-bg" />

      {/* Floating Glow */}
      <div className="hero-glow glow-1" />
      <div className="hero-glow glow-2" />
      <div className="hero-glow glow-3" />

      {/* Floating Balloons */}
      <div className="floating-balloons" aria-hidden="true">
        {Array.from({ length: 8 }, (_, index) => (
          <motion.span
            key={index}
            className={`balloon balloon-${index + 1}`}
            animate={{
              y: [0, -30, 0],
              rotate: [-4, 4, -4],
            }}
            transition={{
              duration: 3 + index * 0.4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.3,
            }}
          />
        ))}
      </div>

      {/* Sparkles */}
      <div className="sparkles" aria-hidden="true">
        {Array.from({ length: 30 }, (_, index) => (
          <motion.span
            key={index}
            className="sparkle"
            animate={{
              opacity: [0, 1, 0],
              scale: [0.3, 1.4, 0.3],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 2 + (index % 3),
              repeat: Infinity,
              delay: index * 0.15,
            }}
          />
        ))}
      </div>

      {/* MAIN CONTENT */}
      <motion.div
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >

        {/* Badge */}
        <motion.div
          className="tag-badge"
          variants={itemVariants}
          whileHover={{
            scale: 1.08,
            rotate: [-2, 2, -2, 0],
          }}
        >
          <motion.span
            animate={{
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
            }}
          >
            <FaHeart />
          </motion.span>

          <span>It's Your Special Day</span>
        </motion.div>

        {/* Small Heading */}
        <motion.p
          className="hero-small-title"
          variants={itemVariants}
        >
          🎉 A beautiful day for a beautiful soul 🎉
        </motion.p>

        {/* Main Heading */}
        <motion.h1
          className="hero-title"
          variants={itemVariants}
        >
          Happy Birthday
          <br />

          <motion.span
            className="friend-name"
            animate={{
              textShadow: [
                "0px 0px 10px rgba(255,255,255,0.4)",
                "0px 0px 30px rgba(255,255,255,0.9)",
                "0px 0px 10px rgba(255,255,255,0.4)",
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          >
            {friendName} 🎂
          </motion.span>
        </motion.h1>
        <motion.p
          className="hero-subtitle"
          variants={itemVariants}
        >kuchu puchu 💖
        </motion.p>

        {/* Subtitle */}
        <motion.p
          className="hero-subtitle"
          variants={itemVariants}
        >
          Another year older, wiser, stronger, and even more amazing!
          <br />
          Today we celebrate <strong>YOU</strong> and all the happiness
          you bring into our lives. 💖
        </motion.p>

        {/* Button */}
        <motion.button
          className="primary-btn"
          variants={itemVariants}
          whileHover={{
            scale: 1.08,
            y: -5,
            boxShadow: "0px 15px 40px rgba(255, 70, 130, 0.5)",
          }}
          whileTap={{
            scale: 0.95,
          }}
          onClick={scrollToNext}
        >
          <span>Open Your Surprise</span>

          <motion.span
            animate={{
              rotate: [0, 15, -15, 0],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              repeatDelay: 2,
            }}
          >
            <FaGift />
          </motion.span>
        </motion.button>
      </motion.div>

      {/* BIRTHDAY CAKE */}
      <motion.div
        className="cake-wrap"
        initial={{
          opacity: 0,
          scale: 0,
          rotate: -20,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          rotate: 0,
          y: [0, -15, 0],
        }}
        transition={{
          opacity: {
            duration: 0.8,
            delay: 0.5,
          },
          scale: {
            type: "spring",
            stiffness: 120,
            delay: 0.5,
          },
          rotate: {
            duration: 0.8,
            delay: 0.5,
          },
          y: {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
      >
        <motion.div
          className="cake-glow"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        />

        <div className="birthday-cake-hero">

          <div className="cake-layer cake-bottom" />

          <div className="cake-layer cake-middle" />

          <div className="cake-layer cake-top" />

          <div className="cake-icing" />

          {/* Candles */}
          <div className="cake-candles">
            {[...Array(5)].map((_, index) => (
              <div className="candle" key={index}>
                <motion.span
                  className="flame"
                  animate={{
                    scaleY: [1, 1.3, 0.9, 1],
                    scaleX: [1, 0.8, 1.1, 1],
                    opacity: [1, 0.8, 1],
                  }}
                  transition={{
                    duration: 0.6,
                    repeat: Infinity,
                    delay: index * 0.1,
                  }}
                />
              </div>
            ))}
          </div>

          {/* Cake decoration */}
          <div className="cake-dots">
            {[...Array(12)].map((_, index) => (
              <span key={index} />
            ))}
          </div>
        </div>
      </motion.div>

      {/* Confetti */}
      <div className="confetti" aria-hidden="true">
        {Array.from({ length: 25 }, (_, index) => (
          <motion.span
            key={index}
            className={`confetti-piece piece-${index + 1}`}
            animate={{
              y: [-100, 800],
              rotate: [0, 360],
              opacity: [1, 0.8, 0],
            }}
            transition={{
              duration: 4 + (index % 4),
              repeat: Infinity,
              delay: index * 0.25,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      {/* <motion.button
        type="button"
        className="scroll-indicator"
        onClick={scrollToNext}
        aria-label="Scroll to explore more"
        initial={{ opacity: 0, y: 10 }}
        animate={{
          opacity: 1,
          y: [0, 8, 0],
        }}
        transition={{
          opacity: {
            duration: 0.6,
            delay: 1.5,
          },
          y: {
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
        whileHover={{
          scale: 1.08,
        }}
        whileTap={{
          scale: 0.95,
        }}
      >
        <span className="scroll-text">Scroll to explore</span>

        <motion.span
          className="scroll-arrow"
          animate={{
            y: [0, 5, 0],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <FaArrowDown />
        </motion.span>
      </motion.button> */}

    </section>
  );
}

export default Hero;