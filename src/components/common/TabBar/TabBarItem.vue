<template>
    <div class="tab-bar-item" @click="itemClick">
        <div class="item-icon" :style="activeStyle">
            <slot name="item-icon"></slot>
        </div>

        <div :style="activeStyle">
            <slot name="item-text"></slot>
        </div>
        <!--<i class="iconfont icon-shouye"></i>-->
        <!--<p>首页</p>-->
    </div>
</template>

<script>
    export default {
        name: "TabBarItem",
        props: {
            link: String,
            activeColor: {
                type: String,
                default: 'red'
            }
        },
        data() {
            return {
                // isActive: true
            }
        },
        computed: {
            isActive() {
                // this.$route.path -> /home
                // /home -> item1(/home) = true
                // 如果当前路由地址和外部传过来的地址相同，代表是当前选中的
                return this.$route.path.indexOf(this.link) !== -1
            },
            activeStyle() {
                return this.isActive ? {color: this.activeColor} : {}
            }
        },
        methods: {
            itemClick() {
                // 如果点击的是当前选中的，那么不进行跳转
                if (this.$route.path.indexOf(this.link) !== -1) {
                    return
                }
                this.$router.replace(this.link)
            }
        }
    }
</script>

<style lang="scss" scoped>
    .tab-bar-item {
        flex: 1;
        text-align: center;

        i {
            display: block;
            margin-top: 3px;
            color: #000;
            font-size: 20px;
        }
        p {
            font-size: 14px;
        }
    }

    .item-icon {
        i {
            color: inherit;
        }
    }
</style>
