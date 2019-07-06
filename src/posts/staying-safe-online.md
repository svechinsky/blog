---
title: "Staying safe in the world wide web"
path: "/staying-safe-online"
date: "2019-07-06"
# coverImage: "../images/hello.jpg"
author: "Yoni"
excerpt: "Investing in security is hard. I avoided doing it for a long while. here I write a bit about why I decided to finally take the time to do it.
I also outline what I did."
tags: ["security", "cryptography"]
---

### A security horror story

A few weeks ago I got really scared.  
The reason was [this](https://medium.com/coinmonks/the-most-expensive-lesson-of-my-life-details-of-sim-port-hack-35de11517124) post.  

**TLDR**:  
Writer leads engineering at Bitgo (large cryptocurrency payment processor).  
He also ~~has~~ had a very juicy coinbase account.     
That coinbase account was created with a gmail account that had 2FA based on his mobile phone number.  
Attackers called his mobile service provider, convinced the (probably young but definitely naive) representative to port his sim card.  
Attackers then hack gmail --> access coinbase --> steal $100K worth of crypto

No need for fancy techniques that listen to the sound your CPU makes to crack your password.  
All it takes is just one smooth talker and perhaps some highly available personal information.

I was aware for a while now that my own security measures were lacking.  
But as it happens with a lot of things in life I didn't have the sufficient activation energy to actually do anything about it.

---
### Hardening my security
I'm by no means a security expert, but I hope sharing my experience here might help someone trying to figure out how they can make themselves a bit safer.

I started my journey with a rather [innocent link](https://github.com/lrvick/security-token-docs/blob/master/Use_Cases/Password_Mangement.md) posted in the post from above. It's just a chart that compares a bunch of password managers. 

Note 2 things:
1. There is one clear winner in the game of password managers - [**Password Store**](https://www.passwordstore.org/)
2. The document is part of a repo about security tokens - what are those?!

---
### Security tokens
So I set out to explore, first the other parts of the same [repo](https://github.com/lrvick/security-token-docs) and then some [other](https://blog.trezor.io/why-you-should-never-use-google-authenticator-again-e166d09d4324) resources online.

The conclusion was quite simple.  
*I should get a hardware token.  
YubiKey is the standard hardware token.*  
I should get a YubiKey. 

![Yubikey](/../images/yubikey.jpeg "from legallygeeky.net")


So on one sunny Sunday, I did just that.
I went to the local reseller and bought a pair of [YubiKey5 Series](https://www.yubico.com/products/yubikey-5-overview/).

I get really excited when I get new stuff. So I went on binge of learning what I should do with my YubiKeys, an initial list I came up with was:
-  Move all my accounts to MFA with a YubiKey + backup
-  Set up fresh PGP keys and store them on the token
-  Finally set up Pass as my password manager and leave cloud services like LastPass for good

---
### Setting up MFA
This *should* be pretty straightforward.  
Go to your favorite and most sensitive accounts. Choose a security token, and connect it.  
And don't forget to set up your second token as backup.

Turns out most providers are not particularly supportive of security tokens as means of MFA.  
Best case, you can set it up as a secondary option after you set MFA with your phone and then delete your phone.  
Worst case, you can't have MFA without your phone and you only have the security token as backup.  

---
### PGP
PGP has always been there, quite literally, since it was invented before I was born.  
It has a UX to match and the only time I've ever used it was when transferring a private key to a fellow developer.

So the hell would I care about creating PGP keys and putting them on my yubikey?  
Mostly because I think it's really cool. Some other benefits:
1. Finally signing git commits.
2. Sending and receiving encrypted things online.
3. No more worrying about a million ssh keys since pgp keys can double as ssh identity.

So I went for it, set keys up on an airgapped system and transferred them to my token.  
Felt like a wizard.

If you want to do this yourself [here](https://www.whatsdoom.com/posts/2018/06/30/creating-airgapped-keys-for-yubikey/) is one of the guides I followed.  
One difference is that I used tails instead of ubuntu for the airgapped system.

---
### PASS
For years I trained my mind to be the ultimate instrument for remembering passwords.
But then at some point during the previous crypto bull market, I forgot the password for a wallet with 20 ETH in it.
My trusty mind has failed me.  

I needed a password manager.  
I even used some for work purposes.
But I could never get over the hurdle of entrusting my personal passwords with a third party.

Pass turned out to be the perfect solution for me.
It's just a folder (and potentially a git repo) encrypted with PGP.  
And then guess who just got a himself some securely generated PGP keys :).

I followed [this](https://github.com/lrvick/security-token-docs/blob/master/Use_Cases/Password_Mangement.md) guide and had it set up in no time.
Two things I've done after:
1. I migrated my existing Lastpass passwords. You have a bunch of migration tools available [here](https://www.passwordstore.org/)).
2. I installed [PassFF](https://github.com/passff/passff) to manage the passwords directly from browser.
UX is not on par with last pass but the difference is definitely worth it for me.

---

Overall, the entire process, including the "research" took me about 8 hours.  
Not too long compared to the amount of value stored in the accounts/passwords I just secured.  

Investing in security is hard.
It's fairly confusing and time consuming, the benefit is in all the shit you avoided, not all the value you created.
I think that parts/most of my experience can be useful and applicable to other people, if only in showing you how one such setup could work.

Feel free to [contact me](/contact) if you have any questions/corrections.