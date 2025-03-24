<script setup lang="ts">
import type { Dayjs } from 'dayjs'

const props = defineProps<{
  title: string
  date: Dayjs
  eventsRyokuen: string[]
  eventsYamate: string[]
}>()

const { ja, simple } = useDateFormat(props.date)
</script>

<template>
  <VContainer class="bg-grey-lighten-3">
    <VRow
      justify="center"
      dense
    >
      <VCol
        cols="12"
        md="4"
      >
        <VCard
          height="100%"
          color="rgba(255, 255, 255, 0.8)"
          rounded="0"
          variant="flat"
        >
          <VCardText class="text-center pb-0">
            <div class="text-h6">
              <icons-calendar-multiselect
                start
                size="small"
              />
              {{ title }}
            </div>
            <time :datetime="simple">
              {{ ja }}
            </time>
          </VCardText>
          <VCardActions class="justify-center">
            <elements-btn-inside
              link="カレンダーをみる"
              to="/calendar"
            />
          </VCardActions>
        </VCard>
      </VCol>
      <VCol
        cols="12"
        sm="6"
        md="4"
      >
        <VCard
          height="100%"
          color="rgba(255, 255, 255, 0.8)"
          rounded="0"
          variant="flat"
        >
          <VCardText class="text-center">
            <p class="text-h6 mb-0">
              緑園本館
            </p>
            <ul class="events">
              <li
                v-for="(item, i) in eventsRyokuen"
                :key="'ryokuen' + i"
                class="bg-grey-lighten-4"
              >
                {{ item }}
              </li>
            </ul>
          </VCardText>
        </VCard>
      </VCol>
      <VCol
        cols="12"
        sm="6"
        md="4"
      >
        <VCard
          height="100%"
          color="rgba(255, 255, 255, 0.8)"
          rounded="0"
          variant="flat"
        >
          <VCardText class="text-center">
            <p class="text-h6 mb-0">
              山手分室
            </p>
            <ul class="events">
              <li
                v-for="(item, i) in eventsYamate"
                :key="'yamate' + i"
                class="bg-grey-lighten-4"
              >
                {{ item }}
              </li>
            </ul>
          </VCardText>
        </VCard>
      </VCol>
    </VRow>
  </VContainer>
</template>

<style scoped>
.events {
  list-style-type: none;
  padding: 0;
  margin: 0;
}
.events li {
  border-radius: 4px;
  padding: 4px;
  margin: 4px 0;
}
</style>
