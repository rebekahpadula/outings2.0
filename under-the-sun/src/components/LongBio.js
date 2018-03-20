import React from 'react';
import styled from 'styled-components';

const LongBio = styled.section`
    padding: 20px;
`;

const LongBioHeading = styled.h1``;

const LongBioContent = styled.p``;

export default (props) => {
    return (
        <LongBio id="long-bio">
            <LongBioHeading>Bio</LongBioHeading>
            <LongBioContent>This is our long bio. The long bio will not be on the home page of the website, it will be only on the "About" or "Bio" page because no one wants to see this wall of text on the homepage much less read it. The "short bio" will be the only bio on the home page. The long bio is where we can talk about the history of the band if we want or could do individual band member profiles (that would be a different layout but would still only be on the "About" or "Bio" page so I'm letting this component handle that idea for now.</LongBioContent>
            <LongBioContent>This is our long bio. The long bio will not be on the home page of the website, it will be only on the "About" or "Bio" page. The "short bio" will be the only bio on the home page. The long bio is where we can talk about the history of the band if we want or could do individual band member profiles (that would be a different layout but would still only be on the "About" or "Bio" page so I'm letting this component handle that idea for now. This is our long bio. The long bio will not be on the home page of the website, it will be only on the "About" or "Bio" page. The "short bio" will be the only bio on the home page. The long bio is where we can talk about the history of the band if we want or could do individual band member profiles (that would be a different layout but would still only be on the "About" or "Bio" page so I'm letting this component handle that idea for now.</LongBioContent>
        </LongBio>
    )
}