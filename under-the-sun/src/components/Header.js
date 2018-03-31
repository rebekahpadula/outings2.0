import React from 'react';
import styled from 'styled-components';

import SrOnlyHeading from './SrOnlyHeading';
import Container from './Container';

import MenuIcon from '../assets/icon-menu.svg';

const Header = styled.section`
    display: flex;
    padding: 20px;
    background-color: #1793c7;
    /* background-color: #ff9832; // orange!! */
`;

const Nav = styled.nav`
    flex: 0 1 auto;
    position: absolute;
    right: 0;
    padding: 0 20px;
    top: 65px;
    background-color: rgba(23, 147, 199, 0.9);
    /* background-color: rgba(255,152,50, 0.9); */


    @media screen and (min-width: 700px) {
        right: 20px;
        padding: 0;
    }
`;

const NavToggleLink = styled.a`
    float: right;
    text-decoration: none;

    @media screen and (min-width: 700px) {
        display: none;
    }
`;

const NavList = styled.ul`
    list-style: none;
    display: none;
    padding: 0;

    &[data-expand-content="true"] {
        margin-top: 90px;
        display: block;
        height: 200vh;
        text-align: center;
        width: 100vw;
    }

    @media screen and (min-width: 700px) {
        display: block;
        margin-top: 16px !important;
        height: 0 !important;
        width: 100% !important;
    }
`;

const NavItem = styled.li`
    margin-bottom: 30px;
    font-size: 24px;

    @media screen and (min-width: 700px) {
        font-size: 18px;
        display: inline-block;
        margin-bottom: 0;
        &{NavItem} {
            margin-left: 20px;
        }
    }
`;

const NavLink = styled.a`
    text-decoration: none;
    color: #fff;
    padding: 10px;
    transition: color 0.2s;

    &:hover {
        color: #ff9832;
    }
`;

const ToggleIcon = styled.img`
    height: 50px;
    max-height: 50px;
    max-width: 50px;
    vertical-align: middle;
`;

const Logo = styled.h1`
    font-family: megrim;
    margin: 0;
    font-size: 30px;
    color: #fff;
`;
const LogoLink = styled.a`
    flex: 1 1 0;
    cursor: pointer;
    text-decoration: none;
`;

export default (props) => {
    return (
        <Header>
            <LogoLink className="heading" href="#home"><Logo>Under the Sun</Logo></LogoLink>
            <Nav>
                <SrOnlyHeading>Primary Navigation</SrOnlyHeading>
                <NavToggleLink href="#" id="toggleLink" aria-label="primary navigation icon" onClick={props.toggleNavigation}>
                    <ToggleIcon src={MenuIcon} id="toggleIcon"/>
                </NavToggleLink>
                <NavList className="nav-list" data-expand-content="false">
                    <NavItem><NavLink className="primary-nav__link" href="#short-bio" data-link-active="false">About</NavLink></NavItem>
                    <NavItem><NavLink className="primary-nav__link" href="#shows" data-link-active="false">Shows</NavLink></NavItem>
                    <NavItem><NavLink className="primary-nav__link" href="#media" data-link-active="false">Media</NavLink></NavItem>
                    <NavItem><NavLink  className="primary-nav__link" href="#contact" data-link-active="false">Contact</NavLink></NavItem>
                </NavList>
            </Nav>
        </Header>
    )
}