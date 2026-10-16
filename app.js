const steps=[
 {title:'定任务',sub:'PPT任务书',desc:'先说清楚为什么做、讲给谁听、希望产生什么结果。',questions:[
  {q:'你是谁？以什么身份来制作这套PPT？',hint:'你的角色会影响表达角度、专业程度和语气',opts:['老师或培训者','企业管理者','项目负责人','专业顾问','销售或市场人员','学生或参赛者'],key:'我的角色'},
  {q:'这套PPT要讲什么？',hint:'用一句话描述核心主题',opts:['课程教学','工作汇报','项目方案','商业路演','活动策划','知识分享'],key:'主题'},
  {q:'主要讲给谁听？',hint:'受众决定语言、案例和信息密度',opts:['学生','老师','公司管理层','客户','投资人','公众'],key:'受众'},
  {q:'使用场景是什么？',hint:'不同场景需要不同的节奏',opts:['现场演讲','线上课程','自主阅读','会议汇报','比赛答辩'],key:'场景'},
  {q:'最希望听众完成什么？',hint:'选择一个最核心的目标',opts:['听懂知识','记住方法','接受观点','做出决策','购买或报名','完成练习'],key:'目标'},
  {q:'现有材料有哪些？',hint:'可多选，也可以自己补充',opts:['Word文稿','逐字稿','表格数据','参考PPT','图片素材','暂时没有'],key:'材料',multi:true},
  {q:'预计多少页？',hint:'不确定时可交给AI判断',opts:['5页以内','6–10页','11–20页','20页以上','让AI建议'],key:'页数'}]},
 {title:'做策划',sub:'PPT策划报告',desc:'让每一页都有明确任务，并形成顺畅的讲述路线。',questions:[
  {q:'你希望采用哪种讲述结构？',hint:'选择最接近内容的故事线',opts:['问题—原因—方案','背景—过程—结果','观点—证据—结论','知识—示例—练习','现状—目标—行动','让AI分析'],key:'故事线'},
  {q:'开场要如何吸引注意？',hint:'决定第一页之后的进入方式',opts:['提出问题','展示反差','讲一个故事','给出数据','展示最终成果','让AI设计'],key:'开场'},
  {q:'内容重点如何分配？',hint:'告诉AI哪里需要展开',opts:['平均分配','方法步骤为主','案例演示为主','数据论证为主','结论行动为主'],key:'重点'},
  {q:'需要哪些页面形式？',hint:'可多选',opts:['大标题页','流程图','对比页','时间轴','数据图表','案例拆解','练习互动','总结页'],key:'页面形式',multi:true},
  {q:'结尾希望留下什么？',hint:'让整套PPT有一个明确落点',opts:['一句总结','行动清单','练习任务','讨论问题','联系方式','让AI建议'],key:'结尾'}]},
 {title:'定视觉',sub:'视觉规范',desc:'把“高级感”拆成颜色、字体、留白和图片规则。',questions:[
  {q:'希望呈现什么整体气质？',hint:'最多选择两个关键词',opts:['简洁高级','理性专业','年轻活力','温暖亲和','科技未来','文化雅致'],key:'气质',multi:true},
  {q:'选择一组主色方案',hint:'颜色比例建议：主色60%、辅助色30%、强调色10%',opts:['浅灰蓝＋黑＋荧光绿','米白＋深绿＋金色','白＋深蓝＋亮橙','暖灰＋酒红＋浅粉','黑＋银灰＋电光蓝','上传参考图提取'],key:'配色'},
  {q:'喜欢哪种页面风格？',hint:'页面风格决定构图和留白',opts:['杂志留白','极简科技','瑞士网格','电影叙事','商务数据','卡片信息'],key:'风格'},
  {q:'图片希望如何使用？',hint:'建立统一的图片语言',opts:['大幅主视觉','人物场景照片','抽象3D图形','扁平插画','极少使用图片','让AI判断'],key:'图片'},
  {q:'明确哪些视觉禁忌？',hint:'可多选',opts:['不要渐变','不要卡通','不要小字堆叠','不要廉价图库感','不要复杂装饰','不要过多颜色'],key:'禁忌',multi:true}]},
 {title:'生成初版',sub:'OO'S IDEAS生成',desc:'把前三步的材料组合成一份可以直接交给AI执行的生产指令。',questions:[
  {q:'你准备提供哪些输入材料？',hint:'可多选',opts:['任务书','策划报告','视觉规范','原始文稿','数据表格','图片素材','参考PPT'],key:'输入材料',multi:true},
  {q:'第一轮先生成什么？',hint:'建议先用少量页面确认方向',opts:['只生成封面','封面＋1页内容','先出全部大纲','先出3页样稿','直接生成全稿'],key:'第一轮'},
  {q:'AI需要保留什么？',hint:'避免生成时误删重要内容',opts:['原文信息完整','所有数据','品牌色和Logo','固定页数','参考模板结构','让AI判断'],key:'保留项',multi:true},
  {q:'希望以什么格式交付？',hint:'选择后续最方便修改的形式',opts:['PPTX文件','Google Slides','可编辑网页','逐页设计稿','OO'S IDEAS项目'],key:'交付格式'}]},
 {title:'人工精修',sub:'删・放・齐・换',desc:'用四种明确动作与AI沟通，把“差不多”改成“可以上台”。',questions:[
  {q:'哪些内容应该删？',hint:'减少认知负担',opts:['重复表达','空话套话','过多装饰','无关案例','次要数据','让AI检查'],key:'删'},
  {q:'哪些内容应该放大？',hint:'建立清楚的视觉重点',opts:['页面标题','核心数字','关键结论','主图片','行动指令','案例结果'],key:'放'},
  {q:'哪些内容需要统一对齐？',hint:'让整套PPT看起来属于同一套系统',opts:['字体层级','颜色规则','页面边距','图片圆角','图标风格','页码位置'],key:'齐',multi:true},
  {q:'哪些内容需要替换？',hint:'替换最影响高级感的部分',opts:['模糊图片','廉价素材','错误图表','复杂背景','不合适图标','冗长文字'],key:'换',multi:true},
  {q:'最后需要AI做什么检查？',hint:'生成最终验收指令',opts:['错别字','数据一致性','页面溢出','风格统一','讲述节奏','全部检查'],key:'验收',multi:true}]}
];
let current=0;let answers=JSON.parse(localStorage.getItem('ppt5Answers')||'{}');
const $=s=>document.querySelector(s);const home=$('#home'),wizard=$('#wizard'),final=$('#final');
function showSection(el){[home,wizard,final].forEach(x=>x.classList.remove('active'));el.classList.add('active');window.scrollTo({top:0,behavior:'smooth'})}
function init(){
 $('#stepsGrid').innerHTML=steps.map((s,i)=>`<button class="step-card" data-step="${i}"><span class="num">${String(i+1).padStart(2,'0')}</span><h3>${s.title}</h3><p>${s.sub}<br>${s.desc}</p></button>`).join('');
 $('#sideSteps').innerHTML=steps.map((s,i)=>`<button class="side-step" data-step="${i}"><b>${i+1}</b><span>${s.title}</span></button>`).join('');
 document.querySelectorAll('[data-step]').forEach(b=>b.onclick=()=>openStep(+b.dataset.step));
 document.querySelectorAll('[data-start]').forEach(b=>b.onclick=()=>openStep(0));
 $('#homeBtn').onclick=$('#backHome').onclick=()=>showSection(home);$('#prevBtn').onclick=()=>current?openStep(current-1):showSection(home);$('#nextBtn').onclick=next;$('#copyBtn').onclick=()=>copy($('#promptOutput').textContent);$('#copyAll').onclick=()=>copy($('#allPrompt').textContent);$('#editAgain').onclick=()=>openStep(0);updateProgress();
}
function openStep(i){current=i;showSection(wizard);renderStep()}
function renderStep(){const s=steps[current];$('#stepNumber').textContent=String(current+1).padStart(2,'0');$('#stepTitle').textContent=s.title;$('#stepDesc').textContent=s.desc;
 $('#questionList').innerHTML=s.questions.map((q,qi)=>{const id=`${current}-${qi}`,a=answers[id]||{selected:[],custom:''};return `<article class="question"><div class="question-title"><span class="qnum">${String(qi+1).padStart(2,'0')}</span><div><h3>${q.q}</h3><p>${q.hint}</p></div></div><div class="options">${q.opts.map(o=>`<button class="option ${a.selected.includes(o)?'selected':''}" data-q="${qi}" data-option="${o}">${o}</button>`).join('')}</div><div class="custom-row"><input data-custom="${qi}" value="${escapeHtml(a.custom)}" placeholder="补充你的具体想法，或输入自己的答案"><button class="ai-btn" data-ai="${qi}">我没有想法，交给AI</button></div></article>`}).join('')+`<article class="stage-extra"><h3>其他内容补充</h3><p>还有任何没有被上面问题覆盖、但希望AI知道的内容，都可以写在这里。</p><textarea id="stageExtra" placeholder="例如：必须保留某句话、需要避开的表达、特殊背景、个人偏好……">${escapeHtml(answers[`${current}-extra`]||'')}</textarea></article>`;
 document.querySelectorAll('.option').forEach(b=>b.onclick=()=>selectOption(+b.dataset.q,b.dataset.option));document.querySelectorAll('[data-custom]').forEach(i=>i.oninput=()=>setCustom(+i.dataset.custom,i.value));document.querySelectorAll('[data-ai]').forEach(b=>b.onclick=()=>setAI(+b.dataset.ai));$('#stageExtra').oninput=e=>{answers[`${current}-extra`]=e.target.value;save();renderPrompt()};
 $('#prevBtn').textContent=current?'上一步':'返回首页';$('#nextBtn').innerHTML=current===4?'生成全部指令 <span>→</span>':'保存并进入下一步 <span>→</span>';renderPrompt();renderSide();}
function selectOption(qi,o){const q=steps[current].questions[qi],id=`${current}-${qi}`,a=answers[id]||{selected:[],custom:''};if(q.multi){a.selected=a.selected.includes(o)?a.selected.filter(x=>x!==o):[...a.selected,o]}else a.selected=[o];answers[id]=a;save();renderStep()}
function setCustom(qi,v){const id=`${current}-${qi}`,a=answers[id]||{selected:[],custom:''};a.custom=v;answers[id]=a;save();renderPrompt()}
function setAI(qi){const id=`${current}-${qi}`,a=answers[id]||{selected:[],custom:''};a.custom='此项我暂时没有明确想法，请AI根据前后信息提出最合适的建议，并说明理由。';answers[id]=a;save();renderStep()}
function save(){localStorage.setItem('ppt5Answers',JSON.stringify(answers));updateProgress()}
function promptFor(i){const s=steps[i];let out=`【第${i+1}步：${s.title}｜${s.sub}】\n请根据以下信息完成${s.sub}。信息不足时，请先向我补问，不要直接假设。\n`;
 s.questions.forEach((q,qi)=>{const a=answers[`${i}-${qi}`]||{selected:[],custom:''};const val=[...a.selected,a.custom].filter(Boolean).join('；')||'尚未确定，请AI结合上下文给出建议';out+=`\n${q.key}：${val}`});
 const extra=answers[`${i}-extra`];if(extra)out+=`\n\n其他补充：${extra}`;const asks=['请整理成结构清晰的PPT任务书，并列出仍需确认的问题。','请输出逐页策划表，包含页码、标题、核心观点、页面形式和素材需求。','请输出可执行的视觉规范，包含颜色比例、字体层级、留白、图片规则和禁用项。','请先确认输入材料，再按“内容确认—视觉样稿—完整生成”三个阶段执行。','请按“删、放、齐、换”逐页提出具体修改，并完成错字、数据、溢出和风格检查。'];return out+`\n\n${asks[i]}`}
function renderPrompt(){$('#promptOutput').textContent=promptFor(current)}
function next(){if(current<4)openStep(current+1);else showFinal()}
function showFinal(){showSection(final);$('#allPrompt').textContent=steps.map((_,i)=>promptFor(i)).join('\n\n━━━━━━━━━━━━━━━━━━━━\n\n')}
function renderSide(){document.querySelectorAll('.side-step').forEach((b,i)=>{b.classList.toggle('current',i===current);b.classList.toggle('done',isStepDone(i))})}
function isStepDone(i){return steps[i].questions.some((_,qi)=>{const a=answers[`${i}-${qi}`];return a&&(a.selected.length||a.custom)})}
function updateProgress(){const n=steps.filter((_,i)=>isStepDone(i)).length;$('#progressMini').textContent=n?`已完成 ${n} / 5 步`:'尚未开始'}
function copy(t){navigator.clipboard.writeText(t).then(()=>{const x=$('#toast');x.classList.add('show');setTimeout(()=>x.classList.remove('show'),1700)})}
function escapeHtml(s=''){return s.replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]))}
init();
