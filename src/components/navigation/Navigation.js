import React from 'react';
import ResponsiveMenu from 'react-responsive-navbar';
import styled from 'styled-components';
import {Link} from 'react-router-dom'
import { FaBars, FaWindowClose } from 'react-icons/fa';

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

const ContentBox = styled.div`
  background-color: white;
  border: 2px solid MediumPurple;
  width: 60%;
  font-size: 15px;
  padding: 20px;
  margin: 20px;
  float: ${props => props.float};

  @media (max-width: 500px) {
    float: none;
    margin: 20px auto;
  }
`;

const Navigation =() => {
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
              </ul>
            </Menu>
          }
        />
        <ContentBox float="left">
          My Gym Application
        </ContentBox>
        <ContentBox float="right">
          An interesting software Application
        </ContentBox>
      </div>
    );
  }
export default Navigation;