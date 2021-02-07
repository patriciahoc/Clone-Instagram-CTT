import { action } from "typesafe-actions";
import { PostTypes, Post } from "./types";

export const getPost = (payload: Post[]) => action(PostTypes.GET_POST, payload);
