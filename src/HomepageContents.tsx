import React from "react";
import ResponsiveContainer from "./ResponsiveContainer";
import {
  Divider,
  Header,
  Grid,
  Segment,
  List,
  Button,
  Icon
} from "semantic-ui-react";

const HomepageContents: React.FC = () => {
  const mobile = true;
  return (
    <Grid>
      <Grid.Row>
        <Grid.Column width={mobile ? 1 : 3}></Grid.Column>
        <Grid.Column width={mobile ? 14 : 10}>
          <Grid container stackable verticalAlign="middle">
            <Grid.Row>
              <Grid.Column width={11}>
                <a id="mission" />
                <Header>SCHOOL MISSION STATEMENT</Header>
                <p>
                  Our mission is to remove barriers by educating all students to
                  be compassionate citizens while providing a safe environment.
                  We respect and promote the social, emotional, physical, and
                  intellectual development of every student.
                </p>
              </Grid.Column>
            </Grid.Row>
            {/* <Divider
          as="h4"
          horizontal
          style={{ margin: "3em 0em", textTransform: "uppercase" }}
        >
          <a href="#">Case Studies</a>
        </Divider> */}
            <Grid.Row inverted>
              <Grid.Column width={8}></Grid.Column>
              <Grid.Column width={8}>
                <Header>FOUNDING TEAM</Header>
                <p>
                  They are a diverse group of six passionate, seasoned educators
                  who have a total of 128 years of educational experience. These
                  educational leaders have a combination of 6 Master’s degrees,
                  2 Doctorate degrees, as well as a number of teaching and
                  administrative licensures. They have had experiences both
                  nationally and internationally.
                </p>
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column width={8}>
                <a id="vision" />
                <Header>SCHOOL VISION</Header>
                <p>
                  We are an intentionally diverse school community. We educate
                  all students on social acceptance, provide counseling and
                  mental health services, while preparing students to be
                  contributing citizens in an inclusive world.
                </p>
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column width={16}>
                <Header>SCHOOL FOCUSES</Header>
                <p>
                  <List>
                    <List.Item>Earn high school diploma</List.Item>
                    <List.Item>LGBTQ+ affirming community</List.Item>
                    <List.Item>Community service</List.Item>
                    <List.Item>Mental health</List.Item>
                    <List.Item>Post-high school readiness</List.Item>
                  </List>
                </p>
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Segment>
                <Grid.Column width={12}>
                  <a id="contact-us" />
                  <Button
                    as="a"
                    target="_blank"
                    href="//twitter.com/@thevillagehs"
                  >
                    <Icon name="twitter" />
                  </Button>
                  <Button
                    as="a"
                    target="_blank"
                    href="//instagram.com/thevillagehs"
                  >
                    <Icon name="instagram" />
                  </Button>
                  <Button
                    as="a"
                    target="_blank"
                    href="//facebook.com/thevillagehs"
                  >
                    <Icon name="facebook" />
                  </Button>
                </Grid.Column>
                <Grid.Column>
                  <Button
                    as="a"
                    target="_blank"
                    href="mailto:bvosburg.safespace@gmail.com"
                  >
                    <Icon name="envelope" /> bvosburg.safespace@gmail.com
                  </Button>
                  <Button
                    as="a"
                    target="_blank"
                    href="mailto:jtheresa.safespace@gmail.com"
                  >
                    <Icon name="envelope" /> jtheresa.safespace@gmail.com
                  </Button>
                </Grid.Column>
              </Segment>
            </Grid.Row>
          </Grid>
        </Grid.Column>
        <Grid.Column width={mobile ? 1 : 3}></Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default HomepageContents;
