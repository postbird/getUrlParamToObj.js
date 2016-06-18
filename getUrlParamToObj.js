/** Created by postbird on 2016/4/1.  ...*/
/**
 *      @postbird
 *      1、本插件采用js编写，可直接将函数复制到个人js文件，减少get请求数
 *      2、author：powered by postbird
 *      3、email： ptbird@yeah.net
 *      4、site：http://www.ptbird.cn
 *      5、license : MIT
 * */
/**
 * 通过 js location对象的search属性返回？以及后面的参数部分
 */
function getUrlParamToObj() {
    var url = location.search;//获取参数部分
    var ansObj = new Object();//设置返回参数的对象
    if (url.indexOf("?") != -1) {  //indexOf()如果返回-1 则存在?
        var str = url.substr(1).split("&");//将？去掉 进行&分割  a=1 b=2  进行对象拼装
        for (var i = 0; i < str.length; i++) {
            var tempArr = str[i].split("=");//拆分 =
            ansObj[tempArr[0]] = (tempArr[1]);
        }
    }
    return ansObj;
}
