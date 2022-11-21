<template>
  <v-text-field :counter="5" solo> </v-text-field>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
@Component({ components: {} })
export default class OfficeSealTextBox extends Vue {}
</script>
