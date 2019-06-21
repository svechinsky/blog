---
title: "Weekly reads"
date: "2019-06-10"
author: "Yoni"
path: "/weekly"
---
Going to be sharing interesting stuff I read/overheard on a weekly basis + my opinion

---
## 16/06/19

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