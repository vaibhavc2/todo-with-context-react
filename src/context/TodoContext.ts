import { createContext, useContext } from "react";
import { TodoObjectType } from "../types";

export const TodoContext = createContext({} as TodoObjectType);

export const useTodo = () => useContext(TodoContext);

export const TodoProvider = TodoContext.Provider;
