<template>
<div>
    <header>
        <tab active-color='#88C929' :index.sync="index">
            <tab-item active-class="tab-active" :selected="index === 0" v-tap="index = 0">待确认</tab-item>
            <tab-item active-class="tab-active" :selected="index === 1" v-tap="index = 1">待支付</tab-item>
            <tab-item active-class="tab-active" :selected="index === 2" v-tap="index = 2">待收货</tab-item>
            <tab-item active-class="tab-active" :selected="index === 3" v-tap="index = 3">已预约</tab-item>

        </tab>
    </header>

    <swiper :index.sync="index" :height="getScreenHeight()+'px'" :show-dots="false">
        <swiper-item height="100%">
            <div class="tab-swiper vux-center content">
                <scroller :height="getScreenHeight()-44-45+'px'" lock-x scroller-y v-ref:lista>
                    <div>
                        <no-data v-if="List0.length === 0"></no-data>
                        <div v-else>
                            <j-order-block :img="order.customerImage" :name="order.customerName" :tel="order.customerMobile" :status="Status.zx[order.status].name" v-for="order in zxList" v-tap="viewDetail('zx',order.orderNo)"></j-order-block>
                        </div>
                </scroller>
                </div>
            </div>
        </swiper-item>
        <swiper-item height="100%">
            <div class="tab-swiper vux-center content">
                <scroller :height="getScreenHeight()-44-45+'px'" lock-x scroller-y v-ref:listb>
                    <div>
                        <no-data v-if="List1.length === 0"></no-data>
                        <div v-else>
                            <j-order-block :img="order.customerImage" :name="order.customerName" :tel="order.customerMobile" :status="Status.zc[order.status].name" v-for="order in zcList" v-tap="viewDetail('zc',order.orderNo)"></j-order-block>
                        </div>
                </scroller>
                </div>
            </div>
        </swiper-item>
        <swiper-item height="100%">
            <div class="tab-swiper vux-center content">
                <scroller :height="getScreenHeight()-44-45+'px'" lock-x scroller-y v-ref:listc>
                    <div>
                        <no-data v-if="List2.length === 0"></no-data>
                        <div v-else>
                            <j-order-block :img="order.customerImage" :name="order.customerName" :tel="order.customerMobile" :status="Status.zc[order.status].name" v-for="order in zcList" v-tap="viewDetail('zc',order.orderNo)"></j-order-block>
                        </div>
                </scroller>
                </div>
            </div>
        </swiper-item>
        <swiper-item height="100%">
            <div class="tab-swiper vux-center content">
                <scroller :height="getScreenHeight()-44-45+'px'" lock-x scroller-y v-ref:listd>
                    <div>
                        <no-data v-if="List3.length === 0"></no-data>
                        <div v-else>
                            <j-order-block :img="order.customerImage" :name="order.customerName" :tel="order.customerMobile" :status="Status.zc[order.status].name" v-for="order in zcList" v-tap="viewDetail('zc',order.orderNo)"></j-order-block>
                        </div>
                </scroller>
                </div>
            </div>
        </swiper-item>
    </swiper>
</div>
<j-footer></j-footer>
</template>
<script>
import Lib from 'assets/Lib.js'
import axios from 'axios'
import NoData from 'common/components/no-data'
import Status from 'common/status'
import {
    Tab,
    TabItem
} from 'vux-components/tab'
import Swiper from 'vux-components/swiper'
import SwiperItem from 'vux-components/swiper-item'
import Scroller from 'vux-components/scroller'
import JFooter from 'components/JFooter'
import JOrderBlock from 'common/components/j-order-block'
try {
    let now = Number(new Date().getTime())
    if (Number(JSON.parse(localStorage.user).expiredAt) < now) {
        localStorage.removeItem('user')
        location.href = './wxAuth.html?url=' + encodeURIComponent(location.href)
    }
    axios.defaults.headers.common['Authorization'] = JSON.parse(localStorage.getItem("store-keeper")).tokenType + ' ' + JSON.parse(localStorage.getItem("store-keeper")).token
} catch (e) {
    localStorage.clear()
    window.location.href = `./wxAuth.html?url=index.html`
}
export default {
    data() {
        return {
            index: 0,
            Status,
            List0: [],
            List1: [],
            List2: [],
            List3: [],
        }
    },
    components: {
        JOrderBlock,
        Tab,
        TabItem,
        Swiper,
        SwiperItem,
        Scroller,
        NoData,
        JFooter
    },
    ready() {
        axios.get(`${Lib.C.mOrderApi}materialOrders/byStoreuser`,{params:{
          filter: `status:1,3,4,5`,
          sort: "createdAt,desc",
          userId: JSON.parse(localStorage.getItem('store-keeper')).userId,
          size:1000
        }}).then((res) => {
            res.data.data.map((order) => {
                switch (order.status) {
                  case 1:
                    this.List3.push(order)
                    break;
                  case 3:
                    this.List1.push(order)
                    break;
                  case 4:
                    this.List0.push(order)
                    break;
                  case 5:
                    this.List2.push(order)
                    break;
                  default:
                    break;
                }
            })
            this.$nextTick(()=>{
              this.$refs.lista.reset()
              this.$refs.listb.reset()
              this.$refs.listc.reset()
              this.$refs.listd.reset()
            })
        }).catch((err) => {
            alert("获取订单失败，请稍候再试QAQ")
            throw err
        })
    },
    methods: {
        getTime(timeStamp) {
            var d = new Date(timeStamp * 1000);
            var Y = d.getFullYear() + '-';
            var M = (d.getMonth() + 1 < 10 ? '0' + (d.getMonth() + 1) : d.getMonth() + 1) + '-';
            var D = (d.getDate() < 10 ? '0' + (d.getDate()) : d.getDate());
            return Y + M + D
        },
        viewDetail(type, orderNo) {
            eval(`window.location.href='${type}-order.html?orderNo=${orderNo}'`)
        },
        getScreenHeight() {
            return document.body.clientHeight
        }
    }
}
</script>

<style>
html {
    height: 100%;
}

body {
    background-color: #eee;
    height: 100%;
}
</style>
<style scoped lang="less">
.content {
    padding-bottom: 45px;
}
</style>
