import { useState } from 'react'
import { Box, Typography, useTheme } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import type { NextPage } from "next";
import { FeedTabs } from "src/components/FeedTabs";
import { PostingBox } from "src/components/PostingBox";
import { Feeds } from "src/components/Feed";
import { PostingModal } from "src/components/PostingModal";
import { getPublications } from "src/utils/lens";

const Home: NextPage = () => {
  const theme = useTheme();
  const [visible, setVisible] = useState(false)
  const [feedIndex, setFeedIndex] = useState(0)
  const [posts, setPosts] = useState([])
  getPublications().then((post) => {
    setPosts(post)
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
        <FeedTabs value={feedIndex} onLatestClick={() => setFeedIndex(0)} onMostRektClick={() => setFeedIndex(1)} />
        <Box marginTop="14px">
          <PostingBox avatarURL='' onClick={() => setVisible(true)} />
          <Box marginTop="8px">
            <Feeds posts={posts} />
          </Box>
        </Box>
        <PostingModal visible={visible} onClose={() => setVisible(false)} />
      </Box>
    </Box>
  );
};

export default Home;
