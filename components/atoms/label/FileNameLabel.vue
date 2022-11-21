<template>
  <v-subheader
    >ファイル名：<strong>{{ fileName }}</strong></v-subheader
  >
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator';
@Component({ components: {} })
export default class FileNameLabel extends Vue {
  @Prop()
  fileName!: string;
}
</script>
