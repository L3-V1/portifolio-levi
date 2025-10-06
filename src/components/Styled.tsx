import styled from "styled-components";

export const Wrapper = styled.section`
  height: calc(100vh - var(--navbar-height));
  scroll-margin-top: var(--navbar-height);
`

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

export const Fullscreen = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  max-width: 60rem;
  margin: 0 auto;
  height: 100%;
`