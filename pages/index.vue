<template>
  <div><DashBoard :shinozaki="test" /></div>
</template>
<!-- :shinozaki はプロパティ　子のクラス変数とも言い換えれる　testは変数 -->

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
