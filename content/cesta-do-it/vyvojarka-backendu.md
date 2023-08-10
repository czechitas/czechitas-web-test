---
layout: default.njk
title: Vývojářka backendu
---
{% from 'macros.njk' import roleDetail with context%}
{% set role = roles['backend-developer'] %}
{{ roleDetail(role) }}