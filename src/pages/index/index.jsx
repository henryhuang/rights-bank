import { Component } from 'react'
import { View } from '@tarojs/components'
import { AtTabBar } from 'taro-ui'

import Menus from './components/menus'
import Settings from './components/settings'
import './index.less'

export default class Index extends Component {

  constructor() {
    super(...arguments)
    this.state = {
      current: 0
    }
  }

  handleClick (value) {
    this.setState({
      current: value
    })
  }

  render () {
    const component = this.state.current === 0 ? <Menus/> : <Settings/>
    return (
      <View className='index'>
        {component}
        <AtTabBar
          tabList={[
            { title: '权益', iconType: 'money' },
            { title: '设置', iconType: 'settings' },
          ]}
          onClick={this.handleClick.bind(this)}
          current={this.state.current}
          fixed
        />
      </View>
    )
  }
}
