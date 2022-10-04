import { Component } from 'vue-property-decorator';
import { vueCustomElement, IWebComponentInstance, WebComponentBootstrapper, Inject } from "@omnia/fx";
import { StyleFlow, VueComponentBase, BlockSettingsReader } from '@omnia/fx/ux';
import { AddressSearchBlockStyles } from './AddressSearchBlock.css';
import { AddressSearchBlockBlockSettings } from './AddressSearchBlockSettings';
import { AzureAdInternalUserTypeObject } from '@omnia/fx-models';
import { AddressStore } from './store/AddressStore';
import { Address } from './model/Address';

@Component
export default class AddressSearchBlock extends VueComponentBase implements IWebComponentInstance {
    
    @Inject(AddressStore) addressStore: AddressStore;

    private AddressSearchBlockClasses = StyleFlow.use(AddressSearchBlockStyles);

    private loading = true;

    @BlockSettingsReader<AddressSearchBlockBlockSettings>({
        defaultValue: { title: 'my block title'},
        editElement: "aalborg-address-search-settings"
    })
    protected settings: AddressSearchBlockBlockSettings;

    mounted() {
        WebComponentBootstrapper.registerElementInstance(this, this.$el);
    }

    
    
    renderAddresses(h){
        let addresses = this.addressStore.getters.addresses().map((item)=>{
            return(
                <div>{item.title}</div>
            )    
        })
        return (<div>
            {addresses}
        </div>)
    }

    render(h) {
        return (
            <div class={this.AddressSearchBlockClasses.container}>
                {this.renderAddresses(h)}                
            </div>
        )
    }
}

WebComponentBootstrapper.registerElement((manifest) => {
    vueCustomElement(manifest.elementName, AddressSearchBlock);
});