  <template>
    <v-row>
        <v-col>
            <v-text-field v-model="addressOne" @input="scanOne" label=〒></v-text-field>
        </v-col>
        <v-col>
            <v-text-field v-model="addressTwo" @input="scanTwo" ></v-text-field>
        </v-col>
        <v-col>
            <v-btn >住所を検索</v-btn>
        </v-col>
    </v-row>
  </template>

  <script lang="ts">
  import { Vue, Component, Emit} from 'nuxt-property-decorator';
  @Component({ components: {} })
  export default class AddressSearch extends Vue {
    addressOne: string ='';
    addressTwo: string ='';
  
  @Emit()
  scanOne(): string{
    return this.addressOne;
  }

  @Emit()
  scanTwo(): string{
    return this.addressTwo;
  }
}
</script>