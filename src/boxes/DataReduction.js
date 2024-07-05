import React, { useState } from "react";
import { Tabs, Tab, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import CustomCardWithDialog from "../components/CustomCardWithDialog";

const DataReductionBox = ({ id }) => {
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  return (
    <CustomCardWithDialog title="Data Reduction" id={id}>
      <Tabs
        value={tabIndex}
        onChange={handleTabChange}
        variant="fullWidth"
        aria-label="Data Reduction Tabs"
      >
        <Tab label="What is it" />
        <Tab label="Techniques" />
      </Tabs>
      <TabPanel value={tabIndex} index={0}>
        <Typography>
        The process of reducing the size of a dataset while maintaining crucial information.
        Now the reason you/an organization might want to do this is because reducing the amount of unnecessary data can save large sums of money. There are other benefits too like
        increased data quality, data efficiency, and improved usability for AI/Machine Learning models.
        </Typography>
      </TabPanel>
      <TabPanel value={tabIndex} index={1}>
      The most common techniques/methods for data reduction:

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
              <TableCell>Dimensionality reduction</TableCell>
              <TableCell>Reduces the number of variables or features in the dataset, making it easier to analyze and interpret while minimizing noise and redundancy</TableCell>
              <TableCell>Techniques like Principal Component Analysis (PCA) or Singular Value Decomposition (SVD) identify and eliminate less informative or redundant variables.</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Numerosity reduction</TableCell>
              <TableCell>Reduce the number of data points while still preserving the most important information.</TableCell>
              <TableCell>Can use techniques like sampling, binning, clustering and aggregation. </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Feature selection</TableCell>
              <TableCell>Identifies and retains only the most relevant features or variables for modeling, improving the model's efficiency and interpretability.</TableCell>
              <TableCell>Evaluate the importance of each feature and select the most informative ones based on statistical metrics or machine learning algorithms</TableCell>
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



export default DataReductionBox;
