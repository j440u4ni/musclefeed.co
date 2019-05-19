import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import Link from 'next/link';

import  logo from '../../../static/resources/images/logo-fredokav3@2x.png';
import '../../../static/resources/admin-account.scss';

const { Sider } = Layout;

export class AdminSider extends Component {
  constructor(props) { super(props); }

  render() {
    return (
      <React.Fragment>
          <Sider style={ { height: '100vh', overflow: 'auto', position: 'fixed', left: 0, width: '140px' }} collapsed={true} collapsedWidth={60}>
            <div className="logo application-admin-logo d-flex flex-row justify-content-center align-items-center py-2"><img src={logo} className="application-admin-logo" /></div>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} className="mt-5">
              <Menu.Item key="1"><Link href="/admin-dashboard"><Icon type="pie-chart" className="admin-sider-icon" /></Link><span className="nav-text application-admin-nav-link-text">Panneau de Contrôle</span></Menu.Item>
              <Menu.SubMenu key="sub1" title={<span className="nav-text application-admin-nav-link-text"><Icon type="code-sandbox" className="admin-sider-icon" />&nbsp;<span>Produits</span></span>}>
                    <Menu.Item key="2"><Icon type="barcode" /><Link href="/admin-products"><span className="nav-text application-admin-nav-link-text">Produits</span></Link></Menu.Item>
                    <Menu.Item key="3"><Icon type="scan" /><Link href="/admin-product-new"><span className="nav-text application-admin-nav-link-text">Ajouter</span></Link></Menu.Item>
              </Menu.SubMenu>
              <Menu.SubMenu key="sub2" title={<span className="nav-text application-admin-nav-link-text"><Icon type="box-plot" className="admin-sider-icon" />&nbsp;<span>Commandes</span></span>}>
                <Menu.Item key="4"><Icon type="bars" /><Link href="/admin-orders"><span className="nav-text application-admin-nav-link-text">Commandes</span></Link></Menu.Item>
                <Menu.Item key="5"><Icon type="credit-card" /><Link href="/admin-payments"><span className="nav-text application-admin-nav-link-text">Paiements</span></Link></Menu.Item>
              </Menu.SubMenu>
            </Menu>
          </Sider>
      </React.Fragment>
    )
  }
}