import { Component } from 'vue-property-decorator';
import { vueCustomElement, IWebComponentInstance, WebComponentBootstrapper } from "@omnia/fx";
import { StyleFlow, VueComponentBase, BlockSettingsWriter } from '@omnia/fx/ux';
import { AddressSearchBlockSettingsStyles } from './AddressSearchBlockSettings.css';
import { IBlockSettingsWriter } from '@omnia/fx-models';


export interface AddressSearchBlockBlockSettings{
    title: string;
}

@Component
export default class AddressSearchBlockSettings extends VueComponentBase implements IWebComponentInstance {
    
    private AddressSearchBlockSettingsClasses = StyleFlow.use(AddressSearchBlockSettingsStyles);
    
    @BlockSettingsWriter<AddressSearchBlockBlockSettings>({
        defaultValue: { title: 'my block title'}
    })
    protected settings: IBlockSettingsWriter<AddressSearchBlockBlockSettings>;

    mounted() {
        WebComponentBootstrapper
            .registerElementInstance(this, this.$el);
    }

    render(h) {
        return (
            <v-card flat>
                <v-card-text>
                    <v-text-field
                        filled
                        v-model={this.settings.title}
                        label='Title'></v-text-field>
                </v-card-text>
            </v-card>
        )
    }
}

WebComponentBootstrapper.registerElement((manifest) => {
    vueCustomElement(manifest.elementName, AddressSearchBlockSettings);
});