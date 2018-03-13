import React from 'react';
import styled from 'styled-components';

const ShowsItem = styled.li``;
const ShowsDate = styled.span``;
const ShowsEvent = styled.span``;
const ShowsLocation = styled.span``;
// should these be tables for when you expand out to desktop??? yes probably

// and eventually all of these data in these shows will come from facebook. Maybe.
// otherwise you'll have to build out all the shows by hand in Shows.js
// but still not a bad option for time since I can always come back and impprove
// because this project already uses react.
export default (props) => {
    return (
        <ShowsItem>
            <ShowsDate><strong>Thu, Mar 15</strong> @ 7:00PM</ShowsDate>
            <ShowsEvent>Castaway's</ShowsEvent>
            <ShowsLocation>Georgetown, SC</ShowsLocation>
        </ShowsItem>
    )
}