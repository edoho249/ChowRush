import React from "react";

export default function Contact() {
  return (
    <main className="section" style={{ padding: "2rem 0" }}>
      <div
        className="container"
        style={{
          display: "flex",
          gap: 24,
          flexWrap: "wrap",
          maxWidth: 1000,
          margin: "0 auto",
        }}
      >
      
        <div style={{ flex: 1, minWidth: 280 }}>
          <h1 className="title" style={{ fontSize: 32, marginBottom: 8 }}>
            Contact
          </h1>
          <p className="subtitle" style={{ fontSize: 16, marginBottom: 16 }}>
            We’d love to hear from you.
          </p>
          <form
            className="card"
            style={{
              padding: 24,
              display: "grid",
              gap: 12,
              borderRadius: 12,
              boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
              background: "#fff",
            }}
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              placeholder="Full name"
              style={{
                padding: 12,
                border: "1px solid #e5e7eb",
                borderRadius: 8,
                fontSize: 14,
              }}
            />
            <input
              placeholder="Email"
              style={{
                padding: 12,
                border: "1px solid #e5e7eb",
                borderRadius: 8,
                fontSize: 14,
              }}
            />
            <textarea
              placeholder="Message"
              rows="5"
              style={{
                padding: 12,
                border: "1px solid #e5e7eb",
                borderRadius: 8,
                fontSize: 14,
              }}
            />
            <button className="btn" style={{ marginTop: 8 }}>
              Send
            </button>
          </form>
        </div>

        <div
          className="card"
          style={{
            flex: 1,
            minWidth: 280,
            height: 320,
            borderRadius: 12,
            background: "#f1f5f9",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
          }}
        >
       
          <p style={{ color: "#6b7280" }}>This should be the map of the place</p>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .container {
            flex-direction: column;
            gap: 16px;
          }
        }
      `}</style>
    </main>
  );
}
