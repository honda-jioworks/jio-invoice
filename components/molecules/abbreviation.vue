<template>
    <v-form v-model="valid">
        <v-container>
            <v-row>
                <v-col cols="12" md="4">
                    <v-text-field v-model="abbreviation" :rules="nameRules" :counter="10" label="略称：">
                    </v-text-field>
                </v-col>
            </v-row>
        </v-container>
    </v-form>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
@Component({
    components: {},
})
export default class abbreviatation extends Vue {
    valid: boolean = false;
    abbreviation = '';
    nameRules: Array<any> = [(v: any) => !!v || "10文字まで",
    (v: any) => this.nameRule(v)];
    private nameRule(value: any): any {
        return length <= 10 || "Name must be less than 10 characters";
    };
}
</script>