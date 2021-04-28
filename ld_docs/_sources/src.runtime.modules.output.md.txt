# Output modules - src.runtime.modules.output namespace

An output module is responsible to do something with the results supplied by the neural network. 

It is usually a good idea to use a class here to easily keep context between each call (e.g. a file handler). 

An output module has to provide a method which will be called for every batch the net processed. 
This method is usually called `out`. It has to accept three parameters 
- **predictions** (torch.Tensor): The raw output of the neural network
- **names** (List[str], optional): Filenames (relative paths starting from `data_root`) for each sample in the batch.
- **frames** (List[np.ndarray], optional): Source Frames, can be used to visualize the network results

**Important**: As python does not support interfaces it is not guaranteed the parameters of the out-method will have the same names. -> The parameters are called as positional parameters.

A module might also provide a method which is called after the input method finished. 
This method is usually called `post` and takes no parameters. 
It is not called if the applications exits because of an exception (like ctrl + c). Use a destructor for these cases.

## predictions
The result is a four dimensional tensor.
The innermost dimension contains the probabilities that a point belongs to a lane. 
A sample Tensor of the innermost dimension could look like:
```
# [0th lane, 1st lane, 2nd lane, 3rd lane]
[ 0.1005, -0.6627, -1.0224, -0.8216]
```

The next two dimensions describes a point on the image. 
Let's ignore for a second that this is about estimations and just think about a grayscale image.
A grayscale image could be represented as follows
```
[
    [50, 60, 30],  # column 0
    [30, 40, 30],  # column 1
    [30, 20, 10],  # column 2
    [10, 20, 10]  # column 3
]
```
It's a bit unintuitive because rows and lines are inverted compared to how it would normally be. 
If rendered this would look as follows:
```
50, 30, 30, 10
60, 40, 20, 20
30, 30, 10, 10
```

Let's transfer this back to the network result. 
The second and third innermost dimensions are exactly what is described above, but instead of grayscale values they
contain the probabilities. 

The outer dimension equals the batch size.
Batch size one means there will be one sample inside the outer dimension, batch size two results in being two samples inside this dimension.

To summarize this, the four dimensional tensor is, from inside to outside, constructed as follows
1. Probabilities for one of the four lanes
2. y coordinates (column)
3. x coordinates (rows)
4. samples

**Hint**: The prediction resolution does not match the resolution of the sample supplied to the net.
The y resolution matches the amount of h_samples (cls_num_per_lane) and the x resolution the config's griding_num.

## predictions evaluation helpers
The output module contains a [common.py](src.runtime.modules.output.common) file, which provides functions helping with
evaluating the predictions. It's recommended to use them as follows to get the most accurate predictions scaled to the
image's width (cfg.img_width).
```
map_x_to_image(evaluate_predictions(y[i]))
```
The result per sample will look as follows:
```
...
[-2.         -2.         38.73001617 -2.        ]
[-2.         33.28607988 38.91600986 -2.        ]
[-2.         32.92785092 39.23658818 -2.        ]
[-2.         32.48616481 39.6095107  -2.        ]
[-2.         31.6839597  40.14521082 -2.        ]
[27.46894699 30.73299785 40.73678818 -2.        ]
[25.48803848 29.7993621  41.32698695 -2.        ]
[23.15705156 28.82870762 42.06111232 -2.        ]
[20.72240206 27.86122163 42.75888292 -2.        ]
[18.6873128  26.90077982 43.4880209  -2.        ]
[16.89856385 26.03937897 44.17240046 -2.        ]
...
```
Every column represents one lane. Remember: -2 means this points belongs to the residue class.


## Submodules
```{eval-rst}
src.runtime.modules.output.common module
----------------------------------------

.. automodule:: src.runtime.modules.output.common
   :members:
   :undoc-members:
   :show-inheritance:

src.runtime.modules.output.out\_json module
-------------------------------------------

.. automodule:: src.runtime.modules.output.out_json
   :members:
   :undoc-members:
   :show-inheritance:

src.runtime.modules.output.out\_prod module
-------------------------------------------

.. automodule:: src.runtime.modules.output.out_prod
   :members:
   :undoc-members:
   :show-inheritance:

src.runtime.modules.output.out\_test module
-------------------------------------------

.. automodule:: src.runtime.modules.output.out_test
   :members:
   :undoc-members:
   :show-inheritance:

src.runtime.modules.output.out\_video module
--------------------------------------------

.. automodule:: src.runtime.modules.output.out_video
   :members:
   :undoc-members:
   :show-inheritance:
```