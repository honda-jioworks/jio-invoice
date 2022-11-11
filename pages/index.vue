<!-- <template>
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
<!-- <template> -->
<!-- <div><DashBoard /></div>
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
  <v-card flat tile>
    <v-toolbar color="cyan" dark>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Application</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-toolbar>

    <v-container v-for="type in types" :key="type" class="grey lighten-4" fluid>
      <v-subheader>{{ type }}</v-subheader>

      <v-row>
        <v-spacer></v-spacer>
        <v-col v-for="card in cards" :key="card" cols="12" sm="6" md="4">
          <v-card>
            <v-img :src="`https://picsum.photos/200/300?image=${getImage()}`" height="300px">
              <span class="text-h5 white--text pl-4 pt-4 d-inline-block" v-text="card"></span>
            </v-img>

            <v-card-actions class="white justify-center">
              <v-btn v-for="(social, i) in socials" :key="i" :color="social.color" class="white--text" fab icon small>
                <v-icon>{{ social.icon }}</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator';
@Component({
  components: {},
})
export default class indexPage extends Vue {
  types: Array<string> = ['Places to Be', 'Places to See'];
  cards: Array<string> = ['Good', 'Best', 'Finest'];
  socials: Array<Object> = [
    {
      icon: 'mdi-facebook',
      color: 'indigo',
    },
    {
      icon: 'mdi-linkedin',
      color: 'cyan darken-1',
    },
    {
      icon: 'mdi-instagram',
      color: 'red lighten-3',
    },
  ];

  getImage(): number {
    const min: number = 550;
    const max: number = 560;

    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
</script> -->

<template>
  <div><DashBoard :text="test" /></div>
</template>
<!-- :shinozaki はプロパティ　子のクラス変数とも言い換えれる　testは変数 -->

<script lang="ts">
Vue.config.devtools = true;
import { Vue, Component } from 'nuxt-property-decorator';
import DashBoard from '~/components/templates/DashBoard.vue';

@Component({
  components: { DashBoard },
})
export default class IndexPage extends Vue {
  // pages内でコンテンツ制御（データ取得・更新などのロジックのみ）を管轄する
}
</script>
<!-- <template>
  <div><DashBoard v-bind:yamazaki="test" /></div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import DashBoard from '~/components/templates/DashBoard.vue';

@Component({
  components: { DashBoard },
})
export default class IndexPage extends Vue {
  // pages内でコンテンツ制御（データ取得・更新などのロジックのみ）を管轄する

  test: string = 'ほんだ';

}
</script>
<!-- ダッシュボードのプロップyamazakiはダッシュボード -->
<!-- <img src="index.vue/test" alt="テスト">
 -->
