<template>
<v-row>
<v-col >
 <div class="text-center">
    <v-pagination
      type="text"
      
      v-model="page"
      :length="15"
      :total-visible="7"
    ></v-pagination>
  </div>
  <div class="text-center">
    <v-pagination
      v-model="page"
      :length="70"
      :total-visible="12"
    ></v-pagination>
  </div>
</v-col>
</v-row>
</template>
<script>
  export default {
    data () {
      return {
        page: 1,
      }
    },
  }
</script>
