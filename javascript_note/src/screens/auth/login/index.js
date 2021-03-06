import React, { Fragment } from "react";
import Header from "../../../components/header";
import { Column, Section, Title, Container, Card } from "rbx";
import logoImage from "../../../assets/images/logo.png";
import LoginForm from "../../../components/auth/login_form";
import "../../../styles/auth.scss";


const LoginScreen = () => (
  <Fragment>
    <Header>
    </Header>
    <Section size="medium" className="auth">
        <Container>
          <Column.Group centered>
            <Column size={3}>
              <Card>
                <Card.Content>
                    <Column.Group centered>
                      <Column size={12}>
                        <img src={logoImage} alt="logoImage" />
                      </Column>
                    </Column.Group>
                    <Column.Group>
                      <Column size={12}>
                        <Title
                          size={6}
                          className="has-text-grey has-text-centered">
                          Your notes on the cloud
                        </Title>
                        
                      </Column>
                    </Column.Group>
                  <LoginForm/>
                </Card.Content>
              </Card>
            </Column>
          </Column.Group>
        </Container>
        
      </Section>
  </Fragment>
);

export default LoginScreen;
