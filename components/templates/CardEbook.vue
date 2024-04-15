<script setup lang="ts">
import type { Link, Document } from "@/types/ebook";

const { show } = useConfirmDL();

defineProps<{
  name: string;
  languages: string[];
  categories: string[];
  available: string[];
  body: string;
  access?: string;
  logout?: boolean;
  attention?: string;
  links?: Link[];
  documents?: Document[];
}>();
</script>

<template>
  <v-card>
    <v-container>
      <v-row dense>
        <v-col cols="12" sm="4">
          <v-card-title class="wrap-text">{{ name }}</v-card-title>
          <v-card-text>
            <v-chip
              v-for="(language, m) in languages"
              :key="'lang' + m"
              color="secondary"
              class="mb-1 mr-1"
              >{{ language }}</v-chip
            >
            <v-chip
              v-for="(cat, j) in categories"
              :key="'cat' + j"
              color="blue-lighten-1"
              class="mb-1 mr-1"
            >
              {{ cat }}
            </v-chip>
          </v-card-text>
        </v-col>
        <v-col cols="12" sm="8">
          <v-card-text>
            <elements-html-text-area :data="body" />
          </v-card-text>
          <v-divider></v-divider>
          <v-card-text v-if="access || attention">
            <!--<p class="my-0">
              利用可能場所：
              <span v-for="(place, p) in available" :key="'ava' + p">
                {{ place }}
              </span>
            </p>-->
            <p v-if="access" class="my-0">
              同時アクセス数：{{ access }}
              <span v-if="logout" class="text-orange ml-2">
                <icons-alert-circle siza="small" />
                利用後は必ずログアウトしてください
              </span>
            </p>
            <span v-if="attention">※{{ attention }}</span>
          </v-card-text>
          <v-card-actions v-if="links || documents">
            <elements-align-elements>
              <elements-btn-open-in-new
                v-for="(link, k) in links"
                :key="'link' + k"
                :link="link.name"
                :url="link.url"
                class="ma-0"
              ></elements-btn-open-in-new>
              <template v-if="documents">
                <v-btn
                  v-for="(file, n) in documents"
                  :key="'file' + n"
                  variant="elevated"
                  class="ma-0"
                  @click="show(file.name, file.url, file.type)"
                >
                  {{ file.name }}
                  <icons-file-pdf v-if="file.type == 'PDF'" dark end />
                  <icons-file-excel v-else-if="file.type == 'Excel'" dark end />
                  <icons-file-document v-else dark end />
                </v-btn>
              </template>
            </elements-align-elements>
          </v-card-actions>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<style scoped>
.wrap-text {
  word-break: break-all;
  white-space: normal;
}
</style>
