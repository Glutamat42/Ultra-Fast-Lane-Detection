# Integrate into your project
This project ist build as standalone application. 
It will be started as its own process might use different ways to communicate with other processes like a message bus, files or REST.
If this project should be integrated into another project as dependency some adjustments would be required, which will be described below.

## Use as standalone application
This is the intended way to use this project.  

It can be executed with a system service, by another application or by hand by simply issuing a command like `python ufld.py <config> [params]`.
See the other Howtos for examples.

I expect you have already a trained model at this point and also a fully working config. I won't cover this here. 
If you are missing something, see the corresponding howtos.

Depending on your usage scenario it might be required to create a custom input module and probably be necessary to write a custom output module.

If you will use the [camera input](src.runtime.modules.input.input_video.input_camera) and [prod output module](src.runtime.modules.output.out_prod) you can use the special mode `prod`, otherwise you have to define input and output modules manually.

### Input module
I expect that this application will access your camera. 
If this expectation is true, the default [camera input module](src.runtime.modules.input.input_video.input_camera) will be sufficient.
If your scenario prevents opencv from accessing your camera you have to write your own input module.
A possible scenario would be that the image is delivered by a message bus.
In that case simply write a module that waits for data on the bus and passes the frame on as soon as its ready.

See [input modules](../src.runtime.modules.input) for more information.

A good reference for your own module is probably the [camera input module](src.runtime.modules.input.input_video.input_camera).


### Output module
I expect the existing modules aren't sufficient for your production use case. 
Because ot that there is already an empty [output module `prod`](src.runtime.modules.output.out_prod) which you can use to implement your own custom logic.
It is already fully integrated into the project and can be directly used via the `prod` special mode or by adding it to the `output_mode` cfg option.

A possible scenario for your output module might be to calculate some angles or distances to the lanes and pass them via a message bus or REST call to another application.

See [output modules](../src.runtime.modules.output) and [`prod` output module](src.runtime.modules.output.out_prod)

A good reference for your own module is probably the [json output module](src.runtime.modules.output.out_json).


## Use as dependency
This usage is currently not supported by this project.  

If it should be used that way some adjustments would be required, which will be described here.
As it's not yet implemented this is more like a concept which might not be complete.

### Entry point
The current entry point is `ufld.py`. 
The code there would probably also be the starting point if used as dependency.
Use this code as a reference when developing the API.

### Configuration
The interface described in the above section does not provide any parameters to configure this package.
To be precise the whole package does not really support this behaviour.
It completely relies on the `cfg` which is initialized at startup.
Changing this would probably require rewriting large parts of the project.
If it is sufficient for you to set the config at startup and changing parameters during runtime is not required solving this problem is relatively easy.
Otherwise, it would be quite problematic.
Changing the cfg during runtime will result in unpredictable behaviour as those values are often used in method/function declarations.
Those values are only once and will never change. Also configs are often only read once in initialization logic. 
Like i wrote before the conclustion is that large parts of the code would have to be rewritten.

Let's focus on the feasible approach: setting the config once and dont touch it during runtime.
The most obvious way would be to simply use the config file.
Currently, there is no way to specify which config to use from the entrypoint.
The responsible function for that is [merge_config](src.common.config.global_config.merge_config), which passes the CLI arg `config` to the config parser.
Either hardcode a config there or provide a way to communicate with that function.
Pay attention, that the `cfg` has to be completely initialized before **any** other code of the project is imported.

If this approach is too static/inflexible it would also be considerable to change the configs [init function](src.common.config.global_config.init) in a way it accepts custom config entries.
This is probably the better approach but will require a bit more coding.
Again remember, that the `cfg` has to be completely initialized before **any** other code of the project is imported.
With that change the config has to be initialized in the projects' entry point where you now can pass arguments to the config.
Currently, the config is initialized in `src/__init__.py`.
This code can now be removed, but this change isn't that important, as the `init` method is developed in a way that it won't touch the config if it is already initialized.

A potential problem could be the CLI argument parsing of this project.
This functionality is only required in a standalone version and should now be removed to avoid problems with the main application.

## Improve runtime performance
Especially on batch_size 1 (which should be used in live scenarios) and on slower hardware the fps might drop below 10.
As this could be too slow i will provider some concepts to improve performance

### Rewrite runtime
The first idea you might get is "writing an optimized version of the runtime package".
While this is idea isn't wrong, there are other aspects you should look first. 
For this project performance was not the first priority, so I did some compromises in favor of understandable and expandable code.
So it's definitely possible to improve performance with this approach a bit, but at least it should not be the first thing to start with.

### Optimize input module
This concept is probably the most promising one. Preprocessing (and Postprocessing) consumes a lot of computing time.
Some ideas are
- Lower camera / input frame resolution  
  You don't benefit from high resolutions like Full HD. 
  Before you can pass a frame to `process_frames` it has to be scaled down the nets resolution (per default: 800x288)
- Especially if your module is compute heavy using hw acceleration or multiple cores might improve performance significantly.  
  Beware that a python interpreter is locked to one single core, even if using multiple threads, but there are ways to use multiple cores.
- Process multiple frames at the same time.  
  Using batch sizes above 1 doesn't help, but you could pass another frame to the net before the previous one returned.
  This won't improve the latency (instead it might increase latency a bit due to higher cpu / gpu usage), but it will increase fps, because with batch_size 1 neither cpu nor gpu will be highly utilized.
- Use optimized (C) code for compute heavy tasks

Another approach that might increase performance would be to crop images before passing to the net. 
The idea is to remove the sky (where obviously are no lanes) to decrease the data that has to be processed.
Make sure that you don't spend more computing time for cropping than you save by evaluating the data.

Also decreasing the amount of h_samples will slightly increase performance.

### Optimizing output module
Just like explained for input modules, use multiple cores, let another application process data or use better performing code.