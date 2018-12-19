import React from 'react';
import PropTypes from 'prop-types';
import style from 'styled-components';
import { Link } from 'docz';

const LinkWrapper = style(Link)`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-self: stretch;
  align-self: stretch;
  color: rgb(36, 42, 49);
  background-color: rgb(255, 255, 255);
  box-shadow: rgba(116, 129, 141, 0.1) 0px 3px 8px 0px;
  margin: 0px;
  padding: 0px;
  border-radius: 3px;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(230, 236, 241);
  border-image: initial;
  transition: border 200ms ease 0s;
  text-decoration: none;
  cursor: pointer;
  &:hover {
     border-color: #2E5DF8;
  }
`;

const LinkBody = style.div`
  background: #ffffff;
  flex: 1;
  padding: 0px 16px;
`;

const LinkTitle = style.h3`
  font-size: 16px;
  line-height: 1.5;
  font-weight: 500;
  color: blue;
`;


const LinkItem = ({ children, href }) => (
  <LinkWrapper to={`/${href}`}>
    <LinkBody>
      <LinkTitle>{`→ ${children}`}</LinkTitle>
    </LinkBody>
  </LinkWrapper>
);

LinkItem.propTypes = {
  children: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};

export default LinkItem;
