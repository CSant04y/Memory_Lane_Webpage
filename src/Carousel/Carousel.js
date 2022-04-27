import React from 'react';
import SpeechPopUp1 from '../assets/GamePlay/speech_pagination-1.jpg';
import SpeechPopUp2 from '../assets/GamePlay/speech_pagination-2.jpg';
import SpeechPopUp3 from '../assets/GamePlay/speech_pagination-3.jpg';
import SpeechPopUp4 from '../assets/GamePlay/speech_pagination-4.jpg';
import SpeechPopUp5 from '../assets/GamePlay/speech_pagination-5.jpg';

const Carousel = () => {
  return (
    <div className="bg-base-100 text-center py-6 px-0 md:px-2">
      <div className="container mx-auto py-4 px-2">
        <div className="grid h-auto card bg-primary-content rounded-box place-items-center text-secondary p-0 md:p-3 py-8 leading-relaxed shadow-xl">
          <div>
            <h1 className="text-3xl md:text-5xl font-bold py-7 px-2 md:px-4">
              Take a Peek at the Experience
            </h1>
          </div>
          <div className="box-border py-8 shadow-lg">
            <div className="carousel rounded-box h-30">
              <div id="item" className="carousel-item">
                <img
                  width="400px"
                  height="400px"
                  src={SpeechPopUp1}
                  alt="Burger"
                />
              </div>
              <div id="item1" className="carousel-item">
                <img
                  width="400px"
                  height="400px"
                  src={SpeechPopUp2}
                  alt="Burger"
                />
              </div>
              <div id="item2" className="carousel-item">
                <img
                  width="400px"
                  height="400px"
                  src={SpeechPopUp3}
                  alt="Burger"
                />
              </div>
              <div id="item3" className="carousel-item">
                <img
                  width="400px"
                  height="400px"
                  src={SpeechPopUp4}
                  alt="Burger"
                />
              </div>
              <div id="item4" className="carousel-item">
                <img
                  width="400px"
                  height="400px"
                  src={SpeechPopUp5}
                  alt="Burger"
                />
              </div>
            </div>
            {/* <div className="mt-5">
              <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">
                  1
                </a>
                <a href="#item2" className="btn btn-xs">
                  2
                </a>
                <a href="#item3" className="btn btn-xs">
                  3
                </a>
                <a href="#item4" className="btn btn-xs">
                  4
                </a>
              </div>
            </div> */}
          </div>
        </div>
        {/* <div>
            <p className="text-2xl text-left leading-loose">
              Need a better way to memorize a speech?
              <br />
              Take a walk down memory lane!
              <br />
              In this VR experience created for the Oculus Quest,
              <br />
              you can access sections of your speech as you walk down a virtual
              trail.
              <br />
              In doing so, you’ll create visual cues to empower you to recall
              your speech when you take off your headset.
              <br />
            </p>
          </div> */}
      </div>
    </div>
  );
};

export default Carousel;
