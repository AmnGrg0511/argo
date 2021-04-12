import { Spacer } from "./Spacer";
import { SpacerLarge } from "./SpacerLarge";

export const ContainerWhite = () => {
  return (
    <div class="container container--small">
      <SpacerLarge />
      <div class="block-project-highlights">
        <div class="block-project-highlights__content">
          <h2>Make fun things, build useful skills</h2>
          <div class="body-m cc-markup">
            <p>
              Argo projects are aligned to the{" "}
              <a
                href="https://www.csteachers.org/"
                data-print="https://www.csteachers.org/"
                class="cc-link"
              >
                <span class="cc-link__inner">
                  Computer Science Teacher Association (CSTA)
                </span>
              </a>
              , and build on important skills for the future.
            </p>
          </div>{" "}
          {/* <a
            href="/projects/"
            data-print="https://www.codecourseau.org/projects/"
            class="margin-t cc-btn cc-btn--outline cc-btn--contrast"
          >
            Explore all projects
          </a> */}
        </div>
        {/* <div class="block-project-highlights__projects">
          <div size="m" class="cc-spacer cc-spacer--m"></div>
          <div class="cc-card-grid">
            <div class="cc-card-grid__item">
              <div __typename="projects_project_Entry" class="cc-card">
                <div class="cc-card__inner">
                  <div class="cc-card__img cc-img cc-img--cover">
                    <img
                      data-src="https://assets.codecourseau.org/assets/intro.png?mtime=20201014150234&focal=none"
                      alt="Intro"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      class="lazyload"
                    />
                  </div>
                  <div class="cc-card__content">
                    <h3 class="cc-card__title">
                      <a
                        href="/projects/cow-culate-the-methane/"
                        class="cc-card__overlay-link"
                      >
                        Help the cow choose a more sustainable lunch.
                      </a>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div class="cc-card-grid__item">
              <div __typename="projects_project_Entry" class="cc-card">
                <div class="cc-card__inner">
                  <div class="cc-card__img cc-img cc-img--cover">
                    <img
                      data-src="https://assets.codecourseau.org/assets/2savetheshark.png?mtime=20210125115044&focal=none"
                      alt="2savetheshark"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      class="lazyload"
                    />
                  </div>
                  <div class="cc-card__content">
                    <h3 class="cc-card__title">
                      <a
                        href="/projects/save-the-shark/"
                        class="cc-card__overlay-link"
                      >
                        Create a game to save the shark from plastic pollution
                      </a>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div class="cc-card-grid__item">
              <div __typename="projects_project_Entry" class="cc-card">
                <div class="cc-card__inner">
                  <div class="cc-card__img cc-img cc-img--cover">
                    <img
                      data-src="https://assets.codecourseau.org/assets/serene-banner.png?mtime=20200921160146&focal=none"
                      alt="Serene banner"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      class="lazyload"
                    />
                  </div>
                  <div class="cc-card__content">
                    <h3 class="cc-card__title">
                      <a
                        href="/projects/serene-scene/"
                        class="cc-card__overlay-link"
                      >
                        Create a peaceful forest scene for you to look at,
                        listen to, and relax.
                      </a>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div class="cc-card-grid__item">
              <div __typename="projects_project_Entry" class="cc-card">
                <div class="cc-card__inner">
                  <div class="cc-card__img cc-img cc-img--cover">
                    <img
                      data-src="https://assets.codecourseau.org/assets/12.png?mtime=20200715163032&focal=none"
                      alt="12"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      class="lazyload"
                    />
                  </div>
                  <div class="cc-card__content">
                    <h3 class="cc-card__title">
                      <a
                        href="/projects/drone-planting/"
                        class="cc-card__overlay-link"
                      >
                        Help regenerate the bush using a drone.
                      </a>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div class="cc-card-grid__item">
              <div __typename="projects_project_Entry" class="cc-card">
                <div class="cc-card__inner">
                  <div class="cc-card__img cc-img cc-img--cover">
                    <img
                      data-src="https://assets.codecourseau.org/assets/6turtletracker.png?mtime=20210125115103&focal=none"
                      alt="6turtletracker"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      class="lazyload"
                    />
                  </div>
                  <div class="cc-card__content">
                    <h3 class="cc-card__title">
                      <a
                        href="/projects/turtle-tracker/"
                        class="cc-card__overlay-link"
                      >
                        Draw the routes taken by real sea turtles during their
                        nesting
                      </a>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div class="cc-card-grid__item">
              <div __typename="projects_project_Entry" class="cc-card">
                <div class="cc-card__inner">
                  <div class="cc-card__img cc-img cc-img--cover">
                    <img
                      data-src="https://assets.codecourseau.org/assets/farm.png?mtime=20201014162552&focal=none"
                      alt="Farm"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      class="lazyload"
                    />
                  </div>
                  <div class="cc-card__content">
                    <h3 class="cc-card__title">
                      <a
                        href="/projects/make-it-rain/"
                        class="cc-card__overlay-link"
                      >
                        The drought is ending on the farm! Help them collect the
                        water!
                      </a>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="block-project-highlights__content">
          <div size="m" class="cc-spacer cc-spacer--m"></div>
          <div class="body-m cc-markup">
            <p>
              Not sure where to start? Check out our{" "}
              <a
                href="/projects/languages/scratch/"
                data-print="https://www.codecourseau.org/projects/languages/scratch/"
                class="cc-link"
              >
                <span class="cc-link__inner">Scratch projects</span>
              </a>{" "}
              which explore the basics of digital systems.
            </p>
          </div>
        </div> */}
      </div>
      <SpacerLarge />
    </div>
  );
};
