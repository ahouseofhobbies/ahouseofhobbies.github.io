import { TItemDescriptions } from 'factions/factionTypes'
import { tagAs } from 'factions/metatagger'
import { HELSMITHS_OF_HASHUT } from 'meta/factions'
import {
  CHARGE_PHASE,
  COMBAT_PHASE,
  DURING_GAME,
  MOVEMENT_PHASE,
  SAVES_PHASE,
  START_OF_HERO_PHASE,
  START_OF_ROUND,
} from 'types/phases'

const BattleTraits = {
  // Helsmiths of Hashut Allegiance
  [HELSMITHS_OF_HASHUT]: {
    effects: [
      {
        name: `Command Ability - All Out Slaughter - Once Per Battle`,
        desc: `Declare: Pick a friendly Daughters of Khaine Infantry unit that is in combat to use this ability. 
        Effect: That unit can use 2 Fight abilities this phase. After the first is used, this unit has Strike-last for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Blood Rites - Passive`,
        desc: `Effect: A different effect applies to friendly Daughters of Khaine units each battle round, as shown below. The effects of all previous battle rounds also apply to those units.`,
        when: [DURING_GAME],
      },
      {
        name: `Blood Rites - Battle Round 1`,
        desc: `Add 1 to Run rolls for this unit.`,
        when: [MOVEMENT_PHASE],
      },
      {
        name: `Blood Rites - Battle Round 2`,
        desc: `Add 1 to Charge rolls for this unit.`,
        when: [CHARGE_PHASE],
      },
      {
        name: `Blood Rites - Battle Round 3`,
        desc: `Add 1 to Hit rolls for this unit.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Blood Rites - Battle Round 4`,
        desc: `Add 1 to Wound rolls for this unit.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Blood Rites - Battle Round 5`,
        desc: `Add 1 to the Attacks characteristic of this unit's melee weapons.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
} satisfies TItemDescriptions

export default tagAs(BattleTraits, 'battle_trait')
