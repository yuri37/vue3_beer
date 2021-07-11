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
    <p>Option API バージョン</p>
  </div>
</template>

<script>
export default {
  // データ
  data() {
    return {
      japan: ['サッポロ黒ラベル'],         // 国産ビールのリスト
      newJapan: '',                 // 国産ビールのテキストボックス内容
      foreign: ['ヒューガルデンホワイト'], // 外国産ビールのリスト
      newForeign: ''              // 外国産ビールのテキストボックス内容
    }
  },
  
  // メソッド
  methods: {
    // japan機種を追加
    addNewJapan() {
      this.japan.push(this.newJapan)
      this.newJapan = ''
    },
    // Foreign機種を追加
    addNewForeign() {
      this.foreign.push(this.newForeign)
      this.newForeign = ''
    }
  },
  // 算出プロパティ
  computed: {
    // 国産ビール数
    countJapan() {
      return this.japan.length
    },
    // 外国産ビール数
    countForeign() {
      return this.foreign.length
    },
    // 総数
    countTotal() {
      return this.japan.length + this.foreign.length
    }
  }
}
</script>
