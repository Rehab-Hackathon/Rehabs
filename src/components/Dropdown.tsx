import * as React from "react";
import { Box, MenuItem, FormControl, useTheme } from '@mui/material'
// import Box from "@mui/material/Box";
// import MenuItem from "@mui/material/MenuItem";
// import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

type Option = {
  value: string;
  label: string;
};

type DropdownProps = {
  label: string;
  value: string;
  onChange: any;
  options: Option[];
  sx?: any;
};

export const Dropdown = ({ label, value, onChange, options, sx }: DropdownProps) => {
  const handleChange = (event: SelectChangeEvent) => {
    onChange(event.target.value);
  };

  return (
    <FormControl sx={sx} size="medium">
      <Box margin="16px 0 8px 0">
        {label}
      </Box>
      <Select
        sx={{
          background: '#F2EFEC',
          borderRadius: '6px',
          border: '0',
        }}
        labelId={`${label}-select`}
        id={`${label}-select`}
        value={value}
        label={label}
        onChange={handleChange}
      >
        {options.map((option) => {
          return <MenuItem key={option.label} value={option.value}>{option.label}</MenuItem>;
        })}
      </Select>
    </FormControl>
  );
};
