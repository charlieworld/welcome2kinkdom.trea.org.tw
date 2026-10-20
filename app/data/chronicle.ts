// Source: 台灣BDSM社群大紀事及年表 (Google Sheet maintained by the site owner). Order follows the sheet.
// Generated from a CSV export of the sheet; every row is kept so the display threshold can change later.

export interface ChronicleDate {
  year: number
  /** 1–12; missing when the sheet leaves it empty or marks it "?". */
  month?: number
  day?: number
}

export interface ChronicleRef {
  label?: string
  url: string
}

export interface ChronicleEvent {
  /** Editorial weight from the sheet: 3, 6, 9 or 15. */
  importance: number
  start: ChronicleDate
  end?: ChronicleDate
  types: string[]
  summary: string
  detail?: string
  org?: string
  place?: string
  refs: ChronicleRef[]
  /** Internal editorial note; never rendered. */
  note?: string
}

/** Events at or above this importance are shown on the page. */
export const SHOW_THRESHOLD = 9
/** Events at this importance get highlighted; they will later get supplementary write-ups. */
export const HIGHLIGHT_IMPORTANCE = 15

export const events: readonly ChronicleEvent[] = [
  { importance: 3, start: { year: 1999, month: 10, day: 8 }, types: ['網路平台'], summary: '奇摩推出奇摩家族', detail: '許多奇摩家族成為性少數實踐者找到同好的途徑', refs: [{ url: 'https://time.udn.com/udntime/story/122835/6898157' }] },
  { importance: 9, start: { year: 2000 }, types: ['網路平台'], summary: 'KKCity性版・花魁藝色館開館', detail: '宣言「打破污名，重建性權」', refs: [{ url: 'https://open.spotify.com/episode/1NnkbcBdYERtV9MsTrD7JU' }], note: '天龍古堡？待考據' },
  { importance: 15, start: { year: 2001, month: 2, day: 6 }, types: ['新聞媒體', '社會事件'], summary: '同志箱屍案', detail: '一名男同志「虐犬」與網友相約進行窒息式性愛時不慎失手造成對方死亡，而將對方裝入行李箱棄置，引發社會輿論譁然、媒體大做文章事件', refs: [] },
  { importance: 3, start: { year: 2003 }, types: ['社會事件'], summary: '兒童及少年福利與權益保障法公告', refs: [] },
  { importance: 3, start: { year: 2003 }, types: ['網路'], summary: '無名小站推出網誌及相簿功能', refs: [{ url: 'https://taiwan.md/technology/%E5%8F%B0%E7%81%A3%E7%B6%B2%E8%B7%AF%E7%A4%BE%E7%BE%A4%E9%81%B7%E5%BE%99%E5%8F%B2/' }] },
  { importance: 15, start: { year: 2003, month: 11, day: 1 }, types: ['活動'], summary: '2003年第四屆台北同玩節舉辦第一屆同志遊行', place: '二二八公園到西門町紅樓', refs: [{ url: 'https://www.facebook.com/Taiwan.LGBT.Pride/photos/%E5%8D%81%E5%85%89%E9%9A%A7%E9%81%93%E7%AC%AC%E4%B8%80%E5%B1%86%E5%90%8C%E5%BF%97%E9%81%8A%E8%A1%8C-the-1st-taiwan-lgbt-pride2003%E5%B9%B4%E7%AC%AC%E4%B8%80%E5%B1%86%E5%8F%B0%E7%81%A3%E5%90%8C%E5%BF%97%E9%81%8A%E8%A1%8C%E7%94%B1%E5%8F%B0%E7%81%A3%E5%90%8C%E5%BF%97%E8%AB%AE%E8%A9%A2%E7%86%B1%E7%B7%9A%E8%88%89%E8%BE%A6%E7%82%BA%E7%95%B6%E5%B9%B4%E5%8F%B0%E5%8C%97%E5%90%8C%E7%8E%A9%E7%AF%80%E6%AD%8C%E8%88%9E%E8%B8%A9%E8%A1%97%E5%90%8C%E5%9C%A8%E8%A5%BF%E9%96%80%E7%9A%84%E4%B8%BB/10151281427540586/' }] },
  { importance: 3, start: { year: 2004, month: 4 }, types: ['網路'], summary: '花魁版聚飯店大派對', refs: [{ url: 'https://www.bdsmtw.com/2011/01/pots_libido/' }] },
  { importance: 3, start: { year: 2004, month: 4, day: 16 }, end: { year: 2004, month: 4, day: 18 }, types: ['表演'], summary: '黃鐵軍&臨界點劇象錄「在夢裡醒著，在痛裡快樂」演出', place: '白水藝文空間', refs: [] },
  { importance: 3, start: { year: 2004, month: 5 }, types: ['組織'], summary: '皮繩愉虐邦第一次會議', refs: [] },
  { importance: 9, start: { year: 2004, month: 6, day: 12 }, types: ['活動'], summary: '皮繩愉虐邦第一次Munch（第一個追溯得到歷史紀錄的ＢＤＳＭ公開活動，歡迎提出更多史料讓我們知道）', org: '皮繩愉虐邦', refs: [{ url: 'https://www.bdsmtw.com/2004/06/munch-0406-ning/' }, { url: 'https://vocus.cc/article/66c735bcfd89780001b6b9f3' }] },
  { importance: 3, start: { year: 2004, month: 7, day: 16 }, types: ['組織'], summary: '皮繩愉虐邦正式成立', refs: [] },
  { importance: 3, start: { year: 2004, month: 8, day: 26 }, types: ['法規', '社會事件'], summary: '《出版品及錄影節目帶分級辦法》公布', refs: [{ url: 'https://www.rootlaw.com.tw/LawContent.aspx?LawID=A040150040001100-0940401' }] },
  { importance: 3, start: { year: 2004, month: 11, day: 6 }, types: [], summary: '2004 台灣同志遊行「喚起公民意識」', detail: '皮繩愉虐邦第一次現身同志遊行', refs: [{ url: 'https://www.bdsmtw.com/category/issues/issue0410/' }] },
  // 試算表結束欄位為 年份=4、月份=23（欄位錯位），解讀為 2005.4.23
  { importance: 9, start: { year: 2005, month: 4, day: 22 }, end: { year: 2005, month: 4, day: 23 }, types: ['表演', '活動'], summary: '2005 夜色繩艷', detail: '邀請明智神凪來台演出', org: '皮繩愉虐邦', place: '白水藝文空間', refs: [{ url: 'https://www.bdsmtw.com/category/issues/issue0504/' }] },
  { importance: 3, start: { year: 2005, month: 9 }, types: ['表演'], summary: '妮可女王自縛吊演出《舞動繩姬》', refs: [] },
  { importance: 3, start: { year: 2005, month: 10, day: 1 }, types: [], summary: '2005 台灣同志遊行「同心協力101」', refs: [] },
  { importance: 9, start: { year: 2006, month: 1, day: 25 }, types: ['出版刊物'], summary: '《皮繩愉虐邦》同名書籍由性林文化出版', detail: '本書記錄了台灣BDSM社群的產生與集結', org: '皮繩愉虐邦', refs: [] },
  { importance: 3, start: { year: 2006, month: 9, day: 30 }, types: ['遊行'], summary: '2006 台灣同志遊行「一同去家遊Go Together」', refs: [] },
  { importance: 15, start: { year: 2006, month: 10, day: 26 }, types: ['法規', '社會事件'], summary: '釋字第617號', detail: '定義硬蕊猥褻物品', refs: [] },
  // 試算表原值 2026，疑為筆誤
  { importance: 9, start: { year: 2006, month: 12, day: 1 }, end: { year: 2006, month: 12, day: 3 }, types: ['表演', '活動'], summary: '2006 ˙冬˙夜色繩艷', org: '皮繩愉虐邦', refs: [{ url: 'https://www.coolloud.org.tw/node/59408' }] },
  { importance: 3, start: { year: 2007, month: 4, day: 4 }, types: ['社會事件'], summary: '雅虎奇摩關閉聊天室', refs: [] },
  { importance: 3, start: { year: 2007, month: 10, day: 13 }, types: ['遊行'], summary: '2007 台灣同志遊行「彩虹有夠力」', refs: [] },
  { importance: 3, start: { year: 2008, month: 9, day: 27 }, types: ['遊行'], summary: '2008 台灣同志遊行「驕傲向前行Run the Rainbow Way」', refs: [] },
  { importance: 3, start: { year: 2009, month: 8, day: 1 }, types: ['表演'], summary: '2009第一屆台北愉虐節', refs: [{ label: '2009第一屆台北愉虐節—愉悅x逾越x愉虐 正式起跑!', url: 'https://www.coolloud.org.tw/node/43673' }, { url: 'https://www.bdsmtw.com/category/issues/2009tpsmfes/' }] },
  { importance: 3, start: { year: 2009, month: 10, day: 31 }, types: ['遊行'], summary: '2009 台灣同志遊行「同志愛很大 Love out loud」', refs: [] },
  { importance: 3, start: { year: 2009 }, types: ['社會事件'], summary: 'Facebook在開始成為當紅社群媒體', detail: '由於開心農場推出，Facebook在台灣引發註冊潮', refs: [] },
  { importance: 15, start: { year: 2010, month: 4, day: 30 }, types: ['出版刊物'], summary: '《軍犬》實體小說由基本書坊出版', refs: [] },
  { importance: 3, start: { year: 2010, month: 10, day: 30 }, types: ['遊行'], summary: '2010 台灣同志遊行「投同志政策一票 Out and Vote 」', refs: [] },
  { importance: 9, start: { year: 2011, month: 1, day: 8 }, types: ['活動'], summary: '皮繩脫殼日 BDSM Talk Day開始於每月第二個週六固定舉辦', place: '直走咖啡', refs: [{ url: 'https://www.bdsmtw.com/2010/12/bdsm_talk_day/' }] },
  { importance: 9, start: { year: 2011, month: 4 }, types: ['組織'], summary: '皮繩愉虐邦劇團正式經台北市政府文化局核准立案', refs: [] },
  { importance: 9, start: { year: 2011, month: 5, day: 4 }, types: ['出版刊物'], summary: '《12P情慾相談室》由基本書坊出版', detail: 'ISBN: 9789866474248', refs: [] },
  { importance: 15, start: { year: 2011, month: 6, day: 9 }, types: ['新聞媒體'], summary: '壹週刊偷拍皮繩愉虐邦 《緊縛繩宴》', org: '皮繩愉虐邦', place: '卡米地俱樂部', refs: [{ label: '拒絕偷拍！還我「猥褻」的權力！──針對壹週刊偷拍事件之聲明稿', url: 'https://www.coolloud.org.tw/node/62792' }, { label: '皮繩愉虐邦 敬覆 壹週刊 之公開信：沒有不堪入目的文化，只有不堪入目的報導', url: 'https://www.coolloud.org.tw/node/66822' }] },
  { importance: 3, start: { year: 2011, month: 6 }, types: ['空間'], summary: 'Commander 41 紅樓司令開幕', refs: [] },
  { importance: 3, start: { year: 2011, month: 8, day: 28 }, end: { year: 2011, month: 9, day: 10 }, types: ['表演'], summary: '第四屆臺北藝穗節，皮繩愉虐邦表演「你就是SM片最佳男女主角!」、「緊縛調教室」', refs: [] },
  { importance: 3, start: { year: 2011, month: 10, day: 29 }, types: ['遊行'], summary: '2011 台灣同志遊行「彩虹征戰，歧視滾蛋 LGBT Fight back! Discrimination get out!」', refs: [] },
  { importance: 15, start: { year: 2011, month: 11, day: 1 }, types: ['社會事件'], summary: 'KKCity關站唯讀', refs: [{ url: 'https://www.bdsmtw.com/2011/01/pots_libido/' }] },
  { importance: 9, start: { year: 2011, month: 11 }, types: ['活動'], summary: '皮繩愉虐邦開始以定時定點方式，於直走咖啡舉辦Munch', org: '皮繩愉虐邦', refs: [] },
  { importance: 3, start: { year: 2011 }, types: ['社會事件'], summary: '雅虎奇摩結束奇摩家族', refs: [] },
  { importance: 15, start: { year: 2012, month: 2, day: 19 }, types: ['新聞媒體', '社會事件'], summary: '台鐵火車性愛趴事件', refs: [] },
  { importance: 3, start: { year: 2012, month: 5, day: 13 }, types: ['空間'], summary: '直走咖啡結束營業', refs: [{ url: 'https://www.facebook.com/gstraightrules/posts/419738274717419?__cft__[0]=AZihjO-3cO54lUSGiNzJnl-1CGjcrhVz-qC4kSJInuv1mseziPlbe6EKIzyC_VebUC-4nbwMIMKk_g9WDbw604tnUtCYxsyiY9nMpFKOM7AM0h0R0zUguslg-Mjprd-' }, { url: 'https://r-u-l-e.blogspot.com/2012/05/beautiful-days-without-you.htmla4rAK5iHuC7VhkohK0njyjqWgBT1nR2L1Vpz-0PL6Ey2l_HuIS2CI4PBm&__tn__=%2CO%2CP-R' }] },
  { importance: 3, start: { year: 2012, month: 5, day: 26 }, end: { year: 2012, month: 5, day: 27 }, types: ['表演'], summary: '2012夜色繩艷・風見蘭喜', org: '皮繩愉虐邦', refs: [] },
  { importance: 9, start: { year: 2012, month: 6, day: 8 }, types: ['空間'], summary: 'Commader D成立試營運', org: 'Commander D', refs: [] },
  { importance: 9, start: { year: 2012, month: 6, day: 9 }, types: ['活動'], summary: '皮繩愉虐邦開始於Commader D舉辦脫殼日', refs: [{ url: 'https://www.bdsmtw.com/2012/06/munch-0609/' }] },
  { importance: 3, start: { year: 2012, month: 9, day: 9 }, types: ['表演'], summary: '第五屆臺北藝穗節，皮繩愉虐邦邀請日本音繩表演「2012夜色繩艷－繩之音」', refs: [] },
  { importance: 3, start: { year: 2012, month: 10, day: 27 }, types: [], summary: '2012 台灣同志遊行「革命婚姻──婚姻平權，伴侶多元」', refs: [] },
  { importance: 9, start: { year: 2013, month: 9, day: 6 }, types: ['出版刊物'], summary: '小林繩霧著《繩縛本事》由基本書坊出版', detail: 'ISBN: 9789866474453', refs: [] },
  { importance: 3, start: { year: 2013, month: 9, day: 14 }, end: { year: 2013, month: 9, day: 15 }, types: ['表演'], summary: '皮繩愉虐邦第六屆臺北藝穗節《別再說你沒看過繩縛，汪！》', org: '皮繩愉虐邦', place: 'Commander D', refs: [] },
  { importance: 3, start: { year: 2013, month: 10, day: 26 }, types: ['遊行'], summary: '2013 台灣同志遊行「看見同性戀 2.0 正視性難民，鬥陣來相挺」', refs: [] },
  { importance: 3, start: { year: 2013, month: 12, day: 26 }, types: ['社會事件'], summary: 'Yahoo奇摩宣布無名小站及奇摩部落格終止服務', refs: [] },
  { importance: 9, start: { year: 2013 }, types: [], summary: '社群開始整理活動行事曆', refs: [] },
  { importance: 9, start: { year: 2014, month: 9, day: 18 }, types: ['組織'], summary: '台大BDSM社成立大會', refs: [{ url: 'https://www.ptt.cc/bbs/NTU/M.1410779495.A.329.html' }] },
  { importance: 3, start: { year: 2014, month: 9, day: 4 }, end: { year: 2014, month: 9, day: 10 }, types: ['表演', '活動'], summary: '第七屆臺北藝穗節 皮繩愉虐邦演出2014 夜色繩艷 十年祭', refs: [] },
  { importance: 6, start: { year: 2014, month: 4, day: 12 }, types: ['社會事件'], summary: '皮繩愉虐邦 munch發生偷拍及惡意外流，導致皮繩宣布停辦5月munch', refs: [{ url: 'https://www.bdsmtw.com/2014/04/%e5%81%9c%e8%be%a6%e8%84%ab%e6%ae%bc%e5%85%ac%e5%91%8a/' }] },
  { importance: 3, start: { year: 2014, month: 8, day: 19 }, types: ['網路'], summary: '皮繩愉虐邦變態臉書開張', refs: [] },
  { importance: 15, start: { year: 2014, month: 11, day: 19 }, types: ['組織'], summary: '台大BDSM社受社團輔導委員會駁回成立申請', refs: [{ url: 'https://talk.ltn.com.tw/article/breakingnews/1162194' }, { url: 'https://www.chinatimes.com/realtimenews/20141119004882-260405?chdtv' }, { url: 'https://www.ettoday.net/news/20141119/428013.htm' }] },
  { importance: 3, start: { year: 2014, month: 10, day: 25 }, types: ['遊行'], summary: '2014 台灣同志遊行「擁抱性／別‧認同差異」', refs: [] },
  { importance: 9, start: { year: 2014, month: 11, day: 2 }, types: ['活動'], summary: '皮繩愉虐邦開始於半路咖啡舉辦香草脫殼日', refs: [] },
  { importance: 3, start: { year: 2015, month: 1, day: 28 }, end: { year: 2015, month: 1, day: 29 }, types: ['表演'], summary: '寓吧 × 皮繩愉虐邦 2015 春', refs: [] },
  { importance: 9, start: { year: 2015, month: 5, day: 31 }, types: ['活動'], summary: '禁羈民主與惡趣技藝：亞太地區第一屆皮繩愉虐情慾與文化國際學術研討會', place: '台灣大學法學院霖澤館國際會議廳', refs: [] },
  { importance: 3, start: { year: 2015, month: 4, day: 5 }, types: ['活動'], summary: '皮繩愉虐邦 華麗色情冒險講座', detail: '#1 人體懸吊 by 愛嗑嘶/XJ,', place: '半路咖啡', refs: [] },
  { importance: 15, start: { year: 2015, month: 4, day: 29 }, types: ['活動'], summary: '台大BDSM社通過社團輔導委員會審查', refs: [{ url: 'https://www.thenewslens.com/article/16110' }] },
  { importance: 3, start: { year: 2015, month: 10, day: 31 }, types: ['遊行'], summary: '2015 台灣同志遊行「年齡不設限 解放暗櫃 青春自主」', refs: [] },
  { importance: 3, start: { year: 2015, month: 11, day: 29 }, types: ['表演'], summary: '2015舞動繩姬', refs: [] },
  { importance: 3, start: { year: 2015, month: 12, day: 12 }, types: ['活動'], summary: '皮繩愉虐邦於Commmader D最後一場脫殼日', refs: [] },
  { importance: 3, start: { year: 2016, month: 2, day: 13 }, types: ['活動'], summary: 'Commander D於2016年2月起舉辦飛客日', refs: [] },
  { importance: 3, start: { year: 2016, month: 8, day: 16 }, types: ['網路平台'], summary: 'PTT BDSM版開版連署', refs: [{ url: 'https://www.ptt.cc/bbs/L_BoyMeetsGi/M.1471359494.A.1E1.html' }] },
  { importance: 9, start: { year: 2016, month: 9, day: 6 }, types: ['網路平台'], summary: 'PTT BDSM版開版', refs: [] },
  { importance: 3, start: { year: 2016, month: 10, day: 29 }, types: ['遊行'], summary: '2016 台灣同志遊行「一起 FUN 出來——打破「假友善」，你我撐自在」', refs: [] },
  { importance: 3, start: { year: 2016, month: 11 }, types: ['組織'], summary: '台師大多元性慾友善社成立', refs: [] },
  { importance: 3, start: { year: 2016, month: 12, day: 24 }, types: ['活動'], summary: '2016Kinky異色市集', refs: [] },
  { importance: 9, start: { year: 2017, month: 1 }, types: ['網路平台'], summary: 'BDSM Calendar 網頁版開始經營', refs: [] },
  { importance: 3, start: { year: 2017, month: 4 }, types: ['空間'], summary: 'MySpace開始營運', place: 'MySpace', refs: [] },
  { importance: 3, start: { year: 2017, month: 7, day: 22 }, types: ['活動'], summary: '2017 Kinky異色市集', refs: [] },
  { importance: 3, start: { year: 2017, month: 8, day: 27 }, end: { year: 2017, month: 9, day: 2 }, types: ['表演'], summary: '皮繩愉虐邦劇團2017臺北藝穗節《寵物的生物本能》', refs: [] },
  { importance: 3, start: { year: 2017, month: 10, day: 28 }, types: ['遊行'], summary: '2017 台灣同志遊行「澀澀性平打開開 多元教慾跟上來」', refs: [] },
  { importance: 3, start: { year: 2018, month: 10, day: 27 }, types: ['遊行'], summary: '2018 台灣同志遊行「性平攻略由你說．人人 18 投彩虹」', refs: [] },
  { importance: 3, start: { year: 2018, month: 12, day: 23 }, types: ['活動'], summary: '2018 Kinky異色市集', refs: [] },
  { importance: 9, start: { year: 2019, month: 4, day: 28 }, types: ['表演'], summary: '皮繩愉虐邦《禁羈社群》原創音樂劇', refs: [] },
  { importance: 3, start: { year: 2019, month: 10, day: 26 }, types: ['遊行'], summary: '2019 台灣同志遊行「同志好厝邊」', refs: [] },
  { importance: 3, start: { year: 2020, month: 1, day: 18 }, types: ['活動'], summary: '2020異色新年市集', org: 'MySpace', refs: [] },
  // 試算表此筆參考文獻填在「地點」欄，已移至 refs
  { importance: 15, start: { year: 2020, month: 3, day: 18 }, types: ['新聞媒體'], summary: 'CTWANT偷拍 BDSM同樂會事件', refs: [{ label: '原始新聞連結', url: 'https://www.ctwant.com/article/41650/' }] },
  { importance: 3, start: { year: 2020, month: 10, day: 31 }, types: ['遊行'], summary: '2020 台灣同志遊行「成人之美 BEAUTY, MY OWN WAY」', refs: [] },
  { importance: 15, start: { year: 2021, month: 5, day: 15 }, end: { year: 2021, month: 7, day: 26 }, types: ['社會事件'], summary: 'COVID-19 疫情全國第三級警戒', refs: [] },
  { importance: 3, start: { year: 2021, month: 10, day: 30 }, types: ['遊行'], summary: '2021 台灣同志遊行因應COVID-19疫情，改線上舉辦', refs: [] },
  { importance: 3, start: { year: 2021, month: 12, day: 19 }, types: ['活動'], summary: '2021聖誕異色市集', org: 'MySpace', refs: [] },
  { importance: 9, start: { year: 2022, month: 8, day: 27 }, end: { year: 2022, month: 8, day: 28 }, types: ['表演'], summary: '皮繩愉虐邦《禁羈社群2.0》非典型原創音樂劇', refs: [] },
  { importance: 9, start: { year: 2022, month: 10, day: 29 }, types: ['遊行'], summary: '2022 台灣同志遊行「無・限・性——解構框架，性／別無限」', refs: [] },
  { importance: 3, start: { year: 2023, month: 1, day: 20 }, end: { year: 2023, month: 1, day: 21 }, types: ['活動'], summary: '2023 異色市集 大發異市', org: '伍拾玖x束室', refs: [] },
  // 試算表此筆參考文獻填在「地點」欄，已移至 refs
  { importance: 3, start: { year: 2023, month: 5, day: 4 }, types: ['空間'], summary: 'MySpace結束營運', refs: [{ url: 'https://www.facebook.com/esther.culprit/posts/pfbid0cdmMkjNEcuhSCt35MDN7ZVZiNUJFz62KrZRyfm1496rwUevScj3T2WtW6hjwTmKTl?__cft__[0]=AZgAUNOmsqRCGwelaSVCC4KxPlfRqrE-zeM69pAcMPuEmbBsbGmnhQbR_BhjseqTpJSSaEDSqX8N51wXaIx7bXzOKK_-v6LreVpAC6QATv-rGvgeT7E09Cf33N0osRirkqRaMWQTqMNOx6EAE7dmLwjhcA86_1U8dnd3tPENnh06bZVCvlW-krDs6K7ljRGqenrwPTmBpsUBuGdipVw&__tn__=%2CO%2CP-R' }] },
  { importance: 3, start: { year: 2023, month: 6, day: 18 }, types: ['活動'], summary: '2023 異色主寵市集', org: '伍拾玖x束室', refs: [] },
  { importance: 3, start: { year: 2023, month: 10, day: 28 }, types: ['遊行'], summary: '2023 台灣同志遊行與多元同行 （Stand with Diversity）」', refs: [] },
  { importance: 3, start: { year: 2023, month: 12 }, types: ['網路平台'], summary: 'BDSM小白板上線', refs: [] },
  { importance: 3, start: { year: 2024, month: 7, day: 20 }, end: { year: 2024, month: 7, day: 21 }, types: ['活動'], summary: '2024 異色市集 大玩具祭', place: '萬華區遇見青旅', refs: [] },
  { importance: 9, start: { year: 2024, month: 7, day: 27 }, end: { year: 2024, month: 7, day: 28 }, types: ['活動'], summary: '第一屆亞太禁羈研討會', place: '東吳大學城中校區', refs: [] },
  { importance: 3, start: { year: 2024, month: 8, day: 24 }, end: { year: 2024, month: 8, day: 25 }, types: ['活動'], summary: '府城KINKY嘉年華', refs: [] },
  { importance: 3, start: { year: 2024, month: 10, day: 26 }, types: ['遊行'], summary: '2024 台灣同志遊行', refs: [] },
  { importance: 3, start: { year: 2025, month: 1, day: 18 }, end: { year: 2025, month: 1, day: 19 }, types: ['活動'], summary: '2025異色市集 異市界', refs: [] },
  { importance: 15, start: { year: 2025, month: 6, day: 4 }, types: ['法院判決', '社會事件'], summary: '臺灣新北地方法院113年度訴字第836號刑事判決', refs: [] },
  { importance: 3, start: { year: 2025, month: 7, day: 19 }, end: { year: 2025, month: 7, day: 20 }, types: ['活動'], summary: '2025異色市集', place: '萬華遇見青旅', refs: [] },
  { importance: 3, start: { year: 2025, month: 8, day: 22 }, end: { year: 2025, month: 9, day: 6 }, types: ['表演'], summary: '皮繩愉虐邦《SM調教事件簿》沈浸式遊戲', refs: [] },
  { importance: 3, start: { year: 2025, month: 12, day: 20 }, end: { year: 2025, month: 12, day: 21 }, types: ['活動'], summary: '府城KINKY嘉年華', org: '底家', refs: [] },
  { importance: 9, start: { year: 2026, month: 7, day: 25 }, end: { year: 2026, month: 7, day: 26 }, types: ['活動'], summary: '第二屆亞太禁羈研討會', place: '東吳大學城中校區', refs: [] },
  { importance: 9, start: { year: 2026 }, types: ['法院判決'], summary: '涉及未滿14歲性侵但當事人主張他們有建立DS關係（待補充脈絡）法官指出考量未成年人.....被告未使用暴力，且雙方有建立DS關係，且雙方和解，故依法減刑', refs: [] },
  { importance: 9, start: { year: 2026, month: 9 }, types: [], summary: '台北市議員質詢提到ＣＤ', refs: [] },
  { importance: 9, start: { year: 2026, month: 10, day: 3 }, types: [], summary: 'CD事件', refs: [] },
]

export function isHighlight(event: ChronicleEvent): boolean {
  return event.importance >= HIGHLIGHT_IMPORTANCE
}

/** Sort key comparison: year, then month (unknown month last within a year), then day (unknown day first within a month). */
export function compareDates(a: ChronicleDate, b: ChronicleDate): number {
  return a.year - b.year || (a.month ?? 13) - (b.month ?? 13) || (a.day ?? 0) - (b.day ?? 0)
}

/** Events shown on the page (importance >= SHOW_THRESHOLD), in chronological order. */
export function visibleEvents(threshold = SHOW_THRESHOLD): ChronicleEvent[] {
  return events.filter((event) => event.importance >= threshold).sort((a, b) => compareDates(a.start, b.start))
}

/** Visible events grouped by start year, oldest first. */
export function eventsByYear(threshold = SHOW_THRESHOLD): { year: number; items: ChronicleEvent[] }[] {
  const groups: { year: number; items: ChronicleEvent[] }[] = []
  for (const event of visibleEvents(threshold)) {
    const last = groups.at(-1)
    if (last && last.year === event.start.year) last.items.push(event)
    else groups.push({ year: event.start.year, items: [event] })
  }
  return groups
}

/** Format a date as YYYY.M.D, omitting unknown parts; a range drops the parts it shares with the start. */
export function formatDate(start: ChronicleDate, end?: ChronicleDate): string {
  const one = (d: ChronicleDate) => [d.year, d.month, d.month ? d.day : undefined].filter((v) => v !== undefined).join('.')
  if (!end) return one(start)
  const tail = end.year !== start.year ? one(end) : [end.month, end.month ? end.day : undefined].filter((v) => v !== undefined).join('.')
  return tail ? `${one(start)} – ${tail}` : one(start)
}
