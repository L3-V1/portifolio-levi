import styled from "styled-components";

const Wrapper = styled.div<{ maxWidth?: number }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  margin: 0 auto;
  padding: 0 1.5rem;
  max-width: ${({ maxWidth = 64 }) => maxWidth}rem;
`

export default Wrapper