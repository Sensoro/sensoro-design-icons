"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[9],{33546:function(M,u,e){e.r(u);var o=e(35329),n=e(75271),D=e(11714),L=e(11588),_=function(){var p=(0,o.useParams)(),a=p.id,t=(0,o.useDemo)(a),O=(0,D.m)({id:a,component:t.component,renderOpts:t.renderOpts}),P=O.canvasRef,m=t||{},v=m.component,d=m.renderOpts,r=(0,o.useLiveDemo)(a),s=r.node,l=r.setSource,i=r.error,c=r.loading,R=s||(d!=null&&d.renderer?(0,n.createElement)("div",{ref:P}):v&&(0,n.createElement)(v));return(0,n.useEffect)(function(){var f=function(E){E.data.type==="dumi.liveDemo.setSource"&&l(E.data.value)};return window.addEventListener("message",f),function(){return window.removeEventListener("message",f)}},[l]),(0,n.useEffect)(function(){!c&&(i||s)&&window.postMessage({type:"dumi.liveDemo.compileDone",value:{err:i}})},[i,s,c]),R};u.default=_}}]);