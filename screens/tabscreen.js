import React, { Component } from 'react';
import { Container, Header, Content,Left,Body,Right,Title, Tab, Tabs } from 'native-base';
import Tab1 from './tabs/tab1';
import Tab2 from './tabs/tab2';
import Tab3 from './tabs/tab3';
export default class tabscreen extends Component {
  render() {
    return (
      <Container>
        <Header hasTabs >
              <Left/>
          <Body>
            <Title>News</Title>
          </Body>
              <Right />
        </Header>
        <Tabs>
          <Tab heading="Tab1">
            <Tab1 />
          </Tab>
          <Tab heading="Tab2">
            <Tab2 />
          </Tab>
          <Tab heading="Tab3">
            <Tab3 />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}