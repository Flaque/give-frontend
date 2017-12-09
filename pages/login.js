import Link from "next/link";
import Head from "../components/head";
import Page from "../components/page";
import Container from "../ui/container";
import Centered from "../ui/centered";
import Card from "../ui/card";
import { Title, Paragraph, Label } from "../ui/typography";
import { Input } from "../ui/inputs";
import { PrimaryButton } from "../ui/buttons";

const FullSizedInput = Input.extend`
  width: 100%;
`;

export default () => (
  <Page>
    <Head title="Login" />
    <Centered>
      <Card>
        <Container>
          <Title> Login </Title>
        </Container>

        <Container>
          <Label htmlFor="email">Email </Label>
          <FullSizedInput id="email" type="email" />
        </Container>

        <Container>
          <Label htmlFor="password">Password </Label>
          <FullSizedInput id="password" type="password" />
        </Container>

        <Container>
          <PrimaryButton> Login </PrimaryButton>
        </Container>
      </Card>
    </Centered>
  </Page>
);
