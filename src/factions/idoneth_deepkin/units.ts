import { keyPicker, tagAs } from 'factions/metatagger'
import { GenericEffects } from 'generic_rules'
import {
  BATTLESHOCK_PHASE,
  CHARGE_PHASE,
  COMBAT_PHASE,
  DURING_GAME,
  DURING_SETUP,
  END_OF_BATTLESHOCK_PHASE,
  END_OF_CHARGE_PHASE,
  END_OF_COMBAT_PHASE,
  END_OF_MOVEMENT_PHASE,
  END_OF_TURN,
  HERO_PHASE,
  MOVEMENT_PHASE,
  SAVES_PHASE,
  SHOOTING_PHASE,
  START_OF_COMBAT_PHASE,
  START_OF_HERO_PHASE,
  TURN_ONE_START_OF_TURN,
  WARDS_PHASE,
} from 'types/phases'
import Spells from './spells'
import { TItemDescriptions } from 'factions/factionTypes'

const DeepmareHornEffect = {
 /* name: `Deepmare Horn`,
  desc: `After this unit makes a charge move, you can pick 1 enemy unit within 1" of this unit and roll a dice. On a 2+, that enemy unit suffers D3 mortal wounds.`,
  when: [CHARGE_PHASE],
  shared: true, */
}
const StormshoalEffect = {
 /* name: `Stormshoal`,
  desc: `This unit has a ward of 5+.`,
  when: [WARDS_PHASE],
  shared: true, */
}
const GiftsOfTheDepthsEffect = {
 /* name: `Gifts of the Depths`,
  desc: `This unit has a ward of 5+.`,
  when: [WARDS_PHASE],
  shared: true, */
}
const WarmasterEffect = {
 /* name: `Warmaster`,
  desc: `If this unit is included in an IDONETH DEEPKIN army, it is treated as a general even if it is not the model picked to be the army's general.`,
  when: [DURING_GAME],
  shared: true, */
}
const IconBearerChampionEffect = {
 /* name: `Champion`,
  desc: `1 model in this unit can be an Icon Bearer. Add 1 to the Attacks characteristic of that model's melee weapons.`,
  when: [COMBAT_PHASE],
  shared: true, */
}
const AkhelianGuardStandardBearerAndMusicianEffects = [
 /* {
    name: `Standard Bearer`,
    desc: `1 in every 3 models in this unit can be a Standard Bearer. Add 1 to the Bravery characteristic of this unit if it includes any Standard Bearers.`,
    when: [BATTLESHOCK_PHASE],
    shared: true,
  }, 
  {
    name: `Musician`,
    desc: `1 in every 3 models in this unit can be a Musician. Add 1 to charge rolls for this unit if it includes any Musicians.`,
    when: [CHARGE_PHASE],
    shared: true,
  }, */
]

const Units = {
  'Eidolon of Mathlann, Aspect of the Storm': {
    effects: [
      //StormshoalEffect,
      {
        name: `Crashing Upon the Foe - Passive`,
        desc: `Effect: This unit can use Charge abilities even if it used a Retreat ability in the same turn. In addition, no mortal damage is inflicted on this unit by Retreat abilities.`,
        when: [MOVEMENT_PHASE, CHARGE_PHASE],
      },
      {
        name: `Drench with Hate - Passive`,
        desc: `Effect: Add 1 to wound rolls for combat attacks made by friendly Idoneth Deepkin units while they are wholly within 12" of this unit.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Pulled Into the Depths - Once Per Turn`,
        desc: `Declare: Pick an enemy Hero in combat with this unit to be the target. 
        Effect: Roll a dice. On a 3+, the target has Strike-last for the rest of the turn.`,
        when: [CHARGE_PHASE],
      },
    ],
  },
  'Eidolon of Mathlann, Aspect of the Sea': {
   /* mandatory: {
      spells: [keyPicker(Spells, ['Cloying Seas Mists', 'Tsunami of Terror'])],
    }, */
    effects: [
    /*  GenericEffects.WizardTwoSpellsEffect,
      StormshoalEffect, */
      {
        name: `Dormant Energies - Passive`,
        desc: `Effect: Add 1 to casting rolls for this unit.`,
        when: [HERO_PHASE],
      },
      {
        name: `Tranquillity of the Abyss`,
        desc: `Effect: Ignore negative modifiers to the control scores of friendly Idoneth Deepkin units while they are wholly within 12" of this unit.`,
        when: [END_OF_TURN],
      },
      {
        name: `Dormant Energies: Casting value of 8`,
        desc: `Declare: Pick up to 3 different visible enemy units within 12" of this unit to be the targets, then make a casting roll of 2D6. 
        Effect: Subtract 1 from save rolls for combat attacks that target those units until the start of your next turn.`,
        when: [HERO_PHASE],
      },
      {
        name: `Vengeful Waves - Once Per Turn`,
        desc: `Declare: If this unit has not charged this turn, pick an enemy unit in combat with it to be the target. 
        Effect: Roll a dice. On a 3+, the target cannot use commands for the rest of the turn.`,
        when: [CHARGE_PHASE],
      },
    ],
  },
  'Volturnos, High King of the Deep': {
    effects: [
     // WarmasterEffect,
      {
        name: `Cealith, the High King's Shield`,
        desc: `Effect: This unit has Ward (3+) against mortal damage inflicted by Spell abilities, Prayer abilities or abilities used by Manifestations.`,
        when: [DURING_GAME],
      },
      {
        name: `First Among Akhelians - Passives`,
        desc: `Effect: Add 1 to hit rolls for combat attacks made by other friendly Akhelian units while they are wholly within 12" of this unit.`,
        when: [COMBAT_PHASE],
      },
     // DeepmareHornEffect,
      {
        name: `Supreme Lord of Tides - Once Per Battle`,
        desc: `Declare: Pick up to 3 other friendly Idoneth Deepkin units wholly within 12" of this unit to be the targets. 
        Effect: Add 1 to the Attacks characteristic of the targets melee weapons for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Akhelian Thrallmaster': {
    effects: [
      {
        name: `Akhelian Fighting Stance`,
        desc: `Effect: Pick 1 of the following eects to apply to this unit and any friendly Namarti units wholly within 12" of this unit for the rest of the turn. 
        Way of the Riptide: Those units melee weapons have Crit (2 Hits). 
        Way of the Vortex: Subtract 1 from wound rolls for attacks that target those units.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Thrallmaster - Reaction: You declared a Fight ability for this unit`,
        desc: `Effect: Pick a friendly Namarti Thralls unit that has not used a Fight ability this turn and is within this units combat range to be the target. The target can be picked to use a Fight ability immediately after the Fight ability used by this unit has been resolved.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Akhelian King': {
    effects: [
     // DeepmareHornEffect,
      {
        name: `Akhelian Paragon - Reaction: You declared a Fight ability for this unit`,
        desc: `Effect: Pick a friendly non-Hero Akhelian Cavalry unit that has not used a Fight ability this turn and is within this units combat range to be the target. The target can be picked to use a Fight ability immediately after the Fight ability used by this unit has been resolved`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Wave Rider`,
        desc: `Declare: If this unit charged this phase, pick an enemy unit within 1" of it to be the target. 
        Effect: Roll a D3. On a 2+:  
        Inflict an amount of mortal damage on the target equal to the roll.  
        Add 1 to the Rend characteristic of this units Akhelian Royal Weapons for attacks that target that enemy unit for the rest of the turn.`,
        when: [CHARGE_PHASE],
      },
    ],
  },
  'Isharann Tidecaster': {
   /* mandatory: {
      spells: [keyPicker(Spells, ['Riptide'])],
    }, */
    effects: [
      //GenericEffects.WizardOneSpellEffect,
      {
        name: `Master of the Ethersea - Once Per Turn`,
        desc: `Declare: Make an Isharann ritual roll of D6. 
        Effect: On a 3+, pick 1 of the following effects to apply until the start of your next turn: 
        Creeping Mist: Friendly Idoneth Deepkin units cannot be targeted by shooting attacks unless the attacking model is within 12" of them. 
        Surging Stream: Add 1 to run rolls and charge rolls for friendly Idoneth Deepkin units. 
        Spiteful Riptide: Each time an enemy unit uses a Retreat ability, after the effect of that ability has been resolved, inflict D3 mortal damage on that unit.`,
        when: [HERO_PHASE],
      },
     // GiftsOfTheDepthsEffect,
    ],
  },
  'Isharann Soulscryer': {
    effects: [
      {
        name: `Finder of Ways`,
        desc: `Declare: Pick a friendly Idoneth Deepkin unit that is travelling the ethersea to be the target. 
        Effect: Set up the target wholly within 12" of this unit and more than 7" from all enemy units.`,
        when: [MOVEMENT_PHASE],
      },
      {
        name: `Cyfar Compass - Once Per Turn`,
        desc: `Declare: Pick an enemy Hero within 18" of this unit to be the target. 
        Effect: Roll a dice. On a 3+, add 1 to wound rolls for combat attacks made by friendly Idoneth Deepkin units that target that unit for the rest of the turn.`,
        when: [HERO_PHASE],
      },
     // GiftsOfTheDepthsEffect,
    ],
  },
  'Isharann Soulrender': {
    effects: [
      {
        name: `Lurelight`,
        desc: `Declare: Pick up to 3 different friendly Namarti units wholly within 12" of this unit to be the targets. You cannot pick the same unit to be the target of this ability more than once per turn. Make a lurelight roll of D3 for each target unit. 
        Effect: On a 2+, return a number of slain models to the target unit equal to the roll.`,
        when: [END_OF_TURN],
      },
      {
        name: `Hangman's Knot - Once Per Battle`,
        desc: `Declare: Pick an enemy Hero in combat with this unit to be the target. 
        Effect: Roll 2D6. If the roll exceeds the targets Health characteristic, it is automatically destroyed.`,
        when: [COMBAT_PHASE],
      },
     // GiftsOfTheDepthsEffect,
    ],
  },
  'Akhelian Allopexes': {
    effects: [
      {
        name: `Bloodthirsty Predators - Passive`,
        desc: `Effect: Add 1 to the Attacks characteristic of this units Allopexs Ferocious Bite while it is within 6" of any damaged enemy units or while it is within 6" of any enemy units that had any models slain in the same turn.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Ensnared`,
        desc: `Declare: Pick an enemy Monster or Cavalry unit that had any damage points allocated to it this turn by this units shooting attacks to be the target. 
        Effect: Roll a dice. On a 3+, until the start of your next turn, subtract 1 from the number of dice rolled when making charge rolls for the target, to a minimum of 1.`,
        when: [SHOOTING_PHASE],
      },
    ],
  },
  'Lotann, Warden of the Soul Ledgers': {
    effects: [
      {
        name: `Catalogue of Souls - Passive`,
        desc: `Effect: Add 3 to the control scores of friendly Idoneth Deepkin units while they are wholly within 12" of this unit.`,
        when: [END_OF_TURN],
      },
     // GiftsOfTheDepthsEffect,
      {
        name: `Fount of Willpower - Passive`,
        desc: `Effect: Add 1 to casting rolls for friendly Isharann units while they are wholly within 12" of this unit.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Akhelian Leviadon': {
    effects: [
      {
        name: `Battle Damaged - Passive`,
        desc: `Effect: While this unit has 10 or more damage points, the Attacks characteristic of its Leviadons Scythed Fins and Crushing Jaws is 5.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Void Drum - Passive`,
        desc: `Effect: Friendly Idoneth Deepkin units have Ward (5+) while they are wholly within 6" of this unit.`,
        when: [DURING_GAME],
      },
      {
        name: `Crushing Charge - Once Per Turn`,
        desc: `Declare: If this unit charged this phase, pick an enemy Infantry unit within 1" of it to be the target. 
        Effect: Roll a dice. Add 1 to the roll if the target unit has more than 10 models. On a 3+, inflict an amount of mortal damage on the target equal to the roll.`,
        when: [CHARGE_PHASE],
      },
    ],
  },
  'Akhelian Morrsarr Guard': {
    effects: [
     // ...AkhelianGuardStandardBearerAndMusicianEffects,
      {
        name: `Biovoltaic Blast`,
        desc: `Declare: If this unit charged this phase, pick an enemy unit within 1" of it to be the target, then roll a number of dice equal to the number of models in this unit. 
        Effect: For each 4-5, inflict 1 mortal damage on the target. For each 6, inflict D3 mortal damage on the target. Add 1 to each roll if there are more models in the target unit than this unit.`,
        when: [CHARGE_PHASE],
      },
    ],
  },
  'Akhelian Ishlaen Guard': {
    effects: [
      {
        name: `Galv-Shields - Passive`,
        desc: `Effect: This unit has Ward (5+) if it charged in the same turn.`,
        when: [DURING_GAME],
      },
      //...AkhelianGuardStandardBearerAndMusicianEffects,
      {
        name: `Biovoltaic Barrier`,
        desc: `Declare: Pick an enemy unit in combat with this unit to be the target. 
        Effect: Roll a dice. On a 3+, subtract 1 from the Attacks characteristic of the target units weapons for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Namarti Thralls': {
    effects: [
     // IconBearerChampionEffect,
      {
        name: `Sweeping Blows - Passive`,
        desc: `Effect: Add 1 to the Damage characteristic of this units Lanmari for attacks that target enemy Monsters.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Namarti Reavers': {
    effects: [
      //IconBearerChampionEffect,
      {
        name: `Strike on the Move - Passive`,
        desc: `Effect: This unit can use Shoot abilities even if it used a Run or Retreat ability in the same turn.`,
        when: [SHOOTING_PHASE],
      },
    ],
  },
  /*'Elathain Ill-fated': {
    effects: [
      {
        name: `Soulnet`,
        desc: `Once per battle, at the end of the combat phase, you can pick 1 enemy HERO that has a Wounds characteristic of 7 or less, does not have a mount and is within 3" of this model and roll 2D6. If the roll is greater than the that enemy model's Wounds characteristic, it is slain.`,
        when: [END_OF_COMBAT_PHASE],
      },
      {
        name: `Envenomed Bite`,
        desc: `If the unmodified hit roll for an attack made with this unit's Envenomed Bite is 6, that attack inflicts 1 mortal wound on the target and the attack sequence ends (do not make a wound or save roll).`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Lurelight`,
        desc: `At the end of the battleshock phase, you can pick 1 friendly NAMARTI unit wholly within 18" of this unit and return up to D3 slain models to that unit. You can return up to 3 slain models to that unit instead if any enemy models were slain by attacks made with this this unit's Talunsickle and Soulnet in the same turn. The same unit cannot be affected by the Lurelight ability more than once per turn.`,
        when: [END_OF_BATTLESHOCK_PHASE],
      },
     // GiftsOfTheDepthsEffect,
    ],
  },
  "Elathain's Soulraid": {
    effects: [
      {
        name: `Fuirann's Shield`,
        desc: `Fuirann has a ward of 6+.`,
        when: [WARDS_PHASE],
      },
    ],
  }, */
  'ROR: Fjori`s Flamebearers': {
    /* mandatory: {
       prayers: [keyPicker(prayers, ['Vessel of Sigmar'])],
     }, */
    effects: [
      {
        name: `Grimhold Exile: Last of the Lodge-fire - Once Per Battle`,
        desc: `Declare: Pick an enemy unit in combat with this unit to be the target. 
        Effect: Roll a number of dice equal to the targets Health characteristic. For each 4+, inflict 1 mortal damage on the target.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Grimhold Exile: Honour to Grimnir! - Once Per Battle`,
        desc: `Declare: Pick up to 3 friendly Fyreslayers Infantry units wholly within 12" of this unit to be the targets. 
        Effect: You can re-roll charge rolls for the targets for the rest of the turn`,
        when: [HERO_PHASE],
      },
      {
        name: `Auric Hearthguard: Molten Rockbolts - Passive`,
        desc: `Effect: Each time a shooting attack made by this unit scores a critical hit, subtract 1" from the target units Move characteristic until the start of your next turn. This ability cannot reduce the target units unmodified Move characteristic below half.`,
        when: [SHOOTING_PHASE],
      },
      {
        name: `Hearthguard Berzerkers: Duty Unto Death - Passive`,
        desc: `Effect: While any friendly Fyreslayers Infantry Heroes are wholly within this units combat range, both this unit and those friendly units have Ward (5+).`,
        when: [DURING_GAME],
      },
      {
        name: `Hearthguard Berzerkers with Poleaxes: Smouldering Braziers`,
        desc: `Declare: Pick an enemy unit in combat with this unit to be the target. 
        Effect: Roll a D3. On a 2+, inflict an amount of mortal damage on the target equal to the roll.`,
        when: [END_OF_TURN],
      },
      {
        name: `Hearthguard Berzerkers with Broadaxes: Fires of Vengeance - Passive`,
        desc: `Effect: While this unit is within the combat ranges of any damaged friendly Fyreslayers Heroes, add 1 to the Attacks characteristic of this unit's melee weapons.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Vulkite Berzerkers with Slingshields: Berserk Fury - Passive`,
        desc: `Effect: Each time a model in this unit is slain by a combat attack and that model was in combat with the attacking unit, roll a dice. On a 5+, inflict 1 mortal damage on the attacking unit aer the Fight ability has been resolved.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Vulkite Berzerkers with Handaxes: Whirlwind of Destruction - Passive`,
        desc: `Effect: Add 1 to the Attacks characteristic of this units melee weapons if this unit charged this turn.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Toe to Toe - Passive`,
        desc: `Effect: Subtract 10 from the control scores of enemy Monsters while they are in combat with any units in this Regiment of Renown.`,
        when: [END_OF_TURN],
      },
      {
        name: `Grimnir's Defiance - Passive`,
        desc: `Effect: Units in this Regiment of Renown cannot be picked to be the target of Rampage abilities used by enemy units.`,
        when: [DURING_GAME],
      },
    ],
  },
  'ROR: Saviours of Cinderfall': {
    effects: [
      {
        name: `Callis and Toll: Right Tools for the Job - Passive`,
        desc: `Effect: Double the Damage characteristic of this units weapons for attacks that target Wizards, Priests and Manifestations.`,
        when: [SHOOTING_PHASE, COMBAT_PHASE],
      },
      {
        name: `Callis and Toll: Wily to the Last - Passive`,
        desc: `Effect: If this unit has 2 models and would be automatically destroyed, it is not automatically destroyed. Instead, 1 model in this unit is slain.`,
        when: [DURING_GAME],
      },
      {
        name: `Callis and Toll: Get it Done - Reaction: You declared a Fight ability for this unit`,
        desc: `Effect: Pick a friendly Tolls Companions unit that has not used a Fight ability this turn and is within this units combat range to be the target. The target can be picked to use a Fight ability immediately after the Fight ability used by this unit has been resolved.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Toll's Companions: Hidden Agents`,
        desc: `Declare: Pick this unit and a friendly Callis and Toll unit in the same regiment as this unit if those units have not been deployed. 
        Effect: Set up those units in reserve in the shadows. Those units have now been deployed.`,
        when: [DURING_SETUP],
       },
       {
        name: `Toll's Companions: Saviours of Cinderfall - Passive`,
        desc: `Effect: While a friendly Callis and Toll unit is wholly within this units combat range, both this unit and that Callis and Toll unit have Ward (5+).`,
        when: [DURING_GAME],
       },
       {
         name: `Toll's Companions: Emerge from the Shadows`,
         desc: `Declare: Pick this unit if it is in the shadows. 
         Effect: Set up this unit anywhere on the battlefield more than 9" from all enemy units. Then, set up the Callis and Toll unit that was set up in the shadows with this unit wholly within 6" of it and more than 9" from all enemy units.`,
         when: [MOVEMENT_PHASE],
       },
       {
        name: `Duty Bound - Passive`,
        desc: `Effect: While every model in the same unit in the Regiment of Renown is contesting the same objective, add 1 to save rolls and ward rolls for that unit.`,
        when: [DURING_GAME],
       },
       {
         name: `Sigmar's Justice - Once Per Turn`,
         desc: `Declare: Pick an enemy unit to be marked for justice. You can pick a unit that is in reserve. 
         Effect: For the rest of the battle, add 1 to wound rolls for combat attacks made by units in this Regiment of Renown that target a unit that is marked for justice.`,
         when: [DURING_SETUP],
       },
    ],
  },
  'ROR: Norgrimm`s Rune Throng': {
    effects: [
      {
        name: `Runelord: Runes of Spellbreaking - Passive`,
        desc: `Effect: This unit can use the Unbind ability as if it had Wizard (1).`,
        when: [HERO_PHASE],
      },
      {
        name: `Runelord: Forgefire: Chant value of 5`,
        desc: `Declare: Pick a friendly Cities of Sigmar Duardin unit wholly within 12" of this unit to be the target, then make a chanting roll of D6. 
        Effct: Until the start of your next turn, add 1 to the Rend characteristic of the targets melee weapons. In addition, if the chanting roll was 10+, pick another friendly Cities of Sigmar Duardin unit wholly within 12" of this unit. Add 1 to the Rend characteristic of that units melee weapons until the start of your next turn as well.`,
        when: [HERO_PHASE],
      },
      {
        name: `Irondrakes: Cinderblast Bomb - Once Per Turn`,
        desc: `Declare: If this unit is not in combat, pick a visible enemy unit within 6" of it to be the target. 
        Effect: Roll a dice. On a 3+, inflict an amount of mortal damage on the target equal to the roll.`,
        when: [SHOOTING_PHASE],
      },
      {
        name: `Longbeards: I Thought Duardin Were Made of Sterner Stuff! - Passive`,
        desc: `Effect: Add 2 to the control scores of friendly Cities of Sigmar Duardin units, excluding Longbeards units, while they are wholly within 12" of this unit.`,
        when: [END_OF_TURN],
      },
       {
        name: `Rune of Restored Hearth - Once Per Battle`,
        desc: `Effect: If the Runelord in the Regiment of Renown is contesting an objective, for the rest of the battle, units in this Regiment of Renown have Ward (5+) while they are contesting that objective.`,
        when: [HERO_PHASE],
       },
       {
         name: `Wrath and Ruin: Chant value of 4`,
         desc: `Declare: Pick the Runelord in this Regiment of Renown to chant this prayer, pick a visible enemy unit within 18" of them to be the target, then make a chanting roll of D6. 
         Effect: Roll 6 dice. If the chanting roll was 8+, roll 9 dice instead. For each 5+, inflict 1 mortal damage on the target. If 3 or more damage points are allocated to the target as a result of those dice rolls, ignore positive modifiers to save rolls for the target until the start of your next turn.`,
         when: [HERO_PHASE],
       },
    ],
  },
  'ROR: Elthwin`s Thorns': {
    effects: [
      {
        name: `Arch-Revenant: Crescent Shield`,
        desc: `Effect: Pick 1 of the following effects to apply to this unit for the rest of the turn: 
        Defensive Stance: This unit has Ward (4+). 
        Aggressive Stance: Add 1 to the Attacks characteristic of this units melee weapons, and add 1 to wound rolls for this units combat attacks.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Gossamid Archers: Forest Fighters - Passive`,
        desc: `Effect: This unit has a coherency range of 2".`,
        when: [DURING_GAME],
      },
      {
        name: `Gossamid Archers: Zephyrspites - Once Per Turn`,
        desc: `Effect: If this unit used a Shoot ability this phase, this unit can move D6". It cannot move into combat during any part of that move.`,
        when: [SHOOTING_PHASE],
      },
       {
        name: `Gossamid Champion`,
        desc: `Declare: Pick the Arch-Revenant in this Regiment of Renown to use this ability, the pick a visible enemy unit within 12" of them to be the target. 
        Effect: Until the start of your next turn, subtract X from charge rolls for the target, where X is the number of damage points allocated to the target this phase by shooting attacks made by the Gossamid Archers unit in the Regiment of Renown, to a maximum of 6.`,
        when: [SHOOTING_PHASE],
       },
       {
         name: `Flight of the Zephyrspites - Once Per Turn`,
         desc: `Effect: If both units in this Regiment of Renown are within each others combat range and neither unit is in combat, roll a dice. On a 3+, remove both units from the battlefield, then set them up again within each others combat range, wholly within 3" of a terrain feature and more than 9" from all enemy units.`,
         when: [SHOOTING_PHASE],
       },
    ],
  },
  'ROR: Gotrek Gurnisson': {
    effects: [
      {
        name: `Command Ability - Unstoppable Battle Fury`,
        desc: `Effect: This unit can use 2 Fight abilities this phase. After the first is used, however, this unit has Strikelast for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `I'll Get There Myself! - Passive`,
        desc: `Effect: This unit cannot be set up in reserve and cannot be targeted by abilities that would remove it from the battlefield.`,
        when: [DURING_GAME],
      },
    ],
  },
  'ROR: The Blacktalons': {
    effects: [
      {
        name: `Neave Blacktalon: Justice from Azyr`,
        desc: `Effect: Add 1 to the Damage characteristic of this units Whirlwind Axes for attacks that target Heroes.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Neave Blacktalon: Vanguard Chamber - Passive`,
        desc: `Effect: This unit can use Shoot and/or Charge abilities even if it used a Run or Retreat ability in the same turn.`,
        when: [MOVEMENT_PHASE, SHOOTING_PHASE, CHARGE_PHASE],
      },
      {
        name: `Neave Blacktalon: Windrider`,
        desc: `Declare: If this unit is in combat or charged this turn, this unit can make a pile-in move. Then, if this unit is in combat, you must pick 1 or more enemy units to be the target(s) of this units attacks. 
        Effect: Resolve combat attacks against the target unit(s). Then, roll a dice. On a 3+, remove this unit from the battlefield and set it up again on the battlefield more than 3" from all enemy units and wholly within the combat range of a friendly The Blacktalons unit that is not in combat.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Neave's Companions: Shield of Azyr`,
        desc: `Effect: While any friendly The Blacktalons Heroes are wholly within this units combat range, both this unit and those friendly units have Ward (5+).`,
        when: [DURING_GAME],
      },
      {
        name: `Lorai: Aquatic Illusions`,
        desc: `Effect: Subtract 1 from hit rolls for attacks that target this unit.`,
        when: [COMBAT_PHASE, SHOOTING_PHASE],
      },
      {
        name: `Lorai: Nebulous Sea-Fog: Casting value of 6`,
        desc: `Effect: Until the start of your next turn, while a friendly The Blacktalons unit is wholly within 6" of this unit, if the unmodified hit roll for a shooting attack that targets that unit is 1-5, the attack fails and the attack sequence ends.`,
        when: [HERO_PHASE],
      },
      {
        name: `Justice Will Be Served - Once Per Battle`,
        desc: `Declare: Pick the Neave Blacktalon in this Regiment of Renown to be the target if it is in combat with an enemy Hero. 
        Effect: The target can use 2 Fight abilities this phase. Each time it does so, if it is in combat with an enemy Hero, all of its attacks must target an enemy Hero. In addition, after the first Fight ability is used, the target has Strike-last for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'ROR: Bundo Whalebiter': {
    effects: [
      {
        name: `Get Orf Me Land! - Once Per Turn`,
        desc: `Declare: Pick an objective within 1" of this unit to be the target. 
        Effect: Roll a dice. On a 2+, move the target 2D6" to a new position on the battlefield more than 1" from all models, terrain features and other objectives.`,
        when: [HERO_PHASE],
      },
      {
        name: `Stuff 'Em In Me Net - Once Per Turn`,
        desc: `Declare: Pick an enemy unit in combat with this unit to be the target. 
        Effect: Roll 3 dice. For each roll that is at least double the targets Health characteristic, 1 model in the target unit is slain.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Son of Behemat - Passive`,
        desc: `Effect: If this unit would be automatically destroyed, it is not automatically destroyed. Instead, allocate 6 damage points to it (ward rolls cannot be made for those damage points).`,
        when: [DURING_GAME],
      },
      {
        name: `Longshanks - Passive`,
        desc: `Effect: This unit can pass through models in non-Monster units and parts of terrain features that are less than 4" tall.`,
        when: [MOVEMENT_PHASE],
      },
      {
        name: `Battle Damaged - Passive`,
        desc: `Effect: While this unit has 15 or more damage points, the Attacks characteristic of its Shipwrecka Warclub is 3 and this unit has a Control characteristic of 10.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Dead Cunning for a Gargant - Once Per Turn`,
        desc: `Effect: For the rest of the turn, add 1 to the Attacks characteristic of this units weapons. Then, roll a dice. On a 4+, this unit has Strike-last for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Timberrr! - Passive`,
        desc: `Effect: When the Mega-Gargant in this regiment of renown is slain, before removing it from play, the players must roll off. The winner picks a point on the battlefield within 3" of that model. Inflict D3 mortal damage on each unit (friendly and enemy) within 3" of that point that has a lower Health characteristic than that model.`,
        when: [DURING_GAME],
      },
    ],
  },
} satisfies TItemDescriptions

export default tagAs(Units, 'unit')