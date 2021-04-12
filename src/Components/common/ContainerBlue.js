export const ContainerBlue = ({ title, subtitle, btnText, tiles }) => {
  return (
    <div class="cc-hero">
      <div class="cc-hero__inner container">
        <div class="no-print cc-hero__img cc-hero__img--home">
          <div class="cc-img">
            <img
              data-src="/_nuxt/img/home.96b179e.svg"
              data-srcset=""
              alt=""
              src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
              class="lazyload"
            />
          </div>
        </div>
        <div class="container container--small-inset">
          <div class="cc-hero__content cc-hero__content--auto">
            <div
              size="xl"
              class="cc-spacer cc-spacer--xl cc-spacer--l@xs cc-spacer--xl@lg"
            ></div>
            <div class="cc-hero__row row">
              <div class="col-xxs-12 col-xs-10 col-sm-9 col-md-8 col-lg-7">
                <h1 tabindex="-1" class="cc-hero__title cc-hero__title--small">
                  {title}
                </h1>
                <p class="cc-hero__introduction">{subtitle}</p>{" "}
                <a
                  href="/start-a-course/"
                  data-print="https://www.codecourseau.org/start-a-course/"
                  class="cc-hero__cta cc-btn"
                >
                  {btnText}
                </a>
              </div>
            </div>
          </div>
          <div class="cc-hero__values row">
            <div size="m" class="cc-spacer cc-spacer--m"></div>
            {tiles?.map((tile) => (
              <div class="col-xxs-12 col-xs-4">
                <div class="cc-hero__values-item">
                  <div class="cc-hero__values-illustration cc-hero__values-illustration--1">
                    <div class="cc-hero__values-illustration-img cc-img">
                      <img
                        data-src="/_nuxt/img/robot-red.3eabe1f.svg"
                        data-srcset=""
                        alt=""
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        class="lazyload"
                      />
                    </div>
                  </div>
                  <div class="cc-hero__values-content">
                    <h2 class="display-s">{tile.heading}</h2>
                    <div class="cc-markup">
                      <p>
                        {tile.content.split("~").map((seg, idx) =>
                          idx % 2 ? (
                            <a
                              href="https://meetai.in/"
                              data-print="https://meetai.in/"
                              rel="noopener"
                              target="_blank"
                              class="cc-link"
                            >
                              <span class="cc-link__inner">{seg}</span>
                            </a>
                          ) : (
                            seg
                          )
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div size="m" class="cc-spacer cc-spacer--m cc-spacer--l@sm"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
