if (typeof window.loaded_sessions == 'undefined') {
    window.loaded_sessions = {};
}

window.loaded_sessions.memory = function () {
    let scale = 3200 / 33.87;

    let equals = (arr1, arr2) => arr1.every((value, index) => value.whereabout === arr2[index]);

    let scene_1_1 = {
        question:
            '这是一处街道的拐角，现在正在拍摄研究一中使用的“车祸” 视频。请你把视频中出现的事物拖放到相应的位置吧。',
        layout: [
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-2/memory/stop-sign.png',
                    [24.89, 3.53, 4, 3, scale],
                    true,
                    [
                        [8.04, 10.3, 2, 2, scale],
                        [13.11, 12.2, 2, 2, scale],
                    ],
                    true,
                ],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-2/memory/car.png',
                    [24.89, 7.69, 4, 3, scale],
                    true,
                    [
                        [8.04, 10.3, 2, 2, scale],
                        [13.11, 12.2, 2, 2, scale],
                    ],
                    true,
                ],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-2/memory/barn.png',
                    [24.89, 11.85, 4, 3, scale],
                    true,
                    [
                        [8.04, 10.3, 2, 2, scale],
                        [13.11, 12.2, 2, 2, scale],
                    ],
                    true,
                ],
            },
            {
                name: 'img',
                params: ['/assets/classic-studies-2/memory/game1_1_1.png', [5.29, 3.97, 17.64, 11.01, scale]],
            },
        ],
        correct_func: (components) => {
            return equals(components.slice(0, 3), [0, 1, -1]);
        },
    };

    let scene_1_2 = {
        question: '观看了视频后，研究者为两组被试分发了不同的问卷。这些问卷缺了一部分，你可以把它们补全吗？',
        layout: [
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-2/memory/text-stop-sign.png',
                    [25.94, 4.01, 2, 1.5, scale],
                    true,
                    [
                        [7.59, 4.4, 2, 1.5, scale],
                        [9.64, 4.4, 2, 1.5, scale],
                        [10.73, 11, 2, 1.5, scale],
                        [17.92, 4.4, 2, 1.5, scale],
                        [20.19, 11, 2, 1.5, scale],
                    ],
                    true,
                ],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-2/memory/text-stop-sign.png',
                    [25.94, 5.9, 2, 1.5, scale],
                    true,
                    [
                        [7.59, 4.4, 2, 1.5, scale],
                        [9.64, 4.4, 2, 1.5, scale],
                        [10.73, 11, 2, 1.5, scale],
                        [17.92, 4.4, 2, 1.5, scale],
                        [20.19, 11, 2, 1.5, scale],
                    ],
                    true,
                ],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-2/memory/text-stop-sign.png',
                    [25.94, 7.8, 2, 1.5, scale],
                    true,
                    [
                        [7.59, 4.4, 2, 1.5, scale],
                        [9.64, 4.4, 2, 1.5, scale],
                        [10.73, 11, 2, 1.5, scale],
                        [17.92, 4.4, 2, 1.5, scale],
                        [20.19, 11, 2, 1.5, scale],
                    ],
                    true,
                ],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-2/memory/text-pass.png',
                    [25.94, 9.69, 2, 1.5, scale],
                    true,
                    [
                        [7.59, 4.4, 2, 1.5, scale],
                        [9.64, 4.4, 2, 1.5, scale],
                        [10.73, 11, 2, 1.5, scale],
                        [17.92, 4.4, 2, 1.5, scale],
                        [20.19, 11, 2, 1.5, scale],
                    ],
                    true,
                ],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-2/memory/text-turn-right.png',
                    [25.94, 11.59, 2, 1.5, scale],
                    true,
                    [
                        [7.59, 4.4, 2, 1.5, scale],
                        [9.64, 4.4, 2, 1.5, scale],
                        [10.73, 11, 2, 1.5, scale],
                        [17.92, 4.4, 2, 1.5, scale],
                        [20.19, 11, 2, 1.5, scale],
                    ],
                    true,
                ],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-2/memory/text-car.png',
                    [25.94, 13.48, 2, 1.5, scale],
                    true,
                    [
                        [7.59, 4.4, 2, 1.5, scale],
                        [9.64, 4.4, 2, 1.5, scale],
                        [10.73, 11, 2, 1.5, scale],
                        [17.92, 4.4, 2, 1.5, scale],
                        [20.19, 11, 2, 1.5, scale],
                    ],
                    true,
                ],
            },
            {name: 'img', params: ['/assets/classic-studies-2/memory/game1_1_2.png', [5.48, 3.59, 8.82, 9.95, scale]]},
            {name: 'img', params: ['/assets/classic-studies-2/memory/game1_1_2.png', [14.85, 3.59, 8.82, 9.95, scale]]},
        ],
        correct_func: (components) => {
            return (
                equals(components.slice(3, 6), [0, 3, -1]) &&
                equals(
                    components.slice(0, 3).sort((a, b) => a.whereabout - b.whereabout),
                    [1, 2, 4]
                )
            );
        },
    };

    let scene_1_3 = {
        question: '当被问到是否见过一个停车标志时，哪一组的被试更可能回答见过？请把停车标志拖到相应的问卷下吧。',
        layout: [
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-2/memory/stop-sign.png',
                    [25.94, 7.8, 2, 1.5, scale],
                    true,
                    [
                        [8.64, 13.53, 2, 2, scale],
                        [18.19, 13.53, 2, 2, scale],
                    ],
                    true,
                ],
            },
            {
                name: 'img',
                params: ['/assets/classic-studies-2/memory/game1_1_3_1.png', [5.48, 3.59, 8.82, 9.95, scale]],
            },
            {
                name: 'img',
                params: ['/assets/classic-studies-2/memory/game1_1_3_2.png', [14.85, 3.59, 8.82, 9.95, scale]],
            },
        ],
        correct_func: (components) => {
            return components[0].whereabout == 1;
        },
    };

    let level1 = {
        position: [6.72, 8.53, 2, 2, scale],
        paper: '/assets/classic-studies-2/memory/doc-5-1.jpg',
        prompt: '欢迎来到新的章节。请选择<b>所有的物品</b>。',
        objects: [
            '/assets/classic-studies-2/memory/text-car.png',
            '/assets/classic-studies-2/memory/text-stop-sign.png',
            '/assets/classic-studies-2/memory/car.png',
            '/assets/classic-studies-2/memory/text-pass.png',
            '/assets/classic-studies-2/memory/stop-sign.png',
            '/assets/classic-studies-2/memory/text-stop-sign.png',
            '/assets/classic-studies-2/memory/text-stop-sign.png',
            '/assets/classic-studies-2/memory/text-turn-right.png',
            '/assets/classic-studies-2/memory/barn.png',
        ],
        correct: [0, 1, 2, 3, 4, 5, 6, 7, 8],
        scenes: [scene_1_1, scene_1_2],
    };

    let scene_2_1 = {
        question:
            '这里是《学生革命日记》的拍摄现场。你知道一共要请到几名学生参与演出吗？请把正确数量的学生拖放到教室里。',
        layout: [
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-2/memory/person.png',
                    [18.66, 3.65, 4, 3, scale],
                    false,
                    [[10.35, 7.53, 6, 4, scale]],
                ],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-2/memory/person.png',
                    [22.78, 3.65, 4, 3, scale],
                    false,
                    [[10.35, 7.53, 6, 4, scale]],
                ],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-2/memory/person.png',
                    [26.9, 3.65, 4, 3, scale],
                    false,
                    [[10.35, 7.53, 6, 4, scale]],
                ],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-2/memory/person.png',
                    [18.66, 6.84, 4, 3, scale],
                    false,
                    [[10.35, 7.53, 6, 4, scale]],
                ],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-2/memory/person.png',
                    [22.78, 6.84, 4, 3, scale],
                    false,
                    [[10.35, 7.53, 6, 4, scale]],
                ],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-2/memory/person.png',
                    [26.9, 6.84, 4, 3, scale],
                    false,
                    [[10.35, 7.53, 6, 4, scale]],
                ],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-2/memory/person.png',
                    [18.66, 10.03, 4, 3, scale],
                    false,
                    [[10.35, 7.53, 6, 4, scale]],
                ],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-2/memory/person.png',
                    [22.78, 10.03, 4, 3, scale],
                    false,
                    [[10.35, 7.53, 6, 4, scale]],
                ],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-2/memory/person.png',
                    [26.9, 10.03, 4, 3, scale],
                    false,
                    [[10.35, 7.53, 6, 4, scale]],
                ],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-2/memory/person.png',
                    [18.66, 13.22, 4, 3, scale],
                    false,
                    [[10.35, 7.53, 6, 4, scale]],
                ],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-2/memory/person.png',
                    [22.78, 13.22, 4, 3, scale],
                    false,
                    [[10.35, 7.53, 6, 4, scale]],
                ],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-2/memory/person.png',
                    [26.9, 13.22, 4, 3, scale],
                    false,
                    [[10.35, 7.53, 6, 4, scale]],
                ],
            },
            {name: 'img', params: ['/assets/classic-studies-2/memory/game1_2_1.png', [6.42, 4.89, 12, 8.44, scale]]},
        ],
        correct_func: (components) => {
            return components.slice(0, 12).filter((value) => value.whereabout == 0).length == 8;
        },
    };

    let scene_2_2 = {
        question:
            '看完视频后被试需要填写一份问卷。问卷中的一道题目包含对视频内人数的错误假设。你可以补全问卷的内容吗？',
        layout: [
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-2/memory/text-one.png',
                    [25.94, 5.9, 2, 1.5, scale],
                    true,
                    [
                        [6.23, 6.49, 2, 1.5, scale],
                        [15.56, 6.49, 2, 1.5, scale],
                    ],
                    true,
                ],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-2/memory/text-four.png',
                    [25.94, 7.8, 2, 1.5, scale],
                    true,
                    [
                        [6.23, 6.49, 2, 1.5, scale],
                        [15.56, 6.49, 2, 1.5, scale],
                    ],
                    true,
                ],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-2/memory/text-eight.png',
                    [25.94, 9.69, 2, 1.5, scale],
                    true,
                    [
                        [6.23, 6.49, 2, 1.5, scale],
                        [15.56, 6.49, 2, 1.5, scale],
                    ],
                    true,
                ],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-2/memory/text-twelve.png',
                    [25.94, 11.59, 2, 1.5, scale],
                    true,
                    [
                        [6.23, 6.49, 2, 1.5, scale],
                        [15.56, 6.49, 2, 1.5, scale],
                    ],
                    true,
                ],
            },
            {name: 'img', params: ['/assets/classic-studies-2/memory/game1_2_2.png', [5.48, 3.59, 8.82, 9.95, scale]]},
            {name: 'img', params: ['/assets/classic-studies-2/memory/game1_2_2.png', [14.85, 3.59, 8.82, 9.95, scale]]},
        ],
        correct_func: (components) => {
            return equals(components.slice(0, 4), [-1, 0, -1, 1]) || equals(components.slice(0, 4), [-1, 1, -1, 0]);
        },
    };

    let scene_2_3 = {
        question: '第一份问卷做完了。第二份问卷该在多久之后填写呢？请帮助被试安排他们做实验的时间吧。',
        layout: [
            {
                name: 'single-select',
                params: [
                    [[5.8, 11.32, 4.23, 3.18, scale], '/assets/classic-studies-2/memory/text-half-hour.png'],
                    [[11.6, 11.32, 4.23, 3.18, scale], '/assets/classic-studies-2/memory/text-week.png'],
                    [[18.04, 11.32, 4.23, 3.18, scale], '/assets/classic-studies-2/memory/text-month.png'],
                    [[23.83, 11.32, 4.23, 3.18, scale], '/assets/classic-studies-2/memory/text-year.png'],
                ],
            },
            {name: 'img', params: ['/assets/classic-studies-2/memory/game1_2_3_1.png', [13.38, 2.96, 7.09, 8, scale]]},
        ],
        correct_func: (components) => {
            return components[0].selected == 1;
        },
    };

    let scene_2_4 = {
        question:
            '在第一份问卷中包含的错误假设会对示威者人数的回忆产生什么影响？请把被试更可能估计的人数拖放到相应的错误假设下。',
        layout: [
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-2/memory/game1_2_4_4.png',
                    [23.21, 4.29, 5.01, 3.88, scale],
                    true,
                    [
                        [6.43, 11.77, 4, 3, scale],
                        [15.09, 11.77, 4, 3, scale],
                    ],
                    true,
                ],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-2/memory/game1_2_4_3.png',
                    [23.21, 9.83, 5.79, 3.88, scale],
                    true,
                    [
                        [6.43, 11.77, 4, 3, scale],
                        [15.09, 11.77, 4, 3, scale],
                    ],
                    true,
                ],
            },
            {name: 'img', params: ['/assets/classic-studies-2/memory/game1_2_4_1.png', [5.74, 4.09, 6, 6.77, scale]]},
            {name: 'img', params: ['/assets/classic-studies-2/memory/game1_2_4_2.png', [13.93, 4.09, 6, 6.77, scale]]},
        ],
        correct_func: (components) => {
            return components[0].whereabout == 1 && components[1].whereabout == 0;
        },
    };

    let level2 = {
        position: [12.86, 8.57, 2, 2, scale],
        paper: '/assets/classic-studies-2/memory/doc-5-2.jpg',
        prompt: '欢迎来到第二关。你还记得研究二吗？它和研究一有什么不同？请选择<b>纸片人和所有的词汇</b>。',
        objects: [
            '/assets/classic-studies-2/memory/text-year.png',
            '/assets/classic-studies-2/memory/text-four.png',
            '/assets/classic-studies-2/memory/text-one.png',
            '/assets/classic-studies-2/memory/text-twelve.png',
            '/assets/classic-studies-2/memory/person.png',
            '/assets/classic-studies-2/memory/text-week.png',
            '/assets/classic-studies-2/memory/text-half-hour.png',
            '/assets/classic-studies-2/memory/text-month.png',
            '/assets/classic-studies-2/memory/text-eight.png',
        ],
        correct: [0, 1, 2, 3, 4, 5, 6, 7, 8],
        scenes: [scene_2_1, scene_2_2, scene_2_3, scene_2_4],
    };

    let scene_3_1 = {
        question: '照例，我们先来拍摄一段小汽车在乡间公路行驶的视频吧。请把应该出现在视频中的物品拖放到相应的位置。',
        layout: [
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-2/memory/stop-sign.png',
                    [24.89, 3.53, 4, 3, scale],
                    true,
                    [
                        [11.58, 7.19, 2, 2, scale],
                        [6.71, 10.85, 2, 2, scale],
                    ],
                    true,
                ],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-2/memory/car-white.png',
                    [24.89, 7.69, 4, 3, scale],
                    true,
                    [
                        [11.58, 7.19, 2, 2, scale],
                        [6.71, 10.85, 2, 2, scale],
                    ],
                    true,
                ],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-2/memory/barn.png',
                    [24.89, 11.85, 4, 3, scale],
                    true,
                    [
                        [11.58, 7.19, 2, 2, scale],
                        [6.71, 10.85, 2, 2, scale],
                    ],
                    true,
                ],
            },
            {name: 'img', params: ['/assets/classic-studies-2/memory/game1_3_1.png', [4.97, 3.53, 15.98, 12, scale]]},
        ],
        correct_func: (components) => {
            return equals(components.slice(0, 3), [-1, 1, -1]);
        },
    };

    let scene_3_2 = {
        question: '看过视频后，被试需要完成一份问卷。问卷中的关键问题时什么？请你补全关键问题的内容。',
        layout: [
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-2/memory/text-stop-sign.png',
                    [25.53, 6.05, 2, 1.5, scale],
                    true,
                    [[11.13, 6.54, 2, 1.5, scale]],
                    true,
                ],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-2/memory/text-barn.png',
                    [25.53, 8, 2, 1.5, scale],
                    true,
                    [[11.13, 6.54, 2, 1.5, scale]],
                    true,
                ],
            },
            {name: 'img', params: ['/assets/classic-studies-2/memory/game1_3_2.png', [4.85, 3.55, 8.82, 9.95, scale]]},
            {name: 'img', params: ['/assets/classic-studies-2/memory/game1_3_2.png', [14.6, 3.55, 8.82, 9.95, scale]]},
            {name: 'img', params: ['/assets/classic-studies-2/memory/text-pass.png', [9.48, 6.54, 2, 1.5, scale]]},
        ],
        correct_func: (components) => {
            return components[0].whereabout == -1 && components[1].whereabout == 0;
        },
    };

    let scene_3_3 = {
        question: '除了刚才的问卷，被试们还需要填写另一份问卷。请你帮助被试安排实验的时间，同时补全问卷的内容吧。',
        layout: [
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-2/memory/text-stop-sign.png',
                    [25.53, 6.05, 2, 1.5, scale],
                    true,
                    [[17.18, 5.3, 2, 1.5, scale]],
                    true,
                ],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-2/memory/text-barn.png',
                    [25.53, 8, 2, 1.5, scale],
                    true,
                    [[17.18, 5.3, 2, 1.5, scale]],
                    true,
                ],
            },
            {
                name: 'single-select',
                params: [
                    [[5.8, 11.32, 4.23, 3.18, scale], '/assets/classic-studies-2/memory/text-half-hour.png'],
                    [[11.6, 11.32, 4.23, 3.18, scale], '/assets/classic-studies-2/memory/text-week.png'],
                    [[18.04, 11.32, 4.23, 3.18, scale], '/assets/classic-studies-2/memory/text-month.png'],
                    [[23.83, 11.32, 4.23, 3.18, scale], '/assets/classic-studies-2/memory/text-year.png'],
                ],
            },
            {name: 'img', params: ['/assets/classic-studies-2/memory/game1_3_3_1.png', [13.38, 2.96, 7.09, 8, scale]]},
        ],
        correct_func: (components) => {
            return components[0].whereabout == -1 && components[1].whereabout == 0 && components[2].selected == 1;
        },
    };

    let scene_3_4 = {
        question:
            '在视频后的问卷中，一份问卷使用了轿车经过谷仓的错误假设。在回忆谷仓时，哪一组的被试更容易产生见到谷仓的错误记忆呢？',
        layout: [
            {
                name: 'single-select',
                params: [
                    [[6.54, 3.49, 8.82, 9.95, scale], '/assets/classic-studies-2/memory/game1_3_4_1.png'],
                    [[18.51, 3.49, 8.82, 9.95, scale], '/assets/classic-studies-2/memory/game1_3_4_2.png'],
                ],
            },
        ],
        correct_func: (components) => {
            return components[0].selected == 0;
        },
    };

    let level3 = {
        position: [19, 8.57, 2, 2, scale],
        paper: '/assets/classic-studies-2/memory/doc-5-3.jpg',
        prompt: '欢迎来到第三关。新的研究在等待着我们！请选择<b>小汽车、谷仓、停车标志和所有的词汇</b>。',
        objects: [
            '/assets/classic-studies-2/memory/text-week.png',
            '/assets/classic-studies-2/memory/text-pass.png',
            '/assets/classic-studies-2/memory/car-white.png',
            '/assets/classic-studies-2/memory/text-half-hour.png',
            '/assets/classic-studies-2/memory/text-barn.png',
            '/assets/classic-studies-2/memory/text-month.png',
            '/assets/classic-studies-2/memory/stop-sign.png',
            '/assets/classic-studies-2/memory/barn.png',
            '/assets/classic-studies-2/memory/text-stop-sign.png',
        ],
        correct: [0, 1, 2, 3, 4, 5, 6, 7, 8],
        scenes: [scene_3_1, scene_3_2, scene_3_3, scene_3_4],
    };

    let scene_4_1 = {
        question:
            '在研究四中，研究者让被试们观看一段视频并为三组被试分发了三种不同的问卷。除了控制组，直接提问组和虚假前提组的问卷都涉及了一些事物。你可以补全这两份问卷关于校车的问题吗？',
        layout: [
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-2/memory/text-bus.png',
                    [4.77, 13.41, 2, 1.5, scale],
                    true,
                    [
                        [8.12, 5.77, 1, 1, scale],
                        [15.47, 5.77, 1, 1, scale],
                        [16.99, 5.77, 1, 1, scale],
                        [18.33, 5.77, 1, 1, scale],
                    ],
                    true,
                ],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-2/memory/text-bus.png',
                    [7.3, 13.41, 2, 1.5, scale],
                    true,
                    [
                        [8.12, 5.77, 1, 1, scale],
                        [15.47, 5.77, 1, 1, scale],
                        [16.99, 5.77, 1, 1, scale],
                        [18.33, 5.77, 1, 1, scale],
                    ],
                    true,
                ],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-2/memory/text-barn.png',
                    [9.83, 13.41, 2, 1.5, scale],
                    true,
                    [
                        [8.12, 5.77, 1, 1, scale],
                        [15.47, 5.77, 1, 1, scale],
                        [16.99, 5.77, 1, 1, scale],
                        [18.33, 5.77, 1, 1, scale],
                    ],
                    true,
                ],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-2/memory/text-stop-sign.png',
                    [12.34, 13.41, 2, 1.5, scale],
                    true,
                    [
                        [8.12, 5.77, 1, 1, scale],
                        [15.47, 5.77, 1, 1, scale],
                        [16.99, 5.77, 1, 1, scale],
                        [18.33, 5.77, 1, 1, scale],
                    ],
                    true,
                ],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-2/memory/text-students.png',
                    [14.86, 13.41, 2, 1.5, scale],
                    true,
                    [
                        [8.12, 5.77, 1, 1, scale],
                        [15.47, 5.77, 1, 1, scale],
                        [16.99, 5.77, 1, 1, scale],
                        [18.33, 5.77, 1, 1, scale],
                    ],
                    true,
                ],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-2/memory/text-four.png',
                    [17.37, 13.41, 2, 1.5, scale],
                    true,
                    [
                        [8.12, 5.77, 1, 1, scale],
                        [15.47, 5.77, 1, 1, scale],
                        [16.99, 5.77, 1, 1, scale],
                        [18.33, 5.77, 1, 1, scale],
                    ],
                    true,
                ],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-2/memory/text-board.png',
                    [19.89, 13.41, 2, 1.5, scale],
                    true,
                    [
                        [8.12, 5.77, 1, 1, scale],
                        [15.47, 5.77, 1, 1, scale],
                        [16.99, 5.77, 1, 1, scale],
                        [18.33, 5.77, 1, 1, scale],
                    ],
                    true,
                ],
            },
            {name: 'img', params: ['/assets/classic-studies-2/memory/game1_4_1_1.png', [4.34, 2.82, 8, 9.02, scale]]},
            {name: 'img', params: ['/assets/classic-studies-2/memory/game1_4_1_1.png', [12.99, 2.88, 8, 9.02, scale]]},
            {name: 'img', params: ['/assets/classic-studies-2/memory/game1_4_1_1.png', [21.51, 2.82, 8, 9.02, scale]]},
            {name: 'img', params: ['/assets/classic-studies-2/memory/text-see.png', [4.77, 5.52, 2, 1.5, scale]]},
            {name: 'img', params: ['/assets/classic-studies-2/memory/text-do.png', [10.47, 5.52, 2, 1.5, scale]]},
            {name: 'img', params: ['/assets/classic-studies-2/memory/text-see.png', [13.46, 5.52, 2, 1.5, scale]]},
            {name: 'img', params: ['/assets/classic-studies-2/memory/text-do.png', [19.09, 5.52, 2, 1.5, scale]]},
        ],
        correct_func: (components) => {
            let target = components.slice(0, 7);
            return equals(target, [0, 3, -1, -1, 1, -1, 2]) || equals(target, [3, 0, -1, -1, 1, -1, 2]);
        },
    };

    let scene_4_2 = {
        question:
            '一星期后，被试们回来再填写一份问卷。这次三个组的被试填写的是同一份问卷。你能补全这份问卷中关于校车的问题吗？',
        layout: [
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-2/memory/text-bus.png',
                    [4.77, 13.41, 2, 1.5, scale],
                    true,
                    [
                        [15.47, 5.77, 1, 1, scale],
                        [16.99, 5.77, 1, 1, scale],
                        [18.33, 5.77, 1, 1, scale],
                    ],
                    true,
                ],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-2/memory/text-bus.png',
                    [7.3, 13.41, 2, 1.5, scale],
                    true,
                    [
                        [15.47, 5.77, 1, 1, scale],
                        [16.99, 5.77, 1, 1, scale],
                        [18.33, 5.77, 1, 1, scale],
                    ],
                    true,
                ],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-2/memory/text-barn.png',
                    [9.83, 13.41, 2, 1.5, scale],
                    true,
                    [
                        [15.47, 5.77, 1, 1, scale],
                        [16.99, 5.77, 1, 1, scale],
                        [18.33, 5.77, 1, 1, scale],
                    ],
                    true,
                ],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-2/memory/text-stop-sign.png',
                    [12.34, 13.41, 2, 1.5, scale],
                    true,
                    [
                        [15.47, 5.77, 1, 1, scale],
                        [16.99, 5.77, 1, 1, scale],
                        [18.33, 5.77, 1, 1, scale],
                    ],
                    true,
                ],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-2/memory/text-students.png',
                    [14.86, 13.41, 2, 1.5, scale],
                    true,
                    [
                        [15.47, 5.77, 1, 1, scale],
                        [16.99, 5.77, 1, 1, scale],
                        [18.33, 5.77, 1, 1, scale],
                    ],
                    true,
                ],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-2/memory/text-four.png',
                    [17.37, 13.41, 2, 1.5, scale],
                    true,
                    [
                        [15.47, 5.77, 1, 1, scale],
                        [16.99, 5.77, 1, 1, scale],
                        [18.33, 5.77, 1, 1, scale],
                    ],
                    true,
                ],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-2/memory/text-board.png',
                    [19.89, 13.41, 2, 1.5, scale],
                    true,
                    [
                        [15.47, 5.77, 1, 1, scale],
                        [16.99, 5.77, 1, 1, scale],
                        [18.33, 5.77, 1, 1, scale],
                    ],
                    true,
                ],
            },
            {name: 'img', params: ['/assets/classic-studies-2/memory/game1_4_1_1.png', [12.99, 2.88, 8, 9.02, scale]]},
            {name: 'img', params: ['/assets/classic-studies-2/memory/text-see.png', [13.46, 5.52, 2, 1.5, scale]]},
            {name: 'img', params: ['/assets/classic-studies-2/memory/text-do.png', [19.09, 5.52, 2, 1.5, scale]]},
        ],
        correct_func: (components) => {
            let whereabout = components
                .slice(0, 7)
                .sort((a, b) => a.whereabout - b.whereabout)
                .map((value) => value.whereabout);
            return (
                whereabout[5] == -1 &&
                whereabout[6] > -1 &&
                (components[0].whereabout > -1 || components[1].whereabout > -1)
            );
        },
    };

    let scene_4_3 = {
        question:
            '这三个组的被试谁更有可能回忆看到校车呢？请把校车拖放到相应的问卷下。<br>另外，直接提问组的回忆率更像错误假设组和还是控制组呢？如果你认为是前者，请再拖一辆校车；如果是后者，请不要拖动校车。',
        layout: [
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-2/memory/bus.png',
                    [4.77, 12.52, 4, 3, scale],
                    true,
                    [
                        [7.47, 8.03, 4, 3, scale],
                        [16.43, 8.03, 4, 3, scale],
                        [24.78, 8.03, 4, 3, scale],
                    ],
                    true,
                ],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-2/memory/bus.png',
                    [10.34, 12.52, 4, 3, scale],
                    true,
                    [
                        [7.47, 8.03, 4, 3, scale],
                        [16.43, 8.03, 4, 3, scale],
                        [24.78, 8.03, 4, 3, scale],
                    ],
                    true,
                ],
            },
            {name: 'img', params: ['/assets/classic-studies-2/memory/game1_4_3_1.png', [4.34, 2.82, 8, 9.02, scale]]},
            {name: 'img', params: ['/assets/classic-studies-2/memory/game1_4_3_2.png', [12.99, 2.88, 8, 9.02, scale]]},
            {name: 'img', params: ['/assets/classic-studies-2/memory/game1_4_1_1.png', [21.51, 2.82, 8, 9.02, scale]]},
        ],
        correct_func: (components) => {
            let whereabout = components
                .slice(0, 2)
                .sort((a, b) => a.whereabout - b.whereabout)
                .map((value) => value.whereabout);
            return whereabout[0] == -1 && whereabout[1] == 1;
        },
    };

    let level4 = {
        position: [25.15, 8.57, 2, 2, scale],
        paper: '/assets/classic-studies-2/memory/doc-5-4.jpg',
        prompt: '欢迎来到第四关，这是最后一关了。请选择<b>校车和所有的词汇</b>吧。',
        objects: [
            '/assets/classic-studies-2/memory/text-board.png',
            '/assets/classic-studies-2/memory/text-four.png',
            '/assets/classic-studies-2/memory/text-students.png',
            '/assets/classic-studies-2/memory/text-barn.png',
            '/assets/classic-studies-2/memory/bus.png',
            '/assets/classic-studies-2/memory/text-bus.png',
            '/assets/classic-studies-2/memory/text-do.png',
            '/assets/classic-studies-2/memory/text-stop-sign.png',
            '/assets/classic-studies-2/memory/text-see.png',
        ],
        correct: [0, 1, 2, 3, 4, 5, 6, 7, 8],
        scenes: [scene_4_1, scene_4_2, scene_4_3],
    };

    return {
        map: '/assets/classic-studies-2/house_bg.jpg',
        background: '/assets/classic-studies-2/play_bg.jpg',
        marker: '/assets/classic-studies-2/room_flag.png',
        levels: [level1, level2, level3, level4],
    };
};
