<template>
  <div></div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import DisplayLogoSealinfo from '../components/templates/DisplayLogoSealinfo.vue';

@Component({
  components: { DisplayLogoSealinfo },
})
export default class customerRegister extends Vue {
  // pages内でコンテンツ制御（データ取得・更新などのロジックのみ）を管轄する
}
</script>
