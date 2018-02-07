import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch, Link } from 'react-router-dom';
import Navigation from './templates/Navigation.jsx';


class Footer extends React.Component {   
	render() {
		return (
			<div>
				<footer id="siteFooter">
					<div className="container-fluid">
						<div className="row text-center footNav noPrint" role="navigation">
							<ul className="col">
								<Navigation />
							</ul>
							<section id="socialMedia" className="col-16 noPrint">
								<ul>
									<li className="liLogo">
										<a href="http://linkedin.com/in/aronpatterson" target="_blank">
											<span className="fa fa-linkedin fa-2x"></span>
										</a>
									</li>
									<li className="gitLogo">
										<a href="https://github.com/AronPatterson" target="_blank">
											<span className="fa fa-git-square fa-2x"></span>
										</a>
									</li>
									<li className="conLogo">
										<Router><div><Link to="/contact">
											<span className="fa fa-envelope fa-2x"></span></Link>
										</div></Router>
									</li>
								</ul>
							</section>
							<section className="col">
								<p>Copyright {"\u00A9" + new Date().getFullYear()} Aron Patterson<br />
								AroOnline Web Design {"&"} Development</p>
							</section>
						</div>
					</div>
				</footer>
			</div>
		);
	}
}

export default Footer;