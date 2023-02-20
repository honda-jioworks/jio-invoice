<template>
  <v-row>
    <v-col>
      <v-select :items="items" label="税処理"></v-select>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
@Component({ components: {} })
export default class PicName extends Vue {
  items: Array<string> = ['内税', '外税', '合計請求', '税なし'];
}
</script>
