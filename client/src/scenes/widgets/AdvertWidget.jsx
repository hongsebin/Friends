import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";
import {Link} from "react-router-dom"

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;
  const mediumLight = palette.neutral.mediumLight;

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          Sponsored
        </Typography>
        <Typography color={medium}>Create Ad</Typography>
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        alt="advert"
        src="http://localhost:3001/assets/everland.jpg"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <FlexBetween>
        <Typography color={main}>EVERLAND</Typography>
        <Link to="https://www.everland.com/pick/2023/fairytown/web/index.html#section_main"
        style={{ textDecoration: "none "}}>
            <Typography 
            color={medium}
            sx={{ "&:hover": { cursor: "pointer", color: mediumLight } }}
            >everland.com</Typography>
        </Link>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0" whiteSpace={"pre-line"}>
        신비로운 요정의 마을,<br/>
        페어리 타운으로 환상여행을 떠나보시겠어요?
      </Typography>
    </WidgetWrapper>
  );
};

export default AdvertWidget;