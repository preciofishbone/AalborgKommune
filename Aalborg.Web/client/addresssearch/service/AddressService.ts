import { InstanceLifetimes, IHttpApiOperationResult } from '@omnia/fx-models';
import { Injectable, HttpClientConstructor, HttpClient, Inject } from '@omnia/fx';

@Injectable({ lifetime: InstanceLifetimes.Transient })
export class AddressService {

    @Inject<HttpClientConstructor>(HttpClient, {
        configPromise: HttpClient.createOmniaServiceRequestConfig("572c2c36-c676-4ebf-9c2b-ebc7c98584c5")
    }) protected httpClient: HttpClient;

    constructor() {
    }

    getSomething() {
        return new Promise<null>((resolve, reject) => {
                Promise.resolve("result");
        });
    };
}