import React from 'react';
import styled from 'styled-components';

import bandPhoto from '../assets/band-photo-3.jpg';

const HeroImage = styled.img`
    height: auto;
    width: 100%;
`;

export default (props) => {
    return (
        <HeroImage src={bandPhoto}/>
    )
}