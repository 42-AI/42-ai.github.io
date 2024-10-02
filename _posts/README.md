# HowTo: Create a BLOG post on 42AI's website

<img src='../assets/img/logo/logo_bg_white.png' width=18% style="margin-left: 41%; margin-right: 41%"/>

Our Github pages allows for the easy creation of blog posts by members of 42AI. 

***In short : Fork it, branch it, build it. Name it, save it, commit. Push it!***

## Guidelines

### 1. Fork this repository 

```
git clone git@github.com:42-AI/42-ai.github.io.git
cd 42-ai.github.io
```

### 2. Create a new branch for your article

> NB : Please name your branch `blog-<your_42_login>`
> Ex: `blog-jbondri`

```git branch -c blog-<your_42_login
git checkout <your_new_branch>
```

### 3. Create a new file in the `_posts/` folder

On your branch : 

- Create a new file in the `_posts/` folder

- Rename it following this convention : `YYYY-MM-DD-blog-<your_42_login>.md`

Where `YYYY` stands for the year, `MM` for the month, `DD` for the day of the post. 

- Copy the content of the file [`_posts/__POST_TEMPLATE__`](./__POST_TEMPLATE__) into your new file

- Follow the guidelines and make the necessary changes to your file's metadata. 

- Write your article using [Markdown syntax](https://www.markdownguide.org/basic-syntax/). 

### 4. Commit and push 

- Save, commit and push your file to your branch. 

- Wait for Pull Request to be reviewed.

### 5. Share the news !

Let everyone know about your post by sharing it on social media using the links on the article 


