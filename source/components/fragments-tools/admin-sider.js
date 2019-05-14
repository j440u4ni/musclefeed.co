import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import Link from 'next/link';

import  logo from '../../../static/resources/images/logo-fredoka-v4@2x.png';
import '../../../static/resources/admin-account.scss';

const { Sider } = Layout;

export class AdminSider extends Component {
  constructor(props) { super(props); }

  render() {
    return (
      <React.Fragment>
          <Sider style={ { height: '100vh', overflow: 'auto', position: 'fixed', left: 0, width: '140px' }}>
            <div className="logo application-admin-logo d-flex flex-row justify-content-center py-2"><img src={logo} className="application-admin-logo-img" /></div>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} className="mt-5">
              <Menu.Item key="1"><Icon type="pie-chart" /><Link href="/admin-dashboard"><span className="nav-text application-admin-nav-link-text">Panneau de Contrôle</span></Link></Menu.Item>
              <Menu.SubMenu key="sub1" title={<span className="nav-text application-admin-nav-link-text"><Icon type="code-sandbox" />&nbsp;<span>Produits</span></span>}>
                    <Menu.Item key="2"><Icon type="barcode" /><Link href="/admin-products"><span className="nav-text application-admin-nav-link-text">Liste Produits</span></Link></Menu.Item>
                    <Menu.Item key="3"><Icon type="scan" /><Link href="/admin-product-new"><span className="nav-text application-admin-nav-link-text">Ajouter Produit</span></Link></Menu.Item>
              </Menu.SubMenu>
              <Menu.SubMenu key="sub2" title={<span className="nav-text application-admin-nav-link-text"><Icon type="box-plot" />&nbsp;<span>Commandes</span></span>}>
                <Menu.Item key="4"><Icon type="bars" /><Link href="/admin-orders"><span className="nav-text application-admin-nav-link-text">Liste Commandes</span></Link></Menu.Item>
                <Menu.Item key="5"><Icon type="credit-card" /><Link href="/admin-payments"><span className="nav-text application-admin-nav-link-text">Paiements</span></Link></Menu.Item>
              </Menu.SubMenu>
            </Menu>
          </Sider>
      </React.Fragment>
    )
  }
}