// 常用方法，关于数据遍历，提取，去重等；
import $ from "jquery"

const filterObj = function (sourceObj) {
  let ress = new Map()
  let tarObj = sourceObj.filter(
    a => !ress.has(a.zxID) && ress.set(a.zxID, 1)
  );
  console.log(typeof tarObj)
  return tarObj
}

const isValidIP = function (ip) {
  var reg = /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/
  return reg.test(ip);
}

const changeNull2Zero = function (obj) {
  for (let key in obj) {
    console.log(key)
    if (obj[key] == null) {
      obj[key] = 0
    }
  }
}

export const  arraystatistics =  (array,itemkey,computeKey)=> {

  let keyvalueContainer = {}
  array.map(item=>{
    keyvalueContainer[item[itemkey]]=keyvalueContainer[item[itemkey]]||[]  //是否有item[itemkey]  这个属性，没有的话赋  空

    keyvalueContainer[item[itemkey]].push(item)
  })

  let keyName = Object.keys(keyvalueContainer)
  
  let resultData = []
  keyName.forEach(nameItem=>{
    let count = 0;
    
    keyvalueContainer[nameItem].forEach(oneItem=>{
      count+=parseInt(oneItem[computeKey])
    })

    resultData.push({'name':nameItem,'value':count})

  })
  return resultData

}

 // 设置tooptip文本样式
 const mouseOverAndOut=function() {
  // 如果是自定义的colunms的话，可能获取不到数据
  $(".ivu-table-cell span").mouseover(function() {
    let innertext = $(this).text();
    let tooltip = "<div id='tooltipsss'>" + innertext + "</div>";
    $("body").append(tooltip);
    $("#tooltipsss").css({
      background: "red",
      postion: "absolute",
      // width: "100px",
      display:"inline-block",

    });
    $("#tooltipsss").css({ top: "100px", left: "100px" });
  });
  $(".ivu-table-cell span").mouseout(function(){
    $('#tooltipsss').remove(); 
  })
}


export {
  filterObj,
  isValidIP,
  changeNull2Zero,
  
};
