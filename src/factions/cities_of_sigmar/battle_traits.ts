import { tagAs } from 'factions/metatagger'
import { CITIES_OF_SIGMAR } from 'meta/factions'
import {
  CHARGE_PHASE,
  COMBAT_PHASE,
  END_OF_CHARGE_PHASE,
  END_OF_COMBAT_PHASE,
  END_OF_ROUND,
  MOVEMENT_PHASE,
  SHOOTING_PHASE,
  START_OF_CHARGE_PHASE,
  START_OF_COMBAT_PHASE,
  START_OF_MOVEMENT_PHASE,
  START_OF_ROUND,
  START_OF_SHOOTING_PHASE,
} from 'types/phases'
import { TItemDescriptions } from 'factions/factionTypes'

const BattleTraits = {
  [CITIES_OF_SIGMAR]: {
    effects: [
      {
        name: `Advance in Formation - Officar's Order`,
        desc: `Declare: Pick a friendly Cities of Sigmar Hero that has not used an Officars Order ability this turn to use this ability, then pick a friendly Cities of Sigmar unit wholly within 12" of that Hero and not in combat to be the target. You cannot pick the same unit to be a target of this ability more than once per turn.
        If the target is Human, you can pick an additional Cities of Sigmar unit wholly within 12" of that Hero and not in combat to be a target. 
        Effect: Each target can move 3". Each target cannot move into combat during any part of that move.`,
        when: [MOVEMENT_PHASE],
      },
      {
        name: `Strike Them Down - Officar's Order`,
        desc: `Declare: Pick a friendly Cities of Sigmar Hero that has not used an Officars Order ability this turn to use this ability, then pick a friendly Cities of Sigmar unit that charged this turn that is wholly within 12" of that Hero to be the target. 
        Effect: Add 1 to the Attacks characteristic of the targets melee weapons for the rest of the turn. 
        In addition, if the target is an Aelf unit, add 1 to hit rolls for the targets combat attacks for the rest of the turn.`,
        when: [CHARGE_PHASE],
      },
      {
        name: `Suppressing Fire - Officar's Order`,
        desc: `Declare: Pick a friendly Cities of Sigmar Hero that has not used an Officars Order ability this turn to use this ability, then pick a friendly Cities of Sigmar unit wholly within 12" of that Hero to be the target. 
        Effect: Each time the target uses a Shoot ability this phase, if all of its attacks targeted the same enemy unit, after that ability has been resolved, roll a dice. If the result is equal to or less than the number of models in that enemy unit that were slain by shooting attacks this phase, that enemy unit has Strike-last for the rest of the turn.`,
        when: [SHOOTING_PHASE],
      },
      {
        name: `Hold the Line - Officar's Order`,
        desc: `Declare: Pick a friendly Cities of Sigmar Hero that has not used an Officars Order ability this turn to use this ability, then pick a friendly Cities of Sigmar unit wholly within 12" of that Hero and that did not charge this turn to be the target. 
        Effect: The target has Strike-last and Ward (5+) for the rest of the turn. 
        In addition, if the target is Duardin, subtract 1 from hit rolls for combat attacks that target that unit for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
      
    ],
  },
} satisfies TItemDescriptions

export default tagAs(BattleTraits, 'battle_trait')
