import React from 'react';
import styled, {keyframes} from 'styled-components';

import SrOnlyHeading from './SrOnlyHeading';

import envelopeIcon from '../assets/icon-envelope.svg';

const BookingHeading = styled.h1``;

const BounceAnimation = keyframes`
    0% {transform: translateY(0);}
    20% {transform: translateY(-3px);}
    40% {transform: translateY(-6px);}
    60% {transform: translateY(-9px);}
    80% {transform: translateY(-6px);}
    90% {transform: translateY(-3px);}
    100% {transform: translateY(0);}
`;

const BookingIcon = styled.img`
    height: 60px;

    &:hover {
        animation-name: ${BounceAnimation};
        animation-duration: 850ms;
        animation-timing-function: ease-in-out;
        animation-iteration-count: infinite;
    }
`;

const BookingButton = styled.a`
    text-align: center;
    margin: 0 auto;
    border: 2px solid #ff9832;
    width: 150px;
    padding: 10px;
    font-size: 18px;
    text-decoration: none;
    color: #111;
    display: block;

    &:hover {
        background-color: #ff9832;
        color: #fff;
        transition: all .25s ease;
    }
`;

export default (props) => {
    return (
        <BookingButton href="mailto:bandunderthesunsc@gmail.com" id="booking">Book Us</BookingButton>
    )
}