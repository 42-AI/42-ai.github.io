# 42AI - Github Pages

<img 
    style="display: block; 
           margin-left: auto;
           margin-right: auto;
           width: 36%;"
    src="assets/img/logo/logo_bg_white.png" 
    alt="42Artificial Intelligence logo">
</img>

## Github pages using Jekyll with Chirpy template




### What is that ? 

The present website has been created using the following dependencies : 

#### Jekyll

> Jekyll is a static site generator (SSG) written in Ruby. It allows developers to build fast, secure, and scalable websites without the need for a dynamic web application server. Jekyll takes plain text files (Markdown, HTML, CSS, etc.) and transforms them into a static website, ready to be served by a web server.

- [Jekyll's website](https://jekyllrb.com)
- [Jekyll's documentation](https://jekyllrb.com/doc)

Knowledge about the following will be useful in using and manipulating the template: 

- [Front Matter](https://jekyllrb.com/docs/front-matter/)

- [Jinja](https://jinja.palletsprojects.com/en/3.1.x/intro/)

> Jinja is a fast, expressive, extensible templating engine. Special placeholders in the template allow writing code similar to Python syntax. Then the template is passed data to render the final document.

#### Chirpy theme for Jekyll 

> "A minimal, responsive, and feature-rich Jekyll theme for technical writing. Open source and hosted on GitHub since 2019."

[Chirpy template](/Chirpy-README.md)


#### The `polyglot` plugin for Jekyll

> "Polyglot is a fast, painless, open-source internationalization plugin for Jekyll blogs."

- [The `polyglot` plugin on GitHub](https://github.com/untra/polyglot)

<br/>

## About deploying on Github pages using this setup

Check out the following links if you are new to this setup: 
- [Configuration d'un site GitHub Pages avec Jekyll](https://docs.github.com/fr/pages/setting-up-a-github-pages-site-with-jekyll)
- [Création d’un site GitHub Pages avec Jekyll](https://docs.github.com/fr/pages/setting-up-a-github-pages-site-with-jekyll/creating-a-github-pages-site-with-jekyll)
- [Jekyll documentation for deployment on Github Pages](https://jekyllrb.com/docs/github-pages/)

#### Automatic deployment via GitHub Actions worflow 

See files in the `.github/worflows/` folders. 

In the current state, any push on the main branch triggers the deployment to github pages. 

<br/>

## Important points regarding Jekyll template adaptations

Please make sure you have read and understood the [Chirpy documentation](https://jekyllrb.com/doc)

### Logic

#### Site configuration variables : `/locales/`

See the following files : 

```
/locales/_config.yml
/locales/authors.yml
/locales/contact.yml 
/locales/share.yml
<!-- language-dependent template variables -->
/locales/en.yml
/locales/fr.yml
```
#### Site structure : `_tabs/`

The `markdown` files in the `_tabs` folder populate the Menu in the sidebar on the left (based on their 'title' and 'lang' attributes)

> See specific README for the `_tabs` folder in [the dedicated file](_tabs/README.md)

These markdown files only contain the templates for the page. The variables for each page are injected into the template. They are stored in the `/locales/tabs/` folder.

#### Site structure content : `_locales/tabs/`

All the text from the TABS folder pages, in YAML, kept in one place to facilitate multilingual support and consistency between languages, and be separated from template files. 

One file per tab is enough. If you want to add multilingual support for this tab, you will need to modify this yml file accordingly. 

See example file : `[_locales/tabs/learning.yml](_locales/tabs/learning.yml)

#### Site publishing content : `_posts/`

"Publishing content" refers to dynamic contents such as blog posts or announcements. 

> See specific README for the `_posts` folder in [the dedicated file](_posts/README.md)

#### Style 

A lot of minimal style adjustments have been made to the original chirpy template. 
Most of these modifications are indicated within the code into **commented lines** containing the ```"42AI"``` mention.
Templates modified are mostly from the `_includes` folder containing the root HTML files used. 

Also : 

<details>
  <summary>Table of Contents (TOC)</summary>

For a page to display a TOC, it must contain at least a H2 or smaller tag amd ***be of type `layout: post`.***
Its Front Matter config must also contain the following: 

>   ```toc: true```
</details>

<details>
  <summary>Post Metadata</summary>

An extra attribute has been added to the Front Matter config for pages of type `layout: post` to ***distinguish between site structure pages (ie: `TABS`, no post metadata required) and publications*** such as blog posts or announcements which require to display the publication's metadata.

>   ```display_metadata: true/false```

</details>

#### Internationalization 

In the current version, 42AI's github page supports two languages : French (default) and English. See `_config.yml`.

The polyglot gem for Chirpy works as a charm, but requires a few adaptations. Important points to take into consideration here are the following :  

- Site global variables per language are accessible at the root of the `locales` folder :
    - `/locales/fr.yml`
    - `/locales/en.yml`

- For each page you want translated:
    - you need to create a duplicate file in the same folder, adding the `-en` suffix for an english file. 

            Example : 
            ```
            !ls /_tabs/
            42students.md # Default French version file
            42students-en.md # English version file
            ```

    - configure its YAML Front Matter header according to your needs

**Current language code is accessible in template via the variable ```site.active_lang```.**

### Build locally 

#### Requirements 

- ruby
- bundle
- jekyll

Then 

```bundle exec jekyll serve```