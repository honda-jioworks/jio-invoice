<template>
  <v-card-actions>
    <v-btn depressed elevation="5" width="200px" color="#dcdcdc" @click="createSeal">会社印を作成する</v-btn>
  </v-card-actions>
</template>

<script lang="ts">
import { url } from 'inspector';
import { Vue, Component, Prop, Emit } from 'nuxt-property-decorator';
@Component({
  components: {},
})
export default class CreateCompanySeal extends Vue {
  //EmitしてMoleculesのCreateCompanySealにクリックイベントを渡してる。
  @Emit()
  createSeal() {}
}
</script>
