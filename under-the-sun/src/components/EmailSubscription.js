import React from 'react';
import styled from 'styled-components';

import SrOnlyHeading from './SrOnlyHeading';
import Container from './Container';

const EmailSubscription = styled.section`
    padding: 20px;
    margin: 0 auto;
    width: 100%;
    display: block;
    text-align: center;
`;

const EmailSubscriptionHeading = styled.h1``;

const EmailSubscriptionForm = styled.form``;

const EmailSubscriptionLabel = styled.label`
    font-size: 18px;
    margin-right: 5px;
`;

const EmailSubscriptionInput = styled.input`
    height: 25px;
    width: 300px;
    font-size: 18px;
    margin-right: 10px;
    padding: 5px;
`;

const SubmitButton = styled.button`
    font-size: 18px;
    padding: 6px;
    width: 130px;
    /* display: block; */
    /* margin: 0 auto; */
`;

export default (props) => {
    return (
        <EmailSubscription>
            <EmailSubscriptionForm>
                <EmailSubscriptionHeading>Subscribe to receive notifications about our upcoming shows!</EmailSubscriptionHeading>
                <EmailSubscriptionLabel>Email</EmailSubscriptionLabel>
                <EmailSubscriptionInput type="email"/>
                <SubmitButton>Subscribe</SubmitButton>
            </EmailSubscriptionForm>
        </EmailSubscription>
    )
}