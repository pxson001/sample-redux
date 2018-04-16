import React from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux'

import NewsScreen from '../containers/news' 
import CounterScreen from '../containers/counter'
// import DetailScreen from '../components/detailscreen'

const JMRouter = () => (
  <Router>
    <Stack key="root" title="">
      <Scene key="news" component={NewsScreen} title="News" initial={true}/>
      <Scene key="counter" component={CounterScreen} title="Counter"/>
    </Stack>
  </Router>
)

export default JMRouter