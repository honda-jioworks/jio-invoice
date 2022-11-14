<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="2">メモ:</v-col>
        <v-col cols="5"><TextBox /></v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import TextBox from '@/components/atoms/TextBox.vue';
@Component({ components: { TextBox } })
export default class Memo extends Vue {}
</script>
