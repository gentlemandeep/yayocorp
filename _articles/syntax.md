---
layout: article
category: article
subtitle:
topic: Computers
date: 4 feb 2022
tags: meta exocore
---

# Writing with Exocore Syntax

**`It's best to read this document with the markdown and rendered output side-by-side to see how the markdown syntax is rendered at build time.`**

## Markdown Basics

The Exocore utilizes standardized Markdown syntax, along with some additional extensions. Much of the content of this article covers existing markdown syntax used universally in plain text formatting. However, some syntax, such as [[syntax#Examples of Wikilinks:|wikilinks]] and [[syntax#Inserting images|images]] are particular to the Exocore.

* [A Simple markdown cheat sheet ](https://www.markdownguide.org/cheat-sheet/#basic-syntax)
* [A more comprehensive markdown cheat sheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

## Headers

The above is a level 2 heading, preceded by `##` and a space. 

There's nothing special about the way the Exocore processes headers— it's just standard markdown. However, each header will render with an anchor link. If you hover over a heading and click the link icon that appears, the URL in your browser will reflect the section that you clicked. Now, if you copy that URL it will link directly to the heading that you clicked.

### Heading levels

The above is a level 3 heading, preceded by `###` and a space.

Here's some advice: Only use top-level headings (preceded by `#`) for the document's title. Aside from being markdown best practice, the Exocore takes your first top-level heading to use as the title of the page in the final rendered output. For intra-document section titles, use a level 2 heading. It's for the best.

## Examples of Wikilinks:

Here are some basic wikilinks, pointing to other posts on this Exocore:

 - [[exocore]]
 - [[2022-02-04]]

They are written as the title of their corresponding markdown file, surrounded by double square brackets. However, in the final render they are presented by default as the page's title. This saves you typing out the whole page title in your markdown document, and allows the Foam VSCode extension to suggest files as you type. Below you can read about how to change their presentation.

[[chinese-ginseng-chicken-tonic-soup|You can alias a link like this]] if you don't want to keep the title. Heads up— this link points to a recipe for Chinese ginseng chicken Soup.


[[syntax#Wikilink Embeds|This wikilink]] points to a header further down on this page, by using a `#`. Under that header you will find a different sort of wikilink— an embed. The content of another note is embedded within the current note. You can also point to a particular header within another note.  

Check out the backlinks section at the bottom of any post, and you'll find a list of every post that links back to it. Backlinks are automatically generated, and display all posts with links pointing to them.

## Wikilink Embeds

The below text is embedded, using the same wikilink syntax as normal, but with an `!` prepended. The full text of the linked note will be included. For example, here is an embedded note about the domestic address system in Abu Dhabi:

![[jade-post]]

## External Hyperlinks

Hyperlinks to external sites are not the same as wikilinks. A wikilink is a simple way to hyperlink to other posts on your Exocore without using the full processed URL as it is rendered online. A wikilink works locally in VSCode, allowing you to navigate between posts, and is transformed at render time to a web hyperlink, so that it always points to the correct page.

To create a hyperlink, use single normal parentheses around the URL you want to point to, and square brackets around the text you want displayed:

[https://en.wikipedia.org/wiki/Parenthesis](https://en.wikipedia.org/wiki/Parenthesis)

You can alias a hyperlink by changing the text in the square brackets, like this:

[Here's some information about Hyperlinks.](https://en.wikipedia.org/wiki/Hyperlink)

## Applying classes to a paragraph or image

{:.right-aside}
**Oh, by the way:** You can apply the `.right-aside` class to create an aside, like this one. An aside floats to one side and other text wraps around it. `.left-aside` is also available for some variety.

Kramdown, the Markdown parser used by this implementation of the Exocore, has the ability to apply a CSS class to a paragraph by including syntax like `{:.classname}` at the top or bottom of a paragraph. The class will be applied to the whole paragraph. The Exocore stylesheet includes a few general classes meant to be used for just this purpose, which you should feel free to add to. 



**The following classes are pre-defined in the Exocore stylesheet:**

- `.center` — *Reduces width of paragraph and centers it for emphasis*

- `.left-aside`, `.right-aside` — *Applies a border and floats to the left/right. Other text will wrap around it*

- `.left`, `.right` - *Reduces width and places to the left/right (meant for images)*

- `.border` - *applies a thin black border*

- `.shadow` - *applies a black blurred drop shadow*
  
- `.glow` - *applies a white blurred drop shadow (produces a glowing effect)*

- `.flip` - *flips the image (or text) horizontally*
  

## Tables

You | can | create a table | like this.
A newline | in markdown | extends the table | vertically.
A pipe | extends the table | laterally.

## Graphviz

For more complex data representation, [Graphviz](https://graphviz.org/) can be used in conjunction with the Exocore. Read more about Graphviz syntax [here](https://graphviz.org/documentation/), and find a demonstration of the way it is used with the Exocore [[graphviz-test|here]]


## Sidenotes and Footnotes:

Here's a simple footnote with no linebreaks in it.[^1] Each footnote is an anchor link to the bottom of the page, with a return link attached. Notice the sidenote in the right margin, identical to the footnote.

All footnotes are also rendered as sidenotes. A footnote forms a commentary or citation best kept separate from the main text, and a sidenote is an easy way for a reader to access such commentary without breaking ergonomy by jumping up and down the page.

If you want to add multi-paragraph footnotes, indent your second paragraph, like this (see footnote at bottom).[^2]

You can put a footnote's markdown reference immediately under a paragraph, like this[^3], or clump them at the end. Either way, they will appear at the bottom in your rendered content.

[^3]: This footnote appears immediately underneath it's referring paragraph in this document's original markdown, but on the rendered website it shows at the bottom. 

Footnotes automatically form a numbered list, and can also be mapped by name, like this[^named-footnote]

## Inserting images

To insert an image, use the following syntax:

```
![](/images/mouse.jpg)
```
However, **don't bother remembering this syntax.** the easiest way to insert an image is to use the Paste Image VSCode extension, which you will be prompted to download as a recommended third-party extension of the Foam VSCode extension. For MacOS, copy your image to the clipboard, and use keyboard command `CMD + option + V`. You will be prompted to give your image file a name, and add it to the images folder in your Exocore's top-level directory. **Note:** If you CMD+C copy an image from your desktop on a mac, it is not copied to your clipboard. Instead, open the image, and then use the same keyboard command.

You can insert alt text and a caption like this:
```
![This is alt text](/images/mouse.jpg)
*Insert a caption by placing italicised text immediately underneath the image*
```
The above snippet produces the below outcome:

![This is alt text](/images/mouse.jpg)
*Insert a caption by placing italicised textimmediately underneath the image, with no empty line in between.*

## Embedded Code 
Below are a couple of lines of code, a shell script I call when I want to serve a local render of my Exocore to see how it looks before I publish it. To embed a piece of code so that characters are rendered verbatim, surround the code snippet with ``` on either side, like so:

```
#!/bin/zsh
cd ~/desktop/james-liao && bundle exec jekyll serve --baseurl ''
```

## Naming files

Don't use whitespace in your filenames— instead, name-them-like-this. This way, titles are easily converted to URLs and the back end of the Exocore remains happy. This of course applies only to filenames, and you may title your posts how you wish.

[^1]: This is the first footnote. Note the return button:

[^2]: For longer footnotes, you may want to use multiple paragraphs.

    Indent paragraphs to include them in the footnote.

[^named-footnote]: This footnote has the name 'named-footnote'. it's still numbered and appears in sequence the same way the others do, but naming it might help you manage a document with many footnotes when dealing with your local markdown.

---

That should be everything to get you started! 

[//begin]: # "Autogenerated link references for markdown compatibility"
[syntax#Examples of Wikilinks:|wikilinks]: syntax "Writing with Exocore Syntax"
[syntax#Inserting images|images]: syntax "Writing with Exocore Syntax"
[exocore]: exocore "Breaking down the Exocore"
[chinese-ginseng-chicken-tonic-soup|You can alias a link like this]: ../_journal/chinese-ginseng-chicken-tonic-soup "Ginseng Chicken Tonic Soup (Chinese Style)"
[syntax#Wikilink Embeds|This wikilink]: syntax "Writing with Exocore Syntax"
[jade-post]: ../_journal/jade-post "Jade post"
[//end]: # "Autogenerated link references"