import React, {Fragment} from 'react';
import Showcase from '../layouts/Showcase';
import MostFollowedUsers from '../users/most_followed_users/MostFollowedUsers';
import MostStarredRepositories from '../repos/MostStarredRepositories';
import Users from '../users/search_users/Users';

const Home = ({search}) =>{

	return(
		<Fragment>
			<Showcase />
			{search && <Users/>}
			<MostFollowedUsers />
			<MostStarredRepositories />
		</Fragment>
	)

}

export default Home;