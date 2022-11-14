<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="2">口座番号：</v-col>
        <v-col cols="4"><TextBox /></v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import TextBox from '@/components/atoms/TextBox.vue';
@Component({ components: { TextBox } })
export default class AccountName extends Vue {}
</script>
