---
layout: post
title:  "Big Fish in Little Pond and its Network Effect"
date:   2025-11-16 09:00:00
categories: [Social Science]
tags: [Network Science, Economics, Data Science]  # Tags for spec
author: Gavin Qu  # Name of the author
layout: single  # Layout option, "single" is commonly used for posts
header:
  image: "/assets/images/2025/header_bigfish_networks.png"  # Path to the header image
  image_description: "Clustered Pond vs. Centralized Pond" # custom alt tag for screen readers
  caption: ""  # Optional caption for the header image
toc: false  # Enable a table of contents on the page
mathjax: true
published: true  # If false, the post won't be published but will be drafted
---
The other day, I was on a walk with a friend and our conversation drifted into a familiar paradox: how the world can feel gigantic and tiny at the same time. Naturally, I asked him the age-old question: *Would you rather be a big fish in a small pond or a small fish in a big pond?* He responded that being a big fish in small pond is preferable due to the confidence and visibility one can receive. Truth is, the choice is multidimensional and tangled up with personal goals and the timing of those goals. Each option offers distinct advantages and drawbacks, many of which show up repeatedly in social science research on comparison, identity, and causal mechanisms behind human motivation. I will share what I learned digging through that work, and at the end I’ll offer my own decidedly opinionated take.

## The Phoenix and the Chicken
Growing up in a Chinese household, you'll often hear the following proverb: *"Better to be the head of a chicken than the tail of a phoenix."* This inherently biased proverb demonstrates the clear tradeoff between relative standing and absolute ability. If we follow along the logic behind proverb using basic economic intuition, it implies that one has more influence and autonomy being "head of the chicken", while being the “tail of the phoenix” puts you in the company of exceptional peers, exciting but competitive, and usually with less visibility. 

Empirical research in educational psychology and economics echos this dynamic. Much of it shows how the context you're placed in (your pond), shapes your belief about your own ability.  

## Academic Self-Concept and the Big-Fish-Little-Pond (BFLP) Effect
In this section, I will introduce the biggest hurdle while using standard regression models and talk about the canonical BFLP equation. Academic self-concept (ASC) is a student's personal assessment of their own ability as a learner in a academic setting, and it can be extended to a workplace setting as well. ASC can be influenced by academic performance, social comparison, and feedback from teachers. 

### The Causal Inference Challenge
The Big-Fish-Little-Pond effect is an area of study which was first formalized by educational psychologist [Herbert March](https://en.wikipedia.org/wiki/Herbert_W._Marsh). It suggests that the student's academic self-concept is not just based on their own absolute ability, but also influenced by endogenous variables such as their *relative* standing among their peers. Being a high-ability student ("Big Fish") in a class with lower ability peers ("Small Pond") tend to boost the ASC. 

In typical social science fashion when we want to talk about casual effects, the biggest hurdle in empirically validating this phenomenon is *selection bias* (or confounding). Students with higher absolute ability are often selected into or self-select into higher-ability schools (the "Big Ponds"). This makes it difficult to separate two effects: the positive effect of the student's own high ability from the negative effect of the peer group's high average ability. 

To overcome this, researchers rely on causal inference techniques, most commonly using [Fixed Effects](https://en.wikipedia.org/wiki/Fixed_effects_model) in regression analysis. By including a dummy variable for every single school (the "Pond"), the model controls for all stable, unobserved differences between those environments—such as curriculum quality, local reputation, or teacher effectiveness. 

Using fixed-effect here isolates the remaining variation in ASC to the student's own characteristics and their relative standing within that specific pond. It is essentially a method at controlling for all observed and unobserved variables. In another word, since general curriculum tend not to change a whole lot, what if we observe the curriculum quality in many different schools, we control for the school? If we do that, we can remove variation explained by the school. Since there is no variation in curriculum that isn't explained by the school, after we control for school, we'll have control for curriculum, there will be no variation in curriculum left. 

Here's a direct quote from the textbook: "Fixed effects can be thought of as taking a whole long list of variables on back doors that are constant within some category and collapsing them to just be that category. Then, controlling for that category."

### The Math of Social Comparison: Assimilation vs. Contrast
The canonical BFLP equation is a simple linear model that captures the trade-off between the individual's absolute ability and the peer group's average ability:

$$\text{ASC}_i = \beta_0 + \beta_1 A_i + \beta_2 \bar{A}_j + \epsilon_i$$

Where $$\ASC_i$$ is the Academic Self-Concept for student i, $$\A_i$$ is the absolute ability of the student i (e.g. SAT and GRE), $$\bar{A}_j$$ is the mean ability of the peer group in school j. 

The BFLP effect relies on the signs of the two key coefficients:$\beta_1$ (The Assimilation Effect): This coefficient measures the positive, direct effect of the student's own absolute ability on their self-concept. As $A_i$ increases, $\text{ASC}_i$ increases. Thus, we expect $\beta_1 > 0$. 

$\beta_2$ (The Contrast Effect): This coefficient captures the effect of the peer group's average ability on the student's self-concept. The BFLP hypothesis predicts a negative effect: if a student moves to a higher-ability pond ($\bar{A}_j$ increases) while their $$\A_i$$ remains constant, their rank drops, and their $\text{ASC}_i$ decreases. Thus, one can expect $\beta_2 < 0$. This can be quite intuitive anecdotally, your high school AP Calculus class tends to feel much more daunting and stressful than a Intro to Calculus class, all else being equal. 

Together, these two forces create a tension: individuals absorb information about themselves (assimilation) while simultaneously comparing upward or downward to those around them (contrast). The resulting self-concept is not a pure readout of ability but a negotiated equilibrium shaped by context. This is where the story starts to get interesting for understanding real-world choices about ponds and fish.

## The Network Science of the Pond's Structure
If you read my last blog post, you know I love a good network analysis in the context of social science. 

### The Data Science of the Pond: Clustering Firm Types
How can an economist or data scientist measure the abstract concept of a "Pond's Ability" ($\bar{A}_j$) in a concrete economic setting? The answer lies in analyzing the bipartite network of Matched Employer-Employee data, which models the connections between workers and firms. 

![Simple Bipartite Graph](/assets/images/2025/bipartite_graph.svg)

Rather than relying on noisy, single-firm measures, one can use clustering—a technique referenced in the paper ["A Distributional Framework for Matched Employer Employee Data"](https://lamadon.com/paper/blm.pdf) by Bonhomme, et al. The authors show that one can develop a tractable, two-step estimator where firms are classified in a first step. This is the formal definition of the "Pond".

Measuring the Fish ($\hat{\theta}_i$): First, estimate a worker fixed effect ($\hat{\theta}_i$) for every worker $i$. This $\hat{\theta}_i$ is the rigorous, data-driven measure of the worker's absolute ability which is our "Big Fish" measure.

Clustering the Pond: Next, firms are clustered based on their unobserved heterogeneity (or firm fixed effects). This partitions all firms into $K$ distinct types, or Ponds. A firm cluster, say Cluster 3, represents a segment of the labor market that tends to hire a specific mix of $\hat{\theta}_i$ workers.

Defining Pond Ability ($\bar{A}_k$): The measure for the ability of Pond $k$ ($\bar{A}_k$) is then calculated as the average $\hat{\theta}_i$ of all workers belonging to that firm cluster.

$$\bar{A}_k = \frac{1}{N_k} \sum_{i \in \text{Cluster } k} \hat{\theta}_i$$

This approach replaces a potentially flawed subjective measure of peer quality with a statistically robust definition, allowing someone to test the BFLP hypothesis (the $$\beta_2$$ Contrast Effect) on real-world outcomes like wage growth and job mobility.

I found the ingenious approach of this paper fascinating, especially the strong sorting patterns between workers and firms, how wage has a direct effect on job mobility, and earnings after a job move also depend on the previous employer. In an efficient market, perhaps it is "Skill Issue" to blame. 

### The Hidden Cost of Centrality: An Interaction Effect
If clustering tells us *what* the Pond is, network centrality tells us how the Pond behaves—and, more importantly, how intense the competition becomes for the Small Fish caught inside it.

We’ve already established that \beta_2 captures the negative Contrast Effect: the higher the ability of the surrounding peer group, the more an individual’s relative standing slips. The next question is whether the structure of the network amplifies that pressure. This is where Betweenness Centrality $$\C_{B,j}$ enters the story.

$$\C_{B,j}$$ measures how often a central actor (think a VC firm like YC) acts as the required bridge for information and resources flowing between everyone else (its portfolio companies). When a network is highly centralized, the “fish” have few alternative paths to get what they need. All roads lead through the same gatekeeper. That scarcity sharpens competition, making the negative $$\beta_2$$ effect far stronger.

To capture this formally, one can extend the BFLP model with an interaction term:

$$\text{Performance}_i = \beta_0 + \beta_1 A_i + \beta_2 \bar{A}_j + \beta_3 C_{B,j} + \beta_4 (\bar{A}_j \times C_{B,j}) + \epsilon_i$$

The interaction term \beta_4 is the crucial addition.

- Hypothesis: $$\beta_4 < 0$$

- A negative $$\beta_4$$ means: As centrality increases, the penalty of being in a high-ability Pond intensifies. Competition for scarce resources becomes far more punishing when the central node dominates the flow of opportunity. 

In other words, the Small Fish suffers most not merely in a Big Pond, but in a Big Pond ruled by a single, concentrated hub of power. 

## Conclusion: My Decidedly Opinionated Take
Like most claims about life, there’s no strict true-or-false answer to which fish is ‘best.’ Personally, I am a firm believer towards always finding the next bigger "pond" (or "ocean"), especially earlier on in school and career. This means grow your skills, test them against stronger peers, fail, try again. Once you've become a bigger fish, iteratively find the next biggest pond and repeat the cycle. And most importantly, avoid burnouts. 

> Intelligence without ambition is a bird without wings.
  - Salvador Dalí