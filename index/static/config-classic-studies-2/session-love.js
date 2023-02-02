if (typeof window.loaded_sessions == 'undefined') {
    window.loaded_sessions = {};
}

window.loaded_sessions.love = function () {
    let scale = 3200 / 33.87;

    let equals = (arr1, arr2) => arr1.every((value, index) => value.whereabout === arr2[index]);

    let scene_1_1 = {
        question:
            '在实验组中的8只小猴会遇到两个代理妈妈。现在，其中的一名代理妈妈已经就位了，你能找到另一个代理妈妈吗？请把它拖到相应的位置。',
        layout: [
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-2/love/cloth-mother.png',
                    [23.72, 3.43, 7.06, 5.29, scale],
                    true,
                    [[9.01, 8.93, 3, 3, scale]],
                    true,
                ],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-2/love/wire-mother.png',
                    [23.72, 9.51, 7.06, 5.29, scale],
                    true,
                    [[9.01, 8.93, 3, 3, scale]],
                    true,
                ],
            },
            {name: 'img', params: ['/assets/classic-studies-2/love/game3_1_1.png', [4.81, 4.76, 19.4, 9.52, scale]]},
            {
                name: 'img',
                params: ['/assets/classic-studies-2/love/cloth-mother.png', [14.34, 7.78, 7.06, 5.29, scale]],
            },
        ],
        correct_func: (components) => {
            return components[0].whereabout == -1 && components[1].whereabout == 0;
        },
    };

    let scene_1_2 = {
        question:
            '在一种实验条件下，代理妈妈们被放在幼猴居住的笼中。绒妈妈会向幼猴供应乳汁，而铁妈妈不会。请问幼猴会更多地和谁待在一起呢？请把幼猴拖到相应的位置吧。',
        layout: [
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-2/love/monkey.png',
                    [25.33, 7.43, 4, 3, scale],
                    true,
                    [
                        [9.01, 10.07, 3, 3, scale],
                        [16.37, 10.07, 3, 3, scale],
                    ],
                    true,
                ],
            },
            {name: 'img', params: ['/assets/classic-studies-2/love/game3_1_1.png', [4.81, 4.76, 19.4, 9.52, scale]]},
            {name: 'img', params: ['/assets/classic-studies-2/love/wire-mother.png', [7, 7.78, 7.06, 5.29, scale]]},
            {
                name: 'img',
                params: ['/assets/classic-studies-2/love/cloth-mother.png', [14.34, 7.78, 7.06, 5.29, scale]],
            },
        ],
        correct_func: (components) => {
            return components[0].whereabout == 1;
        },
    };

    let scene_1_3 = {
        question:
            '在另一种实验条件下，<b>提供乳汁的变成了铁妈妈，绒妈妈不再提供乳汁</b>。这种情况下幼猴会更多地和谁待在一起呢？请把幼猴拖到相应的位置。',
        layout: [
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-2/love/monkey.png',
                    [25.33, 7.43, 4, 3, scale],
                    true,
                    [
                        [9.01, 10.07, 3, 3, scale],
                        [16.37, 10.07, 3, 3, scale],
                    ],
                    true,
                ],
            },
            {name: 'img', params: ['/assets/classic-studies-2/love/game3_1_1.png', [4.81, 4.76, 19.4, 9.52, scale]]},
            {name: 'img', params: ['/assets/classic-studies-2/love/wire-mother.png', [7, 7.78, 7.06, 5.29, scale]]},
            {
                name: 'img',
                params: ['/assets/classic-studies-2/love/cloth-mother.png', [14.34, 7.78, 7.06, 5.29, scale]],
            },
        ],
        correct_func: (components) => {
            return components[0].whereabout == 1;
        },
    };

    let scene_1_4 = {
        question: '“咚咚咚！”笼子中多了一个又大又吓人的家伙，幼猴对它很害怕。它更可能跑向谁去寻找安慰呢？',
        layout: [
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-2/love/monkey.png',
                    [25.33, 7.43, 4, 3, scale],
                    true,
                    [
                        [9.01, 10.07, 3, 3, scale],
                        [16.37, 10.07, 3, 3, scale],
                    ],
                    true,
                ],
            },
            {name: 'img', params: ['/assets/classic-studies-2/love/game3_1_1.png', [4.81, 4.76, 19.4, 9.52, scale]]},
            {name: 'img', params: ['/assets/classic-studies-2/love/wire-mother.png', [7, 7.78, 7.06, 5.29, scale]]},
            {
                name: 'img',
                params: ['/assets/classic-studies-2/love/cloth-mother.png', [14.34, 7.78, 7.06, 5.29, scale]],
            },
            {name: 'img', params: ['/assets/classic-studies-2/love/fright.png', [10.81, 11.16, 7.06, 5.29, scale]]},
        ],
        correct_func: (components) => {
            return components[0].whereabout == 1;
        },
    };

    let level1 = {
        position: [7.06, 8.47, 2, 2, scale],
        paper: '/assets/classic-studies-2/love/doc-6-1.jpg',
        prompt: '大家好，欢迎来到新的章节。我们将在这一章里与恒河猴幼崽和代理妈妈们一起探索爱的起源。请选择<b>恒河猴幼崽和所有的代理妈妈</b>吧。',
        objects: [
            '/assets/classic-studies-2/love/cloth-mother.png',
            '/assets/classic-studies-2/love/wire-mother.png',
            '/assets/classic-studies-2/love/stool.png',
            '/assets/classic-studies-2/love/monkey.png',
            '/assets/classic-studies-2/love/fright.png',
            '/assets/classic-studies-2/love/wire-mother.png',
            '/assets/classic-studies-2/love/toy.png',
            '/assets/classic-studies-2/love/cloth-mother.png',
            '/assets/classic-studies-2/love/ladder.png',
        ],
        correct: [0, 1, 3, 5, 7],
        scenes: [scene_1_1, scene_1_2, scene_1_3, scene_1_4],
    };

    let scene_2_1 = {
        question:
            '在一片开阔的场地中，有一些幼猴可以互动的玩具，还有幼猴的代理绒妈妈。当幼猴<b>刚刚被放进这个陌生的环境中</b>时，它首先会跑向哪里？请把幼猴拖到相应的位置吧。',
        layout: [
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-2/love/monkey.png',
                    [23.99, 7.8, 4, 3, scale],
                    true,
                    [
                        [6.44, 11.47, 2, 2, scale],
                        [12.13, 12.73, 2, 2, scale],
                        [15.77, 10.68, 2, 2, scale],
                    ],
                    true,
                ],
            },
            {name: 'img', params: ['/assets/classic-studies-2/love/game3_2_1.png', [5.87, 3.97, 17.44, 11.11, scale]]},
            {name: 'img', params: ['/assets/classic-studies-2/love/toy.png', [3.92, 8.58, 7.06, 5.29, scale]]},
            {
                name: 'img',
                params: ['/assets/classic-studies-2/love/cloth-mother.png', [13.23, 7.39, 7.06, 5.29, scale]],
            },
        ],
        correct_func: (components) => {
            return components[0].whereabout == 2;
        },
    };

    let scene_2_2 = {
        question: '过了一段时间后，在<b>绒妈妈在场的情况下</b>，幼猴会如何行动？请把它拖放到相应的位置吧。',
        layout: [
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-2/love/monkey.png',
                    [23.99, 7.8, 4, 3, scale],
                    true,
                    [
                        [6.44, 11.47, 2, 2, scale],
                        [12.13, 12.73, 2, 2, scale],
                        [15.77, 10.68, 2, 2, scale],
                    ],
                    true,
                ],
            },
            {name: 'img', params: ['/assets/classic-studies-2/love/game3_2_1.png', [5.87, 3.97, 17.44, 11.11, scale]]},
            {name: 'img', params: ['/assets/classic-studies-2/love/toy.png', [3.92, 8.58, 7.06, 5.29, scale]]},
            {
                name: 'img',
                params: ['/assets/classic-studies-2/love/cloth-mother.png', [13.23, 7.39, 7.06, 5.29, scale]],
            },
        ],
        correct_func: (components) => {
            return components[0].whereabout == 0;
        },
    };

    let scene_2_3 = {
        question:
            '现在，开阔场地中没有代理妈妈出现。<b>幼猴奔向代理妈妈的位置，却没有发现绒妈妈</b>。请你把幼猴拖到接下来它会去的位置吧。',
        layout: [
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-2/love/monkey.png',
                    [23.99, 7.8, 4, 3, scale],
                    true,
                    [
                        [6.44, 11.47, 2, 2, scale],
                        [12.13, 12.73, 2, 2, scale],
                    ],
                    true,
                ],
            },
            {name: 'img', params: ['/assets/classic-studies-2/love/game3_2_3.png', [5.87, 3.97, 17.44, 11.11, scale]]},
            {name: 'img', params: ['/assets/classic-studies-2/love/toy.png', [3.92, 8.58, 7.06, 5.29, scale]]},
        ],
        correct_func: (components) => {
            return components[0].whereabout == 1;
        },
    };

    let scene_2_4 = {
        question: '现在开阔场地中<b>只有铁妈妈</b>。这时，幼猴表现得烦躁而焦急。它会去哪里呢？请把它拖到相应的位置吧。',
        layout: [
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-2/love/monkey.png',
                    [23.99, 7.8, 4, 3, scale],
                    true,
                    [
                        [6.44, 11.47, 2, 2, scale],
                        [12.13, 12.73, 2, 2, scale],
                        [15.77, 10.68, 2, 2, scale],
                    ],
                    true,
                ],
            },
            {name: 'img', params: ['/assets/classic-studies-2/love/game3_2_1.png', [5.87, 3.97, 17.44, 11.11, scale]]},
            {name: 'img', params: ['/assets/classic-studies-2/love/toy.png', [3.92, 8.58, 7.06, 5.29, scale]]},
            {name: 'img', params: ['/assets/classic-studies-2/love/wire-mother.png', [13.23, 7.39, 7.06, 5.29, scale]]},
        ],
        correct_func: (components) => {
            return components[0].whereabout == 1;
        },
    };

    let level2 = {
        position: [15.93, 8.47, 2, 2, scale],
        paper: '/assets/classic-studies-2/love/doc-6-2.jpg',
        prompt: '欢迎来到第二关。在开阔的场地里，幼猴和代理妈妈的关系又是怎样的呢？请选择<b>恒河猴的幼崽</b>吧。',
        objects: [
            '/assets/classic-studies-2/love/cloth-mother.png',
            '/assets/classic-studies-2/love/wire-mother.png',
            '/assets/classic-studies-2/love/stool.png',
            '/assets/classic-studies-2/love/monkey.png',
            '/assets/classic-studies-2/love/fright.png',
            '/assets/classic-studies-2/love/wire-mother.png',
            '/assets/classic-studies-2/love/toy.png',
            '/assets/classic-studies-2/love/cloth-mother.png',
            '/assets/classic-studies-2/love/ladder.png',
        ],
        correct: [3],
        scenes: [scene_2_1, scene_2_2, scene_2_3, scene_2_4],
    };

    let scene_3_1 = {
        question:
            '在开阔的场地中，有绒妈妈和一些玩具。和绒妈妈分离了一段时间的幼猴被放进了场地。请问接下来它会去哪里？请把幼猴拖到相应的位置吧。',
        layout: [
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-2/love/monkey.png',
                    [23.99, 7.8, 4, 3, scale],
                    true,
                    [
                        [6.44, 11.47, 2, 2, scale],
                        [12.13, 12.73, 2, 2, scale],
                        [15.77, 10.68, 2, 2, scale],
                    ],
                    true,
                ],
            },
            {name: 'img', params: ['/assets/classic-studies-2/love/game3_2_1.png', [5.87, 3.97, 17.44, 11.11, scale]]},
            {name: 'img', params: ['/assets/classic-studies-2/love/toy.png', [3.92, 8.58, 7.06, 5.29, scale]]},
            {
                name: 'img',
                params: ['/assets/classic-studies-2/love/cloth-mother.png', [13.23, 7.39, 7.06, 5.29, scale]],
            },
        ],
        correct_func: (components) => {
            return components[0].whereabout == 2;
        },
    };

    let scene_3_2 = {
        question:
            '在开阔的场地中，有绒妈妈和一些玩具。和绒妈妈分离了一段时间的幼猴被放进了场地。请问接下来它会去哪里？请把幼猴拖到相应的位置吧。',
        layout: [
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-2/love/monkey.png',
                    [23.99, 7.8, 4, 3, scale],
                    true,
                    [
                        [6.44, 11.47, 2, 2, scale],
                        [12.13, 12.73, 2, 2, scale],
                        [15.77, 10.68, 2, 2, scale],
                    ],
                    true,
                ],
            },
            {name: 'img', params: ['/assets/classic-studies-2/love/game3_2_1.png', [5.87, 3.97, 17.44, 11.11, scale]]},
            {name: 'img', params: ['/assets/classic-studies-2/love/toy.png', [3.92, 8.58, 7.06, 5.29, scale]]},
            {name: 'img', params: ['/assets/classic-studies-2/love/game3_3_2.png', [15.21, 6.65, 2.68, 5.83, scale]]},
        ],
        correct_func: (components) => {
            return components[0].whereabout == 2;
        },
    };

    let scene_3_3 = {
        question:
            '控制组的幼猴<b>没有和任何代理妈妈生活在一起</b>。当幼猴250天大时，两个代理妈妈被放进了笼中。幼猴一开始的反应会是什么样的呢？请把幼猴拖到合适的位置吧。',
        layout: [
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-2/love/monkey.png',
                    [25.33, 7.43, 4, 3, scale],
                    true,
                    [
                        [9.01, 10.07, 3, 3, scale],
                        [16.37, 10.07, 3, 3, scale],
                        [12.82, 13, 3, 3, scale],
                    ],
                    true,
                ],
            },
            {name: 'img', params: ['/assets/classic-studies-2/love/game3_1_1.png', [4.81, 4.76, 19.4, 9.52, scale]]},
            {name: 'img', params: ['/assets/classic-studies-2/love/wire-mother.png', [7, 7.78, 7.06, 5.29, scale]]},
            {
                name: 'img',
                params: ['/assets/classic-studies-2/love/cloth-mother.png', [14.34, 7.78, 7.06, 5.29, scale]],
            },
        ],
        correct_func: (components) => {
            return components[0].whereabout == 2;
        },
    };

    let scene_3_4 = {
        question:
            '<b>过了一段时间后</b>，控制组的幼猴对代理妈妈的态度有了变化。现在，它更可能去什么地方呢？请把幼猴拖到合适的位置吧。',
        layout: [
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-2/love/monkey.png',
                    [25.33, 7.43, 4, 3, scale],
                    true,
                    [
                        [9.01, 10.07, 3, 3, scale],
                        [16.37, 10.07, 3, 3, scale],
                        [12.82, 13, 3, 3, scale],
                    ],
                    true,
                ],
            },
            {name: 'img', params: ['/assets/classic-studies-2/love/game3_1_1.png', [4.81, 4.76, 19.4, 9.52, scale]]},
            {name: 'img', params: ['/assets/classic-studies-2/love/wire-mother.png', [7, 7.78, 7.06, 5.29, scale]]},
            {
                name: 'img',
                params: ['/assets/classic-studies-2/love/cloth-mother.png', [14.34, 7.78, 7.06, 5.29, scale]],
            },
        ],
        correct_func: (components) => {
            return components[0].whereabout == 1;
        },
    };

    let level3 = {
        position: [24.8, 8.47, 2, 2, scale],
        paper: '/assets/classic-studies-2/love/doc-6-3.jpg',
        prompt: '欢迎来到第三关。为了进一步研究接触安慰和依恋，研究者让小猴和代理妈妈分开了一段时间。此外，我们还会简单看看控制组小猴的情况。请选择<b>恒河猴的幼崽</b>吧。',
        objects: [
            '/assets/classic-studies-2/love/cloth-mother.png',
            '/assets/classic-studies-2/love/wire-mother.png',
            '/assets/classic-studies-2/love/stool.png',
            '/assets/classic-studies-2/love/monkey.png',
            '/assets/classic-studies-2/love/fright.png',
            '/assets/classic-studies-2/love/wire-mother.png',
            '/assets/classic-studies-2/love/toy.png',
            '/assets/classic-studies-2/love/cloth-mother.png',
            '/assets/classic-studies-2/love/ladder.png',
        ],
        correct: [3],
        scenes: [scene_3_1, scene_3_2, scene_3_3, scene_3_4],
    };

    return {
        map: '/assets/classic-studies-2/house_bg.jpg',
        background: '/assets/classic-studies-2/play_bg.jpg',
        marker: '/assets/classic-studies-2/room_flag.png',
        levels: [level1, level2, level3],
    };
};
