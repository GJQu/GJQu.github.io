---
layout: post
title:  "First Attempt at Economic Research"
date:   2024-04-21 17:26:36 +0100
categories: [Labor Economics]
tags: [Data Science, Economics]  # Tags for spec
author: Gavin Qu  # Name of the author
layout: single  # Layout option, "single" is commonly used for posts
header:
  image: ""  # Path to the header image
  # caption: "Photo credit: [**Unsplash**](https://unsplash.com)"  # Optional caption for the header image
toc: true  # Enable a table of contents on the page
toc_label: "My Table of Contents"  # Label for the TOC
toc_icon: "file-text-o"  # Icon next to the TOC title, uses Font Awesome icons
published: false  # If false, the post won't be published but will be drafted
---
It was in the beginning of March when I had the idea of writing my dissertation on causal inference, for those in the industry - A/B testing. I was in the midst of my public policy evaluation class which is more or less based on *Mostly Harmless Econometrics* by Angrist & Pischke and *Causal Inference: The Mixtape* by Scott Cunningham. 

## The Initial Idea 
One morning, after I finished listening to the *Freakonomics* podcast and there was one topic where I remembered clearly, it was about the discrepancy of wealth building between married couples and co-inhabiting couples. My idea is to study the effect of marital status on one's earning, influenced by the theory and building on many empirical assumptions that there's a gender bias when it comes to earning, specifically for women. So the obvious question is why would women get married if they're more likely to suffer from a loss in earning? Now, this is building on previous empirical research and many modeling assumptions. I wanted to conduct my own research on this topic, but using the [UKHLS Understanding Society Dataset](https://www.understandingsociety.ac.uk/about/british-household-panel-survey/). 

## About the Dataset 
The UKHLS dataset is a panel dataset collected by the UK data archive that has over 500,000 individual observations across 13 waves with over 2000 features. As any data analytics workflow goes, it all begins with reading the documentation tediously before coming with basic descriptive statistics. 

## The First Iteration - Matching
The thesis I had in mind going into this was *Unveiling Income Dynamics: Machine Learning Insights from Marital Status-Based Matching Analysis*. The basic idea is to use a causal inference method called "Matching", which would properly identify causal relationships in absence of a Randomized Control Trial (RCT). Whenever you attempt to establish casual relationship between *A* and *B*, it's useful to explore the possible selection bias, because it's always plausible that there's a factor *C* which affects *A* and *B* simultaneously. This would void the underlying causal relationship between *A* and *B*. 

To address the above problem, we try to "match" each treatment unit (T) with someone that has the opposite treatment status (C), such that (C) has all the same traits as (T). Essentially, we're inferring a treatment group and a control group without actually having to design a RCT experiment. The next step is compute the difference between the treatment and control pair of individuals, therefore the treatment effect is the weighted average of these differences. Matching is often the second best study design in social sciences as a result. 