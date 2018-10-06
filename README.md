# 首页 - 我的文章

 * * *

{% for category in site.categories %}
  <h3>{{ category[0] }}</h3>
  <ul>
    {% for post in category[1] %}
      <li>
        <a href="{{ post.url }}">{{ post.title }}</a>
        {{ post.excerpt }}
      </li>
    {% endfor %}
  </ul>
{% endfor %}

 * * *
 
 <input name="live2dBGM" value="https://m10.music.126.net/20181007014443/7a2cd96753c9f7e35cd0505d36df56fc/ymusic/1cb7/04f3/02b4/9699485be519c9a5d503741ad5b20e17.mp3" type="hidden">
 
<h2>其他页面</h2> 
 
 [RenPy 中文文档（镜像站）](./RenPy_Docs_CHS/RenPy/)   

<h3>Mayx 的网站</h3>
 
[Mayx的博客 - Powered by WordPress](http://mayx.my-board.org/)   

[Mayx的Wiki](http://mayxwiki.my-style.in/)   

[Mayx的云盘](http://mayxdisk.is-best.net/)   

[Mayx的论坛 - Powered by phpBB](http://mayxbbs.my-board.org/)   

[Mayx的论坛 - Powered by 6kbbs](http://mayx.poorwebmaster.com/)   

[Mayx的论坛 - Powered by js10](http://mayx.3vcm.net/)   
