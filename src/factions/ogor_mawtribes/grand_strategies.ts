import { TItemDescriptions } from 'factions/factionTypes'
import { tagAs } from 'factions/metatagger'
import meta_rule_sources from 'meta/rule_sources'
import { END_OF_GAME } from 'types/phases'

const GrandStrategies = {
 /* 'Ready for Plunder': {
    effects: [
      {
        name: `Ready for Plunder`,
        desc: `When the battle ends, you complete this grand strategy if there are more friendly units wholly within enemy territory than enemy units.`,
        when: [END_OF_GAME],
      },
    ],
  },
  'Saga of the Monster Hunter': {
    effects: [
      {
        name: `Saga of the Monster Hunter`,
        desc: `When the battle ends, you complete this grand strategy If an enemy MONSTER was destroyed by wounds caused by an attack made by the model picked to be your general and the model picked to be your general has not been slain.`,
        when: [END_OF_GAME],
      },
    ],
  },
  'Enough Grub For All': {
    effects: [
      {
        name: `Enough Grub For All`,
        desc: `When the battle ends, you complete this grand strategy if a Great Mawpot in your army is full and you spent all of that Great Mawpot's magic at least once during the battle.`,
        when: [END_OF_GAME],
      },
    ],
  },
  'On the Mawpath': {
    effects: [
      {
        name: `On the Mawpath`,
        desc: `When the battle ends, you complete this grand strategy if you completed 4 or more battle tactics and each of those battle tactics was from the Glory to the Gulping God (Ogor Tactics).`,
        when: [END_OF_GAME],
      },
    ],
  },
  // The Roving Maw
  'Still Not Satiated': {
    effects: [
      {
        name: `Still Not Satiated`,
        desc: `When the battle ends, you complete this grand strategy if 6 or more enemy models were slain by the Mawpit'sHead Butcher ability.`,
        when: [END_OF_GAME],
        rule_sources: [meta_rule_sources.BOOK_DAWNBRINGERS_BOOK_3],
      },
    ],
  }, */
} satisfies TItemDescriptions

export default tagAs(GrandStrategies, 'grand_strategy')
