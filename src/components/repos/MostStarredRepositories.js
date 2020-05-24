import React,{useEffect,useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Spinner from '../layouts/Spinner';
import MostStarredRepository from './MostStarredRepository';

let githubClientId;
let githubClientSecret;

if(process.env.NODE_ENV !== 'production'){
	githubClientId = process.env.REACT_APP_GITHUB_CLIEND_ID;
	githubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
}else{
	githubClientId = process.env.GITHUB_CLIEND_ID;
	githubClientSecret = process.env.GITHUB_CLIENT_SECRET;
}

const MostStarredRepositories = () =>{
	const [most_starred_repositories,set_most_starred_repositories] = useState([]);
	const [loading,set_loading] = useState(false);

	useEffect(() => {
		set_loading(true);
		const fetchData = async () => {
			const response = await axios.get(`https://api.github.com/search/repositories?q=stars:>=500&per_page=10&client_id=${githubClientId}&client_secret=${githubClientSecret}`);
			(response.data.items) && set_loading(false);
			set_most_starred_repositories(response.data.items);
		}

		fetchData();
		//eslint-disable-next-line

	},[])

	const repos = 'most-starred-repositories';
	return(

		<div className="main">
			<div className="main_container">
				<h1 className="heading_sub underline  repos_heading">
					Most Starred Repositories on Github:
				</h1>
				{loading && <Spinner />}
				<ul className="main_cards-block">
					{most_starred_repositories.map(repo => <MostStarredRepository key={repo.id} repo={repo} />)}
				</ul>
				<Link to={`repos/${repos}`} className="button button_border-primary" style={{
					width:'100px',
					margin:'auto',
					display:'block'
				}}>more{' '}</Link>
			</div>
		</div>
	)

}

export default MostStarredRepositories;