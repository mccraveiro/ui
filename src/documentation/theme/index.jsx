import React from 'react';
import style, { createGlobalStyle } from 'styled-components';
import { theme, DocPreview } from 'docz';
import NavBar from './navbar/NavBar';
import Sidebar from './sidebar/Sidebar';
import Heading from '../layout/components/Heading';
import LinkItem from '../layout/components/LinkItem';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
    font-size: 14px;
  }

  img {
    max-width: 100%;
  }
`

const Container = style.div`
  width: 100%;
  min-height: 100vh;
  color: #242A31;
  background: #F5F7F9;
  display: flex;
  flex-direction: column;
`;

const Wrapper = style.div`
  display: flex;
  max-height: calc(100vh - 100px);
`;

const PageLayout = style.div`
  padding: 60px 88px;
  display: block;
  width: 100%;
  background: #ffffff;
  min-height: calc(100vh - 201px);
  max-width: 850px;
  overflow: auto;
`;

const Paragraph = style.p`
  font-size: 16px;
  line-height: 1.625;
  font-weight: 400;
`;

const CodeBlock = style.pre`
  counter-reset: line 0;
  font-family: "Source Code Pro", Menlo, monospace;
  font-size: 85%;
  line-height: 1.7;
  tab-size: 4;
  background-color: rgb(245, 247, 249);
  overflow-x: auto;
  padding: 15px 20px;
  border-radius: 3px;
  margin: 15px 0;
`;

const Theme = () => (
  <Container>
    <GlobalStyle />
    <NavBar title="Buffer Components Documentation" />
    <Wrapper>
      <Sidebar />
      <PageLayout>
        <DocPreview components={{
          h1: Heading,
          a: LinkItem,
          p: Paragraph,
          code: CodeBlock,
        }} />
      </PageLayout>
    </Wrapper>
  </Container>
)

export default theme()(Theme)
