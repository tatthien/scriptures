<template>
  <div class="wrapper">
    <h1 class="app-title">Scriptures</h1>
    <ais-instant-search :search-client="searchClient" index-name="scriptures">
      <ais-search-box placeholder="Ban dau Duc Chua Troi..., gi 3 16" />
      <ais-infinite-hits>
        <template #item="{ item }">
          <div>
            <span class="hit-address">
              <ais-highlight :hit="item" attribute="book" />
              <span>&nbsp;</span>
              <ais-highlight :hit="item" attribute="chapter" />
              <span>:</span>
              <ais-highlight :hit="item" attribute="verse" />
            </span>
            <span>&nbsp;(</span>
            <span class="hit-address-abbr">
              <ais-highlight :hit="item" attribute="bookAbbr" />
              <span>&nbsp;</span>
              <ais-highlight :hit="item" attribute="chapter" />
              <span>:</span>
              <ais-highlight :hit="item" attribute="verse" />
            </span>
            <span>)</span>
            <div class="hit-content">
              <ais-snippet :hit="item" attribute="content"></ais-snippet>
            </div>
            <a class="read-more"
              :href="`https://kinhthanh.httlvn.org/doc-kinh-thanh/${item.bookAbbr}/${item.chapter}?v=VI1934#${item.verse}`"
              target="_blank">Đọc
              cả đoạn</a>
          </div>
        </template>
      </ais-infinite-hits>
    </ais-instant-search>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { instantMeiliSearch } from '@meilisearch/instant-meilisearch'

export default defineComponent({
  setup() {
    const searchClient = instantMeiliSearch(
      `${import.meta.env.VITE_BASE_URL}/api`,
      import.meta.env.VITE_MEILI_API_KEY,
    )

    return {
      searchClient,
    }
  }
})
</script>

<style>
.ais-SearchBox-input {
  width: 100%;
}
</style>
