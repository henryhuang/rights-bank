import {Component} from "react";
import {View} from '@tarojs/components'
import {} from 'taro-ui'
import ItemCard from './ItemCard'

export default class Index extends Component {

  render() {
    return (
      <View>
        { this.props.items &&
        this.props.items.map(i =>
            <ItemCard
              count={i.count.number}
              title={i.title}
              cardTags={i.cardTags}
              icon={i.icon}
              iconColor={i.iconColor}
            />
          )
        }
      </View>
    )
  }
}
