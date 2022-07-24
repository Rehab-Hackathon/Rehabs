import { Box, TextField, useTheme } from "@mui/material";
import type { FC } from "react";
import type { TextFieldProps } from "@mui/material";


export const CustomInput: FC<TextFieldProps> = (props) => {
  const theme = useTheme()
  return (
    <Box position="relative" width="100%">
      <TextField
        fullWidth
        {...props}
        variant="standard"
        InputProps={{ disableUnderline: true }}
        sx={{
          padding: '10px 22px',
          height: '40px',
          backgroundColor: theme.palette.background.paper,
          marginLeft: '16px',
          borderRadius: '12px',
          textAlign: 'center',
          "& .MuiInput-input": {
            "padding": '0px'
          }
        }}
      >
      </TextField>
      <Box position="absolute" top="10px" right="25px">
        <img src="/static/images/gif-icon.png" />
      </Box>
      <Box position="absolute" top="10px" right="0">
        <img src="/static/images/picture-icon.png" />
      </Box>
    </Box>
  );
};
