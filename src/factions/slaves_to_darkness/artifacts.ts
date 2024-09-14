import { tagAs } from 'factions/metatagger'
import {
  COMBAT_PHASE,
  END_OF_TURN,
  HERO_PHASE,
  START_OF_BATTLESHOCK_PHASE,
  START_OF_HERO_PHASE,
  START_OF_TURN,
  TURN_ONE_START_OF_TURN,
} from 'types/phases'
import rule_sources from './rule_sources'
import { TItemDescriptions } from 'factions/factionTypes'

const Artifacts = {
  // Shared
  'Infernal Puppet': {
    effects: [
      {
        name: `Infernal Puppet - Once Per Battle`,
        desc: `Declare: Pick a visible enemy Wizard within 24" of this unit to be the target. 
        Effect: For the rest of the turn, each time the target is picked to use a Spell ability, inflict D3 mortal damage on the target as a reaction. If the target is destroyed by this ability, do not resolve the effect of that Spell ability.`,
        when: [START_OF_TURN],
      },
    ],
  },
  'Realmwarpers Twist-Rune': {
    effects: [
      {
        name: `Realmwarpers Twist-Rune - Once Per Battle`,
        desc: `Declare: Pick a terrain feature within 12" of this unit to be the target. 
        Effect: If the target does not have the Obscuring terrain ability, it gains that ability until the start of your next turn. Then, roll a dice for each model (friendly and enemy) within 1" of the target. For each 5+, inflict 1 mortal damage on that models unit.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'The Conquerors Crown': {
    effects: [
      {
        name: `The Conqueror's Crown - Passive`,
        desc: `Effect: Subtract 5 from the control scores of enemy Infantry units while they are in combat with this unit.`,
        when: [END_OF_TURN],
      },
    ],
  },
  //SLAVES TO DARKNESS WIZARD HEROES
  /*'Chaos Familiar': {
    effects: [
      {
        name: `Chaos Familiar`,
        desc: `Once per battle, at the start of your hero phase you can say the bearer will call upon their Chaos Familiar. If you do so, the bearer can attempt to cast 1 additional spell in that hero phase, and that spell can be any from the Lore of the Damned.`,
        when: [START_OF_HERO_PHASE],
      },
    ],
  },
  'Infernal Puppet': {
    effects: [
      {
        name: `Infernal Puppet`,
        desc: `Once per battle, at the start of the enemy hero phase, you can pick 1 enemy WIZARD within 24" of the bearer and visible to them. Until the end of the phase, each time that WIZARD attempts to cast a spell they suffer D3 mortal wounds before the casting roll is made. If the WIZARD is slain by these mortal wounds, the casting attempt fails (do not roll the dice).`,
        when: [START_OF_HERO_PHASE],
      },
    ],
  },
  'Helm of Eldritch Command': {
    effects: [
      {
        name: `Helm of Eldritch Command`,
        desc: `If this unit dispells and endless spell, instead of it being dispelled you can say the bearer has seized control of it. If you do so, the bearer now controls that endless spell in the same manner as if they had summoned it, and the model that summoned the endless spell does not control it. If that endless spell is later dispelled and summoned again the bearer does not control it.`,
        when: [START_OF_HERO_PHASE],
      },
    ],
  },
  //SLAVES TO DARKNESS DAEMON PRINCES only.
  'Helm of Many Eyes': {
    effects: [
      {
        name: `Helm of Many Eyes`,
        desc: `The strike-first effect applies to the bearer.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Doombringer Blade': {
    effects: [
      {
        name: `Doombringer Blade`,
        desc: `At the start of the first battle round, after set-up is complete but before the first turn begins, you can pick 1 enemy HERO or enemy MONSTER on the battlefield. If you do so, add 1 to wound rolls for attacks made with melee weapons by friendly units that target that unit.`,
        when: [TURN_ONE_START_OF_TURN],
      },
    ],
  },
  "Realmwarper's Twist-rune": {
    effects: [
      {
        name: `Realmwarper's Twist-rune`,
        desc: `Once per battle, in your hero phase, you can pick 1 terrain feature within 12" of the bearer. Roll a dice for each model within 1" of that terrain feature. For each 5+, that model's unit suffers 1 mortal wound. In addition, until your next hero phase, that terrain feature blocks visibility in the same manner as a wyldwood.`,
        when: [HERO_PHASE],
        rule_sources: [rule_sources.ERRATA_JANUARY_2023],
      },
    ],
  }, */
} satisfies TItemDescriptions

export default tagAs(Artifacts, 'artifact')
