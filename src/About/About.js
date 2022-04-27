import React from 'react';
import Game_play from '../assets/game_play.jpg';

const About = () => {
  return (
    <div className="bg-base-100 min-h-min min-w-min text-center py-6 px-2">
      <div className="container mx-auto py-4">
        <div class="flex flex-col w-full lg:flex-row">
          <div class="grid flex-grow h-auto card bg-info-content rounded-box place-items-center text-slate-50 shadow-xl py-6 px-9">
            <div>
              <h1 className="text-3xl md:text-5xl font-bold pb-3 text-left">
                A New Experience In VR to help you Memorize those things most
                important to you
              </h1>
            </div>
            <div className="pb-3">
              <p className="text-base md:text-2xl text-left">
                We at Memory Lane have created a virtual experience that allows
                you to easily work on memorizing bits of information in a fun
                and inviting environment.
              </p>
            </div>
            <div className="flex flex-col md:flex-row place-content-center">
              <div className="md:px-3 md:pt-1 md:pb-3">
                <img
                  className="rounded-md min-h-full"
                  src={Game_play}
                  alt=""
                  width="400px"
                  height="400px"
                ></img>
              </div>
              <div className="flex-column">
                <div class="flex flex-col w-max border-opacity-50 px-2.5 pb-2 pt-4 lg:pt-0 m-auto lg:m-3">
                  <div class="grid h-auto card bg-info rounded-box place-items-center text-base-100 p-5 leading-relaxed">
                    <h3 className="text-2xl py-1 text-center">
                      Why Memory Lane?
                    </h3>
                    <ul className="list-disc">
                      <li>Visual Experince</li>
                      <li>Immersive Environment</li>
                      <li>Painless Memorization</li>
                    </ul>
                  </div>
                  <div class="divider"></div>
                  <div class="grid h-auto card bg-info rounded-box place-items-center text-base-100 p-5 leading-relaxed">
                    <h3 className="text-2xl py-1 text-center">
                      Memorization at its Finest
                    </h3>
                    <ul className="list-disc">
                      <li>
                        Visual Cues enable
                        <br />
                        lasting memory recall
                      </li>
                      <li>
                        Stress free environment
                        <br />
                        creates learning playground
                      </li>
                      <li>
                        Speech customization
                        <br />
                        allows for modularity
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="divider lg:divider-horizontal"></div>
          <div class="grid flex-grow md:h-30 card bg-info-content rounded-box place-items-center text-slate-50 p-5 leading-relaxed shadow-xl">
            <div>
              <h3 className="text-2xl py-3 text-center">How It Works</h3>
            </div>
            <div className="h-96 pt-24 lg:pt-1">
              <ul class="steps step-horizontal lg:steps-vertical pt-8">
                <li class="step step-primary">Upload Speech</li>
                <li class="step step-secondary">Open App on Occulus</li>
                <li class="step step-accent">Choose Speech</li>
                <li class="step step-success">Journey down the lane</li>
              </ul>
            </div>
            <button className="btn btn-info-content font-bold ">
              <p className="font-bold">Begin Your Journey</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
