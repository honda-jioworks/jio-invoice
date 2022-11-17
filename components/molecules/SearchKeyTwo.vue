<template>
  <div>
    <v-container>
      <v-row>
        <v-col>
          <v-text-field label="検索キー2" :rules="textRules"></v-text-field>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import TextBox from '@/components/atoms/TextBox.vue';
@Component({ components: { TextBox } })
export default class SearchKeyTwo extends Vue {}
</script>
