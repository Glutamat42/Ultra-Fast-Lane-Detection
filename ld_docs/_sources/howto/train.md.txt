# Training
This Howto guides you through training your first model. Before starting with this Howto make sure you already have
- [set the project up](setup)
- [a dataset](create_dataset)
- [created a config](create_a_profile)

This Howto can completed by using the sample dataset from "[create a dataset](create_dataset)".
The same dataset (with labels) can be downloaded here:
```{eval-rst}
:download:`sample_dataset.zip <../_static/sample_dataset_labeled.zip>`
```

## Start training
We don't need any further preparations. Make sure your virtual environment/conda is active and start training with the following command:
```shell
python ufld.py configs/sample_dataset.py --mode train --epoch 5
```
This command loads our config and runs `ufld.py` in training mode. It also sets epoch to 5 which is enough for testing.

If the following error occurs you don't have enough VRAM. Lower the batch size until the error goes away. Remember this can also be done temporarily via CLI, e.g. `--batch_size 4`.
For more information on batch_size see [the batch_size section of the config howto](create_a_profile.html#batch-size).

## Monitoring
As soon as the training started (and also after the training finished) we can use tensorboard to monitor our network.
```shell
tensorboard --logdir /home/user/work_dir/ --bind_all
```
This command calls tensorboard. Set `logdir` to your working directory (see config). `bind_all` allows access for other computers in your network.

The webinterface can now be opened with `http://localhost:6006`

## What now?
- Test the net against your testing dataset. See [Howto: test](test)
- Visualize the results with the help of [the video output module](../src.runtime.modules.output.html#module-src.runtime.modules.output.out_video)
- Improve results by optimizing training parameters or dataset
- [Use the model in your own project](integrate_into_your_own_project)