import React from "react"
import { Link } from "react-router-dom"

const Undefine = () => {
  return (
    <div
      style={{
        minHeight: "80vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "5rem", color: "#fa5252" }}>404</h1>
      <h2>Page Not Found</h2>
      <p>The page you are looking for does not exist or has been moved.</p>
      <Link
        to="/"
        style={{
          marginTop: "1rem",
          padding: "0.5rem 1.5rem",
          background: "#6366f1",
          color: "#fff",
          borderRadius: "24px",
          textDecoration: "none",
          fontWeight: 500,
        }}
      >
        Go to Home
      </Link>
    </div>
  )
}

export default Undefine
