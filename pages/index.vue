<template>
  <div><DashBoard :text="test" /></div>
</template>
<!-- :shinozaki はプロパティ　子のクラス変数とも言い換えれる　testは変数 -->

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import DashBoard from '~/components/templates/DashBoard.vue';

@Component({
  components: { DashBoard },
})
export default class IndexPage extends Vue {
  // pages内でコンテンツ制御（データ取得・更新などのロジックのみ）を管轄する
  private test: string = '本夛';
}
</script>
