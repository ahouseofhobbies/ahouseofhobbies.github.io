import { TItemDescriptions } from 'factions/factionTypes'
import { tagAs } from 'factions/metatagger'
import {
  COMBAT_PHASE,
  DURING_GAME,
  END_OF_CHARGE_PHASE,
  HERO_PHASE,
  SHOOTING_PHASE,
  WARDS_PHASE,
} from 'types/phases'

const OrrukWarclanMountTraits = {
  "Tough 'Un": {
    effects: [
      {
        name: `Tough 'Un - Passive`,
        desc: `Effect: Subtract 1 from the Rend characteristic of weapons used for attacks that target this unit.`,
        when: [SHOOTING_PHASE, COMBAT_PHASE],
      },
    ],
  },
  "Sneaky 'Un": {
    effects: [
      {
        name: `Sneaky 'Un - Once Per Battle - Enemy Hero Phase`,
        desc: `Effect: This unit can use the Normal Move or Retreat ability as if it were your movement phase. In addition, no mortal damage is inflicted on this unit by Retreat abilities this phase.`,
        when: [HERO_PHASE],
      },
    ],
  },
  "Mean 'Un": {
    effects: [
      {
        name: `Mean 'Un - Passive`,
        desc: `Effect: Add 1 to hit rolls for attacks made with this units Companion weapons.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  /* "Loud 'Un": {
    effects: [
      {
        name: `Loud 'Un`,
        desc: `MONSTER only. When you carry out the Roar monstrous rampage with this model, pick all enemy units within 3" of this model instead of 1.`,
        when: [END_OF_CHARGE_PHASE],
      },
    ],
  },
  "Weird 'Un": {
    effects: [
      {
        name: `Weird 'Un`,
        desc: `This model has a ward of 4+ against mortal wounds caused by spells and the abilities of endless spells.`,
        when: [WARDS_PHASE, HERO_PHASE],
      },
    ],
  },
  "Smelly 'Un": {
    effects: [
      {
        name: `Smelly 'Un`,
        desc: `Subtract 1 from hit rolls for attacks made with melee weapons that target this model if it has not made a charge move in the same turn.`,
        when: [COMBAT_PHASE],
      },
    ],
  }, */
} satisfies TItemDescriptions

export default tagAs(OrrukWarclanMountTraits, 'mount_trait')
