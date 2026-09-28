# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

delegated: Astro. Static bilingual site built from this GitHub repo and deployed on Cloudflare Pages. Chosen because the stack was delegated and the site must stay fast on phones and computers while supporting English and Arabic.

## Users

Americans and Syrians who arrive, usually from a shared link, needing to understand Presidential Proclamation 10998 and do something about it. Their job is to grasp the case and then contact the coalition, join it, or write to officials.

The coalition operates the site: Syrian students, doctors, engineers, and professionals admitted to U.S. institutions, most with full scholarships, whose entry and visa issuance are blocked.

## Product Purpose

Syrian Scholars for Peace and Prosperity explains why PP10998 should exempt qualified Syrian nationals, and turns that understanding into action. The coalition wants to study in the United States and return to help rebuild Syria. Success means a visitor understands the whole case from the home page, in English or Arabic, on a phone or a computer, and can contact the coalition, join, or use a template to write officials.

## Positioning

A public case paired with stored ways to join or contact the coalition and with ready-to-send letters to U.S. and Syrian officials. A news article or a group chat cannot hand a visitor both the argument and the letter.

## Operating Context

Visitors read on a phone or a laptop, in English or Arabic. The coalition keeps the site in this GitHub repo. Cloudflare Pages builds and hosts it on the free `pages.dev` address until a custom domain exists. Traffic is measured with Cloudflare Web Analytics. Form submissions go to Formspree on its free tier. There is no app backend and no user accounts.

## Capabilities and Constraints

- English and Arabic, with Arabic read right to left.
- Fast on phones and computers.
- The home page carries the whole case: what is happening, why it matters, who is affected, and what to do.
- Updates can be posted over time.
- Cases may show names. Until real stories are supplied, the site uses stand-in cases written as finished cases, with no example label. Real stories replace them later.
- Two forms store submissions through Formspree:
  - Contact: name, email, role (supporter, affected student or professional, press, other), and message.
  - Join: name, email, country, and how the person can help.
- Official advocacy is copy-ready email templates, not a stored letter archive. Two kinds: a supporter writing on the coalition’s behalf, and an affected person writing to officials. Each kind addresses U.S. officials and Syrian government recipients, in English and Arabic.
- A privacy notice ships with the forms because name and email are stored. A short terms page ships with it.
- Secrets and Formspree endpoints stay out of the public repo and out of client source.
- Free hosting and a free domain at first: Cloudflare Pages, not GitHub Pages.

## Brand Commitments

The public name is Syrian Scholars for Peace and Prosperity. The voice of the case is the README: collective, direct, and specific about PP10998, the coalition’s qualifications, and the goal of returning to rebuild Syria.

Four palette families were supplied as a binding input for later design. They are not a resolved visual system yet: Forest (`#002623`, `#054239`, `#428177`), Golden Wheat (`#988561`, `#b9a779`, `#edebe0`), Charcoal (`#161616`, `#3d3a3b`, `#ffffff`), and Deep Umber (`#260f14`, `#4a151e`, `#6b1f2a`).

## Evidence on Hand

`README.md` is the general case: PP10998 blocks visas for admitted Syrian nationals; Syria’s situation after December 2024 is the coalition’s argument for an exemption; the mission is study in the U.S. and return to help rebuild.

No real student stories, official letters, logos, or press clips are in the repo. Until real stories arrive, publish stand-in cases with names and do not mark them as examples. Replace those cases when real stories are provided. Do not invent official letters, logos, or press.

## Product Principles

- The whole case is understandable from the home page.
- English and Arabic carry the same substance.
- A visit ends in a real action: contact, join, or write an official.
- Stored personal data is limited to the Contact and Join fields, and it is explained in a privacy notice.
- Stand-in cases read as finished cases until real stories replace them.

## Accessibility & Inclusion

The site is for English and Arabic readers, including Arabic read right to left, and it must be usable on phones and computers. No separate accessibility standard was named.
