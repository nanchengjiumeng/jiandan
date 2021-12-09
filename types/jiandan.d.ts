declare function 边走边打2(mapId: string, x: number, y: number, dis: number): boolean;
declare function 等待(time: number): void
declare function 对话(npcName: string): void
declare function 坐标对话(x: number, y: number): void
declare function 放入物品(itembox: number, itemName: string): void
declare function 喊话(content: string): void
declare function 合成命令(cmd: string, content: string): void
declare function 开始挂机(): void;
declare function 开始跑酷(range: number, itv: number): void
declare function 开始泡点(): void
declare function 开始挖矿(): void
declare function 买(itemName: string, num: number, itv: number): void
declare function 买(itemName: string, num: number, oncenum: number, itv: number): void
declare function 买装备(itemName: string): void
declare function 卖(...stdmode: number[]): void
declare function 存(itemName: string, itv: number): void
declare function 存(...index: number[]): void
declare function 商铺购买(itemName: string, buytype: number, num: number): void
declare function 拾取(): void
declare function 使用技能(skillName: string, x?: number, y?: number): void
declare function 使用物品(itemName: string): boolean
declare function 使用装备(itemName: string, equipmentindex: number): boolean
declare function 脱装备(equipmentindex: number): void
declare function 刷新包裹(): void
declare function 修理(index: number): void
declare function 全部修理(): void
declare function 全部特修(): void
declare function 选择(cmd: string): void
declare function 选择(x: number, y: number): void
declare function 移动到范围2(mapid: string, x: number, y: number, range: number): void
declare function 移动到地图2(mapid: string): void
declare function 游戏菜单(menu: number): void
declare function 丢弃(name?: string, itv?: number): void
declare function 朝向(dir: number): void
declare function 投放(itemName: string): void
declare function 答题(txt: string): void
declare function 小退重进(): void
declare function 小退(): void
declare function 获取NPC对话内容(): string
declare function 获取地图(): string
declare function 获取地图id(): string
declare function 获取对话框内容(): string
declare function 监控公告(open: boolean, keyword: string): void
declare function 获取公告(): string
declare function 更新怪物数组(): void
declare function 获取怪物数量(): number
declare function 获取指定怪物信息(index: number, attribute: number): number
declare function 查找怪物(monsterName: string): 0 | 1
declare function 获取技能信息(skillName: string, attribute: number): void // 2=技能等级
declare function 获取主号信息(attribute: number): number
declare function 获取装备信息(index: number, attribute: number): number
declare function 查找包裹物品(itemName: string): number
declare function 获取包裹物品信息(index: number, attr: number): number
declare function 获取骰子点数(idx: number): number
declare function 是否需要存(): boolean
declare function 是否需要卖(...stdmode: number[]): boolean
declare function 是否需要修理(persistLowPercent: number, ...equipmentindex: number[]): void
declare function 是否需要答题(): boolean
declare function 获取倒计时(): string
declare function 清空地图安全区(): void
declare function 添加地图安全区(mapId: string, minx: number, miny: number, maxx: number, maxy: number, pass: boolean): void
declare function 清空地图出口(): void
declare function 添加地图出口(mapId: string, x: number, y: number, nextMapId: string, door: boolean): void
declare function 设置来回挂机路线(): void
declare function 设置环状挂机路线(): void
declare function 添加挂机路线点2(mapId: string, x: number, y: number, dis: number): void
declare function 清空用户检测(): void
declare function 设置用户检测(functionName: string, itv: number): number
declare function 清空周知物品(): void
declare function 添加周知物品(itemName: string, items: string): void
declare function 设置穿人穿怪(enable: boolean): void
declare function 召唤英雄(): void
declare function 收回英雄(): void
declare function 传英雄(itemName: string): void
declare function 鼠标移动到(x: number, y: number): void
declare function 单击(): void
declare function 右击(): void
declare function 按键(key: number, ctrl: boolean, alt: boolean): void
declare function 输入字符(c: string): void
declare function 播放声音(file: string): void
declare function 执行脚本(file: string): void
declare function 抛出异常(msg: string): void
declare function ReadInt(addr: number, size?: number): void
declare function ReadString(addr: number, len?: number): void
declare function 调试打印(msg: any): void
declare function 输出日志(log: any): void
