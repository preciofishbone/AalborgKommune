import { Store } from '@omnia/fx/stores';
import { Injectable, Inject } from '@omnia/fx';
import { InstanceLifetimes } from '@omnia/fx-models';
import { Address } from '../model/Address';
import { AddressService } from '../service/AddressService';

@Injectable({
    onStartup: (storeType) => { Store.register(storeType, InstanceLifetimes.Scoped) }
})
export class AddressStore extends Store
{
    @Inject(AddressService) service : AddressService;
    
    private addressState = this.state<Array<Address>>([]);
   
    constructor()
    {
        super({
            id: "12552810-6aa6-4142-95e6-e4b5097f5a45"
        });
    }

    onActivated()
    {
        //Called when the store gets created and ready to use
    }

    onDisposing()
    {
        //Called when the store is disposed, do some cleanup here
    }

    /**
    * Implementation of getters
    */
    getters = {
        addresses: () => {
            return this.addressState.state;
        }
    }

    /**
     * Implementation of mutations
     */
    mutations = {
        
    }
    /**
     * Implementation of actions
     */
    actions = {
        loadAddress: this.action(async () => {
            const res = await this.service.getAddress();
            this.addressState.mutate(res);
        })
    }

}

