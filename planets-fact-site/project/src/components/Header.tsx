import { styled } from "../theme";
import HamburgerIcon from "../assets/images/icon-hamburger.svg";
import { H2 } from "../styled/Typography";
import { planetsMap } from "../constants";
import { Planet, Status } from "../models";

const Wrapper = styled("div", {
  height: 54, // mobile
  position: "relative",
  "&::before": {
    left: -24,
    bottom: 0,
    content: "",
    height: 1,
    width: "100vw",
    backgroundColor: "$mediumGray",
    position: "absolute",
  },

  "@lg": {
    height: 71,
    paddingTop: 12,
    "&::before": {
      left: -24,
      bottom: 0,
      content: "",
      height: 1,
      width: "calc(100vw - 24px)",
      backgroundColor: "$mediumGray",
      position: "absolute",
    },
  },
});

const Content = styled("div", {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",

  img: {
    justifySelf: "end",
    alignSelf: "center",
  },
});

// Not adding to the original Typography elements, because it is NOT included in Figma
const Logo = styled(H2, {
  fontSize: "$md",
  lineHeight: "normal",
});

type Props = {
  onClick?: () => void;
  onListItemClick?: any; //() => void;
  isMobile?: boolean;
  planet: Planet;
  status: Status;
};

const ListItem = styled("div", {
  textTransform: "uppercase",
  fontFamily: "$SpartanBold",
  cursor: "pointer",
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
          top: -37,
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
});

const Header = ({
  onClick,
  isMobile,
  onListItemClick,
  planet,
  status,
}: Props) => {
  return (
    <Wrapper>
      <Content>
        <Logo>THE PLANETS</Logo>
        {isMobile && <img onClick={onClick} src={HamburgerIcon} />}
        {!isMobile && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "33px",
            }}
          >
            {Object.values(planetsMap).map(({ name }, planetIndex) => {
              return (
                <ListItem
                  planet={planet}
                  isActive={planet === planetIndex}
                  key={name}
                  onClick={() => onListItemClick(planetIndex)}
                >
                  {name}
                </ListItem>
              );
            })}
          </div>
        )}
      </Content>
    </Wrapper>
  );
};

export default Header;
