import React, { PropTypes } from 'react';
import Button from '../button/button';
import List from '../list/list';
import Panel from '../panel/panel';
import './assetPage.scss';

export default class AssetPage extends React.Component{
	render(){
		return(
			<div>
				<Button /> 
				<List /> 
				<Panel /> 
			</div>
		)
	}
}


