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
			assetInfo:{ owner:'', id:'', info:'', index: ''},
			searchFlag: false,
			addFlag: false
		};

		this.setPanelState = this.setPanelState.bind(this);
		this.changePanelInfo = this.changePanelInfo.bind(this);
		this.confirmAsset = this.confirmAsset.bind(this);
		this.search = this.search.bind(this);
		this.chosePanel = this.chosePanel.bind(this);
	}
	setPanelState(param){
		this.setState({
			panelState: param
		});
	}
	clearPanelInfo(){
		this.setState({
			assetInfo:{ owner:'', id:'', info:'', index: ''}
		});
	}
	changePanelInfo(obj,state){
		this.setPanelState(state);
		this.setState({
			assetInfo: obj,
			searchFlag: false,
			addFlag: true
		});
	}
	confirmAsset(obj){
		let _this = this;
		this.setPanelState(false);
		this.setState({
			searchFlag: false,
			addFlag: true
		});
	}
	search(keyword){
		this.setState({
			keyword: keyword,
			searchFlag: true,
			addFlag: false
		});
	}
	chosePanel(param){
		this.setPanelState(param);
		this.clearPanelInfo();
		this.setState({
			searchFlag: false,
			addFlag: true
		});
	}
	render(){
		return(
			<div className="wrap">
				<header>JDC资产盘点表</header>
				<Button
					openPanel={this.changePanelInfo}
					search={this.search}
				/> 
				<List 
					changePanelInfo={this.changePanelInfo}
					newAssetItem={this.state.assetInfo}
					searchFlag={this.state.searchFlag}
					addFlag={this.state.addFlag}
					keyword={this.state.keyword}
				/> 
				<Panel
					panelState={this.state.panelState}
					assetInfo={this.state.assetInfo}
					close={this.chosePanel}
					confirm={this.confirmAsset}
				/> 
			</div>
		)
	}
}


