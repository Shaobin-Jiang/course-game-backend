let only = (array, value) => array.includes(value) && array.indexOf(value) == array.lastIndexOf(value);

if (typeof window.loaded_sessions == 'undefined') {
    window.loaded_sessions = {};
}

window.loaded_sessions.rats = function () {
    let scale = 3200 / 33.87;

    let scene_1_1 = {
        question:
            '除了你选择的这一窝小鼠外，研究人员还选择了其他几窝小鼠，现在它们都在屏幕的左边。这些小鼠需要被分配到不同的实验情境里，正如你在文献中所读过的一样，它们分别是丰富条件、实验室条件和贫乏条件。请你代替研究人员把小鼠们拖到合适的情境中去吧！',
        layout: [
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-1/rats/rat_tall.png',
                    [4.23, 5.84, 2, 2, scale],
                    true,
                    [
                        [15.15, 7.17, 1, 1, scale],
                        [17.09, 7.17, 1, 1, scale],
                        [19.02, 7.17, 1, 1, scale],
                        [21.44, 7.17, 1, 1, scale],
                        [22.89, 7.17, 1, 1, scale],
                        [24.34, 7.16, 1, 1, scale],
                        [16.09, 11.85, 1, 1, scale],
                        [21.5, 11.85, 1, 1, scale],
                        [26.91, 11.85, 1, 1, scale],
                    ],
                    true,
                ],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-1/rats/rat_tall.png',
                    [6.53, 5.84, 2, 2, scale],
                    true,
                    [
                        [15.15, 7.17, 1, 1, scale],
                        [17.09, 7.17, 1, 1, scale],
                        [19.02, 7.17, 1, 1, scale],
                        [21.44, 7.17, 1, 1, scale],
                        [22.89, 7.17, 1, 1, scale],
                        [24.34, 7.16, 1, 1, scale],
                        [16.09, 11.85, 1, 1, scale],
                        [21.5, 11.85, 1, 1, scale],
                        [26.91, 11.85, 1, 1, scale],
                    ],
                    true,
                ],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-1/rats/rat_tall.png',
                    [8.82, 5.84, 2, 2, scale],
                    true,
                    [
                        [15.15, 7.17, 1, 1, scale],
                        [17.09, 7.17, 1, 1, scale],
                        [19.02, 7.17, 1, 1, scale],
                        [21.44, 7.17, 1, 1, scale],
                        [22.89, 7.17, 1, 1, scale],
                        [24.34, 7.16, 1, 1, scale],
                        [16.09, 11.85, 1, 1, scale],
                        [21.5, 11.85, 1, 1, scale],
                        [26.91, 11.85, 1, 1, scale],
                    ],
                    true,
                ],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-1/rats/rat_normal.png',
                    [4.23, 8.34, 2, 2, scale],
                    true,
                    [
                        [15.15, 7.17, 1, 1, scale],
                        [17.09, 7.17, 1, 1, scale],
                        [19.02, 7.17, 1, 1, scale],
                        [21.44, 7.17, 1, 1, scale],
                        [22.89, 7.17, 1, 1, scale],
                        [24.34, 7.16, 1, 1, scale],
                        [16.09, 11.85, 1, 1, scale],
                        [21.5, 11.85, 1, 1, scale],
                        [26.91, 11.85, 1, 1, scale],
                    ],
                    true,
                ],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-1/rats/rat_normal.png',
                    [6.53, 8.34, 2, 2, scale],
                    true,
                    [
                        [15.15, 7.17, 1, 1, scale],
                        [17.09, 7.17, 1, 1, scale],
                        [19.02, 7.17, 1, 1, scale],
                        [21.44, 7.17, 1, 1, scale],
                        [22.89, 7.17, 1, 1, scale],
                        [24.34, 7.16, 1, 1, scale],
                        [16.09, 11.85, 1, 1, scale],
                        [21.5, 11.85, 1, 1, scale],
                        [26.91, 11.85, 1, 1, scale],
                    ],
                    true,
                ],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-1/rats/rat_normal.png',
                    [8.82, 8.34, 2, 2, scale],
                    true,
                    [
                        [15.15, 7.17, 1, 1, scale],
                        [17.09, 7.17, 1, 1, scale],
                        [19.02, 7.17, 1, 1, scale],
                        [21.44, 7.17, 1, 1, scale],
                        [22.89, 7.17, 1, 1, scale],
                        [24.34, 7.16, 1, 1, scale],
                        [16.09, 11.85, 1, 1, scale],
                        [21.5, 11.85, 1, 1, scale],
                        [26.91, 11.85, 1, 1, scale],
                    ],
                    true,
                ],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-1/rats/rat_short.png',
                    [4.23, 10.85, 2, 2, scale],
                    true,
                    [
                        [15.15, 7.17, 1, 1, scale],
                        [17.09, 7.17, 1, 1, scale],
                        [19.02, 7.17, 1, 1, scale],
                        [21.44, 7.17, 1, 1, scale],
                        [22.89, 7.17, 1, 1, scale],
                        [24.34, 7.16, 1, 1, scale],
                        [16.09, 11.85, 1, 1, scale],
                        [21.5, 11.85, 1, 1, scale],
                        [26.91, 11.85, 1, 1, scale],
                    ],
                    true,
                ],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-1/rats/rat_short.png',
                    [6.53, 10.85, 2, 2, scale],
                    true,
                    [
                        [15.15, 7.17, 1, 1, scale],
                        [17.09, 7.17, 1, 1, scale],
                        [19.02, 7.17, 1, 1, scale],
                        [21.44, 7.17, 1, 1, scale],
                        [22.89, 7.17, 1, 1, scale],
                        [24.34, 7.16, 1, 1, scale],
                        [16.09, 11.85, 1, 1, scale],
                        [21.5, 11.85, 1, 1, scale],
                        [26.91, 11.85, 1, 1, scale],
                    ],
                    true,
                ],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-1/rats/rat_short.png',
                    [8.82, 10.85, 2, 2, scale],
                    true,
                    [
                        [15.15, 7.17, 1, 1, scale],
                        [17.09, 7.17, 1, 1, scale],
                        [19.02, 7.17, 1, 1, scale],
                        [21.44, 7.17, 1, 1, scale],
                        [22.89, 7.17, 1, 1, scale],
                        [24.34, 7.16, 1, 1, scale],
                        [16.09, 11.85, 1, 1, scale],
                        [21.5, 11.85, 1, 1, scale],
                        [26.91, 11.85, 1, 1, scale],
                    ],
                    true,
                ],
            },
            {name: 'img', params: ['/assets/classic-studies-1/rats/play_table.png', [25.19, 5.31, 3.53, 3.32, scale]]},
            {name: 'img', params: ['/assets/classic-studies-1/rats/play_cage.png', [20.9, 3.62, 8.4, 5.41, scale]]},
            {name: 'img', params: ['/assets/classic-studies-1/rats/play_cage.png', [14.73, 5.31, 5.78, 3.72, scale]]},
            {name: 'img', params: ['/assets/classic-studies-1/rats/play_cage.png', [14.73, 10.85, 3.85, 2.48, scale]]},
            {name: 'img', params: ['/assets/classic-studies-1/rats/play_cage.png', [20.07, 10.85, 3.85, 2.48, scale]]},
            {name: 'img', params: ['/assets/classic-studies-1/rats/play_cage.png', [25.42, 10.85, 3.85, 2.48, scale]]},
        ],
        correct_func: (components) => {
            let correct_1 = true;
            let whereabouts_converted = components.slice(0, 9).map((value) => Math.floor(value.whereabout / 3));
            for (let i = 0; i < 9; i += 3) {
                if (
                    whereabouts_converted[i] * whereabouts_converted[i + 1] * whereabouts_converted[i + 2] != 0 ||
                    whereabouts_converted[i] + whereabouts_converted[i + 1] + whereabouts_converted[i + 2] != 3
                ) {
                    correct_1 = false;
                    break;
                }
            }

            let correct_2 = true;
            let whereabouts = components.slice(0, 9).map((value) => value.whereabout);
            correct_2 = only(whereabouts, 6) && only(whereabouts, 7) && only(whereabouts, 8);

            return correct_1 && correct_2;
        },
    };

    let level1 = {
        position: [26.55, 8.53, 2, 2, scale],
        paper: '/assets/classic-studies-1/rats/doc-3-1.jpg',
        prompt: '欢迎你来到新的篇章！刚才的文献读得怎么样了呢？在研究中使用了很多小鼠，但不是所有的小鼠都符合研究人员的要求。你还记得研究中需要使用什么样的小鼠吗？想一想它们都应该具有什么样的特征？如果你记得，你能挑出3只符合研究人员要求的小鼠吗？',
        objects: [
            '/assets/classic-studies-1/rats/rat_tall.png',
            '/assets/classic-studies-1/rats/rat_tall.png',
            '/assets/classic-studies-1/rats/rat_fat.png',
            '/assets/classic-studies-1/rats/rat_short.png',
            '/assets/classic-studies-1/rats/rat_short.png',
            '/assets/classic-studies-1/rats/rat_normal.png',
            '/assets/classic-studies-1/rats/rat_normal.png',
            '/assets/classic-studies-1/rats/rat_normal.png',
            '/assets/classic-studies-1/rats/rat_thin.png',
        ],
        correct: [5, 6, 7],
        scenes: [scene_1_1],
    };

    let scene_2_1 = {
        question:
            '这些箱子里装着一些小鼠的脑皮层组织（尽管实验中并不是装在箱子里的）。在不同实验情境下成长的小鼠的脑皮层可能会表现出不同的状态。现在，请你告诉我哪个箱子更可能装着<b>丰富情境下长大</b>的小鼠的大脑皮层吧。',
        layout: [
            {
                name: 'single-select',
                params: [
                    [[6.51, 7.43, 6, 4.2, scale], '/assets/classic-studies-1/rats/market3_box1.png'],
                    [[13.93, 7.43, 6, 4.2, scale], '/assets/classic-studies-1/rats/market3_box3.png'],
                    [[21.36, 7.43, 6, 4.2, scale], '/assets/classic-studies-1/rats/market3_box2.png'],
                ],
            },
        ],
        correct_func: (components) => {
            return components[0].selected == 0;
        },
    };

    let scene_2_2 = {
        question: '这次，请你告诉我哪个箱子更可能装着<b>贫乏情境下长大</b>的小鼠的大脑皮层吧。',
        layout: [
            {
                name: 'single-select',
                params: [
                    [[6.51, 7.43, 6, 4.2, scale], '/assets/classic-studies-1/rats/market3_box1.png'],
                    [[13.93, 7.43, 6, 4.2, scale], '/assets/classic-studies-1/rats/market3_box3.png'],
                    [[21.36, 7.43, 6, 4.2, scale], '/assets/classic-studies-1/rats/market3_box2.png'],
                ],
            },
        ],
        correct_func: (components) => {
            return components[0].selected == 2;
        },
    };

    let level2 = {
        position: [8.08, 15.08, 2, 2, scale],
        paper: '/assets/classic-studies-1/rats/doc-3-2.jpg',
        prompt: '相信你已经看完了文献的内容。现在，科学研究人员已经把小鼠们的大脑皮层取出。为了不让你看到血腥的画面，这些皮层组织都被分别装进了三个一模一样的箱子里。请选择<b>三只箱子</b>，然后去实验室看看吧。',
        objects: [
            '/assets/classic-studies-1/rats/rat_short.png',
            '/assets/classic-studies-1/rats/market3_box1.png',
            '/assets/classic-studies-1/rats/rat_thin.png',
            '/assets/classic-studies-1/rats/rat_normal.png',
            '/assets/classic-studies-1/rats/rat_fat.png',
            '/assets/classic-studies-1/rats/market3_box2.png',
            '/assets/classic-studies-1/rats/market3_box3.png',
            '/assets/classic-studies-1/rats/market3_hand.png',
            '/assets/classic-studies-1/rats/rat_tall.png',
        ],
        correct: [1, 5, 6],
        scenes: [scene_2_1, scene_2_2],
    };

    let scene_3_1 = {
        question:
            '每天换玩具的时候，研究者会把丰富组的小鼠拿出来再放回去，这样它们会受到更多的抚摸。那么，它们更发达的大脑到底是由丰富环境造成的，还是由这种抚摸造成的呢?若想<b>排除抚摸造成的干扰</b>，有两种方法。你能把它们都表现出来吗？',
        layout: [
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-1/rats/rat_lacking.png',
                    [4.99, 3.79, 2, 2, scale],
                    true,
                    [
                        [17.07, 4.29, 1, 1, scale],
                        [20.59, 4.29, 1, 1, scale],
                        [13.58, 10.54, 1, 1, scale],
                        [17.08, 10.54, 1, 1, scale],
                        [20.59, 10.54, 1, 1, scale],
                    ],
                    true,
                ],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-1/rats/rat_lacking.png',
                    [7.36, 3.79, 2, 2, scale],
                    true,
                    [
                        [17.07, 4.29, 1, 1, scale],
                        [20.59, 4.29, 1, 1, scale],
                        [13.58, 10.54, 1, 1, scale],
                        [17.08, 10.54, 1, 1, scale],
                        [20.59, 10.54, 1, 1, scale],
                    ],
                    true,
                ],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-1/rats/rat_rich.png',
                    [4.99, 6.72, 2, 2, scale],
                    true,
                    [
                        [17.07, 4.29, 1, 1, scale],
                        [20.59, 4.29, 1, 1, scale],
                        [13.58, 10.54, 1, 1, scale],
                        [17.08, 10.54, 1, 1, scale],
                        [20.59, 10.54, 1, 1, scale],
                    ],
                    true,
                ],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-1/rats/rat_lab.png',
                    [4.99, 9.65, 2, 2, scale],
                    true,
                    [
                        [17.07, 4.29, 1, 1, scale],
                        [20.59, 4.29, 1, 1, scale],
                        [13.58, 10.54, 1, 1, scale],
                        [17.08, 10.54, 1, 1, scale],
                        [20.59, 10.54, 1, 1, scale],
                    ],
                    true,
                ],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-1/rats/rat_lab.png',
                    [7.36, 9.65, 2, 2, scale],
                    true,
                    [
                        [17.07, 4.29, 1, 1, scale],
                        [20.59, 4.29, 1, 1, scale],
                        [13.58, 10.54, 1, 1, scale],
                        [17.08, 10.54, 1, 1, scale],
                        [20.59, 10.54, 1, 1, scale],
                    ],
                    true,
                ],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-1/rats/market3_hand.png',
                    [24.81, 8.09, 1.6, 1.2, scale],
                    true,
                    [
                        [17.07, 4.29, 1, 1, scale],
                        [20.59, 4.29, 1, 1, scale],
                        [13.58, 10.54, 1, 1, scale],
                        [17.08, 10.54, 1, 1, scale],
                        [20.59, 10.54, 1, 1, scale],
                    ],
                    true,
                ],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-1/rats/market3_hand.png',
                    [27.06, 8.09, 1.6, 1.2, scale],
                    true,
                    [
                        [17.07, 4.29, 1, 1, scale],
                        [20.59, 4.29, 1, 1, scale],
                        [13.58, 10.54, 1, 1, scale],
                        [17.08, 10.54, 1, 1, scale],
                        [20.59, 10.54, 1, 1, scale],
                    ],
                    true,
                ],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-1/rats/market3_hand.png',
                    [24.81, 9.84, 1.6, 1.2, scale],
                    true,
                    [
                        [17.07, 4.29, 1, 1, scale],
                        [20.59, 4.29, 1, 1, scale],
                        [13.58, 10.54, 1, 1, scale],
                        [17.08, 10.54, 1, 1, scale],
                        [20.59, 10.54, 1, 1, scale],
                    ],
                    true,
                ],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-1/rats/market3_hand.png',
                    [27.06, 9.84, 1.6, 1.2, scale],
                    true,
                    [
                        [17.07, 4.29, 1, 1, scale],
                        [20.59, 4.29, 1, 1, scale],
                        [13.58, 10.54, 1, 1, scale],
                        [17.08, 10.54, 1, 1, scale],
                        [20.59, 10.54, 1, 1, scale],
                    ],
                    true,
                ],
            },
            {name: 'img', params: ['/assets/classic-studies-1/rats/play_handsframe.png', [24.05, 7.56, 5.27, 4.5, scale]]},
            {name: 'img', params: ['/assets/classic-studies-1/rats/play_weight.png', [13.05, 5.21, 2, 2.35, scale]]},
            {name: 'img', params: ['/assets/classic-studies-1/rats/play_weight.png', [16.57, 5.21, 2, 2.35, scale]]},
            {name: 'img', params: ['/assets/classic-studies-1/rats/play_weight.png', [20.09, 5.21, 2, 2.35, scale]]},
            {name: 'img', params: ['/assets/classic-studies-1/rats/play_weight.png', [13.05, 11.48, 2, 2.35, scale]]},
            {name: 'img', params: ['/assets/classic-studies-1/rats/play_weight.png', [16.57, 11.48, 2, 2.35, scale]]},
            {name: 'img', params: ['/assets/classic-studies-1/rats/play_weight.png', [20.09, 11.48, 2, 2.35, scale]]},
            {name: 'img', params: ['/assets/classic-studies-1/rats/rat_rich.png', [13.04, 3.66, 2, 2, scale]]},
            {name: 'img', params: ['/assets/classic-studies-1/rats/market3_hand.png', [13.85, 4, 1.6, 1.2, scale]]},
            {name: 'text', params: ['方法1', [9.74, 5.87, 3.19, 1.03, scale], '#000000', 54]},
            {name: 'text', params: ['方法2', [9.74, 12.15, 3.19, 1.03, scale], '#000000', 54]},
        ],
        correct_func: (components) => {
            let hand_whereabout = components
                .slice(5, 9)
                .map((value) => value.whereabout)
                .sort((a, b) => a - b);
            let correct_1 =
                hand_whereabout[0] == -1 &&
                hand_whereabout[1] == -1 &&
                hand_whereabout[2] == 0 &&
                hand_whereabout[3] == 1;

            let rats_whereabout = components.slice(0, 5).map((value) => value.whereabout);
            let correct_2 = rats_whereabout[2] > 1;
            let correct_3 =
                (rats_whereabout[0] < 2 && rats_whereabout[1] >= 2) ||
                (rats_whereabout[1] < 2 && rats_whereabout[0] >= 2);
            let correct_4 =
                (rats_whereabout[3] < 2 && rats_whereabout[4] >= 2) ||
                (rats_whereabout[4] < 2 && rats_whereabout[3] >= 2);
            let correct_5 = only(rats_whereabout, 2) && only(rats_whereabout, 3) && only(rats_whereabout, 4);

            return correct_1 && correct_2 && correct_3 && correct_4 && correct_5;
        },
    };

    let scene_3_2 = {
        question:
            '现在，研究者们想研究，<b>抚摸对小鼠的大脑皮层到底有没有影响</b>。这样，研究者应该比较什么条件下的小鼠的脑皮层，应该不应该给它们抚摸呢？你能把它表现出来吗？',
        layout: [
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-1/rats/rat_lacking.png',
                    [4.99, 3.79, 2, 2, scale],
                    true,
                    [
                        [13.43, 6.56, 1, 1, scale],
                        [19.44, 6.56, 1, 1, scale],
                    ],
                    true,
                ],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-1/rats/rat_rich.png',
                    [4.99, 6.72, 2, 2, scale],
                    true,
                    [
                        [13.43, 6.56, 1, 1, scale],
                        [19.44, 6.56, 1, 1, scale],
                    ],
                    true,
                ],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-1/rats/rat_lab.png',
                    [4.99, 9.65, 2, 2, scale],
                    true,
                    [
                        [13.43, 6.56, 1, 1, scale],
                        [19.44, 6.56, 1, 1, scale],
                    ],
                    true,
                ],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-1/rats/rat_lab.png',
                    [7.36, 9.65, 2, 2, scale],
                    true,
                    [
                        [13.43, 6.56, 1, 1, scale],
                        [19.44, 6.56, 1, 1, scale],
                    ],
                    true,
                ],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-1/rats/market3_hand.png',
                    [24.81, 8.09, 1.6, 1.2, scale],
                    true,
                    [
                        [13.43, 6.56, 1, 1, scale],
                        [19.44, 6.56, 1, 1, scale],
                    ],
                    true,
                ],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-1/rats/market3_hand.png',
                    [27.06, 8.09, 1.6, 1.2, scale],
                    true,
                    [
                        [13.43, 6.56, 1, 1, scale],
                        [19.44, 6.56, 1, 1, scale],
                    ],
                    true,
                ],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-1/rats/market3_hand.png',
                    [24.81, 9.84, 1.6, 1.2, scale],
                    true,
                    [
                        [13.43, 6.56, 1, 1, scale],
                        [19.44, 6.56, 1, 1, scale],
                    ],
                    true,
                ],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-1/rats/market3_hand.png',
                    [27.06, 9.84, 1.6, 1.2, scale],
                    true,
                    [
                        [13.43, 6.56, 1, 1, scale],
                        [19.44, 6.56, 1, 1, scale],
                    ],
                    true,
                ],
            },
            {name: 'img', params: ['/assets/classic-studies-1/rats/play_handsframe.png', [24.05, 7.56, 5.27, 4.5, scale]]},
            {name: 'img', params: ['/assets/classic-studies-1/rats/play_weight.png', [12.93, 7.45, 2, 2.35, scale]]},
            {name: 'img', params: ['/assets/classic-studies-1/rats/play_weight.png', [18.94, 7.45, 2, 2.35, scale]]},
        ],
        correct_func: (components) => {
            let hand_whereabout = components
                .slice(4, 8)
                .map((value) => value.whereabout)
                .sort((a, b) => a - b);
            let correct_1 =
                hand_whereabout[0] == -1 &&
                hand_whereabout[1] == -1 &&
                hand_whereabout[2] == -1 &&
                (hand_whereabout[3] == 0 || hand_whereabout[3] == 1);

            let rats_whereabout = components.slice(0, 4).map((value) => value.whereabout);
            let correct_2 =
                rats_whereabout[0] == -1 && rats_whereabout[1] == -1 && rats_whereabout[2] + rats_whereabout[3] == 1;

            return correct_1 && correct_2;
        },
    };

    let level3 = {
        position: [7.08, 8.53, 2, 2, scale],
        paper: '/assets/classic-studies-1/rats/doc-3-3.jpg',
        prompt: '让我们回到研究进行的时候，现在要为实验中的小鼠换玩具啦。你还记得哪些老鼠参加了研究吗？请选择<b>来自同一窝的小鼠</b>们。此外，请选择<b>一只手</b>用来触碰小鼠。',
        objects: [
            '/assets/classic-studies-1/rats/rat_tall.png',
            '/assets/classic-studies-1/rats/rat_tall.png',
            '/assets/classic-studies-1/rats/rat_fat.png',
            '/assets/classic-studies-1/rats/rat_short.png',
            '/assets/classic-studies-1/rats/market3_hand.png',
            '/assets/classic-studies-1/rats/rat_normal.png',
            '/assets/classic-studies-1/rats/rat_normal.png',
            '/assets/classic-studies-1/rats/rat_normal.png',
            '/assets/classic-studies-1/rats/rat_thin.png',
        ],
        correct: [4, 5, 6, 7],
        scenes: [scene_3_1, scene_3_2],
    };

    return {
        map: '/assets/classic-studies-1/rats/house3_bg.jpg',
        background: '/assets/classic-studies-1/rats/play_3_bg.png',
        marker: '/assets/classic-studies-1/rats/room_mouse.png',
        levels: [level1, level2, level3],
    };
};
