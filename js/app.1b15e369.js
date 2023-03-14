(function(){"use strict";var e={1137:function(e,t,n){var a=n(9242),o=n(3396);function s(e,t,n,s,i,l){const r=(0,o.up)("Navbar"),d=(0,o.up)("Notes"),c=(0,o.up)("AddBtn"),h=(0,o.up)("Modal");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(r,{onGetSearch:t[0]||(t[0]=e=>i.search=e),lang:i.lang,onChangeLang:l.changeLang},null,8,["lang","onChangeLang"]),(0,o.Wm)(d,{notes:l.filterNotes,onChangeNote:l.changeNote,onDelNote:l.delNote,search:i.search,lang:i.lang},null,8,["notes","onChangeNote","onDelNote","search","lang"]),(0,o.Wm)(c,{onOpenModal:l.openModal},null,8,["onOpenModal"]),(0,o.wy)((0,o.Wm)(h,{edit:i.edit,onCloseModal:l.closeModal,currentId:i.currentId,onAddNote:l.addNote,editNote:i.editNote,onEditedNote:l.editedNote,lang:i.lang},null,8,["edit","onCloseModal","currentId","onAddNote","editNote","onEditedNote","lang"]),[[a.F8,i.modalOpen]])],64)}n(7658);var i=n(7139),l=n.p+"img/search.2c9e71ed.svg",r=n.p+"img/close.1d4d165f.svg";const d={class:"header"},c={class:"header__notes"},h={class:"container"},g={class:"header__change"},u={key:0,class:"header__p"},_=["placeholder"],p={key:0,src:l,alt:""},w={key:1,src:r,alt:""};function m(e,t,n,s,l,r){return(0,o.wg)(),(0,o.iD)("header",d,[(0,o._)("div",c,["ru"==n.lang?((0,o.wg)(),(0,o.iD)("button",{key:0,class:"header__lang",onClick:t[0]||(t[0]=(...e)=>r.changeLang&&r.changeLang(...e))}," UZ ")):((0,o.wg)(),(0,o.iD)("button",{key:1,class:"header__lang",onClick:t[1]||(t[1]=(...e)=>r.changeLang&&r.changeLang(...e))},"RU")),(0,o._)("div",h,[(0,o._)("div",g,[(0,o.Wm)(a.uT,{name:"opp"},{default:(0,o.w5)((()=>[0==l.header?((0,o.wg)(),(0,o.iD)("p",u,(0,i.zw)(r.words.appbartitle[n.lang]),1)):(0,o.wy)(((0,o.wg)(),(0,o.iD)("input",{key:1,type:"text",class:"header__input","onUpdate:modelValue":t[2]||(t[2]=e=>l.search=e),placeholder:r.words.appbarseacrch[n.lang]},null,8,_)),[[a.nr,l.search]])])),_:1})])]),(0,o._)("button",{class:"header__search",onClick:t[3]||(t[3]=(...e)=>r.changeHeader&&r.changeHeader(...e))},[0==l.header?((0,o.wg)(),(0,o.iD)("img",p)):((0,o.wg)(),(0,o.iD)("img",w))])])])}var f={name:"NavbarTodo",props:{lang:String},inject:["words"],data(){return{search:"",header:!1}},watch:{search(e){this.$emit("getSearch",e)}},methods:{changeHeader(){this.header=!this.header},changeLang(){this.$emit("changeLang","ru"==this.lang?"uz":"ru")}}},b=n(89);const v=(0,b.Z)(f,[["render",m]]);var N=v,y=n.p+"img/flex.4ed3d4be.svg",k=n.p+"img/grid.dbae4039.svg";const C={class:"changer"},z={class:"container changer__wrap"},D={key:0,class:"all__notes"},O={key:1,class:"all__notes"},S={class:"ch__btn"},M=(0,o._)("img",{src:y,alt:""},null,-1),j={class:"btn__span"},L=(0,o._)("img",{src:k,alt:""},null,-1),x={class:"btn__span"},T={class:"container"};function I(e,t,n,a,s,l){const r=(0,o.up)("Note");return(0,o.wg)(),(0,o.iD)("div",C,[(0,o._)("div",z,[n.search?((0,o.wg)(),(0,o.iD)("h3",O,(0,i.zw)(l.words.appbarseacrch[n.lang]),1)):((0,o.wg)(),(0,o.iD)("h3",D,(0,i.zw)(n.notes.length>0?l.words.infobar[n.lang]:l.words.noinfobar[n.lang]),1)),(0,o._)("button",S,[s.changer?((0,o.wg)(),(0,o.iD)("div",{key:1,class:"ch__cont",onClick:t[1]||(t[1]=(...e)=>l.changerClass&&l.changerClass(...e))},[L,(0,o._)("span",x,(0,i.zw)(l.words.grid[n.lang]),1)])):((0,o.wg)(),(0,o.iD)("div",{key:0,class:"ch__cont",onClick:t[0]||(t[0]=(...e)=>l.changerClass&&l.changerClass(...e))},[M,(0,o._)("span",j,(0,i.zw)(l.words.list[n.lang]),1)]))])]),(0,o._)("div",T,[(0,o._)("div",{class:(0,i.C_)([s.changer?s.flex:s.grid])},[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(n.notes,((t,a)=>((0,o.wg)(),(0,o.j4)(r,{key:a,note:t,onChangeNote:n=>e.$emit("changeNote",t.id),onDelNote:n=>e.$emit("delNote",t.id),lang:n.lang},null,8,["note","onChangeNote","onDelNote","lang"])))),128))],2)])])}var $=n.p+"img/pen.092f5b23.svg",A=n.p+"img/trash.f04c87ff.svg";const Z={class:"note__item"},E={class:"note__top"},B={class:"note__title"},H={class:"note__date"},U={class:"note__desc"},W={class:"note__btns"},J=(0,o._)("img",{src:$,alt:""},null,-1),R={class:"note__btn-span"},q=(0,o._)("img",{src:A,alt:""},null,-1),V={class:"note__btn-span"};function F(e,t,n,a,s,l){return(0,o.wg)(),(0,o.iD)("div",Z,[(0,o._)("div",E,[(0,o._)("h3",B,(0,i.zw)(n.note.title),1),(0,o._)("p",H,(0,i.zw)(n.note.date),1)]),(0,o._)("p",U,(0,i.zw)(n.note.desc),1),(0,o._)("div",W,[(0,o._)("button",{class:"note__btn redact",onClick:t[0]||(t[0]=t=>e.$emit("changeNote",n.note.id))},[J,(0,o._)("span",R,(0,i.zw)(l.words.editbtn[n.lang]),1)]),(0,o._)("button",{class:"note__btn delete",onClick:t[1]||(t[1]=t=>e.$emit("delNote",n.note.id))},[q,(0,o._)("span",V,(0,i.zw)(l.words.deledit[n.lang]),1)])])])}var G={name:"NoteItemTodo",props:{note:{typeof:Object,default:{title:"asdasd",desc:"asdasd",id:"asd",date:"asdasd"}},lang:String},inject:["words"],data(){return{}}};const P=(0,b.Z)(G,[["render",F]]);var Q=P,Y={name:"NotesTodo",components:{Note:Q},props:{notes:{typeof:Array},search:String,lang:String},inject:["words"],data(){return{flex:"changer__flex",grid:"changer__grid",changer:!1}},methods:{changerClass(){this.changer=!this.changer}}};const K=(0,b.Z)(Y,[["render",I]]);var X=K;const ee=(0,o._)("img",{src:$,alt:""},null,-1),te=[ee];function ne(e,t,n,a,s,i){return(0,o.wg)(),(0,o.iD)("button",{class:"add__btn",onClick:t[0]||(t[0]=t=>e.$emit("openModal"))},te)}var ae={name:"AddBtnTodo"};const oe=(0,b.Z)(ae,[["render",ne]]);var se=oe;const ie={class:"modal__title"},le={class:"modal__inputs"},re={class:"modal__input-cont"},de=(0,o._)("span",{class:"modal__input-cont_span"},"Title",-1),ce={class:"modal__input-cont"},he=(0,o._)("span",{class:"modal__input-cont_span"},"Content",-1),ge={class:"modal__btns"};function ue(e,t,n,s,l,r){return(0,o.wg)(),(0,o.j4)(a.uT,{name:"show"},{default:(0,o.w5)((()=>[(0,o._)("div",{class:"modal",onClick:t[6]||(t[6]=(...e)=>r.closeModal&&r.closeModal(...e))},[(0,o._)("div",{class:"modal__content",onClick:t[5]||(t[5]=(0,a.iM)((()=>{}),["stop"]))},[(0,o._)("h3",ie,(0,i.zw)(n.edit?r.words.titlewindowedit[n.lang]:r.words.titlewindow[n.lang]),1),(0,o._)("div",le,[(0,o._)("div",re,[de,(0,o.wy)((0,o._)("input",{type:"text",class:"modal__input",placeholder:"Title","onUpdate:modelValue":t[0]||(t[0]=e=>l.title=e)},null,512),[[a.nr,l.title]])]),(0,o._)("div",ce,[he,(0,o.wy)((0,o._)("input",{type:"text",class:"modal__input",placeholder:"Content","onUpdate:modelValue":t[1]||(t[1]=e=>l.desc=e)},null,512),[[a.nr,l.desc]])])]),(0,o._)("div",ge,[(0,o._)("button",{class:"modal__btn delete",onClick:t[2]||(t[2]=(...e)=>r.closeModal&&r.closeModal(...e))},(0,i.zw)(r.words.closebtn[n.lang]),1),n.edit?((0,o.wg)(),(0,o.iD)("button",{key:1,class:"modal__btn redact",onClick:t[4]||(t[4]=(...e)=>r.editedNote&&r.editedNote(...e))},(0,i.zw)(r.words.editwindowbtn[n.lang]),1)):((0,o.wg)(),(0,o.iD)("button",{key:0,class:"modal__btn redact",onClick:t[3]||(t[3]=(...e)=>r.addNote&&r.addNote(...e))},(0,i.zw)(r.words.addbtn[n.lang]),1))])])])])),_:1})}var _e={name:"ModalTodo",props:{edit:Boolean,currentId:Number,editNote:Object,lang:String},inject:["words"],data(){return{title:"",desc:"",id:this.currentId}},methods:{closeModal(){this.$emit("closeModal",!1),this.title="",this.desc=""},addNote(){if(""!=this.title&&""!=this.desc){const e={id:this.id++,title:this.title,desc:this.desc,date:(new Date).toLocaleDateString()};this.$emit("addNote",e),this.title="",this.desc="",this.closeModal()}},editedNote(){if(""!=this.title&&""!=this.desc){const e={id:this.editNote.id,title:this.title,desc:this.desc,date:(new Date).toLocaleDateString()};this.$emit("editedNote",e),this.closeModal(),this.title="",this.desc=""}}}};const pe=(0,b.Z)(_e,[["render",ue]]);var we=pe;const me={appbartitle:{ru:"Заметки",uz:"Eslatmalar"},appbarseacrch:{ru:"Поиск...",uz:"Qidirish..."},infobar:{ru:"Все заметки",uz:"Barcha eslatmalar"},noinfobar:{ru:"Нет заметок",uz:"Еslatmalar yoq"},list:{ru:"Список",uz:"Roʻyxat"},grid:{ru:"Сетка",uz:"Setka"},titlewindow:{ru:"Добавить заметку",uz:"Eslatma qo’shish"},titlewindowedit:{ru:"Изменить заметку",uz:"Elsatmani tahrirlash"},editbtn:{ru:"РЕДАКТИРОВАТЬ",uz:"O`ZGARTIRISH"},deledit:{ru:"Удалить",uz:"o'chirish"},closebtn:{ru:"Отмена",uz:"Bekor qilish"},addbtn:{ru:"Добавить",uz:"Qo’shish"},editwindowbtn:{ru:"изменить",uz:"o'zgartirish"}};var fe=me,be={name:"AppTodo",components:{Navbar:N,Notes:X,AddBtn:se,Modal:we},data(){return{notes:[],modalOpen:!1,edit:!1,currentId:1,editNote:{},search:"",langwords:{},lang:"ru"}},created(){this.getNotes(),localStorage.lang=localStorage.lang||"ru",this.lang=localStorage.lang||"ru",this.langwords=fe,localStorage.words=JSON.stringify(this.langwords)},provide(){return{words:localStorage.words?JSON.parse(localStorage.words):fe}},methods:{openModal(){this.modalOpen=!0,this.edit=!1},closeModal(e){this.modalOpen=e,this.edit=e},addNote(e){this.notes.push(e)},getNotes(){const e=localStorage.notes;e&&(this.notes=JSON.parse(e))},changeNote(e){this.edit=this.modalOpen=!0;let t=this.notes.find((t=>t.id==e));this.editNote=t},editedNote(e){this.notes.forEach((t=>{t.id==e.id&&(t.title=e.title,t.desc=e.desc,t.date=e.date)}))},delNote(e){let t=this.notes.findIndex((t=>t.id==e));this.notes.splice(t,1)},changeLang(e){this.lang=localStorage.lang=e}},watch:{notes:{handler(){localStorage.notes=JSON.stringify(this.notes)},deep:!0}},computed:{filterNotes(){return this.search?this.notes.filter((e=>e.title.toLowerCase().includes(this.search.toLowerCase()))):this.notes}}};const ve=(0,b.Z)(be,[["render",s]]);var Ne=ve;(0,a.ri)(Ne).mount("#app")}},t={};function n(a){var o=t[a];if(void 0!==o)return o.exports;var s=t[a]={exports:{}};return e[a](s,s.exports,n),s.exports}n.m=e,function(){var e=[];n.O=function(t,a,o,s){if(!a){var i=1/0;for(c=0;c<e.length;c++){a=e[c][0],o=e[c][1],s=e[c][2];for(var l=!0,r=0;r<a.length;r++)(!1&s||i>=s)&&Object.keys(n.O).every((function(e){return n.O[e](a[r])}))?a.splice(r--,1):(l=!1,s<i&&(i=s));if(l){e.splice(c--,1);var d=o();void 0!==d&&(t=d)}}return t}s=s||0;for(var c=e.length;c>0&&e[c-1][2]>s;c--)e[c]=e[c-1];e[c]=[a,o,s]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.p="/notesbuild/"}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,a){var o,s,i=a[0],l=a[1],r=a[2],d=0;if(i.some((function(t){return 0!==e[t]}))){for(o in l)n.o(l,o)&&(n.m[o]=l[o]);if(r)var c=r(n)}for(t&&t(a);d<i.length;d++)s=i[d],n.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return n.O(c)},a=self["webpackChunktodolist"]=self["webpackChunktodolist"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=n.O(void 0,[998],(function(){return n(1137)}));a=n.O(a)})();
//# sourceMappingURL=app.1b15e369.js.map