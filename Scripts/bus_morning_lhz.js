

/**
 * @fileoverview Template to compose HTTP reqeuest.
 *
 */

const $ = new Env('早班车预约');

!(async () => {
    await carsubscribe();
  })()
.catch((e) => $.logErr(e))
.finally(() => $.done())
//数据获取


function carsubscribe(timeout = 0) {
    return new Promise((resolve) => {
        let option = {
            url: "http://gl.yichengshidai.com/api/api-oa/park-bus-app/appointmentBus/28", // URL，必须
            headers: { // 请求头，可选
                'Accept' : `*/*`,
                'Accept-Encoding' : `gzip, deflate`,
                'Connection' : `keep-alive`,
                'Content-Type' : `application/json`,
                'Host' : `gl.yichengshidai.com`,
                'User-Agent' : `Mozilla/5.0 (iPhone; CPU iPhone OS 16_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 Html5Plus/1.0 (Immersed/20) uni-app`,
                'Authorization' : `bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MTA0NzAxNzUsInVzZXJfbmFtZSI6IjE1ODEwNzMzMjY2IiwiYXV0aG9yaXRpZXMiOlsiQUxMIiwiLztBTEwiLCIvbW9kdWxlO0FMTCIsIi9EYXNoYm9hcmQ7QUxMIiwiO0FMTCJdLCJqdGkiOiJkODQ3MmEwNy02ZWM4LTQ4YjYtYTMzNy1hODJiMWVlZjhmZGEiLCJjbGllbnRfaWQiOiJhcHAiLCJzY29wZSI6WyJ4eCJdfQ.gITJmhfb3Aia2Aq-RZA2oWjfY6atyuXJaTus-2LtEjO1FE8zU2K4RcCCZGGfI1pces6pELZUsjRToQgjSCbINisJCqCvChaY-FiV9UeKaCRdy0j_lD9MopDxNV4r5nmQ3fock_0VVN6QDktangbD2qbGlozFnq_0mchfdmQMxdaabUWCer_fG4Oa8e-poHZPbyJmAISsniSjT6hCs46QxerUjbsk_NIX_FrKoe1Z96_fx1TeYqaJzVZtyhn4wpboIVLzG6FdSpWpXNSvDi75kVK4cqZ3VfleW5UVxIbV1VDSx3kYCwPlxckc0yhGCMNcVC12cpH9MC5tEJBnlU5cEQ`,
                'Accept-Language' : `zh-CN,zh-Hans;q=0.9`
            },
        }
        $.get(option, async (err, resp, data) => {
            try {
                $.msg(data);
            } catch (e) {
                $.msg(e)
            } finally {
                resolve()
            }
        },timeout)
    })
}


function Env(t,e){class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`\ud83d\udd14${this.name}, \u5f00\u59cb!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),a={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(a,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?
