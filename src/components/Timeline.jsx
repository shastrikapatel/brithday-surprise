import { motion } from 'framer-motion';

function TimelineSection({ items }) {
  return (
    <section className="section-shell timeline-section">
      <div className="section-heading">
        <p className="eyebrow">Our Journey</p>
        <h2>Friendship Timeline</h2>
      </div>

      <div className="timeline">
        {items.map((item, index) => (
          <motion.div
            key={item.title}
            className="timeline-item"
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.7, delay: index * 0.09 }}
          >
            <div className="timeline-dot" />
            <div className="timeline-content glass-card">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default TimelineSection;
