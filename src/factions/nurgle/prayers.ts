import { tagAs } from 'factions/metatagger'
import { HERO_PHASE } from 'types/phases'
import { TItemDescriptions } from 'factions/factionTypes'

const Prayers = {
  'Benedictions of Sickness': {
    effects: [
      {
        name: `Infectious Surge: Chant value of 3 (UNLIMITED)`,
        desc: `Declare: Pick a friendly Maggotkin of Nurgle Priest to chant this prayer, pick a visible friendly Maggotkin of Nurgle unit wholly within 12" of them to be the target, then make a chanting roll of D6. 
        Effect: Add 2" to the targets Move characteristic for the rest of the turn. In addition, if the chanting roll was 6+, for the rest of the turn, the target can use Charge abilities even if it used a Retreat ability in the same turn.`,
        when: [HERO_PHASE],
      },
      {
        name: `Agonising Vomiting: Chant value of 3`,
        desc: `Declare: Pick a friendly Maggotkin of Nurgle Priest to chant this prayer, pick a visible enemy unit within 18" of them to be the target, then make a chanting roll of D6. 
        Effect: Roll 7 dice. If the chanting roll was 6+, add 2 to each roll. For each 5+, inflict 1 mortal damage on the target.`,
        when: [HERO_PHASE],
      },
      {
        name: `Frothing Mucus: Chant value of 3`,
        desc: `Declare: Pick a friendly Maggotkin of Nurgle Priest to chant this prayer, pick a visible friendly Maggotkin of Nurgle unit wholly within 12" of them to be the target, then make a chanting roll of D6. 
        Effect: Until the start of your next turn, the Charge (+1 Damage) weapon ability has no effect on combat attacks that target the target. If the chanting roll was 6+, weapon abilities other than the Companion weapon ability have no effect instead.`,
        when: [HERO_PHASE],
      },
    ],
  },
} satisfies TItemDescriptions

export default tagAs(Prayers, 'prayer')
