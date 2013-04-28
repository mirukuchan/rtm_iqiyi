(window.rtm_iqiyi = (function(w, d, dasffsdf){

  addTips = function(iqiyi_tips) {
    var pElem = d.createElement("p");
    for (var i = 1; i < arguments.length; i++) {
      var span = d.createElement("span");
      span.innerText = arguments[i];
      pElem.appendChild(span);
    };
    iqiyi_tips.appendChild(pElem);
    hidden(pElem, 5000);
  };

  hidden = function(elem, sleep) {
    setTimeout(function() {
      var opacity = 1;
      var pid = setInterval(function() {
        opacity -= 0.01;
        elem.style.opacity = opacity;
        if (opacity < 0) {
          w.clearInterval(pid);
          elem.parentNode.removeChild(elem);
        } 
      }, 20);
    }, sleep);
  };

  cbfunc = function() {
    var info = arguments[0].query.results.json;
    if(info.cid != undefined) {
      addTips(iqiyi_tips, "获取神秘代码成功", "神秘代码ID: " + info.cid);
      var iframe = d.createElement("iframe");
      iframe.height = 490;
      iframe.width = 950;
      iframe.src = "https://secure.bilibili.tv/secure,cid=" + info.cid + "&amp;aid="+ params[1];
      iframe.setAttribute("border", 0);
      iframe.setAttribute("scrolling", "no");
      iframe.setAttribute("frameborder", "no");
      iframe.setAttribute("framespacing", 0);
      iframe.setAttribute("style", "width: 950px; height: 588px; margin-top: 5px;");
      bofqi.appendChild(iframe);
      // var play = d.createElement("embed");
      // play.id= "bofqi_embed";
      // play.type = "application/x-shockwave-flash";
      // play.width = 950;
      // play.height = 482;
      // play.src = "https://static-s.bilibili.tv/play.swf";
      // play.setAttribute("flashvars", "cid=" + info.cid);
      // play.setAttribute("quality", "high");
      // play.setAttribute("allowfullscreen", "true");
      // play.setAttribute("allowscriptaccess", "always");
      // play.setAttribute("rel", "noreferrer");
      // play.setAttribute("pluginspage", "http://www.adobe.com/shockwave/download/download.cgi?P1_Prod_Version=ShockwaveFlash");
      // bofqi.appendChild(play);
      (w.rtm_iqiyi = function() {
        addTips(iqiyi_tips, "Mission Completed", "嗶哩嗶哩 - ( ゜- ゜)つロ  乾杯~");
      })();
    } else {
      addTips(iqiyi_tips, "非常抱歉, bishi姥爷不肯给神秘代码", "要不你吼一声\"兵库北\"后再试试?");
      w.rtm_iqiyi = null;
    }
  };

  var head = d.getElementsByTagName("head")[0];

  var style = d.createElement("style");
  style.type = "text/css";
  style.appendChild(d.createTextNode('#_riqy_tips{position:fixed;right:16px;bottom:32px;z-index:100}#_riqy_tips p{position:relative;background:rgba(0,0,0,.9);box-shadow:0 1px 2px rgba(0,0,0,.5);border-radius:2px;margin:10px 0px;padding:7px 10px 7px 5px;z-index:100}#_riqy_tips p span{color:#FFF;display:block;padding-left:5px;border-left:5px solid #C00;font-family:"Segoe UI","Helvetica Neue",Helvetica,Arial,"Microsoft YaHei","STHeiti","SimSun",Sans-serif;font-size:12px;font-weight:bold;text-align:left;line-height:20px;z-index:100}'));
  head.appendChild(style);

  var iqiyi_tips = d.createElement("div");
  iqiyi_tips.id = "_riqy_tips";
  d.body.appendChild(iqiyi_tips);

  params = /http:\/\/www\.bilibili\.tv\/video\/av([0-9]+)\/(?:index_([0-9]+)\.html)?/.exec(d.URL);
  var iframePlay = /https:\/\/secure\.bilibili\.tv\/secure,cid=([0-9]+)(?:&aid=([0-9]+))?/;

  if (!params) return (function() {
    addTips(iqiyi_tips, "扬帆远洋扫广场", "民主自由不可挡");
  });

  var api = "http://api.bilibili.tv/view?type=json&appkey=12737ff7776f1ade&id=" + params[1] + ((params[2] != undefined) ? "&page=" + params[2] : "");

  var url = "http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20json%20where%20url=%22" + encodeURIComponent(api) + "%22&format=json&callback=cbfunc";

  if (!!d.getElementById("bofqi_embed") || (function() {
    iframes = d.getElementsByTagName("iframe");
    for (key in iframes) {
      if (!!iframePlay.exec(iframes[key].src)) {
        return true;
      }
    }
    return false;
  }())) return (function() {
    addTips(iqiyi_tips, "bilibili满状态中", "＼(・ω・＼)丧尸！(／・ω・)／bishi");
  });

  var bofqi = d.getElementById("bofqi");
  bofqi.innerHTML = "";
  addTips(iqiyi_tips, "成功干掉原先的播放器");

  var jsonp = d.createElement("script");
  jsonp.setAttribute("src", url);
  jsonp.onload = function() {
    this.parentNode.removeChild(this);
    jsonp = null;
  };
  head.appendChild(jsonp);

  return (function() {
    addTips(iqiyi_tips, "正在获取神秘代码");
  });

})(window, document))();