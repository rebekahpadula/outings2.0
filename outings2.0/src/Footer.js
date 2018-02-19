import React from 'react';
import styled from 'styled-components';

const Footer = styled.section``;
const FooterCredits = styled.div``;
const IconCredit = styled.p``;

export default (props) => {
    return (
        <Footer>
            <FooterCredits>
                <IconCredit><small>Icons made by <a href="http://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank" rel="noopener noreferrer">CC 3.0 BY</a></small></IconCredit>
                <IconCredit><small>Icons made by <a href="https://www.flaticon.com/authors/dario-ferrando" title="Dario Ferrando">Dario Ferrando</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank" rel="noopener noreferrer">CC 3.0 BY</a></small></IconCredit>
            </FooterCredits>
        </Footer>
    )
}