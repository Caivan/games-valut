import{j as a}from"./iframe-dgT3krre.js";import{T as e}from"./Typography-DQgfLRD0.js";import"./preload-helper-D9Z9MdNV.js";const x={title:"Components/Typography",component:e,parameters:{layout:"centered",docs:{description:{component:"A flexible typography component with multiple variants and semantic HTML elements."}}},tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["headline","subtitle","body","caption","label"],description:"The typography variant that defines size, weight, and line height"},as:{control:{type:"select"},options:["h1","h2","h3","h4","h5","h6","p","span","div"],description:"The HTML element to render"},color:{control:{type:"select"},options:["primary","secondary"],description:"The text color"},children:{control:"text",description:"The text content"}},args:{children:"Typography example"}},r={args:{variant:"display",children:"This is a display"}},t={args:{variant:"headline",children:"This is a headline"}},s={args:{variant:"subtitle",children:"This is a subtitle"}},o={args:{variant:"body",children:"This is body text with the default styling for readable content."}},n={args:{variant:"caption",children:"This is caption text"}},i={args:{variant:"label",children:"This is a label"}},p={args:{color:"secondary",children:"This text uses secondary color"}},l={args:{variant:"body",as:"span",children:"This body text is rendered as a span element"}},c={render:()=>a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",maxWidth:"600px"},children:[a.jsx(e,{variant:"display",children:"Display Typography"}),a.jsx(e,{variant:"headline",children:"Headline Typography"}),a.jsx(e,{variant:"subtitle",children:"Subtitle Typography"}),a.jsx(e,{variant:"body",children:"Body typography for longer content and readable text passages."}),a.jsx(e,{variant:"caption",children:"Caption typography for smaller details"}),a.jsx(e,{variant:"label",children:"Label Typography"})]})},d={render:()=>a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",maxWidth:"600px"},children:[a.jsx(e,{color:"primary",children:"Primary color text"}),a.jsx(e,{color:"secondary",children:"Secondary color text"})]})},y={render:()=>a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",maxWidth:"600px"},children:[a.jsx(e,{variant:"headline",as:"h1",children:"H1 Headline"}),a.jsx(e,{variant:"subtitle",as:"h2",children:"H2 Subtitle"}),a.jsx(e,{variant:"body",as:"p",children:"Paragraph body text"}),a.jsx(e,{variant:"caption",as:"span",children:"Span caption text"}),a.jsx(e,{variant:"label",as:"div",children:"Div label text"})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'display',
    children: 'This is a display'
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'headline',
    children: 'This is a headline'
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'subtitle',
    children: 'This is a subtitle'
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'body',
    children: 'This is body text with the default styling for readable content.'
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'caption',
    children: 'This is caption text'
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'label',
    children: 'This is a label'
  }
}`,...i.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'secondary',
    children: 'This text uses secondary color'
  }
}`,...p.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'body',
    as: 'span',
    children: 'This body text is rendered as a span element'
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    maxWidth: '600px'
  }}>
      <Typography variant="display">Display Typography</Typography>
      <Typography variant="headline">Headline Typography</Typography>
      <Typography variant="subtitle">Subtitle Typography</Typography>
      <Typography variant="body">
        Body typography for longer content and readable text passages.
      </Typography>
      <Typography variant="caption">
        Caption typography for smaller details
      </Typography>
      <Typography variant="label">Label Typography</Typography>
    </div>
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    maxWidth: '600px'
  }}>
      <Typography color="primary">Primary color text</Typography>
      <Typography color="secondary">Secondary color text</Typography>
    </div>
}`,...d.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    maxWidth: '600px'
  }}>
      <Typography variant="headline" as="h1">
        H1 Headline
      </Typography>
      <Typography variant="subtitle" as="h2">
        H2 Subtitle
      </Typography>
      <Typography variant="body" as="p">
        Paragraph body text
      </Typography>
      <Typography variant="caption" as="span">
        Span caption text
      </Typography>
      <Typography variant="label" as="div">
        Div label text
      </Typography>
    </div>
}`,...y.parameters?.docs?.source}}};const u=["Display","Headline","Subtitle","Body","Caption","Label","SecondaryColor","CustomElement","AllVariants","AllColors","SemanticElements"];export{d as AllColors,c as AllVariants,o as Body,n as Caption,l as CustomElement,r as Display,t as Headline,i as Label,p as SecondaryColor,y as SemanticElements,s as Subtitle,u as __namedExportsOrder,x as default};
