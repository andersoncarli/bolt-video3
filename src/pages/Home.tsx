import React from 'react';
import VideoCard from '../components/VideoCard';

const mockVideos = [
  { id: '1', title: 'Introduction to MERN', thumbnail: 'https://source.unsplash.com/random/800x600?tech' },
  { id: '2', title: 'React Hooks Explained', thumbnail: 'https://source.unsplash.com/random/800x600?coding' },
  { id: '3', title: 'MongoDB Best Practices', thumbnail: 'https://source.unsplash.com/random/800x600?database' },
];

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1>Welcome to Video Library</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {mockVideos.map((video) => (
          <VideoCard key={video.id} {...video} />
        ))}
      </div>
    </div>
  );
};

export default Home;