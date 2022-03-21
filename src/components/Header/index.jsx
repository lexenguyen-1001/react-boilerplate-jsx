import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.header`
  color: red;
`;

const Header = () => (
  <Wrapper>
    <button className='prettier-class' id='prettier-id' type='button'>
      Click Here
    </button>
  </Wrapper>
);

export default Header;
