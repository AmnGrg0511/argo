import { useState } from "react";
import grp from "../assets/group.svg";
import { Spacer } from "../Components/common/Spacer";
import { SpacerLarge } from "../Components/common/SpacerLarge";

export const Courses = () => {
  const [tab, setTab] = useState(2);
  return (
    <section>
      <div class="cc-hero__inner container">
        <div class="_3Y_GN">
          <div
            size="m"
            class="cc-spacer cc-spacer--m cc-spacer--l@sm cc-spacer--xl@lg"
          ></div>
          <div class="_1gVsM">Courses designed for every child</div>
          <div class="_3hMYv">
            <div
              onClick={() => setTab(1)}
              class={`areqh ${tab === 1 && "_1jSbZ"}`}
            >
              classes 6-8
            </div>
            <div
              onClick={() => setTab(2)}
              class={`areqh ${tab === 2 && "_1jSbZ"}`}
            >
              classes 9-10
            </div>
            <div
              onClick={() => setTab(3)}
              class={`areqh ${tab === 3 && "_1jSbZ"}`}
            >
              classes 11-12
            </div>
          </div>
          <div class="_1z9CZ">
            {tab === 1 && (
              <div class="a1QKN">
                <div class="CgBxI">
                  <div class="_2Pg3- _3Y3el">Mega</div>
                  <div class="_8OsFI">Introduction to Coding</div>
                  <div class="_2THcl _3IN8n">Topics Covered</div>
                  <div class="_37pwQ">
                    Sequence, Algorithms, Debugging, Code Art, Animations
                  </div>
                  <div class="_3Y3el _2iaGW"></div>
                  <div class="qmckW">
                    <div class="_3Rqy1">Tools</div>
                    <div class="_2V11v">
                      <div class="_2ZutD">
                        <img
                          src="https://codr-course-content.s3.amazonaws.com/mp-icon-codeOrg.png"
                          loading="lazy"
                          width="24"
                          height="24"
                          alt="Code.org"
                        />
                        <span>Code.org</span>
                      </div>
                      <div class="_2ZutD">
                        <img
                          src="https://codr-course-content.s3.amazonaws.com/mp-icon-scratch.png"
                          loading="lazy"
                          width="24"
                          height="24"
                          alt="Scratch"
                        />
                        <span>Scratch</span>
                      </div>
                    </div>
                  </div>
                  <div class="_3AtZ0">
                    <div class="_3tKRF">Projects</div>
                    <div class="_3BV7r">
                      <span class="_30e1G">Code Story</span>
                    </div>
                  </div>
                  <div class="_2s_Rm">7% OFF</div>
                  <div class="_2uzAu">
                    ₹ 5,600<span class="qjIZ-">₹ 6,000</span>
                  </div>
                  <div class="_3B8lx">
                    <div class="_86cra">
                      <div>8 Classes</div>
                      <div class="_2cFmq"></div>
                      <div>₹ 700 per session</div>
                    </div>
                    <button class="xibJT _1PYYj">Join now</button>
                  </div>
                </div>
              </div>
            )}
            {tab === 2 && (
              <div class="a1QKN">
                <div class="CgBxI">
                  <div class="_2Pg3- Vyv5Q">Giga</div>
                  <div class="_8OsFI">Design and Create</div>
                  <div class="_2THcl _3IN8n">Topics Covered</div>
                  <div class="_37pwQ">
                    Events, Characters, Interactive utility apps and games
                  </div>
                  <div class="Vyv5Q _2iaGW">
                    Inclusive of topics covered in Introduction to Coding
                  </div>
                  <div class="qmckW">
                    <div class="_3Rqy1">Tools</div>
                    <div class="_2V11v">
                      <div class="_2ZutD">
                        <img
                          src="https://codr-course-content.s3.amazonaws.com/mp-icon-codeOrg.png"
                          loading="lazy"
                          width="24"
                          height="24"
                          alt="Code.org"
                        />
                        <span>Code.org</span>
                      </div>
                      <div class="_2ZutD">
                        <img
                          src="https://codr-course-content.s3.amazonaws.com/mp-icon-scratch.png"
                          loading="lazy"
                          width="24"
                          height="24"
                          alt="Scratch"
                        />
                        <span>Scratch</span>
                      </div>
                      <div class="_2ZutD">
                        <img
                          src="https://codr-course-content.s3.amazonaws.com/mp-icon-appLab.png"
                          loading="lazy"
                          width="24"
                          height="24"
                          alt="App Lab"
                        />
                        <span>App Lab</span>
                      </div>
                    </div>
                  </div>
                  <div class="_3AtZ0">
                    <div class="_3tKRF">Projects</div>
                    <div class="_3BV7r">
                      <span class="_30e1G">Code Story</span>
                      <span class="_30e1G">Pocket-money manager</span>
                      <span class="_30e1G">Soundboard Quiz app</span>
                    </div>
                  </div>
                  <div class="_2s_Rm">11% OFF</div>
                  <div class="_2uzAu">
                    ₹ 32,000<span class="qjIZ-">₹ 36,000</span>
                  </div>
                  <div class="_3B8lx">
                    <div class="_86cra">
                      <div>48 Classes</div>
                      <div class="_2cFmq"></div>
                      <div>₹ 667 per session</div>
                    </div>
                    <button class="xibJT _1PYYj">Join now</button>
                  </div>
                </div>
              </div>
            )}
            {tab === 3 && (
              <div class="a1QKN">
                <div class="CgBxI">
                  <div class="_2Pg3- _2Xl6t">Titan</div>
                  <div class="_8OsFI">App &amp; Game Development</div>
                  <div class="_2THcl _3IN8n">Topics Covered</div>
                  <div class="_37pwQ">
                    Multiscreen native utility apps, AI chatbots, Complex game
                    development
                  </div>
                  <div class="_2Xl6t _2iaGW">
                    Inclusive of topics covered in Design and Create
                  </div>
                  <div class="qmckW">
                    <div class="_3Rqy1">Tools</div>
                    <div class="_2V11v">
                      <div class="_2ZutD">
                        <img
                          src="https://codr-course-content.s3.amazonaws.com/mp-icon-codeOrg.png"
                          loading="lazy"
                          width="24"
                          height="24"
                          alt="Code.org"
                        />
                        <span>Code.org</span>
                      </div>
                      <div class="_2ZutD">
                        <img
                          src="https://codr-course-content.s3.amazonaws.com/mp-icon-scratch.png"
                          loading="lazy"
                          width="24"
                          height="24"
                          alt="Scratch"
                        />
                        <span>Scratch</span>
                      </div>
                      <div class="_2ZutD">
                        <img
                          src="https://codr-course-content.s3.amazonaws.com/mp-icon-appLab.png"
                          loading="lazy"
                          width="24"
                          height="24"
                          alt="App Lab"
                        />
                        <span>App Lab</span>
                      </div>
                      <div class="_2ZutD">
                        <img
                          src="https://codr-course-content.s3.amazonaws.com/mp-icon-gamelab.jpg"
                          loading="lazy"
                          width="24"
                          height="24"
                          alt="Game Lab"
                        />
                        <span>Game Lab</span>
                      </div>
                      <div class="_2ZutD">
                        <img
                          src="https://codr-course-content.s3.amazonaws.com/mp-icon-thunkable.png"
                          loading="lazy"
                          width="24"
                          height="24"
                          alt="Thunkable"
                        />
                        <span>Thunkable</span>
                      </div>
                    </div>
                  </div>
                  <div class="_3AtZ0">
                    <div class="_3tKRF">Projects</div>
                    <div class="_3BV7r">
                      <span class="_30e1G">Code Story</span>
                      <span class="_30e1G">Pocket-money manager</span>
                      <span class="_30e1G">Soundboard Quiz app</span>
                      <span class="_30e1G">Bubble shooter</span>
                      <span class="_30e1G">Portfolio Mobile App</span>
                      <span class="_30e1G">Unit Converter</span>
                    </div>
                  </div>
                  <div class="_2s_Rm">12% OFF</div>
                  <div class="_2uzAu">
                    ₹ 95,000<span class="qjIZ-">₹ 108,000</span>
                  </div>
                  <div class="_3B8lx">
                    <div class="_86cra">
                      <div>144 Classes</div>
                      <div class="_2cFmq"></div>
                      <div>₹ 660 per session</div>
                    </div>
                    <button class="xibJT _1PYYj">Join now</button>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div
            size="m"
            class="cc-spacer cc-spacer--m cc-spacer--l@sm cc-spacer--xl@lg"
          ></div>
        </div>
      </div>
      <SpacerLarge/>
      <div class="container container--small">
        <div class="block-actionable-steps row top-sm">
          <div
            class="block-actionable-steps__content col-xxs-12 col-sm-6"
            style={{ top: "267px" }}
          >
            <div class="block-actionable-steps__content-inner">
              <h2 class="display-xl">How to start your full course</h2>{" "}
              <div class="body-m cc-markup">
                <p>
                  Anyone can start a course. You don't need any coding
                  experience to start learning global skills at the comfort of
                  your home.
                </p>
              </div>{" "}
              <a
                href="/register/"
                class="block-actionable-steps__cta cc-btn"
                data-print="https://www.codeclubau.org/register/"
              >
                Get started
              </a>
            </div>
          </div>{" "}
          <div class="col-xxs-12 col-sm-6">
            {" "}
            <div class="cc-step">
              <h3 class="cc-step__heading">
                <img
                  src={grp}
                  style={{ margin: "auto", marginBottom: "2rem" }}
                />
                <div class="cc-step__marker cc-step__marker--red">
                  <svg
                    width="74"
                    height="69"
                    viewBox="0 0 74 69"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path d="M0.855246 32.2465C0.727737 10.1149 21.1292 -0.117962 35.7926 0.00102546C55.8115 0.00102546 73.7902 17.0162 73.6627 35.2212C73.5352 51.8794 53.1338 68.6566 33.2425 68.6566C15.6463 68.5376 0.600229 51.5225 0.855246 32.2465Z"></path>
                  </svg>{" "}
                  <span
                    class="cc-step__marker-number"
                    style={{ color: "white", fontSize: "1.5rem" }}
                  >
                    <span class="sr-only">Step </span>1 :
                    <span class="sr-only">Step </span> 5
                  </span>
                </div>
                Live 1 : 5 Classes
              </h3>{" "}
              <div class="cc-step__content cc-markup">
                <p>
                  <span style={{ textDecoration: "line-through" }}>
                    ₹ 21,275
                  </span>{" "}
                  ₹ 17,159
                </p>
                <hr
                  style={{
                    opacity: 0.7,
                    borderTop: "1px solid #4c95e2",
                    marginBottom: "1rem",
                  }}
                />
                <p> ₹440 per class per student </p>
              </div>{" "}
            </div>
          </div>
        </div>
      </div>
      <SpacerLarge />
    </section>
  );
};
