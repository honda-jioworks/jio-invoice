<template>
  <div>
    <v-row>
      <v-col>
        <v-subheader>　　請求額　　　<v-divider color="white" vertical></v-divider>　　　消費税等　</v-subheader>
        <v-row no-gutters>
          <v-col>
            <v-text-field background-color="#FFFDE7" outlined />
          </v-col>
          <v-col><v-text-field background-color="#FFFDE7" outlined /> </v-col>
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
.v-divider {
  color: white;
}
</style>
