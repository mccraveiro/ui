import React from 'react';
import style from 'styled-components';

const Title = style.div`
  margin: 0px;
  padding: 0px 0px 40px 0px;
  flex: auto;
  display: flex;
`;

const Text = style.h2`
  display: block;
  margin: 0px;
  flex: 1 1 auto;
  border-left: 2px solid #E6ECF1;
  padding: 0 16px;
  border-left-color: #2E5DF8;
  font-size: 32px;
  line-height: 1.5;
  font-weight: 500;
`;

const Header = style.div`
  display: block;
  margin: 0px;
  padding: 0px;
  border-bottom: 1px solid #E6ECF1;
  margin-bottom: 32px;
`;

/** Page H1 Heading */
const Heading = ({ children }) => (
  <Header>
    <Title>
      <Text>{children}</Text>
    </Title>
  </Header>
);

export default Heading;
