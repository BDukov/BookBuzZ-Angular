"use strict";(self.webpackChunkbook_store=self.webpackChunkbook_store||[]).push([[641],{2641:(W,f,a)=>{a.r(f),a.d(f,{UserModule:()=>$});var m=a(6814),l=a(779),e=a(8926),u=a(2365),s=a(95);function h(n,i){1&n&&(e.TgZ(0,"p",18),e._uU(1,"Email is required!"),e.qZA())}function C(n,i){1&n&&(e.TgZ(0,"p",18),e._uU(1,"Email must be at least 5 characters!"),e.qZA())}function b(n,i){if(1&n&&(e.ynx(0),e.YNc(1,h,2,0,"p",17),e.YNc(2,C,2,0,"p",17),e.BQk()),2&n){e.oxw();const t=e.MAs(13);e.xp6(1),e.Q6J("ngIf",null==t.errors?null:t.errors.required),e.xp6(1),e.Q6J("ngIf",null==t.errors?null:t.errors.minlength)}}function Z(n,i){1&n&&(e.TgZ(0,"p",18),e._uU(1,"Password must be at least 6 characters! "),e.qZA())}function M(n,i){1&n&&(e.TgZ(0,"p",18),e._uU(1,"Password is required!"),e.qZA())}function v(n,i){if(1&n&&(e.ynx(0),e.YNc(1,Z,2,0,"p",17),e.YNc(2,M,2,0,"p",17),e.BQk()),2&n){e.oxw();const t=e.MAs(19);e.xp6(1),e.Q6J("ngIf",null==t.errors?null:t.errors.minlength),e.xp6(1),e.Q6J("ngIf",null==t.errors?null:t.errors.required)}}let w=(()=>{class n{constructor(t,o){this.userService=t,this.router=o,this.email="",this.password="",this.isLoggedIn=!1}ngOnInit(){}login(t){t.invalid||(this.isLoggedIn=!0,this.userService.login({email:t.value.email,password:t.value.password}).subscribe(()=>{this.router.navigate(["/books"])},o=>{this.loginMessage=o.message,setTimeout(()=>{this.loginMessage=void 0},3e3)}))}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(u.R),e.Y36(l.F0))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-login"]],decls:28,vars:4,consts:[[1,"content"],[1,"loginMessage"],[1,""],[1,"login-form"],[3,"ngSubmit"],["form","ngForm"],[1,"form-group"],["for","email"],["type","text","id","username","name","email","ngModel","","required","","minlength","5"],["inputEmail","ngModel"],[4,"ngIf"],["for","password"],["type","password","id","password","name","password","ngModel","","required","","minlength","6"],["inputPassword","ngModel"],["type","submit",1,"button",3,"disabled"],[1,"register-prompt"],["routerLink","/auth/register"],["class","error",4,"ngIf"],[1,"error"]],template:function(t,o){if(1&t){const r=e.EpF();e.TgZ(0,"div",0)(1,"div",1)(2,"p",2),e._uU(3),e.qZA()(),e.TgZ(4,"div",3)(5,"h2"),e._uU(6,"Login"),e.qZA(),e.TgZ(7,"form",4,5),e.NdJ("ngSubmit",function(){e.CHM(r);const c=e.MAs(8);return e.KtG(o.login(c))}),e.TgZ(9,"div",6)(10,"label",7),e._uU(11,"Email"),e.qZA(),e._UZ(12,"input",8,9),e.YNc(14,b,3,2,"ng-container",10),e.qZA(),e.TgZ(15,"div",6)(16,"label",11),e._uU(17,"Password"),e.qZA(),e._UZ(18,"input",12,13),e.YNc(20,v,3,2,"ng-container",10),e.qZA(),e.TgZ(21,"button",14),e._uU(22,"Login"),e.qZA()(),e.TgZ(23,"p",15),e._uU(24,"If you are not registered, please "),e.TgZ(25,"a",16),e._uU(26,"Register here"),e.qZA(),e._uU(27,". "),e.qZA()()()}if(2&t){const r=e.MAs(8),g=e.MAs(13),c=e.MAs(19);e.xp6(3),e.Oqu(o.loginMessage),e.xp6(11),e.Q6J("ngIf",g.touched),e.xp6(6),e.Q6J("ngIf",c.touched),e.xp6(1),e.Q6J("disabled",r.invalid)}},dependencies:[m.O5,l.rH,s._Y,s.Fj,s.JJ,s.JL,s.Q7,s.wO,s.On,s.F],styles:[".content[_ngcontent-%COMP%]{max-width:800px;margin:218px auto;padding:20px;background-color:#fff;box-shadow:0 2px 4px #0000001a;flex:1}.login-form[_ngcontent-%COMP%]{max-width:400px;margin:0 auto}.login-form[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:24px;font-weight:700;margin-bottom:20px;text-align:center}.form-group[_ngcontent-%COMP%]{margin-bottom:20px}.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{display:block;font-weight:700;margin-bottom:5px}.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:100%;padding:10px;border:1px solid #ccc;border-radius:4px;font-size:16px}.button[_ngcontent-%COMP%]{display:block;width:100%;padding:10px;background-color:#f8c291;color:#fff;text-decoration:none;font-size:16px;border:none;transition:background-color .3s ease;border-radius:50px}.button[_ngcontent-%COMP%]:hover{background-color:#ff9f4d}.register-prompt[_ngcontent-%COMP%]{text-align:center;margin-top:10px;font-size:14px}.register-prompt[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#f8c291;text-decoration:none;transition:color .3s ease}.register-prompt[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#ff9f4d}.error[_ngcontent-%COMP%]{color:red;font-size:14px}.loginMessage[_ngcontent-%COMP%]{color:red;font-size:14px;text-align:center}"]}),n})();function P(n,i){return t=>{const o=t,r=o.get(n),g=o.get(i);return r?.value===g?.value?null:{matchPasswordsValidator:!0}}}function T(n,i){1&n&&(e.TgZ(0,"p",21),e._uU(1,"First name is required!"),e.qZA())}function O(n,i){1&n&&(e.TgZ(0,"p",21),e._uU(1,"First name must be at least 5 characters!"),e.qZA())}function k(n,i){if(1&n&&(e.ynx(0),e.YNc(1,T,2,0,"p",20),e.YNc(2,O,2,0,"p",20),e.BQk()),2&n){const t=e.oxw();let o,r;e.xp6(1),e.Q6J("ngIf",null==(o=t.form.get("firstName"))||null==o.errors?null:o.errors.required),e.xp6(1),e.Q6J("ngIf",null==(r=t.form.get("firstName"))||null==r.errors?null:r.errors.minlength)}}function q(n,i){1&n&&(e.TgZ(0,"p",21),e._uU(1,"Last name is required!"),e.qZA())}function U(n,i){1&n&&(e.TgZ(0,"p",21),e._uU(1,"Last name must be at least 5 characters!"),e.qZA())}function A(n,i){if(1&n&&(e.ynx(0),e.YNc(1,q,2,0,"p",20),e.YNc(2,U,2,0,"p",20),e.BQk()),2&n){const t=e.oxw();let o,r;e.xp6(1),e.Q6J("ngIf",null==(o=t.form.get("lastName"))||null==o.errors?null:o.errors.required),e.xp6(1),e.Q6J("ngIf",null==(r=t.form.get("lastName"))||null==r.errors?null:r.errors.minlength)}}function I(n,i){1&n&&(e.TgZ(0,"p",21),e._uU(1,"Email is required!"),e.qZA())}function y(n,i){1&n&&(e.TgZ(0,"p",21),e._uU(1,"Email must be at least 5 characters!"),e.qZA())}function N(n,i){if(1&n&&(e.ynx(0),e.YNc(1,I,2,0,"p",20),e.YNc(2,y,2,0,"p",20),e.BQk()),2&n){const t=e.oxw();let o,r;e.xp6(1),e.Q6J("ngIf",null==(o=t.form.get("email"))||null==o.errors?null:o.errors.required),e.xp6(1),e.Q6J("ngIf",null==(r=t.form.get("email"))||null==r.errors?null:r.errors.minlength)}}function J(n,i){1&n&&(e.TgZ(0,"p",21),e._uU(1,"Password is required!"),e.qZA())}function Q(n,i){1&n&&(e.TgZ(0,"p",21),e._uU(1,"Password must be at least 5 characters!"),e.qZA())}function L(n,i){if(1&n&&(e.ynx(0),e.YNc(1,J,2,0,"p",20),e.YNc(2,Q,2,0,"p",20),e.BQk()),2&n){const t=e.oxw();let o,r;e.xp6(1),e.Q6J("ngIf",null==(o=t.form.get("password"))||null==o.errors?null:o.errors.required),e.xp6(1),e.Q6J("ngIf",null==(r=t.form.get("password"))||null==r.errors?null:r.errors.minlength)}}function Y(n,i){1&n&&(e.TgZ(0,"p",21),e._uU(1,"Repeat Password is required!"),e.qZA())}function R(n,i){1&n&&(e.TgZ(0,"p",21),e._uU(1,"Password don't match!"),e.qZA())}function B(n,i){if(1&n&&(e.ynx(0),e.YNc(1,Y,2,0,"p",20),e.YNc(2,R,2,0,"p",20),e.BQk()),2&n){const t=e.oxw();let o;e.xp6(1),e.Q6J("ngIf",null==(o=t.form.get("passwordConfirm"))||null==o.errors?null:o.errors.required),e.xp6(1),e.Q6J("ngIf",null==t.form.errors?null:t.form.errors.matchPasswordsValidator)}}let S=(()=>{class n{constructor(t,o,r){this.fb=t,this.userService=o,this.router=r,this.form=this.fb.group({firstName:["",[s.kI.required,s.kI.minLength(5)]],lastName:["",[s.kI.required,s.kI.minLength(5)]],email:["",[s.kI.required,s.kI.minLength(5)]],password:["",[s.kI.required,s.kI.minLength(5)]],passwordConfirm:["",[s.kI.required]],validators:[P("password","passwordConfirm")]})}register(){if(this.form.invalid)return;const t=Object.assign(this.form.value,{email:this.form.value.email});this.userService.register(t).then(o=>{this.router.navigate(["/auth/login"])}).catch(o=>{this.registerMessage=o.message,setTimeout(()=>{this.registerMessage=void 0},3e3)})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(s.qu),e.Y36(u.R),e.Y36(l.F0))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-register"]],decls:40,vars:8,consts:[[1,"content"],[1,"register-form"],[1,"registerMessage"],[1,"message"],[1,"register",3,"formGroup","ngSubmit"],[1,"form-group"],["for","firstname"],["type","text","id","firstname","name","firstName","formControlName","firstName"],[4,"ngIf"],["for","lastname"],["type","text","id","lastname","name","lastName","formControlName","lastName"],["for","email"],["type","text","id","username","name","email","formControlName","email"],["for","password"],["type","password","id","password","name","password","formControlName","password"],["for","password-confirm"],["type","password","id","password-confirm","name","passwordConfirm","formControlName","passwordConfirm"],["type","submit",1,"button",3,"disabled"],[1,"login-prompt"],["routerLink","/auth/login"],["class","error",4,"ngIf"],[1,"error"]],template:function(t,o){if(1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"p",3),e._uU(4),e.qZA()(),e.TgZ(5,"h2"),e._uU(6,"Register"),e.qZA(),e.TgZ(7,"form",4),e.NdJ("ngSubmit",function(){return o.register()}),e.TgZ(8,"div",5)(9,"label",6),e._uU(10,"First Name"),e.qZA(),e._UZ(11,"input",7),e.YNc(12,k,3,2,"ng-container",8),e.qZA(),e.TgZ(13,"div",5)(14,"label",9),e._uU(15,"Last Name"),e.qZA(),e._UZ(16,"input",10),e.YNc(17,A,3,2,"ng-container",8),e.qZA(),e.TgZ(18,"div",5)(19,"label",11),e._uU(20,"Email"),e.qZA(),e._UZ(21,"input",12),e.YNc(22,N,3,2,"ng-container",8),e.qZA(),e.TgZ(23,"div",5)(24,"label",13),e._uU(25,"Password"),e.qZA(),e._UZ(26,"input",14),e.YNc(27,L,3,2,"ng-container",8),e.qZA(),e.TgZ(28,"div",5)(29,"label",15),e._uU(30,"Confirm Password"),e.qZA(),e._UZ(31,"input",16),e.YNc(32,B,3,2,"ng-container",8),e.qZA(),e.TgZ(33,"button",17),e._uU(34,"Register"),e.qZA()(),e.TgZ(35,"p",18),e._uU(36,"If you are already registered, please "),e.TgZ(37,"a",19),e._uU(38,"Login here"),e.qZA(),e._uU(39,"."),e.qZA()()()),2&t){let r,g,c,_,x;e.xp6(4),e.Oqu(o.registerMessage),e.xp6(3),e.Q6J("formGroup",o.form),e.xp6(5),e.Q6J("ngIf",null==(r=o.form.get("firstName"))?null:r.touched),e.xp6(5),e.Q6J("ngIf",null==(g=o.form.get("lastName"))?null:g.touched),e.xp6(5),e.Q6J("ngIf",null==(c=o.form.get("email"))?null:c.touched),e.xp6(5),e.Q6J("ngIf",null==(_=o.form.get("password"))?null:_.touched),e.xp6(5),e.Q6J("ngIf",null==(x=o.form.get("passwordConfirm"))?null:x.touched),e.xp6(1),e.Q6J("disabled",o.form.invalid)}},dependencies:[m.O5,l.rH,s._Y,s.Fj,s.JJ,s.JL,s.sg,s.u],styles:[".content[_ngcontent-%COMP%]{max-width:800px;margin:82px auto;padding:20px;background-color:#fff;box-shadow:0 2px 4px #0000001a;flex:1;display:flex;flex-direction:column;justify-content:center;align-items:center}.register-form[_ngcontent-%COMP%]{max-width:400px;margin-bottom:20px}.register-form[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:24px;font-weight:700;margin-bottom:20px;text-align:center}.form-group[_ngcontent-%COMP%]{margin-bottom:20px}.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{display:block;font-weight:700;margin-bottom:5px}.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:100%;padding:10px;border:1px solid #ccc;border-radius:4px;font-size:16px}.button[_ngcontent-%COMP%]{display:block;width:100%;padding:10px;background-color:#f8c291;color:#fff;text-decoration:none;font-size:16px;border:none;transition:background-color .3s ease;border-radius:50px}.button[_ngcontent-%COMP%]:hover{background-color:#ff9f4d}.login-prompt[_ngcontent-%COMP%]{text-align:center;margin-top:10px;font-size:14px}.login-prompt[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#f8c291;text-decoration:none;transition:color .3s ease}.login-prompt[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#ff9f4d}.error[_ngcontent-%COMP%]{color:red;font-size:14px}.registerMessage[_ngcontent-%COMP%]{color:red;font-size:14px;text-align:center}"]}),n})();var d=a(752),E=a(7398),p=a(6825),F=a(393),z=a(8556);function j(n,i){1&n&&(e.TgZ(0,"div"),e._UZ(1,"app-loader"),e.qZA())}function G(n,i){if(1&n&&(e.TgZ(0,"div",14)(1,"a",15),e._UZ(2,"img",16),e.qZA()()),2&n){const t=i.$implicit;e.Q6J("@usersBooks",void 0),e.xp6(1),e.MGl("routerLink","../../books/",t.id,""),e.xp6(1),e.s9C("src",t.image,e.LSH)}}function H(n,i){if(1&n){const t=e.EpF();e.TgZ(0,"div",4)(1,"div",5)(2,"div",6),e._UZ(3,"img",7),e.qZA(),e.TgZ(4,"div",8)(5,"h2",9),e._uU(6),e.qZA()()(),e.TgZ(7,"button",10),e.NdJ("click",function(){e.CHM(t);const r=e.oxw();return e.KtG(r.toggleEditMode())}),e._uU(8,"Edit"),e.qZA(),e.TgZ(9,"div",11)(10,"h2"),e._uU(11,"Owner's Books"),e.qZA(),e.TgZ(12,"div",12),e.YNc(13,G,3,3,"div",13),e.qZA()()()}if(2&n){const t=e.oxw();e.xp6(6),e.hij("Email: ",t.profileDetails.email,""),e.xp6(7),e.Q6J("ngForOf",t.ownerBooks)}}function D(n,i){1&n&&(e.TgZ(0,"div",4)(1,"div",5)(2,"div",6),e._UZ(3,"img",7),e.qZA(),e.TgZ(4,"div",8)(5,"h2",9),e._uU(6,"Email: "),e._UZ(7,"input",17),e.qZA()()(),e.TgZ(8,"button",18),e._uU(9,"Save"),e.qZA()())}const V=[{path:"login",component:w},{path:"register",component:S},{path:"profile",component:(()=>{class n{constructor(t,o,r){this.fb=t,this.userService=o,this.bookService=r,this.isEditMode=!1,this.booksList=[],this.ownerBooks=[],this.isLoading=!0,this.profileDetails={email:"",userId:""},this.form=this.fb.group({email:["",[s.kI.required,s.kI.minLength(5)]],userId:["",[s.kI.required,s.kI.minLength(5)]]})}ngOnInit(){let t=this.userService.currentUser,o=t.email,r=t.uid;this.profileDetails={email:o,userId:r},this.form.setValue({email:o,userId:r})}ngAfterViewInit(){this.getBooks()}toggleEditMode(){this.isEditMode=!this.isEditMode}submit(){if(this.form.invalid)return;this.profileDetails={...this.form.value};const{email:t}=this.profileDetails,r=(0,d.v0)();r.currentUser&&(0,d.s)(r.currentUser,t).then(()=>{this.toggleEditMode()})}getBooks(){this.bookService.getBooks().pipe((0,E.U)(t=>{const o=[];for(const r in t)t.hasOwnProperty(r)&&o.push({...t[r],id:r});return o})).subscribe(t=>{this.isLoading=!1,this.booksList=t,this.booksList.map(o=>{o.userId===this.profileDetails.userId&&this.ownerBooks.push(o)})})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(s.qu),e.Y36(u.R),e.Y36(F.Z))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-profile"]],decls:8,vars:4,consts:[[4,"ngIf"],["action",""],["class","content",4,"ngIf"],[3,"formGroup","ngSubmit"],[1,"content"],[1,"profile"],[1,"profile-image"],["src","../../../assets/profile.png","alt","Profile Picture"],[1,"profile-info"],[1,"profile-email"],[1,"button",3,"click"],[1,"content-book"],[1,"owner-books-container"],["class","owner-books",4,"ngFor","ngForOf"],[1,"owner-books"],[3,"routerLink"],["alt","",3,"src"],["type","text","id","email","formControlName","email"],["type","submit",1,"button"]],template:function(t,o){1&t&&(e.YNc(0,j,2,0,"div",0),e.TgZ(1,"body"),e.ynx(2),e.TgZ(3,"form",1),e.YNc(4,H,14,2,"div",2),e.qZA(),e.BQk(),e.ynx(5),e.TgZ(6,"form",3),e.NdJ("ngSubmit",function(){return o.submit()}),e.YNc(7,D,10,0,"div",2),e.qZA(),e.BQk(),e.qZA()),2&t&&(e.Q6J("ngIf",o.isLoading),e.xp6(4),e.Q6J("ngIf",!o.isEditMode),e.xp6(2),e.Q6J("formGroup",o.form),e.xp6(1),e.Q6J("ngIf",o.isEditMode))},dependencies:[m.sg,m.O5,l.rH,s._Y,s.Fj,s.JJ,s.JL,s.F,s.sg,s.u,z.R],styles:[".content[_ngcontent-%COMP%]{max-width:800;max-height:500;text-align:center;padding:20px;background-color:#fff;box-shadow:0 2px 4px #0000001a}.profile[_ngcontent-%COMP%]{display:flex;align-items:center;padding:20px}.profile-image[_ngcontent-%COMP%]{flex:1}.profile-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:150px;height:150px;border-radius:50%}.profile-info[_ngcontent-%COMP%]{flex:2;text-align:left}.profile-name[_ngcontent-%COMP%]{font-size:24px;font-weight:700;margin-bottom:10px}.profile-email[_ngcontent-%COMP%]{font-size:18px}@media screen and (max-width: 600px){.profile[_ngcontent-%COMP%]{flex-direction:column}.profile-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin-bottom:10px}}.button[_ngcontent-%COMP%]{display:block;width:100%;padding:10px;background-color:#f8c291;color:#fff;text-decoration:none;font-size:16px;border:none;transition:background-color .3s ease;border-radius:50px}.button[_ngcontent-%COMP%]:hover{background-color:#ff9f4d}.owner-books-container[_ngcontent-%COMP%]{display:flex;justify-content:space-between;flex-wrap:wrap}.owner-books[_ngcontent-%COMP%]{width:calc(33.33% - 10px);margin-bottom:20px}.owner-books[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;max-width:100%;height:auto;display:block;border-radius:4px;box-shadow:0 2px 4px #0000001a}.profile-username[_ngcontent-%COMP%]{font-size:18px}"],data:{animation:[(0,p.X$)("usersBooks",[(0,p.SB)("in",(0,p.oB)({opacity:1,transform:"translateY(0)"})),(0,p.eR)("void => *",[(0,p.oB)({opacity:0,transform:"translateY(200px)"}),(0,p.jt)(500)])])]}}),n})()}];let X=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[l.Bz.forChild(V),l.Bz]}),n})();var K=a(6208);let $=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[m.ez,X,s.u5,s.UX,K.m]}),n})()}}]);