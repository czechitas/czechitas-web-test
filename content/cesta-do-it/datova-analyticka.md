---
layout: default.njk
title: Datová analytička
---
{% from 'macros.njk' import roleDetail with context%}
{% set role = roles['data-analyst'] %}
{{ roleDetail(role) }}
