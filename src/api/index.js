
// 测试环境
const url = 'http://192.168.189.146:58055';
const nmsw ='http://192.168.189.146:58085';
const uflowPath = 'http://192.168.16.220:8090'    //220//102
const pasm ='http://192.168.189.146:58045';




// 公用
const BASEPATH = url ;  //主要使用
const NMSPATH = nmsw ;    //open  nmsw页面
const PASM = pasm;


export default {

  basePath: BASEPATH,
  nmswPath: NMSPATH,
  pasmPath:PASM,

  login: {
    token: `/uaa/oauth/token`,

  },
  index: {
    //首页
    querynetworkTop5:BASEPATH+'/ucoa/api/querynetworkTop5',
    queryEquInfo:BASEPATH+'/ucoa/api/queryEquInfo',
    queryAlarmTableData:BASEPATH+'/ucoa/api/queryAlarmTableData',
    querymoniTableData:BASEPATH+'/ucoa/api/querymoniTableData',
    //性能分析
    querystatisfault:BASEPATH+'/ucos/api/querystatisfault'

    
  },

}
