---
title: "Weekly reads"
date: "2019-06-10"
author: "Yoni"
path: "/weekly"
---
Interesting stuff I read/overheard on a weekly basis + my opinion.  
Feel free to correct me if you find any inaccuracies.

---

## 07/07/19
<details><summary href="https://ai.facebook.com/blog/pluribus-first-ai-to-beat-pros-in-6-player-poker/"><a>AI beating humans in poker</a></summary>

> So for the first time an AI has successfully beat people playing poker.
> It's important cause unlike chess, go, checkers or any other game AI researchers have "solved" so far poke is an imperfect information game.
>
> An imperfect information game is one where not all the information is available to all players.  
> In the case of poker each player has their own cards that other players. 
> This leads to the decisions made being dependent not only on how good they are but also on how likely they are and how other players might predict them.  
> Being predictable has a cost. Bluffing occasionally is necessary, always bluffing is disastrous.
>
> First time I see regret minimization as loss function, will keep in mind.  
> The other interesting innovation here is how they handle searching for the next move.
> Usually searching for moves involves deep searches through lots of different game states (like chess) looking far ahead.
> Their innovation in search is actually spilt into 2:
> 1. They cleverly combined various states that are similar enough to significantly reduce the size of the tree.
> 2. They accounted for the imperfect information by considering a few "modes" of thinking the opponent playing against them can have.  
> One biased for each possible action (call, raise, fold) + the default one.
</details>



---
## 30/06/19
<details><summary>Libra is evil!? - after listening to a talk by Maya Zehavi</summary>

> She has high conviction that Libra is the evil child of Zuck.
> Most interesting is how despite being pseudonymous any of the "cool" use cases for Libra (like paying for Uber) is going to be tightly regulated.  
> The way this will happen is by having service providers who are authorized sellers of Libra (can exchange fiat for libra) have users go through KYC.
> The dangerous part is they apparently have to share this KYC data among all authorized resellers. Imagine going on an Uber and then Lyft having your data.
> 
> Another interesting thought expressed by Meni (head of the Israeli Bitcoin Association) is that Libra is not competing with Bitcoin or other altcoins. They offer different and sometimes complementary value propositions.  
> My thinking was that Libra competes mainly with USD. Will be interesting to see adoption/ state sponsored adoption in countries that need to lower the value of dollar due to debt (Japan?). 
</details>


<details><summary><a href="https://medium.com/@checkwarner/a-seed-investing-framework-5c7844157baa">A seed investing framework</a></summary>

> I found this to be pretty standard in terms of what it covers. Questions relating to market, product, team etc.  
> Two interesting points that might be worth noting:
> - The story about Matt at the beginning. Interesting how VCs develop an internal representation of companies they might not even be aware of.
>   I wonder to what extend this gets exploited by non honest founders.
> - At the end of the day, one of the points, the team question, takes 90% of the time. Just shows how everything is a always about people. Who do you invest with is a big part of what do you invest in  
</details>


---
## 23/06/19

<details><summary>Termites are building huge cities of clay</summary>

> I find this particularly interesting from 2 perspectives. 
> 1. First spontaneous organization of complex structures by seemingly simple creatures
> 2. Can we learn something from it and use it to optimize the way we design our buildings/cities?
>
> Termites must be optimizing for something in their construction, maybe efficiency of getting from everywhere to everywhere in the colony?

</details>


---
## 16/06/19
<details><summary>Mental health diagnosis and treatment is too much top down - it's getting replaced</summary>

 > I've been to the happiness day hackathon on Saturday.
 > One of the talks there was about how different symptoms can be classified as the same mental illness.  
 > The classic example being all the symptoms that fall under depression: insomnia, anxiety, sadness and more.  
 > But we still classify any combination of those as depression, and as result treat them the same way.
 > This often leads to initial treatment being ineffective and then a few critical months of trial and error of several medications.
 >
 > My thinking is that a better, more individual symptom based diagnosis can help provide much better and more accurate treatment from the get go. 
</details>



<details><summary><a href="https://medium.com/@ercwl/the-libra-masterplan-dc9560e41c87">The Libra Masterplan</a> - by Eric Wall</summary>

> Initial claim here is that the pseudonymous Bitcoin model is the ultimate one due to both protecting user privacy and allowing sufficient regulatory auditing. I think that with coinjoins this actually might not be too far off. Bitcoin is not fungible but that plays in it's favor in terms of relationship with the regulator.  
>
> So now Libra adopts this model to enable the currency to spread as easily as possible with minimal regulatory burden on facebook. Immediate question, why is this good for facebook?
>
> The answer that emerges is that facebook is building a genuinely "good" base layer in order to control much of the layers on top of it (via calibra). I think this is a much more positive version of what could be very sinister Zuckbucks.
>
> Where I diverge from the author is in how this effects bitcoin. I think that if the base layer of libra will be permissionless/decentralized enough bitcoin will lose alot of it's allure as an investment vehicle compared to libra or libra based ones.

</details>
<br/>

<details><summary>It's very hard to find an actual use cases for zk-snarks</summary>

> I was at a pretty cool zero knowledge proof workshop hosted at Primal Base, finally got a chance to look a bit more deeply into the practical usage of ZKP. A lot of really great people. Unfortunately was at the first day only.  
> My biggest take was that it's really hard to find an actual use case that justifies general ZKP (like snarks).  
> Often it makes much more sense to use more "standard" cryptographic primitives. The exceptions seem to be:
> 1. Private payments (a la ZCash)
> 2. Identity related proofs (but I suspect a large amount of cases that fall under this category can be solved with a better identity scheme only) 
> What might be really interesting in the future is using universal circuits as a basis for a blockchain to allow more general proofs to be executed on top of it.

</details>

___

## 09/06/19

<details><summary>Data by itself really powerful(even without machine learning) </summary>

> I met with a friend who has shown me some of data he and his company collect as part of their work. Not personal data, everything is in the public domain. The insights you could collect from this raw data just by manual inspection are mindblowing and are bound to be even more insane when some sort of machine learning is used.  
> Wonder how much of the benefits of machine learning applied in business is just a proxy implementing data acquisition and inspection processes.

</details>
<br/>


<details><summary>Facebook released a finally released their crypto project</summary>

> It's a coin, it's a wallet, it's a PR machine. I'll write something about it when I finally read the details but seems it interesting. 
</details>  
<br/>

<details><summary>Group at Imperial college in London analyzes hearts with MRI based data and autoencoders, can read a bit about it <a href="https://lms.mrc.ac.uk/ai-analysis-predicts-survival-from-heart-movement/">here</a></summary>

> Really personally exciting. Heart disease runs in my family and any prospects of earlier/better discovery are making me feel just a bit safer.
> They have further research ongoing to map more data on top of the functional one:
> - Advanced variant of ECG for electric activity 
> - Some sort of metabolic analysis.
> 
> I wonder if how much of a generalization would it be to apply to other internal organs (liver, lungs etc.)
</details>
<br/>

<details><summary>Team @Deepmind managed to essentially beat humans playing quake 3, heard about it in CogX, <a href="https://science.sciencemag.org/content/364/6443/859">published here</a></summary>

> Disclaimer: Haven't deep dived into the actual paper yet.
> Unsurprisingly they used [RNNs](https://en.wikipedia.org/wiki/Recurrent_neural_network) to represent time based advancement/decision making. Where the output of each generative step is the next decision to make.  
>   
> Where it gets extremely cool bit is how they stacked RNNs with time steps of varying length on top of each other. This creates a sort of fast system/slow system where one can carry intent and the other respond to immediate action and update the higher systems when their time steps sync.
> This is really cool. I wonder if this can be applied elsewhere? Perhaps robotics.
</details>
<br/>
<details><summary> Apparently out of the 1.4B people in china only half are connected to the internet (90% of usage is via mobile).</summary>

> I find this interesting for two reasons:
>
> 1. Only **half** is connected, looks like a huge opportunity/ study case. What  makes the other half different. I imagine age is a big difference but what else? Could this be traced back to specific decisions and plans of the CPC?
> 2. The fact that mobile completely leapfrogged the PC. This probably happened because China was exposed to both types of devices at the same time. Does this mean that mobile devices are more intuitive to someone who didn't deal with any device before. I wonder if we'll see something similar with Africa/ parts of South America and wearables/
</details>

---