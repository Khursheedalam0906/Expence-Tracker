import { ListItem, ListItemIcon, ListItemText, styled } from "@mui/material";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";

const Detail = styled(ListItem)`
  margin-top: 10px;
`;

const Transaction = ({ item, transaction, setTransaction }) => {
  const color = item.amount > 0 ? "green" : "red";

  const DeleteTransaction = (id) => {
    setTransaction(transaction.filter((item) => item.id !== id));
  };

  return (
    <Detail style={{ background: `${color}`, color: "#fff" }}>
      <ListItemIcon onClick={() => DeleteTransaction(item.id)}>
        <DeleteIcon />
      </ListItemIcon>
      <ListItemText>{item.text}</ListItemText>
      <ListItemText>{item.amount}</ListItemText>
    </Detail>
  );
};

export default Transaction;
