import { Link } from "react-router-dom";
import { Container, Header, Segment, Image, Button } from "semantic-ui-react";

export const HomePage = () => {
  return (
    <Segment inverted textAlign="center" vertical className="masthead">
      <Container text>
        <Header as="h1" inverted>
          <Image
            size="massive"
            src="/assets/logo.png"
            alt="logo"
            style={{ marginBottom: 12 }}
          />
          Activities
        </Header>
        <Header as="h2" inverted content="Welcome to Reactivities"></Header>
        <Button as={Link} to="/ativities" size="huge" inverted>
          Take me to the Activities!
        </Button>
      </Container>
    </Segment>
  );
};
