import axios from "axios";

class DataService {
    api: any;
    constructor() {
        this.api = axios.create({
            baseURL: process.env.NEXT_PUBLIC_API_URL
        });
    }
    allSectors = () => {
        return this.api.get(`/section/all`);
    }
    getSector = (id: string) => {
        return this.api.get(`/section/one/${id}`);
    }
    createBoulder = (body: {}) => {
        return this.api.post(`/boulder/create`, body);
    }
    createSector = (body: {}) => {
        return this.api.post(`/section/create`, body);
    }
    uploadImage = (image: any) => {
        return this.api.post(`/section/upload`, image);
    }
}

const dataService = new DataService();

export default dataService;