import React from "react";
import { User } from "./User";

export function Users({people, isHidden}) {
  return (
    <ul>
      {people.map((person) => (
        <User person={person} isHidden={isHidden}/>
        ))}
    </ul>
  );
}

