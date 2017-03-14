import React, { PropTypes } from 'react';
import Button from '../button/button';
import List from '../list/list';
import Panel from '../panel/panel';
import './assetPage.scss';

export default class AssetPage extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			showPanel: false,
			assetInfo:{
				owner:'',
				id:'',
				info:''
			}
		};

		this.changePanelState = this.changePanelState.bind(this);
		this.setAssetInfo = this.setAssetInfo.bind(this);
		this.changeAssetInfo = this.changeAssetInfo.bind(this);
	}
	changePanelState(param){
		this.setState({
			showPanel: param
		});
	}
	setAssetInfo(obj){
		this.changePanelState(true);
		this.setState({
			assetInfo: {
				owner:obj.owner,
				id:obj.id,
				info:obj.info
			}
		});
	}
	changeAssetInfo(obj){
		console.log(obj);
		this.changePanelState(false);
	}

	render(){
		return(
			<div className="wrap">
				<header>JDC资产盘点表</header>
				<Button openPanel={this.changePanelState} /> 
				<List setAssetInfo={this.setAssetInfo} /> 
				<Panel showPanel={this.state.showPanel} assetInfo={this.state.assetInfo} closePanel={this.changePanelState} confirm={this.changeAssetInfo}  /> 
			</div>
		)
	}
}


