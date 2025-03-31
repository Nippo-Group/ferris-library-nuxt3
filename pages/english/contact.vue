<script setup lang="ts">
import { ryokuen, yamate } from '@/contents/contact'

const title = 'Contact / Access'
useSeoMeta({
  title,
  description: 'Access to the library and contact information.',
})
definePageMeta({ layout: 'english' })
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
      <VCol
        cols="12"
        lg="6"
      >
        <TemplatesCardContact
          :name="ryokuen.name"
          :accesses="ryokuen.accesses"
          :address="ryokuen.address"
          :address-number="ryokuen.addressNumber"
          :e-mali="ryokuen.eMali"
          :fax="ryokuen.fax"
          :google-map="ryokuen.googleMap"
          :image="ryokuen.image"
          :tel="ryokuen.tel"
        />
      </VCol>
      <VCol
        cols="12"
        lg="6"
      >
        <TemplatesCardContact
          :name="yamate.name"
          :accesses="yamate.accesses"
          :address="yamate.address"
          :address-number="yamate.addressNumber"
          :e-mali="yamate.eMali"
          :fax="yamate.fax"
          :google-map="yamate.googleMap"
          :image="yamate.image"
          :tel="yamate.tel"
        />
      </VCol>
    </VRow>
  </VContainer>
</template>
