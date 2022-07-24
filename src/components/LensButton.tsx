import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Button } from '@mui/material'

export const LensButton = () => {
  // useEffect(() => {
  //   void metaMask.connectEagerly().catch(() => console.debug("MetaMask: Eagerly Connect Failed"));
  // }, []);

  // if (isActivating || !isActive) {
  //   return null;
  // }

  return (
    <ConnectButton.Custom>
      {({ account, chain, openAccountModal, openChainModal, openConnectModal, mounted }) => {
        return (
          <Button
            onClick={() => openConnectModal()}
            sx={{
              borderColor: "primary.main",
              border: "1px solid",
              backgroundColor: "primary.main",
              borderRadius: 999,
              height: 37,
              minWidth: 370,
              display: "flex",
              justifyContent: "center",
              padding: "11px 46px",
            }}
          >
            <img height="30px" src="/static/images/sign-in.png" />
          </Button>
        );
      }}
    </ConnectButton.Custom>
  );
};
