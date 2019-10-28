import PropTypes from "prop-types";
import React, { Component } from "react";
import {
  Button,
  Container,
  Icon,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility
} from "semantic-ui-react";
import HomepageHeading from "./HomepageHeading";

const getWidth = (): number => {
  const isSSR = typeof window === "undefined";

  return isSSR ? (Responsive.onlyTablet.minWidth as number) : window.innerWidth;
};

class DesktopContainer extends Component {
  state = { fixed: true };

  hideFixedMenu = () => this.setState({ fixed: false });
  showFixedMenu = () => this.setState({ fixed: true });

  render() {
    const { children } = this.props;
    const { fixed } = this.state;

    return (
      <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            inverted
            textAlign="center"
            style={{ minHeight: 700, padding: "1em 0em" }}
            vertical
          >
            <Menu
              fixed={fixed ? "top" : undefined}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size="large"
            >
              <Container>
                <Menu.Item as="a" href="#top" active>
                  Home
                </Menu.Item>
                <Menu.Item as="a" href="#mission">
                  Mission
                </Menu.Item>
                <Menu.Item as="a" href="#vision">
                  Our Vision
                </Menu.Item>
                <Menu.Item as="a" href="#contact-us">
                  Contact Us
                </Menu.Item>
                <Menu.Item position="right">
                  {/* <Button as="a" inverted={!fixed}>
                    Log in
                  </Button> */}
                  <Button
                    as="a"
                    inverted={!fixed}
                    primary={fixed}
                    // style={{ marginLeft: "0.5em" }}
                    href="mailto:jtheresa.safespace@gmail.com"
                  >
                    Email Us
                  </Button>
                </Menu.Item>
              </Container>
            </Menu>
            <HomepageHeading />
          </Segment>
        </Visibility>

        {children}
      </Responsive>
    );
  }
}

class MobileContainer extends Component {
  state = { sidebarOpened: false };

  handleSidebarHide = () => this.setState({ sidebarOpened: false });

  handleToggle = () => this.setState({ sidebarOpened: true });

  render() {
    const { children } = this.props;
    const { sidebarOpened } = this.state;

    return (
      <Responsive
        as={Sidebar.Pushable}
        getWidth={getWidth}
        maxWidth={Responsive.onlyMobile.maxWidth}
      >
        <Sidebar
          as={Menu}
          animation="push"
          inverted
          onHide={this.handleSidebarHide}
          vertical
          visible={sidebarOpened}
        >
          <Menu.Item as="a" href="#top" active onClick={this.handleSidebarHide}>
            Home
          </Menu.Item>
          <Menu.Item as="a" href="#mission" onClick={this.handleSidebarHide}>
            Mission
          </Menu.Item>
          <Menu.Item as="a" href="#vision" onClick={this.handleSidebarHide}>
            Our Vision
          </Menu.Item>
          {/* <Menu.Item as="a" href="#contact-us" onClick={this.handleSidebarHide}>
            Contact Us
          </Menu.Item> */}
          <Menu.Item
            as="a"
            href="mailto:jtheresa.safespace@gmail.com"
            inverted
            // style={{ marginLeft: "0.5em" }}
          >
            <span>
              <Icon name="envelope" /> Email Us
            </span>
          </Menu.Item>
        </Sidebar>

        <Sidebar.Pusher dimmed={sidebarOpened}>
          <Segment
            inverted
            textAlign="center"
            style={{ minHeight: 350, padding: "1em 0em" }}
            vertical
          >
            <Container>
              <Menu inverted pointing secondary size="large">
                <Menu.Item onClick={this.handleToggle}>
                  <Icon name="sidebar" />
                </Menu.Item>
                <Menu.Item position="right">
                  <Button
                    as="a"
                    href="mailto:jtheresa.safespace@gmail.com"
                    inverted
                    // style={{ marginLeft: "0.5em" }}
                  >
                    Email Us
                  </Button>
                </Menu.Item>
              </Menu>
            </Container>
            <HomepageHeading mobile />
          </Segment>

          {children}
        </Sidebar.Pusher>
      </Responsive>
    );
  }
}

const ResponsiveContainer: React.FC<{ children?: React.ReactNode }> = ({
  children
}) => {
//   let mobileChildren;
//   if (children && Array.isArray(children)) {
//     mobileChildren = children.map((child) => {
//       return React.cloneElement(child, {
//         mobile: true
//       });
//     });
//   }
  return (
    <div>
      <DesktopContainer>{children}</DesktopContainer>
      <MobileContainer>{children}</MobileContainer>
    </div>
  );
};

export default ResponsiveContainer;
