<template>
  <div class="paragraph00" id="summarize">
    <v-app>
      <v-form ref="form">
        <v-container fluid>
          <v-row>
            <v-col cols="12">
              <div class="paragraph1">
                <v-checkbox v-model="pushCheckbox" dense label="適格請求書発行事業者の登録通知を受けた" color="red">
                </v-checkbox>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </v-app>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit, Model } from 'nuxt-property-decorator';
import MostRecentSalesAmount from '@/components/organisms/MostRecentSalesAmount.vue';
@Component({ components: { MostRecentSalesAmount } })
export default class main01 extends Vue {
  @Emit('pushCheckbox')
  pushCheckbox(bool: boolean) {
    return bool;
  }
}
</script>
