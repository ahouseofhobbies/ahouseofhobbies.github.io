import { TItemDescriptions } from 'factions/factionTypes'
import { tagAs } from 'factions/metatagger'
import {
  CHARGE_PHASE,
  COMBAT_PHASE,
  DURING_GAME,
  HERO_PHASE,
  MOVEMENT_PHASE,
  SHOOTING_PHASE,
  START_OF_COMBAT_PHASE,
  START_OF_GAME,
  WARDS_PHASE,
  WOUND_ALLOCATION_PHASE,
} from 'types/phases'

// Add individual artifacts here, and access them in other files!
const Artifacts = {
  //Vanari
 /* 'Syari Pommel': {
    effects: [
      {
        name: `Syari Pommel`,
        desc: `The bearer starts the battle with 1 extra Aetherquartz reserve.`,
        when: [START_OF_GAME],
      },
    ],
  },
  'Senlui Amulet': {
    effects: [
      {
        name: `Senlui Amulet`,
        desc: `The bearer can run and still charge in the same turn.`,
        when: [MOVEMENT_PHASE, CHARGE_PHASE],
      },
    ],
  }, */
  Waystone: {
    effects: [
      {
        name: `Waystone - Once Per Battle`,
        desc: `Effect: Remove this unit from the battlefield and set it up again on the battlefield more than 9" from all enemy units.`,
        when: [MOVEMENT_PHASE],
      },
    ],
  }, 
  //Scinari
  'Pheonix Stone': {
    effects: [
      {
        name: `Pheonix Stone - Passive`,
        desc: `Effect: If this unit would be destroyed, before removing it from play, roll a dice. On a 3+, this unit is not destroyed and any remaining damage points inflicted on it have no effect. Then, Heal (1) this unit. This unit cannot use this ability again for the rest of the battle.`,
        when: [DURING_GAME],
      },
    ],
  },
  'Silver Wand': {
    effects: [
      {
        name: `Silver Wand - Passive`,
        desc: `Effect: If this unit is not a Wizard, it has Wizard (1). Otherwise, add 1 to this units power level.`,
        when: [HERO_PHASE],
      },
    ],
  },
 /* 'Rune of Senthoi': {
    effects: [
      {
        name: `Rune of Senthoi`,
        desc: `Add 1 to unbinding and dispelling rolls for the bearer for each friendly Scinari Hero within 6" of the bearer.`,
        when: [HERO_PHASE],
      },
    ],
  },
  //Windmage
  'Windblast Fan': {
    effects: [
      {
        name: `Windblast Fan`,
        desc: `Once per battle, at the start of the enemy movement phase, you can pick 1 enemy unit within 3" of the bearer. That unit must retreat.`,
        when: [MOVEMENT_PHASE],
      },
    ],
  },
  'Wind Stone': {
    effects: [
      {
        name: `Windstone`,
        desc: `Once per battle, in your shooting phase, you can pick 1 enemy unit within 18" of the bearer and visible to them and roll a dice. On a 1, that unit suffers 1 mortal wound. On a 2-4, that unit suffers 2 mortal wounds. On a 5+, that unit suffers 4 mortal wounds.`,
        when: [SHOOTING_PHASE],
      },
    ],
  },
  'Buffeting Aspiragillum': {
    effects: [
      {
        name: `Buffeting Aspiragillum`,
        desc: `Once per battle, at the start of the combat phase, you can pick 1 enemy unit within 3" of the bearer. If you do so, subtract 1 from hit rolls and wound rolls for attacks made by that unit until the end of the phase.`,
        when: [START_OF_COMBAT_PHASE],
      },
    ],
  },
  //Stonemage
  'Hearthstone Amulet': {
    effects: [
      {
        name: `Hearthstone Amulet`,
        desc: `The bearer has a ward of 4+ against mortal wounds.`,
        when: [WARDS_PHASE],
      },
    ],
  },
  'Molten Talisman': {
    effects: [
      {
        name: `Molten Talisman'`,
        desc: `Add 1 to wound rolls for attacks made with melee weapons by friendly Alarith units wholly within 12" of the bearer if the bearer did not charge in the same turn.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Magmic Hammer': {
    effects: [
      {
        name: `Magmic Hammer`,
        desc: `Add 1 to the number of mortal wounds caused by Arcane Bolt spells that are cast by the bearer.`,
        when: [HERO_PHASE],
      },
    ],
  }, */
} satisfies TItemDescriptions

// Always export using tagAs
export default tagAs(Artifacts, 'artifact')
