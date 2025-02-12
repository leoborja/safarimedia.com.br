import {
  Body,
  Container,
  Head,
  Html,
  Preview,
  Section,
  Text,
} from '@react-email/components';

export interface IEmail {
  name: string;
  email: string;
  message: string;
}

function EmailTemplate({ name, email, message }: IEmail) {
  return (
    <Html>
      <Head />
      <Preview>Contact from FHMC website</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section>
            <Text style={preview}>Mail sent from FHMC website</Text>
            <Text style={text}>
              <strong>Name:</strong>
              <br />
              {name}
            </Text>
            <Text style={text}>
              <strong>Email:</strong>
              <br />
              {email}
            </Text>
            <Text style={text}>
              <strong>Message:</strong>
              <br />
              {message}
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

const main = {
  backgroundColor: '#f3f4fb',
  padding: '10px 0',
};

const container = {
  backgroundColor: '#ffffff',
  border: '1px solid #f0f0f0',
  padding: '45px',
};

const text = {
  fontSize: '16px',
  fontFamily:
    "'Open Sans', 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif",
  fontWeight: '300',
  color: '#404040',
  lineHeight: '26px',
};

const preview = {
  fontSize: '14px',
  fontFamily:
    "'Open Sans', 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif",
  fontWeight: '600',
  color: '#1B687B',
  lineHeight: '24px',
};

export { EmailTemplate };
