import { tagAs } from 'factions/metatagger'
import { HERO_PHASE } from 'types/phases'
import { TItemDescriptions } from 'factions/factionTypes'

const Prayers = {
  'Lore of Virulence': {
    effects: [
      {
        name: `Gift of Disease: Chant value of 3 (UNLIMITED)`,
        desc: `Declare: Pick a friendly Maggotkin of Nurgle Priest to chant this prayer, then make a chanting roll of D6.
        Effect: Until the start of your next turn, subtract 1 from wound rolls for attacks made by enemy units while they are in combat with the chanter. In addition, if the chanting roll was 10+, each enemy unit in combat with the chanter, excluding Manifestations and terrain features, has the Diseased keyword.`,
        when: [HERO_PHASE],
      },
      {
        name: `Favoured Poxes: Chant value of 4`,
        desc: `Declare: Pick a friendly Maggotkin of Nurgle Priest to chant this prayer, pick a visible enemy unit within 18" of the chanter to be the target, then make a chanting roll of D6.
        Effect: Until the start of your next turn, subtract 2 from charge rolls for the target. If the chanting roll was 10+, until the start of your next turn, subtract 1 from the number of dice rolled when making charge rolls for the target, to a minimum of 1, instead.`,
        when: [HERO_PHASE],
      },
      {
        name: `Bloated with Sickness: Chant value of 4`,
        desc: `Declare: Pick a friendly Maggotkin of Nurgle Priest to chant this prayer, pick a visible friendly non-Monster Maggotkin of Nurgle unit wholly within 12" of the chanter to be the target, then make a chanting roll of D6. 
        Effect: Until the start of your next turn, ignore the first damage point that would be allocated to the target in each phase. If the chanting roll was 10+, you can pick another eligible unit to be a second target.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Cycle of Corruption (AoR)': {
    effects: [
      {
        name: `Bacterial Blessing: Chant value of 4 (UNLIMITED)`,
        desc: `Declare: Pick a friendly Cycle of Corruption Priest to chant this prayer, pick a visible friendly Cycle of Corruption unit wholly within 12" of them to be the target, then make a chanting roll of D6.
        Effect: Until the start of your next turn, add 1 to wound rolls for the target's combat attacks. If the chanting roll was 7+, you can pick another eligible unit to be a second target.`,
        when: [HERO_PHASE],
      },
      {
        name: `Ever Turning: Chant value of 5`,
        desc: `Declare: Pick a friendly Cycle of Corruption Priest to chant this prayer, pick a chanting roll of D6.
        Effect: The next Cycle ability in the sequence is ripe for the rest of the battle round instead of the current Cycle ability. If the chanting roll was 12+, you can pick which Cycle ability is ripe.`,
        when: [HERO_PHASE],
      },
      {
        name: `Virulent Agonies: Chant value of 4`,
        desc: `Declare: Pick a friendly Cycle of Corruption Priest to chant this prayer, pick a visible enemy unit within 18" of them to be the target, then make a chanting roll of D6.
        Effect: Inflict 1 mortal damage on the target. Then, inflict 1 mortal damage on each other enemy unit within the target's combat range. If the chanting roll was 7+, inflict D3 mortal damage on the target instead of 1.`,
        when: [HERO_PHASE],
      },
    ],
  },
} satisfies TItemDescriptions

export default tagAs(Prayers, 'prayer')
