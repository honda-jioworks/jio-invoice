<template>
  <div>
    <CaddyDashBoard v-if="pageName === 'caddy'" />
    <GolfCourseDashBoard v-if="pageName === 'golfCourse'" />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import CaddyDashBoard from '~/components/templates/CaddyDashBoard.vue';
import GolfCourseDashBoard from '~/components/templates/GolfCourseDashBoard.vue';

@Component({
  components: { CaddyDashBoard, GolfCourseDashBoard },
})
export default class JioGolf extends Vue {
  // pages内でコンテンツ制御（データ取得・更新などのロジックのみ）を管轄する
  private pageName: string = '';

  // コンポーネントが作成されたタイミングで実行（onloadに近い動き）
  created(): void {
    this.initData();
  }

  // 初期処理（RESTApiで情報を取得 or 認証処理が必要になる）
  async initData(): Promise<void> {}
}
</script>
