import React from "react";
import "remixicon/fonts/remixicon.css";

function Info() {
  return (
    <>
      <section className="features">
        <div className="info">
          <div className="info-container">
            <i class="ri-loader-2-line"></i>
            <p>
              We don't just offer a place to stay; we provide an experience that
              rejuvenates your spirit and refreshes your mind. Our villas are
              designed to be your sanctuary, where every detail is crafted to
              ensure your comfort and satisfaction.
            </p>
          </div>
        </div>

        <div className="exclusive-villas">
          <div className="exclusive-text">
            <div className="exclusive-top">
              <p>Privacy</p>
              <p className="second">Comfort</p>
              <p>Security</p>
            </div>
            <div className="exclusive-bottom">
              <p>
                Take a look at our <span>exclusive</span> villas
              </p>
            </div>
          </div>
          <div className="exclusive-card-container">
            <div className="exclusive-card">
              <a href="#">views</a>
              <i class="ri-arrow-right-up-line"></i>
              <div className="img-text">
                <span>Wake up to birdsong and lush greenery</span>
                <p>Secluded Jungle Retreat</p>
              </div>
              <img
                src="/img/Jungle Villa.jpg"
                alt="Beaautiful view of a balcony showing the jungle"
              />
            </div>

            <div className="exclusive-card">
              <a href="#">views</a>
              <i class="ri-arrow-right-up-line"></i>
              <div className="img-text">
                <span>Step outside to your private beach</span>
                <p>Oceanfront Serenity</p>
              </div>
              <img
                src="/img/Oceanfront Villa.jpg"
                alt="Apicture showing the villa as well as the ocean"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Info;
