<template>
    <tab-bar>
        <tab-bar-item link="/home">
            <i slot="item-icon" class="iconfont icon-shouye"></i>
            <p slot="item-text">首页</p>
        </tab-bar-item>
        <tab-bar-item link="/category">
            <i slot="item-icon" class="iconfont icon-leimupinleifenleileibie"></i>
            <p slot="item-text">分类</p>
        </tab-bar-item>
        <tab-bar-item link="/cart">
            <i slot="item-icon" class="iconfont icon-gouwuche"></i>
            <p slot="item-text">购物车</p>
        </tab-bar-item>
        <tab-bar-item link="/profile">
            <i slot="item-icon" class="iconfont icon-wode"></i>
            <p slot="item-text">我的</p>
        </tab-bar-item>
    </tab-bar>
</template>

<script>
    import TabBar from "components/common/TabBar/TabBar"
    import TabBarItem from "components/common/TabBar/TabBarItem"
    export default {
        name: "MainTabBar",
        data() {
            return {}
        },
        components: {
            TabBar,
            TabBarItem
        }
    }
</script>

<style scoped>

</style>
