import React, {FC} from "react";
import {Character} from "../interfaces/Character";

interface Props {
  data: Character
}

const CharacterCard: FC<Props> = ({ data }) => {
  console.log(data);
  return (
    <div>
      <span data-testid={'character-name'}>{data.name}</span>
    </div>
  )

}

export default CharacterCard
