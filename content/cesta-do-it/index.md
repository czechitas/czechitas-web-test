---
layout: default.njk
title: Cesta do IT
---
{% from 'macros.njk' import card with context%}
{{ paths.intro | safe }}
{% for team in paths.teams  %}
<h3>{{ team.name }}</h3>
<p>{{ team.description }}</p>
<div class="w-dyn-list"><div role="list" class="collection-list-6 overflow w-dyn-items" style="margin-top:0px">
{% for roleName in team.roles %}
{% set role = roles[roleName] %}
{{ card(role.url, role.name, role.shortDescription, role.cta) }}
{% endfor %}
</div></div>
{% endfor %}
