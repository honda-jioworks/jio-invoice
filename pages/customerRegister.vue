<template>
      <div>

            <body>
                  <h1>得意先登録画面を作っていきます</h1>
                  <h2>
                        まずはscriptとかは一旦気にせずラベルとテキストボックスを置くところから始めましょう
                        <div id="name">
                              <span>名称:</span>
                              <input type="text">
                              <button v-on:click="showMessage">会社を検索</button>
                        </div>
                        <div id="kana">
                              <span>フリガナ:</span>
                              <input type="text">
                        </div>
                        <div id="approximately">
                              <span>略称:</span>
                              <input type="text">
                        </div>
                        <div id="search1">
                              <span>検索キー1:</span>
                              <input type="text">
                        </div>
                        <div id="search2">
                              <span>検索キー2:</span>
                              <input type="text">
                        </div>
                        <div id="memo">
                              <span>メモ:</span>
                              <input type="text">
                        </div>
                        <div id="check1">
                              <span><input type="checkbox" id="checkbox" v-model="checked">
                                    入力候補に表示しない</span>
                        </div>
                        <div id="zip">
                              <span>郵便番号:</span>
                              <input type="text" name="zip21" size="4" maxlength="3"> － <input type="text" name="zip22"
                                    size="5" maxlength="4"
                                    onKeyUp="AjaxZip3.zip2addr('zip21','zip22','addr21','addr21');">
                        </div>
                        <div id="address">
                              <span>住所:</span>
                              <input type="text" name="addr31" size="40">
                        </div>
                        <div id="deploy">
                              <span>部署:</span>
                              <div><input type="text"></div>
                              <div><input type="text"></div>
                        </div>
                        <div id="roll">
                              <span>役職:</span>
                              <input type="text">
                        </div>
                        <div id="name">
                              <span>担当者名:</span>
                              <input type="text">
                              <span>敬称:</span>
                              <input type="text">
                        </div>
                        <div id="phone">
                              <span>担当者携帯:</span>
                              <input type="text">
                        </div>
                        <div id="mail">
                              <span>担当者メール:</span>
                              <input type="text">
                        </div>
                        <div id="TEL">
                              <span>TEL:</span>
                              <input type="text">
                        </div>
                        <div id="FAX">
                              <span>FAX:</span>
                              <input type="text">
                        </div>
                        <div id="trade">
                              <v-sheet>
                                    <v-row>
                                          <span>取引区分:</span>
                                          <select v-model="selected">
                                                <option>掛売上</option>
                                                <option>即時売上</option>
                                          </select>
                                    </v-row>
                              </v-sheet>
                        </div>
                        <div id="processing">
                              <span>税処理:</span>
                              <select v-model="selected">
                                    <option>外税</option>
                                    <option>内税</option>
                                    <option>合計請求</option>
                                    <option>税なし</option>
                              </select>
                        </div>
                        <div id="deposit">
                              <span>入金先:</span>
                              <select v-model="selected">
                                    <option>城北信用金庫 上板橘支店(普)</option>
                                    <option>三菱東京UFJ銀行 新宿新都心支店(普)</option>
                                    <option>ジャパンネット銀行 すずめ支店(普)</option>
                                    <option>現金</option>
                                    <option>小口現金</option>
                                    <option>クレジット決済</option>
                                    <option>PayPay銀行 すずめ支店(普)</option>
                              </select>
                        </div>
                        <div id="cut">
                              <span>締日:</span>
                              毎月
                              <select v-model="selected">
                                    <option v-for="n in 28" :key="n">
                                    <option>{{ n }}</option>
                                    </option>>
                                    <option>末</option>>
                              </select>
                              日
                        </div>
                        <div id="cicle">
                              <span>回収サイクル:</span>
                              <select v-model="selected">
                                    <option>当月</option>
                                    <option>翌月</option>
                                    <option>翌々月</option>
                                    <option>3ヶ月先</option>
                                    <option>4ヶ月先</option>
                                    <option>5ヶ月先</option>
                                    <option>6ヶ月先</option>
                              </select>
                              <select v-model="selected">
                                    <option v-for="n in 28" :key="n">
                                    <option>{{ n }}</option>
                                    </option>>
                                    <option>末</option>>
                              </select>
                              日
                              回収
                        </div>
                        <div id="responsible">
                              <span>自社担当者:</span>
                              <select v-model="selected">
                                    <option>指定なし</option>
                              </select>
                        </div>
                        <div id="balance">
                              <span>開始残高:</span>
                              <select v-model="selected">
                                    <option></option>
                              </select>
                              円
                        </div>
                        <div id="ratio">
                              <span>掛率:</span>
                              <select v-model="selected">
                                    <option></option>
                              </select>
                              %
                        </div>
                        <div id="unit">
                              <span>単価区分:</span>
                              <select v-model="selected">
                                    <option>定価(上代)</option>
                                    <option>販売単価1</option>
                                    <option>販売単価2</option>
                                    <option>販売単価3</option>
                                    <option>販売単価4</option>
                                    <option>販売単価5</option>
                              </select>
                        </div>
                        <div id="tax">
                              <span>消費税の端数処理:</span>
                              <select v-model="selected">
                                    <option>基本情報に従う</option>
                                    <option>切り上げ</option>
                                    <option>切り捨て</option>
                                    <option>四捨五入</option>
                              </select>
                        </div>
                        <div id="cal">
                              <span>単価×数量の端数処理:</span>
                              <select v-model="selected">
                                    <option>基本情報に従う</option>
                                    <option>切り上げ</option>
                                    <option>切り捨て</option>
                                    <option>四捨五入</option>
                              </select>
                        </div>
                        <div id="fraction">
                              <span>単価計算の端数処理:</span>
                              <select v-model="selected">
                                    <option>基本情報に従う</option>
                                    <option>切り上げ</option>
                                    <option>切り捨て</option>
                                    <option>四捨五入</option>
                              </select>
                        </div>
                        <div id="check">
                              <span><input type="checkbox" id="checkbox" v-model="checked">
                                    合計請求書で消費税を合算表示する</span>
                        </div>
                        <script src="https://ajaxzip3.github.io/ajaxzip3.js" charset="UTF-8"></script>
                  </h2>
            </body>
      </div>
</template>
