// ```jsx
import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGift,
  FaHeart,
  FaStar,
  FaMagic,
  FaRedo,
} from "react-icons/fa";
import "../styles/SurpriseGift.css";

function SurpriseGift({ friendName = "Best Friend" }) {
  const [opened, setOpened] = useState(false);

  // -----------------------------------------
  // Stable sparkle positions
  // -----------------------------------------
  const sparks = useMemo(
    () =>
      Array.from({ length: 36 }, (_, index) => ({
        id: index,
        x: Math.random() * 360 - 180,
        y: Math.random() * 300 - 150,
        size: Math.random() * 5 + 3,
        delay: Math.random() * 0.5,
        duration: Math.random() * 0.8 + 0.9,
      })),
    []
  );

  // -----------------------------------------
  // Stable floating hearts
  // -----------------------------------------
  const hearts = useMemo(
    () =>
      Array.from({ length: 16 }, (_, index) => ({
        id: index,
        left: Math.random() * 100,
        x: Math.random() * 100 - 50,
        delay: index * 0.18,
        duration: Math.random() * 1.5 + 3,
        size: Math.random() * 10 + 12,
      })),
    []
  );

  // -----------------------------------------
  // Gift opening
  // -----------------------------------------
  const handleGiftClick = () => {
    if (!opened) {
      setOpened(true);
    }
  };

  const resetGift = () => {
    setOpened(false);
  };

  return (
    <section className="gift-section">
      {/* ---------------------------------
          Background decorations
      ---------------------------------- */}
      <div className="gift-background" aria-hidden="true">
        <span className="bg-orb orb-one" />
        <span className="bg-orb orb-two" />
        <span className="bg-orb orb-three" />
      </div>

      {/* ---------------------------------
          Heading
      ---------------------------------- */}
      <motion.div
        className="section-heading gift-heading"
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <motion.div
          className="gift-eyebrow"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.5 }}
        >
          <span className="eyebrow-icon">
            <FaGift />
          </span>

          <span>A Little Surprise</span>

          <FaMagic className="magic-icon" />
        </motion.div>

        <h2>
          A Special Gift For{" "}
          <span className="name-highlight">{friendName}</span>
        </h2>

        <motion.p
          key={opened ? "opened" : "closed"}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {opened
            ? "A little surprise, made with lots of love. ❤️"
            : "Something special is waiting just for you..."}
        </motion.p>
      </motion.div>

      {/* ---------------------------------
          Main Gift Area
      ---------------------------------- */}
      <div className={`gift-wrapper ${opened ? "is-opened" : ""}`}> {/* ========================================= CENTER GIFT STAGE ========================================== */} <div className="gift-stage"> {/* Glow behind gift */} <motion.div className="gift-glow" animate={{ scale: opened ? [1, 1.25, 1] : [1, 1.08, 1], opacity: opened ? [0.35, 0.75, 0.35] : [0.25, 0.4, 0.25], }} transition={{ duration: opened ? 1.8 : 3, repeat: Infinity, ease: "easeInOut", }} /> {/* ========================================= GIFT BOX ========================================== */} <motion.button type="button" className={`gift-box ${opened ? "opened" : ""}`} onClick={handleGiftClick} disabled={opened} aria-label={opened ? "Surprise gift opened" : "Click to open your surprise gift"} whileHover={!opened ? { y: -12, scale: 1.05, } : undefined} whileTap={!opened ? { scale: 0.94, } : undefined} animate={opened ? { scale: 0.82, opacity: 0.2, y: 20, } : { y: [0, -7, 0], rotate: [0, -1.5, 1.5, 0], }} transition={opened ? { duration: 0.7, ease: "easeOut", } : { y: { duration: 2.5, repeat: Infinity, ease: "easeInOut", }, rotate: { duration: 2.5, repeat: Infinity, ease: "easeInOut", }, }} > {/* Gift shadow */} <div className="gift-shadow" /> {/* Gift body */} <div className="gift-box-body"> <div className="gift-body-shine" /> </div> {/* Vertical ribbon */} <div className="gift-ribbon ribbon-vertical"> <span /> </div> {/* Horizontal ribbon */} <div className="gift-ribbon ribbon-horizontal"> <span /> </div> {/* Gift lid */} <motion.div className="gift-lid" animate={opened ? { y: -115, x: 22, rotate: -18, opacity: 0, } : { y: 0, x: 0, rotate: 0, opacity: 1, }} transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], }} > <div className="lid-shine" /> </motion.div> {/* Bow */} <motion.div className="gift-bow" animate={opened ? { y: -105, opacity: 0, scale: 0.8, } : { y: 0, opacity: 1, scale: 1, }} transition={{ duration: 0.65, ease: "easeOut", }} > <span className="bow-left" /> <span className="bow-right" /> <span className="bow-center" /> </motion.div> {/* Gift icon */} <motion.div className="gift-icon" animate={!opened ? { scale: [1, 1.08, 1], } : { scale: 0, }} transition={{ duration: 1.8, repeat: !opened ? Infinity : 0, ease: "easeInOut", }} > <FaGift /> </motion.div> </motion.button> {/* ========================================= CLICK HINT ========================================== */} <AnimatePresence> {!opened && (<motion.div className="gift-click-hint" initial={{ opacity: 0, y: 10, }} animate={{ opacity: 1, y: 0, }} exit={{ opacity: 0, y: 10, }} transition={{ delay: 0.3, }} > <span>Tap the gift</span> <FaHeart /> </motion.div>)} </AnimatePresence> {/* ========================================= EXPLOSION EFFECTS ========================================== */} <div className="gift-effects" aria-hidden="true" > <AnimatePresence> {opened && (<> {/* Central burst */} <motion.div className="gift-burst" initial={{ opacity: 0, scale: 0, }} animate={{ opacity: [0, 1, 0], scale: [0, 1.5, 2], }} transition={{ duration: 1.2, ease: "easeOut", }} /> {/* Sparkles */} {sparks.map((spark) => (<motion.span key={`spark-${spark.id}`} className="gift-spark" style={{ width: spark.size, height: spark.size, }} initial={{ opacity: 0, scale: 0, x: 0, y: 0, }} animate={{ opacity: [0, 1, 1, 0], scale: [0, 1.4, 1, 0], x: spark.x, y: spark.y, rotate: 180, }} transition={{ duration: spark.duration, delay: spark.delay, ease: "easeOut", }} />))} {/* Floating hearts */} {hearts.map((heart) => (<motion.span key={`heart-${heart.id}`} className="floating-heart" style={{ left: `${heart.left}%`, fontSize: heart.size, }} initial={{ opacity: 0, y: 20, scale: 0, }} animate={{ opacity: [0, 1, 1, 0], y: -230, x: heart.x, scale: [0.4, 1.15, 0.8], rotate: [0, 18, -18, 0], }} transition={{ duration: heart.duration, delay: heart.delay, repeat: Infinity, ease: "easeOut", }} > <FaHeart /> </motion.span>))} </>)} </AnimatePresence> </div> </div> {/* ========================================= REVEAL CARD ========================================== */} <AnimatePresence mode="wait"> {opened && (<motion.div className="gift-reveal" initial={{ opacity: 0, y: 70, scale: 0.75, rotateX: 15, }} animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0, }} exit={{ opacity: 0, y: 40, scale: 0.85, }} transition={{ type: "spring", stiffness: 110, damping: 15, }} > {/* Top decorative line */} <div className="reveal-line"> <span /> <FaHeart /> <span /> </div> {/* Animated heart */} <motion.div className="reveal-icon" animate={{ scale: [1, 1.18, 1], rotate: [0, -8, 8, 0], }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", }} > <FaHeart /> </motion.div> <span className="reveal-label"> A Message From The Heart </span> <h3> Surprise!{" "} <span> <FaStar /> </span> </h3> <p className="dear-text"> Dear <strong>{friendName}</strong>, </p> <p className="gift-message"> Your biggest gift is having an amazing friend like me! 😄❤️ </p> <div className="message-divider"> <span /> <FaHeart /> <span /> </div> <p className="gift-sub-message"> Just kidding... but seriously, you are one of the most amazing people in my life. Thank you for every laugh, every memory, every crazy moment, and every beautiful memory we've created together. </p> <p className="final-message"> Here's to many more unforgettable memories together. 🥂 </p> {/* Stars */} <div className="gift-stars"> <motion.span animate={{ y: [0, -5, 0], rotate: [0, 15, 0], }} transition={{ duration: 2, repeat: Infinity, }} > <FaStar /> </motion.span> <motion.span animate={{ scale: [1, 1.2, 1], }} transition={{ duration: 1.8, repeat: Infinity, }} > <FaHeart /> </motion.span> <motion.span animate={{ y: [0, -5, 0], rotate: [0, -15, 0], }} transition={{ duration: 2, repeat: Infinity, delay: 0.3, }} > <FaStar /> </motion.span> </div> {/* Open again */} <motion.button type="button" className="open-again-btn" onClick={resetGift} whileHover={{ scale: 1.04, y: -2, }} whileTap={{ scale: 0.96, }} > <FaRedo /> <span>Open Again</span> </motion.button> </motion.div>)} </AnimatePresence> </div>
    </section>
  );
}

export default SurpriseGift;
