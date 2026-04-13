---
sidebar_position: 4
---


# Multitenant Isolation

Zipup Cloud allows multiple applications to share the same infrastructure (e.g., Postgres, Valkey). This makes tenant isolation necessary.
In Zipup’s shared responsibility model, defining and enforcing that isolation is left to the user—ensuring flexibility for use cases where platform-imposed restrictions might otherwise be limiting.

Isolation is achieved by creating **separate credentials per app**, scoped to only what that app needs.

---

## 🧠 How It Works

There are two ways services are accessed:

### 1. From your local machine (via WireGuard)

All services are exposed on the private network:

- Postgres → `10.13.13.1:5432`
- Valkey → `10.13.13.1:6379`

---

### 2. From apps inside Zipup Cloud

Apps use **internal service names**:

- Postgres → `postgres:5432`
- Valkey → `redis:6379`

---

## 👥 Typical Workflow

1. **Admin creates isolated credentials**
2. Shares them with a team/app owner
3. App connects using internal service name

---

## 🐘 PostgreSQL Isolation

Each app gets:
- Its own **database**
- Its own **user**

---

### Step 1: Connect via WireGuard

```bash
psql -h 10.13.13.1 -U zipup -p 5432
```

### Step 2: Create Database and User

```sql
CREATE DATABASE app1_db;

CREATE USER app1_user WITH PASSWORD 'strongpassword';

GRANT ALL PRIVILEGES ON DATABASE app1_db TO app1_user;
```

### Step 3: Restrict Schema Access
By default every user can access the public schema. We need to remove this access.

```sql
\c app1_db

REVOKE ALL ON SCHEMA public FROM PUBLIC;
GRANT ALL ON SCHEMA public TO app1_user;
```

### Connection Details
From app inside zipup cloud

```
DATABASE_URL=postgres://app1_user:strongpassword@10.13.13.1:5432/app1_db
```

---

## Valkey (Redis) Isolation

Valkey uses ACLs (Access Control Lists) for isolation.

Each app gets:
- Its own user
- Access limited to specific key prefixes
:::info
redis-cli should be installed on your system.
:::


  
### Step 1: Connect via WireGuard

```bash
redis-cli -h 10.13.13.1 -p 6379
```

### Step 2: Create an Isolated User

- replace`app1_user` with your username and `storngpassword` with your passord and `app1` with your key prefix.
  
```bash
ACL SETUSER app1_user on >strongpassword ~app1:* +@all
```
- This means app1 can only access keys starting with app1:

### Step 3: Use Scoped Keys in Your App

```javascript
await redis.set("app1:user:123", "data");
```

### Connection Details

```
REDIS_URL=redis://app1_user:strongpassword@redis:6379
```
