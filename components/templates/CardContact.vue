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
type State = {
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
const props = defineProps<State>()

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
    <v-img
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
    </v-img>
    <v-list lines="two">
      <v-list-item
        v-if="props.tel"
        :href="'tel:' + props.tel"
        :prepend-icon="mdiPhone"
      >
        <v-list-item-title>{{ props.tel }}</v-list-item-title>
        <v-list-item-subtitle>Phone</v-list-item-subtitle>
      </v-list-item>
      <v-list-item
        v-if="props.fax"
        :prepend-icon="mdiFax"
      >
        <v-list-item-title>{{ props.fax }}</v-list-item-title>
        <v-list-item-subtitle>Fax</v-list-item-subtitle>
      </v-list-item>
      <v-divider inset />
      <v-list-item
        v-if="props.eMali"
        :href="'mailto:' + props.eMali"
        :prepend-icon="mdiEmail"
      >
        <v-list-item-title>{{ props.eMali }}</v-list-item-title>
        <v-list-item-subtitle>Organization</v-list-item-subtitle>
      </v-list-item>
      <v-divider inset />
      <v-list-item
        :href="props.googleMap || undefined"
        target="_blank"
        :prepend-icon="mdiMapMarker"
      >
        <v-list-item-subtitle v-if="props.addressNumber">
          〒{{ props.addressNumber }}
        </v-list-item-subtitle>
        <v-list-item-title
          v-if="props.address"
          class="wrap-text"
        >
          {{
            props.address
          }}
        </v-list-item-title>
        <template
          v-if="props.googleMap"
          #append
        >
          <icons-open-in-new />
        </template>
      </v-list-item>
      <v-divider inset />
      <v-list-item
        v-for="(access, i) in props.accesses"
        :key="i"
      >
        <template #prepend>
          <v-icon
            color="primary"
            :icon="accessIcon(access.icon)"
          />
        </template>
        <v-list-item-subtitle>
          {{ access.transportation }}
        </v-list-item-subtitle>
        <v-list-item-title class="wrap-text">
          {{
            access.root
          }}
        </v-list-item-title>
      </v-list-item>
    </v-list>
  </VCard>
</template>

<style scoped>
.wrap-text {
  word-break: break-all;
  white-space: normal;
}
</style>
