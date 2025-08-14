import{c as n,a as y,j as e}from"./iframe-dgT3krre.js";import{T as a}from"./Typography-DQgfLRD0.js";import"./preload-helper-D9Z9MdNV.js";const m=s=>{switch(s){case"xs":return n`
        ${({theme:i})=>i.spacing.xs}
      `;case"sm":return n`
        ${({theme:i})=>i.spacing.sm}
      `;case"md":return n`
        ${({theme:i})=>i.spacing.md}
      `;case"lg":return n`
        ${({theme:i})=>i.spacing.lg}
      `;case"xl":return n`
        ${({theme:i})=>i.spacing.xl}
      `;default:return n`
        ${({theme:i})=>i.spacing.md}
      `}},v=y.div`
  ${({size:s="md",horizontal:i=!1,vertical:h=!0})=>{const t=m(s);return i&&h?n`
        width: ${t};
        height: ${t};
      `:i?n`
        width: ${t};
        height: 0;
        display: inline-block;
      `:n`
      width: 100%;
      height: ${t};
    `}}
`,r=({size:s="md",horizontal:i=!1,vertical:h=!0,className:t,...g})=>e.jsx(v,{size:s,horizontal:i,vertical:h,className:t,...g});r.__docgenInfo={description:"",methods:[],displayName:"Spacer",props:{size:{required:!1,tsType:{name:"union",raw:"'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'",elements:[{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'xxl'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},horizontal:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},vertical:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const T={title:"Components/Spacer",component:r,parameters:{layout:"centered",docs:{description:{component:"A utility component for creating consistent spacing between elements. Can handle both horizontal and vertical spacing."}}},tags:["autodocs"],argTypes:{size:{control:{type:"select"},options:["xs","sm","md","lg","xl"],description:"The size of the spacing"},horizontal:{control:"boolean",description:"Whether to apply horizontal spacing"},vertical:{control:"boolean",description:"Whether to apply vertical spacing"}}},o={args:{size:"md"},render:s=>e.jsxs("div",{style:{border:"1px dashed #ccc",padding:"1rem"},children:[e.jsx(a,{children:"Content above spacer"}),e.jsx(r,{...s}),e.jsx(a,{children:"Content below spacer"})]})},p={args:{size:"md",horizontal:!0,vertical:!1},render:s=>e.jsxs("div",{style:{border:"1px dashed #ccc",padding:"1rem",display:"flex",alignItems:"center"},children:[e.jsx(a,{children:"Left content"}),e.jsx(r,{...s}),e.jsx(a,{children:"Right content"})]})},c={render:()=>e.jsxs("div",{style:{border:"1px dashed #ccc",padding:"1rem"},children:[e.jsx(a,{variant:"subtitle",children:"Vertical Spacing Sizes"}),e.jsx(a,{children:"Content"}),e.jsx(r,{size:"xs"}),e.jsx(a,{variant:"caption",children:"XS spacing above"}),e.jsx(r,{size:"sm"}),e.jsx(a,{variant:"caption",children:"SM spacing above"}),e.jsx(r,{size:"md"}),e.jsx(a,{variant:"caption",children:"MD spacing above"}),e.jsx(r,{size:"lg"}),e.jsx(a,{variant:"caption",children:"LG spacing above"}),e.jsx(r,{size:"xl"}),e.jsx(a,{variant:"caption",children:"XL spacing above"})]})},l={render:()=>e.jsxs("div",{style:{border:"1px dashed #ccc",padding:"1rem"},children:[e.jsx(a,{variant:"subtitle",children:"Horizontal Spacing Sizes"}),e.jsx(r,{size:"sm"}),e.jsxs("div",{style:{display:"flex",alignItems:"center",flexWrap:"wrap"},children:[e.jsx(a,{variant:"caption",children:"Start"}),e.jsx(r,{size:"xs",horizontal:!0,vertical:!1}),e.jsx(a,{variant:"caption",children:"XS"}),e.jsx(r,{size:"sm",horizontal:!0,vertical:!1}),e.jsx(a,{variant:"caption",children:"SM"}),e.jsx(r,{size:"md",horizontal:!0,vertical:!1}),e.jsx(a,{variant:"caption",children:"MD"}),e.jsx(r,{size:"lg",horizontal:!0,vertical:!1}),e.jsx(a,{variant:"caption",children:"LG"}),e.jsx(r,{size:"xl",horizontal:!0,vertical:!1}),e.jsx(a,{variant:"caption",children:"XL"}),e.jsx(r,{size:"xxl",horizontal:!0,vertical:!1}),e.jsx(a,{variant:"caption",children:"End"})]})]})},d={args:{size:"lg",horizontal:!0,vertical:!0},render:s=>e.jsxs("div",{style:{border:"1px dashed #ccc",padding:"1rem"},children:[e.jsx(a,{children:"This spacer below has both horizontal and vertical spacing"}),e.jsxs("div",{style:{display:"flex"},children:[e.jsx(a,{children:"Left"}),e.jsx(r,{...s}),e.jsx(a,{children:"Right (with spacing in both directions)"})]})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'md'
  },
  render: args => <div style={{
    border: '1px dashed #ccc',
    padding: '1rem'
  }}>
      <Typography>Content above spacer</Typography>
      <Spacer {...args} />
      <Typography>Content below spacer</Typography>
    </div>
}`,...o.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'md',
    horizontal: true,
    vertical: false
  },
  render: args => <div style={{
    border: '1px dashed #ccc',
    padding: '1rem',
    display: 'flex',
    alignItems: 'center'
  }}>
      <Typography>Left content</Typography>
      <Spacer {...args} />
      <Typography>Right content</Typography>
    </div>
}`,...p.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    border: '1px dashed #ccc',
    padding: '1rem'
  }}>
      <Typography variant="subtitle">Vertical Spacing Sizes</Typography>
      <Typography>Content</Typography>
      <Spacer size="xs" />
      <Typography variant="caption">XS spacing above</Typography>
      <Spacer size="sm" />
      <Typography variant="caption">SM spacing above</Typography>
      <Spacer size="md" />
      <Typography variant="caption">MD spacing above</Typography>
      <Spacer size="lg" />
      <Typography variant="caption">LG spacing above</Typography>
      <Spacer size="xl" />
      <Typography variant="caption">XL spacing above</Typography>
    </div>
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    border: '1px dashed #ccc',
    padding: '1rem'
  }}>
      <Typography variant="subtitle">Horizontal Spacing Sizes</Typography>
      <Spacer size="sm" />
      <div style={{
      display: 'flex',
      alignItems: 'center',
      flexWrap: 'wrap'
    }}>
        <Typography variant="caption">Start</Typography>
        <Spacer size="xs" horizontal vertical={false} />
        <Typography variant="caption">XS</Typography>
        <Spacer size="sm" horizontal vertical={false} />
        <Typography variant="caption">SM</Typography>
        <Spacer size="md" horizontal vertical={false} />
        <Typography variant="caption">MD</Typography>
        <Spacer size="lg" horizontal vertical={false} />
        <Typography variant="caption">LG</Typography>
        <Spacer size="xl" horizontal vertical={false} />
        <Typography variant="caption">XL</Typography>
        <Spacer size="xxl" horizontal vertical={false} />
        <Typography variant="caption">End</Typography>
      </div>
    </div>
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'lg',
    horizontal: true,
    vertical: true
  },
  render: args => <div style={{
    border: '1px dashed #ccc',
    padding: '1rem'
  }}>
      <Typography>
        This spacer below has both horizontal and vertical spacing
      </Typography>
      <div style={{
      display: 'flex'
    }}>
        <Typography>Left</Typography>
        <Spacer {...args} />
        <Typography>Right (with spacing in both directions)</Typography>
      </div>
    </div>
}`,...d.parameters?.docs?.source}}};const f=["Default","Horizontal","AllSizes","HorizontalSizes","BothDirections"];export{c as AllSizes,d as BothDirections,o as Default,p as Horizontal,l as HorizontalSizes,f as __namedExportsOrder,T as default};
