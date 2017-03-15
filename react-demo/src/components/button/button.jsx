import React, { PropTypes } from 'react';
import './button.scss';

const propTypes = {
  openPanel: PropTypes.func.isRequired,
  search: PropTypes.func.isRequired
};

export default class Button extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			searchVal: ''
		};
		this.searchValChange = this.searchValChange.bind(this);
	}

	searchValChange(e){
		this.setState({
			searchVal: e.target.value
		});
	}

	render(){
		let clearAsset={
			owner: '',
			id: '',
			info: ''
		};
		return(
			<div>
				<a className="btn addList" onClick={() => this.props.openPanel(clearAsset,true)} >add</a>
				<div className="searchBar">
					<input type="text" className="ipt" onChange={this.searchValChange} />
					<a className="btn" onClick={()=>this.props.search(this.state.searchVal)} >search</a>
				</div>
			</div>	
		)
	}
} 