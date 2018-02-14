import React from 'react';
import styled from 'styled-components';

import Suggestion from './Suggestion';

const Suggestions = styled.section`

`;

const SuggestionsContent = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    margin-top: 60px;
`;

const SuggestionsHeading = styled.h1`
    height: 1px;
    left: -10000px;
    overflow: hidden;
    position: absolute;
    top: auto;
    width: 1px;
`;

const AddSuggestion = styled.button`
    height: 50px;
    width: 50px;
    border: none;
    background-color: #ff4447;
    color: #fafafa;
    font-size: 18px;
    border-radius: 50%;
    cursor: pointer;

    :hover {
        background-color: #e53d3f;
    }

    :active {
        background-color: #cc3638;
    }
`;

export default (props) => {
    return (
        <Suggestions>
            <SuggestionsHeading>Suggestions</SuggestionsHeading>
            <AddSuggestion onClick={props.openSuggestionsModal}>+</AddSuggestion>
            <SuggestionsContent>
            {props.suggestions.map( 
                /* passing in voteFunction that we can access as a prop since we passed it in App.js. We passed it in App.js as voteFunction so here we must continue to call it voteFunction */
                item => <Suggestion key={item.key} suggestion={item} voteFunction={props.voteFunction}/>
            )}
            </SuggestionsContent>
        </Suggestions>
    );
}