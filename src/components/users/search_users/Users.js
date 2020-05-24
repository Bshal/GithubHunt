import React,{useEffect,useState} from 'react';
import axios from 'axios';
import User from './User';
import Spinner from '../../layouts/Spinner';

let githubClientId;
let githubClientSecret;

if(process.env.NODE_ENV !== 'production'){
	githubClientId = process.env.REACT_APP_GITHUB_CLIEND_ID;
	githubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
}else{
	githubClientId = process.env.GITHUB_CLIEND_ID;
	githubClientSecret = process.env.GITHUB_CLIENT_SECRET;
}

const Users = ({user}) => {
	const [users_data,set_users_data] = useState([]);
	const [loading,set_loading] = useState(false);

	useEffect(() =>{
		set_loading(true);

		const fetchData = async () =>{
			const response = await axios.get(`https://api.github.com/search/users?q=${user}&client_id=${githubClientId}&client_secret=${githubClientSecret}`)
			set_users_data(response.data.items);
			(response.data.items && set_loading(false))
		}

		fetchData();

		//eslint-disable-next-line
	},[]);

	return (
		<div className="main">
			<div className="main_container">
				<h1 className="heading_sub underline">
					Search Results:
				</h1>
				{loading && <Spinner />}
				<ul className="main_cards">
					{users_data.map(user => <User key={user.id} user={user} />)}
				</ul>
			</div>
		</div>
	)

}

export default Users;