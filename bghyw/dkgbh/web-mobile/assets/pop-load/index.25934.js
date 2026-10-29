System.register("chunks:///_virtual/pop-load",["./PopLoad.ts"],(function(){return{setters:[null],execute:function(){}}}));

System.register("chunks:///_virtual/PopLoad.ts",["./rollupPluginModLoBabelHelpers.js","cc","./BaseView.ts","./app.ts","./GameConfig.ts","./modeConfig.ts","./platform.ts"],(function(o){var e,n,t,i,a,r,c,d,f,u,s;return{setters:[function(o){e=o.inheritsLoose},function(o){n=o.cclegacy,t=o._decorator},function(o){i=o.default},function(o){a=o.app},function(o){r=o.GameConfig},function(o){c=o.cl_modeConfig,d=o.gameMode,f=o.chaoticType},function(o){u=o.PlatformHelper,s=o.PlatformType}],execute:function(){var m;n._RF.push({},"fcfcb3Oqs5AK5cAMFqXkdeU","PopLoad",void 0);var l=t.ccclass;t.property,o("PopLoad",l("PopLoad")(m=function(o){function n(){return o.apply(this,arguments)||this}e(n,o);var t=n.prototype;return t.onLoad=function(){this.node.children[0].getChildByName("tip").active=u.platformType==s.MINI_GAME_BYTE},t.onShow=function(o){var e,n=!1;if(o.info){var t=o;e=t.info,n=!!t.fromAlbum}else e=o;r.fromAlbum=n;var i=c.modeToLevelList.get(e.mode);if(i){var u=i[e.index];if(u){r.levelInfo=u,r.nowMode=e.mode,e.mode===d.huazhuang&&(r.nowChaotic=f.suggestLevel2);var s=c.chaoticLevels.get(r.nowChaotic);s?r.chaoticIndex=s.findIndex((function(o){return o.mode===e.mode&&o.index===e.index})):console.error("[PopLoad.onShow] chaoticLevels 未注册 nowChaotic=",r.nowChaotic),setTimeout((function(){a.manager.ui.show({name:"PageGame",data:u})}),50)}else console.error("[PopLoad.onShow] 关卡不存在 mode=",e.mode," index=",e.index,"，列表长度=",i.length)}else console.error("[PopLoad.onShow] modeToLevelList 未注册 mode=",e.mode,"，请检查 modeConfig.ts")},t.onHide=function(o){return setTimeout((function(){r.fromAlbum=!1}),1500),r.noTimeWatchCount<2&&0==r.fromAlbum&&(r.noTime=!1),o},n}(i))||m);n._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/pop-load', 'chunks:///_virtual/pop-load'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});