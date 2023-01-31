let scale = 3200 / 33.87;

window.game_map = '/assets/classic-studies-2/lobby_bg.jpg';
window.finished_marker = '/assets/classic-studies-2/lock_btn.png';
window.unfinished_marker = '/assets/classic-studies-2/play_btn.png';

window.sessions = [
    {position: [18.58, 11.12, 1.64, 1.64, scale], get: window.loaded_sessions.albert()},
    {position: [9.45, 10.56, 1.64, 1.64, scale], get: window.loaded_sessions.superstitious_pigeons()},
    {position: [21.63, 7.89, 1.64, 1.64, scale], get: window.loaded_sessions.rosenthal()},
    // {position: [28.42, 11.12, 1.64, 1.64, scale], get: window.loaded_sessions.visual_cliff()},
    // {position: [4.53, 11.38, 1.64, 1.64, scale], get: window.loaded_sessions.dreams()},
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
