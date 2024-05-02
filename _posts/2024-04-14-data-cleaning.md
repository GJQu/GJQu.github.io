---
layout: post
title:  "First Attempt at Economic Research"
date:   2024-04-21 17:26:36 +0100
categories: [Labor Economics]
tags: [Data Science, Economics]  # Tags for spec
author: Gavin Qu  # Name of the author
layout: single  # Layout option, "single" is commonly used for posts
header:
  image: "/assets/images/education_pay.png"  # Path to the header image
  # caption: "Photo credit: [**Unsplash**](https://unsplash.com)"  # Optional caption for the header image
toc: true  # Enable a table of contents on the page
toc_label: "My Table of Contents"  # Label for the TOC
toc_icon: "file-text-o"  # Icon next to the TOC title, uses Font Awesome icons
published: true  # If false, the post won't be published but will be drafted
---
It was in the beginning of March when I had the idea of writing my dissertation on causal inference, for those in the industry - A/B testing. I was in the midst of my public policy evaluation class which is more or less based on *Mostly Harmless Econometrics* by Angrist & Pischke and *Causal Inference: The Mixtape* by Scott Cunningham. 

## The Initial Idea 
One morning I was talking to myself after I finished listening to the *Freakonomics* podcast. There was one topic that I remembered clearly, it was about the discrepancy of wealth building between married couples and co-inhabiting couples. My idea is to study the effect of marital status on one's earning, influenced by the theory and building on many empirical assumptions that there's a gender bias when it comes to earning, specifically for women. So the obvious question is why would women get married if they're more likely to suffer from a loss in earning? Now, this is building on previous empirical research and many modeling assumptions. I wanted to conduct my own research on this topic, but using the [UKHLS Understanding Society Dataset](https://www.understandingsociety.ac.uk/about/british-household-panel-survey/). 

## About the Dataset 
The UKHLS dataset is a panel dataset collected by the UK Data Archive that has over 500,000 individual observations across 13 waves with over 2000 features. As any data analytics workflow goes, it all begins with reading the documentation tediously before coming with basic descriptive statistics, so the following events and findings unfolded.  

## The First Iteration - Matching
The first thesis I had in mind going into this was *Unveiling Income Dynamics: Machine Learning Insights from Marital Status-Based Matching Analysis*. The basic idea is to use a causal inference method called "Matching", which would properly identify causal relationships in absence of a Randomized Control Trial (RCT). Whenever you attempt to establish casual relationship between *A* and *B*, it's useful to explore the possible selection bias, because it's always plausible that there's a factor *C* which affects *A* and *B* simultaneously. This selection bias would void the underlying causal relationship between *A* and *B*. 

![Average Treatment Effect on the Treated](/assets/images/matching.png)

To address the above problem, we try to "match" each treatment unit (T) with someone that has the opposite treatment status (C), such that (C) has all the same traits as (T). Essentially, we're inferring a treatment group and a control group without actually having to design a RCT experiment. The next step is compute the difference between the treatment and control pair of individuals, therefore the treatment effect is the weighted average of these differences. Matching is often the second best study design in the social sciences as a result. It's worth noting the fundamental assumption matching relies on, which is called the **Conditional Independence Assumption (CIA)**. Put simply, the CIA fully captures the observable characteristics of the selection bias, it allows us to say that the treatment is not correlated with the counterfactual absent the treatment. 

#### Enough Jargons...
To summarize everything I tried in my first jupyter notebook, I created a sub-dataset using the UKHLS panel with ~15 demographic variables such as labor status, gender, education, various health status and etc, that would serve as the observables to use in matching. Below are the steps that resulted in a derived variable called the *similarity score* (propensity score) to match individuals based on observable characteristics: 
1.	Regress the treatment dummy T—in this case it’ll be marital status—on the set of controls X (age, education, etc.)
2.	Estimate the probability of being married (dependent) based on the covariates (independent) using a logit model perhaps. 
3.	Run the logistic regression model to compute the propensity score for each individual, which is the predicted probability of being married given their characteristics.
4.	Assess overlap and common support, check the balance. 
a.	overlap in the propensity scores between married and unmarried groups
5.	Implement matching algorithm such as nearest neighbor to compare married and unmarried.

However, the key question is yet to be answered: do married women earn less than unmarried woman? (The details of the various robustness checks are not in the scope of this blog post for now.)
Here's the distribution of income I was able to derive from the dataset: 
![earning plot](/assets/images/earningoutput.png)

## The Second Iteration
After the first series of data cleaning, one-hot encoding and wrangling, I had a more realistic expectation of exploratory data analysis - it takes an enormous amount of focus and dedication wrangling and cleaning data. In the span of two weekends, I sometimes felt defeated to not be able to come up with anything useful that would illustrate my theoretical intuitions. 

This is when a stroke of luck brought me to the office of my Data Science Economics Instructor, we agreed to meet and discuss my approach. His specialty is labor economics and health economics using predictive modeling. After our meeting, an idea instantly formed in my mind, what if I can incorporate in some health data to find the underlying causal factors that affect labor market participants, which would eventually open up a broader set of event studies along with marriage and gender dynamics. 

There are many plausible questions, for example, how does health outcome affect people's labor market decisions? Is there an underlying dynamic between heterogenous demographics in regard to health? These are simply spoilers for my next iteration, which I will talk about in my next blog post. Below are a few plots that illustrates distribution of health status change and labor status change, using the following encoding: 
- Employed (1): 296,237 instances.
- Unemployed (2): 25,886 instances.
- Inactive (3): 207,761 instances.
- Not Available/Classified (NA): 3,592 instances.

![health status and labor force participation](/assets/images/health_lfstat.png)

## Lessons Learned 
1. The initial approach will almost always end up in the wrong direction.
2. If I'm not iterating frequently, it implies that I'm not optimizing towards my overall objective. e.g. conduct causal analysis for key economic questions of interest
3. Don't be afraid to seek others' advice, as is everything else in life, there's always someone I can learn from. 
4. Don't be afraid of pivots, adaptability is learned through failed experiments. Luckily in data science and economic research, the marginal cost of pivoting is fairly low at an early stage. 

## Stay Tuned for the Next Blog Post 

"Success is the ability to move from failure to failure without losing enthusiasm for it." 
- Winston Churchill