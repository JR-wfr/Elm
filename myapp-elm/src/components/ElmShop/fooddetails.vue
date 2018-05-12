<template>
  <div v-if="shoplist[wfrarray]">
    <div class="wfr-commodity-class">
      <router-link :to="{name:'Shop'}">
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" class="wfr-commodity-Return">
          <polyline points="12,18 4,9 12,0" style="fill: none; stroke: rgb(255, 255, 255); stroke-width:2px"></polyline>
        </svg>
      </router-link>
      <div class="wfr-commodity-name" v-if="show5">{{data1}}</div>
      <div class="wfr-commodity-name" v-else>{{wfrName}}</div>
    </div>
    <section class="wfr-commodity-option">
      <div class="wfr-commodity-option-div1" v-if="show1">
        <span v-if="show5">{{data1}}</span>
        <span v-else>{{wfrName}}</span>
          <div @click="wfrclick1" class="wfr-div1">
            <svg width="10" height="10" xmlns="http://www.w3.org/2000/svg" version="1.1" class="wfr-div2">
              <polygon points="0,3 10,3 5,8"></polygon>
            </svg>
          </div>
        <!--</div>-->
      </div>
      <div class="wfr-commodity-copy1" v-else>
        <span>分类</span>
        <div @click="wfrclick1" class="wfr-div1">
          <svg width="10" height="10" xmlns="http://www.w3.org/2000/svg" version="1.1" class="wfr-div3">
            <polygon points="0,3 10,3 5,8"></polygon>
          </svg>
        </div>
      </div>
      <div class="wfr-commodity-option-div1" v-if="show2">
        <span>排序</span>
        <div @click="wfrclick2" class="wfr-div1">
          <svg width="10" height="10" xmlns="http://www.w3.org/2000/svg" version="1.1" class="wfr-div2">
            <polygon points="0,3 10,3 5,8"></polygon>
          </svg>
        </div>
      </div>
      <div class="wfr-commodity-copy1" v-else>
        <span>排序</span>
        <div @click="wfrclick2" class="wfr-div1">
          <svg width="10" height="10" xmlns="http://www.w3.org/2000/svg" version="1.1" class="wfr-div3">
            <polygon points="0,3 10,3 5,8"></polygon>
          </svg>
        </div>
      </div>
      <div class="wfr-commodity-option-div1" v-if="show3">
        <span>筛选</span>
        <div @click="wfrclick3" class="wfr-div1">
          <svg width="10" height="10" xmlns="http://www.w3.org/2000/svg" version="1.1" class="wfr-div2">
            <polygon points="0,3 10,3 5,8"></polygon>
          </svg>
        </div>
      </div>
      <div class="wfr-commodity-copy1" v-else>
        <span>筛选</span>
        <div @click="wfrclick3" class="wfr-div1">
          <svg width="10" height="10" xmlns="http://www.w3.org/2000/svg" version="1.1" class="wfr-div3">
            <polygon points="0,3 10,3 5,8"></polygon>
          </svg>
        </div>
      </div>
    </section>
    <div class="wfr-city-business" v-show="show8">
      <div class="wfr-city-business-loca">
        <svg data-v-070ab150="" class="shop_icon">
          <use data-v-070ab150="" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#shop">
            <svg viewBox="0 0 32 31" id="shop" width="100%" height="100%">
              <g fill-rule="evenodd">
                <path
                  d="M28.232 1.822C27.905.728 26.97.152 25.759.152H5.588c-1.252 0-1.867.411-2.397 1.415l-.101.243-.443 1.434-.975 3.154-.002.007C.837 9.101.294 10.854.26 10.956l-.059.259c-.231 1.787.337 3.349 1.59 4.448 1.159 1.017 2.545 1.384 3.865 1.384.07 0 .07 0 .132-.002-.01.001-.01.001.061.002 1.32 0 2.706-.367 3.865-1.384a4.96 4.96 0 0 0 .413-.407l-1.043-.946-1.056.931c1.033 1.171 2.51 1.792 4.21 1.801.04.002.088.004.173.004 1.32 0 2.706-.367 3.865-1.384.148-.13.287-.267.418-.411l-1.044-.944-1.057.93c1.033 1.174 2.511 1.796 4.213 1.806.04.002.088.004.173.004 1.32 0 2.706-.367 3.865-1.384.15-.131.29-.27.422-.416l-1.046-.943-1.058.929c1.033 1.177 2.513 1.801 4.218 1.811.04.002.088.004.173.004 1.32 0 2.706-.367 3.865-1.384 1.206-1.058 1.858-2.812 1.676-4.426-.069-.61-.535-2.207-1.354-4.785l-.109-.342a327.554 327.554 0 0 0-1.295-3.966l-.122-.366.014.043h.004zm-2.684.85l.12.361.318.962c.329.999.658 2.011.965 2.973l.108.338c.719 2.262 1.203 3.92 1.24 4.249.08.711-.233 1.553-.735 1.993-.553.485-1.308.685-2.008.685l-.098-.002c-.987-.007-1.695-.306-2.177-.854l-1.044-1.189-1.06 1.175a2.192 2.192 0 0 1-.188.185c-.553.485-1.308.685-2.008.685l-.098-.002c-.985-.007-1.693-.305-2.174-.852l-1.043-1.185-1.059 1.171c-.058.064-.12.125-.186.183-.553.485-1.308.685-2.008.685l-.098-.002c-.984-.007-1.692-.304-2.173-.85L9.101 12.2l-1.058 1.166a2.248 2.248 0 0 1-.184.181c-.553.485-1.307.685-2.008.685l-.061-.001-.131.001c-.701 0-1.455-.2-2.008-.685-.538-.472-.767-1.102-.654-1.971l-1.396-.18 1.338.44c.043-.13.552-1.775 1.425-4.599l.002-.007.975-3.155.443-1.434-1.345-.415 1.245.658c.054-.102.042-.085-.083-.001-.122.082-.143.086-.009.086H25.763c.053 0-.164-.133-.225-.339l.014.043-.004-.001zM5.528 19.48c.778 0 1.408.63 1.408 1.408v7.424a1.408 1.408 0 1 1-2.816 0v-7.424c0-.778.63-1.408 1.408-1.408z"></path>
                <path
                  d="M.28 29.72c0-.707.58-1.28 1.277-1.28h28.155a1.28 1.28 0 0 1 .007 2.56H1.561A1.278 1.278 0 0 1 .28 29.72z"></path>
                <path
                  d="M26.008 19.48c.778 0 1.408.63 1.408 1.408v7.424a1.408 1.408 0 1 1-2.816 0v-7.424c0-.778.63-1.408 1.408-1.408z"></path>
              </g>
            </svg>
          </use>
        </svg>
        <span class="wfr-business">附近商家</span>
      </div>
      <ul>
        <li v-for="arr6 in wfrArr" class="wfr-locabusiness-list">
          <div class="wfr-business-bs">
            <img :src="imgurl1+arr6.image_path" class="wfr-locabusiness-img">
          </div>
          <div class="wfr-business-info">
            <div class="wfr-locabusiness-tt">
              <div class="wfr-left">
                <span class="wfr-locabusiness-text">品牌</span>
                <span class="wfr-locabusiness-name">{{arr6.name}}</span>
              </div>
              <div class="shop_detail_ul">
                <span class="supports">保</span>
                <span class="supports">准</span>
                <span class="supports">票</span>
              </div>
            </div>
            <div @click="wfrMerchant(arr6.id)">
              <div class="wfr-Place-order-float">
                <div class="wfr-Place-order">
                  <span>
                <svg data-v-5df6cab1="" class="grey_fill"><use data-v-5df6cab1=""
                                                               xmlns:xlink="http://www.w3.org/1999/xlink"
                                                               xlink:href="#star">
                  <svg id="star" viewBox="0 0 32 32" width="100%" height="100%"><path
                    d="M16 26.382l-8.16 4.992c-1.5 0.918-2.382 0.264-1.975-1.435l2.226-9.303-7.269-6.218c-1.337-1.143-0.987-2.184 0.755-2.322l9.536-0.758 3.667-8.835c0.674-1.624 1.772-1.613 2.442 0l3.667 8.835 9.536 0.758c1.753 0.139 2.082 1.187 0.755 2.322l-7.269 6.218 2.226 9.303c0.409 1.71-0.485 2.347-1.975 1.435l-8.16-4.992z"
                    class="path1"></path></svg>
                </use></svg>
                <svg data-v-5df6cab1="" class="grey_fill"><use data-v-5df6cab1=""
                                                               xmlns:xlink="http://www.w3.org/1999/xlink"
                                                               xlink:href="#star">
                  <svg id="star" viewBox="0 0 32 32" width="100%" height="100%"><path
                    d="M16 26.382l-8.16 4.992c-1.5 0.918-2.382 0.264-1.975-1.435l2.226-9.303-7.269-6.218c-1.337-1.143-0.987-2.184 0.755-2.322l9.536-0.758 3.667-8.835c0.674-1.624 1.772-1.613 2.442 0l3.667 8.835 9.536 0.758c1.753 0.139 2.082 1.187 0.755 2.322l-7.269 6.218 2.226 9.303c0.409 1.71-0.485 2.347-1.975 1.435l-8.16-4.992z"
                    class="path1"></path></svg>
                </use></svg>
                <svg data-v-5df6cab1="" class="grey_fill"><use data-v-5df6cab1=""
                                                               xmlns:xlink="http://www.w3.org/1999/xlink"
                                                               xlink:href="#star">
                  <svg id="star" viewBox="0 0 32 32" width="100%" height="100%"><path
                    d="M16 26.382l-8.16 4.992c-1.5 0.918-2.382 0.264-1.975-1.435l2.226-9.303-7.269-6.218c-1.337-1.143-0.987-2.184 0.755-2.322l9.536-0.758 3.667-8.835c0.674-1.624 1.772-1.613 2.442 0l3.667 8.835 9.536 0.758c1.753 0.139 2.082 1.187 0.755 2.322l-7.269 6.218 2.226 9.303c0.409 1.71-0.485 2.347-1.975 1.435l-8.16-4.992z"
                    class="path1"></path></svg>
                </use></svg>
                <svg data-v-5df6cab1="" class="grey_fill"><use data-v-5df6cab1=""
                                                               xmlns:xlink="http://www.w3.org/1999/xlink"
                                                               xlink:href="#star">
                  <svg id="star" viewBox="0 0 32 32" width="100%" height="100%"><path
                    d="M16 26.382l-8.16 4.992c-1.5 0.918-2.382 0.264-1.975-1.435l2.226-9.303-7.269-6.218c-1.337-1.143-0.987-2.184 0.755-2.322l9.536-0.758 3.667-8.835c0.674-1.624 1.772-1.613 2.442 0l3.667 8.835 9.536 0.758c1.753 0.139 2.082 1.187 0.755 2.322l-7.269 6.218 2.226 9.303c0.409 1.71-0.485 2.347-1.975 1.435l-8.16-4.992z"
                    class="path1"></path></svg>
                </use></svg>
                <svg data-v-5df6cab1="" class="grey_fill"><use data-v-5df6cab1=""
                                                               xmlns:xlink="http://www.w3.org/1999/xlink"
                                                               xlink:href="#star">
                  <svg id="star" viewBox="0 0 32 32" width="100%" height="100%"><path
                    d="M16 26.382l-8.16 4.992c-1.5 0.918-2.382 0.264-1.975-1.435l2.226-9.303-7.269-6.218c-1.337-1.143-0.987-2.184 0.755-2.322l9.536-0.758 3.667-8.835c0.674-1.624 1.772-1.613 2.442 0l3.667 8.835 9.536 0.758c1.753 0.139 2.082 1.187 0.755 2.322l-7.269 6.218 2.226 9.303c0.409 1.71-0.485 2.347-1.975 1.435l-8.16-4.992z"
                    class="path1"></path></svg>
                </use></svg>
              </span>
                  <span>{{arr6.rating}}</span>
                  <span>月售{{arr6.recent_order_num}}</span>
                </div>
                <div class="wfr-Place-order1">
                  <span class="wfr-Place-sapn1">蜂鸟专送</span>
                  <span class="wfr-Place-sapn2">准时达</span>
                </div>
              </div>
              <div class="wfr-business-rmb">
                <div class="wfr-business-rmb1">￥20起送/配送费约￥5</div>
                <div class="wfr-business-rmb2">
                  <span class="wfr-business-sapn1">{{arr6.tips}}</span>
                  <span class="wfr-business-sapn1">{{arr6.distance}} /</span>
                  <span class="wfr-business-sapn2">{{arr6.order_lead_time}}</span>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="wfr-Restaurant-info" v-show="show9">
      <div class="wfr-donghua" v-show="show4">
        <div class="wfr-Menu-info">
          <ul class="wfr-Menu-ul">
            <li v-for="(arr8,index) in shoplist" class="wfr-Menu-list " @click="wfrclickList($event,index)">
              <div class="wfr-Menu-text1">
                <img :src="arr8.image_url" v-if="!index==0||index==7" class="wfr-Menu-imege">
                <img src="@/assets/img/1.png" v-if="index==7" class="wfr-Menu-imege1">
                <span>{{arr8.name}}</span>
              </div>
              <div class="wfr-Menu-text2">
                <span class="wfr-Menu-count">{{arr8.count}}</span>
                <span v-if="!index==0">
                <svg data-v-6cc1fce6="" width="8" height="8" xmlns="http://www.w3.org/2000/svg" version="1.1"
                     class="category_arrow"><path data-v-6cc1fce6="" d="M0 0 L6 4 L0 8" stroke="#bbb" stroke-width="1"
                                                  fill="none"></path></svg>
              </span>
              </div>
            </li>
          </ul>
        </div>
        <div class="wfr-Menu-Vegetable">
          <ul class="wfr-Vegetable-ul" v-show="shoplist">
            <li v-for="(wfrArr,index) in shoplist[wfrarray].sub_categories" class="wfr-Vegetable-list" @click="wfrCLICK(index,wfrArr.name,latitude,longitude,wfrArr.id)">
              <div class="wfr-Vegetable-div1">
                <div class="wfr-Vegetable-span1">{{wfrArr.name}}</div>
                <div class="wfr-Vegetable-span2">{{wfrArr.count}}</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="wfr-lookup-method" v-show="wfrshow1">
          <ul class="wfr-lookup-ul">
            <li v-for="(shuzu1,index) in wfrshuzu" class="wfr-lookup-list">
              <span class="wfr-lookup-span1"><img :src="shuzu1.img" class="wfr-lookup-img"></span><span
              class="wfr-lookup-span2" @click="WOnclick555(index,$event)"
            >{{shuzu1.name}}</span>
            </li>
          </ul>
      </div>
      <div class="wfr-business-attr" v-show="wfrshow4">
          <p class="wfr-Commodity-distribution">配送方式</p>
          <div class="wfr-distribution">
            <span class="wfr-distribution-img">
              <img src="../../assets/img/bird.png">
              <span class="wfr-distribution-span">蜂鸟专送</span>
            </span>
          </div>
          <p class="wfr-distribution-attribute">商家属性(多选)</p>
          <ul class="wfr-distribution-ul">
            <li class="wfr-distribution-list">
              <span class="wfr-list-span1">
                <span style="color: rgb(63, 189, 230);border: 1px solid rgb(63, 189, 230);border-radius: 0.2rem;padding: 0 0.08rem" v-if="wfrshow6">
                  品
                </span>
                <span v-else>
                  <img src="../../assets/img/选中.svg" class="wfr-mark">
                </span>
              </span>
              <span class="wfr-list-span2" @click="wfrEvent1">品牌商家</span>
            </li>
            <li class="wfr-distribution-list">
              <span class="wfr-list-span1">
                <span style="color: rgb(153, 153, 153); border: 1px solid rgb(153, 153, 153);border-radius: 0.2rem;padding: 0 0.08rem" v-if="wfrshow7">
                  保
                </span>
                <span v-else>
                  <img src="../../assets/img/选中.svg" class="wfr-mark">
                </span>
              </span>
              <span class="wfr-list-span2" @click="wfrEvent2">外卖保</span>
            </li>
            <li class="wfr-distribution-list">
              <span class="wfr-list-span1">
                <span style="color: rgb(87, 169, 255); border:1px solid rgb(87, 169, 255);border-radius: 0.2rem;padding: 0 0.08rem" v-if="wfrshow8">
                  准
                </span>
                <span v-else>
                  <img src="../../assets/img/选中.svg" class="wfr-mark">
                </span>
              </span>
              <span class="wfr-list-span2" @click="wfrEvent3">准时达</span>
            </li>
            <li class="wfr-distribution-list">
              <span class="wfr-list-span1">
                <span style="color: rgb(232, 132, 45); border:1px solid  rgb(232, 132, 45);;border-radius: 0.2rem;padding: 0 0.08rem" v-if="wfrshow9">
                  新
                </span>
                <span v-else>
                  <img src="../../assets/img/选中.svg" class="wfr-mark">
                </span>
              </span>
              <span class="wfr-list-span2" @click="wfrEvent4">新店</span>
            </li>
            <li class="wfr-distribution-list">
              <span class="wfr-list-span1">
                <span style="color: rgb(255, 78, 0); border:1px solid rgb(255, 78, 0);;border-radius: 0.2rem;padding: 0 0.08rem" v-if="wfrshow10">
                  付
                </span>
                <span v-else>
                  <img src="../../assets/img/选中.svg" class="wfr-mark">
                </span>
              </span>
              <span class="wfr-list-span2" @click="wfrEvent5">在线支付</span>
            </li>
            <li class="wfr-distribution-list">
              <span class="wfr-list-span1">
                <span style="color: rgb(153, 153, 153); border:1px solid rgb(153, 153, 153);;border-radius: 0.2rem;padding: 0 0.08rem" v-if="wfrshow11">
                  票
                </span>
                <span v-else>
                  <img src="../../assets/img/选中.svg" class="wfr-mark">
                </span>
              </span>
              <span class="wfr-list-span2" @click="wfrEvent6">开发票</span>
            </li>
          </ul>
          <div class="wfr-footer-distribution">
            <span class="wfr-footer1">清空</span>
            <span class="wfr-footer2" @click="wfrpp">确定
              <span v-if="conut != 0">({{conut}})</span>
            </span>
          </div>
      </div>
    </div>
    <div class="wfr-food-details" v-show="wfrshow2">
      <ul>
        <li v-for="wfrA in wfrAr" class="wfr-locabusiness-list">
          <div class="wfr-business-bs">
            <img :src="imgurl1+wfrA.image_path" class="wfr-locabusiness-img">
          </div>
          <div class="wfr-business-info">
            <div class="wfr-locabusiness-tt">
              <div class="wfr-left">
                <span class="wfr-locabusiness-text">品牌</span>
                <span class="wfr-locabusiness-name">{{wfrA.name}}</span>
              </div>
              <div class="shop_detail_ul">
                <span class="supports">保</span>
                <span class="supports">准</span>
                <span class="supports">票</span>
              </div>
            </div>
            <div @click="wfrMerchant(wfrA.id)">
              <div class="wfr-Place-order-float">
                <div class="wfr-Place-order">
                  <span>
                <svg data-v-5df6cab1="" class="grey_fill"><use data-v-5df6cab1=""
                                                               xmlns:xlink="http://www.w3.org/1999/xlink"
                                                               xlink:href="#star">
                  <svg id="star" viewBox="0 0 32 32" width="100%" height="100%"><path
                    d="M16 26.382l-8.16 4.992c-1.5 0.918-2.382 0.264-1.975-1.435l2.226-9.303-7.269-6.218c-1.337-1.143-0.987-2.184 0.755-2.322l9.536-0.758 3.667-8.835c0.674-1.624 1.772-1.613 2.442 0l3.667 8.835 9.536 0.758c1.753 0.139 2.082 1.187 0.755 2.322l-7.269 6.218 2.226 9.303c0.409 1.71-0.485 2.347-1.975 1.435l-8.16-4.992z"
                    class="path1"></path></svg>
                </use></svg>
                <svg data-v-5df6cab1="" class="grey_fill"><use data-v-5df6cab1=""
                                                               xmlns:xlink="http://www.w3.org/1999/xlink"
                                                               xlink:href="#star">
                  <svg id="star" viewBox="0 0 32 32" width="100%" height="100%"><path
                    d="M16 26.382l-8.16 4.992c-1.5 0.918-2.382 0.264-1.975-1.435l2.226-9.303-7.269-6.218c-1.337-1.143-0.987-2.184 0.755-2.322l9.536-0.758 3.667-8.835c0.674-1.624 1.772-1.613 2.442 0l3.667 8.835 9.536 0.758c1.753 0.139 2.082 1.187 0.755 2.322l-7.269 6.218 2.226 9.303c0.409 1.71-0.485 2.347-1.975 1.435l-8.16-4.992z"
                    class="path1"></path></svg>
                </use></svg>
                <svg data-v-5df6cab1="" class="grey_fill"><use data-v-5df6cab1=""
                                                               xmlns:xlink="http://www.w3.org/1999/xlink"
                                                               xlink:href="#star">
                  <svg id="star" viewBox="0 0 32 32" width="100%" height="100%"><path
                    d="M16 26.382l-8.16 4.992c-1.5 0.918-2.382 0.264-1.975-1.435l2.226-9.303-7.269-6.218c-1.337-1.143-0.987-2.184 0.755-2.322l9.536-0.758 3.667-8.835c0.674-1.624 1.772-1.613 2.442 0l3.667 8.835 9.536 0.758c1.753 0.139 2.082 1.187 0.755 2.322l-7.269 6.218 2.226 9.303c0.409 1.71-0.485 2.347-1.975 1.435l-8.16-4.992z"
                    class="path1"></path></svg>
                </use></svg>
                <svg data-v-5df6cab1="" class="grey_fill"><use data-v-5df6cab1=""
                                                               xmlns:xlink="http://www.w3.org/1999/xlink"
                                                               xlink:href="#star">
                  <svg id="star" viewBox="0 0 32 32" width="100%" height="100%"><path
                    d="M16 26.382l-8.16 4.992c-1.5 0.918-2.382 0.264-1.975-1.435l2.226-9.303-7.269-6.218c-1.337-1.143-0.987-2.184 0.755-2.322l9.536-0.758 3.667-8.835c0.674-1.624 1.772-1.613 2.442 0l3.667 8.835 9.536 0.758c1.753 0.139 2.082 1.187 0.755 2.322l-7.269 6.218 2.226 9.303c0.409 1.71-0.485 2.347-1.975 1.435l-8.16-4.992z"
                    class="path1"></path></svg>
                </use></svg>
                <svg data-v-5df6cab1="" class="grey_fill"><use data-v-5df6cab1=""
                                                               xmlns:xlink="http://www.w3.org/1999/xlink"
                                                               xlink:href="#star">
                  <svg id="star" viewBox="0 0 32 32" width="100%" height="100%"><path
                    d="M16 26.382l-8.16 4.992c-1.5 0.918-2.382 0.264-1.975-1.435l2.226-9.303-7.269-6.218c-1.337-1.143-0.987-2.184 0.755-2.322l9.536-0.758 3.667-8.835c0.674-1.624 1.772-1.613 2.442 0l3.667 8.835 9.536 0.758c1.753 0.139 2.082 1.187 0.755 2.322l-7.269 6.218 2.226 9.303c0.409 1.71-0.485 2.347-1.975 1.435l-8.16-4.992z"
                    class="path1"></path></svg>
                </use></svg>
              </span>
                  <span>{{wfrA.rating}}</span>
                  <span>月售{{wfrA.recent_order_num}}</span>
                </div>
                <div class="wfr-Place-order1">
                  <span class="wfr-Place-sapn1">蜂鸟专送</span>
                  <span class="wfr-Place-sapn2">准时达</span>
                </div>
              </div>
              <div class="wfr-business-Rmb">
                <div class="wfr-business-Rmb1">￥20起送/配送费约￥5</div>
                <div class="wfr-business-Rmb2">
                  <span class="wfr-business-sapn1">{{wfrA.tips}}</span>
                  <span class="wfr-business-sapn1">{{wfrA.distance}} /</span>
                  <span class="wfr-business-sapn2">{{wfrA.order_lead_time}}</span>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default {
    methods: {
      wfrclick1(ev) {
        this.show1 = !this.show1;
        this.show2 = true;
        this.show3 = true;
        this.wfrshow1 = false;
        this.wfrshow4 = false;
        if (this.show1 == true && this.show2 == true && this.show3 == true ) {
          this.show9 = false;
          this.show4 = false;
        } else {
          this.show4 = true;
          this.show9 = true;
        }
      },
      wfrclick2(ev) {
        this.show2 = !this.show2;
        this.show1 = true;
        this.show3 = true;
        this.wfrshow4 = false;
        if (this.show1 == true && this.show2 == true && this.show3 == true) {
          this.show9 = false;
          this.show4 = false;
          this.wfrshow1 = false;
        } else {
          this.show4 = false;
          this.show9 = true;
          this.wfrshow1 = true;
        }
      },
      wfrclick3(ev) {
        this.show3 = !this.show3;
        this.show2 = true;
        this.show1 = true;
        // this.show4 = false;
         this.wfrshow1 = false;
        if (this.show1 == true && this.show2 == true && this.show3 == true) {
          this.show4 = true;
          this.show9 = false;
          this.wfrshow4 = false;
        } else {
          this.show4 = false;
          this.show9 = true;
          this.wfrshow4 = true;
        }
      },
      wfrclickList($event,index) {
        var list = document.getElementsByClassName("wfr-Menu-list");
        for (var i = 0;i<list.length;i++){
          list[i].style.backgroundColor = "#f1f1f1"
        }
        $event.currentTarget.style.backgroundColor = "#fff"
        this.wfrarray = index;
      },
      wfrCLICK(index,name,latitude,longitude,id){
        this.show9 = false;
        console.log(index)
        this.wfrindex = index;
        this.wfrName = name
        if(this.wfrName == name){
          this.show1 = true
          this.show5 = false
          this.show4 = false
          this.show7 = false
          this.show6 = false
          this.show8 = false
        }
        else {
          this.show1 = false
          this.show7 = false
          this.show5 = true
          this.show6 = true
          this.show8 = true
        }
        this.wfrID = id;
        var api11 = `http://cangdu.org:8001/shopping/restaurants?latitude=${this.latitude}&longitude=${this.longitude}&restaurant_category_ids[]=${this.wfrID}`;
        this.axios.get(api11).then((res)=>{
          this.wfrAr = res.data
        });

        var api12 = `http://cangdu.org:8001/shopping/restaurants?latitude=${this.latitude}&longitude=${this.longitude}&order_by=${this.wfrID}`;
        this.axios.get(api12).then((res)=>{
          console.log(res.data)
        });
      },
      WOnclick555(index,$event){
        var bbb = document.getElementsByClassName("wfr-lookup-span2")
        for (var i = 0;i<bbb.length;i++){
          bbb[i].style.color = "#595757";
        }
        if (index == 0) {
          this.wfrindex = 4
        }else if(index == 1){
          this.wfrindex = 5
        }else if(index == 2){
          this.wfrindex = 6
        }else if(index == 3){
          this.wfrindex = 1
        } else if(index == 4){
          this.wfrindex = 2
        }else if(index == 5){
          this.wfrindex = 3
        }else {
          this.wfrindex = "";
        };
        $event.currentTarget.style.color="#3190e8";
        var api13 = `http://cangdu.org:8001/shopping/restaurants?latitude=${this.latitude}&longitude=${this.latitude}&order_by[]=${this.wfrindex}`
        this.axios.get(api13).then((res)=>{
            this.wfrArr = res.data
        });
          this.wfrshow1 = false;
          this.show9 = false;
          this.show2 = true;
          var mess = this.wfrAr;
          for (var i=0;i<mess.length-1;i++){
            for(var j = 0;j<mess.length-i-1;j++){
              if (mess[j].rating < mess[j + 1].rating) {
                let tmp = mess[j];
                mess[j] = mess[j + 1];
                mess[j + 1] = tmp;
              }
            }
          }
          this.wfrAr = mess
      },
      wfrEvent1(ev){
        if (this.wfrshow6 == true){
          this.wfrshow6 = false
          this.conut ++
          ev.currentTarget.style.color="#3190e8";
        }else {
          this.conut --
          this.wfrshow6 = true
          ev.currentTarget.style.color="";
        }
      },
      wfrEvent2(ev){
        if (this.wfrshow7 == true){
          this.wfrshow7 = false
          this.conut ++
          ev.currentTarget.style.color="#3190e8";
        }else {
          this.conut --
          this.wfrshow7 = true
          ev.currentTarget.style.color="";
        }
      },
      wfrEvent3(ev){
        if (this.wfrshow8 == true){
          this.wfrshow8 = false
          this.conut ++
          ev.currentTarget.style.color="#3190e8";
        }else {
          this.wfrshow8 = true
          this.conut --
          ev.currentTarget.style.color="";
        }
      },
      wfrEvent4(ev){
        if (this.wfrshow9 == true){
          this.wfrshow9 = false
          this.conut ++
          ev.currentTarget.style.color="#3190e8";
        }else {
          this.wfrshow9 = true
          this.conut --
          ev.currentTarget.style.color="";
        }
      },
      wfrEvent5(ev){
        if (this.wfrshow10 == true){
          this.wfrshow10 = false
          this.conut ++
          ev.currentTarget.style.color="#3190e8";
        }else {
          this.wfrshow10 = true
          this.conut --
          ev.currentTarget.style.color="";
        }
      },
      wfrEvent6(ev){
        if (this.wfrshow11 == true){
          this.wfrshow11 = false
          this.conut ++
          ev.currentTarget.style.color="#3190e8";
        }else {
          this.wfrshow11 = true
          this.conut --
          ev.currentTarget.style.color="";
        }
      },
      wfrpp(){
        this.show9 = false
      }
    },
    name: "fooddetails",
    data() {
      return {
        wfrshow7:true,
        wfrshow8:true,
        wfrshow9:true,
        wfrshow10:true,
        wfrshow11:true,
        wfrshow5:false,
        wfrshow6:true,
        conut:"",
        wangdata:[],
        wfrTag:false,
        data1: "",
        show1: true,
        show2: true,
        show3: true,
        show4: false,
        show5:true,
        show6:true,
        show7:true,
        show8:true,
        show9:false,
        wfrshow1:false,
        wfrshow2:true,
        wfrshow3:false,
        shoplist: [],
        imgurl1: "//elm.cangdu.org/img/",
        latitude: "",
        longitude: "",
        wfrArr: [],
        dataArr: [],
        dataimg: "",
        wfrarray: 0,
        wfrName:"",
        wfrindex:"",
        wfrID:"",
        wfrAr:[],
        wfrshuzu:[],
        wangindex:"",
        wfrshow4:false,
        wfrshuzu:[{
          img:require("../../assets/img/img4.png"),
          name:"智能排序"
        },{
          img:require("../../assets/img/img1.png"),
          name:"距离最近"
        },{
          img:require("../../assets/img/img5.png"),
          name:"销量最高"
        },{
          img:require("../../assets/img/img6.png"),
          name:"起送价最低"
        },{
          img:require("../../assets/img/img2.png"),
          name:"配送速度最快"
        },{
          img:require("../../assets/img/img3.png"),
          name:"评分最高"
        }],
      }
    },
    created(){
      this.data1 = this.$route.query.name;
      this.latitude = this.$route.query.latitude;
      this.longitude = this.$route.query.longitude;
      var api10 = `http://cangdu.org:8001/shopping/restaurants?latitude=${this.latitude}&longitude=${this.latitude}`;
      this.axios.get(api10).then((res) => {
        this.wfrArr = res.data;
        console.log(this.wfrArr)
      });
      let api8 = "http://cangdu.org:8001/shopping/v2/restaurant/category";
      this.axios.get(api8).then((res) => {
        this.shoplist = res.data;
        function qiegeFn(Arr) {
          let newStr = "";
          var tmp = Arr.substring(0, 1) + "/"
          newStr += tmp;
          var tmp = Arr.substring(1, 3) + "/"
          newStr += tmp;
          var tmp = Arr.substring(3, Arr.length) + "."
          newStr += tmp;
          var href = "https://fuss10.elemecdn.com/"
          href += newStr
          if (Arr.length == 35) {
            var hz = "png"
          } else {
            var hz = "jpeg"
          }
          return href += hz
        }
        for (var i = 0; i < this.shoplist.length;i++) {
          var arrImg = this.shoplist[i].image_url
          this.shoplist[i].image_url = qiegeFn(arrImg)
          this.shoplist[7].image_url = ""
        }
      });
    }
  }
</script>
<style scoped>
  .wfr-mark{
    width: 0.6rem;
    height: 0.6rem;
  }
  .wfr-footer-distribution .wfr-footer2{
    background-color: #56d176;
    color: #fff;
    font-weight: 200;
    border: .025rem solid #56d176;
  }
  .wfr-footer2, .wfr-footer1{
    text-align: center;
    width: 46%;
    height: 1.7rem;
    line-height: 1.7rem;
    margin-left: 0.3rem;
    display: inline-block;
    background-color: #fff;
    border: .025rem solid #fff;
    border-radius: 0.2rem;
  }
  .wfr-footer-distribution{
    height: 1.8rem;
    margin-top:0.5rem;
    padding: .4rem 0.1rem;
    background-color:#f1f1f1;
  }
  .wfr-list-span2{
    height: 1rem;
    font-size: .4rem;
    color:#666;
    display: inline-block;
    line-height: 1rem;
  }
  .wfr-list-span1{
    width: 1rem;
    height: 1rem;
    line-height: 1rem;
    display: inline-block;
    margin: 0 0 .3rem 0.1rem;
    font-size: .4rem;
    transform:scale(0.9);
  }
  .wfr-distribution-attribute{
    font-size: .4rem;
    color: #666;
    line-height: 1.5rem;
    height: 1.5rem;
    text-align: left;
    padding-left: .5rem;
    background-color: #fff;
  }
  .wfr-distribution{
    margin-left: 0.4rem;
  }
  .wfr-distribution-img{
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    border: .025rem solid #eee;
    width: 5rem;
    height: 1.4rem;
    margin-right: .25rem;
    border-radius: .125rem;
    padding: 0 .25rem;
    margin-bottom: .25rem;
  }
  .wfr-distribution-img img{
    width: 1rem;
    height: 1rem;
  }
  .wfr-distribution-span{
    font-size: 0.5rem;
    color: #666;
  }
  .wfr-distribution-svg svg{
    width: 1rem;
    height: 1rem;
  }
  .wfr-Commodity-distribution{
    font-size: .4rem;
    color: #333;
    line-height: 1.5rem;
    height: 1.5rem;
    text-align: left;
    padding-left: .5rem;
    background-color: #fff;
    -webkit-font-smoothing: revert;
  }
  .wfr-distribution-ul{
    margin-left: 0.5rem;
    width: 100%;
    overflow: hidden;
  }
  .wfr-distribution-list{
    width: 28%;
    float: left;
    height: 1rem;
    border:1px #f1f1f1 solid;
    padding: 0.1rem;
    margin: .2rem .1rem;
  }
  .wfr-business-attr{
    width: 100%;
    height: 10.5rem;
    background-color: white;
    margin-top: 3.4rem;
    animation:wfrkey 0.4s;
  }
  .wfr-lookup-img{
    width: 1.06rem;
    height: 1.06rem;
    margin-left: 0.5rem;
    padding-top: 0.3rem;
    position: absolute;
    top: -1.2rem;
  }
  .wfr-lookup-span1{
    width: 10%;
    display: inline-block;
    position: relative;
  }
  .wfr-lookup-span2{
    width: 75%;
    display: inline-block;
    font-size: 0.5rem;
    font-weight: 300;
    border-bottom: 1px solid #f1f1f1;
    padding: 0.8rem;
  }
  .wfr-lookup-list{
    width: 100%;
  }
  .wfr-lookup-method{
    width: 100%;
    margin-top: 3.4rem;
    background-color: white;
    position:absolute;
    animation:wfrkey 0.4s;
  }
  .wfr-business-Rmb {
    width: 100%;
    overflow: hidden;
  }
  .wfr-business-Rmb1{
    width: 45%;
    transform: scale(0.85);
    color: #666;
    font-size: 0.3rem;
    float: left;
  }
  .wfr-business-Rmb2 {
    width: 55%;
    transform: scale(0.85);
    font-size: 0.3rem;
    float: right;
    color: #3190e8;
  }
  .wfr-food-details{
    margin-top: 3.8rem;
  }
  .wfr-Vegetable-ul::-webkit-scrollbar {
    display:none
  }
  .wfr-Vegetable-ul{
    height: 20.36rem;
    overflow-x:scroll;
  }
  .wfr-Vegetable-div1{
    margin-left: 0.5rem;
    padding: 0.66rem 0 ;
    width: 91%;
    overflow: hidden;
    border-bottom:1px solid #f1f1f1;
  }
  .wfr-Vegetable-span1{
     float: left;
   }
  .wfr-Vegetable-span2{
    float: right;
    margin-right: 0.4rem;
  }
  .wfr-Vegetable-list {
    color: #666;
    font-size: 0.4rem;
    margin-bottom: 0.1rem;
  }
  .wfr-Menu-Vegetable {
    margin-top: 1.42rem;
    width: 50%;
    float: right;
    background-color: white;
  }
  .wfr-Menu-text1 {
    float: left;
  }
  .wfr-Menu-text2 {
    height: 0.1rem;
    float: right;
    margin-right: 0.4rem;
  }
  .wfr-Menu-count {
    margin-right: 0.4rem;
    background-color: #ccc;
    font-size: .4rem;
    color: #fff;
    padding: 0.1rem;
    border: .025rem solid #ccc;
    border-radius: .8rem;
    width: 0.5rem;
    font-weight: 100;
  }

  .wfr-Menu-imege1 {
    width: .85rem;
    height: .85rem;
    vertical-align: middle;
    position: absolute;
    left: 1rem;
    top: 0.5rem;
  }

  .wfr-Menu-imege {
    width: .8rem;
    height: .8rem;
    vertical-align: middle;
    margin-right: .2rem;
  }

  .wfr-Menu-ul {
    padding-bottom: 0.5rem;
  }

  .wfr-Menu-list {
    line-height: 2rem;
    padding-left: 1rem;
    font-size: .5rem;
    color: #666;
    position: relative;
    overflow: hidden;
  }
  .wfr-Menu-info {
    margin-top: 3.3rem;
    width: 50%;
    background-color: #f1f1f1;
    float: left;
  }
  .wfr-donghua{
    width: 100%;
    position:absolute;
    animation:wfrkey 0.4s;
  }
  @keyframes wfrkey {
    0%{
      transform: translateY(-20rem);
      opacity: 0;
    }
    100%{
      transform: translateY(0);
      opacity: 1;
    }
  }
  .wfr-Restaurant-info {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    overflow: hidden;
    position:fixed;
    top: 0;
    z-index: 5;

  }
  .wfr-business-rmb {
    overflow: hidden;
  }
  .wfr-business-rmb1 {
    transform: scale(0.85);
    color: #666;
    font-size: 0.3rem;
    float: left;
  }
  .wfr-business-rmb2 {
    transform: scale(0.85);
    font-size: 0.3rem;
    float: right;
    color: #3190e8;
  }

  .wfr-business-sapn2 {
    font-size: 0.3rem;
    margin-right: 0.6rem;
  }

  .wfr-business-sapn1 {
    color: #666;
    font-size: 0.3rem;
  }

  .wfr-Place-order-float {
    overflow: hidden;
    margin: 0.5rem 0;
  }

  .wfr-Place-sapn2 {
    font-size: 0.3rem;
    color: #3190e8;
    border: .025rem solid #3190e8;
  }

  .wfr-Place-sapn1 {
    font-size: 0.3rem;
    color: #fff;
    background-color: #3190e8;
    border: .05rem solid #3190e8;
  }

  .wfr-Place-order1 {
    transform: scale(0.7);
    float: right;
  }

  .wfr-Place-order {
    font-size: 0.35rem;
    float: left;
  }

  .wfr-locabusiness-name {
    color: black;
    font-size: 0.67rem;
  }

  .wfr-left {
    float: left;
  }

  .wfr-locabusiness-list {
    padding: 0.7rem 0;
    border-bottom: 1px solid #f1f1f1;
    overflow: hidden;
  }

  .wfr-locabusiness-tt {
    overflow: hidden;
  }

  .supports {
    font-size: .5rem;
    color: #999;
    border: .025rem solid #f1f1f1;
    border-radius: .08rem;
    margin-left: .05rem;
    font-size: .5rem;
    padding: 0 .04rem;
    margin-left: .05rem;
  }

  .shop_detail_ul {
    width: 3rem;
    transform: scale(.7);
    float: right;
  }

  .wfr-business-info {
    width: 76%;
    float: left;
  }

  .grey_fill {
    fill: #ff9a0d;
    width: 0.3rem;
    height: 0.3rem;
  }

  .wfr-business-bs {
    display: block;
    float: left;
    margin-left: 0.5rem;
  }

  .wfr-locabusiness-text {
    font-size: .5rem;
    line-height: .6rem;
    color: #333;
    background-color: #ffd930;
    padding: 0 .1rem;
    border-radius: .1rem;
    margin-right: .2rem;
  }

  .shop_icon {
    fill: #999;
    margin-left: .6rem;
    vertical-align: middle;
    width: .6rem;
    height: .6rem;
  }

  .wfr-business {
    color: #999;
    font-size: 0.55rem;
  }

  .wfr-city-business {
    margin-top: 1.5rem;
    width: 100%;
    background-color: #fff;
  }

  .wfr-locabusiness-img {
    width: 2.7rem;
    height: 2.7rem;
    margin-right: .4rem;
  }

  .wfr-city-business-loca {
    padding-top: 0.4rem;
    margin-bottom: 0.6rem;
    border-top: 1px solid #ccc;
  }

  .wfr-shop-list {
    width: 100%;
    position: absolute;
    display: -ms-flexbox;
    display: flex;
    top: 1.6rem;
    left: 0;
    border-top: .025rem solid #e4e4e4;
    background-color: #fff;
  }

  .wfr-div2 {
    transition: all 0.2s;
    transform: rotateZ(360deg);
  }

  .wfr-div3 {
    fill: #3190e8;
    transition: all 0.2s;
    transform: rotateZ(180deg);
  }

  .wfr-div1 {
    position: relative;
    width: 10px;
    height: 10px;
    transform-origin: 10px 10px;
    display: inline-block;
  }

  .wfr-commodity-copy1 span {
    color: #3190e8;
    font-size: 0.5rem;
  }

  .wfr-commodity-copy1 {
    text-align: center;
    width: 35%;
    margin: 0.3rem;
    border-right: 1px solid #f1f1f1;
    position: relative;
  }

  .wfr-commodity-option-div2 span {
    font-size: 0.5rem;
  }

  .wfr-commodity-option-div2 {
    text-align: center;
    width: 35%;
    margin: 0.3rem;
  }

  .wfr-commodity-option-div1 span {
    font-size: 0.5rem;
  }

  .wfr-commodity-option-div1 {
    text-align: center;
    width: 35%;
    margin: 0.3rem;
    border-right: 1px solid #f1f1f1;
    position: relative;
  }

  .wfr-commodity-option {
    background-color: #fff;
    border-bottom: .025rem solid #f1f1f1;
    position: fixed;
    top: 1.95rem;
    right: 0;
    width: 100%;
    display: -ms-flexbox;
    display: flex;
    z-index: 13;
    box-sizing: border-box;
  }

  .wfr-commodity-class {
    background-color: #3190e8;
    position: fixed;
    z-index: 100;
    left: 0;
    top: 0;
    width: 100%;
    height: 1.95rem;
    overflow: hidden;
  }

  .wfr-commodity-Return {
    width: 1rem;
    height: 1rem;
    display: block;
    margin-top: 0.5rem;
    margin-left: 0.3rem;
    float: left;
  }

  .wfr-commodity-name {
    display: inline-block;
    text-align: center;
    width: 90%;
    margin-top: 0.5rem;
    float: right;
    color: #fff;
    font-weight: 300;
  }
</style>
