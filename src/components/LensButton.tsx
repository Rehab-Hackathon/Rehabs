import { useEffect } from "react";
import { Button, Typography } from "@mui/material";
import { useWeb3React } from "@web3-react/core";
import { metaMask } from "src/utils/connectors/metaMask";
import { shortenAddress } from "src/utils/shortenAddress";

export const LensButton = () => {
  const { connector, account, ENSName, isActive, isActivating, chainId } = useWeb3React();

  // useEffect(() => {
  //   void metaMask.connectEagerly().catch(() => console.debug("MetaMask: Eagerly Connect Failed"));
  // }, []);

  // if (isActivating || !isActive) {
  //   return null;
  // }

  return (
    <>
      <Button
        // onClick={() => {
        //   if (connector?.deactivate) {
        //     void connector.deactivate();
        //   } else {
        //     void connector.resetState();
        //   }
        // }}
        sx={{
          borderColor: "primary.main",
          border: "1px solid",
          backgroundColor: "primary.main",
          borderRadius: 999,
          height: 37,
          minWidth: 370,
          display: "flex",
          justifyContent: "center",
          padding: "11px 46px"
        }}
      >
        <img height="30px" src="/static/images/sign-in.png" />
      </Button>
    </>
  );
};
