import React,{useState} from 'react';
import Users from '../users/search_users/Users';

const Showcase = () => {
	const [input,set_input] = useState('');
	const [search,set_search] = useState(false);
	const [style,set_style] = useState('');

	const onChange = e => set_input(e.target.value);
	const onSubmit = e =>{
		if(input !== ''){
			e.preventDefault();
			set_search(true);
		}else{
			e.preventDefault();
			set_style('error');
		}
	}
	const clear = e =>{
		e.preventDefault();
		set_search(false);
		set_input('');
	}
	return(
		<React.Fragment>
			<div className="showcase">
				<div className="showcase_container">
					<h2 className="showcase_heading">For Github Users</h2>
					<p className="showcase_para">GithubHunt provides github users, a simple way to access most starred repositories, most followed user, search for any user, and many more functionality.</p>

					<form onSubmit={onSubmit} className="form">
						<input type="text" name="text" placeholder="Search User.." className={`form_input ${style}`} onChange={onChange} value={input} />
						<input type="submit" value="Search" className="button button_primary form_button" />
						{search && <button className="button button_dark form_button" onClick={clear} style={{marginLeft:'5px',background:'rgb(220,53,69)'}}>Clear</button> }
					</form>
				</div>
			</div>

			{search && <Users user={input} />}
		</React.Fragment>
	)

}

export default Showcase;