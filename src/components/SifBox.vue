<template>
  <div class="sifbox">
    <div class="content" v-for="(v, k) in content" :key="k">
      <div class="category">
        <p>{{ k }}</p>
        <p>{{ total(k) }}</p>
      </div>
      <div class="subcategory">
        <div v-for="(vv, kk) in content[k]" @click="add(k, kk)" :key="kk">
          <div class="counter">
            <div class="name">{{ kk }}</div>
            <div class="count">{{ vv }}</div>
          </div>
        </div>
      </div>
    </div>
    <div id="reset" @click="reset">
      リセット
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      initData: {
        通常BOX: {
          "400万": 0,
          "200万": 0,
          "120万": 0,
          "40万": 0,
          "10万": 0
        },
        メンバー: {
          "1000万": 0,
          "500万": 0,
          "300万": 0
        },
        グループ: {
          "1000万": 0,
          "500万": 0,
          "300万": 0
        },
        SIS: {
          キッス: 0,
          パフューム: 0,
          リング: 0,
          クロス: 0,
          オーラ: 0,
          チャーム: 0,
          ヒール: 0,
          トリック: 0,
          ヴェール: 0
        },
        スキル餌: {
          R矢澤: 0,
          "アルパカ[茶]": 0,
          ヒフミ: 0,
          SR先生: 0
        },
        経験値餌: {
          "アルパカ[白]": 0,
          R先生: 0
        },
        その他: {
          Rシール: 0,
          友情pt: 0,
          G: 0
        },
        スペシャル: {
          "ピース 8": 0,
          "ピース 9": 0,
          "ピース 10": 0,
          称号: 0,
          部屋: 0,
          専用SIS: 0
        },
        ブレード: {
          600: 0,
          800: 0,
          1200: 0,
          1500: 0,
          1700: 0,
          3600: 0,
          4500: 0,
          5100: 0
        }
      },
      content: {}
    };
  },
  methods: {
    add(key1, key2) {
      this.content[key1][key2]++;
      this.save();
      this.$forceUpdate();
    },
    total(key) {
      return Object.values(this.content[key]).reduce((p, x) => p + x, 0);
    },
    save() {
      localStorage.setItem("sifbox", JSON.stringify(this.content));
    },
    load() {
      let data = JSON.parse(localStorage.getItem("sifbox")) || this.initData;
      this.content = Object.assign(this.initData, data);
      this.$forceUpdate();
    },
    reset() {
      if (confirm("リセット")) {
        localStorage.removeItem("sifbox");
        window.location.reload();
      }
    }
  },
  mounted() {
    this.load();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
body {
  user-select: none;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.sifbox {
  text-align: left;
  margin: 0 auto;
  width: 80%;
}

.content {
  text-align: left;
  &:nth-child(-n + 3) {
    display: inline-block;
  }
  .subcategory {
    display: inline-block;
    vertical-align: top;
    div {
      display: inline-block;
    }
  }
  .category {
    display: inline-block;
    margin-top: 2px;
    margin-left: 2px;
    width: 100px;
    height: 100px;
    border: 1px solid #000;
    border-radius: 12px;
    text-align: center;
    p {
      margin: 0;
      &:first-child {
        margin-top: 30px;
      }
    }
  }
}

.counter {
  display: inline-block;
  position: relative;
  cursor: pointer;
  user-select: none;
  margin-top: 2px;
  margin-left: 2px;
  width: 100px;
  height: 100px;
  border: 1px solid #000;
  border-radius: 12px;
  .name {
    position: absolute;
    bottom: 2px;
    text-align: center;
    width: 100%;
  }
  .count {
    font-size: 24px;
    position: absolute;
    bottom: 36px;
    text-align: center;
    width: 100%;
  }
  &:hover {
    background: #ccc;
  }
}

#reset {
  margin: 50px 0 0 auto;
  width: 100px;
  height: 50px;
  border: 1px solid #f00;
  border-radius: 10px;
  text-align: center;
  line-height: 50px;
  cursor: pointer;
  &:hover {
    color: #fff;
    background: #f00;
  }
}
</style>
