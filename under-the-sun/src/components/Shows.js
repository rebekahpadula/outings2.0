import React from 'react';
import styled from 'styled-components';

import bandPhoto from '../assets/band-photo-2.jpg';

// building it out here by hand first because this site really needs to get done!!!

const Shows = styled.section`
    padding: 20px;
`;

const ShowsHeading = styled.h1`
    font-family: megrim;
    font-size: 30px;
`;
const ShowsTable = styled.table`
    border-collapse: collapse;
    border-spacing: 0;

    @media screen and (min-width: 700px) {
        /* margin: 0 auto; */
    }
`;
const ShowsTableBody = styled.tbody``;
const ShowsRow = styled.tr`
     &:not(:first-child) {
        border-bottom: 1px solid #ff7e5f;

        &:hover {
            background-color: #ffe5df;
            background-color: #f9f3e9;
        }
    }
    
    &:first-of-type {
        background-color: #ff7e5f;
        font-weight: bold !important;
        color: #fff;
    }
`;

const ShowsTableHeading = styled.th`
    text-align: left;
    padding: 10px 0 10px 5px;

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
`;

const ShowsLink = styled.a`
    text-decoration: none;
    color: #111;
`;

const ShowsData = styled.td`
    display: block;
    padding-right: 100px;
    padding-bottom: 10px;
    padding-left: 5px;

    &:nth-child(odd) {
        padding-top: 10px;
    }
     
    @media screen and (min-width: 700px) {
        display: table-cell;
        padding: 10px 100px 10px 5px;
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

const ShowsImage = styled.img`
    display: block;
    width: 100%;
`;

export default (props) => {
    return (
        <Shows id="shows">
            <ShowsTable>
            <ShowsHeading>Shows</ShowsHeading>
                <ShowsTableBody>
                    <ShowsRow>
                        <ShowsTableHeading>Date</ShowsTableHeading>
                        <ShowsTableHeading>Event</ShowsTableHeading>
                    </ShowsRow>
                    <ShowsRow>
                        <ShowsData>
                            <ShowsLink href="https://www.facebook.com/events/404470693344975/">
                            <ShowsDate><strong>Sat, Mar 10</strong> @ 9:00PM</ShowsDate>
                            </ShowsLink>
                        </ShowsData>
                        <ShowsData>
                            <ShowsLink href="https://www.facebook.com/events/404470693344975/">
                            <ShowsEvent>Castaway's</ShowsEvent><ShowsLocation>Georgetown, SC</ShowsLocation>
                            </ShowsLink>
                        </ShowsData>
                    </ShowsRow>
                    <ShowsRow>
                        <ShowsData>
                            <ShowsLink href="https://www.facebook.com/events/178876016213976/">
                            <ShowsDate><strong>Sat, Mar 17</strong> @ 9:00PM</ShowsDate>
                            </ShowsLink>
                        </ShowsData>
                        <ShowsData>
                            <ShowsLink href="https://www.facebook.com/events/178876016213976/">
                            <ShowsEvent>Wind Wing Cafe</ShowsEvent>
                            <ShowsLocation>Harbison, SC</ShowsLocation>
                            </ShowsLink>
                        </ShowsData>
                    </ShowsRow>
                    <ShowsRow>
                        <ShowsData>
                            <ShowsLink href="https://www.facebook.com/events/140089596684286/">
                            <ShowsDate><strong>Sat, Mar 24</strong> @ 9:00PM</ShowsDate>
                            </ShowsLink>
                        </ShowsData>
                        <ShowsData>
                            <ShowsLink href="https://www.facebook.com/events/140089596684286/">
                            <ShowsEvent>Wild Wing Cafe</ShowsEvent>
                            <ShowsLocation>North Charleston, SC</ShowsLocation>
                            </ShowsLink>
                        </ShowsData>
                    </ShowsRow>
                    <ShowsRow>
                        <ShowsData>
                            <ShowsLink href="https://www.facebook.com/events/1758739327515881/">
                            <ShowsDate><strong>Fri, Apr 6</strong> @ 9:00PM</ShowsDate>
                            </ShowsLink>
                        </ShowsData>
                        <ShowsData>
                            <ShowsLink href="https://www.facebook.com/events/1758739327515881/">
                            <ShowsEvent>Wild Wing Cafe</ShowsEvent>
                            <ShowsLocation>Columbia, SC (The Vista)</ShowsLocation>
                            </ShowsLink>
                        </ShowsData>
                    </ShowsRow>
                    <ShowsRow>
                        <ShowsData>
                            <ShowsLink href="https://www.facebook.com/events/931391703684310/">
                            <ShowsDate><strong>Sat, Apr 7</strong> @ 9:00PM</ShowsDate>
                            </ShowsLink>
                        </ShowsData>
                        <ShowsData>
                            <ShowsLink href="https://www.facebook.com/events/931391703684310/">
                            <ShowsEvent>Hwy 378 Bar and Grill</ShowsEvent>
                            <ShowsLocation>Gilbert, SC</ShowsLocation>
                            </ShowsLink>
                        </ShowsData>
                    </ShowsRow>
                </ShowsTableBody>
            </ShowsTable>
            <ShowsImage src={bandPhoto} />
        </Shows>
    )
}