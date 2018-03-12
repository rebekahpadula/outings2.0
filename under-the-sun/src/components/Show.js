import React from 'react';
import styled from 'styled-components';

const ShowsItem = styled.li``;
const ShowsDate = styled.span``;
const ShowsEvent = styled.span``;
// should these be tables for when you expand out to desktop??? yes probably

export default (props) => {
    return (
        <ShowsItem>
            <ShowsDate><strong>Thu, Mar 15</strong> @ 7:00PM</ShowsDate>
            <ShowsEvent>Castaway's</ShowsEvent>
        </ShowsItem>
    )
}