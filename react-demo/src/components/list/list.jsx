import React, { PropTypes } from 'react';
import request from 'superagent';
import ListItem from './listItem/listItem';
import './list.scss';

export default class List extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			assetArr: []
		};
	}
	componentWillMount(){
		var _this = this;
		request
			.get('/data/asset.json')
  			.end(function(err,res){

  				let data = JSON.parse(res.text);
  				if(data.success=='1'){
  					if(data.asset.length==0){
  						//console.log(11);
  					}else{
  						_this.setState({
			 				assetArr: data.asset
			 			});
  					}
		 		}
			});
	}
	render(){
		return(
			<table className="tb">
				<thead>
					<tr>
						<td>使用人</td>
						<td>固定编号</td>
						<td>资产详情</td>
						<td>操作</td>
					</tr>
				</thead>
				<ListItem assetArr={this.state.assetArr} />
				
			</table>
		)
	}
}