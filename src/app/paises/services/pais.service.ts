import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Country } from '../interfaces/pais.interface';


@Injectable({
    providedIn: 'root'
})
export class PaisService {

    private apiUrl: string = 'https://restcountries.com/v2';

    // Obtener solo estos campos de la API
    get apiFieldsFilter(): HttpParams {
        return new HttpParams().set('fields', 'name,flag,capital,population,alpha2Code');
    }

    constructor(private http: HttpClient) { }

    buscarPorPais(busqueda: string): Observable<Country[]> {
        const url = `${this.apiUrl}/name/${busqueda}`;
        return this.http.get<Country[]>(url, { params: this.apiFieldsFilter });
    }

    buscarPorCapital(busqueda: string): Observable<Country[]> {
        const url = `${this.apiUrl}/capital/${busqueda}`;
        return this.http.get<Country[]>(url, { params: this.apiFieldsFilter });
    }

    buscarPorRegion(region: string): Observable<Country[]> {
        const url = `${this.apiUrl}/region/${region}`;
        return this.http.get<Country[]>(url, { params: this.apiFieldsFilter });
    }

    getPaisByAlphaCode(alphaCode: string): Observable<Country> {
        const url = `${this.apiUrl}/alpha/${alphaCode}`;
        return this.http.get<Country>(url);
    }

    buscarPaisesParaSugerir(busqueda: string): Observable<Country[]>{
        const url = `${this.apiUrl}/name/${busqueda}`;
        return this.http.get<Country[]>(url, {params: this.apiFieldsFilter});
    }

}