if (typeof window.loaded_sessions == 'undefined') {
    window.loaded_sessions = {};
}

window.loaded_sessions.albert = function () {
    let scale = 3200 / 33.87;

    let scene_1_1 = {
        question: '在正式的研究进行前，一些毛茸茸的小动物被放在了小婴儿面前。你认为小婴儿对这些陌生的事物会作何反应？',
        layout: [
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-2/albert/market5_1_4.png',
                    [23.77, 4.41, 5.85, 4.39, scale],
                    true,
                    [[14.01, 8.22, 5.85, 4.39, scale]],
                    true,
                    false,
                ],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-2/albert/market5_1_2.png',
                    [23.77, 9.24, 5.85, 4.39, scale],
                    true,
                    [[14.01, 8.22, 5.85, 4.39, scale]],
                    true,
                    false,
                ],
            },
            {
                name: 'img',
                params: ['/assets/classic-studies-2/albert/game5_1_1.png', [14.01, 8.22, 5.85, 6.43, scale]],
            },
            {
                name: 'img',
                params: ['/assets/classic-studies-2/albert/market5_1_7.png', [11.09, 12.08, 5.33, 4, scale]],
            },
            {
                name: 'img',
                params: ['/assets/classic-studies-2/albert/market5_1_9.png', [17.19, 12.38, 5.33, 4, scale]],
            },
        ],
        correct_func: (components) => {
            return components[0].whereabout == 0 && components[1].whereabout == -1;
        },
    };

    let scene_1_2 = {
        question:
            '趁小婴儿不注意，研究者<b>在小婴儿背后用锤子猛击铁条，发出了巨大的噪声</b>。你认为小婴儿会作何反应？请把相应的反应拖放到小婴儿的脸上吧。',
        layout: [
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-2/albert/market5_1_4.png',
                    [23.77, 4.41, 5.85, 4.39, scale],
                    true,
                    [[14.01, 8.22, 5.85, 4.39, scale]],
                    true,
                    false,
                ],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-2/albert/market5_1_2.png',
                    [23.77, 9.24, 5.85, 4.39, scale],
                    true,
                    [[14.01, 8.22, 5.85, 4.39, scale]],
                    true,
                    false,
                ],
            },
            {
                name: 'img',
                params: ['/assets/classic-studies-2/albert/game5_1_1.png', [14.01, 8.22, 5.85, 6.43, scale]],
            },
            {
                name: 'img',
                params: ['/assets/classic-studies-2/albert/market5_1_8.png', [12.24, 4.97, 3.53, 4, scale]],
            },
        ],
        correct_func: (components) => {
            return components[0].whereabout == -1 && components[1].whereabout == 0;
        },
    };

    let scene_1_3 = {
        question:
            '正式的实验开始了。在小阿尔伯特的实验中，研究者是怎么设置、呈现实验材料的？请把正确的事物拖放到相应的位置吧。',
        layout: [
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-2/albert/market5_1_8.png',
                    [26.21, 3.47, 2.67, 2, scale],
                    true,
                    [
                        [11.49, 5.27, 2, 2, scale],
                        [19.97, 12.08, 2, 2, scale],
                    ],
                    true,
                ],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-2/albert/market5_1_3.png',
                    [26.21, 6.68, 2.67, 2, scale],
                    true,
                    [
                        [11.49, 5.27, 2, 2, scale],
                        [19.97, 12.08, 2, 2, scale],
                    ],
                    true,
                ],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-2/albert/market5_1_9.png',
                    [26.21, 9.87, 2.67, 2, scale],
                    true,
                    [
                        [11.49, 5.27, 2, 2, scale],
                        [19.97, 12.08, 2, 2, scale],
                    ],
                    true,
                ],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-2/albert/market5_1_5.png',
                    [26.21, 13.07, 2.67, 2, scale],
                    true,
                    [
                        [11.49, 5.27, 2, 2, scale],
                        [19.97, 12.08, 2, 2, scale],
                    ],
                    true,
                ],
            },
            {
                name: 'img',
                params: ['/assets/classic-studies-2/albert/market5_1_6.png', [13.25, 6.88, 7.06, 5.29, scale]],
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

    let scene_1_4 = {
        question:
            '刚才的实验情境被研究者重复了多次。现在，<b>铁条被敲击的噪音不再被呈现</b>。当面对小老鼠时，婴儿更可能会作何反应？请把相应的反应拖放到婴儿的脸上吧。',
        layout: [
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-2/albert/market5_1_4.png',
                    [23.77, 4.41, 5.85, 4.39, scale],
                    true,
                    [[14.01, 8.22, 5.85, 4.39, scale]],
                    true,
                    false,
                ],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-2/albert/market5_1_2.png',
                    [23.77, 9.24, 5.85, 4.39, scale],
                    true,
                    [[14.01, 8.22, 5.85, 4.39, scale]],
                    true,
                    false,
                ],
            },
            {
                name: 'img',
                params: ['/assets/classic-studies-2/albert/game5_1_1.png', [14.01, 8.22, 5.85, 6.43, scale]],
            },
            {
                name: 'img',
                params: ['/assets/classic-studies-2/albert/market5_1_9.png', [17.19, 12.38, 5.33, 4, scale]],
            },
        ],
        correct_func: (components) => {
            return components[0].whereabout == -1 && components[1].whereabout == 0;
        },
    };

    let scene_1_5 = {
        question:
            '最后，研究者还想探讨泛化的问题。呈现给小婴儿的事物被换成了和老鼠很像的小兔子，这时小婴儿的反应会是什么？请把正确的反应拖放的小婴儿的脸上吧。',
        layout: [
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-2/albert/market5_1_4.png',
                    [23.77, 4.41, 5.85, 4.39, scale],
                    true,
                    [[14.01, 8.22, 5.85, 4.39, scale]],
                    true,
                    false,
                ],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-2/albert/market5_1_2.png',
                    [23.77, 9.24, 5.85, 4.39, scale],
                    true,
                    [[14.01, 8.22, 5.85, 4.39, scale]],
                    true,
                    false,
                ],
            },
            {
                name: 'img',
                params: ['/assets/classic-studies-2/albert/game5_1_1.png', [14.01, 8.22, 5.85, 6.43, scale]],
            },
            {
                name: 'img',
                params: ['/assets/classic-studies-2/albert/market5_1_7.png', [17.19, 12.38, 5.33, 4, scale]],
            },
        ],
        correct_func: (components) => {
            return components[0].whereabout == -1 && components[1].whereabout == 0;
        },
    };

    let level1 = {
        position: [15.93, 8.53, 2, 2, scale],
        paper: '/assets/classic-studies-2/albert/doc-1-1.jpg',
        prompt: '欢迎来到新的章节~在这里，情绪化的小阿尔伯特揭示了条件反射和行为主义思想的哪些知识呢？请选择<b>除了两个小婴儿以外的所有物品、小动物和面孔</b>吧。',
        objects: [
            '/assets/classic-studies-2/albert/market5_1_1.png',
            '/assets/classic-studies-2/albert/market5_1_2.png',
            '/assets/classic-studies-2/albert/market5_1_3.png',
            '/assets/classic-studies-2/albert/market5_1_4.png',
            '/assets/classic-studies-2/albert/market5_1_5.png',
            '/assets/classic-studies-2/albert/market5_1_6.png',
            '/assets/classic-studies-2/albert/market5_1_7.png',
            '/assets/classic-studies-2/albert/market5_1_8.png',
            '/assets/classic-studies-2/albert/market5_1_9.png',
        ],
        correct: [1, 2, 3, 4, 6, 7, 8],
        scenes: [scene_1_1, scene_1_2, scene_1_3, scene_1_4, scene_1_5],
    };

    return {
        map: '/assets/classic-studies-2/house_bg.jpg',
        background: '/assets/classic-studies-2/play_bg.jpg',
        marker: '/assets/classic-studies-2/room_flag.png',
        levels: [level1],
    };
};
