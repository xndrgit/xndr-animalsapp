<template>
    <div class="spiderapp">
        <LeftComponent/>
        <RightComponent/>
    </div>
</template>

<script>
import LeftComponent from "../components/LeftComponent.vue";
import RightComponent from "../components/RightComponent.vue";

export default {
    name: 'HomePage.vue',
    components: {
        LeftComponent,
        RightComponent
    }
}
</script>

<style lang="scss" scoped>
.spiderapp {
    display: flex;

    min-width: 1100px;
    width: 80vw;
    height: calc(100vh - 60px);
    background: #fff;

    /*box-shadow: h-shadow v-shadow blur spread color inset;*/
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.06), 0 2px 5px 0 rgba(0, 0, 0, 0.06);

    /*fix*/
    padding: 0;
}

</style>
