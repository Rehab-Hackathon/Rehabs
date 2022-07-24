import { useEffect } from "react";
import { Box, Typography, useTheme } from "@mui/material";

type FeedTabsProps = {
  onLatestClick: any;
  onMostRektClick: any;
  value: number;
};

type CustomChipProps = {
  active: boolean;
  children: any;
  onClick: any;
};

const CustomChip = ({ active, onClick ,children }: CustomChipProps) => {
  const theme = useTheme();
  return (
    <Box
      width="90px"
      height="24px"
      borderRadius="6px"
      marginLeft="40px"
      textAlign="center"
      onClick={onClick}
      sx={{
        backgroundColor: active ? theme.palette.primary.main : 'transparent',
        cursor: 'pointer'
      }}
    >
      <Typography
        fontSize={active ? '20px' : '16px'}
        fontWeight={active ? 'bold' : 'normal'}
      >
        {children}
      </Typography>
    </Box>
  );
};

export const FeedTabs = ({onLatestClick, onMostRektClick, value}: FeedTabsProps) => {
  return (
    <Box padding="0 30px" display="flex" alignItems="center">
      <Typography variant="h4">
        Explore:
      </Typography>
      <CustomChip onClick={onLatestClick} active={value === 0}>
        Latest
      </CustomChip>
      <CustomChip onClick={onMostRektClick} active={value === 1}>
        Most'Rekt
      </CustomChip>
    </Box>
  );
};
