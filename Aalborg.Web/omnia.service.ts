import { Composer, DevelopmentEnvironment } from "@omnia/tooling/composers";
import { Guid } from '@omnia/fx/models';

Composer
    .registerManifest(new Guid("4f7389d8-3d25-4e5f-9b5a-2651fc1d390e"), "Aalborg.Web")
    .registerService({ description: "Description of Aalborg.Web" })
    .AsWebApp()
    .withBuildOptions({
        include: ["client"],
        moduleOptions: {
            enableTransformResourcePath: true
        },
        bundleOptions: {
            commonsChunk: {
                name: new Guid("5ea39a04-3955-4946-a92e-5c575a26817f"),
                minChunks: 2
            }
        }
    });
    
   