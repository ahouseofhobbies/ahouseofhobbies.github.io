import { TItemDescriptions } from 'factions/factionTypes'
import { tagAs } from 'factions/metatagger'
import meta_rule_sources from 'meta/rule_sources'
import {
  COMBAT_PHASE,
  DURING_GAME,
  DURING_SETUP,
  END_OF_CHARGE_PHASE,
  END_OF_COMBAT_PHASE,
  END_OF_TURN,
  HERO_PHASE,
  MOVEMENT_PHASE,
  SAVES_PHASE,
  SHOOTING_PHASE,
  START_OF_COMBAT_PHASE,
  START_OF_HERO_PHASE,
  WARDS_PHASE,
  WOUND_ALLOCATION_PHASE,
} from 'types/phases'

const Artifacts = {
  "Backstabber's Blade": {
    effects: [
      {
        name: `Backstabber's Blade - Once Per Battle`,
        desc: `Declare: Pick an enemy Hero in combat with this unit to be the target. 
        Effect: Roll a dice. On a 2+, inflict an amount of mortal damage on the target equal to the roll.`,
        when: [END_OF_TURN],
      },
    ],
  },
  'The Clammy Cowl': {
    effects: [
      {
        name: `The Clammy Cowl - Passive`,
        desc: `Effect: Subtract 1 from hit rolls for attacks that target this unit.`, // updated for 2023
        when: [SHOOTING_PHASE, COMBAT_PHASE],
      },
    ],
  },
  'Leering Gitshield': {
    effects: [
      {
        name: `Leering Gitshield - Passive`,
        desc: `Effect: Each time an unmodified hit roll for an attack that targets this unit is 1, inflict 1 mortal damage on the attacking unit after the Attack ability has been resolved.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Da Kings Gitz (AoR) - Loonstone Medallion': {
    effects: [
      {
        name: `Loonstone Medallion (AoR) - Passive`,
        desc: `Effect: This unit has Ward(6+). While this unit is contesting an objective that is not being contested by any other friendly units, it has Ward(5+).`,
        when: [DURING_GAME],
      },
    ],
  },
  'Da Kings Gitz (AoR) - Moonhoned Shiv': {
    effects: [
      {
        name: `Moonhoned Shiv (AoR)`,
        desc: `Effect: Pick 1 of this unit's non-Companion melee weapons. Add 1 to the Attacks characteristic of that weapon for the rest of the battle. In addition, each time this unit uses a Retreat ability, add 1 to the Attacks characteristic of that weapon for the rest of the battle. This unit can be affected by this ability mulitple times and the effects are cumulative.`,
        when: [DURING_SETUP],
      },
    ],
  },
  'Da Kings Gitz (AoR) - Wotnot of Prestige': {
    effects: [
      {
        name: `Wotnot of Prestige (AoR)`,
        desc: `Declare: Pick a point on the battlefield within 9" of this unit. Each visible enemy unit within 3" of that point is a target.
        Effect: Roll a D3 for each target. On a 2+, inflict an amount of mortal damage on the target equal to the roll.`,
        when: [END_OF_TURN],
      },
    ],
  },
  'Droggz Gitmob (AoR) - Glarefaces Grin': {
    effects: [
      {
        name: `Glareface's Grin (AoR) - Once Per Battle`,
        desc: `Declare: Pick a point on the battlefield within 9" of this unit. Each visible enemy unit within 3" of that point is a target.
        Effect: Roll a D3 for each target. On a 2+, inflict an amount of mortal damage on the target equal to the roll.`,
        when: [SHOOTING_PHASE],
      },
    ],
  },
  'Truggs Troggherd (AoR) - Crunchy Shinies': {
    effects: [
      {
        name: `Crunchy Shinies (AoR) - Once Per Battle`,
        desc: `Effect: For the rest of the turn, add 3 to run rolls and charge rolls for this unit.`,
        when: [MOVEMENT_PHASE],
      },
    ],
  },
  /* 'Loonstone Teefcaps': {
    effects: [
      {
        name: `Loonstone Teefcaps`,
        desc: `SQUIG HERO with mount or companion only. Improve the Rend characteristic of the bearer's Fang-filled Gob, Massive Fang-filled Gob or Huge Fang-filled Gobs by 1.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Moonface Mommet': {
    effects: [
      {
        name: `Moonface Mommet`,
        desc: `WIZARD only. At the start of the combat phase, pick 1 enemy unit within 12" of the bearer. Subtract 1 from save rolls for attacks that target that unit until the end of the phase.`,
        when: [START_OF_COMBAT_PHASE],
      },
      {
        name: `Moonface Mommet`,
        desc: `If active, subtract 1 from save rolls for attacks that target that unit until the end of the phase.`,
        when: [SAVES_PHASE],
      },
    ],
  },
  'Staff of Sneaky Stealin': {
    effects: [
      {
        name: `Staff of Sneaky Stealin'`,
        desc: `WIZARD only. Add 1 to casting rolls for the bearer. Each time the bearer unbinds a spell, add 1 to casting rolls for the bearer for the rest of the battle.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Totem of the Spider God': {
    effects: [
      {
        name: `Totem of the Spider God`,
        desc: `While other friendly SPIDERFANG units are wholly within 12" of the bearer, add 1 to the number of mortal wounds caused by the Spider Venom ability of those units if the unmodified hit roll was 6.

        Designer's Note: If a unit is affected by the Light of the Bad Moon, this artefact of power does not affect unmodified hit rolls of 5; it only affects unmodified hit rolls of 6.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Headdress of Many Eyes': {
    effects: [
      {
        name: `Headdress of Many Eyes`,
        desc: `SCUTTLEBOSS only. Only unmodified hit rolls of 5 or 6 successfully score a hit for attacks that target the bearer.`,
        when: [SHOOTING_PHASE, COMBAT_PHASE],
      },
    ],
  },
  "Nibbla's 'Itty Ring": {
    effects: [
      {
        name: `Nibbla's 'Itty Ring`,
        desc: `WIZARD only. Once per battle, at the start of your hero phase, you can say the bearer will call upon the ring's power. If you do so, roll a dice and add the result to casting rolls made by the bearer until the end of the phase.`,
        when: [START_OF_HERO_PHASE],
      },
    ],
  },

  'Glowy Howzit': {
    effects: [
      {
        name: `Glowy Howzit`,
        desc: `The bearer has a ward of 4+. At the end of each phase, if the bearer was allocated any wounds in that phase that were not negated, roll a dice. On a 1, the bearer eats the Glowy Howzit and it cannot be used again for the rest of the battle.`,
        when: [WARDS_PHASE, DURING_GAME],
      },
    ],
  },
  'Speaky-skull Fetish': {
    effects: [
      {
        name: `Speaky-skull Fetish`,
        desc: `At the start of your hero phase roll 3 dice. For each 6, you receive 1 extra command point. In addition, the bearer can issue the same command up to 2 times in the same phase (a command point is spent each time a command is issued by the bearer as normal).`,
        when: [START_OF_HERO_PHASE],
      },
    ],
  },
  'Pet Gribbly': {
    effects: [
      {
        name: `Pet Gribbly`,
        desc: `Add 1 to the bearer's Wounds characteristic. In addition, each time a wound is allocated to the bearer and not negated, roll a dice. On a 1, the Pet Gribbly is squished. When the Pet Gribbly is squished, the bearer becomes enraged for the rest of the battle. Add 1 to hit rolls and wound rolls for attacks made by the bearer while they are enraged.`,
        when: [WOUND_ALLOCATION_PHASE],
      },
    ],
  },

  // Trugg's Troggherd
  'Thwackwheezer Club': {
    effects: [
      {
        name: `Thwackwheezer Club`,
        desc: `Subtract 1 from hit rolls and wound rolls for attacks that target the bearer if they have been picked to fight in the same phase.`,
        when: [COMBAT_PHASE, SHOOTING_PHASE],
        rule_sources: [meta_rule_sources.BOOK_DAWNBRINGERS_BOOK_2],
      },
    ],
  },
  'Crunchy Shinies': {
    effects: [
      {
        name: `Crunchy Shinies`,
        desc: `The bearer has a Move characteristic of D6+5"`,
        when: [MOVEMENT_PHASE],
        rule_sources: [meta_rule_sources.BOOK_DAWNBRINGERS_BOOK_2],
      },
    ],
  },
  'Loonstone Teef': {
    effects: [
      {
        name: `Loonstone Teef`,
        desc: `The bearer gains the MONSTER keyword. If the bearer already has the MONSTER keyword, you can carry out 2 different monstrous rampages with it in the same phase instead of 1.`,
        when: [END_OF_CHARGE_PHASE],
        rule_sources: [meta_rule_sources.BOOK_DAWNBRINGERS_BOOK_2],
      },
    ],
  }, */
} satisfies TItemDescriptions

export default tagAs(Artifacts, 'artifact')
