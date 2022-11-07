<template>
  <div class="paragraph05">
    <v-container>
      <v-form ref="form">
        <v-row>
          <v-col cols="3" dense>
            <div class="paragraph2">
              <subhedder>登録番号:</subhedder>
            </div>
          </v-col>
          <v-col cols="1" dense>
            <div class="paragraph3">
              <label>T</label>
            </div>
          </v-col>
          <v-col cols="8" dense>
            <div class="paragraph4">
              <v-text-field :disabled="!pushCheckbox" outlined dense hide-details color="bkack"> </v-text-field>
            </div>
          </v-col>
        </v-row>
      </v-form>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit, Model } from 'nuxt-property-decorator';
import MostRecentSalesAmount from '@/components/organisms/MostRecentSalesAmount.vue';
@Component({ components: { MostRecentSalesAmount } })
export default class main02 extends Vue {
  pushCheckbox = false;
}
</script>
