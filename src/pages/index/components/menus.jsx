import {Component} from 'react'
import {AtTabs, AtTabsPane} from 'taro-ui'
import lounge from '@/data/lounge.json'
import transfer from '@/data/transfer.json'
import physicalExam from '@/data/physicalExam.json'
import ItemCardGroup from '@/components/ItemCardGroup'

export default class Index extends Component {

  constructor() {
    super(...arguments)
    this.state = {
      current: 0,
    }
  }

  handleClick(value) {
    this.setState({
      current: value
    })
  }

  render() {
    const tabList = [{title: '休息室'}, {title: '接送机'}, {title: '体检洗牙'}, {title: '酒店'}, {title: '其他'}]
    return (
      <AtTabs current={this.state.current} tabList={tabList} onClick={this.handleClick.bind(this)}>
        <AtTabsPane current={this.state.current} index={0}>
          <ItemCardGroup items={lounge} />
        </AtTabsPane>
        <AtTabsPane current={this.state.current} index={1}>
          <ItemCardGroup items={transfer} />
        </AtTabsPane>
        <AtTabsPane current={this.state.current} index={2}>
          <ItemCardGroup items={physicalExam} />
        </AtTabsPane>
        <AtTabsPane current={this.state.current} index={4}>
          <ItemCardGroup />
        </AtTabsPane>
      </AtTabs>
    )
  }
}
