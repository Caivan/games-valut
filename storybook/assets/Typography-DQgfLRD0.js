import{a as o,c as t,j as p}from"./iframe-dgT3krre.js";const y=a=>{switch(a){case"headline":return t`
        font-size: ${({theme:e})=>e.typography.sizes.headline};
        font-weight: ${({theme:e})=>e.typography.weights.semibold};
        line-height: ${({theme:e})=>e.typography.lineHeights.headline};
      `;case"subtitle":return t`
        font-size: ${({theme:e})=>e.typography.sizes.subtitle};
        font-weight: ${({theme:e})=>e.typography.weights.medium};
        line-height: ${({theme:e})=>e.typography.lineHeights.subtitle};
      `;case"body":return t`
        font-size: ${({theme:e})=>e.typography.sizes.body};
        font-weight: ${({theme:e})=>e.typography.weights.regular};
        line-height: ${({theme:e})=>e.typography.lineHeights.body};
      `;case"caption":return t`
        font-size: ${({theme:e})=>e.typography.sizes.caption};
        font-weight: ${({theme:e})=>e.typography.weights.regular};
        line-height: ${({theme:e})=>e.typography.lineHeights.caption};
      `;case"label":return t`
        font-size: ${({theme:e})=>e.typography.sizes.label};
        font-weight: ${({theme:e})=>e.typography.weights.medium};
        line-height: ${({theme:e})=>e.typography.lineHeights.label};
        text-transform: uppercase;
        letter-spacing: 0.05em;
      `;default:return t``}},h=o.div`
  font-family: ${({theme:a})=>a.typography.fontFamily};
  margin: 0;

  color: ${({theme:a,color:e="primary"})=>e==="secondary"?a.colors.textSecondary:a.colors.textPrimary};

  ${({variant:a="body"})=>y(a)}
`,u=({variant:a="body",as:e,color:l="primary",children:i,className:n,...r})=>{const s=e||(()=>{switch(a){case"display":return"h1";case"headline":return"h2";case"subtitle":return"h3";case"caption":return"p";case"label":return"span";default:return"p"}})();return p.jsx(h,{as:s,variant:a,color:l,className:n,...r,children:i})};u.__docgenInfo={description:"",methods:[],displayName:"Typography",props:{variant:{required:!1,tsType:{name:"union",raw:`| 'display'
| 'headline'
| 'subtitle'
| 'body'
| 'caption'
| 'label'`,elements:[{name:"literal",value:"'display'"},{name:"literal",value:"'headline'"},{name:"literal",value:"'subtitle'"},{name:"literal",value:"'body'"},{name:"literal",value:"'caption'"},{name:"literal",value:"'label'"}]},description:"",defaultValue:{value:"'body'",computed:!1}},as:{required:!1,tsType:{name:"union",raw:`| 'h1'
| 'h2'
| 'h3'
| 'h4'
| 'h5'
| 'h6'
| 'p'
| 'span'
| 'div'`,elements:[{name:"literal",value:"'h1'"},{name:"literal",value:"'h2'"},{name:"literal",value:"'h3'"},{name:"literal",value:"'h4'"},{name:"literal",value:"'h5'"},{name:"literal",value:"'h6'"},{name:"literal",value:"'p'"},{name:"literal",value:"'span'"},{name:"literal",value:"'div'"}]},description:""},color:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};export{u as T};
