import { makeAutoObservable } from "mobx";
import axios from "axios";

class AnimalStore {
  constructor() {
    makeAutoObservable(this);
    // this will turn our class into a mobx store and all components can observe the changes that happen in the store
  }

  animals = [];
  animalsTypes = ["All", "Bird", "Mammal", "Reptile"];

  fetchAnimals = async () => {
    try {
      const response = await axios.get(
        "https://zoo-animal-api.herokuapp.com/animals/rand/10"
      );
      this.animals = response.data;
    } catch (error) {
      console.log("ProductStore -> fetchAnimals -> error", error);
    }
  };
}

const animalStore = new AnimalStore();
animalStore.fetchAnimals();
// It will only call this function when the app first starts

export default animalStore;
