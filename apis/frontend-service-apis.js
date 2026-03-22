import http from 'k6/http';
import { FRONTEND_SERVICE_API } from '../config.js';

export function visitWebUIApi(){
    return http.get(`${FRONTEND_SERVICE_API}/login`);
}