import{j as e}from"./jsx-runtime-DuyR_K1q.js";import{r as o}from"./index-yUhCOHB4.js";import{c as l}from"./clsx-B-dksMZM.js";import{u as oe,X as ne,P as ue,$ as le,V as ie,j as de}from"./VisuallyHidden-EwnkIPnb.js";import{o as ce}from"./style-BnM3_UOs.js";import{B as pe}from"./Button-WzB1p4q0.js";import"./index-DGmQaTsW.js";import"./component-NUmYR5Q2.js";import"./useIcon-157WwO_k.js";import"./Icon-ULdndk7k.js";import"./ArrowBDownIcon-DhMIqqai.js";import"./UnfoldMoreIcon-BpmwIn3S.js";const me="_modal_1wwix_1",ge="_overlay_1wwix_10",fe="_normalOverlay_1wwix_15",he="_darkerOverlay_1wwix_19",ye="_dialog_1wwix_23",Ce="_fixedHeight_1wwix_37",xe="_scrollContainer_1wwix_41",be="_mainContent_1wwix_46",Fe="_headerLess_1wwix_56",_e="_header_1wwix_56",ve="_sticky_1wwix_73",Ae="_canScroll_1wwix_81",Ee="_body_1wwix_85",Oe="_hero_1wwix_97",Be="_footer_1wwix_102",we="_panelEnter_1wwix_116",ke="_panelEnterFrom_1wwix_122",Me="_panelEnterTo_1wwix_126",je="_panelLeave_1wwix_130",Se="_panelLeaveFrom_1wwix_135",De="_panelLeaveTo_1wwix_139",r={modal:me,overlay:ge,normalOverlay:fe,darkerOverlay:he,dialog:ye,fixedHeight:Ce,scrollContainer:xe,mainContent:be,headerLess:Fe,header:_e,sticky:ve,canScroll:Ae,body:Ee,hero:Oe,footer:Be,panelEnter:we,panelEnterFrom:ke,panelEnterTo:Me,panelLeave:je,panelLeaveFrom:Se,panelLeaveTo:De},n=({header:a,children:s,onClose:t,overlayOpacity:i="normal",closeLabel:v="閉じる",fixedHeight:F=!1,open:J=!0,isStatic:K=!1,ariaLabelledby:d,hero:c,stickyHeader:Q=!1,stickyFooter:Y=!1,...Z})=>{const ee=ce(i),_=o.useRef(null),te=o.useCallback(p=>{p!==null&&a==null&&d!=null?p.setAttribute("aria-labelledby",d):p!==null&&a==null&&d==null&&p.removeAttribute("aria-labelledby")},[d,a]),{scrollContainerRef:ae,canScrollUp:re,canScrollDown:se}=oe();return e.jsx(ne,{show:J,as:o.Fragment,enter:r.panelEnter,enterFrom:r.panelEnterFrom,enterTo:r.panelEnterTo,leave:r.panelLeave,leaveFrom:r.panelLeaveFrom,leaveTo:r.panelLeaveTo,children:e.jsxs(ue,{ref:te,static:K,onClose:t,className:r.modal,initialFocus:_,...Z,children:[e.jsx("div",{className:l(r.overlay,r[ee])}),e.jsxs(le,{className:l(r.dialog,{[r.fixedHeight]:F}),children:[a===void 0?e.jsx(ie,{as:"p",tabIndex:-1,ref:_,children:"ダイアログ"}):null,e.jsx("div",{className:r.scrollContainer,ref:ae,children:e.jsxs("div",{className:l(r.mainContent,{[r.headerLess]:a===void 0&&c===void 0,[r.fixedHeight]:F}),children:[c!==void 0?e.jsx("div",{className:r.hero,children:c}):null,a!==void 0?e.jsx(de,{tabIndex:-1,ref:_,className:l(r.header,!c&&Q&&r.sticky,re&&r.canScroll),children:a}):null,e.jsx("div",{className:l(r.body,{[r.fixedHeight]:F}),children:s}),e.jsx("footer",{className:l(r.footer,Y&&r.sticky,se&&r.canScroll),children:e.jsx(pe,{block:!0,onClick:t,"aria-label":v,children:v})})]})})]})]})})};try{n.displayName="MessageModal",n.__docgenInfo={description:"",displayName:"MessageModal",props:{header:{defaultValue:null,description:"プライマリーアクションボタンのラベル",name:"header",required:!1,type:{name:"string"}},onClose:{defaultValue:null,description:"閉じるアクションが実行された場合のコールバック",name:"onClose",required:!0,type:{name:"() => void"}},closeLabel:{defaultValue:{value:"閉じる"},description:"閉じるボタンのラベル",name:"closeLabel",required:!1,type:{name:"string"}},overlayOpacity:{defaultValue:{value:"normal"},description:"オーバーレイの透過度",name:"overlayOpacity",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"darker"'}]}},fixedHeight:{defaultValue:{value:"false"},description:"画面を占有する高さで固定する",name:"fixedHeight",required:!1,type:{name:"boolean"}},open:{defaultValue:{value:"true"},description:"モーダルダイアログを開くかどうか",name:"open",required:!1,type:{name:"boolean"}},isStatic:{defaultValue:{value:"false"},description:"openを無視してモーダルを開いたままにする。アニメーションライブラリとの連携で、ActionHalfModal自身が開閉に関与しない場合に使用",name:"isStatic",required:!1,type:{name:"boolean"}},id:{defaultValue:null,description:"ネイティブ要素のid属性。ページで固有のIDを指定",name:"id",required:!1,type:{name:"string"}},ariaLabelledby:{defaultValue:null,description:"ネイティブのaria-labelledby属性。独自の見出しを実装する場合にダイアログとの紐づけに使用。ページで固有のIDを指定",name:"ariaLabelledby",required:!1,type:{name:"string"}},hero:{defaultValue:null,description:"ヒーローエリア（見出しの更に上）に配置するコンテンツ",name:"hero",required:!1,type:{name:"ReactNode"}},stickyHeader:{defaultValue:{value:"false"},description:`ヘッダーを固定表示
heroが指定されている場合は無効`,name:"stickyHeader",required:!1,type:{name:"boolean"}},stickyFooter:{defaultValue:{value:"false"},description:"フッターを固定表示",name:"stickyFooter",required:!1,type:{name:"boolean"}}}}}catch{}const Ge={title:"Modal/MessageModal",component:n,argTypes:{overlayOpacity:{options:["normal","darker"],control:{type:"radio"}}}},z=()=>e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}),e.jsx("p",{children:'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.'})]}),u={header:"メッセージ",overlayOpacity:"normal",isStatic:!1,fixedHeight:!1,children:e.jsx(z,{}),stickyHeader:!1,stickyFooter:!1},m={render:a=>{const[s,t]=o.useState(!0);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>t(!0),children:"Open Modal"}),e.jsx(n,{...a,open:s,onClose:()=>t(!1)})]})},args:{...u,header:"メッセージ"}},g={render:a=>{const[s,t]=o.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>t(!0),children:"Open Modal"}),e.jsx(n,{...a,open:s,onClose:()=>t(!1)})]})},args:{...u,fixedHeight:!0}},f={render:a=>{const[s,t]=o.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>t(!0),children:"Open Modal"}),e.jsx(n,{...a,open:s,onClose:()=>t(!1),fixedHeight:!0})]})},args:{...u,overlayOpacity:"darker"}},h={render:a=>{const[s,t]=o.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>t(!0),children:"Open Modal"}),e.jsx(n,{...a,open:s,onClose:()=>t(!1)})]})},args:{...u,"data-test-id":"message-modal-custom"}},y={render:a=>{const[s,t]=o.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>t(!0),children:"Open Modal"}),e.jsx(n,{...a,open:s,onClose:()=>t(!1)})]})},args:{...u,id:"dialog-id"}},C={render:a=>{const[s,t]=o.useState(!1),i="header-id";return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>t(!0),children:"Open Modal"}),e.jsxs(n,{ariaLabelledby:i,...a,open:s,onClose:()=>t(!1),children:[e.jsx("h2",{id:i,children:"Heading"}),e.jsx(z,{})]})]})},args:{...u,header:void 0}},x={render:a=>{const[s,t]=o.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>t(!0),children:"Open Modal"}),e.jsx(n,{...a,open:s,onClose:()=>t(!1)})]})},args:{...u,header:"メッセージ",hero:e.jsx("img",{src:"/images/placeholder.svg",alt:"Illustration: Modal",style:{width:"100%",height:"auto",verticalAlign:"bottom"},width:560,height:315})}},b={render:a=>{const[s,t]=o.useState(!0);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>t(!0),children:"Open Modal"}),e.jsx(n,{...a,open:s,onClose:()=>t(!1)})]})},args:{...u,header:"メッセージ",stickyHeader:!0,stickyFooter:!0}};var A,E,O;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(true);
    return <>
        <button type="button" onClick={() => setOpen(true)}>
          Open Modal
        </button>
        <MessageModal {...args} open={open} onClose={() => setOpen(false)} />
      </>;
  },
  args: {
    ...defaultArgs,
    header: 'メッセージ'
  }
}`,...(O=(E=m.parameters)==null?void 0:E.docs)==null?void 0:O.source}}};var B,w,k;g.parameters={...g.parameters,docs:{...(B=g.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(false);
    return <>
        <button type="button" onClick={() => setOpen(true)}>
          Open Modal
        </button>
        <MessageModal {...args} open={open} onClose={() => setOpen(false)} />
      </>;
  },
  args: {
    ...defaultArgs,
    fixedHeight: true
  }
}`,...(k=(w=g.parameters)==null?void 0:w.docs)==null?void 0:k.source}}};var M,j,S;f.parameters={...f.parameters,docs:{...(M=f.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(false);
    return <>
        <button type="button" onClick={() => setOpen(true)}>
          Open Modal
        </button>
        <MessageModal {...args} open={open} onClose={() => setOpen(false)} fixedHeight />
      </>;
  },
  args: {
    ...defaultArgs,
    overlayOpacity: 'darker'
  }
}`,...(S=(j=f.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var D,L,H;h.parameters={...h.parameters,docs:{...(D=h.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(false);
    return <>
        <button type="button" onClick={() => setOpen(true)}>
          Open Modal
        </button>
        <MessageModal {...args} open={open} onClose={() => setOpen(false)} />
      </>;
  },
  args: {
    ...defaultArgs,
    'data-test-id': 'message-modal-custom'
  }
}`,...(H=(L=h.parameters)==null?void 0:L.docs)==null?void 0:H.source}}};var I,T,V;y.parameters={...y.parameters,docs:{...(I=y.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(false);
    return <>
        <button type="button" onClick={() => setOpen(true)}>
          Open Modal
        </button>
        <MessageModal {...args} open={open} onClose={() => setOpen(false)} />
      </>;
  },
  args: {
    ...defaultArgs,
    id: 'dialog-id'
  }
}`,...(V=(T=y.parameters)==null?void 0:T.docs)==null?void 0:V.source}}};var N,q,R;C.parameters={...C.parameters,docs:{...(N=C.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(false);
    const headerId = 'header-id';
    return <>
        <button type="button" onClick={() => setOpen(true)}>
          Open Modal
        </button>
        <MessageModal ariaLabelledby={headerId} {...args} open={open} onClose={() => setOpen(false)}>
          <h2 id={headerId}>Heading</h2>
          <LongBody />
        </MessageModal>
      </>;
  },
  args: {
    ...defaultArgs,
    header: undefined
  }
}`,...(R=(q=C.parameters)==null?void 0:q.docs)==null?void 0:R.source}}};var W,P,X;x.parameters={...x.parameters,docs:{...(W=x.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(false);
    return <>
        <button type="button" onClick={() => setOpen(true)}>
          Open Modal
        </button>
        <MessageModal {...args} open={open} onClose={() => setOpen(false)} />
      </>;
  },
  args: {
    ...defaultArgs,
    header: 'メッセージ',
    hero: <img src="/images/placeholder.svg" alt="Illustration: Modal" style={{
      width: '100%',
      height: 'auto',
      verticalAlign: 'bottom'
    }} width={560} height={315} />
  }
}`,...(X=(P=x.parameters)==null?void 0:P.docs)==null?void 0:X.source}}};var $,G,U;b.parameters={...b.parameters,docs:{...($=b.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(true);
    return <>
        <button type="button" onClick={() => setOpen(true)}>
          Open Modal
        </button>
        <MessageModal {...args} open={open} onClose={() => setOpen(false)} />
      </>;
  },
  args: {
    ...defaultArgs,
    header: 'メッセージ',
    stickyHeader: true,
    stickyFooter: true
  }
}`,...(U=(G=b.parameters)==null?void 0:G.docs)==null?void 0:U.source}}};const Ue=["Default","FixedHeight","OverlayDarker","CustomDataAttribute","WithId","CustomHeader","WithHero","StickyHeaderAndFooter"];export{h as CustomDataAttribute,C as CustomHeader,m as Default,g as FixedHeight,f as OverlayDarker,b as StickyHeaderAndFooter,x as WithHero,y as WithId,Ue as __namedExportsOrder,Ge as default};
