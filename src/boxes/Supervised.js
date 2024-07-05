import React, { useState, useEffect } from "react";
import { Tabs, Tab, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import CustomCardWithDialog from "../components/CustomCardWithDialog";
import { MathJax } from "better-react-mathjax";

const SupervisedBox = ({ id }) => {
 
  useEffect(()=>{
    if( typeof window?.MathJax !== "undefined"){
      window.MathJax.typeset()
    }
  },[])
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  return (
    <CustomCardWithDialog title="Supervised Learning" id={id}>
      <Tabs
        value={tabIndex}
        onChange={handleTabChange}
        variant="fullWidth"
        aria-label="Supervised Learning Tabs"
      >
        <Tab label="What is it" />
        <Tab label="General Journey" />
        <Tab label="Advanced Regression" />
        <Tab label="Advanced Classification" />

      </Tabs>
      <TabPanel value={tabIndex} index={0}>
        <Typography>
        Supervised learning is when we have both the input and output variables. Our job then becomes to find the best function that represents how the input and output data are
      associated. This is done so we can make predictions and accurately extrapolate data to outside its dataset.
      <p>Technically, the algorithm we have needs to be able to predict either a continuous variable (any number) or a categorical variable, which in machine learning we call 
        regression or classification algorithms, respectively.
      </p>
      <SupervisedLearningTable/>
        </Typography>
      </TabPanel>
      <TabPanel value={tabIndex} index={1}>
        So you've got the dataset all ready to be inputted into a machine learning model. The first thing to do is examine the relationship between the variables to determine which
        model you want to adopt for analysis. 
        <ul>
          <li><strong>Linear Regression:</strong> Use when there is a linear relationship between the predictor variable (X) and the response variable (Y). This can be assessed visually through scatter plots or statistically using correlation coefficients.</li>
          <li><strong>Multiple Regression:</strong> Employ when there are multiple predictor variables (X₁, X₂, ...) that may collectively influence the response variable (Y). You'll need to assess the relationships between each predictor and the response, as well as potential multicollinearity among predictors.</li>
          <li><strong>Polynomial Regression:</strong> Appropriate when the relationship between the predictor variable (X) and the response variable (Y) appears to be non-linear. This can be indicated by visually inspecting scatter plots and observing curved or non-linear patterns.</li>
        </ul>
        Once you've chosen the appropriate model to represent the given dataset, the question becomes: <i>"How well does this model predict"</i> or <i>"How much error is there in the prediction by the model"</i>.
        These questions will bring you onto a fundamental aspect of Machine Learning - the Cost Function (also Loss Function). 
        <p><strong>- Cost Function: </strong> quantifies the error between predicted and actual values - thus providing insight into the performance of the model.</p>
        <p>Once the cost/loss function of the model has been established, it is necessary to take things a step further and try minimize this cost/loss function - which is known as Optimization
          the second fundamental aspect of Machine Learning. The smaller the value of the cost/loss function, the less error there is in prediction in the model (better model performace and predictions).
        </p>
        <p><strong>- Optimization: </strong> the process of minimizing the cost/loss function of a model. There are many different approaches to achieve this, but by far the most
        popular method is Gradient Descent. </p>
      </TabPanel>
      <TabPanel value={tabIndex} index={2}>
        There are three types of regression, linear, polynomial, and multiple.
      <AdvancedRegressionTable/>      
      </TabPanel>
      <TabPanel value={tabIndex} index={3}>
        <AdvancedClassificationTable/>
      </TabPanel>
    </CustomCardWithDialog>
  );
};

function AdvancedClassificationTable() {
  return (
    <TableContainer>
  <Table>
    <TableHead>
      <TableRow>
        <TableCell></TableCell>
        <TableCell><strong>Binary Classification</strong></TableCell>
        <TableCell><strong>Multi-Class Classification</strong></TableCell>
        <TableCell><strong>Multi-Label Classification</strong></TableCell>
        <TableCell><strong>Imbalanced Classification</strong></TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
    <TableRow>
        <TableCell><strong>Algorithms</strong></TableCell>
        <TableCell>Logistic Regression, SVM, Decision Trees, KNN</TableCell>
        <TableCell>Logistic Regression, Random Forest, Gradient Boosting, Naive Bayes, SVM, KNN.</TableCell>
        <TableCell>Binary Relevance, Label Powerset, Multi-label Decision Tree/Random Forest/Gradient Boosting.</TableCell>
        <TableCell>Resampling methods, Ensemble techniques, etc.</TableCell>
      </TableRow>
      <TableRow>
        <TableCell><strong>Objective</strong></TableCell>
        <TableCell>Separate data into two classes</TableCell>
        <TableCell>Classify data into more than two exclusive classes</TableCell>
        <TableCell>Assign multiple labels to each instance</TableCell>
        <TableCell>Handle datasets with imbalanced class distributions</TableCell>
      </TableRow>
      <TableRow>
        <TableCell><strong>Example</strong></TableCell>
        <TableCell>To classify emails as spam or not spam.</TableCell>
        <TableCell>To classify images of handwritten digits (0-9) into respective digits.</TableCell>
        <TableCell>To predict tags for a given article (e.g., sports, technology, politics)</TableCell>
        <TableCell>To predict rare fraudulent transactions in a credit card dataset</TableCell>
      </TableRow>
      <TableRow>
        <TableCell><strong>Parameters</strong></TableCell>
        <TableCell>Intercept (b) and Coefficients (w)</TableCell>
        <TableCell>Intercept (b) and Coefficients (w)</TableCell>
        <TableCell>Intercept (b) and Coefficients (w)</TableCell>
        <TableCell>Depends on the chosen algorithm</TableCell>
      </TableRow>
      <TableRow>
        <TableCell><strong>Assumptions</strong></TableCell>
        <TableCell>Linear separability of classes</TableCell>
        <TableCell>Linear separability of classes or handle non-linear relationships</TableCell>
        <TableCell>Each label is independent of others</TableCell>
        <TableCell>Data distribution is known or can be balanced</TableCell>
      </TableRow>
      
    </TableBody>
  </Table>
</TableContainer>


  );
}


function AdvancedRegressionTable() {
  return (
    <TableContainer>
  <Table>
    <TableHead>
      <TableRow>
        <TableCell></TableCell>
        <TableCell style={{textAlign:'center'}}><strong>Linear Regression</strong></TableCell>
        <TableCell style={{textAlign:'center'}}><strong>Multiple Regression</strong></TableCell>
        <TableCell style={{textAlign:'center'}}><strong>Polynomial Regression</strong></TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      <TableRow>
        <TableCell>Model Type</TableCell>
        <TableCell>Single predictor variable (X)</TableCell>
        <TableCell>Multiple predictor variables (X₁, X₂, ...)</TableCell>
        <TableCell>Single predictor variable (X) with polynomial terms</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Equation</TableCell>
        <TableCell><MathJax>{'$$ f(x) = mx + b $$'}</MathJax></TableCell>
        <TableCell><MathJax>{'$$ f(x) = b + w₁x₁ + w₂x₂ + ... + ε $$'}</MathJax></TableCell>
        <TableCell><MathJax>{'$$ f(x) = b + w₁x + w₂x² + ... + wₙxⁿ + ε $$'}</MathJax></TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Objective</TableCell>
        <TableCell>Model the relationship between one predictor variable and the response variable</TableCell>
        <TableCell>Model the relationship between multiple predictor variables and the response variable</TableCell>
        <TableCell>Model complex relationships by adding polynomial terms to capture non-linear patterns</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Linearity</TableCell>
        <TableCell>✔️</TableCell>
        <TableCell>✔️</TableCell>
        <TableCell>❌</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Parameters</TableCell>
        <TableCell>Intercept (b) and Coefficient (w)</TableCell>
        <TableCell>Intercept (b) and Coefficients (w₁, w₂, ...)</TableCell>
        <TableCell>Intercept (b) and Coefficients (w₁, w₂, ...wₙ)</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Assumptions</TableCell>
        <TableCell>Linearity, Independence, Homoscedasticity</TableCell>
        <TableCell>Linearity, Independence, Homoscedasticity</TableCell>
        <TableCell>Linearity, Independence, Homoscedasticity</TableCell>
      </TableRow>
    </TableBody>
  </Table>
</TableContainer>


  );
}

function SupervisedLearningTable() {
  return (
  <TableContainer>
  <Table>
    <TableHead>
      <TableRow>
        <TableCell> </TableCell>
        <TableCell><strong>Regression</strong></TableCell>
        <TableCell><strong>Classification</strong></TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      <TableRow>
        <TableCell><strong>Outcome/Output</strong></TableCell>
        <TableCell>Continuous - Predicts a quantity</TableCell>
        <TableCell>Discrete - Predicts a category or label</TableCell>
      </TableRow>
      <TableRow>
        <TableCell><strong>Example</strong></TableCell>
        <TableCell>Predicting house prices</TableCell>
        <TableCell>Identifying spam emails</TableCell>
      </TableRow>
      <TableRow>
        <TableCell><strong>Model</strong></TableCell>
        <TableCell>Linear/multiple/polynomial regression</TableCell>
        <TableCell>Logistic regression, multinomial logistic regression,  decision trees, SVM</TableCell>
      </TableRow>
      <TableRow>
        <TableCell><strong>Evaluation</strong></TableCell>
        <TableCell>MSE, R-squared</TableCell>
        <TableCell>Accuracy, Precision, Recall, F1-score</TableCell>
      </TableRow>
      <TableRow>
        <TableCell><strong>Loss function</strong></TableCell>
        <TableCell>Mean Squared Error (MSE)</TableCell>
        <TableCell>Cross-Entropy Loss</TableCell>
      </TableRow>
      <TableRow>
        <TableCell><strong>Decision boundary</strong></TableCell>
        <TableCell>N/A</TableCell>
        <TableCell>Separates different classes</TableCell>
      </TableRow>
      <TableRow>
        <TableCell><strong>Model goals</strong></TableCell>
        <TableCell>Optimization - minimize loss function (reduce error, increase performance)</TableCell>
        <TableCell>Optimization - minimize loss function (reduce error, increase performance)</TableCell>
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


export default SupervisedBox;
