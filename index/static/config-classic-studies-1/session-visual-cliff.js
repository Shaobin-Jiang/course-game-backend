if (typeof window.loaded_sessions == 'undefined') {
    window.loaded_sessions = {};
}

window.loaded_sessions.visual_cliff = function () {
    let scale = 3200 / 33.87;

    let scene_1_1 = {
        question:
            '现在，你面前的是视崖装置被拆解后的各个部分，它们刚好可以拼成一个完整的视崖装置。有一块视崖装置的框架已经被放置在屏幕中央了，你能拖动其他组件，完成之后的拼装吗？',
        layout: [
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-1/visual-cliff/device-middle.png',
                    [20.71, 10, 7, 5.74, scale],
                    true,
                    [[12.2, 8.63, 1.37, 1.37, scale]],
                    true,
                    false,
                ],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-1/visual-cliff/device-right.png',
                    [18.11, 3.27, 10.73, 5.78, scale],
                    true,
                    [[10.68, 8.84, 1.37, 1.37, scale]],
                    true,
                    false,
                ],
            },
            {name: 'img', params: ['/assets/classic-studies-1/visual-cliff/device-left.png', [6, 6.71, 10.73, 5.64, scale]]},
        ],
        correct_func: (components) => {
            return components[0].whereabout == 0 && components[1].whereabout == 0;
        },
    };

    let scene_1_2 = {
        question:
            '在研究中，研究者把一位小宝宝放在视崖装置中间的平台上，让小宝宝的妈妈站在视崖装置的一侧呼唤小宝宝，可是小宝宝却<b>哭闹起来</b>。你知道这时候小宝宝的位置吗？请你把小宝宝拖放到正确的位置。',
        layout: [
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-1/visual-cliff/terrified-baby.png',
                    [4.37, 3.74, 5.04, 3.78, scale],
                    true,
                    [
                        [12.42, 6.15, 1.37, 1.37, scale],
                        [16.11, 6.15, 1.37, 1.37, scale],
                        [19.81, 6.15, 1.37, 1.37, scale],
                    ],
                    true,
                ],
            },
            {name: 'img', params: ['/assets/classic-studies-1/visual-cliff/device.png', [9.01, 5.2, 15.85, 8.65, scale]]},
        ],
        correct_func: (components) => {
            return components[0].whereabout == 1;
        },
    };

    let scene_1_3 = {
        question:
            '在研究中，研究者把一位小宝宝放在视崖装置中间的平台上，让小宝宝的妈妈站在视崖装置的一侧呼唤小宝宝，于是小宝宝<b>开始尝试着爬过去</b>。你知道这时候小宝宝的位置吗？请你把小宝宝拖放到正确的位置。',
        layout: [
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-1/visual-cliff/normal-baby.png',
                    [4.37, 3.74, 5.04, 3.78, scale],
                    true,
                    [
                        [12.42, 5.01, 1.37, 2.51, scale],
                        [16.11, 5.01, 1.37, 2.51, scale],
                        [19.81, 5.01, 1.37, 2.51, scale],
                    ],
                    true,
                ],
            },
            {name: 'img', params: ['/assets/classic-studies-1/visual-cliff/device.png', [9.01, 5.2, 15.85, 8.65, scale]]},
        ],
        correct_func: (components) => {
            return components[0].whereabout == 0;
        },
    };

    let level1 = {
        position: [2.91, 8.18, 2, 2, scale],
        paper: '/assets/classic-studies-1/visual-cliff/doc-4-1.jpg',
        prompt: '大家好！欢迎来到视崖的小游戏。在视崖的实验中，研究者使用了一种叫做视崖的装置，现在这个装置被拆开成一片一片的了，<b>请你选择这些部分</b>；此外，请你选择<b>两个刚刚学会爬行的小宝宝</b>。他们为什么表现出了不同的反应？',
        objects: [
            '/assets/classic-studies-1/visual-cliff/terrified-sheep.png',
            '/assets/classic-studies-1/visual-cliff/normal-rat.png',
            '/assets/classic-studies-1/visual-cliff/normal-chick.png',
            '/assets/classic-studies-1/visual-cliff/normal-cat.png',
            '/assets/classic-studies-1/visual-cliff/terrified-baby.png',
            '/assets/classic-studies-1/visual-cliff/normal-baby.png',
            '/assets/classic-studies-1/visual-cliff/device-left.png',
            '/assets/classic-studies-1/visual-cliff/device-middle.png',
            '/assets/classic-studies-1/visual-cliff/device-right.png',
        ],
        correct: [4, 5, 6, 7, 8],
        scenes: [scene_1_1, scene_1_2, scene_1_3],
    };

    let scene_2_1 = {
        question:
            '在研究中，研究者把一只刚出生一天的小鸡放在视崖装置上，小鸡表现出了<b>很害怕的样子</b>。你能猜出它被放在了哪一侧吗？请你把小鸡拖放到正确的位置。',
        layout: [
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-1/visual-cliff/normal-chick.png',
                    [25.09, 3.15, 4, 3, scale],
                    true,
                    [
                        [12.42, 5.01, 1.37, 2.51, scale],
                        [16.11, 5.01, 1.37, 2.51, scale],
                        [19.81, 5.01, 1.37, 2.51, scale],
                    ],
                    true,
                ],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-1/visual-cliff/terrified-chick.png',
                    [25.09, 6.81, 4, 3, scale],
                    true,
                    [
                        [12.42, 5.01, 1.37, 2.51, scale],
                        [16.11, 5.01, 1.37, 2.51, scale],
                        [19.81, 5.01, 1.37, 2.51, scale],
                    ],
                    true,
                ],
            },
            {name: 'img', params: ['/assets/classic-studies-1/visual-cliff/device.png', [9.01, 5.2, 15.85, 8.65, scale]]},
        ],
        correct_func: (components) => {
            return components[0].whereabout == -1 && components[1].whereabout == 2;
        },
    };

    let scene_2_2 = {
        question:
            '在研究中，研究者把一只刚出生一天的小鸡放在视崖装置上，小鸡表现得<b>很镇定</b>。你能猜出它被放在了哪一侧吗？请你把小鸡拖放到正确的位置。',
        layout: [
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-1/visual-cliff/normal-chick.png',
                    [25.09, 3.15, 4, 3, scale],
                    true,
                    [
                        [12.42, 5.01, 1.37, 2.51, scale],
                        [16.11, 5.01, 1.37, 2.51, scale],
                        [19.81, 5.01, 1.37, 2.51, scale],
                    ],
                    true,
                ],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-1/visual-cliff/terrified-chick.png',
                    [25.09, 6.81, 4, 3, scale],
                    true,
                    [
                        [12.42, 5.01, 1.37, 2.51, scale],
                        [16.11, 5.01, 1.37, 2.51, scale],
                        [19.81, 5.01, 1.37, 2.51, scale],
                    ],
                    true,
                ],
            },
            {name: 'img', params: ['/assets/classic-studies-1/visual-cliff/device.png', [9.01, 5.2, 15.85, 8.65, scale]]},
        ],
        correct_func: (components) => {
            return components[0].whereabout == 0 && components[1].whereabout == -1;
        },
    };

    let scene_2_3 = {
        question:
            '在研究中，研究者把一只刚出生一天的小羊放在视崖装置上，小羊看上去<b>很害怕，它的肢体都僵直了</b>。你能猜出它被放在了哪一侧吗？请你把小羊拖放到正确的位置。',
        layout: [
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-1/visual-cliff/normal-sheep.png',
                    [25.09, 3.15, 4, 3, scale],
                    true,
                    [
                        [12.42, 5.01, 1.37, 2.51, scale],
                        [16.11, 5.01, 1.37, 2.51, scale],
                        [19.81, 5.01, 1.37, 2.51, scale],
                    ],
                    true,
                ],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-1/visual-cliff/terrified-sheep.png',
                    [25.09, 6.81, 4, 3, scale],
                    true,
                    [
                        [12.42, 5.01, 1.37, 2.51, scale],
                        [16.11, 5.01, 1.37, 2.51, scale],
                        [19.81, 5.01, 1.37, 2.51, scale],
                    ],
                    true,
                ],
            },
            {name: 'img', params: ['/assets/classic-studies-1/visual-cliff/device.png', [9.01, 5.2, 15.85, 8.65, scale]]},
        ],
        correct_func: (components) => {
            return components[0].whereabout == -1 && components[1].whereabout == 2;
        },
    };

    let scene_2_4 = {
        question:
            '在研究中，研究者把一只刚出生一天的小羊放在视崖装置上，小羊看上去<b>很镇定</b>。你能猜出它被放在了哪一侧吗？请你把小羊拖放到正确的位置。',
        layout: [
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-1/visual-cliff/normal-sheep.png',
                    [25.09, 3.15, 4, 3, scale],
                    true,
                    [
                        [12.42, 5.01, 1.37, 2.51, scale],
                        [16.11, 5.01, 1.37, 2.51, scale],
                        [19.81, 5.01, 1.37, 2.51, scale],
                    ],
                    true,
                ],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-1/visual-cliff/terrified-sheep.png',
                    [25.09, 6.81, 4, 3, scale],
                    true,
                    [
                        [12.42, 5.01, 1.37, 2.51, scale],
                        [16.11, 5.01, 1.37, 2.51, scale],
                        [19.81, 5.01, 1.37, 2.51, scale],
                    ],
                    true,
                ],
            },
            {name: 'img', params: ['/assets/classic-studies-1/visual-cliff/device.png', [9.01, 5.2, 15.85, 8.65, scale]]},
        ],
        correct_func: (components) => {
            return components[0].whereabout == 0 && components[1].whereabout == -1;
        },
    };

    let level2 = {
        position: [11.67, 8.18, 2, 2, scale],
        paper: '/assets/classic-studies-1/visual-cliff/doc-4-2.jpg',
        prompt: '除了人类的婴儿，研究者使用了<b>其他的小动物</b>。你能选中它们吗？',
        objects: [
            '/assets/classic-studies-1/visual-cliff/terrified-sheep.png',
            '/assets/classic-studies-1/visual-cliff/device-middle.png',
            '/assets/classic-studies-1/visual-cliff/normal-sheep.png',
            '/assets/classic-studies-1/visual-cliff/device-left.png',
            '/assets/classic-studies-1/visual-cliff/normal-chick.png',
            '/assets/classic-studies-1/visual-cliff/terrified-chick.png',
            '/assets/classic-studies-1/visual-cliff/terrified-baby.png',
            '/assets/classic-studies-1/visual-cliff/normal-baby.png',
            '/assets/classic-studies-1/visual-cliff/device-right.png',
        ],
        correct: [0, 2, 4, 5],
        scenes: [scene_2_1, scene_2_2, scene_2_3, scene_2_4],
    };

    let scene_3_1 = {
        question:
            '在研究中，把一只刚出生一天的小羊放在视崖装置的玻璃上，并<b>把地板调节到了特定高度</b>。小羊<b>很害怕，肢体都僵直了</b>。你猜研究者把地板调节到什么高度？请你拖动小羊和地板到相应的位置。',
        layout: [
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-1/visual-cliff/device-bottom-normal.png',
                    [4.19, 3.02, 9.1, 3.41, scale],
                    true,
                    [
                        [19.67, 6.37, 1.5, 1.5, scale],
                        [19.67, 10.83, 1.5, 1.5, scale],
                    ],
                    true,
                    false,
                ],
            },
            {name: 'img', params: ['/assets/classic-studies-1/visual-cliff/device-left.png', [9.1, 5.41, 15.66, 8.23, scale]]},
            {name: 'img', params: ['/assets/classic-studies-1/visual-cliff/device-middle-normal.png', [14.2, 4.76, 5.82, 8.65, scale]]},
            {name: 'img', params: ['/assets/classic-studies-1/visual-cliff/device-right.png', [9, 5.25, 15.88, 8.55, scale], true]},
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-1/visual-cliff/terrified-sheep.png',
                    [25.11, 4.54, 4, 3, scale],
                    true,
                    [
                        [12.85, 4, 1.5, 3, scale],
                        [16.29, 4, 1.5, 3, scale],
                        [20.15, 4, 1.5, 3, scale],
                    ],
                    true,
                ],
            },
        ],
        correct_func: (components) => {
            return components[0].whereabout == 1 && components[4].whereabout == 2;
        },
    };

    let scene_3_2 = {
        question:
            '在研究中，把一只刚出生一天的小羊放在视崖装置的玻璃上，并<b>把地板调节到了特定高度</b>。小羊<b>表现得很镇定</b>。你猜研究者把地板调节到什么高度？请你拖动小羊和地板到相应的位置。',
        layout: [
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-1/visual-cliff/device-bottom-normal.png',
                    [4.19, 3.02, 9.1, 3.41, scale],
                    true,
                    [
                        [19.67, 6.37, 1.5, 1.5, scale],
                        [19.67, 10.83, 1.5, 1.5, scale],
                    ],
                    true,
                    false,
                ],
            },
            {name: 'img', params: ['/assets/classic-studies-1/visual-cliff/device-left.png', [9.1, 5.41, 15.66, 8.23, scale]]},
            {name: 'img', params: ['/assets/classic-studies-1/visual-cliff/device-middle-normal.png', [14.2, 4.76, 5.82, 8.65, scale]]},
            {name: 'img', params: ['/assets/classic-studies-1/visual-cliff/device-right.png', [9, 5.25, 15.88, 8.55, scale], true]},
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-1/visual-cliff/normal-sheep.png',
                    [25.11, 4.54, 4, 3, scale],
                    true,
                    [
                        [12.85, 4, 1.5, 3, scale],
                        [16.29, 4, 1.5, 3, scale],
                        [20.15, 4, 1.5, 3, scale],
                    ],
                    true,
                ],
            },
        ],
        correct_func: (components) => {
            return components[0].whereabout == 0 && components[4].whereabout == 2;
        },
    };

    let scene_3_3 = {
        question:
            '在研究中，研究者把一只小鼠放到了视崖装置中间的平台上，并改变平台的高度。小鼠在平台边缘探索一番之后<b>没有离开平台</b>。你猜此时中间的平台有多高？请你拖动小鼠和相应高度的平台到正确的位置。',
        layout: [
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-1/visual-cliff/device-middle-high.png',
                    [3.81, 5.06, 5.95, 11.11, scale],
                    true,
                    [[16.01, 7.5, 1.5, 1.5, scale]],
                    true,
                    false,
                ],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-1/visual-cliff/device-middle-normal.png',
                    [23.98, 7.73, 5.82, 8.65, scale],
                    true,
                    [[16.18, 8.64, 1.5, 1.5, scale]],
                    true,
                    false,
                ],
            },
            {name: 'img', params: ['/assets/classic-studies-1/visual-cliff/device-left.png', [9.1, 5.41, 15.66, 8.23, scale]]},
            {name: 'img', params: ['/assets/classic-studies-1/visual-cliff/device-bottom-normal.png', [15.6, 10.17, 9.1, 3.41, scale]]},
            {name: 'img', params: ['/assets/classic-studies-1/visual-cliff/device-right.png', [9, 5.25, 15.88, 8.55, scale], true]},
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-1/visual-cliff/terrified-rat.png',
                    [25.11, 4.54, 4, 3, scale],
                    true,
                    [
                        [12.85, 4, 1.5, 1.5, scale],
                        [16.29, 4, 1.5, 1.5, scale],
                        [20.15, 4, 1.5, 1.5, scale],
                    ],
                    true,
                ],
            },
        ],
        correct_func: (components) => {
            return components[0].whereabout == 0 && components[1].whereabout == -1 && components[5].whereabout == 1;
        },
    };

    let scene_3_4 = {
        question:
            '研究者放置了一群小猫在视崖装置中间的平台上。小猫们活泼地爬来爬去，马上，平台上就一只小猫也不剩了。你能猜测出它们都去了哪吗？请你把小猫们拖到它们可能出现的位置。',
        layout: [
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-1/visual-cliff/normal-cat.png',
                    [26.7, 3.98, 2, 1.5, scale],
                    false,
                    [
                        [11.35, 5.48, 3, 3, scale],
                        [18.78, 5.48, 3, 3, scale],
                    ],
                ],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-1/visual-cliff/normal-cat.png',
                    [26.7, 6.08, 2, 1.5, scale],
                    false,
                    [
                        [11.35, 5.48, 3, 3, scale],
                        [18.78, 5.48, 3, 3, scale],
                    ],
                ],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-1/visual-cliff/normal-cat.png',
                    [26.7, 8.18, 2, 1.5, scale],
                    false,
                    [
                        [11.35, 5.48, 3, 3, scale],
                        [18.78, 5.48, 3, 3, scale],
                    ],
                ],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-1/visual-cliff/normal-cat.png',
                    [26.7, 10.29, 2, 1.5, scale],
                    false,
                    [
                        [11.35, 5.48, 3, 3, scale],
                        [18.78, 5.48, 3, 3, scale],
                    ],
                ],
            },
            {name: 'img', params: ['/assets/classic-studies-1/visual-cliff/device.png', [9.01, 5.2, 15.85, 8.65, scale]]},
        ],
        correct_func: (components) => {
            return (
                components[0].whereabout == 0 &&
                components[1].whereabout == 0 &&
                components[2].whereabout == 0 &&
                components[3].whereabout == 0
            );
        },
    };

    let scene_3_5 = {
        question:
            '研究者放置了一群小龟在视崖装置中间的平台上。小龟们活泼地爬来爬去，马上，平台上就一只小龟也不剩了。你能揣测出它们都去了哪吗？请你把小龟们拖到它们可能出现的位置。',
        layout: [
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-1/visual-cliff/normal-turtle.png',
                    [26.7, 3.98, 2, 1.5, scale],
                    false,
                    [
                        [11.35, 5.48, 3, 3, scale],
                        [18.78, 5.48, 3, 3, scale],
                    ],
                ],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-1/visual-cliff/normal-turtle.png',
                    [26.7, 6.08, 2, 1.5, scale],
                    false,
                    [
                        [11.35, 5.48, 3, 3, scale],
                        [18.78, 5.48, 3, 3, scale],
                    ],
                ],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-1/visual-cliff/normal-turtle.png',
                    [26.7, 8.18, 2, 1.5, scale],
                    false,
                    [
                        [11.35, 5.48, 3, 3, scale],
                        [18.78, 5.48, 3, 3, scale],
                    ],
                ],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-1/visual-cliff/normal-turtle.png',
                    [26.7, 10.29, 2, 1.5, scale],
                    false,
                    [
                        [11.35, 5.48, 3, 3, scale],
                        [18.78, 5.48, 3, 3, scale],
                    ],
                ],
            },
            {name: 'img', params: ['/assets/classic-studies-1/visual-cliff/device.png', [9.01, 5.2, 15.85, 8.65, scale]]},
        ],
        correct_func: (components) => {
            let whereabouts = components.slice(0, 4).map((value) => value.whereabout);
            return whereabouts.indexOf(-1) == -1 && whereabouts.indexOf(0) != -1 && whereabouts.indexOf(1) != -1;
        },
    };

    let level3 = {
        position: [19.52, 8.18, 2, 2, scale],
        paper: '/assets/classic-studies-1/visual-cliff/doc-4-3.jpg',
        prompt: '我们来看看研究者又对小动物做了哪些进一步的研究吧。请你选择<b>所有的东西</b>，包括所有的小动物和视崖装置的各个组件。',
        objects: [
            '/assets/classic-studies-1/visual-cliff/terrified-sheep.png',
            '/assets/classic-studies-1/visual-cliff/normal-sheep.png',
            '/assets/classic-studies-1/visual-cliff/terrified-rat.png',
            '/assets/classic-studies-1/visual-cliff/normal-rat.png',
            '/assets/classic-studies-1/visual-cliff/normal-turtle.png',
            '/assets/classic-studies-1/visual-cliff/normal-cat.png',
            '/assets/classic-studies-1/visual-cliff/device-bottom-normal.png',
            '/assets/classic-studies-1/visual-cliff/device-middle-high.png',
            '/assets/classic-studies-1/visual-cliff/device-middle-normal.png',
        ],
        correct: [0, 1, 2, 3, 4, 5, 6, 7, 8],
        scenes: [scene_3_1, scene_3_2, scene_3_3, scene_3_4, scene_3_5],
    };

    let scene_4_1 = {
        question:
            '研究者改换了深侧地板的图案和摆放方式来控制图案密度和运动视差。现在，在界面的右边有不同密度的三种图案，你能使用其中一种图案重现研究者们控制<b>图案密度</b>的方法吗？',
        layout: [
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-1/visual-cliff/device-bottom-normal.png',
                    [4.19, 3.02, 9.1, 3.41, scale],
                    true,
                    [
                        [23.52, 6.3, 1.5, 1.5, scale],
                        [23.64, 10.66, 1.5, 1.5, scale],
                    ],
                    true,
                    false,
                ],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-1/visual-cliff/device-bottom-shallow.png',
                    [4.35, 6.87, 8.73, 3.44, scale],
                    true,
                    [
                        [23.52, 6.3, 1.5, 1.5, scale],
                        [23.56, 10.71, 1.5, 1.5, scale],
                    ],
                    true,
                    false,
                ],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-1/visual-cliff/device-bottom-dense.png',
                    [4.28, 12.03, 8.73, 3.12, scale],
                    true,
                    [
                        [23.34, 6.38, 1.5, 1.5, scale],
                        [23.59, 10.81, 1.5, 1.5, scale],
                    ],
                    true,
                    false,
                ],
            },
            {name: 'img', params: ['/assets/classic-studies-1/visual-cliff/device-left.png', [13.06, 5.41, 15.66, 8.23, scale]]},
            {name: 'img', params: ['/assets/classic-studies-1/visual-cliff/device-middle-normal.png', [18.16, 4.76, 5.82, 8.65, scale]]},
            {name: 'img', params: ['/assets/classic-studies-1/visual-cliff/device-right.png', [12.96, 5.25, 15.88, 8.55, scale], true]},
        ],
        correct_func: (components) => {
            return components[0].whereabout == -1 && components[1].whereabout == 1 && components[2].whereabout == -1;
        },
    };

    let scene_4_2 = {
        question:
            '研究者改换了深侧地板的图案和摆放方式来控制图案密度和运动视差。现在，在界面的右边有不同密度的三种图案，你能使用其中一种图案重现研究者们控制<b>运动视差</b>的方法吗？',
        layout: [
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-1/visual-cliff/device-bottom-normal.png',
                    [4.19, 3.02, 9.1, 3.41, scale],
                    true,
                    [
                        [23.52, 6.3, 1.5, 1.5, scale],
                        [23.64, 10.66, 1.5, 1.5, scale],
                    ],
                    true,
                    false,
                ],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-1/visual-cliff/device-bottom-shallow.png',
                    [4.35, 6.87, 8.73, 3.44, scale],
                    true,
                    [
                        [23.52, 6.3, 1.5, 1.5, scale],
                        [23.56, 10.71, 1.5, 1.5, scale],
                    ],
                    true,
                    false,
                ],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-1/visual-cliff/device-bottom-dense.png',
                    [4.28, 12.03, 8.73, 3.12, scale],
                    true,
                    [
                        [23.34, 6.38, 1.5, 1.5, scale],
                        [23.59, 10.81, 1.5, 1.5, scale],
                    ],
                    true,
                    false,
                ],
            },
            {name: 'img', params: ['/assets/classic-studies-1/visual-cliff/device-left.png', [13.06, 5.41, 15.66, 8.23, scale]]},
            {name: 'img', params: ['/assets/classic-studies-1/visual-cliff/device-middle-normal.png', [18.16, 4.76, 5.82, 8.65, scale]]},
            {name: 'img', params: ['/assets/classic-studies-1/visual-cliff/device-right.png', [12.96, 5.25, 15.88, 8.55, scale], true]},
        ],
        correct_func: (components) => {
            return components[0].whereabout == -1 && components[1].whereabout == -1 && components[2].whereabout == 0;
        },
    };

    let scene_4_3 = {
        question:
            '你还记得研究者把哪些小动物放在控制了图案密度和运动视差的视崖装置的深侧了吗？它们的表现更可能是什么样？请你从右侧的方框中拖动正确的图片到正确的位置。',
        layout: [
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-1/visual-cliff/terrified-chick.png',
                    [19.37, 5.1, 2, 1.5, scale],
                    true,
                    [
                        [12.92, 6.29, 1.5, 1.5, scale],
                        [15.69, 6.29, 1.5, 1.5, scale],
                        [12.92, 8.74, 1.5, 1.5, scale],
                        [15.69, 8.74, 1.5, 1.5, scale],
                        [12.92, 11.2, 1.5, 1.5, scale],
                        [15.69, 11.2, 1.5, 1.5, scale],
                    ],
                    true,
                ],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-1/visual-cliff/terrified-chick.png',
                    [21.75, 5.1, 2, 1.5, scale],
                    true,
                    [
                        [12.92, 6.29, 1.5, 1.5, scale],
                        [15.69, 6.29, 1.5, 1.5, scale],
                        [12.92, 8.74, 1.5, 1.5, scale],
                        [15.69, 8.74, 1.5, 1.5, scale],
                        [12.92, 11.2, 1.5, 1.5, scale],
                        [15.69, 11.2, 1.5, 1.5, scale],
                    ],
                    true,
                ],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-1/visual-cliff/terrified-chick.png',
                    [24.16, 5.1, 2, 1.5, scale],
                    true,
                    [
                        [12.92, 6.29, 1.5, 1.5, scale],
                        [15.69, 6.29, 1.5, 1.5, scale],
                        [12.92, 8.74, 1.5, 1.5, scale],
                        [15.69, 8.74, 1.5, 1.5, scale],
                        [12.92, 11.2, 1.5, 1.5, scale],
                        [15.69, 11.2, 1.5, 1.5, scale],
                    ],
                    true,
                ],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-1/visual-cliff/normal-chick.png',
                    [19.37, 7.24, 2, 1.5, scale],
                    true,
                    [
                        [12.92, 6.29, 1.5, 1.5, scale],
                        [15.69, 6.29, 1.5, 1.5, scale],
                        [12.92, 8.74, 1.5, 1.5, scale],
                        [15.69, 8.74, 1.5, 1.5, scale],
                        [12.92, 11.2, 1.5, 1.5, scale],
                        [15.69, 11.2, 1.5, 1.5, scale],
                    ],
                    true,
                ],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-1/visual-cliff/normal-chick.png',
                    [21.75, 7.24, 2, 1.5, scale],
                    true,
                    [
                        [12.92, 6.29, 1.5, 1.5, scale],
                        [15.69, 6.29, 1.5, 1.5, scale],
                        [12.92, 8.74, 1.5, 1.5, scale],
                        [15.69, 8.74, 1.5, 1.5, scale],
                        [12.92, 11.2, 1.5, 1.5, scale],
                        [15.69, 11.2, 1.5, 1.5, scale],
                    ],
                    true,
                ],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-1/visual-cliff/normal-chick.png',
                    [24.16, 7.24, 2, 1.5, scale],
                    true,
                    [
                        [12.92, 6.29, 1.5, 1.5, scale],
                        [15.69, 6.29, 1.5, 1.5, scale],
                        [12.92, 8.74, 1.5, 1.5, scale],
                        [15.69, 8.74, 1.5, 1.5, scale],
                        [12.92, 11.2, 1.5, 1.5, scale],
                        [15.69, 11.2, 1.5, 1.5, scale],
                    ],
                    true,
                ],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-1/visual-cliff/terrified-rat.png',
                    [19.37, 10.54, 2, 1.5, scale],
                    true,
                    [
                        [12.92, 6.29, 1.5, 1.5, scale],
                        [15.69, 6.29, 1.5, 1.5, scale],
                        [12.92, 8.74, 1.5, 1.5, scale],
                        [15.69, 8.74, 1.5, 1.5, scale],
                        [12.92, 11.2, 1.5, 1.5, scale],
                        [15.69, 11.2, 1.5, 1.5, scale],
                    ],
                    true,
                ],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-1/visual-cliff/terrified-rat.png',
                    [21.75, 10.54, 2, 1.5, scale],
                    true,
                    [
                        [12.92, 6.29, 1.5, 1.5, scale],
                        [15.69, 6.29, 1.5, 1.5, scale],
                        [12.92, 8.74, 1.5, 1.5, scale],
                        [15.69, 8.74, 1.5, 1.5, scale],
                        [12.92, 11.2, 1.5, 1.5, scale],
                        [15.69, 11.2, 1.5, 1.5, scale],
                    ],
                    true,
                ],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-1/visual-cliff/terrified-rat.png',
                    [24.16, 10.54, 2, 1.5, scale],
                    true,
                    [
                        [12.92, 6.29, 1.5, 1.5, scale],
                        [15.69, 6.29, 1.5, 1.5, scale],
                        [12.92, 8.74, 1.5, 1.5, scale],
                        [15.69, 8.74, 1.5, 1.5, scale],
                        [12.92, 11.2, 1.5, 1.5, scale],
                        [15.69, 11.2, 1.5, 1.5, scale],
                    ],
                    true,
                ],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-1/visual-cliff/normal-rat.png',
                    [19.37, 12.67, 2, 1.5, scale],
                    true,
                    [
                        [12.92, 6.29, 1.5, 1.5, scale],
                        [15.69, 6.29, 1.5, 1.5, scale],
                        [12.92, 8.74, 1.5, 1.5, scale],
                        [15.69, 8.74, 1.5, 1.5, scale],
                        [12.92, 11.2, 1.5, 1.5, scale],
                        [15.69, 11.2, 1.5, 1.5, scale],
                    ],
                    true,
                ],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-1/visual-cliff/normal-rat.png',
                    [21.75, 12.67, 2, 1.5, scale],
                    true,
                    [
                        [12.92, 6.29, 1.5, 1.5, scale],
                        [15.69, 6.29, 1.5, 1.5, scale],
                        [12.92, 8.74, 1.5, 1.5, scale],
                        [15.69, 8.74, 1.5, 1.5, scale],
                        [12.92, 11.2, 1.5, 1.5, scale],
                        [15.69, 11.2, 1.5, 1.5, scale],
                    ],
                    true,
                ],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-1/visual-cliff/normal-rat.png',
                    [24.16, 12.67, 2, 1.5, scale],
                    true,
                    [
                        [12.92, 6.29, 1.5, 1.5, scale],
                        [15.69, 6.29, 1.5, 1.5, scale],
                        [12.92, 8.74, 1.5, 1.5, scale],
                        [15.69, 8.74, 1.5, 1.5, scale],
                        [12.92, 11.2, 1.5, 1.5, scale],
                        [15.69, 11.2, 1.5, 1.5, scale],
                    ],
                    true,
                ],
            },
            {name: 'img', params: ['/assets/classic-studies-1/visual-cliff/table.png', [6.64, 3.7, 20.59, 11.64, scale]]},
        ],
        correct_func: (components) => {
            let group1 = components
                .slice(0, 3)
                .map((value) => value.whereabout)
                .sort((a, b) => a - b);
            let correct1 = group1[0] == -1 && group1[1] == -1 && group1[2] == 1;

            let group2 = components
                .slice(3, 6)
                .map((value) => value.whereabout)
                .sort((a, b) => a - b);
            let correct2 = group2[0] == -1 && group2[1] == -1 && group2[2] == 0;

            let group3 = components
                .slice(9, 12)
                .map((value) => value.whereabout)
                .sort((a, b) => a - b);
            let correct3 = group3[0] == -1 && group3[1] == -1 && group3[2] == 4;

            let group4 = components
                .slice(6, 9)
                .map((value) => value.whereabout)
                .sort((a, b) => a - b);
            let correct4 = group4[0] == 2 && group4[1] == 3 && group4[2] == 5;

            console.log([group1, group2, group3, group4]);

            return correct1 && correct2 && correct3 && correct4;
        },
    };

    let level4 = {
        position: [27.82, 8.18, 2, 2, scale],
        paper: '/assets/classic-studies-1/visual-cliff/doc-4-4.jpg',
        prompt: '在对深度的知觉中，有很多视觉线索能帮助人们觉察深度，其中有两种线索，图案密度和运动视差。你还记得它们分别是什么吗？请你花些时间回想一下，然后选<b>择不同密度的地板图案</b>吧。',
        objects: [
            '/assets/classic-studies-1/visual-cliff/terrified-sheep.png',
            '/assets/classic-studies-1/visual-cliff/terrified-cat.png',
            '/assets/classic-studies-1/visual-cliff/normal-sheep.png',
            '/assets/classic-studies-1/visual-cliff/normal-turtle.png',
            '/assets/classic-studies-1/visual-cliff/normal-chick.png',
            '/assets/classic-studies-1/visual-cliff/terrified-chick.png',
            '/assets/classic-studies-1/visual-cliff/device-bottom-normal.png',
            '/assets/classic-studies-1/visual-cliff/device-bottom-dense.png',
            '/assets/classic-studies-1/visual-cliff/device-bottom-shallow.png',
        ],
        correct: [6, 7, 8],
        scenes: [scene_4_1, scene_4_2, scene_4_3],
    };

    return {
        map: '/assets/classic-studies-1/visual-cliff/house4_bg.jpg',
        background: '/assets/classic-studies-1/visual-cliff/play_4_bg.jpg',
        marker: '/assets/classic-studies-1/visual-cliff/room_flag.png',
        levels: [level1, level2, level3, level4],
    };
};
