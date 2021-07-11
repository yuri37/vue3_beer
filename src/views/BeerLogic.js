import { reactive, computed, toRefs } from 'vue'

export default function BeerLogic(initialList) {
  // reactiveでデータを記述
  const state = reactive({
    beerArray: initialList,
    newBeer: ''
  })
  // メソッド
  function addNew() {
    // フォームに入力された値をbeerArray配列にpush
    state.beerArray.push(state.newBeer)
    // フォームの値を空にする
    state.newBeer = ''
  }
  // 算出プロパティ
  const count = computed(() => state.beerArray.length)
  // ここまで定義してきた内容を返却
  return {
    ...toRefs(state), addNew, count
  }
}