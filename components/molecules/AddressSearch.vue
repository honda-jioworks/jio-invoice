  <template>
    <v-row>
        <v-col>
            <v-text-field cols="2" label=〒></v-text-field>
        </v-col>
        <v-col>
            <v-text-field cols="4" ></v-text-field>
        </v-col>
        <v-col>
            <v-btn >住所を検索</v-btn>
        </v-col>
    </v-row>
  </template>

  <script lang="ts">
  import { Vue, Component,} from 'nuxt-property-decorator';
  @Component({ components: {} })
  export default class AddressSearch extends Vue {
    
  }
</script>