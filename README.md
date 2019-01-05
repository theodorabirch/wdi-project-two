# wdi-project-two
---
# Pieces of History Blog
---
## Project overview and motivation

Pieces of History is a full stack blog where users can add, edit, login and comment on blog posts.

This was my second project as part of the General Assembly Web Development Immersive course. The objective was to have:
* 2 models
* Include relationships - embedded or referenced
* Include authentication
* Have complete RESTful routes
* Use Bulma

## Timeframe
 1 week (October 2018)

---
## Technologies used
* Node.js
* Express
* EJS
* MongoDB
* Mongoose
* GitHub
* Bulma
---
## User Journey

On arrival at the site users can see that the blog is dedicated towards people that are interested in historical warfare.

<img width="800" height="350" alt="HomePage" src="screenshots/Screen Shot 2019-01-05 at 13.45.48.png">

You can only post and comment on other blog posts when the user is logged in.

<img width="800" height="350" alt="Authenticated" src="screenshots/Screen Shot 2019-01-05 at 14.17.43.png">

---
## Approach

To begin I identified users and their blog posts as my primary resources. For each of these I planned the restful routes that I would need to create in order and began wireframing the look of the site.

I started with my model for my blog post and then worked out the restful routes from this point. Once I had completed this I moved onto the user model and added in the authentication routes.

Finally, I added the ability to comment on each others blogs and made sure that these are referenced to the user.

---
## Coding wins

The piece of code that I was particularly proud of in this project was the link between the user and the blog post models. I used an embedded reference to the user model. This meant that if a user updated their username then their comments would be updated as well.

```
  comments: [{
    username: String,
    user: { type: mongoose.Schema.ObjectId, ref: 'User'},
    content: String
  }]
});
```
---
## Challenges

The biggest challenge that I had with this project was that at the beginning I spent limited time planning. I started coding prematurely. However, as soon as I took a step back and coded to a clear plan it came together nicely.

I broke the code up into stages and very clearly delineated what I was doing and how it would look like on the page.

## wins

The biggest win that I had on this project was my use of CSS and clear-layouts. I found this far easier than on my previous project. I gave myself time to plan and execute the design and the layout (which I separated out) so that every piece of code was essential.

---

## Future features

If I had more time I would have added a profile page which will have pulled through all the comments related to the user and I would have uploaded a profile picture.
