<template>
    <v-form v-model="valid">
        <v-container>
            <v-row>
                <v-col cols="12" md="5">
                    <v-text-field v-model="CustomerName" :rules="nameRules" :counter="20" label="得意先名：" required>
                    </v-text-field>
                </v-col>
                <v-btn small>会社を検索</v-btn>
            </v-row>
        </v-container>
    </v-form>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';

@Component({
    components: {}
})
export default class CustomerName extends Vue {
    valid: boolean = false;
    CustomerName = '';
    nameRules: any = [
        (v: any) => !!v || "20文字まで",
        (v: any) => this.nameRule(v)
    ];

    private nameRule(value: any): any {
        return length <= 20 || "Name must be less than 20 characters";
    }
}
</script>