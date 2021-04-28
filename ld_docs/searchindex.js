Search.setIndex({docnames:["configs","howto/create_a_profile","howto/create_dataset","howto/howtos","howto/integrate_into_your_own_project","howto/setup","howto/test","howto/train","index","modules","scripts","src.common","src.common.config","src.common.model","src.runtime","src.runtime.modules","src.runtime.modules.input","src.runtime.modules.output","src.runtime.runtime","src.runtime.utils","src.runtime.utils.evaluation","src.train","src.train.data","src.train.utils"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":3,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":2,"sphinx.domains.rst":2,"sphinx.domains.std":1,"sphinx.ext.intersphinx":1,"sphinx.ext.todo":2,"sphinx.ext.viewcode":1,sphinx:56},filenames:["configs.md","howto/create_a_profile.md","howto/create_dataset.md","howto/howtos.md","howto/integrate_into_your_own_project.md","howto/setup.md","howto/test.md","howto/train.md","index.md","modules.md","scripts.rst","src.common.rst","src.common.config.rst","src.common.model.rst","src.runtime.md","src.runtime.modules.rst","src.runtime.modules.input.md","src.runtime.modules.output.md","src.runtime.runtime.rst","src.runtime.utils.rst","src.runtime.utils.evaluation.rst","src.train.rst","src.train.data.rst","src.train.utils.rst"],objects:{"configs.default":{backbone:[0,1,1,""],batch_size:[0,1,1,""],camera_input_cam_number:[0,1,1,""],data_root:[0,1,1,""],dataset:[0,1,1,""],epoch:[0,1,1,""],griding_num:[0,1,1,""],h_samples:[0,1,1,""],img_height:[0,1,1,""],img_width:[0,1,1,""],input_mode:[0,1,1,""],learning_rate:[0,1,1,""],local_rank:[0,1,1,""],measure_time:[0,1,1,""],note:[0,1,1,""],num_lanes:[0,1,1,""],on_train_copy_project_to_out_dir:[0,1,1,""],optimizer:[0,1,1,""],output_mode:[0,1,1,""],resume:[0,1,1,""],screencap_enable_image_forwarding:[0,1,1,""],screencap_recording_area:[0,1,1,""],test_txt:[0,1,1,""],test_validation_data:[0,1,1,""],train_gt:[0,1,1,""],train_img_height:[0,1,1,""],train_img_width:[0,1,1,""],trained_model:[0,1,1,""],use_aux:[0,1,1,""],video_input_file:[0,1,1,""],video_out_enable_image_export:[0,1,1,""],video_out_enable_line_mode:[0,1,1,""],video_out_enable_live_video:[0,1,1,""],video_out_enable_video_export:[0,1,1,""],work_dir:[0,1,1,""]},"scripts.create_seg_labels_and_index_files":{calc_k:[10,2,1,""],draw:[10,2,1,""],generate_segmentation_and_train_list:[10,2,1,""],get_args:[10,2,1,""],get_tusimple_list:[10,2,1,""]},"scripts.create_smaller_train_set":{create_smaller_train_set:[10,2,1,""]},"scripts.reduce_h_samples":{reduce_h_samples:[10,2,1,""]},"scripts.show_labels_on_image":{get_lane_color:[10,2,1,""],input_images:[10,2,1,""]},"scripts.split_dataset":{split_dataset:[10,2,1,""]},"src.common.config":{cli_parser:[12,0,0,"-"],global_config:[12,0,0,"-"],util:[12,0,0,"-"]},"src.common.config.cli_parser":{get_args:[12,2,1,""],str2bool:[12,2,1,""]},"src.common.config.global_config":{AdvancedConfig:[12,3,1,""],Dummy:[12,3,1,""],init:[12,2,1,""],merge_config:[12,2,1,""],process_modes:[12,2,1,""]},"src.common.config.global_config.AdvancedConfig":{gen_train_dir:[12,4,1,""]},"src.common.config.util":{Config:[12,3,1,""],ConfigDict:[12,3,1,""],DictAction:[12,3,1,""],add_args:[12,2,1,""]},"src.common.config.util.Config":{auto_argparser:[12,4,1,""],dump:[12,4,1,""],filename:[12,4,1,""],fromfile:[12,4,1,""],merge_from_dict:[12,4,1,""],pretty_text:[12,4,1,""],text:[12,4,1,""]},"src.common.model":{backbone:[13,0,0,"-"],model:[13,0,0,"-"]},"src.common.model.backbone":{resnet:[13,3,1,""]},"src.common.model.backbone.resnet":{forward:[13,4,1,""],training:[13,5,1,""]},"src.common.model.model":{conv_bn_relu:[13,3,1,""],initialize_weights:[13,2,1,""],parsingNet:[13,3,1,""],real_init_weights:[13,2,1,""]},"src.common.model.model.conv_bn_relu":{forward:[13,4,1,""],training:[13,5,1,""]},"src.common.model.model.parsingNet":{forward:[13,4,1,""],training:[13,5,1,""]},"src.runtime":{modules:[15,0,0,"-"],runtime:[18,0,0,"-"]},"src.runtime.modules.input":{input_images:[16,0,0,"-"],input_screencap:[16,0,0,"-"],input_video:[16,0,0,"-"]},"src.runtime.modules.input.input_images":{input_images:[16,2,1,""]},"src.runtime.modules.input.input_screencap":{input_screencap:[16,2,1,""]},"src.runtime.modules.input.input_video":{input_camera:[16,2,1,""],input_video:[16,2,1,""]},"src.runtime.modules.output":{common:[17,0,0,"-"],out_json:[17,0,0,"-"],out_prod:[17,0,0,"-"],out_test:[17,0,0,"-"],out_video:[17,0,0,"-"]},"src.runtime.modules.output.common":{evaluate_predictions:[17,2,1,""],get_filename_date_string:[17,2,1,""],map_x_to_image:[17,2,1,""]},"src.runtime.modules.output.out_json":{JsonOut:[17,3,1,""]},"src.runtime.modules.output.out_json.JsonOut":{out:[17,4,1,""]},"src.runtime.modules.output.out_prod":{ProdOut:[17,3,1,""]},"src.runtime.modules.output.out_prod.ProdOut":{out:[17,4,1,""],post:[17,4,1,""]},"src.runtime.modules.output.out_test":{TestOut:[17,3,1,""]},"src.runtime.modules.output.out_test.TestOut":{out:[17,4,1,""],post:[17,4,1,""]},"src.runtime.modules.output.out_video":{VisualOut:[17,3,1,""],get_lane_color:[17,2,1,""]},"src.runtime.modules.output.out_video.VisualOut":{out:[17,4,1,""]},"src.runtime.runtime":{FrameProcessor:[18,3,1,""],main:[18,2,1,""],setup_input:[18,2,1,""],setup_net:[18,2,1,""],setup_out_method:[18,2,1,""]},"src.runtime.runtime.FrameProcessor":{process_frames:[18,4,1,""]},"src.runtime.utils":{dataset:[19,0,0,"-"]},"src.runtime.utils.dataset":{LaneDataset:[19,3,1,""]},"src.runtime.utils.evaluation":{lane:[20,0,0,"-"]},"src.runtime.utils.evaluation.lane":{LaneEval:[20,3,1,""]},"src.runtime.utils.evaluation.lane.LaneEval":{bench:[20,4,1,""],bench_one_submit:[20,4,1,""],get_angle:[20,4,1,""],line_accuracy:[20,4,1,""],lr:[20,5,1,""],pixel_thresh:[20,5,1,""],pt_thresh:[20,5,1,""]},"src.train":{train:[21,0,0,"-"]},"src.train.data":{dataloader:[22,0,0,"-"],dataset:[22,0,0,"-"],mytransforms:[22,0,0,"-"]},"src.train.data.dataloader":{get_train_loader:[22,2,1,""]},"src.train.data.dataset":{LaneClsDataset:[22,3,1,""],loader_func:[22,2,1,""]},"src.train.data.mytransforms":{Compose2:[22,3,1,""],DeNormalize:[22,3,1,""],FreeScale:[22,3,1,""],FreeScaleMask:[22,3,1,""],MaskToTensor:[22,3,1,""],RandomLROffsetLABEL:[22,3,1,""],RandomRotate:[22,3,1,""],RandomUDoffsetLABEL:[22,3,1,""],Scale:[22,3,1,""],find_start_pos:[22,2,1,""]},"src.train.train":{calc_loss:[21,2,1,""],inference:[21,2,1,""],main:[21,2,1,""],resolve_val_data:[21,2,1,""],train:[21,2,1,""]},"src.train.utils":{common:[23,0,0,"-"],dist_utils:[23,0,0,"-"],factory:[23,0,0,"-"],loss:[23,0,0,"-"],metrics:[23,0,0,"-"]},"src.train.utils.common":{cp_projects:[23,2,1,""],get_logger:[23,2,1,""],save_model:[23,2,1,""]},"src.train.utils.dist_utils":{DistSummaryWriter:[23,3,1,""],all_gather:[23,2,1,""],can_log:[23,2,1,""],dist_cat_reduce_tensor:[23,2,1,""],dist_mean_reduce_tensor:[23,2,1,""],dist_print:[23,2,1,""],dist_sum_reduce_tensor:[23,2,1,""],dist_tqdm:[23,2,1,""],get_rank:[23,2,1,""],get_world_size:[23,2,1,""],is_main_process:[23,2,1,""],synchronize:[23,2,1,""],to_python_float:[23,2,1,""]},"src.train.utils.dist_utils.DistSummaryWriter":{add_figure:[23,4,1,""],add_graph:[23,4,1,""],add_histogram:[23,4,1,""],add_image:[23,4,1,""],add_scalar:[23,4,1,""],close:[23,4,1,""]},"src.train.utils.factory":{CosineAnnealingLR:[23,3,1,""],MultiStepLR:[23,3,1,""],get_loss_dict:[23,2,1,""],get_metric_dict:[23,2,1,""],get_optimizer:[23,2,1,""],get_scheduler:[23,2,1,""]},"src.train.utils.factory.CosineAnnealingLR":{step:[23,4,1,""]},"src.train.utils.factory.MultiStepLR":{step:[23,4,1,""]},"src.train.utils.loss":{OhemCELoss:[23,3,1,""],ParsingRelationDis:[23,3,1,""],ParsingRelationLoss:[23,3,1,""],SoftmaxFocalLoss:[23,3,1,""]},"src.train.utils.loss.OhemCELoss":{forward:[23,4,1,""],training:[23,5,1,""]},"src.train.utils.loss.ParsingRelationDis":{forward:[23,4,1,""],training:[23,5,1,""]},"src.train.utils.loss.ParsingRelationLoss":{forward:[23,4,1,""],training:[23,5,1,""]},"src.train.utils.loss.SoftmaxFocalLoss":{forward:[23,4,1,""],training:[23,5,1,""]},"src.train.utils.metrics":{AccTopk:[23,3,1,""],Metric_mIoU:[23,3,1,""],MultiLabelAcc:[23,3,1,""],converter:[23,2,1,""],fast_hist:[23,2,1,""],reset_metrics:[23,2,1,""],update_metrics:[23,2,1,""]},"src.train.utils.metrics.AccTopk":{get:[23,4,1,""],reset:[23,4,1,""],update:[23,4,1,""]},"src.train.utils.metrics.Metric_mIoU":{get:[23,4,1,""],get_acc:[23,4,1,""],get_miou:[23,4,1,""],reset:[23,4,1,""],update:[23,4,1,""]},"src.train.utils.metrics.MultiLabelAcc":{get:[23,4,1,""],get_acc:[23,4,1,""],reset:[23,4,1,""],update:[23,4,1,""]},configs:{"default":[0,0,0,"-"]},scripts:{create_seg_labels_and_index_files:[10,0,0,"-"],create_smaller_train_set:[10,0,0,"-"],reduce_h_samples:[10,0,0,"-"],show_labels_on_image:[10,0,0,"-"],split_dataset:[10,0,0,"-"]},src:{common:[11,0,0,"-"],train:[21,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","data","Python data"],"2":["py","function","Python function"],"3":["py","class","Python class"],"4":["py","method","Python method"],"5":["py","attribute","Python attribute"]},objtypes:{"0":"py:module","1":"py:data","2":"py:function","3":"py:class","4":"py:method","5":"py:attribute"},terms:{"000":2,"0004":0,"0143":2,"0224":17,"03937897":17,"04_b_4_ex_prof":6,"06111232":17,"0th":17,"100":[0,1,2,5,6,23],"1000":23,"10000":23,"1005":17,"101":[0,2],"101next":0,"101wide":0,"102":2,"1080":[0,16],"110":2,"11gb":1,"1280":[0,1],"1280x720":[2,5],"14521082":17,"152":0,"15705156":17,"160":1,"16_14":[],"17240046":17,"1920":[0,16],"1920x1080":2,"19_16":17,"19_cfg":[],"1_batch_16":23,"1h30min":5,"1st":17,"20201205_234831_lr_4e":6,"2021":17,"2080":5,"2080ti":1,"23658818":17,"255":[17,23],"28607988":17,"288":0,"288px":1,"288x800":2,"2nd":17,"32698695":17,"3440":16,"380":0,"3rd":17,"3xhxw":23,"42_cfg":17,"46894699":17,"48616481":17,"4880209":17,"48803848":17,"50next":0,"50wide":0,"54_":23,"5gb":5,"6006":7,"6095107":17,"6627":17,"6839597":17,"6873128":17,"711":[0,1],"720":[0,1],"72240206":17,"73001617":17,"73299785":17,"73678818":17,"75888292":17,"7993621":17,"800":0,"800x288":[4,5],"8216":17,"82870762":17,"86122163":17,"8800k":1,"89856385":17,"90077982":17,"91600986":17,"92785092":17,"9383928571428571":6,"970":5,"\u00e4ndern":5,"break":[2,12],"case":[1,2,4,17,22],"class":[2,12,13,14,17,18,19,20,22,23],"const":12,"default":[1,2,4,5,8,9,12,23],"export":[0,14,17],"float":[0,17,23],"function":[1,2,4,13,16,17,18,23],"import":[0,1,4,5,6,12,17,23],"int":[0,10,16,17,23],"long":23,"new":[1,2,5,10,23],"return":[4,10,12,16,17,18,20,23],"short":[0,6],"static":[4,12,20],"super":12,"switch":0,"true":[0,4,12,13,14],"while":[0,1,4,13,23],FPS:1,For:[1,2,4,6,7,8],Its:[2,16],Not:2,One:[2,8,23],The:[1,2,3,4,5,6,7,8,9,10,12,14,16,17,18],There:[0,2,5,8],These:[2,8,14],Use:[2,3,7,17,23],Using:[0,4],With:4,__getattribute__:12,__init__:4,_adding_some_document:6,_cfg_dict:12,_ex_prof:1,_static:6,abil:17,abl:8,about:[1,8,17],abov:[2,4,5,6,17],absolut:[0,1,10],acceler:[4,5],accept:[4,17,18],access:[0,4,5,7,12,18],accord:10,acctopk:23,accur:17,accuraci:[1,2,6,14,17,20],achiev:[1,16,18],across:23,action:12,activ:[5,7],actual:0,adam:0,adapt:18,add:[3,23],add_arg:12,add_figur:23,add_graph:23,add_histogram:23,add_imag:23,add_scalar:23,add_testing_cod:6,added:[2,23],addict:[5,12],adding:[0,4],addit:2,addition:[0,6,14,17],adjust:[0,4],advanc:12,advancedconfig:12,affect:1,after:[0,5,6,7,17,23],afterward:[13,23],again:[2,4],against:[7,17],algorithm:6,all:[0,1,2,5,6,8,9,10,13,17,18,23],all_gath:23,allow:[0,7,12,17],alphabet:0,alreadi:[2,4,7],also:[0,1,2,4,5,6,7,8,12,14,16,17,23],although:[13,23],alwai:[0,1,2,12,16],among:[14,23],amount:[1,4,10,17],analog:17,angl:[4,22],ani:[0,2,4,7,17,18,23],annot:10,anoth:[0,4,6,14],api:[4,8],apidoc:8,append:[12,23],appli:[2,6],applic:[0,3,8,12,14,16,17],approach:[4,6,18],arang:23,arbitrari:23,area:0,aren:[1,4],arg:[4,12,23],argpars:12,argument:[0,4,12,23],around:[1,2,5,8],arrai:[2,10,17,18,23],arround:14,ask:12,aspect:4,assert:12,assign:[2,17,23],assum:6,attent:4,attribut:[2,12],auto:23,auto_argpars:12,automat:[6,12,23],avail:[0,1,2,8,16,17,18],averag:14,avoid:4,awai:7,await:8,axi:17,back:17,backbon:[0,11,12],background_class:23,bad:[],bar:18,barrier:23,base:[12,13,17,18,19,20,22,23],basic:[0,14,16,17],batch:[0,1,4,7,16,17,23],batch_siz:[0,3,4,5,7,8,22],beauti:1,becaus:[1,2,4,6,17],befor:[2,4,7,23],behaviour:[4,12],being:17,belong:[2,17],below:[0,1,4,6],bench:20,bench_one_submit:20,benchmark:[0,6,14],benefit:4,besid:[0,8],best:[1,18],better:[4,6,18],between:[0,1,2,8,17,23],bewar:4,bia:13,big:17,bin:23,bind_al:7,bit:[4,16,17],black:2,blobnam:23,bool:[0,13,23],both:[13,23],bottom:2,brick:0,browser:5,build:[4,14,23],bundl:6,bus:4,calc_k:10,calc_loss:21,calcul:[1,4,10,12,14],call:[2,4,5,7,13,14,16,17,20,23],callabl:[16,18],camera:[0,4,14,16,18],camera_input_cam_numb:[0,16],camera_numb:16,can:[0,1,2,4,5,6,7,8,14,16,17,22,23],can_log:23,capabl:3,care:[13,23],carla:[2,3],carla_d:[],carla_trainset02:8,center:23,cfg:[4,12,13,16,17,23],cfg_dict:12,cfg_text:12,challeng:6,chang:[0,1,4,5,6,8,23],cheat:6,choic:12,chosen:2,chw:23,circumst:12,class_num:23,clean:12,cleaner:12,cleanup:17,cli:[1,4,6,7,9,12],cli_pars:11,clip:2,clone:5,close:[5,23],cloud:5,cls_dim:13,cls_num:5,cls_num_per_lan:17,code:[0,3,4,8,12,18],colab:5,collect:[2,3,17],color:[2,17],column:17,combin:[12,14],come:18,comma:[10,12],command:[2,4,6,7,8],comment:23,common:[8,9,15,21],commun:4,compar:[17,18,20,23],compat:[2,5],complet:[2,4,7,8,17],complex:17,complic:[8,18],compose2:22,compromis:4,comput:[4,7,13,23],concept:4,conclust:4,conda:[5,7],config:[3,4,5,6,7,9,11,16,17,18],configdict:12,configur:[6,9],consider:4,consist:8,consol:23,construct:[17,23],consum:[4,5],contain:[0,2,6,8,9,10,14,15,17,18],content:[5,8,9],context:17,continu:[0,1],conv_bn_relu:13,convert:[2,3,8,23],coordin:[0,2,17,20],copi:[0,6],core:4,correct:[0,10],correctli:0,correspond:[2,4,18,23],cosineannealinglr:23,could:[1,2,4,5,6,8,10,14,17],cover:[2,4,14],cp_project:23,cpu:[1,4,5],crash:23,creat:[0,4,5,7,8,10,23],create_seg_labels_and_index_fil:2,create_smaller_train_set:2,creation:2,crop:[4,22],cryptic:16,csv:[6,17],ctrl:17,cuda:3,cudatoolkit:5,culan:[2,10],current:[0,2,4,5,17],current_datetime_hostnam:23,custom:[4,8],data:[0,1,3,4,6,10,12,14,16,17,18,19,21,23],data_label:21,data_load:21,data_root:[0,1,10,16,17,19,22],dataformat:23,dataload:21,dataset:[0,1,5,6,7,10,16,17,18,21],dataset_t:17,date:17,declar:4,decreas:[0,1,2,4],defin:[0,1,2,4,6,13,23],definit:[4,8,10],deliv:4,demo:[8,18],denorm:22,depend:[0,1,3,5,12,17,18],depth:12,describ:[1,2,4,17],descript:12,desir:0,dest:12,destructor:17,det:5,detail:[0,8,16,23],detect:[5,6,14,17],determin:23,develop:[4,14,18],diagram:[1,5,14],dict:[12,16],dictact:12,dictionari:12,did:[0,2,4],differ:[0,1,2,4,5,8,14,17],difficult:16,dilat:13,dimens:[17,23],dimension:17,direct:[2,10],directli:[4,17],directori:[0,1,6,7,8,10,16,17,23],disabl:0,discuss:8,disk:[0,14,17,23],displai:[10,14],dist_cat_reduce_tensor:23,dist_mean_reduce_tensor:23,dist_print:23,dist_sum_reduce_tensor:23,dist_tqdm:23,dist_util:21,distanc:[2,4],distribut:[0,22,23],distsummarywrit:23,divid:[1,2],doc:[6,8,12,23],docstr:8,document:[0,5,6,16],doe:[1,2,4,5,17],doesn:[2,4,8,14],don:[1,2,4,7],done:[1,2,7],dont:[4,5,18],dot:17,down:[2,4],download:[6,7],drastic:[1,2],draw:[10,23],drawn:2,drive:5,drop:4,due:4,dummi:12,dump:12,durat:2,dure:[0,4,9,12],each:[0,2,5,14,17,23],eanbl:18,earlier:2,easi:[1,2,4,10,14],easier:1,easili:[1,17,23],edit:2,editor:6,effect:23,either:[4,6],empti:[4,17],enabl:0,enable_image_export:17,enable_line_mod:17,enable_live_video:17,enable_video_export:17,encapsul:18,end:[6,18],enough:[5,7],enter:2,entri:[0,8,14,18],entrypoint:4,env:5,environ:[5,7],ep004:6,epoch:[0,1,5,6,7,21,23],equal:[17,23],error:[2,7,12],especi:[2,4,10,14],estim:17,eta_min:23,etc:[1,23],euro:5,evalu:[1,4,6,15,19],evaluate_predict:17,even:[2,4],event:23,event_file_writ:23,eventfilewrit:23,everi:[0,1,2,5,8,12,13,17,20,23],everyth:[0,1,8],exact:1,exactli:[2,8,17],exam:1,exampl:[2,3,4,6,8,12,14,23],example_dataset:1,except:[16,17],execut:[4,14],exist:[0,2,4],exit:[0,14,16,17],exp1:23,exp2:23,expand:[4,18],expect:[0,2,4,23],expens:14,experi:23,experiment:12,explain:[1,2,4,5,6,8],explan:1,external_it:23,extra:0,facil:12,factor:1,factori:21,fail:[2,8],fals:[0,10,12,13,20,22],fast:5,fast_hist:23,favor:4,feasibl:4,fed:23,figur:23,file:[0,1,4,6,8,10,12,14,16,17,18,23],file_in:10,file_out:10,filenam:[2,10,12,17,18,23],filename_suffix:23,filepath:[0,10,17],find:[1,10,17,23],find_start_po:22,finetun:0,finish:[6,7,17],first:[4,7,12,17],fix:6,flag:23,flexibl:14,flush:23,flush_sec:23,focu:4,folder:[1,2,8,10,23],follow:[2,5,6,7,10,14,17],forc:23,forget:12,form:12,format:[12,17,23],former:[13,23],forward:[0,13,23],found:8,four:[2,10,17],fps:[4,14],frame:[0,2,4,6,10,14,16,17,18],frameprocessor:[9,16,18],framer:[2,10],free:5,freescal:22,freescalemask:22,frequent:14,from:[0,1,2,3,4,5,6,7,10,12,14,16,17,18,23],fromfil:12,fulfil:[2,8],full:[0,4,17],fulli:4,further:[1,7,8,14,18],futur:18,gamma:[0,23],garbag:2,gather:23,gen_train_dir:12,gener:[1,2,8,10,12,17,18,23],generate_dataset_from_carla:[],generate_segmentation_and_train_list:10,get:[4,5,6,8,10,14,16,17,23],get_acc:23,get_angl:20,get_arg:[10,12],get_filename_date_str:17,get_lane_color:[10,17],get_logg:23,get_loss_dict:23,get_metric_dict:23,get_miou:23,get_optim:23,get_rank:23,get_schedul:23,get_train_load:22,get_tusimple_list:10,get_world_s:23,git:[5,6],github:8,give:[0,1,8],given:22,global:23,global_config:11,global_step:[21,23],goal:18,goe:7,good:[0,1,2,4,5,12,17,18],googl:5,gpu:[3,4,18],graph:23,grayscal:[2,17],green:2,griding_num:[0,5,17,22],group:0,gta:16,guarante:17,guid:[3,7,8],h_sampl:[2,3,4,5,9,10,17],hadn:0,hand:[0,4],handl:[2,12],handler:17,happen:1,hardcod:4,hardwar:[4,5],hardwarebeschleunig:5,has:[2,4,6,8,12,16,17,23],have:[0,1,2,4,5,6,7,8,16,17,18,22,23],haven:2,hdd:18,heavi:4,height:[0,1,16],help:[2,4,5,6,7,8,9,12,17],helper:[15,18,23],here:[0,1,2,4,6,7,8,12,16,17,18],hidden:23,hierarch:23,high:[1,2,4,10],higher:[1,2,4,5],highest:1,highli:4,hint:[2,5,17],histogram:23,home:[1,2,6,7,12],hook:[13,23],hopefulli:2,horizon:2,hour:[2,5],how:[1,2,6,17,23],howev:[2,14],howto:[0,1,4,6,7],html:[8,23],http:[7,23],huge:[2,10],hwc:23,idea:[2,4,17],ideal:2,ident:6,identifi:23,idx:10,ignor:[13,17,23],ignore_lb:23,imag:[0,1,4,14,16,17,18,22,23],img:[5,23],img_height:[0,1,18],img_hwc:23,img_tensor:23,img_transform:[19,22],img_width:[0,1,17,18],implement:[4,16,17,18],implicit:8,imposs:5,impract:1,improv:[0,3,6,7,12,17],in_channel:13,includ:[6,17],increas:[1,4,10],independ:0,index:[0,10,16],indic:2,individu:[1,2],infer:21,inflex:4,info:0,inform:[0,2,4,7,8,14,16],init:[4,12],initi:[0,4,12,13,23],initialize_weight:13,innermost:17,input:[0,1,9,15,17,18],input_camera:16,input_fil:[0,10,16],input_imag:[10,15],input_mod:0,input_screencap:15,input_to_model:23,input_video:15,insert:2,insid:[8,17],inspect:6,instal:[5,6],instanc:[5,13,14,23],instanti:12,instead:[0,1,2,4,13,17,23],instruct:6,integ:[16,22],integr:[3,8],intend:4,interest:1,interfac:[4,8,12,17],intern:[13,23],interpret:[4,5],intersect:2,intersphinx:[],invert:17,is_main_process:23,isn:4,issu:4,ist:[2,4],item1:12,item2:12,item3:12,item4:12,item:23,iters_per_epoch:23,its:[0,4,6,8,12,16,17],job:23,jpeg:[0,2],jpg:[2,16],json:[0,2,4,6,10,12,14,17,20],json_gt:[6,20],json_pr:[6,20],jsonout:17,jupyt:5,just:[0,2,4,6,14,17],kchen:12,keep:[5,6,10,12,17],keep_h_sampl:10,kei:12,kernel_s:13,known:17,kwarg:[12,23],label:[0,1,7,10,17,18,23],label_data_0313:2,label_data_0531:2,label_data_0601:2,label_list:10,label_pr:23,label_tru:23,lane:[0,4,5,6,10,17,19],laneclsdataset:22,lanedataset:19,laneev:20,larg:[1,2,4,5,10],larger:[5,23],largest:2,latenc:[1,4],later:1,latest:1,latter:[13,23],laufzeit:5,laufzeittyp:5,layer:13,learn:0,learning_r:0,least:[4,6],left:[0,2,10,16],length:18,let:[4,17,23],licens:6,life:0,like:[0,1,4,5,6,8,14,17],limit:[1,5],line:[0,2,6,10,17],line_accuraci:20,line_txt:10,linearregress:20,liner:2,link:5,linux:6,list:[0,2,10,12,16,17,18,20,23],list_path:[19,22],live:[0,1,4,14,17],load:[0,7,14,16,18],load_nam:22,loader_func:22,local:23,local_rank:0,localhost:7,locallr_0:23,locat:[2,6,8,10,17,22,23],lock:4,log:[1,14,18,23],log_dir:23,logdir:7,logger:21,logic:[4,17],logik:14,logit:23,longer:6,look:[4,5,6,8,17],loss:[2,21],loss_dict:21,lot:[4,5],low:[1,2,6],lower:[1,4,7],lr_0:23,macbook:23,made:23,mai:0,main:[4,5,8,18,21],make:[1,2,4,6,7,8,12,16],make_grid:23,mani:[1,8,14],manual:[4,6,16],map:17,map_x_to_imag:17,mark:2,marker:14,marku:2,masktotensor:22,master:8,master_project:2,match:[16,17],matplotlib:23,matter:2,max_offset:22,max_queu:23,maximum:1,may04_22:23,mean:[12,17,22],measur:[0,1,9],measure_tim:[0,14,18],meet:[3,8],merg:12,merge_config:[4,12],merge_from_dict:12,messag:[0,4],metavar:12,method:[4,10,16,17,18],metric:21,metric_dict:[21,23],metric_mi:23,might:[0,1,2,4,6,17,18],mind:14,minim:5,minut:[2,23],miss:[4,5],mistak:2,mmcv:12,mock:12,mode:[1,4,5,6,7,8,9,12],model:[0,1,4,5,6,7,8,11,12,14,17,23],modifi:2,modul:[0,1,6,7,8,9],modular:14,momentum:0,mon:16,monitor:3,more:[0,1,2,4,7,16,17,18,23],most:[0,1,4,17],mount:5,much:[2,14],multi:18,multilabelacc:23,multipl:[0,1,2,4,12,14,18],multiplekvact:12,multisteplr:23,must:[2,18],my_experi:23,my_imag:23,my_image_hwc:23,mytransform:21,n_min:23,name:[0,1,2,10,12,17,18,23],names_fil:16,namespac:[8,9,11,14,15,21],narg:12,ndarrai:[16,17,18],necessari:[2,4],necessarili:23,need:[0,2,6,7,10,13,23],neg:20,neither:4,net:[0,1,2,4,7,14,17,18,21,23],network:[0,6,7,8,14,17,18],neural:[0,8,14,17,18],never:[2,4],nevertheless:1,next:[1,5,17],nice:6,non:[2,16,17,23],none:[0,12,16,18,22,23],nor:4,normal:[17,18],note:[0,1,5,6,8,18,23],notebook:5,notic:17,now:[1,2,3,4,12],num_class:23,num_lan:[0,22],number:[0,1,17],numpi:[16,17,18,23],nvidia:5,obj:23,object:[2,12,17,18,20,22,23],obviou:4,obvious:[2,4],occur:7,often:[2,4,23],ohemceloss:23,old:12,on_train_copy_project_to_out_dir:0,onc:[4,12,16],one:[0,2,4,5,6,8,10,13,14,17,20,23],ones:8,onli:[0,1,2,4,5,6,9,14,16,17,18],open:[2,5,6,7],opencv:[4,16],optim:[0,1,7,21,23],option:[0,1,4,5,8,12,16,17,23],option_str:12,order:[2,10],org:23,origin:2,other:[0,2,4,7,8,12,14,23],otherwis:[2,4],our:[2,6,7,8],out:[0,2,10,16,17,18,23],out_channel:13,out_fil:17,out_filenam:10,out_json:15,out_modul:0,out_prod:15,out_test:15,out_video:15,outer:17,outlin:8,output:[0,1,7,9,15,18],output_method:18,output_mod:[0,4],outsid:17,over:[8,14],overhead:1,overrid:[0,1,23],overridden:[8,13,23],overwrit:1,own:[0,3,4,7],packag:[4,5,9,18,23],pad:13,page:0,pai:4,pair_data:23,paper:0,param:4,paramet:[0,1,4,5,6,7,10,12,16,17,18,20,23],pars:[4,12],parser:[4,12],parsingnet:13,parsingrelationdi:23,parsingrelationloss:23,part:[2,4,8],particular:2,pass:[0,2,4,12,13,16,18,23],past:6,patch:6,path:[0,1,2,10,12,16,17,18,22],pathspec:5,pend:23,per:[1,2,4,5,8,14,17],percent:2,percentag:[2,10],perform:[0,1,2,3,5,9,12,13,18,23],picklabl:23,pil:22,pillow:23,pip:5,pixel:2,pixel_thresh:20,place:17,plan:[14,18],png:[2,10],point:[0,14,17],posit:[0,16,17,20],possibl:[0,1,4,5,8,14,18],post:17,postprocess:4,potenti:4,practic:5,pre:1,precalcul:1,precis:4,pred:[6,20],predefin:17,predict:[0,15,18,20,23],prefer:1,prefix:[8,12],prepar:[3,7,8],preprocess:[2,4,16,18],pretrain:13,pretty_text:12,prevent:[0,2,4,12],preview:[0,1,6,14],previou:[2,4,6],print:[6,17,23],prioriti:[1,4],pro:23,probabl:[0,2,4,5,14,17,18],problem:[4,6,8],problemat:4,proce:2,process:[0,3,4,16,17,18,23],process_fram:[4,16,18],process_mod:12,prod:[0,4,18],prodout:17,product:[0,1,3,4,6,8,14,18],profil:[3,8],progress:18,project:[0,3,6,7,9,12],promis:4,properti:12,provid:[0,1,2,4,5,6,8,10,12,17,18],pt_thresh:20,pth:6,purg:23,purge_step:23,purpos:0,put:18,pyplot:23,python:[2,4,5,6,7,8,12,17],pytorch:5,qualiti:[1,6],queue:23,quick:[1,2],quit:[4,5,8],ran:5,random:[22,23],randomlroffsetlabel:22,randomrot:22,randomudoffsetlabel:22,rang:[0,1,6,23],rank:23,raster:2,rate:0,raw:17,raw_fil:2,read:[0,4,16],readi:4,real:[14,17],real_init_weight:13,realiti:6,realli:[1,2,4,14],realtim:1,receiv:[2,17],recip:[13,23],recogn:[1,2],recommend:[2,17],record:[0,1,2,8,10,14,16,17,23],red:2,reduc:10,refer:[2,4,18,23],region:22,regist:[13,16,23],rel:[0,1,2,4,10,17],relat:0,relev:14,reli:4,remain:2,rememb:[4,7,17],remember:0,remov:[0,2,4,5,6],render:[17,23],rent:5,repeat:17,replac:[2,6,12],repres:[2,10,17],requir:[0,1,2,3,4,6,8,10,12,14,23],required_changes_for_laneeval_:6,res:0,reset:23,reset_metr:23,reshap:23,residu:17,resiz:0,resnet18:[1,5],resnet:[0,12,13],resolut:[0,1,2,4,16,17],resolve_val_data:21,respect:[10,14],respons:[4,14,16,17],rest:[2,4],restart:23,result:[0,1,4,5,6,7,8,17,18,20,21,23],resum:[0,5,23],reveal:2,rewritten:4,right:[2,10],right_curv:2,road:2,root:[0,1,2,6,10,16],round:0,row:17,row_anchor:22,row_sampl:22,rst:8,rubric:12,run:[0,2,3,5,7,8,12,13,23],run_tim:6,runtim:[0,1,3,5,6,8,9,12],sadli:[6,8],same:[2,4,7,10,12,14,17,18,23],sampl:[0,1,2,7,17,20],sample_dataset:[2,5,6,7],save:[2,4,5,17,23],save_model:23,save_path:23,scalar:23,scalar_valu:23,scale:[1,2,4,17,18,22],scenario:[4,14],schedul:[0,21],scipi:23,screen:[14,16],screencap:0,screencap_enable_image_forward:[0,16],screencap_recording_area:0,screenshot:2,script:[2,8],scriptmodul:[13,23],second:[17,23],section:[2,4,7,8],see:[0,1,2,4,5,6,7,8,14,16,18],seen:1,segent:10,segmenat:2,segment:[0,10],segment_transform:22,self:12,semant:2,send:16,separ:[2,8,9,12],seper:10,servic:4,set:[0,1,2,4,5,6,7,8,14,16,23],setup:[14,18],setup_input:[16,18],setup_net:18,setup_out_method:18,sever:14,sgd:0,shape:[22,23],share:[8,13,23],should:[0,1,2,4,6,12,13,14,17,18,23],show:[0,1,2,5,6,10,14,17],show_labels_on_imag:2,shown:14,shp_loss_w:0,significantli:[0,4],silent:[13,23],sim_loss_w:0,simpl:[6,12],simplest:0,simpli:[1,2,4],simplic:14,simplifi:18,simu_transform:22,simultan:14,sinc:[2,13,14,23],singl:4,size:[0,1,4,7,13,16,17,22,23],sketch:2,sketch_label:2,skip:2,sky:4,slight:2,slightli:[2,4],slow:4,slower:4,small:[2,6],small_train_label:10,smaller:[2,10],softmaxfocalloss:23,solv:4,some:[0,1,2,4,5,6,8,12,17,18],somehow:5,someth:[0,1,2,4,5,14,17],soon:[4,7,16],sort:0,sourc:[0,6,8,10,12,13,14,16,17,18,19,20,21,22,23],source_fram:18,special:[0,4,6,12],specif:[0,1,3,8],specifi:[0,4,8,16,23],speed:[0,10],spend:4,sphinx:[8,12],split:[8,10,12],split_dataset:2,squar:22,src:[4,6,9],stai:5,standalon:3,start:[1,2,3,4,5,8,12,14,17],start_lin:22,startup:4,stat:17,state:[13,23],statement:1,std:22,stdout:14,step:[0,2,5,6,17,23],stick:2,stop:5,storag:5,store:[1,2,17],str2bool:12,str:[0,10,16,17,18],stream:[16,18],strictli:10,stride:13,string:[0,12,16,17,23],stringifi:2,structur:[2,14,23],subclass:[13,23],submodul:[9,11,15],subpackag:9,suffici:4,suffix:[0,1,23],suggest:2,suitabl:[17,23],summar:17,summari:23,summarywrit:23,suppli:[14,16,17,18],support:[0,2,4,5,12,17,18],sure:[2,4,6,7,16],synchron:23,syntax:2,system:4,t_max:23,tag:23,take:[2,5,10,13,16,17,18,23],target:[10,16,18,22,23],target_height:22,target_transform:22,target_width:22,task:4,temporari:1,temporarili:7,ten:23,tensor:[16,17,18,23],tensorboard:[7,23],tensorflow:23,term:2,termin:6,test:[0,1,2,5,7,8,10,12,14,16,17,18],test_fil:[2,10],test_result:6,test_split:10,test_tasks_0627:2,test_txt:[0,6,16],test_validation_data:[0,17],testout:17,text:[6,12,17,18],than:[4,6],thei:[0,1,2,5,12,17],them:[0,1,2,4,8,10,12,13,16,17,23],theori:[1,2],therefor:2,thi:[0,1,4,5,6,7,8,10,12,13,14,15,16,17,18,23],thing:[4,17],think:17,third:17,those:4,thread:[4,5],three:[2,14,17],thresh:[20,23],through:[3,7],till:3,time:[0,1,2,4,5,10,12,14,17,23],tini:6,to_path:23,to_python_float:23,too:[1,2,4,6],took:14,top:[0,2,16],topic:2,topmost:2,torch:[13,16,17,18,19,22,23],torchvis:[5,23],total:1,touch:4,tqdm:18,tqdm_bar:18,train:[0,1,4,6,8,9,10,13,14,17],train_fil:[2,10],train_gt:[0,2,6,22],train_img_height:[0,13],train_img_width:[0,13],train_label:[2,10],train_r:5,trained_model:[0,6],transfer:17,transform:22,treat:2,tri:[5,17],tupl:[17,22,23],tusimpl:[3,6,10],tusimpleroot:2,two:[0,2,8,17,23],txt:[0,5,6,16],type:[0,2,12,17,23],ufld:[0,3,4,5,6,7],ujson:6,ultra:5,unbalanc:2,unchang:2,unclear:0,under:[1,8,12],understand:[2,4,6,18],unintuit:17,union:16,unpredict:4,untest:0,until:[6,7],unusu:12,updat:23,update_metr:23,upload:5,usag:[4,5,10],use:[0,1,2,4,6,7,8,10,14,16,17,23],use_aux:[0,13,21,22],usecas:8,used:[0,1,2,4,5,6,8,9,10,14,16,17,18],useful:[1,14],user:[1,6,7,12],using:[0,1,2,4,5,6,7,17,18,23],usual:[2,17],util:[4,6,11,14,21,22],valid:[0,10,17,20],validate_split:10,valu:[0,1,2,4,6,8,12,14,16,17,23],variabl:[1,18,23],verbos:23,veri:1,version:[4,5,6],via:[0,1,4,6,7,8,18],video:[0,1,7,14,16,17,18],video_input_fil:[0,16],video_out_enable_image_export:[0,17],video_out_enable_line_mod:[0,17],video_out_enable_live_video:[0,17],video_out_enable_video_export:[0,17],virtual:[5,7],visibl:2,visual:[0,2,3,7,10,14,17],visualout:17,vram:[1,7],wai:[0,1,2,4,6,8,10,14,18],wait:4,walltim:23,want:[0,1,2,6,17],warmup:[0,23],warmup_it:[0,23],warn:[2,8],wast:2,watch:2,webcam:18,webinterfac:7,weight_decai:0,what:[1,3,6,17],whatev:[1,17],when:[2,4,5,14,23],where:[0,2,4,6,10,17,18],whether:[0,23],which:[0,1,2,4,5,6,7,8,10,12,14,16,17,22,23],whole:[3,4,14],whose:23,width:[0,1,16,17],window:[6,16],with_cp:12,within:[2,13,23],without:[2,3,8,14],won:[2,4,8],work:[0,1,2,4,6,7,14],work_dir:[0,1,6,7,17,23],would:[1,2,4,6,17],wouldn:2,wrapper:[14,16],write:[4,6,17,23],writer:23,written:0,wrong:[1,4,16],wrote:[4,8],y_sampl:20,yaml:12,yet:4,you:[0,1,2,3,4,5,6,7,8,14,16,17,18,23],your:[0,1,2,3,5,6,7,8,12,16,17,18],yourself:6,zero:23,zip:[2,7]},titles:["configs namespace","Create a config/profile","HOWTO: Create a dataset","HOWTOs","Integrate into your project","Project setup","Testing","Training","UFLD Documentation","Code","scripts namespace","src.common package","src.common.config namespace","src.common.model namespace","src.runtime package","src.runtime.modules package","Input Modules - src.runtime.modules.input namespace","Output modules - src.runtime.modules.output namespace","src.runtime.runtime module","src.runtime.utils namespace","src.runtime.utils.evaluation namespace","src.train package","src.train.data namespace","src.train.utils namespace"],titleterms:{"default":0,Use:4,add:6,address:2,aka:2,amount:2,applic:4,backbon:13,batch_siz:1,build:8,capabl:5,carla:8,cli:[0,8],cli_pars:12,code:[6,9],collect:8,common:[11,12,13,17,23],config:[0,1,8,12],configur:[0,4],content:[11,15,21],creat:[1,2,3],create_seg_labels_and_index_fil:10,create_smaller_train_set:10,cuda:5,data:[2,8,22],dataload:22,dataset:[2,3,8,19,22],depend:4,dist_util:23,document:8,entri:4,evalu:[17,20],exampl:1,factori:23,file:2,frameprocessor:14,from:8,gener:[],global_config:12,gpu:5,h_sampl:[0,1],help:0,helper:17,howto:[2,3,8],imag:2,improv:4,index:2,input:[2,4,14,16],input_imag:16,input_screencap:16,input_video:16,integr:4,label:2,lane:[2,20],loss:23,measur:14,metric:23,mode:0,model:[3,13],modul:[4,10,11,12,13,14,15,16,17,18,19,20,21,22,23],monitor:7,mytransform:22,namespac:[0,10,12,13,16,17,19,20,22,23],now:7,optim:4,out_json:17,out_prod:17,out_test:17,out_video:17,output:[4,14,17],overview:8,packag:[11,14,15,21],paramet:8,perform:[4,14],point:[2,4],predict:17,prepar:2,profil:1,project:[2,4,5,8],reduc:2,reduce_h_sampl:10,requir:5,result:2,rewrit:4,run:6,runtim:[4,14,15,16,17,18,19,20],script:10,segment:2,setup:[3,5,8],show_labels_on_imag:10,sourc:2,specif:2,split:2,split_dataset:10,src:[11,12,13,14,15,16,17,18,19,20,21,22,23],standalon:4,start:7,submodul:[10,12,13,16,17,19,20,21,22,23],subpackag:[11,14,15,19,21],test:[3,6],thi:2,toc:3,train:[2,3,5,7,21,22,23],tusimpl:2,ufld:8,usag:8,use:3,util:[12,19,20,23],valid:2,visual:6,what:7,without:5,your:4}})