var posts=["/wz/yinfuhe/","/wz/mc/","/wz/mcyxb/","/wz/gG/","/wz/mssd/","/wz/tp/","/wz/gy/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };