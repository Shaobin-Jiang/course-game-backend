if (typeof window.loaded_sessions == 'undefined') {
    window.loaded_sessions = {};
}

window.loaded_sessions.maps = function () {
    let scale = 3200 / 33.87;

    let equals = (arr1, arr2) => arr1.every((value, index) => value.whereabout === arr2[index]);

    let scene_1_1 = {
        question:
            '在行为主义的时代，很多研究都是用老鼠和迷宫完成的。在你面前的就是一个迷宫。为了让小老鼠学会走迷宫，你需要把哪些东西放在迷宫的入口和出口？',
        layout: [
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-2/maps/food.png',
                    [24.34, 4.66, 2, 1.5, scale],
                    true,
                    [
                        [13.96, 12.4, 1, 1, scale],
                        [18.59, 12.4, 1, 1, scale],
                    ],
                    true,
                ],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-2/maps/mouse-hungry.png',
                    [24.34, 6.84, 2, 1.5, scale],
                    true,
                    [
                        [13.96, 12.4, 1, 1, scale],
                        [18.59, 12.4, 1, 1, scale],
                    ],
                    true,
                ],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-2/maps/mouse.png',
                    [24.34, 9.02, 2, 1.5, scale],
                    true,
                    [
                        [13.96, 12.4, 1, 1, scale],
                        [18.59, 12.4, 1, 1, scale],
                    ],
                    true,
                ],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-2/maps/water.png',
                    [24.34, 11.2, 2, 1.5, scale],
                    true,
                    [
                        [13.96, 12.4, 1, 1, scale],
                        [18.59, 12.4, 1, 1, scale],
                    ],
                    true,
                ],
            },
            {name: 'img', params: ['/assets/classic-studies-2/maps/game2_1_1.png', [12.93, 4.27, 8, 8.13, scale]]},
        ],
        correct_func: (components) => {
            return equals(components.slice(0, 4), [1, 0, -1, -1]);
        },
    };

    let level1 = {
        position: [7.06, 8.47, 2, 2, scale],
        paper: '/assets/classic-studies-2/maps/doc-4-1.jpg',
        prompt: '欢迎来到认知地图的章节！请选择所有的<b>小鼠、水和食物</b>。',
        objects: [
            '/assets/classic-studies-2/maps/stopper.png',
            '/assets/classic-studies-2/maps/left.png',
            '/assets/classic-studies-2/maps/mouse-hungry.png',
            '/assets/classic-studies-2/maps/water.png',
            '/assets/classic-studies-2/maps/food.png',
            '/assets/classic-studies-2/maps/film.png',
            '/assets/classic-studies-2/maps/point.png',
            '/assets/classic-studies-2/maps/mouse.png',
            '/assets/classic-studies-2/maps/right.png',
        ],
        correct: [2, 3, 4, 7],
        scenes: [scene_1_1],
    };

    let scene_2_1 = {
        question:
            '屏幕左侧是潜伏学习实验中三组小鼠探索迷宫时的错误次数随时间的变化。你知道三组小老鼠都接受了怎样的处理吗？请把物体拖到右侧迷宫的相应位置来还原第一组小鼠接受的处理吧。',
        layout: [
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-2/maps/food.png',
                    [24.34, 4.66, 2, 1.5, scale],
                    true,
                    [
                        [13.96, 12.4, 1, 1, scale],
                        [18.59, 12.4, 1, 1, scale],
                    ],
                    true,
                ],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-2/maps/mouse.png',
                    [24.34, 6.84, 2, 1.5, scale],
                    true,
                    [
                        [13.96, 12.4, 1, 1, scale],
                        [18.59, 12.4, 1, 1, scale],
                    ],
                    true,
                ],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-2/maps/mouse-hungry.png',
                    [24.34, 9.02, 2, 1.5, scale],
                    true,
                    [
                        [13.96, 12.4, 1, 1, scale],
                        [18.59, 12.4, 1, 1, scale],
                    ],
                    true,
                ],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-2/maps/mouse-thirsty.png',
                    [24.34, 11.2, 2, 1.5, scale],
                    true,
                    [
                        [13.96, 12.4, 1, 1, scale],
                        [18.59, 12.4, 1, 1, scale],
                    ],
                    true,
                ],
            },
            {name: 'img', params: ['/assets/classic-studies-2/maps/game2_1_1.png', [12.93, 4.27, 8, 8.13, scale]]},
            {name: 'img', params: ['/assets/classic-studies-2/maps/game2_2_1_1.png', [4.58, 5.97, 8, 6.1, scale]]},
        ],
        correct_func: (components) => {
            return equals(components.slice(0, 4), [-1, -1, 0, -1]);
        },
    };

    let scene_2_2 = {
        question:
            '第二组小鼠的实验条件和第一种不同，你还记得它是什么吗？请把物体拖到右侧的方框内来还原第二组小鼠接受的处理。',
        layout: [
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-2/maps/food.png',
                    [24.34, 4.66, 2, 1.5, scale],
                    true,
                    [
                        [13.96, 12.4, 1, 1, scale],
                        [18.59, 12.4, 1, 1, scale],
                    ],
                    true,
                ],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-2/maps/mouse.png',
                    [24.34, 6.84, 2, 1.5, scale],
                    true,
                    [
                        [13.96, 12.4, 1, 1, scale],
                        [18.59, 12.4, 1, 1, scale],
                    ],
                    true,
                ],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-2/maps/mouse-hungry.png',
                    [24.34, 9.02, 2, 1.5, scale],
                    true,
                    [
                        [13.96, 12.4, 1, 1, scale],
                        [18.59, 12.4, 1, 1, scale],
                    ],
                    true,
                ],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-2/maps/mouse-thirsty.png',
                    [24.34, 11.2, 2, 1.5, scale],
                    true,
                    [
                        [13.96, 12.4, 1, 1, scale],
                        [18.59, 12.4, 1, 1, scale],
                    ],
                    true,
                ],
            },
            {name: 'img', params: ['/assets/classic-studies-2/maps/game2_1_1.png', [12.93, 4.27, 8, 8.13, scale]]},
            {name: 'img', params: ['/assets/classic-studies-2/maps/game2_2_1_1.png', [4.58, 5.97, 8, 6.1, scale]]},
        ],
        correct_func: (components) => {
            return equals(components.slice(0, 4), [1, -1, 0, -1]);
        },
    };

    let scene_2_3 = {
        question:
            '第三组的处理本来和第一组是一样的，但后来发生了变化。请你把改变后的条件填在右侧的方框中吧。你可以通过左边的图表看出第三组的处理在何时改变的吗？如果可以，请你用右侧的小手指指出来。',
        layout: [
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-2/maps/food.png',
                    [24.34, 4.66, 2, 1.5, scale],
                    true,
                    [
                        [13.96, 12.4, 1, 1, scale],
                        [18.59, 12.4, 1, 1, scale],
                    ],
                    true,
                ],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-2/maps/mouse.png',
                    [24.34, 6.84, 2, 1.5, scale],
                    true,
                    [
                        [13.96, 12.4, 1, 1, scale],
                        [18.59, 12.4, 1, 1, scale],
                    ],
                    true,
                ],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-2/maps/mouse-hungry.png',
                    [24.34, 9.02, 2, 1.5, scale],
                    true,
                    [
                        [13.96, 12.4, 1, 1, scale],
                        [18.59, 12.4, 1, 1, scale],
                    ],
                    true,
                ],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-2/maps/mouse-thirsty.png',
                    [24.34, 11.2, 2, 1.5, scale],
                    true,
                    [
                        [13.96, 12.4, 1, 1, scale],
                        [18.59, 12.4, 1, 1, scale],
                    ],
                    true,
                ],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-2/maps/point.png',
                    [24.34, 13.38, 2, 1.5, scale],
                    true,
                    [
                        [6.09, 5.78, 1, 1, scale],
                        [7.95, 6.78, 1, 1, scale],
                        [9.81, 6.84, 1, 1, scale],
                    ],
                    true,
                ],
            },
            {name: 'img', params: ['/assets/classic-studies-2/maps/game2_1_1.png', [12.93, 4.27, 8, 8.13, scale]]},
            {name: 'img', params: ['/assets/classic-studies-2/maps/game2_2_1_1.png', [4.58, 5.97, 8, 6.1, scale]]},
        ],
        correct_func: (components) => {
            return equals(components.slice(0, 5), [1, -1, 0, -1, 1]);
        },
    };

    let scene_2_4 = {
        question:
            '这是Spence 和 Lippitt的实验装置。小老鼠会在这个迷宫里进行一段时间的训练。训练时，它会在迷宫里看到什么？请把老鼠和物品拖动相应的位置。',
        layout: [
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-2/maps/food.png',
                    [24.34, 4.66, 2, 1.5, scale],
                    true,
                    [
                        [14.29, 4.41, 1, 1, scale],
                        [18.58, 4.42, 1, 1, scale],
                        [16.43, 13.92, 1, 1, scale],
                    ],
                    true,
                ],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-2/maps/mouse.png',
                    [24.34, 6.84, 2, 1.5, scale],
                    true,
                    [
                        [14.29, 4.41, 1, 1, scale],
                        [18.58, 4.42, 1, 1, scale],
                        [16.43, 13.92, 1, 1, scale],
                    ],
                    true,
                ],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-2/maps/mouse-hungry.png',
                    [24.34, 9.02, 2, 1.5, scale],
                    true,
                    [
                        [14.29, 4.41, 1, 1, scale],
                        [18.58, 4.42, 1, 1, scale],
                        [16.43, 13.92, 1, 1, scale],
                    ],
                    true,
                ],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-2/maps/mouse-thirsty.png',
                    [24.34, 11.2, 2, 1.5, scale],
                    true,
                    [
                        [14.29, 4.41, 1, 1, scale],
                        [18.58, 4.42, 1, 1, scale],
                        [16.43, 13.92, 1, 1, scale],
                    ],
                    true,
                ],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-2/maps/water.png',
                    [24.34, 13.38, 2, 1.5, scale],
                    true,
                    [
                        [14.29, 4.41, 1, 1, scale],
                        [18.58, 4.42, 1, 1, scale],
                        [16.43, 13.92, 1, 1, scale],
                    ],
                    true,
                ],
            },
            {name: 'img', params: ['/assets/classic-studies-2/maps/game2_2_4.png', [14.29, 5.39, 5.29, 8.28, scale]]},
        ],
        correct_func: (components) => {
            return (
                equals(components.slice(0, 5), [0, 2, -1, -1, 1]) || equals(components.slice(0, 5), [1, 2, -1, -1, 0])
            );
        },
    };

    let scene_2_5 = {
        question:
            '现在，到了实验阶段。迷宫的尽头分别有食物和水。为了证明潜伏学习的存在，先前走过迷宫的小鼠需要分组接受不同的处理。请把处理后的两组小鼠拖放到迷宫的起点吧。',
        layout: [
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-2/maps/mouse.png',
                    [24.34, 4.66, 2, 1.5, scale],
                    true,
                    [
                        [15.31, 13.88, 1, 1, scale],
                        [17.56, 13.89, 1, 1, scale],
                    ],
                    true,
                ],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-2/maps/mouse-hungry.png',
                    [24.34, 6.84, 2, 1.5, scale],
                    true,
                    [
                        [15.31, 13.88, 1, 1, scale],
                        [17.56, 13.89, 1, 1, scale],
                    ],
                    true,
                ],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-2/maps/mouse-thirsty.png',
                    [24.34, 9.02, 2, 1.5, scale],
                    true,
                    [
                        [15.31, 13.88, 1, 1, scale],
                        [17.56, 13.89, 1, 1, scale],
                    ],
                    true,
                ],
            },
            {name: 'img', params: ['/assets/classic-studies-2/maps/game2_2_4.png', [14.29, 5.39, 5.29, 8.28, scale]]},
            {name: 'img', params: ['/assets/classic-studies-2/maps/food.png', [13.81, 3.89, 2, 1.5, scale]]},
            {name: 'img', params: ['/assets/classic-studies-2/maps/water.png', [18.04, 3.89, 2, 1.5, scale]]},
        ],
        correct_func: (components) => {
            return equals(components.slice(0, 3), [-1, 0, 1]) || equals(components.slice(0, 3), [-1, 1, 0]);
        },
    };

    let scene_2_6 = {
        question: '实验开始后，形成了认知地图的小老鼠会直接跑去哪里？请帮小鼠跑去它们想去的位置。',
        layout: [
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-2/maps/left.png',
                    [24.01, 5.86, 2, 1.5, scale],
                    true,
                    [
                        [15.31, 13.88, 1, 1, scale],
                        [17.56, 13.89, 1, 1, scale],
                    ],
                    true,
                ],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-2/maps/right.png',
                    [26.37, 5.86, 2, 1.5, scale],
                    true,
                    [
                        [15.31, 13.88, 1, 1, scale],
                        [17.56, 13.89, 1, 1, scale],
                    ],
                    true,
                ],
            },
            {name: 'img', params: ['/assets/classic-studies-2/maps/game2_2_4.png', [14.29, 5.39, 5.29, 8.28, scale]]},
            {name: 'img', params: ['/assets/classic-studies-2/maps/food.png', [13.81, 3.89, 2, 1.5, scale]]},
            {name: 'img', params: ['/assets/classic-studies-2/maps/water.png', [18.04, 3.89, 2, 1.5, scale]]},
            {name: 'img', params: ['/assets/classic-studies-2/maps/mouse-hungry.png', [13.24, 13.43, 2, 1.5, scale]]},
            {name: 'img', params: ['/assets/classic-studies-2/maps/mouse-thirsty.png', [18.62, 13.43, 2, 1.5, scale]]},
        ],
        correct_func: (components) => {
            return equals(components.slice(0, 2), [0, 1]);
        },
    };

    let level2 = {
        position: [15.93, 8.47, 2, 2, scale],
        paper: '/assets/classic-studies-2/maps/doc-4-2.jpg',
        prompt: '恭喜你进入了第二关。你还记得“潜伏学习”的实验吗？请选择<b>迷宫地图、小老鼠们、食物和水</b>。',
        objects: [
            '/assets/classic-studies-2/maps/right.png',
            '/assets/classic-studies-2/maps/mouse.png',
            '/assets/classic-studies-2/maps/food.png',
            '/assets/classic-studies-2/maps/mouse-thirsty.png',
            '/assets/classic-studies-2/maps/game2_1_1.png',
            '/assets/classic-studies-2/maps/water.png',
            '/assets/classic-studies-2/maps/stopper.png',
            '/assets/classic-studies-2/maps/left.png',
            '/assets/classic-studies-2/maps/mouse-hungry.png',
        ],
        correct: [1, 2, 3, 4, 5, 8],
        scenes: [scene_2_1, scene_2_2, scene_2_3, scene_2_4, scene_2_5, scene_2_6],
    };

    let scene_3_1 = {
        question:
            '你一定记得这是在空间定向实验中使用的两个装置。现在，小老鼠们已经熟悉了左边的这个迷宫。在把小老鼠放进右侧的迷宫前，还需要为右侧的迷宫进行一些布置。请用塞子塞住其中的一条通道。',
        layout: [
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-2/maps/stopper.png',
                    [26.13, 7.37, 2, 1.5, scale],
                    true,
                    [
                        [14.7, 10.5, 1, 1, scale],
                        [18.03, 7.87, 1, 1, scale],
                        [23.69, 10.5, 1, 1, scale],
                    ],
                    true,
                ],
            },
            {name: 'img', params: ['/assets/classic-studies-2/maps/game2_3_1_1.png', [8.92, 5.82, 6.31, 8, scale]]},
            {name: 'img', params: ['/assets/classic-studies-2/maps/game2_3_1_2.png', [15.7, 5.82, 8.02, 8, scale]]},
        ],
        correct_func: (components) => {
            return components[0].whereabout == 1;
        },
    };

    let scene_3_2 = {
        question:
            '饥饿的小老鼠被放进了新的迷宫，原来的迷宫中食物会出现的位置在新的放射状迷宫的右上角。小老鼠走进了原先的通道，却发现它被堵死了。请你猜猜小老鼠接下来会走进哪个管道呢？',
        layout: [
            {
                name: 'single-select',
                params: [
                    [[22.44, 11.61, 0.64, 0.61, scale], '/assets/classic-studies-2/maps/m1.png'],
                    [[22.3, 10.25, 0.64, 0.61, scale], '/assets/classic-studies-2/maps/m2.png'],
                    [[21.87, 9.03, 0.64, 0.61, scale], '/assets/classic-studies-2/maps/m3.png'],
                    [[21.41, 7.77, 0.64, 0.61, scale], '/assets/classic-studies-2/maps/m4.png'],
                    [[20.55, 6.57, 0.64, 0.61, scale], '/assets/classic-studies-2/maps/m5.png'],
                    [[19.76, 5.64, 0.64, 0.61, scale], '/assets/classic-studies-2/maps/m6.png'],
                    [[18.68, 4.89, 0.64, 0.61, scale], '/assets/classic-studies-2/maps/m7.png'],
                    [[17.42, 4.27, 0.64, 0.61, scale], '/assets/classic-studies-2/maps/m8.png'],
                    [[16.13, 3.97, 0.64, 0.61, scale], '/assets/classic-studies-2/maps/m9.png'],
                ],
            },
            {name: 'img', params: ['/assets/classic-studies-2/maps/game2_3_2.png', [10.93, 4.07, 12, 10.91, scale]]},
            {name: 'img', params: ['/assets/classic-studies-2/maps/mouse-hungry.png', [14.29, 11.17, 2, 1.5, scale]]},
        ],
        correct_func: (components) => {
            return components[0].selected = 5;
        }
    };

    let level3 = {
        position: [24.8, 8.47, 2, 2, scale],
        paper: '/assets/classic-studies-2/maps/doc-4-3.jpg',
        prompt: '欢迎来到第三关。在空间定向的实验中，你需要选择<b>塞子和一个数字符号</b>。',
        objects: [
            '/assets/classic-studies-2/maps/point.png',
            '/assets/classic-studies-2/maps/mouse-hungry.png',
            '/assets/classic-studies-2/maps/stopper.png',
            '/assets/classic-studies-2/maps/right.png',
            '/assets/classic-studies-2/maps/one.png',
            '/assets/classic-studies-2/maps/left.png',
            '/assets/classic-studies-2/maps/mouse.png',
            '/assets/classic-studies-2/maps/mouse-thirsty.png',
            '/assets/classic-studies-2/maps/film.png',
        ],
        correct: [2, 4],
        scenes: [scene_3_1, scene_3_2],
    };

    return {
        map: '/assets/classic-studies-2/house_bg.jpg',
        background: '/assets/classic-studies-2/play_bg.jpg',
        marker: '/assets/classic-studies-2/room_flag.png',
        levels: [level1, level2, level3],
    };
};
