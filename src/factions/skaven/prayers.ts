import { TItemDescriptions } from 'factions/factionTypes'
import { tagAs } from 'factions/metatagger'
import { HERO_PHASE } from 'types/phases'

const Prayers = {
  'Noxious Prayers': {
    effects: [
      {
        name: `Filth-Crust: Chant value of 4 (UNLIMITED)`,
        desc: `Declare: Pick a friendly Skaven Priest to chant this prayer, pick a visible friendly Skaven Infantry unit wholly within 13" of them to be the target, then make a chanting roll of D6. 
        Effect: Add 1 to wound rolls for the targets combat attacks until the start of your next turn. In addition, if the chanting roll was 8+, the targets melee weapons have Crit (Mortal) until the start of your next turn.`,
        when: [HERO_PHASE],
      },
      {
        name: `Bile-Torrent: Chant value of 4`,
        desc: `Declare: Pick a friendly Skaven Priest to chant this prayer, pick a visible enemy unit within 13" of them to be the target, then make a chanting roll of D6. 
        Effect: Roll a number of dice equal to the number of models in the target unit. For each 5+, inflict 1 mortal damage on the target. If the chanting roll was 8+, inflict 1 mortal damage on the target for each 4+ instead.`,
        when: [HERO_PHASE],
      },
      {
        name: `Rabid-Tough: Chant value of 5`,
        desc: `Declare: Pick a friendly Skaven Priest to chant this prayer, pick a visible friendly Skaven Infantry unit wholly within 13" of them to be the target, then make a chanting roll of D6. 
        Effect: Subtract 1 from wound rolls for attacks that target that unit until the start of your next turn. In addition, if the chanting roll was 8+, add 1 to save rolls for the target until the start of your next turn.`,
        when: [HERO_PHASE],
      },
    ],
  },
 /* 'Filth-filth!': {
    effects: [
      {
        name: `Filth-filth!`,
        desc: `Answer value of 3 and a range of 13". If answered, pick 1 friendly CLANS PESTILENS unit within range and visible to the chanter. Add 1 to wound rolls for attacks made by that unit until your next hero phase.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Rabid-rabid!': {
    effects: [
      {
        name: `Rabid-rabid!`,
        desc: `Answer value of and a range of 13". If answered, pick 1 friendly CLANS PESTILENS unit within range and visible to the chanter. Add 1 to the Attacks characteristic of melee weapons used by that unit until your next hero phase.`,
        when: [HERO_PHASE],
      },
    ],
  },
  // Unit prayers
  'Pestilence-pestilence!': {
    effects: [
      {
        name: `Pestilence-pestilence!`,
        desc: `Answer value of 3 and a range of 13". If answered, pick a point on the battlefield within range and visible to the chanter and roll a dice for each unit within 3" of that point. On a 4+, that unit suffers D3 mortal wounds. If that unit is a Clans Pestilens unit, heal D3 wounds allocated to that unit instead.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Befoul-befoul!': {
    effects: [
      {
        name: `Befoul-befoul!`,
        desc: `Befoul-befoul! is a prayer that has an answer value of 3 and a range of 13". If answered, pick an objective on the battlefield within range and visible to the chanter. That objective is befouled until the start of your next hero phase (see the Skabbik's Plaguepack warscroll). In addition, roll a dice for each friendly and enemy unit contesting that objective. On a 4+, that unit suffers D3 mortal wounds.`,
        when: [HERO_PHASE],
      },
    ],
  }, */
} satisfies TItemDescriptions

export default tagAs(Prayers, 'prayer')
