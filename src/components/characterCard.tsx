import React, {FC} from "react";
import {Character} from "../interfaces/Character";

interface Props {
  data: Character
}

const CharacterCard: FC<Props> = ({ data }) => {
  console.log(data);
  return (
    <div>
      hola
    </div>
  )

}

export default CharacterCard
