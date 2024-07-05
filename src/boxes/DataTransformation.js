import React, { useState } from "react";
import { Tabs, Tab, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import CustomCardWithDialog from "../components/CustomCardWithDialog";

const DataTransformationBox = ({ id }) => {
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  return (
    <CustomCardWithDialog title="Data Transformation" id={id}>
      <Tabs
        value={tabIndex}
        onChange={handleTabChange}
        variant="fullWidth"
        aria-label="Data Transformation Tabs"
      >
        <Tab label="What is it" />
        <Tab label="Techniques" />
      </Tabs>
      <TabPanel value={tabIndex} index={0}>
        <Typography>
        Data transformation is the process of putting data into a format which will allow for analysis. 
        Whilst transformation also entails data cleaning, it takes things a step further to meet specific analysis.  
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
              <TableCell>Normalization</TableCell>
              <TableCell>Ensures that all features have the same scale, preventing one feature from dominating due to its larger magnitude</TableCell>
              <TableCell>Scale data to a common range, often between 0 and 1 or -1 and 1 </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Standardization</TableCell>
              <TableCell>Makes data conform to a normal distribution, which is often an assumption in many statistical models. It also makes the data easier to interpret</TableCell>
              <TableCell>Transform data to have a mean of 0 and a standard deviation of 1.</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>One-Hot Encoding/Dummy Coding</TableCell>
              <TableCell>Handles categorical data by representing each category as a binary feature, enabling algorithms to process categorical variables</TableCell>
              <TableCell>Create a binary column for each category, where 1 indicates the presence of the category and 0 indicates absence. </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Discretization</TableCell>
              <TableCell>Converts continuous data into discrete categories, which can simplify analysis and improve interpretability</TableCell>
              <TableCell>Group continuous values into intervals or bins and assign them discrete labels</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Feature Engineering</TableCell>
              <TableCell>Enhances the predictive power of machine learning models by creating new features or transforming existing ones. </TableCell>
              <TableCell>Generate new features based on domain knowledge, interactions between existing features, or dimensionality reduction techniques </TableCell>
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

export default DataTransformationBox;
