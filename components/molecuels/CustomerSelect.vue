<template>
  <v-row>
    <v-col md="2">
      <v-text>得意先：</v-text>
      <v-select
          :items="items"
          label="指定なし"
          dense
          solo
      ></v-select></v-col>
      </v-row>
</template>
<script>
  export default {
    data: () => ({
      items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
    }),
  }
</script>