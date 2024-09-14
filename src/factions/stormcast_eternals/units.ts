import { keyPicker, tagAs } from 'factions/metatagger'
import { GenericEffects } from 'generic_rules'
import meta_rule_sources from 'meta/rule_sources'
import {
  BATTLESHOCK_PHASE,
  CHARGE_PHASE,
  COMBAT_PHASE,
  DURING_GAME,
  DURING_SETUP,
  END_OF_ANY_PHASE,
  END_OF_CHARGE_PHASE,
  END_OF_COMBAT_PHASE,
  END_OF_HERO_PHASE,
  END_OF_MOVEMENT_PHASE,
  END_OF_SETUP,
  END_OF_TURN,
  HERO_PHASE,
  MOVEMENT_PHASE,
  SAVES_PHASE,
  SHOOTING_PHASE,
  START_OF_BATTLESHOCK_PHASE,
  START_OF_CHARGE_PHASE,
  START_OF_COMBAT_PHASE,
  START_OF_HERO_PHASE,
  START_OF_MOVEMENT_PHASE,
  START_OF_SHOOTING_PHASE,
  TURN_ONE_START_OF_ROUND,
  WARDS_PHASE,
  WOUND_ALLOCATION_PHASE,
} from 'types/phases'
import prayers from './prayers'
import rule_sources from './rule_sources'
import spells from './spells'
import { TItemDescriptions } from 'factions/factionTypes'
import { PassThrough } from 'stream'

/*const InescapableVengeanceEffect = {
  name: `Inescapable Vengeance`,
  desc: `If the unmodified hit roll for an attack made with a melee weapon by this unit is 6, the target suffers 2 mortal wounds and the attack sequence ends (do not make a wound or save roll).`,
  when: [COMBAT_PHASE],
  shared: true,
}
const BlastToAshesEffect = {
  name: `Blast to Ashes`,
  desc: `If the unmodified hit roll for an attack made with a Lightning Hammer is 6, the target suffers 2 mortal wounds and the attack sequence ends (do not make a wound or save roll).`,
  when: [COMBAT_PHASE],
  shared: true,
}
const CelestialBlastEffect = {
  name: `Celestial Blast`,
  desc: `If the unmodified hit roll for an attack made with a Skybolt Bow is 6, the target suffers 1 mortal wound and the attack sequence ends (do not make a wound or save roll).`,
  when: [SHOOTING_PHASE],
  shared: true,
}
const EvocatorChampionEffect = {
  name: `Champion`,
  desc: `1 model in this unit can be an Evocator-Prime. Add 1 to the Attacks characteristic of that model's Tempest Blade and Stormstave or Grandstave.`,
  when: [COMBAT_PHASE],
  shared: true,
}
const ArcaneHeritageEffect = {
  name: `Arcane Heritage`,
  desc: `Each time this unit is affected by a spell or the abilities of an endless spell, you can roll a dice. On a 4+, ignore the effect of that spell or the effects of that endless spell's abilities on this unit.`,
  when: [HERO_PHASE, END_OF_HERO_PHASE],
  shared: true,
}
const DraconicFlamestreamEffect = {
  name: `Draconic Flamestream`,
  desc: `Do not use the attack sequence for an attack made with a Draconic Flamestream. Instead, roll a dice. On a 1-2, nothing happens. On a 3-4, the target suffers D3 mortal wounds. On a 5-6, the target suffers D6 mortal wounds.`,
  when: [SHOOTING_PHASE],
  shared: true,
}
const DraggedIntoTheTempestEffect = {
  name: `Dragged into the Tempest`,
  desc: `In the combat phase, after all of this unit's attacks have been resolved, you can pick 1 enemy unit within 1" of this unit and roll a dice. If the roll is greater than that unit's Wounds characteristic, your opponent must pick 1 model in that unit. That model is slain.`,
  when: [COMBAT_PHASE],
  shared: true,
}
const DispersedFormationEffect = {
  name: `Dispersed Formation`,
  desc: `If this unit has 2 to 5 models, it is coherent if each model in the unit is within 3" horizontally of at least 1 other model in the unit instead of 1". If this unit has more than 5 models, it is coherent if each model in the unit is within 3" horizontally of at least 2 other models in the unit instead of 1".`,
  when: [DURING_GAME],
  shared: true,
}
const ImpalingStrikesEffect = {
  name: `Impaling Strikes`,
  desc: `This unit's Stormstrike Glaive has a Damage characteristic of 3 instead of 1 if this unit made a charge move in the same turn.`,
  when: [COMBAT_PHASE],
  shared: true,
}
const CleavingBlowEffect = {
  name: `Cleaving Blow`,
  desc: `Add 2 to the Attacks characteristic of a Thunderaxe if the number of models in the target unit is greater than the number of models in this unit.`,
  when: [COMBAT_PHASE],
  shared: true,
}
const AncientMasterOfWarEffect = {
  name: `Ancient Master of War`,
  desc: `Subtract 1 from the Attacks characteristic of melee weapons that target this unit (to a minimum of 1).`,
  when: [COMBAT_PHASE],
  shared: true,
}
const BlazingTempestEffect = {
  name: `Blazing Tempest`,
  desc: `Do not use the attack sequence for an attack made with a Blazing Tempest. Instead, roll a dice. On a 1-2, the target suffers 1 mortal wound. On a 3-4, the target suffers D3 mortal wounds. On a 5-6, the target suffers D6 mortal wounds.`,
  when: [SHOOTING_PHASE],
  shared: true,
}
const CalamitousTailEffect = {
  name: `Calamitous Tail`,
  desc: `The Attacks characteristic of a Calamitous Tail is equal to the number of enemy models within 3" of the attacking model.`,
  when: [COMBAT_PHASE],
  shared: true,
}
const VoidstormScrollEffect = {
  name: `Voidstorm Scroll`,
  desc: `Once per battle, in the enemy hero phase, when this unit attempts to unbind a spell, you can say that it is using its voidstorm scroll. If you do so, that spell is automatically unbound (do not make an unbinding roll).`,
  when: [HERO_PHASE],
  shared: true,
}
const SoulChargedIconEffect = {
  name: `Soul-Charged Icon`,
  desc: `You can reroll charge rolls for friendly STORMCAST ETERNALS units wholly within 12" of this unit.`,
  when: [CHARGE_PHASE],
  shared: true,
}
const SigmariteThundershieldEffect = {
  name: `Sigmarite Thundershield`,
  desc: `If the unmodified save roll for an attack made with a melee weapon that targets this unit is 6, the attacking unit suffers 1 mortal wound after all of its attacks have been resolved.`,
  when: [SAVES_PHASE],
  shared: true,
}
const CometTrailEffect = {
  name: `Comet Trail`,
  desc: `After this unit has made a normal move, add 1 to hit rolls for attacks made by friendly STORMCAST ETERNALS and Cities of Sigmar units within 3" of this unit until your next hero phase.`,
  when: [MOVEMENT_PHASE],
  shared: true,
}
const StormBlastEffect = {
  name: `Stormblast`,
  desc: `Do not use the attack sequence for an attack made with a Stormblast. Instead, roll a dice. On a 4+, the target suffers D3 mortal wounds.`,
  when: [SHOOTING_PHASE],
  shared: true,
}
const AstralCompassEffect = {
  name: `Astral Compass`,
  desc: `If this unit includes any models carrying Astral Compasses, at the start of your movement phase, instead of taking a normal move, you can say that this unit will navigate the winds aetheric. If you do so, remove this unit from the battlefield and set it up again on the battlefield wholly within 6" of the battlefield edge and more than 9" from all enemy units.`,
  when: [START_OF_MOVEMENT_PHASE],
  shared: true,
}
const RideTheWindsAethericEffect = {
  name: `Ride the Winds Aetheric`,
  desc: `Instead of picking this unit to make a normal move or retreat, you can say that it will ride the winds aetheric. If you do so, remove this unit from the battlefield and set it up again on the battlefield more than 1" from all terrain features and objectives and more than 9" from all enemy units.`,
  when: [MOVEMENT_PHASE],
  shared: true,
}
const CycleOfTheStormEffect = {
  name: `Cycle of the Storm`,
  desc: `Once per turn, before you allocate a wound or mortal wound to another friendly STORMCAST ETERNALS unit within 18" of this unit, and that wound or mortal wound would cause a model in that unit to be slain, you can say that this unit will capture and return that warrior's soul. If you do so, that wound or mortal wound is negated.`,
  when: [WOUND_ALLOCATION_PHASE],
  rule_sources: [rule_sources.BATTLETOME_STORMCAST_ETERNALS, rule_sources.ERRATA_OCTOBER_2021],
  shared: true,
}
const SigmariteShieldEffect = {
  name: `Sigmarite Shields`,
  desc: `Add 1 to save rolls for attacks that target this unit if at least half of the models in this unit (rounding down) are armed with Sigmarite Shields.`,
  when: [SAVES_PHASE],
  shared: true,
}
const CelestialLightningArcEffect = {
  name: `Celestial Lightning Arc`,
  desc: `After this unit has fought for the first time in a phase and all of its attacks have been resolved, you can pick 1 enemy unit within 3" of this unit. Roll 2 dice for each model in this unit. For each 4+, that enemy unit suffers 1 mortal wound.`,
  when: [COMBAT_PHASE],
  shared: true,
}

const IntolerableDamageEffect = {
  name: `Intolerable Damage`,
  desc: `If the unmodified wound roll for an attack made with a Dracoth's Claws and Fangs is 6, that attack has a Damage of D6 instead of 1.`,
  when: [COMBAT_PHASE],
  shared: true,
}
const StarsoulMaceEffect = {
  name: `Starsoul Mace`,
  desc: `Do not use the attack sequence for an attack made with a Starsoul Mace. Instead, roll a dice. On a 2+, the target sufers D3 mortal wounds.`,
  when: [COMBAT_PHASE],
  shared: true,
}
const ThunderousPounceEffect = {
  name: `Thunderous Pounce`,
  desc: `You can reroll charge rolls for this unit.`,
  when: [CHARGE_PHASE],
  shared: true,
}
const WindriderEffect = {
  name: `Windrider`,
  desc: `Instead of picking this unit to make a normal move or retreat, you can say that it will ride the winds aetheric. If you do so, remove this unit from the battlefield and set it up again on the battlefield more than 1" from all terrain features and objectives and more than 9" from all enemy units.`,
  when: [MOVEMENT_PHASE],
  shared: true,
}
const TirelessHuntersEffect = {
  name: `Tireless Hunters`,
  desc: `This unit can run and still shoot in the same turn.`,
  when: [SHOOTING_PHASE],
  shared: true,
}
const LayLowTheTyrantsEffect = {
  name: `Lay Low the Tyrants`,
  desc: `At the end of the combat phase, you can pick 1 enemy unit that is both within 1" of this unit and within 6" of an objective, and roll a dice. On a 4+, that unit suffers D3 mortal wounds.`,
  when: [END_OF_COMBAT_PHASE],
  shared: true,
}
const HeraldsOfRighteousnessEffect = {
  name: `Heralds of Righteousness`,
  desc: `You can attempt a charge with this unit if it is within 18" of an enemy unit instead of 12". Roll 3D6 instead of 2D6 when making a charge roll for this unit.`,
  when: [CHARGE_PHASE],
  shared: true,
}
const StardrakeBaseEffects = [
  {
    name: `Arcane Lineage`,
    desc: `Add 1 to casting rolls for friendly Wizards within 18" of this unit and subtract 1 from casting rolls for enemy Wizards within 18" of this unit.`,
    when: [HERO_PHASE],
    shared: true,
  },
  {
    name: `Cavernous Jaws`,
    desc: `After this unit makes a pile-in move, you can say that this unit's Stardrake will bite the enemy with its cavernous jaws. If you do so, pick a number of enemy models within 3" of this unit equal to or less than the Cavernous Jaws value shown on this unit's damage table, and roll a dice for each. If the roll is greater than that model's Wounds characteristic, it is slain.`,
    when: [COMBAT_PHASE],
    shared: true,
  },
]
const AnnihilatorBaseEffects = [
  {
    name: `Blazing Impact`,
    desc: `After this unit is set up on the battlefield for the first time, roll a dice for each enemy unit within 10" of this unit. On a 3+, that unit suffers D3 mortal wounds. In addition, you can reroll charge rolls for this unit if it was set up on the battlefield in the same turn.`,
    when: [DURING_SETUP, END_OF_MOVEMENT_PHASE],
    shared: true,
  },
  {
    name: `Force of a Falling Star`,
    desc: `After this unit makes a charge move, you can pick 1 enemy unit within 1" of this unit and roll a number of dice equal to the unmodified charge roll for that charge move. Subtract 1 from the roll if this unit only has 2 models. Subtract 2 from the roll if this unit only has 1 model. For each 4+, that enemy unit suffers 1 mortal wound.`,
    when: [CHARGE_PHASE],
    shared: true,
  },
] */

const Units = {
  'Celestant-Prime': {
    effects: [
      {
        name: `Cometstrike Sceptre - Passive`,
        desc: `Effect: Each time this unit attacks with its Cometstrike Sceptre, if the attack scores a hit, inflict D3 mortal damage on the target.`,
        when: [SHOOTING_PHASE],
      },
      {
        name: `Retribution from On High - Once Per Battle`,
        desc: `Declare: Pick this unit if it is in the Celestial Realm. 
        Effect: Subtract the current battle round number from 10 to determine this units strike zone. Set up this unit on the battlefield more than a number of inches equal to its strike zone from all enemy units.`,
        when: [MOVEMENT_PHASE],
      },
    ],
  },
  /*'Aventis Firestrike': {
   /* mandatory: {
      spells: [keyPicker(spells, ['Pyroelectric Blast'])],
    }, 
    effects: [
     // CometTrailEffect,
    //  CycleOfTheStormEffect,
      {
        name: `Thunderhead Crown`,
        desc: `In your hero phase, you can heal up to D3 wounds allocated to this unit.`,
        when: [HERO_PHASE],
      },
    ],
  }, */
 /*'Astreia Solbright': {
  /*  mandatory: {
      spells: [keyPicker(spells, ['Lightning Pulse'])],
    },
    effects: [
     // CycleOfTheStormEffect,
     // ThunderousPounceEffect,
      {
        name: `Soul Energy of the First Host`,
        desc: `At the start of the combat phase, you can pick 1 friendly Hammers of Sigmar Sacrosanct unit wholly within 12" of this unit. Add 1 to save rolls for attacks made with melee weapons that target that unit until the end of that phase.`,
        when: [START_OF_COMBAT_PHASE],
      },
    ],
  }, */
  'Vandus Hammerhand': {
    effects: [
     // StormBlastEffect,
      {
        name: `Lord of the Hammerhands Passive`,
        desc: `Effect: Add 3 to the control scores of friendly Warrior Chamber units while they are wholly within 12" of this unit.`,
        when: [END_OF_TURN],
      },
      {
        name: `Vengeance Unleashed - Reaction: You declared a Fight ability for this unit`,
        desc: `Effect: Pick a friendly non-Hero Warrior Chamber unit that has not used a Fight ability this turn and is within this units combat range to be the target. The target can be picked to use a Fight ability immediately after the Fight ability used by this unit has been resolved. If it is picked to do so, add 1 to hit rolls for the targets attacks for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Neave Blacktalon': {
    effects: [
      {
        name: `Justice from Azyr`,
        desc: `Effect: Add 1 to the Damage characteristic of this units Whirlwind Axes for attacks that target Heroes.`,
        when: [COMBAT_PHASE],
        rule_sources: [meta_rule_sources.BOOK_DAWNBRINGERS_BOOK_3],
      },
      {
        name: `Vanguard Chamber - Passive`,
        desc: `Effect: This unit can use Shoot and/or Charge abilities even if it used a Run or Retreat ability in the same turn.`,
        when: [MOVEMENT_PHASE, SHOOTING_PHASE, CHARGE_PHASE],
        rule_sources: [meta_rule_sources.BOOK_DAWNBRINGERS_BOOK_3],
      },
      {
        name: `Windrider`,
        desc: `Declare: If this unit is in combat or charged this turn, this unit can make a pile-in move. Then, if this unit is in combat, you must pick 1 or more enemy units to be the target(s) of this units attacks. 
        Effect: Resolve combat attacks against the target unit(s). Then, roll a dice. On a 3+, remove this unit from the battlefield and set it up again on the battlefield more than 3" from all enemy units and wholly within the combat range of a friendly The Blacktalons unit that is not in combat.`,
        when: [COMBAT_PHASE],
        rule_sources: [meta_rule_sources.BOOK_DAWNBRINGERS_BOOK_3],
      },
    ],
  },
  "Neave's Companions": {
    effects: [
      GenericEffects.Elite,
      {
        name: `Shield of Azyr`,
        desc: `Effect: While any friendly The Blacktalons Heroes are wholly within this units combat range, both this unit and those friendly units have Ward (5+).`,
        when: [DURING_GAME],
        rule_sources: [meta_rule_sources.BOOK_DAWNBRINGERS_BOOK_3],
      },
    ],
  },
  Lorai: {
   /* mandatory: {
      spells: [keyPicker(spells, ['Nebulous Sea-fog'])],
    }, */
    effects: [
      //GenericEffects.WizardOneSpellEffect,
      {
        name: `Aquatic Illusions`,
        desc: `Effect: Subtract 1 from hit rolls for attacks that target this unit.`,
        when: [COMBAT_PHASE, SHOOTING_PHASE],
        rule_sources: [meta_rule_sources.BOOK_DAWNBRINGERS_BOOK_3],
      },
      {
        name: `Nebulous Sea-Fog: Casting value of 6`,
        desc: `Effect: Until the start of your next turn, while a friendly The Blacktalons unit is wholly within 6" of this unit, if the unmodified hit roll for a shooting attack that targets that unit is 1-5, the attack fails and the attack sequence ends.`,
        when: [HERO_PHASE],
        rule_sources: [meta_rule_sources.BOOK_DAWNBRINGERS_BOOK_3],
      },
    ],
  },
/* 'Gavriel Sureheart': {
    effects: [
     // InescapableVengeanceEffect,
      {
        name: `Once More, For Sigmar, Charge!`,
        desc: `You can reroll charge rolls for this unit. In addition, once per turn, this unit can issue the Forward to Victory command (core rules, 1 1.2) to a friendly Hammers of Sigmar unit without a command point being spent.`,
        when: [COMBAT_PHASE],
      },
     // SigmariteThundershieldEffect,
    ],
  }, */
  'Karazai the Scarred': {
    effects: [
      //AncientMasterOfWarEffect,
      //BlazingTempestEffect,
      //CalamitousTailEffect,
      {
        name: `Fires of Retribution - Passive`,
        desc: `Effect: While this unit has 5-9 damage points, add 1 to the Attacks characteristic of its melee weapons. While this unit has 10 or more damage points, add 2 to the Attacks characteristic of its melee weapons instead.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Ancient Master of War`,
        desc: `Declare: Pick an enemy unit within this units combat range to be the target. 
        Effect: Subtract 1 from the Attacks characteristic of the targets melee weapons for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Calamitous Tail Sweep - Once Per Turn`,
        desc: `Declare: Pick an enemy unit in combat with this unit to be the target. 
        Effect: Roll a dice for each model in the target unit. For each 5+, inflict 1 mortal damage on the target.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
 /* "Steelheart's Champions": {
    effects: [
      {
        name: `Champion`,
        desc: `Severin Steelheart is the unit champion. If the target unit has 5 or more models, you can reroll failed hit rolls for attacks made with that model's Broadsword.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Heroic Guard`,
        desc: `If an enemy unit finishes a charge move within 1/2" of this unit, add 1 to save rolls for attacks that target this unit until the end of that turn.`,
        when: [CHARGE_PHASE],
      },
     // LayLowTheTyrantsEffect,
    ],
  },
  'The Farstriders': {
    effects: [
      {
        name: `Champion`,
        desc: `Sanson Farstrider is the unit champion. Sanson Farstrider is accompanied by a Star Falcon and carries an Astral Compass. Add 1 to the Attacks characteristic of that model's Stormwrought Weapon.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Star Falcon`,
        desc: `If this unit includes Sanson Farstrider, at the start of your shooting phase, you can pick 1 enemy unit within 18" of this unit and roll a dice. On a 4+, that unit suffers 1 mortal wound.`,
        when: [START_OF_SHOOTING_PHASE],
      },
      {
        name: `Astral Compass`,
        desc: `If this unit includes Sanson Farstrider, at the start of your movement phase, instead of making a normal move, you can say that this unit will navigate the winds aetheric. If you do so, remove this unit from the battlefield and set it up again on the battlefield wholly within 6" of the battlefield edge and more than 9" from all enemy units.`,
        when: [START_OF_MOVEMENT_PHASE],
      },
    ],
  }, */
 /* 'Lord-Arcanum': {
   /* mandatory: {
      spells: [keyPicker(spells, ['Thunderclap'])],
    }, 
    effects: [
     // CycleOfTheStormEffect,
      {
        name: `Aetheric Manipulation`,
        desc: `When moving a predatory endless spell controlled by this unit, add 6" to the distance that the endless spell can be moved in that phase.`,
        when: [END_OF_HERO_PHASE],
      },
    ],
  },
  'Lord-Arcanum on Tauralon': {
   /* mandatory: {
      spells: [keyPicker(spells, ['Lightning Orb'])],
    }, 
    effects: [
    //  CycleOfTheStormEffect, CometTrailEffect
    ],
  },
  'Lord-Arcanum on Celestial Dracoline': {
   /* mandatory: {
      spells: [keyPicker(spells, ['Storm Lance'])],
    }, 
    effects: [
     // CycleOfTheStormEffect,
     // ThunderousPounceEffect,
      {
        name: `Pack Alpha`,
        desc: `Add 1 to the Attacks characteristic of Monstrous Claws used by friendly Dracoline units wholly within 18" of any friendly units with this ability.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Lord-Arcanum on Gryph-Charger': {
  /*  mandatory: {
      spells: [keyPicker(spells, ['Healing Light'])],
    }, 
    effects: [
    //  RideTheWindsAethericEffect, CycleOfTheStormEffect
    ],
  }, */
  'Lord-Aquilor': {
    effects: [
      //RideTheWindsAethericEffect,
      {
        name: `Vanguard Chamber - Passive`,
        desc: `Effect: This unit can use Shoot and/or Charge abilities even if it used a Run or Retreat ability in the same turn.`,
        when: [MOVEMENT_PHASE, SHOOTING_PHASE, CHARGE_PHASE],
      },
      {
        name: `Ride the Winds Aetheric`,
        desc: `Declare: If this unit is not in combat, you can pick up to 2 friendly Vanguard-Palladors units that are not in combat to be the targets. 
        Effect: Remove this unit and the targets (if any) from the battlefield. Set this unit up again on the battlefield more than 9" from all enemy units. Then, set up each target wholly within 12" of this unit and more than 9" from all enemy units.`,
        when: [MOVEMENT_PHASE],
      },
    ],
  },
  'Lord-Celestant on Dracoth': {
    effects: [
      {
        name: `Extremis Chamber - Passive`,
        desc: `Effect: Each time you make an unmodified save roll of 6 for a combat attack that targets this unit, inflict 1 mortal damage on the attacking unit aer the Fight ability has been resolved.`,
        when: [COMBAT_PHASE]
      },
     // SigmariteThundershieldEffect,
     // StormBlastEffect,
      {
        name: `Righteous Avengers - Reaction: You declared a Fight ability for this unit`,
        desc: `Effect: Pick a friendly non-Hero Extremis Chamber Cavalry unit that has not used a Fight ability this turn and is within this units combat range to be the target. The target can be picked to use a Fight ability immediately after the Fight ability used by this unit has been resolved.`,
        when: [COMBAT_PHASE],
      },
     // ImpalingStrikesEffect,
     // BlastToAshesEffect,
     // CleavingBlowEffect,
    ],
  },
  'Lord-Celestant on Stardrake': {
    effects: [
     // ...StardrakeBaseEffects,
     // SigmariteThundershieldEffect,
      {
        name: `Battle Damaged - Passive`,
        desc: `Effect: While this unit has 10 or more damage points, the Attacks characteristic of its Stardrakes Cavernous Jaws is 4.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Lord of the Host - Once Per Battle`,
        desc: `Effect: Add 1 to the Attacks characteristic of other friendly Extremis Chamber units wholly within 12" of this unit for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Extremis Chamber - Passive`,
        desc: `Effect: Each time you make an unmodified save roll of 6 for a combat attack that targets this unit, inflict 1 mortal damage on the attacking unit aer the Fight ability has been resolved.`,
        when: [COMBAT_PHASE]
      },
      {
        name: `Cavernous Jaws - Once Per Turn`,
        desc: `Declare: Pick an enemy unit in combat with this unit to be the target. 
        Effect: Roll 3 dice. For each roll that equals or exceeds the targets Health characteristic, 1 model in the target unit is slain.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Lord-Celestant': {
    effects: [
     // InescapableVengeanceEffect,
      {
        name: `Furious Retribution - Reaction: You declared a Fight ability for this unit`,
        desc: `Effect: Pick a friendly non-Hero Warrior Chamber Infantry unit that has not used a Fight ability this turn and is within this units combat range to be the target. The target can be picked to use a Fight ability immediately after the Fight ability used by this unit has been resolved. If it is picked to do so, add 1 to wound rolls for the targets attacks for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
 /* 'Lord-Castellant': {
    effects: [
      {
        name: `Warding Lantern`,
        desc: `In your hero phase, you can either pick 1 friendly STORMCAST ETERNALS unit wholly within 18" of this unit or 1 enemy unit wholly within 18" of this unit.

        If you pick a friendly STORMCAST ETERNALS unit, add 1 to save rolls for attacks that target that unit until your next hero phase.

        If you pick an enemy unit, roll a dice. On a 2+, the target suffers D3 mortal wounds. The same unit cannot be affected by this ability more than once per turn.`,
        when: [HERO_PHASE],
      },
    ],
  }, */
  'Gryph-Hounds': {
    effects: [
      {
        name: `Beast - Passive`,
        desc: `Effect: This unit has a maximum control score of 1.`,
        when: [END_OF_TURN],
      },
      {
        name: `Warning Cry`,
        desc: `Declare: Pick an enemy unit within 12" of this unit that was set up this turn. Then, pick up to 3 friendly Stormcast Eternals units armed with ranged weapons that are within 12" of that enemy unit to be the targets. 
        Effect: Roll a D3 for each target. On a 2+, inflict an amount of mortal damage on that enemy unit equal to the roll.`,
        when: [SHOOTING_PHASE],
      },
    ],
  },
  'Knight-Relictor': {
    effects: [
      {
        name: `Relic Censer`,
        desc: `Declare: Pick an enemy unit within 12" of this unit to be the target. 
        Effect: Roll a dice. On a 2+, subtract 1 from ward rolls made by the target for the rest of the turn.`,
        when: [SHOOTING_PHASE],
      },
    ],
  },
  'Lord-Relictor': {
   /* mandatory: {
      prayers: [keyPicker(prayers, ['Healing Storm', 'Lightning Storm'])],
    }, */
    effects: [
      {
        name: `Mortis Priest - Passive`,
        desc: `Effect: Add 1 to chanting rolls for this unit.`,
        when: [HERO_PHASE],
      },
    ],
  },
 /* 'Lord-Exorcist': {
   /* mandatory: {
      spells: [keyPicker(spells, ['Purifying Blast'])],
    }, 
    effects: [
      {
        name: `Redemptor Casket`,
        desc: `Slain models cannot be returned to enemy units that are within 9" of any friendly units with this ability.`,
        when: [DURING_GAME],
      },
    ],
  },
  'Lord-Ordinator': {
    effects: [
      {
        name: `Arcane Engineer`,
        desc: `Add 1 to hit rolls for attacks made by friendly Order War Machines wholly within 9" of any friendly units with this ability.`,
        when: [SHOOTING_PHASE, COMBAT_PHASE],
      },
      {
        name: `Comet Strike`,
        desc: `If the unmodified hit roll for an attack made with a melee weapon by this unit is 6, the target suffers 2 mortal wounds and the attack sequence ends (do not make a wound or save roll).`,
        when: [COMBAT_PHASE],
      },
    ],
  }, */
  'Lord-Veritant': {
   /* mandatory: {
      prayers: [keyPicker(prayers, ['Sanction'])],
    },*/
    effects: [
      {
        name: `Ruination Chamber - Once Per Turn - Reaction: This unit was picked as the target of a Non-Core ability`,
        desc: `Effect: Make a resistance roll of D6. On a 4+, that ability has no effect on this unit.`,
        when: [DURING_GAME],
      },
      {
        name: `Sense Unholy Sorcery - Passive`,
        desc: `Effect: This units Gryph-crow is a token. Subtract 1 from casting rolls and chanting rolls for enemy units within 12" of this unit while its Gryph-crow is on the battlefield. If you make an unmodified save roll of 1 for this unit, remove its Gryph-crow from the battlefield aer the Attack ability has been resolved (the damage point is still inflicted).`,
        when: [HERO_PHASE],
      },
      {
        name: `Staff of Abjuration - Passive`,
        desc: `Effect: This unit can use Unbind abilities as if it had Wizard (1).`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Knight-Arcanum': {
  /*  mandatory: {
      spells: [keyPicker(spells, ['Blaze of the Heavens'])],
    },*/
    effects: [
      {
        name: `Indomitable Loreseekers - Passive`,
        desc: `Effect: Add 1 to casting rolls for this unit when it uses a Summon ability and add 1 to banishment rolls for this unit. Enemy Manifestations cannot pass through or end any move within this units combat range unless they started that move within this units combat range. This unit has Ward (4+) against mortal damage inflicted by Manifestations.`,
        when: [DURING_GAME, HERO_PHASE],
      },
    ],
  },
 /* 'Knight-Azyros': {
    effects: [
      {
        name: `The Light of Sigmar`,
        desc: `Once per turn, at the end of the charge phase, you can pick 1 enemy unit within 9" of this unit. Add 1 to hit rolls for attacks made by friendly STORMCAST ETERNALS units that target that enemy unit in the following combat phase.`,
        when: [END_OF_CHARGE_PHASE],
      },
    ],
  }, */
  'Knight-Draconis': {
    effects: [
   //   ArcaneHeritageEffect,
    //  DraconicFlamestreamEffect,
      {
        name: `Wrath of the Draconith - Once Per Turn`,
        desc: `Declare: Pick a friendly Stormdrake Guard unit within this units combat range to be the target. 
        Effect: Roll a dice. On a 2+, add 1 to the Attacks characteristic of both this units and the targets Draconiths Fangs and Talons for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Arcane Heritage - Reaction: Opponent declared a Spell ability`,
        desc: `Effect: If this unit or a friendly Stormdrake Guard unit wholly within 12" of this unit was picked to be the target of that spell, roll a dice. On a 4+, ignore the effect of that spell on this unit or that friendly unit. This unit can use this ability more than once per phase but only once per Spell ability.`,
        when: [HERO_PHASE],
      },
      {
        name: `Extremis Chamber - Passive`,
        desc: `Effect: Each time you make an unmodified save roll of 6 for a combat attack that targets this unit, inflict 1 mortal damage on the attacking unit aer the Fight ability has been resolved.`,
        when: [COMBAT_PHASE]
      },
    // DraggedIntoTheTempestEffect,
    ],
  },
 /* 'Knight-Venator': {
    effects: [
      {
        name: `Star-fated Arrow`,
        desc: `Once per battle, in your shooting phase, you can say that this unit will shoot a star-fated arrow instead of attacking with its missile weapons. If you do so, pick 1 enemy unit within 30" of this unit and roll a dice. On a 3+, the target suffers D3 mortal wounds. If the target is a HERO or Monster, it suffers D6 mortal wounds instead of D3.`,
        when: [SHOOTING_PHASE],
      },
    ],
  },
  'Knight-Incantor': {
  /*  mandatory: {
      spells: [keyPicker(spells, ['Spirit Storm'])],
    },
    effects: [
      //VoidstormScrollEffect
    ],
  },
  'Knight-Heraldor': {
    effects: [
      {
        name: `Thunderblast`,
        desc: `In your shooting phase, you can pick 1 terrain feature wholly within 18" of this unit. Roll a dice for each enemy unit within 3" of that terrain feature. On a 2+, that unit suffers D3 mortal wounds.`,
        when: [SHOOTING_PHASE],
      },
    ],
  },
  'Errant-Questor': {
    effects: [
      {
        name: `Implacable Determination`,
        desc: `When you make save rolls for this model, ignore the enemy's Rend characteristic.`,
        when: [SAVES_PHASE],
      },
      {
        name: `Oathsworn`,
        desc: `After setup, you must declare an oath for each Errant-Questor in your army to fulfil:

        Sworn Protector: Pick a HERO in your army for the Errant-Questor to protect. Whilst this model is within 3" of the HERO you picked, you can choose to allocate any unsanved or mortal wound inflicted upon that model to the Errant-Questor instead.

        Blood Feud: Pick a HERO in the enemy army. You can reroll all failed hit and wound rolls when attacking that HERO with this model. If you have more than one Errant-Questor in your army that chooses this oath, you must pick a different enemy HERO to be the target of each blood feud.

        Fueled by Vengeance: Keep track of how many unsaved wounds this model inflicts upon enemy models in battle. Add 1 to the Attacks characteristic of this model's Rune-etched Greatblade for every 10 wounds he inflicts during the battle.`,
        when: [END_OF_SETUP],
      },
      {
        name: `Relentless Purpose`,
        desc: `You can reroll failed charge rolls for an Errant-Questor.`,
        when: [CHARGE_PHASE],
      },
    ],
  }, */
  'Knight-Questor': {
    effects: [
      {
        name: `Heroic Retribution - Reaction: You declared a Fight ability for this unit`,
        desc: `Effect: Pick a friendly Questor Soulsworn unit that has not used a Fight ability this turn and is within this units combat range to be the target. The target can be picked to use a Fight ability immediately after the Fight ability used by this unit has been resolved.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Ordained Quest - Once Per Battle`,
        desc: `Effect: Pick an objective wholly outside friendly territory. That objective is considered by you to be questmarked.`,
        when: [DURING_SETUP],
      },
      {
        name: `His Will Be Done - Passive`,
        desc: `Effect: While this unit is contesting a questmarked objective:  
        Add 3 to this units control score.  
        This unit has Ward (5+).`,
        when: [DURING_GAME, END_OF_TURN],
      },
    ],
  },
  /*'Knight-Questor Larissa Shadowstalker': {
    effects: [
      {
        name: `Deathstrike`,
        desc: `If the unmodified hit roll for an attack made with this model's Stormstrike Glaive that targets a MONSTER is 6, that attack has a Damage characteristic of D6 instead of 1.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `The Malleus Occulum`,
        desc: `If your battle is taking place in Ulgu, the Realm of Shadow, you can reroll charge rolls for this model.`,
        when: [CHARGE_PHASE],
      },
      {
        name: `Protector Discipline`,
        desc: `Add 1 to save rolls for attacks made with missile weapons that target this model.`,
        when: [SAVES_PHASE],
      },
      {
        name: `The Shadowstalker's Quarry`,
        desc: `If this model is within 6" of an enemy MONSTER in the combat phase, it is eligible to fight and can move an extra 3" when it piles in, but must end that pile-in move within 1" of an enemy MONSTER. In addition, you can reroll hit rolls for attacks made by this model if the target of the attack is a MONSTER.`,
        when: [COMBAT_PHASE],
      },
    ],
  }, */
  'Knight-Vexillor': {
    effects: [
      {
        name: `The Banner of the Reforged`,
        desc: `Declare: Pick D3 friendly Stormcast Eternals units wholly within 12" of this unit to be the targets. 
        Effect: Add 3 to each targets control score for the rest of the turn. In addition, Heal (D3) each target.`,
        when: [HERO_PHASE],
      },
    //  SoulChargedIconEffect,
    ],
  },
 /* 'Knight-Vexillor with Banner of Apotheosis': {
    effects: [
      {
        name: `The Banner of the Reforged`,
        desc: `Once per battle, in your hero phase, you can pick up to 3 friendly STORMCAST ETERNALS units wholly within 12" of this unit to be affected by the banner's energy (you can pick the same unit multiple times).

        If you pick a unit once with this ability, you can heal up to D3 wounds allocated to that unit or, if no wounds are allocated to it, you can return a number of slain models to that unit that have a combined Wounds characteristic of D3 or less. If you pick a unit twice with this ability, you can heal up to 2D3 wounds allocated to that unit or, if no wounds are allocated to it, you can return a number of slain models to that unit that have a combined Wounds characteristic of 2D3 or less. If you pick a unit three times with this ability, you can heal up to 3D3 wounds allocated to that unit or, if no wounds are allocated to it, you can return a number of slain models to that unit that have a combined Wounds characteristic of 3D3 or less.`,
        when: [HERO_PHASE],
      },
     // SoulChargedIconEffect,
    ],
  }, 
  'Knight-Zephyros': {
    effects: [
    //  TirelessHuntersEffect, WindriderEffect
    ],
  }, */
  'Drakesworn Templar': {
    effects: [
     // ...StardrakeBaseEffects,
     {
      name: `Battle Damaged - Passive`,
      desc: `Effect: While this unit has 10 or more damage points, the Attacks characteristic of its Stardrakes Cavernous Jaws is 4.`,
      when: [COMBAT_PHASE],
    },
    {
      name: `Extremis Chamber - Passive`,
      desc: `Effect: Each time you make an unmodified save roll of 6 for a combat attack that targets this unit, inflict 1 mortal damage on the attacking unit aer the Fight ability has been resolved.`,
      when: [COMBAT_PHASE]
    },
      {
        name: `Monsterous Challenge - Once Per Turn`,
        desc: `Declare: Pick an enemy Monster in combat with this unit to be the target. 
        Effect: Roll a dice. On a 2+, for the rest of the turn:  
        Add 1 to the Damage characteristic of this units Stardrakes Cavernous Jaws for attacks that target that unit.  
        If the target is also a Hero, add 1 to the Damage characteristic of this units Templar Weapons for attacks that target that unit.`,
        when: [COMBAT_PHASE],
      },
     // CelestialBlastEffect,
    ],
  },
  // Fulminators: {
  //   effects: [
  //     IntolerableDamageEffect,
  //     SigmariteShieldEffect,
  //     StormBlastEffect,
  //     {
  //       name: `Impaling Strikes`,
  //       desc: `Add 2 to the Damage of this unit's Stormstrike Glaives if the unit made a charge move in the same turn.`,
  //       when: [COMBAT_PHASE],
  //     },
  //     {
  //       name: `Glaivewall`,
  //       desc: `Add 1 to save rolls for attacks made with missiles weapons that target this unit.`,
  //       when: [SAVES_PHASE],
  //     },
  //   ],
  // },
  // Desolators: {
  //   effects: [
  //     IntolerableDamageEffect,
  //     SigmariteShieldEffect,
  //     StormBlastEffect,
  //     {
  //       name: `Fury of the Storm`,
  //       desc: `While this unit has 4 or more models, add 1 to the Attacks of this unit's Thunderaxes. While this unit has 6 or more models, add 2 to the Attacks instead.`,
  //       when: [COMBAT_PHASE],
  //     },
  //   ],
  // },
 /* Tempestors: {
    effects: [
      //IntolerableDamageEffect,
     // SigmariteShieldEffect,
      //StormBlastEffect,
      {
        name: `Disruptive Fire`,
        desc: `Subtract 1 from hit rolls for missile attacks used by enemy units while they are within 12" of one or more friendly TEMPESTORS.`,
        when: [SHOOTING_PHASE],
      },
    ],
  }, 
  Protectors: {
    effects: [
      {
        name: `Champion`,
        desc: `1 model in this unit can be a Protector-Prime. Add 1 to the Attacks characteristic of that model's Stormstrike Glaive.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Shield of the Storm`,
        desc: `Add 1 to save rolls for attacks that target this unit if at least half of the models in this unit (rounding down) are armed with Stormstrike Glaives.`,
        when: [SAVES_PHASE],
      },
     // StarsoulMaceEffect,
    ],
  },
  Decimators: {
    effects: [
      {
        name: `Champion`,
        desc: `1 model in this unit can be a Decimator-Prime. Add 1 to the Attacks characteristic of that model's Thunderaxe.`,
        when: [COMBAT_PHASE],
      },
     // StarsoulMaceEffect,
     // CleavingBlowEffect,
    ],
  }, */
  Liberators: {
    effects: [
      {
        name: `Stalwart Defenders - Passive`,
        desc: `Effect: Add 3 to this units control score while it is contesting an objective wholly within friendly territory.`,
        when: [END_OF_TURN],
      },
     // LayLowTheTyrantsEffect,
     // SigmariteShieldEffect,
    ],
  },
 /* Retributors: {
    effects: [
      {
        name: `Champion`,
        desc: `1 model in this unit can be a Retributor-Prime. Add 1 to the Attacks characteristic of that model's Lightning Hammer.`,
        when: [COMBAT_PHASE],
      },
     // BlastToAshesEffect,
     // StarsoulMaceEffect,
    ],
  },
  'Prosecutors with Stormcall Javelins': {
    effects: [
      {
        name: `Champion`,
        desc: `1 model in this unit can be a Prosecutor-Prime. Add 1 to the Attacks characteristic of that model's Stormcall Javelin.`,
        when: [SHOOTING_PHASE],
      },
     // DispersedFormationEffect,
     // HeraldsOfRighteousnessEffect,
     // SigmariteShieldEffect,
    ],
  }, */
  'Prosecutors': {
    effects: [
      {
        name: `Ruination Chamber - Once Per Turn - Reaction: This unit was picked as the target of a Non-Core ability`,
        desc: `Effect: Make a resistance roll of D6. On a 4+, that ability has no effect on this unit.`,
        when: [DURING_GAME],
      },
      {
        name: `Dispersed Formation - Passive`,
        desc: `Effect: This unit has a coherency range of 2".`,
        when: [DURING_GAME],
      },
      {
        name: `Heralds of Righteousness - Passive`,
        desc: `Effect: Add 1 to the number of dice rolled when making charge rolls for this unit, to a maximum of 3.`,
        when: [CHARGE_PHASE],
      },
     // DispersedFormationEffect,
     // HeraldsOfRighteousnessEffect,
     // SigmariteShieldEffect,
    ],
  },
 /* 'Judicators with Boltstorm Crossbows': {
    effects: [
      {
        name: `Champion`,
        desc: `1 model in this unit can be a Judicator-Prime. Add 1 to the Attacks characteristic of that model's Boltstorm Crossbow or Thunderbolt Crossbow.`,
        when: [SHOOTING_PHASE],
      },
      {
        name: `Rapid Fire`,
        desc: `If an attack made with a Boltstorm Crossbow scores a hit, that attack scores 2 hits on the target instead of 1. Make a wound and save roll for each hit.`,
        when: [SHOOTING_PHASE],
      },
    ],
  },
  'Judicators with Skybolt Bows': {
    effects: [
    //  CelestialBlastEffect
    ],
  }, */
  'Vanguard-Raptors with Hurricane Crossbows': {
    effects: [
      {
        name: `Vanguard Chamber - Passive`,
        desc: `Effect: This unit can use Shoot and/or Charge abilities even if it used a Run or Retreat ability in the same turn.`,
        when: [MOVEMENT_PHASE, SHOOTING_PHASE, CHARGE_PHASE],
        rule_sources: [meta_rule_sources.BOOK_DAWNBRINGERS_BOOK_3],
      },
      {
        name: `Coordinated Strike - Passive`,
        desc: `Effect: Add 1 to wound rolls for this units shooting attacks if the target is in combat with any friendly Vanguard Chamber units.`,
        when: [SHOOTING_PHASE],
      },
    ],
  },
  'Vanguard-Raptors with Longstrike Crossbows': {
    effects: [
      {
        name: `Vanguard Chamber - Passive`,
        desc: `Effect: This unit can use Shoot and/or Charge abilities even if it used a Run or Retreat ability in the same turn.`,
        when: [MOVEMENT_PHASE, SHOOTING_PHASE, CHARGE_PHASE],
        rule_sources: [meta_rule_sources.BOOK_DAWNBRINGERS_BOOK_3],
      },
      {
        name: `Headshot`,
        desc: `Effect: If this unit has not used a Move ability this turn and was not set up this turn, for the rest of the turn, this unit can ignore the effects of the Guarded Hero ability (Core Rules, 25.0) when picking targets for its shooting attacks.`,
        when: [SHOOTING_PHASE],
      },
    ],
  },
  'Vanguard-Hunters': {
    effects: [
      {
        name: `Vanguard Chamber - Passive`,
        desc: `Effect: This unit can use Shoot and/or Charge abilities even if it used a Run or Retreat ability in the same turn.`,
        when: [MOVEMENT_PHASE, SHOOTING_PHASE, CHARGE_PHASE],
        rule_sources: [meta_rule_sources.BOOK_DAWNBRINGERS_BOOK_3],
      },
      {
        name: `Astral Compass - Once Per Battle`,
        desc: `Declare: Pick an enemy unit to be the target. 
        Effect: The target has the Hunted keyword for the rest of the battle.`,
        when: [DURING_SETUP],
        rule_sources: [meta_rule_sources.BOOK_DAWNBRINGERS_BOOK_3],
      },
      {
        name: `Star-Marked - Passive`,
        desc: `Effect: Add 2" to this units Move characteristic while a Hunted enemy unit is on the battlefield. In addition, add 1 to hit rolls for this units attacks that target a Hunted enemy unit.`,
        when: [MOVEMENT_PHASE, SHOOTING_PHASE, CHARGE_PHASE],
        rule_sources: [meta_rule_sources.BOOK_DAWNBRINGERS_BOOK_3],
      },
   //  AstralCompassEffect,
    ],
  },
  'Vanguard-Palladors with Javelins': {
    effects: [
      {
        name: `Vanguard Chamber - Passive`,
        desc: `Effect: This unit can use Shoot and/or Charge abilities even if it used a Run or Retreat ability in the same turn.`,
        when: [MOVEMENT_PHASE, SHOOTING_PHASE, CHARGE_PHASE],
        rule_sources: [meta_rule_sources.BOOK_DAWNBRINGERS_BOOK_3],
      },
      {
        name: `Charging Volley`,
        desc: `Declare: If this unit charged this phase, pick an enemy unit in combat with it to be the target. 
        Effect: This unit can immediately use a Shoot ability as if it were your shooting phase, but it must target that enemy unit. This units Starstrike Javelins have Shoot in Combat this phase.`,
        when: [CHARGE_PHASE],
        rule_sources: [meta_rule_sources.BOOK_DAWNBRINGERS_BOOK_3],
      },
    //  RideTheWindsAethericEffect,
    ],
  },
  'Vanguard-Palladors with Handaxes': {
    effects: [
      {
        name: `Vanguard Chamber - Passive`,
        desc: `Effect: This unit can use Shoot and/or Charge abilities even if it used a Run or Retreat ability in the same turn.`,
        when: [MOVEMENT_PHASE, SHOOTING_PHASE, CHARGE_PHASE],
        rule_sources: [meta_rule_sources.BOOK_DAWNBRINGERS_BOOK_3],
      },
      {
        name: `Shocking Strikes - Passive`,
        desc: `Effect: If any damage points are allocated to an enemy unit by attacks made with this units Shock Handaxes, subtract 1 from wound rolls for that enemy units combat attacks for the rest of the turn.`,
        when: [COMBAT_PHASE],
        rule_sources: [meta_rule_sources.BOOK_DAWNBRINGERS_BOOK_3],
      },
    //  RideTheWindsAethericEffect,
    ],
  },
  Aetherwings: {
    effects: [
      {
        name: `Beast - Passive`,
        desc: `Effect: This unit has a maximum control score of 1.`,
        when: [END_OF_TURN],
      },
      {
        name: `Marked for Destruction - Passive`,
        desc: `Effect: Add 1 to hit rolls for shooting attacks made by friendly Vanguard Chamber units if the target is within 9" of this unit.`,
        when: [SHOOTING_PHASE],
      },
    ],
  },
  /*'Celestar Ballista': {
    effects: [
      {
        name: `Versatile Weapon`,
        desc: `Each time this unit shoots, choose either the Lightning-charged Shot or Rapid Fire weapon characteristics for all the attacks it makes with its Celestar Stormbolts.`,
        when: [SHOOTING_PHASE],
      },
    ],
  },
  Castigators: {
    effects: [
      {
        name: `Champion`,
        desc: `1 model in this unit can be a Castigator-Prime. Add 1 to the Attacks characteristic of that model's Thunderhead Greatbow.`,
        when: [SHOOTING_PHASE],
      },
      {
        name: `Castigator Aetheric Channelling`,
        desc: `At the start of the shooting phase, you must say whether this unit will increase either the accuracy or the power of its Thunderhead Greatbows.

        If you pick accuracy, until the end of that phase, add 1 to hit rolls for attacks made with this unit's Thunderhead Greatbows.

        If you pick power, until the end of that phase, this unit's Thunderhead Greatbows have a Rend characteristic of -2 instead of -1.`,
        when: [START_OF_SHOOTING_PHASE],
      },
      {
        name: `Burst of Celestial Energy`,
        desc: `If the unmodified hit roll for an attack made with a Thunderhead Greatbow that targets a Malignant or Daemon unit is 6, that attack scores 2 hits on the target instead of 1. Make a wound and save roll for each hit.`,
        when: [SHOOTING_PHASE],
      },
    ],
  },
  Sequitors: {
    effects: [
      {
        name: `Champion`,
        desc: `1 model in this unit can be a Sequitor-Prime. Add 1 to the Attacks characteristic of that model's Sacrosanct Weapons or Stormsmite Greatmace. If a Sequitor-Prime is armed with Sacrosanct Weapons and a Soulshield, it can also carry a Redemption Cache.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Sequitor Aetheric Channelling`,
        desc: `At the start of the combat phase, you must say whether this unit will channel aetheric power into its weapons or into its shields.

        If you pick its weapons, until the end of that phase, if the unmodified hit roll for an attack made by this unit is 6, that attack scores 2 hits on the target instead of 1. Make a wound and save roll for each hit.
        
        If you pick its shields, until the end of that phase, this unit has a ward of 5+.`,
        when: [START_OF_COMBAT_PHASE],
      },
      {
        name: `Redemption Cache`,
        desc: `Slain models cannot be returned to enemy units that are within 3" of this unit's Sequitor-Prime.`,
        when: [DURING_GAME],
      },
    ],
  }, */
  Vanquishers: {
    effects: [
      {
        name: `Lightning Strikes - Passive`,
        desc: `Effect: Add 1 to the Damage characteristic of this units Celestial Greatswords for attacks that target an enemy unit that has 5 or more models.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
/*  Evocators: {
   /* mandatory: {
      spells: [keyPicker(spells, ['Empower'])],
    },
    effects: [
      {
        name: `Wizard`,
        desc: `This unit is a Wizard while this unit has 2 or more models. It can attempt to cast 1 spell in your hero phase and attempt to unbind 1 spell in the enemy hero phase. It only knows the Empower spell and cannot attempt to cast any other spells. Any number of Evocators units can attempt to cast Empower in the same hero phase.`,
        when: [HERO_PHASE],
      },
    //  EvocatorChampionEffect,
    //  CelestialLightningArcEffect,
    ],
  },
  'Evocators on Celestial Dracolines': {
   /* mandatory: {
      spells: [keyPicker(spells, ['Empower'])],
    }, 
    effects: [
      {
        name: `Wizard`,
        desc: `This unit is a Wizard while it has 2 or more models. It can attempt to cast 1 spell in your hero phase and attempt to unbind 1 spell in the enemy hero phase. It only knows the Empower spell and cannot attempt to cast any other spells. Any number of Evocators units can attempt to cast Empower in the same hero phase.`,
        when: [HERO_PHASE],
      },
     // EvocatorChampionEffect,
     // ThunderousPounceEffect,
    //  CelestialLightningArcEffect,
    ],
  }, */
  // Removed in 2021 (?)
  // 'Lynus Ghalmorian on Gryph Charger': {
  //   mandatory: {
  //     command_abilities: [keyPicker(command_abilities, ['Sombre Exemplar'])],
  //     spells: [keyPicker(spells, ['Amethyst Gale'])],
  //   },
  //   effects: [
  //     AetherealStrikeEffect,
  //     RideTheWindsAethericEffect,
  //     CycleOfTheStormEffect,
  //     SpiritFlaskEffect,
  //     {
  //       name: `Shield of the Pale Knight`,
  //       desc: `You can reroll save rolls of 1 for attacks made with missile weapons that target this model or any friendly ANVILS OF HELDENHAMMER units wholly within 12" of this model.`,
  //       when: [SAVES_PHASE],
  //     },
  //     PrimeElectridsEffect,
  //   ],
  // },
 /* 'Averon Stormsire': {
   /* mandatory: {
      spells: [keyPicker(spells, ['Stormsire'])],
    }, 
    effects: [
    //  VoidstormScrollEffect
    ],
  }, */
  'Bastian Carthalos': {
    effects: [
      {
        name: `Voice of Thunder - Passive`,
        desc: `Effect: Each time a friendly Stormcast Eternals unit wholly within 12" of this unit uses the All-out Attack command, no command points are spent.`,
        when: [SHOOTING_PHASE, COMBAT_PHASE],
      },
      {
        name: `Castellan of Azyr`,
        desc: `Declare: Pick up to 3 friendly Stormcast Eternals Infantry units to be the targets. 
        Effect: Each target can use the Normal Move ability as if it were your movement phase.`,
        when: [DURING_SETUP],
      },
      {
        name: `Mantle of the First Storm`,
        desc: `Effect: If any enemy models were slain by this units attacks this turn, Heal (4) this unit.`,
        when: [END_OF_TURN],
      },
    ],
  },
  /*"Stormsire's Cursebreakers": {
   /* mandatory: {
      spells: [keyPicker(spells, ['Empower'])],
    }, 
    effects: [
      {
        name: `Wizard`,
        desc: `This unit is a Wizard while it has 2 models. It can attempt to cast one spell in your hero phase, and attempt to unbind one spell in the enemy hero phase. It knows the Empower spell. It cannot attempt to cast any spells other than Empower, but any number of units of Evocators can attempt to cast Empower in the same hero phase.`,
        when: [HERO_PHASE],
      },
    //  CelestialLightningArcEffect,
    ],
  }, */
  'Gardus Steel Soul': {
    effects: [
      {
        name: `Aura of Purity - Passive`,
        desc: `Effect: If this unit charged this turn, for the rest of the turn, friendly Stormcast Eternals units have Ward (5+) while they are wholly within 12" of this unit.`,
        when: [DURING_GAME],
      },
      {
        name: `Saintly Assault - Once Per Battle`,
        desc: `Declare: Pick up to 3 visible friendly Stormcast Eternals Infantry units wholly within 6" of this unit to be the targets. 
        Effect: For the rest of the turn:  
        Add 1 to charge rolls for the targets.  
        Add 1 to the Attacks characteristic of the targets melee weapons.`,
        when: [CHARGE_PHASE],
      },
    ],
  },
  Yndrasta: {
    effects: [
      {
        name: `The Prime Huntress - Passive`,
        desc: `Effect: Double the Damage characteristic of this units Thengavar for attacks that target Monsters.`,
        when: [COMBAT_PHASE, SHOOTING_PHASE],
      },
      {
        name: `On Wings of Brilliance - Passive`,
        desc: `Effect: Add 1 to the number of dice rolled when making charge rolls for this unit, to a maximum of 3.`,
        when: [CHARGE_PHASE],
      },
      {
        name: `Dazzling Radiance - Passive`,
        desc: `Effect: Ignore negative modifiers to the control scores of friendly Stormcast Eternals units while they are wholly within 12" of this unit.`,
        when: [END_OF_TURN],
      },
    ],
  },
  'Lord-Imperatant': {
    effects: [
      {
        name: `Loyal Gryph-Hound - Passive`,
        desc: `Effect: This units Gryph-hound is a token. This unit has Ward (5+) while its Gryph-hound is on the battlefield. If you make an unmodified save roll of 1 for this unit, remove its Gryph-hound from the battlefield after the Attack ability has been resolved (the damage point is still inflicted).`,
        when: [DURING_GAME],
      },
      {
        name: `Guided by Lightning - Once Per Battle`,
        desc: `Declare: Pick up to 3 friendly Stormcast Eternals units wholly within 12" of this unit that were set up this turn using the Scions of the Storm ability to be the targets. 
        Effect: Each target can immediately move D3". The targets cannot move into combat during any part of that move.`,
        when: [MOVEMENT_PHASE],
      },
    ],
  },
  Praetors: {
    effects: [
      {
        name: `Soul-Bonded`,
        desc: `Effect: Pick a friendly Stormcast Eternals Hero to be this units soul-bonded charge for the rest of the battle.`,
        when: [DURING_SETUP],
      },
      {
        name: `Soul-forged Guardians - Passive`,
        desc: `Effect: While this units soul-bonded charge is within this units combat range, both this unit and that soul-bonded charge have Ward (5+).`,
        when: [DURING_GAME],
      },
    ],
  },
  Vindictors: {
    effects: [
      {
        name: `Hold the Shieldwall`,
        desc: `Effect: If this unit did not charge this turn and is in combat with an enemy unit that charged this turn, roll a dice. On a 4+, this unit has Strike-first for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  Annihilators: {
    effects: [
      {
        name: `Brace for Impact`,
        desc: `Declare: Pick an enemy unit that charged this turn and is in combat with this unit to be the target. 
        Effect: Roll a dice for each model in this unit. If any of the rolls are a 6, the target has Strike-last for the rest of the turn.`,
        when: [CHARGE_PHASE],
      },
      {
        name: `Blazing Impact`,
        desc: `Declare: If this unit was set up this turn using the Scions of the Storm ability, pick up to 3 enemy units within 10" of it to be the targets. 
        Effect: Roll a D3 for each target. On a 2+, inflict an amount of mortal damage on the target equal to the roll.`,
        when: [MOVEMENT_PHASE],
      },
     // ...AnnihilatorBaseEffects,
    ],
  },
  'Annihilators with Meteoric Grandhammers': {
    effects: [
      {
        name: `Force of a Falling Star`,
        desc: `Declare: If this unit charged this phase and the unmodified charge roll was 8+, pick an enemy unit within 1" of it to be the target. 
        Effect: The target has Strike-last for the rest of the turn.`,
        when: [CHARGE_PHASE],
      },
      {
        name: `Blazing Impact`,
        desc: `Declare: If this unit was set up this turn using the Scions of the Storm ability, pick up to 3 enemy units within 10" of it to be the targets. 
        Effect: Roll a D3 for each target. On a 2+, inflict an amount of mortal damage on the target equal to the roll.`,
        when: [MOVEMENT_PHASE],
      },
      //...AnnihilatorBaseEffects,
    ],
  },
  'Stormstrike Chariot': {
    effects: [
      {
        name: `Celestial Blaze - Passive`,
        desc: `Effect: When this unit uses the Power Through command, inflict an additional D3 mortal damage on the target and add D6" to the distance this unit can move as part of that ability.`,
        when: [END_OF_TURN],
      },
      {
        name: `Azyr Unleashed`,
        desc: `Declare: If this unit charged this phase, pick an enemy unit within 1" of it to be the target. 
        Effect: Roll a D3. On a 2+, inflict an amount of mortal damage on the target equal to the roll.`,
        when: [CHARGE_PHASE],
      },
    ],
  },
  'Knight-Judicator with Gryph-Hounds': {
    effects: [
      {
        name: `Faithful Gryph-hounds - Passive`,
        desc: `Effect: This units Gryph-hounds are tokens. After setting up this unit on the battlefield for the first time, place both Gryph-hounds next to it.`,
        when: [DURING_SETUP],
      },
      {
        name: `Hunting Hounds - Once Per Turn`,
        desc: `Declare: If this unit was not set up this turn and any of this units Gryph-hounds are on the battlefield, pick an enemy unit within 12" of this unit to be the target. 
        Effect: Roll a dice. On a 1, remove 1 of this units Gryph-hounds from the battlefield. On a 2+, pick 1 of this units Gryph-hounds that is next to this unit or next to an enemy unit and place it next to the target instead. 
        While any of this units Gryph-hounds are next to an enemy unit, add 1 to hit rolls and wound rolls for this units shooting attacks that target that unit. 
        If an enemy unit is destroyed or removed from the battlefield while any of this units Gryph-hounds are next to it, place those Gryph-hounds next to this unit.`,
        when: [SHOOTING_PHASE],
      },
    ],
  },
  Krondys: {
   /* mandatory: {
      spells: [keyPicker(spells, ['Atavistic Tempest'])],
    }, */
    effects: [
      //BlazingTempestEffect,
     // AncientMasterOfWarEffect,
     // CalamitousTailEffect,
      {
        name: `Regalia Fulmentarus - Passive`,
        desc: `Effect: Add 2 to casting rolls for this unit.`,
        when: [HERO_PHASE],
      },
      {
        name: `Battle Damaged - Passive`,
        desc: `Effect: While this unit has 10 or more damage points, the Attacks characteristic of its Apex Maw is 2.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Soul-Shaking Roar - Once Per Turn`,
        desc: `Declare: Pick an enemy unit in combat with this unit to be the target. 
        Effect: Roll a dice. On a 3+, the target cannot use commands for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Atavistic Tempest: Casting value of 8`,
        desc: `Declare: Pick a visible enemy unit within 18" of the caster to be the target, then make a casting roll of 2D6. 
        Effect: Pick 1 of the following effects to apply to the target until the start of your next turn: 
        Blinding Gales: Subtract 1 from hit rolls for the targets attacks. 
        Meteor-hail: Subtract 1 from the Rend characteristic of the targets weapons. 
        Flash-freezing Blizzard: Subtract 1 from save rolls for the target.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Dracothian Guard Concussors': {
    effects: [
      //GenericEffects.Elite, StormBlastEffect, BlastToAshesEffect
      {
        name: `Extremis Chamber - Passive`,
        desc: `Effect: Each time you make an unmodified save roll of 6 for a combat attack that targets this unit, inflict 1 mortal damage on the attacking unit aer the Fight ability has been resolved.`,
        when: [COMBAT_PHASE]
      },  
      {
        name: `Thunderstruck - Once Per Turn`,
        desc: `Declare: Pick an enemy unit in combat with this unit to be the target. 
        Effect: Roll a dice. On a 3+, the target cannot use commands for the rest of the turn.`,
        when: [COMBAT_PHASE]
      },
    ],
  },
  'Dracothian Guard Desolators': {
    effects: [
      //GenericEffects.Elite, StormBlastEffect, CleavingBlowEffect
      {
        name: `Extremis Chamber - Passive`,
        desc: `Effect: Each time you make an unmodified save roll of 6 for a combat attack that targets this unit, inflict 1 mortal damage on the attacking unit aer the Fight ability has been resolved.`,
        when: [COMBAT_PHASE]
      },  
      {
        name: `Cleaving Blow - Passive`,
        desc: `Effect: Add 1 to the Damage characteristic of this units Thunderaxes if the target unit has 10 or more models.`,
        when: [COMBAT_PHASE]
      },  
    ],
  },
  'Dracothian Guard Fulminators': {
    effects: [
    //  GenericEffects.Elite, ImpalingStrikesEffect, StormBlastEffect
    {
      name: `Extremis Chamber - Passive`,
      desc: `Effect: Each time you make an unmodified save roll of 6 for a combat attack that targets this unit, inflict 1 mortal damage on the attacking unit aer the Fight ability has been resolved.`,
      when: [COMBAT_PHASE]
    },  
    {
      name: `Impaling Strikes`,
      desc: `Declare: If this unit charged this phase, pick an enemy unit within 1" of it to be the target. 
      Eect: Roll a D3. On a 2+, inflict an amount of mortal damage on the target equal to the roll.`,
      when: [CHARGE_PHASE]
    },   
  ],
  },
  'Dracothian Guard Tempestors': {
    effects: [
      GenericEffects.Elite,
      //StormBlastEffect,
      {
        name: `Extremis Chamber - Passive`,
        desc: `Effect: Each time you make an unmodified save roll of 6 for a combat attack that targets this unit, inflict 1 mortal damage on the attacking unit aer the Fight ability has been resolved.`,
        when: [COMBAT_PHASE]
      }, 
      {
        name: `Overwhelming Volleystorm`,
        desc: `Declare: Pick an enemy unit that had any damage points allocated to it this turn by attacks made with this units Volleystorm Crossbows to be the target. 
        Effect: Roll a dice. On a 2+, the target cannot use the All-out Defence command in the following combat phase.`,
        when: [SHOOTING_PHASE, COMBAT_PHASE],
      },
    ],
  },
  'Stormdrake Guard': {
    effects: [
      {
        name: `Extremis Chamber - Passive`,
        desc: `Effect: Each time you make an unmodified save roll of 6 for a combat attack that targets this unit, inflict 1 mortal damage on the attacking unit aer the Fight ability has been resolved.`,
        when: [COMBAT_PHASE]
      }, 
      {
        name: `Dispersed Formation - Passive`,
        desc: `Effect: This unit has a coherency range of 2".`,
        when: [DURING_GAME],
      },
     // DispersedFormationEffect,
     // ArcaneHeritageEffect,
     // DraconicFlamestreamEffect,
     // DraggedIntoTheTempestEffect,
      {
        name: `Draconic Onslaught - Once Per Turn`,
        desc: `Effect: If this unit charged this turn, roll a dice. On a 3+, this unit can move 2D6". It can pass through the combat ranges of enemy units and can end that move in combat. Then, pick an enemy unit that this unit passed across during that move. Inflict D3 mortal damage on that enemy unit`,
        when: [COMBAT_PHASE],
        rule_sources: [
          rule_sources.BATTLETOME_STORMCAST_ETERNALS,
          rule_sources.ERRATA_JULY_2022,
          meta_rule_sources.BATTLESCROLL_GALLETIAN_CHAMPIONS_JANUARY_2022,
          meta_rule_sources.BATTLESCROLL_ANDTOR_SEPTEMBER_2023,
        ],
      },
    ],
  },
  Vigilors: {
    effects: [
      {
        name: `Navigators of the Storm - Passive`,
        desc: `Effect: If an enemy unit had any damage points allocated to it this turn by this units shooting attacks, add 1 to hit rolls for attacks made by friendly Stormcast Eternals units that target that unit for the rest of the turn.`,
        when: [SHOOTING_PHASE, COMBAT_PHASE],
      },
    ],
  },
 /* "Xandire's Truthseekers": {
    effects: [
      {
        name: `Blazing Arrows`,
        desc: `If the unmodified hit roll for an attack made with this unit's Stormcaller Bow is 6, the target suffers 2 mortal wounds and the attack sequence ends (do not make a wound roll or save roll).`,
        when: [SHOOTING_PHASE],
      },
      {
        name: `Kinetic Lodestone`,
        desc: `After an enemy unit finishes a charge move within 3" of Dhoraz Giant-fell, roll a dice. On a 3+, that unit suffers D3 mortal wounds. If that unit has a mount or is a MONSTER, it suffers 3 mortal wounds instead of D3.`,
        when: [CHARGE_PHASE],
      },
      {
        name: `Lantern Astrala`,
        desc: `Once per turn, at the end of the charge phase, you can pick 1 enemy unit within 9" of this unit. Add 1 to hit rolls for attacks made by friendly STORMCAST ETERNALS units that target that enemy unit in the following combat phase.`,
        when: [END_OF_CHARGE_PHASE],
      },
    ],
  }, */
  'Questor Soulsworn': {
    effects: [
      {
        name: `His Will Be Done - Passive`,
        desc: `Effect: While this unit is contesting a questmarked objective:  
        Add 3 to this units control score.  
        This unit has Ward (5+).`,
        when: [DURING_GAME],
      },
      {
        name: `Relictor Soulguide - Once Per Battle`,
        desc: `Declare: You can pick a friendly Knight-Questor within this units combat range to be the target. 
        Effect: Remove this unit from the battlefield and set it up again on the battlefield more than 9" from all enemy units. Then, if you picked a target, remove it from the battlefield and set it up again within this units combat range and more than 9" from all enemy units.`,
        when: [MOVEMENT_PHASE],
      },
      {
        name: `Ordained Quest - Once Per Battle`,
        desc: `Effect: Pick an objective wholly outside friendly territory. That objective is considered by you to be questmarked.`,
        when: [DURING_SETUP],
      },
    ],
  },
  'Ionus Cryptborn': {
  /*  mandatory: {
      prayers: [keyPicker(prayers, ['Lightning Tempest'])],
    }, */
    effects: [
      {
        name: `Spirit-Scouring Flames - Once Per Turn`,
        desc: `Declare: Pick an enemy unit that had any damage points allocated to it this turn by attacks made with this units Spirit-scouring Flames to be the target. 
        Effect: The target has the Soulburned keyword for the rest of the battle.`,
        when: [SHOOTING_PHASE],
        rule_sources: [meta_rule_sources.BOOK_DAWNBRINGERS_BOOK_3],
      },
      {
        name: `Battle Damaged - Passive`,
        desc: `Effect: While this unit has 10 or more damage points, the Attacks characteristic of Cthoraks Ancient Claws is 4.`,
        when: [COMBAT_PHASE],
        rule_sources: [meta_rule_sources.BOOK_DAWNBRINGERS_BOOK_3],
      },
      {
        name: `Lightning Tempest: Chant value of 5`,
        desc: `Declare: Pick a visible enemy unit within 12" of this unit to be struck by lightning, then make a chanting roll of D6. 
        Effect: Inflict D3 mortal damage on that unit, then roll a dice. On a 1-2, the sequence ends. On a 3+, pick another enemy unit within 3" of that unit to be struck by lightning and inflict D3 mortal damage on it. If the chanting roll was 10+, you can pick another enemy unit within 6" of that unit instead of 3". Keep rolling dice in this way until the sequence ends or there are no other enemy units eligible to be struck by lightning. A unit cannot be struck by lightning more than once per turn.`,
        when: [HERO_PHASE],
        rule_sources: [meta_rule_sources.BOOK_DAWNBRINGERS_BOOK_3],
      },
      {
        name: `Soulburned`,
        desc: `Declare: This unit can use this ability even if it has been destroyed. Pick any number of Soulburned enemy units to be the targets. 
        Effect: Roll a D3 for each target. On a 2+, inflict an amount of mortal damage on the target equal to the roll.`,
        when: [SHOOTING_PHASE],
        rule_sources: [meta_rule_sources.BOOK_DAWNBRINGERS_BOOK_3],
      },
    ],
  },
  'Lord-Vigilant': {
    /*  mandatory: {
        prayers: [keyPicker(prayers, ['Lightning Tempest'])],
      }, */
      effects: [
        {
          name: `Ruination Chamber - Once Per Turn - Reaction: This unit was picked as the target of a Non-Core ability`,
          desc: `Effect: Make a resistance roll of D6. On a 4+, that ability has no effect on this unit.`,
          when: [DURING_GAME],
        },
        {
          name: `Deliver Judgement - Once Per Battle`,
          desc: `Declare: Pick a friendly non-Hero Ruination Chamber unit wholly within 12" of this unit. 
          Effect: That unit can use 2 Fight abilities this phase. After the first is used, however, that unit has Strike-last for the rest of the turn.`,
          when: [COMBAT_PHASE],
          rule_sources: [meta_rule_sources.BOOK_DAWNBRINGERS_BOOK_3],
        },
      ],
    },
    'Lord-Terminos': {
      /*  mandatory: {
          prayers: [keyPicker(prayers, ['Lightning Tempest'])],
        }, */
        effects: [
          {
            name: `Ruination Chamber - Once Per Turn - Reaction: This unit was picked as the target of a Non-Core ability`,
            desc: `Effect: Make a resistance roll of D6. On a 4+, that ability has no effect on this unit.`,
            when: [DURING_GAME],
          },
          {
            name: `Memorian - Passive`,
            desc: `Effect: This units Memorian is a token. Add 3 to the control scores of friendly Ruination Chamber units wholly within 12" of this unit while its Memorian is on the battlefield. If you make an unmodified save roll of 1 for this unit, remove its Memorian from the battlefield after the Attack ability has been resolved (the damage point is still inflicted).`,
            when: [END_OF_TURN],
            rule_sources: [meta_rule_sources.BOOK_DAWNBRINGERS_BOOK_3],
          },
          {
            name: `Earn an Honourable Death - Reaction: You declared a Fight ability for this unit`,
            desc: `Effect: Pick a friendly non-Hero Ruination Chamber Infantry unit that has not used a Fight ability this turn and is within this units combat range to be the target. The target can be picked to use a Fight ability immediately after the Fight ability used by this unit has been resolved. If it is picked to do so, add 1 to hit rolls for the targets attacks for the rest of the turn.`,
            when: [COMBAT_PHASE],
            rule_sources: [meta_rule_sources.BOOK_DAWNBRINGERS_BOOK_3],
          },
        ],
      },
      'Reclusians': {
        /*  mandatory: {
            prayers: [keyPicker(prayers, ['Lightning Tempest'])],
          }, */
          effects: [
            {
              name: `Ruination Chamber - Once Per Turn - Reaction: This unit was picked as the target of a Non-Core ability`,
              desc: `Effect: Make a resistance roll of D6. On a 4+, that ability has no effect on this unit.`,
              when: [DURING_GAME],
            },
            {
              name: `Memorian Descendants - Passive`,
              desc: `Effect: This units Memorians are tokens. There are 2 Memorians for every 3 models in this unit. While any of this units Memorians are on the battlefield, add 1 to this units resistance rolls when using the Ruination Chamber ability. Each time you make an unmodified save roll of 1 for this unit, remove 1 of its Memorians from the battlefield aer the Attack ability has been resolved (the damage point is still inflicted).`,
              when: [DURING_GAME],
              rule_sources: [meta_rule_sources.BOOK_DAWNBRINGERS_BOOK_3],
            },
          ],
        },
        'ROR: Fjori`s Flamebearers': {
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
