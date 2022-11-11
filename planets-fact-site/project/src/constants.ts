import { Planet, Status } from "./models";
import { colors } from "./theme";

export const tabs = {
  mobile: ["OVERVIEW", "STRUCTURE", "SURFACE"],
  desktop: ["OVERVIEW", "INTERNAL STRUCTURE", "SURFACE GEOLOGY"],
};

type StatusRecord = Record<Extract<Status, 0 | 1>, { hero: string }>;
type PlanetsDict = Record<Planet, StatusRecord>;

const baseImgPath = "src/assets/images/";
export const basePlanetImgPath = `${baseImgPath}planet-`;
export const basePlanetGeologyImgPath = `${baseImgPath}geology-`;

type PlanetConfig = {
  name: string;
  mobileSize: number;
  desktopSize: number;
  color: string;
};
export type PlanetsMap = Record<Planet, PlanetConfig>;
export type PlanetsMapIndex = keyof PlanetsMap;

export const planetsMap: PlanetsMap = {
  0: { name: "mercury", desktopSize: 290, mobileSize: 111, color: colors.teal },
  1: { name: "venus", desktopSize: 370, mobileSize: 154, color: colors.yellow },
  2: { name: "earth", desktopSize: 450, mobileSize: 173, color: colors.purple },
  3: { name: "mars", desktopSize: 336, mobileSize: 129, color: colors.orange1 },
  4: {
    name: "jupiter",
    desktopSize: 582,
    mobileSize: 224,
    color: colors.orange2,
  },
  5: {
    name: "saturn",
    desktopSize: 404,
    mobileSize: 256,
    color: colors.orange3,
  },
  6: { name: "uranus", desktopSize: 458, mobileSize: 176, color: colors.green },
  7: { name: "neptune", desktopSize: 450, mobileSize: 173, color: colors.blue },
};

export const mapStatusToTitle = ["overview", "structure", "geology"];
