if (typeof window.loaded_sessions == 'undefined') {
    window.loaded_sessions = {};
}

window.loaded_sessions.dreams = function () {
    let scale = 3200 / 33.87;

    let scene_1_1 = {
        question:
            '在阿瑟瑞斯基的研究中，一些被试在实验室里进入了睡眠。他们有时会处于快速眼动期，有时会处于非快速眼动期。现在研究者要叫醒被试了。应该叫醒处在什么睡眠阶段的被试呢？请你把代表“叫醒”的闹钟拖到被试的枕边。',
        layout: [
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-1/dreams/play_alarm.png',
                    [24.47, 6.92, 1.27, 1.46, scale],
                    true,
                    [
                        [15.44, 8.38, 1, 1, scale],
                        [20.78, 8.38, 1, 1, scale],
                    ],
                    true,
                ],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-1/dreams/play_alarm.png',
                    [24.47, 9.34, 1.27, 1.46, scale],
                    true,
                    [
                        [15.44, 8.38, 1, 1, scale],
                        [20.78, 8.38, 1, 1, scale],
                    ],
                    true,
                ],
            },
            {name: 'img', params: ['/assets/classic-studies-1/dreams/play_pad1.png', [6.77, 3.86, 20.32, 11.33, scale]]},
        ],
        correct_func: (components) => {
            return components[0].whereabout + components[1].whereabout == 1;
        },
    };

    let scene_1_2 = {
        question:
            '这位被试<b>在快速眼动期间被叫醒了</b>。当被问到是否做梦，以及梦的内容时，他更有可能怎样回答呢？请把相应的对话气泡拖放到他嘴边。',
        layout: [
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-1/dreams/dialog-no-memory.png',
                    [6.05, 2.96, 5, 3.75, scale],
                    true,
                    [[20.45, 6.26, 3, 3, scale, true]],
                    true,
                ],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-1/dreams/dialog-remember-dream.png',
                    [6.05, 7.48, 5, 3.75, scale],
                    true,
                    [[20.45, 6.26, 3, 3, scale, true]],
                    true,
                ],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-1/dreams/dialog-no-detail.png',
                    [6.05, 12, 5, 3.75, scale],
                    true,
                    [[20.45, 6.26, 3, 3, scale, true]],
                    true,
                ],
            },
            {name: 'img', params: ['/assets/classic-studies-1/dreams/play_sleepy_big.png', [14.61, 5.49, 4.66, 8.07, scale]]},
        ],
        correct_func: (components) => {
            return components[0].whereabout == -1 && components[1].whereabout == 0 && components[2].whereabout == -1;
        },
    };

    let scene_1_3 = {
        question:
            '这位被试<b>在非快速眼动期间被叫醒了</b>。当被问到是否做梦，以及梦的内容时，他更有可能怎样回答呢？请把相应的对话气泡拖放到他嘴边。',
        layout: [
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-1/dreams/dialog-no-memory.png',
                    [6.05, 2.96, 5, 3.75, scale],
                    true,
                    [[20.45, 6.26, 3, 3, scale, true]],
                    true,
                ],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-1/dreams/dialog-remember-dream.png',
                    [6.05, 7.48, 5, 3.75, scale],
                    true,
                    [[20.45, 6.26, 3, 3, scale, true]],
                    true,
                ],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-1/dreams/dialog-no-detail.png',
                    [6.05, 12, 5, 3.75, scale],
                    true,
                    [[20.45, 6.26, 3, 3, scale, true]],
                    true,
                ],
            },
            {name: 'img', params: ['/assets/classic-studies-1/dreams/play_sleepy_big.png', [14.61, 5.49, 4.66, 8.07, scale]]},
        ],
        correct_func: (components) => {
            return components[0].whereabout == 0 && components[1].whereabout == -1 && components[2].whereabout == -1;
        },
    };

    let level1 = {
        position: [9.2, 8.53, 2, 2, scale],
        paper: '/assets/classic-studies-1/dreams/doc-5-1.jpg',
        prompt: '欢迎来到睡眠与梦的章节！如果你完成了这部分的阅读，你该知道阿瑟瑞斯基的研究是关于唤醒与询问被试的。请选择<b>闹钟和对话气泡</b>吧。',
        objects: [
            '/assets/classic-studies-1/dreams/stage-non-rem.png',
            '/assets/classic-studies-1/dreams/dialog-no-memory.png',
            '/assets/classic-studies-1/dreams/dialog-remember-dream.png',
            '/assets/classic-studies-1/dreams/stage-deprive-rem.png',
            '/assets/classic-studies-1/dreams/play_alarm.png',
            '/assets/classic-studies-1/dreams/market_moon.png',
            '/assets/classic-studies-1/dreams/stage-rem.png',
            '/assets/classic-studies-1/dreams/dialog-no-detail.png',
            '/assets/classic-studies-1/dreams/stage-baseline.png',
        ],
        correct: [1, 2, 4, 7],
        scenes: [scene_1_1, scene_1_2, scene_1_3],
    };

    let scene_2_1 = {
        question: '在REM睡眠剥夺实验中，被试要经过好几个阶段的实验。你还记的这些实验都有哪些吗？它们的顺序是什么样的？',
        layout: [
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-1/dreams/stage-rem.png',
                    [8.47, 5.25, 3.2, 2.4, scale],
                    true,
                    [
                        [5.27, 12.55, 3.2, 2.4, scale],
                        [9.3, 12.55, 3.2, 2.4, scale],
                        [13.33, 12.55, 3.2, 2.4, scale],
                        [17.36, 12.55, 3.2, 2.4, scale],
                        [21.39, 12.55, 3.2, 2.4, scale],
                        [25.42, 12.55, 3.2, 2.4, scale],
                    ],
                    true,
                ],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-1/dreams/stage-baseline.png',
                    [13.25, 5.25, 3.2, 2.4, scale],
                    true,
                    [
                        [5.27, 12.55, 3.2, 2.4, scale],
                        [9.3, 12.55, 3.2, 2.4, scale],
                        [13.33, 12.55, 3.2, 2.4, scale],
                        [17.36, 12.55, 3.2, 2.4, scale],
                        [21.39, 12.55, 3.2, 2.4, scale],
                        [25.42, 12.55, 3.2, 2.4, scale],
                    ],
                    true,
                ],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-1/dreams/stage-recover-non-rem.png',
                    [18.04, 5.25, 3.2, 2.4, scale],
                    true,
                    [
                        [5.27, 12.55, 3.2, 2.4, scale],
                        [9.3, 12.55, 3.2, 2.4, scale],
                        [13.33, 12.55, 3.2, 2.4, scale],
                        [17.36, 12.55, 3.2, 2.4, scale],
                        [21.39, 12.55, 3.2, 2.4, scale],
                        [25.42, 12.55, 3.2, 2.4, scale],
                    ],
                    true,
                ],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-1/dreams/stage-non-rem.png',
                    [22.84, 5.25, 3.2, 2.4, scale],
                    true,
                    [
                        [5.27, 12.55, 3.2, 2.4, scale],
                        [9.3, 12.55, 3.2, 2.4, scale],
                        [13.33, 12.55, 3.2, 2.4, scale],
                        [17.36, 12.55, 3.2, 2.4, scale],
                        [21.39, 12.55, 3.2, 2.4, scale],
                        [25.42, 12.55, 3.2, 2.4, scale],
                    ],
                    true,
                ],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-1/dreams/stage-days-off.png',
                    [8.47, 8.45, 3.2, 2.4, scale],
                    true,
                    [
                        [5.27, 12.55, 3.2, 2.4, scale],
                        [9.3, 12.55, 3.2, 2.4, scale],
                        [13.33, 12.55, 3.2, 2.4, scale],
                        [17.36, 12.55, 3.2, 2.4, scale],
                        [21.39, 12.55, 3.2, 2.4, scale],
                        [25.42, 12.55, 3.2, 2.4, scale],
                    ],
                    true,
                ],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-1/dreams/stage-recover-rem.png',
                    [13.25, 8.45, 3.2, 2.4, scale],
                    true,
                    [
                        [5.27, 12.55, 3.2, 2.4, scale],
                        [9.3, 12.55, 3.2, 2.4, scale],
                        [13.33, 12.55, 3.2, 2.4, scale],
                        [17.36, 12.55, 3.2, 2.4, scale],
                        [21.39, 12.55, 3.2, 2.4, scale],
                        [25.42, 12.55, 3.2, 2.4, scale],
                    ],
                    true,
                ],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-1/dreams/stage-deprive-non-rem.png',
                    [18.04, 8.45, 3.2, 2.4, scale],
                    true,
                    [
                        [5.27, 12.55, 3.2, 2.4, scale],
                        [9.3, 12.55, 3.2, 2.4, scale],
                        [13.33, 12.55, 3.2, 2.4, scale],
                        [17.36, 12.55, 3.2, 2.4, scale],
                        [21.39, 12.55, 3.2, 2.4, scale],
                        [25.42, 12.55, 3.2, 2.4, scale],
                    ],
                    true,
                ],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-1/dreams/stage-deprive-rem.png',
                    [22.84, 8.45, 3.2, 2.4, scale],
                    true,
                    [
                        [5.27, 12.55, 3.2, 2.4, scale],
                        [9.3, 12.55, 3.2, 2.4, scale],
                        [13.33, 12.55, 3.2, 2.4, scale],
                        [17.36, 12.55, 3.2, 2.4, scale],
                        [21.39, 12.55, 3.2, 2.4, scale],
                        [25.42, 12.55, 3.2, 2.4, scale],
                    ],
                    true,
                ],
            },
        ],
        correct_func: (components) => {
            let order = [-1, 0, 5, -1, 3, 2, 4, 1];
            return components.every((value, index) => value.whereabout == order[index]);
        },
    };

    let scene_2_2 = {
        question:
            '在REM剥夺研究中，一些被试在实验室里进入了睡眠。他们有时会处于快速眼动期，有时会处于非快速眼动期。现在是<b>REM剥夺阶段</b>，研究者要叫醒被试了。应该叫醒处在什么睡眠阶段的被试呢？请你把代表“叫醒”的闹钟拖到被试的枕边。',
        layout: [
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-1/dreams/play_alarm.png',
                    [24.47, 6.92, 1.27, 1.46, scale],
                    true,
                    [
                        [15.44, 8.38, 1, 1, scale],
                        [20.78, 8.38, 1, 1, scale],
                    ],
                    true,
                ],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-1/dreams/play_alarm.png',
                    [24.47, 9.34, 1.27, 1.46, scale],
                    true,
                    [
                        [15.44, 8.38, 1, 1, scale],
                        [20.78, 8.38, 1, 1, scale],
                    ],
                    true,
                ],
            },
            {name: 'img', params: ['/assets/classic-studies-1/dreams/play_pad1.png', [6.77, 3.86, 20.32, 11.33, scale]]},
        ],
        correct_func: (components) => {
            return components[0].whereabout + components[1].whereabout == -1;
        },
    };

    let scene_2_3 = {
        question:
            '在REM剥夺研究中，一些被试在实验室里进入了睡眠。他们有时会处于快速眼动期，有时会处于非快速眼动期。现在是<b>非REM剥夺阶段</b>，研究者要叫醒被试了。应该叫醒处在什么睡眠阶段的被试呢？请你把代表“叫醒”的闹钟拖到被试的枕边。',
        layout: [
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-1/dreams/play_alarm.png',
                    [24.47, 6.92, 1.27, 1.46, scale],
                    true,
                    [
                        [15.44, 8.38, 1, 1, scale],
                        [20.78, 8.38, 1, 1, scale],
                    ],
                    true,
                ],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-1/dreams/play_alarm.png',
                    [24.47, 9.34, 1.27, 1.46, scale],
                    true,
                    [
                        [15.44, 8.38, 1, 1, scale],
                        [20.78, 8.38, 1, 1, scale],
                    ],
                    true,
                ],
            },
            {name: 'img', params: ['/assets/classic-studies-1/dreams/play_pad1.png', [6.77, 3.86, 20.32, 11.33, scale]]},
        ],
        correct_func: (components) => {
            return (
                (components[0].whereabout == -1 && components[1].whereabout == 1) ||
                (components[1].whereabout == -1 && components[0].whereabout == 1)
            );
        },
    };

    let scene_2_4 = {
        question:
            '在睡眠剥夺阶段，一位被试找到了主试，并询问<b>自己是否可以在来之前打个盹</b>。如果你是主试，你的回答会是：',
        layout: [
            {
                name: 'single-select',
                params: [
                    [[6.05, 2.96, 5, 3.75, scale], '/assets/classic-studies-1/dreams/command-sleep.png'],
                    [[6.05, 7.48, 5, 3.75, scale], '/assets/classic-studies-1/dreams/command-no-sleep-true-reason.png'],
                    [[6.05, 12, 5, 3.75, scale], '/assets/classic-studies-1/dreams/command-no-sleep-false-reason.png'],
                ],
            },
            {name: 'img', params: ['/assets/classic-studies-1/dreams/play_sleepy_big.png', [14.61, 5.49, 4.66, 8.07, scale]]},
        ],
        correct_func: (components) => {
            return components[0].selected == 1;
        },
    };

    let scene_2_5 = {
        question:
            '在REM剥夺实验中，研究者记录了REM剥夺阶段几位被试接受睡眠剥夺的夜晚数量。现在到了剥夺非REM睡眠的阶段了。你知道每名被试应该接受多少晚的非REM 睡眠剥夺吗？',
        layout: [
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-1/dreams/play_moon3.png',
                    [22.64, 7.03, 1.6, 1.2, scale],
                    true,
                    [
                        [18.74, 6.05, 2, 2, scale],
                        [18.74, 9.05, 2, 2, scale],
                        [18.74, 12.05, 2, 2, scale],
                    ],
                    true,
                ],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-1/dreams/play_moon4.png',
                    [24.63, 7.03, 1.6, 1.2, scale],
                    true,
                    [
                        [18.74, 6.05, 2, 2, scale],
                        [18.74, 9.05, 2, 2, scale],
                        [18.74, 12.05, 2, 2, scale],
                    ],
                    true,
                ],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-1/dreams/play_moon5.png',
                    [22.64, 9.18, 1.6, 1.2, scale],
                    true,
                    [
                        [18.74, 6.05, 2, 2, scale],
                        [18.74, 9.05, 2, 2, scale],
                        [18.74, 12.05, 2, 2, scale],
                    ],
                    true,
                ],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-1/dreams/play_moon6.png',
                    [24.63, 9.18, 1.6, 1.2, scale],
                    true,
                    [
                        [18.74, 6.05, 2, 2, scale],
                        [18.74, 9.05, 2, 2, scale],
                        [18.74, 12.05, 2, 2, scale],
                    ],
                    true,
                ],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-1/dreams/play_moon7.png',
                    [22.64, 11.44, 1.6, 1.2, scale],
                    true,
                    [
                        [18.74, 6.05, 2, 2, scale],
                        [18.74, 9.05, 2, 2, scale],
                        [18.74, 12.05, 2, 2, scale],
                    ],
                    true,
                ],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-1/dreams/play_moon8.png',
                    [24.63, 11.44, 1.6, 1.2, scale],
                    true,
                    [
                        [18.74, 6.05, 2, 2, scale],
                        [18.74, 9.05, 2, 2, scale],
                        [18.74, 12.05, 2, 2, scale],
                    ],
                    true,
                ],
            },
            {name: 'img', params: ['/assets/classic-studies-1/dreams/play_pad2.png', [6.72, 3.81, 20.43, 11.43, scale]]},
        ],
        correct_func: (components) => {
            let correct = [-1, 1, 0, -1, 2, -1];
            return components.slice(0, 6).every((value, index) => value.whereabout == correct[index]);
        },
    };

    let scene_2_6 = {
        question:
            '在REM剥夺实验中，研究者记录了REM剥夺阶段几位被试每晚被唤醒的次数。现在到了剥夺非REM睡眠的阶段了。在第一夜（以及之后的夜晚），研究者需要规划每位被试在非REM睡眠中被叫醒的次数。你知道每名被试需要被叫醒的次数吗？',
        layout: [
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-1/dreams/play_alarm7.png',
                    [22.64, 7.03, 1.6, 1.2, scale],
                    true,
                    [
                        [18.74, 6.05, 2, 2, scale],
                        [18.74, 9.05, 2, 2, scale],
                        [18.74, 12.05, 2, 2, scale],
                    ],
                    true,
                ],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-1/dreams/play_alarm8.png',
                    [24.63, 7.03, 1.6, 1.2, scale],
                    true,
                    [
                        [18.74, 6.05, 2, 2, scale],
                        [18.74, 9.05, 2, 2, scale],
                        [18.74, 12.05, 2, 2, scale],
                    ],
                    true,
                ],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-1/dreams/play_alarm9.png',
                    [22.64, 9.18, 1.6, 1.2, scale],
                    true,
                    [
                        [18.74, 6.05, 2, 2, scale],
                        [18.74, 9.05, 2, 2, scale],
                        [18.74, 12.05, 2, 2, scale],
                    ],
                    true,
                ],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-1/dreams/play_alarm11.png',
                    [24.63, 9.18, 1.6, 1.2, scale],
                    true,
                    [
                        [18.74, 6.05, 2, 2, scale],
                        [18.74, 9.05, 2, 2, scale],
                        [18.74, 12.05, 2, 2, scale],
                    ],
                    true,
                ],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-1/dreams/play_alarm12.png',
                    [22.64, 11.44, 1.6, 1.2, scale],
                    true,
                    [
                        [18.74, 6.05, 2, 2, scale],
                        [18.74, 9.05, 2, 2, scale],
                        [18.74, 12.05, 2, 2, scale],
                    ],
                    true,
                ],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-1/dreams/play_alarm13.png',
                    [24.63, 11.44, 1.6, 1.2, scale],
                    true,
                    [
                        [18.74, 6.05, 2, 2, scale],
                        [18.74, 9.05, 2, 2, scale],
                        [18.74, 12.05, 2, 2, scale],
                    ],
                    true,
                ],
            },
            {name: 'img', params: ['/assets/classic-studies-1/dreams/play_pad3.png', [6.72, 3.81, 20.43, 11.43, scale]]},
        ],
        correct_func: (components) => {
            let correct = [-1, 0, -1, 2, -1, 1];
            return components.slice(0, 6).every((value, index) => value.whereabout == correct[index]);
        },
    };

    let level2 = {
        position: [17.51, 8.54, 2, 2, scale],
        paper: '/assets/classic-studies-1/dreams/doc-5-2.jpg',
        prompt: '在这个部分，我们主要关注迪蒙特做梦剥夺研究的过程。请选择<b>“研究阶段”</b>；此外，<b>闹钟、月亮和对话气泡</b>也是必不可少的！',
        objects: [
            '/assets/classic-studies-1/dreams/market_moon.png',
            '/assets/classic-studies-1/dreams/command-no-sleep-false-reason.png',
            '/assets/classic-studies-1/dreams/command-sleep.png',
            '/assets/classic-studies-1/dreams/market2_4.png',
            '/assets/classic-studies-1/dreams/market2_5.png',
            '/assets/classic-studies-1/dreams/play_alarm.png',
            '/assets/classic-studies-1/dreams/command-no-sleep-true-reason.png',
            '/assets/classic-studies-1/dreams/market_sleeping.png',
            '/assets/classic-studies-1/dreams/play_sleepy_big.png',
        ],
        correct: [0, 1, 2, 4, 5, 6],
        scenes: [scene_2_1, scene_2_2, scene_2_3, scene_2_4, scene_2_5, scene_2_6],
    };

    let scene_3_1 = {
        question: '这是做梦剥夺研究的实验结果表格的一部分。表格里两个重要的部分被隐去了。你能拖动屏幕右侧的<b>两个</b>图案，补全表格中箭头所指的被隐去的部分吗？',
        layout: [
            {name: 'drag', params: ['/assets/classic-studies-1/dreams/market_sleeping.png', [24.74, 5.57, 1, 1, scale], true, [[14.35, 6.9, 2, 0.92, scale]], true]},
            {name: 'drag', params: ['/assets/classic-studies-1/dreams/market_moon.png', [24.74, 6.95, 1, 1, scale], true, [[14.35, 6.9, 2, 0.92, scale]], true]},
            {name: 'drag', params: ['/assets/classic-studies-1/dreams/play_alarm.png', [24.74, 8.2, 1, 1, scale], true, [[14.35, 6.9, 2, 0.92, scale]], true]},
            {name: 'drag', params: ['/assets/classic-studies-1/dreams/market_rem.png', [24.74, 9.32, 1, 1, scale], true, [[14.35, 6.9, 2, 0.92, scale]], true]},
            {name: 'drag', params: ['/assets/classic-studies-1/dreams/market_norem.png', [24.74, 10.46, 1, 1, scale], true, [[14.35, 6.9, 2, 0.92, scale]], true]},
            {name: 'drag', params: ['/assets/classic-studies-1/dreams/stage-recover-non-rem.png', [22.37, 11.68, 2, 1.5, scale], true, [[14.35, 7.86, 2, 0.92, scale]], true]},
            {name: 'drag', params: ['/assets/classic-studies-1/dreams/stage-deprive-non-rem.png', [24.76, 11.68, 2, 1.5, scale], true, [[14.35, 7.86, 2, 0.92, scale]], true]},
            {name: 'drag', params: ['/assets/classic-studies-1/dreams/stage-recover-rem.png', [22.37, 13.33, 2, 1.5, scale], true, [[14.35, 7.86, 2, 0.92, scale]], true]},
            {name: 'drag', params: ['/assets/classic-studies-1/dreams/stage-deprive-rem.png', [24.76, 13.33, 2, 1.5, scale], true, [[14.35, 7.86, 2, 0.92, scale]], true]},
            {name: 'img', params: ['/assets/classic-studies-1/dreams/play_pad4.png', [6.71, 3.81, 20.45, 11.43, scale]]}
        ],
        correct_func: (components) => {
            let correct = [-1, -1, 0, -1, -1, -1, -1, -1, 0];
            return components.slice(0, 9).every((value, index) => value.whereabout == correct[index]);
        }
    }

    let scene_3_2 = {
        question: '这是做梦剥夺研究的实验结果表格的一部分。表格里两个重要的部分被隐去了。你能拖动屏幕右侧的<b>两个</b>图案，补全表格中箭头所指的被隐去的部分吗？',
        layout: [
            {name: 'drag', params: ['/assets/classic-studies-1/dreams/market_sleeping.png', [24.74, 5.57, 1, 1, scale], true, [[17.19, 7.31, 2, 0.92, scale]], true]},
            {name: 'drag', params: ['/assets/classic-studies-1/dreams/market_moon.png', [24.74, 6.95, 1, 1, scale], true, [[17.19, 7.31, 2, 0.92, scale]], true]},
            {name: 'drag', params: ['/assets/classic-studies-1/dreams/play_alarm.png', [24.74, 8.2, 1, 1, scale], true, [[17.19, 7.31, 2, 0.92, scale]], true]},
            {name: 'drag', params: ['/assets/classic-studies-1/dreams/market_rem.png', [24.74, 9.32, 1, 1, scale], true, [[17.19, 7.31, 2, 0.92, scale]], true]},
            {name: 'drag', params: ['/assets/classic-studies-1/dreams/market_norem.png', [24.74, 10.46, 1, 1, scale], true, [[17.19, 7.31, 2, 0.92, scale]], true]},
            {name: 'drag', params: ['/assets/classic-studies-1/dreams/stage-recover-non-rem.png', [22.37, 11.68, 2, 1.5, scale], true, [[17.19, 8.28, 2, 0.92, scale]], true]},
            {name: 'drag', params: ['/assets/classic-studies-1/dreams/stage-deprive-non-rem.png', [24.76, 11.68, 2, 1.5, scale], true, [[17.19, 8.28, 2, 0.92, scale]], true]},
            {name: 'drag', params: ['/assets/classic-studies-1/dreams/stage-recover-rem.png', [22.37, 13.33, 2, 1.5, scale], true, [[17.19, 8.28, 2, 0.92, scale]], true]},
            {name: 'drag', params: ['/assets/classic-studies-1/dreams/stage-deprive-rem.png', [24.76, 13.33, 2, 1.5, scale], true, [[17.19, 8.28, 2, 0.92, scale]], true]},
            {name: 'img', params: ['/assets/classic-studies-1/dreams/play_pad5.png', [6.64, 3.7, 20.59, 11.64, scale]]}
        ],
        correct_func: (components) => {
            let correct = [-1, -1, -1, 0, -1, -1, -1, 0, -1];
            return components.slice(0, 9).every((value, index) => value.whereabout == correct[index]);
        }
    }

    let level3 = {
        position: [25.82, 8.54, 2, 2, scale],
        paper: '/assets/classic-studies-1/dreams/doc-5-3.jpg',
        prompt: '加油！这是最后一部分了。请选择<b>所有东西</b>，然后让我们来看看做梦剥夺研究能得出什么结论吧！',
        objects: [
            '/assets/classic-studies-1/dreams/stage-recover-non-rem.png',
            '/assets/classic-studies-1/dreams/stage-deprive-non-rem.png',
            '/assets/classic-studies-1/dreams/market_sleeping.png',
            '/assets/classic-studies-1/dreams/market_norem.png',
            '/assets/classic-studies-1/dreams/market_moon.png',
            '/assets/classic-studies-1/dreams/stage-deprive-rem.png',
            '/assets/classic-studies-1/dreams/play_alarm.png',
            '/assets/classic-studies-1/dreams/stage-recover-rem.png',
            '/assets/classic-studies-1/dreams/market_rem.png',
        ],
        correct: [0, 1, 2, 3, 4, 5, 6, 7, 8],
        scenes: [scene_3_1, scene_3_2]
    };

    return {
        map: '/assets/classic-studies-1/dreams/house5_bg.jpg',
        background: '/assets/classic-studies-1/dreams/house5_bg.jpg',
        marker: '/assets/classic-studies-1/dreams/room_sleepingbaby.png',
        levels: [level1, level2, level3],
    };
};
