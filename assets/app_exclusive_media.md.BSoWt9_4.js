import{_ as a,c as e,o as s,a4 as i}from"./chunks/framework.DhooLXd5.js";const t="/assets/blender.Bcfrv70X.png",r="/assets/sweethome3d.XN_FuIb-.png",n="/assets/synfigstudio.cOeNTLee.png",l="/assets/linuxstopmotion.BVXIg5Tf.png",p="/assets/figma-linux.0Yv2xe_S.png",o="/assets/fontforge.rYkQeUCq.png",y=JSON.parse('{"title":"其它内容","description":"","frontmatter":{"sidebarDepth":2},"headers":[],"relativePath":"app/exclusive/media.md","filePath":"app/exclusive/media.md","lastUpdated":1687091283000}'),h={name:"app/exclusive/media.md"},d=i('<h1 id="其它内容" tabindex="-1">其它内容 <a class="header-anchor" href="#其它内容" aria-label="Permalink to &quot;其它内容&quot;">​</a></h1><blockquote><h3 id="🌖-深林人不知-明月来相照" tabindex="-1">🌖 深林人不知，明月来相照 <a class="header-anchor" href="#🌖-深林人不知-明月来相照" aria-label="Permalink to &quot;🌖 深林人不知，明月来相照&quot;">​</a></h3><p>本小节讨论其它形式的多媒体创作。包括建模、UI &amp; UX 设计、字体创作、动画创作，甚至家装辅助设计等。</p></blockquote><blockquote><h3 id="🔖-这一节将会讨论" tabindex="-1">🔖 这一节将会讨论： <a class="header-anchor" href="#🔖-这一节将会讨论" aria-label="Permalink to &quot;🔖 这一节将会讨论：&quot;">​</a></h3><details class="details custom-block"><summary>目录</summary><nav class="table-of-contents"><ul><li><a href="#🗿-建模渲染与动画制作">🗿 建模渲染与动画制作</a><ul><li><a href="#斑斓-blender">斑斓（Blender）</a></li><li><a href="#sweet-home-3d">Sweet Home 3D</a></li><li><a href="#synfig-studio">Synfig Studio</a></li><li><a href="#linux-stopmotion">Linux Stopmotion</a></li></ul></li><li><a href="#✏️-ui-ux-设计">✏️ UI &amp; UX 设计</a><ul><li><a href="#figma-electron-app">Figma electron app</a></li></ul></li><li><a href="#✍️-字体创作">✍️ 字体创作</a><ul><li><a href="#fontforge">FontForge</a></li></ul></li></ul></nav></details></blockquote><div class="tip custom-block"><p class="custom-block-title">ℹ️ 提示</p><p>指南中带有 <sup>aur</sup> 角标的软件代表是在 <a href="https://aur.archlinux.org/" target="_blank" rel="noreferrer">AUR</a>（Arch User Repository）中用户自行打包的软件。不在 arch 官方支持范围内，可能会出现各种问题如更新不及时、无法安装、使用出错等。</p><p>指南中带有 <sup>cn</sup> 角标的软件代表是在 <a href="https://www.archlinuxcn.org/archlinux-cn-repo-and-mirror/" target="_blank" rel="noreferrer">archlinuxcn</a>（Arch Linux 中文社区仓库）中用户自行打包的软件。不在 arch 官方支持范围内，可能会出现各种问题如更新不及时、无法安装、使用出错等。</p><p>指南中带有 <sup>EULA</sup> 角标的软件代表是 <a href="https://www.gnu.org/proprietary/proprietary.html" target="_blank" rel="noreferrer">专有软件</a>。请自行斟酌是否使用。</p></div><h2 id="🗿-建模渲染与动画制作" tabindex="-1">🗿 建模渲染与动画制作 <a class="header-anchor" href="#🗿-建模渲染与动画制作" aria-label="Permalink to &quot;🗿 建模渲染与动画制作&quot;">​</a></h2><h3 id="斑斓-blender" tabindex="-1">斑斓（Blender） <a class="header-anchor" href="#斑斓-blender" aria-label="Permalink to &quot;斑斓（Blender）&quot;">​</a></h3><p><a href="https://www.blender.org/" target="_blank" rel="noreferrer">Blender</a> 是一款开源免费的三维图形图像软件，提供从建模、动画、材质、渲染、到音频处理、视频剪辑等一系列动画短片制作解决方案。</p><p>安装 <a href="https://archlinux.org/packages/extra/x86_64/blender/" target="_blank" rel="noreferrer">Blender</a><sup>extra / aur</sup>：</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-gMaZw" id="tab-YFliyUQ" checked="checked"><label for="tab-YFliyUQ">extra</label><input type="radio" name="group-gMaZw" id="tab-7fWzFub"><label for="tab-7fWzFub">aur (git)</label></div><div class="blocks"><div class="language-sh vp-adaptive-theme active line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pacman</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -S</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> blender</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yay</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -S</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> blender-git</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></div></div><p><img src="'+t+'" alt="blender"></p><h3 id="sweet-home-3d" tabindex="-1">Sweet Home 3D <a class="header-anchor" href="#sweet-home-3d" aria-label="Permalink to &quot;Sweet Home 3D&quot;">​</a></h3><p><a href="http://www.sweethome3d.com/zh-cn/" target="_blank" rel="noreferrer">Sweet Home 3D</a> 是一款免费的家装辅助设计软件。它能帮您通过二维的家居平面图来设计和布置您的家具，还可以用三维的视角浏览整个装修布局的全貌。</p><p>安装 <a href="https://archlinux.org/packages/extra/x86_64/sweethome3d/" target="_blank" rel="noreferrer">Sweet Home 3D</a>：</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pacman</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -S</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sweethome3d</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="'+r+'" alt="sweethome3d"></p><h3 id="synfig-studio" tabindex="-1">Synfig Studio <a class="header-anchor" href="#synfig-studio" aria-label="Permalink to &quot;Synfig Studio&quot;">​</a></h3><p><a href="https://www.synfig.org/" target="_blank" rel="noreferrer">Synfig Studio</a> 是一款免费开源的 2D 动画软件，用于使用矢量和位图图稿创建电影质量的动画。</p><p>安装 <a href="https://archlinux.org/packages/extra/x86_64/synfigstudio/" target="_blank" rel="noreferrer">Synfig Studio</a><sup>extra / aur</sup>：</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-WO1rO" id="tab-bFE4ggQ" checked="checked"><label for="tab-bFE4ggQ">extra</label><input type="radio" name="group-WO1rO" id="tab-AZZEUIz"><label for="tab-AZZEUIz">aur (git)</label></div><div class="blocks"><div class="language-sh vp-adaptive-theme active line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pacman</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -S</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> synfigstudio</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yay</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -S</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> synfigstudio-git</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></div></div><p><img src="'+n+'" alt="synfigstudio"></p><h3 id="linux-stopmotion" tabindex="-1">Linux Stopmotion <a class="header-anchor" href="#linux-stopmotion" aria-label="Permalink to &quot;Linux Stopmotion&quot;">​</a></h3><p><a href="http://linuxstopmotion.org/" target="_blank" rel="noreferrer">Linux Stopmotion</a> 是一个开源免费的应用程序，用于创建定格动画。</p><p>安装 <a href="https://aur.archlinux.org/packages/linuxstopmotion-git/" target="_blank" rel="noreferrer">Linux Stopmotion</a><sup>aur</sup>：</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yay</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -S</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> linuxstopmotion-git</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="'+l+'" alt="linuxstopmotion"></p><h2 id="✏️-ui-ux-设计" tabindex="-1">✏️ UI &amp; UX 设计 <a class="header-anchor" href="#✏️-ui-ux-设计" aria-label="Permalink to &quot;✏️ UI &amp; UX 设计&quot;">​</a></h2><p>可使用 <a href="https://www.figma.com/" target="_blank" rel="noreferrer">Figma 网页版</a>，或者使用一个非官方的 Linux Figma 桌面端软件 <a href="https://github.com/Figma-Linux/figma-linux" target="_blank" rel="noreferrer">Figma electron app</a>。</p><h3 id="figma-electron-app" tabindex="-1">Figma electron app <a class="header-anchor" href="#figma-electron-app" aria-label="Permalink to &quot;Figma electron app&quot;">​</a></h3><p>安装 <a href="https://aur.archlinux.org/packages/figma-linux/" target="_blank" rel="noreferrer">Figma electron app</a><sup>aur</sup>：</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yay</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -S</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> figma-linux</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="'+p+'" alt="figma-linux"></p><h2 id="✍️-字体创作" tabindex="-1">✍️ 字体创作 <a class="header-anchor" href="#✍️-字体创作" aria-label="Permalink to &quot;✍️ 字体创作&quot;">​</a></h2><h3 id="fontforge" tabindex="-1">FontForge <a class="header-anchor" href="#fontforge" aria-label="Permalink to &quot;FontForge&quot;">​</a></h3><p><a href="https://fontforge.org/en-US/" target="_blank" rel="noreferrer">FontForge</a> 是一款自由开源、全功能、支持所有通用字体格式的字体编辑器。</p><p>安装 <a href="https://archlinux.org/packages/extra/x86_64/fontforge/" target="_blank" rel="noreferrer">FontForge</a><sup>extra / aur</sup>：</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-OWLST" id="tab-Rj371gb" checked="checked"><label for="tab-Rj371gb">extra</label><input type="radio" name="group-OWLST" id="tab-NiH09Lt"><label for="tab-NiH09Lt">aur (git)</label></div><div class="blocks"><div class="language-sh vp-adaptive-theme active line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pacman</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -S</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> fontforge</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yay</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -S</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> fontforge-git</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></div></div><p><img src="'+o+'" alt="fontforge"></p>',37),c=[d];function u(g,k,b,m,f,v){return s(),e("div",null,c)}const x=a(h,[["render",u]]);export{y as __pageData,x as default};
