<template>
    <div id="tab-bar">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "TabBar",
        data() {
            return {}
        }
    }
</script>

<style lang="scss" scoped>
    #tab-bar {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        display: flex;
        height: 49px;
        background-color: #f6f6f6;
        box-shadow: 0px -2px 2px rgba(100, 100, 100, .1);
    }
</style>
