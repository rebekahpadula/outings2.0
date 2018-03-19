import React from 'react';
import styled from 'styled-components';

const Video = styled.section`
    padding: 20px;
    text-align: center;
`;

const Iframe = styled.iframe`
    border: 0;
    width: 352px;
    height: 198px;

    @media screen and (min-width: 700px) {
        width: 512px;
        height: 288px;
    }

    @media screen and (min-width: 1000px) {
        width: 560px;
        height: 315px;
    }
`;

export default (props) => {
    return (
        <Video>
            <Iframe src="https://www.youtube.com/embed/a-oZ-N99Wls" allow="encrypted-media" allowfullscreen></Iframe>
        </Video>
    )
}