import { Box, Button, Hidden, Typography } from "@mui/material";
import CommunityStepper from "components/Community/Stepper";
import FAQ from "components/FAQ";
import FancyButton from "components/common/FancyButton";
import TelegramIcon from "components/icons/social/TelegramIcon";
import TwitterIcon from "components/icons/social/TwitterIcon";
import toast from "react-hot-toast";

import { Layout } from "components/layouts/Layout";

const Community = () => {
  return (
    <Layout>
      <Box
        display="flex"
        gap={10}
        mt="110px"
        flexDirection={{
          xs: "column-reverse",
          md: "row",
        }}
      >
        <Box>
          <Typography fontWeight="500">SPARKFI COMUNITY</Typography>
          <Typography
            fontWeight="500"
            fontSize={40}
            mt="9px"
            mb={{ xs: 3.5, md: 11 }}
          >
            JOIN SPAK PRIVATE SALE WHITELIST
          </Typography>
          <CommunityStepper />
        </Box>
        <Box>
          <Box
            position="relative"
            mr={{ xs: 0, sm: 3, md: 0 }}
            display="flex"
            justifyContent="center"
          >
            <Box
              position="absolute"
              sx={{
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                zIndex: -1,
                filter: "blur(74px)",
                background:
                  "linear-gradient(138deg, rgb(97 0 255), rgb(244 12 193))",
                borderRadius: "50%",
              }}
            ></Box>
            <img src="/images/racket.gif" alt="racket" />
          </Box>
        </Box>
      </Box>

      <Box mb="51px" mt="68px">
        <Typography
          fontWeight={500}
          fontSize={13}
          mb="11px"
          display="flex"
          alignItems="center"
          gap={0.5}
        >
          SHARE THE LOVE
          <svg
            width="15"
            height="13"
            viewBox="0 0 15 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.18182 12.1818L1.34091 6.34091C0.875 5.875 0.564394 5.33333 0.409091 4.71591C0.257576 4.09848 0.25947 3.48485 0.414773 2.875C0.570076 2.26136 0.878788 1.72727 1.34091 1.27273C1.81439 0.806818 2.35417 0.498106 2.96023 0.346591C3.57008 0.191288 4.17803 0.191288 4.78409 0.346591C5.39394 0.501894 5.93561 0.810606 6.40909 1.27273L7.18182 2.02273L7.95455 1.27273C8.43182 0.810606 8.97349 0.501894 9.57955 0.346591C10.1856 0.191288 10.7917 0.191288 11.3977 0.346591C12.0076 0.498106 12.5492 0.806818 13.0227 1.27273C13.4848 1.72727 13.7936 2.26136 13.9489 2.875C14.1042 3.48485 14.1042 4.09848 13.9489 4.71591C13.7973 5.33333 13.4886 5.875 13.0227 6.34091L7.18182 12.1818Z"
              fill="#00FF38"
            />
          </svg>
        </Typography>
        <Typography>
          Share invitation links to your friends to earn 1 Ticket per invites
          worth 1 SPK token plus extra chance to participate in our private
          sale. Refer your friends through your unique URL to receive more
          tickets.
        </Typography>
      </Box>

      <Box
        sx={{
          maxWidth: 685,
          background:
            "linear-gradient(90deg, rgb(97, 0, 255) 0%, rgb(244, 12, 193) 100%)",
        }}
        p="1px"
      >
        <Box sx={{ backgroundColor: "#101221", p: 3 }}>
          <Typography fontWeight={500} mb={2}>
            SHARE INVITATION LINK
          </Typography>
          <Box
            sx={{
              alignItems: "center",
              backgroundColor: "#0C0E1E",
              p: 2,
              py: 1,
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography>
              https://app.sparkfi.xyz/referral/vhFHA4v.....
            </Typography>
            <Hidden mdDown>
              <Button
                onClick={() => {
                  navigator.clipboard.writeText(
                    "https://app.sparkfi.xyz/referral/vhFHA4v....."
                  );
                  toast.success("Link copied to clipboard!");
                }}
                sx={{
                  background: "#6100FF !important",
                  px: 3,
                  fontWeight: 500,
                  fontSize: 13,
                }}
                variant="contained"
              >
                Copy
              </Button>
            </Hidden>
          </Box>

          <Hidden mdUp>
            <Button
              fullWidth
              sx={{
                background: "#6100FF !important",
                px: 3,
                my: "18px",
                py: 2,
                fontWeight: 500,
                fontSize: 13,
              }}
              variant="contained"
              onClick={() => {
                navigator.clipboard.writeText(
                  "https://app.sparkfi.xyz/referral/vhFHA4v....."
                );
                toast.success("Link copied to clipboard!");
              }}
            >
              Copy
            </Button>
          </Hidden>

          <Box mt="20px" display="flex" alignItems="center">
            <Typography fontWeight={500} sx={{ mt: { xs: "-58px", sm: 0 } }}>
              SHARE:
            </Typography>
            <Box
              display="flex"
              flexDirection={{ xs: "column", sm: "row" }}
              justifyContent="center"
              gap={1.5}
            >
              <Box
                sx={{
                  marginLeft: "17px",
                  marginRight: "67px",
                }}
              >
                <FancyButton>
                  <Box display="flex" alignItems="center" gap={1} width="120px">
                    <TwitterIcon /> Twitter
                  </Box>
                </FancyButton>
              </Box>

              <Box
                sx={{
                  marginLeft: { xs: "17px", sm: 0 },
                }}
              >
                <FancyButton>
                  <Box display="flex" alignItems="center" gap={1} width="120px">
                    <TelegramIcon /> Telegram
                  </Box>
                </FancyButton>
              </Box>
            </Box>
          </Box>
          <Box mt={4}>
            <Typography fontWeight={500}>INVITED: 3</Typography>
          </Box>
          <Box mt={4}>
            <Typography fontWeight={500}>EARNED TICKETS: 8</Typography>
          </Box>
          <Box mt={4}>
            <Typography fontWeight={500}>
              1 Ticket is exchange for 1 SPK token
            </Typography>
          </Box>
        </Box>
      </Box>

      <FAQ />
    </Layout>
  );
};

export default Community;
