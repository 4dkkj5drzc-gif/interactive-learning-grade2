const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const books={
 arabic:{name:"أحب لغتي",sub:"اللغة العربية · الصف الثاني · الفصل الدراسي الأول",pages:[
 ["المحور الأول · حياتي","أتسوق مع أسرتي","🛒","أتعرف إلى الأماكن التي أذهب إليها مع أسرتي، وأتحدث عن آداب التسوق.","انظر إلى صور المتجر وتعرّف إلى أقسامه."],
 ["المحور الأول · حياتي","لغتي","🔤","أقرأ وأتعلم كلمات جديدة، وأتحدث عن الأشياء من حولي.","استمع إلى الكلمة، ثم حاول قراءتها."],
 ["المحور الأول · حياتي","سيكبرون","🌱","ألاحظ التغير والنمو، وأعبر بجمل واضحة عما أراه.","رتّب الأفكار من الأصغر إلى الأكبر."],
 ["المحور الأول · حياتي","ليس هذا ضعفًا","💪","أقرأ النص وأفكر في المعنى، ثم أعبّر عن رأيي.","اقرأ الفقرة وتحدث عما تعلمته."],
 ["المحور الأول · حياتي","أنشد وأحفظ","🎵","أتعلم الإنشاد وأتدرب على الحفظ والتعبير بصوت واضح.","استمع وأنشد مع التكرار."],
 ["المحور الأول · حياتي","قصة أعجبتني","📖","أقرأ قصة وأحدد شخصياتها وأحداثها وأتحدث عن الجزء الذي أعجبني.","من الشخصية التي أعجبتك في القصة؟"]
 ],activity:["إلى أين ذهبت الأسرة للتسوق؟",["السوق","المسجد","الحديقة"],0]},
 islamic:{name:"ديني حياتي",sub:"التربية الإسلامية · الصف الثاني · الفصل الدراسي الأول",pages:[
 ["الوحدة الأولى","أحبك ربي","🤲","يتناول الدرس محبة الله تعالى والتعبير عن شكره وحمده.","فكر في نعمة تحمد الله عليها."],
 ["الوحدة الأولى","سورة القدر","📖","أتدرب على تلاوة سورة القدر وفهم مفرداتها ومعانيها.","رتّب مفردات الدرس بما يناسب معناها."],
 ["الوحدة الأولى","أركان الإسلام","🕌","أتعرف أركان الإسلام وأتذكرها.","كم عدد أركان الإسلام؟"],
 ["الوحدة الأولى","الأذان والإقامة","🌙","أتعرف الأذان والإقامة وأميز بينهما.","متى يُرفع الأذان؟"],
 ["الوحدة الأولى","النبي محمد ﷺ يعطف على الصغير","💚","أتعلم من سيرة النبي ﷺ الرحمة والعطف على الصغار.","اذكر سلوكًا يدل على الرحمة."],
 ["الوحدة الأولى","أتحلى بالأمانة","🤝","أتعرف معنى الأمانة وأطبقها في حياتي اليومية.","كيف أكون أمينًا في المدرسة؟"]
 ],activity:["كم عدد أركان الإسلام؟",["خمسة","ثلاثة","سبعة"],0]},
 social:{name:"الهوية والمواطنة",sub:"المادة الثالثة المعتمدة في النموذج · الصف الثاني",pages:[
 ["المحور الأول","أتقبل ذاتي","🌟","أتعرف إلى نفسي وأعبّر عن صفاتي وقدراتي بطريقة إيجابية.","اذكر صفة إيجابية تحبها في نفسك."],
 ["المحور الأول","أفتخر بعائلتي","👨‍👩‍👧‍👦","أتعرف أهمية الأسرة وأعبّر عن تقديري لأفرادها.","كيف تساعد أفراد أسرتك؟"],
 ["المحور الأول","أنتمي إلى الحي","🏡","أتعرف الحي الذي أعيش فيه وأميز مرافقه وأدواري فيه.","اذكر مرفقًا من مرافق الحي."],
 ["نشاط تطبيقي","مجتمعي","🏫","ألاحظ الأماكن والخدمات من حولي وأتعلم احترام الآخرين.","كيف نحافظ على نظافة الحي؟"],
 ["نشاط تطبيقي","أنا مسؤول","🌳","أشارك في المحافظة على الممتلكات العامة والبيئة.","اختر سلوكًا يحافظ على الحي."],
 ["تقويم","ماذا تعلمت؟","⭐","أراجع ما تعلمته عن ذاتي وأسرتي والحي الذي أنتمي إليه.","أكمل: أنا أنتمي إلى ..."]
 ],activity:["أي مما يلي يُعد من مرافق الحي؟",["الحديقة","القمر","السحابة"],0]}
};
let subject="arabic",page=0;
function renderBook(){let b=books[subject],p=b.pages[page];$("#bookName").textContent=b.name;$("#bookSub").textContent=b.sub;$("#pageUnit").textContent=p[0];$("#pageTitle").textContent=p[1];$("#pageEmoji").textContent=p[2];$("#pageText").textContent=p[3];$("#pageNote").textContent=p[4];$("#pageNum").textContent=`${page+1} / ${b.pages.length}`;$("#pageLabel").textContent=`${page+1} من ${b.pages.length}`;$("#progressFill").style.width=`${(page+1)/b.pages.length*100}%`;$("#prevPage").disabled=$("#prevText").disabled=page===0;$("#nextPage").disabled=$("#nextText").disabled=page===b.pages.length-1;let a=b.activity;$("#activityQuestion").textContent=a[0];$("#activityOptions").innerHTML=a[1].map((v,i)=>`<button class="option" data-activity="${i}">${v}</button>`).join("");$("#activityFeedback").textContent="اختاري الإجابة المناسبة."}
function changePage(d){const card=$("#pageCard");card.classList.remove("turn-next","turn-prev");void card.offsetWidth;card.classList.add(d>0?"turn-next":"turn-prev");page=Math.max(0,Math.min(books[subject].pages.length-1,page+d));renderBook()}
$("#prevPage").onclick=$("#prevText").onclick=()=>changePage(-1);$("#nextPage").onclick=$("#nextText").onclick=()=>changePage(1);
$$(".subject-card").forEach(btn=>btn.onclick=()=>{$$(".subject-card").forEach(x=>x.classList.remove("selected"));btn.classList.add("selected");subject=btn.dataset.subject;page=0;renderBook()});
$("#activityOptions").onclick=e=>{let b=e.target.closest("[data-activity]");if(!b)return;let a=books[subject].activity,ok=+b.dataset.activity===a[2];$$("[data-activity]").forEach(x=>x.classList.remove("correct","wrong"));b.classList.add(ok?"correct":"wrong");$("#activityFeedback").textContent=ok?"أحسنت! إجابة صحيحة ⭐":"حاولي مرة أخرى، وفكري في السؤال."};
$$("[data-view]").forEach(btn=>btn.onclick=()=>showView(btn.dataset.view));
function showView(v){$$("[data-view]").forEach(x=>x.classList.toggle("active",x.dataset.view===v));$("#libraryView").classList.toggle("hidden",v!=="library");$("#gamesView").classList.toggle("hidden",v!=="games");window.scrollTo({top:0,behavior:"smooth"})}
$("#heroStart").onclick=()=>showView("library");
const gameData={
 arabic:[["ما اسم المحور الأول في كتاب أحب لغتي؟",["حياتي","وطني","الطبيعة"],0,"📚"],["أين تذهب الأسرة للتسوق؟",["السوق","المكتبة","الملعب"],0,"🛒"],["أيها كتاب؟",["قصة أعجبتني","الأذان والإقامة","أتقبل ذاتي"],0,"📖"]],
 islamic:[["كم عدد أركان الإسلام؟",["خمسة","ثلاثة","سبعة"],0,"🕌"],["ما الخلق الذي يعني حفظ الحقوق؟",["الأمانة","الإهمال","الغضب"],0,"🤝"],["ما السورة التي يتناولها الدرس الثاني؟",["سورة القدر","سورة الفيل","سورة الناس"],0,"📖"]],
 social:[["ما عنوان الدرس الأول؟",["أتقبل ذاتي","أحب لغتي","أركان الإسلام"],0,"🌟"],["من أفراد الأسرة؟",["الأم","المعلم فقط","البائع"],0,"👨‍👩‍👧"],["أين نرمي النفايات؟",["في سلة المهملات","في الطريق","في الحديقة"],0,"🌳"]]
};
let game="quiz",filter="arabic",qi=0,points=0,answered=false;
const gameNames={quiz:["تحدي المعرفة","أجيبي عن الأسئلة واجمعي النجوم!"],match:["اختر المعنى","اختاري الكلمة أو المفهوم الصحيح."],sort:["صنّف المفهوم","فكري في التصنيف الأنسب للسؤال."]};
function renderGame(){let data=gameData[filter],q=data[qi];answered=false;$("#gameTitle").textContent=gameNames[game][0];$("#gameDesc").textContent=gameNames[game][1];$("#gameProgress").textContent=`السؤال ${qi+1} من ٣`;$("#score").textContent=`${points} نجوم`;$("#questionText").textContent=q[0];$("#questionIcon").textContent=q[3];$("#gameOptions").innerHTML=q[1].map((v,i)=>`<button class="option" data-answer="${i}">${v}</button>`).join("");$("#gameFeedback").textContent="اختاري إجابة واحدة.";$("#gameNext").disabled=true;$("#gameNext").textContent=qi===2?"إنهاء الجولة":"السؤال التالي ←"}
function selectAnswer(e){let btn=e.target.closest("[data-answer]");if(!btn||answered)return;answered=true;let q=gameData[filter][qi],ok=+btn.dataset.answer===q[2];if(ok){points++;btn.classList.add("correct");$("#gameFeedback").textContent="إجابة صحيحة! أحسنتِ ⭐"}else{btn.classList.add("wrong");$("#gameOptions").children[q[2]].classList.add("correct");$("#gameFeedback").textContent="ليست الإجابة الصحيحة. راجعي المعلومة وحاولي مجددًا."}$("#score").textContent=`${points} نجوم` ;$("#gameNext").disabled=false}
$("#gameOptions").onclick=selectAnswer;
$("#gameNext").onclick=()=>{if(qi===2){$("#gameFeedback").textContent=`انتهت الجولة! حصلتِ على ${points} من ٣ نجوم.`;qi=0;points=0;$("#gameNext").textContent="إعادة اللعب";$("#gameNext").onclick=()=>{renderGame();$("#gameNext").onclick=nextGame};return}qi++;renderGame()};
function nextGame(){if(qi===2){$("#gameFeedback").textContent=`انتهت الجولة! حصلتِ على ${points} من ٣ نجوم.`;$("#gameNext").textContent="إعادة اللعب";$("#gameNext").onclick=()=>{qi=0;points=0;renderGame();$("#gameNext").onclick=nextGame};return}qi++;renderGame()}
$$("[data-filter]").forEach(btn=>btn.onclick=()=>{$$("[data-filter]").forEach(x=>x.classList.toggle("active",x===btn));filter=btn.dataset.filter;qi=0;points=0;$("#gameNext").onclick=nextGame;renderGame()});
$$("[data-game]").forEach(btn=>btn.onclick=()=>{$$("[data-game]").forEach(x=>x.classList.toggle("active",x===btn));game=btn.dataset.game;qi=0;points=0;$("#gameNext").onclick=nextGame;renderGame()});
$("#rotateModel").onclick=()=>$("#pageEmoji").classList.toggle("rotated");
$("#speakPage").onclick=()=>{if(!("speechSynthesis" in window)){ $("#activityFeedback").textContent="ميزة القراءة الصوتية غير مدعومة في هذا المتصفح."; return; } window.speechSynthesis.cancel(); const text=[$("#pageTitle").textContent,$("#pageText").textContent].join(". "); const utterance=new SpeechSynthesisUtterance(text); utterance.lang="ar-OM"; utterance.rate=0.85; window.speechSynthesis.speak(utterance);};
renderBook();renderGame();
