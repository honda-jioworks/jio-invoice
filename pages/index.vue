<template>
  <div><DashBoard :test="text" /></div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import DashBoard from '@/components/templates/DashBoard.vue';
@Component({
  components: { DashBoard },
})
export default class IndexPages extends Vue {
  private test: string = '本夛';
}
</script>
