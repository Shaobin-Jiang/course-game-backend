let scale = 3200 / 33.87;

// window.static_url = 'http://127.0.0.1:8000';
window.static_url = 'http://bnu-psy.oss-cn-beijing.aliyuncs.com';
window.image_list = [
    'lobby_bg.jpg',
    'lock_btn.png',
    'play_btn.png',
    'dreams/command-no-sleep-false-reason.png',
    'dreams/command-no-sleep-true-reason.png',
    'dreams/command-sleep.png',
    'dreams/dialog-no-detail.png',
    'dreams/dialog-no-memory.png',
    'dreams/dialog-remember-dream.png',
    'dreams/doc-5-1.jpg',
    'dreams/doc-5-2.jpg',
    'dreams/doc-5-3.jpg',
    'dreams/house5_bg.jpg',
    'dreams/market2_4.png',
    'dreams/market2_5.png',
    'dreams/market_moon.png',
    'dreams/market_norem.png',
    'dreams/market_rem.png',
    'dreams/market_sleeping.png',
    'dreams/play_alarm.png',
    'dreams/play_alarm11.png',
    'dreams/play_alarm12.png',
    'dreams/play_alarm13.png',
    'dreams/play_alarm7.png',
    'dreams/play_alarm8.png',
    'dreams/play_alarm9.png',
    'dreams/play_moon3.png',
    'dreams/play_moon4.png',
    'dreams/play_moon5.png',
    'dreams/play_moon6.png',
    'dreams/play_moon7.png',
    'dreams/play_moon8.png',
    'dreams/play_pad1.png',
    'dreams/play_pad2.png',
    'dreams/play_pad3.png',
    'dreams/play_pad4.png',
    'dreams/play_pad5.png',
    'dreams/play_pad6.png',
    'dreams/play_sleepy_big.png',
    'dreams/room_sleepingbaby.png',
    'dreams/stage-baseline.png',
    'dreams/stage-days-off.png',
    'dreams/stage-deprive-non-rem.png',
    'dreams/stage-deprive-rem.png',
    'dreams/stage-non-rem.png',
    'dreams/stage-recover-non-rem.png',
    'dreams/stage-recover-rem.png',
    'dreams/stage-rem.png',
    'minnesota-twins/colon.png',
    'minnesota-twins/doc-2-1.jpg',
    'minnesota-twins/doc-2-2.jpg',
    'minnesota-twins/doc-2-3.jpg',
    'minnesota-twins/house2_bg.jpg',
    'minnesota-twins/market2_card1.png',
    'minnesota-twins/market2_card11.png',
    'minnesota-twins/market2_card12.png',
    'minnesota-twins/market2_card13.png',
    'minnesota-twins/market2_card14.png',
    'minnesota-twins/market2_card15.png',
    'minnesota-twins/market2_card16.png',
    'minnesota-twins/market2_card17.png',
    'minnesota-twins/market2_card18.png',
    'minnesota-twins/market2_card19.png',
    'minnesota-twins/market2_card2.png',
    'minnesota-twins/market2_card3.png',
    'minnesota-twins/market2_card4.png',
    'minnesota-twins/market2_card5.png',
    'minnesota-twins/market2_card6.png',
    'minnesota-twins/market2_card7.png',
    'minnesota-twins/market2_card8.png',
    'minnesota-twins/market2_card9.png',
    'minnesota-twins/market2_equal0.png',
    'minnesota-twins/market2_equal1.png',
    'minnesota-twins/market2_less.png',
    'minnesota-twins/market2_more.png',
    'minnesota-twins/play_2_bg.jpg',
    'minnesota-twins/play_a.jpg',
    'minnesota-twins/play_b.jpg',
    'minnesota-twins/play_c.jpg',
    'minnesota-twins/play_card.png',
    'minnesota-twins/play_card11.png',
    'minnesota-twins/play_d.jpg',
    'minnesota-twins/play_graph.png',
    'minnesota-twins/room_baby.png',
    'rats/doc-3-1.jpg',
    'rats/doc-3-2.jpg',
    'rats/doc-3-3.jpg',
    'rats/house3_bg.jpg',
    'rats/market3_box1.png',
    'rats/market3_box2.png',
    'rats/market3_box3.png',
    'rats/market3_hand.png',
    'rats/play_3_bg.png',
    'rats/play_cage.png',
    'rats/play_handsframe.png',
    'rats/play_table.png',
    'rats/play_weight.png',
    'rats/rat_fat.png',
    'rats/rat_lab.png',
    'rats/rat_lacking.png',
    'rats/rat_normal.png',
    'rats/rat_rich.png',
    'rats/rat_short.png',
    'rats/rat_tall.png',
    'rats/rat_thin.png',
    'rats/room_mouse.png',
    'split-brain/doc-1-1.jpg',
    'split-brain/doc-1-2.jpg',
    'split-brain/doc-1-3.jpg',
    'split-brain/doc-1-4.jpg',
    'split-brain/doc-1-5.jpg',
    'split-brain/doc-1-6.jpg',
    'split-brain/house1_bg.jpg',
    'split-brain/market_apple.png',
    'split-brain/market_brain.png',
    'split-brain/market_fourpoints.png',
    'split-brain/market_hammer.png',
    'split-brain/market_hammer_card.png',
    'split-brain/market_knife.png',
    'split-brain/market_lettercard.png',
    'split-brain/market_nail.png',
    'split-brain/market_nail_card.png',
    'split-brain/market_nothing.png',
    'split-brain/market_numbercard.png',
    'split-brain/market_orange.png',
    'split-brain/market_smoke.png',
    'split-brain/play_1_bg.jpg',
    'split-brain/play_desk.png',
    'split-brain/play_machine.png',
    'split-brain/play_nude.png',
    'split-brain/play_person_1.png',
    'split-brain/play_person_4.png',
    'split-brain/play_person_5.png',
    'split-brain/play_person_6.png',
    'split-brain/play_speak.png',
    'split-brain/room_flag.png',
    'visual-cliff/device-bottom-dense.png',
    'visual-cliff/device-bottom-normal.png',
    'visual-cliff/device-bottom-shallow.png',
    'visual-cliff/device-high.png',
    'visual-cliff/device-left.png',
    'visual-cliff/device-middle-high.png',
    'visual-cliff/device-middle-normal.png',
    'visual-cliff/device-middle.png',
    'visual-cliff/device-no-bottom.png',
    'visual-cliff/device-right.png',
    'visual-cliff/device.png',
    'visual-cliff/doc-4-1.jpg',
    'visual-cliff/doc-4-2.jpg',
    'visual-cliff/doc-4-3.jpg',
    'visual-cliff/doc-4-4.jpg',
    'visual-cliff/house4_bg.jpg',
    'visual-cliff/normal-baby.png',
    'visual-cliff/normal-cat.png',
    'visual-cliff/normal-chick.png',
    'visual-cliff/normal-rat.png',
    'visual-cliff/normal-sheep.png',
    'visual-cliff/normal-turtle.png',
    'visual-cliff/play_4_bg.jpg',
    'visual-cliff/room_flag.png',
    'visual-cliff/table.png',
    'visual-cliff/terrified-baby.png',
    'visual-cliff/terrified-cat.png',
    'visual-cliff/terrified-chick.png',
    'visual-cliff/terrified-rat.png',
    'visual-cliff/terrified-sheep.png',
].map((value) => '/assets/classic-studies-1/' + value);

window.game_map = '/assets/classic-studies-1/lobby_bg.jpg';
window.finished_marker = '/assets/classic-studies-1/lock_btn.png';
window.unfinished_marker = '/assets/classic-studies-1/play_btn.png';

window.sessions = [
    {position: [18.58, 11.12, 1.64, 1.64, scale], get: window.loaded_sessions.split_brain()},
    {position: [9.45, 10.56, 1.64, 1.64, scale], get: window.loaded_sessions.minnesota_twins()},
    {position: [21.63, 7.89, 1.64, 1.64, scale], get: window.loaded_sessions.rats()},
    {position: [28.42, 11.12, 1.64, 1.64, scale], get: window.loaded_sessions.visual_cliff()},
    {position: [4.53, 11.38, 1.64, 1.64, scale], get: window.loaded_sessions.dreams()},
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
