import { reactive, computed, toRefs } from 'vue'
export default function PhonesLogic(initialList) {
  // reactiveでデータを記述
  const state = reactive({
    terminals: initialList,
    newTerminal: ''
  })
  // メソッド
  function addNew() {
    state.terminals.push(state.newTerminal)
    state.newTerminal = ''
  }
  // 算出プロパティ
  const count = computed(function () {
    return state.terminals.length
  })
  // ここまで定義してきた内容を返却
  return {
    ...toRefs(state), addNew, count
  }
}