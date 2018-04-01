import React from 'react';
import styled from 'styled-components';

const Video = styled.section`
    padding: 20px;
    text-align: center;
`;

const Iframe = styled.iframe`
    border: 0;
    width: 512px;
    height: 288px;

    @media screen and (min-width: 700px) {

    }

    @media screen and (min-width: 700px) {
        width: 640px;
        height: 365px;
    }
`;

export default (props) => {
    return (
        <Video id="media">
            <Iframe src="https://www.youtube.com/embed/a-oZ-N99Wls" allow="encrypted-media" allowfullscreen></Iframe>
        </Video>
    )
}