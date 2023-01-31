if (typeof window.loaded_sessions == 'undefined') {
    window.loaded_sessions = {};
}

window.loaded_sessions.superstitious_pigeons = function () {
    let scale = 3200 / 33.87;

    let scene_1_1 = {
        question: '首先，在进行实验之前需要进行一些设置。实验中使用的鸽子和一般的鸽子并不一样，你能选择正确的鸽子吗？',
        layout: [
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-2/pigeons/pigeon_dancing.png',
                    [25.07, 4.61, 3.53, 2.65, scale],
                    true,
                    [[17.37, 11.48, 2, 2, scale]],
                    true,
                ],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-2/pigeons/pigeon_full.png',
                    [25.07, 8.38, 3.53, 2.65, scale],
                    true,
                    [[17.37, 11.48, 2, 2, scale]],
                    true,
                ],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-2/pigeons/pigeon_hungry.png',
                    [25.07, 12.15, 3.53, 2.65, scale],
                    true,
                    [[17.37, 11.48, 2, 2, scale]],
                    true,
                ],
            },
            {name: 'img', params: ['/assets/classic-studies-2/pigeons/game4_1_1.png', [10.93, 4.61, 12, 9.84, scale]]},
        ],
        correct_func: (components) => {
            return components[0].whereabout == -1 && components[1].whereabout == -1 && components[2].whereabout == 0;
        },
    };

    let scene_1_2 = {
        question:
            '现在，我们要为鸽子设定形成“迷信”行为的投喂时间间隔。你还记得斯金纳最开始是如何设置的吗？请把正确的时间间隔（每XX秒投喂一次）拖到装置中吧。',
        layout: [
            {
                name: 'single-select',
                params: [
                    [[25.41, 3.48, 3, 2.25, scale], '/assets/classic-studies-2/pigeons/clock_10.png'],
                    [[25.41, 6.03, 3, 2.25, scale], '/assets/classic-studies-2/pigeons/clock_15.png'],
                    [[25.41, 8.56, 3, 2.25, scale], '/assets/classic-studies-2/pigeons/clock_20.png'],
                    [[25.41, 11.12, 3, 2.25, scale], '/assets/classic-studies-2/pigeons/clock_30.png'],
                    [[25.41, 13.56, 3, 2.25, scale], '/assets/classic-studies-2/pigeons/clock_60.png'],
                ],
            },
            {name: 'img', params: ['/assets/classic-studies-2/pigeons/game4_1_1.png', [10.93, 4.61, 12, 9.84, scale]]},
            {
                name: 'img',
                params: ['/assets/classic-studies-2/pigeons/pigeon_hungry.png', [16.63, 11.35, 3.53, 2.65, scale]],
            },
        ],
        correct_func: (components) => {
            return components[0].selected == 1;
        },
    };

    let scene_1_3 = {
        question:
            '假设你是负责投喂鸽子的人（当然，原来的实验中很可能不是人工投喂的），在下面三种情境中，你应该投喂哪只鸽子呢？',
        layout: [
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-2/pigeons/food.png',
                    [16.6, 4.42, 2, 1.5, scale],
                    true,
                    [
                        [6.01, 11.63, 1, 1, scale],
                        [14.41, 11.63, 1, 1, scale],
                        [23.03, 11.63, 1, 1, scale],
                    ],
                    true,
                ],
            },
            {name: 'img', params: ['/assets/classic-studies-2/pigeons/game4_1_1.png', [4.52, 7.03, 8, 6.56, scale]]},
            {name: 'img', params: ['/assets/classic-studies-2/pigeons/game4_1_1.png', [13.07, 7.03, 8, 6.56, scale]]},
            {name: 'img', params: ['/assets/classic-studies-2/pigeons/game4_1_3.png', [21.63, 7.03, 8, 6.56, scale]]},
            {
                name: 'img',
                params: ['/assets/classic-studies-2/pigeons/pigeon_hungry.png', [7.65, 11.05, 3.53, 2.65, scale]],
            },
            {
                name: 'img',
                params: ['/assets/classic-studies-2/pigeons/pigeon_dancing.png', [15.84, 11.05, 3.53, 2.65, scale]],
            },
            {
                name: 'img',
                params: ['/assets/classic-studies-2/pigeons/pigeon_hungry.png', [24.87, 11.05, 3.53, 2.65, scale]],
            },
            {name: 'img', params: ['/assets/classic-studies-2/pigeons/clock_15.png', [8.84, 8.25, 3, 2.25, scale]]},
            {name: 'img', params: ['/assets/classic-studies-2/pigeons/clock_60.png', [17.6, 8.25, 3, 2.25, scale]]},
            {name: 'img', params: ['/assets/classic-studies-2/pigeons/clock_20.png', [26.36, 8.25, 3, 2.25, scale]]},
            {name: 'text', params: ['15秒的时间间隔到了', [5.67, 14.42, 5.69, 0.94, scale], '#000000', 36]},
            {name: 'text', params: ['这只鸽子刚好在跳舞', [14.09, 14.42, 5.69, 0.94, scale], '#000000', 36]},
            {name: 'text', params: ['这只鸽子刚好啄了一下按钮', [22.01, 14.42, 7.62, 0.94, scale], 36]},
        ],
        correct_func: (components) => {
            return components[0].whereabout == 0;
        },
    };

    let level1 = {
        position: [10.47, 8.47, 2, 2, scale],
        paper: '/assets/classic-studies-2/pigeons/doc-2-1.jpg',
        prompt: '欢迎来到“迷信的鸽子”的章节，我们将学习如何使用操作性条件反射的知识让鸽子做出“迷信”的行为。请把<b>所有的东西</b>都选上吧。',
        objects: [
            '/assets/classic-studies-2/pigeons/clock_15.png',
            '/assets/classic-studies-2/pigeons/pigeon_full.png',
            '/assets/classic-studies-2/pigeons/clock_20.png',
            '/assets/classic-studies-2/pigeons/food.png',
            '/assets/classic-studies-2/pigeons/clock_30.png',
            '/assets/classic-studies-2/pigeons/pigeon_hungry.png',
            '/assets/classic-studies-2/pigeons/clock_60.png',
            '/assets/classic-studies-2/pigeons/pigeon_dancing.png',
            '/assets/classic-studies-2/pigeons/clock_10.png',
        ],
        correct: [0, 1, 2, 3, 4, 5, 6, 7, 8],
        scenes: [scene_1_1, scene_1_2, scene_1_3],
    };

    let scene_2_1 = {
        question:
            '每当临近投喂的时间，这只鸽子就会<b>跳起一支特殊的舞蹈</b>。请你猜猜在食物刚开始呈现的时候鸽子最可能在干什么？请把相应的鸽子拖进左侧的笼中。',
        layout: [
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-2/pigeons/pigeon_dancing.png',
                    [25.07, 4.61, 3.53, 2.65, scale],
                    true,
                    [[17.37, 11.48, 2, 2, scale]],
                    true,
                ],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-2/pigeons/pigeon_shaking.png',
                    [25.07, 8.38, 3.53, 2.65, scale],
                    true,
                    [[17.37, 11.48, 2, 2, scale]],
                    true,
                ],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-2/pigeons/pigeon_singing.png',
                    [25.07, 12.15, 3.53, 2.65, scale],
                    true,
                    [[17.37, 11.48, 2, 2, scale]],
                    true,
                ],
            },
            {name: 'img', params: ['/assets/classic-studies-2/pigeons/game4_1_1.png', [10.93, 4.61, 12, 9.84, scale]]},
            {name: 'img', params: ['/assets/classic-studies-2/pigeons/food.png', [12.81, 11.48, 2, 1.5, scale]]},
        ],
        correct_func: (components) => {
            return components[0].whereabout == 0 && components[1].whereabout == -1 && components[2].whereabout == -1;
        },
    };

    let scene_2_2 = {
        question:
            '研究者取消了对刚才那只鸽子的定时食物投喂。过了一小段时间，当再次观察装置里面时，鸽子最可能在干什么？请把相应的鸽子拖到装置中吧。',
        layout: [
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-2/pigeons/pigeon_dancing.png',
                    [25.07, 4.61, 3.53, 2.65, scale],
                    true,
                    [[17.37, 11.48, 2, 2, scale]],
                    true,
                ],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-2/pigeons/pigeon_shaking.png',
                    [25.07, 8.38, 3.53, 2.65, scale],
                    true,
                    [[17.37, 11.48, 2, 2, scale]],
                    true,
                ],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-2/pigeons/pigeon_singing.png',
                    [25.07, 12.15, 3.53, 2.65, scale],
                    true,
                    [[17.37, 11.48, 2, 2, scale]],
                    true,
                ],
            },
            {name: 'img', params: ['/assets/classic-studies-2/pigeons/game4_1_1.png', [10.93, 4.61, 12, 9.84, scale]]},
        ],
        correct_func: (components) => {
            return components[0].whereabout == 0 && components[1].whereabout == -1 && components[2].whereabout == -1;
        },
    };

    let level2 = {
        position: [21.4, 8.47, 2, 2, scale],
        paper: '/assets/classic-studies-2/pigeons/doc-2-2.jpg',
        prompt: '“迷信的鸽子”研究得出了什么结果呢？请选择<b>所有的鸽子</b>吧。',
        objects: [
            '/assets/classic-studies-2/pigeons/clock_15.png',
            '/assets/classic-studies-2/pigeons/pigeon_singing.png',
            '/assets/classic-studies-2/pigeons/clock_20.png',
            '/assets/classic-studies-2/pigeons/food.png',
            '/assets/classic-studies-2/pigeons/clock_30.png',
            '/assets/classic-studies-2/pigeons/pigeon_shaking.png',
            '/assets/classic-studies-2/pigeons/clock_60.png',
            '/assets/classic-studies-2/pigeons/pigeon_dancing.png',
            '/assets/classic-studies-2/pigeons/clock_10.png',
        ],
        correct: [1, 5, 7],
        scenes: [scene_2_1, scene_2_2],
    };

    return {
        map: '/assets/classic-studies-2/house_bg.jpg',
        background: '/assets/classic-studies-2/play_bg.jpg',
        marker: '/assets/classic-studies-2/room_flag.png',
        levels: [level1, level2],
    };
};
