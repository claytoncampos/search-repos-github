import React, { useState } from 'react';
import axios from 'axios';
import * as S from './styles';

import { useHistory } from 'react-router-dom';

function Home() {
  const history = useHistory();
  const [user, setUser] = useState('');
  const [erro, setErro] = useState(false);

  function handleSearch() {
    axios
      .get(`https://api.github.com/users/${user}/repos`)
      .then((response) => {
        const repositories = response.data;
        const repositoriesName = [];
        repositories.map((repository) => {
          return repositoriesName.push(repository.name);
        });
        localStorage.setItem(
          'repositoriesName',
          JSON.stringify(repositoriesName)
        );
        history.push('/repositories');
      })
      .catch((err) => {
        setErro(true);
      });
  }

  return (
    <S.HomeContainer>
      <S.Content>
        <S.Input
          value={user}
          placeholder="Usuário"
          className="usuarioInput"
          onChange={(e) => setUser(e.target.value)}
        />
        <S.Button type="button" onClick={handleSearch}>
          Pesquisar
        </S.Button>
      </S.Content>
      {erro ? (
        <S.MsgErr>Usuario não encontrado, tente novamente!</S.MsgErr>
      ) : (
        ''
      )}
    </S.HomeContainer>
  );
}

export default Home;
