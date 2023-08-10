---
layout: default.njk
title: Vývojářka frontendu
---
{% from 'macros.njk' import roleDetail with context%}
{% set role = roles['frontend-developer'] %}
{{ roleDetail(role) }}