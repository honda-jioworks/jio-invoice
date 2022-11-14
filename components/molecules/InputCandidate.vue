<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="1"><CheckBox /></v-col>
        <v-col cols="5">入力候補に表示しない</v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import CheckBox from '@/components/atoms/CheckBox.vue';
@Component({ components: { CheckBox } })
export default class InputCandidate extends Vue {}
</script>
