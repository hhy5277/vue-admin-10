<template>
    <MetaComponentInfo
        v-if="modelLoaded"
        v-bind="model"
    />
</template>

<script>
import MetaComponentInfo from '@/components/common/MetaComponentInfo';
import {
    infoPageMixin,
} from '@/mixins/router/modelRouterMixin';

export default {
    name: 'MetaPageInfo',
    components: {
        MetaComponentInfo,
    },
    mixins: [
        infoPageMixin,
    ],
};
</script>
