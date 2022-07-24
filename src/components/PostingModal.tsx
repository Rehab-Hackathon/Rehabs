import { useState, useMemo } from "react";
import { Box, Typography, useTheme, Avatar, TextField, Modal } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { Dropdown } from "./Dropdown";
import { ChainOptions } from "src/constants/options";
import { tokens } from "src/constants/token-list";
import { DateRangePicker } from "./DateRangePicker";
import { TransactionTabs } from "./TransactionTabs";
import { PrimaryButton } from "./PrimaryButton";

type PostingModalProps = {
  visible: boolean;
};

export const PostingModal = ({ visible }: PostingModalProps) => {
  const theme = useTheme();
  const [chain, setChain] = useState("");
  const [token, setToken] = useState("");
  const [dateRange, setDateRange] = useState([new Date(), new Date()]);

  const tokenList = useMemo(() => {
    return tokens
      .filter((token) => {
        return token.chainId === +chain;
      })
      .map((token) => {
        return {
          label: token.name,
          value: token.address,
        };
      });
  }, [chain]);

  return (
    <Modal open onClose={() => console.log("close")}>
      <Box
        sx={{
          position: "absolute" as "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          border: "2px solid #000",
          boxShadow: 24,
          padding: "22px 36px",
          width: "860px",
          bgcolor: "white",
        }}
      >
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          padding="12px 0"
          borderBottom={"1px solid #E6D5C4"}
        >
          <Box>
            <Typography variant="h4">Create post</Typography>
          </Box>
          <Box
            borderRadius="50%"
            fontSize="20px"
            display="flex"
            justifyContent="center"
            alignItems="center"
            width="40px"
            height="40px"
            color="white"
            backgroundColor={theme.palette.primary.main}
          >
            <FontAwesomeIcon icon={faXmark} />
          </Box>
        </Box>
        <Box marginTop="24px">
          <Box padding="0 38px" display="flex">
            <Box>
              <Avatar sx={{ width: "64px", height: "64px" }}>S</Avatar>
            </Box>
            <Box marginLeft="26px">
              <Box display="flex" justifyContent="space-between">
                <Box display="flex">
                  <Box></Box>
                  <Box>
                    <Typography fontWeight="bold">Marc Zeller</Typography>
                    <Typography>@name.lens</Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box marginTop="22px">
          <TextField
            id="filled-multiline-flexible"
            label="Multiline"
            multiline
            maxRows={4}
            minRows={4}
            fullWidth
            // value={0}
            // onChange={handleChange}
            variant="filled"
          />
        </Box>
        <Box marginTop="12px">
          <Typography fontWeight="bold">Search for Transaction</Typography>
          <Box display="flex">
            <Dropdown
              label="Choose Chain*"
              value={chain}
              onChange={(c: string) => setChain(c)}
              options={ChainOptions}
              sx={{
                width: "150px",
                marginRight: "26px",
              }}
            />
            <Dropdown
              label="Choose Token*"
              value={token}
              onChange={(t: string) => setToken(t)}
              options={tokenList}
            />
            <DateRangePicker
              label="Choose Period"
              value={dateRange}
              onChange={(dr) => setDateRange(dr)}
            />
            {/* <Dropdown /> */}
          </Box>
          <Box marginTop="60px" marginBottom="40px">
            <TransactionTabs />
            <Dropdown
              sx={{
                width: "100%",
              }}
              label="Choose Token*"
              value={token}
              onChange={(t: string) => setToken(t)}
              options={tokenList}
            />
          </Box>
          <PrimaryButton fullWidth>
            POST
          </PrimaryButton>
        </Box>
      </Box>
    </Modal>
  );
};
