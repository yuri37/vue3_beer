<template>
  <div>
    <h4>iOS: {{ iOSLogic.count }} 機種</h4>
    <ul>
      <li v-for="(elem, index) in iOSLogic.terminals" v-bind:key="index">
        {{ elem }}
      </li>
    </ul>
    <h4>Android: {{ androidLogic.count }} 機種</h4>
    <ul>
      <li v-for="(elem, index) in androidLogic.terminals" v-bind:key="index">
        {{ elem }}
      </li>
    </ul>
    <h4>合計： {{ countTotal }} 機種</h4>
    <div>
      <input v-model="iOSLogic.newTerminal" placeholder="iOS機種">
      <button @click="iOSLogic.addNew">追加</button>
    </div>
    <div>
      <input v-model="androidLogic.newTerminal" placeholder="Android機種">
      <button @click="androidLogic.addNew">追加</button>
    </div>
  </div>
</template>
<script>
import { computed } from 'vue'
import PhonesLogic from './PhonesLogic'
export default {
  setup() {
    // PhoneLogicでiOS/Androidの各処理ロジックを生成
    const iOSLogic = PhonesLogic(['iPhone 11'])
    const androidLogic = PhonesLogic(['Galaxy S20 5G'])
    // 総端末数を計算する算出プロパティ
    const countTotal = computed(function() {
      return iOSLogic.count.value + androidLogic.count.value
    })
    // ここまで定義してきた内容を返却
    return {
      iOSLogic, androidLogic, countTotal
    }
  }
}
</script>
