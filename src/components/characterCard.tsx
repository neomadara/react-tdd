import React, {FC} from "react";
import {Character} from "../interfaces/Character";

interface Props {
  data: Character
}

const CharacterCard: FC<Props> = ({ data }) => {
  return (
    <div data-testid={'item-component'}>
      <span data-testid={'character-name'}>{data.name}</span>
      <span data-testid={'character-image'}>{data.image}</span>
      <span data-testid={'character-specie'}>{data.species}</span>
    </div>
  )

}

export default CharacterCard
