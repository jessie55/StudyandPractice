import React, { PropTypes } from 'react';
import Button from '../button/button';
import List from '../list/list';
import Panel from '../panel/panel';
import './assetPage.scss';

export default class AssetPage extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			panelState: false,
			keyword: '',
			assetInfo:{ owner:'', id:'', info:'', index: ''}
		};

		this.setPanelState = this.setPanelState.bind(this);
		this.changePanelInfo = this.changePanelInfo.bind(this);
		this.confirmAsset = this.confirmAsset.bind(this);
		this.search = this.search.bind(this);
	}
	setPanelState(param){
		this.setState({
			panelState: param
		});
	}
	changePanelInfo(obj,state){
		this.setPanelState(state);
		this.setState({
			assetInfo: obj
		});
	}
	confirmAsset(obj){
		this.setPanelState(false);
	}
	search(keyword){
		this.setState({
			keyword: keyword
		});
	}
	render(){
		return(
			<div className="wrap">
				<header>JDC资产盘点表</header>
				<Button openPanel={this.changePanelInfo} search={this.search} /> 
				<List changePanelInfo={this.changePanelInfo} newAssetItem={this.state.assetInfo} keyword={this.state.keyword} /> 
				<Panel panelState={this.state.panelState} assetInfo={this.state.assetInfo} close={this.setPanelState} confirm={this.confirmAsset}  /> 
			</div>
		)
	}
}


