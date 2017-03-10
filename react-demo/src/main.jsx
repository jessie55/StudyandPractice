import React from 'react';
import ReactDOM from 'react-dom';
import AssetPage from './components/assetPage/assetPage';
import './common/common.scss';

var wrap = document.createElement('div');
document.body.appendChild(wrap);
ReactDOM.render( <AssetPage />, wrap );