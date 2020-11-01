---
id: cdn
title: Content delivery network (CDN)
sidebar_label: Content delivery network (CDN)
---

## What is a CDN and how does it work?
Content delivery networks (CDNs) reduce the physical distance between your users and your server. Cached copies are made of your website and stored at points-of-presence (PoPS) around the world.

When a user browses your website, their content will be served from the PoP closest to them, which means loading times remain consistently fast across the globe for everyone.

## How can a CDN make my website faster and more secure?
CDNs can also increase your website’s security and uptime.

If there is an outage at a PoP, traffic is simply re-routed instantly. This makes it incredibly difficult to take your website offline. Web application firewalls and DDOS protection also thwart cyber threats targeting your business.

## Which CDN do we use?
Included in our (V2.0.0) Bravo and Charlie plans is a CDN powered by leading provider Fastly.

## Legacy Cloudflare CDN
Legacy Simplx customers (plan versions 1.0.0) have a free Cloudflare CDN as apart of their website.

### Why we no longer use Cloudflare
When misconfigured, CDNs can actually make your website load slightly slower if the overwhelming majority of your visitors are from inside Australia.

As [VentraIP writes](https://ventraip.com.au/faq/article/should-i-use-cloudflare-with-my-ventraip-australia/), If your website uses Cloudflare and your origin server is located within Australia, traffic will be routed via Singapore due to the high cost of bandwidth.

Acording to Cloudflare, Australia/Oceania is the most expensive bandwidth in the world, costing 17x the benchmark in Europe. Optus and Telstra are two of the most expensive transit providers on Earth.
![Global cost of bandwidth](https://blog.cloudflare.com/content/images/2016/08/CloudFlare_Relative_Cost_of_Bandwidth.png)