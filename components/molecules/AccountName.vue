<template>
  <div>
    <v-container>
      <v-row>
        <v-col>
          <v-text-field label="口座名義" :rules="textRules" v-model="textAccountname"></v-text-field>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Emit, PropSync } from 'nuxt-property-decorator';
import TextBox from '@/components/atoms/TextBox.vue';
@Component({ components: { TextBox } })
export default class AccountName extends Vue {
  @PropSync('value', { type: String })
  textAccountname!: any;
  textRules: Array<Object> = [(v: string) => !!v || '項目を入力してください'];
}
</script>
