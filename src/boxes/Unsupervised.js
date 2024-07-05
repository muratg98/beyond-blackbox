import React, { useState } from "react";
import { Tabs, Tab, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import CustomCardWithDialog from "../components/CustomCardWithDialog";
import { MathJax } from "better-react-mathjax";

const UnsupervisedBox = ({ id }) => {
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  return (
    <CustomCardWithDialog title="Unsupervised Learning" id={id}>
      <Tabs
        value={tabIndex}
        onChange={handleTabChange}
        variant="fullWidth"
        aria-label="Unsupervised Learning Tabs"
      >
        <Tab label="What is it" />
        <Tab label="Advanced Clustering" />
        <Tab label="Advanced Dimensionality Reduction" />
      </Tabs>
      <TabPanel value={tabIndex} index={0}>
        <Typography>
          Unsupervised learning is a type of machine learning where the model learns to find patterns or structure in the input data without being explicitly provided with labeled output data. Unlike supervised learning, there are no predefined categories or labels. Instead, the algorithm explores the data and identifies inherent structures or relationships.
        </Typography>
      </TabPanel>
      <TabPanel value={tabIndex} index={1}>
        <AdvancedClusteringTable />
      </TabPanel>
      <TabPanel value={tabIndex} index={2}>
        <AdvancedDimensionalityReductionTable />
      </TabPanel>
    </CustomCardWithDialog>
  );
};

function AdvancedClusteringTable() {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell><strong>K-Means Clustering</strong></TableCell>
            <TableCell><strong>Hierarchical Clustering</strong></TableCell>
            <TableCell><strong>Gaussian Mixture Models</strong></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell><strong>Objective</strong></TableCell>
            <TableCell>Partition data into K clusters based on similarity</TableCell>
            <TableCell>Construct a hierarchy of clusters</TableCell>
            <TableCell>Model data as a mixture of several Gaussian distributions</TableCell>
          </TableRow>
          <TableRow>
            <TableCell><strong>Example</strong></TableCell>
            <TableCell>Customer segmentation for marketing strategies</TableCell>
            <TableCell>Phylogenetic tree construction in biology</TableCell>
            <TableCell>Anomaly detection in finance</TableCell>
          </TableRow>
          <TableRow>
            <TableCell><strong>Parameters</strong></TableCell>
            <TableCell>Number of clusters (K)</TableCell>
            <TableCell>Distance metric, linkage criterion</TableCell>
            <TableCell>Number of components, covariance type</TableCell>
          </TableRow>
          <TableRow>
            <TableCell><strong>Assumptions</strong></TableCell>
            <TableCell>Clusters are convex and isotropic</TableCell>
            <TableCell>Clusters have a hierarchical structure</TableCell>
            <TableCell>Data is generated from Gaussian distributions</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

function AdvancedDimensionalityReductionTable() {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell><strong>Principal Component Analysis (PCA)</strong></TableCell>
            <TableCell><strong>t-Distributed Stochastic Neighbor Embedding (t-SNE)</strong></TableCell>
            <TableCell><strong>Autoencoders</strong></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell><strong>Objective</strong></TableCell>
            <TableCell>Reduce dimensionality while preserving variance</TableCell>
            <TableCell>Visualize high-dimensional data in lower dimensions</TableCell>
            <TableCell>Learn compact representations of data</TableCell>
          </TableRow>
          <TableRow>
            <TableCell><strong>Example</strong></TableCell>
            <TableCell>Image compression</TableCell>
            <TableCell>Visualizing word embeddings</TableCell>
            <TableCell>Anomaly detection in network traffic</TableCell>
          </TableRow>
          <TableRow>
            <TableCell><strong>Parameters</strong></TableCell>
            <TableCell>Number of components</TableCell>
            <TableCell>Perplexity</TableCell>
            <TableCell>Number of hidden layers, units per layer</TableCell>
          </TableRow>
          <TableRow>
            <TableCell><strong>Assumptions</strong></TableCell>
            <TableCell>Linear relationship between variables</TableCell>
            <TableCell>Local similarities are preserved in lower dimensions</TableCell>
            <TableCell>Data can be represented efficiently in a lower-dimensional space</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

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

export default UnsupervisedBox;
