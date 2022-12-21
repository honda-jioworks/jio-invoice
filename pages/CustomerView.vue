<template>
  <div><CustomerTable /></div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import CustomerTable from '~/components/organisms/CustomerTable.vue';

@Component({
  components: { CustomerTable },
})
export default class CustomerView extends Vue {
  // pages内でコンテンツ制御（データ取得・更新などのロジックのみ）を管轄する
}
</script>
