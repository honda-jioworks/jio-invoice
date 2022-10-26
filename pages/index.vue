<template>
  <v-sparkline
    :value="value"
    :gradient="gradient"
    :smooth="radius || false"
    :padding="padding"
    :line-width="width"
    :stroke-linecap="lineCap"
    :gradient-direction="gradientDirection"
    :fill="fill"
    :type="type"
    :auto-line-width="autoLineWidth"
    auto-draw
  ></v-sparkline>
</template>
<script>
  const gradients = [
    ['#222'],
    ['#42b3f4'],
    ['red', 'orange', 'yellow'],
    ['purple', 'violet'],
    ['#00c6ff', '#F0F', '#FF0'],
    ['#f72047', '#ffd200', '#1feaea'],
  ]
  

  export default class IndecPage extends vue
export type postDataResult = {
  id:string
  content: string
  data: {title:string, date:string}
  isEmpty: boolean
  excerpt: string
  orig: string
}{
    data: () => ({
      width: 2,
      radius: 10,
      padding: 8,
      lineCap: 'round',
      gradient: Array<string> = this.gradientsgradients[5];
      value: [0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0],
      gradientDirection: 'top',
      gradients,
      fill: false,
      type: 'trend',
      autoLineWidth: false,
    }),
  }
</script>
<!-- <template>
  <div><DashBoard /></div>
</template>

<script lang="ts">

Vue.config.devtools = true;
import { Vue, Component } from 'nuxt-property-decorator'
import DashBoard from '~/components/templates/DashBoard.vue'



@Component({
  components: { DashBoard },
})
export default class IndexPage extends Vue {
  // pages内でコンテンツ制御（データ取得・更新などのロジックのみ）を管轄する
}
</script>
<script>
  const gradients = [
    ['#222'],
    ['#42b3f4'],
    ['red', 'orange', 'yellow'],
    ['purple', 'violet'],
    ['#00c6ff', '#F0F', '#FF0'],
    ['#f72047', '#ffd200', '#1feaea'],
  ]

  export default {
    data: () => ({
      width: 2,
      radius: 10,
      padding: 8,
      lineCap: 'round',
      gradient: gradients[5],
      value: [0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0],
      gradientDirection: 'top',
      gradients,
      fill: false,
      type: 'trend',
      autoLineWidth: false,
    }),
  }
</script> -->
<!-- <template>
  <div><DashBoard /></div>
</template>

<script lang="ts">
Vue.config.devtools = true;
import { Vue, Component } from 'nuxt-property-decorator'
import DashBoard from '~/components/templates/DashBoard.vue'

@Component({
  components: { DashBoard },
})
export default class IndexPage extends Vue {
  // pages内でコンテンツ制御（データ取得・更新などのロジックのみ）を管轄する
}
</script> -->
