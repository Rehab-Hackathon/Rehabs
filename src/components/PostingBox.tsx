import { useEffect } from "react";
import { Box, Typography, useTheme, Avatar, TextField } from "@mui/material";
import { CustomInput } from "./CustomInput";

type PostingBoxProps = {
  avatarURL: string
};


export const PostingBox = ({ avatarURL }: PostingBoxProps) => {
  const theme = useTheme();
  return (
    <Box
      padding="18px 33px"
      borderRadius="12px"
      display="flex"
      sx={{
        background: theme.palette.primary.main
      }}
    >
      <Avatar sx={{ marginLeft: '20px' }}>
        S
      </Avatar>
      <CustomInput placeholder="Create Post" />
    </Box>
  );
};
