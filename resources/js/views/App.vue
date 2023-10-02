<template>
    <div>

<!--        <p>-->
<!--            &lt;!&ndash; use router-link component for navigation. &ndash;&gt;-->
<!--            &lt;!&ndash; specify the link by passing the `to` prop. &ndash;&gt;-->
<!--            &lt;!&ndash; `<router-link>` will be rendered as an `<a>` tag by default &ndash;&gt;-->
<!--            <router-link to="/welcome">Go to Foo</router-link>-->
<!--            <router-link to="/contacts">Go to Bar</router-link>-->
<!--        </p>-->

        <!--         component matched by the route will render here -->
        <router-view></router-view>
    </div>
</template>


<script>


</script>


<style lang="scss">
body {
    font-family: 'family Nunito', sans-serif;

    display: flex;
    align-items: center;
    justify-content: center;

    height: 100vh;
    background: linear-gradient(#000000 0vh, #000000 45vh, #000000 45vh, #fff 100vh);
}


</style>
