let scale = 3200 / 33.87;

// window.static_url = 'http://127.0.0.1:8000';
window.static_url = 'http://bnu-psy.oss-cn-beijing.aliyuncs.com';
window.image_list = [
    ['house_bg.jpg', true],
    ['lobby_bg.jpg', true],
    ['lock_btn.png', true],
    ['play_bg.jpg', true],
    ['play_btn.png', true],
    ['room_flag.png', true],
    'albert/doc-1-1.jpg',
    'albert/game5_1_1.png',
    'albert/market5_1_1.png',
    'albert/market5_1_2.png',
    'albert/market5_1_3.png',
    'albert/market5_1_4.png',
    'albert/market5_1_5.png',
    'albert/market5_1_6.png',
    'albert/market5_1_7.png',
    'albert/market5_1_8.png',
    'albert/market5_1_9.png',
    'love/cloth-mother.png',
    'love/doc-6-1.jpg',
    'love/doc-6-2.jpg',
    'love/doc-6-3.jpg',
    'love/fright.png',
    'love/game3_1_1.png',
    'love/game3_2_1.png',
    'love/game3_2_3.png',
    'love/game3_3_2.png',
    'love/ladder.png',
    'love/monkey.png',
    'love/stool.png',
    'love/toy.png',
    'love/wire-mother.png',
    'maps/doc-4-1.jpg',
    'maps/doc-4-2.jpg',
    'maps/doc-4-3.jpg',
    'maps/film.png',
    'maps/food.png',
    'maps/game2_1_1.png',
    'maps/game2_2_1_1.png',
    'maps/game2_2_4.png',
    'maps/game2_3_1_1.png',
    'maps/game2_3_1_2.png',
    'maps/game2_3_2.png',
    'maps/left.png',
    'maps/m1.png',
    'maps/m2.png',
    'maps/m3.png',
    'maps/m4.png',
    'maps/m5.png',
    'maps/m6.png',
    'maps/m7.png',
    'maps/m8.png',
    'maps/m9.png',
    'maps/mouse-hungry.png',
    'maps/mouse-thirsty.png',
    'maps/mouse.png',
    'maps/one.png',
    'maps/point.png',
    'maps/right.png',
    'maps/stopper.png',
    'maps/water.png',
    'memory/barn.png',
    'memory/bus.png',
    'memory/car-white.png',
    'memory/car.png',
    'memory/doc-5-1.jpg',
    'memory/doc-5-2.jpg',
    'memory/doc-5-3.jpg',
    'memory/doc-5-4.jpg',
    'memory/game1_1_1.png',
    'memory/game1_1_2.png',
    'memory/game1_1_3_1.png',
    'memory/game1_1_3_2.png',
    'memory/game1_2_1.png',
    'memory/game1_2_2.png',
    'memory/game1_2_3_1.png',
    'memory/game1_2_4_1.png',
    'memory/game1_2_4_2.png',
    'memory/game1_2_4_3.png',
    'memory/game1_2_4_4.png',
    'memory/game1_3_1.png',
    'memory/game1_3_2.png',
    'memory/game1_3_3_1.png',
    'memory/game1_3_4_1.png',
    'memory/game1_3_4_2.png',
    'memory/game1_4_1_1.png',
    'memory/game1_4_3_1.png',
    'memory/game1_4_3_2.png',
    'memory/person.png',
    'memory/stop-sign.png',
    'memory/text-barn.png',
    'memory/text-board.png',
    'memory/text-bus.png',
    'memory/text-car.png',
    'memory/text-do.png',
    'memory/text-eight.png',
    'memory/text-four.png',
    'memory/text-half-hour.png',
    'memory/text-month.png',
    'memory/text-one.png',
    'memory/text-pass.png',
    'memory/text-see.png',
    'memory/text-stop-sign.png',
    'memory/text-students.png',
    'memory/text-turn-right.png',
    'memory/text-twelve.png',
    'memory/text-week.png',
    'memory/text-year.png',
    'pigeons/clock_10.png',
    'pigeons/clock_15.png',
    'pigeons/clock_20.png',
    'pigeons/clock_30.png',
    'pigeons/clock_60.png',
    'pigeons/doc-2-1.jpg',
    'pigeons/doc-2-2.jpg',
    'pigeons/food.png',
    'pigeons/game4_1_1.png',
    'pigeons/game4_1_3.png',
    'pigeons/pigeon_dancing.png',
    'pigeons/pigeon_full.png',
    'pigeons/pigeon_hungry.png',
    'pigeons/pigeon_shaking.png',
    'pigeons/pigeon_singing.png',
    'rosenthal/doc-3-1.jpg',
    'rosenthal/doc-3-2.jpg',
    'rosenthal/game6_1_1.png',
    'rosenthal/game6_1_2_1.png',
    'rosenthal/game6_1_2_2.png',
    'rosenthal/game6_2_2_1.png',
    'rosenthal/game6_2_2_2.png',
    'rosenthal/game6_2_2_3.png',
    'rosenthal/game6_2_2_4.png',
    'rosenthal/game6_2_3_1.png',
    'rosenthal/iq-20.png',
    'rosenthal/iq-80.png',
    'rosenthal/market6_1_1.png',
    'rosenthal/market6_1_2.png',
    'rosenthal/market6_1_3.png',
    'rosenthal/market6_1_4.png',
    'rosenthal/market6_1_5.png',
    'rosenthal/market6_1_6.png',
    'rosenthal/market6_1_7.png',
    'rosenthal/market6_1_8.png',
    'rosenthal/market6_1_9.png',
    'rosenthal/random-20.png',
    'rosenthal/random-80.png',
].map((value) => {
    if (Array.isArray(value)) {
        value[0] = '/assets/classic-studies-2/' + value[0];
        return value;
    } else {
        return '/assets/classic-studies-2/' + value;
    }
});

window.game_map = '/assets/classic-studies-2/lobby_bg.jpg';
window.finished_marker = '/assets/classic-studies-2/lock_btn.png';
window.unfinished_marker = '/assets/classic-studies-2/play_btn.png';

window.sessions = [
    {position: [18.58, 11.12, 1.64, 1.64, scale], get: window.loaded_sessions.albert()},
    {position: [9.45, 10.56, 1.64, 1.64, scale], get: window.loaded_sessions.superstitious_pigeons()},
    {position: [21.63, 7.89, 1.64, 1.64, scale], get: window.loaded_sessions.rosenthal()},
    {position: [28.42, 11.12, 1.64, 1.64, scale], get: window.loaded_sessions.maps()},
    {position: [4.53, 11.38, 1.64, 1.64, scale], get: window.loaded_sessions.memory()},
    {position: [18.58, 14.27, 1.64, 1.64, scale], get: window.loaded_sessions.love()},
];

window.about_text = `
    <h1>关于游戏</h1>
    <p>本游戏为旧版心理学经典研究课程游戏重制版，在尽可能保留旧版游戏特色的基础上，进行了一定的优化，以改善同学们的游戏体验。</p>
    <p>游戏仍然处于早期测试阶段，欢迎同学们在游玩过程中，积极提出改进意见，或就遇到的程序错误进行反馈</p>
    <p>反馈方式：</p>
    <ul>
        <li><a href="https://github.com/Shaobin-Jiang/course-game/issues/new" target="_blank">Github</a>（推荐）</li>
        <li>通过邮件反馈：<a href="mailto: shaobin-jiang@outlook.com">shaobin-jiang@outlook.com</a></li>
    </ul>
    <h2>版本历史</h2>
    <p><b>&bull; Version 0.0.1-beta (2023.1.15)</b></p>
    <p>首个测试版本，相比于原版小游戏，更新内容如下：</p>
    <ul>
        <li><b>游戏玩法</b></li>
        <ul>
            <li>问题首次阅读时间由20s缩短为10s</li>
            <li>首次游玩时，作答错误、再次阅读文献后，将直接回到作答错误的关卡，而非从第1关重新开始</li>
            <li>作答错误后再次阅读文献时间由60s缩短为20s，再次阅读问题时间由20s缩短为5s</li>
            <li>允许重复游玩已经完成的关卡</li>
            <li>重复游玩已经完成的关卡时，无需在作答错误后重新阅读文献</li>
        </ul>
        <li><b>界面优化</b></li>
        <ul>
            <li>文献阅读界面和问题呈现界面增加倒计时组件，呈现剩余的需要阅读的时间</li>
            <li>阅读问题、点击屏幕任意处开始作答后，新增“查看问题”按钮，以重新查看问题内容</li>
            <li>游戏内显示实时进度</li>
            <li>关卡选择界面对最新未完成关卡进行高亮提示</li>
            <li>优化文献阅读器使用体验，支持鼠标滚轮操作</li>
            <li>优化游戏内文本，增加关键信息突出显示</li>
            <li>优化反馈动画</li>
        </ul>
        <li><b>增加注册、密码找回功能</b></li>
    </ul>
`;
