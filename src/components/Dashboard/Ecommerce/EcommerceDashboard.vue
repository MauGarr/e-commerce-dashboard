<script setup lang="ts">
import { storeToRefs } from 'pinia'

const { t } = useI18n()
const notify = useNotifyStore()
const store = useDashboardStore()
const layout = useLayoutStore()

onMounted(() => {
  store.getSummaryStat()
  if (!layout.isWelcomeShown) {
    setTimeout(() => {
      notify.notify({
        body: t('notify.welcome'),
        type: 'success',
        duration: 10000,
      })
      layout.showWelcome()
    }, 2000)
  }
})
</script>

<template>
  <div>
    <div>
      <div class="line-row flex flex-col justify-center items-stretch lg:flex-row margin-outside w-full">
        <WelcomeCard class="w-full lg:w-2/4" />
      </div>

      <div class="flex flex-wrap margin-outside">
        <div class="w-full lg:w-1/2 px-2">
          <Card :title="t('dashboard.recentOrders')">
            <RecentOrders />
          </Card>
        </div>
        <div class="w-full lg:w-1/2 px-2">
          <Card :title="t('dashboard.trendingProducts')">
            <TrendingProducts />
          </Card>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.line-row {
  min-height: 350px;
}
</style>
