<template>
  <v-col>
    <v-select :items="items" dense outlined :rules="rules"></v-select>
  </v-col>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
@Component({
  components: {},
})
export default class Rounding extends Vue {
  private items: Array<string> = ['切り上げ', '切り捨て', '四捨五入'];
  private rules: Array<object> = [(v: String) => !!v || '項目を選択してください'];
}
</script>
