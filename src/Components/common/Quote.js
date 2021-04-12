export const Quote = () => {
  return (
    <div class="container">
      <div class="cc-image-quote" __typename="quote_BlockType">
        <div size="m" class="cc-spacer cc-spacer--m cc-spacer--l@sm"></div>
        <div class="container container--small-inset">
          <div class="row middle-sm">
            <div class="col-xxs-12 col-sm-5">
              <svg viewBox="0 0 100 100" class="cc-image-quote__image">
                <image
                  href="https://mcdn.wallpapersafari.com/medium/98/48/dBU2LM.jpg"
                  style={{ width: "100%", height: "100%" }}
                ></image>
              </svg>
            </div>
            <div class="col-xxs-12 col-sm-7 col-md-6 col-md-offset-1">
              <blockquote class="cc-image-quote__text">
                <p>
                  Everyone in this country should learn how to program because
                  it teaches you how to think
                </p>
              </blockquote>{" "}
              <p class="cc-image-quote__name">
                Steve Jobs
                <br />{" "}
                <span class="text-normal">
                  Co-founder of{" "}
                  <a
                    className="cc-link--mint"
                    href="https://en.wikipedia.org/wiki/Apple_Inc."
                  >
                    Apple Inc.
                  </a>
                </span>
              </p>
            </div>
          </div>
        </div>{" "}
        <div size="m" class="cc-spacer cc-spacer--m cc-spacer--l@sm"></div>
      </div>
    </div>
  );
};
