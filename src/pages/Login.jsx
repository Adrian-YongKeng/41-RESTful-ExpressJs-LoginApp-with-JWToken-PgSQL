import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, Container } from "react-bootstrap";
import { AuthContext } from '../AuthContext';

export default function login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const authContext = useContext(AuthContext);

  const handleLogin = async () => {
    try {
      const response = await fetch("https://auth-back-end-yy1123.sigma-school-full-stack.repl.co/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });
      if (response.ok) {
        const data = await response.json();
        authContext.setToken(data.token);
        alert("Login successful!");
        // Store the token in localStorage for persistence
        localStorage.setItem("token", data.token)
        navigate("/profile");
      } else {
        const data = await response.json();
        alert(data.message);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }

  return (
    <Container className="my-3 text-center">
      <h1 className='my-3'>Login to your account</h1>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Adrian"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="mx-auto text-center"
            style={{ width: "420px" }}
          />
          <Form.Text className="text-muted">
            We&apos;ll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="123456"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mx-auto text-center"
            style={{ width: "420px" }}
          />
        </Form.Group>

        <Button variant="primary" onClick={handleLogin} className="my-3" style={{ width: "420px" }}>
          Login
        </Button>
      </Form>
      <Button href='/signup' variant="outline-warning" size="sm">Sign Up</Button>
    </Container>
  );
}