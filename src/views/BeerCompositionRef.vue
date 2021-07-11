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
    <p>Composition API refバージョン</p>
  </div>
</template>

<script>
import { ref, computed } from 'vue'
export default {
  // コンポーネント設定処理
  setup(){
    // refでデータを記述
    const japan = ref(['サッポロ黒ラベル'])
    const newJapan = ref('') 
    const foreign = ref(['ヒューガルデンホワイト'])
    const newForeign = ref('')

    // 国産の処理
    function addNewJapan() {
      japan.value.push(newJapan.value)
      newJapan.value = ''
    }
    const countJapan = computed(function() {
      return japan.value.length
    })

    // 外国産の処理
    function addNewForeign() {
      foreign.value.push(newForeign.value)
      newForeign.value = ''
    }
    const countForeign = computed(function() {
      return foreign.value.length
    })

    // 合計の処理
    const countTotal = computed(function() {
      return japan.value.length + foreign.value.length
    })

    // ここまで定義してきた内容を返却
    return {
      japan, newJapan, foreign, newForeign, 
      addNewJapan, addNewForeign, countJapan, countForeign, countTotal
    }
  }
}

</script>
