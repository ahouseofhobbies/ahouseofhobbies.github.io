import { tagAs } from 'factions/metatagger'
import { HERO_PHASE } from 'types/phases'
import rule_sources from './rule_sources'
import { TItemDescriptions } from 'factions/factionTypes'

const Prayers = {
  'Everwinter Prayers': {
    effects: [
      {
        name: `Call of the Blizzard: Chant value of 4 (UNLIMITED)`,
        desc: `Declare: Pick a friendly Ogor Mawtribes Priest to chant this prayer, pick a terrain feature within 18" of them to be the target, then make a chanting roll of D6. 
        Effect: Place a blizzard token next to the target. Terrain features that have a blizzard token gain the Obscuring terrain ability. In addition, if the chanting roll was 8+, until the start of your next turn, friendly Beastclaw Raiders units have Ward (5+) while they are within 3" of any terrain features that have blizzard tokens.`,
        when: [HERO_PHASE],
      },
      {
        name: `Pulverising Hailstorm: Chant value of 4`,
        desc: `Declare: Pick a friendly Ogor Mawtribes Priest to chant this prayer, pick a point on the battlefield within 12" of them, then pick each visible enemy unit within 3" of that point to be the targets. Then, make a chanting roll of D6. 
        Effect: Roll a D3 for each target. On a 2+, inflict an amount of mortal damage on the target equal to the roll. If the chanting roll was 8+, double the amount of mortal damage inflicted.`,
        when: [HERO_PHASE],
      },
      {
        name: `Keening Gale: Chant value of 4`,
        desc: `Declare: Pick a friendly Ogor Mawtribes Priest to chant this prayer, pick a visible friendly Ogor Mawtribes Monster or Mournfang Pack unit wholly within 12" of them to be the target, then make a chanting roll of D6. 
        Effect: For the rest of the turn, the target can use a Run ability and still use Charge abilities later in the turn. In addition, if the chanting roll was 8+, you can reroll run rolls and charge rolls for the target for the rest of the turn.`,
        when: [HERO_PHASE],
      },
    ],
  },
  /* 'Keening Gale': {
    effects: [
      {
        name: `Keening Gale`,
        desc: `Answer value of 3 and range of 18". If answered, pick 1 friendly MONSTER or MOURNFANG PACK wholly within range and visible to the chanter. Add 3" to that unit's Move characteristic until the start of your next hero phase.`,
        when: [HERO_PHASE],
        rule_sources: [rule_sources.BATTLETOME_OGOR_MAWTRIBES],
      },
    ],
  },
  'Call of the Blizzard': {
    effects: [
      {
        name: `Call of the Blizzard`,
        desc: `Answer value of 3 and range of 18". If answered, pick 1 friendly ICEFALL YHETEES or FROST SABERS unit wholly within range and visible to the chanter. You can return 1 slain model to that unit.`,
        when: [HERO_PHASE],
        rule_sources: [rule_sources.BATTLETOME_OGOR_MAWTRIBES],
      },
    ],
  },

  // Unit Prayers
  "Winter's Endurance": {
    effects: [
      {
        name: `Winter's Endurance`,
        desc: `This prayer has an answer value of 3 and range of 18". If answered, pick 1 friendly BEASTCLAW RAIDERS unit wholly within range and visible to the chanter. You can heal D3 wounds allocated to that unit.`,
        when: [HERO_PHASE],
        rule_sources: [rule_sources.BATTLETOME_OGOR_MAWTRIBES],
      },
    ],
  },
  "Winter's Strength": {
    effects: [
      {
        name: `Winter's Strength`,
        desc: `This prayer has an answer value of 3 and range of 18". If answered, pick 1 friendly BEASTCLAW RAIDERS unit wholly within range and visible to the chanter. Add 1 to wound rolls for attacks made with melee weapons by that unit until the start of your next hero phase.`,
        when: [HERO_PHASE],
        rule_sources: [rule_sources.BATTLETOME_OGOR_MAWTRIBES],
      },
    ],
  }, */
} satisfies TItemDescriptions

export default tagAs(Prayers, 'prayer')
