import { Box, Typography, useTheme } from "@mui/material";

type FeedTabsProps = {
  onHighLowClick: any;
  onRecentClick: any;
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
        fontWeight={active ? 'bold' : 'normal'}
      >
        {children}
      </Typography>
    </Box>
  );
};

export const TransactionTabs = ({onHighLowClick, onRecentClick, value}: FeedTabsProps) => {
  return (
    <Box padding="0 30px" display="flex" alignItems="center">
      <Typography>
        Choose
      </Typography>
      <CustomChip onClick={onHighLowClick} active={value === 0}>
        High-Low
      </CustomChip>
      <CustomChip onClick={onRecentClick} active={value === 1}>
        Recent-Latest
      </CustomChip>
    </Box>
  );
};
