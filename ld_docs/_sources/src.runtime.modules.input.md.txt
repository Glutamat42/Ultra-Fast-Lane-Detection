# Input Modules - src.runtime.modules.input namespace

An input module is responsible to supply frames to the application. To achieve this the module gets
the [process_frames](src.runtime.runtime.FrameProcessor.process_frames) method passed, which is used by the module to
send data to the FrameProcessor. See its documentation for more details on its parameters

The input module will only be called once. As soon as it returns the application will exit. An input module has to be
registered in [setup_input](src.runtime.runtime.setup_input).


## Submodules
```{eval-rst}
src.runtime.modules.input.input\_images module
----------------------------------------------

.. automodule:: src.runtime.modules.input.input_images
   :members:
   :undoc-members:
   :show-inheritance:

src.runtime.modules.input.input\_screencap module
-------------------------------------------------

.. automodule:: src.runtime.modules.input.input_screencap
   :members:
   :undoc-members:
   :show-inheritance:

src.runtime.modules.input.input\_video module
---------------------------------------------

.. automodule:: src.runtime.modules.input.input_video
   :members:
   :undoc-members:
   :show-inheritance:
```