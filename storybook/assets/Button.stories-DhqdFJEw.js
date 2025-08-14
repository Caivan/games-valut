import{c as a,a as x,j as t}from"./iframe-dgT3krre.js";import"./preload-helper-D9Z9MdNV.js";const $=r=>{switch(r){case"primary":return a`
        background-color: ${({theme:e})=>e.colors.primary};
        color: ${({theme:e})=>e.colors.surface};
        border: 1px solid ${({theme:e})=>e.colors.primary};

        &:hover:not(:disabled) {
          opacity: 0.9;
        }
      `;case"secondary":return a`
        background-color: ${({theme:e})=>e.colors.secondary};
        color: ${({theme:e})=>e.colors.surface};
        border: 1px solid ${({theme:e})=>e.colors.border};

        &:hover:not(:disabled) {
          background-color: ${({theme:e})=>e.colors.secondaryHover};
        }
      `;case"danger":return a`
        background-color: ${({theme:e})=>e.colors.danger};
        color: ${({theme:e})=>e.colors.surface};
        border: 1px solid ${({theme:e})=>e.colors.danger};

        &:hover:not(:disabled) {
          opacity: 0.9;
        }
      `;default:return a``}},z=r=>{switch(r){case"small":return a`
        padding: ${({theme:e})=>e.spacing.xs}
          ${({theme:e})=>e.spacing.sm};
        font-size: ${({theme:e})=>e.typography.sizes.caption};
      `;case"medium":return a`
        padding: ${({theme:e})=>e.spacing.sm}
          ${({theme:e})=>e.spacing.md};
        font-size: ${({theme:e})=>e.typography.sizes.body};
      `;case"large":return a`
        padding: ${({theme:e})=>e.spacing.sm}
          ${({theme:e})=>e.spacing.lg};
        font-size: ${({theme:e})=>e.typography.sizes.subtitle};
      `;case"round":return a`
        padding: ${({theme:e})=>e.spacing.xs};
        font-size: ${({theme:e})=>e.typography.sizes.label};
        border-radius: ${({theme:e})=>e.radii.round};
      `;default:return a``}},S=x.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({theme:r})=>r.spacing.xs};

  font-family: ${({theme:r})=>r.typography.fontFamily};
  font-weight: ${({theme:r})=>r.typography.weights.medium};
  line-height: ${({theme:r})=>r.typography.lineHeights.body};

  border-radius: ${({theme:r})=>r.radii.md};
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  ${({variant:r="primary"})=>$(r)}
  ${({size:r="medium"})=>z(r)}
  
  ${({fullWidth:r})=>r&&a`
      width: 100%;
    `}
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &:focus-visible {
    outline: 2px solid ${({theme:r})=>r.colors.accent};
    outline-offset: 2px;
  }
`,s=({variant:r="primary",size:e="medium",disabled:g=!1,fullWidth:y=!1,children:f,onClick:h,type:v="button",...b})=>t.jsx(S,{variant:r,size:e,disabled:g,fullWidth:y,onClick:h,type:v,...b,children:f});s.__docgenInfo={description:"",methods:[],displayName:"Button",props:{variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'danger'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'danger'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large' | 'round'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"},{name:"literal",value:"'round'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},fullWidth:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.MouseEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},name:"e"}],return:{name:"void"}}},description:""},type:{required:!1,tsType:{name:"union",raw:"'button' | 'submit' | 'reset'",elements:[{name:"literal",value:"'button'"},{name:"literal",value:"'submit'"},{name:"literal",value:"'reset'"}]},description:"",defaultValue:{value:"'button'",computed:!1}}}};const T={title:"Components/Button",component:s,parameters:{layout:"centered",docs:{description:{component:"A flexible button component with multiple variants and sizes."}}},tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["primary","secondary","danger"],description:"The visual style variant of the button"},size:{control:{type:"select"},options:["small","medium","large","round"],description:"The size of the button"},disabled:{control:"boolean",description:"Whether the button is disabled"},fullWidth:{control:"boolean",description:"Whether the button should take full width"},children:{control:"text",description:"The content of the button"}},args:{children:"Button",onClick:()=>console.log("Button clicked")}},o={args:{variant:"primary"}},n={args:{variant:"secondary"}},i={args:{variant:"danger"}},l={args:{size:"small"}},d={args:{size:"large"}},c={args:{disabled:!0}},u={args:{fullWidth:!0},parameters:{layout:"padded"}},p={render:()=>t.jsxs("div",{style:{display:"flex",gap:"1rem",flexWrap:"wrap"},children:[t.jsx(s,{variant:"primary",children:"Primary"}),t.jsx(s,{variant:"secondary",children:"Secondary"}),t.jsx(s,{variant:"danger",children:"Danger"})]})},m={render:()=>t.jsxs("div",{style:{display:"flex",gap:"1rem",alignItems:"center",flexWrap:"wrap"},children:[t.jsx(s,{size:"small",children:"Small"}),t.jsx(s,{size:"medium",children:"Medium"}),t.jsx(s,{size:"large",children:"Large"})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary'
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'secondary'
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'danger'
  }
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'small'
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'large'
  }
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    fullWidth: true
  },
  parameters: {
    layout: 'padded'
  }
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '1rem',
    flexWrap: 'wrap'
  }}>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="danger">Danger</Button>
    </div>
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '1rem',
    alignItems: 'center',
    flexWrap: 'wrap'
  }}>
      <Button size="small">Small</Button>
      <Button size="medium">Medium</Button>
      <Button size="large">Large</Button>
    </div>
}`,...m.parameters?.docs?.source}}};const j=["Primary","Secondary","Danger","Small","Large","Disabled","FullWidth","AllVariants","AllSizes"];export{m as AllSizes,p as AllVariants,i as Danger,c as Disabled,u as FullWidth,d as Large,o as Primary,n as Secondary,l as Small,j as __namedExportsOrder,T as default};
