import ReactPlayer from "react-player"; // Render a YouTube video player

export default function LibraryYoutubePage() {
  return (
    <div>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
        width={500}
        height={500}
      />
    </div>
  );
}
