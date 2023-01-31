if (typeof window.loaded_sessions == 'undefined') {
    window.loaded_sessions = {};
}

window.loaded_sessions.rosenthal = function () {
    let scale = 3200 / 33.87;

    let scene_1_1 = {
        question:
            '假设我们回到了橡树学校，研究进行的时候。研究者告知老师这是一项关于“未来学业成就”的测试。到了正式进行测验的时候，应该拿出什么测验给学生施测呢？',
        layout: [
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-2/rosenthal/market6_1_1.png',
                    [23.86, 4.61, 4, 3, scale],
                    true,
                    [[14.76, 5.97, 2, 2, scale]],
                    true,
                ],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-2/rosenthal/market6_1_9.png',
                    [23.86, 11.11, 4, 3, scale],
                    true,
                    [[14.76, 5.97, 2, 2, scale]],
                    true,
                ],
            },
            {
                name: 'img',
                params: ['/assets/classic-studies-2/rosenthal/game6_1_1.png', [5.19, 3.93, 15.87, 11.18, scale]],
            },
            {name: 'img', params: ['/assets/classic-studies-2/rosenthal/market6_1_5.png', [7.51, 10.11, 4, 3, scale]]},
            {name: 'img', params: ['/assets/classic-studies-2/rosenthal/market6_1_6.png', [10.01, 10.11, 4, 3, scale]]},
            {name: 'img', params: ['/assets/classic-studies-2/rosenthal/market6_1_8.png', [11.76, 9.74, 4, 3, scale]]},
            {name: 'img', params: ['/assets/classic-studies-2/rosenthal/market6_1_7.png', [14.27, 9.83, 4, 3, scale]]},
            {name: 'text', params: ['一般能力测试', [23.86, 8.1, 4, 0.94, scale], '#000000', 36]},
            {name: 'text', params: ['未来学业成就测试', [23.38, 14.6, 5.1, 0.94, scale], '#000000', 36]},
        ],
        correct_func: (components) => {
            return components[0].whereabout == 0 && components[1].whereabout == -1;
        },
    };

    let scene_1_2 = {
        question:
            '学生们被按照“一般能力测验”的得分高低排成名单（数字表示名次）。研究者们需要选出一些学生给班主任们，并告知他们这些选中的学生（绿色对勾）有很高的发展潜力。作为研究者，应该提供哪份名单呢？',
        layout: [
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-2/rosenthal/market6_1_4.png',
                    [23.75, 4.27, 4.23, 3.18, scale],
                    true,
                    [[13.31, 12.45, 2, 2, scale]],
                    true,
                ],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-2/rosenthal/market6_1_2.png',
                    [23.75, 10.86, 4.23, 3.18, scale],
                    true,
                    [[13.31, 12.45, 2, 2, scale]],
                    true,
                ],
            },
            {
                name: 'img',
                params: ['/assets/classic-studies-2/rosenthal/game6_1_2_1.png', [16.43, 4.27, 4, 6.06, scale]],
            },
            {
                name: 'img',
                params: ['/assets/classic-studies-2/rosenthal/game6_1_2_2.png', [16.43, 10.95, 4, 1.94, scale]],
            },
            {name: 'text', params: ['随机选中学生的名单', [23.05, 8.06, 5.77, 0.94, scale], '#00000', 36]},
            {name: 'text', params: ['按得分选中学生的名单', [22.81, 14.64, 6.25, 0.94, scale], '#000000', 36]},
        ],
        correct_func: (components) => {
            return components[0].whereabout == 0 && components[1].whereabout == -1;
        },
    };

    let level1 = {
        position: [10.47, 8.47, 2, 2, scale],
        paper: '/assets/classic-studies-2/rosenthal/doc-3-1.jpg',
        prompt: '欢迎来到新的章节。在这里，我们将学习教师的期望如何影响学生的智力增长。请选择<b>除了五位小朋友外的其他物品</b>吧',
        objects: [
            '/assets/classic-studies-2/rosenthal/market6_1_1.png',
            '/assets/classic-studies-2/rosenthal/market6_1_2.png',
            '/assets/classic-studies-2/rosenthal/market6_1_3.png',
            '/assets/classic-studies-2/rosenthal/market6_1_4.png',
            '/assets/classic-studies-2/rosenthal/market6_1_5.png',
            '/assets/classic-studies-2/rosenthal/market6_1_6.png',
            '/assets/classic-studies-2/rosenthal/market6_1_7.png',
            '/assets/classic-studies-2/rosenthal/market6_1_8.png',
            '/assets/classic-studies-2/rosenthal/market6_1_9.png',
        ],
        correct: [0, 1, 3, 8],
        scenes: [scene_1_1, scene_1_2],
    };

    let scene_2_1 = {
        question: '首先，研究者们又为学生们进行了一次测验。这次又测了什么呢？请把相应的测验拖给学生们吧。',
        layout: [
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-2/rosenthal/market6_1_1.png',
                    [23.86, 4.61, 4, 3, scale],
                    true,
                    [[14.76, 5.97, 2, 2, scale]],
                    true,
                ],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-2/rosenthal/market6_1_9.png',
                    [23.86, 11.11, 4, 3, scale],
                    true,
                    [[14.76, 5.97, 2, 2, scale]],
                    true,
                ],
            },
            {
                name: 'img',
                params: ['/assets/classic-studies-2/rosenthal/game6_1_1.png', [5.19, 3.93, 15.87, 11.18, scale]],
            },
            {name: 'img', params: ['/assets/classic-studies-2/rosenthal/market6_1_5.png', [7.51, 10.11, 4, 3, scale]]},
            {name: 'img', params: ['/assets/classic-studies-2/rosenthal/market6_1_6.png', [10.01, 10.11, 4, 3, scale]]},
            {name: 'img', params: ['/assets/classic-studies-2/rosenthal/market6_1_8.png', [11.76, 9.74, 4, 3, scale]]},
            {name: 'img', params: ['/assets/classic-studies-2/rosenthal/market6_1_7.png', [14.27, 9.83, 4, 3, scale]]},
            {name: 'text', params: ['一般能力测试', [23.86, 8.1, 4, 0.94, scale], '#000000', 36]},
            {name: 'text', params: ['未来学业成就测试', [23.38, 14.6, 5.1, 0.94, scale], '#000000', 36]},
        ],
        correct_func: (components) => {
            return components[0].whereabout == 0 && components[1].whereabout == -1;
        },
    };

    let scene_2_2 = {
        question:
            '研究的结果出来了。下面这张图描述了两次测验之间一、二年级学生们智力分数的提高程度。图中两种柱子分别表示了哪些学生呢？',
        layout: [
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-2/rosenthal/random-80.png',
                    [24.98, 4.65, 3, 0.42, scale],
                    true,
                    [
                        [17.8, 4.76, 3, 0.42, scale],
                        [17.8, 6.41, 3, 0.42, scale],
                    ],
                    true,
                ],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-2/rosenthal/iq-80.png',
                    [24.98, 6.08, 3, 0.42, scale],
                    true,
                    [
                        [17.8, 4.76, 3, 0.42, scale],
                        [17.8, 6.41, 3, 0.42, scale],
                    ],
                    true,
                ],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-2/rosenthal/random-20.png',
                    [24.98, 7.51, 3, 0.42, scale],
                    true,
                    [
                        [17.8, 4.76, 3, 0.42, scale],
                        [17.8, 6.41, 3, 0.42, scale],
                    ],
                    true,
                ],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-2/rosenthal/iq-20.png',
                    [24.98, 8.94, 3, 0.42, scale],
                    true,
                    [
                        [17.8, 4.76, 3, 0.42, scale],
                        [17.8, 6.41, 3, 0.42, scale],
                    ],
                    true,
                ],
            },
            {
                name: 'img',
                params: ['/assets/classic-studies-2/rosenthal/game6_2_2_1.png', [5.4, 3.06, 7.06, 12.35, scale]],
            },
            {
                name: 'img',
                params: ['/assets/classic-studies-2/rosenthal/game6_2_2_2.png', [15.11, 4.47, 1.82, 1, scale]],
            },
            {
                name: 'img',
                params: ['/assets/classic-studies-2/rosenthal/game6_2_2_3.png', [15.11, 6.24, 1.82, 1, scale]],
            },
            {
                name: 'img',
                params: ['/assets/classic-studies-2/rosenthal/game6_2_2_4.png', [17.42, 4.76, 4.92, 0.5, scale]],
            },
            {
                name: 'img',
                params: ['/assets/classic-studies-2/rosenthal/game6_2_2_4.png', [17.42, 6.44, 4.92, 0.5, scale]],
            },
        ],
        correct_func: (components) => {
            return (
                components[0].whereabout == 0 &&
                components[1].whereabout == -1 &&
                components[2].whereabout == 1 &&
                components[3].whereabout == -1
            );
        },
    };

    let scene_2_3 = {
        question:
            '研究者们还统计了一、二年级中，智力测验分数增加10分、20分、30分的人数占一群学生人数的百分比。你知道这两个柱子分别指哪两群学生吗？',
        layout: [
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-2/rosenthal/random-80.png',
                    [24.98, 4.65, 3, 0.42, scale],
                    true,
                    [
                        [17.8, 4.76, 3, 0.42, scale],
                        [17.8, 6.41, 3, 0.42, scale],
                    ],
                    true,
                ],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-2/rosenthal/iq-80.png',
                    [24.98, 6.08, 3, 0.42, scale],
                    true,
                    [
                        [17.8, 4.76, 3, 0.42, scale],
                        [17.8, 6.41, 3, 0.42, scale],
                    ],
                    true,
                ],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-2/rosenthal/random-20.png',
                    [24.98, 7.51, 3, 0.42, scale],
                    true,
                    [
                        [17.8, 4.76, 3, 0.42, scale],
                        [17.8, 6.41, 3, 0.42, scale],
                    ],
                    true,
                ],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-2/rosenthal/iq-20.png',
                    [24.98, 8.94, 3, 0.42, scale],
                    true,
                    [
                        [17.8, 4.76, 3, 0.42, scale],
                        [17.8, 6.41, 3, 0.42, scale],
                    ],
                    true,
                ],
            },
            {
                name: 'img',
                params: ['/assets/classic-studies-2/rosenthal/game6_2_2_1.png', [5.4, 3.06, 7.06, 12.35, scale]],
            },
            {
                name: 'img',
                params: ['/assets/classic-studies-2/rosenthal/game6_2_2_2.png', [15.11, 4.47, 1.82, 1, scale]],
            },
            {
                name: 'img',
                params: ['/assets/classic-studies-2/rosenthal/game6_2_2_3.png', [15.11, 6.24, 1.82, 1, scale]],
            },
            {
                name: 'img',
                params: ['/assets/classic-studies-2/rosenthal/game6_2_2_4.png', [17.42, 4.76, 4.92, 0.5, scale]],
            },
            {
                name: 'img',
                params: ['/assets/classic-studies-2/rosenthal/game6_2_2_4.png', [17.42, 6.44, 4.92, 0.5, scale]],
            },
        ],
        correct_func: (components) => {
            return (
                components[0].whereabout == 0 &&
                components[1].whereabout == -1 &&
                components[2].whereabout == 1 &&
                components[3].whereabout == -1
            );
        },
    };

    let level2 = {
        position: [21.4, 8.47, 2, 2, scale],
        paper: '/assets/classic-studies-2/rosenthal/doc-3-2.jpg',
        prompt: '八个月之后，研究者们又来到了橡树学校。学生们发生了什么变化呢？请选择<b>除了小朋友们以外的其他物品</b>吧。',
        objects: [
            '/assets/classic-studies-2/rosenthal/market6_1_5.png',
            '/assets/classic-studies-2/rosenthal/market6_1_9.png',
            '/assets/classic-studies-2/rosenthal/random-80.png',
            '/assets/classic-studies-2/rosenthal/iq-80.png',
            '/assets/classic-studies-2/rosenthal/iq-20.png',
            '/assets/classic-studies-2/rosenthal/market6_1_3.png',
            '/assets/classic-studies-2/rosenthal/market6_1_7.png',
            '/assets/classic-studies-2/rosenthal/random-20.png',
            '/assets/classic-studies-2/rosenthal/market6_1_1.png',
        ],
        correct: [1, 2, 3, 4, 7, 8],
        scenes: [scene_2_1, scene_2_2, scene_2_3],
    };

    return {
        map: '/assets/classic-studies-2/house_bg.jpg',
        background: '/assets/classic-studies-2/play_bg.jpg',
        marker: '/assets/classic-studies-2/room_flag.png',
        levels: [level1, level2],
    };
};
