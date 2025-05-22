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
  "Tough 'Un (Kruleboyz)": {
    effects: [
      {
        name: `Tough 'Un - Passive`,
        desc: `Effect: Subtract 1 from the Rend characteristic of weapons used for attacks that target this unit.`,
        when: [SHOOTING_PHASE, COMBAT_PHASE],
      },
    ],
  },
  "Sneaky 'Un (Kruleboyz)": {
    effects: [
      {
        name: `Sneaky 'Un - Once Per Battle - Enemy Hero Phase`,
        desc: `Effect: This unit can use the Normal Move or Retreat ability as if it were your movement phase. In addition, no mortal damage is inflicted on this unit by Retreat abilities this phase.`,
        when: [HERO_PHASE],
      },
    ],
  },
  "Mean 'Un (Kruleboyz)": {
    effects: [
      {
        name: `Mean 'Un - Passive`,
        desc: `Effect: Add 1 to hit rolls for attacks made with this units Companion weapons.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  "Big 'Un (Ironjawz)": {
    effects: [
      {
        name: `Big 'Un - Passive`,
        desc: `Effect: Add 1 to the Rend characteristic of this units Companion weapons.`,
        when: [SHOOTING_PHASE, COMBAT_PHASE],
      },
    ],
  },
  "Mad 'Un (Ironjawz)": {
    effects: [
      {
        name: `Mad 'Un - Once Per Turn`,
        desc: `Declare: If this unit charged this turn, pick an enemy unit in combat with it to be the target. 
        Effect: Roll a D3. On a 2+, inflict an amount of mortal damage on the target equal to the roll. If any models are slain by this ability, after those models are removed from the battlefield, if this unit is still in combat, this unit can immediately use this ability again.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  "Fast 'Un (Ironjawz)": {
    effects: [
      {
        name: `Fast 'Un - Once Per Battle`,
        desc: `Effect: If this unit was not set up this turn, it can use the Normal Move ability as if it were your movement phase.`,
        when: [HERO_PHASE],
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
