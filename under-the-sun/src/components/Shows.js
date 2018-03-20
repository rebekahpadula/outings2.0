import React from 'react';
import styled from 'styled-components';

// building it out here by hand first because this site really needs to get done!!!

const Shows = styled.section`
    padding: 20px;
`;
const ShowsHeading = styled.h1``;
const ShowsTable = styled.table`
    border-collapse: collapse;
    border-spacing: 0;
`;
const ShowsTableBody = styled.tbody``;
const ShowsRow = styled.tr`

    &:nth-child(odd) {
        background: linear-gradient(to right, rgba(255,224,193,1) 40%, rgba(246,246,246,1) 99%, rgba(255,255,255,1) 100%);
    }

    /* &:nth-child(even) { */
        /* background: linear-gradient(to right, rgba(255,229,223,1) 0%, rgba(246,246,246,1) 99.9%, rgba(255,255,255,1) 100%); */
    /* } */
`;

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
        <Shows id="shows">
            <ShowsHeading>Shows</ShowsHeading>
            <ShowsTable>
                <ShowsTableBody>
                    <ShowsRow>
                        <ShowsTableHeading>Date</ShowsTableHeading>
                        <ShowsTableHeading>Event</ShowsTableHeading>
                    </ShowsRow>
                    <ShowsRow>
                        <ShowsData>
                            <ShowsDate><strong>Sat, Mar 10</strong> @ 9:00PM</ShowsDate></ShowsData><ShowsData><ShowsEvent>Castaway's</ShowsEvent><ShowsLocation>Georgetown, SC</ShowsLocation></ShowsData>
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
                </ShowsTableBody>
            </ShowsTable>
        </Shows>
    )
}