---
layout: default.njk
title: Datová vědkyně
---
{% from 'macros.njk' import roleDetail with context%}
{% set role = roles['data-scientist'] %}
{{ roleDetail(role) }}
