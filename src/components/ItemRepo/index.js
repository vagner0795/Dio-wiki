import React from "react";
import { ItemContainer } from "./style";

function ItemRepo({ repo, handleRemoveRepo }) {
  const handleRmove = () => {
    handleRemoveRepo(repo.id);
  };

  return (
    <ItemContainer onClick={handleRmove}>
      <h3>{repo.name}</h3>
      <p>Repositorio/{repo.full_name}</p>
      <a href="repo.html_url" target="_blank">
        Ver Repositorio
      </a>{" "}
      <br />
      <a className="remover" rel="noreference" href="#">
        Remover
      </a>
      <hr />
    </ItemContainer>
  );
}

export default ItemRepo;
