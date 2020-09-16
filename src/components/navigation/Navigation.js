import React from 'react';
import ResponsiveMenu from 'react-responsive-navbar';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaBars, FaWindowClose } from 'react-icons/fa';
import { useLogin} from '../user/login/LoginContext';

const Menu = styled.div`
	border-bottom: 2px solid MediumPurple;

	ul {
		padding: 0;
	}

	li {
		display: inline;
		font-size: 13px;
		list-style-type: none;
		margin-left: 30px;
	}

	a {
		text-decoration: none;
		text-transform: uppercase;
		font-size: 20px;
		color: MediumPurple;

		&:hover {
			color: purple;
		}
	}

	@media (max-width: 500px) {
		padding: 10px 0;
		li {
			padding: 10px 0;
			display: block;
			margin-left: 0;
		}
	}
`;

const Navigation = () => {
	const  {isAuthenticated}  = useLogin()
	return (
		<div>
			<ResponsiveMenu
				menuOpenButton={<FaBars size={30} color="MediumPurple" />}
				menuCloseButton={<FaWindowClose size={30} color="MediumPurple" />}
				changeMenuOn="500px"
				largeMenuClassName="large-menu"
				smallMenuClassName="small-menu"
				menu={
					<Menu>
						<ul>
							<Link to="/home" style={{ textDecoration: 'none' }}>
								<li>Home</li>
							</Link>
							<Link to="/home" style={{ textDecoration: 'none' }}>
								<li>About</li>
							</Link>
							<Link to="/home" style={{ textDecoration: 'none' }}>
								<li>Contact</li>
							</Link>
              {isAuthenticated ? (
                <Link to="/logout" style={{ textDecoration: 'none' }}>
								<li>Log Out</li>
							</Link>
              ) : (
                <>
                <Link to="/login" style={{ textDecoration: 'none' }}>
								<li>Log In</li>
							</Link>
              <Link to="/registration" style={{ textDecoration: 'none' }}>
								<li>Sign Up</li>
							</Link>
              </>
              )}
						</ul>
					</Menu>
				}
			/>
			
		</div>
	);
};
export default Navigation;
