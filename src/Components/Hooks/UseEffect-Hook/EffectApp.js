import React from 'react'
import ComponentMountsOnce from './ComponentMountsOnce'
import ComponentRendersOnEveryRender from './ComponentRendersOnEveryRender'
import ComponentRenderWithCondition from './ComponentRenderWithCondition'
import ComponentUnmounts from './ComponentUnmounts'

const EffectApp = () => {
  return (
    <div>
        <h1><mark>4 possible ways to call UseEffect Method are:--</mark></h1>
      <ComponentMountsOnce/>
      <ComponentRendersOnEveryRender/>
      <ComponentRenderWithCondition/>
      <ComponentUnmounts/>
    </div>
  )
}

export default EffectApp
