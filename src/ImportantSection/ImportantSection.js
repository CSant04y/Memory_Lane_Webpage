import React from 'react';
import SpeechMenu1 from '../assets/GamePlay/SpeechMenu1.jpg';
import SpeechMenu2 from '../assets/GamePlay/SpeechMenu2.jpg';
import SpeechMenu3 from '../assets/GamePlay/SpeechMenu3.jpg';

const ImportantSection = () => {
  return (
    <div className="bg-base-100 py-6 px-0 md:px-2">
      <div className="container mx-auto py-4 sm:px-2">
        <div className="grid h-auto card bg-accent-content rounded-box text-accent p-0 md:px-3 py-8 leading-relaxed shadow-xl">
        <div className='pl-6'>
          <h1 className="text-3xl md:text-5xl font-bold text-left py-7 px-2 md:px-4">
            How does this Work?
          </h1>
        </div>
          <div className="">
            <div className="py-5 px-5">
              <p className="text-1xl md:text-2xl py-1 md:py-3 px-3 md:px-5 text-left">
                We at Memory Lane have created a virtual experience that brings
                a new way to memorize those important things. Anything from
                important speeches that need to be memorized-to poems and songs.
                The possibilities are up to you.
              </p>
            </div>
            <div className="md:flex lg:flex-row flex-col justify-around p-5 items-center">
              <div className="card w-96 bg-accent shadow-xl">
                <figure>
                  <img src={SpeechMenu3} alt="Speech Selection" />
                </figure>
                <div className="card-body text-white text-xl">
                  <h2 className="card-title">Speech Menu</h2>
                  <p>User is prompted with menu to intreact with Memory Lane</p>
                </div>
              </div>
              <div className="card w-96 bg-accent shadow-xl">
                <figure>
                  <img
                    src={SpeechMenu2}
                    alt="Speech Dropdown Showing a list of speeches that include: I have a Dream, Macbeth, and The Declaration of Independence"
                  />
                </figure>
                <div className="card-body text-white text-xl">
                  <h2 className="card-title">Speech Dropdown</h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                </div>
              </div>
              <div className="card w-96 bg-accent shadow-xl">
                <figure>
                  <img
                    src={SpeechMenu1}
                    alt="Speech has been selected and user is pressing begin to go in game"
                  />
                </figure>
                <div className="card-body text-white text-xl">
                  <h2 className="card-title">Begin Speech Visualization</h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImportantSection;
