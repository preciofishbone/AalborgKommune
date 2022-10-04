import { InstanceLifetimes, IHttpApiOperationResult } from '@omnia/fx-models';
import { Injectable, HttpClientConstructor, HttpClient, Inject } from '@omnia/fx';

@Injectable({ lifetime: InstanceLifetimes.Singelton })
export class AddressService {

    @Inject<HttpClientConstructor>(HttpClient, {
        configPromise: HttpClient.createOmniaServiceRequestConfig("4f7389d8-3d25-4e5f-9b5a-2651fc1d390e")
    }) protected httpClient: HttpClient;

    constructor() {
    }

    async getAddress() {
        const response = await this.httpClient.get("/api/addresssearch");
        return response.data;
    };
}