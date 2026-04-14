import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";

export default function Home() {
  return (
    <Layout title="Zipup Cloud">
      <main
        style={{ maxWidth: "1100px", margin: "0 auto", padding: "4rem 2rem" }}
      >
        {/* HERO */}
        <section
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            alignItems: "center",
            gap: "3rem"
          }}
        >
          {/* LEFT */}
          <div>
            <h1
              style={{
                fontSize: "3.5rem",
                fontWeight: 700,
                lineHeight: 1.1
              }}
            >
              Your Personal Cloud.
              <br />
              <span style={{ color: "var(--ifm-color-primary)" }}>
                Simplified.
              </span>
            </h1>

            <p
              style={{
                marginTop: "1.2rem",
                fontSize: "1.1rem",
                color: "var(--ifm-font-color-base)"
              }}
            >
              A fast, secure and pragmatic open-source cloud for JS devs —
              simple to use, powerful to run.
            </p>

            <div style={{ marginTop: "2rem" }}>
              <Link
                to="/docs/getting-started"
                style={{
                  padding: "0.9rem 1.6rem",
                  background: "var(--ifm-color-primary)",
                  color: "#fff",
                  borderRadius: "10px",
                  textDecoration: "none",
                  fontWeight: 600,
                  marginRight: "1rem"
                }}
              >
                Get Started
              </Link>

              <Link
                to="https://github.com/ankitaabad/zipup"
                style={{
                  padding: "0.9rem 1.6rem",
                  border: "1px solid var(--ifm-color-primary)",
                  borderRadius: "10px",
                  textDecoration: "none"
                }}
              >
                GitHub
              </Link>
              
            </div>
          </div>

          {/* RIGHT (YOUR SVG) */}

          <img
            src="/img/zipup-hub-black.jpeg"
            alt="Zipup architecture"
            style={{
              width: "100%",
              height: "auto",
              display: "block",
              borderRadius: "12px",
              filter: "drop-shadow(0 0 5px rgba(75, 141, 247, 0.5))"
            }}
          />
        </section>

        {/* FEATURES */}
        <section style={{ marginTop: "6rem" }}>
          <h2
            style={{
              textAlign: "center",
              fontSize: "2rem",
              fontWeight: 600
            }}
          >
            Everything you need
          </h2>

          <p
            style={{
              textAlign: "center",
              marginTop: "0.5rem",
              color: "var(--ifm-font-color-secondary)"
            }}
          >
            A Relational Database, Cache, Queue, SSL, Secure Networking and
            Powerful Logging solution— bundled and ready to use.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "1.8rem",
              marginTop: "3rem"
            }}
          >
            {[
              {
                icon: "🚀",
                title: "Deploy Apps",
                desc: "Deploy static sites and Node.js apps effortlessly"
              },
              {
                icon: "🗄️",
                title: "Postgres + Valkey",
                desc: "Built-in database and cache, ready to use"
              },
              {
                icon: "🔐",
                title: "VPN",
                desc: "WireGuard-powered private networking"
              },
              {
                icon: "⚙️",
                title: "Background Jobs",
                desc: "Queues for async and scheduled work"
              },
              {
                icon: "📊",
                title: "Logs & Observability",
                desc: "Powerful logging solution with rich querying capabilities"
              },
              {
                icon: "🌐",
                title: "Automatic HTTPS",
                desc: "Domains with SSL out of the box"
              }
            ].map((item) => (
              <div
                key={item.title}
                style={{
                  padding: "1.6rem",
                  borderRadius: "16px",
                  border: "1px solid rgba(255,255,255,0.06)",
                  background: "var(--ifm-background-surface-color)",
                  transition: "all 0.25s ease",
                  cursor: "default"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-6px)";
                  e.currentTarget.style.boxShadow =
                    "0 12px 40px rgba(0,0,0,0.45)";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)";
                  e.currentTarget.style.background = "rgba(255,255,255,0.03)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
                  e.currentTarget.style.background =
                    "var(--ifm-background-surface-color)";
                }}
              >
                <div style={{ fontSize: "1.8rem" }}>{item.icon}</div>

                <h3
                  style={{
                    marginTop: "0.8rem",
                    fontSize: "1.1rem",
                    fontWeight: 600
                  }}
                >
                  {item.title}
                </h3>

                <p
                  style={{
                    marginTop: "0.4rem",
                    fontSize: "0.95rem",
                    color: "var(--ifm-font-color-secondary)"
                  }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </Layout>
  );
}
