import { useState } from "react";
import argo from "../assets/ARGO.png";
import { ExpandMore } from "@material-ui/icons";
import Join from "./buttons/Join";

export const Header = () => {
  const [getInv, setGetInv] = useState(false);
  return (
    <header class="cc-header" data-v-d4c99968 style={{position:"sticky", backgroundColor: "#fffffff0"}}>
      <div class="cc-header__inner container" data-v-d4c99968>
        <a href="/">
          <img src={argo} width="100px" />
        </a>
        <span class="cc-header__spacer" data-v-d4c99968></span>
        <nav
          aria-label="Primary"
          class="cc-header-nav no-print"
          data-v-d4c99968
        >
          <div class="cc-header-nav__inner">
            <div class="cc-header-nav__content">
              <ul class="cc-header-nav__list">
                <li class="cc-header-nav__list-item">
                  <a href="/" class="cc-header-nav__list-link">
                    Home
                  </a>
                </li>
                {/* <li class={`cc-header-nav__list-item ${getInv && "is-open"}`}>
                  <a
                    onClick={() => setGetInv(!getInv)}
                    role="button"
                    href="javascript:void(0)"
                    aria-haspopup="true"
                    aria-expanded={getInv}
                    class="cc-header-nav__list-link"
                  >
                    Get involved
                    <ExpandMore
                      fontSize="large"
                      class={`cc-icon-exp cc-icon-exp--text cc-header-nav__list-link-icon ${
                        getInv && "is-active"
                      }`}
                    />
                  </a>
                  <ul
                    class="cc-header-sub-nav"
                    style={{ display: !getInv && "none" }}
                    data-v-3c5814bc
                    data-v-ab0821d6
                  >
                    <li data-v-3c5814bc>
                      <a
                        href="/start-a-course/"
                        data-print="https://www.codecourseau.org/start-a-course/"
                        class="cc-link"
                        data-v-3c5814bc
                      >
                        <span class="cc-link__inner">Start a course</span>
                      </a>
                    </li>
                    <li data-v-3c5814bc>
                      <a
                        href="/volunteer/"
                        data-print="https://www.codecourseau.org/volunteer/"
                        class="cc-link"
                        data-v-3c5814bc
                      >
                        <span class="cc-link__inner">Volunteer</span>
                      </a>
                    </li>
                    <li class="has-seperator" data-v-3c5814bc>
                      <a
                        href="/for-teachers/"
                        data-print="https://www.codecourseau.org/for-teachers/"
                        class="cc-link"
                        data-v-3c5814bc
                      >
                        <span class="cc-link__inner">For teachers</span>
                      </a>
                    </li>
                    <li data-v-3c5814bc>
                      <a
                        href="/for-libraries/"
                        data-print="https://www.codecourseau.org/for-libraries/"
                        class="cc-link"
                        data-v-3c5814bc
                      >
                        <span class="cc-link__inner">For libraries</span>
                      </a>
                    </li>
                  </ul>
                </li> */}
                <li class="cc-header-nav__list-item">
                  <a href="/training" class="cc-header-nav__list-link">
                    Our Team
                  </a>
                </li>
                <li class="cc-header-nav__list-item">
                  <a href="/courses" class="cc-header-nav__list-link">
                    Courses
                  </a>
                </li>
                <li class="cc-header-nav__list-item">
                  <a href="/login" class="cc-header-nav__list-link">
                    Log in
                  </a>
                </li>
              </ul>{" "}
              {/* <Join /> */}
            </div>
          </div>
        </nav>
        <div class="cc-header__actions no-print" data-v-d4c99968>
          <Join />
          <button
            type="button"
            aria-expanded="false"
            class="cc-header__menu-btn"
            data-v-d4c99968
          >
            Menu
            <div
              class="cc-header__menu-btn-hamburger cc-hamburger"
              data-v-d4c99968
            >
              <div class="cc-hamburger__box">
                <div class="cc-hamburger__inner"></div>
              </div>
            </div>
          </button>
        </div>
      </div>
    </header>
  );
};
