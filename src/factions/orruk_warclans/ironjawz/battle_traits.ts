import { TItemDescriptions } from 'factions/factionTypes'
import { tagAs } from 'factions/metatagger'
import { CHARGE_PHASE, COMBAT_PHASE, HERO_PHASE, START_OF_CHARGE_PHASE } from 'types/phases'

const IronjawzBattleTraits = {
  'Mighty Destroyers': {
    effects: [
      {
        name: `Mighty Destroyers - Once Per Turn`,
        desc: `Declare: Pick a friendly Ironjawz unit that was not set up this turn to be the target. 
        Effect: The target can move up to 3". It can move into combat. If it was in combat at the start of the move, it must end that move in combat.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Ironjawz Waaagh!': {
    effects: [
      {
        name: `Ironjawz Waaagh! - Once Per Turn`,
        desc: `Declare: Pick a friendly Ironjawz Hero to be the target. You cannot pick the same Hero to be the target of this ability more than once per battle.
        Effect: For the rest of the turn, the following effects apply to friendly Ironjawz units while they are wholly within 18" of the target:  
        Add 1 to charge rolls for those units.  
        Add 1 to the Attacks characteristic of those units melee weapons.`,
        when: [CHARGE_PHASE],
      },
    ],
  },
} satisfies TItemDescriptions

export default tagAs(IronjawzBattleTraits, 'battle_trait')
