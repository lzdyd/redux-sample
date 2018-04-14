import React, { Component } from 'react';
import autoBind from 'react-autobind';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {
  Container,
  Grid,
  Icon,
  Menu,
  Dropdown
} from 'semantic-ui-react';

const Header = styled.header`
  background-color: #797cff;
  
  .header__hamburger {
    display: none !important;
  }
  
  .nav-menu {
    display: block !important;
  }
  
  &.mobile {
    .header__hamburger {
      display: block !important;
    }
    
    .nav-menu {
      display: none !important;
    }
  }
  
  &.mobile &.collapse {
    .nav-menu {
      display: block !important;
    }
  }
`;

const StyledIcon = styled(Icon)`
  &&& {
    padding-top:6px;
    font-size: 2rem;
    color: #2d41c3
  }
`;

const HamburgerContainer = styled.div`
  position: relative;
  float: right;
  width: 2.25rem;
  height: 2rem;
  padding-top: 0.9375rem;
  cursor: pointer;
`;

const Hamburger = styled.span`
  position: relative;
  display: block;
  width: 2.25rem;
  height: 0.25rem;
  background-color: #fff;
  border-radius: 0.25rem;
  transition-timing-function: cubic-bezier(.55,.055,.675,.19);
  transition-duration: 75ms;
  
  ::before, ::after {
    position: absolute;
    content: '';
    width: 2.25rem;
    height: 0.25rem;
    top: -0.625rem;
    border-radius: 0.25rem;
    background-color: #fff;
    transition: top 75ms ease .12s, opacity 75ms ease;
  }
  
  ::after {
    top: 0.625rem;
  }
  
  &.active {
    transition-delay: .12s;
    transition-timing-function: cubic-bezier(.215,.61,.355,1);
    transform: rotate(45deg);
    
    ::before {
      top: 0;
      transition: top 75ms ease,opacity 75ms ease .12s;
      opacity: 0;
    }
    
    ::after {
      top: 0;
      transition: bottom 75ms ease,transform 75ms cubic-bezier(.215,.61,.355,1) .12s;
      transform: rotate(-90deg);
    }
  }
`;

const StyledNavMenu = styled(Grid.Column)`
  &&& {
    //display: none !important;
    
    &.collapse {
      display: block !important;
    }
   
    &.inline-show {

      .nav-list {
        li {
          display: inline-block;
        }
      }
    }
  }
`;

const MenuLinks = styled.nav`
  .nav-list__item {
    cursor: pointer;
    padding: 0.25rem;
    font-size: 1rem;
  }
  
  .nav-list__item > * {
    color: #fff;
  }
`;

export default class Layout extends Component {
  constructor (props) {
    super(props);
    autoBind(this);

    this.state = {
      headerCollapse: false,
      mobile: false
    };
  }

  componentWillMount () {
    if (window.innerWidth < 992) {
      this.setState({
        mobile: true
      });
    }
  }

  componentDidMount () {
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  onHamburgerClick () {
    this.setState({
      headerCollapse: !this.state.headerCollapse
    });
  }

  updateWindowDimensions () {
    this.setState({
      mobile: (window.innerWidth < 992)
    });
  }

  render () {
    const options = [
      { key: 1, text: 'Choice 1', value: 1 },
      { key: 2, text: 'Choice 2', value: 2 },
      { key: 3, text: 'Choice 3', value: 3 }
    ];

    return (
      <Header className={`header${this.state.headerCollapse ? ' header-collapse' : ''}${this.state.mobile ? ' mobile' : ''}`}>
        <Container>
          <Grid columns={3} padded>
            <Grid.Column width={4}>
              <Link to="/"><StyledIcon name='umbrella'/></Link>
            </Grid.Column>

            <Grid.Column className="header__hamburger" width={12} floated="right">
              <HamburgerContainer onClick={this.onHamburgerClick}>
                <Hamburger className={this.state.headerCollapse ? 'active' : ''}></Hamburger>
              </HamburgerContainer>
            </Grid.Column>

            <StyledNavMenu width={16} computer={8} className={`nav-menu${this.state.headerCollapse ? ' collapse' : ''}${!this.state.mobile ? ' inline-show' : ''} reset-padding`}>
              <Grid>
                <Grid.Column width={16} computer={8}>
                  <MenuLinks>
                    <ul className="nav-list reset-padding reset-list-style-type">
                      <li className="nav-list__item"><Link to="/articles">Articles</Link></li>
                      <li className="nav-list__item"><Link to="/tables">Tables</Link></li>
                      <li className="nav-list__item"><Link to="/charts">Charts</Link></li>
                    </ul>
                  </MenuLinks>
                </Grid.Column>

                <Grid.Column>
                  <div>login...</div>
                </Grid.Column>

                {/*<Grid.Column width={8}>*/}
                  {/*<Menu compact>*/}
                    {/*<Dropdown text='Dropdown' options={options} simple item />*/}
                  {/*</Menu>*/}
                {/*</Grid.Column>*/}
              </Grid>
            </StyledNavMenu>
          </Grid>
        </Container>
      </Header>
    );
  }
}
