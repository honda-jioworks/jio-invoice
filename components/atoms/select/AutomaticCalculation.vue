<template>
  <v-select :items="items" dense outlined :rules="rules"></v-select>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
@Component({
  components: {},
})
export default class AutomaticCalculation extends Vue {
  private items: Array<string> = ['自動', '軽減自動', 'しない'];
  private rules: Array<object> = [(v: String) => !!v || '項目を選択してください'];
}
</script>
