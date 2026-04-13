---
sidebar_position: 2
---

# Getting Started with Zipup Cloud

Welcome to Zipup Cloud! This guide will walk you through the initial installation and the essential configuration steps to get your instance secured and ready for production.

## Connect to Your Server

First, SSH into your server:

```bash
ssh <your-user>@<your-server-ip>
```

Make sure:

- Your server is publicly accessible
- Ports 80 and 443 are open

## Install ZipUp Cloud

Run the installation script:

```bash
curl -fsSL "https://raw.githubusercontent.com/ankitaabad/zipup/main/install.sh" | bash
```

This script will:

- Install required dependencies
- Set up core services
- Start the ZipUp Cloud platform
- ⏳ Installation may take a few minutes.

## Access the Dashboard

Once installation is complete, open your browser and visit:

```
http://<your-server-ip>
```

The default username and password is `zipup` and `zipup`.
You should see the ZipUp Cloud dashboard. Notice you are currently on http and we need to move to https for secure connection.

## Domain Configuration

Before you can access the Zipup Cloud dashboard securely, you must map a domain to your server's IP address.

:::tip
Always ensure your domain is fully propagated before setting it in the dashboard to avoid issues with automated SSL certificate generation.
:::

- Point your DNS: Create an A record in your DNS provider's dashboard pointing your desired domain (e.g., cloud.yourdomain.com / wildcard domain) to your server's public IP.

- Verify Propagation: You can verify that your domain is pointing to the correct server by running a dig command:

  ```bash
  dig admin.zipup.dev +short
  ```

- Ensure the output matches your server's IP address.

## Setting the Domain & Enabling HTTPS

Once the script finishes and your DNS is ready, access the dashboard via the server's IP address.

1. Go to **Settings** (sidebar)
2. Enter your domain
3. Save changes

The system will automatically attempt to provision an SSL certificate. Once finished, log in using your new https:// URL to ensure you are on a secure connection.

## Updating Your Credentials

For security reasons, you must change the default password immediately after your first successful HTTPS login.

- Go back to the Settings section on the sidebar.
- Select the Change Password option.
- Enter a strong, unique password and save.
- The system will log you out; proceed to Login again with your new credentials.

:::danger
Updating the password first and then adding the domain is insecure, You should first add your domain and then change password. Sequence is important.
:::
