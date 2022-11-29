<template>
  <v-btn @click="btnClick">{{ btnName }}</v-btn>
</template>
<script lang="ts">
import { Vue, Component, Prop, Ref, Emit } from 'nuxt-property-decorator';
@Component({ components: {} })
export default class SelectFileBtn extends Vue {
  @Prop()
  btnName!: string;

  //MoleculesのFileLocationのSelectImgにEmitしてクリックイベントを渡してる
  @Emit()
  btnClick() {}
}
</script>
