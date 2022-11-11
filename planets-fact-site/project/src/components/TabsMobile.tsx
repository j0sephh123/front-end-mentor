import { planetsMap, tabs } from "../constants";
import { Planet, Status } from "../models";
import { styled } from "../theme";

const Wrapper = styled("div", {
  display: "grid",
  position: "relative",
  gridTemplateColumns: "1fr 1fr 1fr",
  columnGap: 44,
  padding: "$6 0",
  "&::before": {
    content: "",
    left: -24,
    bottom: 0,
    height: 1,
    width: "100vw",
    backgroundColor: "$mediumGray",
    position: "absolute",
  },
});



const Tab = styled("div", {
  fontFamily: "$SpartanBold",
  letterSpacing: "$tabs",
  fontSize: "$xxs",
  alignSelf: "center",
  justifySelf: "center",
  position: "relative",

  variants: {
    isActive: {
      true: {
        "&::before": {
          content: "",
          position: "absolute",
          height: 4,
          backgroundColor: "$teal",
          width: "100%",
          bottom: -20,
        },
      },
    },
    // TODO generate this
    planet: {
      0: {
        "&::before": {
          backgroundColor: planetsMap[0]["color"],
        },
      },
      1: {
        "&::before": {
          backgroundColor: planetsMap[1]["color"],
        },
      },
      2: {
        "&::before": {
          backgroundColor: planetsMap[2]["color"],
        },
      },
      3: {
        "&::before": {
          backgroundColor: planetsMap[3]["color"],
        },
      },
      4: {
        "&::before": {
          backgroundColor: planetsMap[4]["color"],
        },
      },
      5: {
        "&::before": {
          backgroundColor: planetsMap[5]["color"],
        },
      },
      6: {
        "&::before": {
          backgroundColor: planetsMap[6]["color"],
        },
      },
      7: {
        "&::before": {
          backgroundColor: planetsMap[7]["color"],
        },
      },
    },
  },

  compoundVariants: [
    {
      isActive: true,
      css: {},
    },
  ],
});

type Props = {
  planet: Planet;
  status: Status;
  onClick: any;
};

const TabsMobile = ({ planet, status, onClick }: Props) => (
  <Wrapper>
    {tabs.mobile.map((tab, index) => (
      <Tab
        onClick={() => onClick(index)}
        planet={planet}
        isActive={status === index}
        key={tab}
      >
        {tab}
      </Tab>
    ))}
  </Wrapper>
);

export default TabsMobile;
