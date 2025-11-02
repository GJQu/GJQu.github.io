---
layout: post
title:  "From Medical Charts to Economic Markets"
date:   2024-10-01 09:00:36 +0100
categories: [School]
tags: [Graduate School, Economics, Data Science]  # Tags for spec
author: Gavin Qu  # Name of the author
layout: single  # Layout option, "single" is commonly used for posts
header:
  image: "/assets/images/medical-chart-header.webp"  # Path to the header image
  image_description: "" # custom alt tag for screen readers
  caption: ""  # Optional caption for the header image
toc: false  # Enable a table of contents on the page
published: true  # If false, the post won't be published but will be drafted
---
I want to start this post by thanking those who supported me and kept me sane throughout this journey of economic research and data science, especially my advisor, Dr. David Zentler-Munro, at the University of Essex.

## A Little Background
As with all “great” data science projects, you first develop all the research questions and then train the model based on your given data. Right?

Of course, assuming you want to discover halfway through that you don’t have the data in the right format and the missing values are imputed incorrectly based on your proxy variables.

To say the amount of data-cleaning and data-wrangling are the bulk of the research would be an understatement. By definition, data cleaning is the process of identifying and correcting errors, spotting missing values, and removing duplicates to impute a dataset that accurately represents the real world it’s supposed to model, or at the very least allows the computer to process it. On the other hand, data wrangling is about transforming the data from the raw form into a more usable format, whether creating proxy variables or simply merging multiple datasets. More on data wrangling later, for now, think of data cleaning as the mortar and data wrangling as the pestle—one provides the foundation by holding everything together, while the other grinds and reshapes the raw ingredients into something useful.

## Data Cleaning
First, I extracted health-related data from the UKHLS dataset. 

Focusing on 27 health variables, along with individual IDs, age, and wave identifiers I created. The health data came in three types, which added some complexity, but I learned to manage the inconsistencies in the dataset. The two key variables I used were ‘disdif’ and ‘hcond.’ ‘Disdif’ tracks difficulties with daily activities like walking, and ‘hcond’ helped me create a new chronic health variable called ‘healthcond.’ This variable captures long-term health conditions, such as cardiovascular diseases, cancer, chronic respiratory diseases, and diabetes, which are classified as chronic by the World Health Organization.

To deal with missing data (marked with -9), I converted them to ‘NaN’ (Not a Number) in Python. I then filled in missing health condition data by carrying forward a diagnosis from earlier waves, unless all previous waves had missing data, in which case I left it as NaN.

We'll come back to data cleaning and data wrangling in more detail in a later blog post. 

## Visualization of Frailty and Mortality
Frailty is used as a measurement of ratio of numbers of health conditions an individual have divided by the total number (27) of possible health conditions used in the survey. 

The plot below  illustrates the fraction of individuals who have passed away by a given age, with a vertical dashed line marking age 60, a notable transition point in both health and economic life stages. As expected, the mortality fraction remains relatively low throughout early and middle adulthood but increases sharply after age 60. The mortality rate rises exponentially, reflecting known patterns of age-related health decline. This steep increase in mortality is consistent with findings in gerontology and reflects changes in immune system function, vulnerability to chronic diseases, and overall frailty.

The data also shows an accelerated increase in mortality after age 90, with death becoming almost universal for individuals aged 105 and older. This graph is crucial as it sets the stage for understanding how frailty develops over time, reinforcing the need to distinguish between different health types when analyzing labor market outcomes.

The next plot shows the average frailty index binned by age. Here, frailty is measured as a ratio of health deficits over possible health deficits, with frailty increasing as health deteriorates. The vertical dashed line again marks age 60, where the uptick in frailty becomes most pronounced.

![Frailty Chart](/assets/images/frailty_medical_chart_binned.webp)

The scatterplot reveals an interesting pattern: while frailty remains relatively stable before age 60, a sharp upward trajectory emerges thereafter. This is particularly important because it highlights the heterogeneity in health outcomes among older adults. The increasing error bars in the later years suggest that there is greater variation in health among the elderly, supporting the notion that distinct health types might be influencing these differences. Those are all consistent with gerontology literature regarding the change in human immunological systems after age 60. 

This divergence becomes the foundation for my subsequent k-means clustering analysis, which seeks to group individuals into health types based on their frailty progression. The variation in frailty also offers insight into employment dynamics post-retirement age, as individuals with higher frailty are likely to face more significant barriers to continued labor market participation.

## Machine Learning and Statistical Modeling
For those that are already familiar with unsupervised machine learning methods, feel free to skip to the next section. I used K-means clustering which is basically a statistical method to group similar samples together based on some variables. In addition, it will also aim to make the different groups as different as possible while grouping similar individuals in the same group. Think of it as an algorithm that classifies a bunch of alphabets into vowels and consonants all starting from a can of alphabet noodle soup. You can start as randomly distributed as possible and the algorithm of K-means clustering will use some clever techniques to illustrate what the best number of groups are for your classification task. Namely, below are the two techniques I employed to find the most optimal number of groups in terms of health trajectory.  

#### The Elbow Method
![Elbow Method for K means clustering](/assets/images/elbow_method_research_essex.webp)

The elbow method plot shows the relationship between the number of clusters (k) and the inertia (within-cluster sum of squares). Here's how to interpret it:

1. Look for an "elbow" point in the plot where the rate of decrease sharply changes.

2. This point represents a good balance between cluster coherence and number of clusters.

3. After this point, adding more clusters doesn't significantly reduce inertia.

We would pick somewhere between 3 and 5 in this case. 

#### The Silhouette Method
![Silouette method](/assets/images/silhouette_method_research_essex.webp)

The silhouette method measures how similar an object is to its own cluster compared to other clusters. On the x-axis, the number of clusters is shown, while the y-axis shows that the silhouette score ranges from -1 to 1, where higher values indicate better-defined clusters.

In the elbow method, there is a decent decrease in loss criterion from 2 to 3 clusters, with smaller decreases after 3 clusters. While the silhouette method shows a big decrease in loss criterion until k=5, so I opted for k=3 clusters as a midpoint.

## The Three Types of Health Trajectories
![Health Trajectory](/assets/images/k_means_health_trajectory.webp)

The purpose of this paper is to illustrate that for the same group of people of similar initial health status, different groups will have different trajectories past a certain age and that age is 60 here. Based on this graph, we’ve achieved exactly that using the UKHLS 13-year panel survey data. We identified three types to be exact: 

1. Type I: "Resilient Health Type"

- Represents the majority (91.7%) of the sample
- Starts with the lowest frailty at age 40
- Shows a very gradual, steady increase in frailty over time
- Maintains the lowest frailty index throughout the entire age range

2. Type II: "Early Onset Frailty Type"

- Represents 3.9% of the sample
- Begins with the highest initial frailty at age 40
- Experiences a more pronounced increase in frailty, especially after age 60

3. Type III: "Accelerated Decline Type"

- Represents 4.4% of the sample
- Starts between Types I and II in terms of initial frailty
- Rapidly increases in frailty, surpassing Type II around age 55
- Shows some fluctuations but generally maintains higher frailty levels in later years

## Key Insights
I observed that the gap in frailty between the Resilient Health Type and the other two types widens significantly by age 60, suggesting that initial health trajectories can indeed influence long-term health outcomes. 

**Gender disparities**: Types II and III exhibit a distinct female skew (63.7% and 62.9% female respectively), while Type I mirrors the UK population average more closely. 

![Gender Distribution](/assets/images/gender_distro_k_means_essex.webp)

**Educational attainment**: Type I has a significantly higher proportion of university degree holders (42.7%) compared to Type II (27.3%) and Type III (23.1%), suggesting a strong association between higher education and more favorable health trajectories.

![education attainment](/assets/images/education_attainment_essex.webp)

**Employment and earnings**: Types II and III show lower employment rates both before and after the typical retirement age, and earn approximately 25% less than the sample average.

![Employment by health](/assets/images/employment_by_health_type.webp)

Furthermore, there is a 20% increase in adjusted r-squared after adding the health types as dummy variables in the regression model. A future blog post, I might discuss the model criteria used comparing classical labor market models vs. prediction models using ensemble methods. 

![R squared and stats summary](/assets/images/r_squared_improved_k_means_essex.webp)

If you enjoy reading my blog posts or have any suggestions for content, please email me. 

## In Conclusion
There is a ton of fascinating research happening in gerontology and genetics, many aided by advancements in deep learning and genetics mapping. If this topic interests you, consider subscribing and sharing this post with friends and family. 

> If people do not believe that mathematics is simple, it is only because they do not realize how complicated life is. 
  - John von Neumann