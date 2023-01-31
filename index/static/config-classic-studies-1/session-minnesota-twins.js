if (typeof window.loaded_sessions == 'undefined') {
    window.loaded_sessions = {};
}

window.loaded_sessions.minnesota_twins = function () {
    let scale = 3200 / 33.87;

    let scene_1_1 = {
        question:
            '在这些人群中，有些有着很相似的基因，有些有着很相似的环境。你能按照他们受到的基因和环境的影响的相似程度，把他们排序，并放到下面的格子中吗？',
        layout: [
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-1/minnesota-twins/market2_card1.png',
                    [6, 2.96, 4, 2.9, scale],
                    true,
                    [
                        [12.48, 5.95, 4, 2.9, scale],
                        [12.48, 10.48, 4, 2.9, scale],
                        [18.72, 10.48, 4, 2.9, scale],
                        [24.95, 10.48, 4, 2.9, scale],
                    ],
                    true,
                ],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-1/minnesota-twins/market2_card4.png',
                    [6, 6.12, 4, 2.9, scale],
                    true,
                    [
                        [12.48, 5.95, 4, 2.9, scale],
                        [12.48, 10.48, 4, 2.9, scale],
                        [18.72, 10.48, 4, 2.9, scale],
                        [24.95, 10.48, 4, 2.9, scale],
                    ],
                    true,
                ],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-1/minnesota-twins/market2_card8.png',
                    [6, 9.29, 4, 2.9, scale],
                    true,
                    [
                        [12.48, 5.95, 4, 2.9, scale],
                        [12.48, 10.48, 4, 2.9, scale],
                        [18.72, 10.48, 4, 2.9, scale],
                        [24.95, 10.48, 4, 2.9, scale],
                    ],
                    true,
                ],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-1/minnesota-twins/market2_card9.png',
                    [6, 12.46, 4, 2.9, scale],
                    true,
                    [
                        [12.48, 5.95, 4, 2.9, scale],
                        [12.48, 10.48, 4, 2.9, scale],
                        [18.72, 10.48, 4, 2.9, scale],
                        [24.95, 10.48, 4, 2.9, scale],
                    ],
                    true,
                ],
            },
            {name: 'img', params: ['/assets/classic-studies-1/minnesota-twins/play_graph.png', [10.28, 3.84, 18.67, 10.02, scale]]},
            {name: 'img', params: ['/assets/classic-studies-1/minnesota-twins/play_card.png', [12.48, 5.95, 4, 2.9, scale]]},
            {name: 'img', params: ['/assets/classic-studies-1/minnesota-twins/play_card.png', [12.48, 10.48, 4, 2.9, scale]]},
            {name: 'img', params: ['/assets/classic-studies-1/minnesota-twins/play_card.png', [18.72, 10.48, 4, 2.9, scale]]},
            {name: 'img', params: ['/assets/classic-studies-1/minnesota-twins/play_card.png', [24.95, 10.48, 4, 2.9, scale]]},
            {name: 'img', params: ['/assets/classic-studies-1/minnesota-twins/market2_card6.png', [18.72, 5.95, 4, 2.9, scale]]},
            {name: 'img', params: ['/assets/classic-studies-1/minnesota-twins/market2_card2.png', [24.95, 5.95, 4, 2.9, scale]]},
        ],
        correct_func: (components) => {
            return (
                components[0].whereabout == 3 &&
                components[1].whereabout == 0 &&
                components[2].whereabout == 2 &&
                components[3].whereabout == 1
            );
        },
    };

    let level1 = {
        position: [8.91, 4.37, 2, 2, scale],
        paper: '/assets/classic-studies-1/minnesota-twins/doc-2-1.jpg',
        prompt: '大家好，今天我们迎来了另一个章节的学习。你准备好了吗？在接下来的游戏中，你会遇到一些我们关注的人群，他们的名字都分门别类地写在了这些卡片上。请你选择所有<b>写着字的方块</b>。',
        objects: [
            '/assets/classic-studies-1/minnesota-twins/market2_card1.png',
            '/assets/classic-studies-1/minnesota-twins/market2_card2.png',
            '/assets/classic-studies-1/minnesota-twins/market2_card3.png',
            '/assets/classic-studies-1/minnesota-twins/market2_card4.png',
            '/assets/classic-studies-1/minnesota-twins/market2_card5.png',
            '/assets/classic-studies-1/minnesota-twins/market2_card6.png',
            '/assets/classic-studies-1/minnesota-twins/market2_card7.png',
            '/assets/classic-studies-1/minnesota-twins/market2_card8.png',
            '/assets/classic-studies-1/minnesota-twins/market2_card9.png',
        ],
        correct: [0, 1, 3, 5, 7, 8],
        scenes: [scene_1_1],
    };

    let scene_2_1 = {
        question:
            '科学家们用相关系数来表示这个图中两个量的相互关联的程度，你能找出横坐标和纵坐标的相关系数是<b>0.8左右</b>的图吗？',
        layout: [
            {
                name: 'single-select',
                params: [
                    [[7.56, 3.13, 8, 5.8, scale], '/assets/classic-studies-1/minnesota-twins/play_a.jpg'],
                    [[18.3, 3.13, 8, 5.8, scale], '/assets/classic-studies-1/minnesota-twins/play_b.jpg'],
                    [[7.56, 9.88, 8, 5.8, scale], '/assets/classic-studies-1/minnesota-twins/play_c.jpg'],
                    [[18.3, 9.88, 8, 5.8, scale], '/assets/classic-studies-1/minnesota-twins/play_d.jpg'],
                ],
            },
        ],
        correct_func: (components) => {
            return components[0].selected == 1;
        },
    };

    let level2 = {
        position: [22.78, 3.97, 2, 2, scale],
        paper: '/assets/classic-studies-1/minnesota-twins/doc-2-2.jpg',
        prompt: '请你选择所有画着小点点的图片。它们的名字叫做“<b>散点图</b>”，你应该已经在阅读材料中见过它们了，在游戏里你们还会再次相遇的。',
        objects: [
            '/assets/classic-studies-1/minnesota-twins/market2_card11.png',
            '/assets/classic-studies-1/minnesota-twins/market2_card12.png',
            '/assets/classic-studies-1/minnesota-twins/market2_card13.png',
            '/assets/classic-studies-1/minnesota-twins/market2_card14.png',
            '/assets/classic-studies-1/minnesota-twins/market2_card15.png',
            '/assets/classic-studies-1/minnesota-twins/market2_card16.png',
            '/assets/classic-studies-1/minnesota-twins/market2_card17.png',
            '/assets/classic-studies-1/minnesota-twins/market2_card18.png',
            '/assets/classic-studies-1/minnesota-twins/market2_card19.png',
        ],
        correct: [1, 3, 5, 7],
        scenes: [scene_2_1],
    };

    let scene_3_1 = {
        question: '在这个研究中，研究者使用了一个比值来考察遗传因素和环境因素的作用。你还记得这个比值是什么吗？',
        layout: [
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-1/minnesota-twins/market2_card11.png',
                    [4.82, 2.93, 4, 2.9, scale],
                    true,
                    [
                        [11.14, 8.01, 4, 2.9, scale],
                        [18.72, 8.01, 4, 2.9, scale],
                    ],
                    true,
                ],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-1/minnesota-twins/market2_card13.png',
                    [4.82, 6.05, 4, 2.9, scale],
                    true,
                    [
                        [11.14, 8.01, 4, 2.9, scale],
                        [18.72, 8.01, 4, 2.9, scale],
                    ],
                    true,
                ],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-1/minnesota-twins/market2_card17.png',
                    [4.82, 9.19, 4, 2.9, scale],
                    true,
                    [
                        [11.14, 8.01, 4, 2.9, scale],
                        [18.72, 8.01, 4, 2.9, scale],
                    ],
                    true,
                ],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-1/minnesota-twins/market2_card19.png',
                    [4.82, 12.33, 4, 2.9, scale],
                    true,
                    [
                        [11.14, 8.01, 4, 2.9, scale],
                        [18.72, 8.01, 4, 2.9, scale],
                    ],
                    true,
                ],
            },
            {name: 'img', params: ['/assets/classic-studies-1/minnesota-twins/play_card11.png', [11.14, 8.01, 4, 2.9, scale]]},
            {name: 'img', params: ['/assets/classic-studies-1/minnesota-twins/play_card11.png', [18.72, 8.01, 4, 2.9, scale]]},
            {name: 'img', params: ['/assets/classic-studies-1/minnesota-twins/colon.png', [16.14, 8.41, 1.58, 2.23, scale]]},
        ],
        correct_func: (components) => {
            return (
                components[0].whereabout + components[2].whereabout == 1 &&
                components[1].whereabout == -1 &&
                components[3].whereabout == -1
            );
        },
    };

    let scene_3_2 = {
        question:
            '在这个研究中，这个比值得出怎样的结果才说明<b>智力差异大部分由遗传因素决定</b>呢？请将式子的结果拖到右侧',
        layout: [
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-1/minnesota-twins/market2_less.png',
                    [4.98, 2.96, 4, 3, scale],
                    true,
                    [[24.71, 8.03, 4, 3, scale]],
                    true,
                ],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-1/minnesota-twins/market2_equal1.png',
                    [4.98, 6.15, 4, 3, scale],
                    true,
                    [[24.71, 8.03, 4, 3, scale]],
                    true,
                ],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-1/minnesota-twins/market2_more.png',
                    [4.98, 9.34, 4, 3, scale],
                    true,
                    [[24.71, 8.03, 4, 3, scale]],
                    true,
                ],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-1/minnesota-twins/market2_equal0.png',
                    [4.98, 12.53, 4, 3, scale],
                    true,
                    [[24.71, 8.03, 4, 3, scale]],
                    true,
                ],
            },
            {name: 'img', params: ['/assets/classic-studies-1/minnesota-twins/market2_card11.png', [11.14, 8.01, 4, 2.9, scale]]},
            {name: 'img', params: ['/assets/classic-studies-1/minnesota-twins/market2_card17.png', [18.72, 8.01, 4, 2.9, scale]]},
            {name: 'img', params: ['/assets/classic-studies-1/minnesota-twins/colon.png', [16.14, 8.41, 1.58, 2.23, scale]]},
        ],
        correct_func: (components) => {
            return (
                components[1].whereabout == 0 &&
                components[0].whereabout == -1 &&
                components[2].whereabout == -1 &&
                components[3].whereabout == -1
            );
        },
    };

    let scene_3_3 = {
        question:
            '如果在另一个星球上有一群外星人，智力的差异几乎全都是由<b>环境因素</b>决定的，而它们的其他方面都和地球人一模一样，这个比值应该是怎样的呢？',
        layout: [
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-1/minnesota-twins/market2_less.png',
                    [4.98, 2.96, 4, 3, scale],
                    true,
                    [[24.71, 8.03, 4, 3, scale]],
                    true,
                ],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-1/minnesota-twins/market2_equal1.png',
                    [4.98, 6.15, 4, 3, scale],
                    true,
                    [[24.71, 8.03, 4, 3, scale]],
                    true,
                ],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-1/minnesota-twins/market2_more.png',
                    [4.98, 9.34, 4, 3, scale],
                    true,
                    [[24.71, 8.03, 4, 3, scale]],
                    true,
                ],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-1/minnesota-twins/market2_equal0.png',
                    [4.98, 12.53, 4, 3, scale],
                    true,
                    [[24.71, 8.03, 4, 3, scale]],
                    true,
                ],
            },
            {name: 'img', params: ['/assets/classic-studies-1/minnesota-twins/market2_card11.png', [11.14, 8.01, 4, 2.9, scale]]},
            {name: 'img', params: ['/assets/classic-studies-1/minnesota-twins/market2_card17.png', [18.72, 8.01, 4, 2.9, scale]]},
            {name: 'img', params: ['/assets/classic-studies-1/minnesota-twins/colon.png', [16.14, 8.41, 1.58, 2.23, scale]]},
        ],
        correct_func: (components) => {
            return (
                components[3].whereabout == 0 &&
                components[0].whereabout == -1 &&
                components[1].whereabout == -1 &&
                components[2].whereabout == -1
            );
        },
    };

    let scene_3_4 = {
        question:
            '诶~我还想知道这个研究里没有提到的一件事。我想知道<b>同卵双生子和异卵双生子谁的智力相似程度更高</b>，所以做了这个计算。你能猜一猜它的结果吗？',
        layout: [
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-1/minnesota-twins/market2_less.png',
                    [4.98, 2.96, 4, 3, scale],
                    true,
                    [[24.71, 8.03, 4, 3, scale]],
                    true,
                ],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-1/minnesota-twins/market2_equal1.png',
                    [4.98, 6.15, 4, 3, scale],
                    true,
                    [[24.71, 8.03, 4, 3, scale]],
                    true,
                ],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-1/minnesota-twins/market2_more.png',
                    [4.98, 9.34, 4, 3, scale],
                    true,
                    [[24.71, 8.03, 4, 3, scale]],
                    true,
                ],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-1/minnesota-twins/market2_equal0.png',
                    [4.98, 12.53, 4, 3, scale],
                    true,
                    [[24.71, 8.03, 4, 3, scale]],
                    true,
                ],
            },
            {name: 'img', params: ['/assets/classic-studies-1/minnesota-twins/market2_card19.png', [11.14, 8.01, 4, 2.9, scale]]},
            {name: 'img', params: ['/assets/classic-studies-1/minnesota-twins/market2_card17.png', [18.72, 8.01, 4, 2.9, scale]]},
            {name: 'img', params: ['/assets/classic-studies-1/minnesota-twins/colon.png', [16.14, 8.41, 1.58, 2.23, scale]]},
        ],
        correct_func: (components) => {
            return (
                components[0].whereabout == 0 &&
                components[1].whereabout == -1 &&
                components[2].whereabout == -1 &&
                components[3].whereabout == -1
            );
        },
    };

    let scene_3_5 = {
        question:
            '我们还记得遗传因素的作用是比较大的。但如果在另一个星球上事情是反过来的呢？在另一个星球上，<b>环境因素的作用特别大，遗传因素的作用几乎没有</b>，那么这个比值会是怎样的呢？',
        layout: [
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-1/minnesota-twins/market2_less.png',
                    [4.98, 2.96, 4, 3, scale],
                    true,
                    [[24.71, 8.03, 4, 3, scale]],
                    true,
                ],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-1/minnesota-twins/market2_equal1.png',
                    [4.98, 6.15, 4, 3, scale],
                    true,
                    [[24.71, 8.03, 4, 3, scale]],
                    true,
                ],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-1/minnesota-twins/market2_more.png',
                    [4.98, 9.34, 4, 3, scale],
                    true,
                    [[24.71, 8.03, 4, 3, scale]],
                    true,
                ],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-1/minnesota-twins/market2_equal0.png',
                    [4.98, 12.53, 4, 3, scale],
                    true,
                    [[24.71, 8.03, 4, 3, scale]],
                    true,
                ],
            },
            {name: 'img', params: ['/assets/classic-studies-1/minnesota-twins/market2_card19.png', [11.14, 8.01, 4, 2.9, scale]]},
            {name: 'img', params: ['/assets/classic-studies-1/minnesota-twins/market2_card17.png', [18.72, 8.01, 4, 2.9, scale]]},
            {name: 'img', params: ['/assets/classic-studies-1/minnesota-twins/colon.png', [16.14, 8.41, 1.58, 2.23, scale]]},
        ],
        correct_func: (components) => {
            return (
                components[1].whereabout == 0 &&
                components[0].whereabout == -1 &&
                components[2].whereabout == -1 &&
                components[3].whereabout == -1
            );
        },
    };

    let scene_3_6 = {
        question:
            '我还想比一比。如果是这个呢？它的比值会是怎样的？我得告诉你，这依然是发生在另一个星球上的事，<b>环境因素的影响很大，遗传因素的影响很小</b>',
        layout: [
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-1/minnesota-twins/market2_less.png',
                    [4.98, 2.96, 4, 3, scale],
                    true,
                    [[24.71, 8.03, 4, 3, scale]],
                    true,
                ],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-1/minnesota-twins/market2_equal1.png',
                    [4.98, 6.15, 4, 3, scale],
                    true,
                    [[24.71, 8.03, 4, 3, scale]],
                    true,
                ],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-1/minnesota-twins/market2_more.png',
                    [4.98, 9.34, 4, 3, scale],
                    true,
                    [[24.71, 8.03, 4, 3, scale]],
                    true,
                ],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-1/minnesota-twins/market2_equal0.png',
                    [4.98, 12.53, 4, 3, scale],
                    true,
                    [[24.71, 8.03, 4, 3, scale]],
                    true,
                ],
            },
            {name: 'img', params: ['/assets/classic-studies-1/minnesota-twins/market2_card19.png', [11.14, 8.01, 4, 2.9, scale]]},
            {name: 'img', params: ['/assets/classic-studies-1/minnesota-twins/market2_card11.png', [18.72, 8.01, 4, 2.9, scale]]},
            {name: 'img', params: ['/assets/classic-studies-1/minnesota-twins/colon.png', [16.14, 8.41, 1.58, 2.23, scale]]},
        ],
        correct_func: (components) => {
            return (
                components[2].whereabout == 0 &&
                components[0].whereabout == -1 &&
                components[1].whereabout == -1 &&
                components[3].whereabout == -1
            );
        },
    };

    let scene_3_7 = {
        question: '最后再来比一个！请你猜猜这个式子的结果会是怎样的吧！',
        layout: [
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-1/minnesota-twins/market2_less.png',
                    [4.98, 2.96, 4, 3, scale],
                    true,
                    [[24.71, 8.03, 4, 3, scale]],
                    true,
                ],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-1/minnesota-twins/market2_equal1.png',
                    [4.98, 6.15, 4, 3, scale],
                    true,
                    [[24.71, 8.03, 4, 3, scale]],
                    true,
                ],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-1/minnesota-twins/market2_more.png',
                    [4.98, 9.34, 4, 3, scale],
                    true,
                    [[24.71, 8.03, 4, 3, scale]],
                    true,
                ],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-1/minnesota-twins/market2_equal0.png',
                    [4.98, 12.53, 4, 3, scale],
                    true,
                    [[24.71, 8.03, 4, 3, scale]],
                    true,
                ],
            },
            {name: 'img', params: ['/assets/classic-studies-1/minnesota-twins/market2_card13.png', [11.14, 8.01, 4, 2.9, scale]]},
            {name: 'img', params: ['/assets/classic-studies-1/minnesota-twins/market2_card11.png', [18.72, 8.01, 4, 2.9, scale]]},
            {name: 'img', params: ['/assets/classic-studies-1/minnesota-twins/colon.png', [16.14, 8.41, 1.58, 2.23, scale]]},
        ],
        correct_func: (components) => {
            return (
                components[0].whereabout == 0 &&
                components[1].whereabout == -1 &&
                components[2].whereabout == -1 &&
                components[3].whereabout == -1
            );
        },
    }

    let level3 = {
        position: [22.37, 16.82, 2, 2, scale],
        paper: '/assets/classic-studies-1/minnesota-twins/doc-2-3.jpg',
        prompt: '还剩下最后一关，加油！请选择<b>除了小星星以外的所有方块</b>。它们的用处是什么呢？请到游戏里看一看吧！',
        objects: [
            '/assets/classic-studies-1/minnesota-twins/market2_card11.png',
            '/assets/classic-studies-1/minnesota-twins/market2_less.png',
            '/assets/classic-studies-1/minnesota-twins/market2_card13.png',
            '/assets/classic-studies-1/minnesota-twins/market2_card17.png',
            '/assets/classic-studies-1/minnesota-twins/market2_card15.png',
            '/assets/classic-studies-1/minnesota-twins/market2_equal1.png',
            '/assets/classic-studies-1/minnesota-twins/market2_more.png',
            '/assets/classic-studies-1/minnesota-twins/market2_equal0.png',
            '/assets/classic-studies-1/minnesota-twins/market2_card19.png',
        ],
        correct: [0, 1, 2, 3, 5, 6, 7, 8],
        scenes: [scene_3_1, scene_3_2, scene_3_3, scene_3_4, scene_3_5, scene_3_6, scene_3_7],
    };

    return {
        map: '/assets/classic-studies-1/minnesota-twins/house2_bg.jpg',
        background: '/assets/classic-studies-1/minnesota-twins/play_2_bg.jpg',
        marker: '/assets/classic-studies-1/minnesota-twins/room_baby.png',
        levels: [level1, level2, level3],
    };
};
