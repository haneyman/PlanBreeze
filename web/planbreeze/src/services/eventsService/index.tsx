import axios from "axios";
import { Event } from "../../types/Event";

class EventsService {
    async getAllEvents() {
        const response: any = await axios.get<Event[]>('http://localhost:8080/events')
            .catch(err => {
                console.log('Error: ', err);
            })
        console.log('Events loaded:', response);
        return response.data;
    }

    async createEvent(event: Event) {
        console.log('createEvent', event);
        const response: any = await axios.post<Event>('http://localhost:8080/events', event)
            .catch(err => {
                console.log('Error: ', err);
            })
        console.log('Event created:', response);
        return response.data;
    }

}

export default new EventsService();