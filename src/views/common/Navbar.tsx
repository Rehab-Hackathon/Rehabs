import styled from "@emotion/styled";
import { Box, Stack, Typography, useScrollTrigger, useTheme } from "@mui/material";
import Link from "next/link";
import { ThemeToggleSwitch } from "src/components/ThemeToggleSwitch";
import { ProofOfRektIcon } from "src/svgs";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import type { BoxProps } from "@mui/material";

import type { FC } from "react";
import { ConnectWithSelect } from "src/components/ConnectWithSelect";
import { ConnectWalletButton } from "src/components/ConnectWalletButton";
import { WalletSelectDialog } from "../wallet/WalletSelectDialog";
import { walletStore } from "src/stores/walletStore";
import { observer } from "mobx-react-lite";
import { SwitchChainButton } from "src/components/SwitchChainButton";

const Wrapper = styled(Box, {
  shouldForwardProp: (props: string) => props !== "isScrollTriggered",
})<{ isScrollTriggered: boolean }>`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: none;
  backgroundcolor: transparent;
  z-index: ${({ theme }) => theme.zIndex.drawer + 1};
  transition: background-color 200ms;
`;

type Props = {
  sx?: BoxProps["sx"];
};

export const Navbar: FC<Props> = observer((props) => {
  const theme = useTheme();
  const isScrollTriggered = useScrollTrigger({ disableHysteresis: true, threshold: 30 });

  return (
    <>
      <WalletSelectDialog open={walletStore.isWalletOpen} />
      <Wrapper sx={{ ...props.sx }} isScrollTriggered={isScrollTriggered}>
        <Box
          sx={{
            padding: '14px 70px',
            width: "100%",
            display: "grid",
            gridTemplateColumns: "calc(160px - 0.5rem) 1fr",
            columnGap: "1rem",
            alignItems: "center",
            backgroundColor: theme.palette.primary.main,
            [theme.breakpoints.down("md")]: {
              display: "flex",
              justifyContent: "space-between",
            },
          }}
        >
          <Link href="/" passHref>
            <Box component="a" color={theme.palette.mode === "light" ? "black" : "white"} px={1.5}>
              <ProofOfRektIcon height={48} width={null} style={{ verticalAlign: "middle" }} />
            </Box>
          </Link>
          <Box display="flex" justifyContent="flex-end" alignItems="center" pr={1} width="100%">
            <Stack direction="row" spacing={3} alignItems="center">
              <ConnectButton />
            </Stack>
          </Box>
        </Box>
      </Wrapper>
    </>
  );
});
