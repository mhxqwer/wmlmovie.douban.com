!function(){function e(e,t){for(p in t)t.hasOwnProperty(p)&&(e[p]=t[p]);return e}function t(e){return"[object Array]"===Object.prototype.toString.call(e)}function i(e){if(!document.getElementById("css-share-button")){var t=document.createElement("style");t.type="text/css",t.id="css-share-button",t.styleSheet?t.styleSheet.cssText=e:t.appendChild(document.createTextNode(e));try{document.getElementsByTagName("head")[0].appendChild(t)}catch(e){}}}var n=".bn-sharing{padding-right:10px;background-image:url(//img3.doubanio.com/pics/a1.png) !important;background-repeat:no-repeat !important;background-position:100% -19px !important;}a.bn-sharing:hover{text-decoration:underline;}.bn-sharing-on{background-position:100% 4px !important;position:relative !important;z-index:1 !important;}#db-div-sharing{position:absolute;width:100px;}#db-div-sharing .bd{border:1px solid #aaa;background:#fff;padding:10px 0 0 10px;}#db-div-sharing .bd li{line-height:20px;margin-bottom:5px;}#db-div-sharing .hd{position:absolute;height:24px;overflow:hidden;right:0;top:-24px;padding:0 5px;border:1px solid #aaa;border-bottom:none;background:#fff;}.rec-ren,.rec-sin,.rec-douban,.rec-tx,.rec-sohu,.rec-qqim,.rec-wechat{padding-left:23px;background:url(//img3.doubanio.com/img/files/file-1395904010.png) no-repeat 0 0;}.rec-wechat{background-position:0 0;}.rec-sin{background-position:0 -20px;}.rec-qqim{background-position:0 -40px;}.rec-tx{background-position:0 -60px;}.rec-ren{background-position:0 -80px;}.rec-douban{background-position:0 -100px;}",r={sina:"3015934887",tx:"1459b2ac3d2345d2a17396eec5ad3bd7"},o={default_menu_list:["wechat","sina","qqim"],services:{sina:{label:"新浪微博",class_name:"rec-sin",log_vendor:"bshare_sina",popup:{width:440,height:430},url:"http://v.t.sina.com.cn/share/share.php?appkey="+r.sina+"&url={{url}}&title={{title}}&pic={{image_url}}&source=&sourceUrl=&content=utf-8"},sohu:{label:"搜狐微博",class_name:"rec-sohu",log_vendor:"bshare_sohu",popup:{width:660,height:470},url:"http://t.sohu.com/third/post.jsp?url={{url}}&title={{title}}&pic={{image_url}}&content=utf-8"},qzone:{label:"QQ空间",class_name:"rec-qzone",log_vendor:"bshare_qzone",url:"http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url={{url}}"},tx:{label:"腾讯微博",class_name:"rec-tx",log_vendor:"bshare_tx",popup:{width:700,height:680},url:"http://v.t.qq.com/share/share.php?appkey="+r.tx+"&url={{url}}&title={{title}}&pic={{image_url}}"},qqim:{label:"QQ好友",class_name:"rec-qqim",log_vendor:"bshare_qqim",url:"http://connect.qq.com/widget/shareqq/index.html?url={{url}}&desc={{title}}&pics={{image_url}}&site=豆瓣"},msn:{label:"MSN",class_name:"rec-msn",log_vendor:"bshare_msn",url:"http://profile.live.com/badge?url={{url}}&title={{title}}&wa=wsignin1.0"},wechat:{label:"微信",class_name:"rec-wechat",customAction:!0,url:"javascript:void(ShareButton.actions.openWechatPopup())"}},renderUrl:function(e,t){var i=e.url,n=encodeURIComponent;if(i=i.replace("{{url}}",n(t.url)).replace("{{title}}",n(t.title)).replace("{{image_url}}",n(t.image_url)).replace(/'/g,"%27"),e.log_vendor&&(i="http://www.douban.com/link2?type=redir&vendor="+e.log_vendor+"&url="+n(i)),e.popup){var r=e.popup.width,o=e.popup.height;i='javascript:void((function(s,d){var%20f="'+n(i)+'";function%20a(){if(!window.open(f,"mb",["toolbar=0,status=0,resizable=1,width='+r+",height="+o+',left=",(s.width-'+r+')/2,",top=",(s.height-'+o+')/2].join("")))location.href=f};if(/Firefox/.test(navigator.userAgent))setTimeout(a,0);else%20a()})(screen, document))'}return e.customAction&&(i=e.url),i},getMenuListHTML:function(e,t,i){for(var n,r,o,a=[],s=this.menu_list,c={url:e||"",title:t||"",image_url:i||""},l=0;l<s.length;l++)n=s[l],r=this.services[n],r&&("wechat"!=n||window.QRCode)&&(o='<li class="'+(r.class_name||"")+'">',o+="<a "+(r.popup?'target="_blank"':"")+" href='"+this.renderUrl(r,c)+"'>"+r.label+"</a>",o+="</li>",a.push(o));var d='<div class="hd">&nbsp;</div><div class="bd"><ul>'+a.join("")+"</ul></div>";return d},getShareContent:function(t){var i,n={url:location.href,title:document.title};i="Topic"==this.source_type?$(".topic-figure img"):$("#mainpic img"),n.image_url=i.length?i[0].src:"",this.share_content=e(n,t||{})},hackForTopicWeibo:function(){"Topic"==this.source_type&&(this.services.sina.url=this.services.sina.url.replace(r.sina,"3368957101"),this.services.sina.url+="&ralateUid=3083247701")},hideMenu:function(){$(".bn-sharing-on").removeClass("bn-sharing-on"),$("#db-div-sharing").hide()},actions:{openWechatPopup:function(){var e=window.location.href,t=["<style>.dlg-qr .bd{background: url(//img3.doubanio.com/f/movie/b8c6b6e8f4cec9a7a8c65143c4ab61b9e22e300f/pics/movie/qr_help.png) right 0 no-repeat}</style>",'<div class="qr-content">','<div class="qr">','<div class="qr-img">',"</div>","</div>"].join(""),i=dui.Dialog({cls:"dlg-qr",title:"扫描下方二维码分享到微信",content:t,width:400,height:224},!1);return new QRCode($(i.node).find(".qr-img")[0],{text:e,height:150,width:150,correctLevel:QRCode.CorrectLevel.L}),i.open().update(),!1}},bindEvents:function(){var e=this;$(document.body).click(function(t){var i=$(t.target);if(!i.hasClass("bn-sharing")||i.hasClass("bn-sharing-on"))return void e.hideMenu();t.preventDefault(),t.stopPropagation(),i.addClass("bn-sharing-on");var n=$("#db-div-sharing");n.length||(n=$('<div id="db-div-sharing"></div>').appendTo("body"));var r,o,a;if(i.hasClass("in-list")){var s=i.closest(".ctsh").find("h3 a:eq(0)");r=i.data("title")||(s.length?s.text():e.share_content.title)}else r=i.data("title")||e.share_content.title;var c=i.data("type");c&&(e.source_type=c,e.hackForTopicWeibo()),o=i.data("url")||e.share_content.url,a=i.data("pic")||e.share_content.image_url,n.html(e.getMenuListHTML(o,r,a));var l=i.offset();n.find(".hd").css("width",i[0].offsetWidth+"px"),n.css("top",l.top+24-4+"px").css("left",l.left-n.width()+i.width()+16+"px"),n.find(".hd a").addClass("bn-sharing-on"),n.show()}),window.onresize=e.hideMenu},init:function(r){var r=r||{};t(r)&&(r=0===r.length?{}:{menu_list:r}),this.menu_list=r.menu_list||this.default_menu_list,e(this.services,r.custom_services||{}),this.source_type=r.source_type||"douban",this.hackForTopicWeibo(),i(n),this.getShareContent(r.share_content),this.bindEvents()}};window.ShareButton=o}(),window.ShareButton.init(window.DoubanShareMenuList);