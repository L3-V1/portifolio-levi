import * as Styled from "./components/Styled"
import { navigation } from "./layouts/Layout";

export default function Home() {
  return navigation.map((item) => (
    <Styled.Wrapper key={item.key} id={item.key}>
      <Styled.Container>{item.component}</Styled.Container>
    </Styled.Wrapper>
  ))
}