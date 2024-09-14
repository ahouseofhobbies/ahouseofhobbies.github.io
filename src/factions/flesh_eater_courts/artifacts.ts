import { tagAs } from 'factions/metatagger'
import {
  BATTLESHOCK_PHASE,
  CHARGE_PHASE,
  COMBAT_PHASE,
  DURING_ROUND,
  END_OF_TURN,
  HERO_PHASE,
  START_OF_COMBAT_PHASE,
} from 'types/phases'
import { TItemDescriptions } from 'factions/factionTypes'

const Artifacts = {
  'Charnel Vestments': {
    effects: [
      {
        name: `Charnel Vestments - Passive`,
        desc: `Effect: If this unit is not a Priest, it has Priest (1). If this unit is already a Priest, add 1 to chanting rolls for this unit. If this unit is a Wizard, it cannot use Spell abilities and Prayer abilities in the same phase.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'The Grim Garland': {
    effects: [
      {
        name: `The Grim Garland - Passive`,
        desc: `Effect: Subtract 2 from the control scores of enemy units while they are within 12" of this unit.`,
        when: [END_OF_TURN],
      },
    ],
  },
  'Heart of the Gargant': {
    effects: [
      {
        name: `Heart of the Gargant - Once Per Battle`,
        desc: `Effect: If this unit is in combat, add 1 to the Attacks characteristic of its melee weapons for the rest of the turn. This ability also affects Companion weapons.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
 /* 'The Grim Garland': {
    effects: [
      {
        name: `The Grim Garland`,
        desc: `Subtract 2 from the Bravery characteristic of enemy units while they are within 9" of the bearer.`,
        when: [BATTLESHOCK_PHASE],
      },
    ],
  },
  'Heart of the Gargant': {
    effects: [
      {
        name: `Heart of the Gargant`,
        desc: `Once per battle, at the start of the combat phase, the bearer can use this artefact. If they do so, add 1 to the Attacks characteristic of melee weapons used by the bearer and their mount in that phase.`,
        when: [START_OF_COMBAT_PHASE],
      },
    ],
  },
/*  'Medal of Madness': {
    effects: [
      {
        name: `Medal of Madness`,
        desc: `Once per battle round, the bearer can issue a command without a command point being spent, and they are treated as if they were a general when they do so.`,
        when: [DURING_ROUND],
      },
    ],
  },
  'The Flayed Pennant': {
    effects: [
      {
        name: `The Flayed Pennant`,
        desc: `You can reroll charge rolls for friendly FLESH-EATER COURTS units while they are wholly within 12" of the bearer.`,
        when: [CHARGE_PHASE],
      },
    ],
  },
  'Charnel Vestments': {
    effects: [
      {
        name: `Charnel Vestments`,
        desc: `The bearer gains the PRIEST keyword.`,
        when: [HERO_PHASE],
      },
    ],
  }, */
} satisfies TItemDescriptions

// Always export using tagAs
export default tagAs(Artifacts, 'artifact')
