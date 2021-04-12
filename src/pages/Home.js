import { ContainerBlue } from "../Components/common/ContainerBlue";
import { ContainerDotted } from "../Components/common/ContainerDotted";
import { ContainerWhite } from "../Components/common/ContainerWhite";
import { ContainerGreen } from "../Components/common/ContainerGreen";
import { Spacer } from "../Components/common/Spacer";
import { ContainerBlueBottom } from "../Components/common/ContainerBlueBottom";
import { ContainerSteps } from "../Components/common/ContainerSteps";
import { SpacerLarge } from "../Components/common/SpacerLarge";
import { Login } from "./Login";
import { Quote } from "../Components/common/Quote";

export const Home = () => {
  return (
    <main id="content">
      <div uri="/">
        <Login />
        <div>
          <Spacer />
          <ContainerDotted
            heading1="Every child should have the chance to learn the"
            heading2="skills of tomorrow."
            text="Argo India aims to give every child free access to the skills of tomorrow and is part of the ~MeetAI Foundation~, MeetAI's aim to provide better tools to those who cares for the future."
            linkText="Why Argo?"
          />
          <Spacer />
          <ContainerWhite />
          {/* <Spacer />
          <ContainerBlueBottom /> */}
          <Spacer />
          <Quote />
          {/* <SpacerLarge />
          <ContainerSteps />
          <SpacerLarge />
          <ContainerDotted
            heading1="Coding skills are the future."
            heading2="Bring Argo to your classroom."
            text="With a strong community of over 165,000 Indian children and 2,200 clubs, become one of our 3,200 trained teachers and help us ~#getkidscoding"
            linkText="Get involved"
          />
          <Spacer />
          <ContainerGreen /> */}
          <Spacer />
        </div>
        {/* <ContainerBlue
          title="Get kids coding!"
          subtitle="Free coding courses that teach creative and computational skills to Indian kids aged 13-18."
          btnText="Start a course"
          tiles={[
            {
              heading: "Fun projects",
              content:
                "100s of fun, step-by-step ~projects~ to make games, websites, art and more",
            },
            {
              heading: "Anyone can teach",
              content:
                "Step-by-step resources and teacher ~training~ to help you at every stage",
            },
            {
              heading: "A global community",
              content:
                "A supportive network with over 180,000 kids already coding",
            },
          ]}
        /> */}
      </div>
    </main>
  );
};
