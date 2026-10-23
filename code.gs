<!doctype html>
<html>
<head>
  <base target="_top">
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
  <style>
    /* Typography refresh: Malayalam headings = Manjari, Malayalam body = Noto Sans Malayalam, English = Inter */
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Manjari:wght@400;700&family=Noto+Sans+Malayalam:wght@400;500;600;700;800;900&display=swap');
    :root{--blue:#0879d9;--violet:#7041c6;--pink:#e8368b;--green:#07876e;--ink:#182743;--muted:#6b7890;--line:#e4e9f2;--pale:#f4f8ff;--peach:#fff0e5;--mint:#e2faf0;--lav:#f0e9ff}
    *{box-sizing:border-box}body{margin:0;color:var(--ink);font-family:"Noto Sans Malayalam","Inter",system-ui,-apple-system,"Segoe UI",Arial,sans-serif;background:linear-gradient(135deg,#e8fbff,#f8f0ff 48%,#fff4eb);line-height:1.65}
    button,input,select{font:inherit}button{cursor:pointer}button:focus-visible,input:focus-visible,select:focus-visible{outline:3px solid #8bbcff;outline-offset:2px}
    .hero{padding:24px 14px 28px;text-align:center;color:#fff;background:linear-gradient(120deg,#0879d9,#6746c9 55%,#d52e89);border-radius:0 0 30px 30px;box-shadow:0 10px 30px #233c7420}
    .brand,.hero h1,.panel h2,.pagehead h2,.topic-top h2,.sectiontitle,.subheading,.prose .example-heading{font-family:"Manjari","Inter","Noto Sans Malayalam",sans-serif}
    .brand{font-weight:900;font-size:clamp(25px,5vw,38px);line-height:1.15;margin:0}.tagline{font-size:13px;opacity:.95;margin:8px 0 0}
    .wrap{width:min(1040px,100%);padding:16px 13px 40px;margin:auto}.topbar{display:flex;justify-content:space-between;gap:10px;align-items:center;margin-bottom:14px;flex-wrap:wrap}
    .chip{background:#ffffffd9;border:1px solid #ffffff;border-radius:999px;padding:7px 13px;font-weight:800;font-size:12px;color:#4c5871}
    .btn{border:0;border-radius:13px;padding:10px 15px;font-weight:800;box-shadow:0 5px 14px #24324a14;transition:transform .15s}.btn:active{transform:scale(.98)}.primary{background:linear-gradient(120deg,var(--blue),var(--violet));color:#fff}.soft{background:#fff;color:#34435c;border:1px solid var(--line)}.green{background:linear-gradient(120deg,#079b7c,#21b58c);color:white}.pink{background:linear-gradient(120deg,#e72d8a,#ff6c9e);color:white}
    .panel{background:#ffffffed;border:1px solid #fff;border-radius:22px;padding:18px;box-shadow:0 12px 35px #24324a10;margin-bottom:15px}.panel h2{font-size:clamp(20px,3vw,26px);line-height:1.25;margin:0 0 12px}.muted{color:var(--muted);font-size:13px}
    .classgrid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:14px}.classcard{min-height:185px;border-radius:24px;padding:20px;color:#fff;text-align:left;box-shadow:0 12px 22px #1d36601c;position:relative;overflow:hidden;border:0}.classcard:after{content:"";position:absolute;width:150px;height:150px;border:25px solid #ffffff26;border-radius:50%;right:-35px;bottom:-55px}.classcard.c9{background:linear-gradient(135deg,#0984e3,#20c5d5)}.classcard.c10{background:linear-gradient(135deg,#6544c9,#db398e)}.classcard .number{font-size:40px;font-weight:950;line-height:1.1;display:block}.classcard .label{font-size:19px;font-weight:850;display:block;margin-top:10px}.classcard .sub{font-size:12px;opacity:.92;display:block;margin-top:8px}
    .mediumgrid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px}.mediumcard{border-radius:18px;padding:19px 12px;border:1px solid var(--line);background:linear-gradient(140deg,#fff,#e9f7ff);font-weight:900;color:#22518e;box-shadow:0 7px 17px #263d5b0c}.mediumcard:nth-child(2){background:linear-gradient(140deg,#fff,#f2eaff);color:#6442b5}
    .cards{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px}.card{border:1px solid #e3e9f3;border-radius:18px;padding:15px;background:linear-gradient(140deg,#fff,#f4fbff);text-align:left;color:var(--ink);box-shadow:0 7px 16px #24324a0a;width:100%}.card:nth-child(3n+2){background:linear-gradient(140deg,#fff,#fff1e8)}.card:nth-child(3n){background:linear-gradient(140deg,#fff,#f3edff)}.card strong{display:block;font-size:16px;line-height:1.45}.meta{font-size:12px;color:var(--muted);margin-top:5px}
    .pagehead{display:flex;align-items:flex-start;justify-content:space-between;gap:12px;flex-wrap:wrap}.pagehead h2{margin:0}.sectiontitle{display:flex;gap:9px;align-items:center;font-weight:900;font-size:20px;margin:0 0 12px;color:#273b80}.sectiontitle .ico{font-size:25px}
    .tabs{display:flex;gap:8px;flex-wrap:wrap;margin:14px 0}.tab{border:0;border-radius:999px;padding:9px 14px;background:#edf1f8;color:#47546c;font-weight:850}.tab.active{background:linear-gradient(120deg,var(--blue),var(--violet));color:white}
    .topic-top{border-radius:19px;padding:15px;background:linear-gradient(115deg,#e0f7ff,#e9e4ff,#ffe7f1);margin-bottom:14px}.topic-top .chapter-label{font-size:12px;font-weight:850;color:#5d6480}.topic-top h2{margin:4px 0;font-size:clamp(21px,4vw,29px);color:#3d3996}
    .contentbox{border:1px solid #e7edf5;background:#fff;border-radius:17px;padding:17px;margin:12px 0;box-shadow:0 6px 18px #1f35540a}.subheading{font-size:20px;font-weight:950;color:#4b42b6;border-left:5px solid #7654d5;padding:5px 0 5px 11px;margin:0 0 12px}.prose{white-space:pre-wrap;overflow-wrap:anywhere;text-align:justify;text-justify:inter-word;line-height:1.9;font-size:18px}.labelrow{display:grid;grid-template-columns:minmax(185px, 0.95fr) 18px minmax(0, 1.4fr);gap:8px;align-items:start;padding:5px 2px;font-size:18px;line-height:1.65}.labelrow .label{font-weight:650}.labelrow .colon{text-align:center;font-weight:700}.labelrow .value{overflow-wrap:anywhere}.equation{font-weight:800;background:linear-gradient(90deg,#eef8ff,#f4efff);border:1px solid #dce7fa;border-left:4px solid #6c52cc;border-radius:10px;padding:12px 14px;margin:9px 0;white-space:pre-wrap;overflow-wrap:anywhere;text-align:center;font-size:18px;line-height:1.7}.chem sub{font-size:.72em;vertical-align:sub;line-height:0}.chem sup{font-size:.72em;vertical-align:super;line-height:0}
    .datatable,.equation,.chem{font-family:"Inter","Noto Sans Malayalam",Arial,sans-serif}
    .chem{font-variant-numeric:normal}.chem sub,.chem sup{font-size:.72em;line-height:0;position:relative;vertical-align:baseline}.chem sub{bottom:-.28em}.chem sup{top:-.48em}
    .lessonimg{display:block;max-width:100%;max-height:480px;height:auto;object-fit:contain;margin:13px auto;border-radius:13px;box-shadow:0 5px 17px #24324a15}.tablewrap{max-width:100%;overflow-x:auto;margin:13px 0;border-radius:10px}.datatable{border-collapse:collapse;width:100%;background:white}.datatable th{background:linear-gradient(120deg,#0879d9,#7041c6);color:#fff}.datatable th,.datatable td{border:1px solid #dfe6f0;padding:9px 11px;text-align:center;vertical-align:middle;min-width:90px}
    .navrow{display:flex;justify-content:space-between;gap:10px;margin:16px 0}.navrow .btn{min-width:120px}.progressline{height:7px;background:#e7eaf3;border-radius:99px;overflow:hidden;margin:10px 0 2px}.progressline span{display:block;height:100%;background:linear-gradient(90deg,#0879d9,#db398e);border-radius:99px}
    /* Question display only: refreshed mobile-friendly question cards */
    .questioncard{border:1px solid #e3eaf6;background:linear-gradient(145deg,#fff 0%,#fff 72%,#f7f4ff 100%);border-radius:23px;padding:17px;margin:16px 0;box-shadow:0 9px 26px #243c7010;overflow:hidden}
    .qhead{display:flex;gap:8px;align-items:center;flex-wrap:wrap;margin-bottom:13px}
    .qtag{display:inline-flex;align-items:center;justify-content:center;background:#eee5ff;color:#4c22a8;border-radius:999px;padding:7px 13px;font-size:13px;font-weight:900;min-height:35px}
    .qhead .qtag:nth-child(2){background:#e4f1ff;color:#0754c6}
    .qhead .qtag:nth-child(3){background:#ffe5ef;color:#a20c5d}
    .qtext,.option,.answer,.explanation{font-family:"Inter","Noto Sans Malayalam",system-ui,sans-serif}
    .qtext{font-weight:760;text-align:left;white-space:pre-wrap;overflow-wrap:anywhere;line-height:1.65;font-size:18px;color:#172b59}
    .questioncard>.qtext{font-size:18px;line-height:1.7;margin:4px 0 10px}
    .question-part{margin-top:15px;padding-top:15px;border-top:1px solid #edf0f7}
    .question-part:first-of-type{margin-top:8px}
    .mark-meta{font-size:13px;margin-top:8px;color:#748097;font-weight:700}
    .options{display:grid;grid-template-columns:1fr;gap:8px;margin:13px 0}
    .option{background:#f8faff;border:1px solid #dfe7f5;border-radius:13px;padding:10px 12px;font-size:15px;line-height:1.5;color:#25385f;overflow-wrap:anywhere}
    .answer,.explanation{border-radius:15px;padding:14px;margin-top:10px;white-space:pre-wrap;text-align:left;overflow-wrap:anywhere;line-height:1.65}
    .answer{background:linear-gradient(120deg,#e1fbef,#effcf7);border:1px solid #bcebd7;border-left:5px solid #12a878;color:#145a47}
    .explanation{background:linear-gradient(120deg,#f1edff,#fff3fa);border:1px solid #e5dafa;border-left:5px solid #7b57d2;color:#322d65}
    .question-actions{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin:15px 0 2px}
    .question-actions .btn{min-width:0;width:100%;min-height:52px;padding:10px 9px;border-radius:15px;font-size:14px;line-height:1.25;white-space:normal}
    .question-actions .green{background:linear-gradient(120deg,#079c79,#20b98e);box-shadow:0 7px 16px #0ba77b25}
    .question-actions .soft{background:#fff;border:1px solid #dfe6f2;box-shadow:0 5px 14px #24324a0b}
    .yearrow{display:flex;justify-content:space-between;gap:10px;align-items:center;padding:13px 14px;border:1px solid #ead6e7;border-radius:12px;background:#fff6fb;margin:8px 0;width:100%;text-align:left}.yearrow strong{font-size:17px;color:#a42a7b}
    @media(max-width:640px){.questioncard{border-radius:22px;padding:15px 14px;margin:14px 0;box-shadow:0 7px 20px #243c7010}.qhead{gap:7px;margin-bottom:12px}.qtag{font-size:12px;padding:6px 11px;min-height:33px}.qtext{font-size:17px;line-height:1.65}.questioncard>.qtext{font-size:17px}.question-part{margin-top:14px;padding-top:14px}.question-actions{gap:8px;margin-top:13px}.question-actions .btn{font-size:13px;min-height:50px;padding:9px 6px}.options{grid-template-columns:1fr}.answer,.explanation{padding:12px;font-size:15px}}
    .fieldgrid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:11px}.field label{display:block;font-size:12px;font-weight:900;color:#5b667d;margin-bottom:5px}.field input,.field select{width:100%;min-height:44px;border:1px solid #dbe3ee;border-radius:11px;padding:9px 11px;background:#fff;color:var(--ink)}.wide{grid-column:1/-1}.notice{border-radius:12px;padding:12px 14px;background:#fff2d4;color:#795600;margin:10px 0}.notice.error{background:#ffe6e6;color:#9a1e1e}.admin-actions{display:flex;gap:8px;flex-wrap:wrap;margin-top:12px}.btn.danger{background:#b42318;color:#fff;border:1px solid #b42318}.btn.danger:hover{filter:brightness(.95)}.notice.success{background:#e2f8eb;color:#176b3f}.hide{display:none!important}.empty{text-align:center;padding:25px;color:var(--muted)}.footer{text-align:center;color:#7b8799;font-size:12px;padding:18px}
    @media(min-width:641px) and (max-width:850px){.labelrow{grid-template-columns:minmax(160px,0.95fr) 14px minmax(0,1.2fr);font-size:17px}.equation{font-size:17px}}
    @media(max-width:640px){.wrap{padding:12px 9px 30px}.hero{padding:22px 12px 24px}.panel{padding:14px;border-radius:18px}.classgrid,.cards{grid-template-columns:1fr}.classcard{min-height:145px}.mediumgrid{grid-template-columns:1fr 1fr}.contentbox{padding:12px}.prose{font-size:17px;line-height:1.8;text-align:justify;text-justify:inter-word}.qtext{text-align:left;text-justify:auto}.labelrow{grid-template-columns:minmax(0, 1fr) 12px minmax(0, 1fr);gap:5px;font-size:16px;line-height:1.55;padding:7px 0}.labelrow .label{overflow-wrap:anywhere;word-break:normal}.labelrow .value{min-width:0;overflow-wrap:anywhere}.equation{font-size:17px;line-height:1.65;padding:10px 8px;overflow-wrap:anywhere;word-break:normal;text-align:left}.options{grid-template-columns:1fr}.navrow .btn{min-width:0;flex:1}.fieldgrid{grid-template-columns:1fr}.wide{grid-column:auto}}

    /* Refreshed student-friendly mobile design — visual changes only; workbook data and app logic remain intact. */
    :root{--blue:#078cf5;--violet:#6540ef;--pink:#ed35b5;--green:#079e7b;--ink:#101e59;--muted:#68748e;--line:#dce5f6}
    body{background:radial-gradient(ellipse at 0% 15%,#e2f8ff 0,transparent 36%),radial-gradient(ellipse at 100% 38%,#f8e8ff 0,transparent 34%),linear-gradient(145deg,#f4fbff 0%,#f6f3ff 55%,#fff8fc 100%);line-height:1.62}
    .hero{padding:17px 14px 20px;text-align:left;border-radius:0 0 28px 28px;background:linear-gradient(112deg,#079eea 0%,#174cf2 38%,#8432ec 72%,#e52fb5 100%);box-shadow:0 12px 30px #3f46b526;position:relative;overflow:hidden}
    .hero:after{content:"";position:absolute;width:210px;height:210px;border:28px solid #ffffff12;border-radius:50%;right:-80px;top:-115px;pointer-events:none}
    .hero-inner{width:min(1040px,100%);margin:auto;display:grid;grid-template-columns:48px minmax(0,1fr) 48px;align-items:center;gap:11px;position:relative;z-index:1}
    .brandblock{display:flex;align-items:center;justify-content:center;gap:10px;min-width:0}
    .brand-flask{font-size:43px;line-height:1;filter:drop-shadow(0 4px 5px #00185b35)}
    .brand-copy{min-width:0;text-align:left}
    .brand{font-size:clamp(20px,4.8vw,34px);font-weight:950;letter-spacing:-.7px;line-height:1.12;margin:0;color:#fff;text-shadow:0 2px 7px #00175b25;white-space:normal}
    .tagline{font-size:clamp(11px,2.8vw,15px);font-weight:750;letter-spacing:.3px;margin:5px 0 0;color:#f4f5ff;opacity:1}.tagline span{padding:0 5px;color:#ffe5fa}
    .header-icon{width:44px;height:44px;border-radius:50%;border:1px solid #ffffff65;background:#ffffff26;color:white;font-size:34px;line-height:1;display:grid;place-items:center;box-shadow:0 4px 12px #1b1c6b20;transition:transform .15s,background .15s}
    .header-icon:active{transform:scale(.94)}.home-icon{background:#fff;color:#172a83;font-size:32px;border-color:#fff}
    .wrap{width:min(1040px,100%);padding:15px 13px 36px;margin:auto}
    .topbar{margin-bottom:14px;gap:8px}.chip{background:#ffffffd9;border:1px solid #e4e8f8;border-radius:999px;padding:8px 13px;color:#4d5a7c;box-shadow:0 4px 12px #24324a08}.topbar .btn{border-radius:999px;padding:9px 14px}
    .panel{background:#ffffffed;border:1px solid #ffffff;border-radius:26px;padding:20px;box-shadow:0 12px 32px #5268a012;margin-bottom:16px;backdrop-filter:blur(8px)}
    .panel h2{color:#172b76;letter-spacing:-.35px}.pagehead{align-items:center}.pagehead h2{font-size:clamp(21px,4vw,28px)}
    .btn{border-radius:16px;padding:11px 16px;font-weight:850;box-shadow:0 7px 17px #263c6a12;transition:transform .15s,filter .15s}.btn:active{transform:scale(.98)}.primary{background:linear-gradient(115deg,#078ff0,#7041ed)}.green{background:linear-gradient(115deg,#079f79,#22bd91)}
    .mediumcard,.card{border-radius:21px;box-shadow:0 8px 22px #344f8010;transition:transform .15s,box-shadow .15s}.mediumcard:active,.card:active{transform:translateY(1px)}.card{padding:17px;background:linear-gradient(145deg,#fff,#f3f9ff)}.card strong{font-size:17px;color:#172b70}.meta{line-height:1.45}
    #topicPanel{padding:0;background:transparent;border:0;box-shadow:none;backdrop-filter:none}
    #topicPanel>.pagehead{padding:3px 4px 7px}
    #topicPanel>.pagehead .btn{flex-shrink:0}
    .tabs{display:grid;grid-template-columns:1fr 1.15fr;gap:10px;margin:13px 0 16px}
    .tab{min-height:57px;border-radius:19px;padding:12px 13px;background:#ffffffdb;border:1px solid #dfe6f7;color:#4a5676;box-shadow:0 6px 18px #344f8010;font-size:clamp(13px,3vw,16px);line-height:1.3}
    .tab.active{background:linear-gradient(115deg,#078ff0,#7041ed);color:#fff;border-color:#ffffff;box-shadow:0 9px 21px #5447df32}
    .topic-top{position:relative;overflow:hidden;border-radius:27px;padding:22px 20px 19px;margin-bottom:16px;background:linear-gradient(115deg,#dff7ff 0%,#eee9ff 48%,#ffe7f2 100%);border:1px solid #fff;box-shadow:0 10px 28px #5268a013}
    .topic-top:after{content:"⚗️";position:absolute;right:15px;top:16px;font-size:48px;opacity:.20;transform:rotate(8deg);pointer-events:none}
    .topic-top .chapter-label{position:relative;z-index:1;display:inline-block;max-width:100%;font-size:12px;line-height:1.4;font-weight:900;color:#4d5b83;background:#ffffff91;border:1px solid #ffffffb8;border-radius:999px;padding:6px 10px;overflow-wrap:anywhere}
    .topic-top h2{position:relative;z-index:1;margin:12px 0 13px;font-size:clamp(23px,5vw,32px);font-weight:950;line-height:1.23;letter-spacing:-.65px;color:#202c87;overflow-wrap:anywhere;max-width:100%}
    .topic-progress-head{display:flex;align-items:center;justify-content:space-between;gap:10px;margin-top:4px}.topic-progress-head .muted{font-size:15px;font-weight:750;color:#6a7390}
    .progress-percent{font-size:14px;font-weight:950;color:#29398b;background:#ffffffc9;border:1px solid #ffffff;border-radius:999px;padding:5px 10px;white-space:nowrap}
    .progressline{height:10px;background:#ffffffa6;border-radius:999px;overflow:hidden;margin:9px 0 0;box-shadow:inset 0 1px 3px #34436a0b}.progressline span{background:linear-gradient(90deg,#078cf5,#6846f2,#ec36ad);box-shadow:0 0 12px #8d49ed3b}
    #lessonContent .contentbox{position:relative;border:1px solid #fff;border-radius:27px;padding:62px 18px 20px;margin:0 0 17px;background:linear-gradient(145deg,#fffef5,#fff 55%,#fff9e8);box-shadow:0 10px 27px #5268a012;overflow:hidden}
    #lessonContent .contentbox:before{content:"💡  Key Concept";position:absolute;left:0;top:0;display:flex;align-items:center;min-height:48px;padding:10px 24px 10px 18px;border-radius:0 0 22px 0;background:linear-gradient(110deg,#ffe68a,#ffd15e);color:#1a285e;font-size:20px;font-weight:950;box-shadow:0 5px 14px #edc64d22}
    .prose{white-space:pre-wrap;overflow-wrap:anywhere;text-align:justify;text-justify:inter-word;line-height:1.85;font-size:18px;color:#172653}
    .prose>div{margin:0 0 9px}.prose>div:last-child{margin-bottom:0}
    .prose .study-heading{display:flex;align-items:center;gap:9px;margin:19px 0 10px;padding:10px 13px;border-radius:13px;background:linear-gradient(110deg,#eef5ff,#f5efff);border-left:5px solid #6754d9;color:#23366a;font-weight:900;font-size:1.06em;line-height:1.45;text-align:left}
    .prose .study-heading:before{content:"◆";font-size:.78em;color:#6a4fe0;flex-shrink:0}
    .prose .study-heading:first-child{margin-top:0}
    .prose .study-subheading{display:block;margin:14px 0 8px;padding:7px 11px;border-left:4px solid #0e8c8c;border-radius:8px;background:linear-gradient(100deg,#e5fbf7,#f5fffd);color:#116b6a;font-weight:900;font-size:1.02em;text-align:left}
    .prose .study-numbered{margin:5px 0 9px 1.4em;padding-left:.5em}
    .prose .study-numbered li{padding:3px 0 5px 4px}
    .prose .study-bullet-list{list-style-type:disc;padding-left:1.5em;margin:2px 0 5px;text-align:left}
    .prose li{list-style:disc;margin:2px 0 4px 1.5em;padding-left:2px;line-height:1.55;text-align:left}
    .prose .study-bullet-list li{padding:0 0 1px 2px;margin:0;line-height:1.55}
    .prose .study-numbered{margin:2px 0 5px 1.4em;padding-left:.5em;text-align:left}
    .prose .study-numbered li{padding:0 0 1px 2px;margin:0;line-height:1.55}
    .prose .study-bullet-list .chem,.prose .study-numbered .chem{display:inline}
    .prose .study-bullet{position:relative;padding:2px 0 2px 28px;margin:4px 0 8px;text-align:left;line-height:1.7}
    .prose .study-bullet:before{content:"●";position:absolute;left:8px;top:4px;color:#6851d8;font-size:.8em}
    .prose .study-bullet.sub-bullet{padding-left:43px}
    .prose .study-bullet.sub-bullet:before{content:"➤";left:22px;color:#0e8c8c;font-size:.9em}
    /* Source <li> rows should look like ordinary check-mark bullets, never boxed label/value cards. */
    .prose .study-bullet.source-list-item{padding-left:25px;margin:2px 0 4px;background:none;border:0;border-radius:0;box-shadow:none}
    .prose .study-bullet.source-list-item:before{content:"✓";left:3px;top:2px;color:inherit;font-size:1em;font-weight:700}
    .prose .study-heading.advantages{background:linear-gradient(110deg,#e6f8ef,#f4fff9);border-left-color:#19966b}.prose .study-heading.advantages:before{content:"✓";color:#16865e}
    .prose .study-heading.disadvantages{background:linear-gradient(110deg,#fff0ed,#fff8f6);border-left-color:#df6654}.prose .study-heading.disadvantages:before{content:"⚠";color:#d85645}

    .prose .example-heading{display:block;margin:12px 0 6px;padding:0;background:none;color:inherit;font-weight:800;font-size:inherit;box-shadow:none}.prose .example-heading:before{content:none}
    .equation{font:inherit;font-weight:700;padding:0;margin:3px 0;background:none;border:0;border-radius:0;color:inherit;text-align:left;box-shadow:none;white-space:pre-wrap;overflow-wrap:anywhere}
    .labelrow{background:#f8faff;border:1px solid #e8edfa;border-radius:12px;padding:9px 10px;margin:7px 0;font-size:17px}
    .lessonimg{max-width:100%;max-height:420px;border-radius:18px;box-shadow:0 9px 22px #263c6a18;border:1px solid #e5eaf5}
    .tablewrap{box-shadow:0 5px 14px #263c6a0a}.datatable{border-radius:14px;overflow:hidden}.datatable th{background:linear-gradient(110deg,#0879d9,#7041c6)}
    #relatedQuestions{margin-top:18px}.sectiontitle{font-size:21px;color:#24378e;margin:0 0 13px}.sectiontitle .ico{width:40px;height:40px;border-radius:14px;display:inline-grid;place-items:center;background:#ece8ff}
    .navrow{gap:11px;margin:18px 0 12px}.navrow .btn{min-height:56px;flex:1;border-radius:999px;font-size:16px}.navrow .primary{background:linear-gradient(110deg,#0b92f0,#7142ef,#e631ac)}
    .questioncard{border:1px solid #e0e7f7;background:linear-gradient(145deg,#fff 0%,#fff 72%,#f8f4ff 100%);border-radius:24px;padding:17px;margin:15px 0;box-shadow:0 9px 25px #243c7010}
    .qtag{border-radius:999px;padding:7px 13px;min-height:35px;font-size:13px}.qtext{font-size:18px;line-height:1.65;color:#172b59}.questioncard>.qtext{font-size:18px;line-height:1.68}
    .question-actions{gap:10px;margin:15px 0 2px}.question-actions .btn{min-height:54px;border-radius:17px;font-size:14px;font-weight:900}
    .answer,.explanation{border-radius:17px;line-height:1.7;font-size:16px}.option{border-radius:14px;padding:12px 13px}
    .yearrow{border-radius:16px;padding:14px 16px;box-shadow:0 5px 14px #24324a08}
    .footer{padding:20px 10px 26px}
    @media(max-width:640px){
      .hero{padding:14px 10px 17px;border-radius:0 0 24px 24px}.hero-inner{grid-template-columns:38px minmax(0,1fr) 38px;gap:7px}.header-icon{width:37px;height:37px;font-size:28px}.home-icon{font-size:27px}.brandblock{gap:6px}.brand-flask{font-size:32px}.brand{font-size:clamp(18px,4.6vw,25px);letter-spacing:-.5px}.tagline{font-size:11px;margin-top:4px}
      .wrap{padding:12px 10px 27px}.panel{padding:14px;border-radius:21px}.topbar{align-items:center}.chip{font-size:11px;padding:7px 10px}.topbar .btn{font-size:12px;padding:8px 11px}
      #topicPanel>.pagehead{padding:2px 2px 6px;gap:8px}#topicPanel>.pagehead h2{font-size:21px}.tabs{gap:8px;margin:11px 0 13px}.tab{min-height:53px;padding:10px 8px;border-radius:16px;font-size:12px}
      .topic-top{padding:17px 15px 15px;border-radius:23px;margin-bottom:13px}.topic-top:after{font-size:32px;right:8px;top:9px;opacity:.13}.topic-top .chapter-label{font-size:10px;padding:5px 8px;max-width:100%}.topic-top h2{font-size:clamp(21px,5.6vw,28px);line-height:1.28;margin:10px 0 12px;letter-spacing:-.4px}.topic-progress-head .muted{font-size:13px}.progress-percent{font-size:12px;padding:4px 8px}.progressline{height:8px;margin-top:8px}
      #lessonContent .contentbox{padding:58px 12px 15px;border-radius:22px;margin-bottom:14px}#lessonContent .contentbox:before{min-height:43px;font-size:17px;padding:8px 18px 8px 13px;border-radius:0 0 18px 0}.prose{font-size:16.5px;line-height:1.78}.prose .example-heading{font-size:17px;padding:10px 12px;margin:15px 0 9px}.prose .example-heading:before{font-size:20px}.equation{font-size:inherit;padding:0;border-radius:0;background:none;border:0;box-shadow:none}.labelrow{font-size:15px;grid-template-columns:minmax(0,1fr) 10px minmax(0,1fr);padding:7px 6px}.lessonimg{max-height:330px;border-radius:15px}
      .sectiontitle{font-size:19px}.sectiontitle .ico{width:35px;height:35px}.questioncard{padding:14px 12px;border-radius:21px}.qtext,.questioncard>.qtext{font-size:16.5px;line-height:1.65}.qtag{font-size:11px;min-height:31px;padding:5px 10px}.question-actions{gap:7px}.question-actions .btn{font-size:12px;min-height:50px;padding:9px 5px}.answer,.explanation{font-size:14px;padding:11px}.navrow{gap:8px}.navrow .btn{min-height:51px;font-size:14px;padding:10px 8px}
    }
    @media(max-width:360px){.hero-inner{grid-template-columns:32px minmax(0,1fr) 32px;gap:5px}.header-icon{width:31px;height:31px;font-size:24px}.brand-flask{font-size:27px}.brand{font-size:17px}.tagline{font-size:10px}.tabs{grid-template-columns:1fr}.tab{min-height:45px}.question-actions{grid-template-columns:1fr}}

/* Xiaomi Smart Pen annotation tools */
#penToolbar{position:fixed;z-index:10001;right:12px;bottom:82px;display:none;gap:6px;align-items:center;flex-wrap:wrap;max-width:calc(100vw - 24px);padding:9px;background:#ffffffef;border:1px solid #dce4f3;border-radius:17px;box-shadow:0 8px 28px #152b5026;backdrop-filter:blur(10px)}
#penToolbar.open{display:flex}
#penFab{position:fixed;z-index:10002;right:16px;bottom:18px;width:54px;height:54px;border:0;border-radius:50%;background:linear-gradient(135deg,#176fe8,#7040e8);color:#fff;font-size:25px;font-weight:900;box-shadow:0 6px 20px #25376b55;display:flex;align-items:center;justify-content:center;cursor:pointer}
#penToolbar .pen-close{margin-left:auto;background:#f1f4fa;color:#34415c;border-radius:50%;width:34px;min-width:34px;padding:0;font-size:17px} 
#penToolbar .pen-toolbar-head{display:flex;align-items:center;gap:8px;width:100%;font-size:12px;font-weight:900;color:#3c4b68;padding:0 2px 3px}
#penToolbar button,#penToolbar select{border:1px solid #dbe3f0;border-radius:10px;background:#fff;padding:8px 10px;font-size:13px;font-weight:800;color:#263755;min-height:38px}
#penToolbar button.active{background:#e8eaff;border-color:#6c52cc;color:#4a31b2}#penToolbar .pen-label{font-size:12px;font-weight:900;color:#3c4b68;padding:0 3px}
#penCanvas{position:absolute;left:0;top:0;width:100%;height:100%;z-index:9998;pointer-events:none;touch-action:pan-y}
#penCanvas.pen-enabled{pointer-events:auto;cursor:crosshair;touch-action:none;overscroll-behavior:contain}
@media(max-width:600px){#penToolbar{left:8px;right:8px;bottom:82px;justify-content:center;gap:4px;padding:7px}#penToolbar button,#penToolbar select{padding:7px 8px;font-size:12px;min-height:36px}#penToolbar .pen-label{display:none}#penFab{right:14px;bottom:16px;width:50px;height:50px;font-size:23px}}

  
    /* Excel-aligned question numbering, clear question separation and compact answer controls */
    .questioncard{border:2px solid #dbe5f5!important;border-left:5px solid #4f46e5!important;margin:24px 0!important;padding:17px!important;box-shadow:0 8px 22px #243c7012!important}
    .qhead .qtag:first-child{background:#243b73!important;color:#fff!important;font-size:15px!important;padding:7px 14px!important}
    .question-part{margin-top:20px!important;padding:18px 0 0!important;border-top:2px dashed #d8e1ef!important}
    .question-part:first-of-type{margin-top:8px!important}
    .question-part .qtext{margin-bottom:10px}
    .question-actions{display:flex!important;flex-wrap:wrap!important;gap:7px!important;margin:10px 0 2px!important}
    .question-actions .btn{width:auto!important;min-width:0!important;min-height:0!important;padding:6px 10px!important;border-radius:10px!important;font-size:11px!important;font-weight:750!important;line-height:1.2!important;box-shadow:none!important}
    .answer,.explanation{font-size:14px!important;padding:10px 12px!important;margin-top:7px!important;border-radius:11px!important}
    .tablewrap{margin:12px 0!important;max-width:100%;overflow-x:auto}
    @media(max-width:640px){.questioncard{margin:20px 0!important;padding:13px 11px!important}.question-part{margin-top:16px!important;padding-top:15px!important}.question-actions{gap:6px!important}.question-actions .btn{font-size:10px!important;padding:6px 8px!important}.qhead .qtag:first-child{font-size:13px!important}}

    /* Final refinements requested: split title, compact left-aligned lists, preserve inline bold. */
    .brand-copy{display:flex;flex-direction:column;align-items:flex-start;min-width:0;gap:1px}
    .brand-owner{font-family:"Manjari","Noto Sans Malayalam",serif;font-size:clamp(15px,3vw,21px);font-weight:700;letter-spacing:1.4px;line-height:1.05;color:#fff5ff;text-shadow:0 2px 6px #00175b35;font-style:italic}
    .brand{font-size:clamp(23px,5.1vw,37px);line-height:1.08;margin:0;letter-spacing:-.45px}
    .prose .study-bullet-list,.prose .study-numbered{padding-left:1.45em;margin:3px 0 6px;text-align:left}
    .prose .study-bullet-list li,.prose .study-numbered li{margin:0;padding:0 0 1px 3px;line-height:1.55;text-align:left}
    .prose .study-bullet-list .equation,.prose .study-numbered .equation{display:inline;background:none;border:0;box-shadow:none;border-radius:0;padding:0;margin:0;font:inherit;color:inherit;text-align:left}
    .prose .equation{ text-align:left }
    .datatable th,.datatable td{text-align:center!important;vertical-align:middle}
    /* Notes examples: keep the example label and its formula together, left aligned. */
    .prose .example-inline{display:flex;align-items:baseline;justify-content:flex-start;gap:7px;margin:3px 0 7px;text-align:left;line-height:1.55;overflow-wrap:anywhere}
    .prose .example-inline-label{font-weight:800;flex:0 0 auto;color:#263b80}
    .prose .example-inline-value{min-width:0;text-align:left}
    .prose .example-inline-value .chem{display:inline}
    .prose .example-inline-value .equation{display:inline;margin:0;padding:0;background:none;border:0;box-shadow:none;border-radius:0;color:inherit;font:inherit;text-align:left}
    .prose .math-result{display:block;text-align:left!important;margin:2px 0 7px;padding:0;background:none;border:0;box-shadow:none;border-radius:0;color:inherit;font:inherit;white-space:pre-wrap}
    @media(max-width:640px){.prose .example-inline{gap:5px;margin:2px 0 6px}.prose .example-inline-label{white-space:nowrap}}
    @media(max-width:640px){.brand-owner{font-size:14px}.brand{font-size:clamp(21px,5vw,29px)}}

    /* Final Notes typography fixes: justified paragraphs, compact lists, true fractions and unit powers. */
    #lessonContent .prose{text-align:justify;text-justify:inter-word;}
    #lessonContent .prose>div:not(.study-heading):not(.study-subheading):not(.equation):not(.example-inline){margin-bottom:5px;}
    #lessonContent .prose .study-bullet-list,
    #lessonContent .prose .study-numbered{margin:2px 0 5px!important;padding-left:1.45em!important;text-align:left!important;}
    #lessonContent .prose .study-bullet-list li,
    #lessonContent .prose .study-numbered li{margin:0!important;padding:0 0 1px 2px!important;line-height:1.45!important;text-align:left!important;}
    #lessonContent .prose .study-bullet{margin:2px 0 4px!important;padding-top:0!important;padding-bottom:0!important;line-height:1.5!important;}
    #lessonContent .prose .equation{text-align:left!important;margin-left:1.5em!important;margin-right:0!important;}
    .chem-fraction{display:inline-flex;vertical-align:middle;flex-direction:column;align-items:stretch;text-align:center;line-height:1.05;margin:0 .12em;font-size:.96em;}
    .chem-fraction-top{display:block;border-bottom:1.5px solid currentColor;padding:0 .24em .08em;}
    .chem-fraction-bottom{display:block;padding:.08em .24em 0;}
    .chem sup{font-size:.72em;vertical-align:super;line-height:0;}

    /* Final spacing + unit rendering fix based on the live app screenshots. */
    #topicPanel>.pagehead{padding:0 3px 2px!important;margin-bottom:2px!important;}
    #topicPanel>.pagehead h2{line-height:1.15!important;margin:0!important;}
    #topicPanel .tabs{margin:6px 0 8px!important;gap:8px!important;}
    #quickArea .topic-top{padding:12px 16px 11px!important;margin:0 0 8px!important;border-radius:20px!important;}
    #quickArea .topic-top .chapter-label{padding:4px 8px!important;line-height:1.25!important;}
    #quickArea .topic-top h2{margin:6px 0 7px!important;line-height:1.18!important;}
    #quickArea .topic-progress-head{margin-top:1px!important;}
    #quickArea .progressline{margin-top:5px!important;height:7px!important;}
    #lessonContent .contentbox{padding-top:49px!important;margin-bottom:9px!important;}
    #lessonContent .contentbox:before{min-height:39px!important;font-size:17px!important;padding:7px 15px 7px 12px!important;}
    @media(max-width:640px){
      #topicPanel>.pagehead{padding:0 1px 1px!important;}
      #topicPanel .tabs{margin:5px 0 7px!important;}
      #quickArea .topic-top{padding:10px 12px 9px!important;margin-bottom:7px!important;}
      #quickArea .topic-top h2{margin:5px 0 6px!important;font-size:clamp(20px,5vw,27px)!important;}
      #lessonContent .contentbox{padding:47px 12px 13px!important;}
      #lessonContent .contentbox:before{min-height:37px!important;font-size:16px!important;padding:6px 13px 6px 11px!important;}
    }

    /* Final fix: render label : value as one natural text line, not a separate card/grid. */
    #lessonContent .prose .labelrow{display:block!important;grid-template:none!important;gap:0!important;background:none!important;border:0!important;border-radius:0!important;box-shadow:none!important;padding:0!important;margin:2px 0 8px!important;font-size:inherit!important;line-height:1.65!important;text-align:left!important;}
    #lessonContent .prose .labelrow .label{display:inline!important;font-weight:750!important;overflow-wrap:anywhere;}
    #lessonContent .prose .labelrow .colon{display:inline!important;margin:0 .12em!important;font-weight:700!important;text-align:left!important;}
    #lessonContent .prose .labelrow .value{display:inline!important;min-width:0!important;overflow-wrap:anywhere!important;}



    /* Accessibility update: adjustable reading text that reflows to the available screen width. */
    html{font-size:100%;-webkit-text-size-adjust:100%;text-size-adjust:100%;scroll-padding-top:12px}
    body{width:100%;max-width:100%;overflow-x:hidden;font-size:calc(16px * var(--reader-scale,1))}
    .wrap,.panel,.contentbox,.questioncard,.topic-top,.pagehead,.fieldgrid{min-width:0;max-width:100%}
    .prose,#lessonContent .prose{font-size:calc(18px * var(--reader-scale,1))!important;line-height:1.8!important;overflow-wrap:anywhere;word-break:normal}
    .qtext,.questioncard>.qtext{font-size:calc(18px * var(--reader-scale,1))!important;line-height:1.65!important}
    .option,.answer,.explanation{font-size:calc(16px * var(--reader-scale,1))!important;line-height:1.7!important;overflow-wrap:anywhere}
    .card strong,.yearrow strong,.labelrow,.datatable th,.datatable td{font-size:calc(16px * var(--reader-scale,1))!important;overflow-wrap:anywhere}
    .btn,.tab,.mediumcard,.classcard .label,.field input,.field select,.field label{font-size:calc(15px * var(--reader-scale,1))!important;line-height:1.4}
    .muted,.meta,.chip,.tagline,.qtag,.mark-meta{font-size:calc(13px * var(--reader-scale,1))!important;line-height:1.5}
    .reader-controls{position:fixed;z-index:10000;left:12px;bottom:16px;display:flex;align-items:center;gap:5px;padding:6px;background:#ffffffef;border:1px solid #dce4f3;border-radius:16px;box-shadow:0 5px 20px #152b5026;backdrop-filter:blur(10px)}
    .reader-controls button{min-width:42px;min-height:42px;padding:7px 10px;border:1px solid #dbe3f0;border-radius:11px;background:#fff;color:#263755;font-size:17px;font-weight:900;cursor:pointer}
    .reader-controls button:focus-visible{outline:3px solid #8bbcff;outline-offset:2px}
    .reader-controls .reader-reset{font-size:12px;min-width:48px}
    .tablewrap{width:100%;max-width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch}
    .datatable{width:max-content;min-width:100%}
    img,video,canvas,iframe{max-width:100%}
    @media(max-width:640px){
      .wrap{width:100%;padding-left:10px;padding-right:10px}
      .panel{padding:14px}
      .prose,#lessonContent .prose{font-size:calc(17px * var(--reader-scale,1))!important}
      .qtext,.questioncard>.qtext{font-size:calc(17px * var(--reader-scale,1))!important}
      .reader-controls{left:8px;bottom:10px;gap:4px;padding:5px}
      .reader-controls button{min-width:38px;min-height:38px;padding:6px 8px}
      body{padding-bottom:58px}
    }

  </style>
</head>
<body>
<header class="hero">
  <div class="hero-inner">
    <button class="header-icon back-icon" type="button" onclick="navigateBack()" aria-label="Go back">‹</button>
    <div class="brandblock">
      <div class="brand-flask" aria-hidden="true">⚗️</div>
      <div class="brand-copy">
        <div class="brand-owner">Ashraf's</div>
        <h1 class="brand">Chemistry Learning Hub</h1>
        <div class="tagline">Learn <span>•</span> Practise <span>•</span> Excel</div>
      </div>
    </div>
    <button class="header-icon home-icon" type="button" onclick="goHome()" aria-label="Home">⌂</button>
  </div>
</header>
<div class="reader-controls" role="group" aria-label="Text size controls">
  <button type="button" onclick="changeReaderScale(-1)" aria-label="Decrease text size" title="Decrease text size">A−</button>
  <button type="button" onclick="changeReaderScale(1)" aria-label="Increase text size" title="Increase text size">A+</button>
  <button type="button" class="reader-reset" onclick="resetReaderScale()" aria-label="Reset text size" title="Reset text size">Reset</button>
</div>
<main class="wrap">
  <div class="topbar">
    <span class="chip" id="crumb">🏠 Welcome</span>
    <button class="btn soft" onclick="showAdminLogin()">🔐 Admin Login</button>
  </div>

  <section id="home" class="panel">
    <h2>Choose your class</h2>
    <p class="muted">Select your class to start learning. Student login is not required.</p>
    <div class="classgrid">
      <button class="classcard c9" onclick="chooseClass('Class 9')"><span class="number">09</span><span class="label">STANDARD 9</span><span class="sub">Explore chapters →</span></button>
      <button class="classcard c10" onclick="chooseClass('Class 10')"><span class="number">10</span><span class="label">STANDARD 10</span><span class="sub">Explore chapters →</span></button>
    </div>
  </section>

  <section id="mediumPanel" class="panel hide">
    <div class="pagehead"><h2 id="mediumTitle">Choose medium</h2><button class="btn soft" onclick="goHome()">← Home</button></div>
    <div class="mediumgrid" style="margin-top:14px">
      <button class="mediumcard" onclick="chooseMedium('Malayalam')">🌿 മലയാളം മീഡിയം</button>
      <button class="mediumcard" onclick="chooseMedium('English')">🌐 ENGLISH MEDIUM</button>
    </div>
  </section>

  <section id="chapterPanel" class="panel hide">
    <div class="pagehead"><h2 id="chapterListTitle">📚 Chapters</h2><button class="btn soft" onclick="backToMedium()">← Medium</button></div>
    <p class="muted">Choose a chapter to see its topics, quick learning and previous year questions.</p>
    <div id="chapterCards" class="cards"></div>
    <div id="chapterMessage" class="notice hide"></div>
  </section>

  <section id="topicPanel" class="panel hide">
    <div class="pagehead"><div><div class="meta" id="topicMeta"></div><h2 id="topicChapterName">Chapter topics</h2></div><button class="btn soft" onclick="backToChapters()">← Chapters</button></div>
    <div class="tabs">
      <button class="tab active" id="quickTab" onclick="switchChapterTab('quick')">📘 Quick Learning</button>
      <button class="tab" id="previousTab" onclick="switchChapterTab('previous')">🏆 Previous Year Questions</button>
    </div>
    <div id="topicList" class="cards"></div>
    <div id="quickArea" class="hide">
      <div class="topic-top">
        <div class="chapter-label" id="lessonChapterLabel"></div>
        <h2 id="lessonTopicTitle"></h2>
        <div class="topic-progress-head"><div class="muted" id="lessonCount"></div><span class="progress-percent" id="lessonPercent">0%</span></div>
        <div class="progressline"><span id="lessonProgress" style="width:0%"></span></div>
      </div>
      <div id="lessonContent"></div>
      <div id="relatedQuestions"></div>
      <div class="navrow"><button class="btn soft" onclick="moveTopic(-1)">← Previous</button><button class="btn primary" onclick="moveTopic(1)">Next Topic →</button></div>
      <button class="btn soft" onclick="backToTopicList()">☷ All topics</button>
    </div>
    <div id="previousArea" class="hide"></div>
  </section>

  <section id="adminLoginPanel" class="panel hide">
    <h2>🔐 Admin Login</h2><p class="muted">Only the administrator can upload and publish chapter workbooks.</p>
    <div class="fieldgrid">
      <div class="field"><label>USERNAME</label><input id="adminUsername" autocomplete="username" placeholder="Admin username"></div>
      <div class="field"><label>PASSWORD</label><input id="adminPassword" type="password" autocomplete="current-password" placeholder="Admin password"></div>
      <div class="wide"><button class="btn primary" onclick="loginAdmin()">Sign in</button> <button class="btn soft" onclick="hideAdminLogin()">Cancel</button></div>
    </div>
    <div id="loginMessage" class="notice hide"></div>
  </section>

  <section id="adminPanel" class="panel hide">
    <div class="pagehead"><h2>🛠️ Admin Upload Centre</h2><button class="btn soft" onclick="logoutAdmin()">Log out</button></div>
    <p class="muted">Upload one Excel workbook per chapter. Required sheet names: <b>Notes</b> and <b>Questions</b>.</p>
    <div class="fieldgrid">
      <div class="field"><label>CLASS</label><select id="uploadClass"><option value="">Choose class</option><option>Class 9</option><option>Class 10</option></select></div>
      <div class="field"><label>SUBJECT</label><input id="uploadSubject" value="Chemistry" placeholder="Chemistry"></div>
      <div class="field"><label>MEDIUM</label><select id="uploadMedium"><option value="">Choose medium</option><option>Malayalam</option><option>English</option></select></div>
      <div class="field"><label>CHAPTER NUMBER</label><input id="uploadChapterNo" placeholder="e.g. 05"></div>
      <div class="field wide"><label>CHAPTER NAME</label><input id="uploadChapterName" placeholder="Enter chapter name"></div>
      <div class="field wide"><label>EXCEL WORKBOOK (.xlsx)</label><input id="workbookFile" type="file" accept=".xlsx,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"></div>
      <div class="wide"><button id="uploadButton" class="btn primary" onclick="uploadWorkbook()">⬆️ Upload & Publish</button></div>
    </div>
    <div id="uploadMessage" class="notice hide"></div>
    <hr style="border:0;border-top:1px solid var(--line);margin:18px 0">
    <h3>📋 Uploaded chapters</h3><div id="adminSummary"></div>
  </section>
  <div class="footer">Ashraf's Chemistry Learning Hub · Student access without login</div>
</main>

<script>
let catalog=[], selectedClass='', selectedMedium='', selectedChapter=null, chapterData=null, activeTopicIndex=0, adminToken='';
let readerScale=1;
function applyReaderScale(){document.documentElement.style.setProperty('--reader-scale',String(readerScale));try{localStorage.setItem('chemHubReaderScale',String(readerScale));}catch(e){}}
function changeReaderScale(delta){readerScale=Math.max(0.9,Math.min(1.5,Math.round((readerScale+delta*0.1)*10)/10));applyReaderScale();}
function resetReaderScale(){readerScale=1;applyReaderScale();}
try{const savedScale=Number(localStorage.getItem('chemHubReaderScale'));if(savedScale>=0.9&&savedScale<=1.5)readerScale=savedScale;}catch(e){}
applyReaderScale();

const $=id=>document.getElementById(id);
const panels=['home','mediumPanel','chapterPanel','topicPanel','adminLoginPanel','adminPanel'];
function showOnly(id){panels.forEach(p=>$(p).classList.toggle('hide',p!==id));}
function server(fn,args,onSuccess,onFailure){
  const runner=google.script.run.withSuccessHandler(onSuccess).withFailureHandler(e=>{
    const m=e&&e.message?e.message:String(e||'Unexpected error');
    if(onFailure)onFailure(m);else alert(m);
  });
  runner[fn].apply(runner,args||[]);
}
window.addEventListener('load',()=>loadCatalog());
function loadCatalog(){
  server('getCatalog',[],r=>{catalog=r&&r.chapters?r.chapters:[];renderChapterCards();},m=>{console.error(m);});
}
function chooseClass(c){selectedClass=c;$('mediumTitle').textContent=c+' · Choose your medium';$('crumb').textContent='🏠 Home / '+c;showOnly('mediumPanel');}
function chooseMedium(m){selectedMedium=m;$('chapterListTitle').textContent='📚 '+selectedClass+' · '+m+' Medium';$('crumb').textContent='🏠 / '+selectedClass+' / '+m;renderChapterCards();showOnly('chapterPanel');}
function navigateBack(){
  if(!$('adminPanel').classList.contains('hide')){logoutAdmin();return;}
  if(!$('adminLoginPanel').classList.contains('hide')){hideAdminLogin();return;}
  if(!$('topicPanel').classList.contains('hide')){
    if(!$('quickArea').classList.contains('hide')){backToTopicList();return;}
    backToChapters();return;
  }
  if(!$('chapterPanel').classList.contains('hide')){backToMedium();return;}
  if(!$('mediumPanel').classList.contains('hide')){goHome();return;}
  goHome();
}
function goHome(){showOnly('home');$('crumb').textContent='🏠 Welcome';}
function backToMedium(){showOnly('mediumPanel');}
function backToChapters(){showOnly('chapterPanel');}
function renderChapterCards(){
  const box=$('chapterCards');box.innerHTML='';
  const list=catalog.filter(c=>(!selectedClass||c.className===selectedClass)&&(!selectedMedium||c.medium===selectedMedium));
  if(!list.length){box.innerHTML='<div class="empty">No published chapters yet. Please check again later.</div>';return;}
  list.sort((a,b)=>String(a.chapterNo).localeCompare(String(b.chapterNo),undefined,{numeric:true}));
  list.forEach(c=>{
    const b=document.createElement('button');b.className='card';
    const title=document.createElement('strong');title.textContent=(c.chapterNo?'Chapter '+c.chapterNo+' · ':'')+c.chapterName;
    const meta=document.createElement('div');meta.className='meta';meta.textContent=c.subject+' • '+c.medium+' • '+c.notesCount+' topics';
    b.append(title,meta);b.onclick=()=>openChapter(c);box.appendChild(b);
  });
}
function openChapter(c){
  selectedChapter=c;showOnly('topicPanel');$('topicMeta').textContent=[c.className,c.subject,c.medium].join(' • ');
  $('topicChapterName').textContent=(c.chapterNo?'Chapter '+c.chapterNo+': ':'')+c.chapterName;
  $('topicList').innerHTML='<div class="empty">Loading topics…</div>';
  $('quickArea').classList.add('hide');$('previousArea').classList.add('hide');$('topicList').classList.remove('hide');
  switchChapterTab('quick');
  server('getChapterContent',[c.id],data=>{
    chapterData=data;
    renderTopicList();
    renderPreviousYears();
  },msg=>{
    $('topicList').innerHTML='<div class="notice error">Could not load this chapter: '+escapeText(msg)+'</div>';
  });
  window.scrollTo({top:0,behavior:'smooth'});
}
function switchChapterTab(tab){
  const quick=tab==='quick';
  $('quickTab').classList.toggle('active',quick);$('previousTab').classList.toggle('active',!quick);
  $('topicList').classList.toggle('hide',!quick||!!activeTopicIndex);
  $('quickArea').classList.add('hide');$('previousArea').classList.toggle('hide',quick);
  if(quick){if(chapterData){renderTopicList();} } else {renderPreviousYears();}
}
function renderTopicList(){
  const box=$('topicList');box.innerHTML='';
  const notes=chapterData&&chapterData.notes?chapterData.notes:[];
  if(!notes.length){box.innerHTML='<div class="empty">No topics found in this workbook’s Notes sheet.</div>';return;}
  notes.forEach((n,i)=>{
    const b=document.createElement('button');b.className='card';
    const title=document.createElement('strong');title.textContent=(i+1)+'. '+(n.subtopic||'Topic '+(i+1));
    const qs=(chapterData.questions||[]).filter(q=>normal(q.subtopic)===normal(n.subtopic)).length;
    const meta=document.createElement('div');meta.className='meta';meta.textContent='📘 Quick Learning • '+qs+' related questions';
    b.append(title,meta);b.onclick=()=>openTopic(i);box.appendChild(b);
  });
  $('topicList').classList.remove('hide');$('quickArea').classList.add('hide');activeTopicIndex=-1;
}
function openTopic(i){
  activeTopicIndex=i;$('topicList').classList.add('hide');$('quickArea').classList.remove('hide');renderTopic();
}
function backToTopicList(){activeTopicIndex=-1;$('quickArea').classList.add('hide');$('topicList').classList.remove('hide');}
function moveTopic(delta){
  const notes=chapterData.notes||[];const next=activeTopicIndex+delta;
  if(next<0){activeTopicIndex=0;return}
  if(next>=notes.length){activeTopicIndex=notes.length-1;return}
  activeTopicIndex=next;renderTopic();window.scrollTo({top:0,behavior:'smooth'});
}
function renderTopic(){
  const notes=chapterData.notes||[];const n=notes[activeTopicIndex];if(!n)return;
  $('lessonChapterLabel').textContent=[chapterData.chapter.className,chapterData.chapter.subject,chapterData.chapter.medium,'Chapter '+chapterData.chapter.chapterNo].join(' • ');
  $('lessonTopicTitle').textContent=n.subtopic||'Quick Learning';
  $('lessonCount').textContent='Topic '+(activeTopicIndex+1)+' of '+notes.length;
  const progressPct=Math.round((activeTopicIndex+1)/notes.length*100);
  $('lessonProgress').style.width=progressPct+'%';
  if($('lessonPercent'))$('lessonPercent').textContent=progressPct+'%';
  const box=$('lessonContent');box.innerHTML='';
  const section=document.createElement('article');section.className='contentbox';
  addMedia(section,n.imageUrl,n.imagePosition,n.tableData,n.tablePosition,'TOP');
  const content=document.createElement('div');content.className='prose';appendMarkedNoteContent(content,n.content||'');section.appendChild(content);
  addMedia(section,n.imageUrl,n.imagePosition,n.tableData,n.tablePosition,'MIDDLE');
  addMedia(section,n.imageUrl,n.imagePosition,n.tableData,n.tablePosition,'BOTTOM');
  box.appendChild(section);
  renderRelatedQuestions(n.subtopic);
  const prev=$('lessonContent').parentElement.querySelector('.navrow');
}
function normalizeChemistrySymbols(text){
  // Normalize arrows and common unit powers before any HTML rendering/escaping.
  return String(text==null?'':text)
    .replace(/[\uE000-\uF8FF]/g,'→')
    .replace(/[\u25AF\u25AB\u25AD\u25A1\uFFFD]/g,'→')
    .replace(/(?:−|–|—)?\s*[-‐‑‒–—]\s*>/g,' → ')
    .replace(/\u2192|\u27F6|\u2794/g,'→')
    // Unit powers only: cm3, m3, cm2, m2, mm3, km2, etc.
    .replace(/\b(cm|mm|km|dm|m|in|ft)\s*\^?([23])\b/gi,(_,unit,power)=>unit+(power==='2'?'²':'³'));
}
function chemistryHtml(text){
  // Display-only chemistry notation formatter. Does not modify the Excel/Google Sheets source.
  // Supports plain-text formulas (H2O), charge notation (Cu2+, SO4^2-), Unicode indices,
  // and safe preformatted <sub>/<sup>/<b>/<strong>/<u>/<i>/<br> tags from workbook cells.
  let raw=normalizeChemistrySymbols(text);
  // Normalize common written-out scientific notation in Notes and all question fields.
  // Examples: 10 raised to 23; 10 raised to the power of 23; 10 to the power of 23.
  // Convert to caret notation before the safe-markup pass, then render the exponent as <sup>.
  raw=raw.replace(/\b(10)\s+(?:is\s+)?(?:raised|elevated)\s+to\s+(?:(?:the\s+)?power\s+(?:of\s+)?)?([+−-]?\d+)\b/gi,'$1^$2');
  raw=raw.replace(/\b(10)\s+to\s+(?:the\s+)?power\s+(?:of\s+)?([+−-]?\d+)\b/gi,'$1^$2');
  // Normalize caret exponents with optional spaces, including scientific notation.
  raw=raw.replace(/\b(10)\s*\^\s*([+−-]?\d+)/g,'$1^$2');
  // Some workbook cells contain escaped formatting tags (e.g. &lt;strong&gt;...&lt;/strong&gt;).
  // Decode ONLY the supported formatting tags, never arbitrary HTML, before sanitizing.
  // Handle cells that were HTML-escaped more than once by spreadsheet/import steps.
  // Spreadsheet/import pipelines may escape formatting tags multiple times.
  // Decode only whitelisted formatting-tag spellings (lt/gt, decimal entities,
  // hexadecimal entities, including amp-escaped layers); never decode arbitrary HTML.
  const tagNames='sub|sup|b|strong|u|i|em|br|ul|ol|li';
  const openEntity='(?:&lt;|&#0*60;|&#x0*3c;)';
  const closeEntity='(?:&gt;|&#0*62;|&#x0*3e;)';
  for(let decodePass=0;decodePass<8;decodePass++){
    const decoded=raw
      .replace(/&amp;/gi,'&')
      .replace(new RegExp(openEntity+'(\\/?)(?:'+tagNames+')\\s*\\/?'+closeEntity,'gi'),(whole,slash)=>whole.replace(/&lt;|&#0*60;|&#x0*3c;/i,'<').replace(/&gt;|&#0*62;|&#x0*3e;/i,'>').replace(/&lt;|&#0*60;|&#x0*3c;/i,'<').replace(/&gt;|&#0*62;|&#x0*3e;/i,'>'));
    if(decoded===raw)break;
    raw=decoded;
  }
  // Normalize any remaining supported encoded tag forms in one pass.
  const entityTagRe=new RegExp(openEntity+'(\\/?)(\\b(?:'+tagNames+')\\b)\\s*\\/?'+closeEntity,'gi');
  raw=raw.replace(entityTagRe,(_,slash,tag)=>'<' + slash + tag + '>');
  const safeTags=[];
  // Protect only a small whitelist of formatting tags before escaping all other HTML.
  raw=raw.replace(/<\/?(sub|sup|b|strong|u|i|em|br|ul|ol|li)\s*\/?>/gi, tag=>{
    const token='__CHEM_SAFE_TAG_'+safeTags.length+'__';
    safeTags.push(tag.replace(/\s+/g,' ').replace(/<(sub|sup|b|strong|u|i|em|br|ul|ol|li)\b[^>]*>/i,'<$1>').replace(/<\/(sub|sup|b|strong|u|i|em)>/i,'</$1>'));
    return token;
  });
  let s=raw.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  // Normalize common reaction arrows.
  s=s.replace(/--+\s*>/g,' → ').replace(/->/g,' → ').replace(/<=>|⇌/g,' ⇌ ');
  // Chemical notation auto-formatting for Notes, Questions, options, answers and explanations.
  // IMPORTANT: format simple monatomic ion charges BEFORE subscripting formula digits,
  // otherwise Mg2+ would incorrectly become Mg<sub>2</sub>+ instead of Mg<sup>2+</sup>.
  // This is display-only and never writes back to Excel/Google Sheets.
  s=s.replace(/\b([A-Z][a-z]?)(\d+)([+−-])(?=\s*(?:→|⇌|\+|\(|$|[,;)]|\]))/g,'$1<sup>$2$3</sup>');
  // Convert digits immediately following element symbols to subscripts, including adjacent symbols: H2O, CO2, NaNO3, BaCl2, H2SO4.
  // Do not use a word-boundary here: in NaNO3 and H2SO4 the element symbol is preceded by another letter.
  s=s.replace(/([A-Z][a-z]?)(\d+)/g,'$1<sub>$2</sub>');
  // Also subscript digits immediately after a closing chemical group: (NH4)2, Pb(NO3)2, Al2(SO4)3.
  // This is display-only; it does not alter the stored workbook or spreadsheet data.
  s=s.replace(/([)\]}])(\d+)/g,'$1<sub>$2</sub>');
  // Superscript ionic charges: SO4^2-, Fe^3+, NH4+, Cl-.
  s=s.replace(/\^([0-9]+[+−-]?)/g,'<sup>$1</sup>');
  s=s.replace(/([A-Za-z0-9>])([+−-])(?=\s*(?:→|⇌|\+|$|[,;)\]]))/g,'$1<sup>$2</sup>');
  // Scientific notation / Avogadro number across Notes, Questions, Options, Answers,
  // Explanations and Tables: 6.022 × 10^23, '10 raised to 23', 10^-3.
  // This runs after chemistry subscripts and before HTML is inserted into the page.
  s=s.replace(/(10)\s*\^\s*([+−-]?\d+)/g,'$1<sup>$2</sup>');
  // Format common measurement units with superscript powers (cm3 -> cm³, m2 -> m²).
  s=s.replace(/\b(cm|mm|km|dm|m|mmol|mol|L|ml|kPa|Pa|N)\s*\^?([23])\b/g,'$1<sup>$2</sup>');
  // Render simple variable/number ratios as stacked fractions across Notes and Questions.
  // Existing Unicode superscripts/subscripts (e.g. 10²³, V₁) are preserved as supplied.
  const mathAtom='(?:[A-Za-z](?:(?:<sub>[^<]*</sub>)|(?:<sup>[^<]*</sup>)|[₀₁₂₃₄₅₆₇₈₉])?|[0-9]+(?:<sup>[^<]*</sup>)?|[⁰¹²³⁴⁵⁶⁷⁸⁹]+)';
  const fractionRe=new RegExp('('+mathAtom+')\\s*\\/\\s*('+mathAtom+')(?=\\s*(?:=|→|⇌|⟶|$|[),;]))','g');
  s=s.replace(fractionRe,(_,numerator,denominator)=>'<span class=\"chem-fraction\"><span class=\"chem-fraction-top\">'+numerator+'</span><span class=\"chem-fraction-bottom\">'+denominator+'</span></span>');
  // Restore safe markup originally supplied in the workbook.
  s=s.replace(/__CHEM_SAFE_TAG_(\d+)__/g,(_,i)=>safeTags[Number(i)]||'');
  return '<span class="chem">'+s+'</span>';
}
function appendMarkedNoteContent(parent,text){
  // Notes-only markup parser. Questions rendering is intentionally untouched.
  // Structural tags H/SH/LI/NL/EQ are parsed as blocks; [B] remains inline.
  const source=String(text==null?'':text).replace(/\r/g,'');
  const blockRe=/\[(H|SH|LI|NL|EQ)\]([\s\S]*?)\[\/\1\]/gi;
  if(!/\[(?:H|SH|LI|NL|EQ|B)\]/i.test(source)){
    appendChemistryContent(parent,source);
    return;
  }
  function inlineMarkup(value){
    return String(value==null?'':value).replace(/\[B\]([\s\S]*?)\[\/B\]/gi,'<strong>$1</strong>');
  }
  function appendPlain(value){
    if(!value)return;
    // Bold markers are converted in the full text segment, so they do not split a paragraph.
    appendChemistryContent(parent,inlineMarkup(value));
  }
  function appendEquationBlock(value){
    String(value||'').split('\n').map(x=>x.trim()).filter(Boolean).forEach(line=>{
      const div=document.createElement('div');
      div.className='equation';
      div.innerHTML=chemistryHtml(inlineMarkup(line));
      parent.appendChild(div);
    });
  }
  function appendList(kind,value){
    // If EQ markers are inside LI/NL, list formatting wins: strip EQ wrappers and keep equations left aligned.
    const cleaned=String(value||'').replace(/\[(?:EQ)\]/gi,'').replace(/\[\/(?:EQ)\]/gi,'');
    const items=cleaned.split('\n').map(line=>line.trim()).filter(Boolean);
    const list=document.createElement(kind==='NL'?'ol':'ul');
    list.className=kind==='NL'?'study-numbered':'study-bullet-list';
    items.forEach(item=>{
      const li=document.createElement('li');
      const prepared=item.replace(/^(?:[•●▪◦➤✓✔]\s*)/,'');
      li.innerHTML=chemistryHtml(inlineMarkup(prepared));
      list.appendChild(li);
    });
    parent.appendChild(list);
  }
  let cursor=0,match;
  while((match=blockRe.exec(source))!==null){
    appendPlain(source.slice(cursor,match.index));
    const kind=match[1].toUpperCase(),value=match[2];
    if(kind==='H'||kind==='SH'){
      const el=document.createElement('div');
      el.className=kind==='H'?'study-heading':'study-subheading';
      el.innerHTML=chemistryHtml(inlineMarkup(value.trim()));
      parent.appendChild(el);
    }else if(kind==='EQ'){
      appendEquationBlock(value);
    }else if(kind==='LI'||kind==='NL'){
      appendList(kind,value);
    }
    cursor=blockRe.lastIndex;
  }
  appendPlain(source.slice(cursor));
}

function appendChemistryContent(parent,text){
  // Render HTML tables embedded in Notes cells as actual tables.
  // This is display-only; all workbook/Google Sheets data remains unchanged.
  const tableSource=String(text==null?'':text);
  const tablePattern=/<table\b[\s\S]*?<\/table\s*>/gi;
  const tableMatches=[...tableSource.matchAll(tablePattern)];
  if(tableMatches.length){
    let cursor=0;
    tableMatches.forEach(match=>{
      const before=tableSource.slice(cursor,match.index);
      if(before.trim()) appendChemistryContent(parent,before);
      const parsed=new DOMParser().parseFromString(match[0],'text/html');
      const sourceTable=parsed.body.querySelector('table');
      if(sourceTable){
        const wrap=document.createElement('div');
        wrap.className='tablewrap';
        const table=document.createElement('table');
        table.className='datatable';
        sourceTable.querySelectorAll('tr').forEach(sourceRow=>{
          const row=document.createElement('tr');
          sourceRow.querySelectorAll('th,td').forEach(sourceCell=>{
            const tag=sourceCell.tagName.toLowerCase()==='th'?'th':'td';
            const cell=document.createElement(tag);
            ['rowspan','colspan'].forEach(attr=>{
              const value=sourceCell.getAttribute(attr);
              if(value && /^\d+$/.test(value) && Number(value)>0) cell.setAttribute(attr,value);
            });
            cell.innerHTML=chemistryHtml(sourceCell.innerHTML);
            row.appendChild(cell);
          });
          if(row.children.length)table.appendChild(row);
        });
        wrap.appendChild(table);
        parent.appendChild(wrap);
      }
      cursor=match.index+match[0].length;
    });
    const after=tableSource.slice(cursor);
    if(after.trim()) appendChemistryContent(parent,after);
    return;
  }
  // Global, content-driven study-note formatting. This is display-only: Excel data is unchanged.
  const headingPatterns=[
    /^(advantages|disadvantages|importance|uses|applications|properties|characteristics|functions|types|classification|structure|composition|preparation|manufacture|production|principle|working|construction|process|method|procedure|observation|observations|inference|result|conclusion|precautions|materials required|apparatus required|aim|objective|theory|examples|notes?|summary|key points|chemical reactions?|chemical equations?|experiments?|activity|activities|questions?|answers?|electrolysis|oxidation|reduction|corrosion|combustion|neutralisation|neutralization|electrochemical cells?|fuel cells?|primary cells?|secondary cells?|batteries|lithium[- ]ion batteries?)\b.*$/i
  ];
  let listMode=false;
  let previousWasBlank=true;
  const lines=String(text||'').replace(/\r/g,'').split('\n');
  const isMalayalam=t=>/[\u0D00-\u0D7F]/.test(t);
  const isSentence=t=>/[.!?।]$/.test(t);
  const isBulletLine=t=>/^(?:[•●▪◦➤✓✔–—-]|\d+[.)])\s+/.test(t);
  const titleCaseEnglish=t=>/^[A-Z][A-Za-z0-9()'’/+,-]*(?:\s+(?:[A-Z][A-Za-z0-9()'’/+,-]*|of|and|in|the|for|to|with|on|by|from|or|a|an|is|are|cell|cells|battery|batteries|ion|fuel|chemical|electric|electrical|energy|reaction|reactions|solution|solutions|metal|metals|non-metals|nonmetal|nonmetals))*$/.test(t);
  for(let index=0;index<lines.length;index++){
    const line=lines[index];
    let t=line.trim();
    if(!t){const br=document.createElement('div');br.style.height='7px';parent.appendChild(br);listMode=false;previousWasBlank=true;continue;}
    // Treat list-item HTML coming from spreadsheet cells as a real, unboxed list row
    // before the generic colon/label formatter can turn it into a boxed labelrow.
    // Decode only LI wrappers (including common escaped/entity forms); preserve inner formatting.
    let listItemText=t;
    for(let pass=0;pass<5;pass++){
      listItemText=listItemText
        .replace(/&amp;/gi,'&')
        .replace(/&lt;\/?li\s*&gt;/gi,m=>m.toLowerCase().includes('</')?'</li>':'<li>')
        .replace(/&#0*60;\/?li\s*&#0*62;/gi,m=>m.toLowerCase().includes('/li')?'</li>':'<li>')
        .replace(/&#x0*3c;\/?li\s*&#x0*3e;/gi,m=>m.toLowerCase().includes('/li')?'</li>':'<li>');
    }
    const isWrappedListItem=/^<li\b[^>]*>[\s\S]*<\/li\s*>$/i.test(listItemText);
    if(isWrappedListItem){
      const item=listItemText.replace(/^<li\b[^>]*>/i,'').replace(/<\/li\s*>$/i,'').trim();
      const div=document.createElement('div');div.className='study-bullet source-list-item';
      div.innerHTML=chemistryHtml(item);parent.appendChild(div);
      previousWasBlank=false;continue;
    }
    // If LI tags wrap only the label before a colon, the old formatter turned
    // the line into a separate boxed label/value card and exposed <li> in some
    // encoded forms. Strip those wrappers and render the complete line normally.
    const hasInlineLiMarkup=/<\/?li\b/i.test(listItemText);
    if(hasInlineLiMarkup){
      const plainListLine=listItemText
        .replace(/^<li\b[^>]*>/i,'')
        .replace(/<\/li\s*>/gi,'')
        .replace(/<li\b[^>]*>/gi,'')
        .trim();
      const div=document.createElement('div');
      div.className='study-bullet source-list-item';
      div.innerHTML=chemistryHtml(plainListLine);
      parent.appendChild(div);
      previousWasBlank=false;continue;
    }
    const colon=t.indexOf(':');
    const next=(lines[index+1]||'').trim();
    const words=t.split(/\s+/).length;
    // Malayalam example label and formula should be kept together with a compact gap.
    const inlineExample=t.match(/^ഉദാഹരണം\s*:\s*(.+)$/u);
    if(inlineExample || /^ഉദാഹരണം\s*:?\s*$/u.test(t)){
      let nextIndex=index;
      let formula=inlineExample ? inlineExample[1].trim() : '';
      if(!formula){
        nextIndex=index+1;
        while(nextIndex<lines.length && !String(lines[nextIndex]||'').trim())nextIndex++;
        formula=String(lines[nextIndex]||'').trim();
      }
      const row=document.createElement('div');row.className='example-inline';
      const label=document.createElement('span');label.className='example-inline-label';label.textContent='ഉദാഹരണം :';row.appendChild(label);
      if(formula){
        const value=document.createElement('span');value.className='example-inline-value';
        value.innerHTML=chemistryHtml(formula);row.appendChild(value);
      }
      parent.appendChild(row);
      // Only consume a following line when the label was on its own line.
      if(!inlineExample && formula) index=nextIndex;
      previousWasBlank=false;continue;
    }
    const knownHeading=headingPatterns.some(re=>re.test(t)) && t.length<100 && !isSentence(t);
    // Detect other standalone headings generically (English or Malayalam), not by a fixed topic-name list.
    const standaloneHeading=t.length>2 && t.length<=78 && words<=10 && !isSentence(t) &&
      !isBulletLine(t) && !/[:;=→⇌⟶]/.test(t) &&
      !/^(eg|e\.g\.|for example|note|example|in |the |a |an |when |if |this |these |such |it |they |he |she |we |because |which |that |therefore |hence |thus )/i.test(t) &&
      (titleCaseEnglish(t) || (/^[A-Z][A-Z\s0-9()'’/+,-]+$/.test(t) && /[A-Z]/.test(t)) ||
       (isMalayalam(t) && (previousWasBlank || isBulletLine(next) || /^(?:•|●|▪|◦|➤|✓|✔|\d+[.)])\s+/.test(next))));
    if(knownHeading || standaloneHeading){
      const div=document.createElement('div');div.className='study-heading';
      if(/^advantages\b/i.test(t))div.classList.add('advantages');
      if(/^disadvantages\b/i.test(t))div.classList.add('disadvantages');
      // Render whitelisted inline formatting (including <strong>) in Notes headings.
      // chemistryHtml escapes arbitrary HTML and only restores approved chemistry/formatting tags.
      div.innerHTML=chemistryHtml(t);parent.appendChild(div);
      listMode=/^(advantages|disadvantages|uses|applications|types|examples|characteristics|properties|precautions|materials required|apparatus required)\b/i.test(t);
      previousWasBlank=false;continue;
    }
    const explicit=t.match(/^(?:[•●▪◦➤✓✔–—-]|\d+[.)])\s+(.+)$/);
    const shortItem=listMode && t.length<135 && !isSentence(t) && !/^(in |the |a |an |when |if |this |these |such |it |they )/i.test(t);
    if(explicit || shortItem){
      const div=document.createElement('div');div.className='study-bullet';
      const item=explicit?explicit[1]:t;
      div.innerHTML=chemistryHtml(item);parent.appendChild(div);previousWasBlank=false;continue;
    }
    // Keep label/value rows and chemistry equations intact.
    const leftOfColon=t.slice(0,colon),rightOfColon=t.slice(colon+1);
    const looksLikeMath=colon>0 && /[=+*/×÷]/.test(t) && /(?:^|\s)[xXyYzZ]\s*=|=\s*[+-]?\d/.test(t);
    if(colon>0 && colon<55 && !/[→⇌⟶]/.test(leftOfColon) && !looksLikeMath){
      const row=document.createElement('div');row.className='labelrow';
      const label=document.createElement('span');label.className='label';label.innerHTML=chemistryHtml(t.slice(0,colon).trim());
      const sep=document.createElement('span');sep.className='colon';sep.textContent=' : ';
      const value=document.createElement('span');value.className='value';value.innerHTML=chemistryHtml(t.slice(colon+1).trim());
      row.append(label,sep,value);parent.appendChild(row);previousWasBlank=false;continue;
    }
    const div=document.createElement('div');
    if(/^Example\s+\d+\b/i.test(t)){div.className='example-heading';div.textContent=t;parent.appendChild(div);listMode=false;previousWasBlank=false;continue;}
    const isMathResult=/^(?:[xyzXYZ]\s*=\s*|\+?\d+\s*[+−-]\s*[xyzXYZ]\s*=|[xyzXYZ]\s*[=])/.test(t) && t.length<160;
    const isEquation=/(→|⇌|⟶|\b[A-Z][a-z]?[₀-₉0-9]*\s*[+→⇌=]|\b(Anode|Cathode|Oxidation|Reduction|Cell Voltage)\b)/.test(t) && t.length<230;
    if(isMathResult){div.className='math-result';div.innerHTML=chemistryHtml(t);}else if(isEquation){div.className='equation';div.innerHTML=chemistryHtml(t);}else {div.innerHTML=chemistryHtml(t);}
    parent.appendChild(div);previousWasBlank=false;
  }
}
function addMedia(parent,imgUrl,imgPos,tableData,tablePos,where){
  if(imgUrl&&String(imgPos).toUpperCase()===where)addImage(parent,imgUrl);
  if(tableData&&String(tablePos).toUpperCase()===where)addTable(parent,tableData);
}
function getDriveImageId(url){
  const s=String(url||'').trim();
  if(!s)return '';
  let m=s.match(/drive\.google\.com\/file\/d\/([^/?#]+)/i);
  if(m)return m[1];
  m=s.match(/[?&]id=([^&#]+)/i);
  if(m && /drive\.google\.com/i.test(s))return decodeURIComponent(m[1]);
  m=s.match(/drive\.google\.com\/thumbnail\?id=([^&#]+)/i);
  if(m)return decodeURIComponent(m[1]);
  return '';
}
function normalizeImage(url){
  const s=String(url||'').trim();
  if(!s)return '';
  const id=getDriveImageId(s);
  return id ? 'https://drive.google.com/thumbnail?id='+encodeURIComponent(id)+'&sz=w1200' : s;
}
function addImage(parent,url){
  const img=document.createElement('img');
  img.className='lessonimg';img.loading='lazy';img.alt='Chemistry diagram';
  const id=getDriveImageId(url);
  let triedFallback=false;
  img.onerror=()=>{
    // Try Google's alternate image endpoint once for Drive files.
    if(id && !triedFallback){
      triedFallback=true;
      img.src='https://drive.google.com/uc?export=view&id='+encodeURIComponent(id);
      return;
    }
    const msg=document.createElement('div');msg.className='notice';
    msg.textContent='Image unavailable. In Google Drive, open Share → General access → Anyone with the link (Viewer), then check the image URL.';
    img.replaceWith(msg);
  };
  img.src=normalizeImage(url);
  parent.appendChild(img);
}
function addTable(parent,raw){
  const lines=String(raw||'').split(/\r?\n/).map(s=>s.trim()).filter(Boolean);if(!lines.length)return;
  const wrap=document.createElement('div');wrap.className='tablewrap';const table=document.createElement('table');table.className='datatable';
  lines.forEach((line,i)=>{const tr=document.createElement('tr');line.split('|').forEach(v=>{const el=document.createElement(i===0?'th':'td');el.innerHTML=chemistryHtml(v.trim());tr.appendChild(el)});table.appendChild(tr)});
  wrap.appendChild(table);parent.appendChild(wrap);
}
function renderRelatedQuestions(topic){
  const box=$('relatedQuestions');box.innerHTML='';
  const qs=(chapterData.questions||[]).filter(q=>normal(q.subtopic)===normal(topic));
  const heading=document.createElement('h3');heading.className='sectiontitle';heading.innerHTML='<span class="ico">✍️</span> Questions from this topic';box.appendChild(heading);
  if(!qs.length){const e=document.createElement('div');e.className='empty';e.textContent='No questions linked to this topic yet.';box.appendChild(e);return;}
  renderQuestionGroups(qs,box,true);
}
function renderPreviousYears(){
  const box=$('previousArea');box.innerHTML='';
  if(!chapterData){box.innerHTML='<div class="empty">Loading previous year questions…</div>';return;}
  const className=String((chapterData.chapter||{}).className||selectedClass||'').toLowerCase();
  const isClass9=/class\s*9|standard\s*9/.test(className);
  const allQs=chapterData.questions||[];
  const isPractice=q=>/practice\s*questions?/i.test(String(q.examName||'').trim());
  const practiceQs=allQs.filter(isPractice);
  const examQs=allQs.filter(q=>{
    if(isPractice(q)) return false;
    const exam=normal(q.examName||'');
    if(isClass9) return /first\s*mid|mid[- ]?term|second\s*term|annual/.test(exam) && !/sslc/.test(exam);
    return /first\s*mid|mid[- ]?term|second\s*term|sslc/.test(exam);
  });
  const groups={};
  examQs.forEach(q=>{
    const examName=String(q.examName||'Examination').trim();
    const year=String(q.year||'Year not specified').trim();
    const key=examName+'|||'+year;
    (groups[key]||(groups[key]={examName,year,questions:[]})).questions.push(q);
  });
  const preferred=isClass9
    ? ['First Mid-Term Examination','Second Term Examination','Annual Examination']
    : ['First Mid-Term Examination','Second Term Examination','SSLC Model Examination','SSLC Examination'];
  const entries=Object.values(groups).sort((a,b)=>{
    const ai=preferred.findIndex(x=>normal(x)===normal(a.examName));
    const bi=preferred.findIndex(x=>normal(x)===normal(b.examName));
    if(ai!==-1 || bi!==-1){if(ai===-1)return 1;if(bi===-1)return -1;if(ai!==bi)return ai-bi;}
    return String(b.year).localeCompare(String(a.year),undefined,{numeric:true}) || a.examName.localeCompare(b.examName);
  });
  const h=document.createElement('h3');h.className='sectiontitle';h.innerHTML='<span class="ico">🏆</span> Previous Year Questions';box.appendChild(h);
  const intro=document.createElement('p');intro.className='muted';intro.textContent='Choose an examination to view its questions.';box.appendChild(intro);
  if(!entries.length){const empty=document.createElement('div');empty.className='empty';empty.textContent='No matching examination questions are available for this class.';box.appendChild(empty);}
  entries.forEach(entry=>{
    const b=document.createElement('button');b.className='yearrow';
    const left=document.createElement('div');
    const strong=document.createElement('strong');strong.textContent=entry.examName;strong.style.display='block';
    const year=document.createElement('span');year.textContent=entry.year;year.className='meta';left.append(strong,year);
    const count=document.createElement('span');count.textContent=entry.questions.length+' question entries  ›';
    b.append(left,count);b.onclick=()=>showYearQuestions(entry.examName+' · '+entry.year,entry.questions);box.appendChild(b);
  });
  const practiceHeading=document.createElement('h3');practiceHeading.className='sectiontitle';practiceHeading.style.marginTop='24px';practiceHeading.innerHTML='<span class="ico">📝</span> Practice Questions';box.appendChild(practiceHeading);
  const practiceIntro=document.createElement('p');practiceIntro.className='muted';practiceIntro.textContent='Extra practice questions, separate from examination papers.';box.appendChild(practiceIntro);
  const practiceButton=document.createElement('button');practiceButton.className='yearrow';
  const practiceLeft=document.createElement('div');
  const practiceTitle=document.createElement('strong');practiceTitle.textContent='Practice Questions';practiceTitle.style.display='block';
  const practiceSub=document.createElement('span');practiceSub.className='meta';practiceSub.textContent=practiceQs.length?'Additional practice':'Coming soon';
  practiceLeft.append(practiceTitle,practiceSub);
  const practiceCount=document.createElement('span');practiceCount.textContent=practiceQs.length?practiceQs.length+' question entries  ›':'No questions added yet';
  practiceButton.append(practiceLeft,practiceCount);practiceButton.disabled=!practiceQs.length;if(!practiceQs.length)practiceButton.style.opacity='.65';
  practiceButton.onclick=()=>showYearQuestions('Practice Questions',practiceQs);box.appendChild(practiceButton);
}
function showYearQuestions(year,qs){
  const box=$('previousArea');box.innerHTML='';
  const back=document.createElement('button');back.className='btn soft';back.textContent='← All questions';back.onclick=renderPreviousYears;box.appendChild(back);
  const h=document.createElement('h3');h.className='sectiontitle';h.style.marginTop='15px';h.textContent='📅 '+year+' — Previous Year Questions';box.appendChild(h);
  renderQuestionGroups(qs,box,true);
}
function renderQuestionGroups(qs,parent,showExam){
  // Keep the question number and subquestion labels exactly as supplied by the Excel workbook.
  // Sort by the Excel question number, then group a), b), c) rows under the same question.
  const sorted=(qs||[]).slice().sort((a,b)=>{
    const ea=String(a.examName||''), eb=String(b.examName||'');
    if(ea!==eb)return 0; // preserve the examination order already selected by the caller
    const ya=String(a.year||''), yb=String(b.year||''); if(ya!==yb)return 0;
    const na=String(a.questionNo??'').trim(), nb=String(b.questionNo??'').trim();
    const ma=na.match(/\d+/), mb=nb.match(/\d+/);
    if(ma&&mb&&Number(ma[0])!==Number(mb[0]))return Number(ma[0])-Number(mb[0]);
    return 0;
  });
  const groups=[]; const map=new Map();
  sorted.forEach(q=>{
    const no=String(q.questionNo??'').trim();
    const key=[String(q.examName||''),String(q.year||''),no || ('row-'+groups.length)].join('|');
    let g=map.get(key);
    if(!g){g={key,examName:q.examName,year:q.year,questionNo:no,commonStatement:q.commonStatement,
      statementImageUrl:q.statementImageUrl,statementImagePosition:q.statementImagePosition,
      statementTableData:q.statementTableData,statementTablePosition:q.statementTablePosition,items:[]};
      map.set(key,g);groups.push(g);
    }
    ['commonStatement','statementImageUrl','statementImagePosition','statementTableData','statementTablePosition'].forEach(k=>{if(!g[k]&&q[k])g[k]=q[k]});
    g.items.push(q);
  });
  groups.forEach((g,index)=>{
    const card=document.createElement('article');card.className='questioncard';
    const head=document.createElement('div');head.className='qhead';
    const displayNo=String(g.questionNo||'').trim() || String(index+1);
    const tag=document.createElement('span');tag.className='qtag';tag.textContent='Question '+displayNo;head.appendChild(tag);
    if(showExam&&g.examName){const examTag=document.createElement('span');examTag.className='qtag';examTag.textContent=g.examName;head.appendChild(examTag)}
    if(g.year){const yearTag=document.createElement('span');yearTag.className='qtag';yearTag.textContent=g.year;head.appendChild(yearTag)}
    card.appendChild(head);
    if(g.commonStatement){const st=document.createElement('div');st.className='qtext';st.innerHTML=chemistryHtml(g.commonStatement);card.appendChild(st)}
    addMedia(card,g.statementImageUrl,g.statementImagePosition,g.statementTableData,g.statementTablePosition,'TOP');
    addMedia(card,g.statementImageUrl,g.statementImagePosition,g.statementTableData,g.statementTablePosition,'MIDDLE');
    g.items.forEach(q=>renderOneQuestion(card,q));
    addMedia(card,g.statementImageUrl,g.statementImagePosition,g.statementTableData,g.statementTablePosition,'BOTTOM');
    parent.appendChild(card);
  });
}
function renderOneQuestion(parent,q){
  const wrap=document.createElement('div');wrap.className='question-part';
  const title=document.createElement('div');title.className='qtext';title.innerHTML=chemistryHtml((q.subquestionLabel?String(q.subquestionLabel)+' ':'')+(q.question||''));wrap.appendChild(title);
  if(q.marks!=='' && q.marks!==null && q.marks!==undefined){const meta=document.createElement('div');meta.className='meta mark-meta';const markNumber=String(q.marks).trim();meta.textContent='('+markNumber+' '+(Number(markNumber)===1?'Mark':'Marks')+')';wrap.appendChild(meta);}
  addMedia(wrap,q.questionImageUrl,q.questionImagePosition,q.questionTableData,q.questionTablePosition,'TOP');
  if(String(q.questionType).toUpperCase()==='MCQ'){
    const opts=document.createElement('div');opts.className='options';
    [['A',q.optionA],['B',q.optionB],['C',q.optionC],['D',q.optionD]].forEach(([l,v])=>{if(v){const op=document.createElement('div');op.className='option';op.innerHTML=escapeText(l+'. ') + chemistryHtml(v);opts.appendChild(op)}});
    wrap.appendChild(opts);
  }
  addMedia(wrap,q.questionImageUrl,q.questionImagePosition,q.questionTableData,q.questionTablePosition,'MIDDLE');
  addMedia(wrap,q.questionImageUrl,q.questionImagePosition,q.questionTableData,q.questionTablePosition,'BOTTOM');
  const actions=document.createElement('div');actions.className='question-actions';
  const answerBtn=document.createElement('button');answerBtn.className='btn green';answerBtn.textContent='👁 View Answer';
  const expBtn=document.createElement('button');expBtn.className='btn soft';expBtn.textContent='💡 View Explanation';
  const answer=document.createElement('div');answer.className='answer hide';answer.innerHTML=escapeText('Answer: ') + chemistryHtml(q.correctAnswer||'Not provided');
  const exp=document.createElement('div');exp.className='explanation hide';
  const txt=document.createElement('div');txt.innerHTML=chemistryHtml(q.explanation||'Explanation not provided.');exp.appendChild(txt);
  addMedia(exp,q.explanationImageUrl,q.explanationImagePosition,q.explanationTableData,q.explanationTablePosition,'TOP');
  addMedia(exp,q.explanationImageUrl,q.explanationImagePosition,q.explanationTableData,q.explanationTablePosition,'MIDDLE');
  addMedia(exp,q.explanationImageUrl,q.explanationImagePosition,q.explanationTableData,q.explanationTablePosition,'BOTTOM');
  answerBtn.onclick=()=>answer.classList.toggle('hide');expBtn.onclick=()=>exp.classList.toggle('hide');
  actions.append(answerBtn,expBtn);wrap.append(actions,answer,exp);parent.appendChild(wrap);
}
function normal(s){return String(s||'').trim().replace(/\s+/g,' ').toLowerCase()}
function escapeText(s){return String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
function showAdminLogin(){ $('adminLoginPanel').classList.remove('hide');$('adminLoginPanel').scrollIntoView({behavior:'smooth'}); }
function hideAdminLogin(){ $('adminLoginPanel').classList.add('hide'); }
function loginAdmin(){
  const msg=$('loginMessage');msg.className='notice';msg.textContent='Checking login…';
  server('adminLogin',[$('adminUsername').value,$('adminPassword').value],r=>{
    if(!r.ok){msg.className='notice error';msg.textContent=r.message;return}
    adminToken=r.token;hideAdminLogin();$('adminPanel').classList.remove('hide');$('adminPanel').scrollIntoView({behavior:'smooth'});loadAdminSummary();
  },m=>{msg.className='notice error';msg.textContent=m});
}
function logoutAdmin(){if(adminToken)server('adminLogout',[adminToken],()=>{});adminToken='';$('adminPanel').classList.add('hide');}
function uploadWorkbook(){
  const f=$('workbookFile').files[0],msg=$('uploadMessage');
  const payload={className:$('uploadClass').value,subject:$('uploadSubject').value.trim(),medium:$('uploadMedium').value,
    chapterNo:$('uploadChapterNo').value.trim(),chapterName:$('uploadChapterName').value.trim()};
  if(!adminToken){msg.className='notice error';msg.textContent='Please sign in again.';return}
  if(!f||!payload.className||!payload.subject||!payload.medium||!payload.chapterNo||!payload.chapterName){msg.className='notice error';msg.textContent='Complete all fields and select an Excel workbook.';return}
  if(!/\.xlsx$/i.test(f.name)){msg.className='notice error';msg.textContent='Choose an .xlsx file.';return}
  const btn=$('uploadButton');btn.disabled=true;btn.textContent='⏳ Uploading…';msg.className='notice';msg.textContent='Reading and validating the workbook. Please wait.';
  const reader=new FileReader();
  reader.onload=()=>{
    payload.fileName=f.name;payload.mimeType=f.type||'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';payload.base64=String(reader.result).split(',')[1];
    server('uploadWorkbook',[payload,adminToken],r=>{
      msg.className='notice success';msg.textContent=r.message+' Notes: '+r.notesCount+'; question rows: '+r.questionsCount+'.';
      btn.disabled=false;btn.textContent='⬆️ Upload & Publish';$('workbookFile').value='';loadCatalog();loadAdminSummary();msg.textContent += ' Existing chapter data is replaced when the same class, subject, medium and chapter number is uploaded.';
    },m=>{msg.className='notice error';msg.textContent=m;btn.disabled=false;btn.textContent='⬆️ Upload & Publish'});
  };
  reader.onerror=()=>{msg.className='notice error';msg.textContent='Could not read the file.';btn.disabled=false;btn.textContent='⬆️ Upload & Publish'};
  reader.readAsDataURL(f);
}
function editChapter(c){
  $('uploadClass').value=c.className||'';$('uploadSubject').value=c.subject||'Chemistry';
  $('uploadMedium').value=c.medium||'';$('uploadChapterNo').value=c.chapterNo||'';$('uploadChapterName').value=c.chapterName||'';
  $('workbookFile').value='';
  const msg=$('uploadMessage');msg.className='notice';msg.textContent='Edit mode: choose the corrected .xlsx workbook and click Upload & Publish. The chapter with the same class, subject, medium and chapter number will be replaced.';
  $('uploadButton').textContent='🔄 Replace Chapter Data';
  $('uploadButton').scrollIntoView({behavior:'smooth',block:'center'});
}
function deleteChapterData(c){
  if(!adminToken){alert('Please sign in again.');return;}
  const label=[c.className,c.subject,c.medium,'Chapter '+c.chapterNo+': '+c.chapterName].join(' • ');
  if(!confirm('Permanently delete this chapter and its Notes/Questions data?\n\n'+label+'\n\nThis action cannot be undone.'))return;
  server('deleteChapter',[c.id,adminToken],r=>{
    alert(r.message||'Chapter deleted.');loadCatalog();loadAdminSummary();
    if(selectedChapter&&selectedChapter.id===c.id){chapterData=null;selectedChapter=null;goHome();}
  },m=>alert('Could not delete chapter: '+m));
}
function loadAdminSummary(){
  if(!adminToken)return;
  server('getAdminSummary',[adminToken],r=>{
    const box=$('adminSummary');box.innerHTML='';
    if(!r.chapters.length){box.innerHTML='<div class="empty">No uploaded chapters yet.</div>';return}
    r.chapters.forEach(c=>{
      const row=document.createElement('div');row.className='contentbox';
      const h=document.createElement('strong');h.textContent=c.className+' • '+c.subject+' • '+c.medium;
      const p=document.createElement('div');p.textContent='Chapter '+c.chapterNo+': '+c.chapterName;
      const meta=document.createElement('div');meta.className='meta';meta.textContent=c.notesCount+' topics • '+c.questionsCount+' question rows';
      const actions=document.createElement('div');actions.className='admin-actions';
      const edit=document.createElement('button');edit.className='btn soft';edit.textContent='✏️ Edit / Replace';edit.onclick=()=>editChapter(c);
      const del=document.createElement('button');del.className='btn danger';del.textContent='🗑️ Delete';del.onclick=()=>deleteChapterData(c);
      actions.append(edit,del);row.append(h,p,meta,actions);box.appendChild(row);
    });
  });
}
</script>

<div id="penToolbar" role="toolbar" aria-label="Smart Pen teaching tools">
  <div class="pen-toolbar-head"><span class="pen-label">✍️ PEN TOOLS</span><button type="button" class="pen-close" onclick="togglePenToolbar(false)" aria-label="Close pen tools">✕</button></div>
  <button type="button" id="penToggle" onclick="penSetMode('pen')">✍️ Pen</button>
  <button type="button" id="penHighlighter" onclick="penSetMode('highlighter')">🖍️ Highlight</button>
  <select id="penColor" aria-label="Pen colour" onchange="penApplyStyle()"><option value="#e53935">🔴 Red</option><option value="#1565c0">🔵 Blue</option><option value="#168653">🟢 Green</option><option value="#202124">⚫ Black</option><option value="#8e24aa">🟣 Purple</option></select>
  <select id="penSize" aria-label="Pen thickness" onchange="penApplyStyle()"><option value="2.5">Fine</option><option value="4" selected>Medium</option><option value="7">Thick</option></select>
  <button type="button" onclick="penUndo()">↶ Undo</button>
  <button type="button" onclick="penRedo()">↷ Redo</button>
  <button type="button" onclick="penSetMode('eraser')">🧽 Eraser</button>
  <button type="button" id="penScroll" class="active" onclick="penSetMode('scroll')">🖐️ Scroll</button>
  <button type="button" onclick="penClear()">🗑️ Clear</button>
</div>
<button type="button" id="penFab" aria-label="Open pen tools" title="Pen tools" onclick="togglePenToolbar()">✍️</button>
<canvas id="penCanvas" aria-label="Writing layer for Xiaomi Smart Pen"></canvas>
<script>
(function(){
 const canvas=document.getElementById('penCanvas'); if(!canvas)return;
 const ctx=canvas.getContext('2d'); let mode='scroll', drawing=false, current=null, activePointerId=null;
 const undoStack=[]; let strokes=[];
 // Only stylus input draws. Finger/palm contacts never create strokes.
 function dimensions(){return {w:Math.max(document.documentElement.scrollWidth,window.innerWidth),h:Math.max(document.documentElement.scrollHeight,window.innerHeight)}}
 function resize(){const d=dimensions(), ratio=window.devicePixelRatio||1;canvas.style.width=d.w+'px';canvas.style.height=d.h+'px';canvas.width=Math.round(d.w*ratio);canvas.height=Math.round(d.h*ratio);redraw();}
 function redraw(){const ratio=window.devicePixelRatio||1;ctx.setTransform(ratio,0,0,ratio,0,0);ctx.clearRect(0,0,canvas.width/ratio,canvas.height/ratio);strokes.forEach(drawStroke)}
 function drawStroke(s){if(!s.points.length)return;ctx.save();ctx.globalCompositeOperation=s.mode==='eraser'?'destination-out':'source-over';ctx.strokeStyle=s.color;ctx.globalAlpha=s.mode==='highlighter'?.28:1;ctx.lineWidth=s.mode==='highlighter'?Math.max(12,s.size*3):s.size;ctx.lineCap='round';ctx.lineJoin='round';ctx.beginPath();ctx.moveTo(s.points[0].x,s.points[0].y);if(s.points.length===1){ctx.lineTo(s.points[0].x+.1,s.points[0].y+.1)}else{s.points.slice(1).forEach(pt=>ctx.lineTo(pt.x,pt.y))}ctx.stroke();ctx.restore()}
 function point(e){return {x:e.clientX+window.scrollX,y:e.clientY+window.scrollY}}
 function finish(e){if(activePointerId!==null&&e.pointerId!==activePointerId)return;drawing=false;current=null;activePointerId=null;}
 function onDown(e){if(mode==='scroll')return;if(e.pointerType!=='pen'){if(e.cancelable)e.preventDefault();return;}if(drawing)return;drawing=true;activePointerId=e.pointerId;try{canvas.setPointerCapture(e.pointerId)}catch(_){}current={mode:mode,color:document.getElementById('penColor').value,size:Number(document.getElementById('penSize').value),points:[point(e)]};strokes.push(current);drawStroke(current);if(e.cancelable)e.preventDefault()}
 function onMove(e){if(!drawing||!current||e.pointerId!==activePointerId)return;if(e.pointerType!=='pen')return;const events=e.getCoalescedEvents?e.getCoalescedEvents():[e];events.forEach(ev=>current.points.push(point(ev)));redraw();if(e.cancelable)e.preventDefault()}
 function onUp(e){finish(e)}
 ['pointerdown','pointermove','pointerup','pointercancel','lostpointercapture'].forEach(type=>canvas.addEventListener(type,type==='pointerdown'?onDown:type==='pointermove'?onMove:finish,{passive:false}));
 window.togglePenToolbar=function(force){const toolbar=document.getElementById('penToolbar');const open=typeof force==='boolean'?force:!toolbar.classList.contains('open');toolbar.classList.toggle('open',open);document.getElementById('penFab').setAttribute('aria-label',open?'Close pen tools':'Open pen tools');document.getElementById('penFab').title=open?'Close pen tools':'Pen tools';document.getElementById('penFab').textContent=open?'✕':'✍️';};
 window.penSetMode=function(m){drawing=false;current=null;activePointerId=null;mode=m;canvas.classList.toggle('pen-enabled',m!=='scroll');document.querySelectorAll('#penToolbar button').forEach(b=>b.classList.remove('active'));const ids={pen:'penToggle',highlighter:'penHighlighter',scroll:'penScroll'};if(ids[m])document.getElementById(ids[m]).classList.add('active');canvas.style.cursor=m==='eraser'?'cell':m==='scroll'?'default':'crosshair'};
 window.penApplyStyle=function(){};
 window.penUndo=function(){if(strokes.length){undoStack.push(strokes.pop());redrawAll()}};
 window.penRedo=function(){if(undoStack.length){strokes.push(undoStack.pop());redrawAll()}};
 window.penClear=function(){if(!strokes.length)return;if(confirm('Clear all pen marks on this page?')){strokes=[];undoStack.length=0;redrawAll()}};
 let resizeTimer;window.addEventListener('resize',()=>{clearTimeout(resizeTimer);resizeTimer=setTimeout(resize,120)});window.addEventListener('load',resize);const observer=new MutationObserver(()=>{clearTimeout(resizeTimer);resizeTimer=setTimeout(resize,160)});observer.observe(document.body,{childList:true,subtree:true});resize();
})();
</script>

</body>
</html>
