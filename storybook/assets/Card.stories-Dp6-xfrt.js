import{c as t,a as v,j as o}from"./iframe-dgT3krre.js";import{T as i}from"./Typography-DQgfLRD0.js";import"./preload-helper-D9Z9MdNV.js";const h=a=>{switch(a){case"none":return t`
        padding: 0;
      `;case"small":return t`
        padding: ${({theme:e})=>e.spacing.sm};
      `;case"medium":return t`
        padding: ${({theme:e})=>e.spacing.md};
      `;case"large":return t`
        padding: ${({theme:e})=>e.spacing.lg};
      `;default:return t`
        padding: ${({theme:e})=>e.spacing.md};
      `}},y=v.article`
  background-color: ${({theme:a,variant:e="default"})=>e==="muted"?a.colors.surfaceMuted:a.colors.surface};

  border: 1px solid ${({theme:a})=>a.colors.border};
  border-radius: ${({theme:a,radius:e="lg"})=>a.radii[e]};

  ${({padding:a="medium"})=>h(a)}

  ${({interactive:a,onClick:e})=>(a||e)&&t`
      cursor: pointer;
      transition: all 0.2s ease-in-out;

      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      }

      &:active {
        transform: translateY(0);
      }
    `}
`,d=({variant:a="default",padding:e="medium",radius:c="lg",children:u,className:m,onClick:p,interactive:g=!1,...f})=>o.jsx(y,{variant:a,padding:e,radius:c,className:m,onClick:p,interactive:g,...f,children:u});d.__docgenInfo={description:"",methods:[],displayName:"Card",props:{variant:{required:!1,tsType:{name:"union",raw:"'default' | 'muted'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'muted'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},padding:{required:!1,tsType:{name:"union",raw:"'none' | 'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},radius:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg' | 'xl'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"}]},description:"",defaultValue:{value:"'lg'",computed:!1}},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.MouseEvent<HTMLDivElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},name:"e"}],return:{name:"void"}}},description:""},interactive:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const b={title:"Components/Card",component:d,parameters:{layout:"centered",docs:{description:{component:"A versatile card component for containing content with customizable styling."}}},tags:["autodocs"],argTypes:{children:{control:!1,description:"The content to display inside the card"},variant:{control:{type:"select"},options:["default","muted"],description:"The visual style variant of the card"},padding:{control:{type:"select"},options:["none","small","medium","large"],description:"The padding inside the card"},radius:{control:{type:"select"},options:["sm","md","lg","xl"],description:"The border radius of the card"},interactive:{control:"boolean",description:"Whether the card should have hover effects"}}},l=o.jsxs("div",{children:[o.jsx(i,{variant:"subtitle",children:"Card Title"}),o.jsx(i,{variant:"body",color:"secondary",children:"This is some card content that demonstrates the card component."})]}),r={args:{children:l}},n={args:{variant:"muted",children:l}},s={args:{interactive:!0,onClick:()=>console.log("Card clicked"),children:l}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    children: defaultContent
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'muted',
    children: defaultContent
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    interactive: true,
    onClick: () => console.log('Card clicked'),
    children: defaultContent
  }
}`,...s.parameters?.docs?.source}}};const w=["Default","Muted","Interactive"];export{r as Default,s as Interactive,n as Muted,w as __namedExportsOrder,b as default};
