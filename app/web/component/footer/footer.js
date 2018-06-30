import React, {
  Component
} from 'react';

const Footout = () => {
    return  <div className="footout"><span className="topline"></span><div className="footinner clearfix"><div className="fotlogo"><dl><dt><a href="http://www.mtime.com" title="Mtime时光网">Mtime时光网</a></dt><dd className="clearfix"><a href="http://jobs.mtime.com/">加入我们</a><a href="http://feature.mtime.com/help/contact.htm" className="ml30">联系我们</a></dd><dd className="clearfix"><a href="http://group.mtime.com/help/">站务论坛</a><a href="http://my.mtime.com/reportError/" className="ml30">问题反馈</a></dd><dd className="clearfix"><a href="http://feature.mtime.com/help/rules.htm">社区准则</a><a href="http://www.mtime.com/sitemap.htm" className="ml30">网站地图</a></dd><dd className="clearfix"><a href="http://feature.mtime.com/help/privacy.htm">隐私政策</a><a href="http://en.mtime.com/" className="ml30">English</a></dd></dl><i className="line"></i></div><div className="fotmap"><dl style={{width: '42px'}}><dt>栏目</dt><dd><a href="http://news.mtime.com/">新闻</a></dd><dd><a href="http://theater.mtime.com/">影院</a></dd><dd><a href="http://mall.mtime.com">商城</a></dd><dd><a href="http://www.mtime.com/community/">社区</a></dd></dl><dl style={{width: '185px'}}><dt>推荐</dt><dd><a href="http://movie.mtime.com/recent/">观影指南</a><a href="http://movie.mtime.com/boxoffice/" className="ml30">电影票房</a></dd><dd><a href="http://news.mtime.com/conversation/">时光对话</a><a href="http://video.mtime.com/trailer/" className="ml30">新片预告</a></dd><dd><a href="http://movie.mtime.com/all/list/index.html">特色榜单</a><a href="http://my.mtime.com/app/quiz/" className="ml30">电影猜猜猜</a></dd><dd><a href="http://news.mtime.com/fun/">全球拾趣</a><a href="http://my.mtime.com/app/card/" className="ml30">卡片大富翁</a></dd></dl><dl><dt>关注我们</dt><dd><a href="http://weibo.com/movietime?topnav=1&amp;wvr=5&amp;topsug=1" target="_blank" className="sina" title="新浪">新浪</a></dd><dd><a id="aWeiXinPicButton" href="javascript:void(0)" className="weixin" title="微信">微信</a></dd><dd><a href="http://www.mtime.com/rss/" target="_blank" className="rss" title="RSS">RSS</a></dd></dl><i className="line"></i></div><div className="fotweek"><dl><dt className="clearfix"><span className="fr">第211期</span><strong>时光周刊</strong></dt>
                    <dd><a href="http://www.mtime.com/weekly/" target="_blank" title="时光周刊"><img src="http://img5.mtime.cn/mg/2018/06/12/164500.20212284.jpg" width="170" alt="时光周刊" /></a></dd><dd className="input"><input id="iptEMail" type="text" placeholder="邮箱地址" className="c_a5" /><a id="btnSubscribe" href="javascript:void(0)">订阅</a></dd></dl></div><div className="fothr"><dl><dt><strong>手机购票</strong> 方便 实惠</dt><dd><a href="http://feature.mtime.com/mobile/" target="_blank"><i></i></a></dd><dd>扫描二维码 下载客户端</dd></dl></div></div></div>
}

const Dbfoot = () => {
    return  <div className="db_foot"><p><span className="mr12">北京动艺时光网络科技有限公司</span>Copyright 2006-2018 Mtime.com Inc. All rights reserved.<br/><a href="http://feature.mtime.com/help/icp.htm" target="_blank" className="mr12 ml12">京ICP证050715号</a> <a href="http://feature.mtime.com/help/videolicence.htm" target="_blank" className="mr12">网络视听许可证0108265号</a><a href="http://feature.mtime.com/help/network.htm" target="_blank" className="mr12">网络文化经营许可证</a><a href="http://feature.mtime.com/help/tvlicence.htm" target="_blank" className="mr12">广播电视节目制作经营许可证(京)字第1435号</a><span>京公网安备：110105000744号</span></p><div className="credible"><a href="http://feature.mtime.com/help/credible.htm" target="_blank" title="可信网站" className="credibler"></a><a href="http://feature.mtime.com/help/goodfaith.htm" target="_blank" title="诚信网站" className="goodfaith"></a></div></div>
}

export default function Footer() {
  return (
    <div id="bottom">
      <Footout />
      <Dbfoot />
    </div>
  )
}
