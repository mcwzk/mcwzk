var posts=["/wz/mc/","/wz/gG/","/wz/tp/","/wz/gy/","/wz/mcyxb/","/wz/yinfuhe/","/wz/mssd/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };