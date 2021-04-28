# configs namespace
All available parameters with their default values are listed below. They are sorted alphabetically. 
Another way to see all options (besides h_samples) is by running `ufld.py --help` (output is below on this page), 
where the options are grouped.


## h_samples
See [HOWTO: Create dataset - labels file specification](./howto/create_a_profile.html#h-samples) for more information.

## mode
This application provides two modes it can be run with. 
`train` for training a model and `runtime` for everything "after" training like testing, validation or production use.

There are also some special modes. They also define one of the basic modes (the current special modes are all using runtime), but additionally override some other configs.
- `test`: Short hand to test a model  
  set input to images and output to test
- `preview`: Short hand to show a life video of the net's predictions  
  set input to images, output to video and enable live video
- `prod`: Short hadn for production mode  
  set input to camera and output to prod
- `benchmark`: Short hand to benchmark  
  set input to images and output to json (the simplest output module) and enables measure_time

## default configuration
```{eval-rst}
.. automodule:: configs.default
   :members:
```


## CLI help

```
optional arguments:
-h, --help            show this help message and exit

basic switches, these are always needed:
config                path to config file
--mode                Basic modes: train, runtime; special modes: test, preview, prod, benchmark
--dataset             dataset name, can be any string
--data_root           absolute path to root directory of your dataset
--batch_size          number of samples to process in one batch
--backbone            define which resnet backbone to use, allowed values: ['18', '34', '50', '101', '152', '50next', '101next', '50wide', '101wide']
--griding_num         x resolution of nn, just like h_samples are the y resolution
--note                suffix for working directory (probably good to give them a rememberable name
--work_dir            working directory: every output will be written here
--num_lanes           number of lanes
--img_height          height of input images
--img_width           width of input images
--train_img_height    height of image which will be passed to nn; !this option is untested and might not work!
--train_img_width     width of image which will be passed to nn; !this option is untested and might not work!

training:
these switches are only used for training

--use_aux             used to improve training, should be disabled during runtime (independent of this config)
--local_rank
--epoch               number of epochs to train
--optimizer
--learning_rate
--weight_decay
--momentum
--scheduler
--steps  [ ...]
--gamma
--warmup
--warmup_iters
--sim_loss_w
--shp_loss_w
--finetune
--resume              path of existing model; continue training this model
--train_gt            training index file (train_gt.txt)
--on_train_copy_project_to_out_dir
                      define whether the project project directory is copied to the output directory

runtime:
these switches are only used in the runtime module

--trained_model       load trained model and use it for runtime
--output_mode         specifies output module, can define multiple modules by using this parameter multiple times. Using multiple out-modules might decrease performance significantly
--input_mode          specifies input module
--measure_time        enable speed measurement
--test_txt            testing index file (test.txt)

input modules:
with these options you can configure the input modules. Each module may have its own config switches

--video_input_file    full filepath to video file you want to use as input
--camera_input_cam_number
                      number of your camera
--screencap_recording_area  [ ...]
                      position and size of recording area: x,y,w,h
--screencap_enable_image_forwarding
                      allows disabling image forwarding. While this will probably improve performance for this input it will prevent you from using most out_modules as also no input_file (with paths to frames on disk) is available in this module

output modules:
with these options you can configure the output modules. Each module may have its own config switches

--test_validation_data
                      file containing labels for test data to validate test results
--video_out_enable_live_video
                      enable/disable live preview
--video_out_enable_video_export
                      enable/disable export to video file
--video_out_enable_image_export
                      enable/disable export to images (like video, but as jpegs)
--video_out_enable_line_mode
                      enable/disable visualize as lines instead of points
```