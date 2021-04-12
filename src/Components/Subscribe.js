export const Subscribe = () => {
  return (
    <aside role="complementary" class="cc-subscribe no-print">
      <div size="m" class="cc-spacer cc-spacer--m cc-spacer--l@sm"></div>
      <div class="cc-subscribe__bg">
        <div class="cc-subscribe__bg-img">
          <div class="cc-img">
            <img
              data-src="/_nuxt/img/robot-green.344f853.png"
              data-srcset=""
              alt=""
              src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
              class="lazyload"
            />
          </div>
        </div>
      </div>
      <div class="cc-subscribe__inner container container--small">
        <div class="cc-subscribe__content">
          <h2 class="cc-subscribe__heading">Be the first to know</h2>
          <p class="cc-subscribe__text body-m">
            Receive updates on technology trends, latest Argo projects and
            community news from around the globe!
          </p>{" "}
          <span>
            <form class="cc-subscribe__form">
              <div class="cc-subscribe__input margin-b-x2">
                <label for="email-subscribe" class="sr-only">
                  Email
                </label>{" "}
                <input
                  id="email-subscribe"
                  placeholder="Email"
                  aria-required="true"
                  type="email"
                  name="email-subscribe"
                />{" "}
                <button type="submit">Register</button>
              </div>
              <div class="cc-subscribe__error-container"></div>
            </form>
          </span>
        </div>
      </div>
      <div size="m" class="cc-spacer cc-spacer--m cc-spacer--l@sm"></div>
    </aside>
  );
};
