import { TItemDescriptions } from 'factions/factionTypes'
import { tagAs } from 'factions/metatagger'
import {
  CHARGE_PHASE,
  COMBAT_PHASE,
  HERO_PHASE,
  START_OF_HERO_PHASE,
  WOUND_ALLOCATION_PHASE,
} from 'types/phases'

const CommandTraits = {
  'Blood of the Berzerker': {
    effects: [
      {
        name: `Blood of the Berzerker - Passive`,
        desc: `Effect: Add 1 to charge rolls for friendly Fyreslayers units while they are wholly within 12" of this unit.`,
        when: [CHARGE_PHASE],
      },
    ],
  },
  'Ash-Beard': {
    effects: [
      {
        name: `Ash-Beard - Passive`,
        desc: `Efect: If this unit is not a Priest, they have Priest (1). If this unit was already a Priest, add 1 to this units chanting rolls.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Fiercely Competitive': {
    effects: [
      {
        name: `Fiercely Competitive - Passive`,
        desc: `Effect: If this unit is in combat with an enemy unit that has Strike-first, this unit has Strike-first. If this unit is in combat with an enemy unit that uses the All-out Attack command, add 1 to hit rolls for this units attacks for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  /*'Blood of the Berzerker': {
    effects: [
      {
        name: `Blood of the Berzerker`,
        desc: `Once per battle, in the combat phase, after this general has fought for the first time in that phase, you can say that they will go berserk. If you do so, this general can fight for a second time in that phase. The strike-last effect applies to this general when they fight for that second time.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Ash-beard': {
    effects: [
      {
        name: `Ash-beard`,
        desc: `This general knows 2 prayers from the Zharrgrim Blessings prayer scripture (pg 60) instead of 1.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Master Priest': {
    effects: [
      {
        name: `Master Priest`,
        desc: `Once per battle, at the start of your hero phase, if this general is on the battlefield, you can activate 1 ur-gold rune that has already been activated using the Ur-gold Runes battle trait (pg 57) instead of 1 that has not yet been activated.`,
        when: [START_OF_HERO_PHASE],
      },
    ],
  },
  'Avatar of Vulcatrix': {
    effects: [
      {
        name: `Avatar of Vulcatrix`,
        desc: `If this general is slain and there is not a Molten Infernoth invocation under your command on the battlefield, before removing this general from play, you can set up 1 Molten Infernoth within 6" of this general. If you do not have a Molten Infernoth in your army, this new Molten Infernoth is added to your army. After the invocation has been set up, remove this general from play and then apply the effects of the Molten Infernoth's Burning Tide ability.

        If this general is slain and there is a Molten Infernoth invocation under your command on the battlefield, remove this general from play and then apply the effects of the Molten Infernoth's Burning Tide ability as if the invocation has just been set up.`,
        when: [WOUND_ALLOCATION_PHASE],
      },
    ],
  },
  'Raised Around Beasts': {
    effects: [
      {
        name: `Raised Around Beasts`,
        desc: `Improve the Rend characteristic of melee weapons used by friendly LOFNIR DROTHKEEPERS units that do not have the MAGMADROTH keyword and are wholly within 9" of this general by 2 if the target is a MONSTER.`,
        when: [COMBAT_PHASE],
      },
    ],
  }, */
} satisfies TItemDescriptions

export default tagAs(CommandTraits, 'command_trait')
