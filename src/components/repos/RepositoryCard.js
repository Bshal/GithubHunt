import React from 'react';

const RepositoryCard = ({repo: {full_name,created_at,language,description,html_url,watchers}}) =>{

	return(
		<li className="main_card" style={{marginBottom:'10px',paddingLeft:'10px'}}>
			
			<div className="main_card-content">
				<h2 className="main_card-title">Repository Name:{'  '}<span className="color_secondary text_light">{full_name}</span></h2>
				<h2 className="main_card-title">Description:{'  '}<span className="color_secondary text_light">{description}</span></h2>
				<div className="badge_container">
					<span className="badge badge_dark">created at: {created_at.slice(0,10)}</span>
					{language && <span className="badge badge_blue">language: {language}</span> }
					<span className="badge badge_green">watch: {watchers}</span>
				</div>
				<a href={html_url} target="_blank" rel="nofollow noopener" className="button button_light" style={{
					marginTop:'10px'
				}}>visit github profile</a>
			</div>
		</li>
	)
}

export default RepositoryCard;