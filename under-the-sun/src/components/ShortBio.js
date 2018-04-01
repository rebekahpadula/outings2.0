import React from 'react';
import styled from 'styled-components';

import bandPhoto from '../assets/band-photo.jpg';

const ShortBio = styled.section`
    padding: 40px 20px;
    /* padding-top: 40px; */
    background-color: #f9f3e9;
    /* color: #fff; */

    @media screen and (min-width: 768px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 20px;
        align-items: center;
    }
`;

const ShortBioHeading = styled.h1`
    font-size: 30px;
    margin-top: 0;
    font-family: megrim;
`;

const ShortBioContent = styled.div`
    margin-bottom: 60px;
    flex-basis: 50%;

    @media screen and (min-width: 768px) {
        margin-bottom: 0;
    }
`;

const ShortBioPara = styled.p``;

const ShortBioImage = styled.img`
    width: 100%;
    display: block;

    @media screen and (min-width: 768px) {
    }
`;

export default (props) => {
    return (
        <ShortBio id="short-bio">
            <ShortBioContent>
                <ShortBioHeading>Bio</ShortBioHeading>
                <ShortBioPara>
                    Under The Sun is a cover band from Columbia, South Carolina. As their name rightly suggests, Under The Sun plays a variety of genres such as country, classic rock, 90’s rock, and pop. Like they always say, “if you don’t like something you hear, just stick around”.
                </ShortBioPara>
            </ShortBioContent>
            <ShortBioImage src={bandPhoto} alt="Under the Sun playing live at such and such place"/>
        </ShortBio>
    )
}