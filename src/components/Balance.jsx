import { Box, Typography, styled } from "@mui/material";
import React from "react";

const BalanceText = styled(Typography)`
  font-size: 25px;
  margin-bottom: 20px;
`;

const Balance = ({ transaction }) => {
  const amount = transaction?.map((transaction) => transaction.amount);
  const total = amount.reduce((prev, curr) => (prev += curr), 0).toFixed(2);

  return (
    <Box>
      <BalanceText>Balance : ₹{total}</BalanceText>
    </Box>
  );
};

export default Balance;
