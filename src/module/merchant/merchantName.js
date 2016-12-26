var merchantNames = [
  '永旺展厅',
  '爱品生网店',
  '百盛店',
  '布尼诺玉泉营店',
  '昌平店',
  '朝阳大悦城',
  '翠微店',
  '大金总部店',
  '方庄店',
  '格莱美旗舰店',
  '格莱美玉泉营店',
  '海渔广场旗舰店',
  '汉斯格雅和平里店',
  '好佳益西南四环店',
  '华世隆国际店',
  '华腾国际店',
  '加州水郡店',
  '嘉园益嘉园店',
  '金隅丽港店',
  '凯德MALL大峡谷',
  '刘各庄村店',
  '龙德广场店',
  '卢沟桥农场路店',
  '绿普达-空气治理网店',
  '玫瑰岛西南四环店',
  '南四环旧宫紫郡府店',
  '清华科技园店',
  '双桥南合美国际店',
  '顺义华联店',
  '钛马赫店',
  '通州万达店',
  '万荷美术馆展厅',
  '望京凯德店',
  '西直门凯德mall',
  '辛庄村店',
  '亦庄旗舰店',
  '逸远总店',
  '中航国际背景航空城店',
  '3M-空气净化器北四环店',
  '3M-空气净化器大郊亭店',
  '3M-空气净化器金源店',
  '3M-空气净化器丽泽店',
  '3M-空气净化器十里河店',
  '3M-空气净化器顺义店',
  '3M-空气净化器玉泉营店',
  '3M-软水净水北四环店',
  '3M-软水净水大郊亭店',
  '3M-软水净水金源店',
  '3M-软水净水丽泽店',
  '3M-软水净水十里河店',
  '3M-软水净水顺义店',
  '3M-软水净水玉泉营店',
  '阿波罗卫浴北四环店',
  '阿波罗卫浴十里河店',
  '艾如巢全屋定制来广营店',
  '艾如巢全屋定制玉泉营店',
  '爱家家居西四环店',
  '爱依瑞斯壁纸成寿寺路店',
  '安然壁纸金源店',
  '滨特尔丽泽店',
  '伯艺创展北沙滩店',
  '伯艺创展北四环店',
  '伯艺创展大兴店',
  '伯艺创展大钟寺店',
  '伯艺创展金源店',
  '伯艺创展丽泽店',
  '伯艺创展十里河店',
  '伯艺创展玉泉营店',
  '博洛尼橱柜博洛尼店',
  '博洛尼橱柜来广营店',
  '博洛尼橱柜顺义店',
  '博洛尼鼎成路店',
  '博洛尼家具金源店',
  '博洛尼家具十里河店',
  '博洛尼家具顺义店',
  '布尼诺成寿寺路店',
  '布尼诺大红门店',
  '布尼诺十里河店',
  '布尼诺玉泉营店',
  '布尼诺岳各庄桥店',
  '朝阳大悦城店',
  '道格拉斯北四环店',
  '道格拉斯金源店',
  '道格拉斯丽泽店',
  '道格拉斯十里河店',
  '德尔北沙滩店',
  '德尔北四环店',
  '德尔朝阳路店',
  '德尔大郊亭店',
  '德尔大兴店',
  '德尔大钟寺店',
  '德尔金源店',
  '德尔丽泽店',
  '德尔十里河店',
  '德国爱尔福特成寿寺路店',
  '德国哈姆成寿寺路店',
  '德国哈姆大红门店',
  '德国哈姆十里河店',
  '德国哈姆玉泉营店',
  '德国哈姆岳各庄桥店',
  '德国唯宝北四环店',
  '德国唯宝大郊亭店',
  '德国唯宝大钟寺店',
  '德国唯宝东土城路店',
  '德国唯宝金源店',
  '德国唯宝丽泽店',
  '德国唯宝十里河店',
  '德立八角店',
  '德立北沙滩店',
  '德立北四环店',
  '德立大郊亭店',
  '德立大兴店',
  '德立金源店',
  '德立来广营店',
  '德立丽泽店',
  '德立十里河店',
  '德立顺义店',
  '德立玉泉营店',
  '德立岳各庄桥店',
  '德诺特八角店',
  '德诺特北沙滩店',
  '德诺特成寿寺路店',
  '德诺特大兴店',
  '德诺特顺义店',
  '德诺特玉泉营店',
  '德诺特岳各庄桥店',
  '德维特北沙滩店',
  '德维特岳各庄桥店',
  '邓禄普八角店',
  '邓禄普北四环店',
  '邓禄普成寿寺路店',
  '邓禄普大郊亭店',
  '邓禄普大钟寺店',
  '邓禄普金源店',
  '邓禄普丽泽店',
  '顶固衣帽柜成寿寺路店',
  '顶固衣帽柜大钟寺店',
  '顶固衣帽柜金源店',
  '顶固衣帽柜十里河店',
  '顶固衣帽柜顺义店',
  '顶固衣帽柜玉泉营店',
  '顶固衣帽柜岳各庄桥店',
  '东鹏瓷砖北四环店',
  '东鹏瓷砖大羊房路店',
  '东鹏洁具北四环店',
  '东鹏洁具大羊房路店',
  '杜拉维特八角店',
  '杜拉维特北四环店',
  '杜拉维特大兴店',
  '杜拉维特金源店',
  '杜拉维特十里河店',
  '杜拉维特玉泉营店',
  '法帛壁纸东土城路店',
  '法帛窗帘东土城路店',
  '法恩莎北四环店',
  '法恩莎大羊房路店',
  '凡帝罗八角店',
  '凡帝罗北沙滩店',
  '凡帝罗成寿寺路店',
  '凡帝罗大兴店',
  '凡帝罗顺义店',
  '凡帝罗玉泉营店',
  '凡帝罗岳各庄桥店',
  '凡蒂尼北四环店',
  '凡蒂尼金源店',
  '凡蒂尼十里河店',
  '菲标实木定制大钟寺店',
  '弗朗克门窗丽泽店',
  '弗朗克门窗十里河店',
  '弗朗克门窗顺义店',
  '弗朗克门窗玉泉营店',
  '富得利北四环店',
  '富得利金源店',
  '富得利丽泽店',
  '富莱德家具大钟寺店',
  '高仪北四环店',
  '高仪岳各庄桥店',
  '格莱美八角店',
  '格莱美北沙滩店',
  '格莱美北四环店',
  '格莱美大红门店',
  '格莱美大郊亭店',
  '格莱美大兴店',
  '格莱美大钟寺店',
  '格莱美金源店',
  '格莱美来广营店',
  '格莱美丽泽店',
  '格莱美十里河店',
  '格莱美顺义店',
  '格莱美玉泉营店',
  '格莱美岳各庄桥店',
  '冠珠北四环店',
  '冠珠大羊房路店',
  '海尔网店',
  '汉诺北四环店',
  '汉诺金源店',
  '汉诺十里河店',
  '汉斯格雅八角店',
  '汉斯格雅北四环店',
  '汉斯格雅大兴店',
  '汉斯格雅大羊房路店',
  '汉斯格雅大钟寺店',
  '汉斯格雅金源店',
  '汉斯格雅丽泽店',
  '汉斯格雅十里河店',
  '汉斯格雅玉泉营店',
  '好佳益八角店',
  '好佳益金四季店',
  '好佳益九龙店',
  '好佳益来广营店',
  '好佳益立水桥店',
  '好佳益丽泽店',
  '好佳益马连道店',
  '好佳益十里河店',
  '好佳益衣帽间八角店',
  '好佳益衣帽间丽泽店',
  '好佳益玉泉营店',
  '好莱客原态全屋定制北四环店',
  '好莱客原态全屋定制十里河店',
  '合美国际店',
  '和睦家壁布成寿寺路店',
  '华狮龙北四环店',
  '华狮龙大兴店',
  '华狮龙丽泽店',
  '华狮龙顺义店',
  '惠达大厦店',
  '霍尔茨北四环店',
  '霍尔茨成寿寺路店',
  '霍尔茨大红门店',
  '霍尔茨大兴店',
  '霍尔茨大钟寺店',
  '霍尔茨金源店',
  '霍尔茨丽泽店',
  '霍尔茨十里河店',
  '霍尔茨顺义店',
  '霍尔茨玉泉营店',
  '吉事多金源店',
  '加西亚大钟寺店',
  '嘉泓博洛尼店',
  '简一北四环店',
  '简一十里河店',
  '金牌北沙滩店',
  '金牌北四环店',
  '金牌大郊亭店',
  '金牌大兴店',
  '金牌大钟寺店',
  '金牌洁具八角店',
  '金牌洁具北四环店',
  '金牌洁具成寿寺路店',
  '金牌洁具大钟寺店',
  '金牌洁具十里河店',
  '金牌丽泽店',
  '金牌十里河店',
  '金牌玉泉营店',
  '金牌岳各庄桥店',
  '金狮王陶瓷大羊房路店',
  '金意陶北四环店',
  '金意陶大兴店',
  '金意陶金源店',
  '金意陶丽泽店',
  '金意陶顺义店',
  '金意陶玉泉营店',
  '景畅大郊亭店',
  '久盛复合地板北四环店',
  '久盛复合地板金源店',
  '久盛复合地板丽泽店',
  '久盛复合地板十里河店',
  '久盛复合地板玉泉营店',
  '久盛实木地板北四环店',
  '久盛实木地板金源店',
  '久盛实木地板丽泽店',
  '久盛实木地板十里河店',
  '久盛实木地板玉泉营店',
  '凯诺八角店',
  '凯诺北四环店',
  '凯诺大兴店',
  '凯诺金源店',
  '凯诺丽泽店',
  '凯诺十里河店',
  '凯诺顺义店',
  '凯诺玉泉营店',
  '康耐登北沙滩店',
  '科勒洁具北四环店',
  '科勒整体厨房北四环店',
  '科勒整体厨房玉泉营店',
  '快乐事金源店',
  '拉芙堡来广营店',
  '莱克斯瑞丽泽店',
  '兰鼎犀八角店',
  '兰鼎犀北四环店',
  '兰鼎犀成寿寺路店',
  '兰鼎犀大钟寺店',
  '兰鼎犀金源店',
  '兰鼎犀十里河店',
  '朗斯北沙滩店',
  '朗斯北四环店',
  '朗斯大郊亭店',
  '朗斯大钟寺店',
  '朗斯金源店',
  '朗斯丽泽店',
  '朗斯玉泉营店',
  '浪鲸八角店',
  '浪鲸北四环店',
  '浪鲸金源店',
  '浪鲸丽泽店',
  '浪鲸十里河店',
  '浪鲸顺义店',
  '浪鲸玉泉营店',
  '乐家八角店',
  '乐家北四环店',
  '乐家大郊亭店',
  '乐家大兴店',
  '乐家大羊房路店',
  '乐家金源店',
  '乐家丽泽店',
  '乐家十里河店',
  '乐家顺义店',
  '乐家玉泉营店',
  '六星来广营店',
  '龙德广场店',
  '绿盾北四环店',
  '绿盾大兴店',
  '绿盾金源店',
  '绿盾丽泽店',
  '绿盾顺义店',
  '绿盾玉泉营店',
  '罗马利奥大羊房路店',
  '马可波罗八角店',
  '马可波罗北沙滩店',
  '马可波罗北四环店',
  '马可波罗朝阳路店',
  '马可波罗大郊亭店',
  '马可波罗大兴店',
  '马可波罗大羊房路店',
  '马可波罗大钟寺店',
  '马可波罗金源店',
  '马可波罗丽泽店',
  '马可波罗十里河店',
  '马可波罗玉泉营店',
  '马可波罗岳各庄桥店',
  '芒果北四环店',
  '芒果金源店',
  '芒果十里河店',
  '玫瑰岛北沙滩店',
  '玫瑰岛大钟寺店',
  '玫瑰岛金四季店',
  '玫瑰岛金源店',
  '玫瑰岛九龙店',
  '玫瑰岛来广营店',
  '玫瑰岛立水桥店',
  '玫瑰岛丽泽店',
  '玫瑰岛十里河店',
  '玫瑰岛玉泉营店',
  '美标大钟寺店',
  '蒙娜丽莎八角店',
  '蒙娜丽莎北四环店',
  '蒙娜丽莎大郊亭店',
  '蒙娜丽莎大羊房路店',
  '蒙娜丽莎金源店',
  '蒙娜丽莎丽泽店',
  '蒙娜丽莎十里河店',
  '蒙娜丽莎顺义店',
  '蒙娜丽莎玉泉营店',
  '名族来广营店',
  '明禾吉利北四环店',
  '明禾吉利金源店',
  '明禾吉利十里河店',
  '明禾吉利玉泉营店',
  '摩兰北四环店',
  '摩兰顺义店',
  '尼特大郊亭店',
  '诺贝尔瓷砖北沙滩店',
  '诺贝尔瓷砖北四环店',
  '诺贝尔瓷砖来广营店',
  '欧宝北沙滩店',
  '欧宝成寿寺路店',
  '欧宝大红门店',
  '欧宝定慧桥店',
  '欧宝十里河店',
  '欧宝石景山店',
  '欧宝顺义店',
  '欧宝玉泉营店',
  '欧斯宝北四环店',
  '欧斯宝金源店',
  '欧斯宝丽泽店',
  '欧斯宝十里河店',
  '欧斯宝玉泉营店',
  '仁贵和岳各庄桥店',
  '荣麟·槟榔北四环店',
  '荣麟·槟榔成寿寺路店',
  '荣麟·槟榔大郊亭店',
  '荣麟·槟榔大兴店',
  '荣麟·槟榔金源店',
  '荣麟·槟榔丽泽店',
  '荣麟·槟榔十里河店',
  '荣麟·槟榔玉泉营店',
  '荣麟·槟榔岳各庄桥店',
  '荣麟·京瓷北四环店',
  '荣麟·京瓷大郊亭店',
  '荣麟·京瓷金源店',
  '荣麟·京瓷丽泽店',
  '荣麟·京瓷玉泉营店',
  '荣麟·京瓷岳各庄桥店',
  '荣麟·梧桐大郊亭店',
  '荣麟·梧桐金源店',
  '荣麟·梧桐丽泽店',
  '荣麟·梧桐玉泉营店',
  '塞尚金源店',
  '三力宏鑫-楼梯大钟寺店',
  '三力宏鑫-木门大钟寺店',
  '三菱净水博洛尼店',
  '三菱净水来广营店',
  '生活家北四环店',
  '生活家大钟寺店',
  '生活家丽泽店',
  '生活家十里河店',
  '生活家玉泉营店',
  '圣象北四环店',
  '圣象博洛尼店',
  '圣象朝阳路店',
  '圣象大郊亭店',
  '圣象大钟寺店',
  '圣象金源店',
  '圣象丽泽店',
  '圣象玉泉营店',
  '圣象岳各庄桥店',
  '十佳散热器成寿寺路店',
  '十里河高力灯具城',
  '世奥中心北四环店',
  '顺义店',
  '顺义华联店',
  '斯米克北四环店',
  '斯米克金源店',
  '斯米克十里河店',
  '斯米克顺义店',
  '斯米克玉泉营店',
  '索弗仑八角店',
  '索弗仑北四环店',
  '索弗仑成寿寺路店',
  '索弗仑大兴店',
  '索弗仑大钟寺店',
  '索弗仑金源店',
  '索弗仑丽泽店',
  '索弗仑十里河店',
  '索弗仑顺义店',
  '索弗仑玉泉营店',
  '陶一郎大红门店',
  '陶一郎大钟寺店',
  '陶一郎十里河店',
  '特佳北四环店',
  '特佳玉泉营店',
  '天格北四环店',
  '天格丽泽店',
  '天格十里河店',
  '天格玉泉营店',
  '瓦伦蒂诺金源店',
  '万家灯火昌平店',
  '万嘉金诺德北沙滩店',
  '万嘉金诺德成寿寺路店',
  '万嘉金诺德大兴店',
  '万嘉金诺德顺义店',
  '万嘉金诺德玉泉营店',
  '望京凯德店',
  '威兹帕克北四环店',
  '沃伦北沙滩店',
  '沃伦成寿寺路店',
  '沃伦大郊亭店',
  '沃伦大兴店',
  '沃伦大钟寺店',
  '沃伦定慧桥店',
  '席梦思八角店',
  '席梦思北四环店',
  '席梦思成寿寺路店',
  '席梦思大郊亭店',
  '席梦思大钟寺店',
  '席梦思金源店',
  '席梦思丽泽店',
  '席梦思十里河店',
  '席梦思玉泉营店',
  '西红门店',
  '西环广场店',
  '旭格博洛尼店',
  '伊格瑞美成寿寺路店',
  '伊翎五金北四环店',
  '伊翎五金金源店',
  '伊翎五金十里河店',
  '优米家居北沙滩店',
  '优米家居岳各庄桥店',
  '友邦北四环店',
  '友邦大兴店',
  '友邦大钟寺店',
  '友邦金源店',
  '友邦丽泽店',
  '友邦十里河店',
  '友邦玉泉营店',
  '友邦岳各庄桥店',
  '蜘蛛北四环店',
  '涿州玫瑰大街尚品宅配',
  '涿州钻石广场尚品宅配',
  '综益窗帘博洛尼店',
  'A.O.史密斯-地暖北沙滩店',
  'A.O.史密斯-地暖北四环店',
  'A.O.史密斯-空气净化器北沙滩店',
  'A.O.史密斯-空气净化器北四环店',
  'A.O.史密斯-全屋净水北沙滩店',
  'A.O.史密斯-全屋净水北四环店',
  'A.O.史密斯-热水器北沙滩店',
  'A.O.史密斯-热水器北四环店',
  'A.O.史密斯大钟寺店',
  'ASNAGHI博洛尼店',
  'BIANCHINI博洛尼店',
  'BRUNO博洛尼店',
  'Daytona博洛尼店',
  'EZIO BELLOTTI博洛尼店',
  'FRANCESCO博洛尼店',
  'GENUS博洛尼店',
  'GURIAN博洛尼店',
  'L&D北四环店',
  'L&D大羊房路店',
  'MEDEA博洛尼店',
  'MERONI博洛尼店',
  'Pitti博洛尼店',
  'RAMPOLDI博洛尼店',
  'ROBERTO博洛尼店',
  'SAVIO博洛尼店',
  'THG洁具北四环店',
  'THG洁具大郊亭店',
  'THG洁具金源店',
  'ULIVI博洛尼店',
  'viega五金北四环店',
  'viega五金大钟寺店',
  'viega五金金源店',
  'viega五金丽泽店',
  'viega五金十里河店',
  'VITTORIO博洛尼店'
]

module.exports = merchantNames