<template>
  <div>
    <v-container>
      <v-row>
        <v-col>
          <v-text-field
            label="口座名義"
            :rules="textRules"
            v-model="textAccountname"
            @input="scanAccountname"
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Emit } from 'nuxt-property-decorator';
import TextBox from '@/components/atoms/TextBox.vue';
@Component({ components: { TextBox } })
export default class AccountName extends Vue {
  public textAccountname: string = '';
  textRules: Array<Object> = [(v: string) => !!v || '項目を入力してください'];
  @Emit()
  scanAccountname() {
    return this.textAccountname;
  }
}
</script>
