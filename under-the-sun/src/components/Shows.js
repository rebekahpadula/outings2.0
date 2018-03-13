import React from 'react';
import styled from 'styled-components';

// building it out here by hand first because this site really needs to get done!!!

const Shows = styled.section``;
const ShowsHeading = styled.h1``;
const ShowsTable = styled.table``;
const ShowsRow = styled.tr``;

const ShowsTableHeading = styled.th`
    @media screen and (max-width: 699px) {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0,0,0,0);
        border: 0;
    }
    font-weight: normal;
    text-align: left;
    padding-bottom: 10px;
`;

const ShowsData = styled.td`
    display: block;
    padding-right: 100px;
    padding-bottom: 10px;

    /* &:after {
        content: '';
        width: 100%;
        display: block;
        border: 1px solid red;
    } */

    @media screen and (min-width: 700px) {
        display: table-cell;
    }
`;

const ShowsDate = styled.span``;

const ShowsEvent = styled.span`
    display: block;
    margin-bottom: 5px;

    @media screen and (min-width: 700px) {
        margin-bottom: 0;
    }
`;

const ShowsLocation = styled.span`
    color: #666;
`;

export default (props) => {
    return (
        <Shows>
            <ShowsHeading>Upcoming Shows</ShowsHeading>
            <ShowsTable>
                <ShowsRow>
                    <ShowsTableHeading>Date</ShowsTableHeading>
                    <ShowsTableHeading>Event</ShowsTableHeading>
                </ShowsRow>
                <ShowsRow>
                    <ShowsData>
                        <ShowsDate><strong>Sat, Mar 10</strong> @ 9:00PM</ShowsDate>
                    </ShowsData>
                    <ShowsData>
                        <ShowsEvent>Castaway's</ShowsEvent>
                        <ShowsLocation>Georgetown, SC</ShowsLocation>
                    </ShowsData>
                </ShowsRow>
                <ShowsRow>
                    <ShowsData>
                        <ShowsDate><strong>Sat, Mar 17</strong> @ 9:00PM</ShowsDate>
                    </ShowsData>
                    <ShowsData>
                        <ShowsEvent>Wind Wing Cafe</ShowsEvent>
                        <ShowsLocation>Harbison, SC</ShowsLocation>
                    </ShowsData>
                </ShowsRow>
                <ShowsRow>
                    <ShowsData>
                        <ShowsDate><strong>Sat, Mar 24</strong> @ 9:00PM</ShowsDate>
                    </ShowsData>
                    <ShowsData>
                        <ShowsEvent>Wild Wing Cafe</ShowsEvent>
                        <ShowsLocation>North Charleston, SC</ShowsLocation>
                    </ShowsData>
                </ShowsRow>
                <ShowsRow>
                    <ShowsData>
                        <ShowsDate><strong>Fri, Apr 6</strong> @ 9:00PM</ShowsDate>
                    </ShowsData>
                    <ShowsData>
                        <ShowsEvent>Wild Wing Cafe</ShowsEvent>
                        <ShowsLocation>Columbia, SC (The Vista)</ShowsLocation>
                    </ShowsData>
                </ShowsRow>
                <ShowsRow>
                    <ShowsData>
                        <ShowsDate><strong>Sat, Apr 7</strong> @ 9:00PM</ShowsDate>
                    </ShowsData>
                    <ShowsData>
                        <ShowsEvent>Hwy 378 Bar and Grill</ShowsEvent>
                        <ShowsLocation>Gilbert, SC</ShowsLocation>
                    </ShowsData>
                </ShowsRow>
            </ShowsTable>
        </Shows>
    )
}