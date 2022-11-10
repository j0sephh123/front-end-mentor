import { planetsMap } from "../constants";
import { styled } from "../theme";

const HeaderMobileToggledStyle = styled("div", {});
const PlanetStyle = styled("div", {
  fontSize: "15px",
  textTransform: "uppercase",
  fontFamily: "$SpartanBold",
});

type Props = {
  onClick: any;
};

const HeaderMobileToggled = ({ onClick }: Props) => {
  return (
    <HeaderMobileToggledStyle>
      {Object.values(planetsMap).map((planet, index) => {
        console.log(planet);

        return (
          <PlanetStyle onClick={() => onClick(index)} key={planet.name}>
            {planet.name}
          </PlanetStyle>
        );
      })}
    </HeaderMobileToggledStyle>
  );
};

export default HeaderMobileToggled;
