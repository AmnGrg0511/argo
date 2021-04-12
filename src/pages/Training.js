import {
  CenterFocusStrong,
  Facebook,
  Instagram,
  LinkedIn,
  Mail,
} from "@material-ui/icons";
import { useState } from "react";
import ceo from "../assets/jay.png";
import co from "../assets/kg.jpeg";

export const Training = () => {
  const [hover, setHover] = useState(0);
  return (
    <div
      class="row justify-content-center d-flex align-items-center"
      style={{
        margin: "6rem 2rem",
        justifyContent: "center",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div class="col-md-3 single-team">
        <div
          style={{ position: "relative" }}
          onMouseEnter={() => setHover(1)}
          onMouseLeave={() => setHover(0)}
        >
          <img class="img-fluid" src={ceo} alt="" />
          <div
            style={{
              position: "absolute",
              top: "80%",
              left: 0,
              backgroundColor: "rgba(0, 0, 0, 0.7)",
              height: "20%",
              width: "100%",
              boxSizing: "inherit",
              display: "flex",
              opacity: hover === 1 ? 1 : 0,
              transition: "opacity 0.5s",
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
            }}
          >
            <a href="https://www.facebook.com/JayendraUpadhyay30">
              <Facebook class="ccv-icon" />
            </a>
            <a href="mailto:ee11b013@iith.ac.in">
              <Mail class="ccv-icon" />
            </a>
            <a href="https://www.linkedin.com/in/jayendra-sharma-621a6372/">
              <LinkedIn class="ccv-icon" />
            </a>
          </div>
        </div>
        <div class="meta-text mt-30 text-center">
          <h4 style={{ margin: 5 }}>Jayendra Kumar Sharma</h4>
          <h6 style={{ margin: 0 }}>CEO</h6>
        </div>
      </div>
      <div class="col-md-3 single-team">
        <div
          style={{ position: "relative" }}
          onMouseEnter={() => setHover(2)}
          onMouseLeave={() => setHover(0)}
        >
          <img class="img-fluid" src={co} alt="" />
          <div
            style={{
              position: "absolute",
              top: "80%",
              left: 0,
              backgroundColor: "rgba(0, 0, 0, 0.7)",
              height: "20%",
              width: "100%",
              boxSizing: "inherit",
              display: "flex",
              opacity: hover === 2 ? 1 : 0,
              transition: "opacity 0.5s",
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
            }}
          >
            <a href="https://www.instagram.com/argocoding/">
              <Instagram class="ccv-icon" />
            </a>
            <a href="mailto:argoeduventure@gmail.com">
              <Mail class="ccv-icon" />
            </a>
            <a href="https://www.linkedin.com/in/khemchand-gujjar-b245b144/">
              <LinkedIn class="ccv-icon" />
            </a>
          </div>
        </div>
        <div class="meta-text mt-30 text-center">
          <h4 style={{ margin: 5 }}>Khemchand Gujjar</h4>
          <h6 style={{ margin: 0 }}>Mentor</h6>
        </div>
      </div>
    </div>
  );
};
