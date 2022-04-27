import React from 'react';
import profile1 from '../assets/Headshots/profile-1.jpg';
import profile2 from '../assets/Headshots/profile-2.jpg';
import profile3 from '../assets/Headshots/profile-3.jpg';
import OcculusLogo from '../assets/oculus-vr-24.png';
import GithubLogo from '../assets/icons8-github-24.png';
import LinkedinLogo from '../assets/icons8-linkedin-30.png';
import TwitterLogo from '../assets/icons8-twitter-24.png';

const AboutTeam = () => {
  return (
    <div className="bg-base-100 min-h-full text-center py-6 px-0 md:px-2">
      <div className="container mx-auto py-4 px-2">
        <div className="grid h-auto card bg-info-content rounded-box place-items-center p-0 md:p-3 py-8 leading-relaxed">
          <h1 className="text-3xl md:text-5xl font-bold py-7 px-2 md:px-4 text-white">
            About Us
          </h1>
          <div className="flex flex-col lg:flex-row text-base">
            <div className="card w-96 bg-accent shadow-xl mb-3 lg:mb-1 lg:mx-5">
              <figure className="px-10 pt-10">
                <img src={profile3} alt="Aleia Devore" className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Aleia Devore</h2>
                <p>
                  Full Stack Software Enginneer
                  <br />
                  Plant lover
                  <br />
                  Lover of design and balance
                  <br />
                </p>
                <div className="card-actions">
                  <a href="https://github.com/aleiadevore">
                    <img src={GithubLogo} />
                  </a>
                  <a href="">
                    <img src={TwitterLogo} />
                  </a>
                  <a href="https://www.linkedin.com/in/aleiamcnaney/">
                    <img src={LinkedinLogo} />
                  </a>
                </div>
              </div>
            </div>
            <div className="card w-96 bg-accent shadow-xl mb-3 lg:mb-1 lg:mx-5">
              <figure className="px-10 pt-10">
                <img
                  src={profile2}
                  alt="Selidex Parnell"
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Selidex Parnell</h2>
                <p>
                  Full Stack Software Engineer
                  <br />
                  Story Crafter
                  <br />
                  XR Programmer/Designer
                  <br />
                </p>
                <div className="card-actions">
                  <a href="https://github.com/Selidex">
                    <img src={GithubLogo} />
                  </a>
                  <a href="">
                    <img src={TwitterLogo} />
                  </a>
                  <a href="https://www.linkedin.com/in/selidex/">
                    <img src={LinkedinLogo} />
                  </a>
                </div>
              </div>
            </div>
            <div className="card w-96 bg-accent shadow-xl mb-3 lg:mb-1 lg:mx-5">
              <figure className="px-10 pt-10">
                <img
                  src={profile1}
                  alt="Carlos Esquivel"
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Carlos Esquivel</h2>
                <p>
                  Full Stack Software Engineer
                  <br />
                  Plant lover
                  <br />
                  Lover of design and balance
                  <br />
                </p>
                <div className="card-actions">
                  <a href="https://github.com/CSant04y">
                    <img src={GithubLogo} />
                  </a>
                  <a href="">
                    <img src={TwitterLogo} />
                  </a>
                  <a href="https://www.linkedin.com/in/carlos-esquivel-515768186/">
                    <img src={LinkedinLogo} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutTeam;
