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
  { importance: 3, start: { year: 1997, month: 7, day: 30 }, types: ['社會事件'], summary: '常德街事件', detail: '1997年7月30日，台北市二二八公園實施午夜12點清空宵禁，許多男同志在深夜移步至旁邊的常德街延續社交活動。警方出動約15名配槍警力大規模包抄、臨檢，強行盤查40至50名民眾的身分證，將其推上警車並帶回警局無故登記、拍照。事件引發同志公民行動陣線與婦女新知基金會等民間團體強烈抗議與聲援。這起事件成為推動法律改革的重要契機，促使司法院於2001年12月14日做出釋字第535號解釋，對警察毫無合理懷疑的任意臨檢行為設下法律限制與程序正義規範。', refs: [{ url: 'https://ageofqueer.com/archives/9223' }, { url: 'https://www.facebook.com/Taiwan.LGBT.Pride/posts/pfbid02CWNKekZEiTsxE92Xu5PsaHZTcyrfPnRyu2cobHTo8uZE1g8QCGt81U6K2dV1NQVal?__cft__[0]=AZjMVcUacmnQvpav7TwjTrb54cL6qn9G5WYYseOIlnsDWhriFUMdFSSAxXGyXlAtqRFuBbiO5yxWBwboJI5tcmRW6DwVkpz1RVGKo78ofNd6JRok9UcIYcRDLfgYREOEw5iz-QhmbuRQZV17o8ilRqM1IhmE9iP9tA&__tn__=%2CO%2CP-R' }] },
  { importance: 3, start: { year: 1998, month: 12, day: 20 }, types: ['社會事件'], summary: 'AG健身中心事件', detail: 'AG健身中心事件發生於1998年12月20日。警方以臨檢為名，粗暴闖入同志聚集的AG健身中心，在無執法依據下，強迫多名顧客裸身、擺出猥褻動作拍照企圖製造假證據，並憑店內未使用的保險套，將經理與顧客依妨害風化等罪嫌逮捕。\n此事件引發同志團體大規模聲援與抗爭。至2000年高等法院判決被告全數無罪定讞，但健身房已因多次遭惡意臨檢而被迫歇業。此案與後續的晶晶書庫等案，成為推動2001年司法院釋字第535號解釋（限制警察濫權臨檢）的重要催化劑。', refs: [{ url: 'https://ageofqueer.com/archives/10522' }] },
  { importance: 3, start: { year: 1999, month: 10, day: 8 }, types: ['網路平台'], summary: '奇摩推出奇摩家族', detail: '許多奇摩家族成為性少數實踐者找到同好的途徑', refs: [{ url: 'https://time.udn.com/udntime/story/122835/6898157' }] },
  { importance: 9, start: { year: 2000 }, types: ['網路平台'], summary: 'KKCity 性版・花魁藝色館開版', detail: '在KKcity BBS站台上成立了限制級看版「花魁異色館」，宣言「打破污名，重建性權」，成為情慾實踐者與性少數的網路聚集地，而花魁藝色館亦成爲KKCity下掛站人數最多的看板。花魁異色館時期的許多活躍用戶，後續有許多成為推動台灣禁羈社群成立相關組織與舉辦活動的重要推手。', refs: [{ url: 'https://open.spotify.com/episode/1NnkbcBdYERtV9MsTrD7JU' }], note: '天龍古堡？待考據' },
  { importance: 15, start: { year: 2001, month: 2, day: 6 }, types: ['新聞媒體', '社會事件'], summary: '同志箱屍案', detail: '2001年2月，一名男同志「虐犬」與網友相約進行窒息式性愛時不慎失手造成對方死亡，而將對方裝入行李箱棄置，引發社會輿論譁然，媒體針對事件大幅以臆測、獵奇的方式報導案情，甚至污名化同志族群。此事件凝聚了當時尚在起步階段的台灣同運社群，促進了同志運動的組織化與走向街頭、推動立法與爭取人權、對抗體制的結構不平等。', refs: [{ url: 'https://ageofqueer.com/archives/11657' }] },
  { importance: 3, start: { year: 2003 }, types: ['社會事件'], summary: '兒童及少年福利與權益保障法公告', refs: [] },
  { importance: 3, start: { year: 2003 }, types: ['網路'], summary: '無名小站推出網誌及相簿功能', refs: [{ url: 'https://taiwan.md/technology/%E5%8F%B0%E7%81%A3%E7%B6%B2%E8%B7%AF%E7%A4%BE%E7%BE%A4%E9%81%B7%E5%BE%99%E5%8F%B2/' }] },
  { importance: 15, start: { year: 2003, month: 11, day: 1 }, types: ['活動'], summary: '2003年第四屆台北同玩節舉辦第一屆同志遊行', detail: '「台北同玩節」是台灣第一個由官方（台北市政府）編列預算主辦的同志公民運動系列活動。於2000年首次舉辦，內容涵蓋彩虹園遊會、社團設攤、議題論壇及文藝展演等。其宗旨為推動多元包容與人權平權，2003年第一次舉辦同志遊行，是台灣同志運動走向公開與合法化的重要里程碑。而皮繩愉虐邦創立成員亦自第一屆同志遊行就開始參與籌備。', place: '二二八公園到西門町紅樓', refs: [{ url: 'https://www.facebook.com/Taiwan.LGBT.Pride/photos/%E5%8D%81%E5%85%89%E9%9A%A7%E9%81%93%E7%AC%AC%E4%B8%80%E5%B1%86%E5%90%8C%E5%BF%97%E9%81%8A%E8%A1%8C-the-1st-taiwan-lgbt-pride2003%E5%B9%B4%E7%AC%AC%E4%B8%80%E5%B1%86%E5%8F%B0%E7%81%A3%E5%90%8C%E5%BF%97%E9%81%8A%E8%A1%8C%E7%94%B1%E5%8F%B0%E7%81%A3%E5%90%8C%E5%BF%97%E8%AB%AE%E8%A9%A2%E7%86%B1%E7%B7%9A%E8%88%89%E8%BE%A6%E7%82%BA%E7%95%B6%E5%B9%B4%E5%8F%B0%E5%8C%97%E5%90%8C%E7%8E%A9%E7%AF%80%E6%AD%8C%E8%88%9E%E8%B8%A9%E8%A1%97%E5%90%8C%E5%9C%A8%E8%A5%BF%E9%96%80%E7%9A%84%E4%B8%BB/10151281427540586/' }] },
  { importance: 3, start: { year: 2004, month: 1, day: 17 }, types: ['社會事件'], summary: '農安街事件', detail: '農安街事件發生於2004年1月17日，台北市警察局中山分局突擊搜查位於農安街的一處民宅，當場逮捕92名參與男同志性愛與藥物派對的人士，並查獲毒品與大量保險套。警方隨後將參與者及檢驗出愛滋病、性病的個案移送法辦，但全案最終於同年11月因罪證不足獲不起訴處分，事後檢驗也證實並未造成新的愛滋感染。警方攜帶大批媒體進入私人場所拍攝，將同志群體與「愛滋、搖頭丸、亂交」強行掛鉤，引發社會對性少數的刻板印象與道德審判。此事件不止令許多人權及性別團體批評執法過程粗暴、侵犯隱私，甚至導致部分當事者承受巨大社會壓力而自殺身亡。', refs: [] },
  { importance: 3, start: { year: 2004, month: 4 }, types: ['網路'], summary: '花魁版聚飯店大派對', refs: [{ url: 'https://www.bdsmtw.com/2011/01/pots_libido/' }] },
  { importance: 3, start: { year: 2004, month: 4, day: 16 }, end: { year: 2004, month: 4, day: 18 }, types: ['表演'], summary: '黃鐵軍&臨界點劇象錄「在夢裡醒著，在痛裡快樂」演出', detail: '《在夢裡醒著，在痛裡快樂》為臨界點「在我們房間裡戲」系列十六的作品之一，由鍾得凡編導，和演員黃鐵軍、孔繁忠、凱凱、小盧合作，2004年4月16到18日於白水藝文空間共三場演出，每場約60分鐘。本劇改編三段真人真事，由演員的自白與對話回憶軍中經歷到的SM情慾關係。\n\n舞台以蠟燭、鐵鍊、牢籠等作為布景，並藉由紅白燈光的切換轉變、襯托氣氛，串連斷落。同時劇中亦將現實相關的報紙報導、照片，以投影穿插在演出中，配合演員的內心獨白、情慾場景的呈現，探討SM、奴隸、拳交等等主流傾向以外的次文化。', place: '白水藝文空間', refs: [{ url: 'https://tcmb.culture.tw/zh-tw/detail?indexCode=Culture_Media&id=593927' }] },
  { importance: 3, start: { year: 2004, month: 5 }, types: ['組織'], summary: '皮繩愉虐邦第一次會議', refs: [] },
  { importance: 9, start: { year: 2004, month: 6, day: 12 }, types: ['活動'], summary: '皮繩愉虐邦第一次Munch', detail: '本次活動是第一個目前追溯得到網路文獻紀錄的公開禁羈活動（歡迎提出更多史料讓我們知道）', org: '皮繩愉虐邦', refs: [{ url: 'https://www.bdsmtw.com/2004/06/munch-0406-ning/' }, { url: 'https://vocus.cc/article/66c735bcfd89780001b6b9f3' }] },
  { importance: 3, start: { year: 2004, month: 7, day: 16 }, types: ['組織'], summary: '皮繩愉虐邦正式成立', refs: [] },
  { importance: 3, start: { year: 2004, month: 8, day: 26 }, types: ['法規', '社會事件'], summary: '《出版品及錄影節目帶分級辦法》公布', refs: [{ url: 'https://www.rootlaw.com.tw/LawContent.aspx?LawID=A040150040001100-0940401' }] },
  { importance: 3, start: { year: 2004, month: 11, day: 6 }, types: [], summary: '2004 台灣同志遊行「喚起公民意識」', detail: '皮繩愉虐邦第一次現身同志遊行', refs: [{ url: 'https://www.bdsmtw.com/category/issues/issue0410/' }] },
  // 試算表結束欄位為 年份=4、月份=23（欄位錯位），解讀為 2005.4.23
  { importance: 9, start: { year: 2005, month: 4, day: 22 }, end: { year: 2005, month: 4, day: 23 }, types: ['表演', '活動'], summary: '2005 夜色繩艷', detail: '台灣禁羈社群第一次公開邀請國外繩手（神凪）來台演出、亦是第一個售票的公開繩縛表演', org: '皮繩愉虐邦', place: '白水藝文空間', refs: [{ url: 'https://www.bdsmtw.com/category/issues/issue0504/' }] },
  { importance: 3, start: { year: 2005, month: 9 }, types: ['表演'], summary: '妮可女王自縛吊演出《舞動繩姬》', refs: [] },
  { importance: 3, start: { year: 2005, month: 10, day: 1 }, types: [], summary: '2005 台灣同志遊行「同心協力101」', refs: [] },
  // 試算表年份為 2025（夾在 2005 的列之間），該辦法實際於 2005-10-25 上路，修為 2005
  { importance: 3, start: { year: 2005, month: 10, day: 25 }, types: [], summary: '《電腦網路內容分級處理辦法》正式上路', refs: [] },
  { importance: 9, start: { year: 2006, month: 1, day: 25 }, types: ['出版刊物'], summary: '《皮繩愉虐邦》同名書籍由性林文化出版', detail: '本書記錄了台灣第一個BDSM公開社團的歷史淵源與集結經驗，同時也回顧了前人著作、實用技巧、個人心得等。', org: '皮繩愉虐邦', refs: [{ url: 'https://www.bdsmtw.com/category/issues/issue0602/' }] },
  { importance: 3, start: { year: 2006, month: 9, day: 30 }, types: ['遊行'], summary: '2006 台灣同志遊行「一同去家遊Go Together」', refs: [] },
  { importance: 15, start: { year: 2006, month: 10, day: 26 }, types: ['法規', '社會事件'], summary: '大法官會議釋字第617號解釋', detail: '將刑法第235條所稱之猥褻物品分為「硬蕊」與「軟蕊」，並將含有暴力、性虐待或人獸性交等內容且客觀上無藝術性、醫學性或教育性者定義為「硬蕊」而禁止傳播', refs: [] },
  // 試算表原值 2026，疑為筆誤
  { importance: 9, start: { year: 2006, month: 12, day: 1 }, end: { year: 2006, month: 12, day: 3 }, types: ['表演', '活動'], summary: '2006 ˙冬˙夜色繩艷', detail: '邀請日本最職業女王狩野千秋、繩師Mira狂美，與台灣愉虐社群最具企圖心的自縛吊女王舞真夜在華山文創園區同台演出。本次表演為台灣首次有台灣表演者與國際表演者共同演出，亦是首次跟台北市文化局申請經費並獲得政府補助', org: '皮繩愉虐邦', place: '華山文創園區', refs: [{ url: 'https://www.coolloud.org.tw/node/59408' }] },
  { importance: 3, start: { year: 2007, month: 4, day: 4 }, types: ['社會事件'], summary: '雅虎奇摩關閉聊天室', refs: [] },
  { importance: 3, start: { year: 2007, month: 10, day: 13 }, types: ['遊行'], summary: '2007 台灣同志遊行「彩虹有夠力」', refs: [] },
  { importance: 3, start: { year: 2008, month: 9, day: 27 }, types: ['遊行'], summary: '2008 台灣同志遊行「驕傲向前行Run the Rainbow Way」', refs: [] },
  { importance: 3, start: { year: 2009, month: 8, day: 1 }, types: ['表演'], summary: '2009第一屆台北愉虐節', refs: [{ label: '2009第一屆台北愉虐節—愉悅x逾越x愉虐 正式起跑!', url: 'https://www.coolloud.org.tw/node/43673' }, { url: 'https://www.bdsmtw.com/category/issues/2009tpsmfes/' }] },
  { importance: 3, start: { year: 2009, month: 10, day: 31 }, types: ['遊行'], summary: '2009 台灣同志遊行「同志愛很大 Love out loud」', refs: [] },
  { importance: 3, start: { year: 2009 }, types: ['社會事件'], summary: 'Facebook在開始成為當紅社群媒體', detail: '由於開心農場推出，Facebook在台灣引發註冊潮', refs: [] },
  { importance: 15, start: { year: 2010, month: 4, day: 30 }, types: ['出版刊物'], summary: '《軍犬》實體小說由基本書坊出版', detail: '由夏慕聰撰寫的《軍犬》原為網路連載，後續集結成書，成為台灣第一本以BDSM題材出版的原創小說。', refs: [] },
  { importance: 3, start: { year: 2010, month: 10, day: 30 }, types: ['遊行'], summary: '2010 台灣同志遊行「投同志政策一票 Out and Vote 」', refs: [] },
  { importance: 9, start: { year: 2010, month: 11, day: 27 }, types: ['組織'], summary: '皮繩愉虐邦成員十夜投入台北市議員選舉', detail: '參與皮繩愉虐邦創立的宋佳倫，以SM女王身份代表綠黨參選第11屆臺北市議員選舉第五選區（中正、萬華區），口號為「調教出一個謙卑的政府」', refs: [{ url: 'https://www.bbc.com/zhongwen/trad/china/2010/11/101117_taiwan_election_gay_lesbian_candidates_by_victor' }] },
  { importance: 9, start: { year: 2011, month: 1, day: 8 }, types: ['活動'], summary: '皮繩脫殼日 BDSM Talk Day開始於每月第二個週六固定舉辦', detail: '皮繩愉虐邦的脫殼日是台灣禁羈社群第一個每個月固定舉辦的社群聚會', place: '直走咖啡', refs: [{ url: 'https://www.bdsmtw.com/2010/12/bdsm_talk_day/' }] },
  { importance: 9, start: { year: 2011, month: 4 }, types: ['組織'], summary: '皮繩愉虐邦劇團核准立案', detail: '皮繩愉虐邦劇團成為台灣第一個由政府核准立案成立的禁羈表演藝術團體', refs: [] },
  { importance: 3, start: { year: 2011, month: 4, day: 26 }, types: ['社會事件'], summary: 'Yahoo奇摩結束奇摩家族', refs: [] },
  { importance: 9, start: { year: 2011, month: 5, day: 4 }, types: ['出版刊物'], summary: '《12P情慾相談室》由基本書坊出版', detail: '《12P情慾相談室》是由台灣同志諮詢熱線協會「性權小組」歷時一年完成的集體創作。本書收錄了12位成員誠實、生猛的情慾自我書寫與反思，內容大膽揭露傳統教育不敢教、父母不願談的多元性面貌，涵蓋同性戀、雙性戀、愉虐戀（BDSM）、多P等禁忌議題。\n全書分為兩部分：第一部分透過小說、自傳等活潑形式，帶領讀者重回成員童年到成年的性啟蒙現場；第二部分則以理性思辯探討社群議題，藉此突破社會的性無知與成見。這是一本溫柔擁抱每個人心中迷惘，並翻轉性道德恐慌的劃時代台灣性教育讀本。', refs: [] },
  { importance: 15, start: { year: 2011, month: 6, day: 9 }, types: ['新聞媒體'], summary: '壹週刊偷拍皮繩愉虐邦 《緊縛繩宴》', detail: '皮繩愉虐邦舉辦了公開的《緊縛繩宴》表演，然而《壹週刊》卻在未經主辦方與參與者同意的情況下，以偷拍、獵奇和渲染的方式報導此事，並將參與者的私密影像與身分曝光於大眾媒體之前。此事件引發臺灣性少數與性權團體的強烈抗議，認為媒體為了商業利益與農場式的聳動點閱，嚴重剝奪了禁羈實踐者的「隱私權」與「出櫃自主權」。這不僅對當事人的生活造成實質騷擾與恐慌，更加深了社會大眾對禁羈社群的刻板印象與污名。', org: '皮繩愉虐邦', place: '卡米地俱樂部', refs: [{ label: '拒絕偷拍！還我「猥褻」的權力！──針對壹週刊偷拍事件之聲明稿', url: 'https://www.coolloud.org.tw/node/62792' }, { label: '皮繩愉虐邦 敬覆 壹週刊 之公開信：沒有不堪入目的文化，只有不堪入目的報導', url: 'https://www.coolloud.org.tw/node/66822' }] },
  { importance: 3, start: { year: 2011, month: 6 }, types: ['空間'], summary: 'Commander 41 紅樓司令開幕', refs: [] },
  { importance: 3, start: { year: 2011, month: 8, day: 28 }, end: { year: 2011, month: 9, day: 10 }, types: ['表演'], summary: '第四屆臺北藝穗節，皮繩愉虐邦表演「你就是SM片最佳男女主角!」、「緊縛調教室」', refs: [] },
  { importance: 3, start: { year: 2011, month: 10, day: 29 }, types: ['遊行'], summary: '2011 台灣同志遊行「彩虹征戰，歧視滾蛋 LGBT Fight back! Discrimination get out!」', refs: [] },
  { importance: 15, start: { year: 2011, month: 11, day: 1 }, types: ['社會事件'], summary: 'KKCity關站唯讀', detail: '隨著 Web 2.0、社群網站與部落格興起，BBS 模式逐漸萎縮，KKCit母公司願境網訊決定將KKCity停止營運。KKCity關站也導致了花魁藝色館的結束，陪同台灣情慾實踐與性少數族群走過10年的網路空間就此劃下句點。雖然後續亦有在其他伺服器上重新架站的嘗試，但終究未敵時代潮流。', refs: [{ url: 'https://www.bdsmtw.com/2011/01/pots_libido/' }] },
  { importance: 9, start: { year: 2011, month: 11 }, types: ['活動'], summary: '皮繩愉虐邦開始以定時定點方式，於直走咖啡舉辦Munch', detail: '台灣禁羈社群第一個定時定點舉辦的活動。', org: '皮繩愉虐邦', refs: [] },
  { importance: 15, start: { year: 2012, month: 2, day: 19 }, types: ['新聞媒體', '社會事件'], summary: '台鐵火車性愛趴事件', detail: '2011年2月由一名網友在KKCity上發起包下台鐵莒光號車廂舉辦仿效日本「癡漢電車」的性交派對，總共有18名男性與1名女性參與。此次活動挑戰了傳統道德與公眾場域的界線，特別是女主角當時為17歲未成年人，引發輿論與兒少團體強烈抨擊其敗壞風俗；而性權團體則發表社論聲援，認為成年人基於隱私與自主合意進行情色集結，不應受過度干預。後續法律過程中，參與的多數男性因罪證不足獲不起訴或僅依社維法裁罰，女主角則由少年法庭收容輔導。主辦人被依刑法231條「圖利使人爲性交罪」判處有期徒刑6個月、得易科罰金18萬元定讞，並被台鐵提起民事求償。', refs: [] },
  { importance: 3, start: { year: 2012, month: 5, day: 13 }, types: ['空間'], summary: '直走咖啡結束營業', refs: [{ url: 'https://www.facebook.com/gstraightrules/posts/419738274717419?__cft__[0]=AZihjO-3cO54lUSGiNzJnl-1CGjcrhVz-qC4kSJInuv1mseziPlbe6EKIzyC_VebUC-4nbwMIMKk_g9WDbw604tnUtCYxsyiY9nMpFKOM7AM0h0R0zUguslg-Mjprd-' }, { url: 'https://r-u-l-e.blogspot.com/2012/05/beautiful-days-without-you.htmla4rAK5iHuC7VhkohK0njyjqWgBT1nR2L1Vpz-0PL6Ey2l_HuIS2CI4PBm&__tn__=%2CO%2CP-R' }] },
  { importance: 3, start: { year: 2012, month: 5, day: 26 }, end: { year: 2012, month: 5, day: 27 }, types: ['表演'], summary: '2012夜色繩艷・風見蘭喜', org: '皮繩愉虐邦', refs: [] },
  { importance: 9, start: { year: 2012, month: 6, day: 8 }, types: ['空間'], summary: 'Commader D成立試營運', detail: 'Commander D作為男同志酒吧的同時，亦為台灣第一個以BDSM為主題的公開營業空間。', org: 'Commander D', refs: [] },
  { importance: 9, start: { year: 2012, month: 6, day: 9 }, types: ['活動'], summary: '皮繩愉虐邦開始於Commader D舉辦脫殼日', detail: '此為台灣禁羈社群開始跟男同志社群交織的起點', refs: [{ url: 'https://www.bdsmtw.com/2012/06/munch-0609/' }] },
  { importance: 3, start: { year: 2012, month: 9, day: 9 }, types: ['表演'], summary: '第五屆臺北藝穗節，皮繩愉虐邦邀請日本音繩表演「2012夜色繩艷－繩之音」', refs: [] },
  { importance: 3, start: { year: 2012, month: 10, day: 27 }, types: [], summary: '2012 台灣同志遊行「革命婚姻──婚姻平權，伴侶多元」', refs: [] },
  { importance: 9, start: { year: 2013, month: 9, day: 6 }, types: ['出版刊物'], summary: '小林繩霧著《繩縛本事》由基本書坊出版', detail: '本書由小林繩霧撰寫，為台灣及華語世界第一本繩縛教學專書，內容記錄了許多初入繩縛應該知道的各種工具和細節，同時也以照片逐步驟教學的方式鉅細彌遺地介紹了許多繩縛技法。', refs: [] },
  { importance: 3, start: { year: 2013, month: 9, day: 14 }, end: { year: 2013, month: 9, day: 15 }, types: ['表演'], summary: '皮繩愉虐邦第六屆臺北藝穗節《別再說你沒看過繩縛，汪！》', org: '皮繩愉虐邦', place: 'Commander D', refs: [] },
  { importance: 3, start: { year: 2013, month: 10, day: 26 }, types: ['遊行'], summary: '2013 台灣同志遊行「看見同性戀 2.0 正視性難民，鬥陣來相挺」', refs: [] },
  { importance: 3, start: { year: 2013, month: 12, day: 26 }, types: ['社會事件'], summary: 'Yahoo奇摩宣布無名小站及奇摩部落格終止服務', refs: [] },
  { importance: 9, start: { year: 2013, month: 12 }, types: [], summary: '禁羈社群開始整理每月活動行事曆', detail: '皮繩愉虐邦開始推出圖片把台灣社群活動行事曆，方便禁羈實踐者了解本月活動。', refs: [] },
  { importance: 9, start: { year: 2014, month: 9, day: 18 }, types: ['組織'], summary: '台大BDSM社成立大會', detail: '國立臺灣大學皮繩愉虐社為台灣第一個衝撞校園體制成立的大學學生禁羈社團，同時也是第一個定期舉辦講座的組織。社團宗旨為 1.讓社會看見情慾的多樣性與能動性。 2.反對將學生去性化，重視學生的情慾主體。 3. 在校園中推廣對BDSM的認識。 4. 聲援其他性/別議題。', refs: [{ url: 'https://www.ptt.cc/bbs/NTU/M.1410779495.A.329.html' }] },
  { importance: 3, start: { year: 2014, month: 9, day: 4 }, end: { year: 2014, month: 9, day: 10 }, types: ['表演', '活動'], summary: '第七屆臺北藝穗節 皮繩愉虐邦演出2014 夜色繩艷 十年祭', refs: [] },
  { importance: 6, start: { year: 2014, month: 4, day: 12 }, types: ['社會事件'], summary: '皮繩愉虐邦 munch發生偷拍及惡意外流，導致皮繩宣布停辦5月munch', refs: [{ url: 'https://www.bdsmtw.com/2014/04/%e5%81%9c%e8%be%a6%e8%84%ab%e6%ae%bc%e5%85%ac%e5%91%8a/' }] },
  { importance: 3, start: { year: 2014, month: 8, day: 19 }, types: ['網路'], summary: '皮繩愉虐邦變態臉書開張', refs: [] },
  { importance: 15, start: { year: 2014, month: 11, day: 19 }, types: ['組織'], summary: '台大BDSM社受社團輔導委員會駁回成立申請', detail: '國立臺灣大學學生申請成立「皮繩愉虐社」（BDSM社），2014年11月19日遭校方「社團輔導委員會」以1票之差（8票贊成、未過半）駁回申請。審查委員與教授多對BDSM活動的安全疑慮、尺度及情慾自主界線存有保留，甚至委員會上有委員現場播放A片及以帶有獵奇與歧視眼光調侃社團，而社團成員及校內社團在申請遭駁回後批評校方依照相關規定僅能形式審查章程是否具備，無權進行「實質審查」與「道德審查」，後續並在校園內組織公開抗議，以繩縛示範展示社團對安全性的重視。', refs: [{ url: 'https://talk.ltn.com.tw/article/breakingnews/1162194' }, { url: 'https://www.chinatimes.com/realtimenews/20141119004882-260405?chdtv' }, { url: 'https://www.ettoday.net/news/20141119/428013.htm' }] },
  { importance: 3, start: { year: 2014, month: 10, day: 25 }, types: ['遊行'], summary: '2014 台灣同志遊行「擁抱性／別‧認同差異」', refs: [] },
  { importance: 9, start: { year: 2014, month: 11, day: 2 }, types: ['活動'], summary: '皮繩愉虐邦開始於半路咖啡舉辦香草脫殼日', detail: '在此活動之前，社群活動大多同時是混合聊天聯誼活動與玩樂派對。自從香草脫殼日開始之後，聊天聯誼性質的Munch活動開始與玩樂性質的派對活動分流。', refs: [] },
  { importance: 3, start: { year: 2015, month: 1, day: 28 }, end: { year: 2015, month: 1, day: 29 }, types: ['表演'], summary: '寓吧 × 皮繩愉虐邦 2015 春', refs: [] },
  { importance: 3, start: { year: 2015, month: 4, day: 5 }, types: ['活動'], summary: '皮繩愉虐邦 華麗色情冒險講座', detail: '#1 人體懸吊 by 愛嗑嘶/XJ,', place: '半路咖啡', refs: [] },
  { importance: 15, start: { year: 2015, month: 4, day: 29 }, types: ['活動'], summary: '台大BDSM社通過社團輔導委員會審查', detail: '經由多次抗爭，加上社團成員重新依據校方委員要求調整社團成立申請相關文件後，台大皮繩愉虐社終於在2015年5月的社團輔導委員會上通過申請，成為台灣第一個在大學校園內正式登記在案的學生BDSM社團，並開始定期舉辦講座、工作坊、討論會、讀書會、電影欣賞等社課。', refs: [{ url: 'https://www.thenewslens.com/article/16110' }] },
  { importance: 9, start: { year: 2015, month: 5, day: 31 }, types: ['活動'], summary: '禁羈民主與惡趣技藝：亞太地區第一屆皮繩愉虐情慾與文化國際學術研討會', detail: '此研討會「於2015年5月31日在台灣大學法學院霖澤館舉辦，是台灣第一次以BDSM為主題的研討會。本次活動由台灣大學研究生協會、台大皮繩愉虐社、台灣同志跨國同盟及皮繩愉虐邦共同主辦。活動旨在正視BDSM（皮繩愉虐與束縛、統治與服從、施虐與受虐）情慾與實踐，探討性愉虐在女性主義、多元性別、暴力與愉悅的關係、校園社團成立困境等議題，結合學術研究與社群行動，同時亦聲援甫成立的台大BDSM社。', place: '台灣大學法學院霖澤館國際會議廳', refs: [] },
  { importance: 3, start: { year: 2015, month: 10, day: 31 }, types: ['遊行'], summary: '2015 台灣同志遊行「年齡不設限 解放暗櫃 青春自主」', refs: [] },
  { importance: 3, start: { year: 2015, month: 11, day: 29 }, types: ['表演'], summary: '2015舞動繩姬', refs: [] },
  { importance: 3, start: { year: 2015, month: 12, day: 12 }, types: ['活動'], summary: '皮繩愉虐邦於Commmader D最後一場脫殼日', refs: [] },
  { importance: 3, start: { year: 2016, month: 2, day: 13 }, types: ['活動'], summary: 'Commander D於2016年2月起舉辦飛客日', refs: [] },
  { importance: 3, start: { year: 2016, month: 8, day: 16 }, types: ['網路平台'], summary: 'PTT BDSM版開版連署', refs: [{ url: 'https://www.ptt.cc/bbs/L_BoyMeetsGi/M.1471359494.A.1E1.html' }] },
  { importance: 9, start: { year: 2016, month: 9, day: 6 }, types: ['網路平台'], summary: 'PTT BDSM版開版', detail: '在花魁藝色館關站之後，由PTT Sex版連署另外成立的PTT BDSM版逐漸成為另一個網路上重要的的禁羈社群活動布告欄及言論集散地。', refs: [] },
  { importance: 3, start: { year: 2016, month: 10, day: 29 }, types: ['遊行'], summary: '2016 台灣同志遊行「一起 FUN 出來——打破「假友善」，你我撐自在」', refs: [] },
  { importance: 3, start: { year: 2016, month: 11 }, types: ['組織'], summary: '台師大多元性慾友善社成立', refs: [] },
  { importance: 3, start: { year: 2016, month: 12, day: 24 }, types: ['活動'], summary: '2016Kinky異色市集', detail: '本次市集活動為台灣第一個禁羈社群市集活動', refs: [] },
  { importance: 9, start: { year: 2017, month: 1 }, types: ['網路平台'], summary: 'BDSM Calendar 網頁版開始經營', detail: 'https://todo.smertw.com/', refs: [] },
  { importance: 3, start: { year: 2017, month: 4 }, types: ['空間'], summary: 'MySpace開始營運', detail: '台灣禁羈社群第一個由個人名義營運的空間/工作室', place: 'MySpace', refs: [] },
  { importance: 3, start: { year: 2017, month: 7, day: 22 }, types: ['活動'], summary: '2017 Kinky異色市集', refs: [] },
  { importance: 3, start: { year: 2017, month: 8, day: 27 }, end: { year: 2017, month: 9, day: 2 }, types: ['表演'], summary: '皮繩愉虐邦劇團2017臺北藝穗節《寵物的生物本能》', refs: [] },
  { importance: 3, start: { year: 2017, month: 10, day: 28 }, types: ['遊行'], summary: '2017 台灣同志遊行「澀澀性平打開開 多元教慾跟上來」', refs: [] },
  { importance: 3, start: { year: 2018, month: 10, day: 27 }, types: ['遊行'], summary: '2018 台灣同志遊行「性平攻略由你說．人人 18 投彩虹」', refs: [] },
  { importance: 3, start: { year: 2018, month: 12, day: 23 }, types: ['活動'], summary: '2018 Kinky異色市集', refs: [] },
  { importance: 9, start: { year: 2019, month: 4, day: 28 }, types: ['表演'], summary: '皮繩愉虐邦《禁羈社群》原創音樂劇', detail: '皮繩愉虐邦劇團首齣由台北市文化局贊助之演出', refs: [{ url: 'https://bdsmtw.kktix.cc/events/kinkycommunity' }] },
  { importance: 3, start: { year: 2019, month: 10, day: 26 }, types: ['遊行'], summary: '2019 台灣同志遊行「同志好厝邊」', refs: [] },
  { importance: 3, start: { year: 2020, month: 1, day: 18 }, types: ['活動'], summary: '2020異色新年市集', org: 'MySpace', refs: [] },
  { importance: 15, start: { year: 2020, month: 3, day: 18 }, types: ['新聞媒體'], summary: 'CTWANT偷拍 BDSM同樂會事件', detail: '2020年3月，台灣週刊媒體 CTWANT 記者潛入台北市南京東路一間地下室 Pub。該處當時正由「BDSM同樂會」組織包場舉辦同好交流活動。記者在未經與會者知情同意的情況下進行內部偷拍，並於3月18日發布一系列以「【體液破防疫】富二代瘋玩SM」為題的獵奇式報導。報導強烈指責現場上百名參與者「不戴口罩」進行綑綁、抽打等行為，並藉由當時的COVID-19疫情，將該活動貼上「恐怖疫病溫床」與墮落的標籤。報導曝光後，同樂會於3月19日隨即宣布暫停後續活動。此事件在台灣禁羈社群及性少數社群間引發強烈震怒與檢討，許多人痛批媒體刻意隱瞞身份進行侵入式偷拍，並利用「防疫」之名作為道德制高點，藉此醜化、污名化性少數族群的私人合法活動。這起事件深刻凸顯了當時八卦媒體在點閱率導向下，對次文化隱私權的踐踏與獵巫現象。', refs: [{ label: '原始新聞連結', url: 'https://www.ctwant.com/article/41650/' }, { label: '後續社群回應', url: 'https://www.facebook.com/della.wang.2015/posts/pfbid0d1jqkvyGiWLYm5weXjzXBEHC6sovwd7uaFD54TCxf8LefUimQGDPpNE5ydpw9dMZl' }, { label: '後續社群回應', url: 'https://www.facebook.com/shin.nawakiri/posts/pfbid0GoG3QKmyajLh2922Zxr15tNnu6d1WypwqGwtosqPJkab3jLy8on6qEFAtiEMsmaxl' }] },
  { importance: 3, start: { year: 2020, month: 10, day: 31 }, types: ['遊行'], summary: '2020 台灣同志遊行「成人之美 BEAUTY, MY OWN WAY」', refs: [] },
  { importance: 15, start: { year: 2021, month: 5, day: 15 }, end: { year: 2021, month: 7, day: 26 }, types: ['社會事件'], summary: 'COVID-19 疫情全國第三級警戒', detail: '2021 年 因應本土 COVID-19 確診病例急遽增加，首度實施全國疫情第三級警戒。期間嚴格執行外出全程配戴口罩、停止室內 5 人及室外 10 人以上的聚會，並關閉休閒娛樂場所、全面禁止餐飲內用，禁羈社群也不得不停止所有聚會性質的活動，部分聊天性質的聚會轉至線上舉行，亦有人發起線上讀書會等活動。此警戒歷時兩個多月，使得部分場地結束營業，同時也使得台灣禁羈社群在網路平台上更為活躍。', refs: [] },
  { importance: 3, start: { year: 2021, month: 10, day: 30 }, types: ['遊行'], summary: '2021 台灣同志遊行因應COVID-19疫情，改線上舉辦', refs: [] },
  { importance: 3, start: { year: 2021, month: 12, day: 19 }, types: ['活動'], summary: '2021聖誕異色市集', org: 'MySpace', refs: [] },
  { importance: 9, start: { year: 2022, month: 8, day: 27 }, end: { year: 2022, month: 8, day: 28 }, types: ['表演'], summary: '皮繩愉虐邦《禁羈社群2.0》非典型原創音樂劇', detail: '皮繩愉虐邦劇團首齣由文化部贊助之演出', refs: [{ url: 'https://www.accupass.com/event/2203170515331706993360' }, { url: 'https://shibaru.life/2022/09/kc2/' }] },
  { importance: 9, start: { year: 2022, month: 10, day: 29 }, types: ['遊行'], summary: '2022 台灣同志遊行「無・限・性——解構框架，性／別無限」', detail: '20週年主題說明中提及「BDSM中的主奴關係等議題也應被看見」，並邀請皮繩愉虐邦於主舞台上宣講台灣過去20年的BDSM社群發展', refs: [] },
  { importance: 3, start: { year: 2023, month: 1, day: 20 }, end: { year: 2023, month: 1, day: 21 }, types: ['活動'], summary: '2023 異色市集 大發異市', org: '伍拾玖x束室', refs: [] },
  { importance: 3, start: { year: 2023, month: 5, day: 4 }, types: ['空間'], summary: 'MySpace結束營運', refs: [{ url: 'https://www.facebook.com/esther.culprit/posts/pfbid0cdmMkjNEcuhSCt35MDN7ZVZiNUJFz62KrZRyfm1496rwUevScj3T2WtW6hjwTmKTl?__cft__[0]=AZgAUNOmsqRCGwelaSVCC4KxPlfRqrE-zeM69pAcMPuEmbBsbGmnhQbR_BhjseqTpJSSaEDSqX8N51wXaIx7bXzOKK_-v6LreVpAC6QATv-rGvgeT7E09Cf33N0osRirkqRaMWQTqMNOx6EAE7dmLwjhcA86_1U8dnd3tPENnh06bZVCvlW-krDs6K7ljRGqenrwPTmBpsUBuGdipVw&__tn__=%2CO%2CP-R' }] },
  { importance: 3, start: { year: 2023, month: 6, day: 18 }, types: ['活動'], summary: '2023 異色主寵市集', org: '伍拾玖x束室', refs: [] },
  { importance: 3, start: { year: 2023, month: 10, day: 28 }, types: ['遊行'], summary: '2023 台灣同志遊行與多元同行 （Stand with Diversity）」', refs: [] },
  { importance: 3, start: { year: 2023, month: 12 }, types: ['網路平台'], summary: 'BDSM小白板上線', refs: [] },
  { importance: 3, start: { year: 2024, month: 7, day: 20 }, end: { year: 2024, month: 7, day: 21 }, types: ['活動'], summary: '2024 異色市集 大玩具祭', place: '萬華區遇見青旅', refs: [] },
  { importance: 9, start: { year: 2024, month: 7, day: 27 }, end: { year: 2024, month: 7, day: 28 }, types: ['活動'], summary: '第一屆亞太禁羈研討會', detail: '本次活動由台灣情感教育協會及禁羈學術委員會籌辦，在2024年7月假東吳大學城中校區舉行，研討會以論文發表、論壇及分組討論等形式，探討禁羈相關的法律、文化、風險、社群與性別/情慾等議題，同時亦舉辦論壇回顧皮繩愉虐邦、學生禁羈社團、犬圈文化等社群文化及歷史主題。目前為台灣第一個定期舉辦的禁羈學術研討會。', place: '東吳大學城中校區', refs: [{ url: 'https://trea.oen.tw/events/2gEfFb9Mrs9LCn63V86jxG5ATPJ' }] },
  { importance: 3, start: { year: 2024, month: 8, day: 24 }, end: { year: 2024, month: 8, day: 25 }, types: ['活動'], summary: '府城KINKY嘉年華', refs: [] },
  { importance: 3, start: { year: 2024, month: 10, day: 26 }, types: ['遊行'], summary: '2024 台灣同志遊行', refs: [] },
  { importance: 3, start: { year: 2025, month: 1, day: 18 }, end: { year: 2025, month: 1, day: 19 }, types: ['活動'], summary: '2025異色市集 異市界', refs: [] },
  { importance: 15, start: { year: 2025, month: 6, day: 4 }, types: ['法院判決', '社會事件'], summary: '臺灣新北地方法院113年度訴字第836號刑事判決', detail: '法院在此案中將涉及知情同意的BDSM影像，認定為釋字第617號所稱之「性虐待」猥褻物品並違反刑法第235條', refs: [] },
  { importance: 3, start: { year: 2025, month: 7, day: 19 }, end: { year: 2025, month: 7, day: 20 }, types: ['活動'], summary: '2025異色市集', place: '萬華遇見青旅', refs: [] },
  { importance: 3, start: { year: 2025, month: 8, day: 22 }, end: { year: 2025, month: 9, day: 6 }, types: ['表演'], summary: '皮繩愉虐邦《SM調教事件簿》沈浸式遊戲', refs: [] },
  { importance: 3, start: { year: 2025, month: 12, day: 20 }, end: { year: 2025, month: 12, day: 21 }, types: ['活動'], summary: '府城KINKY嘉年華', org: '底家', refs: [] },
  { importance: 9, start: { year: 2026, month: 3, day: 27 }, types: ['法院判決'], summary: '臺灣臺北地方法院 114 年度侵訴字第 103 號刑事判決', detail: '本件刑事判決涉及刑法227條與未滿14歲未成年人性交罪，法官於判決書中審酌被告主張與原告（即未成年被害人）之間存在合意D/S關係，且被告已與原告母親達成和解及賠償，考量被告未使用強暴脅迫且自始坦承犯行不諱，雖刑法227條最低本刑為三年以上有期徒刑，法官酌情宣告減刑，處有期徒刑二年，緩刑三年。本案件因涉及未成年人性侵議題及禁羈議題，在網路社群上引發廣泛討論。', refs: [{ url: 'https://judgment.judicial.gov.tw/FJUD/data.aspx?ty=JD&id=TPDM%2C114%2C%E4%BE%B5%E8%A8%B4%2C103%2C20260327%2C1' }] },
  { importance: 9, start: { year: 2026, month: 7, day: 25 }, end: { year: 2026, month: 7, day: 26 }, types: ['活動'], summary: '第二屆亞太禁羈研討會', detail: '本次研討會以「（不）安全 × （不）平權 ⇆ 復元 × 賦權」為核心命題，邀請各領域的碩博士生、學者、研究者，認真審議安全與平權的動態辯證關係，集體探索從不安全的創傷經驗、不平權的現況，如何朝向復元、韌性、修復的可能性，並達到自我賦權、集體增能的目的。', place: '東吳大學城中校區', refs: [{ url: 'https://bdsmask.org/' }] },
  { importance: 9, start: { year: 2026, month: 9, day: 11 }, types: [], summary: '台北市議員質詢提及Commander D', detail: '台北市議員洪健益於市議會質詢時，表示接獲家長陳情指出西門町BDSM同志酒吧「Commander D」涉嫌讓未成年人進入，要求台北市政府釐清並加強未成年保護機制，市長蔣萬安亦表示將嚴加查辦，若有不法絕不寬貸。', refs: [] },
  { importance: 9, start: { year: 2026, month: 10, day: 3 }, types: [], summary: 'Commander D警察搜索事件', detail: '2026年10月3日，台北西門町BDSM同志酒吧「Commander D」遭台北市警察局萬華分局持搜索票突擊搜查，現場警員被指要求現場人員不得穿回衣服及攝錄影，更對身障人士發表歧視言論。突擊搜索後警方不僅上銬帶走酒吧負責人、更宣稱51名顧客「自願」被帶回警局盤問。後續輿論迅速延燒，超過百名民眾10月4日至西門町紅樓前抗議，批評警方執法過當與歧視性少數，並遊行至西門町派出所要求警方出來給個說法、釋放負責人。事後台北市長蔣萬安隨後致歉執法上有瑕疵，台北市警察局也坦承員警言行不當，對6名相關警員及長官分別給予申誡、記過等行政處分。', refs: [] },
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
