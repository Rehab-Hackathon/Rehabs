import { Box, Typography, useTheme } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import type { NextPage } from "next";
import { LensButton } from "src/components/LensButton";
import { FeedTabs } from "src/components/FeedTabs";
import { PostingBox } from "src/components/PostingBox";
import { Feeds } from "src/components/Feed";
import { PostingModal } from "src/components/PostingModal";
import { getPublications } from "src/utils/lens";

const Home: NextPage = () => {
  const theme = useTheme();
  getPublications().then((post) => {
    console.log('post ', post)
  })
  return (
    <Box
      minHeight="100vh"
      display="flex"
      flexDirection="column"
      alignItems="center"
      sx={{
        background: theme.palette.background.paper
      }}
    >
      <img width="100%" height="272px" src="/static/images/banner.png" />
      <Box minHeight="50vh" marginTop="48px" width=" 790px">
        <FeedTabs />
        <Box marginTop="14px">
          <PostingBox />
          <Box marginTop="8px">
            <Feeds />
          </Box>
        </Box>
        <PostingModal />
      </Box>
    </Box>
  );
};

export default Home;
