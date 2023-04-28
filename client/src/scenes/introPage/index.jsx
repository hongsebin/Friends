import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import { useNavigate } from "react-router-dom";

const IntroPage = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const { palette } = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width: 1023px)");
  return (
    <Box
    position="relative"
    top="30%"
    >
      <Box
        m="0rem auto"
        textAlign="center"
      >

        <Typography 
        fontWeight="500" 
        variant="h1" 
        fontFamily='Shrikhand'
        fontSize={isNonMobileScreens ? "5rem" : "4rem"}
        color="primary"
        >
          Be my Friends!
        </Typography>
      </Box>
      
      <Box
      justifyContent="center"
      alignItems="center"
      display={isNonMobileScreens ? "flex" : "block"}
      gap="1.5rem"
      paddingTop="2rem"
      >
        {/* 로그인 버튼 */}
        <Box
          width={isNonMobileScreens ? "40%" : "80%"}
          margin={isNonMobileScreens ? "0rem" : "auto"}
          height={isNonMobileScreens ? "5rem" : "4rem"}
          borderRadius="1rem"
          alignItems="center"
          justifyContent="center"
          backgroundColor={theme.palette.background.alt}
          boxShadow= '0em 0rem 1rem #00000010'
        >
          <Typography 
          fontWeight="500" 
          variant={isNonMobileScreens ? "h4" : "h5"}
          textAlign="center"
          lineHeight={isNonMobileScreens ? "5rem" : "4rem"}
          >
            No thanks..
          </Typography>
        </Box>

        {/* 회원가입 버튼 */}
        <Box
          width={isNonMobileScreens ? "40%" : "80%"}
          margin={isNonMobileScreens ? "0rem" : "auto"}
          marginTop={isNonMobileScreens ? "0rem" : "1rem"}
          height={isNonMobileScreens ? "5rem" : "4rem"}
          borderRadius="1rem"
          alignItems="center"
          justifyContent="center"
          backgroundColor={theme.palette.background.alt}
          boxShadow= '0em 0rem 1rem #00000010'

          onClick={() => navigate(`/login`)}
          sx={{
            "&:hover": {
              cursor: "pointer",
              transition: "0.2s",
              backgroundColor: "black",
              color: palette.background.alt,
            },
          }}
        >
          <Typography 
          fontWeight="500" 
          variant={isNonMobileScreens ? "h4" : "h5"}
          textAlign="center"
          lineHeight={isNonMobileScreens ? "5rem" : "4rem"}
          >
            SURE🦄
          </Typography>
        </Box>
      </Box>

    </Box>
  );
};

export default IntroPage;