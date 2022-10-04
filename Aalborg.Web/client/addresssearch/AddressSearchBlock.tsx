import { Component } from 'vue-property-decorator';
import { vueCustomElement, IWebComponentInstance, WebComponentBootstrapper } from "@omnia/fx";
import { StyleFlow, VueComponentBase, BlockSettingsReader } from '@omnia/fx/ux';
import { AddressSearchBlockStyles } from './AddressSearchBlock.css';
import { AddressSearchBlockBlockSettings } from './AddressSearchBlockSettings';

@Component
export default class AddressSearchBlock extends VueComponentBase implements IWebComponentInstance {
    

    private AddressSearchBlockClasses = StyleFlow.use(AddressSearchBlockStyles);

    @BlockSettingsReader<AddressSearchBlockBlockSettings>({
        defaultValue: { title: 'my block title'},
        editElement: "aalborg-address-search-settings"
    })
    protected settings: AddressSearchBlockBlockSettings;

    mounted() {
        WebComponentBootstrapper.registerElementInstance(this, this.$el);
    }

    render(h) {
        return (
            <div class={this.AddressSearchBlockClasses.container}>
                {this.settings.title}
            </div>
        )
    }
}

WebComponentBootstrapper.registerElement((manifest) => {
    vueCustomElement(manifest.elementName, AddressSearchBlock);
});