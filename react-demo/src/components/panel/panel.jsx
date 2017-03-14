import React, { PropTypes } from 'react';
import './panel.scss';

const propTypes = {
  showPanel: PropTypes.bool.isRequired,
  closePanel: PropTypes.func.isRequired,
  confirm: PropTypes.func.isRequired
};
class Panel extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			showPanel: this.props.showPanel,
			newAssetInfo: this.props.assetInfo
		};
		this.ownerChange = this.ownerChange.bind(this);
		this.infoChange = this.infoChange.bind(this);
		this.idChange = this.idChange.bind(this);
		this.confirm = this.confirm.bind(this);
	}
	ownerChange(e){
		this.setState({
			newAssetInfo:{owner: e.target.value}
		});
	}
	infoChange(e){
		this.setState({
			newAssetInfo:{info: e.target.value}
		});
	}
	idChange(e){
		this.setState({
			newAssetInfo:{id: e.target.value}
		});
	}
	confirm(){
		let obj = this.state.newAssetInfo;
		this.props.confirm(obj);
	}
	render(){
		let popCls = '';
		if(!this.props.showPanel){
			popCls = 'hide';
		}
		return(
			<div className={ "popup "+popCls } >
			<div className="overlay"></div>
			<div className="popInner">
				<div className="panelWrap">
					<div className="panelTitle">新增资产信息</div>
					<div className="panelContent">
						<div className="item">
							<b>使用人</b>
							<input type="text" className="ipt" value={this.props.assetInfo.owner} onChange={this.ownerChange} />
						</div>
						<div className="item">
							<b>固定编号</b>
							<input type="text" className="ipt" value={this.props.assetInfo.id} onChange={this.idChange} />
						</div>
						<div className="item">
							<b>资产详情</b>
							<input type="text" className="ipt" value={this.props.assetInfo.info} onChange={this.infoChange} />
						</div>
					</div>
					<div className="panelBtnBar">
						<a href="javascript:;" className="btn" onClick={this.confirm}>确定</a>
						<a href="javascript:;" className="btn cancelBtn" onClick={() => this.props.closePanel(false)} >取消</a>
					</div>
				</div>
			</div>
		</div>
		)
	}
}
export default Panel;