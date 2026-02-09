import React, { useState } from 'react';
import carhub from '../../assets/recordings/carhub.webm';
import pharmaque_recording from '../../assets/recordings/pharmaque_recording.webm';
import rami_group from '../../assets/recordings/rami-group.webm';
import sapience_project from '../../assets/recordings/sapience-project.webm';
import snapgram from '../../assets/recordings/snapgram.webm';
import summize from '../../assets/recordings/summize.webm';

const SimpleBanner = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const videos = [
    { src: pharmaque_recording, title: 'PharmaQue App' },
    { src: rami_group, title: 'RAMI Group' },
    { src: sapience_project, title: 'Sapience Project' },
    { src: snapgram, title: 'Snapgram' },
    { src: summize, title: 'Summize' },
    { src: carhub, title: 'CarHub' },
  ];

  const nextVideo = () => {
    setCurrentVideoIndex((prev) => (prev + 1) % videos.length);
  };

  const previousVideo = () => {
    setCurrentVideoIndex((prev) => (prev - 1 + videos.length) % videos.length);
  };

  return (
    <section className="bg-slate-100 dark:bg-primary py-16">
      <div className="container">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Text Content */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white md:text-3xl lg:text-4xl">
              Market Your Next Project with Kronium Tech Limited!
            </h2>
            <p className="text-sm text-gray-600 dark:text-white/90 md:text-base">
              Browse through our collection of successful projects, from medical
              education platforms to e-commerce solutions. Each project
              showcases our commitment to creating intuitive, high-performance
              applications that deliver real value to users.
            </p>
            {/* Video Navigation */}
            <div className="flex items-center justify-between pt-4">
              <button
                onClick={previousVideo}
                className="bg-white/10 dark:bg-white/20 text-primary dark:text-white 
                  hover:bg-primary/20 dark:hover:bg-white/30 rounded-lg px-6 py-2.5 
                  transition-colors font-medium"
              >
                Previous
              </button>
              <span className="text-gray-800 dark:text-white/90 font-medium">
                {videos[currentVideoIndex].title}
              </span>
              <button
                onClick={nextVideo}
                className="bg-white/10 dark:bg-white/20 text-primary dark:text-white 
                  hover:bg-primary/20 dark:hover:bg-white/30 rounded-lg px-6 py-2.5 
                  transition-colors font-medium"
              >
                Next
              </button>
            </div>
          </div>

          {/* Video Container */}
          <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-black/40">
            <video
              key={videos[currentVideoIndex].src}
              className="h-full w-full object-contain"
              controls
              autoPlay
              muted
            >
              <source src={videos[currentVideoIndex].src} type="video/webm" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SimpleBanner;
