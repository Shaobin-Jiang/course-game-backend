if (typeof window.loaded_sessions == 'undefined') {
    window.loaded_sessions = {};
}

window.loaded_sessions.split_brain = function () {
    let scale = 3200 / 33.87;

    let scene_1_1 = {
        question: '胼胝体在哪里？切一刀看看吧',
        layout: [
            {name: 'img', params: ['/assets/classic-studies-1/split-brain/market_brain.png', [12.26, 6.03, 9.33, 7, scale]]},
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-1/split-brain/market_knife.png',
                    [20.84, 8.45, 2.88, 2.16, scale],
                    true,
                    [
                        [14.92, 7.41, 0.77, 3.45, scale],
                        [16.44, 7.41, 0.77, 3.45, scale],
                        [17.95, 7.41, 0.77, 3.45, scale],
                    ],
                    true,
                ],
            },
        ],
        correct_func: (components) => {
            return components[1].whereabout == 1;
        },
    };

    let level1 = {
        position: [10.28, 11.65, 2, 2, scale],
        paper: '/assets/classic-studies-1/split-brain/doc-1-1.jpg',
        prompt: '接下来我们要模仿切除癫痫病人的胼胝体。请你在这里选择待会儿需要用到的材料。给你一点小提示，只要用到的材料都需要选择哦。有了材料后，请你试试切除这个病人得到胼胝体吧，请你回忆一下上课时老师说胼胝体在哪里，然后拖动手术刀，把它放在相应的位置。',
        objects: [
            '/assets/classic-studies-1/split-brain/market_fourpoints.png',
            '/assets/classic-studies-1/split-brain/market_knife.png',
            '/assets/classic-studies-1/split-brain/market_orange.png',
            '/assets/classic-studies-1/split-brain/market_numbercard.png',
            '/assets/classic-studies-1/split-brain/market_hammer.png',
            '/assets/classic-studies-1/split-brain/market_lettercard.png',
            '/assets/classic-studies-1/split-brain/market_fourpoints.png',
            '/assets/classic-studies-1/split-brain/market_nail.png',
            '/assets/classic-studies-1/split-brain/market_brain.png',
        ],
        correct: [1, 8],
        scenes: [scene_1_1],
    };

    let scene_2_1 = {
        question:
            '被试说他看到了<b>4个</b>黄色亮点，但我明明看到了<b>8个</b>黄色亮点！你知道这一次他看的是什么吗？拖动实验材料，把这一次被试看的实验材料呈现在屏幕上，注意位置哦。',
        layout: [
            {
                name: 'img',
                params: ['/assets/classic-studies-1/split-brain/play_desk.png', [6.64, 3.7, 20.59, 11.64, scale]],
            },
            {
                name: 'img',
                params: ['/assets/classic-studies-1/split-brain/play_person_1.png', [12.65, 8.41, 8.56, 7.46, scale]],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-1/split-brain/market_fourpoints.png',
                    [5.21, 4.26, 3.73, 2.71, scale],
                    true,
                    [
                        [13.48, 4.71, 3.45, 3.45, scale],
                        [17.7, 4.71, 3.45, 3.45, scale],
                    ],
                    true,
                ],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-1/split-brain/market_fourpoints.png',
                    [5.21, 6.8, 3.73, 2.71, scale],
                    true,
                    [
                        [13.48, 4.71, 3.45, 3.45, scale],
                        [17.7, 4.71, 3.45, 3.45, scale],
                    ],
                    true,
                ],
            },
        ],
        correct_func: (components) => {
            return components[2].whereabout + components[3].whereabout == 1;
        },
    };

    let scene_2_2 = {
        question:
            '刚才屏幕上又有黄色亮点闪过；虽然裂脑人先生说他<b>什么都没看见</b>，但我明明看到了<b>4个</b>黄色亮点！你知道刚才屏幕上呈现了什么吗？',
        layout: [
            {
                name: 'img',
                params: ['/assets/classic-studies-1/split-brain/play_desk.png', [6.64, 3.7, 20.59, 11.64, scale]],
            },
            {
                name: 'img',
                params: ['/assets/classic-studies-1/split-brain/play_person_1.png', [12.65, 8.41, 8.56, 7.46, scale]],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-1/split-brain/market_fourpoints.png',
                    [5.21, 4.26, 3.73, 2.71, scale],
                    true,
                    [
                        [13.48, 4.71, 3.45, 3.45, scale],
                        [17.7, 4.71, 3.45, 3.45, scale],
                    ],
                    true,
                ],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-1/split-brain/market_fourpoints.png',
                    [5.21, 6.8, 3.73, 2.71, scale],
                    true,
                    [
                        [13.48, 4.71, 3.45, 3.45, scale],
                        [17.7, 4.71, 3.45, 3.45, scale],
                    ],
                    true,
                ],
            },
        ],
        correct_func: (components) => {
            return components[2].whereabout + components[3].whereabout == -1;
        },
    };

    let scene_2_3 = {
        question:
            '屏幕上又有黄色亮点闪过；裂脑人先生没有再说话啦，他用手做出了指的动作。给你一个小小的提示，这次我看到了<b>4个</b>黄色亮点。你能猜出刚才屏幕上呈现了什么吗？',
        layout: [
            {
                name: 'img',
                params: ['/assets/classic-studies-1/split-brain/play_desk.png', [6.64, 3.7, 20.59, 11.64, scale]],
            },
            {
                name: 'img',
                params: ['/assets/classic-studies-1/split-brain/play_person_5.png', [12.65, 8.41, 8.56, 7.46, scale]],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-1/split-brain/market_fourpoints.png',
                    [5.21, 4.26, 3.73, 2.71, scale],
                    true,
                    [
                        [13.48, 4.71, 3.45, 3.45, scale],
                        [17.7, 4.71, 3.45, 3.45, scale],
                    ],
                    true,
                ],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-1/split-brain/market_fourpoints.png',
                    [5.21, 6.8, 3.73, 2.71, scale],
                    true,
                    [
                        [13.48, 4.71, 3.45, 3.45, scale],
                        [17.7, 4.71, 3.45, 3.45, scale],
                    ],
                    true,
                ],
            },
        ],
        correct_func: (components) => {
            return components[2].whereabout + components[3].whereabout == -1;
        },
    };

    let scene_2_4 = {
        question:
            '屏幕上又有黄色亮点闪过；裂脑人先生仍然用手做了动作，不过这次换了一只手。给你一个小小的提示，这次我看到的仍然是<b>4个</b>黄色亮点。你能猜出刚才屏幕上呈现了什么吗？',
        layout: [
            {
                name: 'img',
                params: ['/assets/classic-studies-1/split-brain/play_desk.png', [6.64, 3.7, 20.59, 11.64, scale]],
            },
            {
                name: 'img',
                params: ['/assets/classic-studies-1/split-brain/play_person_6.png', [12.65, 8.41, 8.56, 7.46, scale]],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-1/split-brain/market_fourpoints.png',
                    [5.21, 4.26, 3.73, 2.71, scale],
                    true,
                    [
                        [13.48, 4.71, 3.45, 3.45, scale],
                        [17.7, 4.71, 3.45, 3.45, scale],
                    ],
                    true,
                ],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-1/split-brain/market_fourpoints.png',
                    [5.21, 6.8, 3.73, 2.71, scale],
                    true,
                    [
                        [13.48, 4.71, 3.45, 3.45, scale],
                        [17.7, 4.71, 3.45, 3.45, scale],
                    ],
                    true,
                ],
            },
        ],
        correct_func: (components) => {
            return components[2].whereabout * components[3].whereabout == -1;
        },
    };

    let level2 = {
        position: [13.54, 10.22, 2, 2, scale],
        paper: '/assets/classic-studies-1/split-brain/doc-1-2.jpg',
        prompt: '接下来是你的第一个实验。你记得课上讲到的内容和你刚才读到的知识吗？想想这个实验用到了什么材料？你需要在这里按照你刚刚读过的文献和想想的提示，点选你需要的物品，然后带去实验室。但请不要选择多余的物品。只有选对了物品才能进入游戏界面哦。',
        objects: [
            '/assets/classic-studies-1/split-brain/market_fourpoints.png',
            '/assets/classic-studies-1/split-brain/market_knife.png',
            '/assets/classic-studies-1/split-brain/market_orange.png',
            '/assets/classic-studies-1/split-brain/market_numbercard.png',
            '/assets/classic-studies-1/split-brain/market_hammer.png',
            '/assets/classic-studies-1/split-brain/market_lettercard.png',
            '/assets/classic-studies-1/split-brain/market_fourpoints.png',
            '/assets/classic-studies-1/split-brain/market_nail.png',
            '/assets/classic-studies-1/split-brain/market_brain.png',
        ],
        correct: [0, 6],
        scenes: [scene_2_1, scene_2_2, scene_2_3, scene_2_4],
    };

    let scene_3_1 = {
        question:
            '研究者把某样水果放到了裂脑人先生的一只手上，裂脑人先生说他摸到了<b>苹果</b>。你知道研究者把什么放在了他的哪只手上吗？如果你知道，请把水果拖放到相应的手上。',
        layout: [
            {
                name: 'img',
                params: ['/assets/classic-studies-1/split-brain/play_desk.png', [6.64, 3.7, 20.59, 11.64, scale]],
            },
            {
                name: 'img',
                params: ['/assets/classic-studies-1/split-brain/play_person_4.png', [12.65, 8.41, 8.56, 7.46, scale]],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-1/split-brain/market_apple.png',
                    [5.21, 4.26, 2.67, 2, scale],
                    true,
                    [
                        [12.65, 8.86, 2, 2, scale],
                        [19.22, 8.86, 2, 2, scale],
                    ],
                    true,
                ],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-1/split-brain/market_orange.png',
                    [5.21, 7.2, 2.67, 2, scale],
                    true,
                    [
                        [12.65, 8.86, 2, 2, scale],
                        [19.22, 8.86, 2, 2, scale],
                    ],
                    true,
                ],
            },
        ],
        correct_func: (components) => {
            return components[2].whereabout == 1 && components[3].whereabout == -1;
        },
    };

    let scene_3_2 = {
        question:
            '研究者把某样水果放到了裂脑人先生的一只手上，裂脑人先生没有说话，但用<b>左手</b>指了指<b>苹果</b>。你知道研究者把什么放在了他的哪只手上吗？如果你知道，请把水果拖放到相应的手上。',
        layout: [
            {
                name: 'img',
                params: ['/assets/classic-studies-1/split-brain/play_desk.png', [6.64, 3.7, 20.59, 11.64, scale]],
            },
            {
                name: 'img',
                params: ['/assets/classic-studies-1/split-brain/play_person_4.png', [12.65, 8.41, 8.56, 7.46, scale]],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-1/split-brain/market_apple.png',
                    [5.21, 4.26, 2.67, 2, scale],
                    true,
                    [
                        [12.65, 8.86, 2, 2, scale],
                        [19.22, 8.86, 2, 2, scale],
                    ],
                    true,
                ],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-1/split-brain/market_orange.png',
                    [5.21, 7.2, 2.67, 2, scale],
                    true,
                    [
                        [12.65, 8.86, 2, 2, scale],
                        [19.22, 8.86, 2, 2, scale],
                    ],
                    true,
                ],
            },
        ],
        correct_func: (components) => {
            return components[2].whereabout == 0 && components[3].whereabout == -1;
        },
    };

    let scene_3_3 = {
        question:
            '研究者把某样水果放到了裂脑人先生的一只手上，裂脑人先生没有说话，但用<b>右手</b>指了指<b>橙子</b>。你知道研究者把什么放在了他的哪只手上吗？如果你知道，请把水果拖放到相应的手上。',
        layout: [
            {
                name: 'img',
                params: ['/assets/classic-studies-1/split-brain/play_desk.png', [6.64, 3.7, 20.59, 11.64, scale]],
            },
            {
                name: 'img',
                params: ['/assets/classic-studies-1/split-brain/play_person_4.png', [12.65, 8.41, 8.56, 7.46, scale]],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-1/split-brain/market_apple.png',
                    [5.21, 4.26, 2.67, 2, scale],
                    true,
                    [
                        [12.65, 8.86, 2, 2, scale],
                        [19.22, 8.86, 2, 2, scale],
                    ],
                    true,
                ],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-1/split-brain/market_orange.png',
                    [5.21, 7.2, 2.67, 2, scale],
                    true,
                    [
                        [12.65, 8.86, 2, 2, scale],
                        [19.22, 8.86, 2, 2, scale],
                    ],
                    true,
                ],
            },
        ],
        correct_func: (components) => {
            return components[2].whereabout == -1 && components[3].whereabout == 1;
        },
    };

    let level3 = {
        position: [16.26, 6.72, 2, 2, scale],
        paper: '/assets/classic-studies-1/split-brain/doc-1-3.jpg',
        prompt: '这次研究人员带来了一些水果，请你选择<b>所有的水果</b>来继续实验。',
        objects: [
            '/assets/classic-studies-1/split-brain/market_apple.png',
            '/assets/classic-studies-1/split-brain/market_knife.png',
            '/assets/classic-studies-1/split-brain/market_orange.png',
            '/assets/classic-studies-1/split-brain/market_numbercard.png',
            '/assets/classic-studies-1/split-brain/market_hammer.png',
            '/assets/classic-studies-1/split-brain/market_lettercard.png',
            '/assets/classic-studies-1/split-brain/market_fourpoints.png',
            '/assets/classic-studies-1/split-brain/market_nail.png',
            '/assets/classic-studies-1/split-brain/market_brain.png',
        ],
        correct: [0, 2],
        scenes: [scene_3_1, scene_3_2, scene_3_3],
    };

    let scene_4_1 = {
        question:
            '刚才屏幕上一闪而过一样东西的图片，裂脑人先生说他看到了<b>钉子</b>。你知道屏幕上呈现了什么吗？请把合适的图片拖到屏幕上。',
        layout: [
            {
                name: 'img',
                params: ['/assets/classic-studies-1/split-brain/play_desk.png', [6.64, 3.7, 20.59, 11.64, scale]],
            },
            {
                name: 'img',
                params: ['/assets/classic-studies-1/split-brain/play_person_1.png', [12.65, 8.41, 8.56, 7.46, scale]],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-1/split-brain/market_hammer.png',
                    [4.98, 4.14, 3.47, 2.6, scale],
                    true,
                    [
                        [13.48, 4.71, 3.45, 3.45, scale],
                        [17.7, 4.71, 3.45, 3.45, scale],
                    ],
                    true,
                ],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-1/split-brain/market_nail.png',
                    [4.98, 7.26, 3.47, 2.6, scale],
                    true,
                    [
                        [13.48, 4.71, 3.45, 3.45, scale],
                        [17.7, 4.71, 3.45, 3.45, scale],
                    ],
                    true,
                ],
            },
        ],
        correct_func: (components) => {
            return components[3].whereabout == 1 && components[2].whereabout == -1;
        },
    };

    let scene_4_2 = {
        question:
            '刚才屏幕上一闪而过一样东西的图片，裂脑人先生说他看到了<b>钉子</b>，但我看到的明明是<b>锤子</b>。你知道屏幕上呈现了什么吗？请把合适的图片拖到屏幕上。',
        layout: [
            {
                name: 'img',
                params: ['/assets/classic-studies-1/split-brain/play_desk.png', [6.64, 3.7, 20.59, 11.64, scale]],
            },
            {
                name: 'img',
                params: ['/assets/classic-studies-1/split-brain/play_person_1.png', [12.65, 8.41, 8.56, 7.46, scale]],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-1/split-brain/market_hammer.png',
                    [4.98, 4.14, 3.47, 2.6, scale],
                    true,
                    [
                        [13.48, 4.71, 3.45, 3.45, scale],
                        [17.7, 4.71, 3.45, 3.45, scale],
                    ],
                    true,
                ],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-1/split-brain/market_nail.png',
                    [4.98, 7.26, 3.47, 2.6, scale],
                    true,
                    [
                        [13.48, 4.71, 3.45, 3.45, scale],
                        [17.7, 4.71, 3.45, 3.45, scale],
                    ],
                    true,
                ],
            },
        ],
        correct_func: (components) => {
            return components[2].whereabout == 0 && components[3].whereabout == -1;
        },
    };

    let scene_4_3 = {
        question:
            '刚才屏幕上闪过了单词卡，裂脑人先生说他看到了<b>“钉子”的单词</b>。你知道屏幕上呈现了什么吗？请把合适的卡片拖到屏幕上。',
        layout: [
            {
                name: 'img',
                params: ['/assets/classic-studies-1/split-brain/play_desk.png', [6.64, 3.7, 20.59, 11.64, scale]],
            },
            {
                name: 'img',
                params: ['/assets/classic-studies-1/split-brain/play_person_1.png', [12.65, 8.41, 8.56, 7.46, scale]],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-1/split-brain/market_hammer_card.png',
                    [24.79, 4.14, 3.59, 2.6, scale],
                    true,
                    [
                        [13.48, 4.71, 3.45, 3.45, scale],
                        [17.7, 4.71, 3.45, 3.45, scale],
                    ],
                    true,
                ],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-1/split-brain/market_nail_card.png',
                    [24.79, 7.26, 3.59, 2.6, scale],
                    true,
                    [
                        [13.48, 4.71, 3.45, 3.45, scale],
                        [17.7, 4.71, 3.45, 3.45, scale],
                    ],
                    true,
                ],
            },
        ],
        correct_func: (components) => {
            return components[2].whereabout == -1 && components[3].whereabout == 1;
        },
    };

    let scene_4_4 = {
        question:
            '刚才屏幕上闪过了单词卡，裂脑人先生说他看到了<b>“钉子”的单词</b>，但我看到的明明是“锤子”。你知道屏幕上呈现了什么吗？请把合适的卡片拖到屏幕上。',
        layout: [
            {
                name: 'img',
                params: ['/assets/classic-studies-1/split-brain/play_desk.png', [6.64, 3.7, 20.59, 11.64, scale]],
            },
            {
                name: 'img',
                params: ['/assets/classic-studies-1/split-brain/play_person_1.png', [12.65, 8.41, 8.56, 7.46, scale]],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-1/split-brain/market_hammer_card.png',
                    [24.79, 4.14, 3.59, 2.6, scale],
                    true,
                    [
                        [13.48, 4.71, 3.45, 3.45, scale],
                        [17.7, 4.71, 3.45, 3.45, scale],
                    ],
                    true,
                ],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-1/split-brain/market_nail_card.png',
                    [24.79, 7.26, 3.59, 2.6, scale],
                    true,
                    [
                        [13.48, 4.71, 3.45, 3.45, scale],
                        [17.7, 4.71, 3.45, 3.45, scale],
                    ],
                    true,
                ],
            },
        ],
        correct_func: (components) => {
            return components[2].whereabout == 0 && components[3].whereabout == -1;
        },
    };

    let scene_4_5 = {
        question:
            '刚才研究者在裂脑人先生的手上放了一样东西，裂脑人先生说他摸到了<b>钉子</b>。你知道裂脑人先生摸到了什么吗？请把合适的东西拖到合适的手上。',
        layout: [
            {
                name: 'img',
                params: ['/assets/classic-studies-1/split-brain/play_desk.png', [6.64, 3.7, 20.59, 11.64, scale]],
            },
            {
                name: 'img',
                params: ['/assets/classic-studies-1/split-brain/play_person_4.png', [12.65, 8.41, 8.56, 7.46, scale]],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-1/split-brain/market_hammer.png',
                    [4.98, 4.14, 3.47, 2.6, scale],
                    true,
                    [
                        [12.65, 8.86, 2, 2, scale],
                        [19.22, 8.86, 2, 2, scale],
                    ],
                    true,
                ],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-1/split-brain/market_nail.png',
                    [4.98, 7.26, 3.47, 2.6, scale],
                    true,
                    [
                        [12.65, 8.86, 2, 2, scale],
                        [19.22, 8.86, 2, 2, scale],
                    ],
                    true,
                ],
            },
        ],
        correct_func: (components) => {
            return components[3].whereabout == 1 && components[2].whereabout == -1;
        },
    };

    let scene_4_6 = {
        question:
            '刚才研究者在裂脑人先生的手上放了一样东西，裂脑人先生说他摸到了<b>钉子</b>，但我明明看到他摸了<b>锤子</b>。你知道裂脑人先生摸到了什么吗？请把合适的东西拖到合适的手上。',
        layout: [
            {
                name: 'img',
                params: ['/assets/classic-studies-1/split-brain/play_desk.png', [6.64, 3.7, 20.59, 11.64, scale]],
            },
            {
                name: 'img',
                params: ['/assets/classic-studies-1/split-brain/play_person_4.png', [12.65, 8.41, 8.56, 7.46, scale]],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-1/split-brain/market_hammer.png',
                    [4.98, 4.14, 3.47, 2.6, scale],
                    true,
                    [
                        [12.65, 8.86, 2, 2, scale],
                        [19.22, 8.86, 2, 2, scale],
                    ],
                    true,
                ],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-1/split-brain/market_nail.png',
                    [4.98, 7.26, 3.47, 2.6, scale],
                    true,
                    [
                        [12.65, 8.86, 2, 2, scale],
                        [19.22, 8.86, 2, 2, scale],
                    ],
                    true,
                ],
            },
        ],
        correct_func: (components) => {
            return components[2].whereabout == 0 && components[3].whereabout == -1;
        },
    };

    let level4 = {
        position: [18.26, 8.72, 2, 2, scale],
        paper: '/assets/classic-studies-1/split-brain/doc-1-4.jpg',
        prompt: '这次研究者们带来了一些工具，它们的照片，以及上面写着它们名字的小卡片。请你选择这些东西，然后去实验室看看研究者为裂脑人先生准备了什么实验吧。',
        objects: [
            '/assets/classic-studies-1/split-brain/market_apple.png',
            '/assets/classic-studies-1/split-brain/market_fourpoints.png',
            '/assets/classic-studies-1/split-brain/market_orange.png',
            '/assets/classic-studies-1/split-brain/market_hammer_card.png',
            '/assets/classic-studies-1/split-brain/market_hammer.png',
            '/assets/classic-studies-1/split-brain/market_nail_card.png',
            '/assets/classic-studies-1/split-brain/market_fourpoints.png',
            '/assets/classic-studies-1/split-brain/market_nail.png',
            '/assets/classic-studies-1/split-brain/market_brain.png',
        ],
        correct: [3, 4, 5, 7],
        scenes: [scene_4_1, scene_4_2, scene_4_3, scene_4_4, scene_4_5, scene_4_6],
    };

    let scene_5_1 = {
        question:
            '刚才研究者把一样东西放在了裂脑人被试的手上，他接着用左手指向了<b>钉子</b>。但这次研究者放到裂脑人先生手上的东西<b>并不是钉子</b>。你知道研究者放了什么东西在裂脑人先生的哪只手上吗？',
        layout: [
            {
                name: 'img',
                params: ['/assets/classic-studies-1/split-brain/play_desk.png', [6.64, 3.7, 20.59, 11.64, scale]],
            },
            {
                name: 'img',
                params: ['/assets/classic-studies-1/split-brain/play_person_4.png', [12.65, 8.41, 8.56, 7.46, scale]],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-1/split-brain/market_hammer.png',
                    [4.98, 4.14, 3.47, 2.6, scale],
                    true,
                    [
                        [12.65, 8.86, 2, 2, scale],
                        [19.22, 8.86, 2, 2, scale],
                    ],
                    true,
                ],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-1/split-brain/market_smoke.png',
                    [4.98, 7.26, 3.47, 2.6, scale],
                    true,
                    [
                        [12.65, 8.86, 2, 2, scale],
                        [19.22, 8.86, 2, 2, scale],
                    ],
                    true,
                ],
            },
        ],
        correct_func: (components) => {
            return components[2].whereabout == 0 && components[3].whereabout == -1;
        },
    };

    let level5 = {
        position: [20.26, 5.36, 2, 2, scale],
        paper: '/assets/classic-studies-1/split-brain/doc-1-5.jpg',
        prompt: '这次研究者们把钉子换成了另一种工具，请选择所有的<b>工具</b>',
        objects: [
            '/assets/classic-studies-1/split-brain/market_apple.png',
            '/assets/classic-studies-1/split-brain/market_fourpoints.png',
            '/assets/classic-studies-1/split-brain/market_orange.png',
            '/assets/classic-studies-1/split-brain/market_hammer_card.png',
            '/assets/classic-studies-1/split-brain/market_hammer.png',
            '/assets/classic-studies-1/split-brain/market_nail_card.png',
            '/assets/classic-studies-1/split-brain/market_fourpoints.png',
            '/assets/classic-studies-1/split-brain/market_smoke.png',
            '/assets/classic-studies-1/split-brain/market_brain.png',
        ],
        correct: [4, 7],
        scenes: [scene_5_1],
    };

    let scene_6_1 = {
        question:
            '屏幕上闪过了一个<b>钉子</b>的图片，接下来，裂脑人先生需要用手指出屏幕上呈现了什么东西，你能从左侧的备选物品中把正确的东西放到他手指的方向吗？',
        layout: [
            {
                name: 'img',
                params: ['/assets/classic-studies-1/split-brain/play_desk.png', [6.64, 3.7, 20.59, 11.64, scale]],
            },
            {
                name: 'img',
                params: ['/assets/classic-studies-1/split-brain/play_person_1.png', [12.65, 8.41, 8.56, 7.46, scale]],
            },
            {
                name: 'img',
                params: ['/assets/classic-studies-1/split-brain/market_nail.png', [13.82, 5.55, 2.59, 1.94, scale]],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-1/split-brain/market_hammer.png',
                    [4.98, 4.14, 3.47, 2.6, scale],
                    true,
                    [
                        [12.36, 9.4, 1.46, 1.46, scale],
                        [20.04, 9.4, 1.46, 1.46, scale],
                    ],
                    true,
                ],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-1/split-brain/market_nail.png',
                    [4.98, 7.26, 3.47, 2.6, scale],
                    true,
                    [
                        [12.36, 9.4, 1.46, 1.46, scale],
                        [20.04, 9.4, 1.46, 1.46, scale],
                    ],
                    true,
                ],
            },
        ],
        correct_func: (components) => {
            return components[4].whereabout == 0 && components[3].whereabout == -1;
        },
    };

    let scene_6_2 = {
        question:
            '屏幕上闪过了一个<b>钉子</b>的图片。接下来，裂脑人先生需要用手指出屏幕上出现了什么东西。你能从屏幕左侧的备选物品中把正确的东西放到他手指的方向吗？',
        layout: [
            {
                name: 'img',
                params: ['/assets/classic-studies-1/split-brain/play_desk.png', [6.64, 3.7, 20.59, 11.64, scale]],
            },
            {
                name: 'img',
                params: ['/assets/classic-studies-1/split-brain/play_person_1.png', [12.65, 8.41, 8.56, 7.46, scale]],
            },
            {
                name: 'img',
                params: ['/assets/classic-studies-1/split-brain/market_nail.png', [18.07, 5.55, 2.59, 1.94, scale]],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-1/split-brain/market_hammer.png',
                    [4.98, 4.14, 3.47, 2.6, scale],
                    true,
                    [
                        [12.36, 9.4, 1.46, 1.46, scale],
                        [20.04, 9.4, 1.46, 1.46, scale],
                    ],
                    true,
                ],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-1/split-brain/market_nail.png',
                    [4.98, 7.26, 3.47, 2.6, scale],
                    true,
                    [
                        [12.36, 9.4, 1.46, 1.46, scale],
                        [20.04, 9.4, 1.46, 1.46, scale],
                    ],
                    true,
                ],
            },
        ],
        correct_func: (components) => {
            return components[4].whereabout == 1 && components[3].whereabout == -1;
        },
    };

    let scene_6_3 = {
        question:
            '屏幕上闪过一个<b>钉子</b>的图片。接下来，裂脑人需要<b>说出</b>他看到了什么东西，你能从卡片中选择正确的回答，拖进对话气泡吗？',
        layout: [
            {
                name: 'img',
                params: ['/assets/classic-studies-1/split-brain/play_desk.png', [6.64, 3.7, 20.59, 11.64, scale]],
            },
            {
                name: 'img',
                params: ['/assets/classic-studies-1/split-brain/play_person_1.png', [12.65, 8.41, 8.56, 7.46, scale]],
            },
            {
                name: 'img',
                params: ['/assets/classic-studies-1/split-brain/market_nail.png', [13.82, 5.55, 2.59, 1.94, scale]],
            },
            {
                name: 'img',
                params: ['/assets/classic-studies-1/split-brain/play_speak.png', [17.56, 3.09, 9.1, 6.21, scale]],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-1/split-brain/market_hammer_card.png',
                    [25.2, 7.86, 2.76, 2, scale],
                    true,
                    [[21.21, 4.73, 2.92, 1.46, scale]],
                    true,
                ],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-1/split-brain/market_nail_card.png',
                    [25.2, 9.86, 2.76, 2, scale],
                    true,
                    [[21.21, 4.73, 2.92, 1.46, scale]],
                    true,
                ],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-1/split-brain/market_nothing.png',
                    [25.2, 11.86, 2.76, 2, scale],
                    true,
                    [[21.21, 4.73, 2.92, 1.46, scale]],
                    true,
                ],
            },
        ],
        correct_func: (components) => {
            return components[4].whereabout == -1 && components[5].whereabout == -1 && components[6].whereabout == 0;
        },
    };

    let scene_6_4 = {
        question:
            '屏幕上闪过一个<b>钉子</b>的图片。接下来，裂脑人需要<b>说出</b>他看到了什么东西，你能从卡片中选择正确的回答，拖进对话气泡吗？',
        layout: [
            {
                name: 'img',
                params: ['/assets/classic-studies-1/split-brain/play_desk.png', [6.64, 3.7, 20.59, 11.64, scale]],
            },
            {
                name: 'img',
                params: ['/assets/classic-studies-1/split-brain/play_person_1.png', [12.65, 8.41, 8.56, 7.46, scale]],
            },
            {
                name: 'img',
                params: ['/assets/classic-studies-1/split-brain/market_nail.png', [18.07, 5.55, 2.59, 1.94, scale]],
            },
            {
                name: 'img',
                params: ['/assets/classic-studies-1/split-brain/play_speak.png', [17.56, 3.09, 9.1, 6.21, scale]],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-1/split-brain/market_hammer_card.png',
                    [25.2, 7.86, 2.76, 2, scale],
                    true,
                    [[21.21, 4.73, 2.92, 1.46, scale]],
                    true,
                ],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-1/split-brain/market_nail_card.png',
                    [25.2, 9.86, 2.76, 2, scale],
                    true,
                    [[21.21, 4.73, 2.92, 1.46, scale]],
                    true,
                ],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-1/split-brain/market_nothing.png',
                    [25.2, 11.86, 2.76, 2, scale],
                    true,
                    [[21.21, 4.73, 2.92, 1.46, scale]],
                    true,
                ],
            },
        ],
        correct_func: (components) => {
            return components[4].whereabout == -1 && components[5].whereabout == 0 && components[6].whereabout == -1;
        },
    };

    let scene_6_5 = {
        question:
            '刚才研究者在屏幕上呈现了一张图片，裂脑人被试说这是裸女的图片。你知道刚才研究者放了什么东西在哪边的屏幕上吗？',
        layout: [
            {
                name: 'img',
                params: ['/assets/classic-studies-1/split-brain/play_desk.png', [6.64, 3.7, 20.59, 11.64, scale]],
            },
            {
                name: 'img',
                params: ['/assets/classic-studies-1/split-brain/play_person_1.png', [12.65, 8.41, 8.56, 7.46, scale]],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-1/split-brain/play_nude.png',
                    [5.09, 3.7, 3.09, 3.45, scale],
                    true,
                    [
                        [13.48, 4.71, 3.45, 3.45, scale],
                        [17.7, 4.71, 3.45, 3.45, scale],
                    ],
                    true,
                ],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-1/split-brain/play_machine.png',
                    [5.09, 7.99, 3.45, 2.59, scale],
                    true,
                    [
                        [13.48, 4.71, 3.45, 3.45, scale],
                        [17.7, 4.71, 3.45, 3.45, scale],
                    ],
                    true,
                ],
            },
        ],
        correct_func: (components) => {
            return components[2].whereabout == 1 && components[3].whereabout == -1;
        },
    };

    let scene_6_6 = {
        question:
            '刚才研究者在屏幕上呈现了一张图片，裂脑人被试看到后笑了起来，但是当研究者问他为什么发笑，他却说自己什么都么看到，发笑也许是因为搞笑的机器装置。你知道刚才研究者放了什么东西在哪边的屏幕上吗？',
        layout: [
            {
                name: 'img',
                params: ['/assets/classic-studies-1/split-brain/play_desk.png', [6.64, 3.7, 20.59, 11.64, scale]],
            },
            {
                name: 'img',
                params: ['/assets/classic-studies-1/split-brain/play_person_1.png', [12.65, 8.41, 8.56, 7.46, scale]],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-1/split-brain/play_nude.png',
                    [5.09, 3.7, 3.09, 3.45, scale],
                    true,
                    [
                        [13.48, 4.71, 3.45, 3.45, scale],
                        [17.7, 4.71, 3.45, 3.45, scale],
                    ],
                    true,
                ],
            },
            {
                name: 'drag',
                params: [
                    '/assets/classic-studies-1/split-brain/play_machine.png',
                    [5.09, 7.99, 3.45, 2.59, scale],
                    true,
                    [
                        [13.48, 4.71, 3.45, 3.45, scale],
                        [17.7, 4.71, 3.45, 3.45, scale],
                    ],
                    true,
                ],
            },
        ],
        correct_func: (components) => {
            return components[2].whereabout == 0 && components[3].whereabout == -1;
        },
    };

    let level6 = {
        position: [22.62, 7.07, 2, 2, scale],
        paper: '/assets/classic-studies-1/split-brain/doc-1-6.jpg',
        prompt: '还剩下最后一关，加油，你已经做得很棒了！现在，请你选择<b>所有的工具和所有的卡片</b>，然后把它们带到实验室',
        objects: [
            '/assets/classic-studies-1/split-brain/market_nothing.png',
            '/assets/classic-studies-1/split-brain/market_apple.png',
            '/assets/classic-studies-1/split-brain/market_orange.png',
            '/assets/classic-studies-1/split-brain/market_hammer_card.png',
            '/assets/classic-studies-1/split-brain/market_hammer.png',
            '/assets/classic-studies-1/split-brain/market_nail_card.png',
            '/assets/classic-studies-1/split-brain/market_apple.png',
            '/assets/classic-studies-1/split-brain/market_nail.png',
            '/assets/classic-studies-1/split-brain/market_brain.png',
        ],
        correct: [0, 3, 4, 5, 7],
        scenes: [scene_6_1, scene_6_2, scene_6_3, scene_6_4, scene_6_5, scene_6_6],
    };

    return {
        map: '/assets/classic-studies-1/split-brain/house1_bg.jpg',
        background: '/assets/classic-studies-1/split-brain/play_1_bg.jpg',
        marker: '/assets/classic-studies-1/split-brain/room_flag.png',
        levels: [level1, level2, level3, level4, level5, level6],
    };
};
