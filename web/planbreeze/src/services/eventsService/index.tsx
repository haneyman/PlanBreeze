import axios from "axios";
import { Event } from "../../types/Event";

class EventsService {
    async getAllEvents() {
        const response: any = await axios.get<Event[]>('http://localhost:3000/events')
            .catch(err => {
                console.log('Error: ', err);
            })
        console.log('Events loaded:', response);
        return response.data;
    }

}

export default new EventsService();