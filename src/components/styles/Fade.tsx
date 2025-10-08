import styled, { css, keyframes } from "styled-components";

interface FadeProps {
  direction?: "left" | "right"
  distance?: string
  duration?: string
  delay?: string
  inView?: boolean
}

const Fade = styled.div<FadeProps>`
  opacity: 0;
  ${({ 
    direction = "right",
    distance = "200px",
    duration = "1s",
    delay = "0s",
    inView = false
  }) => inView && css`
    animation: ${keyframes`
      from {
        opacity: 0;
        transform: translateX(${direction == "left" ? `-${distance}` : distance});
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    `} ${duration} ease-out ${delay} forwards;
  `}
`

export default Fade