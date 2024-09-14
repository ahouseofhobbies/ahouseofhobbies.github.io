import { TItemDescriptions } from 'factions/factionTypes'
import { tagAs } from 'factions/metatagger'
import { HERO_PHASE } from 'types/phases'

const Prayers = {
  'Rites of Delusion': {
    effects: [
      {
        name: `Blessed Feast: Chant value of 5 (UNLIMITED)`,
        desc: `Declare: Pick a friendly Flesh-eater Courts Priest to chant this prayer, pick a visible enemy unit within 18" of them to be the target, then make a chanting roll of D6. 
        Effect: Until the start of your next turn, each time a model in the target unit is slain, Heal (1) a friendly Flesh-eater Courts unit in combat with the target. If the chanting roll was 10+, Heal (D3) that friendly unit instead.`,
        when: [HERO_PHASE],
      },
      {
        name: `The Summerking's Favour: Chant value of 5`,
        desc: `Declare: Pick a friendly Flesh-eater Courts Priest to chant this prayer, pick a visible friendly Flesh-eater Courts Hero wholly within 18" of them to be the target, then make a chanting roll of D6. 
        Effect: Until the start of your next turn, each time an enemy model is slain by a combat attack made by the target, give the target 1 additional noble deeds point after the Fight ability has been resolved. If the chanting roll was 10+, until the start of your next turn, each time an enemy model is slain by a combat attack made by the target, give all friendly Flesh-eater Courts Heroes wholly within 18" of the target 1 additional noble deeds point after the Fight ability has been resolved instead of only the target.`,
        when: [HERO_PHASE],
      },
      {
        name: `Charnel Conviction: Chant value of 5`,
        desc: `Declare: Pick a friendly Flesh-eater Courts Priest to chant this prayer, pick a visible friendly Flesh-eater Courts unit wholly within 18" of them to be the target, then make a chanting roll of D6. 
        Effect: Until the start of your next turn, the target has Ward (5+). If the chanting roll was 10+, pick another friendly Flesh-eater Courts unit wholly within 18" of the target. That unit also has Ward (5+) until the start of your next turn.`,
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
