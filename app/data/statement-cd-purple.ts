import type { Localized } from '../i18n/index.ts'
export interface PurpleGroup {
  /** Stable id, also used for the logo file and the fallback colour. */
  slug: string
  name: Localized
  /** Organisation website or social page; empty when the group has none. */
  url: string
  /** Logo under public/logos/; null falls back to a coloured text block. */
  logo: string | null
  /** Brand-ish colour for the fallback block and card accent. */
  color: string
  intro: Localized
  /** Short message of support for the site; empty when the group did not provide one. */
  support: Localized
  /** Speech given from the Purple Contingent, one paragraph per entry (Chinese only); empty when not yet provided. */
  speech: string[]
}

/** Date of the sheet this file was synced from (YYYY.MM.DD). */
export const purpleUpdated = '2026.10.28'

// 同步來源：「CD事件聲明_2026-臺灣同志遊行紫色大隊宣講內容（持續更新）」表單回覆 V2。
// 宣講全文僅中文；英文只翻譯單位介紹與聲援短語。英文單位名以 logo 或官網為準，無者為本站翻譯。
export const purple: PurpleGroup[] = [
  {
    slug: 'rainbow-city-symphonic-band',
    name: { zh: '彩虹城市管樂團', en: 'Rainbow City Symphonic Band' },
    url: 'https://rcsb-tw.com',
    logo: '/logos/rainbow-city-symphonic-band.webp',
    color: '#f28c3b',
    intro: { zh: '本樂團由一群友善於LGBTQ+族群且熱愛管樂的人士組成，自2015年10月底以來，我們積極參與每年的臺灣同志遊行，致力於為同志發聲並捍衛平權。儘管團員們並非職業樂手，他們仍願意犧牲假日時間，定期於周日晚間練習，以培養默契和演奏實力，力求藉由自我充實來積極發聲，邁向理想目標。 近年來，我們的指導老師非常專注於提升樂手的基本能力，透過系統化的訓練，團員們不斷挑戰自我，每年都追求更高的水平。我們樂團持續努力展現特色，目標是成為亞洲第一的LGBTQ+管樂團，讓更多人因我們的理念、特色和音樂感受到充沛的能量。', en: 'A wind band of LGBTQ+-friendly music lovers who have marched in every Taiwan LGBT+ Pride since October 2015, speaking up for the community and defending equal rights. None of the members are professional players, yet they give up their Sundays to rehearse together, building both ensemble and skill so that their playing can carry their message. In recent years their conductor has focused on fundamentals, pushing the band to a higher level every year. Their goal is to become Asia\'s leading LGBTQ+ wind band and to let more people feel the energy of their ideals, their character and their music.' },
    support: { zh: '雖然我平時沒有特別接觸或深入了解『台灣禁羈資訊導航站』，但我很認同這個平台存在的價值。 在一個多元開放的社會裡，每個人對於自我探索、身體自主，以及不同的生活風格或次文化，都應該擁有被尊重、被理解的空間。看到有這樣一個致力於提供安全對話、理性溝通與正確資訊的平台，我覺得是非常難得且值得肯定的事。', en: 'I don\'t usually engage much with the Taiwan Kink Navigator, but I fully recognise the value of a platform like this. In a plural, open society, everyone\'s self-exploration, bodily autonomy and different lifestyles or subcultures deserve space to be respected and understood. Seeing a platform dedicated to safe conversation, reasoned dialogue and accurate information is rare and worth affirming.' },
    speech: [],
  },
  {
    slug: 'yonghe-home-care',
    name: { zh: '勇禾居家長照機構', en: 'Yonghe Home Care' },
    url: 'https://instagram.com/dayashanyang',
    logo: '/logos/yonghe-home-care.webp',
    color: '#f3a51b',
    intro: { zh: '勇禾居家長照機構結合了「勇氣」、「溫暖」、「小麥金黃」與「陽光」的意象，象徵我們在長照路上堅持不懈的信念與真摯的關懷。', en: 'Yonghe Home Care brings together the images of courage, warmth, golden wheat and sunshine, standing for our steadfast belief and sincere care along the long-term care journey.' },
    support: { zh: '💜勇禾居家長照機構溫暖聲援紫色大隊！我們相信，照顧不只是陪伴，更是理解、尊重與接納。無論身體、情慾或生活方式如何不同，每個生命都值得被善待。願我們以勇氣守護尊嚴，以溫暖陪伴彼此，以尊重擁抱多元，讓每個人都能安心做自己，溫柔共好。🌾🏳️‍🌈', en: 'Yonghe Home Care warmly stands with the Purple Contingent. We believe care is not only companionship but understanding, respect and acceptance. However different our bodies, desires or ways of living, every life deserves to be treated well. May we guard dignity with courage, accompany one another with warmth and embrace diversity with respect, so that everyone can safely be themselves.' },
    speech: [
      '💜 勇禾居家長照機構｜溫暖聲援紫色大隊',
      '🌾 勇禾相信照顧不只是身體上的陪伴，更是對每一個生命的理解、尊重與接納。',
      '每個人都有不同的身體、情慾、關係與生活方式，就像每一株小麥都有自己的生長姿態，都值得被溫柔對待，也都擁有自在綻放的權利。',
      '我們願意以陪伴取代偏見，以理解取代污名，讓關懷不因差異而有所保留，讓尊嚴不因不同而受到限制。',
      '勇禾的精神，是以勇氣守護尊嚴，以溫暖陪伴生命，以尊重接納每一種不同。',
      '願我們帶著善意與勇氣，溫柔而堅定地走在一起，讓每個人都能安心做自己，也都能在需要時，找到願意陪伴自己的力量。',
      '💜 勇禾居家長照機構，溫暖聲援紫色大隊與多元情慾社群。',
      '🌈 陪伴・尊重・多元・共好',
      '因為每個生命都值得被好好對待。',
    ],
  },
  {
    slug: 'taiwan-engagement-association-for-youth',
    name: { zh: '台灣青年思潮協會', en: 'Taiwan Engagement Association for Youth' },
    url: 'https://www.instagram.com/2025t.ea/',
    logo: '/logos/taiwan-engagement-association-for-youth.webp',
    color: '#4f9a4a',
    intro: { zh: '「台灣青年思潮協會」是由一群擁有學生自治經驗、關懷不同議題的青年組成。從事與青年切身相關的政策倡議，範圍包括性別平等兵役制度、居住正義、青年結社等，CD事件發生時製作資訊彙整，並加入熱線發起的團體聲明。', en: 'Founded by young people with student-government experience who care about a range of issues, the association advocates on policies that affect youth directly, from gender equality in conscription to housing justice and youth associations. After the Commander D raid it compiled an information digest and joined the joint statement initiated by the Taiwan Tongzhi Hotline.' },
    support: { zh: '' },
    speech: [
      '台下各位夥伴大家好！！',
      '我是台灣青年思潮協會的邱奕翔，我也是一名BDSMer，圈內名是湯姆狗狗。',
      '青年思潮是由一群有學生自治背景、關心不同議題的公共參與青年所組成，我們推動政策改革、辦理培力活動。我們關注的議題包括居住正義、交通平權，當然還有重要的性別議題。',
      '這次Commander D事件我們同樣高度關注，我們都有看到警察、看到國家如何使用肢體暴力、言語暴力對待酷兒夥伴，看到公權力如何不顧人民的隱私和尊嚴，侵入、曝光和羞辱酷兒的情慾空間。',
      '（我們都有看到對不對！）',
      '台灣常常強調自己是性別平等的國家，我們卻看到政府仍然用法律用公權力、用猥褻/妨害風化的名義，逼我們下跪、查禁我們的情慾、管制我們的身體、摧毀我們的生存空間',
      '更可怕的是，不只是警察執法，國家將同一套父權陽剛文化的身體管制邏輯，延伸到國家治理的方方面面',
      '例如國家無視服兵役人民多元的性別氣質，一律強制剃光頭，但是對女性設計不同的髮式標準，因為在國家眼中你是個男人，你就應該保持陽剛，所以暴力地將人民塞進二元性別框架中。',
      '除此之外，接受兵役體檢的人民如果是跨性別者或主張自己有性別不安，部分體檢醫院會強制受檢者住院、沒收手機、抽血檢查。我們的身體自主、我們的人身自由，在父權陽剛國家的眼中可以任意地被侵犯、隨便地被踐踏。',
      '所以國家的身體管制，不只關乎情慾，更不只是女性、酷兒或性多樣群體的事，在父權國家管制下所有性別都在受苦、所有性別都在承受不合理的要求。',
      '因此，我們號召所有性別、所有性傾向、所有性偏好都加入我們的紫色大隊，共同大聲地告訴政府、大聲地要求國家尊重我們的生存空間、尊重我們的身體自主',
      '請大家跟我們一起喊口號：「我要身體自主，拒絕父權執法」',
    ],
  },
  {
    slug: 'quiet-years-rickshaw',
    name: { zh: '歲月靜好人力車', en: 'Quiet Years Rickshaw' },
    url: '',
    logo: null,
    color: '#8b5cf6',
    intro: { zh: '你理所當然的歲月靜好，是前人篳路襤褸、付出了青春、血淚與生命所換來的；為了延續這份得來不易的自由，該輪到我們為彼此負重前行了。', en: 'The quiet, peaceful days you take for granted were won by those before us, who paid with their youth, their blood and tears and their lives. To keep this hard-won freedom, it is our turn to carry the weight for one another.' },
    support: { zh: '十一月二十八，給我去投票！', en: '28 November: go and vote.' },
    speech: [
      '［誰的歲月靜好？誰在負重前行？：性少數的獻祭，永遠玩不膩］',
      '話還要從人力車說起。前一陣子看《大濛》，一個外省兵踩著三輪車載著一個小女孩，穿越過1950年代的台北。故事裡，小女孩14歲，叫阿月，哥哥被國民黨槍決。她隻身一人來到台北，以為她可以贖回哥哥的遺體。',
      '看著阿月，我熊熊想起了高中時的國文老師，施美惠老師。她說她也曾坐過人力車。那時候，她還是個小女孩，或許比電影裡的阿月更小。我認識她時，她已屆退休之齡，但氣韻優雅卻絲毫未被歲月掩蓋。她回憶起當時她坐在車上，總是用力地顛著腳，希望這樣自己的體重可以少一些、希望人力車伕可以因此輕鬆一些。',
      '前一陣子，網路上流傳著一句話：「你的歲月靜好，只是有人為你負重前行」。語出中國作家蘇心，比喻一個人安穩生活的背後，總有著他的家人、或其他工作者所默默承受著辛苦。十年之前，無論是在青島東或是總統府，我們一次又一次地站上街頭，歧視與羞辱不曾停歇，但我們以愛之名、風雨同路。如今，同婚通過了七年了。終於人們可以不分性傾向地自由選擇：你要享受婚姻的束縛、還是走出愛情的墳墓。',
      '一度我也以為：「總該輪到我躺平，享受一下歲月靜好的日子」了吧？、「我再也不會因為我喜歡誰、因為我做愛的方式，就被陌生人攻擊」了吧？、「我也值得擁有，那種免於活在恐懼之中的幸福」了吧？',
      '誰知：一覺醒來，我們回到了三十年前。就在28天前，將近60名的同志朋友，在酒吧遭受警察嚴重莫名地騷擾、惡質地羞辱、強行要求驗毒，並以非法濫權的方式，押送警局。（事後檢察官說沒有這個權利、警局第一時間說依法執行、沒有羞辱一事，後來在各方團體和市議員候選人的抗議施壓，接連公佈了兩波懲處）無論是檢察官、或是法律本身，都沒有為警方惡劣的態度、和濫權執法撐腰。',
      '我就問：只為了一個231容留性交罪，居然讓警方出動了數台警車、安插便衣警察、出動一整組員警攻堅、還提了兩大箱的驗毒工具衝進去。有誰看不出來這是政治操作？！這無非就是一個簡單、卑劣的政治算計。只因為現在某個政治人物，要配合他晚上對對手的抹黑，（信不信，當天只要找到一包），他絕對會以反毒大使的姿態，將同性戀、毒品、BDSM等等污名化的標籤，死死地往他的對手身上黏。且就算什麼都沒有查獲，查抄同志夜店，一樣會被當作他「有在做事」，同樣可以回頭去討好、鞏固他反同、恐性的票倉。',
      '兩年前，這位政治人物，還在哈佛的演講上，把臺灣的同婚、台北的同志遊行、彩虹地景，當作是這座城市多元包容的驕傲。如今，他的選情告急，同志和性少數的生存空間，即刻淪為他政治鬥爭的手段。我們過去無數人、代代努力破除的性污名、過去二十年來，學者專家、以及第一線醫護在藥物濫用戒治和減害上的努力，在他的眼中，都只不過是鬥臭政敵的工具、都只不過是一盆好用的髒水而已。',
      '你以為不碰政治就可以讓你擁有歲月靜好的小確幸嗎？抱歉，在座的每一位，我們每一分被犧牲的自由，每一分額外背負的恐懼，都是被迫在為他的政治生涯，負。重。前。行。',
      '這種拿性少數開刀的把戲，政治人物永遠玩不膩。',
      '1969年的紐約石牆事件、1997年的常德街事件、1998年AG健身房事件、哪一個不是利用社會大眾對性的污名、對疾病的恐懼，利用打壓性少數、來鞏固自己所謂「掃黃掃黑、打擊犯罪」的正面形象，來騙取保守派大眾的輿論支持？',
      '1953年，美國掀起了一波被稱為「薰衣草恐慌」的政治迫害。當時他們的政治人物宣稱，同性戀者性格脆弱、容易被境外勢力勒索利誘、因此將同性戀視為國安威脅。就算是女同志酒吧，也會被警方頻繁地搜查，陽剛的女同志會被男警特別拉出去搜身、羞辱、甚至手伸進褲子性侵，說要確認她們「是不是男人」。',
      '我就問：76年前的薰衣草恐慌、57年前的石牆酒吧，到這個月初的CD事件、在這些警方的濫權執法中，到底保護了誰？討好了誰？誰的權益被犧牲了？誰又因此從中獲得了好處？',
      '醒醒吧。其實並沒有什麼歲月靜好。太平日子裡，他當你是一塊進步人權的樣板來消費，當他民調落後的時話，性少數永遠是他第一個殺來獻祭的代罪羔羊。',
      '［你以為你坐在車上，其實你在拉車：做或不做，都是選擇］',
      '去年我去綠島玩，順道參觀了綠島的白色恐怖紀念園區，四坪不到囚房、要擠下6到10多人，一個牢房角落有一個便坑。他們必須用抹布把底下的排便孔洞塞住，用便坑儲水。囚犯們的便溺、刷牙、洗臉、洗碗筷、洗澡和洗衣服，都靠那個便坑。那裡曾關押了數千名的政治犯，包含了現在的陳菊。',
      '如今，我們平靜、安穩、甚至無聊的生活日常，是世世代代的民主前輩、是人權性權同運的先賢先烈，篳路襤褸、前仆後繼、一點一滴用他們的青春、血淚還有生命，所換取來的結果。',
      '但，民主自由，守成不易；揮之即去。',
      '自由，指得是我國的憲法保障了我們，在我不傷害另一個人自由權利的前提下，我享有我最大的自由權利。民主，則意謂著我們要在每一次選舉與做決策的時候，忍受社會的混亂、競爭、以及彼此的差異。民主，是我們為彼此制定的遊戲規則；自由，是我們為自己所創造信仰與價值。',
      '民主和自由，都是人為創造，不是理所當然。如果我們這一代不積極地參與與守護我們所擁有的一切，那百年來所悉心培養呵護的自由民主、那前人負重前行、得來不易的歲月靜好，是可以在彈指間、輕鬆地毀於一旦的。',
      '不信嗎？',
      '距今一百年前，威瑪共和國的憲法就保障法律之前、人人平等，當時的女性可以參政、可以投票。當時柏林有繁榮地同志酒吧文化、變裝文化，甚至有創立性科學研究所，為性少數的權利所倡議。然而，這樣一個擁有民主憲法、女性參政權和繁盛同志文化的國家，在一九三三年，任命了希特勒作為總理，隨後逐步瓦解民主制度，更擴張原有的刑法第一七五條，全面加強迫同性戀。之後有10萬人次、因相關的罪名被逮捕，約5.34萬次定罪，部分受迫害者被送入集中營。',
      '距今五十年前的阿富汗，曾有一度，部分都市中產階級的女性、是能夠就讀大學、擔任醫師、教師或公務員的。她們擁有服裝穿著與行動自由，你如果去看當時的黑白照片，她們的穿著跟台北女子圖鑑沒有什麼差別。但就在兩年前，根據他們政府所新公佈的《助長美德與預防邪惡法》，其中該法嚴格規定，女性在公共場合必須完全遮蓋身體與臉部、禁止在公共場合發出聲音（包括唱歌、朗讀或大聲說話），且不得無血緣或婚姻關係的男性對視。梅莉史翠普在聯合國大會上發言，她形容說：「如今的（阿富汗），一隻貓可以坐在門前曬太陽，松鼠可以走進公園，但阿富汗女性卻不行」。',
      '距今一個月前，土耳其政府啟動了所謂「我的家庭很安全」專案，大規模地搜索LGBTQ權益組織、愛滋倡議團體、同志酒吧、夜店，甚至活動人士的住宅。伊斯坦堡驕傲遊行曾是穆斯林世界規模最大的同志遊行，然近年來土耳其政府將人口高齡化、生育率下降的問題，歸咎於 LGBTQ運動。官媒更頻繁使用歧視性、標籤化的用語，將同志社群視為外來勢力的陰謀。',
      '在土耳其，同志身分本身並不違法，但當局卻以所謂：「保護兒童、家庭制度與社會秩序」為名，擴大解釋刑法第226條，這條本用於禁止向兒童提供或展示淫穢內容的「猥褻罪」，現在被用作解釋：社群媒體上，張貼同性接吻的貼文是可能被兒童看到的行為；而持有彩虹旗則被當作是犯罪證物。據統計，至少116人遭逮捕，其中至少83人被羈押，另有超過160人受到刑事調查。',
      '有沒有覺得很熟悉？',
      '（這裡也順道送每年都會出現的「乖寶寶穿衣同志」言論一句話：別人要討厭你，不用任何理由。在土耳其你衣服穿得再多、再得體，你拿個彩虹旗，你就犯了猥褻罪。）看你不爽，他迫害你。異性戀不生小孩，他迫害你；生了小孩不會教，他還是迫害你。驚不驚喜，意不意外？',
      '我也曾希望，民主和自由的倒退，不會發生在台灣。但這不是不可能，而且它正在發生。國民黨的賴士葆，在反同婚集會時公開表示：「若2020年國民黨當選，將會把同性婚姻「『全部改回來』」。',
      '也就在28天前，國民黨蔣萬安選情告急，西門町的同志BDSM酒吧遭到地方警力惡意的查抄。當天警方沒對客人出示搜索票、搜索票上也沒有准許警方對當天的客人進行搜索。但警察卻拿護身符裡面的香灰去驗毒；還抓冰桶裡的冰塊洗手，洗完手再丟回去！當天在場的身障者被員警羞辱，被嘲笑說：「殘障也可以做愛喔」，當天店長出聲聲援障礙者，還因此被壓制上銬。市政府至今仍然宣稱，被押送警局的52多名同志，「都是自願」的。',
      '這家店在那邊開了14年了，這14年來，警方無數次的臨檢，店家有哪一次沒有配合？但這14年來，有哪一個台北市民、是因為這家店的存在、因為這是一間BDSM酒吧、一間同志酒吧所以受到傷害嗎？',
      '沒有。',
      '你以為現在是歲月靜好的日子，但當這些政治人物開始被人民所唾棄，他們永遠是第一個拿性少數當箭靶，來轉移大眾的焦點、樹立彼此的仇恨、創造社會的對立，只為了鞏固自己。而你因為他骯髒的政治的手段被迫犧牲、你承擔著社會污名，沒有選擇地、負重前行。',
      '你以為你可以不關心政治，但政治一定會找上你。不關心政治的下場，就是被糟糕的人所統治。民主自由，沒有富二代，只有敗家子。',
      '［為了彼此的歲月靜好，我們一起負重前行］',
      '最後我要說，歲月靜好、本無錯。',
      '然，在過去1994年，兩名北一女中資優班的學生，在旅館相約燒炭自殺，遺書寫道「社會生存的本質就不適合我們」。2000年，國三學生葉永鋕，因爲他的性別氣質、而長期遭受霸凌，最後在廁所、他被發現倒臥在血泊中，送醫不治。2005年，兩名男同志在宜蘭蜜月灣的海灘上接吻，被群眾圍剿，丟擲石頭、酒瓶，致使一名同志頭部流血砸傷，警方反而縱容現行犯、刁難受害者，以「警方沒辦法保護同志安全」為由，要求全身是傷的被害人自行離開。2018年，反同公投綁大選，社會上充斥著大量反同言論與攻防，至少有9起同志因此自殺身亡的事件。',
      '不論你是不是同志、性少數、BDSMer，我們想要的、無非跟所有人一樣：我們想要走在大街上、不會被攻擊的自由；我們想要不會因為我所愛的人的性別、我做愛的方式，就被傷害的自由；我們也想要免於恐懼地活著、歲月靜好的自由。在此之上，我們也想要被尊重、被看見、甚至能被祝福、能活出自己的樣子的自由。',
      '但自由和民主沒有血緣、不會遺傳。我們現在所擁有的一切，得來不易。「受苦的人，沒有悲觀的權利」。在民主的遊戲規則中，為了今天、以及未來的歲月靜好，我們現在、必須為我們彼此、負重前行。',
      '所以，如果你跟我一樣，為了最近的事情感到難過、扭曲、憤怒、噁心，請你去投票。不論你對政治有多無感、覺得政治有多髒，請你去投票。即便你覺得自己很渺小、改變不了什麼，少了我這一票沒差，請你去投票。縱使檯面上的政治人物，沒有一個讓你滿意，還是請你盱衡局勢、審慎評估，然後去投票。',
      '因為民主不是選出百分之一百完美的政治人物；民主是一次又一次地，用自己手中的選票，捍衛那些、我們生而為人、所應得的自由和權利。',
      '身為性少數、身為同志、身為社會結構的被壓迫者，不論你喜不喜歡，我們都被迫拖著時代的巨輪，負重前行；如今，同婚合法化邁入第七年了，如果你珍惜我們現在所擁有的一切、珍惜這歲月靜好的無聊日常，請你在11月28日，勇敢地，去為了我們的人權、我們的尊嚴、我們的生存空間，去投下你手中那張可以改變未來的一票。',
    ],
  },
  {
    slug: 'nthu-aiyu',
    name: { zh: '清大愛慾實務社', en: 'NTHU Love & Desire Practice Club' },
    url: 'https://www.facebook.com/nthuaiyu/?locale=zh_TW',
    logo: '/logos/nthu-aiyu.webp',
    color: '#f0a23a',
    intro: { zh: '愛慾實務社是新竹第一個情慾與性的社團，致力於建立討論性的友善空間，我們規劃講座邀請專業講師分享性知識、辦理工作坊透過實踐認識性，也會不定期舉辦聊天會，讓社員互相交流感情與對於性議題的看法。', en: 'Hsinchu\'s first student club on desire and sexuality, the club works to build a friendly space for talking about sex. It runs lectures with professional speakers on sexual knowledge, workshops that explore sexuality through practice, and informal meet-ups where members share feelings and views on sexual issues.' },
    support: { zh: '希望未來有一天，在尊重他人的前提之下，我們可以大聲說出自己的慾望。 我們可以大聲說出自己參加過愛慾實務社的活動，而不必感到羞恥； 我們可以大聲說出自己是BDSMer，而不會遭到訕笑與異樣的眼光； 我們可以大聲說出自己是禁羈實踐者，而不用擔心遭到公權力壓迫。', en: 'We hope that one day, with respect for others as the premise, we can speak our desires out loud. That we can say we took part in the club\'s events without shame; that we can say we are BDSMers without being mocked or stared at; that we can say we are kink practitioners without fearing oppression by state power.' },
    speech: [
      '大家好，我們是清大愛慾實務社，時常被認為是校園裡神祕的社團。',
      '事實上從2020年開始，我們就在校園裡舉辦許多講座與工作坊，推廣並探索情慾、性別、親密關係的多樣性。',
      '然而六年過去了，多數人對於「性」和「情慾」的想像，仍然停留在單一的傳統框架之中，所以選擇以嘲笑的方式，在我們的宣傳貼文底下標註朋友。',
      '這也導致許多真正想來參加我們社課、對於情慾有所好奇的人，遲遲不敢來愛慾實務社。',
      '整個社會對情慾的討論，懷抱著巨大的恐懼，但我們恐懼的究竟是什麼？',
      '剛接下社長的時候，我還不敢讓身邊朋友知道自己的身分，只是單純希望這個能夠安心探索情慾的空間不要消失。',
      '這個空間可以凝聚認同，可以抵抗污名，可以讓更多人正確認識多元性別、情慾以及禁羈相關議題。',
      '這樣的空間，不該成為被凝視與奇觀化的對象。',
      '因此，CD事件發生後，我們選擇勇敢站出來，撕下恐懼與污名的標籤。',
      '我們認為情慾不該被上銬，因為我們沒有做錯任何事情，而且我們比任何人更在乎知情同意。',
      '我們要重新貼上驕傲的標籤，解開自我污名的手銬。',
      '讓大家知道，談論並實踐情慾的多樣性，是一件很正常、健康的事情。',
      '希望未來有一天，在尊重他人的前提之下，我們可以大聲說出自己的慾望。',
      '我們可以大聲說出自己參加過愛慾實務社的活動，而不必感到羞恥；',
      '我們可以大聲說出自己是BDSMer，而不會遭到訕笑與異樣的眼光；',
      '我們可以大聲說出自己是禁羈實踐者，而不用擔心遭到公權力壓迫。',
      '最後，邀請大家和我們一起大聲說出：',
      '「情慾不該被上銬！」',
      '「污名應該變驕傲！」',
      '我們是清大愛慾實務社，謝謝大家！',
    ],
  },
  {
    slug: 'shu-gender-studies',
    name: { zh: '世新大學性別研究所', en: 'Graduate Institute for Gender Studies, Shih Hsin University' },
    url: 'https://gndrshu.wp.shu.edu.tw/',
    logo: null,
    color: '#2f8f9d',
    intro: { zh: '為北部唯一之性別研究所，結合學術研究與社會實踐，推動性別平權。', en: 'The only graduate institute of gender studies in northern Taiwan, combining academic research with social practice to advance gender equality.' },
    support: { zh: '' },
    speech: [],
  },
]
