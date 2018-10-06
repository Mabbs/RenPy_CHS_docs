# 首页 - 我的文章

 * * *

{% for category in site.categories %}
  <h3>{{ category[0] }}</h3>
  <ul>
    {% for post in category[1] %}
      <li>
        <a class="itemarticle-tips" href="{{ post.url }}">{{ post.title }}</a>
        {{ post.excerpt }}
      </li>
    {% endfor %}
  </ul>
{% endfor %}

 * * *
 
<h2>其他页面</h2> 
 
 [RenPy 中文文档（镜像站）](./RenPy_Docs_CHS/RenPy/)   

<h3>Mayx 的网站</h3>
 
[Mayx的博客 - Powered by WordPress](http://mayx.my-board.org/)   

[Mayx的Wiki](http://mayxwiki.my-style.in/)   

[Mayx的云盘](http://mayxdisk.is-best.net/)   

[Mayx的论坛 - Powered by phpBB](http://mayxbbs.my-board.org/)   

[Mayx的论坛 - Powered by 6kbbs](http://mayx.poorwebmaster.com/)   

[Mayx的论坛 - Powered by js10](http://mayx.3vcm.net/)   
