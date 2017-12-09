import Page from "../components/page";
import got from "got";
import Centered from "../ui/centered";
import Container from "../ui/container";
import Card from "../ui/card";

export default class extends React.Component {
  static async getInitialProps() {
    const response = await got("http://localhost:8080/organizations");
    const data = JSON.parse(response.body);
    return {
      data: Object.values(data)
    };
  }

  render() {
    const orgs = this.props.data.map(org => (
      <Container key={org.uuid}>
        <h3>{org.name}</h3>
        <p>{org.description}</p>
      </Container>
    ));

    return (
      <Page>
        <Centered>
          <Card>{orgs}</Card>
        </Centered>
      </Page>
    );
  }
}
