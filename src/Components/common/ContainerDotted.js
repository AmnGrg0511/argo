export const ContainerDotted = ({ heading1, heading2, text, linkText }) => {
  return (
    <div class="container">
      <div class="cc-callout" data-v-5422303e>
        <div class="cc-callout__inner" data-v-5422303e>
          <div
            size="m"
            class="cc-spacer cc-spacer--m cc-spacer--l@sm"
            data-v-5422303e
          ></div>
          <div
            class="cc-callout__container container container--small-inset"
            data-v-5422303e
          >
            <h2 class="cc-callout__title" data-v-5422303e>
              <span
                class="cc-billboard-text cc-billboard-text--reversed"
                data-v-5422303e
              >
                {heading1}{" "}
                <span class="cc-billboard-text__highlight">{heading2}</span>
              </span>
            </h2>
            {/* <div
              class="cc-callout__content cc-markup cc-markup--dark"
              data-v-5422303e
            >
              <p>
                {text.split("~").map((seg, idx) =>
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
            </div>{" "} */}
            <div style={{ display: "flex", marginBottom: "2rem" }}>
              <div style={{ margin: "2%" }}>
                <img
                  src="https://codr.toppr.com/public/images/home/children/improves-logical-thinking.webp"
                  width="200px"
                  style={{
                    borderRadius: "8px",
                    width: "auto",
                    boxShadow: "rgb(0 0 0 / 35%) 6px 8px",
                  }}
                />
                <p
                  className="cc-image-quote__name"
                  style={{ marginTop: "1rem" }}
                >
                  Improves logical thinking
                </p>
              </div>
              <div style={{ margin: "2%" }}>
                <img
                  src="https://codr.toppr.com/public/images/home/children/sharpens-problem-solving.webp"
                  width="200px"
                  style={{
                    borderRadius: "8px",
                    width: "auto",
                    boxShadow: "rgb(0 0 0 / 35%) 6px 8px",
                  }}
                />
                <p
                  className="cc-image-quote__name"
                  style={{ marginTop: "1rem" }}
                >
                  Sharpens problem solving
                </p>
              </div>
              <div style={{ margin: "2%" }}>
                <img
                  src="https://codr.toppr.com/public/images/home/children/increases-focus-and-concentration.webp"
                  width="200px"
                  style={{
                    borderRadius: "8px",
                    width: "auto",
                    boxShadow: "rgb(0 0 0 / 35%) 6px 8px",
                  }}
                />
                <p
                  className="cc-image-quote__name"
                  style={{ marginTop: "1rem" }}
                >
                  Increases focus and concentration
                </p>
              </div>
              <div style={{ margin: "2%" }}>
                <img
                  src="https://codr.toppr.com/public/images/home/children/open-up-career-opportunity.webp"
                  width="200px"
                  style={{
                    borderRadius: "8px",
                    width: "auto",
                    boxShadow: "rgb(0 0 0 / 35%) 6px 8px",
                  }}
                />
                <p
                  className="cc-image-quote__name"
                  style={{ marginTop: "1rem" }}
                >
                  Opens up career opportunities
                </p>
              </div>
            </div>
            <a
              href="/why-code-course/"
              data-print="https://www.codecourseau.org/why-code-course/"
              class="cc-callout__cta cc-link cc-link--mint"
              data-v-5422303e
            >
              <span class="cc-link__inner">{linkText}</span>{" "}
              <i
                size=""
                aria-hidden="true"
                class="cc-link__icon cc-icon cc-icon--text"
              ></i>
            </a>
          </div>
          <div
            size="m"
            class="cc-spacer cc-spacer--m cc-spacer--l@sm"
            data-v-5422303e
          ></div>
        </div>
      </div>
    </div>
  );
};
