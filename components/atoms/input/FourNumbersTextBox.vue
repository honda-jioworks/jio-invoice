<template>
  <v-text-field :counter="4" solo> </v-text-field>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
@Component({ components: {} })
export default class FourNumbersTextBox extends Vue {}
</script>
