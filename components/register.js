import Container from "../ui/container";
import Centered from "../ui/centered";
import Card from "../ui/card";
import { Title, Paragraph, Label } from "../ui/typography";
import { Input } from "../ui/inputs";
import { PrimaryButton } from "../ui/buttons";

const FullSizedInput = Input.extend`
  width: 100%;
`;

export default ({
  email,
  password,
  changeEmail,
  changePassword,
  sendRegistration
}) => (
  <div>
    <Container>
      <Title>Get your API Key</Title>
    </Container>

    <Container>
      <Label htmlFor="email">Email </Label>
      <FullSizedInput
        id="email"
        type="email"
        value={email}
        onChange={changeEmail}
      />
    </Container>

    <Container>
      <Label htmlFor="password">Password </Label>
      <FullSizedInput
        id="password"
        type="password"
        password={password}
        onChange={changePassword}
      />
    </Container>

    <Container>
      <PrimaryButton onClick={sendRegistration}> Sign Up </PrimaryButton>
    </Container>
  </div>
);
