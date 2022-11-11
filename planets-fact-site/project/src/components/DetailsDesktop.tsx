import { styled } from "../theme";

const DetailsDesktopStyle = styled("div", {
  display: "flex",
  justifyContent: "center",
  marginTop: 76,
});

const DetailsItemWrapper = styled("div", {
  width: 255,
  height: 128,
  marginRight: 30,
  border: "1px solid $whiteWithHalfOpacity",
  padding: "16px 24px",

  marginBottom: "8px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
});
const Field = styled("div", {
  fontFamily: "$SpartanBold",
  color: "$whiteWithHalfOpacity",
  letterSpacing: "0.73px",
  fontSize: 11,
  paddingBottom: 4,
});
const Value = styled("div", {
  fontFamily: "$AntonioMedium",
  fontSize: 40,
  letterSpacing: "-1.5px",
  textTransform: "uppercase",
});

const DetailsItem = ({ field, value }: any) => (
  <DetailsItemWrapper>
    <Field>{field}</Field>
    <Value>{value}</Value>
  </DetailsItemWrapper>
);

type Props = {
  rotation: string;
  revolution: string;
  radius: string;
  temperature: string;
};

const DetailsDesktop = ({
  radius,
  revolution,
  rotation,
  temperature,
}: Props) => {
  const items = [
    { field: "ROTATION TIME", value: rotation },
    { field: "REVOLUTION TIME", value: revolution },
    { field: "RADIUS", value: radius },
    { field: "AVERAGE TEMP.", value: temperature },
  ];

  return (
    <DetailsDesktopStyle>
      {items.map(({ field, value }) => (
        <DetailsItem key={field} field={field} value={value} />
      ))}
    </DetailsDesktopStyle>
  );
};

export default DetailsDesktop;
