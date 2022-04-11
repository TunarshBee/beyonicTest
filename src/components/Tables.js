import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import axios from "axios";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import DeleteOutlineTwoToneIcon from "@mui/icons-material/DeleteOutlineTwoTone";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/table.css";
import "bootstrap/dist/js/bootstrap";
import Pass from "./Pass";
import Modals from "./Modals";
import { Modal, Button } from "react-bootstrap";
import EditPop from "./EditPop";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function Tables() {
  const [data, setData] = useState([]);
  const [modal, setModal] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [id, setId] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:5000/transactions")
      .then((e) => e.data)
      .then((e) => {
        setData(e);
        // console.log(e)
      })
      .catch((err) => console.log(err.message));
  }, []);
  function remove(id) {
    return setData(data.filter((e) => e.id !== id));
  }
  return (
    <>
      <TableContainer className="table" component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Value Date</StyledTableCell>
              <StyledTableCell align="center">Transaction ID</StyledTableCell>
              <StyledTableCell align="center">Movement Type</StyledTableCell>
              <StyledTableCell align="center">Amount</StyledTableCell>
              <StyledTableCell align="center">Status</StyledTableCell>
              <StyledTableCell align="center">Actions</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <StyledTableRow key={row.id}>
                <StyledTableCell component="th" scope="row">
                  {row.valueDate}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {row.transactionID}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {row.movementType}
                </StyledTableCell>
                <StyledTableCell align="center">
                  <Pass key={row.id} {...row} />
                </StyledTableCell>
                <StyledTableCell align="center">{row.status}</StyledTableCell>
                <StyledTableCell align="center">
                  <span>
                    <BorderColorOutlinedIcon
                      className="editing"
                      onClick={() => {
                        setId(row.id);
                        setModal2(true)
                      }}
                    />
                    <DeleteOutlineTwoToneIcon
                      className="delete"
                      onClick={() => {
                        setId(row.id);
                        setModal(true);
                      }}
                    />
                  </span>
                </StyledTableCell>
                {/* <StyledTableCell align="center">{row.protein}</StyledTableCell> */}
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {modal && <Modals id={id} remove={remove} set={setModal} type="" />}
      {modal2 && <EditPop id={id} remove={remove} set={setModal} type="" />}
    </>
  );
}


// render(<Example />);
