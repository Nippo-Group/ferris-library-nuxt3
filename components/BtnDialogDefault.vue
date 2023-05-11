<template>
  <v-dialog transition="dialog-top-transition" max-width="600">
    <template #activator="{ on, attrs }">
      <v-btn class="ma-2" color="primary lighten-1" v-bind="attrs" v-on="on">
        <slot name="name">ボタンの表明名</slot>
      </v-btn>
    </template>
    <template #default="dialog">
      <v-card>
        <v-card-text>
          <slot name="contents">ダイアログカードの内容</slot>
        </v-card-text>
        <v-card-actions>
          <slot name="actions"></slot>
        </v-card-actions>
        <v-card-actions class="justify-end">
          <v-btn text @click="dialog.value = false">Close</v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>

<script>
export default {
  name: 'BtnDialogDefault',
}
</script>

<style scoped></style>
