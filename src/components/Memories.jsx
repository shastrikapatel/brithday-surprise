import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaTimes,
  FaHeart,
  FaCamera,
  FaChevronLeft,
  FaChevronRight,
  FaStar,
} from "react-icons/fa";
import "../styles/Memories.css";

function Memories({
  friendName = "My Favorite Person",
  images = [],
}) {
  const [activeIndex, setActiveIndex] = useState(null);

  /* =========================================
     MEMORY CAPTIONS
  ========================================= */

  const captions = [
    "A beautiful memory of a beautiful person. Some pictures simply capture a moment, while others capture a feeling that stays with you forever. 💕",

    "There is something special about seeing someone you care about genuinely happy. This little moment is a reminder of the wonderful person you are.",

    "That smile is honestly one of the things that can make an ordinary day feel a little brighter. I hope you always have countless reasons to smile like this. 🥹❤️",

    "Sometimes a single picture is enough to remind you how many beautiful qualities a person has. Your kindness, your energy, and the way you make people feel comfortable are truly special.",

    "This is one of those memories that deserves to be saved forever. Not because everything had to be perfect, but because the moment itself felt simple, genuine, and beautiful.",

    "There are people whose presence makes life a little happier, and you are definitely one of those people. This picture captures just a small part of the person you are. ❤️",

    "A simple moment, a beautiful expression, and another memory worth keeping. I hope when you look back at pictures like this, you always remember how wonderful you were in that moment.",

    "Your happiness has always been one of the nicest things to see. May life continue giving you countless moments that make you laugh, smile, and feel genuinely happy. ✨",

    "Some memories become special simply because of the person in them. This is one of those little moments that I know I will always be happy to remember.",

    "You have a way of making even the simplest moments look beautiful. This picture is just another reminder of the amazing person and wonderful friend you are.",

    "Every picture tells a small part of a story, and this one holds another beautiful chapter. Looking at these memories makes me realize how many moments are worth celebrating. 📖",

    "This moment deserves a permanent place in the memory box because it captures something that cannot always be explained with words — happiness, confidence, and a little bit of your beautiful personality.",

    "I am genuinely grateful that life gave me the chance to know someone as special as you. Your friendship has brought so many meaningful moments and memories that I will always appreciate.",

    "A beautiful person having another beautiful moment. I hope you never forget how much happiness, kindness, and positivity you bring into the lives of the people around you. 💗",

    "The little things often become the memories we remember the longest. This picture may seem simple, but it represents another moment that deserves to be remembered.",

    "A smile, a moment, a memory — sometimes that's all it takes to create something worth keeping. I hope your life is always filled with moments as beautiful as this one.",

    "This picture will always bring a smile to my face because it reminds me of the wonderful person behind the photograph. Keep being exactly the amazing person you are. ❤️",

    "A memory wrapped in happiness, captured in one little frame. May you always have reasons to look back at your life and smile at how beautiful the journey has been. 💗",

    "Some people slowly become an important part of your life without even realizing it. You are one of those people, and I will always be thankful for the memories and friendship we share.",

    "Here's to all the crazy moments, random conversations, unexpected laughs, and unforgettable memories that make life so much more interesting. May there always be many more waiting ahead.",

    "One picture may only last for a second, but the memory behind it can stay forever. This is one of those moments that deserves to be remembered with a smile.",

    "There are still so many beautiful days ahead, so many places to see, things to experience, and memories waiting to be created. This picture is just one beautiful part of the journey. ✨",

    "Forever grateful to have a friend like you in my life. Your personality, your kindness, your craziness, and your beautiful heart make you someone truly worth appreciating.",

    "Our friendship is not defined by a collection of photographs. It is defined by conversations, trust, laughter, support, memories, and all the little moments that make someone truly special. ❤️",
  ];


  /* =========================================
     MEMORY DATES
  ========================================= */

  const dates = [
    "The Beginning",
    "A Beautiful Day",
    "Good Times",
    "Crazy Moments",
    "Little Happiness",
    "Best Memories",
    "That Smile",
    "Just Us",
    "Unforgettable",
    "Forever Friends",
    "Another Chapter",
    "Pure Happiness",
    "Special Moment",
    "Golden Memories",
    "Beautiful Chaos",
    "Our Story",
    "Sweet Memories",
    "Always Together",
    "Friendship",
    "Good Vibes",
    "One More Memory",
    "Forever",
    "Today & Always",
    "To Be Continued...",
  ];

  /* =========================================
     CLEAN IMAGES
  ========================================= */

  const validImages = useMemo(() => {
    if (!Array.isArray(images)) {
      return [];
    }

    return images.filter(
      (image) =>
        typeof image === "string" &&
        image.trim() !== ""
    );
  }, [images]);

  /* =========================================
     ACTIVE IMAGE
  ========================================= */

  const activeImage =
    activeIndex !== null
      ? validImages[activeIndex]
      : null;

  /* =========================================
     OPEN
  ========================================= */

  const openImage = (index) => {
    setActiveIndex(index);
  };

  /* =========================================
     CLOSE
  ========================================= */

  const closeImage = () => {
    setActiveIndex(null);
  };

  /* =========================================
     NEXT
  ========================================= */

  const nextImage = () => {
    if (!validImages.length) return;

    setActiveIndex((current) => {
      if (current === null) {
        return 0;
      }

      return (
        (current + 1) % validImages.length
      );
    });
  };

  /* =========================================
     PREVIOUS
  ========================================= */

  const previousImage = () => {
    if (!validImages.length) return;

    setActiveIndex((current) => {
      if (current === null) {
        return 0;
      }

      return (
        (current - 1 + validImages.length) %
        validImages.length
      );
    });
  };

  /* =========================================
     KEYBOARD
  ========================================= */

  useEffect(() => {
    if (activeIndex === null) {
      return;
    }

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeImage();
      }

      if (event.key === "ArrowRight") {
        nextImage();
      }

      if (event.key === "ArrowLeft") {
        previousImage();
      }
    };

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      document.body.style.overflow = "";

      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [activeIndex, validImages.length]);

  /* =========================================
     IMAGE FALLBACK
  ========================================= */

  const handleImageError = (event) => {
    event.currentTarget.src =
      "https://placehold.co/900x1100/fdf2f8/9d174d?text=Memory";
  };

  /* =========================================
     EMPTY
  ========================================= */

  if (validImages.length === 0) {
    return (
      <section className="memories-section">
        <div className="memory-glow memory-glow-one" />
        <div className="memory-glow memory-glow-two" />

        <div className="memories-container">
          <div className="memory-empty">
            <FaCamera />

            <p>Our Story</p>

            <h2>
              Our Beautiful Memories
            </h2>

            <span>
              Every beautiful moment deserves
              to be remembered forever. 💕
            </span>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="memories-section">
      {/* =====================================
          BACKGROUND
      ===================================== */}

      <div className="memory-glow memory-glow-one" />
      <div className="memory-glow memory-glow-two" />
      <div className="memory-glow memory-glow-three" />

      {/* =====================================
          FLOATING HEARTS
      ===================================== */}

      <div
        className="floating-hearts"
        aria-hidden="true"
      >
        <span>♡</span>
        <span>♥</span>
        <span>♡</span>
        <span>✦</span>
        <span>♥</span>
        <span>♡</span>
        <span>✧</span>
        <span>♥</span>
        <span>♡</span>
        <span>✦</span>
        <span>♥</span>
        <span>♡</span>
      </div>

      <div className="memories-container">
        {/* ===================================
            HERO HEADING
        =================================== */}

        <motion.div
          className="memories-hero"
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
        >
          <motion.div
            className="camera-badge"
            initial={{
              scale: 0,
              rotate: -20,
            }}
            whileInView={{
              scale: 1,
              rotate: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              type: "spring",
              stiffness: 180,
              damping: 12,
            }}
          >
            <FaCamera />
          </motion.div>

          <p className="memory-eyebrow">
            ✦ OUR STORY ✦
          </p>

          <h2>
            Our Beautiful
            <br />
            <span>Memories</span>
          </h2>

          <p className="memory-intro">
            A little collection of moments,
            laughs, adventures and memories
            that made our friendship special.
          </p>

          <div className="memory-divider">
            <span />
            <FaHeart />
            <span />
          </div>

          <div className="memory-count">
            <FaCamera />

            <span>
              {validImages.length} memories
            </span>

            <FaHeart />
          </div>
        </motion.div>

        {/* ===================================
            TIMELINE
        =================================== */}

        <div className="memory-timeline">
          {validImages.map((image, index) => {
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                className={`timeline-item ${isLeft
                  ? "timeline-left"
                  : "timeline-right"
                  }`}
                key={`${image}-${index}`}
                initial={{
                  opacity: 0,
                  y: 70,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.12,
                }}
                transition={{
                  duration: 0.7,
                  delay: 0.05,
                }}
              >
                {/* TIMELINE DOT */}

                <div className="timeline-dot">
                  <FaHeart />
                </div>

                {/* DATE */}

                <div className="timeline-date">
                  <FaStar />
                  <span>
                    {dates[index] ||
                      `Memory ${index + 1}`}
                  </span>
                </div>

                {/* POLAROID */}

                <motion.article
                  className={`polaroid-card polaroid-${index % 6}`}
                  onClick={() =>
                    openImage(index)
                  }
                  whileHover={{
                    y: -12,
                    rotate: 0,
                    scale: 1.025,
                  }}
                  whileTap={{
                    scale: 0.98,
                  }}
                  role="button"
                  tabIndex={0}
                  aria-label={`Open memory ${index + 1
                    }`}
                  onKeyDown={(event) => {
                    if (
                      event.key === "Enter" ||
                      event.key === " "
                    ) {
                      event.preventDefault();
                      openImage(index);
                    }
                  }}
                >
                  {/* PHOTO */}

                  <div className="polaroid-photo">
                    <img
                      src={image}
                      alt={`${friendName} memory ${index + 1
                        }`}
                      loading={
                        index < 4
                          ? "eager"
                          : "lazy"
                      }
                      decoding="async"
                      onError={
                        handleImageError
                      }
                    />

                    <div className="photo-shine" />

                    <div className="photo-number">
                      {String(index + 1).padStart(
                        2,
                        "0"
                      )}
                    </div>

                    <div className="photo-expand">
                      <FaCamera />
                    </div>
                  </div>

                  {/* POLAROID TEXT */}

                  <div className="polaroid-caption">
                    <h3>
                      {dates[index] ||
                        `Memory #${index + 1
                        }`}
                    </h3>

                    <p>
                      {captions[index] ||
                        "A beautiful memory that will always stay in our hearts. 💕"}
                    </p>

                    <div className="caption-heart">
                      <span />
                      <FaHeart />
                      <span />
                    </div>
                  </div>

                  {/* TAPE */}

                  <div className="polaroid-tape" />
                </motion.article>

                {/* MEMORY SIDE TEXT */}

                <div className="timeline-note">
                  <span>
                    Memory{" "}
                    {String(index + 1).padStart(
                      2,
                      "0"
                    )}
                  </span>

                  <p>
                    {captions[index] ||
                      "A moment worth remembering forever."}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ===================================
            FINAL MESSAGE
        =================================== */}

        <motion.div
          className="memories-final"
          initial={{
            opacity: 0,
            scale: 0.9,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
        >
          <div className="final-heart">
            <FaHeart />
          </div>

          <p className="final-small">
            AND THIS ISN'T THE END...
          </p>

          <h3>
            More memories
            <br />
            are waiting for us. ✨
          </h3>

          <p>
            We've already created so many
            beautiful moments together,
            and there are still countless
            adventures waiting ahead.
          </p>

          <div className="final-signature">
            With love,
            <strong>
              {friendName} ❤️
            </strong>
          </div>
        </motion.div>
      </div>

      {/* =====================================
          FULLSCREEN MODAL
      ===================================== */}

      <AnimatePresence>
        {activeImage !== null && (
          <motion.div
            className="memory-modal"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            onClick={closeImage}
          >
            {/* CLOSE */}

            <button
              className="memory-modal-close"
              type="button"
              onClick={closeImage}
              aria-label="Close memory"
            >
              <FaTimes />
            </button>

            {/* PREVIOUS */}

            {validImages.length > 1 && (
              <button
                className="memory-modal-arrow modal-arrow-left"
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  previousImage();
                }}
                aria-label="Previous memory"
              >
                <FaChevronLeft />
              </button>
            )}

            {/* MODAL POLAROID */}

            <motion.div
              className="modal-polaroid"
              initial={{
                scale: 0.75,
                rotate: -5,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                rotate: 0,
                opacity: 1,
              }}
              exit={{
                scale: 0.8,
                rotate: 5,
                opacity: 0,
              }}
              transition={{
                type: "spring",
                stiffness: 180,
                damping: 20,
              }}
              onClick={(event) =>
                event.stopPropagation()
              }
            >
              <div className="modal-photo">
                <img
                  src={activeImage}
                  alt={`${friendName} memory`}
                  onError={
                    handleImageError
                  }
                />
              </div>

              <div className="modal-caption">
                <div className="modal-counter">
                  {String(
                    activeIndex + 1
                  ).padStart(2, "0")}
                  <span> / </span>
                  {String(
                    validImages.length
                  ).padStart(2, "0")}
                </div>

                <h3>
                  {dates[activeIndex] ||
                    `Memory #${activeIndex + 1
                    }`}
                </h3>

                <p>
                  {captions[activeIndex] ||
                    "A beautiful memory with you. ❤️"}
                </p>

                <div className="modal-hearts">
                  <FaHeart />
                  <FaHeart />
                  <FaHeart />
                </div>
              </div>
            </motion.div>

            {/* NEXT */}

            {validImages.length > 1 && (
              <button
                className="memory-modal-arrow modal-arrow-right"
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  nextImage();
                }}
                aria-label="Next memory"
              >
                <FaChevronRight />
              </button>
            )}

            <div className="modal-hint">
              <span>←</span>
              <span>→</span>
              <small>
                Browse memories
              </small>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Memories;
