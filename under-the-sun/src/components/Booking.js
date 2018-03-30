import React from 'react';
import styled, {keyframes} from 'styled-components';

import SrOnlyHeading from './SrOnlyHeading';

import envelopeIcon from '../assets/icon-envelope.svg';

const Booking = styled.section`
    padding: 20px;
    text-align: center;
`;

const BookingHeading = styled.h1``;

const BookingLink = styled.a``;

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
    border: 2px solid #28d1ce;
    width: 100px;
    padding: 10px;
    font-size: 18px;
    text-decoration: none;
    color: #111;
    display: inline-block;
    vertical-align: middle;

    &:hover {
        background-color: #28d1ce;
        color: #fff;
        transition: all .25s ease;
    }
`;

export default (props) => {
    return (
        <Booking id="contact">
            <SrOnlyHeading>Book us for your next event!</SrOnlyHeading>
            <BookingButton href="mailto:bandunderthesunsc@gmail.com">Book Us</BookingButton>
            {/* <BookingLink href="mailto:bandunderthesunsc@gmail.com"><BookingIcon src={envelopeIcon}/></BookingLink> */}
        </Booking>
    )
}