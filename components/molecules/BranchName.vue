<template>
  <div>
    <v-col cols="10" sm="5" lg="3">
      <v-text-field label="支店名" :rules="textRules" outlined></v-text-field>
    </v-col>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import TextBox from '@/components/atoms/TextBox.vue';
@Component({ components: { TextBox } })
export default class BranchName extends Vue {}
</script>
