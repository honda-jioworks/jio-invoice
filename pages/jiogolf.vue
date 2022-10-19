<template>
  <GolfDashBoard />
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import GolfDashBoard from '@/components/templates/GolfDashBoard.vue'

@Component({
  components: { GolfDashBoard },
})
export default class JioGolf extends Vue {
  // pages内でコンテンツ制御（データ取得・更新などのロジックのみ）を管轄する
}
</script>
