import { useState } from "react";
import Details from "./components/DetailsMobile";
import Header from "./components/Header";
import HeaderMobileToggled from "./components/HeaderMobileToggled";
import Hero from "./components/HeroMobile";
import Summary from "./components/SummaryMobile";
import Tabs from "./components/TabsMobile";
import { Planet, Status } from "./models";
import { breakpoints, globalStyles, styled } from "./theme";
import data from "./data.json";
import { mapStatusToTitle } from "./constants";
import useMediaQuery from "./hooks/useMediaQuery";

// TODO fix data type here as the correct return of the function
const loadData = () => data;

// TODO Ugly, remove from here.
const AppStyle = styled("div", {
  height: "100vh",
  backgroundColor: "$black",
  color: "$white",
  padding: "$5 $7 $12 $7",
});

function App() {
  // TODO Why is this here?
  globalStyles();

  const [isMobileNavVisible, setIsMobileNavVisible] = useState(false);
  const [planet, setPlanet] = useState<Planet>(0);
  const [status, setStatus] = useState<Status>(0);
  const name = loadData()[planet]["name"];
  // TODO fix types
  // @ts-ignore
  const content = loadData()[planet][mapStatusToTitle[status]]["content"];
  // @ts-ignore
  const source = loadData()[planet][mapStatusToTitle[status]]["source"];
  // TODO fix useMediaQuery
  // 1. To NOT use deprecated functions
  // 2. To have prepared arguments instead of creating them on the fly here.
  const isMobile = useMediaQuery(`(max-width: ${breakpoints.mobile}px)`);

  return (
    <AppStyle>
      {isMobile ? (
        <>
          <Header
            isMobile
            onClick={() => setIsMobileNavVisible(!isMobileNavVisible)}
          />
          {!isMobileNavVisible ? (
            <>
              <Tabs
                onClick={(tab: Status) => {
                  if (tab !== status) {
                    setStatus(tab);
                  }
                }}
                status={status}
                planet={planet}
              />
              <Hero planet={planet} status={status} />
              <Summary name={name} content={content} source={source} />
              <Details />
            </>
          ) : (
            <HeaderMobileToggled
              onClick={(planetIndex: Planet) => {
                setPlanet(planetIndex);
                setIsMobileNavVisible(false);
              }}
            />
          )}
        </>
      ) : (
        <>
          <Header onListItemClick={setPlanet} />
          <Hero planet={planet} status={status} />
          <Tabs
            onClick={(tab: Status) => {
              if (tab !== status) {
                setStatus(tab);
              }
            }}
            status={status}
            planet={planet}
          />
          <Summary name={name} content={content} source={source} />
          <Details />
        </>
      )}
    </AppStyle>
  );
}

export default App;
