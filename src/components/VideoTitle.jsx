const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-64 pl-10 absolute text-white bg-gradient-to-r from-black">
      <h1 className="font-bold text-4xl">{title}</h1>
      <p className="w-2/5 pt-4">{overview}</p>
      <div className="mt-4">
        <button className="bg-white text-black text-xl p-2 px-6 mr-2 w-auto rounded-md font-bold hover:opacity-80">
          ▶️ Play
        </button>
        <button className="bg-gray-500 text-white text-xl p-2 px-6 w-auto rounded-md font-bold">
          ℹ️ More info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
