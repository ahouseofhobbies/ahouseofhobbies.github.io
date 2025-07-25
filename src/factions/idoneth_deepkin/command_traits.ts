import { tagAs } from 'factions/metatagger'
import {
  BATTLESHOCK_PHASE,
  COMBAT_PHASE,
  DURING_GAME,
  DURING_SETUP,
  END_OF_BATTLESHOCK_PHASE,
  END_OF_CHARGE_PHASE,
  END_OF_TURN,
  HERO_PHASE,
  SHOOTING_PHASE,
  START_OF_COMBAT_PHASE,
} from 'types/phases'
import rule_sources from './rule_sources'
import { TItemDescriptions } from 'factions/factionTypes'

const CommandTraits = {
  /* 'Merciless Raider': {
    effects: [
      {
        name: `Merciless Raider`,
        desc: `If the unmodified hit roll for an attack made by this general is 6, that attack automatically wounds the target (do not make a wound roll).`,
        when: [COMBAT_PHASE, SHOOTING_PHASE],
      },
    ],
  }, */
  'Hunter of Souls': {
    effects: [
      {
        name: `Hunter of Souls - Passive`,
        desc: `Effect: Pick 1 of the following weapon abilities for this unit's melee weapons to have this battle:
        Anti-Cavalry (+1 Rend)
        Anti-Infantry (+1 Rend)
        Anti-Monster (+1 Rend)`,
        when: [DURING_SETUP],
      },
    ],
  },
  /*  'Unstoppable Fury': {
    effects: [
      {
        name: `Unstoppable Fury`,
        desc: `While this general is affected by the High Tide ability from the Tides of Death table (pg 64), for each enemy unit within 3" of them when they fight in the combat phase, add 2 to the Attacks characteristic of their melee weapons until the end of that phase.`,
        when: [COMBAT_PHASE],
        rule_sources: [rule_sources.BATTLETOME_IDONETH_DEEPKIN, rule_sources.ERRATA_JULY_2022],
      },
    ],
  },
  'Born From Agony': {
    effects: [
      {
        name: `Born From Agony`,
        desc: `At the end of the battleshock phase, you can roll a dice for this general. On a 6, heal all wounds allocated to this general.`,
        when: [END_OF_BATTLESHOCK_PHASE],
      },
    ],
  },
  'Teachings of the Turscoll': {
    effects: [
      {
        name: `Teachings of the Turscoll`,
        desc: `If this general is on the battlefield at the start of the first battle round, before priority is determined, you can declare that the Tides of Death table will be reversed for your army. If you do so, the Ebb Tide ability applies in the first battle round, the High Tide ability applies in the second battle round, the Flood Tide ability applies in the third battle round, and the Low Tide ability applies in the fourth battle round, From the fifth battle round, the four Tides of Death steps are repeated in this order, starting with Ebb Tide.`,
        when: [DURING_GAME],
      },
    ],
  },
  'Lord of Storm and Sea': {
    effects: [
      {
        name: `Lord of Storm and Sea`,
        desc: `Do not take battleshock tests for friendly IDONETH DEEPKIN units wholly within 12" of this general.`,
        when: [BATTLESHOCK_PHASE],
      },
    ],
  }, */
  'Form of the Fangmora': {
    effects: [
      {
        name: `Form of the Fangmora - Passive`,
        desc: `Effect: If the unmodified hit roll for an attack that targets this unit is 1-3, the attack fails and the attack sequence ends.`,
        when: [SHOOTING_PHASE, COMBAT_PHASE],
      },
    ],
  },
  'Nightmare Legacy': {
    effects: [
      {
        name: `Nightmare Legacy - Passive`,
        desc: `Effect: Subtract 3 from the control scores of enemy units while they are within 6" of this unit.`,
        when: [END_OF_TURN],
      },
    ],
  },
  'Merciless Raider': {
    effects: [
      {
        name: `Merciless Raider`,
        desc: `Effect: If this unit is within 6" of a damaged enemy unit, this unit can move 6". It can pass through the combat ranges of enemy units but must end that move in combat with a damaged enemy unit.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Lord of Storm and Sea': {
    effects: [
      {
        name: `Lord of Storm and Sea - Passive`,
        desc: `Effect: Each time an ability returns at least 1 slain model to a friendly unit wholly within 12" of this unit, after that ability has been resolved, you can return 1 additional slain model to it.`,
        when: [DURING_GAME],
      },
    ],
  },
  'Endless Sea-Storm': {
    effects: [
      {
        name: `Endless Sea-Storm - Once Per Battle`,
        desc: `Effect: If this unit is a Wizard, add 1 to its power level for the rest of the turn. If this unit is not a Wizard, it gains Wizard (1) for the rest of the turn. 
        In addition, add 2 to the next casting roll or banishment roll for this unit this turn.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'The First Phalanx of Ionrach (AoR)': {
    effects: [
      {
        name: `Prodigy of the Asydrazor (AoR) - Once Per Battle - Reaction: You declared an Asydrazor ability for a friendly First Phalanx unit wholly within 12" of this unit`,
        desc: `Effect: No asydrazor points are spent to use that ability.`,
        when: [DURING_GAME],
      },
    ],
  },
  'Wardens of the Chorrileum (AoR)': {
    effects: [
      {
        name: `Serve the Enclave (AoR) - Passive`,
        desc: `Effect: While this unit and a friendly Chorrileum Namarti unit are contesting the same objective, this unit has a control score of 10 that cannot be modified.`,
        when: [END_OF_TURN],
      },
    ],
  },
  /* 'Endless Sea Storm': {
    effects: [
      {
        name: `Endless Sea Storm`,
        desc: `If this general successfully casts a an unmodified casting roll of 7+, this general can attempt to cast 1 extra spell in that phase.`,
        when: [HERO_PHASE],
      },
    ],
  }, */
} satisfies TItemDescriptions

export default tagAs(CommandTraits, 'command_trait')
