import React from 'react';
import './styles/App.scss';

import classNames from 'classnames/bind';
import styles from './styles/App.scss';
import {AppRouter} from "./routes/routes";
import {BgComponent} from "./components";

const cn = classNames.bind(styles)


function App() {
  return <>
    <AppRouter/>
    <BgComponent/>
  </>
}

export default App;
