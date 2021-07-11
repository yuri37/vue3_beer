<template>
  <div>
    <h4>国産ビール: {{ japanLogic.count.value }} 種</h4>
    <ul>
      <li v-for="(el, index) in japanLogic.beerArray.value" v-bind:key="index">
        {{ el }}
      </li>
    </ul>
    <h4>外国産ビール: {{ foreignLogic.count.value }} 種</h4>
    <ul>
      <li v-for="(el, index) in foreignLogic.beerArray.value" v-bind:key="index">
        {{ el }}
      </li>
    </ul>
    <h4>合計： {{ countTotal }} 種</h4>
    <div>
      <input v-model="japanLogic.newBeer.value" placeholder="国産ビール">
      <button @click="japanLogic.addNew">追加</button>
    </div>
    <div>
      <input v-model="foreignLogic.newBeer.value" placeholder="外国産ビール">
      <button @click="foreignLogic.addNew">追加</button>
    </div>
    <p>Composition API Logicバージョン</p>
  </div>
</template>

<script>
import { computed, onMounted } from 'vue'
import BeerLogic from './BeerLogic'
export default {
  setup() {
    // BeerLogicで国産/外国産の各処理ロジックを生成
    const japanLogic = BeerLogic(['サッポロ黒ラベル'])
    const foreignLogic = BeerLogic(['ヒューガルデンホワイト'])

    // 総数を計算する算出プロパティ
    const countTotal = computed(() => japanLogic.count.value + foreignLogic.count.value)
    
    onMounted(()=> console.log('コンポーネントがマウントされました'))
    
    // ここまで定義してきた内容を返却
    return {
      japanLogic, foreignLogic, countTotal
    }
  }
}
</script>
