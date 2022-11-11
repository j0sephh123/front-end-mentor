import { planetsMap, PlanetsMapIndex } from "../constants";
import { colors, styled } from "../theme";
import ChevronIcon from "../assets/images/icon-chevron.svg";
import { centerContent } from "../utils/styleHelpers";

const HeaderMobileToggledStyle = styled("div", {
  paddingTop: "24px",
  height: "100vh",
});
const Wrapper = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  paddingBottom: "20px",
  paddingTop: "20px",
  "&:not(:last-of-type)": {
    borderBottom: `1px solid ${colors.mediumGray}`,
  },
});
const PlanetStyle = styled("div", {
  fontSize: "15px",
  paddingLeft: "33px",
  textTransform: "uppercase",
  fontFamily: "$SpartanBold",
  letterSpacing: "1.36",
});

type Props = {
  onClick: any;
};

const HeaderMobileToggled = ({ onClick }: Props) => {
  return (
    <HeaderMobileToggledStyle>
      {Object.values(planetsMap).map((planet, index) => {
        return (
          <Wrapper onClick={() => onClick(index)} key={planet.name}>
            <div style={{ ...centerContent }}>
              <div
                style={{
                  width: "20px",
                  height: "20px",
                  borderRadius: "50%",
                  backgroundColor:
                    planetsMap[index as PlanetsMapIndex]["color"],
                }}
              ></div>
              <PlanetStyle>{planet.name}</PlanetStyle>
            </div>
            <img src={ChevronIcon} />
          </Wrapper>
        );
      })}
    </HeaderMobileToggledStyle>
  );
};

export default HeaderMobileToggled;
