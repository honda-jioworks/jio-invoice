<template>
  <div>
    <v-row>
      <v-col cols="6">数量の桁:</v-col>
      <v-col cols="6">
        <v-select
          :items="items"
        ></v-select>
      </v-col>
    </v-row>    
  </div>      
</template>

<script lang="ts">
  import { Vue, Component } from 'nuxt-property-decorator';
  @Component({ components: {} })
  export default class NumberOfDigits extends Vue{
  }
</script>

<script>
  export default {
    data: () => ({
      items: ['整数7桁 小数なし', '整数6桁 小数第1位', '整数5桁 小数第2位','整数4桁 小数第3位'],
    }),
  }
</script>