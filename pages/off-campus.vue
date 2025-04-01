<script setup lang="ts">
const title = '学外から受けられるサポート'
useSeoMeta({
  title,
  description:
    '宅配による貸出（新型コロナウイルス感染拡大防止措置）は2023年度前期授業方針に従い、2023年5月7日をもって終了しました。',
})
</script>

<template>
  <VContainer>
    <VRow>
      <VCol>
        <SectionsPageHeader
          :title
        />
      </VCol>
    </VRow>
    <VRow>
      <VCol cols="12">
        <VCard>
          <VCardTitle class="wrap-text">
            新型コロナウイルス感染拡大防止措置：宅配による貸出
          </VCardTitle>
          <VCardText>2023年度前期授業方針に従い、2023年5月7日をもって終了しました。</VCardText>
        </VCard>
      </VCol>
    </VRow>
  </VContainer>
</template>

<style scoped>
.wrap-text {
  word-break: break-all;
  white-space: normal;
}
</style>
