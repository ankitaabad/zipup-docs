---
sidebar_position: 3
---

# Setting Environment Variables and Secrets

Zipup Cloud provides a simple way to configure environment variables and secrets for each application.

## Scope

- Environment variables and secrets are **set per application**
- Each app manages its own configuration independently

---

## How They Work

- Both environment variables and secrets are exposed to your app as standard environment variables
- Your application can access them using `process.env`
- **Secrets are encrypted at rest**
- Environment variables are stored as plain text.
- Changes are not reflected in running instances automatically

:::note
Any updates to environment variables or secrets require a **restart or redeployment** of the application
:::

---

## Managing Variables

To configure environment variables or secrets:

1. In the sidebar select **Web Apps**
2. Choose your application
3. Navigate to:
   - **Env Variables** tab to add/edit environment variables
   - **Secrets** tab to add/edit sensitive values

---

## Summary

- Per-app configuration
- Same access pattern (`process.env`)
- Secrets are encrypted
- Restart required after changes

This keeps configuration simple, explicit, and easy to reason about.