import { tagAs } from 'factions/metatagger'
import {
  CHARGE_PHASE,
  COMBAT_PHASE,
  DURING_GAME,
  END_OF_MOVEMENT_PHASE,
  END_OF_TURN,
  HERO_PHASE,
  SHOOTING_PHASE,
  START_OF_TURN,
  WOUND_ALLOCATION_PHASE,
} from 'types/phases'
import rule_sources from './rule_sources'
import meta_rule_sources from 'meta/rule_sources'
import { TItemDescriptions } from 'factions/factionTypes'

const CommandTraits = {
  // Aspects of Azyr
  'Shock and Awe': {
    effects: [
      {
        name: `Shock and Awe - Passive`,
        desc: `Effect: Each time a friendly Stormcast Eternals unit is set up wholly within 12" of this unit using the Scions of the Storm ability, subtract 1 from hit rolls for attacks that target that unit for the rest of the battle round.
        In addition, each time a friendly Stromcast Etnernals unit is set up wholly within 12" of this unit using the Scions of the Storm ability, subtract 1 from hit rolls for attacks that target that unit for the rest of the battle round.`,
        when: [COMBAT_PHASE, SHOOTING_PHASE],
      },
    ],
  },
  'Staunch Defender': {
    effects: [
      {
        name: `Staunch Defender - Passive`,
        desc: `Effect: While this unit is contesting an objective in friendly territory, add 3 to the control scores of friendly Stormcast Eternals units contesting that objective.`,
        when: [END_OF_TURN],
      },
    ],
  },
  'Envoy of the Heavens': {
    effects: [
      {
        name: `Envoy of the Heavens`,
        desc: `Declare: If a friendly Stormcast Eternals unit was destroyed in the previous turn, pick a visible friendly Stormcast Eternals unit wholly within 12" of this unit to be the target. 
        Effect: The target has Ward (5+) until the start of your next turn.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Legendary Tenacity': {
    effects: [
      {
        name: `Legendary Tenacity - Passive`,
        desc: `Effect: The first time this unit would be destroyed, before removing it from play, roll a dice. On a 3+, this unit is not destroyed and any remaining damage points inflicted on it have no effect. Then, Heal (D3) this unit.`,
        when: [DURING_GAME],
      },
    ],
  },
  'Hours of Glory': {
    effects: [
      {
        name: `Hours of Glory - Passive`,
        desc: `Effect: This unit can be picked to use the Their Finest Hour ability even if it has already used it this battle. In addition, when this unit is picked to use the Their Finest Hour ability, add 5 to its control score for the rest of the turn.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Intense Piety': {
    effects: [
      {
        name: `Intense Piety`,
        desc: `Declare: Pick a visible enemy Priest or Wizard within 18" of this unit to be the target. 
        Effect: Roll a dice. On a 3+, subtract 1 from casting rolls and chanting rolls for the target until the start of your next turn.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Draconith Skywing (AoR)': {
    effects: [
      {
        name: `Fearless Fliers (AoR)`,
        desc: `Effect: If this unit is not in combat, it can immediately make a D6" move and can end that move in combat.`,
        when: [END_OF_TURN],
      },
    ],
  },
  'Heroes of the First-Forged (AoR)': {
    effects: [
      {
        name: `Thegn of Bellicos (AoR) - Passive`,
        desc: `Effect: Add 1 to the Attacks characteristic of this unit's melee weapons while it is wholly within 6" of a friendly Bastian Carthalos.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Ruination Brotherhood (AoR)': {
    effects: [
      {
        name: `Corven Lord (AoR) - Once Per Battle`,
        desc: `Effect: If this unit has the Ruination Chamber ability, it can use that ability once per turn regardless of whether another friendly unit has used it during the same turn.`,
        when: [START_OF_TURN],
      },
    ],
  },

  /* 'Master of the Celestial Menagerie': {
    effects: [
      {
        name: `Master of the Celestial Menagerie`,
        desc: `If this general has the Behemoth battlefield role and is on the battlefield, subtract 1 from wound rolls for attacks made with melee weapons that target friendly STORMCAST ETERNALS units that have the Behemoth battlefield role.`,
        when: [COMBAT_PHASE],
        rule_sources: [rule_sources.BATTLETOME_STORMCAST_ETERNALS, rule_sources.ERRATA_OCTOBER_2021],
      },
    ],
  },
  'Favour the Bold': {
    effects: [
      {
        name: `Favour the Bold`,
        desc: `After this general has fought for the first time in the combat phase, if there are no enemy units within 3" of this general, roll a dice. On a 2+, this general can immediately make a D6" move and can finish that move within 3" of any enemy units.`,
        when: [COMBAT_PHASE],
        rule_sources: [meta_rule_sources.BOOK_DAWNBRINGERS_BOOK_3],
      },
    ],
  }, */
} satisfies TItemDescriptions

export default tagAs(CommandTraits, 'command_trait')
