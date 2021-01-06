import React from 'react';
import logo from './logo.svg';
import './App.css';

import FeatureA from "./feature-a/feature-a";

import { configureFakeBackend } from "./helpers/fake-backend";
configureFakeBackend();

const App = () => {
  return (
    <div>
      <FeatureA />
    </div>
  );
};

export default App;
