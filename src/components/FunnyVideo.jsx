import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaPlay,
  FaLaughSquint,
  FaTimes,
  FaVolumeUp,
} from "react-icons/fa";

import "../styles/FunnyVideo.css";

function FunnyVideo({ friendName = "Archi" }) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="funny-video-section">
      {/* Background Decorations */}
      <div className="funny-blob blob-one"></div>
      <div className="funny-blob blob-two"></div>

      <motion.div
        className="funny-video-container"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* Heading */}
        <motion.div
          className="funny-video-heading"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="funny-icon">
            <FaLaughSquint />
          </div>

          <p className="funny-eyebrow">WARNING ⚠️</p>

          <h2>A Little Something to Make You Laugh 😂</h2>

          <p>
            Because a birthday surprise without some embarrassing
            memories would be incomplete, right {friendName}? 😭😂
          </p>
        </motion.div>

        {/* Video Card */}
        <motion.div
          className="video-card"
          whileHover={{ y: -8 }}
          transition={{ duration: 0.3 }}
        >
          <div className="video-thumbnail">
            {/* Replace this image with your own thumbnail */}
            <img
              src="https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=1200&q=80"
              alt="Funny Birthday Moment"
            />

            <div className="video-overlay"></div>

            {/* Funny Text */}
            <div className="video-badge">
              🤫 Secret Funny Video
            </div>

            <motion.button
              className="play-button"
              onClick={() => setIsPlaying(true)}
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaPlay />
            </motion.button>

            <div className="video-bottom-text">
              <FaVolumeUp />
              <span>Click at your own risk 😂</span>
            </div>
          </div>

          {/* Bottom */}
          <div className="video-card-footer">
            <span>🎥 The Most Important Evidence</span>

            <div className="funny-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </motion.div>

        {/* Funny Message */}
        <motion.div
          className="funny-message"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <span>😂</span>

          <p>
            "Some memories deserve to be remembered...
            <br />
            even if they are slightly embarrassing!" 😭
          </p>

          <span>😂</span>
        </motion.div>
      </motion.div>

      {/* VIDEO POPUP */}
      <AnimatePresence>
        {isPlaying && (
          <motion.div
            className="video-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsPlaying(false)}
          >
            <motion.div
              className="video-modal-content"
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0 }}
              transition={{ type: "spring", stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="close-video"
                onClick={() => setIsPlaying(false)}
              >
                <FaTimes />
              </button>

              <div className="modal-title">
                😂 Okay... Don't Say I Didn't Warn You!
              </div>

              {/* ADD YOUR VIDEO HERE */}
              <video
                controls
                autoPlay
                className="funny-video-player"
              >
                <source
                  src="/videos/funny-video.mp4"
                  type="video/mp4"
                />

                Your browser does not support video.
              </video>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default FunnyVideo;