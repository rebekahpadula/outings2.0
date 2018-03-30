import React from 'react';
import styled from 'styled-components';

import Container from './Container';

const ShortBio = styled.section`
    padding: 20px;
`;

const ShortBioHeading = styled.h1``;

const ShortBioContent = styled.p``;

export default (props) => {
    return (
        <ShortBio id="short-bio">
            {/* <Container> */}
                <ShortBioHeading>Bio</ShortBioHeading>
                <ShortBioContent>Under The Sun is a cover band from Columbia, South Carolina. As their name rightly suggests, Under The Sun plays a variety of genres. Whether you like country, classic rock, 90’s rock, or pop, this band has something for you. Like they always say, “if you don’t like something you hear, just stick around”. The band is comprised of members Liz Johnson (vocals), Ryan Johnson (drums), Andy Johnson (sound and lights), Russ McKissick (guitar), Alex Roberts (bass and vocals), and Addie Padula (keyboard and vocals).</ShortBioContent>
            {/* </Container> */}
        </ShortBio>
    )
}