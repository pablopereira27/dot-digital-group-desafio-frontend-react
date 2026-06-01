import { useState } from "react";

function UserRegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email }),
      });

      if (res.status === 201) {
        alert("Usuário cadastrado com sucesso!");
        setName("");
        setEmail("");
      } else {
        const json = await res.json();
        alert("Erro ao cadastrar usuário: " + json.error);
      }
    } catch (err) {
      console.error(err);
      alert("Erro inesperado ao cadastrar usuário.");
    }
  };

  return (
    <div className="mt-5 mx-auto" style={{ maxWidth: "400px" }}>
      <h2>Cadastro de Usuário</h2>
      <form className="mt-3" onSubmit={handleSubmit}>
        <div style={{ marginBottom: "1rem" }}>
          <label>
            Nome:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
        </div>
        <button type="submit" className="btn-primary">
          Cadastrar
        </button>
      </form>
    </div>
  );
}

export default UserRegisterPage;
