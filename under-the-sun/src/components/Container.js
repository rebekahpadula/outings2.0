// a component for styling, that goes inside whatever the main component is, so for instance 
// the Header component, would be Header, and you would apply background colors to Header itslef, and then INSIDE
// Header, Container would be the first component that constricts the width and contains all other components.

import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    max-width: 1200px;
    /* padding: 0 20px; */
`;

export default (props) => {
    return (
        <Container></Container>
    )
}