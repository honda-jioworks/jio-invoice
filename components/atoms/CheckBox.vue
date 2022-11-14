<template>
  <v-checkbox v-model="checkbox"></v-checkbox>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
@Component({})
export default class CheckBox extends Vue {
  private checkbox: boolean = true;
}
</script>
