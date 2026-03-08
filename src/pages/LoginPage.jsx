import React from "react";

export default function LoginPage() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Login</h1>
      <input placeholder="Email" style={{display:"block", marginBottom:"10px"}} />
      <input placeholder="Password" type="password" style={{display:"block", marginBottom:"10px"}} />
      <button>Login</button>
    </div>
  );
}
