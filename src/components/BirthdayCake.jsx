import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaStar } from 'react-icons/fa';

function BirthdayCake({ friendName }) {
  const [wishMade, setWishMade] = useState(false);

  return (
    <section className="section-shell cake-section">
      <div className="section-heading">
        <p className="eyebrow">Make A Wish</p>
        <h2>Birthday Wishes ✨</h2>
      </div>

      <div className="cake-stage">
        <motion.div
          className="birthday-cake"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className={`cake c-top ${wishMade ? 'off' : ''}`} />
          <div className={`cake c-middle ${wishMade ? 'off' : ''}`} />
          <div className={`cake c-bottom ${wishMade ? 'off' : ''}`} />
          <div className="cake-decoration" />
          <div className="candles">
            {[...Array(4)].map((_, index) => (
              <span key={index} className={`candle ${wishMade ? 'blown' : ''}`}>
                <span className="flame" />
              </span>
            ))}
          </div>
        </motion.div>

        <motion.button
          className="wish-btn"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => setWishMade(true)}
        >
          Make a Wish ✨
        </motion.button>

        <AnimatePresence>
          {wishMade && (
            <motion.div
              className="wish-message"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6 }}
            >
              May All Your Wishes Come True ❤️
            </motion.div>
          )}
        </AnimatePresence>

        <div className="wish-particles" aria-hidden="true">
          {wishMade &&
            Array.from({ length: 26 }, (_, index) => (
              <span key={index} className="wish-particle" style={{ '--angle': `${(360 / 26) * index}deg` }} />
            ))}
        </div>
      </div>
    </section>
  );
}

export default BirthdayCake;
