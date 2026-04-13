---
sidebar_position: 8
---

# Working with Queues

In zipup cloud there is no dedicated queuing service but Since Zipup includes Redis out of the box, you can build reliable background job systems using `BullMQ`



## Using Redis for Queues


BullMQ is a popular Node.js queue library built on top of Redis, and works great for:

- Background job processing
- Delayed jobs
- Retries and backoff
- Rate limiting
- Worker-based processing


## Example Setup

Install BullMQ:

```bash
npm install bullmq
```

Create a queue

```javascript
import { Queue } from "bullmq";

const queue = new Queue("email-queue", {
  connection: {
    host: "localhost",
    port: 6379,
  },
});

await queue.add("send-email", {
  to: "user@example.com",
  subject: "Welcome!",
});
```

Create a worker

```javascript
import { Worker } from "bullmq";

const worker = new Worker(
  "email-queue",
  async job => {
    console.log("Processing job:", job.name, job.data);
    // handle email sending
  },
  {
    connection: {
      host: "localhost",
      port: 6379,
    },
  }
);
```

You can read more about [BullMQ here](https://bullmq.io/).