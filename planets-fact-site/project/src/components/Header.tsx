import { styled } from "../theme";
import HamburgerIcon from "../assets/images/icon-hamburger.svg";
import { H2 } from "../styled/Typography";
import { planetsMap } from "../constants";

const Wrapper = styled("div", {
  height: "54px",
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
};

const ListItem = styled("div", {
  textTransform: "uppercase",
  fontFamily: "$SpartanBold",
  cursor: "pointer",
});

const Header = ({ onClick, isMobile, onListItemClick }: Props) => {
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
            {Object.values(planetsMap).map((planet, planetIndex) => {
              return (
                <ListItem
                  key={planet.name}
                  onClick={() => onListItemClick(planetIndex)}
                >
                  {planet.name}
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
