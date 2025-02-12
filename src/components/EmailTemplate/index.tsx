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
  backgroundColor: '#E6F2EC', // Tom suave de verde claro
  padding: '10px 0',
};

const container = {
  backgroundColor: '#ffffff',
  border: '1px solid #0B3D2E', // Borda no tom principal
  padding: '45px',
  borderRadius: '8px',
};

const text = {
  fontSize: '16px',
  fontFamily:
    "'Open Sans', 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif",
  fontWeight: '300',
  color: '#0B3D2E', // Ajustado para o novo tom principal
  lineHeight: '26px',
};

const preview = {
  fontSize: '14px',
  fontFamily:
    "'Open Sans', 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif",
  fontWeight: '600',
  color: '#09603F', // Cor de destaque compatível com a nova paleta
  lineHeight: '24px',
};

export { EmailTemplate };
