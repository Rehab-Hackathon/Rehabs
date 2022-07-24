import { Button } from "@mui/material";
import { useMuiTheme } from "src/hooks/themes";
import type { FC } from "react";
import type { ButtonProps } from "@mui/material";

export const PrimaryButton: FC<ButtonProps> = (props) => {
  return (
    <Button
      {...props}
      sx={{
        px: 4,
        height: 36,
        fontSize: '0.875rem',
        background: '#3F8EF5',
        border: `1px solid #3F8EF5`,
        color: 'black',
        borderRadius: 24,
        "&:hover": {
          background: '#3F8EF5',
          boxShadow: `0 0 5px 3px #3F8EF5`,
          // boxShadow: `0 10px 20px ${theme.palette.secondary.light}`,
        },
        "&.Mui-disabled": {
          background: "linear-gradient(to bottom, #EEE, #CCC)",
        },
        ...props.sx,
      }}
    />
  );
};
