import { pickEffects } from 'factions/metatagger'
import BattleTraits from './battle_traits'
import { TItemDescriptions } from 'factions/factionTypes'
import { DURING_GAME, END_OF_TURN, HERO_PHASE, MOVEMENT_PHASE } from 'types/phases'

const Flavors = {
  'Vanishing Phantasms': {
    effects: [
      {
        name: `Ethereal Translocation - Once Per Turn`,
        desc: `Declare: Pick a friendly Nighthaunt unit that is not in combat to use this ability. 
        Effect: Remove that unit from the battlefield and set it up again on the battlefield more than 9" from all enemy units.`,
        when: [MOVEMENT_PHASE],
      },
    ],
  },
  'Hunters of the Accursed': {
    effects: [
      {
        name: `Vengeful Malison - Once Per Turn`,
        desc: `Declare: Pick up to 3 enemy Heroes each within 12" of a different friendly Nighthaunt Hero to be the targets. 
        Effect: Roll a D3 for each target. On a 2+, inflict an amount of mortal damage on the target equal to the roll.`,
        when: [END_OF_TURN],
      },
    ],
  },
  'Death Stalkers': {
    effects: [
      {
        name: `There is No Escape - Once Per Turn`,
        desc: `Declare: Pick a friendly Nighthaunt unit to be the target.
        Effect: For the rest of the turn, the target unit can use Charge abilities even if they used a Run or Retreat ability in the same turn. In addition, no mortal damage is inflicted on that unit by Retreat abilities.`,
        when: [MOVEMENT_PHASE],
      },
    ],
  },
  'Procession of Death': {
    effects: [
      {
        name: `Cavalcade of Death - Passive`,
        desc: `Effect: Friendly Nighthaunt Infantry units have Ward (5+) while they are wholly within 6" of a friendly Black Coach.`,
        when: [DURING_GAME],
      },
    ],
  },
  'Hungry Nexus': {
    effects: [
      {
        name: `Greedy for Souls - Once Per Turn - End of Enemy Turn`,
        desc: `Declare: Pick a friendly Nexus of Grief to be the target. 
        Effect: For the rest of the turn, the target has a Move characteristic of 3". It can immediately move up to 3" and can move into combat but cannot end that move on a terrain feature or within 3" of an objective.`,
        when: [END_OF_TURN],
      },
    ],
  },
  'Deathrust Gheists': {
    effects: [
      {
        name: `Blades of Eternal Rust - Once Per Turn - Enemy Hero Phase`,
        desc: `Declare: Pick an enemy unit that is in combat with any friendly Nighthaunt units to be the target. 
        Effect: Subtract 1 from save rolls for the target for the rest of the turn.`,
        when: [HERO_PHASE],
      },
    ],
  },
  /* 'The Emerald Host': {
    effects: pickEffects(BattleTraits, ['The Emerald Host']),
  },

  'The Scarlet Doom': {
    effects: pickEffects(BattleTraits, ['The Scarlet Doom']),
  },

  'The Quicksilver Dead': {
    effects: pickEffects(BattleTraits, ['The Quicksilver Dead']),
  },

  'The Grieving Legion': {
    effects: pickEffects(BattleTraits, ['The Grieving Legion']),
  }, */
} satisfies TItemDescriptions

export default Flavors
