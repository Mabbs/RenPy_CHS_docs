---
paginate_path: "page:num"
---

# 首页 - 我的文章

 * * *

{% if paginator.total_pages > 1 %}
<div class="pagination">
  {% if paginator.previous_page %}
    <a href="{{ paginator.previous_page_path | prepend: site.baseurl | replace: '//', '/' }}">&laquo; Prev</a>
  {% else %}
    <span>&laquo; Prev</span>
  {% endif %}

  {% for page in (1..paginator.total_pages) %}
    {% if page == paginator.page %}
      <em>{{ page }}</em>
    {% elsif page == 1 %}
      <a href="{{ '/index.html' | prepend: site.baseurl | replace: '//', '/' }}">{{ page }}</a>
    {% else %}
      <a href="{{ site.paginate_path | prepend: site.baseurl | replace: '//', '/' | replace: ':num', page }}">{{ page }}</a>
    {% endif %}
  {% endfor %}

  {% if paginator.next_page %}
    <a href="{{ paginator.next_page_path | prepend: site.baseurl | replace: '//', '/' }}">Next &raquo;</a>
  {% else %}
    <span>Next &raquo;</span>
  {% endif %}
</div>
{% endif %}

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
