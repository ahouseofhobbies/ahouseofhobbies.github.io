import { TItemDescriptions } from 'factions/factionTypes'
import { tagAs } from 'factions/metatagger'
import {
  CHARGE_PHASE,
  COMBAT_PHASE,
  DURING_ANY_PHASE,
  DURING_GAME,
  HERO_PHASE,
  MOVEMENT_PHASE,
} from 'types/phases'

const IronjawzCommandTraits = {
  'Hulking Brute': {
    effects: [
      {
        name: `Hulking Brute`,
        desc: `Declare: If this unit charged this turn, pick an enemy unit within 1" of it to be the target. 
        Effect: Roll a D3. On a 2+, inflict an amount of mortal damage on the target equal to the roll. If this units unmodified charge roll this turn was 8+, roll a D6 instead of a D3.`,
        when: [CHARGE_PHASE],
      },
    ],
  },

  'Mega Bossy': {
    effects: [
      {
        name: `Mega Bossy - Passive`,
        desc: `Effect: If this unit charged this turn, for the rest of the turn, add 1 to charge rolls for friendly Ironjawz units while they are wholly within 18" of this unit.`,
        when: [CHARGE_PHASE],
      },
    ],
  },

  'An Eye for Da Fight': {
    effects: [
      {
        name: `An Eye for Da Fight - Reaction: You declared the Redeploy command for a friendly Ironjawz unit wholly within 12" of this unit`,
        desc: `Effect: If you roll a 1-3 when determining the distance that unit can move, you can use a value of 4 instead.`,
        when: [MOVEMENT_PHASE],
      },
    ],
  },

  'Big Waaagh! (AoR) - A Proper Sneak': {
    effects: [
      {
        name: `A Proper Sneak (AoR) - Once Per Battle`,
        desc: `Declare: You can use this ability if this unit has the Power of the Waaagh! keyword and a friendly unit has not used a Brutal Kunnin' ability this turn.
          Effect: For the rest of the battle round, friendly Big Waaagh! units have Ward(5+) while they are wholly within 12" of this unit.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Big Waaagh! (AoR) - Da Old One-Two': {
    effects: [
      {
        name: `Da Old One-Two (AoR) - Once Per Battle`,
        desc: `Declare: You can use this ability if this unit has the Power of the Waaagh! keyword and a friendly unit has not used a Brutal Kunnin' ability this turn.
            Effect: For the rest of the battle round, friendly Big Waaagh! units' melee weapons have Crit(2 Hits) while they are wholly within 12" of this unit.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Big Waaagh! (AoR) - Get Krumpin!': {
    effects: [
      {
        name: `Get Krumpin'! (AoR) - Once Per Battle`,
        desc: `Declare: You can use this ability if this unit has the Power of the Waaagh! keyword and a friendly unit has not used a Brutal Kunnin' ability this turn.
            Effect: For the rest of the battle round, add 1 to wound rolls for combat attacks made by friendly Big Waaagh! units while they are wholly within 12" of this unit.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Big Waaagh! (AoR) - Takin Names': {
    effects: [
      {
        name: `Takin' Names (AoR) - Passive`,
        desc: `Effect: If an enemy Hero is destroyed by this unit, this unit has the Power of the Waaagh! keyword for the rest of the battle.`,
        when: [DURING_GAME],
      },
    ],
  },
  'Krazoggs Grunta Stampede (AoR)': {
    effects: [
      {
        name: `Trophy Hunta (AoR) - Passive`,
        desc: `Effect: This units Pig-hakka has Anti-Monster (+1 Rend) and Anti-War Machine (+1 Rend).`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Zoggroks Ironmongerz (AoR)': {
    effects: [
      {
        name: `Oi! Back to it (AoR) - Passive`,
        desc: `Effect: If a friendly Zoggrok's Ironmongerz Ardboyz or Brutes unit wholly within 12" of this unit uses the Rally command, you can make 3 additional rally rolls of D6.`,
        when: [HERO_PHASE],
      },
    ],
  },

  /* 'Touched by the Waaagh!': {
    effects: [
      {
        name: `Touched by the Waaagh!`,
        desc: `Before attempting to cast a spell with this general, you must pick a unit within 6" of them. That unit suffers D3 mortal wounds but you can add the number of mortal wounds caused to that unit to the casting roll for the spell. If you pick this general to suffer the mortal wounds and they are slain by one of those wounds, the spell is not successfully cast.`,
        when: [HERO_PHASE],
      },
    ],
  },

  'Master of the Weird': {
    effects: [
      {
        name: `Master of the Weird`,
        desc: `You can pick 1 extra spell for this general from the Lore of the Weird (pg 91).`,
        when: [HERO_PHASE],
      },
    ],
  }, */
} satisfies TItemDescriptions

export default tagAs(IronjawzCommandTraits, 'command_trait')
