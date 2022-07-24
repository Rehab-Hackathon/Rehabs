import { useState } from "react";
import { Avatar, Box, Typography, useTheme } from "@mui/material";
import { ReactionBarSelector } from "@charkour/react-reactions";
import { CustomInput } from "./CustomInput";
import { PostingModal } from "./PostingModal";

type FeedProps = {
  posts: any[]
};


const reactions = [
  { label: "Rekt", node: <img src="/static/images/reaction-1.svg" />, key: "Rekt" },
  { label: "Back to Work", node: <img src="/static/images/reaction-2.svg" />, key: "Back to Work" },
  { label: "Smol Brain", node: <img src="/static/images/reaction-3.svg" />, key: "Smol Brain" },
  { label: "Big Brain", node: <img src="/static/images/reaction-4.svg" />, key: "Big Brain" },
  { label: "Bless U", node: <img src="/static/images/reaction-5.svg" />, key: "Bless U" },
];

type FeedItemProps = {
  post: any
}

const FeedItem = ({ post }: FeedItemProps) => {
  console.log('post ', post)
  const [visible, setVisible] = useState(false)
  const [reactionBarVisible, setReactionBarVisible] = useState(false)
  return (
    <Box marginTop="24px">
      <Box display="flex">
        <Box>
          <Avatar src={post?.profile?.picture?.original?.url} />
        </Box>
        <Box marginLeft="26px">
          <Box display="flex" justifyContent="space-between">
            <Box display="flex">
              <Box></Box>
              <Box>
                <Typography fontWeight="bold">{post?.profile?.name}</Typography>
                <Typography>{post?.profile?.handle}</Typography>
              </Box>
            </Box>
            <Box>1min ago</Box>
          </Box>
          <Typography marginTop="22px">
            {
              post?.metadata?.content
            }
          </Typography>
          <Box
            width="500px"
            marginTop="18px"
            borderRadius="10px"
            padding="5px 40px"
            sx={{
              background: "#F2EFEC",
            }}
          >
            From 0x21a31Ee1afC51d94C2eFcCAa2092aD1028285549 <br />
            To: 0x82d1sdf85sdf54s32ds8wec5sd4fsd8fs5df46496a <br />
            99,999,999 doge ~$ 72,000,000 @ 0.72
          </Box>
          <Box marginTop="20px" marginBottom="42px" display="flex">
            <Avatar
              src={`/static/images/reaction-1.svg`}
              sx={{ width: 30, height: 30, bgcolor: '#FCD14A', "& img": { width: '75%', height: '75%'} }}
            />
            <Avatar
              src={`/static/images/reaction-2.svg`}
              sx={{ width: 30, height: 30, bgcolor: '#B6B6B6', marginLeft:'-10px', "& img": { width: '75%', height: '75%'} }}
            />
            <Avatar
              src={`/static/images/reaction-3.svg`}
              sx={{ width: 30, height: 30, bgcolor: '#E05326', marginLeft:'-10px', "& img": { width: '75%', height: '75%'}  }}
            />
            <Avatar
              src={`/static/images/reaction-4.svg`}
              sx={{ width: 30, height: 30, bgcolor: '#4B3A22', marginLeft:'-10px', "& img": { width: '75%', height: '75%'} }}
            />
            <Avatar
              src={`/static/images/reaction-5.svg`}
              sx={{ width: 30, height: 30, bgcolor: '#3F8EF5', marginLeft:'-10px', "& img": { width: '75%', height: '75%'} }}
            />
          </Box>
          {reactionBarVisible && <ReactionBarSelector iconSize={20} reactions={reactions} />}
          <Box color="#B6B6B6" display="flex">
            <Box display="flex" justifyContent="center" alignItems="center" marginRight="16px">
              <img src="/static/images/comment-icon.svg" />
              <Box onClick={() => setReactionBarVisible(true)} marginLeft="8px">
                Rekt
              </Box>
            </Box>
            <Box display="flex" justifyContent="center" alignItems="center" marginRight="16px">
              <img src="/static/images/comment-icon.svg" />
              <Box marginLeft="8px">
                Comment
              </Box>
            </Box>
            <Box display="flex" justifyContent="center" alignItems="center" marginRight="16px">
              <img src="/static/images/twitter-icon.svg" />
              <Box marginLeft="8px">
                Twitter
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box marginTop="14px" borderTop="1px solid #EDEDED" borderBottom="1px solid #EDEDED" display="flex" padding="24px 0">
        <Avatar sx={{ marginLeft: '20px' }}>
          S
        </Avatar>
        <CustomInput onClick={() => setVisible(true)} placeholder="Create Comment" />
        <PostingModal visible={visible} onClose={() => setVisible(false)} />
      </Box>
    </Box>
  );
};

export const Feeds = ({ posts }: FeedProps) => {
  return (
    <Box
      padding="32px 40px"
      minHeight="50vh"
      sx={{
        background: "white",
      }}
    >
      {posts?.map((post) => {
        console.log('post ', post)
        return (
          <FeedItem post={post}  />
        )
      })}
    </Box>
  );
};
