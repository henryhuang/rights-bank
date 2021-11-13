import {Component} from "react"
import {View} from '@tarojs/components'
import {AtCard, AtTag, AtIcon} from 'taro-ui'

export default class Index extends Component {

  render() {
    return (
      <AtCard
        extra={this.props.count}
        title={this.props.title || '未知'}
        className='transferCard'
        renderIcon={<AtIcon
          prefixClass='icon'
          value={this.props.icon || 'bank-default'}
          color={this.props.iconColor || ''}
        />}
      >
        {
          this.props.cardTags &&
          this.props.cardTags.map(cardTag =>
            <View className='cardTag'>
              <AtTag active size='small'>{cardTag}</AtTag>
            </View>
          )
        }
      </AtCard>
    )
  }
}
