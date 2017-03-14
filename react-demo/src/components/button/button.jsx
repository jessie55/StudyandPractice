import React, { PropTypes } from 'react';
import Panel from '../panel/panel';
import './button.scss';

export default class Button extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			searchVal: '',
			showPanel: false
		};
		this.addItem = this.addItem.bind(this);
		this.searchItem = this.searchItem.bind(this);
		this.searchValChange = this.searchValChange.bind(this);
	}
	addItem(){
		console.log('add');
		Panel.changeState();
	}
	searchValChange(e){
		this.setState({
			searchVal: e.target.value
		});
	}
	searchItem(){
		console.log(this.state.searchVal);
	}

	render(){
		return(
			<div>
				<a className="btn addList" onClick={this.addItem} >add</a>
				<div className="searchBar">
					<input type="text" className="ipt" onChange={this.searchValChange} />
					<a className="btn" onClick={this.searchItem} >search</a>
				</div>
			</div>	
		)
	}
} 