<script setup>
const props = defineProps({
  items: { type: Object, required: true },
});

const displayTitle = (name) => {
  switch (name) {
    case "country":
      return "発行国";
    case "publisher":
      return "発行元";
    case "cycle":
      return "刊行頻度";
    case "retentionPeriod":
      return "所蔵状況";
    case "location":
      return "所在";
    case "note":
      return "収録データベース・備考";
    default:
      return name;
  }
};
const showValue = (value, name) => {
  const flag = value !== "" && name !== "title" && name !== "subTitle";
  return flag;
};
</script>

<template>
  <v-table>
    <tbody>
      <tr
        v-for="(value, name, index) in props.items"
        v-show="showValue(value, name)"
        :key="index"
      >
        <th>{{ displayTitle(name) }}</th>
        <td v-html="value"></td>
      </tr>
    </tbody>
  </v-table>
</template>
