import React, { PropTypes } from 'react';
import './button.scss';

export default class Button extends React.Component{
	render(){
		return(
			<div>
				<a className="btn addList">add</a>
				<div className="searchBar">
					<input type="text" className="ipt" />
					<a className="btn">search</a>
				</div>
			</div>	
		)
	}
} 