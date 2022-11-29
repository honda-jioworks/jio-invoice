<template>
  <v-card-actions>
    <v-btn @click="imgDownlord" depressed elevation="5" width="200px" color="#dcdcdc"> 画像ファイルとして保存</v-btn>
  </v-card-actions>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit, Ref } from 'nuxt-property-decorator';

@Component({
  components: {},
})
export default class imgImport extends Vue {
  @Prop({ type: String })
  selectimgbutton?: string;

  //EmitしてMoleculesのImgImportにクリックイベントを渡してる。
  @Emit()
  imgDownlord() {}
}
</script>
