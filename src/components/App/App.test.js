import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("App", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("allows you to click on a menu element and see the articles for that category", () => {
    const { getByText, container } = render(<App />);

    fireEvent.click(getByText("Technology"));
    expect(container.firstChild).toMatchInlineSnapshot(`
      <div
        class="app"
      >
        <nav
          class="nav-menu"
        >
          <h1>
            What's
            <span>
              New
            </span>
          </h1>
          <h2>
            Local
          </h2>
          <h2>
            Technology
          </h2>
          <h2>
            Entertainment
          </h2>
          <h2>
            Science
          </h2>
          <h2>
            Health
          </h2>
        </nav>
        <div
          class="search"
        >
          <form>
            <input
              id="search-input"
              placeholder="Search Articles"
              type="text"
            />
            <button
              class="search-button"
            >
              Search
            </button>
          </form>
          <section
            class="news-stories-container"
          >
            <section
              class="news-article-story"
            >
              <div
                class="image-container"
              >
                <img
                  src="https://media.wired.com/photos/5d8e600f34cab0000861c48d/master/w_2560%2Cc_limit/security_jailbreak_MADEPD.jpg"
                />
              </div>
              <h2>
                Unfixable iOS Device Exploit Is the Latest Apple Security Upheaval
              </h2>
              <p>
                Any iPhone device from 2011 to 2017 could soon be jailbroken, thanks to an underlying flaw that there's no way to patch.
              </p>
              <div
                class="article-link"
              >
                <a
                  href="https://www.wired.com/story/ios-exploit-jailbreak-iphone-ipad/"
                >
                  Click here for the story
                </a>
              </div>
            </section>
            <section
              class="news-article-story"
            >
              <div
                class="image-container"
              >
                <img
                  src="https://techcrunch.com/wp-content/uploads/2019/09/EFfmFEEU8AA1SmA.jpeg?w=1390&crop=1"
                />
              </div>
              <h2>
                SpaceX’s orbital Starship prototype comes together ahead of update event
              </h2>
              <p>
                SpaceX  has completed joining the bottom and top halves of the Starship orbital-scale prototype it’s building in Boca Chica, Texas.
              </p>
              <div
                class="article-link"
              >
                <a
                  href="https://techcrunch.com/2019/09/27/spacexs-orbital-starship-prototype-comes-together-ahead-of-update-event/"
                >
                  Click here for the story
                </a>
              </div>
            </section>
            <section
              class="news-article-story"
            >
              <div
                class="image-container"
              >
                <img
                  src="https://i2.wp.com/9to5google.com/wp-content/uploads/sites/4/2019/09/pixel_launcher_notfication_gesture_1.jpg?resize=2500%2C0&quality=82&strip=all&ssl=1"
                />
              </div>
              <h2>
                Download the updated Pixel Launcher from the Pixel 4
              </h2>
              <p>
                Google’s Pixel 4 is set to introduce a bunch of new software features, and one of those is a new version of the Pixel Launcher that supports a handy new gesture. Here’s where you can download the launcher from the Pixel 4 for your device.
              </p>
              <div
                class="article-link"
              >
                <a
                  href="https://9to5google.com/2019/09/27/download-updated-pixel-launcher-pixel-4/"
                >
                  Click here for the story
                </a>
              </div>
            </section>
            <section
              class="news-article-story"
            >
              <div
                class="image-container"
              >
                <img
                  src="https://thenypost.files.wordpress.com/2019/09/google-birthday.jpg?quality=90&strip=all&w=1236&h=820&crop=1"
                />
              </div>
              <h2>
                Google turns 21: A look back at the search engine giant’s iconic life
              </h2>
              <p>
                In its lifetime, the tech giant has gone from a viral startup that quickly became the best way to look up info online to a behemoth corporation that affects so much of daily life
              </p>
              <div
                class="article-link"
              >
                <a
                  href="https://nypost.com/2019/09/27/google-turns-21-a-look-back-at-the-search-engine-giants-iconic-life/"
                >
                  Click here for the story
                </a>
              </div>
            </section>
            <section
              class="news-article-story"
            >
              <div
                class="image-container"
              >
                <img
                  src="https://o.aolcdn.com/images/dims?quality=85&image_uri=https%3A%2F%2Fo.aolcdn.com%2Fimages%2Fdims%3Fresize%3D2000%252C2000%252Cshrink%26image_uri%3Dhttps%253A%252F%252Fs.yimg.com%252Fos%252Fcreatr-uploaded-images%252F2019-09%252F55661db0-e136-11e9-8ffe-2d86abf8b6b9%26client%3Da1acac3e1b3290917d92%26signature%3D17b1db00148baef3ce321cc640c231f8c34b233a&client=amp-blogside-v2&signature=f44a8e35982fc23aaeeb23fedfcb7fe928cd4916"
                />
              </div>
              <h2>
                YouTube Music will come pre-installed on all Android 10 phones
              </h2>
              <p>
                While it was only a matter of time, YouTube Music, instead of Google Play Music, is now Android's official music app. Moving forward, Google says YouTube Music will come pre-installed on all new Android smartphones that ship with Android 10 and Android 9 Pie.
              </p>
              <div
                class="article-link"
              >
                <a
                  href="https://www.engadget.com/2019/09/27/youtube-music-pre-installed-android-10-phones/"
                >
                  Click here for the story
                </a>
              </div>
            </section>
            <section
              class="news-article-story"
            >
              <div
                class="image-container"
              >
                <img
                  src="https://cdn.arstechnica.net/wp-content/uploads/2019/09/Lotus-Evora-1-1440x1080.jpg"
                />
              </div>
              <h2>
                Driving the 2020 Lotus Evora GT makes me optimistic about Lotus’ future
              </h2>
              <p>
                If it can do this on a shoestring, imagine what it can do now with real resources.
              </p>
              <div
                class="article-link"
              >
                <a
                  href="https://arstechnica.com/cars/2019/09/driving-the-2020-lotus-evora-gt-makes-me-optimistic-about-lotuss-future/"
                >
                  Click here for the story
                </a>
              </div>
            </section>
            <section
              class="news-article-story"
            >
              <div
                class="image-container"
              >
                <img
                  src="https://o.aolcdn.com/images/dims?quality=85&image_uri=https%3A%2F%2Fo.aolcdn.com%2Fimages%2Fdims%3Fresize%3D2000%252C2000%252Cshrink%26image_uri%3Dhttps%253A%252F%252Fs.yimg.com%252Fos%252Fcreatr-uploaded-images%252F2019-09%252F42299f70-e153-11e9-b3ff-5d8cae067aaa%26client%3Da1acac3e1b3290917d92%26signature%3Da03946bc474c89293d52de16d649b063a7467dd3&client=amp-blogside-v2&signature=94f24c8a021f767555901a9ec265a2e76f60789a"
                />
              </div>
              <h2>
                Apex Legends Season 3 comes with the game's first new map
              </h2>
              <p>
                With the start of Apex Legends Season 3 just days away, developer Respawn Entertainment has saved the biggest surprise for last. When the new season starts next Tuesday, players will get to check out the game's brand-new map, World's Edge.
              </p>
              <div
                class="article-link"
              >
                <a
                  href="https://www.engadget.com/2019/09/27/apex-legends-season-3-worlds-edge-map/?guccounter=1&guce_referrer=aHR0cHM6Ly9uZXdzLmdvb2dsZS5jb20v&guce_referrer_sig=AQAAAEcGJiwd0FXsz6TI6NorJ9l1NN-UJhnHYDeUtt0m3BBAXoZACJ12FMtiFYMw410n7uvX-EF-PNRNoAKvfVRfMu0GIw58AEQyiB2HEFfKe8pu8oErpE-5QMlt9gNwAXTBQfuzGxGAm3Zc-2sTOtqrCZKapwCIwgGx8O_zHdadPqV6"
                >
                  Click here for the story
                </a>
              </div>
            </section>
            <section
              class="news-article-story"
            >
              <div
                class="image-container"
              >
                <img
                  src="https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fdavidthier%2Ffiles%2F2019%2F09%2Fmario-1200x797.jpg"
                />
              </div>
              <h2>
                Two Big Warnings About Mario Kart Tour On iOS And Android
              </h2>
              <p>
                One of Nintendo's mobile strategies is to use iOS and Android as ways to release inferior versions of its console games, something probably best exemplified by Animal Crossing: Pocket Camp
              </p>
              <div
                class="article-link"
              >
                <a
                  href="https://www.forbes.com/sites/davidthier/2019/09/27/two-big-warnings-about-mario-kart-tour-on-ios-and-android/#2791019a53ae"
                >
                  Click here for the story
                </a>
              </div>
            </section>
          </section>
        </div>
      </div>
    `);
  });
});
