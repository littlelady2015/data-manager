import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;


class Header extends Component {
  // state = {
  //   current: 'mail',
  // }
  // handleClick = (e) => {
  //   console.log('click ', e);
  //   this.setState({
  //     current: e.key,
  //   });
  // }
  render() {
    return (
      <header className="header-wrapper">
        <Menu
          // onClick={this.handleClick}
          // selectedKeys={[this.state.current]}
          mode="horizontal"
        >
          <Menu.Item key="home">
            <Link to='/'>首页</Link>
          </Menu.Item>
          <Menu.Item key="flash">
            <Link to='/flash'>快讯</Link>
          </Menu.Item>
          <Menu.Item key="calender">
            <Link to='/calender'>日历</Link>
          </Menu.Item>
        </Menu>
        {this.props.children}
      </header>
    )
  }
}

export default Header
