import React, {useEffect,useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Spinner from './../../layouts/Spinner';
import MostFollowedUser from './MostFollowedUser';

let githubClientId;
let githubClientSecret;

if(process.env.NODE_ENV !== 'production'){
	githubClientId = process.env.REACT_APP_GITHUB_CLIEND_ID;
	githubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
}else{
	githubClientId = process.env.GITHUB_CLIEND_ID;
	githubClientSecret = process.env.GITHUB_CLIENT_SECRET;
}

const MostFollowedUsers = () =>{
	const [most_followed_users,set_most_followed_users] = useState([]);
	const [loading,set_loading] = useState(false);

	useEffect(() => {
		set_loading(true);
		const fetchData = async () => {
			const response = await axios.get(`https://api.github.com/search/users?q=followers:>=1000&per_page=9&client_id=${githubClientId}&client_secret=${githubClientSecret}`);
			(response.data.items) && set_loading(false);
			set_most_followed_users(response.data.items);
		}
		
		fetchData();
		//eslint-disable-next-line
	},[]);

	return(
		<div className="main">
			<div className="main_container">
				<h1 className="heading_sub underline">
					Most Followed Users on Github:
				</h1>
				{loading && <Spinner />}
				<ul className="main_cards">
					{most_followed_users.map(user => <MostFollowedUser key={user.id} user={user} />)}
				</ul>
				<Link to="/users/most-followed-users" className="button button_border-primary" style={{
					width:'100px',
					margin:'auto',
					display:'block'
				}}>more{' '}</Link>
			</div>
		</div>
	)

}

export default MostFollowedUsers;