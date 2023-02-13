import React, {FC} from "react";
import {Character} from "../interfaces/Character";
import CharacterCard from "./characterCard";

interface Props {
  data: Character[]
}

const ListCharacter: FC<Props> = ({ data }) => {
  return (
    <div data-testid={'list-component'}>
      {data.map((character) => (
        <CharacterCard data={character} key={character.id} />
      ))}
    </div>
)

}

export default ListCharacter
