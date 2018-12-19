import React from 'react';
import style from 'styled-components';
import { Docs, Link } from 'docz';

const SidebarWrapper = style.div`
  z-index: 15;
  flex: 0 0 auto;
  background: #F5F7F9;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 300px;
  padding-left: calc((100% - 1448px) / 2);
  border-right: 1px solid #E6ECF1;
`;

const SidebarList = style.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  display: block;
  margin: 0px;
  padding: 0px;
  width: 100%;
  flex: 1 1 auto;
  overflow-y: auto;
  padding-bottom: 24px;
  font-size: 15px;
  margin-top: 32px;
`;

const SidebarListItem = style.li`
  text-decoration: none;
  color: #5C6975;
  margin-left: 0px;
  border-left-color: transparent;
  display: block;
  margin: 0px;
  padding: 0px;
  position: relative;
  border-left: 1px solid transparent;
  padding-left: ${props => (props.level === 1 ? '30px' : '0px')}
`;

const SidebarListItemLink = style(Link)`
  text-decoration: none;
  position: relative;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
  padding: 7px 24px 7px 16px;
  border: 1px solid transparent;
  border-right: 0px;
  cursor: pointer;
`;

/** The left sidebar that displays the navigation links */
const Sidebar = ({ navigationLinks }) => (
  <SidebarWrapper>
    <SidebarList>
      <Docs>
        {({ docs }) => docs
          .map(doc => ({ ...doc, level: doc.name === doc.menu ? 0 : 1 }))
          .map(doc => (
            <SidebarListItem key={doc.name} level={doc.level}>
              <SidebarListItemLink to={doc.route}>{doc.name}</SidebarListItemLink>
            </SidebarListItem>
          ))
        }
      </Docs>
    </SidebarList>
  </SidebarWrapper>
);

export default Sidebar;
