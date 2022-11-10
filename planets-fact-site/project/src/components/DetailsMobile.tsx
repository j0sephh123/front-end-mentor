import { styled } from "../theme";

const DetailsStyle = styled("div", {});

const items = [
  { field: "ROTATION TIME", value: "58.6 Days" },
  { field: "REVOLUTION TIME", value: "87.97 Days" },
  { field: "RADIUS", value: "2,439.7 KM" },
  { field: "AVERAGE TEMP.", value: "430°c" },
];

const DetailsItemWrapper = styled("div", {
  height: "48px",
  border: "1px solid $lightGray",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

const DetailsItem = ({ field, value }: any) => (
  <DetailsItemWrapper>
    <div>{field}</div>
    <div>{value}</div>
  </DetailsItemWrapper>
);

const DetailsMobile = () => {
  return (
    <DetailsStyle>
      {items.map(({ field, value }) => (
        <DetailsItem key={field} field={field} value={value} />
      ))}
    </DetailsStyle>
  );
};

export default DetailsMobile;
