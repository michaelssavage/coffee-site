import { get, post } from "services/fetch.service";
import { Coffee, CoffeeEntity } from "types/Coffee";

const baseUrl = "http://localhost:5000/coffee";

export function getAllCoffee() {
  return get<CoffeeEntity[]>(baseUrl);
}

export function createCoffee(payload: Coffee) {
  return post<CoffeeEntity[]>(baseUrl, payload);
}
