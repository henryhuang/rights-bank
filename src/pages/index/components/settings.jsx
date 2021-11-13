import {Component} from "react";
import { View } from '@tarojs/components'
import { AtList, AtListItem } from 'taro-ui'

export default class Index extends Component {

  render() {
    return (
      <View>
        <AtList>
          <AtListItem title='标题文字' note='描述信息' />
          <AtListItem title='标题文字' note='描述信息' arrow='right' />
          <AtListItem
            arrow='right'
            note='描述信息'
            title='标题文字标题文字标题文字标题文字标题文字'
            extraText='详细信息详细信息详细信息详细信息'
          />
        </AtList>
      </View>
    )
  }
}
