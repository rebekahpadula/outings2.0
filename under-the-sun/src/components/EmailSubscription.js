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
    margin-right: 10px;
`;

const EmailSubscriptionInput = styled.input`
    height: 30px;
    width: 300px;
`;

export default (props) => {
    return (
        <EmailSubscription>
            <EmailSubscriptionForm>
                <EmailSubscriptionHeading>Sign up to receive notifications about our upcoming shows!</EmailSubscriptionHeading>
                <EmailSubscriptionLabel>Email</EmailSubscriptionLabel>
                <EmailSubscriptionInput type="email"/>
            </EmailSubscriptionForm>
        </EmailSubscription>
    )
}