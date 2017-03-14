import React, { PropTypes } from 'react';

const propTypes = {
  assetArr: PropTypes.array.isRequired
};
export default class ListItem extends React.Component{
	render(){
		const listContent = this.props.assetArr.map(item => (
		    <tr>
		    	<td>{item.owner}</td>
		    	<td>{item.id}</td>
		    	<td>{item.info}</td>
		    	<td>操作</td>
		    </tr>
		));
		return(
			<tbody>
				{listContent}
			</tbody>
		);
	}
}



