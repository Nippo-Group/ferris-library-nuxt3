<script setup lang="ts">
defineProps<{
  country?: string
  publisher?: string
  cycle?: string
  retentionPeriod?: string
  location?: string
  note?: string
}>()
</script>

<template>
  <VTable>
    <tbody>
      <tr v-if="country">
        <th>発行国</th>
        <td>{{ country }}</td>
      </tr>
      <tr v-if="publisher">
        <th>発行元</th>
        <td>{{ publisher }}</td>
      </tr>
      <tr v-if="cycle">
        <th>刊行頻度</th>
        <td>{{ cycle }}</td>
      </tr>
      <tr v-if="retentionPeriod">
        <th>所蔵状況</th>
        <td>{{ retentionPeriod }}</td>
      </tr>
      <tr v-if="location">
        <th>所在</th>
        <td>{{ location }}</td>
      </tr>
      <tr v-if="note">
        <th>収録データベース・備考</th>
        <td class="pt-4">
          <elements-html-text-area :data="note" />
        </td>
      </tr>
    </tbody>
  </VTable>
</template>
