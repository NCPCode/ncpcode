(function(){var e,n,i,t,l,r;l=document.getElementById("percentage"),i=document.getElementById("loading_bar"),t=document.getElementById("loading_bar_container"),r=document.getElementById("success"),e=0,n=i.innerHTML.length,window.setTimeout(function(){var o;return l.style.visibility="visible",t.style.visibility="visible",o=window.setInterval(function(){if(e+=1,l.innerHTML=String(Math.round(e/n*100))+"%",i.innerHTML=i.innerHTML.replace(" ","="),e===n)return window.clearInterval(o),r.style.visibility="visible",window.setTimeout(function(){return window.location.href="/home.html"},400)},50)},400)}).call(this);