import { TItemDescriptions } from 'factions/factionTypes'
import { tagAs } from 'factions/metatagger'
import {
  COMBAT_PHASE,
  END_OF_COMBAT_PHASE,
  END_OF_TURN,
  HERO_PHASE,
  START_OF_COMBAT_PHASE,
  START_OF_HERO_PHASE,
  START_OF_ROUND,
} from 'types/phases'

const CommandTraits = {
  'Bathed in Blood': {
    effects: [
      {
        name: `Bathed in Blood`,
        desc: `Effect: Heal (3) this unit if it is in combat.`,
        when: [END_OF_TURN],
      },
    ],
  },
  'Zealous Orator': {
    effects: [
      {
        name: `Zealous Orator - Passive`,
        desc: `Effect: If a friendly unit wholly within 12" of this unit uses the Rally command, you can make 3 additional rally rolls of D6.`,
        when: [HERO_PHASE],
      },
    ],
  },
  /* 'Sacrificial Overseer': {
    effects: [
      {
        name: `Sacrificial Overseer`,
        desc: `After this general has fought for the first time in the combat phase, if any enemy models were slain by wounds caused by this general's attacks in that phase, this general is said to be revelling in murder until the end of the phase. If this general is revelling in murder, they can fight for a second time in that phase. The strike-last effect applies to this general when they fight for that second time.`,
        when: [COMBAT_PHASE],
      },
    ],
  }, */
  'Master of Poisons': {
    effects: [
      {
        name: `Master of Poisons`,
        desc: `Declare: Pick an enemy unit that had any damage points allocated to it this turn by this units combat attacks to be the target. 
        Effect: For the rest of the battle: 
        The target cannot be healed. 
        Slain models cannot be returned to the target unit.`,
        when: [END_OF_TURN],
      },
    ],
  },
  /* 'True Believer': {
    effects: [
      {
        name: `True Believer`,
        desc: `Add 1 to the number of the current battle round when determining the abilities gained by this general from the Blood Rites battle trait (pg 66). This ability and other similar abilities are cumulative.`,
        when: [START_OF_ROUND],
      },
    ],
  },
  'Arcane Mastery': {
    effects: [
      {
        name: `Arcane Mastery`,
        desc: `WIZARD only. This general knows all of the spells from the Lore of Shadows (pg 70) in addition to the other spells it knows.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Fuelled by Revenge': {
    effects: [
      {
        name: `Fuelled by Revenge`,
        desc: `MELUSAI IRONSCALE only. Once per battle, at the start of the combat phase, you can say that this general will wreak Khaine's vengeance. If you do so, until the end of that phase, add 1 to the Attacks characteristic of melee weapons used by friendly MELUSAI units wholly within 12" of this general.`,
        when: [START_OF_COMBAT_PHASE],
      },
    ],
  }, */
} satisfies TItemDescriptions

export default tagAs(CommandTraits, 'command_trait')
