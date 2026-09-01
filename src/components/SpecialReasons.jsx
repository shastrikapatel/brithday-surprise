import { motion } from "framer-motion";
import "../styles/SpecialReasons.css";

function SpecialReasons({ items = [] }) {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.14,
        delayChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 70,
      scale: 0.88,
      rotateX: 15,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 0.75,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section className="reasons-section">
      {/* Background Decorations */}
      <div className="reasons-bg-orb orb-one" />
      <div className="reasons-bg-orb orb-two" />
      <div className="reasons-bg-orb orb-three" />

      {/* Heading */}
      <motion.div
        className="section-heading reasons-heading"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <motion.p
          className="eyebrow"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: 0.1,
          }}
        >
          Why You Matter
        </motion.p>

        <motion.h2
          initial={{
            opacity: 0,
            y: 20,
            scale: 0.96,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            delay: 0.2,
            ease: "easeOut",
          }}
        >
          Why You Are So Special
        </motion.h2>

        <motion.div
          className="heading-heart"
          initial={{
            opacity: 0,
            scale: 0,
            rotate: -45,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
            rotate: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: 0.45,
            type: "spring",
            stiffness: 220,
            damping: 12,
          }}
        >
          ♥
        </motion.div>
      </motion.div>

      {/* Cards */}
      <motion.div
        className="reasons-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.12,
        }}
      >
        {items.map((item, index) => {
          const icon =
            item.icon ||
            item.emoji ||
            "♥";

          return (
            <motion.article
              key={`${item.title}-${index}`}
              className="reason-card"
              variants={cardVariants}
              whileHover={{
                y: -12,
                scale: 1.025,
                rotate:
                  index % 2 === 0 ? -1 : 1,
                transition: {
                  duration: 0.3,
                  ease: "easeOut",
                },
              }}
              whileTap={{
                scale: 0.98,
              }}
            >
              {/* Card Glow */}
              <div className="reason-card-glow" />

              {/* Top Shine */}
              <div className="reason-card-shine" />

              {/* Number */}
              <span className="reason-number">
                {String(index + 1).padStart(2, "0")}
              </span>

              {/* Icon */}
              <motion.div
                className="reason-icon"
                initial={{
                  opacity: 0,
                  scale: 0,
                  rotate: -20,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  rotate: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.6,
                  delay: 0.35 + index * 0.12,
                  type: "spring",
                  stiffness: 180,
                  damping: 12,
                }}
                whileHover={{
                  scale: 1.15,
                  rotate: [0, -8, 8, 0],
                  transition: {
                    duration: 0.5,
                  },
                }}
              >
                {icon}
              </motion.div>

              {/* Content */}
              <motion.h3
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.5,
                  delay: 0.45 + index * 0.1,
                }}
              >
                {item.title}
              </motion.h3>

              <motion.p
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.5,
                  delay: 0.55 + index * 0.1,
                }}
              >
                {item.text}
              </motion.p>

              {/* Bottom Heart */}
              <motion.div
                className="reason-bottom-heart"
                animate={{
                  scale: [1, 1.15, 1],
                  opacity: [0.55, 0.9, 0.55],
                }}
                transition={{
                  duration: 2.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                ♥
              </motion.div>

              {/* Floating Hearts */}
              <motion.span
                className="floating-heart floating-heart-one"
                animate={{
                  y: [0, -22, -42],
                  opacity: [0, 0.7, 0],
                  scale: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 3.2,
                  delay: index * 0.25,
                  repeat: Infinity,
                  repeatDelay: 1.5,
                }}
              >
                ♥
              </motion.span>

              <motion.span
                className="floating-heart floating-heart-two"
                animate={{
                  y: [0, -18, -36],
                  opacity: [0, 0.5, 0],
                  scale: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 2.8,
                  delay: 1 + index * 0.2,
                  repeat: Infinity,
                  repeatDelay: 2,
                }}
              >
                ♥
              </motion.span>
            </motion.article>
          );
        })}
      </motion.div>
    </section>
  );
}

export default SpecialReasons;