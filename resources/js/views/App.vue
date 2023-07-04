<template>
    <div>
<!--        <h1>Hello App!</h1>-->
<!--        <p>-->
<!--            &lt;!&ndash; use router-link component for navigation. &ndash;&gt;-->
<!--            &lt;!&ndash; specify the link by passing the `to` prop. &ndash;&gt;-->
<!--            &lt;!&ndash; `<router-link>` will be rendered as an `<a>` tag by default &ndash;&gt;-->
<!--            <router-link to="/welcome">Go to Foo</router-link>-->
<!--            <router-link to="/contacts">Go to Bar</router-link>-->
<!--        </p>-->

        <!-- route outlet -->
        <!-- component matched by the route will render here -->
        <router-view></router-view>
    </div>
</template>


<script>
</script>


<style lang="scss">
body {
    display: flex;

    align-items: center;
    justify-content: center;

    height: 100vh;
    background: linear-gradient(#000000 0vh, #000000 45vh, #000000 45vh, #fff 100vh);

    -webkit-user-select: none; /* Safari */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* Internet Explorer */
    user-select: none; /* Standard syntax */
}

/* Enable text selection for specific elements */
.allow-select {
    -webkit-user-select: auto; /* Safari */
    -moz-user-select: auto; /* Firefox */
    -ms-user-select: auto; /* Internet Explorer */
    user-select: auto; /* Standard syntax */
}
</style>
