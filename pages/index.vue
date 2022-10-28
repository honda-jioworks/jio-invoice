<template>
  <div><DashBoard :shinozaki="test" /></div>
</template>
<!-- :shinozaki はプロパティ -->

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import DashBoard from '~/components/templates/DashBoard.vue';

@Component({
  components: { DashBoard },
})
export default class IndexPage extends Vue {
  test: string = 'さとう';
}
</script>
