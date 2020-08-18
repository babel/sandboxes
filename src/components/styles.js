import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import { Accordion } from "semantic-ui-react";
import { Editor } from "./Editor";

const Root = styled.div``;

const Wrapper = styled.div``;

const Config = styled(Editor)`
  padding: 4px;
`;

const Code = styled(Editor)``;

// AST Viz Components

const StyledAccordion = styled(Accordion)`
  font-family: "Lucida Console", Courier, monospace !important;
`;

const StyledAccordionTitle = styled(Accordion.Title)`
  font-family: "Lucida Console", Courier, monospace !important;
`;

const HighlightedSubAccordion = styled(Accordion.Accordion)`
  background: ${props => (props.highlight ? "#ffff99" : "#ffffff")} !important;
`;

const Markdown = styled(ReactMarkdown)`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    font-size: 15px;
  }
`;

export {
  Root,
  Wrapper,
  Config,
  Code,
  StyledAccordion,
  StyledAccordionTitle,
  HighlightedSubAccordion,
  Markdown,
};
