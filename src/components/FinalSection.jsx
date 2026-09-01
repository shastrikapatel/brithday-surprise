import { motion } from 'framer-motion';
import { FaHeart, FaRedo } from 'react-icons/fa';

function FinalSection({ friendName }) {
  const replay = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    window.location.reload();
  };

  return (
    <section className="final-section section-shell">
      <motion.div
        className="final-card glass-card"
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.8 }}
      >
        <div className="final-hearts" aria-hidden="true">
          {Array.from({ length: 18 }, (_, index) => (
            <span key={index} className="final-heart" style={{ '--delay': `${index * 0.14}s` }}>
              <FaHeart />
            </span>
          ))}
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
        >
          No Matter Where Life Takes Us,
          <br />
          You Will Always Be My Best Friend <span>❤️</span>
        </motion.h2>

        <motion.button
          className="primary-btn replay-btn"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
          onClick={replay}
        >
          Replay The Surprise <FaRedo />
        </motion.button>
      </motion.div>
    </section>
  );
}

export default FinalSection;
