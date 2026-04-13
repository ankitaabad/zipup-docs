# Introduction

Zipup Cloud is an open-source personal cloud for JavaScript developers.

Once installed, Zipup allows you to deploy and run multiple JavaScript applications. Each application has access to core services like Postgres, Valkey (Redis), and VictoriaLogs(a powerful logging system with rich querying capabilities).

In addition to backend applications, you can also host multiple static websites.

All services (Postgres, Valkey, and Victorialogs) are securely accessible over a VPN connection. This enables many posibilities and helpe you to cover advanced use cases.

You also get automatic ssl certs from Let's encrypt for your applications.

Zipup brings these components together into a single system that is simple to run, easy to understand, and built using proven technologies.



## Architecture

![Zipup Cloud Architecture](/img/arch.png)