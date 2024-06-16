import{A as m,B as c,C as A,D as E,E as P,F as x,G as ge,H as me,I as Y,K as ye,O as K,P as ve,a as u,b as f,c as ae,d as le,e as ue,f as S,g as O,h as de,i as V,j as p,k as D,l as ce,m as b,n as d,o as W,p as he,q,r as M,s as N,t as a,u as z,v as g,w as fe,x as Z,y as X,z as pe}from"./chunk-BW363NVE.js";var we=(()=>{let e=class e{constructor(i,r){this._renderer=i,this._elementRef=r,this.onChange=s=>{},this.onTouched=()=>{}}setProperty(i,r){this._renderer.setProperty(this._elementRef.nativeElement,i,r)}registerOnTouched(i){this.onTouched=i}registerOnChange(i){this.onChange=i}setDisabledState(i){this.setProperty("disabled",i)}};e.\u0275fac=function(r){return new(r||e)(a(z),a(q))},e.\u0275dir=d({type:e});let t=e;return t})(),it=(()=>{let e=class e extends we{};e.\u0275fac=(()=>{let i;return function(s){return(i||(i=he(e)))(s||e)}})(),e.\u0275dir=d({type:e,features:[g]});let t=e;return t})(),Ie=new p("");var nt={provide:Ie,useExisting:O(()=>L),multi:!0};function rt(){let t=Y()?Y().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}var st=new p(""),L=(()=>{let e=class e extends we{constructor(i,r,s){super(i,r),this._compositionMode=s,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!rt())}writeValue(i){let r=i??"";this.setProperty("value",r)}_handleInput(i){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(i)}_compositionStart(){this._composing=!0}_compositionEnd(i){this._composing=!1,this._compositionMode&&this.onChange(i)}};e.\u0275fac=function(r){return new(r||e)(a(z),a(q),a(st,8))},e.\u0275dir=d({type:e,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(r,s){r&1&&E("input",function(l){return s._handleInput(l.target.value)})("blur",function(){return s.onTouched()})("compositionstart",function(){return s._compositionStart()})("compositionend",function(l){return s._compositionEnd(l.target.value)})},features:[x([nt]),g]});let t=e;return t})();function h(t){return t==null||(typeof t=="string"||Array.isArray(t))&&t.length===0}function Se(t){return t!=null&&typeof t.length=="number"}var Oe=new p(""),Ne=new p(""),ot=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,y=class{static min(e){return at(e)}static max(e){return lt(e)}static required(e){return ut(e)}static requiredTrue(e){return dt(e)}static email(e){return ct(e)}static minLength(e){return ht(e)}static maxLength(e){return ft(e)}static pattern(e){return pt(e)}static nullValidator(e){return Pe(e)}static compose(e){return Be(e)}static composeAsync(e){return Re(e)}};function at(t){return e=>{if(h(e.value)||h(t))return null;let n=parseFloat(e.value);return!isNaN(n)&&n<t?{min:{min:t,actual:e.value}}:null}}function lt(t){return e=>{if(h(e.value)||h(t))return null;let n=parseFloat(e.value);return!isNaN(n)&&n>t?{max:{max:t,actual:e.value}}:null}}function ut(t){return h(t.value)?{required:!0}:null}function dt(t){return t.value===!0?null:{required:!0}}function ct(t){return h(t.value)||ot.test(t.value)?null:{email:!0}}function ht(t){return e=>h(e.value)||!Se(e.value)?null:e.value.length<t?{minlength:{requiredLength:t,actualLength:e.value.length}}:null}function ft(t){return e=>Se(e.value)&&e.value.length>t?{maxlength:{requiredLength:t,actualLength:e.value.length}}:null}function pt(t){if(!t)return Pe;let e,n;return typeof t=="string"?(n="",t.charAt(0)!=="^"&&(n+="^"),n+=t,t.charAt(t.length-1)!=="$"&&(n+="$"),e=new RegExp(n)):(n=t.toString(),e=t),i=>{if(h(i.value))return null;let r=i.value;return e.test(r)?null:{pattern:{requiredPattern:n,actualValue:r}}}}function Pe(t){return null}function xe(t){return t!=null}function ke(t){return me(t)?ae(t):t}function Ge(t){let e={};return t.forEach(n=>{e=n!=null?u(u({},e),n):e}),Object.keys(e).length===0?null:e}function Te(t,e){return e.map(n=>n(t))}function gt(t){return!t.validate}function je(t){return t.map(e=>gt(e)?e:n=>e.validate(n))}function Be(t){if(!t)return null;let e=t.filter(xe);return e.length==0?null:function(n){return Ge(Te(n,e))}}function Ue(t){return t!=null?Be(je(t)):null}function Re(t){if(!t)return null;let e=t.filter(xe);return e.length==0?null:function(n){let i=Te(n,e).map(ke);return ue(i).pipe(le(Ge))}}function He(t){return t!=null?Re(je(t)):null}function _e(t,e){return t===null?[e]:Array.isArray(t)?[...t,e]:[t,e]}function Le(t){return t._rawValidators}function $e(t){return t._rawAsyncValidators}function J(t){return t?Array.isArray(t)?t:[t]:[]}function T(t,e){return Array.isArray(t)?t.includes(e):t===e}function Ce(t,e){let n=J(e);return J(t).forEach(r=>{T(n,r)||n.push(r)}),n}function Ve(t,e){return J(e).filter(n=>!T(t,n))}var j=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=Ue(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=He(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,n){return this.control?this.control.hasError(e,n):!1}getError(e,n){return this.control?this.control.getError(e,n):null}},_=class extends j{get formDirective(){return null}get path(){return null}},I=class extends j{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},B=class{constructor(e){this._cd=e}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}},mt={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},si=f(u({},mt),{"[class.ng-submitted]":"isSubmitted"}),We=(()=>{let e=class e extends B{constructor(i){super(i)}};e.\u0275fac=function(r){return new(r||e)(a(I,2))},e.\u0275dir=d({type:e,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(r,s){r&2&&X("ng-untouched",s.isUntouched)("ng-touched",s.isTouched)("ng-pristine",s.isPristine)("ng-dirty",s.isDirty)("ng-valid",s.isValid)("ng-invalid",s.isInvalid)("ng-pending",s.isPending)},features:[g]});let t=e;return t})(),qe=(()=>{let e=class e extends B{constructor(i){super(i)}};e.\u0275fac=function(r){return new(r||e)(a(_,10))},e.\u0275dir=d({type:e,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(r,s){r&2&&X("ng-untouched",s.isUntouched)("ng-touched",s.isTouched)("ng-pristine",s.isPristine)("ng-dirty",s.isDirty)("ng-valid",s.isValid)("ng-invalid",s.isInvalid)("ng-pending",s.isPending)("ng-submitted",s.isSubmitted)},features:[g]});let t=e;return t})();var F="VALID",k="INVALID",v="PENDING",w="DISABLED";function te(t){return($(t)?t.validators:t)||null}function yt(t){return Array.isArray(t)?Ue(t):t||null}function ie(t,e){return($(e)?e.asyncValidators:t)||null}function vt(t){return Array.isArray(t)?He(t):t||null}function $(t){return t!=null&&!Array.isArray(t)&&typeof t=="object"}function ze(t,e,n){let i=t.controls;if(!(e?Object.keys(i):i).length)throw new S(1e3,"");if(!i[n])throw new S(1001,"")}function Ze(t,e,n){t._forEachChild((i,r)=>{if(n[r]===void 0)throw new S(1002,"")})}var C=class{constructor(e,n){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._assignValidators(e),this._assignAsyncValidators(n)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get valid(){return this.status===F}get invalid(){return this.status===k}get pending(){return this.status==v}get disabled(){return this.status===w}get enabled(){return this.status!==w}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(Ce(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(Ce(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(Ve(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(Ve(e,this._rawAsyncValidators))}hasValidator(e){return T(this._rawValidators,e)}hasAsyncValidator(e){return T(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){this.touched=!0,this._parent&&!e.onlySelf&&this._parent.markAsTouched(e)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(e=>e.markAllAsTouched())}markAsUntouched(e={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(n=>{n.markAsUntouched({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}markAsDirty(e={}){this.pristine=!1,this._parent&&!e.onlySelf&&this._parent.markAsDirty(e)}markAsPristine(e={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(n=>{n.markAsPristine({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}markAsPending(e={}){this.status=v,e.emitEvent!==!1&&this.statusChanges.emit(this.status),this._parent&&!e.onlySelf&&this._parent.markAsPending(e)}disable(e={}){let n=this._parentMarkedDirty(e.onlySelf);this.status=w,this.errors=null,this._forEachChild(i=>{i.disable(f(u({},e),{onlySelf:!0}))}),this._updateValue(),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(f(u({},e),{skipPristineCheck:n})),this._onDisabledChange.forEach(i=>i(!0))}enable(e={}){let n=this._parentMarkedDirty(e.onlySelf);this.status=F,this._forEachChild(i=>{i.enable(f(u({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(f(u({},e),{skipPristineCheck:n})),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(e){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===F||this.status===v)&&this._runAsyncValidator(e.emitEvent)),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(e)}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(n=>n._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?w:F}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e){if(this.asyncValidator){this.status=v,this._hasOwnPendingAsyncValidator=!0;let n=ke(this.asyncValidator(this));this._asyncValidationSubscription=n.subscribe(i=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(i,{emitEvent:e})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(e,n={}){this.errors=e,this._updateControlsErrors(n.emitEvent!==!1)}get(e){let n=e;return n==null||(Array.isArray(n)||(n=n.split(".")),n.length===0)?null:n.reduce((i,r)=>i&&i._find(r),this)}getError(e,n){let i=n?this.get(n):this;return i&&i.errors?i.errors[e]:null}hasError(e,n){return!!this.getError(e,n)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(e)}_initObservables(){this.valueChanges=new M,this.statusChanges=new M}_calculateStatus(){return this._allControlsDisabled()?w:this.errors?k:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(v)?v:this._anyControlsHaveStatus(k)?k:F}_anyControlsHaveStatus(e){return this._anyControls(n=>n.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e={}){this.pristine=!this._anyControlsDirty(),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}_updateTouched(e={}){this.touched=this._anyControlsTouched(),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){$(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let n=this._parent&&this._parent.dirty;return!e&&!!n&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=yt(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=vt(this._rawAsyncValidators)}},U=class extends C{constructor(e,n,i){super(te(n),ie(i,n)),this.controls=e,this._initObservables(),this._setUpdateStrategy(n),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(e,n){return this.controls[e]?this.controls[e]:(this.controls[e]=n,n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange),n)}addControl(e,n,i={}){this.registerControl(e,n),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}removeControl(e,n={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}setControl(e,n,i={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],n&&this.registerControl(e,n),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}contains(e){return this.controls.hasOwnProperty(e)&&this.controls[e].enabled}setValue(e,n={}){Ze(this,!0,e),Object.keys(e).forEach(i=>{ze(this,!0,i),this.controls[i].setValue(e[i],{onlySelf:!0,emitEvent:n.emitEvent})}),this.updateValueAndValidity(n)}patchValue(e,n={}){e!=null&&(Object.keys(e).forEach(i=>{let r=this.controls[i];r&&r.patchValue(e[i],{onlySelf:!0,emitEvent:n.emitEvent})}),this.updateValueAndValidity(n))}reset(e={},n={}){this._forEachChild((i,r)=>{i.reset(e?e[r]:null,{onlySelf:!0,emitEvent:n.emitEvent})}),this._updatePristine(n),this._updateTouched(n),this.updateValueAndValidity(n)}getRawValue(){return this._reduceChildren({},(e,n,i)=>(e[i]=n.getRawValue(),e))}_syncPendingControls(){let e=this._reduceChildren(!1,(n,i)=>i._syncPendingControls()?!0:n);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){Object.keys(this.controls).forEach(n=>{let i=this.controls[n];i&&e(i,n)})}_setUpControls(){this._forEachChild(e=>{e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(e){for(let[n,i]of Object.entries(this.controls))if(this.contains(n)&&e(i))return!0;return!1}_reduceValue(){let e={};return this._reduceChildren(e,(n,i,r)=>((i.enabled||this.disabled)&&(n[r]=i.value),n))}_reduceChildren(e,n){let i=e;return this._forEachChild((r,s)=>{i=n(i,r,s)}),i}_allControlsDisabled(){for(let e of Object.keys(this.controls))if(this.controls[e].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(e){return this.controls.hasOwnProperty(e)?this.controls[e]:null}};var Q=class extends U{};var Xe=new p("CallSetDisabledState",{providedIn:"root",factory:()=>ne}),ne="always";function _t(t,e){return[...e.path,t]}function De(t,e,n=ne){re(t,e),e.valueAccessor.writeValue(t.value),(t.disabled||n==="always")&&e.valueAccessor.setDisabledState?.(t.disabled),Vt(t,e),bt(t,e),Dt(t,e),Ct(t,e)}function be(t,e,n=!0){let i=()=>{};e.valueAccessor&&(e.valueAccessor.registerOnChange(i),e.valueAccessor.registerOnTouched(i)),H(t,e),t&&(e._invokeOnDestroyCallbacks(),t._registerOnCollectionChange(()=>{}))}function R(t,e){t.forEach(n=>{n.registerOnValidatorChange&&n.registerOnValidatorChange(e)})}function Ct(t,e){if(e.valueAccessor.setDisabledState){let n=i=>{e.valueAccessor.setDisabledState(i)};t.registerOnDisabledChange(n),e._registerOnDestroy(()=>{t._unregisterOnDisabledChange(n)})}}function re(t,e){let n=Le(t);e.validator!==null?t.setValidators(_e(n,e.validator)):typeof n=="function"&&t.setValidators([n]);let i=$e(t);e.asyncValidator!==null?t.setAsyncValidators(_e(i,e.asyncValidator)):typeof i=="function"&&t.setAsyncValidators([i]);let r=()=>t.updateValueAndValidity();R(e._rawValidators,r),R(e._rawAsyncValidators,r)}function H(t,e){let n=!1;if(t!==null){if(e.validator!==null){let r=Le(t);if(Array.isArray(r)&&r.length>0){let s=r.filter(o=>o!==e.validator);s.length!==r.length&&(n=!0,t.setValidators(s))}}if(e.asyncValidator!==null){let r=$e(t);if(Array.isArray(r)&&r.length>0){let s=r.filter(o=>o!==e.asyncValidator);s.length!==r.length&&(n=!0,t.setAsyncValidators(s))}}}let i=()=>{};return R(e._rawValidators,i),R(e._rawAsyncValidators,i),n}function Vt(t,e){e.valueAccessor.registerOnChange(n=>{t._pendingValue=n,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn==="change"&&Ye(t,e)})}function Dt(t,e){e.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn==="blur"&&t._pendingChange&&Ye(t,e),t.updateOn!=="submit"&&t.markAsTouched()})}function Ye(t,e){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function bt(t,e){let n=(i,r)=>{e.valueAccessor.writeValue(i),r&&e.viewToModelUpdate(i)};t.registerOnChange(n),e._registerOnDestroy(()=>{t._unregisterOnChange(n)})}function Mt(t,e){t==null,re(t,e)}function At(t,e){return H(t,e)}function Et(t,e){if(!t.hasOwnProperty("model"))return!1;let n=t.model;return n.isFirstChange()?!0:!Object.is(e,n.currentValue)}function Ft(t){return Object.getPrototypeOf(t.constructor)===it}function wt(t,e){t._syncPendingControls(),e.forEach(n=>{let i=n.control;i.updateOn==="submit"&&i._pendingChange&&(n.viewToModelUpdate(i._pendingValue),i._pendingChange=!1)})}function It(t,e){if(!e)return null;Array.isArray(e);let n,i,r;return e.forEach(s=>{s.constructor===L?n=s:Ft(s)?i=s:r=s}),r||i||n||null}function St(t,e){let n=t.indexOf(e);n>-1&&t.splice(n,1)}function Me(t,e){let n=t.indexOf(e);n>-1&&t.splice(n,1)}function Ae(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===2&&"value"in t&&"disabled"in t}var G=class extends C{constructor(e=null,n,i){super(te(n),ie(i,n)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(e),this._setUpdateStrategy(n),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),$(n)&&(n.nonNullable||n.initialValueIsDefault)&&(Ae(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,n={}){this.value=this._pendingValue=e,this._onChange.length&&n.emitModelToViewChange!==!1&&this._onChange.forEach(i=>i(this.value,n.emitViewToModelChange!==!1)),this.updateValueAndValidity(n)}patchValue(e,n={}){this.setValue(e,n)}reset(e=this.defaultValue,n={}){this._applyFormState(e),this.markAsPristine(n),this.markAsUntouched(n),this.setValue(this.value,n),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){Me(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){Me(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){Ae(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var Ot=t=>t instanceof G;var Ke=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275dir=d({type:e,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]});let t=e;return t})();var Je=new p("");var Nt={provide:_,useExisting:O(()=>se)},se=(()=>{let e=class e extends _{constructor(i,r,s){super(),this.callSetDisabledState=s,this.submitted=!1,this._onCollectionChange=()=>this._updateDomValue(),this.directives=[],this.form=null,this.ngSubmit=new M,this._setValidators(i),this._setAsyncValidators(r)}ngOnChanges(i){this._checkFormPresent(),i.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}ngOnDestroy(){this.form&&(H(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get control(){return this.form}get path(){return[]}addControl(i){let r=this.form.get(i.path);return De(r,i,this.callSetDisabledState),r.updateValueAndValidity({emitEvent:!1}),this.directives.push(i),r}getControl(i){return this.form.get(i.path)}removeControl(i){be(i.control||null,i,!1),St(this.directives,i)}addFormGroup(i){this._setUpFormContainer(i)}removeFormGroup(i){this._cleanUpFormContainer(i)}getFormGroup(i){return this.form.get(i.path)}addFormArray(i){this._setUpFormContainer(i)}removeFormArray(i){this._cleanUpFormContainer(i)}getFormArray(i){return this.form.get(i.path)}updateModel(i,r){this.form.get(i.path).setValue(r)}onSubmit(i){return this.submitted=!0,wt(this.form,this.directives),this.ngSubmit.emit(i),i?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(i=void 0){this.form.reset(i),this.submitted=!1}_updateDomValue(){this.directives.forEach(i=>{let r=i.control,s=this.form.get(i.path);r!==s&&(be(r||null,i),Ot(s)&&(De(s,i,this.callSetDisabledState),i.control=s))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(i){let r=this.form.get(i.path);Mt(r,i),r.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(i){if(this.form){let r=this.form.get(i.path);r&&At(r,i)&&r.updateValueAndValidity({emitEvent:!1})}}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm&&this._oldForm._registerOnCollectionChange(()=>{})}_updateValidators(){re(this.form,this),this._oldForm&&H(this._oldForm,this)}_checkFormPresent(){this.form}};e.\u0275fac=function(r){return new(r||e)(a(Oe,10),a(Ne,10),a(Xe,8))},e.\u0275dir=d({type:e,selectors:[["","formGroup",""]],hostBindings:function(r,s){r&1&&E("submit",function(l){return s.onSubmit(l)})("reset",function(){return s.onReset()})},inputs:{form:[D.None,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[x([Nt]),g,W]});let t=e;return t})();var Pt={provide:I,useExisting:O(()=>oe)},oe=(()=>{let e=class e extends I{set isDisabled(i){}constructor(i,r,s,o,l){super(),this._ngModelWarningConfig=l,this._added=!1,this.name=null,this.update=new M,this._ngModelWarningSent=!1,this._parent=i,this._setValidators(r),this._setAsyncValidators(s),this.valueAccessor=It(this,o)}ngOnChanges(i){this._added||this._setUpControl(),Et(i,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}viewToModelUpdate(i){this.viewModel=i,this.update.emit(i)}get path(){return _t(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_checkParentType(){}_setUpControl(){this._checkParentType(),this.control=this.formDirective.addControl(this),this._added=!0}};e._ngModelWarningSentOnce=!1,e.\u0275fac=function(r){return new(r||e)(a(_,13),a(Oe,10),a(Ne,10),a(Ie,10),a(Je,8))},e.\u0275dir=d({type:e,selectors:[["","formControlName",""]],inputs:{name:[D.None,"formControlName","name"],isDisabled:[D.None,"disabled","isDisabled"],model:[D.None,"ngModel","model"]},outputs:{update:"ngModelChange"},features:[x([Pt]),g,W]});let t=e;return t})();var xt=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=b({type:e}),e.\u0275inj=V({});let t=e;return t})(),ee=class extends C{constructor(e,n,i){super(te(n),ie(i,n)),this.controls=e,this._initObservables(),this._setUpdateStrategy(n),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}at(e){return this.controls[this._adjustIndex(e)]}push(e,n={}){this.controls.push(e),this._registerControl(e),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}insert(e,n,i={}){this.controls.splice(e,0,n),this._registerControl(n),this.updateValueAndValidity({emitEvent:i.emitEvent})}removeAt(e,n={}){let i=this._adjustIndex(e);i<0&&(i=0),this.controls[i]&&this.controls[i]._registerOnCollectionChange(()=>{}),this.controls.splice(i,1),this.updateValueAndValidity({emitEvent:n.emitEvent})}setControl(e,n,i={}){let r=this._adjustIndex(e);r<0&&(r=0),this.controls[r]&&this.controls[r]._registerOnCollectionChange(()=>{}),this.controls.splice(r,1),n&&(this.controls.splice(r,0,n),this._registerControl(n)),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(e,n={}){Ze(this,!1,e),e.forEach((i,r)=>{ze(this,!1,r),this.at(r).setValue(i,{onlySelf:!0,emitEvent:n.emitEvent})}),this.updateValueAndValidity(n)}patchValue(e,n={}){e!=null&&(e.forEach((i,r)=>{this.at(r)&&this.at(r).patchValue(i,{onlySelf:!0,emitEvent:n.emitEvent})}),this.updateValueAndValidity(n))}reset(e=[],n={}){this._forEachChild((i,r)=>{i.reset(e[r],{onlySelf:!0,emitEvent:n.emitEvent})}),this._updatePristine(n),this._updateTouched(n),this.updateValueAndValidity(n)}getRawValue(){return this.controls.map(e=>e.getRawValue())}clear(e={}){this.controls.length<1||(this._forEachChild(n=>n._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:e.emitEvent}))}_adjustIndex(e){return e<0?e+this.length:e}_syncPendingControls(){let e=this.controls.reduce((n,i)=>i._syncPendingControls()?!0:n,!1);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){this.controls.forEach((n,i)=>{e(n,i)})}_updateValue(){this.value=this.controls.filter(e=>e.enabled||this.disabled).map(e=>e.value)}_anyControls(e){return this.controls.some(n=>n.enabled&&e(n))}_setUpControls(){this._forEachChild(e=>this._registerControl(e))}_allControlsDisabled(){for(let e of this.controls)if(e.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(e){e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)}_find(e){return this.at(e)??null}};function Ee(t){return!!t&&(t.asyncValidators!==void 0||t.validators!==void 0||t.updateOn!==void 0)}var Qe=(()=>{let e=class e{constructor(){this.useNonNullable=!1}get nonNullable(){let i=new e;return i.useNonNullable=!0,i}group(i,r=null){let s=this._reduceControls(i),o={};return Ee(r)?o=r:r!==null&&(o.validators=r.validator,o.asyncValidators=r.asyncValidator),new U(s,o)}record(i,r=null){let s=this._reduceControls(i);return new Q(s,r)}control(i,r,s){let o={};return this.useNonNullable?(Ee(r)?o=r:(o.validators=r,o.asyncValidators=s),new G(i,f(u({},o),{nonNullable:!0}))):new G(i,r,s)}array(i,r,s){let o=i.map(l=>this._createControl(l));return new ee(o,r,s)}_reduceControls(i){let r={};return Object.keys(i).forEach(s=>{r[s]=this._createControl(i[s])}),r}_createControl(i){if(i instanceof G)return i;if(i instanceof C)return i;if(Array.isArray(i)){let r=i[0],s=i.length>1?i[1]:null,o=i.length>2?i[2]:null;return this.control(r,s,o)}else return this.control(i)}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=de({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();var et=(()=>{let e=class e{static withConfig(i){return{ngModule:e,providers:[{provide:Je,useValue:i.warnOnNgModelWithFormControl??"always"},{provide:Xe,useValue:i.callSetDisabledState??ne}]}}};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=b({type:e}),e.\u0275inj=V({imports:[xt]});let t=e;return t})();function Gt(t,e){t&1&&(m(0,"p",5),P(1,"Votre message a \xE9t\xE9 d\xE9livr\xE9 avec succ\xE8s."),c())}var tt=(()=>{let e=class e{constructor(i,r){this.formBuilder=i,this.service=r}ngOnInit(){this.mailRegex=/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/,this.sendMail=this.formBuilder.group({nom:[null,[y.required]],mail:[null,[y.required,y.pattern(this.mailRegex)]],message:[null,[y.required]]})}onSendMail(){this.service.addMail(this.sendMail.value).subscribe(i=>{i.Message&&(console.log(i.Message),this.mail=i.Message)}),this.send=!0,this.sendMail.reset()}};e.\u0275fac=function(r){return new(r||e)(a(Qe),a(ve))},e.\u0275cmp=ce({type:e,selectors:[["app-accueil"]],standalone:!0,features:[ge],decls:20,vars:3,consts:[[1,"display"],[1,"container"],[1,"limit_cadre"],[1,"row"],[1,"col-lg-12"],[1,"reponse"],[3,"formGroup"],["type","email","placeholder","Saisir l'adresse email du destinataire","formControlName","mail",1,"form-control"],["type","text","placeholder","Indiquer l'objet du message","formControlName","nom",1,"form-control"],["placeholder","R\xE9diger votre message","formControlName","message","rows","7",1,"form-control"],["type","submit",1,"form-control","btn","btn-primary",3,"click","disabled"]],template:function(r,s){r&1&&(m(0,"div",0)(1,"div",1)(2,"div",2)(3,"section",3)(4,"article",4)(5,"h2"),P(6,"Envoyer un mail simple"),c(),A(7,"p"),fe(8,Gt,2,0,"p",5),c(),m(9,"form",6)(10,"article",4)(11,"p"),A(12,"input",7),c(),m(13,"p"),A(14,"input",8),c(),m(15,"p"),A(16,"textarea",9),c(),m(17,"p")(18,"button",10),E("click",function(){return s.onSendMail()}),P(19,"Envoyer"),c()()()()()()()()),r&2&&(N(8),pe(8,s.send?8:-1),N(),Z("formGroup",s.sendMail),N(9),Z("disabled",s.sendMail.invalid))},dependencies:[et,Ke,L,We,qe,se,oe,ye],styles:[".display[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;height:100vh}.display[_ngcontent-%COMP%]   .limit_cadre[_ngcontent-%COMP%]{width:50%;margin:auto}.display[_ngcontent-%COMP%]   .limit_cadre[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-family:Arial,Helvetica,sans-serif;font-size:2em;color:#00a98f;text-align:center;margin-bottom:25px}.display[_ngcontent-%COMP%]   .limit_cadre[_ngcontent-%COMP%]   .reponse[_ngcontent-%COMP%]{font-family:Verdana,Geneva,Tahoma,sans-serif;font-size:1em;color:#6ba2ff;text-align:center}"]});let t=e;return t})();var Tt=[{path:"",component:tt},{path:"",pathMatch:"full",redirectTo:""}],pi=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=b({type:e}),e.\u0275inj=V({imports:[K.forChild(Tt),K]});let t=e;return t})();export{pi as IndexRoutingModule};