import React from 'react'
import { Picker, View, Text } from '@tarojs/components'
import { AtForm, AtInput, AtButton, AtList, AtListItem, AtInputNumber } from 'taro-ui'

import './index.less'

const typeRange = [
  {
    name: '默认',
    value: 'default'
  },
  {
    name: '招商银行',
    value: 'bank-cmb'
  }
]

export default class Index extends React.Component {
  constructor () {
    super(...arguments)
    this.state = {
      name: '',
      type: 0,
      initCountNumber : 4,
      initCountPeriod: 'y',
      cardTags: [],
      refreshDate: '12-31',
      errors: []
    }
  }
  handleChange = (name, value) => {
    if (name === 'refreshDate') {
      this.setState({
        [name]: value.detail.value
      })
    } else if ('type' === name) {
      this.setState({
        [name]: value.detail.value
      })
    } else if (name && value) {
      this.setState({
        [name]: value
      })
    }
  }
  onSubmit = () => {
    const values = {}
    Object.assign(values, this.state)
    delete values.errors
    values.type = typeRange[values.type].value
    console.log(values)
  }
  render () {
    return (
      <View>
        <View className='page-body'>
          <AtForm>
            <AtInput
              error={this.state.errors.indexOf('name') > -1}
              name='name'
              title='名称'
              type='text'
              value={this.state.name}
              onChange={this.handleChange.bind(this, 'name')}
            />

            <View className='page-section'>
              <Text className='page-section-title'>权益所在平台</Text>
              <View className='page-section-content'>
                <Picker
                  mode='selector'
                  range={typeRange}
                  value={this.state.type}
                  rangeKey='name'
                  onChange={this.handleChange.bind(this, 'type')}
                >
                  <AtList>
                    <AtListItem
                      title='请选择'
                      extraText={typeRange[this.state.type].name}
                    />
                  </AtList>
                </Picker>
              </View>
            </View>

            <View className='page-section'>
              <Text className='page-section-title'>权益次数</Text>
              <View className='page-section-content'>
                <AtInputNumber
                  min={1}
                  step={1}
                  value={this.state.initCountNumber}
                  onChange={this.handleChange.bind(this, 'initCountNumber')}
                />
              </View>
            </View>
            <AtInput
              name='initCountPeriod'
              title='周期'
              type='text'
              value={this.state.initCountPeriod}
              onChange={this.handleChange.bind(this, 'initCountPeriod')}
            />
            <AtInput
              name='cardTags'
              title='标签'
              type='text'
              value={this.state.cardTags}
              onChange={this.handleChange.bind(this, 'cardTags')}
            />
            <View className='page-section'>
              <Text className='page-section-title'>最近更新日期</Text>
              <View className='page-section-content'>
                <Picker
                  mode='date'
                  value={this.state.refreshDate}
                  onChange={this.handleChange.bind(this, 'refreshDate')}
                >
                  <AtList>
                    <AtListItem title='请选择日期' extraText={this.state.refreshDate} />
                  </AtList>
                </Picker>

              </View>
            </View>
            <View className='page-section'>
              <View
                className='page-section-content'
              >
                <AtButton type='primary' onClick={this.onSubmit}>提交</AtButton>
              </View>
            </View>
          </AtForm>
        </View>
      </View>
    )
  }
}
