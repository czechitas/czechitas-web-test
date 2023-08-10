---
layout: default.njk
title: Datová inženýrka
---
{% from 'macros.njk' import roleDetail with context%}
{% set role = roles['data-engineer'] %}
{{ roleDetail(role) }}
