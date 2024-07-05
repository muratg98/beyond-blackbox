import React from "react";
import { Typography } from "@mui/material";
import CustomCardWithDialog from "../components/CustomCardWithDialog";

const DataIntegrationBox = ({ id }) => {

  return (
    <CustomCardWithDialog title="Data Integration" id={id}>
        <Typography>          
        This is the process of combining data from one or more systems to another system. These different sources of data are put into a unified format that can be analyzed collectively.
        Modern Data Stack (MDS) are often used for this data engineering process. These include:

        <p><strong>1. Change Data Capture (CDC)</strong> - detecting and recording modifications made to data within a database in real time to a downstream process.</p> 
        <p><strong>2. Automated Transformation</strong> - cleaning and preparing data to be moved to a data warehouse/lake</p>
        <p><strong>3. Robust Data Catalog</strong> - an organized inventory of data labelled using metadata to help organizations manage their data.</p>
        
        </Typography>

    </CustomCardWithDialog>
  );
};


export default DataIntegrationBox;
