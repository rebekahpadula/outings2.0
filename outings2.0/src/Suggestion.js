import React from 'react';
import styled, {keyframes} from 'styled-components';

import calendarIcon from './assets/calendar-icon-black.svg';
import infoIcon from './assets/info-icon-black.svg';
import clockIcon from './assets/clock-icon-black.svg';
import locationIcon from './assets/location-icon.svg';

const Suggestion = styled.section`
  background-color: #fafafa;
  border-radius: 5px;
  box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.5);  
  flex-basis: 100%;
  margin-bottom: 40px;
  max-width: 400px;
  padding: 20px;

  @media screen and (min-width: 700px) {
    flex-basis: calc(50% - 40px);

    :not(:last-child) {
      margin-right: 26px;
    }
  }

  :hover {
    transform: scale(1.01);
    cursor: pointer;
  }
`;

const Votes = styled.div``;

const VotesCount = styled.span`
  font-size: 20px;
  vertical-align: middle;
  margin: 0 5px;
`;

const VoteButton = styled.button`
  border: none;
  background-color: transparent;
  vertical-align: middle;
`;

const ThumbAnimation = keyframes`
    0% {transform: rotate(0deg);}
    25% {transform: rotate(-20deg);}
    50% {transform: rotate(0);}
    75% {transform: rotate(20deg);}
    100% {transform: rotate(0deg);}
`;

const Thumb = styled.span`
  cursor: pointer;
  display: inline-block;
  font-size: 30px;
  vertical-align: middle;
  &:hover {
    animation-name: ${ThumbAnimation};
    animation-duration: 400ms;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
  }
`;

const SuggestionTitle = styled.h1``;
const SuggestionInfo = styled.p``;
const SuggestionIcon = styled.img`
  width: 20px;
  margin-right: 10px;
`;

export default (props) => {
  return (
    <Suggestion className="suggestion">
      <SuggestionTitle>{props.suggestion.title}</SuggestionTitle>
      <SuggestionInfo><SuggestionIcon src={calendarIcon}/>{props.suggestion.date}</SuggestionInfo>
      <SuggestionInfo><SuggestionIcon src={clockIcon}/>{props.suggestion.time}</SuggestionInfo>
      <SuggestionInfo><SuggestionIcon src={locationIcon}/>{props.suggestion.location}</SuggestionInfo>
      <SuggestionInfo><SuggestionIcon src={infoIcon}/>{props.suggestion.moreInfo}</SuggestionInfo>
      <Votes className="votes">
        {/* using anonymous function to call the voteFunction so we can pass e */}
        <VoteButton><Thumb  
          onClick={(e)=> {props.voteFunction(props.id, 'down')}} 
          role="img"
          aria-label="thumbs down"
          id="thumbs-down">
          👎
        </Thumb>
        <VotesCount>{props.suggestion.downVotes}</VotesCount></VoteButton>
        <VoteButton><Thumb 
          onClick={(e)=> {props.voteFunction(props.id, 'up')}}
          role="img" 
          aria-label="thumbs up"
          id="thumbs-up">
          👍
        </Thumb>
        <VotesCount>{props.suggestion.upVotes}</VotesCount></VoteButton>
      </Votes>
    </Suggestion>
  );
}