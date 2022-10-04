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

    private loading = false;
    private seachString: string = "";

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
                <v-row>
                    <v-col cols="6">
                        {item.vejnavn}
                    </v-col>
                    <v-col cols="6">
                        {item.husnr}
                    </v-col>
                </v-row>

            )    
        })
        return (<div>
            {addresses}
        </div>)
    }

    render(h) {
        return (
            <div class={this.AddressSearchBlockClasses.container}>
                <v-text-field
                    filled
                    v-model={this.seachString}
                    onChange={(value) => {
                        this.loading = true;
                        this.addressStore.actions.search.dispatch(value).then(() => {
                            this.loading = false;
                            })
                        }
                    }
                >
                </v-text-field>

                <v-skeleton-loader
                    dark={true}
                    loading={this.loading}
                    height="200"
                    type="list-item-avatar@2"           
                >
                    {this.renderAddresses(h)}                
                </v-skeleton-loader>
            </div>
        )
    }
}

WebComponentBootstrapper.registerElement((manifest) => {
    vueCustomElement(manifest.elementName, AddressSearchBlock);
});