---
layout: post
title:  "PCA - Like a Croissant that Flattens Over Time"
date:   2025-12-14 09:00:00
categories: [Mini Blog]
tags: [Statistics, Machine Learning]  # Tags for spec
author: Gavin Qu  # Name of the author
layout: single  # Layout option, "single" is commonly used for posts
header:
  image: "/assets/images/2025/fredrich_monk_by_sea.jpg"  # Path to the header image
  image_description: "Painting by German Artist Caspar David Friedrich." # custom alt tag for screen readers
  caption: "The Monk by the Sea by Caspar David Friedrich"  # Optional caption for the header image
toc: false  # Enable a table of contents on the page
published: true  # If false, the post won't be published but will be drafted
---
Good Sunday Morning from Seattle, Washington. In this week's blog post, I will be doing a mini-blog on Principal Components, part of which is loosely based on the chapters in *The Elements of Statistical Learning*. 

## What It Is and What It Is Not? 
Principal Component Analysis (PCA), not to be confused with Factor Analysis, it is a way to mathematically discover hidden dimensions along the existing observations. Essentially, it uses matrix algebra to capture the maximum variance along mutually uncorrelated projections of our data. 

PCA does have its limitations; it does not tell us anything about causality, nor is it feature selection. If interpretability is an important objective of your project, PCA alone cannot explain the what and the why. The role of the PCA is to generate synthetic features that capture the variance of the original features. 

## Skipping Over Some Details
Without diving too much into the mathematical concepts, computing PCA generally follows these steps: 
  1. Standardize and center the data around its means. 
  2. Compute the covariance matrix for the dataset. 
  3. Solve for its Eigenvalues where $$\Sigma \mathbf{v} = \lambda \mathbf{v}$$
    - Eigenvector $$\mathbf{v}$$ is the principal direction
    - Eigenvalues $$\lambda$$ is the variance explained by each direction

The important takeaways are that eigenvectors are orthogonal (unrelated) to each other, while non-negative, we can simply rank the principal components by ordering the eigenvalues. 

## A Pastry-Lover's Analogy
Imagine a flaky croissant you brought home from that newly-opened bakery, which you ended up neglecting on the kitchen counter for too long. As time goes on, the croissant becomes flatter and more sad-looking. Essentially, that is what becomes your dataset as you perform PCA: the first eigenvector captures the direction of maximal variance, the second vector captures the max variance *orthogonal* to the first, the third captures the max variance *orthogonal* to the second, and so on... 

In the end, you end up with a croissant that is compressed based on its feature set $$\X$$ without any regard to its dependent variable $$\y$$. In a supervised learning context, it is possible that your last principal component captures 0.5% of the variance, but still contains 80% of the correlation between $$\X\$$ and $$\y$$. Which is why I remind myself with a sticky note on my fridge that reads "Dimensionality Reduction is not Feature Selection!" while I drink my coffee. 

In reality, it is used for exploratory analysis in conjunction with other alternatives. 

## Finding the Signal in the Noise
One of the applicable examples outside of image compression using PCA is in finding product characteristics in demand estimation. You're given a high-dimensional dataset with various product attributes such as price histories, customer reviews, clickthrough rates, features, etc. One sensible approach would be to use PCA to extract common factors among features, or reduce the corpus of customer reviews into a few hundred latent topics, similar to [Latent Semantic Analysis](https://en.wikipedia.org/wiki/Latent_semantic_analysis). In essence, the PCA step serves as the pattern-generator before clustering or demand estimation. 

Economists use PCA in various contexts such as ad auction, price sensitivity, and causal inference. It would be impossible to mention some and not the other examples, although infeasible in this blog post. If you'd like to learn more, you will find yourself drowning in materials by typing "Principal Compo..." in Google. 

![Artistic PCA Abstraction of the Original Painting](/assets/images/2025/chatgpt_monk_by_sea.png)

## Looking Ahead
In addition to writing about statistics and econometrics as a way to reinforce my own learning, my Sunday morning writing session has served as a powerful reset for the stress accumulated throughout the week. 

Finally, a quote I really liked from Richard Feynman

> We are trying to prove ourselves wrong as quickly as possible, because only in that way can we find progress. 

Thank you for reading! 