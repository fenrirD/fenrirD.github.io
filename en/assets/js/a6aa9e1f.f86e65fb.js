"use strict";(self.webpackChunkfenrir_d_github_io=self.webpackChunkfenrir_d_github_io||[]).push([[7643],{5124:(e,t,i)=>{i.r(t),i.d(t,{default:()=>f});i(6540);var a=i(8215),n=i(4586),r=i(1213),o=i(7559),s=i(6535),l=i(7713),d=i(1463),g=i(3892),c=i(5260),u=i(6676),p=i(4848);function m(e){const t=(0,u.k)(e);return(0,p.jsx)(c.A,{children:(0,p.jsx)("script",{type:"application/ld+json",children:JSON.stringify(t)})})}function h(e){const{metadata:t}=e,{siteConfig:{title:i}}=(0,n.A)(),{blogDescription:a,blogTitle:o,permalink:s}=t,l="/"===s?i:o;return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(r.be,{title:l,description:a}),(0,p.jsx)(d.A,{tag:"blog_posts_list"})]})}function b(e){const{metadata:t,items:i,sidebar:a}=e;return(0,p.jsxs)(s.A,{sidebar:a,children:[(0,p.jsx)(g.A,{items:i}),(0,p.jsx)(l.A,{metadata:t})]})}function f(e){return(0,p.jsxs)(r.e3,{className:(0,a.A)(o.G.wrapper.blogPages,o.G.page.blogListPage),children:[(0,p.jsx)(h,{...e}),(0,p.jsx)(m,{...e}),(0,p.jsx)(b,{...e})]})}},7713:(e,t,i)=>{i.d(t,{A:()=>o});i(6540);var a=i(1312),n=i(9022),r=i(4848);function o(e){const{metadata:t}=e,{previousPage:i,nextPage:o}=t;return(0,r.jsxs)("nav",{className:"pagination-nav","aria-label":(0,a.T)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"}),children:[i&&(0,r.jsx)(n.A,{permalink:i,title:(0,r.jsx)(a.A,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)",children:"Newer Entries"})}),o&&(0,r.jsx)(n.A,{permalink:o,title:(0,r.jsx)(a.A,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)",children:"Older Entries"}),isNext:!0})]})}},3892:(e,t,i)=>{i.d(t,{A:()=>o});i(6540);var a=i(7131),n=i(8149),r=i(4848);function o(e){let{items:t,component:i=n.A}=e;return(0,r.jsx)(r.Fragment,{children:t.map((e=>{let{content:t}=e;return(0,r.jsx)(a.i,{content:t,children:(0,r.jsx)(i,{children:(0,r.jsx)(t,{})})},t.metadata.permalink)}))})}},6676:(e,t,i)=>{i.d(t,{k:()=>g,J:()=>c});var a=i(6025),n=i(4586),r=i(6803);var o=i(7131);const s=e=>new Date(e).toISOString();function l(e){const t=e.map(u);return{author:1===t.length?t[0]:t}}function d(e,t,i){return e?{image:p({imageUrl:t(e,{absolute:!0}),caption:`title image for the blog post: ${i}`})}:{}}function g(e){const{siteConfig:t}=(0,n.A)(),{withBaseUrl:i}=(0,a.hH)(),{metadata:{blogDescription:r,blogTitle:o,permalink:g}}=e,c=`${t.url}${g}`;return{"@context":"https://schema.org","@type":"Blog","@id":c,mainEntityOfPage:c,headline:o,description:r,blogPost:e.items.map((e=>function(e,t,i){const{assets:a,frontMatter:n,metadata:r}=e,{date:o,title:g,description:c,lastUpdatedAt:u}=r,p=a.image??n.image,m=n.keywords??[],h=`${t.url}${r.permalink}`,b=u?s(u):void 0;return{"@type":"BlogPosting","@id":h,mainEntityOfPage:h,url:h,headline:g,name:g,description:c,datePublished:o,...b?{dateModified:b}:{},...l(r.authors),...d(p,i,g),...m?{keywords:m}:{}}}(e.content,t,i)))}}function c(){const e=function(){const e=(0,r.A)(),t=e?.data?.blogMetadata;if(!t)throw new Error("useBlogMetadata() can't be called on the current route because the blog metadata could not be found in route context");return t}(),{assets:t,metadata:i}=(0,o.e)(),{siteConfig:g}=(0,n.A)(),{withBaseUrl:c}=(0,a.hH)(),{date:u,title:p,description:m,frontMatter:h,lastUpdatedAt:b}=i,f=t.image??h.image,x=h.keywords??[],j=b?s(b):void 0,A=`${g.url}${i.permalink}`;return{"@context":"https://schema.org","@type":"BlogPosting","@id":A,mainEntityOfPage:A,url:A,headline:p,name:p,description:m,datePublished:u,...j?{dateModified:j}:{},...l(i.authors),...d(f,c,p),...x?{keywords:x}:{},isPartOf:{"@type":"Blog","@id":`${g.url}${e.blogBasePath}`,name:e.blogTitle}}}function u(e){return{"@type":"Person",...e.name?{name:e.name}:{},...e.title?{description:e.title}:{},...e.url?{url:e.url}:{},...e.email?{email:e.email}:{},...e.imageURL?{image:e.imageURL}:{}}}function p(e){let{imageUrl:t,caption:i}=e;return{"@type":"ImageObject","@id":t,url:t,contentUrl:t,caption:i}}}}]);