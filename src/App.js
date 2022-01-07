// import react react hooks
import React, { useState, useRef } from "react";
// import Carousel and styling
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import play and pause icon from hero icon
import { PlayIcon, PauseIcon } from "@heroicons/react/outline";

// make an array of all src of the image and video
const images = [
  "images/1.png",
  "images/2.png",
  "images/3.png",
  "images/4.png",
  "images/5.png",
  "images/1.mp4",
  "images/7.png",
  "images/8.png",
  "images/9.png",
  "images/10.png",
  "images/11.png",
  "images/12.png",
  "images/13.png",
  "images/14.png",
  "images/15.png",
  "images/16.png",
  "images/3.mp4",
  "images/18.png",
  "images/19.png",
  "images/20.png",
  "images/21.png",
  "images/22.png",
  "images/23.png",
  "images/24.png",
  "images/25.png",
  "images/26.png",
];

function App() {
  // useState for playing audio
  const [isPlaying, setIsPlaying] = useState(false);

  // ref to access the audio element
  const audioRefs = useRef([]);

  // creating a ref array of all audio element
  audioRefs.current = [];
  const addToRef = (el) => {
    if (el && !audioRefs.current.includes(el)) {
      audioRefs.current.push(el);
    }
  };
  //this is the package responsive code we dont need to change them
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="slide-parent">
      {/* carousel */}
      <Carousel
        // allow swipeable to true
        swipeable={false}
        // allow dragable to true
        draggable={false}
        // show the dot in the slider
        showDots={false}
        // this the package responsive
        responsive={responsive}
        // this is for the keyboard control
        keyBoardControl={true}
        // means to render carousel on server-side.
        ssr={false}
        // make the slider infinite
        infinite={true}
        // autoplay the slider
        autoPlay={false}
        // this is for the slider transition
        transitionDuration={500}
        // this is for the package css
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {/* loop through the image array and render individual image */}
        {images.map((fadeImage, index) => {
          // this is the function for the custom play pause
          const play = () => {
            if (index !== 5 || index !== 16) {
              const audio = audioRefs.current[index];
              console.log(index, audioRefs.current);
              if (!isPlaying) {
                setIsPlaying(true);
                audio.play();
              }
              if (isPlaying) {
                setIsPlaying(false);
                audio.pause();
              }
            }
          };
          // in index 5 and 16 there are video thats why we check and render video for this index
          if (index === 5) {
            return (
              <div className="flex" key={index}>
                <video
                  className="video"
                  controls
                  controlsList="nodownload"
                  poster="images/cover.jpg"
                >
                  <source src={fadeImage} type="video/mp4" />
                </video>
              </div>
            );
          } else if (index === 16) {
            return (
              <div className="flex" key={index}>
                <video
                  className="video"
                  controlsList="nodownload"
                  controls
                  poster="images/cover.jpg"
                >
                  <source src={fadeImage} type="video/mp4" />
                </video>
              </div>
            );
          }
          // here we render image
          else
            return (
              <div className="flex" key={index}>
                <div className="image-container">
                  <img src={fadeImage} alt="img" />
                  <audio
                    className="audio"
                    // add the ref
                    ref={addToRef}
                  >
                    <source src={`audio/${index + 1}.mp3`} type="audio/ogg" />
                    <source src={`audio/${index + 1}.mp3`} type="audio/mpeg" />
                    Your browser does not support the audio element.
                  </audio>
                  {/* conditionly render the play pause icon */}
                  {!isPlaying && (
                    <div onClick={play} className="btn">
                      <PlayIcon className="play-cion" />
                    </div>
                  )}
                  {isPlaying && (
                    <div onClick={play} className="btn">
                      <PauseIcon className="pause-cion" />
                    </div>
                  )}
                </div>
              </div>
            );
        })}
      </Carousel>
    </div>
  );
}

export default App;
