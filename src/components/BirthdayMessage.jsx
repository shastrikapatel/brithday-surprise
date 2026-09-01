import { motion } from "framer-motion";
import {
  FaHeart,
  FaStar,
} from "react-icons/fa";
import "../styles/BirthdayMessage.css";

function BirthdayMessage({ friendName = "My Favorite Person" }) {
  const message = [
    "Happy Birthday to the person who has been with me through so many memories, laughs,",
    "crazy moments, and unforgettable adventures.",
    "I am truly lucky to have a best friend like you.",
    "May your life always be filled with happiness, success, love, and beautiful moments.",
    "Stay crazy, stay amazing, and never change! ❤️🎂",
  ];

  const floatingHearts = [
    { left: "8%", top: "20%", delay: 0 },
    { left: "92%", top: "15%", delay: 1.2 },
    { left: "15%", top: "78%", delay: 2 },
    { left: "85%", top: "72%", delay: 0.7 },
    { left: "50%", top: "8%", delay: 1.7 },
  ];

  const sparkles = [
    { left: "12%", top: "35%", delay: 0 },
    { left: "88%", top: "38%", delay: 0.8 },
    { left: "25%", top: "90%", delay: 1.5 },
    { left: "75%", top: "88%", delay: 2.2 },
  ];

  return (
    <section className=" message-section">
      {/* Background glow */}
      <div className="message-bg-glow glow-one" />
      <div className="message-bg-glow glow-two" />
      <div className="message-bg-glow glow-three" />

      {/* Floating hearts */}
      <div className="floating-hearts">
        {floatingHearts.map((heart, index) => (
          <motion.div
            key={`heart-${index}`}
            className="floating-heart"
            style={{
              left: heart.left,
              top: heart.top,
            }}
            initial={{
              opacity: 0,
              scale: 0,
            }}
            whileInView={{
              opacity: [0, 0.8, 0],
              scale: [0.5, 1, 0.7],
              y: [30, -20, -80],
              rotate: [-10, 10, -5],
            }}
            viewport={{ once: false }}
            transition={{
              duration: 5,
              delay: heart.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <FaHeart />
          </motion.div>
        ))}
      </div>

      {/* Sparkles */}
      <div className="message-sparkles">
        {sparkles.map((sparkle, index) => (
          <motion.div
            key={`sparkle-${index}`}
            className="message-sparkle"
            style={{
              left: sparkle.left,
              top: sparkle.top,
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [0.7, 1.4, 0.7],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 2.5,
              delay: sparkle.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <FaStar />
          </motion.div>
        ))}
      </div>

      <motion.div
        className="glass-card message-card"
        initial={{
          opacity: 0,
          y: 90,
          scale: 0.92,
          rotateX: 8,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          scale: 1,
          rotateX: 0,
        }}
        viewport={{
          once: true,
          amount: 0.2,
        }}
        transition={{
          duration: 1.1,
          ease: [0.22, 1, 0.36, 1],
        }}
        whileHover={{
          y: -8,
          scale: 1.01,
          transition: {
            duration: 0.35,
          },
        }}
      >
        {/* Top decorative heart */}
        <motion.div
          className="message-heart-wrapper"
          initial={{
            opacity: 0,
            scale: 0,
            rotate: -25,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
            rotate: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            type: "spring",
            stiffness: 180,
          }}
        >
          <motion.div
            className="message-heart"
            animate={{
              scale: [1, 1.12, 1],
              rotate: [0, -4, 4, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <FaHeart />
          </motion.div>
        </motion.div>

        {/* Small eyebrow */}
        <motion.div
          className="message-eyebrow"
          initial={{
            opacity: 0,
            y: 15,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: 0.35,
          }}
        >
          {/* <FaSparkles />
          <span>A Little Message From My Heart</span>
          <FaSparkles /> */}
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{
            opacity: 0,
            y: 30,
            scale: 0.9,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.45,
            ease: "easeOut",
          }}
        >
          For{" "}
          <span className="friend-name">
            {friendName}
          </span>
        </motion.h2>

        {/* Decorative divider */}
        <motion.div
          className="message-divider-1"
          initial={{
            width: 0,
            opacity: 0,
          }}
          whileInView={{
            width: "140px",
            opacity: 1,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.9,
            delay: 0.7,
            ease: "easeOut",
          }}
        >
          <span />
          <FaHeart />
          <span />
        </motion.div>

        {/* Message */}
        <div className="message-lines">
          {message.map((line, index) => (
            <motion.p
              key={line}
              initial={{
                opacity: 0,
                y: 35,
                filter: "blur(8px)",
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
              }}
              viewport={{
                once: true,
                amount: 0.3,
              }}
              transition={{
                duration: 0.75,
                delay: 0.8 + index * 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {line}
            </motion.p>
          ))}
        </div>

        {/* Bottom quote */}
        <motion.div
          className="message-footer"
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 2.5,
          }}
        >
          <span className="quote-line" />
          
          <motion.div
            className="footer-heart"
            animate={{
              scale: [1, 1.15, 1],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <FaHeart />
          </motion.div>

          <span className="quote-text">
            Forever grateful for our friendship
          </span>

          <span className="quote-line" />
        </motion.div>
      </motion.div>
    </section>
  );
}

export default BirthdayMessage;