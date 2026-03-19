import axios from "axios";

export interface Recipe {
  _id: string;
  title: string;
  image: string;
  description: string;
}

interface GetRecipesResponse {
  status: number;
  message: string;
  data: Recipe[];
}

const api = axios.create({
  baseURL: "/api",
});

export const getRecipes = async (): Promise<Recipe[]> => {
  const { data } = await api.get<GetRecipesResponse>("/recipes");
  console.log(data.data);
  return data.data;
};

// change. NOT valide
