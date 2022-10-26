<template>
    <v-form v-model="valid">
      <v-container>
        <v-row>
          <v-col
            cols="12"
            md="2"
          >
            <v-text-field
              v-model="Search1"
              :rules="nameRules"
              :counter="5"
              label="検索キー1："
              required
            ></v-text-field>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';

@Component({
    components: {}
})
export default class Search1 extends Vue {
    valid: boolean = false;
    Search1 = '';
    nameRules: any = [
        (v: any) => !!v || "5文字まで",
        (v: any) => this.nameRule(v)
    ];

    private nameRule(value: any): any {
        return length <= 5 || "Name must be less than 5 characters";
    }
}
</script>