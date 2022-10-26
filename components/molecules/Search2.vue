<template>
    <v-form v-model="valid">
      <v-container>
        <v-row>
          <v-col
            cols="12"
            md="2"
          >
            <v-text-field
              v-model="Search2"
              :rules="nameRules"
              :counter="5"
              label="検索キー2："
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
export default class Search2 extends Vue {
    valid: boolean = false;
    Search2 = '';
    nameRules: any = [
        (v: any) => !!v || "5文字まで",
        (v: any) => this.nameRule(v)
    ];

    private nameRule(value: any): any {
        return length <= 5 || "Name must be less than 5 characters";
    }
}
</script>