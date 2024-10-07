import React from 'react';

interface VideoCardProps {
  id: string;
  title: string;
  thumbnail: string;
}

const VideoCard: React.FC<VideoCardProps> = ({ id, title, thumbnail }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={thumbnail} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="h2">{title}</h2>
        <button className="btn btn-primary mt-2">Watch</button>
      </div>
    </div>
  );
};

export default VideoCard;