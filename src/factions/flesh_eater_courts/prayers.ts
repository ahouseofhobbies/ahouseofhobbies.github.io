import { TItemDescriptions } from 'factions/factionTypes'
import { tagAs } from 'factions/metatagger'
import { HERO_PHASE } from 'types/phases'

const Prayers = {
  'Rites of Delusion': {
    effects: [
      {
        name: `Excommunication: Chant value of 4 (UNLIMITED)`,
        desc: `Declare: Pick a friendly Flesh-Eater Courts Priest to chant this prayer, pick a visible enemy unit within 18" of them to be the target, then make a chanting roll of D6.
        Effect: Until the start of your next turn, ignore positive modifiers to save rolls for the target. In addition, if the chanting roll was 10+, ward rolls cannot be made for the target until the start of your next turn.`,
        when: [HERO_PHASE],
      },
      {
        name: `The Summerking's Favour: Chant value of 5`,
        desc: `Declare: Pick a friendly Flesh-Eater Courts Priest to chant this prayer, pick a visible friendly Flesh-Eater Courts Hero wholly within 12" of them to be the target, then make a chanting roll of D6. You cannot pick Nagash to be the target of this prayer.
        Effect: Resolve the effect of 'Renowned Might' below. If the chanting roll was 10+, resolve the effect of either 'Renowned Might' or 'Righteous Tenacity' instead.
        Renowned Might: Add 1 to the Damage characteristic of the target's melee weapons for the rest of the turn.
        Righteous Tenacity: The target can use 2 Fight abilities this turn. After the first is used, however, the target has Strike-Last for the rest of the turn.`,
        when: [HERO_PHASE],
      },
      {
        name: `Charnel Conviction: Chant value of 4`,
        desc: `Declare: Pick a friendly Flesh-Eater Courts Priest to chant this prayer, pick a visible friendly Flesh-Eater Courts unit wholly within 12" of them to be the target, then make a chanting roll of D6.
        Effect: Until the start of your next turn, the target has Ward (5+). If the chanting roll was 10+, pick another eligible unit to be a second target.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'The Knights of New Summercourt (AoR)': {
    effects: [
      {
        name: `Excommunication!: Chant value of 4 (UNLIMITED)`,
        desc: `Declare: Pick a friendly New Summercourt Priest to chant this prayer, pick a visible enemy unit within 18" of them to be the target, then make a chanting roll of D6.
        Effect: Until the start of your next turn, ignore positive modifiers to save rolls for the target. In addition, if the chanting roll was 10+, ward rolls cannot be made for the target until the start of your next turn.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'The Equinox Feast (AoR)': {
    effects: [
      {
        name: `A Midsummer Mania: Chant value of 4 (UNLIMITED)`,
        desc: `Declare: Pick a friendly Equinox Feast Priest to chant this prayer, pick a visible friendly unit wholly within 12" of them that has not been picked to be the target of this prayer this turn to be the target, then make a chanting roll of D6.
        Effect: Return D3 slain models to the target unit. If the chanting roll was 8+, return D3+3 slain models to the target unit instead.`,
        when: [HERO_PHASE],
      },
    ],
  },
  /* "The Summerking's Favour": {
    effects: [
      {
        name: `The Summerking's Favour`,
        desc: `Answer value of 3 and a range of 18". If answered, pick 1 friendly FLESH-EATER COURTS HERO wholly within range and visible to the chanter. Until your next hero phase, that Hero gains 1 additional noble deeds point each time they slay an enemy model.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Charnel Conviction': {
    effects: [
      {
        name: `Charnel Conviction`,
        desc: `Answer value of 3 and a range of 18". If answered, pick 1 friendly FLESH-EATER COURTS unit wholly within range and visible to the chanter. That unit has a ward of 5+ until your next hero phase.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Speak in Tongues': {
    effects: [
      {
        name: `Speak in Tongues`,
        desc: `Answer value of 3 and a range of 18". If answered, pick 1 enemy unit within range and visible to the chanter. Until your next hero phase, roll a dice each time that enemy unit receives a command. On a 4+, that command has no effect.`,
        when: [HERO_PHASE],
      },
    ],
  }, */
} satisfies TItemDescriptions

export default tagAs(Prayers, 'prayer')
