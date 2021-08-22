(self.webpackChunkarch_guide=self.webpackChunkarch_guide||[]).push([[277],{5745:(e,a,l)=>{"use strict";l.r(a),l.d(a,{data:()=>r});const r={key:"v-3fc458e8",path:"/exclusive/image.html",title:"图像制作",lang:"zh-CN",frontmatter:{sidebarDepth:2},excerpt:"",headers:[{level:3,title:"🌺 乱花渐欲迷人眼，浅草才能没马蹄",slug:"🌺-乱花渐欲迷人眼-浅草才能没马蹄",children:[]},{level:3,title:"🔖 这一节将会讨论：",slug:"🔖-这一节将会讨论",children:[]},{level:2,title:"🖼️ 位图编辑",slug:"🖼️-位图编辑",children:[{level:3,title:"GIMP",slug:"gimp",children:[]},{level:3,title:"Aseprite",slug:"aseprite",children:[]},{level:3,title:"RawTherapee",slug:"rawtherapee",children:[]},{level:3,title:"KolourPaint",slug:"kolourpaint",children:[]}]},{level:2,title:"🖼️ 矢量图编辑",slug:"🖼️-矢量图编辑",children:[{level:3,title:"Inkscape",slug:"inkscape",children:[]}]},{level:2,title:"🎨 绘画",slug:"🎨-绘画",children:[{level:3,title:"Krita",slug:"krita",children:[]}]},{level:2,title:"🖼️ GIF 制作",slug:"🖼️-gif-制作",children:[{level:3,title:"Gifcurry",slug:"gifcurry",children:[]}]}],filePathRelative:"exclusive/image.md",git:{updatedTime:1629339175e3,contributors:[{name:"icekylin",email:"wminid@yeah.net",commits:3},{name:"YidaozhanYa",email:"73830635+YidaozhanYa@users.noreply.github.com",commits:1}]}}},8076:(e,a,l)=>{"use strict";l.r(a),l.d(a,{default:()=>Ca});var r=l(6252);const n=l.p+"assets/img/gimp.30e3f796.png",s=l.p+"assets/img/aseprite.343d2d20.png",m=l.p+"assets/img/rawtherapee.512e4eb4.png",t=l.p+"assets/img/kolourpaint.2ae9a2fe.png",i=l.p+"assets/img/inkscape.b28693f3.png",u=l.p+"assets/img/Art_Bot.bbe28841.svg",W=l.p+"assets/img/krita.4c9e1c61.png",c=(0,r.Wm)("h1",{id:"图像制作",tabindex:"-1"},[(0,r.Wm)("a",{class:"header-anchor",href:"#图像制作","aria-hidden":"true"},"#"),(0,r.Uk)(" 图像制作")],-1),o=(0,r.Wm)("blockquote",null,[(0,r.Wm)("h3",{id:"🌺-乱花渐欲迷人眼-浅草才能没马蹄",tabindex:"-1"},[(0,r.Wm)("a",{class:"header-anchor",href:"#🌺-乱花渐欲迷人眼-浅草才能没马蹄","aria-hidden":"true"},"#"),(0,r.Uk)(" 🌺 乱花渐欲迷人眼，浅草才能没马蹄")]),(0,r.Wm)("p",null,"本小节讨论如何在 archlinux 上编辑、管理位图以及矢量图，以及绘画。")],-1),p=(0,r.Wm)("h3",{id:"🔖-这一节将会讨论",tabindex:"-1"},[(0,r.Wm)("a",{class:"header-anchor",href:"#🔖-这一节将会讨论","aria-hidden":"true"},"#"),(0,r.Uk)(" 🔖 这一节将会讨论：")],-1),h={class:"custom-container details"},d=(0,r.Wm)("summary",null,"目录",-1),g={class:"table-of-contents"},k=(0,r.Uk)("# 🌺 乱花渐欲迷人眼，浅草才能没马蹄"),b=(0,r.Uk)("# 🔖 这一节将会讨论："),f=(0,r.Uk)("# 🖼️ 位图编辑"),U=(0,r.Uk)("# GIMP"),w=(0,r.Uk)("# Aseprite"),x=(0,r.Uk)("# RawTherapee"),_=(0,r.Uk)("# KolourPaint"),v=(0,r.Uk)("# 🖼️ 矢量图编辑"),y=(0,r.Uk)("# Inkscape"),G=(0,r.Uk)("# 🎨 绘画"),S=(0,r.Uk)("# Krita"),A=(0,r.Uk)("# 🖼️ GIF 制作"),I=(0,r.Uk)("# Gifcurry"),P={class:"custom-container tip"},K=(0,r.Wm)("p",{class:"custom-container-title"},"ℹ️ 提示",-1),R=(0,r.Uk)("指南中带有 "),L=(0,r.Wm)("sup",null,"aur",-1),C=(0,r.Uk)(" 角标的软件代表是在 "),M={href:"https://aur.archlinux.org/",target:"_blank",rel:"noopener noreferrer"},T=(0,r.Uk)("AUR"),Y=(0,r.Uk)("（Arch User Repository）中用户自行打包的软件。不在 arch 官方支持范围内，可能会出现各种问题如更新不及时、无法安装、使用出错等。"),z=(0,r.Uk)("指南中带有 "),E=(0,r.Wm)("sup",null,"cn",-1),F=(0,r.Uk)(" 角标的软件代表是在 "),q={href:"https://www.archlinuxcn.org/archlinux-cn-repo-and-mirror/",target:"_blank",rel:"noopener noreferrer"},B=(0,r.Uk)("archlinuxcn"),D=(0,r.Uk)("（Arch Linux 中文社区仓库）中用户自行打包的软件。不在 arch 官方支持范围内，可能会出现各种问题如更新不及时、无法安装、使用出错等。"),H=(0,r.Uk)("指南中带有 "),O=(0,r.Wm)("sup",null,"EULA",-1),j=(0,r.Uk)(" 角标的软件代表是 "),N={href:"https://www.gnu.org/proprietary/proprietary.html",target:"_blank",rel:"noopener noreferrer"},V=(0,r.Uk)("专有软件"),X=(0,r.Uk)("。请自行斟酌是否使用。"),J=(0,r.Wm)("h2",{id:"🖼️-位图编辑",tabindex:"-1"},[(0,r.Wm)("a",{class:"header-anchor",href:"#🖼️-位图编辑","aria-hidden":"true"},"#"),(0,r.Uk)(" 🖼️ 位图编辑")],-1),Q=(0,r.Wm)("h3",{id:"gimp",tabindex:"-1"},[(0,r.Wm)("a",{class:"header-anchor",href:"#gimp","aria-hidden":"true"},"#"),(0,r.Uk)(" GIMP")],-1),Z={href:"https://www.gimp.org/",target:"_blank",rel:"noopener noreferrer"},$=(0,r.Uk)("GIMP"),ee=(0,r.Uk)(" 是一个自由开源的位图图像编辑器。其对标 "),ae={href:"https://www.adobe.com/cn/",target:"_blank",rel:"noopener noreferrer"},le=(0,r.Uk)("Adobe"),re=(0,r.Uk)(" 的 "),ne={href:"https://www.adobe.com/cn/products/photoshop.html",target:"_blank",rel:"noopener noreferrer"},se=(0,r.Uk)("Photoshop"),me=(0,r.Wm)("sup",null,"EULA",-1),te=(0,r.Uk)("。"),ie=(0,r.Uk)("安装 "),ue={href:"https://archlinux.org/packages/extra/x86_64/gimp/",target:"_blank",rel:"noopener noreferrer"},We=(0,r.Uk)("GIMP"),ce=(0,r.Wm)("sup",null,"extra / cn / aur",-1),oe=(0,r.Uk)("："),pe=(0,r.Wm)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,r.Wm)("pre",{class:"language-bash"},[(0,r.Wm)("code",null,[(0,r.Wm)("span",{class:"token function"},"sudo"),(0,r.Uk)(" pacman -S gimp\n")])]),(0,r.Wm)("div",{class:"line-numbers"},[(0,r.Wm)("span",{class:"line-number"},"1"),(0,r.Wm)("br")])],-1),he=(0,r.Wm)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,r.Wm)("pre",{class:"language-bash"},[(0,r.Wm)("code",null,[(0,r.Wm)("span",{class:"token function"},"sudo"),(0,r.Uk)(" pacman -S gimp-git\n")])]),(0,r.Wm)("div",{class:"line-numbers"},[(0,r.Wm)("span",{class:"line-number"},"1"),(0,r.Wm)("br")])],-1),de=(0,r.Wm)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,r.Wm)("pre",{class:"language-bash"},[(0,r.Wm)("code",null,"yay -S aur/gimp-git\n")]),(0,r.Wm)("div",{class:"line-numbers"},[(0,r.Wm)("span",{class:"line-number"},"1"),(0,r.Wm)("br")])],-1),ge=(0,r.Wm)("p",null,[(0,r.Wm)("img",{src:n,alt:"gimp"})],-1),ke=(0,r.Wm)("h3",{id:"aseprite",tabindex:"-1"},[(0,r.Wm)("a",{class:"header-anchor",href:"#aseprite","aria-hidden":"true"},"#"),(0,r.Uk)(" Aseprite")],-1),be={href:"https://www.aseprite.org/",target:"_blank",rel:"noopener noreferrer"},fe=(0,r.Uk)("Aseprite"),Ue=(0,r.Uk)(" 是一款像素艺术绘制工具。"),we=(0,r.Uk)("安装 "),xe={href:"https://archlinux.org/packages/community/x86_64/rawtherapee/",target:"_blank",rel:"noopener noreferrer"},_e=(0,r.Uk)("Aseprite"),ve=(0,r.Wm)("sup",null,"EULA / aur",-1),ye=(0,r.Uk)("："),Ge=(0,r.Wm)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,r.Wm)("pre",{class:"language-bash"},[(0,r.Wm)("code",null,"yay -S aseprite\n")]),(0,r.Wm)("div",{class:"line-numbers"},[(0,r.Wm)("span",{class:"line-number"},"1"),(0,r.Wm)("br")])],-1),Se=(0,r.Wm)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,r.Wm)("pre",{class:"language-bash"},[(0,r.Wm)("code",null,"yay -S aseprite-bin\n")]),(0,r.Wm)("div",{class:"line-numbers"},[(0,r.Wm)("span",{class:"line-number"},"1"),(0,r.Wm)("br")])],-1),Ae=(0,r.Wm)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,r.Wm)("pre",{class:"language-bash"},[(0,r.Wm)("code",null,"yay -S aseprite-git\n")]),(0,r.Wm)("div",{class:"line-numbers"},[(0,r.Wm)("span",{class:"line-number"},"1"),(0,r.Wm)("br")])],-1),Ie=(0,r.Wm)("p",null,[(0,r.Wm)("img",{src:s,alt:"aseprite"})],-1),Pe=(0,r.Wm)("h3",{id:"rawtherapee",tabindex:"-1"},[(0,r.Wm)("a",{class:"header-anchor",href:"#rawtherapee","aria-hidden":"true"},"#"),(0,r.Uk)(" RawTherapee")],-1),Ke={href:"https://rawtherapee.com/",target:"_blank",rel:"noopener noreferrer"},Re=(0,r.Uk)("RawTherapee"),Le=(0,r.Uk)(" 是一个自由开源的跨平台 RAW 格式图像处理程序。"),Ce=(0,r.Uk)("安装 "),Me={href:"https://archlinux.org/packages/community/x86_64/rawtherapee/",target:"_blank",rel:"noopener noreferrer"},Te=(0,r.Uk)("RawTherapee"),Ye=(0,r.Wm)("sup",null,"community / aur",-1),ze=(0,r.Uk)("："),Ee=(0,r.Wm)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,r.Wm)("pre",{class:"language-bash"},[(0,r.Wm)("code",null,[(0,r.Wm)("span",{class:"token function"},"sudo"),(0,r.Uk)(" pacman -S rawtherapee\n")])]),(0,r.Wm)("div",{class:"line-numbers"},[(0,r.Wm)("span",{class:"line-number"},"1"),(0,r.Wm)("br")])],-1),Fe=(0,r.Wm)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,r.Wm)("pre",{class:"language-bash"},[(0,r.Wm)("code",null,"yay -S rawtherapee-git\n")]),(0,r.Wm)("div",{class:"line-numbers"},[(0,r.Wm)("span",{class:"line-number"},"1"),(0,r.Wm)("br")])],-1),qe=(0,r.Wm)("p",null,[(0,r.Wm)("img",{src:m,alt:"rawtherapee"})],-1),Be=(0,r.Wm)("h3",{id:"kolourpaint",tabindex:"-1"},[(0,r.Wm)("a",{class:"header-anchor",href:"#kolourpaint","aria-hidden":"true"},"#"),(0,r.Uk)(" KolourPaint")],-1),De=(0,r.Wm)("p",null,"KolourPaint 是 KDE 开发的一个简单易用的自由开源的绘图程序（类似 Windows 自带的画图），可以创建点阵图像。可用来对图片进行润色和简单编辑。",-1),He=(0,r.Uk)("安装 "),Oe={href:"https://archlinux.org/packages/extra/x86_64/kolourpaint/",target:"_blank",rel:"noopener noreferrer"},je=(0,r.Uk)("KolourPaint"),Ne=(0,r.Wm)("sup",null,"extra / aur",-1),Ve=(0,r.Uk)("："),Xe=(0,r.Wm)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,r.Wm)("pre",{class:"language-bash"},[(0,r.Wm)("code",null,[(0,r.Wm)("span",{class:"token function"},"sudo"),(0,r.Uk)(" pacman -S kolourpaint\n")])]),(0,r.Wm)("div",{class:"line-numbers"},[(0,r.Wm)("span",{class:"line-number"},"1"),(0,r.Wm)("br")])],-1),Je=(0,r.Wm)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,r.Wm)("pre",{class:"language-bash"},[(0,r.Wm)("code",null,"yay -S kolourpaint-git\n")]),(0,r.Wm)("div",{class:"line-numbers"},[(0,r.Wm)("span",{class:"line-number"},"1"),(0,r.Wm)("br")])],-1),Qe=(0,r.Wm)("p",null,[(0,r.Wm)("img",{src:t,alt:"kolourpaint"})],-1),Ze=(0,r.Wm)("h2",{id:"🖼️-矢量图编辑",tabindex:"-1"},[(0,r.Wm)("a",{class:"header-anchor",href:"#🖼️-矢量图编辑","aria-hidden":"true"},"#"),(0,r.Uk)(" 🖼️ 矢量图编辑")],-1),$e=(0,r.Wm)("h3",{id:"inkscape",tabindex:"-1"},[(0,r.Wm)("a",{class:"header-anchor",href:"#inkscape","aria-hidden":"true"},"#"),(0,r.Uk)(" Inkscape")],-1),ea=(0,r.Wm)("p",null,"Inkscape 是自由开源的矢量图形编辑器。该软件的开发目标是成为强大的绘图软件，且能完全遵循与支持 XML、SVG 及 CSS 等开放性的标准格式。",-1),aa=(0,r.Uk)("安装 "),la={href:"https://archlinux.org/packages/extra/x86_64/inkscape/",target:"_blank",rel:"noopener noreferrer"},ra=(0,r.Uk)("Inkscape"),na=(0,r.Wm)("sup",null,"extra / aur",-1),sa=(0,r.Uk)("："),ma=(0,r.Wm)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,r.Wm)("pre",{class:"language-bash"},[(0,r.Wm)("code",null,[(0,r.Wm)("span",{class:"token function"},"sudo"),(0,r.Uk)(" pacman -S inkscape\n")])]),(0,r.Wm)("div",{class:"line-numbers"},[(0,r.Wm)("span",{class:"line-number"},"1"),(0,r.Wm)("br")])],-1),ta=(0,r.Wm)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,r.Wm)("pre",{class:"language-bash"},[(0,r.Wm)("code",null,"yay -S inkscape-git\n")]),(0,r.Wm)("div",{class:"line-numbers"},[(0,r.Wm)("span",{class:"line-number"},"1"),(0,r.Wm)("br")])],-1),ia=(0,r.Wm)("p",null,[(0,r.Wm)("img",{src:i,alt:"inkscape"})],-1),ua=(0,r.Wm)("blockquote",null,[(0,r.Wm)("h4",{id:"📑-相关资料-什么是矢量图形",tabindex:"-1"},[(0,r.Wm)("a",{class:"header-anchor",href:"#📑-相关资料-什么是矢量图形","aria-hidden":"true"},"#"),(0,r.Uk)(" 📑 相关资料：什么是矢量图形？")]),(0,r.Wm)("p",null,"矢量图形是计算机图形学中用点、直线或者多边形等基于数学方程的几何图元表示的图像。"),(0,r.Wm)("p",null,"矢量图形与使用像素表示图像的位图不同。任意放大矢量图形，不会丢失细节或影响清晰度。"),(0,r.Wm)("p",null,"下面这个图片便是矢量图，可以尝试将其放大："),(0,r.Wm)("p",null,[(0,r.Wm)("img",{src:u,alt:"Art_Bot"})])],-1),Wa=(0,r.Wm)("h2",{id:"🎨-绘画",tabindex:"-1"},[(0,r.Wm)("a",{class:"header-anchor",href:"#🎨-绘画","aria-hidden":"true"},"#"),(0,r.Uk)(" 🎨 绘画")],-1),ca=(0,r.Wm)("h3",{id:"krita",tabindex:"-1"},[(0,r.Wm)("a",{class:"header-anchor",href:"#krita","aria-hidden":"true"},"#"),(0,r.Uk)(" Krita")],-1),oa={href:"https://krita.org/zh/",target:"_blank",rel:"noopener noreferrer"},pa=(0,r.Uk)("Krita"),ha=(0,r.Uk)(" 是一个自由开源的位图图像编辑器。它针对数字绘画和动画创作特化，提供包括低干扰用户界面、OpenGL 加速画布、色彩管理、功能强大的笔刷引擎、非破坏性图层和蒙版、图层分组、矢量图形支持和可切换界面预设等在内的一系列特色功能。"),da=(0,r.Uk)("安装 "),ga={href:"https://archlinux.org/packages/extra/x86_64/krita/",target:"_blank",rel:"noopener noreferrer"},ka=(0,r.Uk)("Krita"),ba=(0,r.Wm)("sup",null,"extra / aur",-1),fa=(0,r.Uk)("："),Ua=(0,r.Wm)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,r.Wm)("pre",{class:"language-bash"},[(0,r.Wm)("code",null,[(0,r.Wm)("span",{class:"token function"},"sudo"),(0,r.Uk)(" pacman -S krita\n")])]),(0,r.Wm)("div",{class:"line-numbers"},[(0,r.Wm)("span",{class:"line-number"},"1"),(0,r.Wm)("br")])],-1),wa=(0,r.Wm)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,r.Wm)("pre",{class:"language-bash"},[(0,r.Wm)("code",null,"yay -S krita-git\n")]),(0,r.Wm)("div",{class:"line-numbers"},[(0,r.Wm)("span",{class:"line-number"},"1"),(0,r.Wm)("br")])],-1),xa=(0,r.Wm)("p",null,[(0,r.Wm)("img",{src:W,alt:"krita"})],-1),_a=(0,r.Wm)("h2",{id:"🖼️-gif-制作",tabindex:"-1"},[(0,r.Wm)("a",{class:"header-anchor",href:"#🖼️-gif-制作","aria-hidden":"true"},"#"),(0,r.Uk)(" 🖼️ GIF 制作")],-1),va=(0,r.Wm)("h3",{id:"gifcurry",tabindex:"-1"},[(0,r.Wm)("a",{class:"header-anchor",href:"#gifcurry","aria-hidden":"true"},"#"),(0,r.Uk)(" Gifcurry")],-1),ya={href:"https://lettier.github.io/gifcurry/",target:"_blank",rel:"noopener noreferrer"},Ga=(0,r.Uk)("Gifcurry"),Sa=(0,r.Uk)(" 是面向 GIF 制作者的开源、Haskell 构建的视频编辑器。"),Aa=(0,r.Uk)("安装 "),Ia={href:"https://aur.archlinux.org/packages/gifcurry/",target:"_blank",rel:"noopener noreferrer"},Pa=(0,r.Uk)("Gifcurry"),Ka=(0,r.Wm)("sup",null,"aur",-1),Ra=(0,r.Uk)("："),La=(0,r.Wm)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,r.Wm)("pre",{class:"language-bash"},[(0,r.Wm)("code",null,"yay -S gifcurry\n")]),(0,r.Wm)("div",{class:"line-numbers"},[(0,r.Wm)("span",{class:"line-number"},"1"),(0,r.Wm)("br")])],-1),Ca={render:function(e,a){const l=(0,r.up)("RouterLink"),n=(0,r.up)("OutboundLink"),s=(0,r.up)("CodeGroupItem"),m=(0,r.up)("CodeGroup");return(0,r.wg)(),(0,r.j4)(r.HY,null,[c,o,(0,r.Wm)("blockquote",null,[p,(0,r.Wm)("details",h,[d,(0,r.Wm)("nav",g,[(0,r.Wm)("ul",null,[(0,r.Wm)("li",null,[(0,r.Wm)(l,{to:"#🌺-乱花渐欲迷人眼-浅草才能没马蹄"},{default:(0,r.w5)((()=>[k])),_:1})]),(0,r.Wm)("li",null,[(0,r.Wm)(l,{to:"#🔖-这一节将会讨论"},{default:(0,r.w5)((()=>[b])),_:1})]),(0,r.Wm)("li",null,[(0,r.Wm)(l,{to:"#🖼️-位图编辑"},{default:(0,r.w5)((()=>[f])),_:1}),(0,r.Wm)("ul",null,[(0,r.Wm)("li",null,[(0,r.Wm)(l,{to:"#gimp"},{default:(0,r.w5)((()=>[U])),_:1})]),(0,r.Wm)("li",null,[(0,r.Wm)(l,{to:"#aseprite"},{default:(0,r.w5)((()=>[w])),_:1})]),(0,r.Wm)("li",null,[(0,r.Wm)(l,{to:"#rawtherapee"},{default:(0,r.w5)((()=>[x])),_:1})]),(0,r.Wm)("li",null,[(0,r.Wm)(l,{to:"#kolourpaint"},{default:(0,r.w5)((()=>[_])),_:1})])])]),(0,r.Wm)("li",null,[(0,r.Wm)(l,{to:"#🖼️-矢量图编辑"},{default:(0,r.w5)((()=>[v])),_:1}),(0,r.Wm)("ul",null,[(0,r.Wm)("li",null,[(0,r.Wm)(l,{to:"#inkscape"},{default:(0,r.w5)((()=>[y])),_:1})])])]),(0,r.Wm)("li",null,[(0,r.Wm)(l,{to:"#🎨-绘画"},{default:(0,r.w5)((()=>[G])),_:1}),(0,r.Wm)("ul",null,[(0,r.Wm)("li",null,[(0,r.Wm)(l,{to:"#krita"},{default:(0,r.w5)((()=>[S])),_:1})])])]),(0,r.Wm)("li",null,[(0,r.Wm)(l,{to:"#🖼️-gif-制作"},{default:(0,r.w5)((()=>[A])),_:1}),(0,r.Wm)("ul",null,[(0,r.Wm)("li",null,[(0,r.Wm)(l,{to:"#gifcurry"},{default:(0,r.w5)((()=>[I])),_:1})])])])])])])]),(0,r.Wm)("div",P,[K,(0,r.Wm)("p",null,[R,L,C,(0,r.Wm)("a",M,[T,(0,r.Wm)(n)]),Y]),(0,r.Wm)("p",null,[z,E,F,(0,r.Wm)("a",q,[B,(0,r.Wm)(n)]),D]),(0,r.Wm)("p",null,[H,O,j,(0,r.Wm)("a",N,[V,(0,r.Wm)(n)]),X])]),J,Q,(0,r.Wm)("p",null,[(0,r.Wm)("a",Z,[$,(0,r.Wm)(n)]),ee,(0,r.Wm)("a",ae,[le,(0,r.Wm)(n)]),re,(0,r.Wm)("a",ne,[se,(0,r.Wm)(n)]),me,te]),(0,r.Wm)("p",null,[ie,(0,r.Wm)("a",ue,[We,(0,r.Wm)(n)]),ce,oe]),(0,r.Wm)(m,null,{default:(0,r.w5)((()=>[(0,r.Wm)(s,{title:"extra"},{default:(0,r.w5)((()=>[pe])),_:1}),(0,r.Wm)(s,{title:"cn (git)"},{default:(0,r.w5)((()=>[he])),_:1}),(0,r.Wm)(s,{title:"aur (git)"},{default:(0,r.w5)((()=>[de])),_:1})])),_:1}),ge,ke,(0,r.Wm)("p",null,[(0,r.Wm)("a",be,[fe,(0,r.Wm)(n)]),Ue]),(0,r.Wm)("p",null,[we,(0,r.Wm)("a",xe,[_e,(0,r.Wm)(n)]),ve,ye]),(0,r.Wm)(m,null,{default:(0,r.w5)((()=>[(0,r.Wm)(s,{title:"aur"},{default:(0,r.w5)((()=>[Ge])),_:1}),(0,r.Wm)(s,{title:"aur (bin)"},{default:(0,r.w5)((()=>[Se])),_:1}),(0,r.Wm)(s,{title:"aur (git)"},{default:(0,r.w5)((()=>[Ae])),_:1})])),_:1}),Ie,Pe,(0,r.Wm)("p",null,[(0,r.Wm)("a",Ke,[Re,(0,r.Wm)(n)]),Le]),(0,r.Wm)("p",null,[Ce,(0,r.Wm)("a",Me,[Te,(0,r.Wm)(n)]),Ye,ze]),(0,r.Wm)(m,null,{default:(0,r.w5)((()=>[(0,r.Wm)(s,{title:"community"},{default:(0,r.w5)((()=>[Ee])),_:1}),(0,r.Wm)(s,{title:"aur (git)"},{default:(0,r.w5)((()=>[Fe])),_:1})])),_:1}),qe,Be,De,(0,r.Wm)("p",null,[He,(0,r.Wm)("a",Oe,[je,(0,r.Wm)(n)]),Ne,Ve]),(0,r.Wm)(m,null,{default:(0,r.w5)((()=>[(0,r.Wm)(s,{title:"extra"},{default:(0,r.w5)((()=>[Xe])),_:1}),(0,r.Wm)(s,{title:"aur (git)"},{default:(0,r.w5)((()=>[Je])),_:1})])),_:1}),Qe,Ze,$e,ea,(0,r.Wm)("p",null,[aa,(0,r.Wm)("a",la,[ra,(0,r.Wm)(n)]),na,sa]),(0,r.Wm)(m,null,{default:(0,r.w5)((()=>[(0,r.Wm)(s,{title:"extra"},{default:(0,r.w5)((()=>[ma])),_:1}),(0,r.Wm)(s,{title:"aur (git)"},{default:(0,r.w5)((()=>[ta])),_:1})])),_:1}),ia,ua,Wa,ca,(0,r.Wm)("p",null,[(0,r.Wm)("a",oa,[pa,(0,r.Wm)(n)]),ha]),(0,r.Wm)("p",null,[da,(0,r.Wm)("a",ga,[ka,(0,r.Wm)(n)]),ba,fa]),(0,r.Wm)(m,null,{default:(0,r.w5)((()=>[(0,r.Wm)(s,{title:"extra"},{default:(0,r.w5)((()=>[Ua])),_:1}),(0,r.Wm)(s,{title:"aur (git)"},{default:(0,r.w5)((()=>[wa])),_:1})])),_:1}),xa,_a,va,(0,r.Wm)("p",null,[(0,r.Wm)("a",ya,[Ga,(0,r.Wm)(n)]),Sa]),(0,r.Wm)("p",null,[Aa,(0,r.Wm)("a",Ia,[Pa,(0,r.Wm)(n)]),Ka,Ra]),La],64)}}}}]);