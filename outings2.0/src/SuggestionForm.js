import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

const FormModal = styled.section`
  background-color: rgba(0, 0, 0, 0.5);
  bottom: 0;
  display: ${props => props.suggestionsModalActive ? 'block' : 'none'};
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 10;
`;

const Form = styled.section`
  background-color: #fafafa;
  border-radius: 3px;
  bottom: 0;
  box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.5);
  left: 0;
  margin: 0 auto;
  max-height: 750px;
  max-width: 350px;
  padding: 40px;
  position: absolute;
  right: 0;
  text-align: center;
  top: ${props => props.suggestionsModalActive ? '12vh' : '100vh'};
  z-index: 11;

  @media screen and (min-width: 500px) {
      max-width: 450px;
  }
`;

const FormHeading = styled.h1`
  font-family: Pacifico;
`;

const FormLabel = styled.label`
  font-size: 18px;
  display: block;
  text-align: left;
  margin-bottom: 5px;
`;

const FormInput = styled.input`
  padding: 12px 20px;
  width: 270px;
  width: 100%;
  border-radius: 3px;
  border: 1px solid #eee;
  font-size: 18px;
`;

const OptionalFlag = styled.span`
  font-size: 16px;
  color: #545454;
`;

const SubmitButton = styled.button`
  border: none;
  background-color: #ff4447;
  color: #fafafa;
  padding: 15px 20px;
  cursor: pointer;
  font-size: 18px;
  border-radius: 3px;
  width: 100%;

  :hover {
      background-color: darken(#ff4447, 10%);
  }
`;

const FormSection = styled.div`
  margin: 20px auto;
`;

const FormTextArea = styled.textarea`
  padding: 12px 20px;
  width: 270px;
  width: 100%;
  border-radius: 3px;
  border: 1px solid #eee;
  font-size: 18px;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  border: none;
  border-radius: 50%;
  font-size: 26px;
  color: #ff4447;
  background-color: transparent;
  cursor: pointer;
  font-weight: 500;
`;


export default (props) => {
  return (
    <FormModal suggestionsModalActive={props.suggestionsModalActive}>
      <Form suggestionsModalActive={props.suggestionsModalActive}>
      <CloseButton onClick={props.closeSuggestionsModal}>X</CloseButton>
      <FormHeading>Plan an outing!</FormHeading>
        <FormSection>
          <FormLabel htmlFor="title">Title</FormLabel>
          <FormInput type="text" id="title" maxlengh="25" required/>
        </FormSection>
        <FormSection>
          <FormLabel htmlFor="time">Time</FormLabel>
          <FormInput type="time" id="time" required/>
        </FormSection>
        <FormSection>
          <FormLabel htmlFor="date">Date</FormLabel>
          <FormInput type="date" id="date" required/>
        </FormSection>
        <FormSection>
          <FormLabel htmlFor="location">Location</FormLabel>
          <FormInput type="text" id="location" required/>
        </FormSection>
        <FormSection>
          <FormLabel htmlFor="more-info">More info <OptionalFlag>(optional)</OptionalFlag></FormLabel>
          <FormTextArea name="textarea" id="more-info"/>
        </FormSection>
          <SubmitButton className="button" onClick={
            () => {
              const obj = {
                title: document.getElementById('title').value,
                time: document.getElementById('time').value,
                date: document.getElementById('date').value,
                location: document.getElementById('location').value,
                moreInfo: document.getElementById('more-info').value,
                upVotes: 0,
                downVotes: 0
              };
              props.addSuggestion(obj);
            }}>Submit</SubmitButton>
      </Form>
    </FormModal>
  );
}