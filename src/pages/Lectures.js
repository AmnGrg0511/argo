import { useState } from "react";

export const Lectures = () => {
  const [langActive, setLangActive] = useState(true);
  return (
    <main id="content">
      <div class="template-project-archive" uri="/projects/">
        <div
          size="m"
          class="cc-spacer cc-spacer--m cc-spacer--l@sm cc-spacer--xl@lg"
        ></div>{" "}
        <div class="container container--small">
          <div class="row">
            <div class="col-xxs-12 col-xs-10 col-sm-7">
              <h1 tabindex="-1" style={{ textAlign: "left" }}>
                Lectures
              </h1>
            </div>{" "}
            <div class="col-xxs-12 col-sm-5">
              <nav
                aria-label="Categories"
                class="cc-pills template-project-archive__pills"
              >
                <a
                  onClick={() => setLangActive(true)}
                  class={`cc-pills__link margin-b-x2 ${
                    langActive && "is-active"
                  }`}
                >
                  Languages
                </a>
                <a
                  onClick={() => setLangActive(false)}
                  class={`cc-pills__link margin-b-x2 ${
                    !langActive && "is-active"
                  }`}
                >
                  Topics
                </a>
              </nav>
            </div>
          </div>
        </div>{" "}
        <div size="m" class="cc-spacer cc-spacer--m cc-spacer--l@sm"></div>{" "}
        <div>
          {" "}
          {!langActive && (
            <div class="container container--small">
              {" "}
              <div class="cc-card-results">
                <h2 class="display-m cc-card-results__message">Scratch</h2>{" "}
                <div class="cc-card-results__cards cc-card-grid">
                  <div class="cc-card-grid__item">
                    <div
                      class="cc-card"
                      languages="[object Object]"
                      topics="[object Object],[object Object],[object Object]"
                      __typename="projects_project_Entry"
                    >
                      <div class="cc-card__inner">
                        <div class="cc-card__img cc-img cc-img--cover">
                          <img
                            data-src="https://assets.codeclubau.org/assets/farm.png?mtime=20201014162552&amp,focal=none"
                            alt="Farm"
                            src="https://assets.codeclubau.org/assets/farm.png?mtime=20201014162552&amp;focal=none"
                            class=" ls-is-cached lazyloaded"
                            style={{
                              objectFit: "cover",
                              objectPosition: "center center",
                              height: "100%",
                              width: "100%",
                              display: "block",
                            }}
                          />
                        </div>{" "}
                        <div class="cc-card__content">
                          <h3 class="cc-card__title">
                            <a
                              href="/projects/make-it-rain/"
                              class="cc-card__overlay-link"
                            >
                              The drought is ending on the farm! Help them
                              collect the water!
                            </a>
                          </h3>{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="cc-card-grid__item">
                    <div
                      class="cc-card"
                      languages="[object Object]"
                      topics="[object Object],[object Object]"
                      __typename="projects_project_Entry"
                    >
                      <div class="cc-card__inner">
                        <div class="cc-card__img cc-img cc-img--cover">
                          <img
                            data-src="https://assets.codeclubau.org/assets/rock-band.png?mtime=20200228125300&amp;focal=none"
                            alt="Rock band"
                            src="https://assets.codeclubau.org/assets/rock-band.png?mtime=20200228125300&amp;focal=none"
                            class=" ls-is-cached lazyloaded"
                            style={{
                              objectFit: "cover",
                              objectPosition: "center center",
                              height: "100%",
                              width: "100%",
                              display: "block",
                            }}
                          />
                        </div>{" "}
                        <div class="cc-card__content">
                          <h3 class="cc-card__title">
                            <a
                              href="/projects/rock-band/"
                              class="cc-card__overlay-link"
                            >
                              Learn how to code your own musical instruments!
                            </a>
                          </h3>{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="cc-card-grid__item">
                    <div
                      class="cc-card"
                      languages="[object Object]"
                      topics="[object Object],[object Object],[object Object]"
                      __typename="projects_project_Entry"
                    >
                      <div class="cc-card__inner">
                        <div class="cc-card__img cc-img cc-img--cover">
                          <img
                            data-src="https://assets.codeclubau.org/assets/cats.png?mtime=20200228142246&amp;focal=none"
                            alt="Cats"
                            src="https://assets.codeclubau.org/assets/cats.png?mtime=20200228142246&amp;focal=none"
                            class=" ls-is-cached lazyloaded"
                            style={{
                              objectFit: "cover",
                              objectPosition: "center center",
                              height: "100%",
                              width: "100%",
                              display: "block",
                            }}
                          />
                        </div>{" "}
                        <div class="cc-card__content">
                          <h3 class="cc-card__title">
                            <a
                              href="/projects/cats/"
                              class="cc-card__overlay-link"
                            >
                              Create a game to stop cats from falling into
                              holes!
                            </a>
                          </h3>{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>{" "}
                <div style={{ padding: "1rem", textAlign: "right" }}>
                  <a
                    href="/projects/languages/scratch/"
                    class="cc-card-results__more-btn display-xs cc-link"
                    data-print="https://www.codeclubau.org/projects/languages/scratch/"
                  >
                    <span class="cc-link__inner">See all Scratch lectures</span>
                    <i
                      size=""
                      aria-hidden="true"
                      class="cc-link__icon cc-icon cc-icon--text"
                    >
                      <svg
                        width="11"
                        height="9"
                        viewBox="0 0 11 9"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        {" "}
                        <path d="M10.6411 3.6006L7.53789 0.370606C7.06316 -0.123536 6.28737 -0.123536 5.81263 0.370606C5.33789 0.864747 5.33789 1.67225 5.81263 2.16639L6.83158 3.22698L1.21579 3.22698C0.544209 3.22698 -1.65816e-07 3.79344 -1.96372e-07 4.49247C-2.26928e-07 5.1915 0.544209 5.75795 1.21579 5.75795L6.84316 5.75795L5.81263 6.8306C5.33789 7.32474 5.33789 8.13224 5.81263 8.62638C6.05579 8.87948 6.35684 9 6.66947 9C6.9821 9 7.29474 8.87948 7.52632 8.62638L10.6411 5.38433C10.8726 5.14329 11 4.82993 11 4.49247C11 4.15501 10.8726 3.8296 10.6411 3.6006Z"></path>{" "}
                      </svg>
                    </i>
                  </a>
                </div>
              </div>
            </div>
          )}
          {!langActive && (
            <div class="container container--small">
              <div size="m" class="cc-spacer cc-spacer--m"></div>{" "}
              <div class="cc-card-results">
                <h2 class="display-m cc-card-results__message">HTML and CSS</h2>{" "}
                <div class="cc-card-results__cards cc-card-grid">
                  <div class="cc-card-grid__item">
                    <div
                      class="cc-card"
                      languages="[object Object]"
                      topics="[object Object],[object Object]"
                      __typename="projects_project_Entry"
                    >
                      <div class="cc-card__inner">
                        <div class="cc-card__img cc-img cc-img--cover">
                          <img
                            data-src="https://assets.codeclubau.org/assets/happy_birthday.png?mtime=20200229130112&amp;focal=none"
                            alt="Happy birthday"
                            src="https://assets.codeclubau.org/assets/happy_birthday.png?mtime=20200229130112&amp;focal=none"
                            class=" ls-is-cached lazyloaded"
                            style={{
                              objectFit: "cover",
                              objectPosition: "center center",
                              height: "100%",
                              width: "100%",
                              display: "block",
                            }}
                          />
                        </div>{" "}
                        <div class="cc-card__content">
                          <h3 class="cc-card__title">
                            <a
                              href="/projects/happy-birthday/"
                              class="cc-card__overlay-link"
                            >
                              Learn how to make a customised birthday card.
                            </a>
                          </h3>{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="cc-card-grid__item">
                    <div
                      class="cc-card"
                      languages="[object Object]"
                      topics="[object Object],[object Object]"
                      __typename="projects_project_Entry"
                    >
                      <div class="cc-card__inner">
                        <div class="cc-card__img cc-img cc-img--cover">
                          <img
                            data-src="https://assets.codeclubau.org/assets/build_a_robot.png?mtime=20200229131727&amp;focal=none"
                            alt="Build a robot"
                            src="https://assets.codeclubau.org/assets/build_a_robot.png?mtime=20200229131727&amp;focal=none"
                            class=" ls-is-cached lazyloaded"
                            style={{
                              objectFit: "cover",
                              objectPosition: "center center",
                              height: "100%",
                              width: "100%",
                              display: "block",
                            }}
                          />
                        </div>{" "}
                        <div class="cc-card__content">
                          <h3 class="cc-card__title">
                            <a
                              href="/projects/build-a-robot/"
                              class="cc-card__overlay-link"
                            >
                              Learn how to position images to design your own
                              robot.
                            </a>
                          </h3>{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="cc-card-grid__item">
                    <div
                      class="cc-card"
                      languages="[object Object]"
                      topics="[object Object],[object Object],[object Object]"
                      __typename="projects_project_Entry"
                    >
                      <div class="cc-card__inner">
                        <div class="cc-card__img cc-img cc-img--cover">
                          <img
                            data-src="https://assets.codeclubau.org/assets/tell_a_story.png?mtime=20200229130458&amp;focal=none"
                            alt="Tell a story"
                            src="https://assets.codeclubau.org/assets/tell_a_story.png?mtime=20200229130458&amp;focal=none"
                            class=" ls-is-cached lazyloaded"
                            style={{
                              objectFit: "cover",
                              objectPosition: "center center",
                              height: "100%",
                              width: "100%",
                              display: "block",
                            }}
                          />
                        </div>{" "}
                        <div class="cc-card__content">
                          <h3 class="cc-card__title">
                            <a
                              href="/projects/tell-a-story/"
                              class="cc-card__overlay-link"
                            >
                              Create a webpage to tell a joke, story, or poem.
                            </a>
                          </h3>{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>{" "}
                <div style={{ padding: "1rem", textAlign: "right" }}>
                  <a
                    href="/projects/languages/html-css/"
                    class="cc-card-results__more-btn display-xs cc-link"
                    data-print="https://www.codeclubau.org/projects/languages/html-css/"
                  >
                    <span class="cc-link__inner">
                      See all HTML and CSS lectures
                    </span>
                    <i
                      size=""
                      aria-hidden="true"
                      class="cc-link__icon cc-icon cc-icon--text"
                    >
                      <svg
                        width="11"
                        height="9"
                        viewBox="0 0 11 9"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        {" "}
                        <path d="M10.6411 3.6006L7.53789 0.370606C7.06316 -0.123536 6.28737 -0.123536 5.81263 0.370606C5.33789 0.864747 5.33789 1.67225 5.81263 2.16639L6.83158 3.22698L1.21579 3.22698C0.544209 3.22698 -1.65816e-07 3.79344 -1.96372e-07 4.49247C-2.26928e-07 5.1915 0.544209 5.75795 1.21579 5.75795L6.84316 5.75795L5.81263 6.8306C5.33789 7.32474 5.33789 8.13224 5.81263 8.62638C6.05579 8.87948 6.35684 9 6.66947 9C6.9821 9 7.29474 8.87948 7.52632 8.62638L10.6411 5.38433C10.8726 5.14329 11 4.82993 11 4.49247C11 4.15501 10.8726 3.8296 10.6411 3.6006Z"></path>{" "}
                      </svg>
                    </i>
                  </a>
                </div>
              </div>
            </div>
          )}
          {langActive && (
            <div class="container container--small">
              <div class="cc-card-results">
                <h2 class="display-m cc-card-results__message">Python</h2>{" "}
                <div class="cc-card-results__cards cc-card-grid">
                  <div class="cc-card-grid__item">
                    <div
                      class="cc-card"
                      languages="[object Object]"
                      topics="[object Object],[object Object]"
                      __typename="projects_project_Entry"
                    >
                      <div class="cc-card__inner">
                        <div class="cc-card__img cc-img cc-img--cover">
                          <img
                            data-src="https://assets.codeclubau.org/assets/about_me.png?mtime=20200229133404&amp;focal=none"
                            alt="About me"
                            src="https://assets.codeclubau.org/assets/about_me.png?mtime=20200229133404&amp;focal=none"
                            class=" ls-is-cached lazyloaded"
                            style={{
                              objectFit: "cover",
                              objectPosition: "center center",
                              height: "100%",
                              width: "100%",
                              display: "block",
                            }}
                          />
                        </div>{" "}
                        <div class="cc-card__content">
                          <h3 class="cc-card__title">
                            <a
                              href="/projects/about-me/"
                              class="cc-card__overlay-link"
                            >
                              Create pictures out of text to introduce yourself.
                            </a>
                          </h3>{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="cc-card-grid__item">
                    <div
                      class="cc-card"
                      languages="[object Object]"
                      topics="[object Object],[object Object]"
                      __typename="projects_project_Entry"
                    >
                      <div class="cc-card__inner">
                        <div class="cc-card__img cc-img cc-img--cover">
                          <img
                            data-src="https://assets.codeclubau.org/assets/rock_paper_scissors.png?mtime=20200229133713&amp;focal=none"
                            alt="Rock paper scissors"
                            src="https://assets.codeclubau.org/assets/rock_paper_scissors.png?mtime=20200229133713&amp;focal=none"
                            class=" ls-is-cached lazyloaded"
                            style={{
                              objectFit: "cover",
                              objectPosition: "center center",
                              height: "100%",
                              width: "100%",
                              display: "block",
                            }}
                          />
                        </div>{" "}
                        <div class="cc-card__content">
                          <h3 class="cc-card__title">
                            <a
                              href="/projects/rock-paper-scissors/"
                              class="cc-card__overlay-link"
                            >
                              Create your own 'Rock, Paper, Scissors' game.
                            </a>
                          </h3>{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="cc-card-grid__item">
                    <div
                      class="cc-card"
                      languages="[object Object]"
                      topics="[object Object],[object Object]"
                      __typename="projects_project_Entry"
                    >
                      <div class="cc-card__inner">
                        <div class="cc-card__img cc-img cc-img--cover">
                          <img
                            data-src="https://assets.codeclubau.org/assets/turtle_race.png?mtime=20200229133914&amp;focal=none"
                            alt="Turtle race"
                            src="https://assets.codeclubau.org/assets/turtle_race.png?mtime=20200229133914&amp;focal=none"
                            class=" ls-is-cached lazyloaded"
                            style={{
                              objectFit: "cover",
                              objectPosition: "center center",
                              height: "100%",
                              width: "100%",
                              display: "block",
                            }}
                          />
                        </div>{" "}
                        <div class="cc-card__content">
                          <h3 class="cc-card__title">
                            <a
                              href="/projects/turtle-race/"
                              class="cc-card__overlay-link"
                            >
                              Race turtles against each other!
                            </a>
                          </h3>{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>{" "}
                <div style={{ padding: "1rem", textAlign: "right" }}>
                  <a
                    href="/projects/languages/python/"
                    class="cc-card-results__more-btn display-xs cc-link"
                    data-print="https://www.codeclubau.org/projects/languages/python/"
                  >
                    <span class="cc-link__inner">See all Python lectures</span>
                    <i
                      size=""
                      aria-hidden="true"
                      class="cc-link__icon cc-icon cc-icon--text"
                    >
                      <svg
                        width="11"
                        height="9"
                        viewBox="0 0 11 9"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        {" "}
                        <path d="M10.6411 3.6006L7.53789 0.370606C7.06316 -0.123536 6.28737 -0.123536 5.81263 0.370606C5.33789 0.864747 5.33789 1.67225 5.81263 2.16639L6.83158 3.22698L1.21579 3.22698C0.544209 3.22698 -1.65816e-07 3.79344 -1.96372e-07 4.49247C-2.26928e-07 5.1915 0.544209 5.75795 1.21579 5.75795L6.84316 5.75795L5.81263 6.8306C5.33789 7.32474 5.33789 8.13224 5.81263 8.62638C6.05579 8.87948 6.35684 9 6.66947 9C6.9821 9 7.29474 8.87948 7.52632 8.62638L10.6411 5.38433C10.8726 5.14329 11 4.82993 11 4.49247C11 4.15501 10.8726 3.8296 10.6411 3.6006Z"></path>{" "}
                      </svg>
                    </i>
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>{" "}
    </main>
  );
};
