import Link from "next/link";
import styled from "styled-components";
import Head from "../components/head";
import Page from "../components/page";
import Container from "../ui/container";
import Centered from "../ui/centered";
import Card from "../ui/card";
import { Title, Paragraph } from "../ui/typography";
import { Button, PrimaryButton } from "../ui/buttons";

const MaxSizeCard = Card.extend`
  max-width: 700px;
`;

const H3 = styled.h3`
  margin: 0;
`;

const H4 = styled.h4`
  margin-top: 0;
  margin-bottom: ${props => props.theme.spacing.small};
`;

export default () => (
  <Page>
    <Head title="Home" />

    <Centered>
      <MaxSizeCard>
        <Container>
          <Title>The Give API</Title>
        </Container>

        <Container>
          <Paragraph>
            Automate donations to vetted non-profits, open source groups and
            charities.
          </Paragraph>
        </Container>

        <Container>
          <H3>
            Example: Give <code> eff </code> $1.
          </H3>
          <pre>
            <code>
              {`curl --request POST \
              
     --url http://api.theamericangoodcompany.com/donations/new \
              
     --header 'content-type: application/x-www-form-urlencoded' \
              
     --data 'organization=eff&amount=100'`}
            </code>
          </pre>
        </Container>

        <Container>
          <Centered>
            <Container>
              <Button>Docs</Button>
            </Container>

            <Container>
              <Button>Contact</Button>
            </Container>

            <Container>
              <PrimaryButton>Get API Key</PrimaryButton>
            </Container>
          </Centered>
        </Container>

        <Container>
          <Container>
            <H3>Pricing</H3>
          </Container>

          <Container>
            <H4>Pay as you go</H4>

            <Paragraph>
              8% per donation. No hidden fees or extra charges.
            </Paragraph>
          </Container>

          <Container>
            <H4>Enterprise</H4>

            <Paragraph>Contact us.</Paragraph>
          </Container>
        </Container>
      </MaxSizeCard>
    </Centered>
  </Page>
);
