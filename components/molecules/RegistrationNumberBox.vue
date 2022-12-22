<template>
  <div>
    <v-row dense>
      <v-col cols="2">
        <div class="item01">
          <label>登録番号:</label>
        </div>
      </v-col>
      <div class="wrap02">
        <p>T</p>
      </div>
      <v-col cols="9">
        <div class="wrap03">
          <v-text-field counter="13" :disabled="!checkValue" outlined color="black" @input="scanCheck"> </v-text-field>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from 'nuxt-property-decorator';
@Component({})
export default class RegistrationNumberBox extends Vue {
  @Prop({ type: Boolean, required: true, default: false })
  checkValue!: boolean;

  @Emit()
  scanCheck(val: string): string {
    return val;
  }
}
</script>

<style lang="scss" scoped>
.item01 {
  margin-top: 15px;
  margin-left: auto;
}
.wrap02 {
  margin-top: 15px;
  padding-right: 10px;
}
.wrap03 {
  margin-right: 300px;
  margin-left: auto;
  padding-left: auto;
}
</style>
