import { useMemo, useState } from 'react';
import Loader from './components/Loader';
import Hero from './components/Hero';
import AgeCountdown from './components/AgeCountdown';
import Memories from './components/Memories';
import TimelineSection from './components/Timeline';
import SpecialReasons from './components/SpecialReasons';
import BirthdayMessage from './components/BirthdayMessage';
import SurpriseGift from './components/SurpriseGift';
import BirthdayCake from './components/BirthdayCake';
import FinalSection from './components/FinalSection';
import Footer from './components/Footer';

const friendName = 'Archi';

function App() {
  const [loading, setLoading] = useState(true);


  const memories = useMemo(
    () => [
      "/gallery/M-01.jpeg",
      "/gallery/M-02.jpeg",
      "/gallery/M-03.jpeg",
      "/gallery/M-04.jpeg",
      "/gallery/M-05.jpeg",
      "/gallery/M-06.jpeg",
      "/gallery/M-07.jpeg",
      "/gallery/M-08.jpeg",
      "/gallery/M-09.jpeg",
      "/gallery/M-10.jpeg",
      "/gallery/M-11.jpeg",
      "/gallery/M-12.jpeg",
      "/gallery/M-13.jpeg",
      "/gallery/M-14.jpeg",
      "/gallery/M-15.jpeg",
      "/gallery/M-16.jpeg",
      "/gallery/M-17.jpeg",
      "/gallery/M-18.jpeg",
      "/gallery/M-19.jpeg",
      "/gallery/M-20.jpeg",
      "/gallery/M-21.jpeg",
      "/gallery/M-22.jpeg",
    ],
    []
  );


  const timelineData = [
    { title: 'The Day We Met 🤝', text: 'A moment that started the best friendship story ever.' },
    { title: 'First Adventure 🚗', text: 'Late-night laughs, crazy plans, and unforgettable memories.' },
    { title: 'Crazy Memories 😂', text: 'The silly chaos and ridiculous jokes that made us stronger.' },
    { title: 'Difficult Times We Survived Together ❤️', text: 'Every hard day felt lighter because we had each other.' },
    { title: 'Today: Still Best Friends Forever 🎉', text: 'Still growing, still laughing, and still each other’s safe place.' },
  ];

  const reasons = [
    { title: 'Your Amazing Smile 😊', text: 'A smile that can turn a heavy day into something lighter.' },
    { title: 'Your Crazy Sense of Humor 😂', text: 'You make every moment feel brighter with your laughter.' },
    { title: 'Your Support ❤️', text: 'You are always there, even when life gets messy and confusing.' },
    { title: 'Your Kind Heart 💖', text: 'Your love, warmth, and care make the world feel softer.' },
    { title: 'Our Endless Memories 🌟', text: 'A lifetime of stories, adventures, and moments we will always cherish.' },
  ];

  return (
    <>
      <Loader loading={loading} setLoading={setLoading} />

      {!loading && (
        <main className="birthday-app">
          <div className="bg-orb orb-1" />
          <div className="bg-orb orb-2" />
          <div className="bg-orb orb-3" />

          <Hero friendName={friendName} />
          <AgeCountdown friendName={friendName} />
          <Memories friendName={friendName} images={memories} />
          {/* <TimelineSection items={timelineData} /> */}
          <SpecialReasons items={reasons} />
          <BirthdayMessage friendName={friendName} />
          <SurpriseGift friendName={friendName} />
          {/* <BirthdayCake friendName={friendName} /> */}
          {/* <FinalSection friendName={friendName} /> */}
          <Footer friendName={friendName} />
        </main>
      )}
    </>
  );
}

export default App;
