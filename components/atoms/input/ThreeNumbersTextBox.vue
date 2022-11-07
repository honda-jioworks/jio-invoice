<template>
  <v-text-field :counter="3" solo> </v-text-field>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
@Component({ components: {} })
export default class ThreeNumbersTextBox extends Vue {}
</script>
