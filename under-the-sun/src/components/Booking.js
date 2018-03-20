import React from 'react';
import styled, {keyframes} from 'styled-components';

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


export default (props) => {
    return (
        <Booking id="booking">
            <BookingHeading>Book us for your next event!</BookingHeading>
            <BookingLink href="mailto:bandunderthesunsc@gmail.com"><BookingIcon src={envelopeIcon}/></BookingLink>
        </Booking>
    )
}