import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Container, Form, Alert } from "react-bootstrap";

export default function SignUp() {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const signUp = async () => {
    setError(null); // Reset any previous error messages
    if (!formData.username || !formData.password) {
      setError("Please fill in all required fields.");
      return;
    }
    try {
      const response = await fetch("https://auth-back-end-yy1123.sigma-school-full-stack.repl.co/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        navigate("/");
        alert("Sign up successful!");
      } else {
        const data = await response.json();
        setError(data.message);
      }
    } catch (error) {
      console.error("Error:", error)
    }
  };

  return (
    <Container className="my-3 text-center">
      <h1 className="my-3">Sign-Up</h1>
      <Form>
        <Form.Group controlId="formBasicUsername" className="mb-3 ">
          <Form.Label>Username | Email Address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Your username"
            value={formData.username}
            onChange={(e) => setFormData({ ...formData, username: e.target.value })}
            className="mx-auto text-center "
            style={{ width: "420px" }}
          />
        </Form.Group>

        <Form.Group controlId="password" className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            className="mx-auto text-center"
            style={{ width: "420px" }}
          />
        </Form.Group>
        {error && <Alert variant="danger">{error}</Alert>}
        <Button variant="warning" onClick={signUp} className="my-3" style={{ width: "420px" }}>
          Sign Up
        </Button>
      </Form>
      <Button href='/' variant="outline-primary" size="sm">Login</Button>
    </Container>
  );
}
