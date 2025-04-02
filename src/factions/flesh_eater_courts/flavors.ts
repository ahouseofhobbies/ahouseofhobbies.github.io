import { COMBAT_PHASE, DURING_GAME, END_OF_TURN, HERO_PHASE, START_OF_COMBAT_PHASE } from 'types/phases'
import { TItemDescriptions } from 'factions/factionTypes'

const Flavors = {
  'Cannibal Court': {
    effects: [
      {
        name: `A Hunger for Glory - Once Per Turn`,
        desc: `Effect: Give 1 noble deeds point to each friendly Flesh-eater Courts Hero wholly outside friendly territory.`,
        when: [END_OF_TURN],
      },
    ],
  },
  'Lords of the Manor': {
    effects: [
      {
        name: `Raise the Banners - Passive`,
        desc: `Effect: Each time an ability returns at least 1 slain model to a friendly unit that is not in combat, after that ability has benn resolved, if that unit is a Serfs unit, you can return 1 additional slain model to it, and if it is a Knights unit, roll a dice. On a 4+, you can return 1 additional slain model to it.`,
        when: [DURING_GAME],
      },
    ],
  },
  'Ghoul Patrol': {
    effects: [
      {
        name: `Gore-Splattered Hunters - Passive`,
        desc: `Effect: When players are alternating picking units to use a Fight ability, when it is your turn to pick a unit, you can pick 2 Crypt Ghouls units instead of 1. Neither unit can have Strike-last. Resolve the second Fight ability immediately after the first.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Royal Menagerie': {
    effects: [
      {
        name: `Meat for the Beast - Once Per Turn`,
        desc: `Declare: Pick a friendly Flesh-eater Courts Monster to be the target. 
        Effect: Roll a dice. On a 3+, the target has Strike-first for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  /*  Morgaunt: {
    effects: [
      {
        name: `Morgaunt Kingdoms`,
        desc: `Give 1 noble deeds point to each friendly MORGAUNT FLESH-EATER COURTS HERO at the end of the turn if that HERO is contesting an objective.`,
        when: [END_OF_TURN],
      },
    ],
  },
  Hollowmourne: {
    effects: [
      {
        name: `Grisly Cavaliers`,
        desc: `Add 1 to the Damage characteristic of melee weapons used by friendly HOLLOWMOURNE KNIGHTS units that have made a charge move in the same turn. This ability has no effect on attacks made by mounts.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  Blisterskin: {
    effects: [
      {
        name: `Pious Nobility`,
        desc: `Friendly ABHORRANTS gain the PRIEST keyword but they cannot cast spells and chant prayers in the same hero phase.`,
        when: [HERO_PHASE],
      },
    ],
  },
  Gristlegore: {
    effects: [
      {
        name: `Savage Strike`,
        desc: `At the start of your combat phase, you can pick 1 friendly GRISTLEGORE MONSTER on the battlefield. The strike-first effect applies to that MONSTER until the end of the phase.`,
        when: [START_OF_COMBAT_PHASE],
      },
    ],
  }, */
} satisfies TItemDescriptions

// Note: We do NOT use tagAs for Flavors
export default Flavors
