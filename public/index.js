(()=>{var de={compose:function(n){return function(r){return function(e){return n(r(e))}}}},ve=function(n){return n.compose};var J=function(n){return n.identity},z={identity:function(n){return n},Semigroupoid0:function(){return de}};var kn=function(n){return function(r){return function(e){return n(e)(r)}}},dn=function(n){return function(r){return n}};var f=function(n){return n.map},Er=function(n){var r=f(n);return function(e){return function(t){return r(t)(e)}}},Mn=function(n){return f(n)(dn(void 0))};var Kr={map:ve(de)};var Hi=J(z);var Ze={apply:function(n){return function(r){return function(e){return n(e)(r(e))}}},Functor0:function(){return Kr}};var rn=function(n){return n.apply};var hr=function(n){var r=rn(n),e=f(n.Functor0());return function(t){return function(o){return r(e(dn(Hi))(t))(o)}}},Wn=function(n){var r=rn(n),e=f(n.Functor0());return function(t){return function(o){return function(a){return r(e(t)(o))(a)}}}};var y=function(n){return n.pure};var ge=function(n){var r=rn(n.Apply0()),e=y(n);return function(t){return function(o){return r(e(t))(o)}}};var qt={pure:function(n){return function(r){return n}},Apply0:function(){return Ze}};var $i=J(z),Xn=function(n){return n.discard};var h=function(n){return n.bind},Zn=function(n){return kn(h(n))};var nr={discard:function(n){return h(n)}};var Ot=function(n){var r=h(n);return function(e){return r(e)($i)}};var Qo=function(n){return function(r){return function(e){for(var t=r,o=e.length,a=o-1;a>=0;a--)t=n(e[a])(t);return t}}},Ko=function(n){return function(r){return function(e){for(var t=r,o=e.length,a=0;a<o;a++)t=n(t)(e[a]);return t}}};var Yo=function(n){return function(r){return n.length===0?r:r.length===0?n:n.concat(r)}};var rt={append:function(n){return function(r){return void 0}}};var Xr={append:Yo};var U=function(n){return n.append};var Ji=String.fromCharCode(65535),ki=String.fromCharCode(0),Bi=Number.POSITIVE_INFINITY,Vi=Number.NEGATIVE_INFINITY;var lf=J(z),x=function(){function n(){}return n.value=new n,n}(),b=function(){function n(r){this.value0=r}return n.create=function(r){return new n(r)},n}();var Lr=function(n){return function(r){return function(e){if(e instanceof x)return n;if(e instanceof b)return r(e.value0);throw new Error("Failed pattern match at Data.Maybe (line 237, column 1 - line 237, column 51): "+[n.constructor.name,r.constructor.name,e.constructor.name])}}};var ar={map:function(n){return function(r){return r instanceof b?new b(n(r.value0)):x.value}}};var ye=function(n){return Lr(n)(lf)};var Nn=function(){function n(r){this.value0=r}return n.create=function(r){return new n(r)},n}(),xn=function(){function n(r){this.value0=r}return n.create=function(r){return new n(r)},n}();var ee={mempty:void 0,Semigroup0:function(){return rt}};var jt={mempty:[],Semigroup0:function(){return Xr}};var q=function(n){return n.mempty};var V=function(){function n(r,e){this.value0=r,this.value1=e}return n.create=function(r){return function(e){return new n(r,e)}},n}();var ur=function(n){return n.value1};var Nr=function(n){return n.value0};var i=function(n){return n};var ut=function(n){return n.foldr};var ir=function(n){var r=hr(n.Apply0()),e=y(n);return function(t){var o=ut(t);return function(a){return o(function(u){return r(a(u))})(e(void 0))}}},Zt=function(n){var r=ir(n);return function(e){return kn(r(e))}};var no={foldr:function(n){return function(r){return function(e){if(e instanceof x)return r;if(e instanceof b)return n(e.value0)(r);throw new Error("Failed pattern match at Data.Foldable (line 138, column 1 - line 144, column 27): "+[n.constructor.name,r.constructor.name,e.constructor.name])}}},foldl:function(n){return function(r){return function(e){if(e instanceof x)return r;if(e instanceof b)return n(r)(e.value0);throw new Error("Failed pattern match at Data.Foldable (line 138, column 1 - line 144, column 27): "+[n.constructor.name,r.constructor.name,e.constructor.name])}}},foldMap:function(n){var r=q(n);return function(e){return function(t){if(t instanceof x)return r;if(t instanceof b)return e(t.value0);throw new Error("Failed pattern match at Data.Foldable (line 138, column 1 - line 144, column 27): "+[e.constructor.name,t.constructor.name])}}}};var va=function(n){var r=ut(n);return function(e){var t=U(e.Semigroup0()),o=q(e);return function(a){return r(function(u){return function(l){return t(a(u))(l)}})(o)}}},gr={foldr:Qo,foldl:Ko,foldMap:function(n){return va(gr)(n)}};var ro=function(n){return function(){return n}},_a=function(n){return function(r){return function(){return r(n())()}}};var Hr=function(n){var r=h(n.Bind1()),e=y(n.Applicative0());return function(t){return function(o){return r(t)(function(a){return r(o)(function(u){return e(a(u))})})}}};var ga=function(n,r,e){var t=0,o;return function(a){if(t===2)return o;if(t===1)throw new ReferenceError(n+" was needed before it finished initializing (module "+r+", line "+a+")",r,a);return t=1,o=e(),t=2,o}},fr={Applicative0:function(){return Un},Bind1:function(){return Cr}},Cr={bind:_a,Apply0:function(){return eo(0)}},Un={pure:ro,Apply0:function(){return eo(0)}},Ca=ga("functorEffect","Effect",function(){return{map:ge(Un)}}),eo=ga("applyEffect","Effect",function(){return{apply:Hr(fr),Functor0:function(){return Ca(0)}}}),P=Ca(20),be=eo(23),Uf=Wn(be),it=function(n){return{append:Uf(U(n))}},Bn=function(n){var r=it(n.Semigroup0());return{mempty:ro(q(n)),Semigroup0:function(){return r}}};var Sn=function(){var n={},r="Pure",e="Throw",t="Catch",o="Sync",a="Async",u="Bind",l="Bracket",c="Fork",F="Sequential",M="Map",K="Apply",an="Alt",Y="Cons",pr="Resume",mr="Release",zr="Finalizer",Gr="Finalized",Go="Forked",Us="Fiber",qs="Thunk";function E(v,A,un,$){this.tag=v,this._1=A,this._2=un,this._3=$}function On(v){var A=function(un,$,g){return new E(v,un,$,g)};return A.tag=v,A}function $t(v){return new E(r,void 0)}function hi(v){try{v()}catch(A){setTimeout(function(){throw A},0)}}function Fi(v,A,un){try{return A(un())}catch($){return v($)}}function xi(v,A,un){try{return A(un)()}catch($){return un(v($))(),$t}}var ze=function(){var v=1024,A=0,un=0,$=new Array(v),g=!1;function m(){var W;for(g=!0;A!==0;)A--,W=$[un],$[un]=void 0,un=(un+1)%v,W();g=!1}return{isDraining:function(){return g},enqueue:function(W){var I,nn;A===v&&(nn=g,m(),g=nn),$[(un+A)%v]=W,A++,g||m()}}}();function Ii(v){var A={},un=0,$=0;return{register:function(g){var m=un++;g.onComplete({rethrow:!0,handler:function(W){return function(){$--,delete A[m]}}})(),A[m]=g,$++},isEmpty:function(){return $===0},killAll:function(g,m){return function(){if($===0)return m();var W=0,I={};function nn(O){I[O]=A[O].kill(g,function(mn){return function(){delete I[O],W--,v.isLeft(mn)&&v.fromLeft(mn)&&setTimeout(function(){throw v.fromLeft(mn)},0),W===0&&m()}})()}for(var bn in A)A.hasOwnProperty(bn)&&(W++,nn(bn));return A={},un=0,$=0,function(O){return new E(o,function(){for(var mn in I)I.hasOwnProperty(mn)&&I[mn]()})}}}}}var Qr=0,Pn=1,Ge=2,Qe=3,Ke=4,An=5,me=6;function Ut(v,A,un){var $=0,g=Qr,m=un,W=null,I=null,nn=null,bn=null,O=null,mn=0,br=0,Jn=null,sr=!0;function dr(C){for(var T,N,H;;)switch(T=null,N=null,H=null,g){case Ge:g=Pn;try{m=nn(m),bn===null?nn=null:(nn=bn._1,bn=bn._2)}catch(In){g=An,W=v.left(In),m=null}break;case Qe:v.isLeft(m)?(g=An,W=m,m=null):nn===null?g=An:(g=Ge,m=v.fromRight(m));break;case Pn:switch(m.tag){case u:nn&&(bn=new E(Y,nn,bn)),nn=m._2,g=Pn,m=m._1;break;case r:nn===null?(g=An,m=v.right(m._1)):(g=Ge,m=m._1);break;case o:g=Qe,m=Fi(v.left,v.right,m._1);break;case a:g=Ke,m=xi(v.left,m._1,function(In){return function(){$===C&&($++,ze.enqueue(function(){$===C+1&&(g=Qe,m=In,dr($))}))}});return;case e:g=An,W=v.left(m._1),m=null;break;case t:nn===null?O=new E(Y,m,O,I):O=new E(Y,m,new E(Y,new E(pr,nn,bn),O,I),I),nn=null,bn=null,g=Pn,m=m._1;break;case l:mn++,nn===null?O=new E(Y,m,O,I):O=new E(Y,m,new E(Y,new E(pr,nn,bn),O,I),I),nn=null,bn=null,g=Pn,m=m._1;break;case c:g=Qe,T=Ut(v,A,m._2),A&&A.register(T),m._1&&T.run(),m=v.right(T);break;case F:g=Pn,m=Ri(v,A,m._1);break}break;case An:if(nn=null,bn=null,O===null)g=me,m=I||W||m;else switch(T=O._3,H=O._1,O=O._2,H.tag){case t:I&&I!==T&&mn===0?g=An:W&&(g=Pn,m=H._2(v.fromLeft(W)),W=null);break;case pr:I&&I!==T&&mn===0||W?g=An:(nn=H._1,bn=H._2,g=Ge,m=v.fromRight(m));break;case l:mn--,W===null&&(N=v.fromRight(m),O=new E(Y,new E(mr,H._2,N),O,T),(I===T||mn>0)&&(g=Pn,m=H._3(N)));break;case mr:O=new E(Y,new E(Gr,m,W),O,I),g=Pn,I&&I!==T&&mn===0?m=H._1.killed(v.fromLeft(I))(H._2):W?m=H._1.failed(v.fromLeft(W))(H._2):m=H._1.completed(v.fromRight(m))(H._2),W=null,mn++;break;case zr:mn++,O=new E(Y,new E(Gr,m,W),O,I),g=Pn,m=H._1;break;case Gr:mn--,g=An,m=H._1,W=H._2;break}break;case me:for(var cn in Jn)Jn.hasOwnProperty(cn)&&(sr=sr&&Jn[cn].rethrow,hi(Jn[cn].handler(m)));Jn=null,I&&W?setTimeout(function(){throw v.fromLeft(W)},0):v.isLeft(m)&&sr&&setTimeout(function(){if(sr)throw v.fromLeft(m)},0);return;case Qr:g=Pn;break;case Ke:return}}function fn(C){return function(){if(g===me)return sr=sr&&C.rethrow,C.handler(m)(),function(){};var T=br++;return Jn=Jn||{},Jn[T]=C,function(){Jn!==null&&delete Jn[T]}}}function D(C,T){return function(){if(g===me)return T(v.right(void 0))(),function(){};var N=fn({rethrow:!1,handler:function(){return T(v.right(void 0))}})();switch(g){case Qr:I=v.left(C),g=me,m=I,dr($);break;case Ke:I===null&&(I=v.left(C)),mn===0&&(g===Ke&&(O=new E(Y,new E(zr,m(C)),O,I)),g=An,m=null,W=null,dr(++$));break;default:I===null&&(I=v.left(C)),mn===0&&(g=An,m=null,W=null)}return N}}function R(C){return function(){var T=fn({rethrow:!1,handler:C})();return g===Qr&&dr($),T}}return{kill:D,join:R,onComplete:fn,isSuspended:function(){return g===Qr},run:function(){g===Qr&&(ze.isDraining()?dr($):ze.enqueue(function(){dr($)}))}}}function wi(v,A,un,$){var g=0,m={},W=0,I={},nn=new Error("[ParAff] Early exit"),bn=null,O=n;function mn(fn,D,R){var C=D,T=null,N=null,H=0,cn={},In,se;n:for(;;)switch(In=null,C.tag){case Go:if(C._3===n&&(In=m[C._1],cn[H++]=In.kill(fn,function(Li){return function(){H--,H===0&&R(Li)()}})),T===null)break n;C=T._2,N===null?T=null:(T=N._1,N=N._2);break;case M:C=C._2;break;case K:case an:T&&(N=new E(Y,T,N)),T=C,C=C._1;break}if(H===0)R(v.right(void 0))();else for(se=0,In=H;se<In;se++)cn[se]=cn[se]();return cn}function br(fn,D,R){var C,T,N,H,cn,In;v.isLeft(fn)?(C=fn,T=null):(T=fn,C=null);n:for(;;){if(N=null,H=null,cn=null,In=null,bn!==null)return;if(D===null){$(C||T)();return}if(D._3!==n)return;switch(D.tag){case M:C===null?(D._3=v.right(D._1(v.fromRight(T))),T=D._3):D._3=C;break;case K:if(N=D._1._3,H=D._2._3,C){if(D._3=C,cn=!0,In=W++,I[In]=mn(nn,C===N?D._2:D._1,function(){return function(){delete I[In],cn?cn=!1:R===null?br(C,null,null):br(C,R._1,R._2)}}),cn){cn=!1;return}}else{if(N===n||H===n)return;T=v.right(v.fromRight(N)(v.fromRight(H))),D._3=T}break;case an:if(N=D._1._3,H=D._2._3,N===n&&v.isLeft(H)||H===n&&v.isLeft(N))return;if(N!==n&&v.isLeft(N)&&H!==n&&v.isLeft(H))C=T===N?H:N,T=null,D._3=C;else if(D._3=T,cn=!0,In=W++,I[In]=mn(nn,T===N?D._2:D._1,function(){return function(){delete I[In],cn?cn=!1:R===null?br(T,null,null):br(T,R._1,R._2)}}),cn){cn=!1;return}break}R===null?D=null:(D=R._1,R=R._2)}}function Jn(fn){return function(D){return function(){delete m[fn._1],fn._3=D,br(D,fn._2._1,fn._2._2)}}}function sr(){var fn=Pn,D=un,R=null,C=null,T,N;n:for(;;)switch(T=null,N=null,fn){case Pn:switch(D.tag){case M:R&&(C=new E(Y,R,C)),R=new E(M,D._1,n,n),D=D._2;break;case K:R&&(C=new E(Y,R,C)),R=new E(K,n,D._2,n),D=D._1;break;case an:R&&(C=new E(Y,R,C)),R=new E(an,n,D._2,n),D=D._1;break;default:N=g++,fn=An,T=D,D=new E(Go,N,new E(Y,R,C),n),T=Ut(v,A,T),T.onComplete({rethrow:!1,handler:Jn(D)})(),m[N]=T,A&&A.register(T)}break;case An:if(R===null)break n;R._1===n?(R._1=D,fn=Pn,D=R._2,R._2=n):(R._2=D,D=R,C===null?R=null:(R=C._1,C=C._2))}for(O=D,N=0;N<g;N++)m[N].run()}function dr(fn,D){bn=v.left(fn);var R;for(var C in I)if(I.hasOwnProperty(C)){R=I[C];for(C in R)R.hasOwnProperty(C)&&R[C]()}I=null;var T=mn(fn,O,D);return function(N){return new E(a,function(H){return function(){for(var cn in T)T.hasOwnProperty(cn)&&T[cn]();return $t}})}}return sr(),function(fn){return new E(a,function(D){return function(){return dr(fn,D)}})}}function Ri(v,A,un){return new E(a,function($){return function(){return wi(v,A,un,$)}})}return E.EMPTY=n,E.Pure=On(r),E.Throw=On(e),E.Catch=On(t),E.Sync=On(o),E.Async=On(a),E.Bind=On(u),E.Bracket=On(l),E.Fork=On(c),E.Seq=On(F),E.ParMap=On(M),E.ParApply=On(K),E.ParAlt=On(an),E.Fiber=Ut,E.Supervisor=Ii,E.Scheduler=ze,E.nonCanceler=$t,E}(),Ta=Sn.Pure,qf=Sn.Throw;function ya(n){return function(r){return r.tag===Sn.Pure.tag?Sn.Pure(n(r._1)):Sn.Bind(r,function(e){return Sn.Pure(n(e))})}}function Da(n){return function(r){return Sn.Bind(n,r)}}var ba=Sn.Sync;function Ea(n){return function(r){return Sn.ParMap(n,r)}}function Ma(n){return function(r){return Sn.ParApply(n,r)}}var ft=Sn.Async;function ha(n,r){return function(){return Sn.Fiber(n,null,r)}}var Of=function(){function n(e,t){return e===0&&typeof setImmediate<"u"?setImmediate(t):setTimeout(t,e)}function r(e,t){return e===0&&typeof clearImmediate<"u"?clearImmediate(t):clearTimeout(t)}return function(e,t){return Sn.Async(function(o){return function(){var a=n(t,o(e()));return function(){return Sn.Sync(function(){return e(r(t,a))})}}})}}(),Fa=Sn.Seq;var La=function(n){return function(){return{value:n}}};var cr=function(n){return function(){return n.value}};var Gn=function(n){return function(r){return function(){r.value=n}}};var Wr=La;var Qn=function(n){return n.ask};var wn=function(n){return n.lift};var yr={liftEffect:J(z),Monad0:function(){return fr}},Q=function(n){return n.liftEffect};var Kn=function(n){return n.tell};var Aa=function(n){return n};var Re=function(n){return n};var vt={lift:function(n){return function(r){return Aa(dn(r))}}},Wa=wn(vt),$a=function(n){return function(r){return function(e){return n(r(e))}}},Ua=function(n){return{map:function(){var r=f(n);return function(e){return $a(r(e))}}()}};var co=function(n){var r=rn(n),e=Ua(n.Functor0());return{apply:function(t){return function(o){return function(a){return r(t(a))(o(a))}}},Functor0:function(){return e}}},ae=function(n){var r=h(n),e=co(n.Apply0());return{bind:function(t){return function(o){return function(a){return r(t(a))(function(u){var l=o(u);return l(a)})}}},Apply0:function(){return e}}};var _t=function(n){var r=co(n.Apply0());return{pure:function(){var e=y(n);return function(t){return Aa(dn(e(t)))}}(),Apply0:function(){return r}}},Le=function(n){var r=_t(n.Applicative0()),e=ae(n.Bind1());return{Applicative0:function(){return r},Bind1:function(){return e}}},Ne=function(n){var r=Le(n);return{ask:y(n.Applicative0()),Monad0:function(){return r}}};var gt=function(n){var r=n.Monad0(),e=Le(r);return{liftEffect:function(){var t=Wa(r),o=Q(n);return function(a){return t(o(a))}}(),Monad0:function(){return e}}};var qa=function(n){var r=n.Monad1(),e=n.Semigroup0(),t=Le(r);return{tell:function(){var o=Wa(r),a=Kn(n);return function(u){return o(a(u))}}(),Semigroup0:function(){return e},Monad1:function(){return t}}};var cc=function(n){return n},Se=function(n){return n};var lo=function(n){var r=q(n);return{lift:function(e){var t=h(e.Bind1()),o=y(e.Applicative0());return function(a){return t(a)(function(u){return o(new V(u,r))})}}}},Oa=function(n){return function(r){return n(r)}},po=function(n){var r=f(n);return{map:function(e){return Oa(r(function(t){return new V(e(t.value0),t.value1)}))}}};var Tt=function(n){var r=U(n);return function(e){var t=rn(e),o=e.Functor0(),a=f(o),u=po(o);return{apply:function(l){return function(c){var F=function(M){return function(K){return new V(M.value0(K.value0),r(M.value1)(K.value1))}};return t(a(F)(l))(c)}},Functor0:function(){return u}}}},ue=function(n){var r=U(n),e=Tt(n);return function(t){var o=h(t),a=t.Apply0(),u=f(a.Functor0()),l=e(a);return{bind:function(c){return function(F){return o(c)(function(M){var K=F(M.value0);return u(function(an){return new V(an.value0,r(M.value1)(an.value1))})(K)})}},Apply0:function(){return l}}}};var qr=function(n){var r=q(n),e=Tt(n.Semigroup0());return function(t){var o=y(t),a=e(t.Apply0());return{pure:function(u){return o(new V(u,r))},Apply0:function(){return a}}}},Or=function(n){var r=qr(n),e=ue(n.Semigroup0());return function(t){var o=r(t.Applicative0()),a=e(t.Bind1());return{Applicative0:function(){return o},Bind1:function(){return a}}}};var Pe=function(n){var r=wn(lo(n)),e=Or(n);return function(t){var o=t.Monad0(),a=e(o);return{liftEffect:function(){var u=r(o),l=Q(t);return function(c){return u(l(c))}}(),Monad0:function(){return a}}}};var He=function(n){var r=n.Semigroup0(),e=Or(n);return function(t){var o=e(t);return{tell:function(){var a=y(t.Applicative0()),u=V.create(void 0);return function(l){return cc(a(u(l)))}}(),Semigroup0:function(){return r},Monad1:function(){return o}}}};var yt=function(n){return n.sequential},ie=function(n){return n.parallel};var vc=function(){function n(o){return[o]}function r(o){return function(a){return[o,a]}}function e(o){return function(a){return function(u){return[o,a,u]}}}function t(o){return function(a){return o.concat(a)}}return function(o){return function(a){return function(u){return function(l){return function(c){function F(M,K){switch(K-M){case 0:return u([]);case 1:return a(n)(l(c[M]));case 2:return o(a(r)(l(c[M])))(l(c[M+1]));case 3:return o(o(a(e)(l(c[M])))(l(c[M+1])))(l(c[M+2]));default:var an=M+Math.floor((K-M)/4)*2;return o(a(t)(F(M,an)))(F(an,K))}}return F(0,c.length)}}}}}}();var Nc=J(z),Sc=function(n){var r=yt(n),e=ir(n.Applicative1()),t=ie(n);return function(o){var a=e(o);return function(u){var l=a(function(c){return t(u(c))});return function(c){return r(l(c))}}}};var ja=function(n){var r=Sc(n);return function(e){return r(e)(Nc)}};var za=function(n){return n()};var Ga=function(n){throw new Error(n)};var Qa=function(){return Ga};var qc=Qa(),Oc=za,so=function(n){return Oc(function(){return qc(n)})};var Ka=function(n,r,e){var t=0,o;return function(a){if(t===2)return o;if(t===1)throw new ReferenceError(n+" was needed before it finished initializing (module "+r+", line "+a+")",r,a);return t=1,o=e(),t=2,o}};var Vc=Mn(P);var jc=function(n){return n};var zc={map:Ea},Ya={map:ya};var Gc=function(){var n=function(t){if(t instanceof xn)return t.value0;if(t instanceof Nn)return so("unsafeFromRight: Left");throw new Error("Failed pattern match at Effect.Aff (line 412, column 21 - line 414, column 54): "+[t.constructor.name])},r=function(t){if(t instanceof Nn)return t.value0;if(t instanceof xn)return so("unsafeFromLeft: Right");throw new Error("Failed pattern match at Effect.Aff (line 407, column 20 - line 409, column 55): "+[t.constructor.name])},e=function(t){if(t instanceof Nn)return!0;if(t instanceof xn)return!1;throw new Error("Failed pattern match at Effect.Aff (line 402, column 12 - line 404, column 21): "+[t.constructor.name])};return{isLeft:e,fromLeft:r,fromRight:n,left:Nn.create,right:xn.create}}(),Qc=function(n){return ha(Gc,n)},Kc=function(n){return function(){var e=Qc(n)();return e.run(),e}},vo=function(n){return Vc(Kc(n))};var Yc={apply:Ma,Functor0:function(){return zc}};var _o={Applicative0:function(){return Ae},Bind1:function(){return Jr}},Jr={bind:Da,Apply0:function(){return Xa(0)}},Ae={pure:Ta,Apply0:function(){return Xa(0)}},Xa=Ka("applyAff","Effect.Aff",function(){return{apply:Hr(_o),Functor0:function(){return Ya}}});var Za=y(Ae);var fe={liftEffect:ba,Monad0:function(){return _o}},Xc=Q(fe),nu=function(n){return jc(dn(Xc(n)))};var ru={parallel:i,sequential:Fa,Monad0:function(){return _o},Applicative1:function(){return Zc(0)}},Zc=Ka("applicativeParAff","Effect.Aff",function(){return{pure:function(){var n=ie(ru);return function(r){return n(Za(r))}}(),Apply0:function(){return Yc}}});var nl=ja(ru)(gr);var rl={append:function(n){return function(r){return function(e){return nl([n(e),r(e)])}}}};var el=dn(Za(void 0)),eu={mempty:el,Semigroup0:function(){return rl}};var bt=function(n){return function(r){return r[n]}},tl=bt("namespaceURI"),ol=bt("prefix"),al=bt("localName"),ul=bt("tagName");function Co(n){return function(r){return function(e){return function(){e.setAttribute(n,r)}}}}function To(n){return function(r){return function(){r.removeAttribute(n)}}}function tu(n,r,e){return n==null?r:e(n)}function yo(n){return n}var Et=Lr(null)(yo),on=function(n){return tu(n,x.value,b.create)};var Mt=function(n){return function(r){return function(){return r[n]}}},cl=Mt("children"),ll=Mt("firstElementChild"),pl=Mt("lastElementChild"),ml=Mt("childElementCount");function uu(n,r,e,t){if(typeof window<"u"){var o=window[e];if(o!=null&&t instanceof o)return r(t)}for(var a=t;a!=null;){var u=Object.getPrototypeOf(a),l=u.constructor.name;if(l===e)return r(t);if(l==="Object")return n;a=u}return n}var s=function(n){return function(r){return uu(x.value,b.create,n,r)}};var kr=i,iu=i;var ht=s("Element");function We(n){return function(){return function(r){return n(r)()}}}function $e(n){return function(r){return function(e){return function(t){return function(){return t.addEventListener(n,r,e)}}}}}function Ue(n){return function(r){return function(e){return function(t){return function(){return t.removeEventListener(n,r,e)}}}}}var Vn=function(){return window};function lu(n){return n.body}function pu(n){return n.readyState}var qe=function(){function n(){}return n.value=new n,n}(),Dl=function(){function n(){}return n.value=new n,n}(),bl=function(){function n(){}return n.value=new n,n}();var mu=function(n){return n==="loading"?new b(qe.value):n==="interactive"?new b(Dl.value):n==="complete"?new b(bl.value):x.value};var du=f(P);var ce=i;var vu=function(n){return du(function(){var r=ye(qe.value);return function(e){return r(mu(e))}}())(function(){return pu(n)})};var _u=function(n){return du(on)(function(){return lu(n)})};var Cu=i;function Yn(n){return function(){return n.document}}var hu=i;var Mo="DOMContentLoaded";var xt=Zn(Cr),Lp=y(qt),Np=Xn(nr),Sp=q(Bn(eu)),Pp=Np(Jr),Hp=h(Jr),Ap=Q(fe),Wp=y(Ae),$p=f(ar),Up=ft(function(n){return function(){var e=Vn(),t=xt(vu)(xt(Yn)(Vn))();if(t instanceof qe){var o=hu(e),a=We(Lp(n(new xn(void 0))))();return $e(Mo)(a)(!1)(o)(),nu(Ue(Mo)(a)(!1)(o))}return n(new xn(void 0))(),Sp()}});var Iu=Pp(Up)(function(){return Hp(Ap(xt(_u)(xt(Yn)(Vn))))(function(n){return Wp($p(Cu)(n))})});var wu=n=>()=>({subscriptions:new Set,value:n}),Ru=n=>r=>()=>{n.value=r(n.value),n.subscriptions.forEach(e=>{e.cleaner(),e.cleaner=e.callback(n.value)()})},Lu=n=>()=>n.value,Nu=n=>r=>()=>{let e={callback:r,cleaner:r(n.value)()};return n.subscriptions.add(e),()=>{e.cleaner(),n.subscriptions.delete(e)}};var Bp=f(P),Vp=rn(be),jp=y(Un),zp=J(z),Gp=hr(be),Qp=q(Bn(Bn(ee)));var lr={map:function(n){return function(r){return{run:function(e){return r.run(function(t){return e(n(t))})},get:Bp(n)(r.get)}}}},Su=Er(lr),ho={apply:function(n){return function(r){return{run:function(e){return n.run(function(t){return r.run(function(o){return e(t(o))})})},get:Vp(n.get)(r.get)}}},Functor0:function(){return lr}},Kp=Wn(ho),Pu={bind:function(n){return function(r){return{run:function(e){return n.run(function(t){var o=r(t);return o.run(e)})},get:function(){var t=n.get(),o=r(t);return o.get()}}}},Apply0:function(){return ho}},Oe=function(n){return{append:Kp(U(n))}},Vr={pure:function(n){return{run:function(r){return r(n)},get:jp(n)}},Apply0:function(){return ho}},Yp=y(Vr);var It=function(n){var r=Oe(n.Semigroup0());return{mempty:Yp(q(n)),Semigroup0:function(){return r}}},Hu=function(n){return{run:Nu(n),get:Lu(n)}},wt=function(n){var r=Q(n);return function(e){return r(e.run(zp))}},Au=function(n){var r=h(n.Monad0().Bind1()),e=Q(n),t=wt(n);return function(o){return r(e(Wr(!0)))(function(a){return t(Su(o)(function(u){return function(){var c=cr(a)();return c?Gp(Gn(!1)(a))(Qp)():u()}}))})}},Rt=function(n){var r=Q(n);return function(e){return r(e.get)}},Wu=function(n){var r=Q(n);return function(e){return r(wu(e))}},$u=function(n){var r=n.Monad0(),e=h(r.Bind1()),t=Wu(n),o=y(r.Applicative0());return function(a){return e(t(a))(function(u){return o(new V(Hu(u),u))})}},Xp=function(n){var r=Q(n);return function(e){return function(t){return r(Ru(e)(t))}}},Fo=function(n){var r=Xp(n);return function(e){return function(t){return r(e)(dn(t))}}},Zp=Fo(yr),Uu=function(n){var r=n.Monad0(),e=h(r.Bind1()),t=Wu(n),o=wt(n),a=y(r.Applicative0());return function(u){return e(t(void 0))(function(l){return e(o(Su(u)(function(c){return function(){var M=c();return Zp(l)(M.value0)(),M.value1}})))(function(c){return a(new V(Hu(l),c))})})}};var St=Bn(ee),rm=it(rt),em=Er(lr);var tm=Fo(yr),Pt=Xn(nr),qu=Q(yr),om=wn(vt),Nt=f(lr),am=Ot(Pu);var um=Mn(P),Ou=Kn(He(St)(fr));var xo=Or(St)(fr),Je=Pe(St)(yr),im=Uu(Je);var le=ue(rm)(Cr),fm=h(le),cm=Pt(le);var Io=qr(St)(Un),lm=y(Io),ke=function(n){return n.useHooks},pm=function(n){var r=Mn(n.MonadEffect0().Monad0().Bind1().Apply0().Functor0()),e=ke(n);return function(t){return r(e(t))}};var Dr=function(n){return n.useCleaner},mm=function(n){var r=n.MonadEffect0(),e=r.Monad0(),t=e.Bind1(),o=h(t),a=$u(r),u=y(e.Applicative0()),l=Q(r),c=hr(t.Apply0()),F=Pt(t),M=Dr(n),K=pm(n);return function(an){return function(Y){return o(a(u(void 0)))(function(pr){return o(l(an(function(mr){return tm(pr.value1)(c(Y(mr))(u(void 0)))})))(function(mr){return F(M(mr))(function(){return K(pr.value0)})})})}}},Ju=function(n){var r=mm(n);return function(e){return function(t){return function(o){var a=function(u){return function(){var c=qu(We(u))();return qu($e(t)(c)(!1)(e))(),Ue(t)(c)(!1)(e)}};return r(a)(o)}}}};var wo=function(n){var r=n.MonadEffect0(),e=r.Monad0(),t=om(e),o=h(ae(e.Bind1())),a=Qn(Ne(e)),u=ke(n),l=gt(r);return{useCleaner:function(){var c=Dr(n);return function(F){return t(c(F))}}(),useHooks:function(c){return o(a)(function(F){return t(u(Nt(kn(Re)(F))(c)))})},MonadEffect0:function(){return l}}},ku=function(n){var r=n.MonadEffect0(),e=r.Monad0(),t=Dr(n),o=e.Bind1(),a=ke(n),u=e.Applicative0();return function(l){var c=It(l),F=wn(lo(c))(e),M=ue(Oe(l.Semigroup0()))(o),K=h(M),an=Pt(M),Y=Kn(He(c)(e)),pr=y(qr(c)(u)),mr=Pe(c)(r);return{useCleaner:function(zr){return F(t(zr))},useHooks:function(zr){return K(F(a(Nt(Se)(zr))))(function(Gr){return an(Y(am(Nt(ur)(Gr))))(function(){return pr(Nt(Nr)(Gr))})})},MonadEffect0:function(){return mr}}}};var Bu=function(n){var r=Q(n);return function(e){return r(Se(e))}},Vu=Bu(yr),ju=function(n){return um(Vu(n))},Ro={useCleaner:function(n){return Ou(n)},useHooks:function(n){return fm(im(em(n)(function(r){return Vu(r)})))(function(r){return cm(Ou(r.value1))(function(){return lm(r.value0)})})},MonadEffect0:function(){return Je}};var zu=function(n){var r=n.MonadEffect0(),e=r.Monad0(),t=e.Bind1(),o=h(t),a=Bu(r),u=Pt(t),l=Dr(n),c=y(e.Applicative0());return function(F){return o(a(F))(function(M){return u(l(M.value1))(function(){return c(M.value0)})})}};var sm=function(n){return function(r){if(n<1)return[];var e=new Array(n);return e.fill(r)}},dm=function(n){return function(r){for(var e=[],t=0,o=0;o<n;o++)e[t++]=r;return e}},vm=typeof Array.prototype.fill=="function"?sm:dm,_m=function(){function n(o,a){this.head=o,this.tail=a}var r={};function e(o){return function(a){return new n(o,a)}}function t(o){for(var a=[],u=0,l=o;l!==r;)a[u++]=l.head,l=l.tail;return a}return function(o){return function(a){return t(o(e)(r)(a))}}}();var gm=function(){function n(r,e,t,o,a,u){var l,c,F,M,K,an,Y;for(l=a+(u-a>>1),l-a>1&&n(r,e,o,t,a,l),u-l>1&&n(r,e,o,t,l,u),c=a,F=l,M=a;c<l&&F<u;)K=o[c],an=o[F],Y=e(r(K)(an)),Y>0?(t[M++]=an,++F):(t[M++]=K,++c);for(;c<l;)t[M++]=o[c++];for(;F<u;)t[M++]=o[F++]}return function(r){return function(e){return function(t){var o;return t.length<2?t:(o=t.slice(0),n(r,e,o,t.slice(0),0,t.length),o)}}}}();var Tm=function(){function n(r,e,t,o,a,u){var l,c,F,M,K,an,Y;for(l=a+(u-a>>1),l-a>1&&n(r,e,o,t,a,l),u-l>1&&n(r,e,o,t,l,u),c=a,F=l,M=a;c<l&&F<u;)K=o[c],an=o[F],Y=e(r(K)(an)),Y>0?(t[M++]=an,++F):(t[M++]=K,++c);for(;c<l;)t[M++]=o[c++];for(;F<u;)t[M++]=o[F++]}return function(r){return function(e){return function(t){return function(){return t.length<2||n(r,e,t,t.slice(0),0,t.length),t}}}}}();var Wm=y(Vr),No=function(){function n(r,e){this.value0=r,this.value1=e}return n.create=function(r){return function(e){return new n(r,e)}},n}(),Yu=function(){function n(r,e){this.value0=r,this.value1=e}return n.create=function(r){return function(e){return new n(r,e)}},n}(),Xu=function(){function n(r){this.value0=r}return n.create=function(r){return new n(r)},n}(),Zu=function(){return{toAttrValue:b.create}}();var $m=function(n){return n.toAttrValue};var ni=function(n){var r=$m(n);return function(e){return function(t){return new No(e,Wm(r(t)))}}};var Um=y(Vr);var qm=function(n){return n.textSig},ri=function(n){var r=qm(n);return function(e){return r(Um(e))}};var ei=function(n){return n.el};var oi=function(n){return ei(n)("div")};var Po=n=>r=>e=>t=>()=>t.implementation.createDocumentType(n,r,e),Ho=n=>()=>{let r=document.createElement("div");return r.innerHTML=n,Array.from(r.childNodes)},Ht=n=>r=>()=>{let e=Array.from(n.childNodes),t=new Set(r);e.filter(u=>!t.has(u)).forEach(u=>n.removeChild(u));let a=n.firstChild;for(let u of r){if(a===u){a=a.nextSibling;continue}if(a===null){n.appendChild(u);continue}n.insertBefore(u,a)}};var jr=function(n){return function(r){return function(){return r[n]}}},km=jr("URL"),Bm=jr("documentURI"),Vm=jr("origin"),jm=jr("compatMode"),zm=jr("characterSet"),Gm=jr("contentType");var Qm=jr("documentElement");function At(n){return function(r){return function(){return r.createElement(n)}}}function ai(n){return function(r){return function(e){return function(){return e.createElementNS(n,r)}}}}function Ao(n){return function(r){return function(){return r.createTextNode(n)}}}var ui=function(n){return ai(Et(n))};var Wo=function(n){return function(r){return r[n]}},Xm=Wo("name"),Zm=Wo("publicId"),ns=Wo("systemId");var ii=i;var fi=s("DocumentType");var jn=function(n){return function(r){return function(){return r[n]}}};var es=jn("baseURI"),ts=jn("ownerDocument"),os=jn("parentNode"),as=jn("parentElement");var us=jn("childNodes"),ci=jn("firstChild"),is=jn("lastChild"),fs=jn("previousSibling"),li=jn("nextSibling"),cs=jn("nodeValue");var ls=jn("textContent");function $o(n){return function(r){return function(){r.textContent=n}}}var pi=f(P);var Uo=function(){var n=pi(on);return function(r){return n(li(r))}}();var mi=function(){var n=pi(on);return function(r){return n(ci(r))}}();var qo=i;var si=s("Text");var Wt=It(jt),_s=Or(Wt)(xo),gs=Oe(Xr),Vo=Er(lr),gi=Xn(nr),jo=q(Bn(Bn(ee))),di=y(Vr),vi=h(le),Ci=Q(Je),Cs=Zn(Cr),Ts=gi(le),Be=f(P),ys=f(lr),Ds=Zt(Un)(gr);var bs=qa(He(Wt)(xo)),Jo=Kn(bs);var je=wo(ku(Ro)(jt)),_i=zu(je),Es=ke(je),Ti=gt(Pe(Wt)(Je)),Rn=Q(Ti),Ms=Rt(Ti),hs=Ne(_s),yi=Qn(hs);var Di=ae(ue(gs)(le)),Tn=h(Di),pe=gi(Di);var Fs=_t(qr(Wt)(Io)),ko=y(Fs),zo=function(n){return function(r){var e=wt(r),t=Au(r);return function(o){return o?e:t}}},xs=function(n){var r=n.MonadEffect0(),e=h(r.Monad0().Bind1()),t=zo(n)(r),o=Dr(n);return function(a){return function(u){return function(l){return e(t(a)(Vo(l)(function(c){return function(){return Ht(u)(c)(),jo()}})))(function(c){return o(c)})}}}},Is=xs(Ro),ws=function(n){var r=n.MonadEffect0(),e=h(r.Monad0().Bind1()),t=zo(n)(r),o=Dr(n),a=Ju(n);return function(u){return function(l){return function(c){if(c instanceof No)return e(t(u)(Vo(c.value1)(function(F){return function(){return function(){if(F instanceof x)return To(c.value0)(l)();if(F instanceof b)return Co(c.value0)(F.value0)(l)();throw new Error("Failed pattern match at Jelly.Hydrate (line 43, column 7 - line 45, column 46): "+[F.constructor.name])}(),jo()}})))(function(F){return o(F)});if(c instanceof Yu)return a(iu(l))(c.value0)(c.value1);if(c instanceof Xu)return c.value0(l);throw new Error("Failed pattern match at Jelly.Hydrate (line 40, column 40 - line 51, column 19): "+[c.constructor.name])}}}},Rs=function(n){var r=ir(n.MonadEffect0().Monad0().Applicative0())(gr),e=ws(n);return function(t){return function(o){return function(a){return r(e(t)(o))(a)}}}},Oo=Rs(je),Ls=function(n){var r=n.MonadEffect0(),e=h(r.Monad0().Bind1()),t=zo(n)(r),o=Dr(n);return function(a){return function(u){return function(l){return e(t(a)(Vo(l)(function(c){return function(){return $o(c)(qo(u))(),jo()}})))(function(c){return o(c)})}}}},Ns=Ls(je),Ve=function(n){return function(r){return function(e){return Tn(yi)(function(t){return Tn(Rn(cr(t)))(function(o){var a=function(l){return Tn(Rn(e))(function(c){return pe(Jo(di([r(c)])))(function(){return ko(new V(c,!1))})})};if(o instanceof b){var u=n(o.value0);return u instanceof b?Tn(Rn(Uo(o.value0)))(function(l){return pe(Rn(Gn(l)(t)))(function(){return pe(Jo(di([o.value0])))(function(){return ko(new V(u.value0,!0))})})}):a(!0)}return a(!0)})})}}},Bo=function(n){return function(r){return vi(Ci(Cs(Wr)(mi(r))))(function(e){return vi(Se(Re(n)(e)))(function(t){return Is(!0)(r)(t.value1)})})}},bi=function(n){return function(r){return Ts(Ci(Ht(r)([])))(function(){return Bo(n)(r)})}},Ei={el:function(n){return function(r){return function(e){return Tn(Rn(Vn))(function(t){return Tn(Rn(Be(ce)(Yn(t))))(function(o){return Tn(Ve(ht)(kr)(At(n)(o)))(function(a){return pe(_i(Bo(e)(kr(a.value0))))(function(){return Oo(!a.value1)(a.value0)(r)})})})})}}},elNS:function(n){return function(r){return function(e){return function(t){return Tn(Rn(Vn))(function(o){return Tn(Rn(Be(ce)(Yn(o))))(function(a){return Tn(Ve(ht)(kr)(ui(new b(n))(r)(a)))(function(u){return pe(_i(Bo(t)(kr(u.value0))))(function(){return Oo(!u.value1)(u.value0)(e)})})})})}}}},elVoid:function(n){return function(r){return Tn(Rn(Vn))(function(e){return Tn(Rn(Be(ce)(Yn(e))))(function(t){return Tn(Ve(ht)(kr)(At(n)(t)))(function(o){return Oo(!o.value1)(o.value0)(r)})})})}},textSig:function(n){return Tn(Rn(Vn))(function(r){return Tn(Rn(Be(ce)(Yn(r))))(function(e){return Tn(Ve(si)(qo)(Ao("")(e)))(function(t){return Ns(!t.value1)(t.value0)(n)})})})},rawSig:function(n){return Tn(yi)(function(r){return Tn(Es(ys(function(e){return Rn(Ho(e))})(n)))(function(e){var t=function(){var a=cr(r)();if(a instanceof b){var u=Uo(a.value0)();return Gn(u)(r)()}if(a instanceof x)return Gn(x.value)(r)();throw new Error("Failed pattern match at Jelly.Hydrate (line 143, column 9 - line 147, column 47): "+[a.constructor.name])};return Tn(Ms(e))(function(o){return pe(Rn(Ds(o)(function(a){return t})))(function(){return Jo(e)})})})})},doctype:function(n){return function(r){return function(e){return Tn(Rn(Vn))(function(t){return Tn(Rn(Be(ce)(Yn(t))))(function(o){return Tn(Ve(fi)(ii)(Po(n)(r)(e)(o)))(function(){return ko(void 0)})})})}}},MonadHooks0:function(){return je}};var Ps=ni(Zu),Hs=Q(fe),As=ir(Un)(no),Ws=function(n){return oi(n)([Ps("class")("w-screen h-screen text-5xl flex justify-center items-center")])(ri(n)("Hello Jelly!"))},$s=Ws(Ei),Mi=vo(h(Jr)(Iu)(function(n){return Hs(As(function(){var r=bi($s);return function(e){return ju(r(e))}}())(n))}));Mi();})();
