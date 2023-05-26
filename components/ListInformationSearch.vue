<script setup>
import { mdiOpenInNew, mdiBookSearchOutline } from "@mdi/js";
const props = defineProps({
  items: {
    type: Array,
    default: () => {},
  },
});
</script>

<template>
  <v-container>
    <v-row>
      <v-col v-for="(item, i) in props.items" :key="'item-' + i" cols="12">
        <v-card :title="item.subTitle" :prepend-icon="mdiBookSearchOutline">
          <v-card-text>
            <ul class="link-list">
              <li v-for="(listItem, j) in item.list" :key="'listItem' + i + j">
                <v-btn
                  v-if="listItem.name"
                  class="text-none"
                  color="primary"
                  :to="listItem.push"
                  :href="listItem.href"
                  :target="listItem.href ? '_blank' : '_self'"
                  variant="tonal"
                >
                  {{ listItem.name }}
                  <v-icon
                    v-show="listItem.openInNew"
                    end
                    :icon="mdiOpenInNew"
                  ></v-icon>
                </v-btn>
                <p class="text-grey">{{ listItem.comment }}</p>
              </li>
            </ul>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.link-list {
  list-style: none;
  padding-left: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
</style>
