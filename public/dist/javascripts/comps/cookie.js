define("cookie",function(a,b,c){var d={set:function(a,b,c){var d="";if(a&&b){if(c){var e=+new Date;e.setTime(e+864e5*c),d=";expires="+e.toGMTString()}document.cookie=a+"="+encodeURIComponent(b)+d+"; path=/;"}},get:function(a){a+="=";for(var b=document.cookie.split(";"),c=0;c<b.length;c++){var d=b[c].trimLeft();if(0==d.indexOf(a))return decodeURIComponent(d.substring(a.length,d.length))}return""}};c.exports=d});