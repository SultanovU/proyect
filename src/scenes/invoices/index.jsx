import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataInvoices } from "../../data/mockData";
import Header from "../../components/Header";
import { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import ColorizeIcon from "@mui/icons-material/Colorize";
import CheckIcon from "@mui/icons-material/Check";
import './style.css'
const Invoices = () => {
  const theme = useTheme();

  const colors = tokens(theme.palette.mode);
  const [data, setData] = useState(mockDataInvoices);

  const [editableRows, setEditableRows] = useState({});

  const handleEditClick = (id) => {
    setEditableRows((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };
  const handleDelete = (id) => {
    setData((items) => items.filter((items) => items.id !== id));
  };

  return (
    <Box m="20px">
      <Header title="INVOICES" subtitle="List of Invoice Balances" />
      <Box
        sx={{
          border: "1px solid gray",
          height: "770px",
          position: "relative",
          overflow: "auto",
        }}
      >
        <table
          style={{
            width: "100%",
            height: "10%",
          }}
        >
          <thead style={{ background: colors.blueAccent[600] }}>
            <tr style={{ height: "64px" }}>
              <th>Kurs nomi</th>
              <th>Guruh nomi</th>
              <th>Bola soni</th>
              <th>Teacher</th>
              <th>Start time</th>
              <th>Close time</th>
              <th>Start date</th>
              <th>Close date</th>
              <th>Xona raqami</th>
              <th>Narxi</th>
              <th>Money time</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody >
            {data.map((items) => (
              <tr  style={{
                height: "50px",
 
              }}>
                <td contentEditable={editableRows[items.id]}>
                  {items.courseName}
                </td>
                <td contentEditable={editableRows[items.id]}>
                  {items.groupName}
                </td>
                <td contentEditable={editableRows[items.id]}>
                  {items.numberChildren}
                </td>
                <td contentEditable={editableRows[items.id]}>
                  {items.teacher}
                </td>
                <td contentEditable={editableRows[items.id]}>
                  {items.startTime}
                </td>
                <td contentEditable={editableRows[items.id]}>
                  {items.closeTime}
                </td>
                <td contentEditable={editableRows[items.id]}>
                  {items.startDate}
                </td>
                <td contentEditable={editableRows[items.id]}>
                  {items.closeDate}
                </td>
                <td contentEditable={editableRows[items.id]}>
                  {items.numberZona}
                </td>
                <td contentEditable={editableRows[items.id]}>{items.cost}</td>
                <td contentEditable={editableRows[items.id]}>
                  {items.moneytime}
                </td>
                <td
                  style={{
                    width: "100%",
                    height: "100%",
                    background: "transparent",
                    border: "none",
                    outline: "none",
                    color: "white",
                    padding: "2px",
                    border: "1px solid white",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <IconButton onClick={() => handleEditClick(items.id)}>
                    {editableRows[items.id] ? (
                      <CheckIcon sx={{ color: colors.greenAccent[500] }} />
                    ) : (
                      <ColorizeIcon sx={{ color: "white" }} />
                    )}
                  </IconButton>
                  <IconButton onClick={() => handleDelete(items.id)}>
                    <DeleteIcon sx={{ color: "red" }} />
                  </IconButton>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Box>
    </Box>
  );
};

export default Invoices;
