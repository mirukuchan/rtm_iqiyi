window.rtm_iqiyi = (function(w, d, undefined){

  var params = /http:\/\/www\.bilibili\.tv\/video\/av([0-9]+)\/(?:index_([0-9]+)\.html)?/.exec(d.URL);
  
  if (!params) return -1;

  var api = "http://api.bilibili.tv/view?type=json&appkey=12737ff7776f1ade&id=" + params[1] + ((params[2] != undefined) ? "&page=" + params[2] : "");

  var url = "http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20json%20where%20url=%22" + encodeURIComponent(api) + "%22&format=json&callback=cbfunc";

  var bofqi = d.getElementById("bofqi");
  bofqi.innerHTML = "";

  cbfunc = function() {
    var info = arguments[0].query.results.json;
    if(info.cid != undefined) {
      var play = d.createElement("embed");
      play.id= "bofqi_embed";
      play.type = "application/x-shockwave-flash";
      play.width = 950;
      play.height = 482;
      play.src = "https://static-s.bilibili.tv/play.swf";
      play.setAttribute("flashvars", "cid=" + info.cid);
      play.setAttribute("quality", "high");
      play.setAttribute("allowfullscreen", "true");
      play.setAttribute("allowscriptaccess", "always");
      play.setAttribute("rel", "noreferrer");
      play.setAttribute("pluginspage", "http://www.adobe.com/shockwave/download/download.cgi?P1_Prod_Version=ShockwaveFlash");
      bofqi.appendChild(play);
    }
    cbfunc = null;
  }

  var jsonp = d.createElement("script");
  jsonp.setAttribute("src", url);
  jsonp.onload = function () {
    this.onload = null;
    this.parentNode.removeChild(this);
    jsonp = null;
  };
  d.getElementsByTagName("head")[0].appendChild(jsonp);

  return 200;

})(window, document);

