// English versions of the chronicle events shown on the page (importance >= SHOW_THRESHOLD).
// Keys are the Chinese `summary` strings in chronicle.ts, copied exactly; dates live in the date column, not here.

export interface ChronicleEventEn {
  summary: string
  detail?: string
  org?: string
  place?: string
}

/** English labels for the Chinese type tags used in chronicle.ts. */
export const typeNamesEn: Record<string, string> = {
  出版刊物: 'Publication',
  新聞媒體: 'News media',
  法規: 'Law',
  法院判決: 'Court ruling',
  活動: 'Event',
  社會事件: 'Public incident',
  空間: 'Space',
  組織: 'Organisation',
  網路: 'Internet',
  網路平台: 'Online platform',
  表演: 'Performance',
  遊行: 'Parade',
}

/** Keyed by the Chinese `summary` in chronicle.ts, exactly as written there. Events without an entry fall back to Chinese. */
export const eventsEn: Record<string, ChronicleEventEn> = {
  'KKCity 性版・花魁藝色館開版': {
    summary: 'Adult board Huakui Yiseguan opens on KKCity',
    detail: "An adults-only board, Huakui Yiseguan, was set up on the KKCity BBS. Under the declaration “break the stigma, rebuild sexual rights”, it became an online gathering place for people exploring their desires and for sexual minorities, and grew into the board with the most users of any site hosted on KKCity. Many of its active users from that period later became key figures in founding organisations and running events in Taiwan's kink community.",
  },
  '同志箱屍案': {
    summary: 'Gay suitcase death case',
    detail: 'In February 2001, a gay man using the handle “Nuequan” met up with a man he knew online for erotic asphyxiation and accidentally caused his death, then put the body in a suitcase and dumped it. The case caused a public uproar. Media coverage was largely speculative and sensational, and went as far as stigmatising gay people as a group. The case brought together the Taiwanese gay movement, then still in its early days, and pushed it to organise, take to the streets, campaign for legislation and human rights, and challenge structural inequality in the system.',
  },
  '2003年第四屆台北同玩節舉辦第一屆同志遊行': {
    summary: '2003: the 4th Taipei LGBT Civil Rights Festival holds the first Pride march',
    detail: "The Taipei LGBT Civil Rights Festival was Taiwan's first series of LGBT civic events hosted and budgeted by the government (Taipei City Government). First held in 2000, it featured a rainbow fair, community group stalls, issue forums, and arts and performances. Its aim was to promote diversity, inclusion and equal rights. In 2003 it held its first Pride march, a milestone in the Taiwanese LGBT movement's move into the open and into legitimacy. Founding members of BDSM Company took part in organising from the very first Pride march.",
    place: '228 Peace Memorial Park to the Red House, Ximending',
  },
  '皮繩愉虐邦第一次Munch': {
    summary: "BDSM Company's first munch",
    detail: 'The earliest public kink event that can currently be traced in online records. (We welcome more historical material.)',
    org: 'BDSM Company',
  },
  '2005 夜色繩艷': {
    summary: '2005 Yese Shengyan (Night of Rope)',
    detail: "The first time Taiwan's kink community publicly invited a rope artist from abroad (Kannagi) to perform in Taiwan, and the first ticketed public rope bondage performance.",
    org: 'BDSM Company',
    place: 'Baishui Arts Space',
  },
  '《皮繩愉虐邦》同名書籍由性林文化出版': {
    summary: 'Book BDSM Company, named after the group, published by Xinglin Culture',
    detail: "The book records the history and shared experience of Taiwan's first public BDSM group, and also looks back at earlier writing, practical techniques and personal reflections.",
    org: 'BDSM Company',
  },
  '大法官會議釋字第617號解釋': {
    summary: 'Judicial Yuan Interpretation No. 617',
    detail: 'Divided the “obscene materials” in Article 235 of the Criminal Code into “hardcore” and “softcore”. Material containing violence, sexual abuse or bestiality that objectively has no artistic, medical or educational value was defined as hardcore, and its distribution banned.',
  },
  '2006 ˙冬˙夜色繩艷': {
    summary: '2006 Winter Yese Shengyan (Night of Rope)',
    detail: "Japan's most professional dominatrix Chiaki Kano and rope artist Mira (狂美) were invited to share the stage at Huashan 1914 Creative Park with Wu Zhenye, the most ambitious self-suspension dominatrix in Taiwan's kink community. It was the first performance in Taiwan to bring Taiwanese and international performers together, and the first time funding was sought from the Taipei City Department of Cultural Affairs and a government grant received.",
    org: 'BDSM Company',
    place: 'Huashan 1914 Creative Park',
  },
  '《軍犬》實體小說由基本書坊出版': {
    summary: 'Print edition of the novel Military Dog published by Gbooks',
    detail: "Military Dog by Xia Mu-cong was first serialised online and later collected into a book, becoming Taiwan's first published original novel on a BDSM theme.",
  },
  '皮繩愉虐邦成員十夜投入台北市議員選舉': {
    summary: 'BDSM Company member Shiye runs for Taipei City Council',
    detail: 'Song Jia-lun, one of the founders of BDSM Company, stood as an SM dominatrix for the Green Party in the 11th Taipei City Council election, in the fifth district (Zhongzheng and Wanhua), with the slogan “Train a humble government”.',
  },
  '皮繩脫殼日 BDSM Talk Day開始於每月第二個週六固定舉辦': {
    summary: "BDSM Company's BDSM Talk Day begins, held on the second Saturday of every month",
    detail: "BDSM Company's Talk Day was the first gathering in Taiwan's kink community held every month on a fixed schedule.",
    place: 'Zhizou Café',
  },
  '皮繩愉虐邦劇團核准立案': {
    summary: 'BDSM Company Theatre Troupe officially registered',
    detail: 'The BDSM Company Theatre Troupe became the first kink performing arts group in Taiwan to be registered with government approval.',
  },
  '《12P情慾相談室》由基本書坊出版': {
    summary: '12P Desire Talk Room published by Gbooks',
    detail: "12P Desire Talk Room is a collective work completed over one year by the Sexual Rights Team of the Taiwan Tongzhi (LGBTQ+) Hotline Association. It gathers honest, raw writing and reflection on desire by 12 members, and openly lays bare the many sides of sexuality that conventional education dares not teach and parents will not discuss, including homosexuality, bisexuality, BDSM, group sex and other taboo subjects.\nThe book has two parts. The first uses fiction, memoir and other lively forms to take readers back to the members' sexual awakenings, from childhood to adulthood. The second examines community issues through reasoned argument, to break through society's ignorance of and prejudice about sex. It is a landmark Taiwanese sex education book that gently embraces the confusion in everyone's heart and turns moral panic about sex on its head.",
  },
  '壹週刊偷拍皮繩愉虐邦 《緊縛繩宴》': {
    summary: "Next Magazine secretly photographs BDSM Company's Kinbaku Rope Banquet",
    detail: "BDSM Company held a public performance, Kinbaku Rope Banquet. Next Magazine then covered it without the consent of the organisers or participants, through secret photography and in a sensational, voyeuristic way, exposing participants' private images and identities to the public. The incident drew strong protests from sexual minority and sexual rights groups, who argued that, for commercial gain and clickbait, the media had seriously violated kink practitioners' right to privacy and their right to decide for themselves whether to come out. It not only brought real harassment and fear into the lives of those involved, but also deepened public stereotypes and stigma about the kink community.",
    org: 'BDSM Company',
    place: 'Kamidi Comedy Club',
  },
  'KKCity關站唯讀': {
    summary: 'KKCity closes and goes read-only',
    detail: "With the rise of Web 2.0, social networks and blogs, the BBS model steadily declined, and KKCity's parent company, Yuanjing Wangxun, decided to stop running the site. The closure of KKCity also ended Huakui Yiseguan, bringing to a close an online space that had accompanied Taiwan's erotic practitioners and sexual minorities for 10 years. There were later attempts to rebuild the site on other servers, but in the end they could not hold out against the tide of the times.",
  },
  '皮繩愉虐邦開始以定時定點方式，於直走咖啡舉辦Munch': {
    summary: 'BDSM Company begins holding munches at a fixed time and place, at Zhizou Café',
    detail: "The first event in Taiwan's kink community held at a fixed time and place.",
    org: 'BDSM Company',
  },
  '台鐵火車性愛趴事件': {
    summary: 'Taiwan Railway train sex party case',
    detail: "In February 2011, a user on KKCity organised a sex party in a chartered carriage of a Taiwan Railway Chu-Kuang Express train, modelled on Japan's “chikan train”. In total 18 men and 1 woman took part. The event challenged traditional morality and the boundaries of public space. Because the woman at its centre was 17 and a minor at the time, it drew fierce criticism from the public and child and youth welfare groups for corrupting public morals, while sexual rights groups published commentary in support, arguing that adults gathering for erotic purposes in private and by mutual consent should not face excessive interference. In the legal proceedings that followed, most of the men who took part were not indicted for lack of evidence or were only fined under the Social Order Maintenance Act, and the young woman was placed in custody and counselling by the juvenile court. The organiser was sentenced under Article 231 of the Criminal Code (profiting from causing another to have sexual intercourse) to six months in prison, commutable to a fine of NT$180,000, with the verdict final, and Taiwan Railway also sued him for civil damages.",
  },
  'Commader D成立試營運': {
    summary: 'Commander D opens for a trial run',
    detail: "As well as being a gay bar, Commander D was Taiwan's first commercial venue open to the public with BDSM as its theme.",
    org: 'Commander D',
  },
  '皮繩愉虐邦開始於Commader D舉辦脫殼日': {
    summary: 'BDSM Company begins holding Talk Day at Commander D',
    detail: "The starting point of Taiwan's kink community becoming intertwined with the gay men's community.",
  },
  '小林繩霧著《繩縛本事》由基本書坊出版': {
    summary: 'The Craft of Rope Bondage by Xiaolin Shengwu published by Gbooks',
    detail: "Written by Xiaolin Shengwu, this is the first rope bondage instruction book in Taiwan and the Chinese-speaking world. It covers the many tools and details newcomers to rope bondage should know, and introduces a wide range of rope techniques in meticulous detail through step-by-step photo instructions.",
  },
  '禁羈社群開始整理每月活動行事曆': {
    summary: 'Kink community begins compiling a monthly events calendar',
    detail: "BDSM Company began publishing Taiwan's community events calendar as graphics, so kink practitioners could easily see what was on each month.",
  },
  '台大BDSM社成立大會': {
    summary: 'NTU BDSM Club founding meeting',
    detail: "National Taiwan University's BDSM Club was the first university student kink club in Taiwan to challenge the campus establishment in order to form, and the first organisation to hold regular talks. The club's aims are: 1. to make the diversity and agency of desire visible to society; 2. to oppose the desexualisation of students and to value students as sexual subjects; 3. to promote understanding of BDSM on campus; 4. to support other sex and gender causes.",
  },
  '台大BDSM社受社團輔導委員會駁回成立申請': {
    summary: "NTU BDSM Club's application rejected by the Student Club Advisory Committee",
    detail: "National Taiwan University students applied to found the BDSM Club. On 19 November 2014, the university's Student Club Advisory Committee rejected the application by a single vote (8 in favour, short of a majority). Many committee members and professors had reservations about the safety of BDSM activities, how far they go, and the boundaries of sexual autonomy; at the meeting one member even played a porn video and mocked the club with a voyeuristic and discriminatory attitude. After the rejection, club members and other campus clubs criticised the university, saying that under the relevant rules it could only check that the club's charter was formally complete and had no authority to carry out “substantive review” or “moral review”. They went on to organise public protests on campus, using rope bondage demonstrations to show how seriously the club takes safety.",
  },
  '皮繩愉虐邦開始於半路咖啡舉辦香草脫殼日': {
    summary: 'BDSM Company begins holding Vanilla Talk Day at Banlu Café',
    detail: 'Before this event, most community events were both social mixers and play parties. Once Vanilla Talk Day began, social munches started to separate from play parties.',
  },
  '台大BDSM社通過社團輔導委員會審查': {
    summary: 'NTU BDSM Club approved by the Student Club Advisory Committee',
    detail: "After repeated protests, and after club members revised the application documents as the committee had asked, the NTU BDSM Club was finally approved at the Student Club Advisory Committee meeting in May 2015. It became Taiwan's first student BDSM club officially registered on a university campus, and began holding regular sessions such as talks, workshops, discussions, reading groups and film screenings.",
  },
  '禁羈民主與惡趣技藝：亞太地區第一屆皮繩愉虐情慾與文化國際學術研討會': {
    summary: 'Kink Democracy and the Art of Naughtiness: the first Asia-Pacific international academic conference on BDSM desire and culture',
    detail: "The conference was held on 31 May 2015 at Lin-Tse Hall, NTU College of Law, and was Taiwan's first conference on BDSM. It was co-organised by the NTU Graduate Student Association, the NTU BDSM Club, the Taiwan Queer Transnational Alliance and BDSM Company. It set out to take BDSM (bondage and discipline, dominance and submission, sadism and masochism) desire and practice seriously, exploring feminism, sexual and gender diversity, the relationship between violence and pleasure, and the difficulties of founding student clubs on campus. Combining academic research with community action, it also stood in support of the newly founded NTU BDSM Club.",
    place: 'International Conference Hall, Lin-Tse Hall, NTU College of Law',
  },
  'PTT BDSM版開版': {
    summary: 'PTT BDSM board opens',
    detail: 'After Huakui Yiseguan closed, the PTT BDSM board, set up through a petition on the PTT Sex board, gradually became another important online bulletin board and discussion hub for the kink community.',
  },
  'BDSM Calendar 網頁版開始經營': {
    summary: 'BDSM Calendar website launches',
    detail: 'https://todo.smertw.com/',
  },
  '皮繩愉虐邦《禁羈社群》原創音樂劇': {
    summary: "BDSM Company's original musical Kink Community",
    detail: "The BDSM Company Theatre Troupe's first production sponsored by the Taipei City Department of Cultural Affairs.",
  },
  'CTWANT偷拍 BDSM同樂會事件': {
    summary: 'CTWANT secretly films a BDSM Tonglehui event',
    detail: "In March 2020, a reporter from the Taiwanese weekly CTWANT entered a basement pub on Nanjing East Road in Taipei, which the BDSM Tonglehui group had booked for a social event for practitioners. Without the knowledge or consent of those present, the reporter filmed inside, and on 18 March CTWANT published a series of sensational reports under headlines such as “Bodily fluids break pandemic defences: rich kids go wild with SM”. The reports strongly accused the more than 100 people present of tying and flogging each other “without masks”, and used the COVID-19 pandemic of the time to label the event a “breeding ground for disease” and depraved. After the reports came out, the group announced on 19 March that it was suspending further events. The incident caused deep anger and soul-searching in Taiwan's kink and sexual minority communities. Many condemned the media for covertly filming in an intrusive way and for taking the moral high ground in the name of “pandemic prevention” to smear and stigmatise the private, legal activities of a sexual minority. The incident laid bare how tabloid media of the time, driven by clicks, trampled on subcultures' privacy and engaged in witch-hunts.",
  },
  'COVID-19 疫情全國第三級警戒': {
    summary: 'Nationwide COVID-19 Level 3 alert',
    detail: "In 2021, in response to a sharp rise in local COVID-19 cases, a nationwide Level 3 alert was imposed for the first time. Masks had to be worn at all times outside the home, indoor gatherings of 5 or more and outdoor gatherings of 10 or more were banned, leisure and entertainment venues were closed, and dining in was banned everywhere. The kink community had to stop all events that involved gathering in person. Some social meetups moved online, and some people started online reading groups and similar activities. The alert lasted more than two months; some venues closed for good, and Taiwan's kink community became more active on online platforms.",
  },
  '皮繩愉虐邦《禁羈社群2.0》非典型原創音樂劇': {
    summary: "BDSM Company's unconventional original musical Kink Community 2.0",
    detail: "The BDSM Company Theatre Troupe's first production sponsored by the Ministry of Culture.",
  },
  '2022 台灣同志遊行「無・限・性——解構框架，性／別無限」': {
    summary: '2022 Taiwan LGBT+ Pride: “An Unlimited Future: deconstructing frames, sex/gender without limits”',
    detail: 'The 20th-anniversary theme statement said that “issues such as master/slave relationships in BDSM should also be seen”, and BDSM Company was invited to speak on the main stage about the past 20 years of BDSM community development in Taiwan.',
  },
  '第一屆亞太禁羈研討會': {
    summary: 'First Asia-Pacific Kink Conference',
    detail: "Organised by the Taiwan Affective Education Association and the Kink Academic Committee, the conference was held in July 2024 at Soochow University's Chengzhong Campus. Through paper presentations, forums and group discussions, it explored law, culture, risk, community, and gender and sexuality as they relate to kink. It also held forums looking back at community culture and history, including BDSM Company, student kink clubs and pup play culture. It is currently Taiwan's first regularly held academic conference on kink.",
    place: 'Soochow University, Chengzhong Campus',
  },
  '臺灣新北地方法院113年度訴字第836號刑事判決': {
    summary: 'New Taipei District Court, 2024 Su No. 836 criminal judgment',
    detail: 'In this case the court found that consensual BDSM images were obscene materials depicting “sexual abuse” as defined in Judicial Yuan Interpretation No. 617, in violation of Article 235 of the Criminal Code.',
  },
  '臺灣臺北地方法院 114 年度侵訴字第 103 號刑事判決': {
    summary: 'Taipei District Court, 2025 Qin-Su No. 103 criminal judgment',
    detail: "This criminal judgment concerned Article 227 of the Criminal Code, sexual intercourse with a minor under 14. In the judgment, the judge weighed the defendant's claim of a consensual D/s relationship with the complainant (the underage victim), and the fact that the defendant had settled with and compensated the complainant's mother. Considering that the defendant had not used force or coercion and had admitted the offence from the start, the judge reduced the sentence at their discretion, although the minimum under Article 227 is three years in prison, and sentenced the defendant to two years, suspended for three years. Because it involves both the sexual abuse of a minor and kink, the case sparked wide discussion in online communities.",
  },
  '第二屆亞太禁羈研討會': {
    summary: 'Second Asia-Pacific Kink Conference',
    detail: 'With “(Un)safety × (In)equality ⇆ Recovery × Empowerment” as its central theme, the conference invited master\'s and doctoral students, scholars and researchers from many fields to examine closely the dynamic relationship between safety and equality, and to explore together how to move from unsafe, traumatic experiences and present inequality towards recovery, resilience and repair, with the aim of self-empowerment and collective empowerment.',
    place: 'Soochow University, Chengzhong Campus',
  },
  '台北市議員質詢提及Commander D': {
    summary: "Taipei city councillor's questioning mentions Commander D",
    detail: 'During questioning at the City Council, Taipei city councillor Hung Chien-yi said he had received complaints from parents alleging that Commander D, a gay BDSM bar in Ximending, had let minors in, and asked the Taipei City Government to look into it and strengthen protections for minors. Mayor Chiang Wan-an said the matter would be investigated strictly and that any wrongdoing would not be tolerated.',
  },
  'Commander D警察搜索事件': {
    summary: 'Police search of Commander D',
    detail: "On 3 October 2026, Commander D, a gay BDSM bar in Ximending, Taipei, was raided by the Wanhua Precinct of the Taipei City Police with a search warrant. Officers at the scene were reported to have told people there not to put their clothes back on and not to film or record, and to have made discriminatory remarks about disabled people. After the raid, police not only handcuffed and took away the bar's owner but also said that 51 customers had “voluntarily” gone to the police station for questioning. Public outrage spread quickly. On 4 October, more than 100 people protested in front of the Red House in Ximending, criticising the police for excessive enforcement and discrimination against sexual minorities, and marched to the Ximending police station to demand an explanation and the owner's release. Taipei Mayor Chiang Wan-an later apologised for flaws in the enforcement, and the Taipei City Police acknowledged that officers had behaved improperly, giving six officers and supervisors administrative penalties such as reprimands and demerits.",
  },
}
