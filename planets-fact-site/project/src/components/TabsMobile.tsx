import { tabs } from "../constants";
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
    planet: {
      0: {
        "&::before": {
          backgroundColor: "$teal",
        },
      },
      1: {
        "&::before": {
          backgroundColor: "$orange3",
        },
      },
      2: {
        "&::before": {
          backgroundColor: "$purple",
        },
      },
      3: {
        "&::before": {
          backgroundColor: "$orange1",
        },
      },
      4: {
        "&::before": {
          backgroundColor: "$orange2",
        },
      },
      5: {
        "&::before": {
          backgroundColor: "$orange3",
        },
      },
      6: {
        "&::before": {
          backgroundColor: "$green",
        },
      },
      7: {
        "&::before": {
          backgroundColor: "$blue",
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
