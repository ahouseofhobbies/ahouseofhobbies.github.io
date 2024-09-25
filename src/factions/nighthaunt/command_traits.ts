import { TItemDescriptions } from 'factions/factionTypes'
import { tagAs } from 'factions/metatagger'
import {
  CHARGE_PHASE,
  COMBAT_PHASE,
  DURING_GAME,
  END_OF_COMBAT_PHASE,
  END_OF_MOVEMENT_PHASE,
  MOVEMENT_PHASE,
  SHOOTING_PHASE,
  WARDS_PHASE,
} from 'types/phases'

// Store Command Traits here. You can add them to units, abilities, flavors, and subfactions later.
const CommandTraits = {
  'Ruler of the Spectral Hosts': {
    effects: [
      {
        name: `Command Ability: Ruler of the Spectral Hosts - Once Per Battle`,
        desc: `Declare: Pick a friendly Nighthaunt unit that started the battle with 3 or more models and that has been destroyed to be the target. 
        Effect: Set up a replacement unit with half the number of models from the target unit (rounding up) wholly within 12" of this unit and more than 9" from all enemy units.`,
        when: [MOVEMENT_PHASE],
      },
    ],
  },
  'Cloaked in Shadow': {
    effects: [
      {
        name: `Cloaked in Shadow - Passive`,
        desc: `Effect: If the unmodified hit roll for an attack that targets this unit is 1-3, the attack fails and the attack sequence ends.`,
        when: [SHOOTING_PHASE, COMBAT_PHASE],
      },
    ],
  },
  'Terrifying Entity': {
    effects: [
      {
        name: `Terrifying Entity - Passive`,
        desc: `Effect: This unit can use any of the Aura of Dread abilities, even if it doesn't have the required keywords for that ability.`,
        when: [CHARGE_PHASE],
      },
    ],
  },
/*  'Cloaked in Shadow': {
    effects: [
      {
        name: `Cloaked in Shadow`,
        desc: `This general cannot be picked as the target of a shooting or combat attack by more than 1 unit per phase.`,
        when: [SHOOTING_PHASE, COMBAT_PHASE],
      },
    ],
  },
  'Ruler of the Spirit Hosts': {
    effects: [
      {
        name: `Ruler of the Spirit Hosts`,
        desc: `Once per battle, at the end of your movement phase, you can pick 1 friendly NIGHTHAUNT SUMMONABLE unit that has been destroyed. After you pick a unit that has been destroyed, roll a dice. On a 4+, a new replacement unit with half of the models from the unit that was destroyed (rounding up) is added to your army. Set up that unit wholly within 12" of this general and more than 3" from all enemy units.`,
        when: [END_OF_MOVEMENT_PHASE],
      },
    ],
  }, */
} satisfies TItemDescriptions

// Always export using tagAs
export default tagAs(CommandTraits, 'command_trait')
