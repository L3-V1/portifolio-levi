import Section from "./styles/Section";
import Wrapper from "./styles/Wrapper";

export default function Sobre() {
  return (
    <Section id="sobre">
      <Wrapper maxWidth={72}>
        <div className="display-4">Sobre mim</div>
      </Wrapper>
    </Section>
  )
}