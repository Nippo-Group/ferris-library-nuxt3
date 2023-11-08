<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <elements-text-sub-title>サービス一覧</elements-text-sub-title>
      </v-col>
      <v-col cols="12" md="10" lg="8" xl="6">
        <v-card height="100%">
          <v-card-title> 事項調査 </v-card-title>
          <v-card-text>
            調べものをしていてどの資料を見れば良いのか分からないとき、資料の探し方や、テーマにあったデータベース、検索ツールなどをご紹介します。学部生はMyLibraryからも調査の依頼ができます。
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="10" lg="8" xl="6">
        <v-card height="100%">
          <v-card-title> 所蔵調査 </v-card-title>
          <v-card-text>
            ご希望の資料が当図書館にない時、他の図書館や資料館の所蔵調査をいたします。学部生はMyLibraryにログインして調査の依頼ができます。
          </v-card-text>
          <v-card-actions class="overflow-x-auto">
            <elements-align-elements>
              <elements-btn-dialog-default title="文献複写">
                <template #contents>
                  <div class="text-h6">サービス内容</div>
                  <ul>
                    <li>当館にない文献のコピーを取り寄せることができます。</li>
                    <li>
                      資料名、掲載巻号（雑誌）、ページなどの情報を申込用紙（MyLibrary
                      にログインのうえ入手できます）にご記入の上、レファレンスカウンターにお申し込みください。大学院生・教員はMyLibraryからも申し込みができます。
                    </li>
                  </ul>
                  <div class="text-h6 pt-6">所要期間</div>
                  <p>4日～</p>
                  <div class="text-h6 pt-6">費用</div>
                  <p>コピー代金・送料・手数料等</p>
                </template>
                <template #actions>
                  <elements-btn-my-library></elements-btn-my-library>
                </template>
              </elements-btn-dialog-default>

              <elements-btn-dialog-default title="現物貸借">
                <template #contents>
                  <div class="text-h6 pt-6">サービス内容</div>
                  <ul>
                    <li>
                      当館にない図書を学外の図書館から一定期間借りることができます。
                    </li>
                    <li>
                      申込用紙（MyLibrary
                      にログインのうえ入手できます）にご記入のうえ、レファレンスカウンターにお申し込みください。大学院生・教員はMyLibraryからも申し込みができます。
                    </li>
                    <li>
                      館内でのみ閲覧することができます。館外への持ち出しはできません。
                    </li>
                    <li>
                      その他の利用方法については、所蔵館の規則によって異なります。
                    </li>
                    <li>
                      所蔵館の規定や資料の劣化等により取り寄せができない場合もあります。
                    </li>
                  </ul>
                  <div class="text-h6 pt-6">所要期間</div>
                  <p>4日～</p>
                  <div class="text-h6 pt-6">費用</div>
                  <p>往復送料・手数料等</p>
                </template>
                <template #actions>
                  <elements-btn-my-library></elements-btn-my-library>
                </template>
              </elements-btn-dialog-default>

              <btn-my-library />
            </elements-align-elements>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="12" md="10" lg="8" xl="6">
        <v-card height="100%">
          <v-card-title> 紹介状 </v-card-title>
          <v-card-text>
            他大学の図書館を利用するために必要な紹介状を発行します。
          </v-card-text>
          <v-card-actions class="overflow-x-auto">
            <elements-align-elements>
              <elements-btn-dialog-default title="大学図書館">
                <template #contents>
                  <div class="text-h6 pt-6">注意事項</div>
                  <p>
                    当館からの問い合わせと紹介状が必要です。カウンターに希望の利用日と資料名をお知らせください。資料を借りることはできませんが、館内で閲覧したりコピーしたりすることができます。
                  </p>
                  <p>
                    問い合わせに時間がかかりますので、お早めにお申し込みください。また、先方に直接問い合わせないようお願いいたします。
                  </p>
                  <p>蔵書検索は「CiNii Books」から行ってください。</p>
                </template>
                <template #actions>
                  <elements-btn-open-in-new
                    link="CiNii Books"
                    url="http://ci.nii.ac.jp/books/"
                  ></elements-btn-open-in-new>
                </template>
              </elements-btn-dialog-default>

              <elements-btn-dialog-default title="横浜市立図書館">
                <template #contents>
                  <div class="text-h6 pt-6">注意事項</div>
                  <p>
                    自由に利用することができます。図書館カードを作れば、資料を借りることもできますのでお勧めします。
                  </p>
                  <p>ホームページで開館日などを確認できます。</p>
                  <p>
                    蔵書検索は「横浜市立図書館蔵書検索ページ」から行ってください。
                  </p>
                </template>
                <template #actions>
                  <elements-btn-open-in-new
                    link="横浜市立図書館蔵書検索ページ"
                    url="https://opac.lib.city.yokohama.lg.jp/opac/"
                  ></elements-btn-open-in-new>
                </template>
              </elements-btn-dialog-default>

              <elements-btn-dialog-default title="神奈川県立図書館">
                <template #contents>
                  <div class="text-h6 pt-6">注意事項</div>
                  <p>
                    自由に利用することができます。図書館カードを作れば、資料を借りることもできますのでお勧めします。
                  </p>
                  <p>ホームページで開館日などを確認できます。</p>
                </template>
                <template #actions>
                  <elements-btn-open-in-new
                    link="神奈川県立の図書館"
                    url="https://www.klnet.pref.kanagawa.jp/"
                  ></elements-btn-open-in-new>
                </template>
              </elements-btn-dialog-default>

              <elements-btn-dialog-default title="国立国会図書館">
                <template #contents>
                  <div class="text-h6 pt-6">注意事項</div>
                  <p>
                    自由に利用できますが、閉架式なので直接書架を見ることはできません。利用したい資料を申し出て出納してもらうので、事前に希望の資料を調べてから訪問してください。また、個人への貸出は行っていません。
                  </p>
                  <p>蔵書検索は「国立国会図書館サーチ」から行ってください。</p>
                </template>
                <template #actions>
                  <elements-btn-open-in-new
                    link="国立国会図書館サーチ"
                    url="http://iss.ndl.go.jp/"
                  ></elements-btn-open-in-new>
                </template>
              </elements-btn-dialog-default>
            </elements-align-elements>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="12" md="10" lg="8" xl="6">
        <v-card height="100%">
          <v-card-title> 共通閲覧証 </v-card-title>
          <v-card-text>
            紹介状なしで他大学の図書館を利用できる共通閲覧証を発行します。
          </v-card-text>
          <v-divider />
          <v-card-text>
            下記の共通閲覧証があれば、紹介状なしで加盟大学図書館・機関が利用できます。
          </v-card-text>
          <v-card-actions class="overflow-x-auto">
            <elements-align-elements>
              <elements-btn-dialog-default
                title="神奈川県内大学図書館共通閲覧証"
              >
                <template #contents>
                  <div class="text-h6 pt-6">対象館</div>
                  <p>神奈川県図書館協会加盟の大学図書館</p>
                  <div class="text-h6 pt-6">対象者</div>
                  <p>教員・院生・学部生</p>
                </template>
                <template #actions>
                  <elements-btn-open-in-new
                    link="神奈川県図書館協会"
                    url="http://www.kanagawa-la.jp/link/"
                  ></elements-btn-open-in-new>
                </template>
              </elements-btn-dialog-default>

              <elements-btn-dialog-default title="音楽図書館協議会共通閲覧証">
                <template #contents>
                  <div class="text-h6 pt-6">対象館</div>
                  <p>音楽図書館協議会加盟館</p>
                  <div class="text-h6 pt-6">対象者</div>
                  <p>音楽学部所属の教員・院生・学部生</p>
                </template>
                <template #actions>
                  <elements-btn-open-in-new
                    link="音楽図書館協議会"
                    url="https://mlaj.org/"
                  ></elements-btn-open-in-new>
                </template>
              </elements-btn-dialog-default>
            </elements-align-elements>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="12" md="10" lg="8" xl="6">
        <v-card height="100%">
          <v-card-title>
            横浜市内コンソーシアム加盟大学の図書館を利用する
          </v-card-title>
          <v-card-text>
            横浜市内大学図書館コンソーシアムの加盟館は、原則として学生証又は大学発行の身分証明書を提示して手続きすることで、紹介状なしで館内利用ができます。<br />
            手続き方法、利用できるサービスについては大学によって異なりますので、必ず各館のホームページで条件を確認してください。
          </v-card-text>
          <v-card-actions class="overflow-x-auto">
            <elements-btn-inside
              link="コンソーシアムページへ"
              to="/consortium"
            ></elements-btn-inside>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="12" md="10" lg="8" xl="6">
        <v-card height="100%">
          <v-card-title> ツアー・ガイダンス </v-card-title>
          <v-card-text>
            先生方や学生の皆さんのご要望に応じて、図書館の効率的な使い方をご説明します。
          </v-card-text>
          <v-card-actions class="overflow-x-auto">
            <elements-btn-inside
              link="ツアー・ガイダンスページへ"
              to="/tour"
            ></elements-btn-inside>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
