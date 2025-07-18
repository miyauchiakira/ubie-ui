import{j as e}from"./jsx-runtime-DuyR_K1q.js";import{r as o}from"./index-yUhCOHB4.js";import{c}from"./clsx-B-dksMZM.js";import{u as ue,X as le,P as ie,L as A,$ as ce,V as de,j as pe}from"./VisuallyHidden-EwnkIPnb.js";import{o as me}from"./style-BnM3_UOs.js";import{B as Ce}from"./Button-WzB1p4q0.js";import"./index-DGmQaTsW.js";import"./component-NUmYR5Q2.js";import"./useIcon-157WwO_k.js";import"./Icon-ULdndk7k.js";import"./ArrowBDownIcon-DhMIqqai.js";import"./UnfoldMoreIcon-BpmwIn3S.js";const fe="_modal_1e1kn_1",ye="_overlay_1e1kn_8",ge="_normalOverlay_1e1kn_13",he="_darkerOverlay_1e1kn_17",be="_contents_1e1kn_21",ve="_dialog_1e1kn_25",Fe="_fullscreen_1e1kn_43",ke="_scrollContainer_1e1kn_47",_e="_mainContent_1e1kn_52",Ee="_headerLess_1e1kn_61",Be="_header_1e1kn_61",Ae="_sticky_1e1kn_78",xe="_canScroll_1e1kn_86",Oe="_body_1e1kn_90",Me="_buttonContainer_1e1kn_101",je="_overlayEnter_1e1kn_117",Le="_overlayEnterFrom_1e1kn_123",Se="_overlayEnterTo_1e1kn_127",He="_overlayLeave_1e1kn_131",De="_overlayLeaveFrom_1e1kn_136",Ie="_overlayLeaveTo_1e1kn_140",Te="_panelEnter_1e1kn_144",we="_panelEnterFrom_1e1kn_150",Ne="_panelEnterTo_1e1kn_155",Ve="_panelLeave_1e1kn_160",qe="_panelLeaveFrom_1e1kn_165",Re="_panelLeaveTo_1e1kn_170",a={modal:fe,overlay:ye,normalOverlay:ge,darkerOverlay:he,contents:be,dialog:ve,fullscreen:Fe,scrollContainer:ke,mainContent:_e,headerLess:Ee,header:Be,sticky:Ae,canScroll:xe,body:Oe,buttonContainer:Me,overlayEnter:je,overlayEnterFrom:Le,overlayEnterTo:Se,overlayLeave:He,overlayLeaveFrom:De,overlayLeaveTo:Ie,panelEnter:Te,panelEnterFrom:we,panelEnterTo:Ne,panelLeave:Ve,panelLeaveFrom:qe,panelLeaveTo:Re},u=({children:t,onClose:s,header:n,closeLabel:r="閉じる",overlayOpacity:i="normal",showClose:_=!0,open:Q=!0,isStatic:Y=!1,fullscreen:d=!1,ariaLabelledby:p,hero:m,stickyHeader:Z=!1,stickyFooter:ee=!1,...ne})=>{const ae=me(i),E=o.useRef(null),oe=o.useCallback(C=>{C!==null&&n==null&&p!=null?C.setAttribute("aria-labelledby",p):C!==null&&n==null&&p==null&&C.removeAttribute("aria-labelledby")},[p,n]),{scrollContainerRef:te,canScrollUp:se,canScrollDown:re}=ue();return e.jsx(le,{show:Q,children:e.jsxs(ie,{ref:oe,static:Y,onClose:s,className:c(a.modal,d&&a.fullscreen),initialFocus:E,...ne,children:[e.jsx(A,{as:o.Fragment,enter:a.overlayEnter,enterFrom:a.overlayEnterFrom,enterTo:a.overlayEnterTo,leave:a.overlayLeave,leaveFrom:a.overlayLeaveFrom,leaveTo:a.overlayLeaveTo,children:e.jsx("div",{className:c(a.overlay,a[ae])})}),e.jsx(A,{as:o.Fragment,enter:a.panelEnter,enterFrom:a.panelEnterFrom,enterTo:a.panelEnterTo,leave:a.panelLeave,leaveFrom:a.panelLeaveFrom,leaveTo:a.panelLeaveTo,children:e.jsxs(ce,{className:c(a.dialog,{[a.fullscreen]:d}),children:[n===void 0?e.jsx(de,{as:"p",tabIndex:-1,ref:E,children:"ダイアログ"}):null,e.jsx("div",{className:a.scrollContainer,ref:te,children:e.jsxs("div",{className:c(a.mainContent,{[a.headerLess]:n===void 0&&m===void 0,[a.fullscreen]:d}),children:[m!==void 0?e.jsx("div",{className:a.hero,children:m}):null,n!==void 0?e.jsx(pe,{tabIndex:-1,ref:E,className:c(a.header,!m&&Z&&a.sticky,se&&a.canScroll),children:n}):null,e.jsx("div",{className:c(a.body,{[a.fullscreen]:d}),children:t}),e.jsx("div",{className:c(a.buttonContainer,_&&ee&&a.sticky,_&&re&&a.canScroll),children:_&&e.jsx(Ce,{variant:"primary",onClick:s,"aria-label":r,children:r})})]})})]})})]})})};try{u.displayName="MessageHalfModal",u.__docgenInfo={description:"",displayName:"MessageHalfModal",props:{onClose:{defaultValue:null,description:"閉じるアクションが実行された場合のコールバック",name:"onClose",required:!0,type:{name:"() => void"}},header:{defaultValue:null,description:"ヘッダーに表示する見出しテキスト",name:"header",required:!1,type:{name:"string"}},closeLabel:{defaultValue:{value:"閉じる"},description:"閉じるボタンのラベル",name:"closeLabel",required:!1,type:{name:"string"}},overlayOpacity:{defaultValue:{value:"normal"},description:"オーバーレイの透過度",name:"overlayOpacity",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"darker"'}]}},showClose:{defaultValue:{value:"true"},description:"閉じるボタンを表示するかどうか",name:"showClose",required:!1,type:{name:"boolean"}},open:{defaultValue:{value:"true"},description:"モーダルを開くかどうか",name:"open",required:!1,type:{name:"boolean"}},isStatic:{defaultValue:{value:"false"},description:"openを無視してモーダルを開いたままにするか。アニメーションライブラリとの連携で、ActionHalfModal自身が開閉に関与しない場合に使用",name:"isStatic",required:!1,type:{name:"boolean"}},fullscreen:{defaultValue:{value:"false"},description:"モーダルをフルスクリーンで表示する",name:"fullscreen",required:!1,type:{name:"boolean"}},id:{defaultValue:null,description:"ネイティブ要素のid属性。ページで固有のIDを指定",name:"id",required:!1,type:{name:"string"}},ariaLabelledby:{defaultValue:null,description:"ネイティブのaria-labelledby属性。独自の見出しを実装する場合にダイアログとの紐づけに使用。ページで固有のIDを指定",name:"ariaLabelledby",required:!1,type:{name:"string"}},hero:{defaultValue:null,description:"ヒーローエリア（見出しの更に上）に配置するコンテンツ",name:"hero",required:!1,type:{name:"ReactNode"}},stickyHeader:{defaultValue:{value:"false"},description:`ヘッダーを固定表示
heroが指定されている場合は無効`,name:"stickyHeader",required:!1,type:{name:"boolean"}},stickyFooter:{defaultValue:{value:"false"},description:"フッターを固定表示",name:"stickyFooter",required:!1,type:{name:"boolean"}}}}}catch{}const en={title:"Modal/MessageHalfModal",component:u},B=()=>e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}),e.jsx("p",{children:'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.'})]}),l={header:"モーダル",children:e.jsx(B,{}),stickyHeader:!1,stickyFooter:!1},f={render:t=>{const[s,n]=o.useState(!0),r=o.useCallback(()=>{n(!1)},[]);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>n(!0),children:"Open Modal"}),e.jsx(u,{...t,open:s,onClose:r})]})},args:l},y={render:t=>{const[s,n]=o.useState(!1),r=o.useCallback(()=>{n(!1)},[]);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>n(!0),children:"Open Modal"}),e.jsx(u,{...t,open:s,onClose:r,fullscreen:!0})]})},args:l},g={render:t=>{const[s,n]=o.useState(!1),r=o.useCallback(()=>{n(!1)},[]);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>n(!0),children:"Open Modal"}),e.jsx(u,{showClose:!1,...t,open:s,onClose:r})]})},args:l},h={render:t=>{const[s,n]=o.useState(!1),r=o.useCallback(()=>{n(!1)},[]);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>n(!0),children:"Open Modal"}),e.jsx(u,{...t,open:s,onClose:r})]})},args:{...l,"data-test-id":"message-half-modal-custom"}},b={render:t=>{const[s,n]=o.useState(!1),r=o.useCallback(()=>{n(!1)},[]);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>n(!0),children:"Open Modal"}),e.jsx(u,{...t,open:s,onClose:r})]})},args:{...l,id:"dialog-id"}},v={render:t=>{const[s,n]=o.useState(!1),r=o.useCallback(()=>{n(!1)},[]),i="header-id";return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>n(!0),children:"Open Modal"}),e.jsxs(u,{ariaLabelledby:i,...t,open:s,onClose:r,children:[e.jsx("h2",{id:i,children:"Heading"}),e.jsx(B,{})]})]})},args:{...l,header:void 0}},F={render:t=>{const[s,n]=o.useState(!1),r=o.useCallback(()=>{n(!1)},[]),i="header-id";return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>n(!0),children:"Open Modal"}),e.jsxs(u,{hero:e.jsx("img",{src:"/images/placeholder.svg",alt:"Illustration: Modal",style:{width:"100%",height:"auto",verticalAlign:"bottom"},width:560,height:315}),ariaLabelledby:i,...t,open:s,onClose:r,children:[e.jsx("h2",{id:i,children:"Heading"}),e.jsx(B,{})]})]})},args:{...l,header:void 0}},k={render:t=>{const[s,n]=o.useState(!0),r=o.useCallback(()=>{n(!1)},[]);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>n(!0),children:"Open Modal"}),e.jsx(u,{...t,open:s,onClose:r})]})},args:{...l,stickyHeader:!0,stickyFooter:!0}};var x,O,M;f.parameters={...f.parameters,docs:{...(x=f.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(true);
    const onClose = useCallback(() => {
      setOpen(false);
    }, []);
    return <>
        <button type="button" onClick={() => setOpen(true)}>
          Open Modal
        </button>
        <MessageHalfModal {...args} open={open} onClose={onClose} />
      </>;
  },
  args: defaultArgs
}`,...(M=(O=f.parameters)==null?void 0:O.docs)==null?void 0:M.source}}};var j,L,S;y.parameters={...y.parameters,docs:{...(j=y.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(false);
    const onClose = useCallback(() => {
      setOpen(false);
    }, []);
    return <>
        <button type="button" onClick={() => setOpen(true)}>
          Open Modal
        </button>
        <MessageHalfModal {...args} open={open} onClose={onClose} fullscreen />
      </>;
  },
  args: defaultArgs
}`,...(S=(L=y.parameters)==null?void 0:L.docs)==null?void 0:S.source}}};var H,D,I;g.parameters={...g.parameters,docs:{...(H=g.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(false);
    const onClose = useCallback(() => {
      setOpen(false);
    }, []);
    return <>
        <button type="button" onClick={() => setOpen(true)}>
          Open Modal
        </button>
        <MessageHalfModal showClose={false} {...args} open={open} onClose={onClose} />
      </>;
  },
  args: defaultArgs
}`,...(I=(D=g.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};var T,w,N;h.parameters={...h.parameters,docs:{...(T=h.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(false);
    const onClose = useCallback(() => {
      setOpen(false);
    }, []);
    return <>
        <button type="button" onClick={() => setOpen(true)}>
          Open Modal
        </button>
        <MessageHalfModal {...args} open={open} onClose={onClose} />
      </>;
  },
  args: {
    ...defaultArgs,
    'data-test-id': 'message-half-modal-custom'
  }
}`,...(N=(w=h.parameters)==null?void 0:w.docs)==null?void 0:N.source}}};var V,q,R;b.parameters={...b.parameters,docs:{...(V=b.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(false);
    const onClose = useCallback(() => {
      setOpen(false);
    }, []);
    return <>
        <button type="button" onClick={() => setOpen(true)}>
          Open Modal
        </button>
        <MessageHalfModal {...args} open={open} onClose={onClose} />
      </>;
  },
  args: {
    ...defaultArgs,
    id: 'dialog-id'
  }
}`,...(R=(q=b.parameters)==null?void 0:q.docs)==null?void 0:R.source}}};var W,P,X;v.parameters={...v.parameters,docs:{...(W=v.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(false);
    const onClose = useCallback(() => {
      setOpen(false);
    }, []);
    const headerId = 'header-id';
    return <>
        <button type="button" onClick={() => setOpen(true)}>
          Open Modal
        </button>
        <MessageHalfModal ariaLabelledby={headerId} {...args} open={open} onClose={onClose}>
          <h2 id={headerId}>Heading</h2>
          <LongBody />
        </MessageHalfModal>
      </>;
  },
  args: {
    ...defaultArgs,
    header: undefined
  }
}`,...(X=(P=v.parameters)==null?void 0:P.docs)==null?void 0:X.source}}};var $,G,U;F.parameters={...F.parameters,docs:{...($=F.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(false);
    const onClose = useCallback(() => {
      setOpen(false);
    }, []);
    const headerId = 'header-id';
    return <>
        <button type="button" onClick={() => setOpen(true)}>
          Open Modal
        </button>
        <MessageHalfModal hero={<img src="/images/placeholder.svg" alt="Illustration: Modal" style={{
        width: '100%',
        height: 'auto',
        verticalAlign: 'bottom'
      }} width={560} height={315} />} ariaLabelledby={headerId} {...args} open={open} onClose={onClose}>
          <h2 id={headerId}>Heading</h2>
          <LongBody />
        </MessageHalfModal>
      </>;
  },
  args: {
    ...defaultArgs,
    header: undefined
  }
}`,...(U=(G=F.parameters)==null?void 0:G.docs)==null?void 0:U.source}}};var z,J,K;k.parameters={...k.parameters,docs:{...(z=k.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(true);
    const onClose = useCallback(() => {
      setOpen(false);
    }, []);
    return <>
        <button type="button" onClick={() => setOpen(true)}>
          Open Modal
        </button>
        <MessageHalfModal {...args} open={open} onClose={onClose} />
      </>;
  },
  args: {
    ...defaultArgs,
    stickyHeader: true,
    stickyFooter: true
  }
}`,...(K=(J=k.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};const nn=["Default","Fullscreen","NoCloseButton","WithCustomDataAttribute","WithId","CustomHeader","WithHero","StickyHeaderAndFooter"];export{v as CustomHeader,f as Default,y as Fullscreen,g as NoCloseButton,k as StickyHeaderAndFooter,h as WithCustomDataAttribute,F as WithHero,b as WithId,nn as __namedExportsOrder,en as default};
