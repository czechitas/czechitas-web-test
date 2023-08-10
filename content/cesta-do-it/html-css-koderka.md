---
layout: default.njk
title: HTML/CSS kodérka
---
{% from 'macros.njk' import roleDetail with context%}
{% set role = roles['html-css-coder'] %}
{{ roleDetail(role) }}
