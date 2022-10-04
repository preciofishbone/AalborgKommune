import { Composer } from '@omnia/tooling/composers';
import { Guid } from '@omnia/fx/models';
import { FontAwesomeIcon } from '@omnia/fx-models';

Composer
    .registerManifest(new Guid("4bae1d4d-755b-4a55-9f8d-9242d0e290a2"), "AddressSearchBlock")
    .registerWebComponent({
        elementName: "aalborg-address-search",
        entryPoint: "./AddressSearchBlock.jsx"
    })
    .withDefinition({
        title: "AddressSearchBlock", // You can use localization, i.e., $Localize:Namespace.Something.Title; 
        description: "AddressSearchBlock", // You can use localization, i.e., $Localize:Namespace.Something.Description;
        icon: new FontAwesomeIcon("far fa-smile-beam")
    })
    .registerOmniaBlock({
        category: "AddressSearchBlock", // You can use localization, i.e., $Localize:Namespace.Something.Category;
        
        //which layout provider can use this block. 
        //layoutDependencyProviders: ["wcm"] //i.e. only WCM layout can use this block 
    });

Composer
.registerManifest(new Guid("0acbd224-c5e3-408c-aeb7-17c7463aeff6"), "AddressSearchBlock.settings")
.registerWebComponent({
    elementName: "aalborg-address-search-settings",
    entryPoint: "./AddressSearchBlockSettings.jsx"
})