import { mockVolunteerEvents } from "../data/mockData";
//import axios from "../services/axiosConfig";
import { EventType } from "../types/Events/Event";

export const fetchVolunteerEvents = async (): Promise<EventType[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockVolunteerEvents);
    }, 500); // Retraso de 500 ms para simular la latencia de la red
  });
  // try {
  //   const response = await axios.get("/volunteer/events");
  //   return response.data;
  // } catch (error) {
  //   console.error("Error fetching volunteer events", error);
  //   return [];
  // }
};
