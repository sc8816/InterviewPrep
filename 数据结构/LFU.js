class LFUCache {
  map = new Map(); // <key, value>
  freqMap = new Map(); //key 到 freq 的映射，就可以快速操作 key 对应的 freq
  minFreq = 0;
  // freq 到 key 列表的映射，我们后文称为 FK 表
  freqToKeys = new Map();

  constructor(capacity) {
    // 当缓存达到容量 capacity 时，则应该在插入新的键值对之前，删除使用频次（后文用 freq 表示）最低的键值对。如果 freq 最低的键值对有多个，则删除其中最旧的那个。
    this.capacity = capacity;
  }

  // put(key, value) 方法插入或修改缓存。如果 key 已存在，则将它对应的值改为 val；如果 key 不存在，则插入键值对 (key, val)
  put(key, value) {
    if (this.map.has(key)) {
      this.map.set(key, value);
      this.increase(key);
      return;
    }
    //容量满了
    if (this.map.size >= this.capacity) {
      //删除最小调用的
      this.removeMinFreq();
    }
    this.map.set(key, value);
    this.freqMap.set(key, 1);
    this.minFreq = 1;
    let quenue = this.freqToKeys.get(1) || [];
    quenue.push(key);
    this.freqToKeys.set(1, quenue);
  }

  // get(key) 方法会去缓存中查询键 key，如果 key 存在，则返回 key 对应的 val，否则返回 -1。
  get(key) {
    if (!this.map.has(key)) return -1;
    this.increase(key);
    return this.map.get(key);
  }

  removeMinFreq() {
    let minKeyList = this.freqToKeys.get(this.minFreq);
    let delKey = minKeyList.shift();
    if (minKeyList.length === 0) {
      this.freqToKeys.delete(delKey);
    }
    this.map.delete(delKey);
    this.freqMap.delete(delKey);
  }

  increase(key) {
    let freq = this.freqMap.get(key);
    this.freqMap.set(key, freq + 1);
    let index = this.freqToKeys.get(freq).findIndex((item) => item === key);
    this.freqToKeys.get(freq).splice(index, 1);
    let freqkeys = freqToKeys.get(freq + 1) || [];
    freqkeys.push(key);
    freqToKeys.set(freq + 1, freqkeys);
    if (freqToKeys.get(freq).length === 0) {
      freqToKeys.remove(freq);
      // 如果这个 freq 恰好是 minFreq，更新 minFreq
      if (freq == this.minFreq) {
        this.minFreq++;
      }
    }
  }
}
