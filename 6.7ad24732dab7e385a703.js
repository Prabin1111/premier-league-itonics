(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{NY8D:function(e,t,r){"use strict";r.r(t),r.d(t,"NewResultModule",function(){return F});var o=r("ofXK"),s=r("tyNb"),i=r("1ooo"),n=r("fXoL"),l=r("3Pt+"),a=r("erv5");let u=(()=>{class e{constructor(e){this._fb=e}buildNewResultForm(){this._formGroup=this._fb.group({[a.a.gameDayId]:[null],[a.a.id]:[null],[a.a.homeTeamName]:[null,l.l.required],[a.a.awayTeamName]:[null,l.l.required],[a.a.homeScore]:[null,[l.l.required,l.l.pattern("^[0-9]d*$")]],[a.a.awayScore]:[null,[l.l.required,l.l.pattern("^[0-9]d*$")]],[a.a.date]:[null,l.l.required]},{validator:this.isSameClub(a.a.homeTeamName,a.a.awayTeamName)})}get formGroup(){return this._formGroup}resetForm(){this.formGroup.reset()}isValid(){return this.formGroup.valid}isSameClub(e,t){return r=>{const o=r.controls[e],s=r.controls[t];return o&&s?s.errors&&!s.errors.sameClub?null:s.setErrors(o.value===s.value?{sameClub:!0}:null):null}}}return e.\u0275fac=function(t){return new(t||e)(n.Pb(l.b))},e.\u0275prov=n.Cb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var c=r("iFvM"),b=r("PtXn"),m=r("o9EK");let d=(()=>{class e{constructor(){}generateUUID(){return m.UUID.UUID()}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=n.Cb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var f=r("nUPw"),h=r("6zlT"),p=r("vnY1");let g=(()=>{class e{constructor(e,t,r,o,s){this._httpClient=e,this._UUIDService=t,this._storageService=r,this._leagueTableService=o,this._dataService=s,this.resultList=[]}getClubList(){return this._httpClient.get("./clubs.json")}getResultList(){const e=this._storageService.get(a.b.results);e&&(this.resultList=e)}saveNewResult(e){this.getResultList(),e&&(null==e?void 0:e.id)&&(null==e?void 0:e.gameDayId)?this.updateResult(Object(c.i)(e)):this.addNewResult(e)}addNewResult(e){var t;e.id=this._UUIDService.generateUUID(),e.gameDayId=this._UUIDService.generateUUID(),(null==e?void 0:e.id)&&(null==e?void 0:e.gameDayId)&&(this.mappedModelData=Object(c.i)(e),this.addToList(Object(c.e)(null===(t=this.mappedModelData)||void 0===t?void 0:t.date,this.resultList)))}addToList(e){var t,r,o,s;if(this.mappedModelData&&(null===(t=this.mappedModelData)||void 0===t?void 0:t.games[0])){if(this.addPointToTable(null===(r=this.mappedModelData)||void 0===r?void 0:r.games[0]),e){const t=null===(o=this.mappedModelData)||void 0===o?void 0:o.games[0];e.games.push(t)}else{const e=this.mappedModelData;null===(s=this.resultList)||void 0===s||s.push(e)}this.removeAndAddResultList()}}updateResult(e){if(e){this.mappedModelData=e;const t=Object(c.f)(e.id,e.games[0].id,this.resultList);this.resultList=t.results,this.removePointFromTable(),this.addToList(Object(c.e)(e.date,this.resultList))}}removeAndAddResultList(){this._storageService.removeBy(a.b.results),this._storageService.set(a.b.results,this.resultList)}addPointToTable(e){this._leagueTableService.addPoint(e)}removePointFromTable(){this._leagueTableService.removePoint(this._dataService.oldGameDetails),this._dataService.oldGameDetails=void 0}}return e.\u0275fac=function(t){return new(t||e)(n.Pb(b.a),n.Pb(d),n.Pb(f.a),n.Pb(h.a),n.Pb(p.a))},e.\u0275prov=n.Cb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var v=r("tgey"),w=r("0qZ/");function L(e,t){return!!e&&!(!e.errors||!(e.dirty||e.touched||t))}function _(e,t){const r=t.errors;return r?r[w.f]?e+" is required":r[w.g]?`selected home and ${e} as same`:r[w.d]?e+" pattern does not match":"":""}function y(e,t){if(1&e&&(n.Lb(0,"option",10),n.fc(1),n.Kb()),2&e){const e=t.$implicit;n.Zb("value",null==e?null:e.name),n.wb(1),n.gc(null==e?null:e.name)}}function S(e,t){if(1&e&&(n.Jb(0),n.ec(1,y,2,2,"option",9),n.Ib()),2&e){const e=n.Ub();n.wb(1),n.Zb("ngForOf",null==e.clubList?null:e.clubList.clubs)}}function K(e,t){if(1&e&&(n.Lb(0,"div",11),n.fc(1),n.Kb()),2&e){const e=n.Ub();n.wb(1),n.hc(" ",e.getErrorMessage(null==e.formLabel?null:e.formLabel.homeTeam,e.formGroup.controls[e.fieldsKeys.homeTeamName])," ")}}function C(e,t){if(1&e&&(n.Lb(0,"option",10),n.fc(1),n.Kb()),2&e){const e=t.$implicit;n.Zb("value",null==e?null:e.name),n.wb(1),n.gc(null==e?null:e.name)}}function D(e,t){if(1&e&&(n.Jb(0),n.ec(1,C,2,2,"option",9),n.Ib()),2&e){const e=n.Ub();n.wb(1),n.Zb("ngForOf",null==e.clubList?null:e.clubList.clubs)}}function G(e,t){if(1&e&&(n.Lb(0,"div",11),n.fc(1),n.Kb()),2&e){const e=n.Ub();n.wb(1),n.hc(" ",e.getErrorMessage(null==e.formLabel?null:e.formLabel.awayTeam,e.formGroup.controls[e.fieldsKeys.awayTeamName])," ")}}function M(e,t){if(1&e&&(n.Lb(0,"div",11),n.fc(1),n.Kb()),2&e){const e=n.Ub();n.wb(1),n.hc(" ",e.getErrorMessage(null==e.formLabel?null:e.formLabel.score,e.formGroup.controls[e.fieldsKeys.homeScore])," ")}}function U(e,t){if(1&e&&(n.Lb(0,"div",11),n.fc(1),n.Kb()),2&e){const e=n.Ub();n.wb(1),n.hc(" ",e.getErrorMessage(null==e.formLabel?null:e.formLabel.score,e.formGroup.controls[e.fieldsKeys.awayScore])," ")}}function T(e,t){if(1&e&&(n.Lb(0,"div",11),n.fc(1),n.Kb()),2&e){const e=n.Ub();n.wb(1),n.hc(" ",e.getErrorMessage(null==e.formLabel?null:e.formLabel.date,e.formGroup.controls[e.fieldsKeys.date])," ")}}let I=(()=>{class e{constructor(){this.isSubmit=!1,this.shouldShowErrorMessage=L,this.getErrorMessage=_,this.fieldsKeys=a.a}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=n.Ab({type:e,selectors:[["app-result-form"]],inputs:{formGroup:"formGroup",clubList:"clubList",formLabel:"formLabel",isSubmit:"isSubmit"},decls:32,vars:18,consts:[[1,"form-container",3,"formGroup"],[1,"form__group"],[1,"form__label"],["placeholder","Choose Team",1,"form__select",3,"formControlName"],["value","","disabled",""],[4,"ngIf"],["class","error-section",4,"ngIf"],["type","number",1,"form__input",3,"formControlName"],["type","date",1,"form__input",3,"formControlName"],[3,"value",4,"ngFor","ngForOf"],[3,"value"],[1,"error-section"]],template:function(e,t){1&e&&(n.Lb(0,"div",0),n.Lb(1,"div",1),n.Lb(2,"label",2),n.fc(3),n.Kb(),n.Lb(4,"select",3),n.Lb(5,"option",4),n.fc(6,"Choose Team"),n.Kb(),n.ec(7,S,2,1,"ng-container",5),n.Kb(),n.ec(8,K,2,1,"div",6),n.Kb(),n.Lb(9,"div",1),n.Lb(10,"label",2),n.fc(11),n.Kb(),n.Lb(12,"select",3),n.Lb(13,"option",4),n.fc(14,"Choose Team"),n.Kb(),n.ec(15,D,2,1,"ng-container",5),n.Kb(),n.ec(16,G,2,1,"div",6),n.Kb(),n.Lb(17,"div",1),n.Lb(18,"label",2),n.fc(19),n.Kb(),n.Hb(20,"input",7),n.ec(21,M,2,1,"div",6),n.Kb(),n.Lb(22,"div",1),n.Lb(23,"label",2),n.fc(24),n.Kb(),n.Hb(25,"input",7),n.ec(26,U,2,1,"div",6),n.Kb(),n.Lb(27,"div",1),n.Lb(28,"label",2),n.fc(29),n.Kb(),n.Hb(30,"input",8),n.ec(31,T,2,1,"div",6),n.Kb(),n.Kb()),2&e&&(n.Zb("formGroup",t.formGroup),n.wb(3),n.gc(null==t.formLabel?null:t.formLabel.homeTeam),n.wb(1),n.Zb("formControlName",t.fieldsKeys.homeTeamName),n.wb(3),n.Zb("ngIf",null==t.clubList?null:t.clubList.clubs),n.wb(1),n.Zb("ngIf",t.shouldShowErrorMessage(t.formGroup.controls[t.fieldsKeys.homeTeamName],t.isSubmit)),n.wb(3),n.gc(null==t.formLabel?null:t.formLabel.awayTeam),n.wb(1),n.Zb("formControlName",t.fieldsKeys.awayTeamName),n.wb(3),n.Zb("ngIf",null==t.clubList?null:t.clubList.clubs),n.wb(1),n.Zb("ngIf",t.shouldShowErrorMessage(t.formGroup.controls[t.fieldsKeys.awayTeamName],t.isSubmit)),n.wb(3),n.gc(null==t.formLabel?null:t.formLabel.score),n.wb(1),n.Zb("formControlName",t.fieldsKeys.homeScore),n.wb(1),n.Zb("ngIf",t.shouldShowErrorMessage(t.formGroup.controls[t.fieldsKeys.homeScore],t.isSubmit)),n.wb(3),n.gc(null==t.formLabel?null:t.formLabel.score),n.wb(1),n.Zb("formControlName",t.fieldsKeys.awayScore),n.wb(1),n.Zb("ngIf",t.shouldShowErrorMessage(t.formGroup.controls[t.fieldsKeys.awayScore],t.isSubmit)),n.wb(3),n.gc(null==t.formLabel?null:t.formLabel.date),n.wb(1),n.Zb("formControlName",t.fieldsKeys.date),n.wb(1),n.Zb("ngIf",t.shouldShowErrorMessage(t.formGroup.controls[t.fieldsKeys.date],t.isSubmit)))},directives:[l.g,l.d,l.k,l.f,l.c,l.h,l.m,o.k,l.i,l.a,o.j],styles:[".form-container[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;row-gap:1rem;column-gap:1rem;justify-content:center;align-items:center}.form__group[_ngcontent-%COMP%]{display:flex;flex-direction:column}.form__label[_ngcontent-%COMP%]{justify-self:flex-start;display:block}.form__select[_ngcontent-%COMP%]{height:2rem}.form__input[_ngcontent-%COMP%]{height:1.5rem}.error-section[_ngcontent-%COMP%]{color:#ff4500}"]}),e})();function N(e,t){if(1&e){const e=n.Mb();n.Lb(0,"form",5),n.Sb("submit",function(){return n.bc(e),n.Ub().newResult()}),n.Lb(1,"div",6),n.Hb(2,"app-result-form",7),n.Kb(),n.Lb(3,"div",8),n.Lb(4,"button",9),n.fc(5," Enter Result "),n.Kb(),n.Kb(),n.Kb()}if(2&e){const e=n.Ub();n.Zb("formGroup",null==e.form?null:e.form.formGroup),n.wb(2),n.Zb("formGroup",null==e.form?null:e.form.formGroup)("clubList",e.clubList)("isSubmit",e.isSubmit)("formLabel",e.formLabel),n.wb(2),n.Zb("disabled",!e.form.isValid())}}let P=(()=>{class e{constructor(e,t,r,o){this.form=e,this._newResultService=t,this._UUIDService=r,this._dataService=o,this.pageTitle="New Result",this.isSubmit=!1,this.formLabel=i.a}ngOnInit(){this.buildForm(),this.getClubList()}buildForm(){this.form.buildNewResultForm(),this.checkUpdateStatus()}getClubList(){this._newResultService.getClubList().subscribe(e=>{this.clubList=e})}newResult(){this.isSubmit=!0,this.form.formGroup.valid&&(this._newResultService.saveNewResult(this.form.formGroup.value),this.clearDataAndForm())}checkUpdateStatus(){this._dataService.upDateStatus&&this._dataService.gameDetails&&this.form.formGroup.patchValue(this._dataService.gameDetails)}clearDataAndForm(){this.isSubmit=!1,this.form.resetForm(),this._dataService.upDateStatus=!1,this._dataService.gameDetails=void 0}ngOnDestroy(){this.clearDataAndForm(),this._dataService.oldGameDetails=void 0}}return e.\u0275fac=function(t){return new(t||e)(n.Gb(u),n.Gb(g),n.Gb(d),n.Gb(p.a))},e.\u0275cmp=n.Ab({type:e,selectors:[["app-new-result"]],decls:5,vars:2,consts:[[1,"result-container"],[1,"result__header"],[3,"pageTitle"],[1,"result__form-container"],["class","form",3,"formGroup","submit",4,"ngIf"],[1,"form",3,"formGroup","submit"],[1,"form__result"],[3,"formGroup","clubList","isSubmit","formLabel"],[1,"form__button"],["type","submit",1,"btn",3,"disabled"]],template:function(e,t){1&e&&(n.Lb(0,"div",0),n.Lb(1,"div",1),n.Hb(2,"app-page-header",2),n.Kb(),n.Lb(3,"div",3),n.ec(4,N,6,6,"form",4),n.Kb(),n.Kb()),2&e&&(n.wb(2),n.Zb("pageTitle",t.pageTitle),n.wb(2),n.Zb("ngIf",null==t.form?null:t.form.formGroup))},directives:[v.a,o.k,l.n,l.g,l.d,I],styles:[".form[_ngcontent-%COMP%]{margin-top:5rem;display:grid;grid-template-columns:[left-side-space-start] 20rem [left-side-space-end mid-container-start] 1fr [mid-container-end right-side-space-start] 20rem [right-side-space-end];grid-template-rows:[row-1-start] 15rem [row-1-end row-2-start] 5rem [row-2-end]}.form__button[_ngcontent-%COMP%], .form__result[_ngcontent-%COMP%]{grid-column:mid-container-start/mid-container-end}.form__button[_ngcontent-%COMP%]{grid-row:row-2-start/row-2-end;justify-self:center}.btn[_ngcontent-%COMP%]{text-transform:uppercase;text-decoration:none;padding:1rem 2rem;display:inline-block;transition:all .2s;position:relative;font-weight:500;font-size:1rem}.btn[_ngcontent-%COMP%]:disabled{background-color:#e9e7ed}"]}),e})();const{emptyRoute:O}=i.b,R=[{path:O,component:P}];let Z=(()=>{class e{}return e.\u0275mod=n.Eb({type:e}),e.\u0275inj=n.Db({factory:function(t){return new(t||e)},imports:[[s.d.forChild(R)],s.d]}),e})();var E=r("PCNd");let F=(()=>{class e{}return e.\u0275mod=n.Eb({type:e}),e.\u0275inj=n.Db({factory:function(t){return new(t||e)},imports:[[l.e,l.j,o.b,Z,E.a]]}),e})()},o9EK:function(e,t,r){"use strict";t.UUID=function(){function e(){}return e.UUID=function(){if("undefined"!=typeof window&&void 0!==window.crypto&&void 0!==window.crypto.getRandomValues){var e=new Uint16Array(8);return window.crypto.getRandomValues(e),this.pad4(e[0])+this.pad4(e[1])+"-"+this.pad4(e[2])+"-"+this.pad4(e[3])+"-"+this.pad4(e[4])+"-"+this.pad4(e[5])+this.pad4(e[6])+this.pad4(e[7])}return this.random4()+this.random4()+"-"+this.random4()+"-"+this.random4()+"-"+this.random4()+"-"+this.random4()+this.random4()+this.random4()},e.pad4=function(e){for(var t=e.toString(16);t.length<4;)t="0"+t;return t},e.random4=function(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)},e}()}}]);