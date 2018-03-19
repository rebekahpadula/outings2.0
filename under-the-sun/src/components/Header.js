import React from 'react';
import styled from 'styled-components';

import SrOnlyHeading from './SrOnlyHeading';
import Container from './Container';

import MenuIcon from '../assets/icon-menu.svg';

const Header = styled.section`
    display: flex;
    padding: 20px;
    background-color: #1793c7;
`;

const Nav = styled.nav`
    flex: 0 1 auto;
    position: absolute;
    right: 0;
    padding: 0 20px;
    top: 65px;
    background-color: #1793c7;

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
        /* background-color: whatever color your header is */
        text-align: center;
    }

    @media screen and (min-width: 700px) {
        display: block;
        margin-top: 20px !important;
    }
`;

const NavItem = styled.li`
    margin-bottom: 10px;
    font-size: 18px;

    @media screen and (min-width: 700px) {
        display: inline-block;
        margin-bottom: 0;
        &{NavItem} {
            margin-left: 20px;
        }
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
`;
const LogoLink = styled.a`
    flex: 1 1 0;
    cursor: pointer;
`;

export default (props) => {
    return (
        <Header>
            <LogoLink><Logo>Under the Sun</Logo></LogoLink>
            <Nav>
                <SrOnlyHeading>Primary Navigation</SrOnlyHeading>
                <NavToggleLink href="#" id="toggleLink" aria-label="primary navigation icon" onClick={props.toggleNavigation}>
                    <ToggleIcon src={MenuIcon} id="toggleIcon"/>
                </NavToggleLink>
                <NavList data-expand-content="false">
                    <NavItem>About</NavItem>
                    <NavItem>Shows</NavItem>
                    <NavItem>Media</NavItem>
                    <NavItem>Contact</NavItem>
                </NavList>
            </Nav>
        </Header>
    )
}