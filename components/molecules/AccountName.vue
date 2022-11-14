<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="10" sm="7" lg="5">
          <v-text-field label="口座名義" :rules="textRules" outlined></v-text-field>
        </v-col>
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
