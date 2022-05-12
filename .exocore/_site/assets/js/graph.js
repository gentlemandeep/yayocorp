<!DOCTYPE html>
 <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

<!-- Begin Jekyll SEO tag v2.8.0 -->
<title>Exocore</title>
<meta name="generator" content="Jekyll v4.2.1" />
<meta property="og:title" content="Exocore" />
<meta property="og:locale" content="en_US" />
<link rel="canonical" href="http://localhost:4000/assets/js/graph.js" />
<meta property="og:url" content="http://localhost:4000/assets/js/graph.js" />
<meta property="og:site_name" content="Exocore" />
<meta property="og:type" content="article" />
<meta property="article:published_time" content="2000-01-01T00:00:00+11:00" />
<meta name="twitter:card" content="summary" />
<meta property="twitter:title" content="Exocore" />
<script type="application/ld+json">
{"@context":"https://schema.org","@type":"BlogPosting","dateModified":"2022-05-12T22:38:35+10:00","datePublished":"2000-01-01T00:00:00+11:00","headline":"Exocore","mainEntityOfPage":{"@type":"WebPage","@id":"http://localhost:4000/assets/js/graph.js"},"url":"http://localhost:4000/assets/js/graph.js"}</script>
<!-- End Jekyll SEO tag -->

    <!-- <link rel="stylesheet" href="/assets/css/style.css?v=3ef96f16da164030b6c47ef6bdc938cbbe8cf592"> -->
    <link rel="stylesheet" href="/styles.css">

  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <title>Blog</title>
  <meta name="description" content="OFFICIAL BLOG of JamesLiao333.">
  <meta name="author" content="SitePoint">

  <meta property="og:title" content="JAMES LIAO OFFICIAL BLOG">
  <meta property="og:type" content="website">
  <meta property="og:description" content="Blog">
  <meta property="og:image" content="image.png">

  <!-- <link rel="icon" href="/favicon.ico"> -->
  <!-- <link rel="icon" href="/favicon.svg" type="image/svg+xml"> -->
  <!-- <link rel="apple-touch-icon" href="/apple-touch-icon.png"> -->
   <script src="/assets/js/jquery.min.js"></script>
 <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
 <script src="/assets/js/sidenotes.js"></script>

</head>  
 
 


<html lang="en-US">
   <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

<!-- Begin Jekyll SEO tag v2.8.0 -->
<title>Exocore</title>
<meta name="generator" content="Jekyll v4.2.1" />
<meta property="og:title" content="Exocore" />
<meta property="og:locale" content="en_US" />
<link rel="canonical" href="http://localhost:4000/assets/js/graph.js" />
<meta property="og:url" content="http://localhost:4000/assets/js/graph.js" />
<meta property="og:site_name" content="Exocore" />
<meta property="og:type" content="article" />
<meta property="article:published_time" content="2000-01-01T00:00:00+11:00" />
<meta name="twitter:card" content="summary" />
<meta property="twitter:title" content="Exocore" />
<script type="application/ld+json">
{"@context":"https://schema.org","@type":"BlogPosting","dateModified":"2022-05-12T22:38:35+10:00","datePublished":"2000-01-01T00:00:00+11:00","headline":"Exocore","mainEntityOfPage":{"@type":"WebPage","@id":"http://localhost:4000/assets/js/graph.js"},"url":"http://localhost:4000/assets/js/graph.js"}</script>
<!-- End Jekyll SEO tag -->

    <!-- <link rel="stylesheet" href="/assets/css/style.css?v=3ef96f16da164030b6c47ef6bdc938cbbe8cf592"> -->
    <link rel="stylesheet" href="/styles.css">

  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <title>Blog</title>
  <meta name="description" content="OFFICIAL BLOG of JamesLiao333.">
  <meta name="author" content="SitePoint">

  <meta property="og:title" content="JAMES LIAO OFFICIAL BLOG">
  <meta property="og:type" content="website">
  <meta property="og:description" content="Blog">
  <meta property="og:image" content="image.png">

  <!-- <link rel="icon" href="/favicon.ico"> -->
  <!-- <link rel="icon" href="/favicon.svg" type="image/svg+xml"> -->
  <!-- <link rel="apple-touch-icon" href="/apple-touch-icon.png"> -->
   <script src="/assets/js/jquery.min.js"></script>
 <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
 <script src="/assets/js/sidenotes.js"></script>

</head>  
 
 


  <body>
  
      import JekyllGraph from './jekyll-graph.js';

export default class GraphNav extends JekyllGraph {

  constructor() {
    super(); // 'this.graph' + 'this.graphDiv' set in JekyllGraph
    this.graphTypeCheckBox = document.getElementById('graph-type-checkbox');
    this.graphTypeEmojiSpan = document.getElementById('graph-type-emoji-span');
    this.init(); // this.graphType set in initGraphType();
  }

  init() {
    this.initGraphType();
    this.bindEvents();
    this.draw();
  }
  
  bindEvents() {
    this.graphTypeCheckBox.addEventListener('click', () => {
      this.updateGraphType();
      this.draw();
    });
  }

  // draw
  
  draw() {
    // redraw new chart
    if (this.graphTypeCheckBox.checked) {
      this.drawTree();
    } else {
      this.drawNetWeb();
    }
  }

  redraw() {
    this.updateGraphType();
    this.draw();
  }

  // type
  
  initGraphType() {
    this.graphType = localStorage.getItem('graph-type');
    if (this.graphType !== "tree" && this.graphType !== "net-web") {
      this.graphType = '';	
    }
    this.graphTypeCheckBox.checked = (this.graphType === "tree");
    this.updateGraphType();
  }

  updateGraphType() {
    if (this.graphTypeCheckBox.checked) {
      this.graphTypeEmojiSpan.innerText = "";
      this.graphType = "tree";
    } else {
      this.graphTypeEmojiSpan.innerText = "";
      this.graphType = "net-web";
    }
    localStorage.setItem('graph-type', this.graphType);
  } 
}

    </div>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/anchor-js/4.1.0/anchor.min.js" integrity="sha256-lZaRhKri35AyJSypXXs4o6OPFTbTmUoltBbDCbdzegg=" crossorigin="anonymous"></script>
    <script>anchors.add();</script>
  </body>
</html>