import{G as e,L as t,T as n,U as r,t as i}from"./v2-l9WzeLaM.js";import{i as a,n as o,t as s}from"./v2-Bqzh4AyJ.js";import{SpecSheet as c}from"./SpecSheet-CcWiyL7x.js";var l=`import React from 'react'
import { View } from '@instructure/ui-view/latest'
import { Flex } from '@instructure/ui-flex/latest'
import { Text } from '@instructure/ui-text/latest'
import { Button } from '@instructure/ui-buttons/latest'
import type { FrameCtx } from '../../../components/SpecSheet'

const SIZES = [
  { size: 'small', label: 'small' },
  { size: 'medium', label: 'medium (default)' },
  { size: 'large', label: 'large' },
] as const

export function sizesFrame({ sharedTokens }: FrameCtx): React.ReactNode {
  return (
    <View
      as="div"
      display="block"
      background="secondary"
      themeOverride={{ backgroundSecondary: sharedTokens.background.pageColor }}
      padding="medium"
    >
      <Flex direction="column" gap="medium" alignItems="start">
        {SIZES.map(({ size, label }) => (
          <Flex key={size} gap="medium" alignItems="center">
            <View as="div" display="block" minWidth="140px">
              <Text size="small" color="secondary">{label}</Text>
            </View>
            <Button color="primary" size={size}>Button</Button>
            <Button color="primary" size={size} withBackground={false}>Ghost</Button>
          </Flex>
        ))}
      </Flex>
    </View>
  )
}
`,u=`import React from 'react'
import { View } from '@instructure/ui-view/latest'
import { Flex } from '@instructure/ui-flex/latest'
import { Text } from '@instructure/ui-text/latest'
import { Button } from '@instructure/ui-buttons/latest'
import type { FrameCtx } from '../../../components/SpecSheet'

const COLORS = ['primary', 'secondary', 'success', 'danger'] as const
const VARIANTS = [
  { withBackground: true, label: 'Filled' },
  { withBackground: false, label: 'Ghost' },
] as const

export function variantsFrame({ sharedTokens }: FrameCtx): React.ReactNode {
  function row(color: (typeof COLORS)[number]) {
    return (
      <Flex gap="small" alignItems="center">
        <View as="div" display="block" minWidth="88px">
          <Text size="small" color="secondary">{color}</Text>
        </View>
        {VARIANTS.map(v => (
          <Button key={v.label} color={color} withBackground={v.withBackground}>
            {v.label}
          </Button>
        ))}
      </Flex>
    )
  }

  return (
    <View
      as="div"
      display="block"
      background="secondary"
      themeOverride={{ backgroundSecondary: sharedTokens.background.pageColor }}
      padding="medium"
    >
      <Flex direction="column" gap="medium">
        <Flex gap="small" alignItems="center">
          <View as="div" display="block" minWidth="88px" />
          {VARIANTS.map(v => (
            <Text key={v.label} size="small" color="secondary" weight="bold">{v.label}</Text>
          ))}
        </Flex>
        {COLORS.map(c => <React.Fragment key={c}>{row(c)}</React.Fragment>)}
      </Flex>
    </View>
  )
}
`,d=e(r(),1),f=e(n(),1),p=[`primary`,`secondary`,`success`,`danger`],m=[{withBackground:!0,label:`Filled`},{withBackground:!1,label:`Ghost`}];function h({sharedTokens:e}){function t(e){return(0,f.jsxs)(s,{gap:`small`,alignItems:`center`,children:[(0,f.jsx)(i,{as:`div`,display:`block`,minWidth:`88px`,children:(0,f.jsx)(o,{size:`small`,color:`secondary`,children:e})}),m.map(t=>(0,f.jsx)(a,{color:e,withBackground:t.withBackground,children:t.label},t.label))]})}return(0,f.jsx)(i,{as:`div`,display:`block`,background:`secondary`,themeOverride:{backgroundSecondary:e.background.pageColor},padding:`medium`,children:(0,f.jsxs)(s,{direction:`column`,gap:`medium`,children:[(0,f.jsxs)(s,{gap:`small`,alignItems:`center`,children:[(0,f.jsx)(i,{as:`div`,display:`block`,minWidth:`88px`}),m.map(e=>(0,f.jsx)(o,{size:`small`,color:`secondary`,weight:`bold`,children:e.label},e.label))]}),p.map(e=>(0,f.jsx)(d.Fragment,{children:t(e)},e))]})})}var g=[{size:`small`,label:`small`},{size:`medium`,label:`medium (default)`},{size:`large`,label:`large`}];function _({sharedTokens:e}){return(0,f.jsx)(i,{as:`div`,display:`block`,background:`secondary`,themeOverride:{backgroundSecondary:e.background.pageColor},padding:`medium`,children:(0,f.jsx)(s,{direction:`column`,gap:`medium`,alignItems:`start`,children:g.map(({size:e,label:t})=>(0,f.jsxs)(s,{gap:`medium`,alignItems:`center`,children:[(0,f.jsx)(i,{as:`div`,display:`block`,minWidth:`140px`,children:(0,f.jsx)(o,{size:`small`,color:`secondary`,children:t})}),(0,f.jsx)(a,{color:`primary`,size:e,children:`Button`}),(0,f.jsx)(a,{color:`primary`,size:e,withBackground:!1,children:`Ghost`})]},e))})})}var v=Object.assign({"./frames/sizes.tsx":l,"./frames/variants.tsx":u});function y(e){let{sharedTokens:n}=t(),r={sharedTokens:n};return(0,f.jsx)(c,{title:`Button Showcase`,description:`Visual reference for InstUI Button colors, variants, and sizes.`,basePath:`src/references/button-showcase`,frameSources:v,sections:[{title:`Colors & Variants`,description:`All color + variant combinations at medium size.`,boards:[{width:600,caption:`All variants`,content:h(r),frame:`variants`}]},{title:`Sizes`,description:`Size progression with filled and ghost variants.`,boards:[{width:600,caption:`Size comparison`,content:_(r),frame:`sizes`}]}]})}export{y as default};