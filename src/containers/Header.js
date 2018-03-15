import React, { Component } from 'react';
import autoBind from 'react-autobind';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Grid, GridRow, GridColumn, Icon, Button } from 'semantic-ui-react';

const Header = styled.header`
  background-color: #797cff;
`;

export default class Layout extends Component {
  render() {
    return (
      <Header className='app-header'>
        <Grid container columns={3}>
          <GridRow>
            <GridColumn>
              <Link to="/" className="page-header__logo"><Icon className="page-header__logo-icon" name='umbrella'/></Link>
            </GridColumn>

            <GridColumn>
              Menu links...
            </GridColumn>
          </GridRow>
        </Grid>
      </Header>
    );
  }
}
