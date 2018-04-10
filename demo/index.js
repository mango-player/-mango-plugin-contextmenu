Mango.install(mangoPluginControlbar);
// Mango.install(mangoPluginLog);
Mango.install(mangoPluginContextmenu);

const player = new Mango({
  // 业务标识
  business_id:'livecloud',

  // 播放地址
  src: 'http://cdn.toxicjohann.com/lostStar.mp4',
  // 直播:live 点播：vod
  isLive: false,
  // 编解码容器
  box: 'native',
  // dom容器
  wrapper: '#wrapper',
  plugin: [
    mangoPluginControlbar.name, 
    // mangoPluginLog.name, 
    mangoPluginContextmenu.name
  ],
  // video
  autoplay: true,
  controls: true
});
