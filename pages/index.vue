<template>
  <div><DashBoard /></div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import DashBoard from '~/components/templates/DashBoard.vue'

@Component({
  components: { DashBoard },
})
export default class IndexPage extends Vue {
  // pages内でコンテンツ制御（データ取得・更新などのロジックのみ）を管轄する
}
</script>
