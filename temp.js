const quotes = [
    { text: "내게 능력 주시는 자 안에서 내가 모든 것을 할 수 있느니라", author: "빌립보서 4장 13절" },
    { text: "그러나 내가 가는 길을 그가 아시나니 그가 나를 단련하신 후에는 내가 순금 같이 되어 나오리라", author: "욥기 23장 10절" },
    { text: "내가 내 음성으로 하나님께 부르짖으리니 내 음성으로 하나님께 부르짖으면 내게 귀를 기울리시로다", author: "시편 77편 1절" },
    { text: "너희가 내게 부르짖으며 매게 와서 기도하면 내가 너희들의 기도를 들을 것이요", author : "예레미야 29장 12절"},
    { text: "너는 내게 부르짖으라 내가 네게 응답하겠고 네가 알지 못하는 크고 은밀한 일을 네게 보이리라" , author : "예례미야 33장 3절"},
    { text: "너희 모든 일을 사랑으로 행하라" , author : "고린도전서 16장 14절"},
    { text: "하나님의 말씀과 기도로 거룩하여짐이라" , author : "디모데전서 4장 5절"},
    { text: "주를 찾는 모든 자들이 주로 말미암아 기뻐하고 즐거워하게 하시며 주의 구원을 사랑하는 자들이 항상 말하기를 하나님은 위대하시다 하게 하소서 나는 가난하고 궁핍하오니 하나님이여 속히 내게 임하소서 주는 나의 도움이시요 나를 건지시는 이시오니 여호와여 지체하지 마소서 " , author : " 시편 70장 4~5절"},
    { text: "우리가 사랑하는 것은 하나님께서 먼저 우리를 사랑하셨기 때문입니다" , author : "요한 일서 4장 19절"},
    { text: "너희는 마음에 근심하지 말라 하나님을 믿으니 또 나를 믿으라 " , author : "요한목음 14장 1절"},
    { text: "너희가 그 은혜를 인하여 믿음으로 말미암아 구원을 얻었으나 이것이 너희에게서 난 것이 아니요 하나님의 선물이라" , author : "에베소서 2장 8절"},
    { text: "하나님의 은사와 부르심에는 후회하심이 없느니라" , author : "로마서 11장 29절"},
    { text: "새 계명을 너희에게 주노니 서로 사랑하라 내가 너희를 사랑한것 같이 너희도 서로 사랑하라" , author : "요한복음 13장 34절"},
    { text: "하나님께 노래하며 그의 이름을 찬양하라 그의 이름은 여호와이시니 그의 앞에서 뛰어 놀 지어다" , author : "시편 68편 4장"},
    { text: "내가 네게 명령한 것이 아니야 강하고 담대하라 두려워하지 말고 놀라지 말라 네가 어디로 가든지 네 하나님 여호와가 너와 함께 하느니라 하시니라" , author : "여호수아 1장 9절"},
    { text: "내 영혼이 여호와를 즐거워함이여 그의 구원을 기뻐하리로다" , author : "시편 35장 9절"},
    { text: "내가 대답하되 주님 누구시니이까 주께서 이르시되 나는 네가 박해하는 예수라" , author : "사도행전 26장 15절"},
    { text: "진리를 알게 될 것이며 그 진리가 너희를 자유롭게 할 지어다" , author : "요한복음 8장 32절"},
    { text: "무슨 일을 하든지 마음을 다하여 주께 하듯 하고 사람에게 하듯 하지 말라" , author : "골로새서 3장 32절"},
    { text: "하나님이여 주의 인자하심이 어찌 그리 보배로우신지요 사람들이 주의 날개 그늘 아래에 피하나이다" , author : "시편 36편 7절"},
    { text: "진실로 생명의 원천이 주께 있사오니 주의 빛 안에서 우리가 빛을 보리이다" , author : "시편 36장 9절"},
    { text: "너희는 이전 일을 기억하지 말며 옛날 일을 생각하지 말라 보라 내가 새 일을 행하리니 이제 나타낼 것이라 너희가 그것을 알지 못하겠느냐 반드시 내가 광야에 길을 사막에 강을 내리니 " , author : "이사야 43장 18-19절"},
    { text: "생각하건대 현재의 고난은 장차 우리에게 나타날 영광과 비교할 수 없도다" , author : "로마서 8장 18절"},
    { text: "나를 기가 마길 웅덩이와 수렁에서 끌러올리시고 내 발을 반석 위에 두사 내 걸음을 견고하게 하셨도다" , author : "시편 40편 2절"},
    { text: "내게 능력주시는 자 안에서 내가 모든것을 할 수 있느니라" , author : "빌립보서 4장 13절"},
    { text: "나의 환난 날에 내가 주께 부르짖으리니 주께서 내게 응답하시리이다" , author : "시편 86편 7절"},
    { text: "나의 도움은 천지를 지으신 여호와에게서로다" , author : "시편 121장 2절"},
    { text: "주께서 심지가 견고한 자를 평강하고 평강하도록 지키시리니 이는 그가 주를 신뢰함이니이다" , author : "이사야 26장 3절"},
    { text: "내 사랑하는 형제들아 견실하며 흔들리지 말고 항상 주의 일에 더욱 힘쓰는 자들이 되라 이는 너희 수고가 주 안에서 헛되지 않은 줄 앎이라" , author : "고린도전서 15장 58절"},
    { text: "내 속에 근심이 많을 때에 주의 위안이 내 영혼을 즐겁게 하시나이다" , author : "시편 94편 19절"},
    { text: "너는 청년의 때에 너의 창조주를 기억하라" , author : "전도서 12장 1절"},
    { text: "너희사 온 마음으로 나를 구하면 나를 찾을 것이요 나를 만나리라" , author : "예레미야 29장 13절"},
    { text: "보소서 주께서는 중심이 진실함을 원하시오니 내게 지혜를 은밀히 가르치시리이다" , author : "시편 51편 6절"},
    { text: "그가 찔림은 우리의 허물 때문이요 그가 상함은 우리의 죄악 때문이라 그가 징계를 받으므로 우리는 평화를 누리고 그가 채찍에 맞으므로 우리는 나음을 받았도다" , author : "이사야 53장 5절"},
    { text: "내 영혼아 네 평안함으로 돌아갈지어다 여호와께서 너를 후대하심이로다" , author : "시편 116편 7절"},
    { text: "나를 넓은 곳으로 인도하시고 나를 기뻐하시므로 나를 구원하셨도다" , author : "시편 18편 19절"},
    { text: "너희 안에서 행하시는 이는 하나님이시니 자기의 기쁘신 뜻을 위하여 너희에게 소원을 두고 행하게 하시나니" , author : "빌립보서 2장 13절"},
    { text: "여호와는 나의 힘이요 노래시며 나의 구원이시로다 나의 하나님이시니 내가 그를 찬송할 것이다 내 아버지의 하나님이시니 내가 그를 높이리로다" , author : "출애굽기 15장 2절"},
    { text: "여호와느 나의 힘과 방패이시니 내 마음이 그를 의지하여 도움을 얻었도다 그러므로 내 마음이 크게 기뻐하며 내 노래로 그를 찬송하리로다" , author : "시편 28편 7절"},
    { text: "예수 그리스도는 어제나 오늘이나 영원토록 동일하시니라" , author : "히브리서 13장 8절"},
    { text: "그러나 주께 피하는 모든 사람은 다 기뻐하며 주의 보호로 말미암아 영원히 기뻐 외치고 주의 이름을 사랑하는 자들은 주를 즐거워하리이다 " , author : "시편 5편 11절"},
    { text: "여호와여 주는 의인에게 복을 주시고 방패로 함 같이 은혜로 그를 호위하시리이다" , author : "시편 5편 12절"},
    { text: "내가 나의 목소리로 여호와께 부르짖으니 그의 성산에서 응답하시는도다" , author : "시편 3편 4절"},
    { text: "믿음이 없이는 하나님을 기쁘시게 하지 못하나니 하나님께 나아가는자는 반드시 그가 계신 것과 또한 그가 자기를 찾는 자들에게 상 주시는 이심을 믿어야 할지니라 " , author : "히브리서 11장 6절"},
    { text: "너희는 범사에 그를 인정하라 그리하면 네 길을 지도하시리라 " , author : "잠언 3장 6절 "},
    { text: "내게주신 모든 은혜를 내가 여호와께 무엇으로 보답할까" , author : "시편 116편 12절"},
    { text: "우리는 그가 만드신 바라 그리스도 예수 안에서 선한일을 위하여 지으심을 받은자니 이 일은 하나님 전에 예비하사 우리로 그 가운데서 행하게 하려 하심이니라" , author : "에배소서 2장 10절"},
    { text: "여호와는 자기를 경회하는 자들과 그의 인자하심을 바라는 자들을 기뻐하시는 도다" , author : "시편 147편 11절"},
    { text: "내게 능력주시는 자 안에서 내가 모든것을 할 수 있느니라" , author : "빌립보서 4장 13절"},
    { text: "여호와여 내 입에 파수꾼을 세우시고 내 입술의 문을 지키소서" , author : "시편 141편 3절"},
    { text: "내가 너와 함께 있어 네가 어디로 가든지 너를 지키며 너를 이끌어 이 땅으로 돌아오게 할지라 내가 네게 허락한 것을 다 이루기까지 너를 떠나지 아니하리라 하신지라" , author : "창세기 28장 15절"},
    { text: "나는 포도나무요 너희는 가지라 그가 내 안에, 내가 그 안에 거하면 사람이 열매를 많이 맺나니 나를 떠나서는 너희가 아무것도 할 수 없음이라 " , author : "요한복음 15장 5절"},
    { text: "나 곧 내 영혼은 여호와를 기다리며 나는 주의 말씀을 바라는 도다" , author : "시편 130편 5절"},
    { text: "여호와는 네게 복을 주시고 너를 지키기시기를 원하며" , author : "민수기 6장 24절"},
    { text: "평안을 너희에게 끼치노니 곧 나의 평안을 너희에게 주노라 내가 너희에게 주는 것은 세상이 주는 것과 같지 아니하니라 너희는 마음에 근심하지도 말고 두려워하지도 말아라" , author : "요한복음 14장 27절 말씀"},
    { text: "너희는 마음에 근심하지 말라 하나님을 믿으니 또 나를 믿으라" , author : "요한복음 14절 1장"},
    { text: "내가 또 너희에게 이르노니 구하라 그러면 너희에게 주실 것이요 찾으라 그러면 찾아낼 것이요 문을 두드리면 그러면 너희에게 열릴 것이니" , author : "누가복음 11장 9절"},
    { text: "내가 헐벗은 산에 강을 내며 골짜기 가운데에 샘이 나게 하며 광야가 못이 되게 하며 마른 땅이 샘 근원이 되게 할 것이며" , author : "이사야 41장 18절"},
    { text: "이 말씀은 나의 고난중의 위로라 주의 말씀이 나를 살리셨기 때문이니이다" , author : "시편 119편 50절"},
    { text: "그러나 무릇 여호와를 의지하며 여호와를 의뢰하는 그 사람은 복을 받을 것이다" , author : "예레미야 17장 7절"},
    { text: "여호와를 경외하는 자들아 너희는 여호와를 의지하여라 그는 너희의 도움이시요 너희의 방패시로다" , author : "시편 115편 11절"},
    { text: "그런즉 우리는 몸으로 있든지 떠나든지 주를 기쁘시게 하는 자가 되기를 힘쓰노라" , author : "고린도후서 5장 9절"},
    { text: "너희보다 먼저 가시는 너희의 하나님 여호와께서 애굽에서 너희를 위하여 너희 목전에서 모든 일을 행하신것 같이 이제도 너희를 위하여 싸우실 것이며" , author : "신명기 1장 30절"},
    { text: "외치는 자의 소리여 이르되 너희는 광야에서 여호와의 길을 예비하라 사막에서 우리 하나님의 대로 평탄하게 하라" , author : "이사야 40장 3절"},
    { text: "내가 사망의 음침한 골짜기로 다닐지라도 해를 두려워하지 않을 것은 주께서 나와 함께 하심이라 주의 지팡이와 막대기가 나를 안위하시나이다" , author : "시편 23편 4절"},
    { text: "마음이 청결한 자는 복이 있나니 그들이 하나님을 볼 것이요" , author : "마태복음 5장 8절"},
    { text: "우리가 알거니와 하나님을 사랑하는 자 곧 그의 뜻대로 부르심을 입은 자들에게는 모든 것이 합력하여 선을 이루느니라" , author : "로마서 8장 28절"},
    { text: "하나님이 세상을 이처럼 사랑하사 독생자를 주셨으니 이는 그를 믿는 자마다 멸망하지 않고 영생을 얻게 하려 하심이라" , author : "요한복음 3장 16절"},
    { text: "주는 나의 하나님이시라 내가 주께 감사하리이다 주는 나의 하나님이시라 내가 주를 높이리이다 여호와께 감사하라 그는 선하시며 그의 인자하심이 영원함이로다" , author : "시편 118편 28절"},
    { text: "내가 하나님을 의지하고 담을 뛰어넘나이다" , author : "시편 18편 20절"},
    { text: "사랑은 오래 참고 사랑은 온유하며 시기하지 아니하며 사랑은 자랑하지 아니하며 교만하지 아니하며 " , author : "고린도전서 13장 4절 "},
    { text: "주의 인자하심이 생명보다 나으므로 내 입술이 주를 찬양할 것이라 이러므로 나의 평생에 주를 송축하며 주의 이름으로 말미암아 나의 손을 들리이다" , author : "시편 63편 3-4절"},
    { text: "그러므로 너희가 그리스도와 함께 다시 살리심을 받았으면 위의 것을 찾으라 거기는 그리스도께서 하나님 우편에 앉아 계시느니라 위의 것을 생각하고 땅의 것을 생각하지 말라" , author : "골로새서 3장 1-2"},
    { text: "그러므로 너희는 하나님이 택하사 거룩하고 사랑 받는 자처럼 긍휼과 자비와 겸손과 온유와 오래 참음을 옷 입고" , author : "골로새서 3장 12절"},
    { text: "이 모든 것 위에 사랑을 더하라 이는 온전하게 매는 띠니라 그리스도의 평강이 너희 마음을 주장하게 하라 너희는 평강을 위하여 한 몸으로 부르심을 받았나니 너희는 또한 감사하는 자가 되라" , author : "골로새서 3장 14-15절"},
    { text: "그러므로 이제 그리스도 예수 안에 있는 자에게는 결코 정죄함이 없나니" , author : "로마서 8장 1절"},
    { text: "육신의 생각은 사망이요 영의 생각은 생명과 평안이니라 육신의 생각은 하나님과 원수가 되나니 이는 하나님의 법에 굴복하지 아니할 뿐 아니라 할 수도 없음이라 " , author : "로마서 8장 6-7절"},
    { text: ". 하나님이 자기 형상 곧 하나님의 형상대로 사람을 창조하시되 남자와 여자를 창조하시고" , author : "창세기 1장27절"},
    { text: "그러나 무릇 여호와를 의지하며 여호와를 의뢰하는 그 사람은 복을 받을 것이라" , author : "예레미야 17 장 7절"},
    { text: "돈을 사랑하지 말고 있는 바를 족한 줄로 알라 그가 친히 말씀하시기를 내가 결코 너희를 버리지 아니하고 너희를 떠나지 아니하리라 하셨느니라" , author : "히브리서 13장 5절"},
    { text: "너희는 강하고 담대하라 두려워하지 말라 그들 앞에서 떨지 말라 이는 네 하나님 여호와 그가 너와 함께 가시며 결코 너를 떠나지 아니하시며 버리지 아니하실 것임이라 하고" , author : "신명기 31장 6절"},
    { text: " 사람이 마음으로 자기의 길을 계획할지라도 그의 걸음을 인도하시는 이는 여호와시니라" , author : "잠언 16장 9절"},
    { text: "네가 물 가운데로 지날 때에 내가 너와 함께 할 것이라" , author : "이사야 43장 2절"},
    { text: "이는 나 여호와 너의 하나님이 네 오른손을 붙들고 네게 이르기를 두려워하지 말라 내가 너를 도우리라 할 것임이니라" , author : "이사야 41장 13절"},
    { text: "그러나 내가 가는 길을 그가 아시나니 그가 나를 단련하신 후에는 내가 순금 같이 되어 나오리라" , author : "욥기 23장 10절"},
    { text: "수고하고 무거운 짐 진 자들아 다 내게로 오라 내가 너희를 쉬게 하리라 나는 마음이 온유하고 겸손하니 나의 멍에를 메고 내게 배우라 그리하면 너희 마음이 쉼을 얻으리니 이는 내 멍에는 쉽고 내 짐은 가벼움이라 하시니라" , author : "마태복음 11장 28-30절"},
    { text: "하나님은 우리의 피난처시요 힘이시니 환난중에 만날 큰 도움이시라" , author : "시편 46편 1절"},
    { text: "그러므로 내일 일을 위하여 염려하지 말라 내일 일은 내일이 염려할 것이요 한날의 괴로움은 그 날로 족하니라" , author : "마태복음 6장 34절"},
    { text: "내 사랑하는 자들아 너희가 친히 원수를 갚지 말고 하나님의 진노하심에 맡기라 기록되었으되 원수 갚는 것이 내게 있으니 내가 갚으리라고 주께서 말씀하시니라" , author : "로마서 12장 19절"},
    { text: "나의 왕, 나의 하나님이여 내가 부르짖는 소리를 들으소서 내가 주께 기도하나이다" , author : "시편 5장 2절"},
    { text: "주는 죄악을 기뻐하는 신이 아니시니 악이 주와 함께 머물지 못하며" , author : "시편 5편 4절"},
    { text: "여호와여 내가 수척하였사오니 내게 은혜를 베푸소서 여호와여 나의 뼈가 떨리오니 나를 고치소서" , author : "시편 6편 2절"},
    { text: "여호와여 돌아와 나의 영혼을 건지시며 주의 사랑으로 나를 구원하소서" , author : "시편 6장 4절"},
    { text: "내 모든 원수들이 부끄러움을 당하고 심히 떪이여 갑자기 부끄러워 물러가리로다" , author : "시편 6편 10절"},
    { text: "내 영혼아 네가 어찌하여 낙심하며 어찌하여 내 속에서 불안해 하는가 너는 하나님께 소망을 두라 그가 나타나 도우심으로 말미암아 내가 여전히 찬송하리로다" , author : "시편 42편 5절"},
    { text: "무엇보다도 뜨겁게 서로 사랑할지니 사랑은 허다한 죄를 덮느니라" , author : "베드로전서 4장 8절"},
    { text: "이것을 네게 나타내심은 여호와는 하나님이시요 그 외에는 다른 신이 없음을 네게 알게 하려 하심이니라" , author : "신명기 4장 35절"},
    { text: "그런즉 너는 오늘 위로 하늘에나 아래로 땅에 오직 여호와는 하나님이시요 다른 신이 없는 줄을 알아 명심하고" , author : "신명지 4장 39절"},
    { text: "우리가 간절히 원하는 것은 너희 각 사람이 동일한 부지런함을 나타내어 끝까지 소망의 풍성함에 이르러 게으르지 아니하고 믿음과 오래참으로 말미암아 약속들을 기업으로 받는 자들을 본받는자 되게 하려는 것이라" , author : "히브리서 6장 11-12절"},
    { text: "그가 너로 말미암아 기쁨을 이기지 못하기며 너를 잠잠히 사랑하시며 너로 말미암아 즐거이 부르며 기뻐하시리라 하리라" , author : "스바냐 3장 17절"},
    { text: "너는 마음을 다하고 뜻을 다하고 힘을 다하여 네 하나님 여호와를 사랑하라" , author : "신명기 6장 5정"},
    { text: "여호와를 경외하는 것이 지식의 근본이거늘 미련한 자는 지혜와 훈계를 멸시하느니라" , author : " 잠언 1장 7절"},
    { text: "우리가 아직 죄인 되었을 때에 그리스도께서 우리를 위하여 죽으심으로 하나님께서 우리에 대한 자기의 사랑을 확증하셨느니라" , author : "로마서 5장 8절"},
    { text: "너는 마음을 다하고 뜻을 다하고 힘을 다하여 네 하나님 여호와를 사랑하라" , author : "신명기 6장5절"},
    { text: "수고하고 무거운 짐 진 자들아 다 내게로 오라 내가 너희를 쉬게 하리라" , author : "마태복음11장28절 "},
    { text: "하나님이여 나를 지켜 주소서 내가 주께 피하나이다" , author : "시편16장 1절"},
    { text: "내 영혼아 네가 어찌하여 낙심하며 어찌하여 내 속에서 불안해 하는가 너는 하나님께 소망을 두라 나는 그가 나타나 도우심으로 말미암아 내 하나님을 여전히 찬송하리로다" , author : "시편 42장 11절 "},
    { text: "예수께서 또 말씀하여 이르시되 나는 세상의 빛이니 나를 따르는 자는 어둠에 다니지 아니하고 생명의 빛을 얻으리라" , author : "요한복음 8장 12절 "},
    { text: "그러나 내가 가는 길을 그가 아시나니 그가 나를 단련하신 후에는 내가 순금 같이 되어 나오리라" , author : "욥기 23장 10절 "},
    { text: "사랑하는 자여 네 영혼이 잘됨 같이 네가 범사에 잘되고 강건하기를 내가 간구하노라" , author : "요한삼서 1장 2절"},
    { text: "여호와께서 너를 지켜 모든 환난을 면하게 하시며 또 네 영혼을 지키시리로다" , author : "시편 121편 7절"},
    { text: "내가 여호와께 간구하매 내게 응답하시고 내 모든 두려움에서 나를 건지셨도다" , author : "시편 34장 4절"},
    { text: "내게 능력 주시는 자 안에서 내가 모든 것을 할 수 있느니라" , author : "빌립보서 4장 13절"},
    { text: "사랑은 오래참고 사랑은 온유하며 투기하는자가 되지 아니하며 사랑은 자랑하지 아니하며 교만하지 아니하며" , author : "고린도전서 13장 4절"},
    { text: "모든것을 참으며 모든것을 믿으며 모든것을 바라며 모든것을 견디니라" , author : "고린도전서 13장 7절"},
    { text: "아무것도 염려하지 말고 오직 모든 일에 기도와 간구로, 너희 구할 것을 감사함으로 하나님께 아뢰라" , author : "빌립보서 4장 6절"},
    { text: "하나님이 우리에게 주신 것은 두려워하는 마음이 아니요 오직 능력과 사랑과 근신하는 마음이니" , author : "디모데후서 1장 7절"},
    { text: "여호와는 마음이 상한 자에게 가까이 하시고 중심에 통회하는 자를 구원하시는도다" , author : "시편 34편 18절"},
    { text: "눈물을 흘리며 씨를 뿌리는 자는 기쁨을 거두리로다 울며 씨를 뿌리러 나가는 자는 정녕 기쁨으로 그 단을 가지고 돌아오리로다" , author : "시편 126편 5-6절"},
    { text: "누구든지 주의 이름을 부르는 자는 구원을 얻으리라" , author : "로마서 10장 13절"},
    { text: "예수께서 이르시되 할 수 있거든이 무슨 말이냐 믿는 자에게 능치 못할 일이 없느니라 하시니" , author : "마가복음 9장 23절"},
    { text: "그런즉 이일에 대하여 우리가 무슨 말하리요 만일 하나님이 우리를 위하시면 누가 우리를 대적하리요" , author : "로마서 8장 31절"},
    { text: "여호와를 바라는 너희들아 강하고 담대하라" , author : "시편 31장 14절"},
    { text: "두려워하지말라 내가 너와 함께 함이라 놀라지 말라 나는 네 하나님이 됨이라 내가 너를 굳세게 하리라 참을 너를 도와주기를 참으로 나의 의로운 오른손으로 너를 붙들리라" , author : "이사야 41장 10절"},
    { text: "내게 능력주시는 자 안에서 내가 모든 것을 할 수 있느니라" , author : "빌립보서 4장 13절"},
    { text: "여호와의 말씀이니라 너희를 향한 나의 생각을 내가 아나니 평안이요 재앙이 아니니라 너희에게 매라와 희망을 주는 것이니라" , author : "예레미야 29장 11절"},
    { text: "우리가 알거니와 하나님을 사랑하는 자 곧 그의 뜻대로 부르심을 입은 자들에게는 모든것이 협력하여 선을 이루느니라" , author : "로마서 8장 28절"},
    { text: "푯대를 향하여 그리스도 옛 안에서 하나님이 위에서 부르신 부름의 상을 위하여 달려가노라" , author : "빌립보서 3장 14절"},
    { text: "마음의 즐거움은 앙약이라도 심령의 근심은 뼈를 마르게 하느니라" , author : "잠언 17장 22절"},
    { text: "하나님의 말씀과 기도로 거룩하여짐이라" , author : "디모데전서 4장 5절"},
    { text: "너희는 마음에 근심하지 말라 하나님을 믿으니 또 나를 믿으라" , author : "요한 복음 14장 1절"},
    { text: "하나님의 은사와 부르심에는 후회하심이 없느니라" , author : "로마서 11장 29절"},
    { text: "내 영혼이 여호와를 즐거워함이여 그의 구원을 기뻐하리로다" , author : "시편 35편 9절"},
    { text: "내가 하나님을 의지하고 담을 뛰어넘나이다" , author : "시편 18편 20절"},
    { text: "사람이 마음으로 자기의 길을 계획할지라도 그의 걸음을 인도하시는 이는 여호와이시니라" , author : "잠언 16장 9절"},
    { text: "누구든지 나로 말미암아 실족하지 아니하는 자는 복이 있도다 하시니라" , author : "누가복음 7장 23절"},
    { text: "하나님이 우리를 사랑하시는 사랑을 우리바 알고 믿었노니 하나님은 사랑이시라 사랑 안에 거하는 자는 하나님안에 거하고 하나님도 그 안에 거하시느니라" , author : "요일 4장 16절"},
    { text: "너희는 먼저 그의 나라와 그의 의를 구하라 그리하면 이 모든 것을 너희에게 더하시리라" , author : "마태복음 6장 33절 "},
    { text: "무릇 더러운말은 너희 입 밖에도 내지 말고 오직 적을 세우는데 소용되는대로 선한 말을 하며 듣는 자들에게 은혜를 끼치게 하라 " , author : "에베소서 4장 29절"},
    { text: "너희는 이 세대를 본받지 말고 오직 마음을 새롭게 함으로 변화를 받아 하나님의 선하시고 기뻐하시고 온전하신 뜻이 무엇인지 분별하도록 하라 " , author : "로마서 12장 2절"},
    { text: "나는 너희에게 이르노니 너희 원수를 사랑하며 너희를 박해하는 자를 위하여 기도하라" , author : "마태복음 5장 44절"},
    { text: "그가 나를 푸른 초장에 누이시며 쉴만한 물가로 인도하시는도다" , author : "시편 23편 2절"},
    { text: "생각하건데 현재의 고난은 우리에게 나타날 영광과 족히 비교할 수 없도다" , author : "로마서 8장 18절"},
    { text: "서로 돌아보아 사랑과 선행을 격려하며 모이기를 폐하는 어떤 사람들의 습관과 같이 하지 말고 오직 권하여 그 날이 가까움을 볼수록 더욱 그리하자" , author : "히브리서 10장 24절"},
    { text: "우리는 하나님의 작품입니다. 선한 일을 하게 하시려고, 하나님께서 그리스도 예수 안에서 우리를 만드셨습니다. 하나님께서 이렇게 미리 준비하신 것은, 우리가 선한 일을 하며 살아가게 하시려는 것입니다." , author : "에베소서 2장 10절"},
    { text: "두려워 말라 내가 너와 함께 함이니라 놀라지 말라 나는 네 하나님이 됨이라 내가 너를 굳세게 하리라 참으로 너를 도와주리라 참으로 나의 의로운 오른손으로 너를 붙들리라" , author : "이사야 41장 10절"},
    { text: "우리가 사랑함은 그가 먼저 우리를 사랑하셨음이라" , author : "요한 일서 4장 19절"},
    { text: "무릇 더러운말은 너희 입밖에도 내지 말고 오직 덕을 세우는데 소용되는대로 선한 말을 하려 듣는 자들에게 은혜를 끼치게 하라" , author : "에베소서 4장 29절"},
    { text: "만군의 여호와가 이르노라 보라 내가 내 사자를 보내리니 그가 내 앞에서 길을 예비할 것이요 또 너희의 구하는 바 주가 홀연히 그 전에 임하리니 곧 너희의 사모하는 바 언약의 사자가 임할 것이라" , author : "말라기 3장 1절"},
    { text: "나로 말미암아 영광을 하나님께 돌리니라" , author : "갈라디아서 1장 24절"},
]; 