<template>
    <header class="header">
        <div class="header-group">
            <div class="flex items-center justify-between py-10">
                <div class="w-28 lg:w-36">
                    <img class="w-full" src="../../assets/images/logo_white.png" alt="logo" />
                </div>

                <div class="flex">
                    <button class="px-6 py-2 font-bold text-white rounded-full focus:outline-none"
                        id="header-create-account-button"
                        @click="() => emit('create-account')">
                        Crie uma conta agora!
                    </button>
                    <button class="px-6 py-2 font-bold text-brand-main bg-white rounded-full focus:outline-none"
                        id="header-login-button"
                        @click="() => emit('login')">
                        Entrar
                    </button>
                </div>
            </div>

            <div class="flex flex-col mt-28">
                <h1 class="text-4xl font-black text-white">
                    Tenha um feedback. <br>
                    E faça seus clientes mais <br class="hiden lg:inline-block">
                    felizes!
                </h1>
                <p class="text-lg font-small text-white">
                    Receba ideias, reclamações e feedbacks com um <br class="hiden lg:inline-block">
                    simples widget na página.
                </p>
                <div>
                    <button class="mt-10 px-6 py-2 font-bold text-brand-main bg-white rounded-full focus:outline-none"
                    id="cta-create-account-button"
                    @click="() => emit('create-account')">
                        Crie uma conta grátis
                    </button>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
export default {
  setup (_, { emit }) {
    return { emit }
  }
}
</script>

<style lang="postcss" scoped>
.header {
    @apply bg-brand-main w-full flex justify-center;
    height: 700px;
}

.header-group {
    @apply flex flex-col w-4/5 max-w-6xl;
}

@media (min-width: 640px) {
    .header-group {
        background-image: url(../../assets/images/blue_ballons.png);
        background-size: 628px;
        background-position: 90% 100%;
        background-repeat: no-repeat;
    }
}
</style>
