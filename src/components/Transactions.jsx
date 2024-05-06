import { Box, Divider, List, Typography } from "@mui/material";
import Transaction from "./Transaction";

const Transactions = ({ transaction, setTransaction }) => {
  return (
    <Box>
      <Typography variant="h5">Transaction History</Typography>
      <Divider />
      <List>
        {transaction?.map((item) => (
          <Transaction
            item={item}
            transaction={transaction}
            setTransaction={setTransaction}
          />
        ))}
      </List>
    </Box>
  );
};

export default Transactions;
