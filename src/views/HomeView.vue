<script setup lang="ts">
import Logo from '@/assets/logo.svg'
import { LogoGithub, MailOutline, PlayOutline } from '@vicons/ionicons5'
import biliLogo from '@/assets/bilibiliIcon.svg'

</script>

<template>
  <main>
    <div class="overview">
      <div class="logo">
        <Logo></Logo>
      </div>
      <div class="divider"></div>
      <div class="introduction">
        <h1 class="name">原子信息社</h1>
        <i>ATOM IT CLUB</i>
        <div class="links">
          <a href="https://bilibili.com">
            <biliLogo />
          </a>
          <a href="mailto:chengruichen3@gmail.com">
            <MailOutline></MailOutline>
          </a>
          <a href="https://github.com/atomclub">
            <LogoGithub></LogoGithub>
          </a>
        </div>
        <a href="https://atom.koch2333.cn/animation" target="_blank">
          <n-button icon-placement="left" secondary strong >
          <n-icon><PlayOutline /></n-icon>
            2024秋季招新动画
        </n-button></a>
      </div>
    </div>
  </main>

  <p>
    原子信息社创立于2024年，是由一群对信息技术充满热情的潮阳实验学校普宁校区学生组成的社团。我们不仅仅是编程爱好者，我们是技术的探索者，是创新的实践者。包含技术组、协同组两个部门。两个部门各司其职，共同组成了原子信息社。
  </p>
  <ul>
    <li>技术提升：与志同道合的伙伴一起，你的技术将得到飞速提升。</li>
    <li>项目经验：参与实际项目，让你的简历更加丰富。</li>
    <li>思维碰撞：与高手过招，激发你的创新思维。</li>
  </ul>
</template>

<style scoped>
main {
  margin: 2rem;
  padding: 2rem;
}

p,
ul {
  font-size: 1.2rem;
}

.divider {
  width: 1px;
  height: 100%;
  margin: 0 3rem;
  background-color: var(--color-border);
}

.overview {
  display: flex;
  align-items: center;
  width: 70%;
  height: 40vh;
  margin: 10vh auto;
  justify-content: center;
}

.logo {
  flex: 1;
  margin: 2rem 0;
  display: flex;
  align-items: center;
}

.introduction {
  flex: 1;
  text-align: center;
}

.logo svg {
  margin: auto;
  border-radius: 50%;
  width: 10rem;
  height: 10rem;
  display: block;
}

.links {
  margin-top: 3rem;
}

.links a svg {
  width: 3rem;
  height: 3rem;
  color: var(--color-heading);
}

.bili {
  @media screen and (max-width: 700px) {
    .overview {
      display: block;
    }

    .divider {
      display: none;
    }

    main {
      margin: 1rem 0;
    }


    .logo svg {
      margin: auto;
      border-radius: 50%;
      width: 5rem;
      height: 5rem;
      display: block;
    }
  }
}
</style>
