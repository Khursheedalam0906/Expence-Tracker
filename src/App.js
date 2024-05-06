import "./App.css";
import { Box, Typography, styled } from "@mui/material";
import Balance from "./components/Balance";
import ExpenceCard from "./components/ExpenceCard";
import NewTransaction from "./components/NewTransaction";
import Transactions from "./components/Transactions";
import { useState } from "react";

const Component = styled(Box)`
  display: flex;
  background: #fff;
  width: 800px;
  padding: 10px;
  border-radius: 20px;
  margin: auto;
  & > div {
    height: 80vh;
    width: 50%;
    padding: 10px;
  }
`;

const Header = styled(Typography)`
  font-size: 36px;
  color: blue;
  text-transform: uppercase;
`;

function App() {
  const [transaction, setTransaction] = useState([
    { id: 1, text: "Momos", amount: -20 },
    { id: 2, text: "Salary", amount: 3000 },
    { id: 3, text: "Book", amount: -100 },
    { id: 4, text: "Bonous", amount: 1500 },
  ]);

  return (
    <Box className="App">
      <Header>Expense Tracker</Header>
      <Component>
        <Box>
          <Balance transaction={transaction} />
          <ExpenceCard transaction={transaction} />
          <NewTransaction setTransaction={setTransaction} />
        </Box>
        <Box>
          <Transactions
            transaction={transaction}
            setTransaction={setTransaction}
          />
        </Box>
      </Component>
    </Box>
  );
}

export default App;
