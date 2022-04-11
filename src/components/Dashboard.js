import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "../css/dashboard.css";
import { useState } from "react";
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";
import DatePickers from "./DatePickers";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SearchBar from "./SearchBar";

function Dashboard() {
  const [country, setcountry] = useState("Kenya");
  const [trans, setTrans] = useState(
    "Edit the transactions below to match the right information."
  );
  return (
    <div>
      <section className="section1">
        <ArrowBackIcon/>
        <label>Transactions</label>

        <TextField
          id="standard-basic"
          placeholder="Vodafone Ghana"
          variant="standard"
        />
      </section>
      <section className="section2">
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "100%" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="standard-basic"
            placeholder="Country of Interest"
            variant="standard"
          />
          {country}
        </Box>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "100%" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="standard-basic"
            className="input"
            placeholder="Edit Transactions"
            variant="standard"
          />
          {trans}
        </Box>
      </section>
      <section className="section3">
        <span className="localSearch">
          <select className="select">
            <option>Local</option>
            <option>Local</option>
            <option>Local</option>
          </select>
          <b>|</b>
          <SearchBar />
        </span>
        <span className="section3Two">
          <span className="filter">
            <FilterAltOutlinedIcon />
            <select className="select">
              <option>Filter</option>
              <option>Filter</option>
              <option>Filter</option>
            </select>
          </span>
          <span className="edit">
            <InsertDriveFileOutlinedIcon />
            <select className="select">
              <option>Export as</option>
              <option>Export as</option>
              <option>Export as</option>
            </select>
          </span>
          <DatePickers />
        </span>
      </section>
    </div>
  );
}

export default Dashboard;
