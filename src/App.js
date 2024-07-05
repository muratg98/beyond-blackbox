import React, { useState } from 'react';
import './App.css'; // Import CSS file for styling
import Xarrow from "react-xarrows";
import DataCollectionBox from './boxes/DataCollection';
import PreProcssingBox from './boxes/PreProcessing';
import DataCleaningBox from './boxes/DataCleaning';
import DataTransformationBox from './boxes/DataTransformation';
import DataIntegrationBox from './boxes/DataIntegration';
import DataReductionBox from './boxes/DataReduction';
import ConvertToNumpyBox from './boxes/Numpy';
import MachineLearningBox from './boxes/MachineLearning';
import SupervisedBox from './boxes/Supervised';
import UnsupervisedBox from './boxes/Unsupervised';
import {MathJaxContext} from 'better-react-mathjax';
function HomePage() {
  return (
    <MathJaxContext>
    <div className="home-page">
      <div className="title-section">
        <h1>Beyond BlackBox</h1> 
        <img src="./blackboxtitle.png" alt="beyond blackbox" className="title-image" /> 
      </div>
      <div className="subtitle-section">
        <h2>Understanding Machine Learning Concepts in Depth</h2>
      </div>
      <div className="card-container">
        <div className="row">
          <DataCollectionBox id="datacollection"/>
        </div>
        <div className="row">
          <PreProcssingBox id="preprocessing"/>
        </div>
        <div className="row">
          <DataCleaningBox id="datacleaning"/>
          <DataTransformationBox id="datatransformation"/>
          <DataIntegrationBox id="dataintegration"/>
          <DataReductionBox id="datareduction"/>
        </div>
        <div className="divider"></div>
        <div className="row">
          <ConvertToNumpyBox id="converttonumpy"/>
        </div>
        <div className="row">
          <MachineLearningBox id="machinelearning"/>
        </div>
        <div className="row">
          <SupervisedBox id="supervised"/>
          <UnsupervisedBox id="unsupervised"/>

        </div>
      </div>
      <Xarrow
        start="datacollection" 
        end="preprocessing"
      />
      <Xarrow
        start="preprocessing" 
        end="datacleaning"
        endAnchor={"top"} 
      />
      <Xarrow
        start="preprocessing" 
        end="datatransformation"
        endAnchor={"top"}
        startAnchor={"bottom"} 
      />
      <Xarrow
        start="preprocessing" 
        end="dataintegration"
        endAnchor={"top"}
        startAnchor={"bottom"} 
      />
      <Xarrow
        start="preprocessing" 
        end="datareduction"
        endAnchor={"top"}
      />
      <Xarrow
        start="converttonumpy" 
        end="machinelearning"
        endAnchor={"top"}
      />
      <Xarrow
        start="machinelearning" 
        end="supervised"
        endAnchor={"top"}
        startAnchor={"bottom"} 
      />
      <Xarrow
        start="machinelearning" 
        end="unsupervised"
        startAnchor={"bottom"} 
        endAnchor={"top"}
      />
    </div>
    <div className="footer">
          <p>&copy; 2024 Beyond BlackBox. Made by Murat.</p>
        </div>
    </MathJaxContext>
  );
}

export default HomePage;
