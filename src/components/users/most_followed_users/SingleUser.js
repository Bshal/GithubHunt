import React,{useEffect,useState} from 'react';
import axios from 'axios';
import Spinner from './../../layouts/Spinner';
import RepositoryCard from '../../repos/RepositoryCard';

let githubClientId;
let githubClientSecret;

if(process.env.NODE_ENV !== 'production'){
	githubClientId = process.env.REACT_APP_GITHUB_CLIEND_ID;
	githubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
}else{
	githubClientId = process.env.GITHUB_CLIEND_ID;
	githubClientSecret = process.env.GITHUB_CLIENT_SECRET;
}

const SingleUser = ({match}) => {
	const [user_data,set_user_data] = useState({});
	const [repos,set_repos] = useState([]);
	const [user_response_loading,set_user_loading] = useState(false);
	const [repos_response_loading,set_repos_loading] = useState(false);

	//fetch login from url
	const login = match.params.login;

	useEffect(() => {
		set_user_loading(true);
		set_repos_loading(true);
		const fetchData = async () =>{
			const user_response = await axios.get(`https://api.github.com/users/${login}?client_id=${githubClientId}&client_secret=${githubClientSecret}`);
			const repos_response = await axios.get(`https://api.github.com/users/${login}/repos?client_id=${githubClientId}&client_secret=${githubClientSecret}`);
			(user_response.data) && set_user_loading(false);
			(repos_response.data) && set_repos_loading(false);
			set_user_data(user_response.data);	
			set_repos(repos_response.data);	
		}

		fetchData();
		//eslint-disable-next-line
	},[])
	const {avatar_url,name,bio,followers,following,public_repos,html_url} = user_data
	return(
		<React.Fragment>
			<div className="user">
				{user_response_loading && <Spinner />}
				{!(user_response_loading) && 
					<React.Fragment>
						<div className="user_img">
							<img src={avatar_url} alt="github user gravatar" />
						</div>
						<ul className="user_info">
							<li className="user_info-name"><span className="profile_text">Name: </span>{name}</li>
							{bio && <li className="user_info-bio"><span className="profile_text">Bio: </span>{bio}</li>}
							<div className="user_info-container">
								<li className="user_info-followers">followers: {followers}</li>
								<li className="user_info-following">following: {following}</li>
								<li className="user_info-repos">Public Repositories: {public_repos}</li>
							</div>
							<a href={html_url} target="_blank" rel="nofollow noopener" className="button button_dark">Visit Github Profile</a>
						</ul>
					</React.Fragment>
				}
			</div>
			<div className="user">
				{repos_response_loading && <Spinner />}
				{!(repos_response_loading) &&
					<React.Fragment> 
						<ul className="main_cards-block" style={{paddingTop:'0px',width:'100%'}}>
						<h2 style={{textAlign:'center',marginBottom:'10px'}}><span className="profile_text">Repositories </span></h2>
							{repos.map(repo => <RepositoryCard key={repo.id} repo={repo} />)}
						</ul>
					</React.Fragment>
				}
			</div>
		</React.Fragment>
	)

}

export default SingleUser;