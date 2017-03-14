import React, { PropTypes } from 'react';
import './panel.scss';

class Panel extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			showPanel: false
		};
		this.changeState = this.changeState.bind(this);
	}
	changeState(){
		console.log(111);
		// console.log(state);
		// this.setState({
		// 	showPanel: state
		// });
	}
	render(){
		let popCls = '';
		if(!this.state.showPanel){
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
							<input type="text" className="ipt" />
						</div>
						<div className="item">
							<b>固定编号</b>
							<input type="text" className="ipt" />
						</div>
						<div className="item">
							<b>资产详情</b>
							<input type="text" className="ipt" />
						</div>
					</div>
					<div className="panelBtnBar">
						<a href="javascript:;" className="btn">确定</a>
						<a href="javascript:;" className="btn cancelBtn">取消</a>
					</div>
				</div>
			</div>
		</div>
		)
	}
}
export default Panel;