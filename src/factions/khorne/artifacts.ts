import { TItemDescriptions } from 'factions/factionTypes'
import { tagAs } from 'factions/metatagger'
import {
  CHARGE_PHASE,
  COMBAT_PHASE,
  DURING_GAME,
  END_OF_COMBAT_PHASE,
  END_OF_TURN,
  HERO_PHASE,
  SHOOTING_PHASE,
  WARDS_PHASE,
} from 'types/phases'

const Artifacts = {
  /* Gorecleaver: {
    effects: [
      {
        name: `Gorecleaver`,
        desc: `Pick 1 of the bearer's melee weapons. Improve the Rend characteristic of that weapon by 1. In addition, if the unmodified hit roll for an attack made with that weapon is 6, that attack causes 1 mortal wound to the target in addition to any damage it inflicts.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'The Crimson Plate': {
    effects: [
      {
        name: `The Crimson Plate`,
        desc: `The bearer has a ward of 5+.`,
        when: [WARDS_PHASE],
      },
    ],
  },
  'Blood Rune': {
    effects: [
      {
        name: `Blood Rune`,
        desc: `At the end of the combat phase, if any wounds caused by an attack made by the bearer were allocated to a HERO or MONSTER and not negated, you receive 1 Blood Tithe point.`,
        when: [END_OF_COMBAT_PHASE],
      },
    ],
  },
  'Banner of Blood': {
    effects: [
      {
        name: `Banner of Blood`,
        desc: `BLOODSECRATOR only. You can reroll charge rolls for friendly BLADES OF KHORNE units wholly within 16" of the bearer.`,
        when: [CHARGE_PHASE],
      },
    ],
  },
  "Ar'gath, the King of Blades": {
    effects: [
      {
        name: `Ar'gath, the King of Blades`,
        desc: `Ward rolls cannot be made for enemy units while they are within 3" of the bearer.`,
        when: [WARDS_PHASE],
      },
    ],
  }, */
  "Ar'gath, the King of Blades": {
    effects: [
      {
        name: `Ar'gath, the King of Blades - Passive`,
        desc: `Effect: Ward rolls cannot be made for enemy Heroes while they are in combat with this unit.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Collar of Contempt': {
    effects: [
      {
        name: `Collar of Contempt - Passive`,
        desc: `Effect: This unit can use Unbind abilities as if it had Wizard (1). Each time this unit unbinds a spell, inflict D3 mortal damage on the caster.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Butchers Blade': {
    effects: [
      {
        name: `Butcher's Blade`,
        desc: `Declare: Pick each enemy unit that had any damage points allocated to it this turn by this unit's combat attacks to be the targets.
        Effect: Roll a D3 for each target. On a 2+, inflict an amount of mortal damage on the target equal to the roll.`,
        when: [END_OF_TURN],
      },
    ],
  },
  'Gorechosen Champions (AoR) - Warmongers Icon': {
    effects: [
      {
        name: `Warmonger's Icon (AoR) - Once Per Battle`,
        desc: `Declare: Pick this unit and up to D3 friendly Gorechosen Champions units within this unit's combat range to be the targets.
        Effect: The targets have Strike-First for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Gorechosen Champions (AoR) - The Scarring Blade': {
    effects: [
      {
        name: `The Scarring Blade (AoR)`,
        desc: `Effect: Inflict D3 mortal damage on this unit. For the rest of the turn, add X to the Attacks characteristic of melee weapons used by friendly Gorechosen Champions units, where X is equal to the amount of moral damage inflicted on this unit by this ability.
        For the rest of the battle, this unit cannot uste the Hate-Fuelled Killers ability and cannot be healed.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Gorechosen Champions (AoR) - Bloodmist Skull': {
    effects: [
      {
        name: `Bloodmist Skull (AoR) - Passive`,
        desc: `Effect: This unit has Ward (3+) against damage inflicted by shooting attacks.`,
        when: [SHOOTING_PHASE],
      },
    ],
  },
  'The Baleful Lords (AoR)': {
    effects: [
      {
        name: `Crown of the Slaughterborn (AoR) - Passive`,
        desc: `Effect: Enemy units within 12" of this unit cannot be healed and cannot have slain models returned to them.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
} satisfies TItemDescriptions

export default tagAs(Artifacts, 'artifact')
