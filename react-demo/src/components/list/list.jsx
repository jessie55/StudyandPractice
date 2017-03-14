import React, { PropTypes } from 'react';
import request from 'superagent';
import ListItem from './listItem/listItem';
import './list.scss';

const propTypes = {
  setAssetInfo: PropTypes.func.isRequired
};
class List extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			assetArr: [{
				owner: '',
				id: '',
				info: ''
			}]
		};

		this.delete = this.delete.bind(this);
		this.change = this.change.bind(this);
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
	delete(e){
		let index=e.target.getAttribute("data-index"),
			assetArrTemp = this.state.assetArr;
		assetArrTemp.splice(index,1);
		this.setState({
			assetArr: assetArrTemp
		});
	}
	change(e){
		let index=e.target.getAttribute("data-index");
		let obj = this.state.assetArr[index];
		obj.index = index;
		this.props.setAssetInfo(obj);
	}
	render(){
		let _this = this;
		const listContent = this.state.assetArr.map( (item,index) => (
		    <ListItem listItem={item} index={index} delete={this.delete} change={this.change} />
		));
		return(
			<div className="tbWrap">
				<table className="tb">
					<thead>
						<tr>
							<td>使用人</td>
							<td>固定编号</td>
							<td>资产详情</td>
							<td>操作</td>
						</tr>
					</thead>
					<tbody>
						{listContent}
					</tbody>
				</table>
			</div>	
		)
	}
}

List.propTypes = propTypes;
export default List;