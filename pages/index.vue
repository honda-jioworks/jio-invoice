<template>
  <v-sparkline :value="value" :gradient="gradient" :smooth="radius || false" :padding="padding" :line-width="width"
    :stroke-linecap="lineCap" :gradient-direction="gradientDirection" :fill="fill" :type="type"
    :auto-line-width="autoLineWidth" auto-draw></v-sparkline>
</template>
<script lang="ts">
<<<<<<< HEAD
import { Vue, Component } from 'nuxt-property-decorator'
import DashBoard from '@/components/templates/DashBoard.vue';
=======
import { Vue, Component } from 'nuxt-property-decorator';
import DashBoard from '~/components/templates/DashBoard.vue';

>>>>>>> 3e6623a58dfd6d8347698d463ba5c774c2dcfd6c
@Component({
  components:{ DashBoard}
})
export default class IndexPage extends Vue {
 gradients: Array<Array<string>> = [
  ['222'],
  ['#42b3f4'],
  ['red', 'orange', 'yellow'],
  ['purple', 'violet'],
  ['#00c6ff', '#F0F', '#FF0'],
  ['#f72047', '#ffd200', '#1feaea'],
];

    width: number= 2;
    radius: number= 10;
    padding: number= 8;
    lineCap: string= 'round';
    gradient: Array<string> = this.gradients[5];
    value: Array<number>= [0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0];
    gradientDirection: string= 'top';
    fill: boolean = false;
    type: string = 'trend';
    autoLineWidth: boolean = false;
  }
</script>
