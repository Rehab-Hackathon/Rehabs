import { Box, TextField } from "@mui/material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

type RangePickerProps = {
  label: string
  value: [Date, Date]
  onChange: any 
}

export const DateRangePicker = ({ label, value, onChange }: RangePickerProps) => {

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Box display="flex" marginLeft="24px" flexDirection="column">
        <Box margin="16px 0 8px 0">{label}</Box>
        <Box
          display="flex"
          justifyContent="center"
          sx={{
            "& .MuiInputBase-formControl": {
              background: '#F2EFEC',
              borderRadius: '8px',
              marginRight: '4px'
            }
          }}
        >
          <DatePicker
            value={value[0]}
            disableFuture
            onChange={(newValue) => {
              onChange([newValue, value[1]]);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
          <DatePicker
            value={value[1]}
            disableFuture
            minDate={value[0]}
            onChange={(newValue) => {
              onChange([value[0], newValue]);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </Box>
      </Box>
    </LocalizationProvider>
  );
}
