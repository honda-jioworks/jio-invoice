<template>
  <v-subheader :return-value.sync="value_in" v-model="value_in" @blur="input"
    >ファイル名：<strong>{{ value_in }}</strong></v-subheader
  >
</template>

<script lang="ts">
import { Vue, Component, Prop, PropSync } from 'nuxt-property-decorator';
@Component({ components: {} })
export default class FileNameLabel extends Vue {
  @PropSync('value', { type: String })
  value_in!: any;
  //PropでFileName内のfileNameの値を受け取る。

  @Prop()
  fileName!: string;

  input() {
    this.$store.commit('company/set', { fileName: this.value_in });
  }
}
</script>
