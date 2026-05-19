<script>
import Timeline from '../Timeline.vue';

</script>
<template>
    <LayoutScrollSmooth>
        <section id="formacion" class="container">
            <p class="badge">{{ TIMELINE.label }}</p>
            <!--TimeLine-->
            <Timeline :title="TIMELINE.title" :description="TIMELINE.description"
                :items="TIMELINE.items.map(i => ({ id: i.id, label: i.label }))">
                <template v-for="item in TIMELINE.items" #[item.id]>
                    <div class="text-white pb-10">
                        <h3 class="font-bold text-xl mb-1">{{ item.title }}</h3>
                        <p class="text-sm text-neutral-400 mb-3">{{ item.subtitle }}</p>
                        <p class="text-neutral-300 text-sm leading-relaxed text-justify">{{ item.description }}</p>
                    </div>
                </template>
            </Timeline>
        </section>
    </LayoutScrollSmooth>
</template>
