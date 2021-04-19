// import React, { useState, useEffect } from "react";

// const useAudio = (url) => {

// const [audio, setAudio] = useState(null);
//   useEffect(() => {
//     setAudio(new Audio("/Winterdelta.mp3"));
//     // only run once on the first render on the client
//   }, []);

//   const toggle = () => setPlaying(!playing);

//   useEffect(() => {
//     playing ? audio.play() : audio.pause();
//   }, [playing]);

//   useEffect(() => {
//     audio.addEventListener("ended", () => setPlaying(false));
//     return () => {
//       audio.removeEventListener("ended", () => setPlaying(false));
//     };
//   }, []);

//   return [playing, toggle];
// };

// const Player = ({ url }) => {
//   const [playing, toggle] = useAudio(url);

//   return (
//     <div>
//       <button onClick={toggle}>{playing ? "Pause" : "Play"}</button>
//     </div>
//   );
// };

// export default Player;
