(function() {
    // 配置参数
    const snowflakeCount = 10;   // 雪花数量
    const minSize = 15;           // 雪花最小尺寸
    const maxSize = 30;           // 雪花最大尺寸
    const windEffect = 40;        // 风的强度（越大，飘动越明显）
    const snowflakeImage = '/img/snow/flower.png';//'https://vrast.cn/img/snow.png'; // 外部雪花图片路径

    // 创建雪花元素并设置随机属性
    function createSnowflake() {
        const snowflake = document.createElement('div');
        snowflake.className = 'snowflake';

        // 随机大小
        const size = Math.random() * (maxSize - minSize) + minSize;
        snowflake.style.width = `${size}px`;
        snowflake.style.height = `${size}px`;

        // 随机水平位置、动画速度
        const leftPosition = Math.random() * 100; // 随机水平位置
        const animationDuration = Math.random() * 3 + 3; // 动画持续时间
        const delayTime = Math.random() * 5 + 's'; // 延迟时间

        snowflake.style.left = `${leftPosition}vw`;
        snowflake.style.position = 'fixed'; // 使用 fixed，避免影响页面滚动
        snowflake.style.top = `${-size}px`;  // 初始位置设置为视口外的顶部
        snowflake.style.pointerEvents = 'none';
        snowflake.style.userSelect = 'none';
        snowflake.style.zIndex = 9999;

        // 设置雪花图片
        snowflake.style.backgroundImage = `url(${snowflakeImage})`;
        snowflake.style.backgroundSize = 'cover';  // 图片铺满雪花容器

        // 添加动画效果
        snowflake.style.animation = `fall ${animationDuration}s linear infinite`;
        snowflake.style.animationDelay = delayTime;
        
        // 随机旋转角度，模拟风吹效果
        const rotateAngle = Math.random() * 360;
        const translateX = (Math.random() - 0.5) * windEffect; // 风吹偏移
        snowflake.style.transform = `rotate(${rotateAngle}deg) translateX(${translateX}vw)`;

        // 将雪花添加到页面
        document.body.appendChild(snowflake);
    }

    // 初始化CSS样式
    function initCSS() {
        const style = document.createElement('style');
        style.innerHTML = `
            /* 雪花的样式 - 使用图片 */
            .snowflake {
                position: absolute;
                background-color: transparent;
                opacity: 1;
                transform-origin: center;
                pointer-events: none;
                user-select: none;
            }

            /* 雪花下落动画 */
            @keyframes fall {
                to {
                    transform: translateY(100vh); /* 让雪花从顶部飘落到屏幕底部 */
                }
            }
        `;
        document.head.appendChild(style);
    }

    // 初始化雪花数量
    function initSnowfall() {
        for (let i = 0; i < snowflakeCount; i++) {
            createSnowflake();
        }
    }

    // 初始化函数
    function init() {
        initCSS();
        initSnowfall();
    }
    
    init();
    
    // // 获取当前日期对象
    // const currentDate = new Date();
    // // 获取当前月份，注意 getMonth() 方法返回的月份是从 0 开始计数的，所以 0 代表 1 月，11 代表 12 月
    // const currentMonth = currentDate.getMonth();
    
    // // 判断当前月份是否为冬季
    // function isWinter(month) {
    //     // 11 代表 12 月，0 代表 1 月，1 代表 2 月
    //     return month === 11 || month === 0 || month === 1;
    // }
    
    // // 调用函数进行判断
    // if (isWinter(currentMonth)) {
    //     // 启动雪花效果
    //     init();
    // }
})();
