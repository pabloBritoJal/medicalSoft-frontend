
import { mockVolunteerEvents } from "../data/mockData";
import { EventType } from "../types/Events/Event";

export const fetchVolunteerEventBySlug = async (slug: string): Promise<EventType | undefined> => {
  return new Promise<EventType | undefined>((resolve) => {
    setTimeout(() => {
      const event = mockVolunteerEvents.find((e) => e.slug === slug);
      resolve(event);
    }, 500);
  });
};
