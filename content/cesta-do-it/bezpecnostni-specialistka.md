---
layout: default.njk
title: Bezpečnostní specialistka
---
{% from 'macros.njk' import roleDetail with context%}
{% set role = roles['security-specialist'] %}
{{ roleDetail(role) }}
