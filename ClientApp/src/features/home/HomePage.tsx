import { Container, Header, Segment } from "semantic-ui-react";

export default function HomePage() {
  return (
    <Segment inverted textAlign="center" className="masthead">
      <Container text>
        <Header as='h1' inverted content='Weather app' />
        <Header as='h2' inverted content='Atea Global Services' />
        <Header as='h3' inverted content='Home task two' />
      </Container>
    </Segment>
  )
}