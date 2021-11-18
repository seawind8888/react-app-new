
import { Switch, Route, Link } from 'react-router-dom';
import React, { Children } from 'react';
// import XRender from './pages/x-render'
// import Modal from './pages/modal'
// import ChildrenTest from './pages/children';
// import CloudShop from './pages/cloud-shop'
// import Context from './pages/context';
// import Hooks from './pages/hooks'
// import Mobx from './pages/mobx'
import Cloud from './pages/cloud-react'
// import Element from './pages/element-react'
// import Business from './pages/cloud-business'

import Echarts from './pages/react-echarts'
import "cloud-react/dist/cloud-react.css";

const App = () => (
  <div>
    <div>
      {/* <Link to='/x-render'>x-render</Link> */}
      {/* <Link to='/modal'>modal</Link>
      <Link to='/children'>children</Link>
      <Link to='/cloud-shop'>cloud-shop</Link>
      <Link to='/context'>context</Link>
      <Link to='/hooks'>hooks</Link>
      <Link to='/mobx'>mobx</Link> |  */}
      <Link to='/cloud'>cloud-react</Link> |
      {/* <Link to='/element'>element</Link> |
      <Link to='/business'>business</Link> |
      <Link to='/react-echarts'>echarts</Link> */}
    </div>
    <Switch>
      {/* <Route component={XRender} path='/x-render'></Route> */}
      {/* <Route component={Modal} path='/modal'></Route>
      <Route component={ChildrenTest} path='/children'></Route>
      <Route component={CloudShop} path='/cloud-shop'></Route>
      <Route component={Context} path='/context'></Route>
      <Route component={Hooks} path='/hooks'></Route>
      <Route component={Mobx} path='/mobx'></Route> */}
      <Route component={Cloud} path='/cloud'></Route>
      {/* <Route component={Business} path='/business'></Route>
      <Route component={Element} path='/element'></Route> */}
      <Route component={Echarts} path='/react-echarts'></Route>
    </Switch>
  </div>

);

export default App;