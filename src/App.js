import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
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
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={false}
        responsive={responsive}
        keyBoardControl={true}
        ssr={false} // means to render carousel on server-side.
        infinite={true}
        autoPlay={false}
        transitionDuration={500}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {images.map((fadeImage, index) => {
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
          } else
            return (
              <div className="flex" key={index}>
                <div className="image-container">
                  <img src={fadeImage} alt="img" />
                  <audio
                    controlsList="nodownload noplaybackrate novolume"
                    // noplaybackrate will remove the progressbar of the audio
                    // you can remove that to make large progressbar
                    // also you need to change the width of the audio in css i comment already there check the index.css
                    className="audio"
                    controls
                  >
                    <source src={`audio/${index + 1}.mp3`} type="audio/ogg" />
                    <source src={`audio/${index + 1}.mp3`} type="audio/mpeg" />
                    Your browser does not support the audio element.
                  </audio>
                </div>
              </div>
            );
        })}
      </Carousel>
    </div>
  );
}

export default App;
