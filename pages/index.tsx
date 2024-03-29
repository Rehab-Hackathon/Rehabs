import { Box, Typography, useTheme } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import type { NextPage  } from "next";
import { useRouter } from 'next/router'
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { LensButton } from "src/components/LensButton";
import { useAccount, useSignMessage } from 'wagmi';
import { generateChallenge, authenticate } from 'src/utils/lens'

const Home: NextPage = () => {
  const { signMessageAsync } = useSignMessage();
  const router = useRouter()
  useAccount({
    onConnect: async({ address, connector, isReconnected }) => {
      if(!isReconnected){
        const challenge = await generateChallenge(address);
        const signature = await signMessageAsync({ message: challenge });
        const accessToken = await authenticate(address, signature);
        window.sessionStorage.setItem('accessToken', accessToken);
        router.push('/feed')
      }
    },
  })
  const theme = useTheme();
  return (
    <Box
      minHeight="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      sx={{
        background: "url('/static/images/bg.jpg')",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Box
        width="546px"
        height="376px"
        boxShadow="0px 17px 24px rgba(176, 167, 132, 0.38)"
        borderRadius="40px"
        backgroundColor={theme.palette.background.paper}
      >
        <Box padding="24px 28px" display="flex" justifyContent="flex-end">
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
        <Box display="flex" justifyContent="center" marginTop="80px">
          {/* <ConnectButton/> */}
          <LensButton />
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
