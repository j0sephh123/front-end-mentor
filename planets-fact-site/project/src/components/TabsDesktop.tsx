import { planetsMap, tabs } from "../constants";
import { Planet, Status } from "../models";
import { styled } from "../theme";

const TabsDesktopStyle = styled("div", {
  marginTop: 40,
});

type Props = {
  planet: Planet;
  status: Status;
  onClick: any;
};

const TabDesktop = styled("div", {
  border: "1px solid $whiteWithHalfOpacity",
  paddingLeft: "28px",
  paddingTop: "12px",
  paddingBottom: "12px",
  marginBottom: "16px",
  cursor: "pointer",
});

const Index = styled("span", {
  fontSize: 12,
  fontFamily: "$SpartanBold",
  letterSpacing: "2.57px",
  color: "$whiteWithHalfOpacity",
  paddingRight: 28,
});
const Tab = styled("span", {
  position: "relative",
  fontSize: 12,
  fontFamily: "$SpartanBold",
  letterSpacing: "2.57px",

  "&::before": {
    content: "",
    position: "absolute",
  },
});

const TabsDesktop = ({ planet, status, onClick }: Props) => {
  const { color } = planetsMap[planet];

  return (
    <TabsDesktopStyle>
      {tabs.desktop.map((tab, index) => (
        <TabDesktop
          style={{
            backgroundColor: status === index ? color : "transparent",
          }}
          onClick={() => onClick(index)}
          key={tab}
        >
          <Index>0{index + 1}</Index>
          <Tab>{tab}</Tab>
        </TabDesktop>
      ))}
    </TabsDesktopStyle>
  );
};

export default TabsDesktop;
