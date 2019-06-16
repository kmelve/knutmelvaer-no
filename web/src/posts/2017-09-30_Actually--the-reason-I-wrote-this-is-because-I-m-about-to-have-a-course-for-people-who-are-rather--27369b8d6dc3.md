---
title: >-
  Actually, the reason I wrote this is because I’m about to have a course for
  people who are rather…
description: >-
  Anyways, the avoiding structures, preferring channels thing ties into how we
  think about websites at Netlife. We use something called The…
date: '2017-09-30T20:19:18.991Z'
categories: []
keywords: []
slug: >-
  /@kmelve/actually-the-reason-iwrote-this-is-because-im-about-to-have-a-course-for-people-who-are-rather-27369b8d6dc3
---

Actually, the reason I wrote this is because I’m about to have a course for people who are rather new to Craft. But since I don’t go into to much details here, I guess it’s a bit hard to follow.

Anyways, the avoiding structures, preferring channels thing ties into how we think about websites at [Netlife](https://netlife.com). We use something called [The Core Model](https://alistapart.com/article/the-core-model-designing-inside-out-for-better-results) which treats every page containing important user tasks as _the landing page_ (they probably got there from Google). This leads us to make websites that is optimized to be navigated through the content (links, call to action and so on), and really shallow and simple menus. Hiearchy is seldom important for a user, though it makes sense for the content producer.

So, that means that our menus tend to be hard coded, or we actually make a channel(!) called _Navigation_, with entries like “Header navigation” and “Footer navigation”. In those we have fields like [Linkit](https://github.com/fruitstudios/LinkIt), which easily makes you created either links internally, or externally. It’s perhaps not the most elegant solution, but it does the trick.

You have loads of flexibility in the combination of channels and categories.

Good luck trying out Craft! As a Wordpress/Drupal developer, you’d be surprised how quick and easy it is to set up. I must admit it’s a bit hard to go back to ye’old _while: (have\_posts())_ after having been spoiled by the ease of Twig and the flexilibilty of the EntryModel 😉.