import React from 'react';
import styled from 'styled-components';

const Video = styled.section`
    padding: 60px 20px;
    text-align: center;
    background-color: #f9f3e9;
`;

const Iframe = styled.iframe`
    border: 0;
    width: 352px;
    height: 198px;

    @media screen and (min-width: 500px) {
        width: 432px;
        height: 243px;
    }

    @media screen and (min-width: 600px) {
        width: 560px;
        height: 315px;
    }

    @media screen and (min-width: 700px) {
        width: 640px;
        height: 365px;
    }

    @media screen and (min-width: 800px) {
        width: 752px;
        height: 423px;
    }
`;

export default (props) => {
    return (
        <Video id="media">
            <Iframe src="https://www.youtube.com/embed/a-oZ-N99Wls" allow="encrypted-media" allowfullscreen></Iframe>
        </Video>
    )
}