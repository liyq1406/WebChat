//金花manager消息
JINHUA_MGR_ID = 0x00680000;
//金花manager消息v4
JINHUA_MGR_ID_V4 = 0x02680000;
//比赛
JINHUA_MATCH_ID = 0X00230000;

//3.10扎金花个人信息消息 (JINHUA_MGR_USER_INFO）
JINHUA_MGR_USER_INFO = JINHUA_MGR_ID_V4 + 10;
//3.05扎金花相关配置请求(JINHUA_MGR_SETTING）
JINHUA_MGR_SETTING = JINHUA_MGR_ID_V4 + 5;
//3.26扎金花每日领工资面板信息 (JINHUA_MGR_DAILY_SALARY）
JINHUA_MGR_DAILY_SALARY = JINHUA_MGR_ID_V4 + 26;

//金花房间消息—快速开始(JHID_QUICK_START)
JHID_QUICK_START = JINHUA_ROOM_ID + 7;

//金花请求破产送金信息(JINHUA_MGR_REVIVE_INFO)
JINHUA_MGR_REVIVE_INFO = JINHUA_MGR_ID + 1;
//金花请求破产送金 (JINHUA_MGR _REVIVE)
JINHUA_MGR_REVIVE = JINHUA_MGR_ID + 2;
//3.03扎金花公告记录 (JINHUA_MGR_NOTICE）
JINHUA_MGR_NOTICE = JINHUA_MGR_ID + 3;
//3.12金花VIP等级信息 (JINHUA_MGR_VIP_INFO）
JINHUA_MGR_VIP_INFO = JINHUA_MGR_ID + 12;
//金花玩家登录请求领节日礼物 (JINHUA_MGR_JH_ACTIVITY）
JINHUA_MGR_JH_ACTIVITY = JINHUA_MGR_ID + 17;
//金花领取好友签到奖励 (JINHUA_MGR_SIGN_FRIEND_REWARD）
JINHUA_MGR_SIGN_FRIEND_REWARD = JINHUA_MGR_ID + 19;
//扎金花领取每日工资 (JINHUA_MGR_GET_SALARY）
JINHUA_MGR_GET_SALARY = JINHUA_MGR_ID + 27;
//扎金花好友是否有红点 (JINHUA_MGR_FRIEND_HAVE_REDP）
JINHUA_MGR_FRIEND_HAVE_REDP = JINHUA_MGR_ID + 33;
//3.46金花背包V2(JINHUA_MGR_BACKPACK_ITEMS_V2）
JINHUA_MGR_BACKPACK_ITEMS_V2 = JINHUA_MGR_ID + 46;

//金花牌桌消息—准备(JHID_READY)
JHID_READY = JINHUA_GAME_ID + 2
//2.45保险箱info (JHID_STRONG_BOX_INFO)
JHID_STRONG_BOX_INFO = JINHUA_GAME_ID + 45;
//2.46保险箱存钱(JHID_SAVE_TAKE_STRONG_BOX_COIN)
JHID_SAVE_TAKE_STRONG_BOX_COIN = JINHUA_GAME_ID + 46;
//3.08扎金花好友列表 (JINHUA_MGR_FRIEND_LIST）
JINHUA_MGR_FRIEND_LIST = JINHUA_MGR_ID_V4 + 8;
//3.25扎金花陌生人列表 (JINHUA_MGR_STRANGER_LIST）
JINHUA_MGR_STRANGER_LIST = JINHUA_MGR_ID_V4 + 25;
//3.32扎金花追踪列表 (JINHUA_MGR_TRACE_LIST）
JINHUA_MGR_TRACE_LIST = JINHUA_MGR_ID_V4 + 32;
//2.39金花牌桌消息—领取在线时长奖励(JHID_GET_ONLINE_REWARD)
JHID_GET_ONLINE_REWARD = JINHUA_GAME_ID_V4 + 39;
//扎金花主页活动 (JINHUA_MGR_INDEX_ACTIVITY）
JINHUA_MGR_INDEX_ACTIVITY = JINHUA_MGR_ID_V4 + 48;
//扎金花充值返利相关信息 (JINHUA_MGR_RECHARGE_REBATE_INFO）
JINHUA_MGR_RECHARGE_REBATE_INFO = JINHUA_MGR_ID + 28;
////金花房间列表
//JINHUA_ROOMID_ROOM_LIST = JINHUA_ROOM_ID_V4 + 1;

/*************金花牌桌消息*********************/
//金花牌桌消息--牌桌同步(JHID_TABLE_SYNC)
JHID_TABLE_SYNC = JINHUA_GAME_ID_V4 + 1;
//2.40金花房间消息—查看宝盒进度信息
JHID_GET_BAOHE_STEP_INFO = JINHUA_GAME_ID + 40;

/**************金花房间列表********************/
JINHUA_ROOMID_ROOM_LIST = JINHUA_ROOM_ID_V4 + 1;
//进入房间
JHID_ENTER_ROOM = JINHUA_ROOM_ID + 2;
//扎金花房间消息//坐下(JHID_SIT_DOWN)
JHID_SIT_DOWN = JINHUA_ROOM_ID_V4 + 3;
//金花房间消息—站起(JHID_STAND_UP)
JHID_STAND_UP = JINHUA_ROOM_ID + 4;
//3.43扎金花自建房间信息(JINHUA_MGR_BUILD_TABLE_INFO）
JINHUA_MGR_BUILD_TABLE_INFO = JINHUA_MGR_ID + 43;
//金花房间消息--退出牌桌(JHID_QUIT_TABLE)
JHID_QUIT_TABLE = JINHUA_ROOM_ID + 5;
//金花牌桌消息—发牌(JHID_INIT_CARDS)
JHID_INIT_CARDS = JINHUA_GAME_ID_V4 + 3;
//金花牌桌消息—看牌(JHID_LOOK_CARDS)
JHID_LOOK_CARDS = JINHUA_GAME_ID_V4 + 4;
//金花牌桌消息—弃牌(JHID_DISCARD)
JHID_DISCARD = JINHUA_GAME_ID_V4 + 5;
//金花牌桌消息—下注加注(JHID_BET)
JHID_BET = JINHUA_GAME_ID_V4 + 6;
//金花牌桌消息—比牌(JHID_PK)
JHID_PK = JINHUA_GAME_ID_V4 + 7;
//金花牌桌消息—开牌(JHID_SHOW_CARDS)
JHID_SHOW_CARDS = JINHUA_GAME_ID_V4 + 8;
//金花牌桌消息—牌桌结果(JHID_GAME_RESULT)
JHID_GAME_RESULT = JINHUA_GAME_ID_V4 + 9;
//金花牌桌消息—聊天(JHID_CHAT)
JHID_CHAT = JINHUA_GAME_ID_V4 + 11;
//23.13 旁观比赛牌桌 （JINHUA_LOOK_ON_TABLE）
JINHUA_LOOK_ON_TABLE = JINHUA_MATCH_ID + 13;