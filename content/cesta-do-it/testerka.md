---
layout: default.njk
title: Testerka
---
{% from 'macros.njk' import roleDetail with context%}
{% set role = roles['tester'] %}
{{ roleDetail(role) }}