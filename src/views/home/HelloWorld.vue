<template>
  <div class="hello">
    <div class="title">测试大屏</div>
    <!-- <span>{{msg}}</span> -->
    <div class="data-move">
      <div class="move-title">动态数据</div>
      <div class="move-time">时间:{{nowtime}}</div>
      <div class="move-data">数据:<span v-for="i in numArr">{{i}}</span></div>
      <div class="box">
        <!-- <p class="box-item">
          <span id="Number">0123456789</span>
        </p> -->
        <ul class="show-ul">
          <li 
            :class="{'box-item': !isNaN(item) }"
            v-for="(item,index) in numArr"
            :key="index"
          >
            <span v-if="!isNaN(item)">
              <i ref="numberItem" >0123456789</i>
            </span>
            <span v-else>{{item}}</span>
          </li>
        </ul>

      </div>

    </div>
    
  </div>
</template>

<script>
import dateformat from "@/utils/dateformat.js";
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: this.toThousands(111111),
      numArr:[],
      nowtime:''
    }
  },
  mounted(){
      this.setTime();
      //单个数字的时候 测试用的
      // setInterval(() => {
      //     let number = document.getElementById('Number');
      //     let random = this.getRandomNumber(0,9);
      //     number.style.transform = `translate(-50%, -${random * 10}%)`
      //   }, 2000);
      this.moveData();

  },
  destroyed(){
    clearInterval(this.timeInterval);
    clearInterval(this.moveInterval);
   
  },
  created(){
    this.$randomPer = parseInt(((new Date().getTime() - new Date(new Date().setHours(0, 0, 0, 0)).getTime()) / 1000)) + 1000;
    this.perNum();  
  },
  methods:{
    //时间动态
    setTime(){
      this.nowtime = dateformat.dateFormat(new Date(),"yyyy-MM-dd hh:mm:ss")
      this.timeInterval = setInterval(()=>{
        this.nowtime = dateformat.dateFormat(new Date(),"yyyy-MM-dd hh:mm:ss")
      },1000);
    },
    //
    getRandomNumber(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min)
    },
    //数字拆分
    splits(num){
      return (num || 0).toString().split('');
    },
    //数字加，
    toThousands(num) {
      var num = (num || 0).toString(), result = '';
      while (num.length > 3) {
          result = ',' + num.slice(-3) + result;
          num = num.slice(0, num.length - 3);
      }
      if (num) { result = num + result; }
      return result;
    },
    //
    perNum() {
      var $random2 = parseInt(Math.random() * 5) + 1;
      // console.log("this.$randomPer",this.$randomPer)
      this.$randomPer += $random2;
      this.$obj = this.toThousands(this.$randomPer);
      this.numArr = this.$obj.split('');
      setTimeout(this.perNum, 2000);
    },
    moveData(){
      this.moveInterval = setInterval(()=>{
              this.setNumberTransform()
            },2000);
    },
    //数据动态切换的
    setNumberTransform () {
      let numberItems = this.$refs.numberItem
      let numberArr = this.numArr.filter(item => !isNaN(item))
      for (let index = 0; index < numberItems.length; index++) {
        let elem = numberItems[index]
        elem.style.transform = `translate(-50%, -${numberArr[index] * 10}%)`
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
  background: url("../../../static/image/bj.png") no-repeat  0 0 ;
  background-size:100% 100%;
  position: fixed;
  width: 100%;
  min-height: 100%;
}
.title{
  width: 100%;
  height: 40px;
  text-align: center;
  font-size: 18px;
  color: #fff;
  line-height: 40px;
  /* border: 1px solid red; */
}
.data-move{
  width: 25%;
  height: 130px;
  /* border: 1px solid red; */
  margin-left: 10px;
}
.move-title{
  width: 100%;
  height: 25px;
  text-align: center;
  font-size: 14px;
  color: #fff;
  /* border: 1px solid red; */
}
.move-time{
  width: 100%;
  height: 25px;
  text-align: center;
  font-size: 12px;
  line-height: 25px;
  color: #fff;
  
}
.move-data{
  width: 100%;
  height: 25px;
  font-size: 12px;
  line-height: 25px;
  color: #fff;
  text-align: center;

}
.box-item {
  width: 30px;
  height: 45px;
  background: url(../../../static/image/showdata.png) no-repeat center center;
  background-size:100% 100%;
  display: inline-block;
  position: relative;
  text-align: center; 
  writing-mode: vertical-lr;
  text-orientation: upright;
  margin-right: 5px;
  margin-left: 5px;

}
.box{
  color: #fff;
  font-size: 30px;
  margin-left: 30px;
}
.box ul{
  display: flex!important;
}
.box-item span {
  /* 原来 */
  /* position: absolute;
  top: 2px;
  left: 50%;
  border:1px solid red;
  /* transform: translateX(-50%); */
  /* transform: `translate(-50%,-${number * 10}%)` 数据动态切换 */
  /* transform: translate(-50%,-10%);
  letter-spacing: 5px; */ 

    position: relative;
    display: inline-block;
    /* margin-right: 5px; */
    margin-top: 2px;
    width: 100%;
    height: 100%;
    writing-mode: vertical-rl;
    text-orientation: upright;
    overflow: hidden;
    /* border:1px solid red; */
}
.box-item >span>i{
    position: absolute;
    top: 0;
    left: 20%;
    transform: translate(-50%,0);
    transition: transform 0.5s ease-in-out;
    letter-spacing: 5px;
}

/* .number-item {
  width: 50px;
  background: url(./number-bg.png) no-repeat center center;
  background-size:100% 100%;
  & > span {
    position: relative;
    display: inline-block;
    margin-right: 10px;
    width: 100%;
    height: 100%;
    writing-mode: vertical-rl;
    text-orientation: upright;
    overflow: hidden;
    & > i {
      position: absolute;
      top: 0;
      left: 50%;
      transform: translate(-50%,0);
      transition: transform 0.5s ease-in-out;
      letter-spacing: 10px;
    }
  }
} */

</style>
