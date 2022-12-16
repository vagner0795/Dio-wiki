import React from "react";
import "./styles.js";
import { Container } from "./styles";
import Input from "../components/input";
import Button from "../components/button";
import ItemRepo from "../components/ItemRepo";
import { api } from "../services/api";
import { useState } from "react";

export default function App() {
  const [repos, setRepos] = useState([]);
  const [currentRepo, setCurrentRepo] = useState("");

  const handleSearchRepo = async () => {
    const { data } = await api.get(`/repos/${currentRepo}`);

    if (data.id) {
      const isExist = repos.find((repo) => repo.id === data.id);

      if (!isExist) {
        setRepos((prev) => [...prev, data]);
        setCurrentRepo("");
        return;
      }
      alert("Repositório não encontrado");
    }
  };

  const handleRemoveRepo = (id) => {
    if (repos.Id === id) {
      document.getElementById(`${id}`).innerHTML = "";
    }
  };

  return (
    <Container>
      <img
        src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
        alt="Github-logo"
        width={70}
        height={70}
      />

      <Input
        value={currentRepo}
        onChange={(e) => setCurrentRepo(e.target.value)}
      />

      <Button onClick={handleSearchRepo} />

      {repos.map((repo) => (
        <ItemRepo handleRemoveRepo={handleRemoveRepo} repo={repo} />
      ))}
    </Container>
  );
}
