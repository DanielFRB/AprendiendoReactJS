# Incorporating Data to our React Applications

Data integration is a combination of technical processes used to combine information
from different sources to turn it into reliable and valuable data. These integration
solutions help understand, cleanse, monitor, transform and deliver data so we can be
sure that the information source is reliable, consistent and managed in real time.

A complete data integration solution offers reliable data from a variety of sources.
Data integration solutions help understand, cleanse, monitor, transform, and deliver
data so you can be sure that your information source is reliable, consistent, and
governed in real time.

## Examples

### Requesting Data

This is one of the main actions when we use Data in our React Applications.
In JavaScript, the most popular way to make an HTTP request is to use fetch.

The fetch function returns a promise. Here, we’re making an asynchronous request
to a specific URL, It takes time for that request to traverse the internet and
respond with information. When it does, that information is passed to a callback
using the .then(callback) method.

### Virtualized List

If it’s our job to develop a reusable component for rendering lists, there are many
different use cases to consider and solutions to implement. One of the most important
things to consider is what happens when the list is very large.

Rendering items above and below the visible window will allow the user to scroll in
both directions. As the user scrolls, we can unmount the results that have already
been viewed as well as render new results off screen, ready for the user to reveal
via the scroll. This resulting solution means that the browser will only render X
elements at a time while the data for the rest of the elements is there waiting to
be rendered. This technique is called windowing or virtualization.

### Introduction to GraphQL

GraphQL is a declarative solution for communicating with APIs. When we make parallel
data requests, we’re attempting to get all the data we need immediately at the same time.

In order to get data from a GraphQL API, we still need to make an HTTP request to a
specific URI. However, we also need to send a query along with the request. A GraphQL
query is a declarative description of the data we’re requesting. The service will
parse this description and will package all the data we’re asking for into a single
response.
