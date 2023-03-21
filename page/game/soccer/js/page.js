var USE_LOGIN_REGISTER_SYSTEM = 0;
var LOADING_IMAGE_GAME = "<image style='margin:0px !important;' title='加载中...' class='class-has-title class-image-icon class-image-icon-loading class-image-icon-loading-2' src='data:image/gif;base64,R0lGODlhEAAQAPYAAP///ypZgNri6aW5yXqXr1+Cn2KFoYWgtrHC0OHn7bLD0UhwkUtyk1J4l1d8ml2BnoKdtMXR3EFrjYmjuO7y9fDz9svX4J2yxGyMp3iWrsjU3tfg51p+nDxnip6zxbfH1HaUrZGpvebr8JmwwjVihoCcs6y+zX+bssHP2mSGojJfhLzL16e6yj5oiy9cguvv8/X3+Y6mu5iuwff4+patwLbG0/r7/Pz8/crV39Lc5Pj6+9zk6rvK1vL099nh6Ojt8ePp7tXe5s/Z4sbT3eTq797l6/P2+N/m7I+ovMDN2b7M2GmKpW6OqHWTrHuYsGGDoFx/nc3Y4YylulN5mO3x9E10lKC1xnOSq051lUNsjq/Az2uLpjlkiJuxw32ZsVV6mdDa49Td5enu8sPQ25OqvqO3yK2/znGQqqK2x2eJpGaHo0ZvkLTE0jdjhzRghbnI1S1bgaq9zElxkjpliVh9m4qkuVB2ljBeg4eht0Rtj3CPqYSftZSsvwAAAAAAAAAAACH5BAkKAAAAIf8LTkVUU0NBUEUyLjADAQAAACwAAAAAEAAQAAAHjYAAgoOEhYUbIykthoUIHCQqLoI2OjeFCgsdJSsvgjcwPTaDAgYSHoY2FBSWAAMLE4wAPT89ggQMEbEzQD+CBQ0UsQA7RYIGDhWxN0E+ggcPFrEUQjuCCAYXsT5DRIIJEBgfhjsrFkaDERkgJhswMwk4CDzdhBohJwcxNB4sPAmMIlCwkOGhRo5gwhIGAgAh+QQJCgAAACwAAAAAEAAQAAAHjIAAgoOEhYU7A1dYDFtdG4YAPBhVC1ktXCRfJoVKT1NIERRUSl4qXIRHBFCbhTKFCgYjkII3g0hLUbMAOjaCBEw9ukZGgidNxLMUFYIXTkGzOmLLAEkQCLNUQMEAPxdSGoYvAkS9gjkyNEkJOjovRWAb04NBJlYsWh9KQ2FUkFQ5SWqsEJIAhq6DAAIBACH5BAkKAAAALAAAAAAQABAAAAeJgACCg4SFhQkKE2kGXiwChgBDB0sGDw4NDGpshTheZ2hRFRVDUmsMCIMiZE48hmgtUBuCYxBmkAAQbV2CLBM+t0puaoIySDC3VC4tgh40M7eFNRdH0IRgZUO3NjqDFB9mv4U6Pc+DRzUfQVQ3NzAULxU2hUBDKENCQTtAL9yGRgkbcvggEq9atUAAIfkECQoAAAAsAAAAABAAEAAAB4+AAIKDhIWFPygeEE4hbEeGADkXBycZZ1tqTkqFQSNIbBtGPUJdD088g1QmMjiGZl9MO4I5ViiQAEgMA4JKLAm3EWtXgmxmOrcUElWCb2zHkFQdcoIWPGK3Sm1LgkcoPrdOKiOCRmA4IpBwDUGDL2A5IjCCN/QAcYUURQIJIlQ9MzZu6aAgRgwFGAFvKRwUCAAh+QQJCgAAACwAAAAAEAAQAAAHjIAAgoOEhYUUYW9lHiYRP4YACStxZRc0SBMyFoVEPAoWQDMzAgolEBqDRjg8O4ZKIBNAgkBjG5AAZVtsgj44VLdCanWCYUI3txUPS7xBx5AVDgazAjC3Q3ZeghUJv5B1cgOCNmI/1YUeWSkCgzNUFDODKydzCwqFNkYwOoIubnQIt244MzDC1q2DggIBACH5BAkKAAAALAAAAAAQABAAAAeJgACCg4SFhTBAOSgrEUEUhgBUQThjSh8IcQo+hRUbYEdUNjoiGlZWQYM2QD4vhkI0ZWKCPQmtkG9SEYJURDOQAD4HaLuyv0ZeB4IVj8ZNJ4IwRje/QkxkgjYz05BdamyDN9uFJg9OR4YEK1RUYzFTT0qGdnduXC1Zchg8kEEjaQsMzpTZ8avgoEAAIfkECQoAAAAsAAAAABAAEAAAB4iAAIKDhIWFNz0/Oz47IjCGADpURAkCQUI4USKFNhUvFTMANxU7KElAhDA9OoZHH0oVgjczrJBRZkGyNpCCRCw8vIUzHmXBhDM0HoIGLsCQAjEmgjIqXrxaBxGCGw5cF4Y8TnybglprLXhjFBUWVnpeOIUIT3lydg4PantDz2UZDwYOIEhgzFggACH5BAkKAAAALAAAAAAQABAAAAeLgACCg4SFhjc6RhUVRjaGgzYzRhRiREQ9hSaGOhRFOxSDQQ0uj1RBPjOCIypOjwAJFkSCSyQrrhRDOYILXFSuNkpjggwtvo86H7YAZ1korkRaEYJlC3WuESxBggJLWHGGFhcIxgBvUHQyUT1GQWwhFxuFKyBPakxNXgceYY9HCDEZTlxA8cOVwUGBAAA7'/>";
var SPONSOR_ITEMS = ["球衣广告权", "球场广告权", "电视转播权", "草皮赞助权", "网络广播权", "商品广告权"];
var LINEUP_STATUS = ["否", "首发", "替补"];
var LINEUP_STATUS_NO_IN_LINEUP = 0;
var LINEUP_STATUS_IN_LINEUP = 1;
var LINEUP_STATUS_IN_LINEUP_BACKUP = 2;
var PLAYER_SALARY_WEEK_BASE_VALUE = 1000;
var PLAYER_POSITIONS = {0: "门将", 1: "后卫", 2: "中场", 3: "前锋"};
var PLAYER_ABILITY_LEVEL_VALUE = 20;
var STADIUM_CAPACITY_LEVEL_VALUE = 1000;
var FANS_COUNT_LEVEL_VALUE = 100;
var TEAM_MONEY_LEVEL_VALUE = 1000000;
var PLAYER_MONEY_LEVEL_VALUE = 10000;
var TEAM_COUNT_DEFAULT_VALUE = 20;
var TEAM_STADIUM_CAPACITY_INCREASE_ONE_COST_MONEY_DEFAULT_VALUE = 1000;
var TEAM_STADIUM_CAPACITY_SELL_ONE_COST_MONEY_DEFAULT_PERCENT = 0.5;
var TEAM_STADIUM_TRAIN_INCREASE_ONE_COST_MONEY_DEFAULT_VALUE = 100000;
var TEAM_STADIUM_TRAIN_SELL_ONE_COST_MONEY_DEFAULT_PERCENT = 0.8;
var TEAM_STADIUM_HOSPITAL_INCREASE_ONE_COST_MONEY_DEFAULT_VALUE = 10000;
var TEAM_STADIUM_HOSPITAL_SELL_ONE_COST_MONEY_DEFAULT_PERCENT = 0.5;
var BUY_TEAM_PLAYER_COUNT_DEFAULT_VALUE = 66;
var COUNT_DOWN_TIMER_DEFAULT_VALUE = 700;
var ERROR_MESSAGE_CANNOT_CONNECT_TO_SERVER_GAME = "无法连接到服务器，采用离线模式";
var PLAYER_NAMES = [
    "王", "李", "张", "刘", "陈", "杨", "赵", "黄", "周", "吴", "徐", "孙", "胡", "朱", "高", "林", "何", "郭", "马", "罗", "梁", "宋", "郑", "谢", "韩", "唐", "冯", "于", "董", "萧", "程", "曹", "袁", "邓", "许", "傅", "沈", "曾", "彭", "吕", "苏", "卢", "蒋", "蔡", "贾", "丁", "魏", "薛", "叶", "阎", "余", "潘", "杜", "戴", "夏", "钟", "汪", "田", "任", "姜", "范", "方", "石", "姚", "谭", "廖", "邹", "熊", "金", "陆", "郝", "孔", "白", "崔", "康", "毛", "邱", "秦", "江", "史", "顾", "侯", "邵", "孟", "龙", "万", "段", "雷", "钱", "汤", "尹", "黎", "易", "常", "武", "乔", "贺", "赖", "龚", "文", "庞", "樊", "兰", "殷", "施", "陶", "洪", "翟", "安", "颜", "倪", "严", "牛", "温", "芦", "季", "俞", "章", "鲁", "葛", "伍", "韦", "申", "尤", "毕", "聂", "丛", "焦", "向", "柳", "邢", "路", "岳", "齐", "沿", "梅", "莫", "庄", "辛", "管", "祝", "左", "涂", "谷", "祁", "时", "舒", "耿", "牟", "卜", "肖", "詹", "关", "苗", "凌", "费", "纪", "靳", "盛", "童", "欧", "甄", "项", "曲", "成", "游", "阳", "裴", "席", "卫", "查", "屈", "鲍", "位", "覃", "霍", "翁", "隋", "植", "甘", "景", "薄", "单", "包", "司", "柏", "宁", "柯", "阮", "桂", "闵", "欧", "阳", "解", "强", "柴", "华", "车", "冉", "房", "净", "佘", "练", "骆", "付", "代", "麦", "容", "初", "瞿", "褚", "班", "全", "名", "井", "米", "谈", "宫", "虞", "奚", "佟", "符", "蒲", "穆", "漆", "卞", "东", "储", "党", "从", "艾", "苻", "岑", "燕", "吉", "冷", "伊", "首", "娄", "楚", "邝", "历", "狄", "简", "胥", "连", "帅", "封", "支", "原", "滕", "苑", "信", "索", "栗", "官", "沙", "池", "藏", "师", "国", "巩", "刁", "茅", "杭", "巫", "居", "窦", "皮", "戈", "麻", "饶", "习", "巴", "旷", "宗", "荆", "荣", "孝", "蔺", "廉", "员", "西", "寇", "刃", "见", "底", "区", "郦", "卓", "琚", "续", "朴", "蒙", "敖", "花", "应", "喻", "冀", "尚", "顿", "菅", "嵇", "雒", "弓", "忻", "权", "谌", "卿", "扈", "海", "冼", "伦", "鹿", "宿", "山", "桑", "裘", "达", "么", "智", "宣", "尉", "迟", "东", "方", "幺", "郎", "农", "戚", "楼", "步", "尉", "蓝", "招", "攀", "栾", "籍", "寿", "邬", "荚", "税", "逄", "加", "勾", "由", "福", "缑", "钦", "鲜", "于", "但", "况", "鄢", "古", "乐", "斯", "钮", "盖", "旦", "毅", "邰", "哈", "鄂", "商", "英", "迟", "仝", "亓", "玄", "黑", "腾", "晏", "禹", "诸", "苟", "湛", "殳", "亢", "奉", "占", "闻", "粟", "种", "匡", "宾", "劳", "申", "伏", "过", "真", "宇", "巢", "计", "羌", "相", "辜", "展", "丑", "银", "丰", "矫", "上", "绳", "臧", "舍", "郅", "布", "糜", "乌", "衣", "来", "恒", "那", "满", "门", "司", "徒", "皋", "旺", "公", "言", "藤", "释", "尧", "缪", "干", "阚", "靖", "契", "晋", "六", "束", "良", "鹗", "贝", "邴", "沃", "竺", "扬", "励", "归", "上", "官", "荃", "焉", "多", "都", "果", "隆", "诸", "葛", "令", "狐", "慕", "礼", "祖", "翦", "力", "朗", "撖", "修", "呼", "富", "明", "站", "虢", "冶", "茹", "云", "肇", "平", "弋", "盘", "候", "尔", "姬", "宝", "畅", "冒", "邾", "延", "禅", "浦", "敬", "颉", "南", "巍", "补", "边", "鞠", "仲", "邸", "水", "渠", "郜", "禚", "笪", "金", "大", "相", "动", "冷", "笔", "合", "公", "重", "后", "明", "迷", "日", "高", "天", "冰", "平", "正", "所", "合", "辛", "黄", "许", "众", "经", "少", "乐", "公", "非", "忙", "主", "繁", "空", "晴", "刻", "热", "干", "草", "深", "得", "可", "秀", "刚", "奇", "桃", "影", "亲", "自", "冷", "发", "过", "礼", "永", "原", "友", "欢", "完", "安", "鲜", "空", "用", "可", "拥", "原", "中", "水", "真", "细", "暖", "开", "进", "友", "专", "清", "精", "冰", "平", "和", "真", "光", "着", "聪", "老", "要", "红", "一", "落", "迷", "空", "可", "无", "根", "飞", "听", "相", "多", "共", "洁", "知", "美", "鲜", "凉", "用", "秀", "齐", "怕", "业", "知", "美", "雪", "可", "广", "少", "老", "能", "结", "公", "可", "一", "光", "明", "知", "长", "日", "喜", "听", "直", "夸", "亲", "华", "伟", "整", "小", "壮", "富", "好", "客", "劳", "正", "特", "生", "年", "干", "亲", "景", "烁", "讨", "严", "好", "运", "困", "雄", "好", "良", "及", "冲", "扎", "焦", "耐", "未", "泥", "厚", "绝", "深", "灵", "牢", "温", "喜", "必", "同", "相", "幸", "信", "现", "稀", "卫", "开", "切", "被", "坚", "饱", "自", "便", "点", "隐", "积", "灰", "幸", "扎", "长", "活", "困", "勤", "巨", "团", "实", "沉", "银", "附", "稠", "忠", "毛", "优", "绝", "洒", "响", "尊", "高", "顽", "联", "干", "火", "幼", "渊", "博", "乳", "夺", "勤", "苍", "充", "善", "忙", "美", "苍", "真", "虚", "完", "锐", "委", "灿", "正", "愉", "成", "愉", "规", "柔", "奇", "敏", "光", "出", "袖", "朴", "晶", "讲", "广", "简", "可", "历", "浑", "鼓", "绚", "简", "郑", "灵", "拘", "巧", "稳", "豪", "详", "奢", "傲", "可", "广", "义", "喧", "沉", "忠", "精", "铺", "均", "模", "润", "平", "顽", "崇", "奥", "踊", "风", "愧", "抱", "倒", "疏", "融", "配", "诚", "勇", "宽", "自", "安", "匀", "质", "油", "湿", "诚", "浩", "繁", "神", "羞", "困", "陌", "老", "皎", "顽", "适", "尊", "严", "快", "普", "贴", "顽", "葱", "历", "平", "敏", "翠", "激", "坚", "古", "浓", "卷", "困", "鲜", "异", "隐", "茁", "寂", "琐", "柔", "衷", "规", "憨", "疏", "慎", "适", "模", "沉", "缤", "庞", "欢", "崭", "欣", "悄", "悦", "适", "坚", "精", "柔", "超", "坚", "虚", "柔", "喧", "镇", "冒", "俊", "深", "欣", "细", "恰", "可", "顺", "胎", "真", "精", "随", "欢", "平", "名", "朴", "杏", "豪", "狭", "精", "炎", "震", "繁", "苗", "凉", "紧", "简", "巍", "素", "充", "集", "神", "典", "著", "艳", "巧", "谦", "突", "起", "拘", "放", "灵", "雄", "威", "洁", "强", "知", "勉", "仁", "热", "急", "显", "适", "激", "急", "动", "热", "谨", "过", "兴", "充", "刻", "困", "美", "极", "奇", "雅", "威", "机", "专", "可", "肯", "驳", "精", "好", "婀", "慈", "机", "珍", "细", "坚", "奇", "粗", "坚", "洒", "光", "安", "严", "迅", "激", "漆", "轻", "兴", "焦", "忧", "纷", "轻", "圣", "努", "准", "相", "瑰", "英", "堂", "犹", "偶", "忧", "隆", "神", "新", "华", "锋", "壮", "精", "敦", "精", "缓", "挺", "忧", "含", "湛", "薄", "幽", "机", "振", "长", "英", "杰", "乌", "氤", "浪", "区", "新", "诙", "缥", "广", "珍", "妩", "纤", "茸", "紊", "茫", "赫", "卓", "扫", "恳", "穹", "潇", "慷", "庸", "剔", "玄", "恣", "铿", "时", "可", "粗", "称", "爽", "纳", "正", "优", "纤", "安", "执", "凋", "熠", "坦", "矜", "湍", "凌", "融", "新", "稀", "幽", "繁", "合", "迷", "灵", "锃", "蕴", "坦", "瘦", "恬", "潋", "敦", "刁", "迂", "迷", "谦", "寥", "狭", "显", "呆", "炽", "柔", "袅", "泄", "明", "懈", "怫", "渺", "悭", "恢", "惋", "迥", "安", "契", "懦", "娇", "隽", "宽", "儒", "靓", "谦", "褴", "隔", "婆", "浮", "困", "坚", "喁", "锦", "幽", "吝", "脉", "粗", "受", "分", "完", "苍", "悠", "失", "讪", "迷", "茫", "莞", "狂", "隐", "峻", "浅", "缜", "吻", "洗", "驯", "晦", "熨", "芜", "恳", "黄", "量", "对", "级", "人", "淡", "直", "格", "共", "要", "来", "净", "人", "用", "级", "生", "凉", "淡", "常", "有", "法", "色", "久", "多", "常", "许", "观", "办", "分", "要", "忙", "心", "朗", "净", "忙", "绿", "情", "力", "怕", "丽", "好", "妙", "红", "响", "爱", "然", "火", "时", "貌", "久", "来", "爱", "乐", "美", "定", "红", "中", "功", "挤", "淡", "人", "始", "用", "平", "正", "定", "和", "步", "好", "业", "新", "彩", "冷", "和", "好", "实", "快", "亮", "急", "红", "明", "实", "紧", "色", "定", "后", "下", "你", "旷", "爱", "知", "本", "快", "怕", "话", "同", "余", "同", "净", "名", "丽", "热", "艳", "快", "黄", "美", "全", "人", "余", "足", "好", "白", "笑", "见", "干", "实", "开", "能", "样", "明", "白", "己", "远", "常", "方", "欢", "说", "接", "张", "密", "丽", "齐", "号", "美", "奇", "丽", "事", "式", "黄", "别", "迈", "脆", "切", "困", "烁", "胜", "壮", "久", "幸", "好", "时", "动", "手", "急", "忙", "来", "泞", "道", "对", "厚", "活", "固", "受", "和", "庆", "要", "样", "互", "运", "用", "实", "奇", "生", "洁", "朗", "身", "动", "决", "满", "觉", "利", "保", "滴", "约", "极", "福", "实", "寿", "跃", "劳", "结", "在", "着", "灰", "近", "富", "密", "满", "诚", "纺", "秀", "情", "落", "亮", "敬", "贵", "强", "合", "燥", "红", "小", "博", "白", "目", "勉", "翠", "单", "实", "良", "碌", "妙", "白", "诚", "善", "利", "婉", "经", "快", "晰", "熟", "悦", "矩", "白", "美", "异", "捷", "彩", "色", "珍", "实", "辜", "莹", "究", "阔", "忍", "残", "朴", "练", "浊", "舞", "塞", "瘦", "捷", "寂", "重", "敏", "谨", "合", "重", "放", "明", "侈", "慨", "泛", "务", "闹", "稳", "厚", "辟", "胆", "张", "匀", "范", "泽", "坦", "固", "高", "妙", "跃", "趣", "聊", "歉", "霉", "朗", "洽", "合", "挚", "馁", "敢", "慰", "豪", "详", "称", "朴", "腻", "润", "恳", "静", "博", "华", "圣", "愧", "倦", "生", "僻", "迈", "洁", "悍", "琐", "当", "重", "沃", "谨", "暂", "味", "捷", "通", "切", "皮", "届", "均", "锐", "绿", "烈", "毅", "曲", "火", "明", "常", "实", "张", "静", "碎", "韧", "独", "朗", "范", "直", "远", "重", "中", "糊", "纷", "欣", "新", "慰", "然", "耳", "用", "韧", "湛", "和", "脱", "强", "荣", "顺", "哗", "静", "巨", "昧", "俏", "奥", "喜", "碎", "当", "硬", "利", "生", "挚", "讶", "便", "快", "整", "贵", "素", "黄", "迈", "窄", "神", "热", "茂", "条", "爽", "张", "易", "峨", "净", "足", "中", "雅", "名", "丽", "妙", "虚", "然", "码", "束", "肆", "意", "通", "伟", "严", "白", "悍", "趣", "强", "爱", "烈", "切", "然", "宜", "动", "促", "听", "闹", "凉", "慎", "概", "瘾", "奋", "沛", "薄", "窘", "爽", "观", "怒", "端", "致", "风", "警", "门", "贵", "闲", "定", "涩", "杂", "致", "凉", "美", "奇", "娜", "祥", "械", "贵", "微", "定", "小", "丽", "糙", "固", "脱", "洁", "慰", "速", "昂", "怒", "脆", "黑", "柔", "旺", "渴", "纷", "幽", "喜", "快", "瘦", "洁", "力", "竭", "确", "似", "丽", "凉", "武", "豫", "尔", "感", "虑", "重", "秘", "奇", "贵", "利", "观", "力", "细", "厚", "重", "致", "和", "拔", "糊", "边", "蓝", "静", "敏", "奋", "途", "俊", "出", "黑", "氲", "漫", "区", "潮", "寂", "谐", "缈", "袤", "奇", "戚", "媚", "细", "茸", "茫", "赫", "著", "兴", "挚", "隆", "洒", "慨", "碌", "透", "奥", "肆", "锵", "髦", "粝", "职", "朗", "罕", "宗", "游", "恬", "著", "涩", "敝", "败", "驳", "熠", "诚", "持", "异", "急", "惑", "堪", "融", "颖", "朽", "浊", "润", "疏", "雅", "密", "长", "意", "离", "秀", "亮", "藉", "淡", "骇", "率", "削", "适", "滟", "实", "滑", "濛", "沌", "腐", "惘", "逊", "落", "隘", "赫", "滞", "烈", "媚", "娜", "澈", "怠", "然", "小", "吝", "诧", "弘", "惜", "呆", "异", "逸", "合", "晦", "龊", "娆", "永", "绰", "雅", "丽", "褛", "膜", "娑", "躁", "顿", "忍", "喁", "绣", "邃", "啬", "薄", "脉", "浅", "用", "度", "外", "备", "秘", "凉", "楚", "久", "落", "讪", "茫", "然", "尔", "晦", "峭", "薄", "奇", "密", "合", "练", "熟", "涩", "帖", "俗", "杂", "切", "的", "之", "刀", "枪", "剑", "戟", "斧", "钺", "钩", "叉", "鞭", "锏", "锤", "戈", "镋", "棍", "槊", "棒", "矛", "耙", "刀", "枪", "剑", "镗", "棍", "叉", "耙", "鞭", "锏", "锤", "斧", "钩", "镰", "扒", "拐", "弓", "箭", "藤", "牌", "枪", "戟", "棍", "钺", "叉", "镗", "钩", "槊", "刀", "剑", "拐", "斧", "鞭", "锏", "锤", "棒", "杵", "刀", "枪", "剑", "戟", "斧", "钺", "钩", "叉", "鞭", "锏", "锤", "抓", "镋", "棍", "槊", "棒", "拐", "怨", "恬", "伶", "偏", "沉", "板", "仓", "幽", "冷", "凛", "安", "费", "驯", "谲", "简", "强", "昳", "怃", "荫", "噱", "拘", "雄", "庸", "赧", "奢", "破", "辅", "微", "得", "累", "应", "拘", "怏", "嘴", "别", "顺", "野", "灵", "胆", "纡", "淼", "顺", "丑", "贴", "纯", "隔", "顸", "合", "逸", "宏", "滞", "忧", "跋", "焦", "翻", "星", "完", "上", "拂", "飘", "轻", "病", "可", "碍", "新", "外", "精", "猖", "手", "纯", "滑", "悍", "明", "齐", "高", "眼", "交", "棉", "匀", "零", "失", "伏", "刑", "品", "整", "双", "切", "明", "附", "高", "凌", "直", "雪", "像", "神", "顺", "排", "矫", "刁", "老", "澄", "弛", "热", "姣", "神", "停", "条", "历", "优", "贪", "洒", "人", "民", "蔚", "新", "脆", "高", "粗", "泫", "一", "急", "圆", "小", "姑", "柔", "葱", "幸", "压", "浮", "抱", "人", "复", "浩", "道", "长", "冗", "傻", "电", "些", "嘴", "刚", "直", "醇", "相", "矛", "小", "傲", "基", "适", "贴", "奇", "潜", "细", "酸", "品", "迷", "光", "深", "奋", "稀", "纵", "得", "跃", "熙", "圣", "亏", "严", "四", "碍", "持", "峭", "宽", "款", "腐", "佼", "行", "平", "全", "虚", "恢", "微", "灰", "新", "特", "肉", "调", "破", "舒", "荣", "简", "率", "灵", "热", "参", "委", "慢", "确", "圆", "允", "入", "南", "伏", "宴", "幽", "神", "翕", "灵", "逊", "寒", "爽", "顺", "滂", "通", "歉", "下", "软", "节", "豁", "婉", "对", "诚", "娇", "索", "歉", "粗", "稳", "柔", "片", "可", "嘈", "开", "苍", "火", "蒙", "书", "肉", "宏", "弇", "白", "阒", "讲", "过", "集", "黢", "放", "埋", "兀", "沉", "定", "苛", "风", "天", "硗", "娟", "差", "繁", "耐", "快", "淡", "内", "遗", "膨", "俏", "呆", "工", "委", "忧", "挺", "顶", "义", "奇", "冷", "外", "高", "过", "特", "壮", "手", "终", "理", "蔼", "迫", "仁", "刺", "兼", "合", "通", "良", "愚", "精", "可", "涩", "悢", "感", "通", "松", "老", "干", "匀", "巩", "投", "深", "悠", "耳", "凡", "性", "窎", "密", "光", "油", "充", "刁", "放", "浮", "绛", "酣", "耳", "守", "灵", "枝", "中", "非", "信", "偏", "嘴", "忠", "下", "猩", "一", "过", "宽", "悻", "新", "正", "认", "多", "刺", "齐", "昌", "电", "尖", "扰", "中", "滔", "圆", "寥", "愚", "筋", "至", "蛮", "识", "仔", "绵", "着", "自", "刁", "塌", "顶", "玄", "常", "刚", "馋", "兴", "通", "平", "品", "紧", "有", "额", "来", "牙", "绝", "仓", "穷", "轻", "中", "模", "昭", "火", "急", "得", "迂", "侠", "文", "地", "惭", "愚", "新", "明", "醒", "通", "恢", "絮", "油", "闹", "粗", "鲜", "穷", "水", "朦", "轻", "高", "病", "外", "杳", "历", "嘴", "有", "悍", "响", "调", "赅", "开", "豆", "自", "娴", "瓷", "渊", "冬", "匀", "贤", "人", "全", "勇", "伪", "廓", "蜎", "亨", "悠", "雪", "厚", "可", "牙", "粗", "顺", "公", "葱", "英", "世", "人", "雄", "灵", "辛", "显", "外", "牢", "吉", "稳", "幽", "平", "谫", "先", "浓", "脸", "平", "多", "直", "透", "哄", "诚", "懂", "耐", "和", "浮", "上", "特", "辣", "任", "昏", "笃", "玄", "精", "万", "偏", "主", "胭", "深", "近", "刚", "粗", "纤", "中", "碧", "片", "乡", "常", "匆", "眼", "超", "微", "一", "亲", "到", "玄", "勇", "虚", "健", "黝", "尊", "繁", "非", "沸", "疏", "缺", "暄", "偏", "长", "上", "充", "嗒", "平", "贞", "可", "姨", "横", "入", "峻", "特", "上", "狠", "莫", "刻", "后", "民", "精", "宝", "镇", "扰", "悠", "先", "古", "舛", "瘦", "挺", "轻", "绵", "悦", "显", "同", "赤", "昏", "突", "猥", "亮", "新", "唐", "优", "中", "嵬", "切", "绝", "把", "特", "紧", "自", "干", "明", "嘴", "高", "旷", "开", "相", "陈", "空", "勤", "扑", "晦", "稀", "全", "老", "嘴", "闲", "残", "戆", "幽", "畅", "拳", "散", "简", "周", "家", "激", "冶", "雰", "合", "甘", "皮", "骄", "特", "自", "丑", "勤", "精", "流", "异", "爽", "二", "寥", "默", "纯", "彰", "纤", "油", "阔", "晦", "直", "厚", "自", "血", "夭", "橙", "疲", "素", "朴", "精", "轰", "暂", "远", "蜡", "抵", "微", "旷", "鬅", "入", "繁", "罕", "现", "空", "浅", "可", "青", "贤", "露", "相", "富", "枣", "蛮", "可", "顺", "诚", "高", "奄", "嘹", "夹", "正", "婵", "标", "醇", "明", "经", "敌", "跼", "冲", "背", "空", "切", "远", "勤", "浩", "煊", "挚", "见", "周", "头", "快", "单", "入", "奥", "教", "调", "恭", "拗", "苍", "初", "静", "葱", "粹", "殷", "磊", "霸", "贵", "雄", "入", "同", "适", "匆", "迥", "喑", "相", "乖", "贴", "昂", "显", "公", "书", "初", "耳", "神", "雄", "怆", "碍", "自", "腽", "澄", "简", "圆", "虚", "晃", "一", "超", "芜", "立", "鲜", "猥", "潸", "落", "宁", "破", "铁", "白", "透", "仁", "刷", "贪", "上", "明", "飞", "严", "眼", "万", "优", "愦", "停", "顽", "婉", "强", "温", "小", "西", "差", "便", "坚", "适", "持", "索", "沉", "杳", "粗", "山", "杌", "要", "安", "夸", "过", "俊", "内", "愚", "十", "可", "弛", "逼", "屈", "圆", "急", "恒", "韶", "劳", "迂", "粗", "憋", "疑", "出", "穰", "达", "昂", "豁", "准", "应", "苍", "上", "夹", "碍", "活", "倨", "打", "融", "和", "中", "经", "徐", "窄", "微", "靛", "浮", "奇", "适", "贴", "感", "起", "现", "粗", "新", "娇", "雅", "眼", "淡", "恸", "俜", "僻", "勇", "滞", "远", "诞", "懈", "峻", "然", "瘠", "谧", "解", "谲", "服", "愕", "劲", "丽", "然", "凉", "头", "泥", "厚", "俗", "然", "靡", "落", "臊", "助", "妙", "赘", "用", "板", "怏", "快", "淡", "扭", "脚", "鸡", "巧", "辣", "寒", "徐", "茫", "丽", "路", "近", "美", "山", "实", "理", "豫", "楚", "观", "缓", "愁", "扈", "炙", "皮", "际", "好", "口", "祥", "拂", "然", "健", "疑", "眼", "式", "湛", "常", "路", "粹", "獗", "快", "良", "减", "头", "然", "智", "整", "速", "盈", "生", "畏", "关", "纺", "净", "周", "星", "偿", "望", "贴", "事", "蓝", "洁", "吝", "料", "当", "畅", "纯", "安", "宗", "雅", "属", "迈", "杂", "性", "亮", "样", "道", "奡", "捷", "悍", "成", "碧", "缓", "下", "辣", "好", "勇", "匀", "畅", "烈", "时", "遽", "胜", "重", "口", "洒", "工", "营", "然", "巧", "亮", "谓", "度", "然", "偏", "公", "骤", "通", "量", "表", "性", "葱", "甚", "秤", "形", "滑", "愧", "烈", "际", "杂", "繁", "地", "篇", "赘", "热", "微", "软", "健", "溜", "正", "投", "盾", "型", "岸", "本", "意", "边", "伟", "在", "巧", "楚", "绿", "瞪", "重", "激", "缺", "横", "了", "然", "攘", "明", "紧", "方", "嘴", "数", "口", "平", "拔", "泛", "洽", "苟", "佼", "家", "命", "正", "空", "廓", "型", "白", "禧", "种", "食", "协", "旧", "坦", "光", "约", "急", "直", "妙", "切", "曲", "性", "当", "全", "沉", "当", "耳", "式", "帖", "适", "尔", "默", "速", "然", "验", "色", "遂", "湃", "脱", "然", "下", "和", "俭", "亮", "转", "急", "眼", "笃", "憨", "寞", "实", "便", "婉", "叹", "杂", "阔", "黄", "烫", "眬", "实", "重", "头", "热", "然", "理", "测", "火", "约", "黑", "诞", "汰", "傲", "寂", "期", "刻", "窘", "凉", "蓝", "凡", "冷", "薄", "秀", "劲", "芜", "当", "然", "然", "敛", "憾", "脝", "皮", "傻", "稳", "靡", "脱", "用", "勇", "切", "崛", "峭", "来", "慢", "逾", "定", "实", "焦", "紧", "古", "亏", "佞", "蔼", "切", "目", "慈", "痒", "任", "群", "常", "性", "妙", "喜", "滞", "越", "悢", "透", "动", "朽", "涩", "实", "固", "硬", "入", "沉", "长", "背", "俗", "感", "远", "集", "溜", "足", "酥", "裕", "横", "达", "惫", "浅", "紫", "然", "沉", "劲", "旧", "透", "蔓", "正", "法", "托", "松", "烈", "酒", "红", "律", "分", "敞", "悻", "然", "善", "锐", "虐", "寒", "生", "耗", "发", "卫", "眼", "备", "明", "动", "堪", "酸", "扰", "常", "滔", "满", "寥", "道", "尊", "涩", "横", "货", "切", "密", "密", "力", "得", "钻", "数", "青", "务", "正", "嘴", "盛", "红", "顺", "红", "要", "机", "定", "劲", "质", "好", "促", "切", "闲", "听", "旧", "等", "棱", "著", "处", "迫", "手", "曲", "义", "下", "兴", "达", "目", "畅", "恢", "嘴", "热", "豪", "亮", "酸", "绿", "胧", "佻", "压", "围", "渺", "产", "任", "甜", "名", "勇", "晴", "皮", "括", "通", "通", "青", "傲", "静", "实", "深", "烘", "和", "惠", "道", "优", "免", "决", "善", "落", "蜎", "通", "然", "青", "言", "重", "敬", "燥", "碜", "放", "畅", "立", "茏", "勇", "故", "为", "龄", "辩", "便", "辣", "眼", "向", "稳", "庆", "当", "娴", "板", "头", "重", "软", "实", "边", "属", "顶", "然", "行", "便", "久", "悦", "荡", "列", "惠", "手", "情", "软", "聩", "定", "乎", "密", "幸", "颇", "壮", "导", "红", "度", "便", "阻", "性", "俗", "小", "看", "蓝", "靡", "断", "僻", "任", "济", "促", "花", "等", "重", "利", "窄", "细", "沃", "朽", "近", "位", "远", "悍", "拟", "壮", "黯", "贵", "多", "礼", "热", "德", "腾", "足", "好", "盈", "白", "洁", "私", "意", "表", "微", "拔", "出", "缠", "然", "逆", "续", "莹", "事", "巧", "蓝", "定", "攘", "谬", "治", "遣", "长", "秀", "人", "便", "长", "目", "要", "味", "和", "等", "忱", "黑", "出", "亵", "堂", "雅", "突", "熟", "柔", "赡", "型", "嵬", "实", "妙", "辛", "稳", "快", "迫", "淫", "老", "平", "细", "性", "紧", "产", "达", "展", "配", "腐", "泛", "奋", "簌", "暝", "薄", "乎", "派", "乖", "散", "破", "直", "忧", "通", "拳", "装", "静", "便", "全", "养", "越", "艳", "雰", "平", "寒", "甜", "实", "躁", "等", "恳", "逸", "干", "转", "姓", "目", "乎", "廓", "然", "真", "放", "显", "悉", "然", "明", "爽", "颜", "满", "矫", "黄", "困", "谲", "朴", "工", "然", "行", "程", "白", "事", "观", "荡", "松", "时", "复", "见", "役", "头", "急", "露", "行", "恸", "葱", "明", "天", "好", "强", "惭", "红", "亲", "手", "朴", "效", "奄", "亮", "派", "媛", "定", "然", "和", "确", "典", "对", "蹐", "要", "运", "阔", "切", "视", "勤", "壮", "赫", "诚", "外", "严", "路", "速", "切", "固", "紧", "薄", "味", "博", "条", "干", "顺", "口", "劲", "级", "默", "白", "白", "富", "磊", "重", "凉", "神", "类", "口", "匆", "然", "哑", "左", "扬", "明", "营", "香", "等", "热", "异", "杰", "然", "如", "肭", "质", "澈", "洁", "停", "滑", "眼", "新", "逸", "秽", "灵", "琐", "潸", "实", "帖", "打", "头", "辟", "义", "白", "小", "横", "色", "慧", "灵", "整", "尖", "能", "越", "当", "健", "丽", "直", "顺", "森", "样", "式", "事", "民", "量", "重", "索", "落", "然", "率", "响", "陧", "得", "闲", "污", "诞", "甚", "美", "向", "配", "蒙", "足", "懈", "粗", "融", "遽", "久", "寂", "秀", "碌", "回", "怠", "生", "号", "穰", "观", "俗", "然", "然", "时", "届", "润", "述", "生", "事", "期", "傲", "紧", "和", "乐", "级", "久", "异", "乎", "缓", "巴", "薄", "青", "夸", "绝", "时", "谱", "人", "劲", "任", "重", "任", "柔", "静", "热", "脆", "蜡", "扬", "平", "狂", "虚", "实", "奇", "爽", "板", "哲", "出", "重", "紧", "流", "翛", "简", "杂", "摩", "本", "早", "稀", "草", "广", "毛", "近", "晚", "乌", "皮", "老", "黑", "小", "和", "头", "正", "中", "家", "乐", "足", "美", "高", "白", "好", "得", "少", "绿", "男", "久", "长", "花", "黄", "红", "成", "早", "右", "海", "到", "生", "左", "真", "女", "全", "是", "同", "快", "亮", "木", "公", "笑", "明", "多", "双", "帅", "活", "平", "尖", "欢", "淡", "渴", "闲", "假", "瘦", "各", "干", "透", "挤", "巧", "顺", "整", "冷", "密", "慢", "诚", "旧", "熟", "新", "勇", "香", "总", "准", "盛", "宽", "妙", "胖", "馋", "纯", "背", "刚", "热", "坡", "丑", "实", "忙", "重", "亲", "破", "晴", "累", "紫", "精", "鼓", "急", "潮", "粗", "专", "光", "古", "沉", "原", "柔", "稳", "软", "洋", "喜", "母", "湿", "凉", "甜", "泼", "独", "优", "寸", "浓", "零", "逗", "柴", "圆", "杂", "勤", "良", "灵", "板", "直", "壮", "猴", "闹", "酸", "能", "满", "紧", "严", "浮", "蹒", "泡", "硬", "飘", "躁", "浅", "斜", "细", "铁", "困", "贵", "响", "通", "暖", "疯", "安", "粉", "肉", "次", "富", "迟", "派", "善", "脆", "野", "烈", "溜", "强", "显", "厚", "嫩", "静", "棒", "忠", "窄", "暄", "鲁", "滑", "愧", "娇", "深", "妩", "艳", "横", "妥", "雌", "刁", "佳", "趁", "堵", "缓", "猛", "偏", "旱", "咸", "狂", "竖", "俊", "稚", "辣", "敞", "熊", "胀", "淘", "钝", "痒", "匀", "糠", "旷", "赖", "酷", "乖", "烫", "损", "絮", "狠", "拧", "憋", "聋", "褴", "恹", "恣", "蔫", "尴", "旺", "凹", "窘", "彬", "精", "仙", "神", "兵", "将", "灵"];
var PLAYER_LAST_NAMES = ["王", "李", "张", "刘", "陈", "杨", "赵", "黄", "周", "吴", "徐", "孙", "胡", "朱", "高", "林", "何", "郭", "马", "罗", "梁", "宋", "郑", "谢", "韩", "唐", "冯", "于", "董", "萧", "程", "曹", "袁", "邓", "许", "傅", "沈", "曾", "彭", "吕", "苏", "卢",
    "蒋", "蔡", "贾", "丁", "魏", "薛", "叶", "阎", "余", "潘", "杜", "戴", "夏", "钟", "汪", "田", "任", "姜", "范", "方", "石", "姚", "谭", "廖", "邹", "熊", "金", "陆", "郝", "孔", "白", "崔", "康", "毛", "邱", "秦", "江", "史", "顾", "侯", "邵", "孟", "龙", "万", "段", "雷",
    "钱", "汤", "尹", "黎", "易", "常", "武", "乔", "贺", "赖", "龚", "庞", "陶", "洪", "严", "牛", "温", "季", "俞", "章", "鲁", "葛", "伍", "韦", "毕", "聂", "焦"];
var TEAM_NAMES = [
    "鸡", "鸭", "鹅", "羊", "马", "牛", "猪", "狗", "猫", "兔", "鹿", "猴", "狐", "象", "狼", "狮", "豹", "虎", "鳄", "熊", "鲸", "龙", "鹰", "鲨", "燕", "鹤", "鸽", "蜂", "雕", "雀", "鹊", "龟", "鱼", "鸟", "蝶"];
var LEVEL_NAMES = [
    "小", "巨", "超", "飞", "美", "好", "圆", "富", "深", "满", "高", "博", "香", "花", "锦", "红", "绿", "爽", "金", "木", "水", "火", "土", "玉", "秀", "童", "寒", "冰", "雪", "天", "地",
    "冻", "精", "神", "左", "右", "惊", "涛", "骇", "浪", "浊", "排", "空", "甜", "言", "蜜", "语", "伏"];
var POSITION_GOOLKEEPER = 0;
var SELLER_PLAYER_TAX = 20;
var ENCOURAGE_TYPE_BEFORE_MATCH_CASH = 0;
var ENCOURAGE_TYPE_BEFORE_MATCH_WIN_PRIZE = 1;
var ENCOURAGE_TYPE_BEFORE_MATCH_NET_SCORE_PRIZE = 2;
var ENCOURAGE_TYPE_BEFORE_MATCH_OPPOSITE_SCORE_ZERO_PRIZE = 3;
var ENCOURAGE_TYPE_BEFORE_MATCH_DRAW_PRIZE = 3 + 1;
var ENCOURAGE_TYPES = ["赛前发放现金", "赛事胜利奖金", "赛事净胜球奖金", "赛事零封奖金", "赛事打平奖金"];
var ENCOURAGE_RATIOS = [1, 1, 0.1, 1, 0.5, 0.5];
var ENCOURAGE_MONEY_INCREASE_1_POINT_FOR_SINGLE_PLAYER = 100000;
var PICTURE_COUNT_MAN = 123; 
var PICTURE_COUNT_WOMAN = 121; //人数
var PICTURE_COUNT_ACCOUNTANT = 20;
var PICTURE_COUNT_MANAGER = 285;
var PICTURE_COUNT_CAR = 27;
var PICTURE_COUNT_CUP = 23;
var PICTURE_COUNT_HOUSE = 23;
var PICTURE_COUNT_GIFT = 22;
var PICTURE_COUNT_MARRIAGE = 48;
var SEX_MAN = 0;
var SEX_WOMAN = 1;
var SEX_DESCRIPTIONS = ["男", "女"];
var FAKE_STATUSES = ["待确认", "已同意", "成功", "失败", "主动报警", "已销毁证据", "已处罚", "已拒绝", "已过期"];
var FAKE_STATUS_WAIT_FOR_CONFIRM = 0;
var FAKE_STATUS_CONFIRMED = 1;
var FAKE_STATUS_SUCCESS = 2;
var FAKE_STATUS_FAIL = 3;
var FAKE_STATUS_CALL_POLICE = 4;
var FAKE_STATUS_NO_MORE_CHECK = 5;
var FAKE_STATUS_PUNISHED = 6;
var FAKE_STATUS_REFUSED = 7;
var FAKE_STATUS_EXPIRED = 7;
var ACCOUNTANT_RECOVER_HEALTH_MONEY_PER_POINTS = 300000;
var ACCOUNTANT_INCREASE_RISK_ACCOUNTING_MONEY_PER_POINTS = 1000;
var YOUNG_PLAYER_YEAR_BASE_COUNT = 60;
var MEET_EVENTS = [
    "电影院", "火车站", "酒店", "酒吧", "商场", "超市"
    , "市里最大的饭店", "街边的小饭店", "警察局", "澡堂", "银行", "教堂"
    , "舞台剧场", "牙医", "医院", "海关总署", "机场", "地铁站"
];
var MEET_EVENT_ACTIONS = [
    {name: "电影院演员", percent: 30, actions: ["看电影"], costs: [100], words: ["帅哥，你是来看电影的吗？", "帅哥，能加一哈我微信吗？"]},
    {name: "火车站售票员", percent: 80, actions: ["买火车票"], costs: [100], words: ["帅哥，你是来买火车票的吗？", "帅哥，能加一哈我微信吗？"]},
    {name: "酒店前台服务员", percent: 80, actions: ["住店"], words: ["帅哥，要住店吗？", "帅哥，能加一哈我微信吗？"]},
    {name: "酒吧吧台服务员", percent: 80, actions: ["喝一杯酒"], costs: [1000], words: ["帅哥，一个人喝酒啊，介意陪我一起喝吗？", "帅哥，能加一哈我微信吗？"]},
    {name: "商场导购小姐", percent: 80, actions: ["购买商品"], costs: [1000], words: ["帅哥，要买这个商品吗？", "帅哥，能加一哈我微信吗？"]},
    {name: "超市售货员", percent: 80, actions: ["买点吃的"], costs: [100], words: ["帅哥，要买这个食品吗？", "帅哥，能加一哈我微信吗？"]},
    {name: "大饭店服务员", percent: 80, actions: ["点大餐"], costs: [1000], words: ["帅哥，你是来点大餐的吗？", "帅哥，能加一哈我微信吗？"]},
    {name: "小饭店服务员", percent: 80, actions: ["随意点份餐"], costs: [100], words: ["帅哥，你是来吃饭的吗？", "帅哥，能加一哈我微信吗？"]},
    {name: "警察", percent: 10, actions: ["逛逛"], costs: [0], words: ["帅哥，你是来报案的吗？", "帅哥，能加一哈我微信吗？"]},
    {name: "澡堂服务员", percent: 80, actions: ["洗澡"], costs: [100], words: ["帅哥，你是来洗澡的吗？", "帅哥，能加一哈我微信吗？"]},
    {name: "银行柜员", percent: 80, actions: ["存钱"], costs: [0], words: ["帅哥，你是来存钱的吗？", "帅哥，能加一哈我微信吗？"]},
    {name: "教堂修女", percent: 30, actions: ["祈祷"], costs: [100], words: ["先生，你是来祈祷的吗？", "帅哥，能加一哈我微信吗？"]},
    {name: "舞台剧场演员", percent: 30, actions: ["看舞台剧"], costs: [300], words: ["帅哥，你是来看舞台剧的吗？", "帅哥，能加一哈我微信吗？"]},
    {name: "牙医护士", percent: 80, actions: ["看牙医"], costs: [100], words: ["帅哥，你是来看牙医的吗？", "帅哥，能加一哈我微信吗？"]},
    {name: "医院护士", percent: 80, actions: ["看病"], costs: [1000], words: ["帅哥，你是来看病的吗？", "帅哥，能加一哈我微信吗？"]},
    {name: "海关总署海关审核员", percent: 80, actions: ["进口一批货物"], costs: [10000], words: ["帅哥，你是来过海关的吗？", "帅哥，能加一哈我微信吗？"]},
    {name: "机场空姐", percent: 30, actions: ["买机票"], costs: [10000], words: ["帅哥，你是来买机票的吗？", "帅哥，能加一哈我微信吗？"]},
    {name: "地铁站售票员", percent: 80, actions: ["买地铁票"], costs: [10], words: ["帅哥，你是来买地铁票的吗？", "帅哥，能加一哈我微信吗？"]},
];
var FRIEND_JOBS = ["球员", "会计", "银行经理", "公司负责人", "青年球员", "集团董事长"];
var FRIEND_JOB_SOCCER_PLAYER = 0;
var FRIEND_JOB_SOCCER_TEAM_CHAIRMAN = 5;
var STATUS_NORMAL_GAME = 1;
var SERVER_URL_CURRENT_LIST_GAME = [
    // "https://app1.fofooo.com:443",
];
var SERVER_URL_CURRENT_EXPIRE_TIME_PLUS_MILLISECONDS_GAME = 900000;
var LEVEL_DESCRIPTION = ["凡人", "练气", "筑基", "开光", "融合", "心动", "金丹", "元婴", "出窍", "分神", "合体", " 洞虚", "大乘", "渡劫", "散仙", "地仙", "真仙", "天仙", "金仙", "大罗金仙", "混元金仙", "混元大罗金仙", "准圣", "圣人", "馄饨圣人"];

var pageUserTeam = undefined;

var getLevelDescription = function (experience) {
    var level = Math.floor(LEVEL_DESCRIPTION / 1000);
    var level10 = Math.floor(level / 10);
    return LEVEL_DESCRIPTION[level10] + (level - level10 + 1) + "阶";
}

$(function () {
    if (location.href.indexOf("page.html") > 0) {
        $("body")
            .css("background-size", "100% 100%").css("background-image", "url('image/background/background.jpg')");
        $(".class-div-main").html("<div style='font-size:66px;color:white;padding:166px 0px 166px 36%;height:866px;\n" +
            "    background: rgba(0, 0, 0, 0.6);\n" +
            "    filter:alpha(opacity=85); /* IE */\n" +
            "    -moz-opacity:1.85; /* Moz + FF */\n" +
            "    opacity: 1.85;'>加载中...</div>");
        setTimeout("initializeGame()", 100);
        setTimeout("startCountDownTimer()", 1000);
        setRightClick();
    }
    if (location.href.indexOf("game.html") > 0) {
        onloadStartGame();
    }
    return;
});

var startCountDownTimer = function () {
    var userTeam = getPageUserTeam();
    if (userTeam == undefined) {
        return;
    }
    var number = $(".class-span-count-down-timer").html();
    if (number > 0) {
        $(".class-span-count-down-timer").html(parseFloat($(".class-span-count-down-timer").html()) - 1);
    } else {
        saveGame();
    }
    setTimeout("startCountDownTimer()", 1000);
    return;
}


var checkErrorGame = function (res) {
    if (res.status == 666005 || res.status == 666002 || res.status == 666003) {
        showAlertFrameGame(res.message);
        logout();
        return;
    } else {
        if (res.status == 0) {
            return;
        }
        //交易不存在的情况下跳至我的交易页面
        else if (res.status == 666119) {
            //交易不存在的情况下跳至首页
            showAlertFrameThenJumpToUrlGame(res.message, "../../../game.html", 1);
        } else {
            showAlertFrameGame(res.message);
        }
    }
};

var logout = function () {
    removeUserToken();
}

var getServerUrlGame = function () {
    //检测serverUrlList有没有变化
    var serverUrlListOnline = getLocalStorageItemGame("SERVER_URL_CURRENT_LIST_ONLINE_HTTPS_GAME");
    if (serverUrlListOnline != undefined) {
        //从存储拿数据
        var serverUrl = serverUrlListOnline[getRandomIntegerGame(serverUrlListOnline.length)];
        //如果非空
        if (serverUrl != undefined && serverUrl != "https://null:443") {
            //从服务器上拿负载后的服务器地址
            getServerUrlListOnlineFromServerAndSetToLocalStorageGame(serverUrl);
            //返回
            return serverUrl;
        }
    }
    //拿一个随机的服务器
    var serverUrl = SERVER_URL_CURRENT_LIST_GAME[getRandomIntegerGame(SERVER_URL_CURRENT_LIST_GAME.length)];
    //塞入存储
    //从服务器上拿负载后的服务器地址
    getServerUrlListOnlineFromServerAndSetToLocalStorageGame(serverUrl);
    //返回
    return serverUrl;
}

//从服务器上拿负载后的服务器地址
var getServerUrlListOnlineFromServerAndSetToLocalStorageGame = function () {
    //如果是首页就放弃
    if (location.href.indexOf("/game.html") > 0) {
        return;
    }
    //从存储拿数据
    var serverUrl = SERVER_URL_CURRENT_LIST_GAME[getRandomIntegerGame(SERVER_URL_CURRENT_LIST_GAME.length)];
    //拿过期时间
    var expireTime = getLocalStorageItemGame("SERVER_URL_CURRENT_LIST_ONLINE_HTTPS_EXPIRE_TIME_GAME");
    //如果是空或者已过期
    if (expireTime == undefined || expireTime < new Date().getTime()) {
        //重设
        expireTime = new Date().getTime() + SERVER_URL_CURRENT_EXPIRE_TIME_PLUS_MILLISECONDS_GAME;
        //塞入存储
        setLocalStorageItemGame("SERVER_URL_CURRENT_LIST_ONLINE_HTTPS_EXPIRE_TIME_GAME", expireTime);
    } else {
        //30秒后执行
        setTimeout("getServerUrlListOnlineFromServerAndSetToLocalStorageGame()", SERVER_URL_CURRENT_EXPIRE_TIME_PLUS_MILLISECONDS_GAME * 0.5);
        //返回
        return;
    }
    //创建请求
    var url = serverUrl + "/v1/common/cpu/low/ratio/server/get/available/list";
    //标准ajax
    $.ajax({
        url: url,
        type: "get",
        cache: false,
        async: true,
        success: function (res) {
            //如果成功
            if (res.status == 200) {
                //塞入本地存储
                setLocalStorageItemGame("SERVER_URL_CURRENT_LIST_ONLINE_HTTPS_GAME", res.data.serverInternetIpSet);
                //30秒后执行
                setTimeout("getServerUrlListOnlineFromServerAndSetToLocalStorageGame()", SERVER_URL_CURRENT_EXPIRE_TIME_PLUS_MILLISECONDS_GAME * 0.5);
            } else {
                //30秒后执行
                setTimeout("getServerUrlListOnlineFromServerAndSetToLocalStorageGame()", SERVER_URL_CURRENT_EXPIRE_TIME_PLUS_MILLISECONDS_GAME * 0.5);
                //检查异常
                checkErrorGame(res);
            }
        },
        error: function (message) {
            //30秒后执行
            setTimeout("getServerUrlListOnlineFromServerAndSetToLocalStorageGame()", SERVER_URL_CURRENT_EXPIRE_TIME_PLUS_MILLISECONDS_GAME * 0.5);
            //弹窗
            showAlertFrameGame(ERROR_MESSAGE_CANNOT_CONNECT_TO_SERVER_GAME);
        }
    });
}


var getRandomIntegerGame = function (number) {
    return Math.floor(Math.random() * number);
};


var loginThisUser = function () {
    if (USE_LOGIN_REGISTER_SYSTEM == 0) {
        var responseGameUserVo = {};
        responseGameUserVo.token = "66666666666666666666666";
        responseGameUserVo.gameUser = gameUser;
        responseGameUserVo.isLogin = 0;
        setUserToken(responseGameUserVo);
        initializeGame();
    }
    var gameUser = {};
    gameUser.userName = $(".class-input-login-user-name").val();
    gameUser.password = sha256($(".class-input-login-password").val());
    if (gameUser.userName.length == 0) {
        showAlertFrameGame("用户名不能为空");
        return;
    }
    if (gameUser.password.length == 0) {
        showAlertFrameGame("密码不能为空");
        return;
    }
    $(".class-button-login-this-user").append(LOADING_IMAGE_GAME)
    $.ajax({
        url: getServerUrlGame() + "/v1/page/front/game/login",
        type: "post",
        contentType: "application/json",
        accept: "application/json",
        cache: false,
        async: true,
        data: JSON.stringify(gameUser),
        success: function (res) {
            if (res.status == 200) {
                setUserToken(res.data);
                initializeGame();
            } else {
                checkErrorGame(res);
            }
        },
        error: function (message) {
            showAlertFrameGame(ERROR_MESSAGE_CANNOT_CONNECT_TO_SERVER_GAME);
            var responseGameUserVo = {};
            responseGameUserVo.token = "66666666666666666666666";
            responseGameUserVo.gameUser = gameUser;
            responseGameUserVo.isLogin = 0;
            setUserToken(responseGameUserVo);
            initializeGame();
        }
    });
}

var showRegisterForm = function () {
    $(".class-div-main-user-login").hide();
    $(".class-div-main-user-register").show();
}

var returnThisUser = function () {
    $(".class-div-main-user-login").show();
    $(".class-div-main-user-register").hide();
}

var registerThisUser = function () {
    if (USE_LOGIN_REGISTER_SYSTEM == 0) {
        var responseGameUserVo = {};
        responseGameUserVo.token = "66666666666666666666666";
        responseGameUserVo.gameUser = gameUser;
        responseGameUserVo.isLogin = 0;
        setUserToken(responseGameUserVo);
        initializeGame();
    }
    var gameUser = {};
    gameUser.userName = $(".class-input-register-user-name").val();
    gameUser.password = sha256($(".class-input-register-password").val());
    gameUser.type = 0;
    gameUser.status = STATUS_NORMAL_GAME;
    $(".class-button-register-this-user").append(LOADING_IMAGE_GAME)
    $.ajax({
        url: getServerUrlGame() + "/v1/page/front/game/register",
        type: "post",
        contentType: "application/json",
        accept: "application/json",
        cache: false,
        async: true,
        data: JSON.stringify(gameUser),
        success: function (res) {
            if (res.status == 200) {
                setUserToken(res.data);
                initializeGame();
            } else {
                checkErrorGame(res);
                initializeGame();
            }
        },
        error: function (message) {
            showAlertFrameGame(ERROR_MESSAGE_CANNOT_CONNECT_TO_SERVER_GAME);
            var responseGameUserVo = {};
            responseGameUserVo.token = "66666666666666666666666";
            responseGameUserVo.gameUser = gameUser;
            responseGameUserVo.isLogin = 0;
            setUserToken(responseGameUserVo);
            initializeGame();
        }
    });
}

var setUserToken = function (responseGameUserVo) {
    setLocalStorageItemGame("tokenGame", responseGameUserVo.token);
    setLocalStorageItemGame("responseGameUserVo", responseGameUserVo);
}

var removeUserToken = function (responseGameUserVo) {
    removeLocalStorageItemGame("tokenGame");
    removeLocalStorageItemGame("responseGameUserVo");
}

var initializeGame = function () {
    if (getLocalStorageItemGame("tokenGame") == undefined) {
        var mainHtml = "";
        mainHtml += "<div class='class-div-main-user-login' style='margin:16% auto 16% auto;" +
            "width:366px;" +
            "height:96px;" +
            "padding:16px;border-radius:16px;" +
            "background-color:#ffffff;'>";
        mainHtml += "<div style='width:366px;float:left;'>" +
            "登录账户: <input class='class-input-login-user-name' style='width:266px;float:right;border-radius:6px;' />" +
            "</div>";
        mainHtml += "<div style='width:366px;float:left;margin-top:12px;'>" +
            "登录密码: <input class='class-input-login-password' style='width:266px;float:right;border-radius:6px;'  />" +
            "</div>";
        mainHtml += "<div style='width:366px;float:left;margin-top:12px;'>" +
            "<button class='class-button-login-this-user'  onclick='loginThisUser()'>登录</button>" +
            "<button onclick='showRegisterForm()'>注册</button>" +
            "</div>";
        mainHtml += "</div>";
        mainHtml += "<div class='class-div-main-user-register' style='margin:16% auto 16% auto;width:366px;display:none;" +
            "height:96px;" +
            "padding:16px;border-radius:16px;" +
            "background-color:#ffffff;'>";
        mainHtml += "<div style='width:366px;float:left;'>" +
            "注册账户: <input class='class-input-register-user-name' style='width:266px;float:right;border-radius:6px;' />" +
            "</div>";
        mainHtml += "<div style='width:366px;float:left;margin-top:12px;'>" +
            "注册密码: <input class='class-input-register-password' style='width:266px;float:right;border-radius:6px;'  />" +
            "</div>";
        mainHtml += "<div style='width:366px;float:left;margin-top:12px;'>" +
            "<button  onclick='returnThisUser()'>返回</button>" +
            "<button class='class-button-register-this-user'  onclick='registerThisUser()'>注册</button>" +
            "</div>";
        mainHtml += "</div>";
        $(".class-div-main").html(mainHtml);
    } else {
        var mainHtml = "";
        mainHtml += "<div class='class-div-buttons' style='width:100%;'>" +
            "<button class='class-button-save-game' onclick='classButtonSaveGameClick()'>保存游戏(<span class='class-span-count-down-timer'>" + COUNT_DOWN_TIMER_DEFAULT_VALUE + "</span>)</button>" +
            "<button class='class-button-team-mail' style='float:left;' onclick='classButtonTeamMailClick()'>球队邮件(<span class='class-span-team-mail-unread-count'>0</span>)</button>" +
            "<button class='class-button-user-team' style='float:left;' onclick='classButtonUserTeamClick()'>球队资料<span class='class-button-bank-money'></span></button>" +
            "<button class='class-button-buy-player' style='float:left;' onclick='classButtonBuyPlayerClick()'>转会市场</button>" +
            "<button class='class-button-team-board' style='float:left;' onclick='classButtonTeamBoardClick()'>球队排名</button>" +
            "<button class='class-button-team-schedule' style='float:left;' onclick='classButtonTeamScheduleClick()'>球队赛程</button>" +
            "<button class='class-button-play-game' style='float:left;' onclick='classButtonPlayGameClick()'>进入比赛</button>" +
            "<button class='class-button-meet-someone' style='float:left;' onclick='classButtonMeetSomeoneClick()'>出去走走</button>" +
            "<button class='class-button-refresh-page' style='float:left;' onclick='classButtonRefreshPageClick()'>刷新页面</button>" +
            "<button class='class-button-refresh-page' style='float:left;' onclick='classButtonVisitShopClick()'>访问商店</button>" +
            "<button class='class-button-refresh-page' style='float:left;' onclick='gotoTrainImmortality()'>进入修炼</button>" +
            "</div>";

        //邮件
        mainHtml += "<div class='class-div-content class-div-content-team-mail' style='display:none; border-radius: 12px;'>" +
            "<table class='class-table-100-percent-width class-table-team-mail'>" +
            "<tr>" +
            "<td class='class-td-button class-td-team-mail'></td>" +
            "</tr>" +
            "</table>" +
            "</div>";
        //所有其他按钮
        mainHtml += "<div class='class-div-content class-div-content-other' style='display:none; border-radius: 12px;'></div>";
        $(".class-div-main").html(mainHtml);
        var height = $(".class-div-buttons").css("height");
        var heightNumber = parseInt(height.replace(/px/, ""));
        $(".class-div-content").css("margin-top", heightNumber * 3 + "px");
        loadUserTeam();
    }
    return;
};

var classButtonUserTeamClick = function () {
    $("body")
        .css("background-size", "100% 100%").css("background-image", "url('image/background/background-user-team.jpg')");
    setSelectedButton(this);
    loadUserTeam();
};

var classButtonTeamMailClick = function () {
    $("body")
        .css("background-size", "100% 100%").css("background-image", "url('image/background/background-team-mail.jpg')");
    setSelectedButton(this);
    loadTeamMail();
};


var classButtonBuyPlayerClick = function () {
    $("body")
        .css("background-size", "100% 100%").css("background-image", "url('image/background/background-buy-player.jpg')");
    setSelectedButton(this);
    loadBuyPlayerHtml();
};

var classButtonTeamBoardClick = function () {
    $("body")
        .css("background-size", "100% 100%").css("background-image", "url('image/background/background-team-board.jpg')");
    setSelectedButton(this);
    loadTeamBoardHtml();
};

var classButtonTeamScheduleClick = function () {
    $("body")
        .css("background-size", "100% 100%").css("background-image", "url('image/background/background-team-schedule.jpg')");
    setSelectedButton(this);
    loadTeamScheduleMatchHtml();
};

var classButtonPlayGameClick = function () {
    $("body")
        .css("background-size", "100% 100%").css("background-image", "url('image/background/background-play-game.jpg')");
    setSelectedButton(this);
    loadGamePlayHtml();
    saveGame();
};

var classButtonMeetSomeoneClick = function () {
    $("body")
        .css("background-size", "100% 100%").css("background-image", "url('image/background/background-meet-someone.jpg')");
    setSelectedButton(this);
    loadMeetSomeoneHtml();
}

var classButtonSaveGameClick = function () {
    $("body")
        .css("background-size", "100% 100%").css("background-image", "url('image/background/background-save-game.jpg')");
    closePopout();
    saveGame();
};

var classButtonRefreshPageClick = function () {
    location.reload(true);
}

var classButtonRestartGameClick = function () {
    $("body")
        .css("background-size", "100% 100%").css("background-image", "url('image/background/background-restart-game.jpg')");
    localStorage.clear();
    location.reload();
};

var setSelectedButton = function (obj) {
    closePopout();
    $(".class-div-buttons").find("button").removeClass("class-button-selected");
    $(obj).addClass("class-button-selected");
    return;
};

var getPageUserTeam = function () {
    if (pageUserTeam == undefined) {
        var pageUserTeamFromLocalStorage = getLocalStorageItemGame("userTeam");
        if (pageUserTeamFromLocalStorage == undefined) {
            return undefined;
        }
        pageUserTeam = pageUserTeamFromLocalStorage;
    }
    return pageUserTeam;
};

var getRefreshPageUserTeam = function () {
    var pageUserTeamFromLocalStorage = getLocalStorageItemGame("userTeam");
    if (pageUserTeamFromLocalStorage == undefined) {
        return undefined;
    }
    pageUserTeam = pageUserTeamFromLocalStorage;
    return pageUserTeam;
};

var getId = function () {
    return (new Date().getTime()) + "" + getRandomInteger(10) + getRandomInteger(10) + getRandomInteger(10) + getRandomInteger(10) + getRandomInteger(10) + getRandomInteger(10);
};

var getInitializeTeamWithLevel = function (level, count) {
    var userTeamPushs = [];
    for (var i = 0; i < count; i++) {
        userTeamPushs.push(getInitializeSingleTeam(level, TEAM_COUNT_DEFAULT_VALUE - count + i + 1, i));
    }
    return userTeamPushs;
};

var getInitializeSingleTeam = function (level, rank, nameIndex) {
    var userTeamPush = {};
    //增加省份，城市，区域。
    userTeamPush.cityInfo = getProvinceCityDistrictCountryLocation();
    var teamInfo = {};
    teamInfo.id = "INF" + getId();
    teamInfo.level = level;
    teamInfo.rank = rank;
    teamInfo.win = 0;
    teamInfo.draw = 0;
    teamInfo.lose = 0;
    teamInfo.scoreWin = 0;
    teamInfo.scoreLose = 0;
    teamInfo.scoreNet = 0;
    teamInfo.games = 0;
    teamInfo.points = 0;
    teamInfo.punishPoints = 0;
    teamInfo.sponsorRelation = 0;
    //teamInfo.name = (level <= 1 ? (LEVEL_NAMES[level - 1] + TEAM_NAMES[nameIndex] + "足球队") : (level <= 50 ? (getSingleRandomFirstName() + TEAM_NAMES[nameIndex] + "足球队") : (getSingleRandomLastName() + getSingleRandomFirstName() + "足球队")));
    teamInfo.name = getSingleRandomLastName() + getSingleRandomFirstName() + "足球队";
    userTeamPush.teamInfo = teamInfo;
    var bankInfo = {};
    bankInfo.id = "BAK" + getId();
    bankInfo.money = getRandomLevelValueCustom(level + 1, TEAM_MONEY_LEVEL_VALUE);
    bankInfo.picture = getRandomInteger(PICTURE_COUNT_MANAGER);
    bankInfo.moneyLoan = 0;
    bankInfo.moneyLoanLeftGames = 0;
    bankInfo.level = 1;
    userTeamPush.bankInfo = bankInfo;
    userTeamPush.sponsors = [];
    initializeTeamPlayer(userTeamPush, level);
    initializeYoungTeamPlayer(userTeamPush, level);
    initializeTeamStadium(userTeamPush, level);
    userTeamPush.fakes = [];
    userTeamPush.honors = [];
    userTeamPush.accountant = getAccountant();
    userTeamPush.chairman = getChairman();
    return userTeamPush;
}

var getRandomLevelValueCustom = function (level, value) {
    return (level - 1) * value + getRandomInteger(value);
};

var getRandomLevelSquareValue = function (level, value) {
    return getRandomLevelValueCustom(level, value == undefined ? PLAYER_ABILITY_LEVEL_VALUE : value);
};

var getRandomName = function () {
    if (Math.random() > 0.5) {
        return getSingleRandomLastName() + getSingleRandomFirstName() + getSingleRandomFirstName();
    } else {
        return getSingleRandomLastName() + getSingleRandomFirstName();
    }
    return;
};

var getSingleRandomLastName = function () {
    return PLAYER_LAST_NAMES[getRandomInteger(PLAYER_LAST_NAMES.length)];
};

var getSingleRandomFirstName = function () {
    return PLAYER_NAMES[getRandomInteger(PLAYER_NAMES.length)];
};

var getRandomInteger = function (number) {
    return Math.floor(Math.random() * number);
};

var getMatch = function (homeIndex, awayIndex, currentTeams) {
    if (currentTeams == undefined) {
        return;
    }
    var match = {};
    match.id = "MAT" + getId();
    match.homeIndex = homeIndex;
    match.awayIndex = awayIndex;
    match.homeTeamId = currentTeams[match.homeIndex].teamInfo.id;
    match.homeTeamName = currentTeams[match.homeIndex].teamInfo.name;
    match.awayTeamId = currentTeams[match.awayIndex].teamInfo.id;
    match.awayTeamName = currentTeams[match.awayIndex].teamInfo.name;
    match.homeScore = -1;
    match.awayScore = -1;
    return match;
}

var getTeamInfo = function (userTeam) {
    return userTeam.currentTeams[userTeam.config.teamIndex].teamInfo;
}

var getTeamSchedule = function (currentTeams, level, current) {
    if (currentTeams == undefined) {
        return;
    }
    var teamSchedules = [];
    var teamNumbers = [];
    for (var i = 0; i < TEAM_COUNT_DEFAULT_VALUE; i++) {
        teamNumbers.push(i);
    }
    if (getRandomInteger(100) > 50) {
        for (var i = 0; i < teamNumbers.length - 1; i++) {
            var matchSchedule = {};
            var matches = [];
            for (var j = 0; j < teamNumbers.length / 2; j++) {
                var match = getMatch(teamNumbers[j], teamNumbers[teamNumbers.length - 1 - j], currentTeams);
                match.games = i + 1;
                match.level = level;
                match.homeFansCount = 0;
                match.awayFansCount = 0;
                matches.push(match);
            }
            // var temp = list.pollLast();  //获取最后一个元素
            // list.add(1, temp);//将最后一个元素放在List的第二个位置
            var teamNumbersTemp = [];
            teamNumbersTemp.push(teamNumbers[0]);
            teamNumbersTemp.push(teamNumbers[TEAM_COUNT_DEFAULT_VALUE - 1]);
            for (var j = 1; j < TEAM_COUNT_DEFAULT_VALUE - 1; j++) {
                teamNumbersTemp.push(teamNumbers[j]);
            }
            teamNumbers = teamNumbersTemp;
            matchSchedule.games = i + 1;
            matchSchedule.matches = matches;
            teamSchedules.push(matchSchedule);
        }
        for (var i = 0; i < teamNumbers.length - 1; i++) {
            var matchSchedule = {};
            var matches = [];
            for (var j = 0; j < teamNumbers.length / 2; j++) {
                var match = getMatch(teamNumbers[teamNumbers.length - 1 - j], teamNumbers[j], currentTeams);
                match.games = i + TEAM_COUNT_DEFAULT_VALUE;
                match.level = level;
                match.homeFansCount = 0;
                match.awayFansCount = 0;
                matches.push(match);
            }
            var teamNumbersTemp = [];
            teamNumbersTemp.push(teamNumbers[0]);
            teamNumbersTemp.push(teamNumbers[TEAM_COUNT_DEFAULT_VALUE - 1]);
            for (var j = 1; j < TEAM_COUNT_DEFAULT_VALUE - 1; j++) {
                teamNumbersTemp.push(teamNumbers[j]);
            }
            teamNumbers = teamNumbersTemp;
            matchSchedule.games = i + TEAM_COUNT_DEFAULT_VALUE;
            matchSchedule.matches = matches;
            teamSchedules.push(matchSchedule);
        }
    } else {
        for (var i = 0; i < teamNumbers.length - 1; i++) {
            var matchSchedule = {};
            var matches = [];
            for (var j = 0; j < teamNumbers.length / 2; j++) {
                var match = getMatch(teamNumbers[teamNumbers.length - 1 - j], teamNumbers[j], currentTeams);
                match.games = i + 1;
                match.level = level;
                match.homeFansCount = 0;
                match.awayFansCount = 0;
                matches.push(match);
            }
            // var temp = list.pollLast();  //获取最后一个元素
            // list.add(1, temp);//将最后一个元素放在List的第二个位置
            var teamNumbersTemp = [];
            teamNumbersTemp.push(teamNumbers[0]);
            teamNumbersTemp.push(teamNumbers[TEAM_COUNT_DEFAULT_VALUE - 1]);
            for (var j = 1; j < TEAM_COUNT_DEFAULT_VALUE - 1; j++) {
                teamNumbersTemp.push(teamNumbers[j]);
            }
            teamNumbers = teamNumbersTemp;
            matchSchedule.games = i + 1;
            matchSchedule.matches = matches;
            teamSchedules.push(matchSchedule);
        }
        for (var i = 0; i < teamNumbers.length - 1; i++) {
            var matchSchedule = {};
            var matches = [];
            for (var j = 0; j < teamNumbers.length / 2; j++) {
                var match = getMatch(teamNumbers[j], teamNumbers[teamNumbers.length - 1 - j], currentTeams);
                match.games = i + TEAM_COUNT_DEFAULT_VALUE;
                match.level = level;
                match.homeFansCount = 0;
                match.awayFansCount = 0;
                matches.push(match);
            }
            var teamNumbersTemp = [];
            teamNumbersTemp.push(teamNumbers[0]);
            teamNumbersTemp.push(teamNumbers[TEAM_COUNT_DEFAULT_VALUE - 1]);
            for (var j = 1; j < TEAM_COUNT_DEFAULT_VALUE - 1; j++) {
                teamNumbersTemp.push(teamNumbers[j]);
            }
            teamNumbers = teamNumbersTemp;
            matchSchedule.games = i + TEAM_COUNT_DEFAULT_VALUE;
            matchSchedule.matches = matches;
            teamSchedules.push(matchSchedule);
        }
    }
    for (var i = 0; i < teamSchedules.length; i++) {
        var teamSchedule = teamSchedules[i];
        for (var j = 0; j < teamSchedule.matches.length; j++) {
            var match = teamSchedule.matches[j];
            match.scheduleIndex = i;
            match.matchIndex = j;
            match.current = current;
        }
    }
    return teamSchedules;
}

var getPlayerAbilityValue = function (level) {
    return 10 + 3 * (level - 1);
}

var getRandomPlayerWithLevel = function (level, position, lineup) {
    return getRandomPlayerWithLevelAndAge(level, position, lineup, 16);
}

var getRandomPlayerWithLevelAndAge = function (level, position, lineup, baseAge) {
    var player = {};
    player.id = "PLA" + getId();
    player.name = getRandomName();
    player.position = getPlayerPosition(position);
    if (player.position == 0) {
        player.offensive = getPlayerAbilityValue(level);      //参与进攻欲望，每次攻击时，越高，越会参与进攻
        player.defensive = getPlayerAbilityValue(level);      //参与防守欲望，每次防守时，越高，越会参与进攻
        player.shoot = getPlayerAbilityValue(level);      //射门
        player.pass = getPlayerAbilityValue(level);      //传球
        player.dribble = getPlayerAbilityValue(level);      //过人
        player.attack = getPlayerAbilityValue(level);      //攻击
        player.defence = 10 + getPlayerAbilityValue(level);      //防守
        player.block = 10 + getPlayerAbilityValue(level);      //封堵射门
        player.intercept = 10 + getPlayerAbilityValue(level);      //拦截传球
        player.closingDown = 10 + getPlayerAbilityValue(level);      //拦截传球
        player.goalKeeping = 10 + getPlayerAbilityValue(level);      //防守
        player.health = getPlayerAbilityValue(level);      //健康，每踢一场比赛，耐力耗尽会暂时损耗健康值，健康值耗尽时会有比例会受伤。
        player.stamina = getPlayerAbilityValue(level);      //耐力
    }
    if (player.position == 1) {
        player.offensive = getPlayerAbilityValue(level);      //参与进攻欲望，每次攻击时，越高，越会参与进攻
        player.defensive = 10 + getPlayerAbilityValue(level);      //参与防守欲望，每次防守时，越高，越会参与进攻
        player.shoot = getPlayerAbilityValue(level);      //射门
        player.pass = getPlayerAbilityValue(level);      //传球
        player.dribble = getPlayerAbilityValue(level);      //过人
        player.attack = getPlayerAbilityValue(level);      //攻击
        player.defence = 10 + getPlayerAbilityValue(level);      //防守
        player.block = 10 + getPlayerAbilityValue(level);      //封堵射门
        player.intercept = 10 + getPlayerAbilityValue(level);      //拦截传球
        player.closingDown = 10 + getPlayerAbilityValue(level);      //拦截传球
        player.goalKeeping = getPlayerAbilityValue(level);      //防守
        player.health = getPlayerAbilityValue(level);      //健康，每踢一场比赛，耐力耗尽会暂时损耗健康值，健康值耗尽时会有比例会受伤。
        player.stamina = getPlayerAbilityValue(level);      //耐力
    }
    if (player.position == 2) {
        player.offensive = 5 + getPlayerAbilityValue(level);      //参与进攻欲望，每次攻击时，越高，越会参与进攻
        player.defensive = 5 + getPlayerAbilityValue(level);      //参与防守欲望，每次防守时，越高，越会参与进攻
        player.shoot = 5 + getPlayerAbilityValue(level);      //射门
        player.pass = 5 + getPlayerAbilityValue(level);      //传球
        player.dribble = 5 + getPlayerAbilityValue(level);      //过人
        player.attack = 5 + getPlayerAbilityValue(level);      //攻击
        player.defence = 5 + getPlayerAbilityValue(level);      //防守
        player.block = 5 + getPlayerAbilityValue(level);      //封堵射门
        player.intercept = 5 + getPlayerAbilityValue(level);      //拦截传球
        player.closingDown = 5 + getPlayerAbilityValue(level);      //拦截传球
        player.goalKeeping = 5 + getPlayerAbilityValue(level);      //防守
        player.health = getPlayerAbilityValue(level);      //健康，每踢一场比赛，耐力耗尽会暂时损耗健康值，健康值耗尽时会有比例会受伤。
        player.stamina = getPlayerAbilityValue(level);      //耐力
    }
    if (player.position == 3) {
        player.offensive = 10 + getPlayerAbilityValue(level);      //参与进攻欲望，每次攻击时，越高，越会参与进攻
        player.defensive = getPlayerAbilityValue(level);      //参与防守欲望，每次防守时，越高，越会参与进攻
        player.shoot = 10 + getPlayerAbilityValue(level);      //射门
        player.pass = 10 + getPlayerAbilityValue(level);      //传球
        player.dribble = 10 + getPlayerAbilityValue(level);      //过人
        player.attack = 10 + getPlayerAbilityValue(level);      //攻击
        player.defence = getPlayerAbilityValue(level);      //防守
        player.block = getPlayerAbilityValue(level);      //封堵射门
        player.intercept = getPlayerAbilityValue(level);      //拦截传球
        player.closingDown = getPlayerAbilityValue(level);      //拦截传球
        player.goalKeeping = getPlayerAbilityValue(level);      //防守
        player.health = getPlayerAbilityValue(level);      //健康，每踢一场比赛，耐力耗尽会暂时损耗健康值，健康值耗尽时会有比例会受伤。
        player.stamina = getPlayerAbilityValue(level);      //耐力
    }
    setOtherNewPlayerInfoWithAge(player, level, lineup, baseAge);
    return player;
};

var getRandomPlayerWithLevelWithBaseValue = function (level, position, lineup, baseValue) {
    var player = {};
    player.id = "PLA" + getId();
    player.name = getRandomName();
    player.position = getPlayerPosition(position);
    if (player.position == 0) {
        player.offensive = getPlayerAbilityValue(level);      //参与进攻欲望，每次攻击时，越高，越会参与进攻
        player.defensive = getPlayerAbilityValue(level);      //参与防守欲望，每次防守时，越高，越会参与进攻
        player.shoot = getPlayerAbilityValue(level);      //射门
        player.pass = getPlayerAbilityValue(level);      //传球
        player.dribble = getPlayerAbilityValue(level);      //过人
        player.attack = getPlayerAbilityValue(level);      //攻击
        player.defence = baseValue + getPlayerAbilityValue(level);      //防守
        player.block = baseValue + getPlayerAbilityValue(level);      //封堵射门
        player.intercept = baseValue + getPlayerAbilityValue(level);      //拦截传球
        player.closingDown = baseValue + getPlayerAbilityValue(level);      //拦截传球
        player.goalKeeping = baseValue + getPlayerAbilityValue(level);      //防守
        player.health = getPlayerAbilityValue(level);      //健康，每踢一场比赛，耐力耗尽会暂时损耗健康值，健康值耗尽时会有比例会受伤。
        player.stamina = getPlayerAbilityValue(level);      //耐力
    }
    if (player.position == 1) {
        player.offensive = getPlayerAbilityValue(level);      //参与进攻欲望，每次攻击时，越高，越会参与进攻
        player.defensive = baseValue + getPlayerAbilityValue(level);      //参与防守欲望，每次防守时，越高，越会参与进攻
        player.shoot = getPlayerAbilityValue(level);      //射门
        player.pass = getPlayerAbilityValue(level);      //传球
        player.dribble = getPlayerAbilityValue(level);      //过人
        player.attack = getPlayerAbilityValue(level);      //攻击
        player.defence = baseValue + getPlayerAbilityValue(level);      //防守
        player.block = baseValue + getPlayerAbilityValue(level);      //封堵射门
        player.intercept = baseValue + getPlayerAbilityValue(level);      //拦截传球
        player.closingDown = baseValue + getPlayerAbilityValue(level);      //拦截传球
        player.goalKeeping = getPlayerAbilityValue(level);      //防守
        player.health = getPlayerAbilityValue(level);      //健康，每踢一场比赛，耐力耗尽会暂时损耗健康值，健康值耗尽时会有比例会受伤。
        player.stamina = getPlayerAbilityValue(level);      //耐力
    }
    if (player.position == 2) {
        player.offensive = baseValue / 2 + getPlayerAbilityValue(level);      //参与进攻欲望，每次攻击时，越高，越会参与进攻
        player.defensive = baseValue / 2 + getPlayerAbilityValue(level);      //参与防守欲望，每次防守时，越高，越会参与进攻
        player.shoot = baseValue / 2 + getPlayerAbilityValue(level);      //射门
        player.pass = baseValue / 2 + getPlayerAbilityValue(level);      //传球
        player.dribble = baseValue / 2 + getPlayerAbilityValue(level);      //过人
        player.attack = baseValue / 2 + getPlayerAbilityValue(level);      //攻击
        player.defence = baseValue / 2 + getPlayerAbilityValue(level);      //防守
        player.block = baseValue / 2 + getPlayerAbilityValue(level);      //封堵射门
        player.intercept = baseValue / 2 + getPlayerAbilityValue(level);      //拦截传球
        player.closingDown = baseValue / 2 + getPlayerAbilityValue(level);      //拦截传球
        player.goalKeeping = baseValue / 2 + getPlayerAbilityValue(level);      //防守
        player.health = getPlayerAbilityValue(level);      //健康，每踢一场比赛，耐力耗尽会暂时损耗健康值，健康值耗尽时会有比例会受伤。
        player.stamina = getPlayerAbilityValue(level);      //耐力
    }
    if (player.position == 3) {
        player.offensive = baseValue + getPlayerAbilityValue(level);      //参与进攻欲望，每次攻击时，越高，越会参与进攻
        player.defensive = getPlayerAbilityValue(level);      //参与防守欲望，每次防守时，越高，越会参与进攻
        player.shoot = baseValue + getPlayerAbilityValue(level);      //射门
        player.pass = baseValue + getPlayerAbilityValue(level);      //传球
        player.dribble = baseValue + getPlayerAbilityValue(level);      //过人
        player.attack = baseValue + getPlayerAbilityValue(level);      //攻击
        player.defence = getPlayerAbilityValue(level);      //防守
        player.block = getPlayerAbilityValue(level);      //封堵射门
        player.intercept = getPlayerAbilityValue(level);      //拦截传球
        player.closingDown = getPlayerAbilityValue(level);      //逼抢
        player.goalKeeping = getPlayerAbilityValue(level);      //防守
        player.health = getPlayerAbilityValue(level);      //健康，每踢一场比赛，耐力耗尽会暂时损耗健康值，健康值耗尽时会有比例会受伤。
        player.stamina = getPlayerAbilityValue(level);      //耐力
    }
    setOtherNewPlayerInfo(player, level, lineup);
    return player;
};

var getRandomYoungPlayerWithLevel = function (level, position, lineup) {
    var youngPlayer = {};
    youngPlayer.id = "PLA" + getId();
    youngPlayer.name = getRandomName();
    youngPlayer.position = getPlayerPosition(position);
    if (youngPlayer.position == 0) {
        youngPlayer.offensive = getYoungPlayerAbilityValue(level);      //参与进攻欲望，每次攻击时，越高，越会参与进攻
        youngPlayer.defensive = getYoungPlayerAbilityValue(level);      //参与防守欲望，每次防守时，越高，越会参与进攻
        youngPlayer.shoot = getYoungPlayerAbilityValue(level);      //射门
        youngPlayer.pass = getYoungPlayerAbilityValue(level);      //传球
        youngPlayer.dribble = getYoungPlayerAbilityValue(level);      //过人
        youngPlayer.attack = getYoungPlayerAbilityValue(level);      //攻击
        youngPlayer.defence = getRandomInteger(5) + getYoungPlayerAbilityValue(level);      //防守
        youngPlayer.block = getRandomInteger(5) + getYoungPlayerAbilityValue(level);      //封堵射门
        youngPlayer.intercept = getRandomInteger(5) + getYoungPlayerAbilityValue(level);      //拦截传球
        youngPlayer.closingDown = getRandomInteger(5) + getYoungPlayerAbilityValue(level);      //逼抢
        youngPlayer.goalKeeping = getRandomInteger(5) + getYoungPlayerAbilityValue(level);      //防守
        youngPlayer.health = getYoungPlayerAbilityValue(level);      //健康，每踢一场比赛，耐力耗尽会暂时损耗健康值，健康值耗尽时会有比例会受伤。
        youngPlayer.stamina = getYoungPlayerAbilityValue(level);      //耐力
    }
    if (youngPlayer.position == 1) {
        youngPlayer.offensive = getYoungPlayerAbilityValue(level);      //参与进攻欲望，每次攻击时，越高，越会参与进攻
        youngPlayer.defensive = getRandomInteger(5) + getYoungPlayerAbilityValue(level);      //参与防守欲望，每次防守时，越高，越会参与进攻
        youngPlayer.shoot = getYoungPlayerAbilityValue(level);      //射门
        youngPlayer.pass = getYoungPlayerAbilityValue(level);      //传球
        youngPlayer.dribble = getYoungPlayerAbilityValue(level);      //过人
        youngPlayer.attack = getYoungPlayerAbilityValue(level);      //攻击
        youngPlayer.defence = getRandomInteger(5) + getYoungPlayerAbilityValue(level);      //防守
        youngPlayer.block = getRandomInteger(5) + getYoungPlayerAbilityValue(level);      //封堵射门
        youngPlayer.intercept = getRandomInteger(5) + getYoungPlayerAbilityValue(level);      //拦截传球
        youngPlayer.closingDown = getRandomInteger(5) + getYoungPlayerAbilityValue(level);      //拦截传球
        youngPlayer.goalKeeping = getYoungPlayerAbilityValue(level);      //防守
        youngPlayer.health = getYoungPlayerAbilityValue(level);      //健康，每踢一场比赛，耐力耗尽会暂时损耗健康值，健康值耗尽时会有比例会受伤。
        youngPlayer.stamina = getYoungPlayerAbilityValue(level);      //耐力
    }
    if (youngPlayer.position == 2) {
        youngPlayer.offensive = getRandomInteger(5) + getYoungPlayerAbilityValue(level);      //参与进攻欲望，每次攻击时，越高，越会参与进攻
        youngPlayer.defensive = getRandomInteger(5) + getYoungPlayerAbilityValue(level);      //参与防守欲望，每次防守时，越高，越会参与进攻
        youngPlayer.shoot = getRandomInteger(5) + getYoungPlayerAbilityValue(level);      //射门
        youngPlayer.pass = getRandomInteger(5) + getYoungPlayerAbilityValue(level);      //传球
        youngPlayer.dribble = getRandomInteger(5) + getYoungPlayerAbilityValue(level);      //过人
        youngPlayer.attack = getRandomInteger(5) + getYoungPlayerAbilityValue(level);      //攻击
        youngPlayer.defence = getRandomInteger(5) + getYoungPlayerAbilityValue(level);      //防守
        youngPlayer.block = getRandomInteger(5) + getYoungPlayerAbilityValue(level);      //封堵射门
        youngPlayer.intercept = getRandomInteger(5) + getYoungPlayerAbilityValue(level);      //拦截传球
        youngPlayer.closingDown = getRandomInteger(5) + getYoungPlayerAbilityValue(level);      //拦截传球
        youngPlayer.goalKeeping = getRandomInteger(5) + getYoungPlayerAbilityValue(level);      //防守
        youngPlayer.health = getYoungPlayerAbilityValue(level);      //健康，每踢一场比赛，耐力耗尽会暂时损耗健康值，健康值耗尽时会有比例会受伤。
        youngPlayer.stamina = getYoungPlayerAbilityValue(level);      //耐力
    }
    if (youngPlayer.position == 3) {
        youngPlayer.offensive = getRandomInteger(5) + getYoungPlayerAbilityValue(level);      //参与进攻欲望，每次攻击时，越高，越会参与进攻
        youngPlayer.defensive = getYoungPlayerAbilityValue(level);      //参与防守欲望，每次防守时，越高，越会参与进攻
        youngPlayer.shoot = getRandomInteger(5) + getYoungPlayerAbilityValue(level);      //射门
        youngPlayer.pass = getRandomInteger(5) + getYoungPlayerAbilityValue(level);      //传球
        youngPlayer.dribble = getRandomInteger(5) + getYoungPlayerAbilityValue(level);      //过人
        youngPlayer.attack = getRandomInteger(5) + getYoungPlayerAbilityValue(level);      //攻击
        youngPlayer.defence = getYoungPlayerAbilityValue(level);      //防守
        youngPlayer.block = getRandomInteger(5) + getYoungPlayerAbilityValue(level);      //封堵射门
        youngPlayer.intercept = getRandomInteger(5) + getYoungPlayerAbilityValue(level);      //拦截传球
        youngPlayer.closingDown = getRandomInteger(5) + getYoungPlayerAbilityValue(level);      //拦截传球
        youngPlayer.goalKeeping = getYoungPlayerAbilityValue(level);      //防守
        youngPlayer.health = getYoungPlayerAbilityValue(level);      //健康，每踢一场比赛，耐力耗尽会暂时损耗健康值，健康值耗尽时会有比例会受伤。
        youngPlayer.stamina = getYoungPlayerAbilityValue(level);      //耐力
    }
    youngPlayer.recoverStamina = 0;//耐力恢复，比赛时专用
    youngPlayer.recoverInjure = 0;//受伤后需要恢复的比赛数
    youngPlayer.happy = getYoungPlayerAbilityValue(level);//快乐
    youngPlayer.potential = 1 + getRandomInteger(99);
    youngPlayer.age = 13 + 1 + getRandomInteger(5);
    youngPlayer.peakAge = 25 + getRandomInteger(10);
    var ageMax = youngPlayer.peakAge;
    youngPlayer.retireAge = getRandomInteger(52 - ageMax) + ageMax;
    youngPlayer.lineUp = lineup == undefined ? 0 : lineup;//是否上场[0:"否", 1:"出场名单", 2:"替补名单"];
    youngPlayer.salaryWeek = 0;//周薪
    youngPlayer.transferMoney = 0;//转会费用
    youngPlayer.money = 0;
    youngPlayer.picture = getRandomInteger(PICTURE_COUNT_MAN);
    youngPlayer.sex = SEX_MAN;
    var cityInfo = getProvinceCityDistrictCountryLocation();
    youngPlayer.country = cityInfo.country;
    youngPlayer.city = cityInfo.city;
    youngPlayer.province = cityInfo.province;
    youngPlayer.county = cityInfo.county;
    //初始化年青球员转正后的周数。够50周，就能收转会费了。
    youngPlayer.playGames = 0;
    youngPlayer.gifts = {};
    return youngPlayer;
};


var setOtherNewPlayerInfo = function (player, level, lineup) {
    setOtherNewPlayerInfoWithAge(player, level, lineup, 16);
    return;
}

var setOtherNewPlayerInfoWithAge = function (player, level, lineup, age) {
    player.recoverStamina = 0;//耐力恢复，比赛时专用
    player.happy = getPlayerAbilityValue(level) - 10 + getRandomInteger(20);//快乐
    player.potential = 1 + getRandomInteger(99);
    player.age = age + getRandomInteger(36);
    player.peakAge = 25 + getRandomInteger(10);
    var ageMax = player.age > player.peakAge ? player.age : player.peakAge;
    player.retireAge = getRandomInteger(52 - ageMax) + ageMax;
    player.lineUp = lineup == undefined ? 0 : lineup;//是否上场[0:"否", 1:"出场名单", 2:"替补名单"];
    player.recoverInjure = 0;//受伤后需要恢复的比赛数
    player.salaryWeek = getSalaryWeek(player, level);//周薪
    player.transferMoney = getTransferMoney(player, level);//转会费用
    player.money = getNumberRound((player.salaryWeek * 50 * 0.3 * (player.age - 16) + getRandomLevelValueCustom(level + 1, PLAYER_MONEY_LEVEL_VALUE)) * (1 + (getRandomInteger(100) / 100)));//球员现金
    player.picture = getRandomInteger(PICTURE_COUNT_MAN);
    player.sex = SEX_MAN;
    var cityInfo = getProvinceCityDistrictCountryLocation();
    player.country = cityInfo.country;
    player.city = cityInfo.city;
    player.province = cityInfo.province;
    player.county = cityInfo.county;
    player.playGames = 0;
    player.gifts = {};
    return;
}

var getSalaryWeek = function (player, level) {
    return 6 * getPlayerAbilityWithoutAge(player) * level + getRandomLevelValueCustom(level, PLAYER_SALARY_WEEK_BASE_VALUE);
};

var getTransferMoney = function (player, level) {
    var transferMoney = 1000 * getPlayerAbilityWithoutAge(player) * level + 50000 * player.happy * level;
    if (transferMoney < 0) {
        transferMoney = 0;
    }
    return transferMoney;
};

var getPlayerAbilityCount = function (player, level) {
    return getPlayerAbilityWithoutAge(player) * level;
};

var getPlayerAbilityWithoutAge = function (player) {
    return player.offensive +
        player.defensive +
        player.shoot +
        player.pass +
        player.dribble +
        player.attack +
        player.defence +
        player.block +
        player.intercept +
        player.closingDown +
        player.goalKeeping +
        player.health +
        player.stamina;
}

var updateUserTeamInThisPage = function (userTeam) {
    pageUserTeam = userTeam;
    showMoney(userTeam);
    return;
}

var showMoney = function (userTeam) {
    $(".class-button-bank-money").html(getFormatNumberWithThousand(getNumberRound(userTeam.currentTeams[userTeam.config.teamIndex].bankInfo.money)));
    return;
}

var saveGame = function (showMessage) {
    var userTeam = getPageUserTeam();
    if (showMessage == undefined) {
        showMessage = 1;
    }
    if (userTeam == undefined) {
        if (showMessage == 1) {
            showAlertFrameGame("你还没有初始化");
        }
        loadUserTeam();
        return;
    }
    if (showMessage == 1) {
        showAlertFrameGame("保存中");
    }
    setTimeout("saveGameTimeOut(" + showMessage + ")", 100);
    return;
}


var saveGameTimeOut = function (showMessage) {
    if (showMessage == undefined) {
        showMessage = 1;
    }
    pageUserTeam.lastUpdateTime = new Date();
    try {
        setLocalStorageItemGame("userTeam", pageUserTeam);
    } catch (e) {
        //如果保存出错，则清理所有记录。再保存。
        clearHistory(pageUserTeam);
        setLocalStorageItemGame("userTeam", pageUserTeam);
    }
    $(".class-span-count-down-timer").html(COUNT_DOWN_TIMER_DEFAULT_VALUE);
    if (showMessage == 1) {
        showAlertFrameGame("已保存至本地存储");
        $(".class-div-alert-frame").delay(100).fadeOut();
    }
    return;
}

//清除历史，释放空间。使得能够存储进去。
var clearHistory = function (userTeam) {
    showAlertFrameGame("存储空间不够存储，正在删除历史来释放空间。");
    clearHistoryForTeams(userTeam.currentTeams);
    clearHistoryForTeams(userTeam.upperTeams);
    clearHistoryForTeams(userTeam.lowerTeams);
    clearTransferMarketPlayers(userTeam.transferMarket.position0);
    clearTransferMarketPlayers(userTeam.transferMarket.position1);
    clearTransferMarketPlayers(userTeam.transferMarket.position2);
    clearTransferMarketPlayers(userTeam.transferMarket.position3);
    closePopout();
    showAlertFrameGame("存储空间不够存储，已删除完历史。");
}

var clearTransferMarketPlayers = function (players) {
    if (players.length > 99) {
        players.splice(0, players.length - 99);
    }
}

var clearHistoryForTeams = function (teams) {
    if (teams == undefined) {
        return;
    }
    for (var i = 0; i < teams.length; i++) {
        var team = teams[i];
        team.sponsors = [];
        team.fakes = [];
    }
}

var getCurrentMatch = function (userTeam) {
    var currentMatch = undefined
    var teamInfo = userTeam.currentTeams[userTeam.config.teamIndex].teamInfo;
    var currentMatchSchedules = userTeam.currentMatchSchedules;
    if (currentMatchSchedules == undefined) {
        return undefined;
    }
    for (var i = 0; i < currentMatchSchedules.length; i++) {
        var currentMatchSchedule = currentMatchSchedules[i];
        var matches = currentMatchSchedule.matches;
        var isFound = 0;
        for (var j = 0; j < matches.length; j++) {
            var match = matches[j];
            if (match.homeTeamId == userTeam.config.teamId || match.awayTeamId == userTeam.config.teamId) {
                if (match.homeScore == -1) {
                    currentMatch = {};
                    currentMatch.scheduleIndex = i;
                    currentMatch.matchIndex = j;
                    currentMatch.matchId = match.id;
                    currentMatch.games = currentMatchSchedule.games;
                    isFound = 1;
                    break;
                }
            }
        }
        if (isFound == 1) {
            break;
        }
    }
    return currentMatch;
}

var getTeamPower = function (homeTeamId, currentTeams) {
    if (currentTeams == undefined) {
        return;
    }
    var teamPower = 0;
    for (var i = 0; i < currentTeams.length; i++) {
        var currentTeam = currentTeams[i];
        if (homeTeamId == currentTeam.teamInfo.id) {
            adjustTeamLineUp(currentTeam);
            for (var j = 0; j < currentTeam.teamPlayers.length; j++) {
                var teamPlayer = currentTeam.teamPlayers[j];
                if (teamPlayer.lineUp == 1) {
                    teamPower += getPlayerAbilityWithoutAge(teamPlayer);
                }
            }
            break;
        }
    }
    return teamPower;
}

var getObjectCopy = function (object) {
    return JSON.parse(JSON.stringify(object));
}

var getUserCurrentTeamPlayer = function (playerId) {
    var userTeam = getPageUserTeam();
    var currentTeam = userTeam.currentTeams[userTeam.config.teamIndex];
    for (var i = 0; i < currentTeam.teamPlayers.length; i++) {
        if (currentTeam.teamPlayers[i].id == playerId) {
            return currentTeam.teamPlayers[i];
            break;
        }
    }
    return undefined;
}

var getUserCurrentTeam = function () {
    var userTeam = getPageUserTeam();
    return userTeam.currentTeams[userTeam.config.teamIndex];
}

var getTeamFromId = function (currentTeams, homeTeamId) {
    if (currentTeams == undefined) {
        return;
    }
    for (var j = 0; j < currentTeams.length; j++) {
        var currentTeam = currentTeams[j];
        if (currentTeam.teamInfo.id == homeTeamId) {
            homeTeam = currentTeam;
            break;
        }
    }
    return homeTeam;
}

var getTeamPowerInPlay = function (teamPlayers) {
    var teamPower = 0;
    for (var j = 0; j < teamPlayers.length; j++) {
        var teamPlayer = teamPlayers[j];
        if (teamPlayer.lineUp == 1) {
            if (teamPlayer.recoverInjure == 0) {
                teamPower += getPlayerAbilityWithoutAge(teamPlayer);
            }
        }
    }
    return teamPower;
}

var setPlayerHappy = function (match, teamPlayer, winMoney, placeBet) {
    if (teamPlayer == undefined) {
        return;
    }
    //计算快乐加成
    var happyPlus = winMoney * 10 / teamPlayer.money;
    teamPlayer.happy = parseFloat(teamPlayer.happy) + happyPlus;
    if (teamPlayer.betResults == undefined) {
        teamPlayer.betResults = [];
    }
    //记录彩票情况
    var result = {};
    result.betMoney = placeBet.betMoney;
    result.winMoney = winMoney;
    result.happyPlus = happyPlus;
    result.games = match.games;
    result.scheduleIndex = match.scheduleIndex;
    result.matchIndex = match.matchIndex;
    result.current = match.current;
    teamPlayer.betResults.push(result);
    //删除3天前历史
    if (match.games > 3) {
        result = teamPlayer.betResults[0];
        while (result.games < match.games - 2) {
            teamPlayer.betResults.splice(0, 1);
            result = teamPlayer.betResults[0];
        }
    }
    return;
}

var showThisTeam = function (obj, teamId, current) {
    closePopoutTeamReference();
    var offset = $(obj).offset();
    var offsetMain = $(".class-div-main").offset();
    var mainHtml = "<div " +
        "class='class-div-popout class-div-popout-team-reference' " +
        "style='border:1px solid #FFFFFF;z-index: 9;position:fixed;top:60px;left:" + (offsetMain.left) + "px;width:100%;background-color:#000000;border-radius:6px;" +
        "' >";
    mainHtml += "<table onclick='closePopoutTeamReference()' class='class-table-100-percent-width'>";
    mainHtml += "<tr><td></td>" +
        "<td class='class-td-button' style='width:36px'><image unbind src='image/common/common-close.png' /></td>" +
        "</tr></table>";
    mainHtml += "<div style='overflow-y: scroll;height:686px;overflow-y: scroll;'>";
    var userTeam = getPageUserTeam();
    var currentTeams = [];
    if (current == 0) {
        currentTeams = userTeam.currentTeams;
    } else if (current == 1) {
        currentTeams = userTeam.upperTeams;
    } else {
        currentTeams = userTeam.lowerTeams;
    }
    var team = undefined;
    for (var i = 0; i < currentTeams.length; i++) {
        var currentTeam = currentTeams[i];
        if (currentTeam.teamInfo.id == teamId) {
            team = currentTeam;
            break;
        }
    }
    mainHtml += getTeamReference(team, current);
    mainHtml += "</div>";
    mainHtml += "</div>";
    $("body").append(mainHtml);
    return;
}

var getHomeChairman = function () {
    var userTeam = getPageUserTeam();
    var team = userTeam.currentTeams[userTeam.config.teamIndex];
    var chairman = team.chairman;
    return chairman;
}

var setHomeChairman = function (chairman) {
    var userTeam = getPageUserTeam();
    var team = userTeam.currentTeams[userTeam.config.teamIndex];
    team.chairman = chairman;
    updateUserTeamInThisPage(userTeam);
}

var getTeamReference = function (team) {
    var userTeam = getPageUserTeam();
    var mainHtml = "";
    mainHtml += "<table class='class-table-100-percent-width class-table-team-reference'>";
    var teamInfo = team.teamInfo;
    mainHtml += "<tr class='class-tr-team-reference-team-info'><td style='text-align: center;font-size:26px;' colspan='2'>" + teamInfo.name + " - " + userTeam.config.season + "赛季</td></tr>";
    mainHtml += "<tr class='class-tr-team-reference-team-info'><td class='class-td-team-reference-left-info'>球队资料</td><td>";
    mainHtml += "<table class='class-table-100-percent-width class-table-team-info'>";
    mainHtml += "<tr>" +
        "<td>球队编号</td>" +
        "<td>球队名称</td>" +
        "<td>联赛等级</td>" +
        "<td>排名</td>" +
        "<td>已赛场次</td>" +
        "<td>胜</td>" +
        "<td>平</td>" +
        "<td>负</td>" +
        "<td>进球数</td>" +
        "<td>失球数</td>" +
        "<td>净球数</td>" +
        "<td>罚分</td>" +
        "<td>积分</td>" +
        "<td>与赞助商关系</td>" +
        "</tr>";
    mainHtml += "<tr>" +
        "<td>" + teamInfo.id + "</td>" +
        "<td>" + teamInfo.name + "</td>" +
        "<td>" + teamInfo.level + "级联赛</td>" +
        "<td>" + teamInfo.rank + "</td>" +
        "<td>" + teamInfo.games + "</td>" +
        "<td>" + teamInfo.win + "</td>" +
        "<td>" + teamInfo.draw + "</td>" +
        "<td>" + teamInfo.lose + "</td>" +
        "<td>" + teamInfo.scoreWin + "</td>" +
        "<td>" + teamInfo.scoreLose + "</td>" +
        "<td>" + teamInfo.scoreNet + "</td>" +
        "<td>" + teamInfo.punishPoints + "</td>" +
        "<td>" + (teamInfo.win * 3 + teamInfo.draw - teamInfo.punishPoints) + "</td>" +
        "<td>" + teamInfo.sponsorRelation + "</td>" +
        "</tr>";
    mainHtml += "</table>";
    mainHtml += "</td>";
    mainHtml += "</td></tr>";
    var chairman = team.chairman;
    mainHtml += "<tr class='class-tr-team-reference-team-info'><td class='class-td-team-reference-left-info'>董事长</td><td>";
    mainHtml += "<table class='class-table-100-percent-width class-table-team-info'>";
    mainHtml += "<tr>" +
        "<td>编号</td>" +
        "<td>名称</td>" +
        "<td>年龄</td>" +
        "<td>退休年龄</td>" +
        "<td>图片</td>" +
        "<td>国家</td>" +
        "<td>省份</td>" +
        "<td>城市</td>" +
        "<td>地区或县</td>" +
        "<td>操作</td>" +
        "</tr>";
    var chairmanHome = getHomeChairman();
    mainHtml += "<tr>" +
        "<td>" + chairman.id + "</td>" +
        "<td>" + chairman.name + "</td>" +
        "<td>" + chairman.age + "岁</td>" +
        "<td>" + chairman.retireAge + "岁</td>" +
        "<td>" + getPersonPicture(chairman, "manager", "class-image-team-player-picture-small-in-list") + "</td>" +
        "<td>" + chairman.country + "</td>" +
        "<td>" + chairman.province + "</td>" +
        "<td class='class-td-button' onclick=" +
        "" +
        "" +
        "\"showMapQuery(" +
        "'" +
        "" + chairman.city +
        " " + chairman.county +
        "'" +
        ")\"" +
        "" +
        "" +
        ">" + chairman.city + "</td>" +
        "<td>" + chairman.county + "</td>" +
        "<td>" +
        (chairman.id == chairmanHome.id ? "<button onclick='gotoTrainImmortality()'>修炼</button><button onclick='gotoMyselfProperty()'>详细</button>" : "") +
        "</td>" +
        "</tr>";
    mainHtml += "</table>";
    mainHtml += "</td>";
    mainHtml += "</td></tr>";
    mainHtml += "<tr class='class-tr-team-reference-team-info'><td class='class-td-team-reference-left-info'>球队城市</td><td>";
    var cityInfo = team.cityInfo;
    mainHtml += "<table class='class-table-100-percent-width class-table-team-info'>";
    mainHtml += "<tr>" +
        "<td>国家</td>" +
        "<td>省份</td>" +
        "<td>城市</td>" +
        "<td>地区或县</td>" +
        "</tr>";
    mainHtml += "<tr>" +
        "<td>" + cityInfo.country + "</td>" +
        "<td>" + cityInfo.province + "</td>" +
        "<td class='class-td-button' onclick=" +
        "" +
        "" +
        "\"showMapQuery(" +
        "'" +
        "" + cityInfo.city +
        " " + cityInfo.county +
        "'" +
        ")\"" +
        "" +
        "" +
        ">" + cityInfo.city + "</td>" +
        "<td>" + cityInfo.county + "</td>" +
        "</tr>";
    mainHtml += "</table>";
    mainHtml += "</td>";
    mainHtml += "</td></tr>";
    mainHtml += "<tr class='class-tr-team-reference-bank-info'><td class='class-td-team-reference-left-info'>球队荣誉</td><td>";
    var honors = team.honors;
    mainHtml += "<table class='class-table-100-percent-width class-table-bank-info'>";
    mainHtml += "<tr>" +
        "<td>序号</td>" +
        "<td>赛季</td>" +
        "<td>联赛级别</td>" +
        "<td>排名</td>" +
        "<td>奖杯</td>" +
        "</tr>";
    if (honors != undefined) {
        for (var i = 0; i < honors.length; i++) {
            var honor = honors[i];
            mainHtml += "<tr>" +
                "<td>" + (i + 1) + "</td>" +
                "<td>" + honor.id + "</td>" +
                "<td>" + honor.season + "</td>" +
                "<td>" + honor.level + "</td>" +
                "<td>" + honor.rank + "</td>" +
                "<td>" + getPersonPicture(honor, "cup", "class-image-team-player-picture-small-in-list") + "</td>" +
                "</tr>";
        }
    }
    mainHtml += "</table>";
    mainHtml += "</td>";
    mainHtml += "</td></tr>";
    mainHtml += "<tr class='class-tr-team-reference-team-info'><td class='class-td-team-reference-left-info'>会计资料</td><td>";
    var accountant = team.accountant;
    mainHtml += getAccountInfoHtml(accountant);
    mainHtml += "</td>";
    mainHtml += "</td></tr>";
    mainHtml += "<tr class='class-tr-team-reference-bank-info'><td class='class-td-team-reference-left-info'>赞助资料</td><td>";
    var sponsors = team.sponsors;
    mainHtml += "<table class='class-table-100-percent-width class-table-bank-info'>";
    mainHtml += "<tr>" +
        "<td>序号</td>" +
        "<td>赞助编号</td>" +
        "<td>赞助人图片</td>" +
        "<td>赞助商名</td>" +
        "<td>赞助次数</td>" +
        "<td>剩余周数</td>" +
        "<td>赞助金额</td>" +
        "<td>赞助项目</td>" +
        "</tr>";
    if (sponsors != undefined) {
        for (var i = 0; i < sponsors.length; i++) {
            var sponsor = sponsors[i];
            mainHtml += "<tr>" +
                "<td>" + (i + 1) + "</td>" +
                "<td>" + sponsor.id + "</td>" +
                "<td>" + getPersonPicture(sponsor, "manager", "class-image-team-player-picture-small-in-list") + "</td>" +
                "<td>" + sponsor.name + "</td>" +
                "<td>" + sponsor.times + "</td>" +
                "<td>" + sponsor.leftGames + "</td>" +
                "<td>" + sponsor.money + "</td>" +
                "<td>" + SPONSOR_ITEMS[sponsor.item] + "</td>" +
                "</tr>";
        }
    }
    mainHtml += "</table>";
    mainHtml += "</td>";
    mainHtml += "</td></tr>";
    mainHtml += "<tr class='class-tr-team-reference-bank-info'><td class='class-td-team-reference-left-info'>激励历史</td><td>";
    var encourages = team.encourages;
    mainHtml += "<table class='class-table-100-percent-width class-table-bank-info'>";
    mainHtml += "<tr>" +
        "<td>序号</td>" +
        "<td>激励编号</td>" +
        "<td>赛季</td>" +
        "<td>轮次</td>" +
        "<td>激励类型</td>" +
        "<td>奖金</td>" +
        "</tr>";
    if (encourages != undefined) {
        for (var i = 0; i < encourages.length; i++) {
            var encourage = encourages[i];
            mainHtml += "<tr>" +
                "<td>" + (i + 1) + "</td>" +
                "<td>" + encourage.id + "</td>" +
                "<td>" + encourage.season + "</td>" +
                "<td>" + (encourage.games) + "</td>" +
                "<td>" + ENCOURAGE_TYPES[encourage.type] + "</td>" +
                "<td>" + encourage.money + "</td>" +
                "</tr>";
        }
    }
    mainHtml += "</table>";
    mainHtml += "</td>";
    mainHtml += "</td></tr>";
    mainHtml += "<tr class='class-tr-team-reference-bank-info'><td class='class-td-team-reference-left-info'>假赛历史</td><td>";
    var fakes = team.fakes;
    mainHtml += "<table class='class-table-100-percent-width class-table-bank-info'>";
    mainHtml += "<tr>" +
        "<td>序号</td>" +
        "<td>假赛编号</td>" +
        "<td>赛季</td>" +
        "<td>轮次</td>" +
        "<td>赞助商名称</td>" +
        "<td>假赛人图片</td>" +
        "<td>赞助商友好增加</td>" +
        "<td>成功获取金钱</td>" +
        "<td>失败罚款金额</td>" +
        "<td>风险值</td>" +
        "<td>后续风险值</td>" +
        "<td>要求净丢球数</td>" +
        "<td>暴露后球员集体丧失快乐</td>" +
        "<td>暴露后球队会被扣除积分</td>" +
        "<td>暴露后球队会被罚款金额</td>" +
        "<td>状态</td>" +
        "<td colspan='3' style='text-align: center;'>操作</td>" +
        "</tr>";

    if (team.currentFake != undefined) {
        var fake = team.currentFake;
        var userCurrentTeam = getUserCurrentTeam();
        mainHtml += "<tr class='class-tr-fake-" + fake.status + "'>" +
            "<td>" + (i + 1) + "</td>" +
            "<td>" + fake.id + "</td>" +
            "<td>" + fake.season + "</td>" +
            "<td>" + fake.games + "</td>" +
            "<td>" + fake.name + "</td>" +
            "<td>" + getPersonPicture(fake, "manager", "class-image-team-player-picture-small-in-list") + "</td>" +
            "<td>" + fake.sponsorRelation + "</td>" +
            "<td>" + getFormatNumberWithThousand(fake.money) + "</td>" +
            "<td>" + getFormatNumberWithThousand(fake.notMeetRequirementLoseMoney) + "</td>" +
            "<td>" + fake.risk + "%</td>" +
            "<td>" + fake.continueRisk + "%</td>" +
            "<td>" + fake.requireLoseScores + "</td>" +
            "<td>" + fake.breakLoseHappy + "</td>" +
            "<td>" + fake.breakLosePoints + "</td>" +
            "<td>" + getFormatNumberWithThousand(fake.breakLoseMoney) + "</td>" +
            "<td>" + FAKE_STATUSES[fake.status] + "</td>" +
            (fake.status == 0 && userCurrentTeam.teamInfo.id == team.teamInfo.id ?
                "<td class='class-td-button class-td-button-action' onclick='acceptThisFake()'>同意(犯罪)</td>" +
                "<td class='class-td-button class-td-button-action' onclick='denyThisFake()'>拒绝(正义)</td>" +
                "<td class='class-td-button class-td-button-action' onclick='callPolice()'>报警(极端)</td>" : "<td colspan='3'></td>") +
            "</tr>";
    }
    if (fakes != undefined) {
        for (var i = fakes.length - 1; i >= 0; i--) {
            var fake = fakes[i];
            mainHtml += "<tr class='class-tr-fake-" + fake.status + "'>" +
                "<td>" + (i + 1) + "</td>" +
                "<td>" + fake.id + "</td>" +
                "<td>" + fake.season + "</td>" +
                "<td>" + fake.games + "</td>" +
                "<td>" + fake.name + "</td>" +
                "<td>" + getPersonPicture(fake, "manager", "class-image-team-player-picture-small-in-list") + "</td>" +
                "<td>" + fake.sponsorRelation + "</td>" +
                "<td>" + getFormatNumberWithThousand(fake.money) + "</td>" +
                "<td>" + getFormatNumberWithThousand(fake.notMeetRequirementLoseMoney) + "</td>" +
                "<td>" + fake.risk + "%</td>" +
                "<td>" + fake.continueRisk + "%</td>" +
                "<td>" + fake.requireLoseScores + "</td>" +
                "<td>" + fake.breakLoseHappy + "</td>" +
                "<td>" + fake.breakLosePoints + "</td>" +
                "<td>" + getFormatNumberWithThousand(fake.breakLoseMoney) + "</td>" +
                "<td>" + FAKE_STATUSES[fake.status] + "</td>" +
                "</tr>";
        }
    }
    mainHtml += "</table>";
    mainHtml += "</td>";
    mainHtml += "</td></tr>";
    mainHtml += "<tr class='class-tr-team-reference-bank-info'><td class='class-td-team-reference-left-info'>银行资料</td><td>";
    var bankInfo = team.bankInfo;
    mainHtml += "<table class='class-table-100-percent-width class-table-bank-info'>";
    mainHtml += "<tr>" +
        "<td>银行编号</td>" +
        "<td>银行经理图片</td>" +
        "<td>球队现金</td>" +
        "<td class='class-td-button class-td-button-bank-info-money-loan'>球队债务</td>" +
        "<td>债务到期剩余周数</td>" +
        "</tr>";
    mainHtml += "<tr>" +
        "<td>" + bankInfo.id + "</td>" +
        "<td>" + getPersonPicture(bankInfo, "manager", "class-image-team-player-picture-small-in-list") + "</td>" +
        "<td>" + bankInfo.money + "</td>" +
        "<td class='class-td-bank-info-money-loan'>" + bankInfo.moneyLoan + "</td>" +
        "<td class='class-td-bank-info-money-loan-left-games'>" + bankInfo.moneyLoanLeftGames + "</td>" +
        "</tr>";
    mainHtml += "</table>";
    mainHtml += "</td>";
    mainHtml += "</td></tr>";
    mainHtml += "<tr class='class-tr-team-reference-team-stadium'><td class='class-td-team-reference-left-info'>球队球场</td><td>";
    var teamStadium = team.teamStadium;
    mainHtml += "<table class='class-table-100-percent-width class-table-team-stadium'>";
    mainHtml += "<tr>" +
        "<td>球馆编号</td>\n" +
        "<td>球馆名称</td>\n" +
        "<td class='class-td-button class-td-button-team-stadium-capacity'>球馆可容纳人数</td>\n" +
        "<td>球迷人数</td>\n" +
        "<td class='class-td-button class-td-button-team-stadium-ticket-price'>票价</td>\n" +
        "</tr>";
    mainHtml += "<tr>" +
        "<td>" + teamStadium.id + "</td>" +
        "<td>" + teamStadium.name + "</td>" +
        "<td>" + teamStadium.capacity + "</td>" +
        "<td>" + teamStadium.fansCount + "</td>" +
        "<td>" + teamStadium.ticketPrice + "</td>" +
        "</tr>";
    mainHtml += "</table>";
    mainHtml += "</td></tr><tr class='class-tr-team-reference-team-stadium-train'><td class='class-td-team-reference-left-info'>球队训练</td><td>";
    mainHtml += "<table class='class-table-100-percent-width class-table-team-stadium-train'>";
    mainHtml += "<tr>" +
        "<td class='class-td-button' style='width:30px;'>训练教练图片</td>\n" +
        // "<td class='class-td-button'>可训练人数</td>\n" +
        "<td class='class-td-button'>训练无球跑动等级</td>\n" +
        "<td class='class-td-button'>训练盯人等级</td>\n" +
        "<td class='class-td-button'>训练射门等级</td>\n" +
        "<td class='class-td-button'>训练传球等级</td>\n" +
        "<td class='class-td-button'>训练过人等级</td>\n" +
        "<td class='class-td-button'>训练攻击等级</td>\n" +
        "<td class='class-td-button'>训练防守等级</td>\n" +
        "<td class='class-td-button'>训练封堵射门等级</td>\n" +
        "<td class='class-td-button'>训练拦截传球等级</td>\n" +
        "<td class='class-td-button'>训练逼抢等级</td>\n" +
        "<td class='class-td-button'>训练守门等级</td>\n" +
        "<td class='class-td-button'>训练健康等级</td>\n" +
        "<td class='class-td-button'>训练耐力等级</td>\n" +
        "</tr>";
    mainHtml += "<tr>" +
        "<td>" + getPersonPicture(teamStadium.train, "woman", "class-image-team-player-picture-small-in-list") + "</td>" +
        // "<td>" + teamStadium.train.personCount + "</td>" +
        "<td>" + teamStadium.train.offensive + "</td>" +
        "<td>" + teamStadium.train.defensive + "</td>" +
        "<td>" + teamStadium.train.shoot + "</td>" +
        "<td>" + teamStadium.train.pass + "</td>" +
        "<td>" + teamStadium.train.dribble + "</td>" +
        "<td>" + teamStadium.train.attack + "</td>" +
        "<td>" + teamStadium.train.defence + "</td>" +
        "<td>" + teamStadium.train.block + "</td>" +
        "<td>" + teamStadium.train.intercept + "</td>" +
        "<td>" + teamStadium.train.closingDown + "</td>" +
        "<td>" + teamStadium.train.goalKeeping + "</td>" +
        "<td>" + teamStadium.train.health + "</td>" +
        "<td>" + teamStadium.train.stamina + "</td>" +
        "</tr>";
    mainHtml += "</table>";
    mainHtml += "</td></tr><tr class='class-tr-team-reference-team-stadium-hospital'><td class='class-td-team-reference-left-info'>球队医院</td><td>";
    mainHtml += "<table class='class-table-100-percent-width class-table-team-stadium-hospital'>";
    mainHtml += "<tr>" +
        "<td class='class-td-button' style='width:30px;'>恢复教练图片</td>\n" +
        "<td class='class-td-button'>恢复耐力</td>\n" +
        "<td class='class-td-button'>恢复伤病</td>\n" +
        "</tr>";
    mainHtml += "<tr>" +
        "<td>" + getPersonPicture(teamStadium.hospital, "woman", "class-image-team-player-picture-small-in-list") + "</td>" +
        "<td>" + teamStadium.hospital.recoverStamina + "</td>" +
        "<td>" + teamStadium.hospital.recoverInjure + "</td>" +
        "</tr>";
    mainHtml += "</table>";
    mainHtml += "</td></tr><tr class='class-tr-team-reference-team-players'><td class='class-td-team-reference-left-info'>正式球员</td><td>";
    mainHtml += getOtherTeamPlayerHtml(team.teamPlayers);
    mainHtml += "</td></tr><tr class='class-tr-team-reference-team-players'><td class='class-td-team-reference-left-info'>青年球员</td><td>";
    mainHtml += getOtherYoungTeamPlayerHtml(team.youngTeamPlayers);
    mainHtml += "</td></tr>";
    mainHtml += "</table>";
    return mainHtml;
}

var getAccountInfoHtml = function (accountant) {
    return "<table class='class-table-100-percent-width class-table-team-info'>" +
        "<tr>" +
        "<td>会计编号</td>" +
        "<td>图片</td>" +
        "<td>姓名</td>" +
        "<td>年龄</td>" +
        "<td>退休年龄</td>" +
        "<td class='class-td-button class-td-accountant-increase-risk-accounting'>+危机账务能力</td>" +
        "<td>周薪</td>" +
        "<td>现金</td>" +
        "<td class='class-td-button class-td-accountant-recover-health'>+生命力</td>" +
        "<td>国家</td>" +
        "<td>省份</td>" +
        "<td>城市</td>" +
        "<td>地区或县</td>" +
        "</tr>" +
        "<tr>" +
        "<td>" + accountant.id + "</td>" +
        "<td>" + getPersonPicture(accountant, "accountant", "class-image-team-player-picture-small-in-list") + "</td>" +
        "<td>" + accountant.name + "</td>" +
        "<td>" + accountant.age + "岁</td>" +
        "<td>" + accountant.retireAge + "岁</td>" +
        "<td>" + accountant.riskAccounting + "</td>" +
        "<td>" + accountant.salaryWeek + "</td>" +
        "<td>" + accountant.money + "</td>" +
        "<td>" + accountant.health + "</td>" +
        "<td>" + accountant.country + "</td>" +
        "<td>" + accountant.province + "</td>" +
        "<td class='class-td-button' onclick=" +
        "\"showMapQuery(" +
        "'" +
        "" + accountant.city +
        " " + accountant.county +
        "'" +
        ")\"" +
        ">" + accountant.city + "</td>" +
        "<td>" + accountant.county + "</td>" +
        "</tr>" +
        "</table>";
}

var closePopoutTeamReference = function () {
    $(".class-div-popout-team-reference").remove();
    closePopoutTeamPlayerReference();
    return;
}

var closePopoutTeamPlayerReference = function () {
    $(".class-div-popout-team-player-reference").remove();
    return;
}

var getOtherYoungTeamPlayerHtml = function (youngTeamPlayers) {
    var mainHtml = "";
    mainHtml += "<table class='class-table-100-percent-width'><tr>" +
        "<td>序号</td>" +
        "<td>图片</td>" +
        "<td width='50px;'>名称</td>" +
        "<td>位置</td>" +
        "<td>无球跑动</td>" +
        "<td>射门</td>" +
        "<td>传球</td>" +
        "<td>过人</td>" +
        "<td>攻击</td>" +
        "<td>盯人</td>" +
        "<td>防守</td>" +
        "<td>封堵射门</td>" +
        "<td>拦截传球</td>" +
        "<td>逼抢</td>" +
        "<td>守门</td>" +
        "<td>健康</td>" +
        "<td>耐力</td>" +
        "<td>伤病周数</td>" +
        "<td>耐力消耗</td>" +
        "<td>快乐</td>" +
        "<td>潜力</td>" +
        "<td>年龄</td>" +
        "<td>巅峰</td>" +
        "<td>退休</td>" +
        "<td>周薪</td>" +
        "<td>转会费</td>" +
        "<td>球员现金</td>" +
        "<td>国家</td>" +
        "<td>省份</td>" +
        "<td width='66px'>城市</td>" +
        "<td width='66px'>县</td>" +
        "<td>首发吗</td>" +
        "</tr>";
    for (var i = 0; i < youngTeamPlayers.length; i++) {
        var teamPlayer = youngTeamPlayers[i];
        if (teamPlayer != undefined) {
            mainHtml += "<tr class='class-tr-team-player " + (teamPlayer.recoverInjure > 0 ? "class-tr-team-player-is-injure " : "") + (teamPlayer.lineUp == 1 ? "class-tr-team-player-is-in-line-up" : (teamPlayer.lineUp == 2 ? "class-tr-team-player-is-in-line-up-backup" : "")) + "'>" +
                "<td>" + (i + 1) + "</td>" +
                // "<td>" + teamPlayer.id + "</td>" +
                "<td>" + getPlayerPicture(teamPlayer, "class-image-team-player-picture-small-in-list") + "</td>" +
                "<td class='class-td-button' onclick='showThisPlayer(this)' property='" + JSON.stringify(teamPlayer) + "'>" + teamPlayer.name + "</td>" +
                "<td>" + PLAYER_POSITIONS[teamPlayer.position] + "</td>" +
                "<td>" + getNumberRound(teamPlayer.offensive) + "</td>" +
                "<td>" + getNumberRound(teamPlayer.shoot) + "</td>" +
                "<td>" + getNumberRound(teamPlayer.pass) + "</td>" +
                "<td>" + getNumberRound(teamPlayer.dribble) + "</td>" +
                "<td>" + getNumberRound(teamPlayer.attack) + "</td>" +
                "<td>" + getNumberRound(teamPlayer.defensive) + "</td>" +
                "<td>" + getNumberRound(teamPlayer.defence) + "</td>" +
                "<td>" + getNumberRound(teamPlayer.block) + "</td>" +
                "<td>" + getNumberRound(teamPlayer.intercept) + "</td>" +
                "<td>" + getNumberRound(teamPlayer.closingDown) + "</td>" +
                "<td>" + getNumberRound(teamPlayer.goalKeeping) + "</td>" +
                "<td>" + getNumberRound(teamPlayer.health) + "</td>" +
                "<td>" + getNumberRound(teamPlayer.stamina) + "</td>" +
                "<td style='" + (teamPlayer.recoverInjure > 0 ? "background-color:#FF0066" : "background-color:#66FF00") + "'>" + getNumberRound(teamPlayer.recoverInjure) + "</td>" +
                "<td>" + getNumberRound(teamPlayer.recoverStamina) + "</td>" +
                "<td>" + getNumberRound(teamPlayer.happy) + "</td>" +
                "<td>" + getNumberRound(teamPlayer.potential) + "</td>" +
                "<td>" + teamPlayer.age + "岁</td>" +
                "<td>" + teamPlayer.peakAge + "岁</td>" +
                "<td>" + teamPlayer.retireAge + "岁</td>" +
                "<td>" + getNumberRound(teamPlayer.salaryWeek) + "</td>" +
                "<td>" + getNumberRound(teamPlayer.transferMoney) + "</td>" +
                "<td>" + getNumberRound(teamPlayer.money) + "</td>" +
                "<td>" + teamPlayer.country + "</td>" +
                "<td>" + teamPlayer.province + "</td>" +
                "<td class='class-td-button' onclick=" +
                "" +
                "" +
                "\"showMapQuery(" +
                "'" +
                "" + teamPlayer.city +
                " " + teamPlayer.county +
                "'" +
                ")\"" +
                "" +
                "" +
                ">" + teamPlayer.city + "</td>" +
                "<td>" + teamPlayer.county + "</td>" +
                "<td>" + LINEUP_STATUS[teamPlayer.lineUp] + "</td>" +
                "</tr>";
        }
    }
    mainHtml += "</table>";
    return mainHtml;
};

var getOtherTeamPlayerHtml = function (teamPlayers) {
    var mainHtml = "";
    mainHtml += "<table class='class-table-100-percent-width'><tr>" +
        "<td>序号</td>" +
        "<td>图片</td>" +
        "<td width='50px;'>名称</td>" +
        "<td>位置</td>" +
        "<td>无球跑动</td>" +
        "<td>射门</td>" +
        "<td>传球</td>" +
        "<td>过人</td>" +
        "<td>攻击</td>" +
        "<td>盯人</td>" +
        "<td>防守</td>" +
        "<td>封堵射门</td>" +
        "<td>拦截传球</td>" +
        "<td>逼抢</td>" +
        "<td>守门</td>" +
        "<td>健康</td>" +
        "<td>耐力</td>" +
        "<td>伤病周数</td>" +
        "<td>耐力消耗</td>" +
        "<td>快乐</td>" +
        "<td>潜力</td>" +
        "<td>年龄</td>" +
        "<td>巅峰</td>" +
        "<td>退休</td>" +
        "<td>周薪</td>" +
        "<td>转会费</td>" +
        "<td>球员现金</td>" +
        "<td>国家</td>" +
        "<td>省份</td>" +
        "<td width='66px'>城市</td>" +
        "<td width='66px'>县</td>" +
        "<td>首发吗</td>" +
        "</tr>";
    for (var i = 0; i < teamPlayers.length; i++) {
        var teamPlayer = teamPlayers[i];
        if (teamPlayer != undefined) {
            mainHtml += "<tr class='class-tr-team-player " + (teamPlayer.recoverInjure > 0 ? "class-tr-team-player-is-injure " : "") + (teamPlayer.lineUp == 1 ? "class-tr-team-player-is-in-line-up" : (teamPlayer.lineUp == 2 ? "class-tr-team-player-is-in-line-up-backup" : "")) + "'>" +
                "<td>" + (i + 1) + "</td>" +
                // "<td>" + teamPlayer.id + "</td>" +
                "<td>" + getPlayerPicture(teamPlayer, "class-image-team-player-picture-small-in-list") + "</td>" +
                "<td class='class-td-button' onclick='showThisPlayer(this)' property='" + JSON.stringify(teamPlayer) + "'>" + teamPlayer.name + "</td>" +
                "<td>" + PLAYER_POSITIONS[teamPlayer.position] + "</td>" +
                "<td>" + getNumberRound(teamPlayer.offensive) + "</td>" +
                "<td>" + getNumberRound(teamPlayer.shoot) + "</td>" +
                "<td>" + getNumberRound(teamPlayer.pass) + "</td>" +
                "<td>" + getNumberRound(teamPlayer.dribble) + "</td>" +
                "<td>" + getNumberRound(teamPlayer.attack) + "</td>" +
                "<td>" + getNumberRound(teamPlayer.defensive) + "</td>" +
                "<td>" + getNumberRound(teamPlayer.defence) + "</td>" +
                "<td>" + getNumberRound(teamPlayer.block) + "</td>" +
                "<td>" + getNumberRound(teamPlayer.intercept) + "</td>" +
                "<td>" + getNumberRound(teamPlayer.closingDown) + "</td>" +
                "<td>" + getNumberRound(teamPlayer.goalKeeping) + "</td>" +
                "<td>" + getNumberRound(teamPlayer.health) + "</td>" +
                "<td>" + getNumberRound(teamPlayer.stamina) + "</td>" +
                "<td style='" + (teamPlayer.recoverInjure > 0 ? "background-color:#FF0066" : "background-color:#66FF00") + "'>" + getNumberRound(teamPlayer.recoverInjure) + "</td>" +
                "<td>" + getNumberRound(teamPlayer.recoverStamina) + "</td>" +
                "<td>" + getNumberRound(teamPlayer.happy) + "</td>" +
                "<td>" + getNumberRound(teamPlayer.potential) + "</td>" +
                "<td>" + teamPlayer.age + "岁</td>" +
                "<td>" + teamPlayer.peakAge + "岁</td>" +
                "<td>" + teamPlayer.retireAge + "岁</td>" +
                "<td>" + getNumberRound(teamPlayer.salaryWeek) + "</td>" +
                "<td>" + getNumberRound(teamPlayer.transferMoney) + "</td>" +
                "<td>" + getNumberRound(teamPlayer.money) + "</td>" +
                "<td>" + teamPlayer.country + "</td>" +
                "<td>" + teamPlayer.province + "</td>" +
                "<td class='class-td-button' onclick=" +
                "" +
                "" +
                "\"showMapQuery(" +
                "'" +
                "" + teamPlayer.city +
                " " + teamPlayer.county +
                "'" +
                ")\"" +
                "" +
                "" +
                ">" + teamPlayer.city + "</td>" +
                "<td>" + teamPlayer.county + "</td>" +
                "<td>" + LINEUP_STATUS[teamPlayer.lineUp] + "</td>" +
                "</tr>";
        }
    }
    mainHtml += "</table>";
    return mainHtml;
};

var getNumberRound = function (number) {
    return parseFloat(Number(number).toFixed(2));
}

var showThisMatchPlayer = function (obj) {
    closePopoutTeamPlayerReference();
    var offset = $(obj).offset();
    var playerId = $(obj).attr("playerId");
    var teamId = $(obj).attr("teamId");
    var teamLevel = $(obj).attr("teamLevel");
    var userTeam = getPageUserTeam();
    var teams = undefined;
    if (parseFloat(teamLevel) > userTeam.currentTeams[userTeam.config.teamIndex].teamInfo.level) {
        teams = userTeam.upperTeams;
    } else if (parseFloat(teamLevel) < userTeam.currentTeams[userTeam.config.teamIndex].teamInfo.level) {
        teams = userTeam.lowerTeams;
    } else {
        teams = userTeam.currentTeams;
    }
    var team = undefined;
    for (var i = 0; i < teams.length; i++) {
        if (teamId == teams[i].teamInfo.id) {
            team = teams[i];
            break;
        }
    }
    var teamPlayer = undefined;
    for (var i = 0; i < team.teamPlayers.length; i++) {
        if (playerId == team.teamPlayers[i].id) {
            teamPlayer = team.teamPlayers[i];
            break;
        }
    }
    $("body").append(getThisPlayerHtml(teamPlayer, offset.top + 30, offset.left - 200));
    return;
}

var showThisPlayer = function (obj, isUserPlayer) {
    closePopoutTeamPlayerReference();
    if (isUserPlayer == undefined) {
        isUserPlayer = 0;
    }
    var offset = $(obj).offset();
    var teamPlayer = JSON.parse($(obj).attr("property"));
    $("body").append(getThisPlayerHtml(teamPlayer, offset.top, offset.left + 63, isUserPlayer));
    return;
}

var getThisPlayerHtml = function (teamPlayer, top, left, isUserPlayer) {
    if (isUserPlayer == undefined) {
        isUserPlayer = 0;
    }
    var mainHtml = "<div " +
        "class='class-div-popout class-div-popout-team-player-reference' " +
        "style='border:1px solid #FFFFFF;z-index: 10;position:fixed;top:60px;left:0px;width:100%;background-color:#000000;border-radius:6px;overflow:scroll;" +
        "' >";
    mainHtml += "<table onclick='closePopoutTeamPlayerReference()' class='class-table-100-percent-width'>";
    mainHtml += "<tr><td class='class-td-div-popout-team-player-reference' ></td>" +
        "<td class='class-td-button class-td-div-popout-team-player-reference'  class='class-td-button' style='width:36px'><image unbind src='image/common/common-close.png' /></td>" +
        "</tr></table>";
    mainHtml += "<div style='overflow-y: scroll;height:700px;overflow-y: scroll;'>";
    mainHtml += "<table class='class-table-100-percent-width'>";
    mainHtml += "<tr>" +
        "<td class='class-td-div-popout-team-player-reference' width='126px;' >" +
        getPlayerPicture(teamPlayer) +
        "</td><td class='class-td-div-popout-team-player-reference' >";
    mainHtml += "<table class='class-table-100-percent-width'>";
    mainHtml += "<tr>" +
        "<td class='class-td-div-popout-team-player-reference' >球员编号</td>" +
        "<td class='class-td-div-popout-team-player-reference'  width='50px;'>球员名称</td>" +
        "<td class='class-td-div-popout-team-player-reference' >性别</td>" +
        "<td class='class-td-div-popout-team-player-reference' >球员位置</td>" +
        "<td class='class-td-div-popout-team-player-reference " + (isUserPlayer == 1 ? "class-td-button" : "") + "' " + (isUserPlayer == 1 ? "onclick=\"showChatFrame(this)\" property='" + JSON.stringify(teamPlayer) + "'" : "") + ">" +
        (isUserPlayer == 1 ? "谈话" : "") + "</td>" +
        "</tr>";
    mainHtml += "<tr>" +
        "<td class='class-td-div-popout-team-player-reference' >" + teamPlayer.id + "</td>" +
        "<td class='class-td-div-popout-team-player-reference' >" + teamPlayer.name + "</td>" +
        "<td class='class-td-div-popout-team-player-reference' >" + SEX_DESCRIPTIONS[teamPlayer.sex] + "</td>" +
        "<td class='class-td-div-popout-team-player-reference' >" + PLAYER_POSITIONS[teamPlayer.position] + "</td>" +
        "<td class='class-td-div-popout-team-player-reference' >" + "</td>" +
        "</tr>";
    mainHtml += "</table>";
    mainHtml += "<table class='class-table-100-percent-width'>";
    mainHtml += "<tr>" +
        "<td class='class-td-div-popout-team-player-reference' >国家</td>" +
        "<td class='class-td-div-popout-team-player-reference' >省份</td>" +
        "<td class='class-td-div-popout-team-player-reference' >城市</td>" +
        "<td class='class-td-div-popout-team-player-reference' >县</td>" +
        "</tr>";
    mainHtml += "<tr>" +
        "<td class='class-td-div-popout-team-player-reference' >" + teamPlayer.country + "</td>" +
        "<td class='class-td-div-popout-team-player-reference' >" + teamPlayer.province + "</td>" +
        "<td class='class-td-div-popout-team-player-reference class-td-button' onclick=" +
        "" +
        "" +
        "\"showMapQuery(" +
        "'" +
        "" + teamPlayer.city +
        " " + teamPlayer.county +
        "'" +
        ")\"" +
        "" +
        "" +
        " >" + teamPlayer.city + "</td>" +
        "<td class='class-td-div-popout-team-player-reference' >" + teamPlayer.county + "</td>" +
        "</tr>";
    mainHtml += "</table>";
    mainHtml += "<table class='class-table-100-percent-width'>";
    mainHtml += "<tr>" +
        "<td class='class-td-div-popout-team-player-reference' >伤病周数</td>" +
        "<td class='class-td-div-popout-team-player-reference' >年龄</td>" +
        "<td class='class-td-div-popout-team-player-reference' >巅峰年龄</td>" +
        "<td class='class-td-div-popout-team-player-reference' >退休年龄</td>" +
        "<td class='class-td-div-popout-team-player-reference' >潜力</td>" +
        "</tr>";
    mainHtml += "<tr>" +
        "<td class='class-td-div-popout-team-player-reference'  style='" + (teamPlayer.recoverInjure > 0 ? "background-color:#FF0066" : "background-color:#66FF00") + "'>" + teamPlayer.recoverInjure + "</td>" +
        "<td class='class-td-div-popout-team-player-reference' >" + teamPlayer.age + "岁</td>" +
        "<td class='class-td-div-popout-team-player-reference' >" + teamPlayer.peakAge + "岁</td>" +
        "<td class='class-td-div-popout-team-player-reference' >" + teamPlayer.retireAge + "岁</td>" +
        "<td class='class-td-div-popout-team-player-reference' >" + getNumberRound(teamPlayer.potential) + "</td>" +
        "</tr>";
    mainHtml += "</table>";
    mainHtml += "</td></tr><tr><td class='class-td-div-popout-team-player-reference' >进攻资料</td><td class='class-td-div-popout-team-player-reference' >";
    mainHtml += "<table class='class-table-100-percent-width'>";
    mainHtml += "<tr>" +
        "<td class='class-td-div-popout-team-player-reference' >无球跑动</td>" +
        "<td class='class-td-div-popout-team-player-reference' >射门</td>" +
        "<td class='class-td-div-popout-team-player-reference' >传球</td>" +
        "<td class='class-td-div-popout-team-player-reference' >过人</td>" +
        "<td class='class-td-div-popout-team-player-reference' >攻击</td>" +
        "<td class='class-td-div-popout-team-player-reference' >快乐</td>" +
        "</tr>";
    mainHtml += "<tr>" +
        "<td class='class-td-div-popout-team-player-reference' >" + getNumberRound(teamPlayer.offensive) + "</td>" +
        "<td class='class-td-div-popout-team-player-reference' >" + getNumberRound(teamPlayer.shoot) + "</td>" +
        "<td class='class-td-div-popout-team-player-reference' >" + getNumberRound(teamPlayer.pass) + "</td>" +
        "<td class='class-td-div-popout-team-player-reference' >" + getNumberRound(teamPlayer.dribble) + "</td>" +
        "<td class='class-td-div-popout-team-player-reference' >" + getNumberRound(teamPlayer.attack) + "</td>" +
        "<td class='class-td-div-popout-team-player-reference' >" + getNumberRound(teamPlayer.happy) + "</td>" +
        "</tr>";
    mainHtml += "</table>";
    mainHtml += "</td></tr><tr><td class='class-td-div-popout-team-player-reference' >防守资料</td><td class='class-td-div-popout-team-player-reference' >";
    mainHtml += "<table class='class-table-100-percent-width'>";
    mainHtml += "<tr>" +
        "<td class='class-td-div-popout-team-player-reference' >盯人</td>" +
        "<td class='class-td-div-popout-team-player-reference' >防守</td>" +
        "<td class='class-td-div-popout-team-player-reference' >封堵射门</td>" +
        "<td class='class-td-div-popout-team-player-reference' >拦截传球</td>" +
        "<td class='class-td-div-popout-team-player-reference' >逼抢</td>" +
        "<td class='class-td-div-popout-team-player-reference' >守门</td>" +
        "</tr>";
    mainHtml += "<tr>" +
        "<td class='class-td-div-popout-team-player-reference' >" + getNumberRound(teamPlayer.defensive) + "</td>" +
        "<td class='class-td-div-popout-team-player-reference' >" + getNumberRound(teamPlayer.defence) + "</td>" +
        "<td class='class-td-div-popout-team-player-reference' >" + getNumberRound(teamPlayer.block) + "</td>" +
        "<td class='class-td-div-popout-team-player-reference' >" + getNumberRound(teamPlayer.intercept) + "</td>" +
        "<td class='class-td-div-popout-team-player-reference' >" + getNumberRound(teamPlayer.closingDown) + "</td>" +
        "<td class='class-td-div-popout-team-player-reference' >" + getNumberRound(teamPlayer.goalKeeping) + "</td>" +
        "</tr>";
    mainHtml += "</table>";
    mainHtml += "</td></tr><tr><td class='class-td-div-popout-team-player-reference' >健康资料</td><td class='class-td-div-popout-team-player-reference' >";
    mainHtml += "<table class='class-table-100-percent-width'>";
    mainHtml += "<tr>" +
        "<td class='class-td-div-popout-team-player-reference' >健康</td>" +
        "<td class='class-td-div-popout-team-player-reference' >耐力</td>" +
        "<td class='class-td-div-popout-team-player-reference' >耐力损耗</td>" +
        "</tr>";
    mainHtml += "<tr>" +
        "<td class='class-td-div-popout-team-player-reference' >" + getNumberRound(teamPlayer.health) + "</td>" +
        "<td class='class-td-div-popout-team-player-reference' >" + getNumberRound(teamPlayer.stamina) + "</td>" +
        "<td class='class-td-div-popout-team-player-reference' >" + getNumberRound(teamPlayer.recoverStamina) + "</td>" +
        "</tr>";
    mainHtml += "</table>";
    mainHtml += "</td></tr><tr><td class='class-td-div-popout-team-player-reference' >球员资金</td><td class='class-td-div-popout-team-player-reference' >";
    mainHtml += "<table class='class-table-100-percent-width'>";
    mainHtml += "<tr>" +
        "<td class='class-td-div-popout-team-player-reference' >周薪</td>" +
        "<td class='class-td-div-popout-team-player-reference' >转会费</td>" +
        "<td class='class-td-div-popout-team-player-reference' >球员现金</td>" +
        "</tr>";
    mainHtml += "<tr>" +
        "<td class='class-td-div-popout-team-player-reference' >" + getNumberRound(teamPlayer.salaryWeek) + "</td>" +
        "<td class='class-td-div-popout-team-player-reference' >" + getNumberRound(teamPlayer.transferMoney) + "</td>" +
        "<td class='class-td-div-popout-team-player-reference' >" + getNumberRound(teamPlayer.money) + "</td>" +
        "</tr>";
    mainHtml += "</table>";
    mainHtml += "</td></tr>";
    if (teamPlayer.girlIndex != undefined) {
        mainHtml += "</td></tr><tr><td class='class-td-div-popout-team-player-reference' >女性朋友</td><td class='class-td-div-popout-team-player-reference' >";
        mainHtml += "<table class='class-table-100-percent-width'>";
        mainHtml += "<tr>" +
            "<td class='class-td-div-popout-team-player-reference' >照片</td>" +
            "<td class='class-td-div-popout-team-player-reference' >姓名</td>" +
            "<td class='class-td-div-popout-team-player-reference' >年纪</td>" +
            "<td class='class-td-div-popout-team-player-reference' >亲密值</td>" +
            "</tr>";
        var userTeam = getPageUserTeam();
        var girl = userTeam.girls[teamPlayer.girlIndex];
        var friendTeamPlayer = undefined;
        for (var j = 0; j < girl.friends.length; j++) {
            var friend = girl.friends[j];
            if (friend.personId == teamPlayer.id) {
                friendTeamPlayer = friend;
                break;
            }
        }
        mainHtml += "<tr>" +
            "<td class='class-td-div-popout-team-player-reference' >" +
            getGirlImageHtml(girl) +
            "</td>" +
            "<td class='class-td-div-popout-team-player-reference' >" + girl.name + "</td>" +
            "<td class='class-td-div-popout-team-player-reference' >" + girl.age + "岁</td>" +
            "<td class='class-td-div-popout-team-player-reference' >" + (friendTeamPlayer == undefined ? 0 : friendTeamPlayer.happy) + "</td>" +
            "</tr>";
        mainHtml += "</table>";
        mainHtml += "</td></tr>";
    }
    mainHtml += "</table>";
    mainHtml += "</div>";
    mainHtml += "</div>";
    return mainHtml;
}

var getGirlImageHtml = function (girl) {
    return "<image onclick=\"showAlertFrameGame('" +
        "<image class=class-float-left src=image\/woman\/woman-" + girl.picture + ".jpg />" +
        "<span>" + girl.name + "&nbsp;<br/>" +
        "" + girl.age + "岁&nbsp;<br/>" +
        "" + girl.country + girl.province + girl.city + girl.county + "人<br/>" +
        "" + girl.friends.length + "个男朋友&nbsp;<br/>" +
        (girl.sexMans.length == 0 ? "处女<br/>" : "跟" + girl.sexMans.length + "个男人发生过性关系<br/>") +
        "" + girl.cars.length + "辆车&nbsp;<br/>" +
        "" + girl.houses.length + "栋房" + "<br/>" +
        "" + (girl.marriageYears > 0 ? "已婚" + girl.marriageYears + "年" : "未婚") + "&nbsp;<br/>" +
        "计划在" + girl.marriageAge + "岁结婚<br/>" +
        "喜悦值达到" + (girl.dateHappy) + "可以约会&nbsp;<br/>" +
        "喜悦值达到" + girl.marriageHappy + "可以结婚<br/>" +
        "</span>" +
        "')\" style='height:126px;' src='image/woman/woman-" + girl.picture + ".jpg' />";
}

var getSmallGirlImageHtml = function (girl) {
    return "<image onclick=\"showAlertFrameGame('" +
        "<image class=class-float-left src=image\/woman\/woman-" + girl.picture + ".jpg />" +
        "<span>" + girl.name + "&nbsp;<br/>" +
        "" + girl.age + "岁&nbsp;<br/>" +
        "" + girl.country + girl.province + girl.city + girl.county + "人<br/>" +
        "" + girl.friends.length + "个男朋友&nbsp;<br/>" +
        (girl.sexMans.length == 0 ? "处女<br/>" : "跟" + girl.sexMans.length + "个男人发生过性关系<br/>") +
        "" + girl.cars.length + "辆车&nbsp;<br/>" +
        "" + girl.houses.length + "栋房" + "<br/>" +
        "" + (girl.marriageYears > 0 ? "已婚" + girl.marriageYears + "年" : "未婚") + "&nbsp;<br/>" +
        "计划在" + girl.marriageAge + "岁结婚<br/>" +
        "喜悦值达到" + (girl.dateHappy) + "可以约会&nbsp;<br/>" +
        "喜悦值达到" + girl.marriageHappy + "可以结婚<br/>" +
        "</span>" +
        "')\" style='height:100px;' src='image/woman/woman-" + girl.picture + ".jpg' />";
}

var closePopoutTeamPlayerChatFrame = function () {
    $(".class-div-popout-team-player-chat-frame").remove();
}

var showChatFrame = function (object) {
    var offset = $(object).offset();
    var top = offset.top;
    var left = offset.left;
    var mainHtml = "<div " +
        "class='class-div-popout class-div-popout-team-player-chat-frame' " +
        "style='border:1px solid #FFFFFF;z-index: 10;position:fixed;top:60px;left:" + (left > 686 ? left - 666 : 20) + "px;width:666px;background-color:#000000;border-radius:6px;" +
        "' >";
    mainHtml += "<table onclick='closePopoutTeamPlayerChatFrame()' class='class-table-100-percent-width'>";
    mainHtml += "<tr><td class='class-td-div-popout-team-player-reference' ></td>" +
        "<td class='class-td-button class-td-div-popout-team-player-reference'  class='class-td-button' style='width:36px'><image unbind src='image/common/common-close.png' /></td>" +
        "</tr></table>";
    mainHtml += "<div style='overflow-y: scroll;height:398px;overflow-y: scroll;'>";
    mainHtml += "<table class='class-table-100-percent-width'>";
    var teamPlayer = JSON.parse($(object).attr("property"));
    //玩家可指定球员发钱加快乐。
    mainHtml += "<tr><td class='class-td-button' playerId='" + teamPlayer.id + "' onclick='encourageThisPlayer(this)'>发赛前激励奖金";
    mainHtml += "</td></tr>";
    mainHtml += "<tr><td class='class-td-button' playerId='" + teamPlayer.id + "' onclick='pulishThisPlayer(this)'>罚款";
    mainHtml += "</td></tr>";
    mainHtml += "<tr><td class='class-td-button' playerId='" + teamPlayer.id + "' onclick='queryThisPlayer(this)'>询问最近情况";
    mainHtml += "</td></tr>";
    mainHtml += "</table>";
    mainHtml += "</div>";
    mainHtml += "</div>";
    $("body").append(mainHtml);
    return;
}

var encourageThisPlayer = function (object) {
    var playerId = $(object).attr("playerId");
    var offset = $(object).offset();
    var top = offset.top;
    var left = offset.left;
    var mainHtml = "<div " +
        "class='class-div-popout class-div-popout-team-player-chat-frame' " +
        "style='border:1px solid #FFFFFF;z-index: 11;position:fixed;top:60px;left:" + (left - 3) + "px;width:666px;background-color:#000000;border-radius:6px;" +
        "' >";
    mainHtml += "<table onclick='closePopoutTeamPlayerChatFrame()' class='class-table-100-percent-width'>";
    mainHtml += "<tr><td class='class-td-div-popout-team-player-reference' ></td>" +
        "<td class='class-td-button class-td-div-popout-team-player-reference'  class='class-td-button' style='width:36px'><image unbind src='image/common/common-close.png' /></td>" +
        "</tr></table>";
    mainHtml += "<div style='overflow-y: scroll;height:398px;overflow-y: scroll;'>";
    mainHtml += "<table class='class-table-100-percent-width'>";
    var teamPlayer = getUserCurrentTeamPlayer(playerId);
    mainHtml += "<tr><td class='class-td-player-picture' width='126px;' rowspan='3'>" + getPlayerPicture(teamPlayer) + "</td><td width='100px;'>球员名称</td><td><span class='class-span-this-player-name'>" + teamPlayer.name;
    mainHtml += "</span></td></tr>";
    mainHtml += "<tr><td>球员位置</td><td><span class='class-span-this-player-name'>" + PLAYER_POSITIONS[teamPlayer.position];
    mainHtml += "</span></td></tr>";
    mainHtml += "<tr><td>球员快乐</td><td><span class='class-span-this-player-happy'>" + teamPlayer.happy;
    mainHtml += "</span></td></tr>";
    mainHtml += "</table>";
    mainHtml += "<table class='class-table-100-percent-width'>";
    mainHtml += "<tr><td class='class-td-button' playerId='" + playerId + "' onclick='encourageThisPlayerWithMoney(this,100000)'>巨额激励,快乐+1";
    mainHtml += "</td></tr>";
    mainHtml += "<tr><td class='class-td-button' playerId='" + playerId + "' onclick='encourageThisPlayerWithMoney(this,50000)'>一般激励,快乐+0.5";
    mainHtml += "</td></tr>";
    mainHtml += "<tr><td class='class-td-button' playerId='" + playerId + "' onclick='encourageThisPlayerWithMoney(this,10000)'>较差激励,快乐+0.1";
    mainHtml += "</td></tr>";
    mainHtml += "</table>";
    mainHtml += "</div>";
    mainHtml += "</div>";
    $("body").append(mainHtml);
    return;
}

var getPlayerPicture = function (teamPlayer, className) {
    return "<image onclick=\"showAlertFrameGame('<image src=image/man/man-" + teamPlayer.picture + ".jpg />',0,0,1)\" src='image/man/man-" + teamPlayer.picture + ".jpg' class='class-image-player-picture" +
        (className == undefined ? "" : " " + className) + "' />";
}

var getPlayerFramePicture = function (teamPlayer, className) {
    return "<div style='float:left;background-size:100% 100%;width:20px;height:30px;background-image: url(image/man/man-" + teamPlayer.picture + ".jpg);' class='class-div-player-picture" +
        (className == undefined ? "" : " " + className) + "' ></div>";
}

var getPersonPicture = function (teamPlayer, category, className) {
    return "<image onclick=\"showAlertFrameGame('<image src=image/" + category + "/" + category + "-" + teamPlayer.picture + ".jpg />',0,0,1)\" src='image/" + category + "/" + category + "-" + teamPlayer.picture +
        ".jpg' class='class-image-player-picture" + (className == undefined ? "" : " " + className) + "' />";
}

var getPersonAssetPicture = function (picture, category, className) {
    return "<image onclick=\"showAlertFrameGame('<image src=image/" + category + "/" + category + "-" + picture + ".jpg />',0,0,1)\" src='image/" + category + "/" + category + "-" + picture +
        ".jpg' class='class-image-player-picture" + (className == undefined ? "" : " " + className) + "' />";
}


var getPersonFramePicture = function (teamPlayer, category, className) {
    return "<div style='float:left;background-size:100% 100%;width:20px;height:30px;background-image: url(image/" + category + "/" + category + "-" + teamPlayer.picture + ".jpg);' class='class-div-player-picture" +
        (className == undefined ? "" : " " + className) + "' ></div>";
}

var encourageThisPlayerWithMoney = function (object, money) {
    var playerId = $(object).attr("playerId");
    var userTeam = getPageUserTeam();
    var team = getUserCurrentTeam();
    if (team.bankInfo.money < money) {
        showAlertFrameGame("你钱不够支付。");
        return;
    }
    var teamPlayer = getUserCurrentTeamPlayer(playerId);
    teamPlayer.happy += getNumberRound(money / ENCOURAGE_MONEY_INCREASE_1_POINT_FOR_SINGLE_PLAYER);
    team.bankInfo.money -= money;
    var encourage = {}
    encourage.id = "ENC" + getId();
    encourage.season = userTeam.config.season;
    encourage.games = team.teamInfo.games + 1;
    encourage.money = money;
    encourage.type = ENCOURAGE_TYPE_BEFORE_MATCH_CASH;
    if (teamPlayer.encourages == undefined) {
        teamPlayer.encourages = [];
    }
    teamPlayer.encourages.push(encourage);
    showMoney(userTeam);
    $(".class-span-this-player-happy").html(getNumberRound(teamPlayer.happy));
    showBlockAnimate(".class-td-player-picture", 138, 198, 255, 0, 0, 0.5, 100, 100);
    loadMainPageUserTeamHtml();
}

var showBlockAnimate = function (className, width, height, red, green, blue, opacity, fadeInMilliSeconds, fadeOutMilliSeconds) {
    var offset = $(className).offset();
    var top = offset.top;
    var left = offset.left;
    $("body").append("<div " +
        "style='display:none;z-index: 9999;position: absolute;top:" + top + "px;left:" + left + "px;width:" + width + "px;height:" + height + "px;\n" +
        "    background: rgba(" + red + ", " + green + ", " + blue + ", " + opacity + ");\n" +
        "    filter:alpha(opacity=" + (opacity * 100) + "); /* IE */\n" +
        "    -moz-opacity:" + opacity + "; /* Moz + FF */\n" +
        "    opacity: " + opacity + ";' " +
        "class='class-div-block-animate'>" +
        "</div>");
    $(".class-div-block-animate").fadeIn(fadeInMilliSeconds, function () {
        $(".class-div-block-animate").fadeOut(fadeOutMilliSeconds, function () {
            $(".class-div-block-animate").remove();
        })
    })
}

//球员投注列表，赢的用绿色，平的用蓝色，输的用红色展示
var getBetResultClassName = function (betResult) {
    if (betResult.winMoney > 0) {
        return "class-td-win-money";
    }
    if (betResult.winMoney == 0) {
        return "class-td-draw-money";
    }
    if (betResult.winMoney < 0) {
        return "class-td-lose-money";
    }
    return;
}

var getCurrentTeams = function (userTeam, current) {
    if (current == 0) {
        return userTeam.currentTeams;
    }
    if (current == 1) {
        return userTeam.upperTeams;
    }
    if (current == 2) {
        return userTeam.lowerTeams;
    }
    return;
}

var getCurrentMatchSchedules = function (userTeam, current) {
    if (current == 0) {
        return userTeam.currentMatchSchedules;
    }
    if (current == 1) {
        return userTeam.upperMatchSchedules;
    }
    if (current == 2) {
        return userTeam.lowerMatchSchedules;
    }
    return;
}

var mailbody = "";

var sendMailToTeam = function (subject, body) {
    var userTeam = getPageUserTeam();
    if (userTeam.currentTeams.length - 1 < userTeam.config.teamIndex) {
        $(".class-td-team-mail").html("");
        $(".class-td-team-mail").prepend("<div class='class-div-team-mail' unread='1' body=\"" + body + "\" onclick='showThisMail(this)'>" + getCurrentTime() + " " +
            userTeam.config.season + "赛季新赛季 " + subject + "</div>");
    } else {
        var teamInfo = userTeam.currentTeams[userTeam.config.teamIndex].teamInfo;
        if ($(".class-div-team-mail-" + (teamInfo.games + 1)).html() == undefined) {
            mailbody = "<div class='class-mail-subject'>" + subject + "</div>" + "<div class='class-mail-body'>" + body + "</div>";
            $(".class-td-team-mail").html("<div class='class-div-team-mail class-div-team-mail-" + (teamInfo.games + 1) + "' unread='1' body=\"" + mailbody + "\" onclick='showThisMail(this)'>" + getCurrentTime() + " " +
                userTeam.config.season + "赛季第" + (teamInfo.games + 1) + "周 邮件</div>");
        } else {
            mailbody += "<div class='class-mail-subject'>" + subject + "</div>" + "<div class='class-mail-body'>" + body + "</div>";
            $(".class-td-team-mail").html("<div class='class-div-team-mail class-div-team-mail-" + (teamInfo.games + 1) + "' unread='1' body=\"" + mailbody + "\" onclick='showThisMail(this)'>" + getCurrentTime() + " " +
                userTeam.config.season + "赛季第" + (teamInfo.games + 1) + "周 邮件</div>");
        }
    }
    $(".class-span-team-mail-unread-count").html(1);
    return;
}

var showThisMail = function (object) {
    closePopoutReference();
    var subject = $(object).html();
    var body = $(object).attr("body");
    if ($(object).attr("unread") == 1) {
        $(".class-span-team-mail-unread-count").html(parseFloat($(".class-span-team-mail-unread-count").html()) - 1);
        $(object).attr("unread", 0).addClass("class-div-team-mail-read");
    }
    var mainHtml = "";
    var offset = $(object).offset();
    mainHtml = "<div " +
        "class='class-div-popout class-div-popout-reference class-div-popout-reference-mail-info' " +
        "style='border:1px solid #FFFFFF;z-index: 9;position:absolute;top:" + (offset.top + 10) + "px;left:" + (offset.left + 10) + "px;width:1206px;background-color:#000000;border-radius:6px;" +
        "' >";
    mainHtml += "<table onclick='closePopoutReference()' class='class-table-100-percent-width'><tr><td>标题</td><td>" + subject + "</td></tr>" +
        "<tr><td>内容</td><td>" +
        body
        + "</td></tr></table>";
    mainHtml += "</div>";
    $("body").append(mainHtml);
    return;
}

var getLevelIncrease = function (level, factor) {
    var levelIncrease = 1;
    for (var i = 1; i < level; i++) {
        levelIncrease = levelIncrease * factor;
    }
    return levelIncrease;
}

var getTeamValue = function (team) {
    var teamValue = {};
    var teamInfo = team.teamInfo;
    var bankInfo = team.bankInfo;
    var teamStadium = team.teamStadium;
    var teamPlayers = team.teamPlayers;
    var teamPlayersValue = 0;
    var teamPlayersSalaryWeek = 0;
    for (var i = 0; i < teamPlayers.length; i++) {
        teamPlayersValue += teamPlayers[i].transferMoney;
        teamPlayersSalaryWeek += teamPlayers[i].salaryWeek;
    }
    teamValue.teamPlayersSalaryWeek = teamPlayersSalaryWeek;
    teamValue.teamPlayersValue = teamPlayersValue;
    teamValue.teamStadiumCapacityValue = getTeamStadiumCapacityValue(teamStadium);
    teamValue.teamStadiumTrainValue = getTeamStadiumTrainValue(teamStadium.train);
    teamValue.teamStadiumHospitalValue = getTeamStadiumHospitalValue(teamStadium.hospital);
    teamValue.teamCashMoney = bankInfo.money;
    teamValue.teamTotalValue = teamValue.teamPlayersValue
        + teamValue.teamStadiumCapacityValue
        + teamValue.teamStadiumTrainValue
        + teamValue.teamStadiumHospitalValue
        + teamValue.teamCashMoney;
    return teamValue;
}

var getTeamStadiumCapacityValue = function (teamStadium) {
    return teamStadium.capacity * TEAM_STADIUM_CAPACITY_INCREASE_ONE_COST_MONEY_DEFAULT_VALUE;
}

var getTeamStadiumTrainValue = function (train) {
    return 10000 * (
        train.attack +
        // train.personCount +
        train.defence +
        train.block +
        train.intercept +
        train.closingDown +
        train.defensive +
        train.dribble +
        train.goalKeeping +
        train.health +
        train.offensive +
        train.pass +
        train.shoot +
        train.stamina
    );
}

var getTeamStadiumHospitalValue = function (hospital) {
    return 10000 * (
        hospital.recoverInjure +
        hospital.recoverStamina
    );
}

var getBankInterestRate = function (level) {
    return 101 - level > 1 ? 101 - level : 1;
}

var getTeamBankLoanPercent = function (level) {
    level = level - 1;
    return 20 - level * 0.1 > 1 ? 20 - level * 0.1 : 1;
}

var initializeTeamScheduleForGotToNextSeason = function (userTeam) {
    userTeam.currentMatchSchedules = getTeamSchedule(userTeam.currentTeams, userTeam.currentTeams[userTeam.config.teamIndex].teamInfo.level, 0);
    userTeam.upperMatchSchedules = getTeamSchedule(userTeam.upperTeams, userTeam.currentTeams[userTeam.config.teamIndex].teamInfo.level + 1, 1);
    userTeam.lowerMatchSchedules = getTeamSchedule(userTeam.lowerTeams, userTeam.currentTeams[userTeam.config.teamIndex].teamInfo.level - 1, 2);
    return;
}

var getRandomColor = function (baseColorNumber) {
    return "#" +
        transferNumber(getRandomInteger(baseColorNumber)) +
        transferNumber(getRandomInteger(baseColorNumber)) +
        transferNumber(getRandomInteger(baseColorNumber)) +
        transferNumber(getRandomInteger(baseColorNumber)) +
        transferNumber(getRandomInteger(baseColorNumber)) +
        transferNumber(getRandomInteger(baseColorNumber));
}

var transferNumber = function (number) {
    if (number < 10) {
        return number;
    }
    var transfer = ['a', 'b', 'c', 'd', 'e', 'f'];
    if (number > 15) {
        return undefined;
    }
    return transfer[number - 10];
}

var closePopout = function () {
    $(".class-div-popout").remove();
    return;
}

var getTransferMarketTeamPlayers = function (position) {
    var userTeam = getPageUserTeam();
    var level = userTeam.currentTeams[userTeam.config.teamIndex].teamInfo.level;
    var teamPlayers = [];
    for (var i = 0; i < BUY_TEAM_PLAYER_COUNT_DEFAULT_VALUE; i++) {
        teamPlayers.push(getRandomPlayerWithLevelAndAge(level, position, undefined, 18));
    }
    return teamPlayers;

}

var setRightClick = function () {
    //右键菜单设置
    document.oncontextmenu = function (e) {
        if (window.event) {
            e = window.event;
        }
        closeRightClickMenu();
        showRightClickMenu(e.clientX, e.clientY);
        return false;
    }

    //添加响应函数
    document.onclick = function () {
        closeRightClickMenu();
    }
}

var showRightClickMenu = function (left, top) {
    var mainHtml = "<div " +
        "class='class-div-right-click-menu class-div-transparent' " +
        "style='border:0px;z-index: 9999999;position:fixed;top:" + (top - 78) + "px;left:" + (left - 78) + "px;width:226px;height:156px;background-color:#000000;border-radius:12px;" +
        "' >";
    mainHtml += "" +
        "<button class='class-button-team-mail' style='float:left;' onclick='classButtonTeamMailClick()'>球队邮件</button>" +
        "<button class='class-button-user-team' style='float:left;' onclick='classButtonUserTeamClick()'>球队资料</button>" +
        "<button class='class-button-buy-player' style='float:left;' onclick='classButtonBuyPlayerClick()'>转会市场</button>" +
        "<button class='class-button-team-board' style='float:left;' onclick='classButtonTeamBoardClick()'>球队排名</button>" +
        "<button class='class-button-team-schedule' style='float:left;' onclick='classButtonTeamScheduleClick()'>球队赛程</button>" +
        "<button class='class-button-play-game' style='float:left;' onclick='classButtonPlayGameClick()'>进入比赛</button>" +
        "<button class='class-button-meet-someone' style='float:left;' onclick='classButtonMeetSomeoneClick()'>出去走走</button>" +
        "<button class='class-button-restart-game' style='float:left;' onclick='classButtonRestartGameClick()'>重开游戏</button>" +
        "<button class='class-button-save-game' style='float:left;' onclick='classButtonSaveGameClick()'>保存游戏</button>" +
        "<button class='class-button-refresh-page' style='float:left;' onclick='classButtonRefreshPageClick()'>刷新页面</button>" +
        "<button class='class-button-refresh-page' style='float:left;' onclick='classButtonVisitShopClick()'>访问商店</button>" +
        "<button class='class-button-refresh-page' style='float:left;' onclick='gotoTrainImmortality()'>进入修炼</button>" +
        "";
    mainHtml += "</div>";
    $("body").append(mainHtml);
}

var refreshThisShop = function () {
    var userTeam = getPageUserTeam();
    userTeam.shop = getInitializeShop();
    classButtonVisitShopClick();
}

var classButtonVisitShopClick = function () {
    var mainHtml = "";
    var userTeam = getPageUserTeam();
    var shop = userTeam.shop;
    mainHtml += "<div><button class='class-button-refresh-page' onclick='refreshThisShop()'>刷新</button></div>" +
        "<table class='class-table-100-percent-width'>"
    mainHtml += "<tr>" +
        "<th>序号</th>" +
        "<th>编号</th>" +
        "<th>分类</th>" +
        "<th>图片</th>" +
        "<th>花费</th>" +
        "<th>增加值</th>" +
        "<th>剩余库存</th>" +
        "<th>操作<br/></th>" +
        "</tr>";
    for (var i = 0; i < shop.products.length; i++) {
        var gift = shop.products[i];
        mainHtml += "<tr>";
        mainHtml += "<td>" + (i + 1) + "</td>";
        mainHtml += "<td>" + gift.id + "</td>";
        mainHtml += "<td>" + gift.category + "</td>";
        mainHtml += "<td>" +
            "<image onclick=\"showPopoutGiftFrameGame(this)\" gift='" + JSON.stringify(gift) + "' style='height:50px;border-radius:6px;' src='image/" + gift.path + "/" + gift.path + "-" + gift.picture + ".jpg' />" +
            "</td>";
        mainHtml += "<td>" + gift.money + "</td>";
        mainHtml += "<td>" + gift.happy + "</td>";
        mainHtml += "<td>" + gift.stock + "</td>";
        mainHtml += "<td><button index='" + i + "' gift='" + JSON.stringify(gift) + "' onclick='buyThisGift(this)'>购买</button></td>";
        mainHtml += "</tr>";
    }
    mainHtml += "</table>";
    $(".class-div-content-other").html(mainHtml);
}

var buyThisGift = function (object) {
    var gift = JSON.parse($(object).attr("gift"));
    var index = $(object).attr("index");
    if (gift.stock <= 0) {
        showAlertFrameGame("没有库存了！");
        return;
    }
    var userCurrentTeam = getUserCurrentTeam();
    if (userCurrentTeam.bankInfo.money < gift.money) {
        showAlertFrameGame("穷逼滚！");
        return;
    }
    var chairman = userCurrentTeam.chairman;
    if (chairman.gifts == undefined) {
        chairman.gifts = {};
    }
    gift.stock = 1;
    if (gift.category == "礼物，加攻击") {
        chairman.atk += gift.happy;
    }
    if (gift.category == "豪车，加防御") {
        chairman.def += gift.happy;
    }
    if (gift.category == "豪宅，加血") {
        chairman.hp += gift.happy;
    }
    // if (chairman.gifts[index] == undefined) {
    //     chairman.gifts[index] = gift;
    // } else {
    //     var giftChairman = chairman.gifts[index];
    //     giftChairman.stock += 1;
    // }
    userCurrentTeam.bankInfo.money -= gift.money;
    $(".class-button-bank-money").html(userCurrentTeam.bankInfo.money);
}

var showPopoutGiftFrameGame = function (object) {
    var gift = JSON.parse($(object).attr("gift"));
    showPopoutFrameGame("" +
        "<div style='margin:30px auto;text-align: center;'><image gift='" + JSON.stringify(gift) + "' style='height:666px;border-radius:6px;' src='image/" + gift.path + "/" + gift.path + "-" + gift.picture + ".jpg' /></div>" +
        "", "1200px", "766px", "10%", "10px", 1, "fixed", 1, 999999, 1);
}

var closeRightClickMenu = function () {
    $(".class-div-right-click-menu").remove();
}

var setGamePositionBuyPlayers = function (positionKey, value) {
    var userTeam = getPageUserTeam();
    if (userTeam.transferMarket == undefined) {
        userTeam.transferMarket = {};
    }
    var positions = positionKey.split("_players_position_");
    var position = positions[1];
    if (position == "0") {
        userTeam.transferMarket.position0 = value;
    }
    if (position == "1") {
        userTeam.transferMarket.position1 = value;
    }
    if (position == "2") {
        userTeam.transferMarket.position2 = value;
    }
    if (position == "3") {
        userTeam.transferMarket.position3 = value;
    }
}

var getGamePositionBuyPlayers = function (positionKey) {
    var userTeam = getPageUserTeam();
    if (userTeam.transferMarket == undefined) {
        userTeam.transferMarket = {};
    }
    var positions = positionKey.split("_players_position_");
    var position = positions[1];
    if (position == "0") {
        return userTeam.transferMarket.position0;
    }
    if (position == "1") {
        return userTeam.transferMarket.position1;
    }
    if (position == "2") {
        return userTeam.transferMarket.position2;
    }
    if (position == "3") {
        return userTeam.transferMarket.position3;
    }
    return undefined;
}

var removeGamePositionBuyPlayers = function (positionKey) {
    var userTeam = getPageUserTeam();
    if (userTeam.transferMarket == undefined) {
        userTeam.transferMarket = {};
    }
    var positions = positionKey.split("_players_position_");
    var position = positions[1];
    if (position == "0") {
        userTeam.transferMarket.position0 = undefined;
    }
    if (position == "1") {
        userTeam.transferMarket.position1 = undefined;
    }
    if (position == "2") {
        userTeam.transferMarket.position2 = undefined;
    }
    if (position == "3") {
        userTeam.transferMarket.position3 = undefined;
    }
    return;
}

var getTeamFromLevelAndId = function (level, teamId) {
    var userTeam = getPageUserTeam();
    if (userTeam.currentTeams[0].teamInfo.level > level) {
        return getTeamFromId(userTeam.lowerTeams, teamId);
    }
    if (userTeam.currentTeams[0].teamInfo.level < level) {
        return getTeamFromId(userTeam.upperTeams, teamId);
    }
    if (userTeam.currentTeams[0].teamInfo.level == level) {
        return getTeamFromId(userTeam.currentTeams, teamId);
    }
}

var getTeamPlayerFormLevelAndTeamIdAndPlayerId = function (level, teamId, playerId) {
    var team = getTeamFromLevelAndId(level, teamId);
    for (var i = 0; i < team.teamPlayers.length; i++) {
        if (playerId == team.teamPlayers[i].id) {
            return team.teamPlayers[i]
        }
    }
    return undefined;
}

var max = function (a, b) {
    return a > b ? a : b;
}

var min = function (a, b) {
    return a < b ? a : b;
}

var showMapQuery = function (query) {
    var url = "https://ditu.baidu.com/search?querytype=s&da_src=shareurl&wd=" + query;
    closePopoutReference();
    var offset = $(".class-div-content-other").offset();
    var mainHtml = "<div " +
        "class='class-div-popout class-div-popout-reference class-div-popout-reference-happy-frame' " +
        "style='border:1px solid #FFFFFF;z-index: 9;position:fixed;top:60px;left:" + offset.left + "px;width:90%;height:766px;background-color:#000000;border-radius:6px;" +
        "' >";
    mainHtml += "<table onclick='closePopout()' class='class-table-100-percent-width'>";
    mainHtml += "<tr><td></td>" +
        "<td class='class-td-button' style='width:36px'><image unbind src='image/common/common-close.png' /></td>" +
        "</tr></table>";
    mainHtml += "<div style='overflow-y: scroll;height:730px;overflow-y: scroll;'>";
    //玩家有赛前打假赛需求。
    mainHtml += "<iframe src='" + url + "' style='width:100%;height:730px;'></iframe>";
    mainHtml += "</div>";
    mainHtml += "</div>";
    $("body").append(mainHtml);
}
