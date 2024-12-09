import React from "react";
import { Button } from "./ui/button";

const CTASection = () => {
  return (
    <div style={{ padding: "5rem 1rem", marginBottom: "5rem", textAlign: "center" }}>
      <div
        style={{
          maxWidth: "72rem",
          margin: "0 auto",
          paddingLeft: "1rem",
          paddingRight: "1rem",
        }}
      >
        <h2
          style={{
            fontSize: "2.25rem",
            fontWeight: "800",
            color: "#fff",
            marginBottom: "1.5rem",
          }}
        >
          Ready to get started?
        </h2>
        <p
          style={{
            fontSize: "1.25rem",
            color: "#cbd5e1",
            marginBottom: "2.5rem",
            maxWidth: "32rem",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          Get started with Orbbitt and build your career.
        </p>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <a href="/search" style={{ textDecoration: "none" }}>
            <Button
              style={{
                backgroundColor: "#38bdf8",
                color: "#fff",
                fontWeight: "600",
                height: "3rem",
                padding: "0 2rem",
                borderRadius: "0.5rem",
                transition: "background-color 0.3s",
              }}
              onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#0ea5e9")}
              onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#38bdf8")}
            >
              Get started for free
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CTASection;
