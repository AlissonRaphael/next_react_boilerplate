import { Container, Title, Desc } from './style'

const Main = ({
  title = 'React Boilerplate',
  desc = 'Typescript, React, Next.js, Styled-components.'
}) => (
  <Container>
    <div>
      <Title>{title}</Title>
      <Desc>{desc}</Desc>
    </div>
  </Container>
)

export default Main
