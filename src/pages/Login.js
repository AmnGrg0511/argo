import { useState } from "react";
import image from "../assets/Children-in-classroom_04-03-18.jpg";
import image2 from "../assets/double-right-arrow.svg";
import { SpacerLarge } from "../Components/common/SpacerLarge";
export const Login = () => {
  const [classTab, setClassTab] = useState(6);
  const [cName, setCName] = useState("");
  const [pName, setPName] = useState("");
  const [pNo, setPNo] = useState("");
  const [pEmail, setPEmail] = useState("");
  return (
    <section class="_5rl-7 cc-hero__inner container">
      <div className="_18mib">
        <SpacerLarge />
        <div class="_3v_4k">
          <div class="U24j7">
            <h1 class="_2PJ6C">Coding skills for the creators of tomorrow</h1>
            <p class="_1nK0H">
              Live one-on-one coding classes for kids aged 6-18
            </p>
            <img
              src={image}
              loading="eager"
              width="470"
              alt="Codr child"
              class="_3a00E"
              style={{
                borderRadius: "8px",
                width: "auto",
                maxWidth:"420px",
                marginLeft:"2rem",
                boxShadow: "rgb(0 0 0 / 33%) 8px 9px 0px",
              }}
            />
          </div>
          <button class="Bj_Fg _2eLpQ _1snsU">
            book a free class{" "}
            <img
              src={image2}
              loading="lazy"
              width="20"
              height="16"
              class="GrHQr"
              alt="right arrow"
            />
          </button>
          <button class="_1mzxA">Login</button>
          <div class="_1e_Wf _2qus7">
            <div class="_3ok0P">
              <div class="_1ylHQ">
                <label for="kidsName" class="sWXw0">
                  Child's name
                </label>
              </div>
              <div class="height-full">
                <div>
                  <input
                    type="text"
                    placeholder="Enter child's name"
                    spellCheck={false}
                    value={cName}
                    onChange={(e)=>setCName(e.target.value)}
                    name="kidsName"
                    id="kidsName"
                    class="_2g-KU input"
                    autocomplete="on"
                    required
                  />
                </div>
              </div>
            </div>
            <div class="_3ok0P">
              <div class="_1ylHQ">
                <label for="parentsName" class="sWXw0">
                  Parent's name
                </label>
              </div>
              <div class="height-full">
                <div>
                  <input
                    type="text"
                    placeholder="Enter parent's name"
                    spellCheck={false}
                    value={pName}
                    onChange={(e)=>setPName(e.target.value)}
                    name="parentsName"
                    id="parentsName"
                    class="_2g-KU input"
                    autocomplete="on"
                    required
                  />
                </div>
              </div>
            </div>
            <div class="_3ok0P">
              <div class="_1ylHQ">
                <label for="parentsPhone" class="sWXw0">
                  Parent's number
                </label>
              </div>
              <div class="_2u-Q5 oCbKX">
                <div class="_3niO0">
                  <div class="_2sRcV _2fpdW _1D97b">
                    <div class="SnTDm _29LDL">
                      <span class="OjlQ0 _3s6ar">+91</span>
                    </div>
                  </div>
                  <div class="_1xlb1 height-full">
                    <div>
                      <input
                        type="tel"
                        placeholder="Enter mobile number"
                        value={pNo}
                        spellCheck={false}
                        onChange={(e)=>setPNo(e.target.value)}
                        name="parentsPhone"
                        id="parentsPhone"
                        maxlength="10"
                        class="_1lGuO _2Fy0S input"
                        autocomplete="tel"
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="_3ok0P">
              <div class="_1ylHQ">
                <label for="parentsEmail" class="sWXw0">
                  Parent's email ID
                </label>
              </div>
              <div class="height-full">
                <div>
                  <input
                    style={{ border: "1px solid rgba(129, 118, 160, .27)" }}
                    type="email"
                    spellCheck={false}
                    placeholder="Enter parent's email Id"
                    value={pEmail}
                    onChange={(e)=>setPEmail(e.target.value)}
                    name="parentsEmail"
                    id="parentsEmail"
                    class="_2g-KU input"
                    autocomplete="nope"
                    required
                  />
                </div>
              </div>
            </div>
            <div class="_3ok0P">
              <div class="_1ylHQ">
                <label for="kidsClass" class="sWXw0">
                  Child's class
                </label>
              </div>
              <div class="_31BE_">
                <div onClick={()=>setClassTab(6)} class={`_39cdp ${classTab===6 && "hL17U"}`}>
                  6<sup>th</sup>
                </div>
                <div onClick={()=>setClassTab(7)} class={`_39cdp ${classTab===7 && "hL17U"}`}>
                  7<sup>th</sup>
                </div>
                <div onClick={()=>setClassTab(8)} class={`_39cdp ${classTab===8 && "hL17U"}`}>
                  8<sup>th</sup>
                </div>
                <div onClick={()=>setClassTab(9)} class={`_39cdp ${classTab===9 && "hL17U"}`}>
                  9<sup>th</sup>
                </div>
                <div onClick={()=>setClassTab(10)} class={`_39cdp ${classTab===10 && "hL17U"}`}>
                  10<sup>th</sup>
                </div>
                <div onClick={()=>setClassTab(11)} class={`_39cdp ${classTab===11 && "hL17U"}`}>
                  11<sup>th</sup>
                </div>
                <div onClick={()=>setClassTab(12)} class={`_39cdp ${classTab===12 && "hL17U"}`}>
                  12<sup>th</sup>
                </div>
              </div>
            </div>
            <div class="_3ok0P">
              <div class="_1ylHQ">
                <label for="isLaptopAvailable" class="sWXw0">
                  Do you have a laptop/PC for class?
                </label>
              </div>
              <div style={{ display: "flex" }}>
                <div class="Y2qX6 height-full">
                  <label class="_2S2IE" for="Yes">
                    Yes
                  </label>
                  <div>
                    <input
                      type="radio"
                      placeholder=""
                      value="true"
                      name="isLaptopAvailable"
                      id="Yes"
                      class="input"
                      autocomplete="on"
                    />
                  </div>
                </div>
                <div class="Y2qX6 height-full">
                  <label class="_2S2IE" for="No">
                    No
                  </label>
                  <div>
                    <input
                      type="radio"
                      placeholder=""
                      value="false"
                      name="isLaptopAvailable"
                      id="No"
                      class="input"
                      autocomplete="on"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* <div class="_3ok0P">
              <div class="_1wqFb">
                <input
                  type="checkbox"
                  name="isWhatsappChecked"
                  id="isWhatsappChecked-undefined"
                  checked=""
                  style={{ display: "none" }}
                  value=""
                />
                <label
                  class="_1kRd5 _1Sg_K"
                  for="isWhatsappChecked-undefined"
                ></label>
                <label for="isWhatsappChecked-undefined" class="fj5uH _2Teu5 ">
                  Get class reminders on WhatsApp
                </label>
              </div>
            </div> */}
            <button type="submit" class="_3DUV8 _3g9vU _2qkos _3n7L8">
              Book a free trial
            </button>
            <div class="_3ZSuR">
              <span>Already have an account?</span>
              <a href="/login/"> LOGIN</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
