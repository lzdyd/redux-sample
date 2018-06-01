import React from 'react';
import { Grid, GridRow, GridColumn, Header, Message, Icon } from 'semantic-ui-react';

const Root = () => (
  <Grid container className="content no-margin-grid">
    <GridRow>
      <GridColumn>
        <Header size='large'>Redux Sample</Header>

        <p>Hi, it's a simple React-Redux app.</p>
        <Message>
          <Message.Header>The following technologies have been used for creating this app:</Message.Header>
          <Message.List>
            <Message.Item>React</Message.Item>
            <Message.Item>Redux</Message.Item>
            <Message.Item>Redux-Form</Message.Item>
            <Message.Item>Ramda</Message.Item>
            <Message.Item>Babel</Message.Item>
            <Message.Item>Webpack</Message.Item>
            <Message.Item>Express</Message.Item>
            <Message.Item>Semantic UI React</Message.Item>
          </Message.List>
        </Message>
        <Message>
          <Message.Header style={{ color: 'red' }}>TODO List:</Message.Header>
          <Message.List>
            <Message.Item>Routing<Icon name="checkmark"/></Message.Item>
            <Message.Item>Optimize prod. bundle<Icon name="remove"/></Message.Item>
            <Message.Item>Lazy load<Icon name="remove"/></Message.Item>
            <Message.Item>Authentication<Icon name="remove"/></Message.Item>
            <Message.Item>Make custom scrollbar (like in Safari)<Icon name="remove"/></Message.Item>
            <Message.Item>Optimize pictures loading<Icon name="remove"/></Message.Item>
            <Message.Item>Add PostCSS<Icon name="remove"/></Message.Item>
            <Message.Item>...</Message.Item>
          </Message.List>
        </Message>
      </GridColumn>
    </GridRow>
  </Grid>
);

export default Root;
