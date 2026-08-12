import * as ecs from '@8thwall/ecs'

ecs.registerComponent({
  name: 'Avatar Animation Toggle',

  stateMachine: ({world, eid}) => {
    let isLoser = false

    ecs.defineState('initial-state')
      .initial()
      .listen(eid, ecs.input.SCREEN_TOUCH_START, () => {
        isLoser = !isLoser

        ecs.GltfModel.set(world, eid, {
          animationClip: isLoser ? 'Loser' : 'Idle',
          loop: !isLoser,
          paused: false,
        })
      })
  },
})
