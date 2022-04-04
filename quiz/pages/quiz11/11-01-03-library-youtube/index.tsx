import ReactPlayer from "react-player"; // Render a YouTube video player

const LibraryYoutubePage = () => {
  return (
    <div>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
        width={800}
        height={600}
        controls={true}
        volume={0}
        muted={true}
        playing={true}
      />
    </div>
  );
};
export default LibraryYoutubePage;
