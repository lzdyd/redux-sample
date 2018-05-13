import React, { PureComponent } from 'react';
import autoBind from 'react-autobind';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {
  Container,
  Grid,
  Icon
} from 'semantic-ui-react';

const HeaderContainer = styled.header`
  position: relative;
  background-color: #797cff;
`;

const StyledIcon = styled(Icon)`
  &&& {
    position: absolute;
    font-size: 2rem;
    color: #2d41c3
  }
`;

const Hamburger = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  float: right;
  width: 1.5rem;
  height: 1.25rem;
  cursor: pointer;
  transition-timing-function: linear;
  transition-duration: .20s;
  transition-property: opacity, filter;
  transform: translateZ(0);
  will-change: transform;
  
  span {
    position: relative;
    display: block;
    width: 1.5rem;
    height: 0.125rem;
    background-color: #fff;
    transition-timing-function: cubic-bezier(.55, .055, .675, .19);
    transition-duration: .22s;
    
    &::before, &::after {
      position: absolute;
      content: '';
      top: -0.5rem;
      width: 1.5rem;
      height: 0.125rem;
      background-color: #fff;
      transition: top .1s ease-in .25s, opacity .1s ease-in;
    }
    
    &::after {
      top: 0.5rem;
      transition: top .1s ease-in .25s, transform .22s cubic-bezier(.55,.055,.675,.19);
    }
  }
  
  ${HeaderContainer}.collapse & {
    span {
      transition-delay: .12s;
      transition-timing-function: cubic-bezier(.215, .61, .355, 1);
      transform: rotate(225deg);
      
      &::before {
        top: 0;
        transition: top .1s ease-out,opacity .1s ease-out .12s;
        opacity: 0;
      }
      
      &::after {
        top: 0;
        transition: bottom .1s ease-out, transform .22s cubic-bezier(.215, .61, .355, 1) .12s;
        transform: rotate(-90deg);
      }
    }
  }
  
  @media (min-width: 992px) {
    display: none;
  }
`;

const CollapseGridColumn = styled(Grid.Column)`
  margin-top: -300px;
  opacity: 0;
  z-index: -1;
  transition: 0.5s margin, 0.125s opacity ease-in-out;
  transform: translateZ(0);
  will-change: transform;
  
  ${HeaderContainer}.collapse & {
    margin-top: 0px;
    opacity: 1;
    z-index: 1;
    transition: .5s margin, .5s opacity ease-in-out;
  }
  
  li {
    margin-bottom: 2rem;
  }
  
  a {
    font-size: 1.125rem;
    color: #fff;
  }
  
  @media (min-width: 768px) {
    //position: relative;
    //background: palevioletred;
    margin-top: 0;
    opacity: 1;
    z-index: 1;
    transition: none;
    
    ul {
      margin: 0;
      li {
        display: inline-block;
        margin-bottom: 0;
        
        &:not(:last-child) {
          margin-right: 3.5rem;
        }
      }
    }
  }
`;

export default class Header extends PureComponent {
  constructor(props) {
    super(props);
    autoBind(this);

    this.state = {
      menuCollapse: false
    };
  }

  onMenuCollapse() {
    this.setState({
      menuCollapse: !this.state.menuCollapse
    });
  }

  render() {
    const menuCollapse = (this.state.menuCollapse) ? 'collapse' : null;

    return (
      <HeaderContainer className={menuCollapse}>
        <Container>
          <Grid columns={2} padded>
            <Grid.Column width={2}>
              <Link to="/"><StyledIcon name="umbrella" /></Link>
            </Grid.Column>

            <Grid.Column width={14} only="mobile" floated="right">
              <Hamburger onClick={this.onMenuCollapse}>
                <span></span>
              </Hamburger>
            </Grid.Column>

            <CollapseGridColumn width={16} tablet={14} computer={14}>
              <Grid columns={2}>
                <Grid.Column width={8} computer={8} tablet={8} mobile={16}>
                  <nav>
                    <ul className="reset-list-style-type reset-padding">
                      <li><Link to="/articles">Articles</Link></li>
                      <li><Link to="/grids">Grids</Link></li>
                      <li><Link to="/charts">Charts</Link></li>
                    </ul>
                  </nav>
                </Grid.Column>

                <Grid.Column width={4} computer={4} tablet={4} mobile={16} floated="right">
                  LOGIN_DROPDOWN
                </Grid.Column>
              </Grid>
            </CollapseGridColumn>
          </Grid>
        </Container>
      </HeaderContainer>
    );
  }
}
