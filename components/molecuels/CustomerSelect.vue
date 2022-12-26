<template>
  <v-row>
    <v-col md="8">
       <v-select
      v-model="enabled"
      :items="slots"
      label="得意先"
      ></v-select>
      </v-col>
      </v-row>
</template>
<script>
  export default {
    data: () => ({
      items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
    }),
  }
</script>