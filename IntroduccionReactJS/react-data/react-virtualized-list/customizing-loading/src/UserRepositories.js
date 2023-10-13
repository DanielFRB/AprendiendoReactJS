import React, { useEffect } from "react";
import Fetch from "./Fetch";
import { useIterator } from "./hooks";

function RepoMenu({ repositories, onSelect }) {
  const [{ name }, previous, next] = useIterator(repositories);

  useEffect(() => {
    if (!name) return;
    onSelect(name);
  }, [name]);

  return (
    <div>
      <button onClick={previous}>Previous</button>
      <p>{name}</p>
      <button onClick={next}>Next</button>
    </div>
  );
}

export function UserRepositories({login, selectedRepo, onSelect}) {
  return (
    <Fetch uri = {`https://api.github.com/users/${login}/repos`}
      renderSuccess={({ data }) => (
        <RepoMenu repositories={ data }
          selectedRepo={ selectedRepo }
          onSelect={ onSelect }
        />
      )}
    />
  );
}
