const S=`Generative AI|98|generative ai,genai,llm,prompt engineering,chatgpt
Machine Learning|92|machine learning,ml,deep learning,tensorflow,pytorch
Python|95|python,pandas,numpy
SQL|90|sql,mysql,postgres,postgresql
Data Analysis|90|data analysis,analytics,data analyst
Data Visualization|82|data visualization,dashboards,visualisation
Power BI|85|power bi,powerbi
Tableau|78|tableau
Excel|80|excel,spreadsheet,vlookup,pivot
Statistics|80|statistics,statistical,regression
Cloud Computing|92|aws,azure,gcp,cloud
Cybersecurity|90|cybersecurity,infosec,network security,security
DevOps|84|devops,docker,kubernetes,ci/cd,jenkins
JavaScript|85|javascript,js,node
React|82|react,reactjs
Java|75|java,spring
Git|70|git,github
UI/UX Design|78|ux,ui design,figma,wireframe
IoT & Embedded|80|iot,embedded,arduino,raspberry pi
Robotics|84|robotics,ros,automation
CAD & Design Tools|70|autocad,solidworks,cad,catia
MATLAB|62|matlab,simulink
Financial Modelling|85|financial model,dcf,forecasting
Accounting|75|accounting,bookkeeping,ledger
Tally|60|tally
GST & Taxation|70|gst,taxation,income tax
Auditing|72|audit,internal audit
Investment Analysis|78|valuation,equity research,investment,portfolio
Risk Management|82|risk management,risk
ESG & Sustainability|88|esg,sustainability,csr
Digital Marketing|88|digital marketing,seo,sem,google ads,social media
Content Marketing|76|content marketing,content strategy,blog
Copywriting|72|copywriting,copy writing
Sales & CRM|74|sales,crm,salesforce,lead generation
Business Analysis|80|business analysis,requirements,stakeholder
Project Management|82|project management,agile,scrum,pmp,jira
Product Management|86|product management,roadmap,product manager
Supply Chain|78|supply chain,logistics,procurement,inventory
Negotiation|65|negotiation
HR & Recruitment|72|recruitment,talent acquisition,hr,payroll
Bioinformatics|88|bioinformatics,genomics,sequencing
Lab Techniques|65|pcr,chromatography,spectroscopy,lab techniques,laboratory
Research Methods|75|research methodology,research,survey design
Scientific Writing|68|scientific writing,publication,journal
Clinical Research|80|clinical trial,clinical research,gcp,pharmacovigilance
Regulatory Affairs|76|regulatory,fda,cdsco
Quality Control|70|quality control,qc,qa,six sigma,iso
Environmental Science|78|environmental,climate,ecology
Renewable Energy|88|renewable,solar,wind energy,ev
Health Informatics|82|health informatics,ehr,emr,hl7
Patient Care|72|patient care,nursing,clinical
Graphic Design|74|photoshop,illustrator,graphic design,canva
Video Editing|76|video editing,premiere,after effects
Storytelling|74|storytelling,narrative
Public Policy|66|public policy,policy analysis
Teaching & EdTech|78|teaching,edtech,instructional design,curriculum
Foreign Languages|60|translation,foreign language,german,french,japanese
Communication|85|communication,presentation,public speaking
Leadership|82|leadership,team lead,mentoring
Critical Thinking|80|critical thinking,analytical
Problem Solving|82|problem solving`.split("\n").map(l=>{const[n,t,a]=l.split("|");return{n,t:+t,a:a.split(",").concat(n.toLowerCase())}});
const K={};S.forEach(k=>K[k.n]=k);
const R=`Data Analyst|Technology|SQL:3;Excel:3;Data Visualization:3;Power BI:2;Python:2;Statistics:2;Tableau:1;Communication:2
AI / ML Engineer|Technology|Python:3;Machine Learning:3;Generative AI:3;Statistics:2;Cloud Computing:2;SQL:2;Git:2
Full-Stack Developer|Technology|JavaScript:3;React:3;SQL:2;Git:2;Cloud Computing:2;DevOps:1;Problem Solving:2
Cybersecurity Analyst|Technology|Cybersecurity:3;Cloud Computing:2;Python:2;Risk Management:2;DevOps:1;Problem Solving:2
UI/UX Designer|Technology|UI/UX Design:3;Graphic Design:2;Research Methods:2;Communication:2;Storytelling:1
Financial Analyst|Commerce & Finance|Financial Modelling:3;Excel:3;Investment Analysis:2;Accounting:2;Risk Management:2;Data Visualization:1;Communication:2
Accountant / Auditor|Commerce & Finance|Accounting:3;Auditing:3;GST & Taxation:3;Tally:2;Excel:2;Risk Management:1
ESG Analyst|Commerce & Finance|ESG & Sustainability:3;Data Analysis:2;Risk Management:2;Research Methods:2;Excel:2;Scientific Writing:1
Digital Marketer|Commerce & Finance|Digital Marketing:3;Content Marketing:2;Copywriting:2;Data Analysis:2;Sales & CRM:1;Graphic Design:1
Business Analyst|Commerce & Finance|Business Analysis:3;SQL:2;Excel:2;Data Visualization:2;Project Management:2;Communication:3
Product Manager|Commerce & Finance|Product Management:3;Data Analysis:2;UI/UX Design:1;Project Management:2;Communication:3;Generative AI:2;Leadership:1
Supply Chain Analyst|Commerce & Finance|Supply Chain:3;Excel:3;Data Analysis:2;Negotiation:1;Project Management:1;Quality Control:1
HR Specialist|Commerce & Finance|HR & Recruitment:3;Communication:3;Data Analysis:1;Leadership:1;Negotiation:1
Bioinformatics Scientist|Science|Bioinformatics:3;Python:3;Statistics:3;Machine Learning:2;Research Methods:2;Scientific Writing:2;SQL:1
Clinical Research Associate|Science|Clinical Research:3;Regulatory Affairs:2;Research Methods:2;Scientific Writing:2;Communication:2;Quality Control:1
Climate / Environment Analyst|Science|Environmental Science:3;ESG & Sustainability:2;Data Analysis:2;Python:1;Research Methods:2;Public Policy:1
Lab Quality Analyst|Science|Lab Techniques:3;Quality Control:3;Regulatory Affairs:2;Statistics:2;Excel:1
Renewable Energy Engineer|Engineering|Renewable Energy:3;CAD & Design Tools:2;Project Management:2;MATLAB:2;Data Analysis:1;IoT & Embedded:1
Robotics / IoT Engineer|Engineering|Robotics:3;IoT & Embedded:3;Python:2;MATLAB:2;CAD & Design Tools:2;Machine Learning:1
DevOps Engineer|Engineering|DevOps:3;Cloud Computing:3;Git:2;Python:2;Cybersecurity:1;Problem Solving:2
Health Informatics Specialist|Healthcare|Health Informatics:3;SQL:2;Data Analysis:2;Patient Care:1;Regulatory Affairs:1;Cybersecurity:1;Communication:1
Content Strategist|Arts & Humanities|Content Marketing:3;Copywriting:3;Storytelling:3;Digital Marketing:2;Generative AI:2;Research Methods:1
Video / Graphic Creator|Arts & Humanities|Video Editing:3;Graphic Design:3;Storytelling:2;Generative AI:2;Digital Marketing:1
Policy Analyst|Arts & Humanities|Public Policy:3;Research Methods:3;Scientific Writing:2;Data Analysis:2;Critical Thinking:2;Communication:2
EdTech Teacher|Arts & Humanities|Teaching & EdTech:3;Communication:3;Content Marketing:1;Generative AI:2;Video Editing:1;Foreign Languages:1`.split("\n").map(l=>{const[t,d,s]=l.split("|");return{t,d,sk:new Map(s.split(";").map(x=>{const[n,w]=x.split(":");return[n,+w]}))}});
const D=[...new Set(R.map(r=>r.d))];
const $=s=>document.querySelector(s),esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const find=t=>{t=String(t).slice(0,20000).toLowerCase();return S.filter(k=>k.a.some(a=>new RegExp('(^|[^a-z0-9+#])'+a.replace(/[.*+?^${}()|[\]\\\/]/g,'\\$&')+'($|[^a-z0-9+#])').test(t)))};
const lvl=t=>t>=88?'Surging':t>=78?'Rising':'Steady';
const bar=(t,h)=>`<div class="bar"><i class="${h?'h':''}" style="width:${t}%"></i></div>`;
const W3={Python:'python',SQL:'sql',JavaScript:'js',React:'react',Java:'java',Git:'git',Excel:'excel',Statistics:'statistics','Machine Learning':'ai','Data Analysis':'datascience',Cybersecurity:'cybersecurity','Generative AI':'gen_ai'};
const BRO=['Python','Java','JavaScript','SQL','React'];
const lk=(u,t,c='')=>`<a class="lk ${c}" href="${u}" target="_blank" rel="noopener">${t}</a>`;
const yt=q=>'https://www.youtube.com/results?search_query='+encodeURIComponent(q);
const learn=n=>(W3[n]?lk(`https://www.w3schools.com/${W3[n]}/`,'W3Schools','w'):'')+(BRO.includes(n)?lk(yt('Bro Code '+n+' full course'),'Bro Code','b'):'')+lk(yt(n+' full course'),'YouTube')+lk('https://www.coursera.org/search?query='+encodeURIComponent(n),'Coursera');
let tab='explore',dom=D[0],sel=null,tdom='All',manual=new Set(),roleIdx=0;
const tabs=[['explore','Explore roles'],['mine','Find my roles'],['degree','Degree → careers'],['gap','Skill gap check'],['trend','Trending skills'],['apt','Aptitude prep'],['learnhub','Learning hub']];
function nav(){$('#nav').innerHTML=tabs.map(([k,l])=>`<button class="${tab==k?'on':''}" data-t="${k}">${l}</button>`).join('');
 document.querySelectorAll('#nav button').forEach(b=>b.onclick=()=>{tab=b.dataset.t;view()})}
const pills=(list,cur,attr)=>`<div class="pills">${list.map(x=>`<button class="pill ${x==cur?'on':''}" data-${attr}="${esc(x)}">${esc(x)}</button>`).join('')}</div>`;
function view(){nav();({explore,degree,gap,trend,apt,learnhub,mine})[tab]()}
function explore(){
 const rs=R.filter(r=>r.d==dom);
 let h=pills(D,dom,'d')+`<div class="grid">${rs.map(r=>`<button class="card role" data-r="${R.indexOf(r)}"><h3>${E[r.d]} ${r.t}</h3><span class="tag">${r.sk.size} key skills · top: ${[...r.sk].sort((a,b)=>K[b[0]].t-K[a[0]].t)[0][0]}</span></button>`).join('')}</div>`;
 if(sel!=null){const r=R[sel];h+=`<h2>${r.t}: skills employers ask for</h2><div class="card">${[...r.sk].sort((a,b)=>b[1]-a[1]||K[b[0]].t-K[a[0]].t).map(([n,w])=>`<div class="row"><span>${n}${w==3?' <span class="tag">core</span>':''}</span>${bar(K[n].t,K[n].t>=88)}<span class="tag">${K[n].t}</span></div>`).join('')}<h3 style="margin-top:16px">Start learning the core skills</h3>${[...r.sk].filter(([n,w])=>w==3).map(([n])=>`<div class="item"><b>${n}</b><span>${learn(n)}</span></div>`).join('')}<button class="go" id="chk">Check my resume for this role</button></div>`}
 $('#app').innerHTML=h;
 document.querySelectorAll('[data-d]').forEach(b=>b.onclick=()=>{dom=b.dataset.d;sel=null;view()});
 document.querySelectorAll('[data-r]').forEach(b=>b.onclick=()=>{sel=+b.dataset.r;view();$('#chk').scrollIntoView({behavior:'smooth'})});
 if(sel!=null)$('#chk').onclick=()=>{roleIdx=sel;tab='gap';view();run()}}
function gap(){
 $('#app').innerHTML=`<div class="card"><label for="role">Target role</label><select id="role">${D.map(d=>`<optgroup label="${d}">${R.map((r,i)=>r.d==d?`<option value="${i}">${r.t}</option>`:'').join('')}</optgroup>`).join('')}</select>
 <label for="co">Target company (optional)</label><input type="text" id="co" maxlength="80" autocomplete="off" placeholder="e.g. Infosys, Deloitte, a startup">
 <label for="jd">Paste that company's job description (optional, adds its required skills)</label><textarea id="jd" maxlength="20000" autocomplete="off" spellcheck="false" placeholder="Paste the job posting here"></textarea>
 <label>How do you want to check?</label><label class="opt"><input type="radio" name="mode" value="cv" checked> I have a resume (paste it)</label><label class="opt"><input type="radio" name="mode" value="pick"> I don't have a resume. I'll tick the skills I already know</label><div id="cvbox"><label for="cv">Your resume text</label><textarea id="cv" maxlength="20000" autocomplete="off" spellcheck="false" placeholder="Paste your resume here, or upload a .txt file below. For PDF or Word, copy and paste the text."></textarea>
 <input type="file" id="f" accept=".txt,.md,.csv" aria-label="Upload resume text file"></div><div id="pickbox" hidden></div>
 <br><button class="go" id="run">Analyze my skills</button></div><div id="res"></div>`;
 $('#role').value=roleIdx;
 const pickList=()=>{const role=R[+$('#role').value],req=new Map(role.sk);find($('#jd').value).forEach(k=>{if(!req.has(k.n))req.set(k.n,2)});$('#pickbox').innerHTML='<p class="note">Tick the skills you already have. Be honest, it makes the result more useful.</p>'+[...req].sort((a,b)=>b[1]-a[1]||K[b[0]].t-K[a[0]].t).map(([n])=>`<label class="opt"><input type="checkbox" data-s="${esc(n)}"${manual.has(n)?' checked':''}> ${n}</label>`).join('');$('#pickbox').querySelectorAll('input').forEach(c=>c.onchange=()=>{c.checked?manual.add(c.dataset.s):manual.delete(c.dataset.s)})};
 const setMode=()=>{const p=document.querySelector('input[name=mode]:checked').value=='pick';$('#cvbox').hidden=p;$('#pickbox').hidden=!p;if(p)pickList()};
 document.querySelectorAll('input[name=mode]').forEach(r=>r.onchange=setMode);
 $('#role').onchange=e=>{roleIdx=+e.target.value;manual.clear();setMode()};$('#jd').onchange=setMode;
 $('#run').onclick=run;
 $('#f').onchange=e=>{const f=e.target.files[0];if(!f)return;if(f.size>500000||!/\.(txt|md|csv)$/i.test(f.name)){$('#res').innerHTML='<p class="card">Please choose a .txt, .md or .csv file under 500 KB, or paste your text.</p>';e.target.value='';return}const r=new FileReader();r.onload=()=>{$('#cv').value=String(r.result).slice(0,20000);e.target.value='';run()};r.readAsText(f)}}
function run(){
 const res=$('#res'),role=R[+$('#role').value],txt=$('#cv').value,jd=$('#jd').value,co=$('#co').value.trim();
 const pk=document.querySelector('input[name=mode]:checked').value=='pick';if(!pk&&txt.trim().length<20&&!manual.size){res.innerHTML='<p class="card">Paste your resume text above first, or choose the no-resume option and tick the skills you know.</p>';return}
 const have=new Set(pk?[]:find(txt).map(k=>k.n));manual.forEach(n=>have.add(n));
 const req=new Map(role.sk);const jdSk=find(jd).map(k=>k.n);jdSk.forEach(n=>{if(!req.has(n))req.set(n,2)});
 let tot=0,got=0;const miss=[],ok=[];
 req.forEach((w,n)=>{tot+=w;if(have.has(n)){got+=w;ok.push(n)}else miss.push([n,w])});
 miss.sort((a,b)=>b[1]*K[b[0]].t-a[1]*K[a[0]].t);
 const pct=Math.round(got/tot*100);
 const dset=new Set();R.filter(r=>r.d==role.d).forEach(r=>r.sk.forEach((w,n)=>dset.add(n)));
 const hot=[...dset].filter(n=>!have.has(n)&&!req.has(n)).sort((a,b)=>K[b].t-K[a].t).slice(0,5);
 const extra=[...have].filter(n=>!req.has(n));
 const pr=(w,n)=>{const p=w*K[n].t;return p>=240?['High','hi']:p>=160?['Medium','me']:['Low','lo']};
 res.innerHTML=`<h2>Result for ${esc(role.t)}${co?' at '+esc(co):''}</h2>
 <div class="two"><div class="card"><div class="score">${pct}%</div><p class="note">weighted match with ${req.size} required skills${jdSk.length?` (${jdSk.length} extra from the job description)`:''}</p>${bar(pct)}
 <p><b>You have (${have.size}${pk?'':' detected'})</b></p>${ok.map(n=>`<span class="chip ok">${n}</span>`).join('')||'<span class="note">None of the required skills found yet.</span>'}
 ${extra.length?`<p><b>Other strengths</b></p>${extra.map(n=>`<span class="chip">${n}</span>`).join('')}`:''}</div>
 <div class="card"><h3>Missing skills, most valuable first</h3>${miss.map(([n,w])=>{const[l,c]=pr(w,n);return `<div class="item"><span><b>${n}</b> <span class="${c}">${l} priority</span><br><span class="tag">Demand ${K[n].t} · ${lvl(K[n].t)}</span></span><span>${learn(n)} <button class="sm" data-h="${esc(n)}">I have this</button></span></div>`}).join('')||'<p>No gaps found. You cover every required skill.</p>'}</div></div>
 ${hot.length?`<div class="card" style="margin-top:12px"><h3>Trending in ${role.d} that would set you apart</h3>${hot.map(n=>`<div class="item"><span><b>${n}</b> <span class="tag">${lvl(K[n].t)} · ${K[n].t}</span></span>${learn(n)}</div>`).join('')}</div>`:''}`;
 res.querySelectorAll('[data-h]').forEach(b=>b.onclick=()=>{manual.add(b.dataset.h);const c=document.querySelector('#pickbox input[data-s="'+b.dataset.h+'"]');if(c)c.checked=true;run()})}
function trend(){
 const set=tdom=='All'?S.map(k=>k.n):[...new Set(R.filter(r=>r.d==tdom).flatMap(r=>[...r.sk.keys()]))];
 const list=set.map(n=>K[n]).sort((a,b)=>b.t-a.t).slice(0,20);
 const hotRoles=R.filter(r=>tdom=='All'||r.d==tdom).map(r=>[r,[...r.sk.keys()].reduce((s,n)=>s+K[n].t,0)/r.sk.size]).sort((a,b)=>b[1]-a[1]).slice(0,5);
 $('#app').innerHTML=pills(['All',...D],tdom,'x')+`<div class="two"><div class="card"><h3>Top skills right now</h3>${list.map(k=>`<div class="row"><span>${k.n}</span>${bar(k.t,k.t>=88)}<span class="tag">${k.t}</span></div>`).join('')}</div>
 <div class="card"><h3>Roles with the hottest skill sets</h3>${hotRoles.map(([r,s])=>`<div class="item"><span><b>${r.t}</b><br><span class="tag">${r.d}</span></span><span class="tag">${Math.round(s)}</span></div>`).join('')}<p class="note">Orange bars mark surging skills (88+).</p></div></div>`;
 document.querySelectorAll('[data-x]').forEach(b=>b.onclick=()=>{tdom=b.dataset.x;view()})}
const E={Technology:'💻','Commerce & Finance':'📊',Science:'🔬',Engineering:'⚙️',Healthcare:'🩺','Arts & Humanities':'🎨'};
Object.keys(E).forEach(k=>E[k]='');
const AP=[['Quantitative aptitude','Percentages, ratios, time & work, profit & loss','aptitude'],['Logical reasoning','Series, puzzles, seating, syllogisms','logical-reasoning'],['Verbal ability','Grammar, reading comprehension, vocabulary','verbal-ability'],['Data interpretation','Tables, bar charts, pie charts','data-interpretation'],['Non-verbal reasoning','Patterns, figures, mirror images','non-verbal-reasoning']];
const PL=[['CareerRide','https://www.careerride.com/','Aptitude, reasoning and interview questions with answers'],['IndiaBIX','https://www.indiabix.com/','Topic-wise questions with answers and explanations'],['PrepInsta','https://prepinsta.com/','Company-wise placement prep (TCS, Infosys, Wipro and more)'],['GeeksforGeeks Aptitude','https://www.geeksforgeeks.org/aptitude-questions-and-answers/','Aptitude plus technical interview questions'],['Testbook','https://testbook.com/','Free mock tests and daily practice'],['Unstop','https://unstop.com/','Mock tests, hackathons and hiring challenges'],['HackerRank','https://www.hackerrank.com/','Coding assessments used by many employers'],['LeetCode','https://leetcode.com/','Coding problems for technical interviews'],['Khan Academy Maths','https://www.khanacademy.org/math','Rebuild maths fundamentals from scratch']];
const QZ=[['Quant','What is 20% of 250?',['40','45','50','60'],2,'0.2 × 250 = 50.'],['Quant','A 120 m train passes a pole in 6 seconds. Its speed in km/h?',['72','54','36','60'],0,'120/6 = 20 m/s, and 20 × 18/5 = 72 km/h.'],['Quant','Divide 600 in the ratio 2:3. What is the larger part?',['240','300','400','360'],3,'3/5 of 600 = 360.'],['Quant','Bought for ₹800, sold for ₹920. Profit percent?',['12%','15%','18%','20%'],1,'Profit 120 / cost 800 = 15%.'],['Quant','A does a job in 10 days, B in 15 days. Together they take?',['5 days','8 days','6 days','7.5 days'],2,'1/10 + 1/15 = 1/6 per day, so 6 days.'],['Logical','Find the next number: 2, 6, 12, 20, 30, ?',['36','40','44','42'],3,'Differences are 4, 6, 8, 10, so the next is +12 = 42.'],['Verbal','Choose the correct word: Neither of the answers ___ correct.',['were','is','are','be'],1,'"Neither" takes a singular verb.'],['Logical','All roses are flowers. Some flowers fade quickly. Which must be true?',['All roses fade quickly','Some roses fade quickly','Roses are flowers','No rose fades'],2,'Only the first statement guarantees this.']];
function apt(){
 $('#app').innerHTML=`<h2>Practice by topic</h2><div class="grid">${AP.map(a=>`<div class="card"><h3>${a[0]}</h3><span class="tag">${a[1]}</span><br>${lk('https://www.indiabix.com/'+a[2]+'/questions-and-answers/','Practice on IndiaBIX','b')}${lk('https://www.careerride.com/','Practice on CareerRide')}</div>`).join('')}</div><h2>Aptitude platforms</h2><div class="card">${PL.map(p=>`<div class="item"><span><b>${p[0]}</b><br><span class="tag">${p[2]}</span></span>${lk(p[1],'Open')}</div>`).join('')}</div><h2>Quick self-test</h2>${QZ.map((q,i)=>`<div class="card" style="margin-bottom:10px"><b>${i+1}. ${q[1]}</b> <span class="tag">${q[0]}</span>${q[2].map((o,j)=>`<label class="opt"><input type="radio" name="q${i}" value="${j}"> ${o}</label>`).join('')}<div class="note" id="e${i}"></div></div>`).join('')}<button class="go" id="chkq">Check answers</button> <b id="qs"></b>`;
 $('#chkq').onclick=()=>{let s=0;QZ.forEach((q,i)=>{const c=document.querySelector(`input[name=q${i}]:checked`),r=c&&+c.value==q[3];if(r)s++;$('#e'+i).innerHTML=(r?'<b style="color:var(--ok)">Correct.</b> ':`<b style="color:var(--bad)">${c?'Not quite.':'Skipped.'}</b> Answer: ${q[2][q[3]]}. `)+q[4]});$('#qs').textContent='Score: '+s+'/'+QZ.length}}
const LH=[['W3Schools','https://www.w3schools.com/','Beginner tutorials with try-it editors: HTML, CSS, JavaScript, Python, SQL, Excel','Tech'],['Bro Code (YouTube)','https://www.youtube.com/@BroCodez','Long beginner courses in Python, Java, C, JavaScript, SQL and React','Tech'],['freeCodeCamp','https://www.freecodecamp.org/learn','Free certifications in web dev, data analysis, ML and security','Tech'],['GeeksforGeeks','https://www.geeksforgeeks.org/','CS concepts, data structures, interview prep','Tech'],['roadmap.sh','https://roadmap.sh/','Step-by-step roadmaps for developer and data careers','Tech'],['Kaggle Learn','https://www.kaggle.com/learn','Short free courses: Python, pandas, SQL, machine learning','Tech'],['CS50 (Harvard)','https://cs50.harvard.edu/x/','Free introduction to computer science','Tech'],['NPTEL','https://nptel.ac.in/courses','IIT and IISc video courses in engineering, science and management','Science & Engineering'],['EMBL-EBI Training','https://www.ebi.ac.uk/training/','Free bioinformatics and life-science data courses','Science & Engineering'],['Khan Academy','https://www.khanacademy.org/','Economics, accounting, statistics and maths basics','Commerce & Finance'],['Google Digital Garage','https://learndigital.withgoogle.com/digitalgarage','Free digital marketing and analytics training','Commerce & Finance'],['HubSpot Academy','https://academy.hubspot.com/','Free marketing, sales and content courses','Commerce & Finance'],['Corporate Finance Institute','https://corporatefinanceinstitute.com/','Financial modelling and valuation (some free courses)','Commerce & Finance'],['Canva Design School','https://www.canva.com/designschool/','Free design, video and content lessons','Arts & Design'],['SWAYAM','https://swayam.gov.in/','Free Indian government courses for every stream','All streams'],['Coursera','https://www.coursera.org/','University courses with audit and financial aid options','All streams'],['Google Career Certificates','https://grow.google/certificates/','Job-focused certificates in data, UX, project management','All streams']];
let lg='All';
function learnhub(){
 const l=LH.filter(x=>lg=='All'||x[3]==lg||x[3]=='All streams');
 $('#app').innerHTML=pills(['All','Tech','Science & Engineering','Commerce & Finance','Arts & Design'],lg,'g')+`<div class="grid">${l.map(x=>`<div class="card"><h3>${x[0]}</h3><p class="note">${x[2]}</p>${lk(x[1],'Open site','b')}<span class="tag">${x[3]}</span></div>`).join('')}</div><p class="note">Tip: in your skill gap report, every missing skill has direct W3Schools, Bro Code, YouTube and Coursera links.</p>`;
 document.querySelectorAll('[data-g]').forEach(b=>b.onclick=()=>{lg=b.dataset.g;view()})}
const DG=`B.Com|Commerce|Financial Analyst,Accountant / Auditor,Business Analyst,Supply Chain Analyst,ESG Analyst|Tax Consultant,Bank PO,Investment Banking Analyst,Equity Researcher,Company Secretary trainee
BBA / BMS|Commerce|Digital Marketer,Business Analyst,HR Specialist,Product Manager,Supply Chain Analyst|Sales Executive,Operations Executive,Management Trainee,Brand Executive,Entrepreneur
MBA|Commerce|Product Manager,Business Analyst,Financial Analyst,HR Specialist,Supply Chain Analyst,Digital Marketer|Management Consultant,Marketing Manager,Operations Manager,Product Owner,Strategy Analyst
CA / CMA / CS|Commerce|Accountant / Auditor,Financial Analyst,ESG Analyst|Practising Chartered Accountant,Forensic Auditor,Tax Advisor,Finance Controller,Compliance Officer
BA Economics|Commerce|Financial Analyst,Data Analyst,Policy Analyst,ESG Analyst|Economist,Market Research Analyst,Banking Officer,Consultant,Civil Services aspirant
BCA / B.Sc Computer Science|Tech|Full-Stack Developer,Data Analyst,Cybersecurity Analyst,UI/UX Designer,DevOps Engineer|Software Developer,Web Developer,QA Tester,Technical Support Engineer,App Developer
B.Tech CSE / IT|Tech|AI / ML Engineer,Full-Stack Developer,DevOps Engineer,Cybersecurity Analyst,Data Analyst,Product Manager|Software Engineer,Cloud Engineer,Data Engineer,SDET,Solutions Architect
B.Tech ECE / EEE|Engineering|Robotics / IoT Engineer,Renewable Energy Engineer,Data Analyst,Cybersecurity Analyst|Embedded Engineer,VLSI Engineer,Power Systems Engineer,Telecom Engineer,Automation Engineer
B.Tech Mechanical|Engineering|Robotics / IoT Engineer,Renewable Energy Engineer,Supply Chain Analyst|Design Engineer (CAD),Production Engineer,EV / Automotive Engineer,Quality Engineer,Maintenance Engineer
B.Tech Civil|Engineering|Climate / Environment Analyst,Renewable Energy Engineer,Supply Chain Analyst|Site Engineer,Structural Engineer,Urban Planner,Project Planner (BIM),Quantity Surveyor
B.Sc Physics / Maths / Statistics|Science|Data Analyst,AI / ML Engineer,Financial Analyst,Renewable Energy Engineer|Data Scientist,Actuary,Quant Analyst,Research Associate,Teacher / Lecturer
B.Sc Chemistry|Science|Lab Quality Analyst,Clinical Research Associate,Climate / Environment Analyst|Analytical Chemist,Process Chemist,QC Chemist,R&D Scientist,Safety Officer
B.Sc Biotech / Microbiology / Biology|Science|Bioinformatics Scientist,Clinical Research Associate,Lab Quality Analyst,Health Informatics Specialist|Research Assistant,Biotech Analyst,Medical Coder,Regulatory Affairs Associate,Lab Technologist
B.Sc Agriculture / Environmental Science|Science|Climate / Environment Analyst,Supply Chain Analyst,Renewable Energy Engineer|Agronomist,Agri-business Manager,Soil Scientist,Agri-tech Analyst,Sustainability Officer
B.Pharm / Pharm.D|Health|Clinical Research Associate,Lab Quality Analyst,Health Informatics Specialist|Pharmacovigilance Associate,Regulatory Affairs Executive,Medical Writer,Drug Safety Associate,Hospital Pharmacist
MBBS / Nursing / Allied Health|Health|Health Informatics Specialist,Clinical Research Associate|Clinician,Medical Content Writer,Healthcare Consultant,Hospital Administrator,Public Health Officer
BA English / Journalism / Mass Comm|Arts & Law|Content Strategist,Video / Graphic Creator,Digital Marketer,Policy Analyst|Journalist,Copywriter,Editor,PR Executive,Technical Writer
BA Psychology / Sociology / Political Science|Arts & Law|Policy Analyst,HR Specialist,ESG Analyst,Data Analyst|Counsellor,Market Research Analyst,Civil Services aspirant,NGO Programme Officer,Research Associate
B.Des / BFA / Animation|Arts & Law|UI/UX Designer,Video / Graphic Creator,Content Strategist,Digital Marketer|Motion Designer,Brand Designer,Art Director,Animator,Product Designer
B.Ed / Education|Arts & Law|EdTech Teacher,Content Strategist,HR Specialist|School Teacher,Curriculum Designer,Academic Counsellor,Instructional Designer,Education Consultant
LLB / Law|Arts & Law|Policy Analyst,ESG Analyst,HR Specialist|Advocate,Corporate Counsel,Compliance Officer,Legal Analyst,Contract Manager
Hotel Management / Hospitality|Arts & Law|HR Specialist,Supply Chain Analyst,Digital Marketer|Hotel Operations Manager,Front Office Manager,Event Planner,F&B Manager,Travel Consultant`.split("\n").map(l=>{const[d,g,r,x]=l.split("|");return{d,g,r:r.split(",").map(t=>R.findIndex(o=>o.t==t)),x:x.split(",")}});
let dgi=-1,dgg='All';
function degree(){
 const G=['All','Commerce','Tech','Science','Engineering','Health','Arts & Law'];
 const l=DG.map((x,i)=>[x,i]).filter(([x])=>dgg=='All'||x.g==dgg);
 let h=`<p class="sub">Pick your degree or branch to see the job roles you can target, other job titles, and the skills to build first.</p>`+pills(G,dgg,'q')+`<div class="grid">${l.map(([x,i])=>`<button class="card role" data-i="${i}" style="${i==dgi?'border-color:var(--acc)':''}"><h3>${x.d}</h3><span class="tag">${x.r.length} roles · ${x.g}</span></button>`).join('')}</div>`;
 if(dgi>=0){const x=DG[dgi],agg={};x.r.forEach(ri=>R[ri].sk.forEach((w,n)=>agg[n]=(agg[n]||0)+w*K[n].t));const top=Object.keys(agg).sort((a,b)=>agg[b]-agg[a]).slice(0,6);
 h+=`<h2 id="dres">With ${esc(x.d)}, you can target</h2><div class="card">${x.r.map(ri=>`<div class="item"><span><b>${R[ri].t}</b><br><span class="tag">${E[R[ri].d]} ${R[ri].d}</span></span><button class="sm" data-c="${ri}">Check my fit</button></div>`).join('')}</div><h2>Other job titles</h2><div class="card">${x.x.map(t=>`<span class="chip">${t}</span>`).join('')}</div><h2>Skills to build first</h2><div class="card">${top.map(n=>`<div class="item"><span><b>${n}</b> <span class="tag">${lvl(K[n].t)} · ${K[n].t}</span></span><span>${learn(n)}</span></div>`).join('')}</div><p class="note">Roles are common career paths for this degree, not guarantees. Many employers hire across degrees if you have the skills.</p>`}
 $('#app').innerHTML=h;
 document.querySelectorAll('[data-q]').forEach(b=>b.onclick=()=>{dgg=b.dataset.q;view()});
 document.querySelectorAll('[data-i]').forEach(b=>b.onclick=()=>{dgi=+b.dataset.i;view();$('#dres').scrollIntoView({behavior:'smooth'})});
 document.querySelectorAll('[data-c]').forEach(b=>b.onclick=()=>{roleIdx=+b.dataset.c;manual.clear();tab='gap';view()})}
/* ===== FIND MY ROLES: type skills, get matching roles ===== */
let mtxt='',mpick=new Set();
function mine(){
 $('#app').innerHTML=`<div class="card"><h2 style="margin-top:0">Write your skills, find your roles</h2>
 <p class="note">Type the skills you have, separated by commas or new lines (for example: Python, Excel, public speaking, Tally). You can also tap skills from the list. Nothing you type is sent anywhere.</p>
 <label for="ms">Your skills</label><textarea id="ms" maxlength="3000" autocomplete="off" spellcheck="false" placeholder="e.g. python, sql, communication, tally"></textarea>
 <details><summary>Or pick from the list of ${S.length} skills</summary><div class="pills" id="mp">${S.map(k=>`<button class="pill ${mpick.has(k.n)?'on':''}" data-k="${esc(k.n)}">${esc(k.n)}</button>`).join('')}</div></details>
 <br><button class="go" id="mgo">Show roles for me</button> <button class="sm" id="mclr">Clear</button></div><div id="mres"></div>`;
 $('#ms').value=mtxt;
 $('#mgo').onclick=mrun;
 $('#mclr').onclick=()=>{mtxt='';mpick.clear();mine()};
 document.querySelectorAll('#mp .pill').forEach(b=>b.onclick=()=>{const n=b.dataset.k;mpick.has(n)?mpick.delete(n):mpick.add(n);b.classList.toggle('on')});
 if(mtxt||mpick.size)mrun()}
function mrun(){
 const txt=$('#ms').value.slice(0,3000),res=$('#mres');mtxt=txt;
 const have=new Set([...find(txt).map(k=>k.n),...mpick]);
 const unk=[...new Set(txt.split(/[,;\n]+/).map(s=>s.trim()).filter(s=>s.length>1&&s.length<=40&&!find(s).length))].slice(0,8);
 const note=unk.length?`<p class="note">We did not recognise: ${unk.map(u=>esc(u)).join(', ')}. Try a more common name for it, or pick it from the list.</p>`:'';
 if(!have.size){res.innerHTML=`<div class="card"><p>We could not match any skills yet. Add a few more, or pick from the list.</p>${note}</div>`;return}
 const top=R.map((r,i)=>{let tot=0,got=0;const miss=[];r.sk.forEach((w,n)=>{tot+=w;if(have.has(n))got+=w;else miss.push([n,w])});
  miss.sort((a,b)=>b[1]*K[b[0]].t-a[1]*K[a[0]].t);return{r,i,got,miss,pct:Math.round(got/tot*100)}})
  .filter(x=>x.got>0).sort((a,b)=>b.pct-a.pct||b.got-a.got).slice(0,6);
 res.innerHTML=`<h2>Roles that fit your skills</h2><div class="card" style="margin-bottom:12px"><b>Skills we recognised (${have.size})</b><br>${[...have].map(n=>`<span class="chip ok">${esc(n)}</span>`).join('')}${note}</div>
 <div class="grid">${top.map(x=>`<div class="card"><h3>${esc(x.r.t)}</h3><span class="tag">${esc(x.r.d)}</span><div class="score">${x.pct}%</div>${bar(x.pct)}<p class="note">${x.miss.length?'Learn next:':'You have every skill listed for this role.'}</p>${x.miss.slice(0,3).map(([n])=>`<span class="chip">${esc(n)}</span>`).join('')}<br><button class="sm" data-f="${x.i}">Full gap check</button></div>`).join('')}</div>
 <p class="note">Match % is how much of the role's weighted skill list you already cover. Low matches still show where to start.</p>`;
 res.querySelectorAll('[data-f]').forEach(b=>b.onclick=()=>{roleIdx=+b.dataset.f;manual.clear();have.forEach(n=>manual.add(n));tab='gap';view();run()})}
/* wipe anything typed when the page is closed or left */
addEventListener('pagehide',()=>{document.querySelectorAll('textarea').forEach(t=>t.value='');mtxt='';mpick.clear();manual.clear()});
/* ===== END FIND MY ROLES ===== */
$('#stats').innerHTML=[[S.length,'skills tracked'],[DG.length,'degrees covered'],[R.length,'roles'],[D.length,'backgrounds'],[LH.length+PL.length,'learning & aptitude links']].map(x=>`<div><b>${x[0]}</b>${x[1]}</div>`).join('');
view();
