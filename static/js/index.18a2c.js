!function(){var e,t={jquery:function(e){"use strict";e.exports=jQuery}},r={};(e=function e(o){var n=r[o];if(void 0!==n)return n.exports;var a=r[o]={exports:{}};return t[o](a,a.exports,e),a.exports}("jquery"))(function(){var t=[],r=navigator.userAgent,o=r.indexOf("Chrome")>-1;r.indexOf("MSIE");var n=r.indexOf("Firefox")>-1,a=r.indexOf("Safari")>-1;o&&a&&(a=!1);var i=e(".output-btn-wrap"),u=e(".download-output-image");function s(){$iframe=e(document.createElement("iframe"));var r=window.subject_id||window.answerObj&&window.answerObj.SUBJECT_ID||e("#mainpic a.nbgnbg").attr("href").match(/\/subject\/(\d+)\/photos/g)[0].replace("/subject/","").replace("/photos","");$iframe.css({position:"absolute",top:-1e4,left:-1e4}),$iframe.attr("src","/subject/"+r+"/output_card"),$iframe.appendTo(e("body")),t.push($iframe)}o||n?i.css({display:""}):i.remove(),u.click(function(e){e.preventDefault(),u.text("正在生成..."),s()}),window.__output_card={download_image:s,close_iframes:function(){for(u.text("引用");t.length>0;)t.pop().remove()}}})}();