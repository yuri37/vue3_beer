<template>
  <div>
    <h4>国産ビール: {{ countJapan }} 種</h4>
    <ul>
      <li v-for="(el, index) in japan" v-bind:key="index">
        {{ el }}
      </li>
    </ul>
    <h4>外国産ビール: {{ countForeign }} 種</h4>
    <ul>
      <li v-for="(el, index) in foreign" v-bind:key="index">
        {{ el }}
      </li>
    </ul>
    <h4>合計： {{ countTotal }} 種</h4>
    <div>
      <input v-model="newJapan" placeholder="国産ビール">
      <button @click="addNewJapan">追加</button>
    </div>
    <div>
      <input v-model="newForeign" placeholder="外国産ビール">
      <button @click="addNewForeign">追加</button>
    </div>
    <p>Composition API toRefsバージョン</p>
  </div>
</template>

<script>
import { reactive, computed, toRefs } from 'vue'
export default {
  // コンポーネント設定処理
  setup(){
    // reactiveでデータを記述
    const state = reactive ({
      japan: ['サッポロ黒ラベル'],         // 国産ビールのリスト
      newJapan: '',                 // 国産ビールのテキストボックス内容
      foreign: ['ヒューガルデンホワイト'], // 外国産ビールのリスト
      newForeign: ''              // 外国産ビールのテキストボックス内容
    })

    // 国産の処理
    function addNewJapan() {
      state.japan.push(state.newJapan)
      state.newJapan = ''
    }
    const countJapan = computed(function() {
      return state.japan.length
    })

    // 外国産の処理
    function addNewForeign() {
      state.foreign.push(state.newForeign)
      state.newForeign = ''
    }
    const countForeign = computed(function() {
      return state.foreign.length
    })

    // 合計の処理
    const countTotal = computed(function() {
      return state.japan.length + state.foreign.length
    })

    // ここまで定義してきた内容を返却
    return {
      ...toRefs(state), // stateの内容をrefに変換
      addNewJapan, addNewForeign, 
      countJapan, countForeign, countTotal
    }
  }
}
</script>
