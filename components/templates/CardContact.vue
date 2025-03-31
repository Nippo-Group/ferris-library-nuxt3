<script setup lang="ts">
import {
  mdiPhone,
  mdiFax,
  mdiEmail,
  mdiMapMarker,
  mdiTrain,
  mdiTrainCarPassengerVariant,
} from '@mdi/js'

type Access = {
  transportation: string
  root: string
  icon: string
}
export type CardContactProps = {
  name: string
  image: string
  addressNumber?: string
  address?: string
  googleMap?: string
  tel?: string
  fax?: string
  eMali?: string
  accesses?: Access[]
}
const props = defineProps<CardContactProps>()

const accessIcon = (type: string): string | undefined => {
  switch (type) {
    case 'train':
      return mdiTrain
    case 'car':
      return mdiTrainCarPassengerVariant
  }
}
</script>

<template>
  <VCard>
    <VImg
      :src="props.image"
      height="200px"
      gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
      class="align-end"
      cover
    >
      <VCardTitle class="text-white">
        <div class="text-h5">
          {{ props.name }}
        </div>
      </VCardTitle>
    </VImg>
    <VList lines="two">
      <VListItem
        v-if="props.tel"
        :href="'tel:' + props.tel"
        :prepend-icon="mdiPhone"
      >
        <VListItemTitle>{{ props.tel }}</VListItemTitle>
        <VListItemSubtitle>Phone</VListItemSubtitle>
      </VListItem>
      <VListItem
        v-if="props.fax"
        :prepend-icon="mdiFax"
      >
        <VListItemTitle>{{ props.fax }}</VListItemTitle>
        <VListItemSubtitle>Fax</VListItemSubtitle>
      </VListItem>
      <VDivider inset />
      <VListItem
        v-if="props.eMali"
        :href="'mailto:' + props.eMali"
        :prepend-icon="mdiEmail"
      >
        <VListItemTitle>{{ props.eMali }}</VListItemTitle>
        <VListItemSubtitle>Organization</VListItemSubtitle>
      </VListItem>
      <VDivider inset />
      <VListItem
        :href="props.googleMap || undefined"
        target="_blank"
        :prepend-icon="mdiMapMarker"
      >
        <VListItemSubtitle v-if="props.addressNumber">
          〒{{ props.addressNumber }}
        </VListItemSubtitle>
        <VListItemTitle
          v-if="props.address"
          class="wrap-text"
        >
          {{
            props.address
          }}
        </VListItemTitle>
        <template
          v-if="props.googleMap"
          #append
        >
          <icons-open-in-new />
        </template>
      </VListItem>
      <VDivider inset />
      <VListItem
        v-for="(access, i) in props.accesses"
        :key="i"
      >
        <template #prepend>
          <VIcon
            color="primary"
            :icon="accessIcon(access.icon)"
          />
        </template>
        <VListItemSubtitle>
          {{ access.transportation }}
        </VListItemSubtitle>
        <VListItemTitle class="wrap-text">
          {{
            access.root
          }}
        </VListItemTitle>
      </VListItem>
    </VList>
  </VCard>
</template>

<style scoped>
.wrap-text {
  word-break: break-all;
  white-space: normal;
}
</style>
