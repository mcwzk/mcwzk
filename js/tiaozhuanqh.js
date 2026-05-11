// 归档页面跳转
postsChart.on('click', 'series', (event) => {
  if (event.componentType === 'series' && event.value) window.location.href = '/archives/' + event.name.replace('-', '/') + '/';
});

// 标签页面跳转
tagsChart.on('click', 'series', (event) => {
  if(event.data.path) window.location.href = '/' + event.data.path;
});

// 分类页面跳转
categoriesChart.on('click', 'series', (event) => {
  if(event.data.path) window.location.href = '/' + event.data.path;
});
