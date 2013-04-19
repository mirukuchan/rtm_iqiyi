(function(){

  var view = /http:\/\/www\.bilibili\.tv\/video\/av([0-9]+)\/(?:index_([0-9]+)\.html)?/.exec(document.URL);
  
  if (view == null) {
    return;
  }

  var api = "http://api.bilibili.tv/view?type=json&appkey=12737ff7776f1ade&id=" + view[1] + ((view[2] != undefined) ? "&page=" + view[2] : "");

  $.ajax({
    type: "GET",
    url: "http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20json%20where%20url=%22" + encodeURIComponent(api) + "%22&format=json",
    dataType: "jsonp",
    success: function(data){
      if(data.query.results.json.cid != undefined) {
        var ne = document.createElement("embed");
        ne.id= "bofqi_embed";
        ne.type = "application/x-shockwave-flash";
        ne.width = 950;
        ne.height = 500;
        ne.src = "https://static-s.bilibili.tv/play.swf";
        ne.setAttribute("flashvars", "cid=" + data.query.results.json.cid);
        ne.setAttribute("quality", "high");
        ne.setAttribute("allowfullscreen", "true");
        ne.setAttribute("allowscriptaccess", "always");
        ne.setAttribute("rel", "noreferrer");
        ne.setAttribute("pluginspage", "http://www.adobe.com/shockwave/download/download.cgi?P1_Prod_Version=ShockwaveFlash");
        document.getElementById("bofqi").replaceChild(ne, document.embeds[0]);
      }
    }
  });

})();