<template>
  <div>
    <v-row>
      <v-col>
        <v-subheader>対象期間</v-subheader>
        <v-row>
          <v-col cols="5"> <v-text-field background-color="#FFFDE7" outlined /><!--v-select等に変更--> </v-col>
          <v-col class="b1"><label class="q1">〜</label></v-col>
          <v-col cols="5"><v-text-field class="a1" background-color="#FFFDE7" outlined /> </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>
<style lang="scss" scoped>
.v-subheader {
  background-color: rgb(56, 129, 255);
  color: white;
  justify-content: center;
}
.b1 {
  margin-top: 10px;
}
.q1 {
  font-size: 140%;
  margin-left: 10%;
}
</style>
