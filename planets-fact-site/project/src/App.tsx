import { useState } from "react";
import DetailsMobile from "./components/DetailsMobile";
import Header from "./components/Header";
import HeaderMobileToggled from "./components/HeaderMobileToggled";
import HeroMobile from "./components/HeroMobile";
import Summary from "./components/SummaryMobile";
import TabsMobile from "./components/TabsMobile";
import { Planet, Status } from "./models";
import { breakpoints, globalStyles, styled } from "./theme";
import data from "./data.json";
import { mapStatusToTitle } from "./constants";
import useMediaQuery from "./hooks/useMediaQuery";
import TabsDesktop from "./components/TabsDesktop";
import DetailsDesktop from "./components/DetailsDesktop";
import HeroDesktop from "./components/HeroDesktop";

// TODO fix data type here as the correct return of the function
const loadData = () => data;

// TODO Ugly, remove from here.
const AppStyle = styled("div", {
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

  const { radius, revolution, rotation, temperature } = loadData()[planet];

  return (
    <AppStyle>
      {isMobile ? (
        <>
          <Header
            planet={planet}
            status={status}
            isMobile
            onClick={() => setIsMobileNavVisible(!isMobileNavVisible)}
          />
          {!isMobileNavVisible ? (
            <>
              <TabsMobile
                onClick={(tab: Status) => {
                  if (tab !== status) {
                    setStatus(tab);
                  }
                }}
                status={status}
                planet={planet}
              />
              <HeroMobile planet={planet} status={status} />
              <Summary name={name} content={content} source={source} />
              <DetailsMobile
                radius={radius}
                revolution={revolution}
                rotation={rotation}
                temperature={temperature}
              />
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
          <Header status={status} planet={planet} onListItemClick={setPlanet} />
          <div
            style={{
              marginTop: "126px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <HeroDesktop planet={planet} status={status} />
            <div
              style={{
                width: "350px",
                marginRight: "140px",
              }}
            >
              <Summary name={name} content={content} source={source} />
              <TabsDesktop
                onClick={(tab: Status) => {
                  if (tab !== status) {
                    setStatus(tab);
                  }
                }}
                status={status}
                planet={planet}
              />
            </div>
          </div>
          <DetailsDesktop
            radius={radius}
            revolution={revolution}
            rotation={rotation}
            temperature={temperature}
          />
        </>
      )}
    </AppStyle>
  );
}

export default App;
