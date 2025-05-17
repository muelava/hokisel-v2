<template>
    <nav class="sticky top-0 bg-white pt-2 pb-0.5 z-30 border-b border-slate-100">
        <ul class="flex gap-3 items-center m-3">
            <li>
                <a href="/">
                    <img src="/img/brands/hokisel.png" alt="hokisel" class="size-8">
                </a>
            </li>
            <li class="flex-auto">
                <UInput icon="i-lucide-search" size="lg" variant="ghost" placeholder="Cari disini" class="w-full border-b border-slate-200 text-slate-600" />
            </li>
            <li>

                <UButton icon="i-lucide-shopping-cart" size="md" class="text-slate-600 cursor-pointer" variant="link" />
            </li>
        </ul>
    </nav>
</template>