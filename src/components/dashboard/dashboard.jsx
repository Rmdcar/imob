import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import tipo from "./dados-cadastro";
import estadosCidades from "./estados";
import Api from "../../services/Api";

const BoxDashboard = () => {
  const navigate = useNavigate();
  const [estadoSelecionado, setEstadoSelecionado] = useState("");
  const [cidades, setCidades] = useState([]);
  const [formData, setFormData] = useState({
    tipo: "",
    cidade: "",
    estado: "",
    descricao: "",
    valor: "",
    telefone: "",
    email: "",
    nome: "",
    userId: "", // Incluímos o userId aqui
  });

  const handleEstadoChange = (e) => {
    const estado = e.target.value;
    setEstadoSelecionado(estado);
    setCidades(estadosCidades[estado] || []);
    setFormData({ ...formData, estado, cidade: "" }); // Reseta cidade ao mudar estado
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Validação para evitar valores negativos no campo "valor"
    if (name === "valor" && value < 0) return;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userId = localStorage.getItem("usuario"); // Resgata o userId do localStorage
      if (!userId) {
        alert("Erro: usuário não autenticado!");
        navigate("/login");
        return;
      }

      const response = await Api.post("/registerImoveis", { ...formData, userId });

      if (response.status === 200) {
        alert("Imóvel cadastrado com sucesso!");
        setFormData({
          tipo: "",
          cidade: "",
          estado: "",
          descricao: "",
          valor: "",
          telefone: "",
          email: "",
          nome: "",
          userId: "", // Reseta o userId no formulário
        });
      }
    } catch (error) {
      console.error("Erro:", error);
      alert("Erro ao cadastrar o imóvel.");
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    const tokenExpiration = localStorage.getItem("tokenExpiration");
    const currentTime = new Date().getTime();
    if (!token || currentTime > tokenExpiration) {
      localStorage.removeItem("token");
      localStorage.removeItem("tokenExpiration");
      navigate("/login");
    }
  }, [navigate]);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.left}>
          <h1>Suas mensagens</h1>
        </div>

        <div className={styles.right}>
          <h4>Cadastre um imóvel</h4>

          <form onSubmit={handleSubmit}>
            <div>
              <h6>Tipo</h6>
              <select
                name="tipo"
                value={formData.tipo}
                onChange={handleChange}
                required
              >
                <option value="">Selecione um tipo</option>
                {tipo.map((t, index) => (
                  <option key={index} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label>Estado:</label>
              <select
                name="estado"
                value={formData.estado}
                onChange={handleEstadoChange}
                required
              >
                <option value="">Selecione um estado</option>
                {Object.keys(estadosCidades).map((estado) => (
                  <option key={estado} value={estado}>
                    {estado}
                  </option>
                ))}
              </select>

              <label>Cidade:</label>
              <select
                name="cidade"
                value={formData.cidade}
                onChange={handleChange}
                disabled={!cidades.length}
                required
              >
                <option value="">Selecione uma cidade</option>
                {cidades.map((cidade, index) => (
                  <option key={index} value={cidade}>
                    {cidade}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label>Nome:</label>
              <input
                type="text"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label>Telefone:</label>
              <input
                type="tel"
                name="telefone"
                value={formData.telefone}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label>Descrição:</label>
              <textarea
                name="descricao"
                value={formData.descricao}
                onChange={handleChange}
              ></textarea>
            </div>

            <div>
              <label>Valor:</label>
              <input
                type="number"
                name="valor"
                value={formData.valor}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit">Cadastrar</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default BoxDashboard;
