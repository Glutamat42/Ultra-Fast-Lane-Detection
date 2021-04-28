# Testing
This Howto explains how to test a trained model. 

To test a model we use the testing algorithm provided by TuSimple for their [Lane Detection Challenge](https://github.com/TuSimple/tusimple-benchmark).

# Add testing code
Sadly the code from TuSimple contains no license, so it can't be included in this project. To use it you have to add the code by yourself.

**Short version**: If you are using Linux, make sure you have git installed and run `sh ./add_testing_code.sh` from the projects root directory.

1. Open [tusimple-benchmark/evaluate/lane.py](https://github.com/TuSimple/tusimple-benchmark/blob/master/evaluate/lane.py) and copy all the code
2. From this project open the file src/runtime/utils/evaluation/lane.py in a text editor and paste the code from the previous step
3. Either do one of the following steps
   - **apply patch** (provides code documentation, requires git installed)  
      The patch is bundled with this documentation. It can be downloaded below, but for the following instructions, **downloading the patch is not required**
      1. open a terminal / command line and change to your projects root directory (where `ufld.py` is located)
      2. run `git apply docs/source/_static/required_changes_for_LaneEval_+_adding_some_documentation.patch`  
      **For Windows users** this command might need some changes, at least the `/` will have to be changed to `\`.
   - **apply required fixes manually**
      1. in line 3: change `import ujson as json` to `import json as json`
      2. in line 67: remove `or 'run_time' not in pred` (keep the `:`)  
      3. in line 71: change `run_time = pred['run_time']` to `run_time = 10`  
      4. line 93 until file end: remove this code
      5. line 56: replace `(...)` with `(json_pred, json_gt)`
      6. line 57 - 63: remove these lines

     
```{eval-rst}
:download:`required_changes_for_LaneEval_+_adding_some_documentation.patch <../_static/required_changes_for_LaneEval_+_adding_some_documentation.patch>`
```
   
# Run test
Running a test is as simple as
1. define trained model by setting parameter `trained_model`
2. run the test.  
   If we want to set the trained model via CLI and assume we used the working directory we used in the previous howtos the command could look as follows:  
   `python ufld.py configs/sample_dataset.py --mode test --trained_model /home/user/work_dir/20201205_234831_lr_4e-04_b_4_ex_prof/ep004.pth`  
   `--mode test` runs ufld in a special runtime mode. It automatically sets all required modules.

After the test finished it will print its result. For our previous example, trained for 100 epochs this will be
```
Accuracy 0.9383928571428571
FP 0.15
FN 0.15
```

Additionally, it writes the results to `test_results.csv` in the model's directory.

For the accuracy we would like to get into the range of 0,97/0,98.
The values are that low here because the example dataset is way too small.


# Visual test
It's not just nice to visually see the results, it's also helping to understand how the network works and what you have to improve/where your model has problems.
To do a visual inspection the approach is identical to the test above, just replace `--mode test` with `--mode preview`.
This is another special mode which automatically sets up the required configuration to show the results of our test-dataset visually.
Note that our example dataset is tiny. Our `test.json` contains only 10 frames.

```python ufld.py configs/sample_dataset.py --mode preview --trained_model /home/user/work_dir/20201205_234831_lr_4e-04_b_4_ex_prof/ep004.pth```

We can cheat here and use our training set to get a longer preview. The results here will be better than in reality/our test set. 
In production use the test data should not be used to evaluate the quality of a model!

```python ufld.py configs/sample_dataset.py --mode preview --trained_model /home/user/work_dir/20201205_234831_lr_4e-04_b_4_ex_prof/ep004.pth --test_txt train_gt.txt```
