import { Planet, Status } from "./models";

export const tabs = {
  mobile: ["OVERVIEW", "STRUCTURE", "SURFACE"],
  desktop: ["OVERVIEW", "INTERNAL STRUCTURE", "SURFACE GEOLOGY"],
};

type StatusRecord = Record<Extract<Status, 0 | 1>, { hero: string }>;
type PlanetsDict = Record<Planet, StatusRecord>;

const baseImgPath = "src/assets/images/";
export const basePlanetImgPath = `${baseImgPath}planet-`;
export const basePlanetGeologyImgPath = `${baseImgPath}geology-`;

export const planetsMap: Record<Planet, any> = {
  0: { name: "mercury", size: 111 },
  1: { name: "venus", size: 154 },
  2: { name: "earth", size: 173 },
  3: { name: "mars", size: 129 },
  4: { name: "jupiter", size: 224 },
  5: { name: "saturn", size: 256 },
  6: { name: "uranus", size: 176 },
  7: { name: "neptune", size: 173 },
};

export const mapStatusToTitle = ["overview", "structure", "geology"];
