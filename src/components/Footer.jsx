import { motion } from "framer-motion";
import {
  FaHeart,
  FaStar,
  FaGift,
  FaRegHeart,
} from "react-icons/fa";

import "../styles/Footer.css";

function Footer({ friendName = "My Best Friend" }) {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      {/* =========================================
          Background Decorations
      ========================================== */}
      <div className="footer-bg" aria-hidden="true">
        <span className="footer-orb footer-orb-one" />
        <span className="footer-orb footer-orb-two" />
        <span className="footer-orb footer-orb-three" />

        <span className="footer-light footer-light-one" />
        <span className="footer-light footer-light-two" />
      </div>

      {/* =========================================
          Floating Hearts
      ========================================== */}
      <div className="footer-hearts" aria-hidden="true">
        {[1, 2, 3, 4, 5, 6, 7].map((item) => (
          <motion.span
            key={item}
            className={`footer-heart footer-heart-${item}`}
            animate={{
              y: [0, -14, 0],
              opacity: [0.15, 0.55, 0.15],
              scale: [0.8, 1, 0.8],
              rotate: [-8, 8, -8],
            }}
            transition={{
              duration: 3 + item * 0.3,
              delay: item * 0.25,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <FaHeart />
          </motion.span>
        ))}
      </div>

      {/* =========================================
          Main Content
      ========================================== */}
      <motion.div
        className="footer-content"
        initial={{
          opacity: 0,
          y: 35,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.3,
        }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {/* Decorative divider */}
        <motion.div
          className="footer-divider"
          initial={{
            opacity: 0,
            scaleX: 0,
          }}
          whileInView={{
            opacity: 1,
            scaleX: 1,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.15,
          }}
        >
          <span />
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 8, -8, 0],
            }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <FaHeart />
          </motion.div>
          <span />
        </motion.div>

        {/* =========================================
            Gift Icon
        ========================================== */}
        <motion.div
          className="footer-icon"
          animate={{
            y: [0, -5, 0],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          whileHover={{
            scale: 1.08,
          }}
        >
          <FaGift />

          <span className="footer-icon-ring footer-icon-ring-one" />
          <span className="footer-icon-ring footer-icon-ring-two" />
        </motion.div>

        {/* Small label */}
        <motion.p
          className="footer-label"
          initial={{
            opacity: 0,
            y: 10,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: 0.3,
          }}
        >
          A Little Something From The Heart
        </motion.p>

        {/* Main title */}
        <h3 className="footer-title">
          Made with{" "}
          <motion.span
            className="footer-main-heart"
            animate={{
              scale: [1, 1.22, 1],
            }}
            transition={{
              duration: 1.4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <FaHeart />
          </motion.span>{" "}
          especially for{" "}
          <span className="footer-name">{friendName}</span>
        </h3>

        {/* Description */}
        <p className="footer-message">
          Thank you for being part of so many beautiful memories,
          crazy laughs, unforgettable moments, and wonderful adventures.
        </p>

        {/* =========================================
            Stars
        ========================================== */}
        <div className="footer-stars">
          <motion.span
            animate={{
              y: [0, -5, 0],
              rotate: [0, 12, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <FaStar />
          </motion.span>

          <motion.span
            animate={{
              scale: [1, 1.25, 1],
            }}
            transition={{
              duration: 1.6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <FaHeart />
          </motion.span>

          <motion.span
            animate={{
              y: [0, -5, 0],
              rotate: [0, -12, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: 0.3,
              ease: "easeInOut",
            }}
          >
            <FaStar />
          </motion.span>
        </div>

        {/* =========================================
            Bottom
        ========================================== */}
        <div className="footer-bottom">
          <p>
            © {year}
            <span className="footer-dot">•</span>
            All Rights Reserved by Shastri
          </p>

          <p className="footer-forever">
            Designed & Developed by{" "}

            <motion.a
              href="https://shastri-kapatel.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.05,
                y: -2,
              }}
              whileTap={{
                scale: 0.97,
              }}
            >
              Shastri
            </motion.a>

            <motion.span
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 1.6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <FaRegHeart />
            </motion.span>
          </p>
        </div>
      </motion.div>
    </footer>
  );
}

export default Footer;
