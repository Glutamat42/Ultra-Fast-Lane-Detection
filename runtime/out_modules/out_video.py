import os
import time

import cv2
import numpy as np

from runtime.out_modules.common import get_filename_date_string, map_x_to_image, evaluate_predictions
from utils.global_config import cfg


def get_lane_color(i):
    lane_colors = [(255, 0, 0), (0, 255, 0), (0, 0, 255), (255, 255, 0), (255, 0, 255)]
    return lane_colors[i % 5]


class VisualOut:
    """
    provides the ability to different visual output types
    - live video
    - record video
    - save images
    visualization can be points or lines
    """

    def __init__(
            self,
            enable_live_video=True,
            enable_video_export=False,
            enable_image_export=False,
            enable_line_mode=False,
    ):
        """
        Args:
            enable_live_video: show video (default: True)
            enable_video_export: save as video to disk (default: False)
            enable_image_export: save as image files to disk (default: False)
            enable_line_mode: visualization as lines instead of dots (default: False)
        """
        self.enable_live_video = enable_live_video
        self.enable_video_export = enable_video_export
        self.enable_image_export = enable_image_export
        self.enable_line_mode = enable_line_mode

        if enable_video_export:
            # init video out
            fourcc = cv2.VideoWriter_fourcc(*'MJPG')
            out_filename = f'{get_filename_date_string()}_{cfg.dataset}.avi'
            out_full_path = os.path.join(cfg.log_path, out_filename)
            self.vout = cv2.VideoWriter(out_full_path, fourcc, 30.0, (cfg.img_width, cfg.img_height))

    def out(self, y, names, frames):
        """
        Generate visual output
        Args:
            y: network result (list of samples)
            names: filenames for y, if empty: frames have to be provided
            frames: source frames, if empty: names have to be provided
        """
        if not names and not frames:
            raise Exception('at least frames or names have to be provided')
        # iterate over samples
        for i in range(len(y)):
            lanes = np.array(map_x_to_image(evaluate_predictions(y[i])))  # get x coordinates based on probabilities

            if frames:
                vis = frames[i]
            else:
                vis = cv2.imread(os.path.join(cfg.data_root, names[i]))

            if vis is None:
                raise Exception('failed to load frame')

            for i in range(lanes.shape[0]):  # iterate over lanes
                lane = lanes[i, :]
                if np.sum(lane != -2) > 2:  # If more than two points found for this lane
                    color = get_lane_color(i)
                    for j in range(lanes.shape[1]):
                        img_x = lane[j]
                        img_y = cfg.h_samples[j]
                        if img_x != -2:
                            if self.enable_line_mode:
                                if j > 0:
                                    cv2.line(vis, (lane[j - 1], cfg.h_samples[j - 1]), (img_x, img_y), color, 5)
                            else:
                                cv2.circle(vis, (img_x, img_y), 5, color, -1)
            if self.enable_live_video:
                cv2.imshow('video', vis)
                cv2.waitKey(1)
            if self.enable_video_export:
                self.vout.write(vis)
            if self.enable_image_export:
                out_path = os.path.join(
                    cfg.log_path,
                    f'{get_filename_date_string()}_out', names[i] if names else int(time.time()*1000000)
                )  # use current timestamp (nanoseconds) as fallback
                cv2.imwrite(out_path, vis)