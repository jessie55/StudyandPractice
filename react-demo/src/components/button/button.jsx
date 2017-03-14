import React, { PropTypes } from 'react';
import './button.scss';

const propTypes = {
  openPanel: PropTypes.func.isRequired
};

export default class Button extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			searchVal: ''
		};

		this.searchItem = this.searchItem.bind(this);
		this.searchValChange = this.searchValChange.bind(this);
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
				<a className="btn addList" onClick={() => this.props.openPanel(true)} >add</a>
				<div className="searchBar">
					<input type="text" className="ipt" value="1212" onChange={this.searchValChange} />
					<a className="btn" onClick={this.searchItem} >search</a>
				</div>
			</div>	
		)
	}
} 