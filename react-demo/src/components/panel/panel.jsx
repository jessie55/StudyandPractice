import React, { PropTypes } from 'react';
import './panel.scss';

/*
* 参数说明：
* panelState  控制弹框show/hide
* assetInfo   弹窗显示值
* close       关闭按钮功能
* confirm     确认按钮功能
*/
const propTypes = {
  panelState: PropTypes.bool.isRequired,
  assetInfo: PropTypes.object.isRequired,
  close: PropTypes.func.isRequired,
  confirm: PropTypes.func.isRequired
};
class Panel extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			panelState: this.props.panelState,
			assetInfo: this.props.assetInfo
		};
		this.changeState = this.changeState.bind(this);
		this.confirm = this.confirm.bind(this);
	}
	componentWillReceiveProps(nextProps) {
        this.setState({ assetInfo: nextProps.assetInfo });
    }
	changeState(key){
		let objTemp = this.state.assetInfo;
		objTemp[key] = this.refs[key].value;
		this.setState({
			assetInfo: objTemp
		});
	}
	confirm(){
		let obj = this.state.assetInfo;
		this.props.confirm(obj);
	}
	render(){
		let popCls = '';

		if(!this.props.panelState){
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
							<input type="text" className="ipt" ref="owner" value={this.state.assetInfo.owner} onChange={ ()=>this.changeState('owner') } />
						</div>
						<div className="item">
							<b>固定编号</b>
							<input type="text" className="ipt" ref="id" value={this.state.assetInfo.id} onChange={ ()=>this.changeState('id') } />
						</div>
						<div className="item">
							<b>资产详情</b>
							<input type="text" className="ipt" ref="info" value={this.state.assetInfo.info} onChange={ ()=>this.changeState('info') } />
						</div>
					</div>
					<div className="panelBtnBar">
						<a href="javascript:;" className="btn" onClick={this.confirm}>确定</a>
						<a href="javascript:;" className="btn cancelBtn" onClick={() => this.props.close(false)} >取消</a>
					</div>
				</div>
			</div>
		</div>
		)
	}
}
export default Panel;