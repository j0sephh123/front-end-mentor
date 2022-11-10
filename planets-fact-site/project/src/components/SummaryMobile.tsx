import { Body, H2 } from "../styled/Typography";
import { styled } from "../theme";

const Wrapper = styled("div", {
  textAlign: "center",
  height: "235px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  marginBottom: "28px",
});
const Title = styled(H2, {
  letterSpacing: 0,
  paddingBottom: "16px",
});
const Source = styled("div", {
  fontSize: "$s",
  lineHeight: "$md",
});
const Text = styled(Body, {
  fontSize: "$xs",
  lineHeight: "$sm",
});
const Link = styled("a", {
  fontSize: "$s",
  lineHeight: "$md",
  fontFamily: "$SpartanBold",
  color: "$lightGray",
});

type Props = {
  name: string;
  content: string;
  source: string;
};

const SummaryMobile = ({
  content = `Mercury is the smallest planet in the Solar System and the closest to
the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest
of all the Sun's planets. Mercury is one of four terrestrial planets in
the Solar System, and is a rocky body like Earth.`,
  name = "MERCURY",
  source = "https://en.wikipedia.org/wiki/Mercury_(planet)",
}: Props) => {
  return (
    <Wrapper>
      <div>
        <Title>{name}</Title>
        <Text>{content}</Text>
      </div>
      <Source>
        Source : <Link href={source}>Wikipedia</Link>
      </Source>
    </Wrapper>
  );
};

export default SummaryMobile;
