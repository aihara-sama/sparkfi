import Box from "@mui/material/Box";
import Step from "@mui/material/Step";
import StepContent from "@mui/material/StepContent";
import StepLabel from "@mui/material/StepLabel";
import Stepper from "@mui/material/Stepper";
import Typography from "@mui/material/Typography";
import FancyButton from "components/common/FancyButton";

import * as React from "react";

interface IStepperProps {}

const CommunityStepper: React.FunctionComponent<IStepperProps> = () => {
  return (
    <Box>
      <Stepper
        orientation="vertical"
        sx={{
          ".MuiStepConnector-root": {
            marginLeft: "20px",
            ".MuiStepConnector-line": {
              borderLeftColor: "#F40CC1",
              borderLeftStyle: "dashed",
              borderLeftWidth: "2px",
              minHeight: "40px",
            },
          },
        }}
      >
        <Step active sx={{ marginBottom: "4px" }}>
          <StepLabel
            sx={{
              ".MuiStepLabel-label": {
                color: "white !important",
                marginLeft: "21px",
              },
            }}
            StepIconComponent={() => (
              <FancyButton
                buttonStyles={{
                  px: 2,
                }}
              >
                1
              </FancyButton>
            )}
          >
            SIGN IN
          </StepLabel>
          <StepContent
            sx={{
              marginLeft: "20px",
              borderLeftColor: "#F40CC1",
              borderLeftStyle: "dashed",
              borderLeftWidth: "2px",
              paddingLeft: "50px",
            }}
          >
            <Typography>Get started by sign in to SparkFi</Typography>
            <Box sx={{ mt: "28px" }}>
              <FancyButton
                buttonStyles={{
                  px: "46px",
                }}
              >
                Sign In
              </FancyButton>
            </Box>
          </StepContent>
        </Step>
        <Step active sx={{ marginBottom: "4px" }}>
          <StepLabel
            sx={{
              ".MuiStepLabel-label": {
                color: "white !important",
                marginLeft: "21px",
              },
            }}
            StepIconComponent={() => (
              <FancyButton
                buttonStyles={{
                  px: 2,
                }}
              >
                2
              </FancyButton>
            )}
          >
            CONNECT WALLET
          </StepLabel>
          <StepContent
            sx={{
              marginLeft: "20px",
              borderLeftColor: "#F40CC1",
              borderLeftStyle: "dashed",
              borderLeftWidth: "2px",
              paddingLeft: "50px",
            }}
          ></StepContent>
        </Step>
        <Step active sx={{ marginBottom: "4px" }}>
          <StepLabel
            sx={{
              ".MuiStepLabel-label": {
                color: "white !important",
                marginLeft: "21px",
              },
            }}
            StepIconComponent={() => (
              <FancyButton
                buttonStyles={{
                  px: 2,
                }}
              >
                3
              </FancyButton>
            )}
          >
            FOLLOW SPARKFI TWITTER
          </StepLabel>
          <StepContent
            sx={{
              marginLeft: "20px",
              borderLeftColor: "#F40CC1",
              borderLeftStyle: "dashed",
              borderLeftWidth: "2px",
              paddingLeft: "50px",
            }}
          ></StepContent>
        </Step>
        <Step active sx={{ marginBottom: "4px" }}>
          <StepLabel
            sx={{
              ".MuiStepLabel-label": {
                color: "white !important",
                marginLeft: "21px",
              },
            }}
            StepIconComponent={() => (
              <FancyButton
                buttonStyles={{
                  px: 2,
                }}
              >
                4
              </FancyButton>
            )}
          >
            RETWEET PINNED POST
          </StepLabel>
          <StepContent
            sx={{
              marginLeft: "20px",
              borderLeftColor: "#F40CC1",
              borderLeftStyle: "dashed",
              borderLeftWidth: "2px",
              paddingLeft: "50px",
            }}
          ></StepContent>
        </Step>
        <Step active sx={{ marginBottom: "4px" }}>
          <StepLabel
            sx={{
              ".MuiStepLabel-label": {
                color: "white !important",
                marginLeft: "21px",
              },
            }}
            StepIconComponent={() => (
              <FancyButton
                buttonStyles={{
                  px: 2,
                }}
              >
                5
              </FancyButton>
            )}
          >
            JOIN SPARKFI TELEGRAM GROUP
          </StepLabel>
          <StepContent
            sx={{
              marginLeft: "20px",
              borderLeftColor: "#F40CC1",
              borderLeftStyle: "dashed",
              borderLeftWidth: "2px",
              paddingLeft: "50px",
            }}
          ></StepContent>
        </Step>
        <Step active sx={{ marginBottom: "4px" }}>
          <StepLabel
            sx={{
              ".MuiStepLabel-label": {
                color: "white !important",
                marginLeft: "21px",
              },
            }}
            StepIconComponent={() => (
              <FancyButton
                buttonStyles={{
                  px: 2,
                }}
              >
                6
              </FancyButton>
            )}
          >
            JOIN SPARKFI DISCORD COMMUNITY
          </StepLabel>
          <StepContent
            sx={{
              marginLeft: "20px",
              borderLeftColor: "#F40CC1",
              borderLeftStyle: "dashed",
              borderLeftWidth: "2px",
              paddingLeft: "50px",
            }}
          ></StepContent>
        </Step>
        <Step active sx={{ marginBottom: "4px" }}>
          <StepLabel
            sx={{
              ".MuiStepLabel-label": {
                color: "white !important",
                marginLeft: "21px",
              },
            }}
            StepIconComponent={() => (
              <FancyButton
                buttonStyles={{
                  px: 2,
                }}
              >
                7
              </FancyButton>
            )}
          >
            VERIFY YOUR IDENTITY
          </StepLabel>
          <StepContent
            sx={{
              marginLeft: "22px",
              borderLeftColor: "none",
              paddingLeft: "50px",
            }}
          >
            {/* <Typography>
              Hi Adegbemiro you’re now in the SPK token airdrop and private sale
              whitelist lottery with{" "}
              <Box component="span" color="#00FF38">
                5 tickets!
              </Box>
            </Typography> */}
          </StepContent>
        </Step>
      </Stepper>
    </Box>
  );
};

export default CommunityStepper;
