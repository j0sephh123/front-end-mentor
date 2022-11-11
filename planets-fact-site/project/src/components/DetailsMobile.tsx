import { colors, styled } from "../theme";

const DetailsStyle = styled("div", {});

const DetailsItemWrapper = styled("div", {
  height: "48px",
  border: `1px solid ${colors.whiteWithHalfOpacity}`,
  padding: "16px 24px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginBottom: "8px",
});
const Field = styled("div", {
  fontFamily: "$SpartanBold",
  color: colors.whiteWithHalfOpacity,
  letterSpacing: "0.73px",
  fontSize: "8px",
});
const Value = styled("div", {
  fontFamily: "$SpartanBold",
  fontSize: "20px",
  letterSpacing: "-0.75px",
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

const DetailsMobile = ({
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
    <DetailsStyle>
      {items.map(({ field, value }) => (
        <DetailsItem key={field} field={field} value={value} />
      ))}
    </DetailsStyle>
  );
};

export default DetailsMobile;
