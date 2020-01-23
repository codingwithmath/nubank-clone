import {createAppContainer, createSwitchNavigator} from 'react-navigation'

import Main from './pages/Main/index'

const Routes = createAppContainer(createSwitchNavigator({
  Main: {
    screen: Main
  }
}))

export default Routes;