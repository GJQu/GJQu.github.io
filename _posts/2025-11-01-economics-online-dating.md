---
layout: post
title:  "The Economics and Data Science of Online Dating"
date:   2025-11-02 09:00:00
categories: [Book]
tags: [Book Review, Economics, Data Science]  # Tags for spec
author: Gavin Qu  # Name of the author
layout: single  # Layout option, "single" is commonly used for posts
header:
  image: "/assets/images/2025/dating_pools_xkcd.png"  # Path to the header image
  image_description: "xkcd comic panes about dating" # custom alt tag for screen readers
  caption: ""  # Optional caption for the header image
toc: false  # Enable a table of contents on the page
published: true  # If false, the post won't be published but will be drafted
---
This is my first time doing a book review online, but I want to combine it with the broader theme of my blog, which is in itself a projection of my hobbies and passions in life. I believe that good ideas are rooted in the concept of *transfer learning*, the machine learning concept where knowledge gained in one domain can be repurposed to solve problems in another. So I'd like to attempt at relating the ideas found in this book to my passions. If I get something factually incorrect or logically unsound, please do send me an email. 

## Search Theory
If you have ever tried online dating, you would run into this dilemma at least one: "When do you stop using the app?" This is likely one of the biggest complaints of online dating, is that you participate in a rather *thick* market in economic terms, meaning a market with an abundance of participants. The sheer number of matches and chats to go through often result in decision fatigue. 

This is a common phenomenon in large social networks. Imagine two towns: 

- In Town A, everyone is connected to everyone (a dense network). 
- In Town B, people are connected in small cliques with few bridges between them (a sparse network). 

A new idea or tool, such as the personal computer, will spread fast in Town A, but may take years or decades in Town B because information bottlenecks at the social boundaries. 

Online dating is more or less a social network that benefits from such network externalities as the above analogy. At the same time, dating in general is also a **Search Problem**. You are looking for a match in a sea of potential candidates. Every date you go on costs time (especially leading up to the first date), emotional energy, and opportunity cost. Eventually, rational people *settle* at some point, usually once the expected benefits of continued searching is lower than the cost. Economists call this the *optimal stopping rule*. 

In Computer science and statistics, the optimal stopping rule often shows up as the **Secretary Problem**, where an algorithm sequentially observes a list of candidates and must select the single best one, without backtracking. The goal is to minimize computational cost of the search while maximizing the probability of selecting the best option, often using Monte Carlo simulations to estimate the results. 

I believe this is an extremely relevant concepts in online dating apps, depending on your "objective function" of dating, the dense network and nature of the algorithm can make it hard to know when to "settle". By the way, the author reframes "settling" as an efficient decision, not a failure in typical semantics. 

## Cheap Talk and Credible Signaling
Most online dating profiles are full of cheap talks, which are claims that cost nothing to make. "I love hiking" or "I'm six feet tall." Since there is no immediate penalty for lying, exaggeration becomes fairly common. There has been studies showing that the  height distribution that men state on dating apps are above the normal distribution of height in the actual population. 

However, large lies are costly later. This is where costly signaling comes in: actions that require effort or sacrifice makes them more credible. 

In economics, the **Costly Signal** principle was first formalized by Michael Spence's work on the job market. Essentially, the signal must be less costly for the high-quality agent to produce than for the low-quality agent. For example, in product warranty a long, comprehensive warranty on a product is a credible signal of high quality. It is less costly for a manufacturer of a durable product to offer a long warranty then it would be for a manufacturer of a lower-quality product.  

In data science, when detecting financial fraud, you would search for credible signals like sudden, large transfers to a new account. These signals are credible because they are costly to ignore, since a high false negative rate is unacceptable. 

In online dating, posting recent, realistic photos or describing activities and hobbies you actually do, signals authenticity and credibility. Just as in job markets, where obtaining a degree signals competence (because it would be hard to fake). In dating, small, believable costs separate honest signals from cheap talk. 

## Network Externalities (The Facebook Effect)
I briefly introduced this concept at the beginning where I stated that dating platforms exhibit **network effects**, their value rises as more users join. A small dating site with ten members is nearly useless, especially if sparsely distributed in the world. But with millions, it's indispensable. This mirrors social media, where participation itself creates value. 

But it also creates *winner-takes-all* dynamics: big platforms such as Hinge dominate because users flock where others already are. Demands breeds demand essentially. 

## Statistical Discrimination
This is one of the more uncomfortable sounding topics but it is crucial. Statistical discrimination is where a decision-maker (an employer, a lender or an algorithm) makes decisions about an individual based on the average or statistical characteristics of the group to which that individual belongs. This occurs when the agent has imperfect information about the individual's true, unobservable quality. Crucially, this type of discrimination can occur even if the agent is rational and holds no prejudice (taste-based bias) against the group. 

When given imperfect information in a game theory sense, an agent has to fill the information gap by using a group's statistical profile as a *proxy* for the individual's unobserved quality (e.g. creditworthiness, productivity). 

In the case of insurance premiums, young male drivers and young drivers in general have a statistically higher risk of accidents than other groups. The company uses the group statistic to price that individual's risk. This can create self-fulfilling prophecies and bias downstream, which rationally discourages individuals in that group to take on risk, and thereby reinforcing the initial, discriminatory statistic. 

In online dating, stereotypes exist, which may lead to participants undervaluing themselves and contribute to their own gender based limitation later on. 

## Thick vs. Thin Markets
A thick market has many participants and diverse options, like New York's dating scene or Silicon Valley's startup scene. A thin markets has few matches, like the Town A example from earlier. Thick markets produce better matches and higher satisfaction in general, but can also create decision paralysis as a result of "too many fish". Thin markets on the other hand offer fewer options but stronger incentive to commit early. I am a strong believer in that *big ponds* make for happier fish, in both work and romance alike. 

This is also why dating apps don't show you everyone in your area all at once, and instead uses a **recommendation system** to quickly pair users with options out of millions. Using example from Uber, dynamic pricing can keep market "thick" by incentivizing the scarce side (like drivers). Dating apps such as Hinge displays a section called **Standouts**, where it updates daily with outliers in your usual dating pool to keep you engaged in the market. 

## Positive Assortative Mating and Clustering
Within a broader network, a centralized network create *hubs* where many key players connect, like those star-shaped airline maps. These hubs wield enormous influence. Think of the meteoric virality of Labubu on X. 

Clustered networks can also create tight groups, like families or work teams. Trust and norms often thrive here, but new information often struggles to get in. For more on clustering, I did a blog post about how I used k-means clustering in a labor market context [here](https://gjqu.github.io/school/2024/10/01/from-medical-charts.html). 

As a result, we tend to pair with people similar to ourselves, by education, profession, or even algorithmic match score such as the famous ELO scoring system used by Tinder. This often times can reinforce inequality: high-income individuals marry each other, concentrating wealth, etc. 

In research networks, similar clustering happens: elite universities collaborate mostly with other elites, further entrenching advantages. 

The term **Homophily** describes this tendency of nodes (individuals) in a network to connect to other nodes that share a similar traits. I'm sure this can be observed in many facets of daily life such as political views, hobbies and education. 

## Return on Skills
With each additional year of education, an individual can expect a roughly 10% increase in lifetime earnings. 

In dating, this probably corresponds to looks and "attractiveness". Looks often yield higher short-term returns. 

$$\ln(\text{Wage}) = \beta_0 + \beta_1 \cdot \text{Education} + \beta_2 \cdot \text{Experience} + \dots + \epsilon$$

- Here, $\beta_1$ is the estimated rate of return on education, which represents the percentage increase in earnings. 

"Looks" often yield higher returns than expected because of the **Halo Effect**, a cognitive bias where overall positive impressions influence the perception of less-related positive qualities (like intelligence or empathy). An excellent example would be Ted Bundy the serial murderer which infamously targeted young women, and later on built a cult following due to his attractiveness even after convicted of his crimes. 

This type of "unobservable traits" can be challenging to model and can show up as omitted variable bias. 

## The Family as a Micro-Economy
Another fundamental concept in labor economics and game theory is negotiation or bargaining. Women's wage gap has been largely driven by opportunity cost of child bearing. Dual-career households face negotiation problems familiar to game theorists: resource allocation, specialization, and risk-sharing. 

The decision-making process in a dual-career household is essentially a *cooperative bargaining game*. The couple acts as a unit, trying to maximize a joint outcome (household utility), but they must negotiate how to divide labor, income, and time. 

In Nash Bargaining Solution, a person's power in the negotiation is usually determined by their "threat point", the utility level they would achieve if the marriage or cooperation failed. 

- Due to the wage gap, women has a lower opportunity cost for leaving the labor force or reducing hours. 

- This lower opportunity cost translates to a weaker bargaining position within household, leading to an equilibrium where the woman specializes more in home production. 

- This choice, as you might have noticed, will further reinforce the wage gap by slowing her career growth, making her threat point even lower in the future. 

In the end, the couple must negotiate who uses their non-work time for leisure, childcare, or home maintenance. Data shows women, even in dual-career couples, tender to shoulder the "second shift" due to specialization decisions such as pregnancy. 

Perhaps this is far stretched from dating apps, but the prominence of dating apps do correlate with the economic trend of the declining benefits of marriage. 

An economist would advise: don't treat love as a sunk cost, but consider its future states. 

A data scientist would say to model the relationship's utility as a dynamic process and focus on maximizing its expected future value based on real-time evidence (leading indicators). 

The ultimate advice here is probably to employ a **Bayesian Stopping** framework by setting a threshold, regularly evaluate the predicted future utility. And don't wait for total failure. 

"Don't optimize for your current local maximum; model the trajectory and optimize for your global maximum in future utility." 

## Closing Thoughts
I think Paul Oyer's *Economics of Online Dating* is far more than a witty take on Hinge or Tinder, it's a study in how networks and information shape even our most personal choices. The book blends case studies in behavioral science, game theory, data science, information theory, and labor economics into a coherent view of online dating and modern love. 

Have you used dating apps recently? Which of these theories feel real to you, and which seem absurd in practice? 

> Doing great work is a depth-first search whose root node is the desire to. So "If at first you don't succeed, try, try again" isn't quite right. It should be: If at first you don't succeed, either try again, or backtrack and then try again.
  - Paul Graham