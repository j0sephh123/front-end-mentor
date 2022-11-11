import {
  basePlanetGeologyImgPath,
  basePlanetImgPath,
  planetsMap,
} from "../constants";
import { Planet, Status } from "../models";
import { styled } from "../theme";
import { centerContent } from "../utils/styleHelpers";

const HeroStyle = styled("div", {
  height: "$heroMobileHeight",
  position: "relative",
  ...centerContent,

  "@lg": {
    width: "100%",
  },
});
const GeologyImgStyle = styled("img", {
  position: "absolute",
});

type Props = {
  planet: Planet;
  status: Status;
};

const HeroDesktop = ({ status, planet }: Props) => {
  const planetName = planetsMap[planet]["name"];
  const isGeologyStatus = status === 2;
  const isInternalStatus = status === 1;
  const src = `${basePlanetImgPath}${planetName}${
    isInternalStatus ? "-internal" : ""
  }.svg`;
  const size = planetsMap[planet]["desktopSize"];
  const width = size * 0.5;
  const left = size * 0.25;
  const bottom = -(size * 0.3);

  return (
    <HeroStyle>
      <div
        style={{
          position: "relative",
        }}
      >
        <img
          style={{
            width: size,
            height: size,
          }}
          src={src}
        />
        {isGeologyStatus && (
          <GeologyImgStyle
            style={{
              width,
              left,
              bottom,
            }}
            src={`${basePlanetGeologyImgPath}${planetName}.png`}
          />
        )}
      </div>
    </HeroStyle>
  );
};

export default HeroDesktop;
