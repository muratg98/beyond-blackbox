import React, { useState } from "react";
import { Tabs, Tab, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import CustomCardWithDialog from "../components/CustomCardWithDialog";

const DataCleaningBox = ({ id }) => {
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  return (
    <CustomCardWithDialog title="Data Cleaning" id={id}>
      <Tabs
        value={tabIndex}
        onChange={handleTabChange}
        variant="fullWidth"
        aria-label="Data Cleaning Tabs"
      >
        <Tab label="What is it" />
        <Tab label="More Detail" />
      </Tabs>
      <TabPanel value={tabIndex} index={0}>
        <Typography>
          Data cleaning involves fixing or removing errors, duplicates, and
          incomplete data from a dataset to ensure accuracy and reliability.
          It's essential for trustworthy outcomes in data analysis. While the
          specific steps vary depending on the dataset, having a consistent
          process template is crucial for effective data cleaning every time.
        </Typography>
      </TabPanel>
      <TabPanel value={tabIndex} index={1}>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><strong>Techniques</strong></TableCell>
              <TableCell><strong>Why</strong></TableCell>
              <TableCell><strong>How</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Remove duplicates</TableCell>
              <TableCell>Ensures data accuracy</TableCell>
              <TableCell>Identify and delete duplicate entries</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Remove irrelevant data</TableCell>
              <TableCell>Focuses analysis on relevant information</TableCell>
              <TableCell>Determine criteria for relevance and filter data accordingly</TableCell>
            </TableRow>
            <TableRow>
                <TableCell>Data formatting</TableCell>
              <TableCell>Ensures consistency and uniformity</TableCell>
              <TableCell> Standardize the format of data fields, such as dates, currencies, and measurements, according to a predefined format.</TableCell>
            </TableRow>
            <TableRow>
                <TableCell>Missing values</TableCell>
              <TableCell>Prevents biased analysis and inaccurate results</TableCell>
              <TableCell>Fill missing values using mean, median, or mode - or consider removing rows with missing data, but assess the impact on analysis</TableCell>
            </TableRow>
            <TableRow>
                <TableCell>Outliers</TableCell>
              <TableCell>Prevents skewed analysis and inaccurate models</TableCell>
              <TableCell>Detect outliers using statistical methods like z-score or visual techniques like box plots, then decide whether to remove, transform, or impute them</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      </TabPanel>
    </CustomCardWithDialog>
  );
};

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && (
        <Typography sx={{ p: 3 }}>{children}</Typography>
      )}
    </div>
  );
}

export default DataCleaningBox;
