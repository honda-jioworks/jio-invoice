<template>
  <v-card-actions>
    <v-btn v-model="clickVal" @click="clickSelect" depressed elevation="5" width="200px" color="#dcdcdc">{{
      selectimgbutton
    }}</v-btn>
  </v-card-actions>

  <!--button>クリア</button-->
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit, Ref } from 'nuxt-property-decorator';

@Component({
  components: {},
})
export default class SelectImgbutton extends Vue {
  public clickVal: string = '';
  @Prop({ type: String })
  selectimgbutton?: string;

  //EmitしてMoleculesのSelectImgbuttonにクリックイベントを渡してる。
  @Emit()
  clickSelect() {
    return this.clickVal;
  }
}
</script>
