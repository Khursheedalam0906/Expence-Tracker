import { Box, Card, CardContent, Typography, styled } from "@mui/material";
import React from "react";

const Container = styled(Box)`
  display: flex;
  & > div {
    flex: 1;
    padding: 10px;
  }
`;

const ExpenceCard = ({ transaction }) => {
  const amount = transaction.map((item) => item.amount);
  const income = amount
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expence = (
    amount.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);

  return (
    <Container>
      <Card>
        <CardContent>
          <Typography>Income</Typography>
          <Typography style={{ color: "green" }}>₹ {income}</Typography>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <Typography>Expense</Typography>
          <Typography style={{ color: "red" }}>₹ {expence}</Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default ExpenceCard;
