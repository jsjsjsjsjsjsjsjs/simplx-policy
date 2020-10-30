---
id: uptime-monitor
title: How uptime monitor works
sidebar_label: How uptime monitor works
---

Every **minute**, our system will check your website to make sure it is online. If the Uptime Monitor doesn’t get the expected response, it’ll keep trying a couple more times to confirm that the site is down. If it is still unresponsive, we will receive a notification.

Once we're notified, it will be a high priority for us to figure out why your website is not online.

You will receive an uptime percentage and downtime post-mortem report in your monthly service report. If you have a SLA with us and your percentage is lower than expected, a credit will be applied to your account.

## Where is uptime checked from?

We check uptime from **Virginia, Frankfurt, Singapore, London and Oregon.**

## How often do we check uptime?

Your website is checked for uptime **every 60 seconds**.

## How can I check my website's status history?

You'll be provided with a link to your website's public status page. If you have lost this link, contact our support team.

## When is an alert triggered?

After **2 failed checks** in a row from at least **half the locations**, an alert is triggered.

## Tech specs

We check for `HTTP SUCCESS` using `GET` requests. We also check SSL certificate status.