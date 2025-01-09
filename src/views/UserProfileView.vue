<template>
  <main>
    <n-image
        src="https://atom.syewiki.top/DSC_0008.JPG"
        alt="Banner Image"
        width="100%"
        height=auto
        object-fit="cover"
    />
    <n-thing content-indented>
      <template #avatar>
        <n-avatar :size="64" :src="logo" round />
      </template>
      <template #header>
        {{ $route.params.user }}
      </template>
      <template #description> Description </template>
      Money is any item or verifiable record that is generally accepted as payment for goods and
      services and repayment of debts, such as taxes, in a particular country or socio-economic
      context.

      <template #footer>
        <n-button ghost>
          <template #icon>
            <n-icon>
              <LogoGithub></LogoGithub>
            </n-icon>
          </template>
          Github
        </n-button>
        <n-button ghost>
          <template #icon>
          </template>
          Bilibili
        </n-button>
      </template>

    </n-thing>
    <n-card title="想说的话" style="margin-bottom: 16px">
    <n-tabs type="line" animated default-value="talkToSchool">
      <n-tab-pane name="talkToSchool" tab="对学校">
        啊米诺斯
      </n-tab-pane>
      <n-tab-pane name="talkToStudent" tab="对学弟学妹们">
        好好学习，天天向上（
      </n-tab-pane>
    </n-tabs>
    </n-card>
  </main>
</template>

<script setup lang="ts">
defineProps<{
  user: String
}>()

import logo from '../assets/logo.svg?url'
import { LogoGithub } from '@vicons/ionicons5'
import biliLogo from '@/assets/Bilibili_Icon.svg'


</script>
<style scoped>
main {
  padding: 0 6rem;
}
</style>
