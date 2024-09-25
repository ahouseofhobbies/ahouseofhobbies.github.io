import { TItemDescriptions } from 'factions/factionTypes'
import { tagAs } from 'factions/metatagger'
import {
  BATTLESHOCK_PHASE,
  CHARGE_PHASE,
  COMBAT_PHASE,
  DURING_GAME,
  DURING_SETUP,
  HERO_PHASE,
  SHOOTING_PHASE,
  START_OF_COMBAT_PHASE,
  WARDS_PHASE,
} from 'types/phases'

const Artifacts = {
  'Extra-calloused Feet': {
    effects: [
      {
        name: `Extra-Calloused Feet - Passive`,
        desc: `Effect: Add 1 to the Attacks characteristic, Rend characteristic and Damage characteristic of this units Almighty Stomp or Almightier Stomp.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Glowy Shield of Protectiness': {
    effects: [
      {
        name: `Glowy Shield of Protectiness - Passive`,
        desc: `Effect: Each time you make an unmodified save roll of 6 for a combat attack that targets this unit, inflict 1 mortal damage on the attacking unit after the Fight ability has been resolved.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Mantle of Tusk and Horns': {
    effects: [
      {
        name: `Mantle of Tusk and Horns - Once Per Battle`,
        desc: `Effect: For the rest of the turn, add 1 to hit rolls for combat attacks made by friendly Sons of Behemat units while they are wholly within 12" of this unit.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Amberbone Totem': {
    effects: [
      {
        name: `Amberbone Totem - Once Per Battle`,
        desc: `Effect: For the rest of the turn, this unit can use Charge abilities even if it used a Run ability in the same turn.`,
        when: [CHARGE_PHASE],
      },
    ],
  },
  "Kingslaughter Cowl": {
    effects: [
      {
        name: `Kingslaughter Cowl - Passive`,
        desc: `Effect: Add 1 to the Attacks characteristic of this units melee weapons while this unit is in combat with an enemy Hero.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Glowy Lantern': {
    effects: [
      {
        name: `Glowy Lantern - Passive`,
        desc: `Effect: This unit can summon abilities from the manifestation lore you picked during army composition as if it had Wizard (1).`,
        when: [HERO_PHASE],
      },
    ],
  },
  // Stomper Tribe
/*  'Club of the First Oak (Stomper Tribe)': {
    effects: [
      {
        name: `Club of the First Oak (Stomper Tribe)`,
        desc: `Warstomper only. In your hero phase, you can heal 1 wound allocated to the bearer. In addition, while the bearer has 25 or more wounds allocated to them, they have a ward of 5+.`,
        when: [HERO_PHASE, WARDS_PHASE],
      },
      {
        name: `Club of the First Oak (Stomper Tribe)`,
        desc: `Warstomper only. In addition, while the bearer has 25 or more wounds allocated to them, they have a ward of 5+.`,
        when: [WARDS_PHASE],
      },
    ],
  },
  'Mantle of the Destroyer (Stomper Tribe)': {
    effects: [
      {
        name: `Mantle of the Destroyer (Stomper Tribe)`,
        desc: `Warstomper only. Friendly Sons of Behemat units within 12" of the bearer have a Bravery characteristic of 10.`,
        when: [BATTLESHOCK_PHASE],
      },
    ],
  },
  // Smasher Tribe
  'The Shatterer (Smasher Tribe)': {
    effects: [
      {
        name: `The Shatterer (Smasher Tribe)`,
        desc: `Beast-Smasher Only. If the unmodified wound roll for an attack made with the bearer's Menhir Club that targets an enemy Hero, Monster, or War Machine is 6, that unit's armour has been shattered. If a unit's armor has been shattered, until the end of the battle, ignore positive modifiers to save rolls for attacks that target that unit.`,
        when: [COMBAT_PHASE, DURING_GAME],
      },
    ],
  },
  'Mantle of Tusks and Horns (Smasher Tribe)': {
    effects: [
      {
        name: `Mantle of Tusks and Horns (Smasher Tribe)`,
        desc: `Beast-Smasher Only. Once per battle, at the start of the combat phase, you can say that the bearer will channel the Waaagh!. If you do so, add 1 to hit rolls for attacks made with melee weapons by friendly Sons of Behemat units until the end of that phase.`,
        when: [START_OF_COMBAT_PHASE],
      },
    ],
  },
  // Breaker Tribe
  'The Great Wrecka (Breaker Tribe)': {
    effects: [
      {
        name: `The Great Wrecka (Breaker Tribe)`,
        desc: `Gatebreaker Only. If the unmodified hit roll for an attack made with the bearer's Fortcrusha Flail is 6, that attack causes D3 mortal wounds to the target in addition to any damage it inflicts.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Kingslaughter Cowl (Breaker Tribe)': {
    effects: [
      {
        name: `Kingslaughter Cowl (Breaker Tribe)`,
        desc: `Gatebreaker Only. Add 1 to wound rolls for attacks made by the bearer that target an enemy Hero.`,
        when: [COMBAT_PHASE, SHOOTING_PHASE],
      },
    ],
  },

  // King Brodd's Stomp Army of Renown
  'Brand of the Gargant King': {
    effects: [
      {
        name: `Brand of the Gargant King`,
        desc: `If the bearer makes a charge move and the unmodified charge roll was 8+, the strike-first effect applies to them until the end of the turn.`,
        when: [CHARGE_PHASE],
      },
    ],
  },
  'Lucky Shiny Hat': {
    effects: [
      {
        name: `Lucky Shiny Hat`,
        desc: `The bearer has a ward of 5+ against mortal wounds.`,
        when: [WARDS_PHASE],
      },
    ],
  },
  'Crafty Creepers': {
    effects: [
      {
        name: `Crafty Creepers`,
        desc: `At the start of the combat phase, you can pick 1 enemy HERO that has an artefact of power and is within 1" of the bearer and roll a dice. On a 5+, that artefact of power can no longer be used (if a weapon was picked when the artefact of power was selected, that weapon reverts to normal).`,
        when: [START_OF_COMBAT_PHASE],
      },
    ],
  }, */
} satisfies TItemDescriptions

export default tagAs(Artifacts, 'artifact')
