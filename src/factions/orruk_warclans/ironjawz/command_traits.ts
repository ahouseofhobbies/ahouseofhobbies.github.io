import { TItemDescriptions } from 'factions/factionTypes'
import { tagAs } from 'factions/metatagger'
import { CHARGE_PHASE, HERO_PHASE, MOVEMENT_PHASE } from 'types/phases'

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
