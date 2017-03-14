import React, { PropTypes } from 'react';
import './ListItem.scss';

const propTypes = {
  listItem: PropTypes.object.isRequired,
  delete: PropTypes.func.isRequired,
  change: PropTypes.func.isRequired
};
export default class ListItem extends React.Component{
	render(){
		return(
			<tr>
		    	<td>{this.props.listItem.owner}</td>
		    	<td>{this.props.listItem.id}</td>
		    	<td>{this.props.listItem.info}</td>
		    	<td>
		    		<a href="javascript:;" className="btn" data-index={this.props.index} onClick={this.props.delete}>删除</a>
		    		<a href="javascript:;" className="btn" data-index={this.props.index} onClick={this.props.change}>修改</a>
		    	</td>
		    </tr>
		);
	}
}



