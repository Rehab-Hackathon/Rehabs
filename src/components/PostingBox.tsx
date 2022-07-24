import { useEffect } from "react";
import { Box, Typography, useTheme, Avatar, TextField } from "@mui/material";
import { CustomInput } from "./CustomInput";

type PostingBoxProps = {
  avatarURL: string
  onClick: any
};


export const PostingBox = ({ avatarURL, onClick }: PostingBoxProps) => {
  const theme = useTheme();
  return (
    <Box
      padding="18px 33px"
      borderRadius="12px"
      display="flex"
      sx={{
        background: theme.palette.primary.main
      }}
      onClick={onClick}
    >
      <Avatar sx={{ marginLeft: '20px' }}>
        S
      </Avatar>
      <CustomInput placeholder="Create Post" />
    </Box>
  );
};
