import { TItemDescriptions } from 'factions/factionTypes'
import { tagAs } from 'factions/metatagger'
import {
  CHARGE_PHASE,
  COMBAT_PHASE,
  DURING_GAME,
  END_OF_TURN,
  HERO_PHASE,
  SHOOTING_PHASE,
  START_OF_ANY_PHASE,
  START_OF_COMBAT_PHASE,
  START_OF_HERO_PHASE,
} from 'types/phases'

const Artifacts = {
  /* 'Master Rune of Unbreakable Resolve': {
    effects: [
      {
        name: `Master Rune of Unbreakable Resolve`,
        desc: `Once per battle, at the start of a phase, you can say that the bearer will use their master rune. If you do so, the bearer has a ward of 3+ until the end of that phase.`,
        when: [START_OF_ANY_PHASE],
      },
    ],
  },
  'Magnetised Runes': {
    effects: [
      {
        name: `Magnetised Runes`,
        desc: `Add 2 to charge rolls made for the bearer.`,
        when: [CHARGE_PHASE],
      },
    ],
  },
  'The Fiery Ring': {
    effects: [
      {
        name: `The Fiery Ring`,
        desc: `Once per battle, in your shooting phase, you can pick 1 enemy unit within 6" of the bearer and roll a dice. On a 2+, that unit suffers D6 mortal wounds.`,
        when: [SHOOTING_PHASE],
      },
    ],
  }, */
  'Draught of the Finest Magmalt': {
    effects: [
      {
        name: `Draught of the Finest Magmalt - One Per Battle`,
        desc: `Effect: Add 3 to the Attacks characteristic of this units melee weapons for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  /* 'The Axe of Grimnir': {
    effects: [
      {
        name: `The Axe of Grimnir`,
        desc: `Pick 1 of the bearer's melee weapons. Improve the Rend characteristic of that weapon by 1 and add 1 to the Damage characteristic of that weapon.`,
        when: [COMBAT_PHASE],
      },
    ],
  }, */
  'Ash-cloud Rune': {
    effects: [
      {
        name: `Ash-cloud Rune - Once Per Battle`,
        desc: `Effect: Until the start of your next turn, friendly Infantry units cannot be targeted by shooting attacks while they are wholly within 12" of this unit.`,
        when: [HERO_PHASE],
      },
    ],
  },
  /* 'Volatile Brazier': {
    effects: [
      {
        name: `Volatile Brazier`,
        desc: `When the bearer attempts to summon an invocation, you can reroll chanting rolls for the bearer and the range of the prayer is doubled.`,
        when: [HERO_PHASE],
      },
    ],
  }, */
  'Droth-helm': {
    effects: [
      {
        name: `Droth-helm - Passive`,
        desc: `Effect: Add 1 to hit rolls for Companion weapons used by friendly Fyreslayers units while they are wholly within 12" of this unit.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Lofnir Drothkeepers (AoR)': {
    effects: [
      {
        name: `Mastery Over Monsters (AoR) - Passive`,
        desc: `Effect: While this unit is contesting an objective, enemy Monsters contesting that objective each have a maximum control score of 2.`,
        when: [END_OF_TURN],
      },
    ],
  },
  /*  'The Daemon Slayer': {
    effects: [
      {
        name: `The Daemon Slayer`,
        desc: `Pick 1 of the bearer's melee weapons. Ward rolls cannot be made for wounds and mortal wounds caused by attacks made with that weapon.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Nulsidian Icon': {
    effects: [
      {
        name: `Nulsidian Icon`,
        desc: `This artefact of power can only be given to a BATTLESMITH. Each time a friendly FYRESLAYERS unit wholly within 12" of the bearer is affected by a spell or the abilities of an endless spell, you can roll a dice. On a 4+, ignore the effect of that spell or the effects of that endless spell's abilities on that unit.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Mastery Over Monsters': {
    effects: [
      {
        name: `Mastery Over Monsters`,
        desc: `While the bearer is contesting an objective, each enemy MONSTER contesting that objective counts as 2 models regardless of any other abilities that would allow that enemy MONSTER to count as more models (such as Mightier Makes Rightier).`,
        when: [DURING_GAME],
      },
    ],
  }, */
} satisfies TItemDescriptions

export default tagAs(Artifacts, 'artifact')
