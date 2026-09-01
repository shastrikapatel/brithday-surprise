import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaHeart, FaGift, FaStar } from "react-icons/fa";
import "../styles/Loader.css";

function Loader({ loading, setLoading }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!loading) return;

    setProgress(0);

    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + 8;

        if (next >= 100) {
          clearInterval(interval);

          setTimeout(() => {
            setLoading(false);
          }, 700);

          return 100;
        }

        return next;
      });
    }, 180);

    return () => clearInterval(interval);
  }, [loading, setLoading]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="loader-screen"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: {
              duration: 0.8,
              ease: "easeInOut",
            },
          }}
        >
          {/* Background Glow */}
          <motion.div
            className="loader-glow"
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.35, 0.75, 0.35],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Floating Glow 2 */}
          <motion.div
            className="loader-glow loader-glow-secondary"
            animate={{
              scale: [1.1, 0.9, 1.1],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Loader Card */}
          <motion.div
            className="loader-card"
            initial={{
              opacity: 0,
              y: 35,
              scale: 0.92,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: -30,
              scale: 0.95,
            }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
            }}
          >
            {/* Top Decorative Icons */}
            <div className="loader-icons">
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 12, 0],
                }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <FaHeart className="heart-icon" />
              </motion.div>

              <motion.div
                animate={{
                  y: [0, 8, 0],
                  rotate: [0, -10, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <FaGift className="gift-icon" style={{ color: "#ec4899" }} />
              </motion.div>
            </div>

            {/* Heading */}
            <motion.p
              className="loader-eyebrow"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.1,
                duration: 0.5,
              }}
            >
              A Little Birthday Surprise
            </motion.p>

            <motion.h2
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.2,
                duration: 0.6,
              }}
            >
              Something Special
              <br />
              Is Waiting For You
              <span className="heading-heart"> ♥</span>
            </motion.h2>

            <motion.p
              className="loader-subtitle"
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: 0.4,
                duration: 0.6,
              }}
            >
              Get ready for a beautiful little surprise...
            </motion.p>

            {/* Stars */}
            <div className="loader-stars" aria-hidden="true">
              {[...Array(8)].map((_, index) => (
                <motion.span
                  key={index}
                  className="loader-star"
                  animate={{
                    opacity: [0.25, 1, 0.25],
                    scale: [0.8, 1.2, 0.8],
                    y: [0, -4, 0],
                  }}
                  transition={{
                    duration: 1.6,
                    repeat: Infinity,
                    delay: index * 0.18,
                    ease: "easeInOut",
                  }}
                >
                  <FaStar />
                </motion.span>
              ))}
            </div>

            {/* Progress */}
            <div className="loader-progress-wrapper">
              <div className="loader-bar">
                <motion.div
                  className="loader-progress"
                  initial={{
                    width: 0,
                  }}
                  animate={{
                    width: `${progress}%`,
                  }}
                  transition={{
                    duration: 0.25,
                    ease: "easeOut",
                  }}
                />
              </div>

              <div className="loader-progress-info">
                <span>Creating your surprise</span>
                <span className="loader-percent">
                  {progress}%
                </span>
              </div>
            </div>

            {/* Bottom Heart */}
            <motion.div
              className="loader-bottom-heart"
              animate={{
                scale: [1, 1.15, 1],
              }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              ♥
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Loader;