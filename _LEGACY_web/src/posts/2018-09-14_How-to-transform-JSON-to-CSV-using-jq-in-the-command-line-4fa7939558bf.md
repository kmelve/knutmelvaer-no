---
title: How to transform JSON to CSV using jq in the command line
description: >-
  The shell tool jq is awesome for dealing with JSON-data. It can also transform
  that data into handy CSV-files, ready for all your…
date: '2018-09-14T14:57:57.116Z'
categories: []
keywords: []
slug: >-
  /@kmelve/how-to-transform-json-to-csv-using-jq-in-the-command-line-4fa7939558bf
---

![](img/1__9v1EW10o8um03EbAdinhYg.png)

The shell tool jq is awesome for dealing with JSON-data. It can also transform that data into handy CSV-files, ready for all your spreadsheet wrangling needs.

`jq` is an excellent little tool that lives in your terminal and does useful stuff with JSON-data. It’s a potent tool, but handy for the little things as well. For example, if you pipe JSON data to it, it prints it with syntax highlighting 🔦 by default:

`$ cat some-data.json|jq`

You can [install jq](https://stedolan.github.io/jq/download/) on most systems. (`brew install jq` on a Mac with [homebrew](https://brew.sh/) / `chocolatey install jq` on windows with [chocolatey](https://chocolatey.org/)). This post presents a more advanced `jq` technique. If you want to get the basics, you should [check out the tutorial](https://stedolan.github.io/jq/tutorial/).

`jq` works with any JSON source. Since I’m spending most of my days working with [Sanity.io](https://sanity.io?utm_source=freecodecamp&utm_medium=blog&utm_campaign=jq)\-based backends, I’ll use that as an example. Also because I think it’s immensely cool what we can do with this combination.

[Sanity is a backend for structured content](https://?utm_source=freecodecamp&utm_medium=blog&utm_campaign=jq) and comes with a real-time API, and a query language called [GROQ](https://www.sanity.io/docs/data-store/how-queries-work?utm_source=freecodecamp&utm_medium=blog&utm_campaign=jq). You can interact with Sanity via [HTTP](https://www.sanity.io/docs/reference/http-api?utm_source=freecodecamp&utm_medium=blog&utm_campaign=jq) and [JS/PHP clients](https://github.com/sanity-io/sanity#api-clients), but also with the CLI tool with `$ sanity documents query 'GROQ-expression'`.

![Output from sanity.io piped through jq](img/1__CS6SQLwE__XlTsCgHfNYQhA.png)
Output from sanity.io piped through jq

So if you want your documents of the type `post`, you put `$ sanity documents query '*[_type == "post"]'`. Or if you just want those with a publish date in 2018, it’s`$ sanity documents query '*[_type == "post" && publishedAt > "2018-01-01"]'`. This query gives you whole documents. If you just wanted the titles, and publish dates, you’d write: `*[_type == "post"]{title, publishedAt}`.

![The output from Sanity CLI piped through jq](img/0__000Oj1Bfexw4knXQ.jpg)
The output from Sanity CLI piped through jq

You can pick out keys and values from JSON data in `jq` as well. Today we’re going to use it to transform structured content in a JSON array to a CSV file. Because your boss wants stuff in Excel sheets, right? Sit tight, and let’s dive in! 🏊‍

Let’s say you want a list of your blog entries’ titles, slugs and publish dates in a spreadsheet. The whole expression would look like this:

```
sanity documents query '*[_type == "post"]{title, "slug": slug.current, publishedAt}'|jq -r '(map(keys) | add | unique) as $cols | map(. as $row | $cols | map($row[.])) as $rows | $cols, $rows[] | @csv'
```

You can copy this and run with it or [play with it on jqplay.com](https://jqplay.org/s/QOs3d_fMLU), but let’s see what’s going on in the `jq`\-expression:

*   `-r` is for `--raw-ouput` and makes sure that the output is plain old boring text without colors or special formatting.
*   `(map(keys) | add | unique) as $cols` iterates (`map`) through the keys in your object and `add`s `unique` ones to a variable called `$cols`. In other words, this is how your column headers are made.

![Map out unique keys to use as column headers](img/0__L3HopzvcX0sw__hJA.jpg)
Map out unique keys to use as column headers

*   `map(. as $row | $cols | map($row[.])) as $rows` takes all objects in the outer array, and iterates through all the object keys (title, slug, publishedAt). It appends the values to an array, which gives you an array of arrays with the values, which is what you want when you're transforming JSON into CSV.
*   `$cols, $rows[] | @csv` puts the column headers first in the array, and then each of the arrays that are transformed to lines by piping them to `@csv` , which formats the output as… csv.

![The final result](img/0__gdcHP9PRKtXSRZTY.jpg)
The final result

This command prints out the result in the shell. If you want to write it directly to a file, you can append `> filename.csv` to it, or, for example, to the clipboard (pipe it to `| pbcopy` if you’re on macOS). Or perhaps you'll do something exciting with the csv in [pandas](https://pandas.pydata.org/) 🐼🐼 in Python?

If you found this useful, we'd love to hear all about it in the comment section!

If you want to try out Sanity.io, you can go to [sanity.io/freecodecamp](https://sanity.io/freecodecamp?utm_source=freecodecamp&utm_medium=blog&utm_campaign=jq) and get an upped free developer plan. ✨

_Originally published at_ [_sanity.io_](https://www.sanity.io/blog/exporting-your-structured-content-as-csv-using-jq-in-the-command-line?utm_source=freecodecamp&utm_medium=blog&utm_campaign=jq)_._