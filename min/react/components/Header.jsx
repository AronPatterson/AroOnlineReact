import React from 'react';
import Assets from './Assets.jsx';
import Navigation from './templates/Navigation.jsx';

function stringFunction(obj) { // global object for debuggin'
	return JSON.stringify(obj, null, 4);
}
class Header extends React.Component {
	render() {
		return (
			<div>
				<header id="navContainer" className="container">
					<div className="row">
						<section className="col-8 col-lg-4 text-center logoArea">
							<a href="/" rel="home"><h1><img src={ Assets.myPath + "/img/bnr_aron-mn.svg"} alt="AroOnline - Aron Patterson's Web Developer Portfolio, Minnesota" /></h1></a>
						</section>
						<a className="sr-only" href="#mainContent" tabIndex="-1">Skip to main content</a>
						<div className="col-16 col-lg-12 align-self-end">
							<nav className="navbar">
								<button className="navbar-toggler" type="button" aria-label="Toggle navigation">
									<span className="navbar-toggler-icon"></span>
								</button>
								<div className="collapse navbar-collapse" id="navbarToggler">
									<ul id="mainNav" className="navbar-nav ml-auto">
										<Navigation />
									</ul>
								</div>
							</nav>
						</div>
					</div>
				</header>
			</div>
		);
	}
}

export default Header;