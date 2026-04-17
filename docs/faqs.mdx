# FAQs

<details>
<summary><strong>What are the default login credentials?</strong></summary>

By default, you can log in using:

- **Username:** `zipup`
- **Password:** `zipup`
  
You should change them once you setup a domin for admin console.

</details>

---

<details>
<summary><strong>What are service endpoints for Postgres, Valkey (Redis), and VictoriaLogs over WireGuard VPN?</strong></summary>

Use the following host and ports:

- **Host:** `10.13.13.1`

Ports:

- **Postgres:** `5432`
- **Valkey (Redis):** `6379`
- **VictoriaLogs:** `9428`

</details>

---

<details>
<summary><strong>What are default credentials for Postgres and Valkey (Redis) over WireGuard VPN?</strong></summary>

The same default credentials are used:

- **Username:** `zipup`
- **Password:** `zipup`

</details>

---

<details>
<summary><strong>How to connect with postgres/valkey from within a JavaScript application?</strong></summary>

From within your application, you can use service names directly:

- **Postgres:** `postgres:5432`
- **Valkey (Redis):** `redis:6379`

These are internally resolved within the Zipup network.

</details>

---

<details>
<summary><strong>Which Node.js version is used for deploying applications?</strong></summary>


Currently, deployments run on: `node:24-bookworm-slim`

</details>

---

<details>
<summary><strong>What are some common mistakes to avoid when using Zipup Cloud?</strong></summary>

- Updating environment variables or secrets and expecting changes to take effect without a restart or redeployment.
- Assuming all file writes are persistent. Only data written to the `/data` directory is preserved across deployments.
- Building on a different architecture (e.g., ARM vs x86) with native binary dependencies can lead to runtime incompatibilities. Zipup is currently tested on x86 environments—ensure your build matches the target architecture.
- Relying on `console.log` for logging. While it works, using structured logging allows you to take full advantage of VictoriaLogs, including powerful querying and filtering.
- Not running your application on `ZIPUP_PORT` port. It is available in env variables, You can access it with `process.env.ZIPUP_PORT`.
- using `zipup.config.json` for `api key` and `secret key`. Although this works but it is just convenience. Always gitignore `zipup.config.json` and prefer environment variables for `api key` and `secret key`.
- Forgetting to set a `start` command before deployment.

</details>

---

<details>
<summary><strong>Why am I seeing an SSL error on my domain?</strong></summary>

SSL certificates are provisioned automatically, but it can take a short time for them to be issued and propagated.

If you encounter an SSL error:
- Wait a few moments
- Refresh the page a couple of times

In most cases, the issue resolves on its own once the certificate is fully set up.

Also ensure your domain is correctly pointing to your server:

Just run this command in your terminal.

```bash
dig your-domain +short
```
The returned IP should match your server’s IP address.

</details>
