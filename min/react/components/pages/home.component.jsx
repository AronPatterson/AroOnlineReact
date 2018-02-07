import React from 'react';
import Assets from '../Assets.jsx';
import DataStore from '../../flux/stores/DataStore.jsx';

class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			loadingProcessed: false // start it off as failed before it loads
		}
	}
	componentDidMount() {
		Assets.backToTop();
		Assets.scrollToTop();
		this.setState({
			loadingProcessed: true
		});
	}
	render(){
		if (!this.state.loadingProcessed) return <div className="text-center">
			<img src={Assets.myPath + "img/svg-loader.svg"} />
		</div>;
		let page = DataStore.getPageBySlug('home');
		return <div className="row">
			<div className="col-sm-16 col-md-10 col-lg-10 order-sm-2 order-lg-1 homeMain">
				<h2 className="text-xs-center">Welcome, friend!</h2>
				<div dangerouslySetInnerHTML={{ __html: (page.content.rendered) }}></div>
			</div>
			<aside className="col-sm-16 col-md-6 col-lg-6 order-sm-1 order-lg-2 text-center homeSide">
				<img className="d-flex" src={aoWP.partials + "img/content_responsive.png"} />
				<h2>I'm <span>responsive</span>!</h2>
				<h3>I'm <span>organized</span>!</h3>
				<br />
				<h2><span>SEO</span> pro.</h2>
				<h3><span>CMS</span> expert.</h3>
				<h4 className="show-for-xxlarge">Great taste in t-shirts --{">"}</h4>
			</aside>
			<div id="aronHomeBig" className="col-sm-16 d-none d-xl-block noPrint">
				<img src={Assets.myPath + "img/home_aron-horrible-pose.png"} alt="Web Developer Aron Patterson Posing Awkwardly" />
			</div>
		</div>;
	}
}

export default Home;

